/**
 * Rapatrie images Commons + audio Xeno-canto dans public/
 * Usage : node scripts/fetch-media.mjs [--limit=N] [--slug=id]
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const birdsPath = path.join(root, 'src/data/birds.ts')
const imgDir = path.join(root, 'public/images/birds')
const audioDir = path.join(root, 'public/audio/birds')
const manifestPath = path.join(root, 'public/media-manifest.json')

const UA =
  'OrnithoDex/0.1 (https://github.com/naanouff/OrnithoDex; pedagogical BAC PRO TCVA)'

const args = process.argv.slice(2)
const limitArg = args.find((a) => a.startsWith('--limit='))
const slugArg = args.find((a) => a.startsWith('--slug='))
const limit = limitArg ? Number(limitArg.split('=')[1]) : Infinity
const onlySlug = slugArg ? slugArg.split('=')[1] : null

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

function loadBirds() {
  const raw = fs.readFileSync(birdsPath, 'utf8')
  const marker = 'export const birds'
  const from = raw.indexOf(marker)
  if (from < 0) throw new Error('birds export introuvable')
  const eq = raw.indexOf('=', from)
  const arrStart = raw.indexOf('[', eq)
  if (arrStart < 0) throw new Error('tableau birds introuvable')
  return JSON.parse(raw.slice(arrStart))
}

function commonsFilePathUrl(wikiUrl) {
  const m = wikiUrl.match(/\/wiki\/File:(.+)$/i)
  if (!m) return wikiUrl
  const file = decodeURIComponent(m[1].replace(/_/g, ' '))
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=1200`
}

function xcId(pageUrl) {
  const m = pageUrl.match(/xeno-canto\.org\/(\d+)/i)
  return m ? m[1] : null
}

async function fetchBuffer(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': UA, Accept: '*/*' },
    redirect: 'follow',
  })
  if (!res.ok) throw new Error(`HTTP ${res.status} ${url}`)
  const buf = Buffer.from(await res.arrayBuffer())
  const type = res.headers.get('content-type') || ''
  return { buf, type, finalUrl: res.url }
}

function extFromType(type, fallback) {
  if (type.includes('jpeg') || type.includes('jpg')) return '.jpg'
  if (type.includes('png')) return '.png'
  if (type.includes('webp')) return '.webp'
  if (type.includes('gif')) return '.gif'
  if (type.includes('mpeg') || type.includes('mp3')) return '.mp3'
  if (type.includes('ogg')) return '.ogg'
  if (type.includes('wav')) return '.wav'
  return fallback
}

function toWebp(srcPath, destPath) {
  const py = `
from PIL import Image
im = Image.open(r'''${srcPath.replace(/\\/g, '/')}''').convert('RGB')
im.save(r'''${destPath.replace(/\\/g, '/')}''', 'WEBP', quality=82, method=4)
print('ok')
`
  const r = spawnSync('python', ['-c', py], { encoding: 'utf8' })
  return r.status === 0
}

async function downloadImage(bird, manifest) {
  if (!bird.image) {
    manifest[bird.id] = { ...manifest[bird.id], image: { status: 'skip', reason: 'no-url' } }
    return
  }
  const dest = path.join(imgDir, `${bird.id}.webp`)
  if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
    manifest[bird.id] = {
      ...manifest[bird.id],
      image: { status: 'cached', path: `/images/birds/${bird.id}.webp`, source: bird.image },
    }
    return
  }

  const url = commonsFilePathUrl(bird.image)
  const { buf, type } = await fetchBuffer(url)
  const tmpExt = extFromType(type, '.jpg')
  const tmp = path.join(imgDir, `${bird.id}.tmp${tmpExt}`)
  fs.writeFileSync(tmp, buf)

  let ok = toWebp(tmp, dest)
  if (!ok) {
    // fallback: keep original extension
    const fallback = path.join(imgDir, `${bird.id}${tmpExt}`)
    fs.renameSync(tmp, fallback)
    manifest[bird.id] = {
      ...manifest[bird.id],
      image: {
        status: 'ok-raw',
        path: `/images/birds/${bird.id}${tmpExt}`,
        source: bird.image,
      },
    }
    return
  }
  fs.unlinkSync(tmp)
  manifest[bird.id] = {
    ...manifest[bird.id],
    image: {
      status: 'ok',
      path: `/images/birds/${bird.id}.webp`,
      source: bird.image,
      bytes: fs.statSync(dest).size,
    },
  }
}

async function downloadAudio(bird, manifest) {
  const page = bird.audio?.[0]
  if (!page) {
    manifest[bird.id] = { ...manifest[bird.id], audio: { status: 'skip', reason: 'no-url' } }
    return
  }
  const id = xcId(page)
  if (!id) {
    manifest[bird.id] = { ...manifest[bird.id], audio: { status: 'error', reason: 'bad-xc-url' } }
    return
  }
  const dest = path.join(audioDir, `${bird.id}.mp3`)
  if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
    manifest[bird.id] = {
      ...manifest[bird.id],
      audio: { status: 'cached', path: `/audio/birds/${bird.id}.mp3`, source: page },
    }
    return
  }

  // Téléchargement direct (API v2 retirée ; v3 nécessite une clé compte).
  const { buf, type } = await fetchBuffer(
    `https://www.xeno-canto.org/${id}/download`,
  )

  if (!isAudioBuffer(buf)) {
    // Souvent : enregistrement « restricted » (HTML ~15 Ko) — on garde l’URL distante.
    manifest[bird.id] = {
      ...manifest[bird.id],
      audio: {
        status: 'restricted',
        source: page,
        note: 'Téléchargement XC indisponible (restricted ou HTML) — embed distant',
      },
    }
    return
  }

  const ext = extFromType(type, isWav(buf) ? '.wav' : '.mp3')
  const out = path.join(audioDir, `${bird.id}${ext}`)
  fs.writeFileSync(out, buf)
  manifest[bird.id] = {
    ...manifest[bird.id],
    audio: {
      status: 'ok',
      path: `/audio/birds/${path.basename(out)}`,
      source: page,
      bytes: buf.length,
    },
  }
}

function isWav(buf) {
  return (
    buf.length > 12 &&
    buf[0] === 0x52 &&
    buf[1] === 0x49 &&
    buf[2] === 0x46 &&
    buf[3] === 0x46
  )
}

function isAudioBuffer(buf) {
  if (!buf || buf.length < 1000) return false
  // ID3… / MPEG frame sync / RIFF WAVE / OggS
  if (buf[0] === 0x49 && buf[1] === 0x44 && buf[2] === 0x33) return true
  if (buf[0] === 0xff && (buf[1] & 0xe0) === 0xe0) return true
  if (isWav(buf)) return true
  if (buf[0] === 0x4f && buf[1] === 0x67 && buf[2] === 0x67 && buf[3] === 0x53) {
    return true
  }
  return false
}

async function main() {
  fs.mkdirSync(imgDir, { recursive: true })
  fs.mkdirSync(audioDir, { recursive: true })

  let birds = loadBirds()
  if (onlySlug) birds = birds.filter((b) => b.id === onlySlug)
  birds = birds.slice(0, limit)

  const manifest = fs.existsSync(manifestPath)
    ? JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
    : {}

  let i = 0
  for (const bird of birds) {
    i += 1
    process.stdout.write(`[${i}/${birds.length}] ${bird.id} … `)
    try {
      await downloadImage(bird, manifest)
      await sleep(350)
      await downloadAudio(bird, manifest)
      await sleep(450)
      const img = manifest[bird.id]?.image?.status
      const aud = manifest[bird.id]?.audio?.status
      console.log(`img=${img} audio=${aud}`)
    } catch (err) {
      console.log(`FAIL ${err.message}`)
      manifest[bird.id] = {
        ...manifest[bird.id],
        error: String(err.message || err),
      }
    }
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))
  }

  console.log(`Manifest → ${path.relative(root, manifestPath)}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
