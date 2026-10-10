/**
 * Serveur local — outil de labellisation focus tête (hors app React).
 * Usage : npm run focus:tool → http://127.0.0.1:4177
 */
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '../..')
const TOOL_DIR = __dirname
const FOCUS_PATH = path.join(ROOT, 'src/data/image-focus.json')
const BIRDS_TS = path.join(ROOT, 'src/data/birds.ts')
const IMAGES_DIR = path.join(ROOT, 'public/images/birds')
const PORT = Number(process.env.FOCUS_PORT || 4177)
const HOST = '127.0.0.1'

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
}

function readFocus() {
  try {
    return JSON.parse(fs.readFileSync(FOCUS_PATH, 'utf8'))
  } catch {
    return {}
  }
}

function writeFocus(data) {
  const sorted = Object.fromEntries(
    Object.entries(data).sort(([a], [b]) => a.localeCompare(b)),
  )
  fs.writeFileSync(FOCUS_PATH, `${JSON.stringify(sorted, null, 2)}\n`, 'utf8')
}

/** Catalogue léger depuis birds.ts (pas d’import TS). */
function buildCatalog() {
  const src = fs.readFileSync(BIRDS_TS, 'utf8')
  const birds = []
  const blockRe = /\{\s*"id":\s*"([^"]+)"([\s\S]*?)(?=\n  \{|\n\])/g
  let m
  while ((m = blockRe.exec(src))) {
    const id = m[1]
    const body = m[2]
    const common = body.match(/"commonName":\s*"([^"]+)"/)?.[1] || id
    const order = body.match(/"order":\s*"([^"]+)"/)?.[1] || ''
    const image = body.match(/"image":\s*"([^"]+)"/)?.[1]
    if (!image) continue
    birds.push({ id, commonName: common, order, image })
  }
  return birds
}

function send(res, status, body, type = 'text/plain; charset=utf-8') {
  res.writeHead(status, {
    'Content-Type': type,
    'Cache-Control': 'no-store',
  })
  res.end(body)
}

function sendJson(res, status, obj) {
  send(res, status, JSON.stringify(obj), 'application/json; charset=utf-8')
}

function safeJoin(base, requestPath) {
  const cleaned = path.normalize(requestPath).replace(/^(\.\.[/\\])+/, '')
  const full = path.join(base, cleaned)
  if (!full.startsWith(base)) return null
  return full
}

function serveFile(res, filePath) {
  if (!filePath || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    send(res, 404, 'Not found')
    return
  }
  const ext = path.extname(filePath).toLowerCase()
  send(res, 200, fs.readFileSync(filePath), MIME[ext] || 'application/octet-stream')
}

async function readBody(req) {
  const chunks = []
  for await (const chunk of req) chunks.push(chunk)
  return Buffer.concat(chunks).toString('utf8')
}

const catalog = buildCatalog()

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || '/', `http://${HOST}:${PORT}`)
  const { pathname } = url

  if (req.method === 'GET' && pathname === '/api/catalog') {
    sendJson(res, 200, { birds: catalog, focus: readFocus() })
    return
  }

  if (req.method === 'GET' && pathname === '/api/focus') {
    sendJson(res, 200, readFocus())
    return
  }

  if (req.method === 'POST' && pathname === '/api/focus') {
    try {
      const body = JSON.parse(await readBody(req))
      if (!body || typeof body !== 'object' || Array.isArray(body)) {
        sendJson(res, 400, { ok: false, error: 'JSON objet attendu' })
        return
      }
      writeFocus(body)
      sendJson(res, 200, { ok: true, path: 'src/data/image-focus.json', count: Object.keys(body).length })
    } catch (err) {
      sendJson(res, 400, { ok: false, error: String(err?.message || err) })
    }
    return
  }

  if (pathname.startsWith('/images/birds/')) {
    const rel = pathname.slice('/images/birds/'.length)
    serveFile(res, safeJoin(IMAGES_DIR, rel))
    return
  }

  if (pathname === '/' || pathname === '/index.html') {
    serveFile(res, path.join(TOOL_DIR, 'index.html'))
    return
  }

  const toolFile = safeJoin(TOOL_DIR, pathname.slice(1))
  if (toolFile && toolFile.startsWith(TOOL_DIR) && fs.existsSync(toolFile)) {
    serveFile(res, toolFile)
    return
  }

  send(res, 404, 'Not found')
})

server.listen(PORT, HOST, () => {
  console.log(`Focus tool (local) → http://${HOST}:${PORT}`)
  console.log(`Écriture → ${path.relative(ROOT, FOCUS_PATH)}`)
  console.log(`${catalog.length} espèces avec photo`)
  console.log('Hors application React — Ctrl+C pour quitter')
})
