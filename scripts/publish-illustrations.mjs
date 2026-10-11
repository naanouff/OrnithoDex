/**
 * Convertit les illustrations validées (references/) en WebP pour l’app.
 * Source : documentation/ornithologie/prompts-visuels/references/{slug}-illustration.*
 * Dest   : public/images/illustrations/{slug}.webp
 *
 * Usage : node scripts/publish-illustrations.mjs [--slug=id] [--force]
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const srcDir = path.join(root, 'documentation/ornithologie/prompts-visuels/references')
const destDir = path.join(root, 'public/images/illustrations')
const bgOut = path.join(root, 'src/data/illustration-bg.json')
const samplePy = path.join(__dirname, 'sample-illustration-bg.py')

const args = process.argv.slice(2)
const slugArg = args.find((a) => a.startsWith('--slug='))
const onlySlug = slugArg ? slugArg.split('=')[1] : null
const force = args.includes('--force')

function toWebp(srcPath, destPath) {
  const py = `
from PIL import Image
im = Image.open(r'''${srcPath.replace(/\\/g, '/')}''')
if im.mode in ('RGBA', 'LA') or (im.mode == 'P' and 'transparency' in im.info):
    bg = Image.new('RGB', im.size, (250, 243, 227))
    rgba = im.convert('RGBA')
    bg.paste(rgba, mask=rgba.split()[-1])
    im = bg
else:
    im = im.convert('RGB')
# carré 1:1 si besoin (centré)
w, h = im.size
if w != h:
    side = max(w, h)
    canvas = Image.new('RGB', (side, side), (250, 243, 227))
    canvas.paste(im, ((side - w) // 2, (side - h) // 2))
    im = canvas
im.save(r'''${destPath.replace(/\\/g, '/')}''', 'WEBP', quality=82, method=4)
print('ok')
`
  const r = spawnSync('python', ['-c', py], { encoding: 'utf8' })
  if (r.status !== 0) {
    throw new Error(r.stderr || r.stdout || `webp failed: ${srcPath}`)
  }
}

function main() {
  fs.mkdirSync(destDir, { recursive: true })
  const files = fs
    .readdirSync(srcDir)
    .filter((f) => /-illustration\.(png|jpe?g|webp)$/i.test(f))
    .sort()

  let ok = 0
  let skipped = 0
  let missing = 0

  const bySlug = new Map()
  for (const f of files) {
    const slug = f.replace(/-illustration\.(png|jpe?g|webp)$/i, '')
    if (onlySlug && slug !== onlySlug) continue
    bySlug.set(slug, path.join(srcDir, f))
  }

  if (onlySlug && !bySlug.has(onlySlug)) {
    console.error(`Illustration introuvable pour ${onlySlug}`)
    process.exit(1)
  }

  for (const [slug, src] of bySlug) {
    const dest = path.join(destDir, `${slug}.webp`)
    if (!force && fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      const srcM = fs.statSync(src).mtimeMs
      const destM = fs.statSync(dest).mtimeMs
      if (destM >= srcM) {
        skipped++
        continue
      }
    }
    try {
      toWebp(src, dest)
      ok++
      console.log(`OK  ${slug}`)
    } catch (e) {
      missing++
      console.error(`ERR ${slug}: ${e.message}`)
    }
  }

  console.log(
    `\nPublié ${ok} · inchangé ${skipped} · erreurs ${missing} → ${path.relative(root, destDir)}`,
  )

  const bg = spawnSync('python', [samplePy, destDir, bgOut], { encoding: 'utf8' })
  if (bg.status !== 0) {
    console.error(bg.stderr || bg.stdout || 'sample-illustration-bg failed')
    process.exit(1)
  }
  process.stdout.write(bg.stdout || '')

  if (missing) process.exit(1)
}

main()
