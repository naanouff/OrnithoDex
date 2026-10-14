/**
 * Collecte AnAge + ADW pour les fiches sans section Morphologie.
 * N’écrit pas les fiches. Sortie : %TEMP%/ornithodex-research/reste.json
 */
import fs from 'node:fs'
import path from 'node:path'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'

const execFileAsync = promisify(execFile)
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname).replace(/^\/([A-Za-z]:)/, '$1'), '..')
const dir = path.join(root, 'documentation/ornithologie/fiches-naturaliste')
const outDir = path.join(process.env.TEMP || '/tmp', 'ornithodex-research')
fs.mkdirSync(outDir, { recursive: true })

function binom(scientific) {
  const parts = scientific.replace(/\*/g, '').trim().split(/\s+/)
  if (parts.length < 2) return null
  return `${parts[0]}_${parts[1]}`
}

function strip(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#160;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

async function curl(url, dest) {
  try {
    await execFileAsync(
      'curl.exe',
      ['-fsSL', '--retry', '2', '--retry-delay', '1', '--max-time', '35', '-A', 'Mozilla/5.0', '-o', dest, url],
      { windowsHide: true },
    )
    return fs.existsSync(dest) && fs.statSync(dest).size > 800
  } catch {
    return false
  }
}

async function pool(items, limit, worker) {
  const ret = new Array(items.length)
  let i = 0
  async function run() {
    while (i < items.length) {
      const idx = i++
      ret[idx] = await worker(items[idx], idx)
    }
  }
  await Promise.all(Array.from({ length: limit }, run))
  return ret
}

const files = fs
  .readdirSync(dir)
  .filter((f) => f.endsWith('.md') && f !== '_index.md')

const jobs = []
for (const file of files) {
  const md = fs.readFileSync(path.join(dir, file), 'utf8')
  if (md.includes('## Morphologie')) continue
  const sci = (md.match(/\| Nom scientifique(?: \([^)]+\))? \| ([^|]+) \|/) || [])[1]?.trim()
  if (!sci) continue
  const adw = md.match(/https:\/\/animaldiversity\.org\/accounts\/([^/\s|]+)/)
  jobs.push({
    slug: file.replace(/\.md$/, ''),
    sci,
    binom: binom(sci),
    adwSlug: adw ? adw[1] : binom(sci),
    adwKnown: Boolean(adw),
  })
}

console.log('jobs', jobs.length)

const results = await pool(jobs, 4, async (job) => {
  const anageUrl = `https://genomics.senescence.info/species/entry.php?species=${job.binom}`
  const anageFile = path.join(outDir, `anage-${job.slug}.html`)
  const anageOk = await curl(anageUrl, anageFile)
  let anage = { url: anageUrl, found: false, snippet: '' }
  if (anageOk) {
    const text = strip(fs.readFileSync(anageFile, 'utf8'))
    const found = text.includes('Maximum longevity') && !text.includes('AnAge entry not found')
    const i = text.indexOf('Maximum longevity')
    anage = {
      url: anageUrl,
      found,
      snippet: found ? text.slice(i, i + 420) : '',
    }
  }

  const adwUrl = `https://animaldiversity.org/accounts/${job.adwSlug}/`
  const adwFile = path.join(outDir, `adw-${job.slug}.html`)
  const adwOk = await curl(adwUrl, adwFile)
  let adw = { url: adwUrl, known: job.adwKnown, found: false, phys: '', length: '' }
  if (adwOk) {
    const text = strip(fs.readFileSync(adwFile, 'utf8'))
    const i = text.toLowerCase().indexOf('physical description')
    const found = i >= 0 && text.includes('Physical Description')
    const phys = found ? text.slice(i, i + 700) : ''
    const len = phys.match(/(\d[\d.,]*(?:\s*(?:to|-|–)\s*\d[\d.,]*)?\s*(?:cm|mm|centimeter))/i)
    adw = { url: adwUrl, known: job.adwKnown, found, phys, length: len ? len[0] : '' }
  }
  console.log(job.slug, 'anage', anage.found, 'adw', adw.found)
  return { ...job, anage, adw }
})

const out = path.join(outDir, 'reste.json')
fs.writeFileSync(out, JSON.stringify(results, null, 2))
console.log('wrote', out, 'anage', results.filter((r) => r.anage.found).length, 'adw', results.filter((r) => r.adw.found).length)
