/**
 * Génère src/data/birds.ts depuis documentation/ornithologie/fiches-naturaliste/*.md
 * Source de vérité = fiches ; ne jamais inventer de faits ici.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

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

function splitTableRows(block) {
  return block
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.startsWith('|') && !/^\|\s*-+/.test(l) && !/^\|\s*Champ\s*\|/i.test(l) && !/^\|\s*Type\s*\|/i.test(l) && !/^\|\s*Id\s*\|/i.test(l))
}

function cells(line) {
  return line
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((c) => c.trim())
}

function extractSection(md, title) {
  const re = new RegExp(
    `## ${title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*\\n([\\s\\S]*?)(?=\\n## |$)`,
  )
  const m = md.match(re)
  return m ? m[1].trim() : ''
}

function parseIdentity(block) {
  const map = {}
  for (const line of splitTableRows(block)) {
    const [champ, valeur] = cells(line)
    if (!champ || valeur === undefined) continue
    map[champ] = valeur
  }
  const scientificName =
    map['Nom scientifique (programme)'] || map['Nom scientifique'] || ''
  return {
    scientificName,
    commonName: map['Nom commun'] || '',
    order: map['Ordre'] || '',
    family: map['Famille'] || '',
  }
}

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
  const audioCredits = []
  for (const line of splitTableRows(block)) {
    const [type, url, credit, sourceId] = cells(line)
    if (!type || !url || url === '—' || url === '-') continue
    if (/^image$/i.test(type)) {
      image = url
      imageCredit = credit || undefined
      imageSourceId = sourceId || undefined
    } else if (/^audio$/i.test(type)) {
      audio.push(url)
      if (credit || sourceId) {
        audioCredits.push({ url, credit: credit || '', sourceId: sourceId || '' })
      }
    }
  }
  return { image, imageCredit, imageSourceId, audio, audioCredits }
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

function parseSourcedSection(body) {
  if (!body) return null
  const sourceLine = body.match(/\*Sources? : ([^*]+)\.\*/)
  let text = body
  if (sourceLine) {
    text = body.slice(0, sourceLine.index).trim()
  }
  text = text.replace(/\n+/g, ' ').replace(/\s+/g, ' ').trim()
  if (!text || /^na\b/i.test(text) || text === '—' || text === '-') {
    return null
  }
  const sourceIds = []
  if (sourceLine) {
    for (const part of sourceLine[1].split(/[;,]|\bet\b/)) {
      const id = part.trim().replace(/\.$/, '')
      if (id && id !== 'na') sourceIds.push(id)
    }
  }
  return { text, sourceIds }
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
  for (const [title] of SECTION_KEYS) {
    const body = extractSection(md, title)
    const sourced = parseSourcedSection(body)
    if (sourced) sections.push(sourced)
  }

  /** @type {import('../src/types/bird.ts').Bird} */
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

  if (media.image) bird.image = media.image
  if (media.imageCredit) bird.imageCredit = media.imageCredit
  if (media.imageSourceId) bird.imageSourceId = media.imageSourceId
  if (media.audio.length) bird.audio = media.audio

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

  const birds = files.map((f) => parseFiche(path.join(fichesDir, f)))

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
  console.log(`OK — ${birds.length} espèces → ${path.relative(root, outFile)}`)
}

main()
