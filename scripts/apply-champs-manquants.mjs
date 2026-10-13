/**
 * Complète UICN (déjà écrit dans Description) et mensurations ADW.
 * N’invente pas : pas de CITES, pas de captivité, pas de paraphrase libre.
 */
import { execFile } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { promisify } from 'node:util'
import { fileURLToPath } from 'node:url'

const execFileAsync = promisify(execFile)

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const fichesDir = path.resolve(__dirname, '../documentation/ornithologie/fiches-naturaliste')

const UICN_FR = {
  'Least Concern': 'Préoccupation mineure (LC)',
  'Near Threatened': 'Quasi menacé (NT)',
  Vulnerable: 'Vulnérable (VU)',
  Endangered: 'En danger (EN)',
  'Critically Endangered': 'En danger critique (CR)',
}

const CAT_RE =
  /Évalué(?:e)? \*\*(Critically Endangered|Least Concern|Near Threatened|Vulnerable|Endangered)\*\*(?:\s*\((\d{4}))?/

function section(md, title) {
  const re = new RegExp(`## ${title}\\n\\n([\\s\\S]*?)(?=\\n## |$)`)
  return md.match(re)?.[1] ?? ''
}

function birdlifeId(block) {
  const line = block.match(/\*Sources?\s*:\s*([^*]+)\*/)?.[1] ?? ''
  const ids = line.split(/[;,]/).map((s) => s.trim()).filter(Boolean)
  return ids.find((id) => id.startsWith('birdlife-')) || ids[0] || ''
}

function adwUrl(md) {
  return md.match(/https:\/\/animaldiversity\.org\/accounts\/[A-Za-z0-9_]+\/?/)?.[0] ?? null
}

function adwId(md) {
  const row = md.match(/\|\s*(adw-[a-z0-9-]+)\s*\|/)
  return row?.[1] ?? ''
}

function cmFromFrench(text) {
  const range = text.match(/(\d+(?:[.,]\d+)?)\s*[–\-]\s*(\d+(?:[.,]\d+)?)\s*cm/)
  if (range) return `${range[1].replace('.', ',')}–${range[2].replace('.', ',')} cm`
  const one = text.match(/[~≈]?\s*(\d+(?:[.,]\d+)?)\s*cm/)
  if (one) return `${one[1].replace('.', ',')} cm`
  return null
}

function plain(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#\d+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function sliceH2(html, title) {
  const re = new RegExp(
    `<h2[^>]*>\\s*${title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?</h2>([\\s\\S]*?)(?=<h2\\b|$)`,
    'i',
  )
  return plain(html.match(re)?.[1] ?? '')
}

function cmFromAdw(text) {
  const range = text.match(/(\d+(?:\.\d+)?)\s*(?:to|-|–)\s*(\d+(?:\.\d+)?)\s*cm/i)
  if (range) {
    return `${range[1].replace('.', ',')}–${range[2].replace('.', ',')} cm`
  }
  const one = text.match(/(\d+(?:\.\d+)?)\s*cm/i)
  if (one) return `${one[1].replace('.', ',')} cm`
  return null
}

function longevityFromAdw(text) {
  const parts = []
  const wild = text.match(/Status:\s*wild\s+(\d+(?:\.\d+)?)(?:\s*\(high\))?\s*years/i)
  if (wild) parts.push(`${wild[1].replace('.', ',')} ans (sauvage, maximum cité)`)
  const capRange = text.match(
    /(?:captiv\w*|captivity)[^.]{0,80}?(\d+)\s*(?:to|-|–)\s*(\d+)\s*years/i,
  )
  const capUp = text.match(/(?:captiv\w*|captivity)[^.]{0,80}?up to (\d+)\s*years/i)
  if (capRange) parts.push(`${capRange[1]}–${capRange[2]} ans (captivité)`)
  else if (capUp) parts.push(`Jusqu’à ${capUp[1]} ans (captivité)`)
  if (!parts.length) {
    const few = text.match(
      /longer than (\d+|one|two|three|four|five|six|seven|eight|nine|ten) years/i,
    )
    const nums = {
      one: '1', two: '2', three: '3', four: '4', five: '5',
      six: '6', seven: '7', eight: '8', nine: '9', ten: '10',
    }
    if (few && !/captiv/i.test(text.slice(0, text.indexOf(few[0]) + 20))) {
      const n = nums[few[1].toLowerCase()] || few[1]
      parts.push(`Peu d’individus dépassent ${n} ans (sauvage)`)
    }
  }
  return parts.length ? parts.join(' ; ') : null
}

function binomialUrl(md) {
  const name =
    md.match(/\| Nom scientifique \| ([^|]+) \|/)?.[1]?.trim() ||
    md.match(/\| Nom scientifique \(programme\) \| ([^|]+) \|/)?.[1]?.trim()
  if (!name) return null
  const parts = name.split(/\s+/)
  if (parts.length < 2) return null
  const genus = parts[0][0].toUpperCase() + parts[0].slice(1).toLowerCase()
  const species = parts[1].toLowerCase().replace(/[^a-z-]/g, '')
  if (!species) return null
  return `https://animaldiversity.org/accounts/${genus}_${species}/`
}

function uicnBlock(category, year, source) {
  return `## Statut UICN

| Champ | Valeur | Source |
|-------|--------|--------|
| Catégorie | ${category} | ${source} |
| Année évaluation | ${year || 'na'} | ${year ? source : ''} |

`
}

function mensBlock(size, sizeSrc, life, lifeSrc) {
  return `## Mensurations

| Champ | Valeur | Source |
|-------|--------|--------|
| Taille adulte | ${size || 'na'} | ${size ? sizeSrc : ''} |
| Longévité | ${life || 'na'} | ${life ? lifeSrc : ''} |

`
}

function insertBefore(md, heading, block) {
  const idx = md.indexOf(`\n## ${heading}`)
  if (idx < 0) return md
  return `${md.slice(0, idx + 1)}${block}${md.slice(idx + 1)}`
}

const cacheDir = path.join(process.env.TEMP || '/tmp', 'ornithodex-adw')
fs.mkdirSync(cacheDir, { recursive: true })

async function fetchText(url) {
  const key = Buffer.from(url).toString('base64url')
  const file = path.join(cacheDir, key)
  if (fs.existsSync(file)) return fs.readFileSync(file, 'utf8')
  try {
    const { stdout } = await execFileAsync(
      'curl.exe',
      ['-fsSL', '-A', 'OrnithoDex-docs/1.0', '--max-time', '25', url],
      { maxBuffer: 2_000_000, windowsHide: true, encoding: 'utf8' },
    )
    fs.writeFileSync(file, stdout)
    return stdout
  } catch {
    fs.writeFileSync(file, '')
    return null
  }
}

const files = fs
  .readdirSync(fichesDir)
  .filter((f) => f.endsWith('.md') && !f.startsWith('_'))

const adwCache = new Map()
const report = []

for (const file of files) {
  const full = path.join(fichesDir, file)
  let md = fs.readFileSync(full, 'utf8').replace(/\r\n/g, '\n')
  const desc = section(md, 'Description')
  const uicnMatch = desc.match(CAT_RE)
  const bl = birdlifeId(desc)
  let url = adwUrl(md)
  let aid = adwId(md)
  let newAdw = false
  if (!url) {
    const guess = binomialUrl(md)
    if (guess) {
      url = guess
      aid = `adw-${file.replace(/\.md$/, '')}`
      newAdw = true
    }
  }
  let size = cmFromFrench(desc)
  let sizeSrc = size ? bl : ''
  let life = null
  let lifeSrc = ''

  if (url) {
    if (!adwCache.has(url)) {
      const html = await fetchText(url)
      adwCache.set(url, html)
    }
    const html = adwCache.get(url)
    const pageOk = html && /<h2[^>]*>\s*Physical Description/i.test(html)
    if (html && pageOk) {
      if (newAdw && !md.includes(`| ${aid} |`)) {
        const title = plain(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? aid)
        const row = `| ${aid} | ${title} | Animal Diversity Web | | ${url} | Consulté 2026-10-13 |`
        const srcAt = md.indexOf('## Sources')
        if (srcAt >= 0) {
          const head = md.slice(0, srcAt)
          const lines = md.slice(srcAt).split('\n')
          let last = 0
          for (let i = 0; i < lines.length; i += 1) {
            if (lines[i].startsWith('|')) last = i
          }
          lines.splice(last + 1, 0, row)
          md = head + lines.join('\n')
        }
      }
      const phys = sliceH2(html, 'Physical Description')
      const span = sliceH2(html, 'Lifespan/Longevity')
      if (!size) {
        size = cmFromAdw(phys)
        if (size) sizeSrc = aid
      }
      life = longevityFromAdw(span)
      if (life) lifeSrc = aid
    }
  }

  let changed = false
  if (!md.includes('## Statut UICN') && uicnMatch && bl) {
    const block = uicnBlock(UICN_FR[uicnMatch[1]], uicnMatch[2], bl)
    const anchor = md.includes('\n## Dimorphisme sexuel')
      ? 'Dimorphisme sexuel'
      : 'Habitat d’origine'
    md = insertBefore(md, anchor, block)
    changed = true
  }

  if (!md.includes('## Mensurations') && (size || life)) {
    const block = mensBlock(size, sizeSrc, life, lifeSrc)
    const anchor = md.includes('\n## Dimorphisme sexuel')
      ? 'Dimorphisme sexuel'
      : 'Habitat d’origine'
    md = insertBefore(md, anchor, block)
    changed = true
  } else if (md.includes('## Mensurations') && (size || life)) {
    const before = md
    if (size) {
      md = md.replace(
        /\| Taille adulte \| na \| \|/,
        `| Taille adulte | ${size} | ${sizeSrc} |`,
      )
    }
    if (life) {
      md = md.replace(
        /\| Longévité \| [^|\n]+ \| [^|\n]* \|/,
        `| Longévité | ${life} | ${lifeSrc} |`,
      )
    }
    if (md !== before) changed = true
  }

  if (changed) {
    md = md.replace(
      /\*\*Dernière vérification\*\* : \d{4}-\d{2}-\d{2}/,
      '**Dernière vérification** : 2026-10-13',
    )
    fs.writeFileSync(full, md)
  }

  report.push({
    file,
    uicn: uicnMatch ? UICN_FR[uicnMatch[1]] : '',
    year: uicnMatch?.[2] || '',
    size: size || '',
    life: life || '',
    adw: Boolean(url),
    changed,
  })
}

const withUicn = report.filter((r) => r.uicn).length
const withSize = report.filter((r) => r.size).length
const withLife = report.filter((r) => r.life).length
const changed = report.filter((r) => r.changed).length
console.log(JSON.stringify({ files: report.length, withUicn, withSize, withLife, changed, adwFetched: adwCache.size }, null, 2))
fs.writeFileSync(
  path.resolve(__dirname, '../documentation/ornithologie/suivi-champs-manquants.json'),
  JSON.stringify(report, null, 2),
)
