/**
 * Génère src/data/birds.ts depuis documentation/ornithologie/fiches-naturaliste/*.md
 * Source de vérité = fiches ; ne jamais inventer de faits ici.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  cells,
  extractSection,
  extractWildRange,
  parseIdentity,
  parseSourcedSection,
  splitTableRows,
  stripMarkdownLite,
} from './lib/fiche-parse.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const fichesDir = path.join(root, 'documentation/ornithologie/fiches-naturaliste')
const outFile = path.join(root, 'src/data/birds.ts')

const SECTION_KEYS = [
  ['Description', 'description'],
  ['Dimorphisme sexuel', 'dimorphisme'],
  ['Habitat d’origine', 'habitat'],
  ["Habitat d'origine", 'habitat'],
  ['Régime alimentaire', 'regime'],
  ['Comportement', 'comportement'],
  ['Chant et vocalisations', 'chant'],
]

function parseCoursePoints(block) {
  const points = []
  for (const line of block.split('\n')) {
    const m = line.match(/^- \*\*\[(programme|sourcé)\]\*\*\s+(.+)$/)
    if (!m) continue
    points.push({ level: m[1], text: m[2].trim() })
  }
  return points
}

function parseMedia(block) {
  let image
  let imageCredit
  let imageSourceId
  const audio = []
  for (const line of splitTableRows(block)) {
    const [type, url, credit, sourceId] = cells(line)
    if (!type || !url || url === '—' || url === '-') continue
    if (/^image$/i.test(type)) {
      image = url
      imageCredit = credit || undefined
      imageSourceId = sourceId || undefined
    } else if (/^audio$/i.test(type)) {
      audio.push(url)
    }
  }
  return { image, imageCredit, imageSourceId, audio }
}

function parseSources(block) {
  const sources = []
  for (const line of splitTableRows(block)) {
    const [id, title, publisher, year, url, note] = cells(line)
    if (!id || !title) continue
    const ref = { id, title }
    if (publisher) ref.publisher = publisher
    if (year) ref.year = year
    if (url) ref.url = url
    if (note) ref.note = note
    sources.push(ref)
  }
  return sources
}

function parseRepartitionTable(block) {
  if (!block) return null
  const map = {}
  for (const line of splitTableRows(block)) {
    const [champ, valeur, source] = cells(line)
    if (!champ || !valeur || valeur === 'na' || valeur === '—') continue
    map[champ.toLowerCase()] = { valeur, source }
  }
  const regionsRaw =
    map['régions / pays']?.valeur ||
    map['regions / pays']?.valeur ||
    map['régions']?.valeur
  if (!regionsRaw) return null
  const regions = regionsRaw
    .split(/[,;]/)
    .map((r) => r.trim())
    .filter(Boolean)
  if (!regions.length) return null
  const hemRaw = (map['hémisphère / realm']?.valeur || map['hemisphere / realm']?.valeur || '')
    .trim()
    .toUpperCase()
  const allowed = new Set(['AF', 'AU', 'AS', 'AM', 'EU', 'MULTI'])
  const hemisphere = allowed.has(hemRaw)
    ? hemRaw === 'MULTI'
      ? 'multi'
      : hemRaw
    : undefined
  const sourceIds = []
  for (const row of Object.values(map)) {
    if (row.source) sourceIds.push(row.source)
  }
  return {
    regions,
    ...(hemisphere ? { hemisphere } : {}),
    ...(map['note']?.valeur ? { summary: map['note'].valeur } : {}),
    sourceIds: [...new Set(sourceIds)],
  }
}

function findLocalMedia(slug, kind, exts) {
  const dir = path.join(root, 'public', kind, 'birds')
  for (const ext of exts) {
    const file = path.join(dir, `${slug}${ext}`)
    if (fs.existsSync(file) && fs.statSync(file).size > 500) {
      return `/${kind}/birds/${slug}${ext}`
    }
  }
  return undefined
}

function findIllustration(slug) {
  const file = path.join(root, 'public/images/illustrations', `${slug}.webp`)
  if (fs.existsSync(file) && fs.statSync(file).size > 500) {
    return `/images/illustrations/${slug}.webp`
  }
  return undefined
}

function loadIllustrationBg() {
  const file = path.join(root, 'src/data/illustration-bg.json')
  if (!fs.existsSync(file)) return {}
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'))
  } catch {
    return {}
  }
}

function parseFiche(filePath) {
  const md = fs.readFileSync(filePath, 'utf8').replace(/\r\n/g, '\n')
  const slugMatch = md.match(/\*\*Slug\*\*\s*:\s*`([^`]+)`/)
  const statusMatch = md.match(/\*\*Statut documentation\*\*\s*:\s*`([^`]+)`/)
  if (!slugMatch) throw new Error(`Slug manquant: ${filePath}`)

  const identity = parseIdentity(extractSection(md, 'Identité'))
  const courseRaw = parseCoursePoints(extractSection(md, 'Points de cours à retenir'))
  const media = parseMedia(extractSection(md, 'Médias'))
  const sources = parseSources(extractSection(md, 'Sources'))

  const biologyIds = sources
    .map((s) => s.id)
    .filter((id) => id !== 'bac-pro-tcva-liste' && !id.startsWith('media-'))

  const coursePoints = courseRaw.map((p) => ({
    level: p.level,
    text: p.text,
    sourceIds:
      p.level === 'programme'
        ? ['bac-pro-tcva-liste']
        : biologyIds.length
          ? biologyIds
          : ['bac-pro-tcva-liste'],
  }))

  const sections = []
  const rangeTexts = []
  const rangeSourceIds = []
  for (const [title] of SECTION_KEYS) {
    const body = extractSection(md, title)
    const sourced = parseSourcedSection(body)
    if (sourced) {
      sections.push(sourced)
      if (title.startsWith('Description') || title.startsWith('Habitat')) {
        rangeTexts.push(sourced.text)
        rangeSourceIds.push(...sourced.sourceIds)
      }
    }
  }

  const fromTable = parseRepartitionTable(extractSection(md, 'Répartition sauvage'))
  const fromText = extractWildRange(rangeTexts.map(stripMarkdownLite), rangeSourceIds)
  const wildRange = fromTable || fromText

  const bird = {
    id: slugMatch[1],
    scientificName: identity.scientificName,
    commonName: identity.commonName,
    order: identity.order,
    family: identity.family,
    programSourceId: 'bac-pro-tcva-liste',
    sheet: {
      status: statusMatch?.[1] || 'liste_seule',
      sections,
    },
    coursePoints,
    sources,
  }

  if (wildRange) bird.wildRange = wildRange

  if (media.imageCredit) bird.imageCredit = media.imageCredit
  if (media.imageSourceId) bird.imageSourceId = media.imageSourceId

  const localImg = findLocalMedia(bird.id, 'images', ['.webp', '.jpg', '.jpeg', '.png'])
  const localAud = findLocalMedia(bird.id, 'audio', ['.mp3', '.ogg', '.wav'])
  const illustration = findIllustration(bird.id)

  if (localImg) {
    bird.image = localImg
    if (media.image) bird.imageRemote = media.image
  } else if (media.image) {
    bird.image = media.image
  }

  if (illustration) bird.illustration = illustration

  if (localAud) {
    bird.audio = [localAud]
    if (media.audio.length) bird.audioRemote = media.audio
  } else if (media.audio.length) {
    bird.audio = media.audio
  }

  if (!bird.scientificName || !bird.commonName || !bird.order || !bird.family) {
    throw new Error(`Identité incomplète: ${bird.id}`)
  }
  if (!bird.coursePoints.length) {
    throw new Error(`Points de cours absents: ${bird.id}`)
  }

  return bird
}

function main() {
  const files = fs
    .readdirSync(fichesDir)
    .filter((f) => f.endsWith('.md') && f !== '_index.md')
    .sort()

  const illustrationBg = loadIllustrationBg()
  const birds = files.map((f) => {
    const bird = parseFiche(path.join(fichesDir, f))
    const bg = illustrationBg[bird.id]
    if (bird.illustration && typeof bg === 'string' && /^#[0-9a-fA-F]{6}$/.test(bg)) {
      bird.illustrationBg = bg.toLowerCase()
    }
    return bird
  })
  const withRange = birds.filter((b) => b.wildRange?.regions?.length).length
  const withBg = birds.filter((b) => b.illustrationBg).length

  const header = `/* eslint-disable */
/**
 * Dataset généré — ne pas éditer à la main.
 * Source : documentation/ornithologie/fiches-naturaliste/*.md
 * Régénérer : npm run data:birds
 */
import type { Bird } from '../types/bird'

`

  const body = `export const birds: Bird[] = ${JSON.stringify(birds, null, 2)}\n`

  fs.writeFileSync(outFile, header + body, 'utf8')
  console.log(
    `OK — ${birds.length} espèces (${withRange} avec wildRange, ${withBg} illustrationBg) → ${path.relative(root, outFile)}`,
  )
}

main()
