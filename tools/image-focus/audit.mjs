import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const focus = JSON.parse(fs.readFileSync(path.join(root, 'src/data/image-focus.json'), 'utf8'))
const birdsTs = fs.readFileSync(path.join(root, 'src/data/birds.ts'), 'utf8')

const withImage = []
const blockRe = /\{\s*"id":\s*"([^"]+)"([\s\S]*?)(?=\n  \{|\n\])/g
let m
while ((m = blockRe.exec(birdsTs))) {
  if (m[2].includes('"image":')) withImage.push(m[1])
}

let full = 0
let headOnly = 0
const missing = []
const incomplete = []

for (const id of withImage) {
  const v = focus[id]
  if (!v) {
    missing.push(id)
    continue
  }
  const head = v.head || (typeof v.x === 'number' ? { x: v.x, y: v.y } : null)
  const bbox = v.bbox
  if (head && bbox && bbox.w > 1 && bbox.h > 1) full++
  else {
    headOnly++
    incomplete.push(id)
  }
}

const orphan = Object.keys(focus).filter((id) => !withImage.includes(id))

console.log(
  JSON.stringify(
    {
      photos: withImage.length,
      focusEntries: Object.keys(focus).length,
      complete: full,
      incomplete,
      missing,
      orphan,
    },
    null,
    2,
  ),
)
