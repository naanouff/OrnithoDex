const $ = (sel) => document.querySelector(sel)

const state = {
  birds: [],
  focus: {},
  index: 0,
  dirty: false,
  mode: 'bbox', // 'bbox' | 'head'
  drag: null, // { x0, y0, x1, y1 } in %
}

const listEl = $('#list')
const stageEl = $('#stage')
const stageImg = $('#stage-img')
const cross = $('#crosshair')
const boxEl = $('#bbox')
const tileImg = $('#tile-img')
const tileLabel = $('#tile-label')
const titleEl = $('#title')
const metaEl = $('#meta')
const coordsEl = $('#coords')
const statusEl = $('#status')
const statsEl = $('#stats')
const hintEl = $('#hint')
const btnPrev = $('#btn-prev')
const btnNext = $('#btn-next')
const btnSave = $('#btn-save')
const btnDownload = $('#btn-download')
const btnClear = $('#btn-clear')
const modeBbox = $('#mode-bbox')
const modeHead = $('#mode-head')

function current() {
  return state.birds[state.index] || null
}

function entryOf(id) {
  return state.focus[id] || null
}

function isLabeled(id) {
  const e = entryOf(id)
  return Boolean(e?.head && e?.bbox)
}

function labeledCount() {
  return state.birds.filter((b) => isLabeled(b.id)).length
}

function setStatus(msg, kind = '') {
  statusEl.textContent = msg
  statusEl.className = `status${kind ? ` ${kind}` : ''}`
}

function normalizeEntry(raw) {
  if (!raw || typeof raw !== 'object') return null
  let head
  if (raw.head && typeof raw.head.x === 'number') head = { ...raw.head }
  else if (typeof raw.x === 'number' && typeof raw.y === 'number') head = { x: raw.x, y: raw.y }
  if (!head) return null
  const out = { head: roundPoint(head) }
  if (raw.bbox && raw.bbox.w > 1 && raw.bbox.h > 1) {
    out.bbox = {
      x: round1(raw.bbox.x),
      y: round1(raw.bbox.y),
      w: round1(raw.bbox.w),
      h: round1(raw.bbox.h),
    }
  }
  return out
}

function round1(n) {
  return Math.round(Math.min(100, Math.max(0, n)) * 10) / 10
}

function roundPoint(p) {
  return { x: round1(p.x), y: round1(p.y) }
}

function ensureEntry(id) {
  if (!state.focus[id]) state.focus[id] = { head: { x: 50, y: 12 } }
  return state.focus[id]
}

function setMode(mode) {
  state.mode = mode
  modeBbox.classList.toggle('is-active', mode === 'bbox')
  modeHead.classList.toggle('is-active', mode === 'head')
  modeBbox.setAttribute('aria-pressed', mode === 'bbox' ? 'true' : 'false')
  modeHead.setAttribute('aria-pressed', mode === 'head' ? 'true' : 'false')
  stageEl.dataset.mode = mode
  hintEl.innerHTML =
    mode === 'bbox'
      ? 'Glisse un rectangle autour de <strong>tout l’animal</strong>, puis passe en mode Tête.'
      : 'Clique la <strong>tête</strong> (idéalement dans la bbox). Ctrl+S enregistre.'
}

function renderList() {
  listEl.innerHTML = state.birds
    .map((b, i) => {
      const e = entryOf(b.id)
      const full = isLabeled(b.id)
      const partial = Boolean(e?.head || e?.bbox)
      const cls = full ? 'on' : partial ? 'partial' : 'off'
      return `<button type="button" data-i="${i}" class="${i === state.index ? 'is-active' : ''}">
        <span>${b.commonName}</span>
        <span class="dot ${cls}" aria-hidden="true"></span>
      </button>`
    })
    .join('')
}

function containMetrics() {
  const rect = stageEl.getBoundingClientRect()
  const nw = stageImg.naturalWidth
  const nh = stageImg.naturalHeight
  if (!nw || !nh || !rect.width) return null
  const scale = Math.min(rect.width / nw, rect.height / nh)
  const dispW = nw * scale
  const dispH = nh * scale
  return {
    rect,
    nw,
    nh,
    scale,
    dispW,
    dispH,
    ox: (rect.width - dispW) / 2,
    oy: (rect.height - dispH) / 2,
  }
}

function placeCross(xPct, yPct) {
  const m = containMetrics()
  if (!m) return
  cross.style.display = 'block'
  cross.style.left = `${m.ox + (xPct / 100) * m.dispW}px`
  cross.style.top = `${m.oy + (yPct / 100) * m.dispH}px`
}

function placeBox(bbox) {
  const m = containMetrics()
  if (!m || !bbox) {
    boxEl.style.display = 'none'
    return
  }
  boxEl.style.display = 'block'
  boxEl.style.left = `${m.ox + (bbox.x / 100) * m.dispW}px`
  boxEl.style.top = `${m.oy + (bbox.y / 100) * m.dispH}px`
  boxEl.style.width = `${(bbox.w / 100) * m.dispW}px`
  boxEl.style.height = `${(bbox.h / 100) * m.dispH}px`
}

/** Même logique que src/lib/imageFocus.ts (aperçu tuile). */
function applyTileCrop(entry) {
  const nw = tileImg.naturalWidth
  const nh = tileImg.naturalHeight
  const aspect = 3 / 4
  if (!nw || !nh || !entry?.bbox) {
    tileImg.style.cssText = ''
    tileImg.style.objectFit = 'cover'
    tileImg.style.objectPosition = entry?.head
      ? `${entry.head.x}% ${entry.head.y}%`
      : '50% 12%'
    tileImg.style.width = '100%'
    tileImg.style.height = '100%'
    tileImg.style.left = '0'
    tileImg.style.top = '0'
    return
  }

  const pad = 0.08
  let bx = (entry.bbox.x / 100) * nw
  let by = (entry.bbox.y / 100) * nh
  let bw = (entry.bbox.w / 100) * nw
  let bh = (entry.bbox.h / 100) * nh
  bx = Math.max(0, bx - bw * pad)
  by = Math.max(0, by - bh * pad)
  bw = Math.min(nw - bx, bw * (1 + 2 * pad))
  bh = Math.min(nh - by, bh * (1 + 2 * pad))
  const headX = (entry.head.x / 100) * nw
  const headY = (entry.head.y / 100) * nh

  let cropW
  let cropH
  let cropX
  let cropY
  if (bw / bh > aspect) {
    cropW = bw
    cropH = bw / aspect
    cropX = bx
    cropY = by + bh / 2 - cropH / 2
  } else {
    cropH = bh
    cropW = bh * aspect
    cropY = by
    cropX = bx + bw / 2 - cropW / 2
  }
  if (headX < cropX) cropX = headX
  if (headX > cropX + cropW) cropX = headX - cropW
  if (headY < cropY) cropY = headY
  if (headY > cropY + cropH) cropY = headY - cropH
  cropX = Math.max(0, Math.min(nw - cropW, cropX))
  cropY = Math.max(0, Math.min(nh - cropH, cropY))

  tileImg.style.objectFit = 'fill'
  tileImg.style.objectPosition = '0 0'
  tileImg.style.width = `${(nw / cropW) * 100}%`
  tileImg.style.height = `${(nh / cropH) * 100}%`
  tileImg.style.left = `${(-cropX / cropW) * 100}%`
  tileImg.style.top = `${(-cropY / cropH) * 100}%`
  tileImg.style.maxWidth = 'none'
  tileImg.style.maxHeight = 'none'
  tileImg.style.position = 'absolute'
}

function applyFocusVisual(bird) {
  const entry = entryOf(bird.id)
  const dragBox = state.drag ? dragToBBox(state.drag) : null
  const bbox = dragBox || entry?.bbox

  if (entry?.head) placeCross(entry.head.x, entry.head.y)
  else cross.style.display = 'none'

  placeBox(bbox)
  applyTileCrop(entry ? { head: entry.head, bbox: entry.bbox } : null)

  const parts = []
  if (entry?.bbox) parts.push(`BBox ${entry.bbox.w.toFixed(0)}×${entry.bbox.h.toFixed(0)}%`)
  if (entry?.head) parts.push(`Tête ${entry.head.x.toFixed(1)}×${entry.head.y.toFixed(1)}%`)
  coordsEl.textContent = parts.length
    ? parts.join(' · ')
    : 'Trace la bbox, puis marque la tête'
}

function dragToBBox(d) {
  const x = Math.min(d.x0, d.x1)
  const y = Math.min(d.y0, d.y1)
  const w = Math.abs(d.x1 - d.x0)
  const h = Math.abs(d.y1 - d.y0)
  if (w < 2 || h < 2) return null
  return { x: round1(x), y: round1(y), w: round1(w), h: round1(h) }
}

function showBird(i) {
  if (!state.birds.length) return
  state.index = Math.max(0, Math.min(state.birds.length - 1, i))
  state.drag = null
  const bird = current()
  titleEl.textContent = bird.commonName
  metaEl.textContent = `${bird.order} · ${bird.id}`
  tileLabel.textContent = bird.commonName
  stageImg.src = bird.image
  tileImg.src = bird.image
  statsEl.textContent = `${labeledCount()} / ${state.birds.length} complètes · #${state.index + 1}`
  renderList()
  btnPrev.disabled = state.index === 0
  btnNext.disabled = state.index >= state.birds.length - 1
  const activate = () => applyFocusVisual(bird)
  if (stageImg.complete && stageImg.naturalWidth) activate()
  else stageImg.onload = activate
  if (tileImg.complete && tileImg.naturalWidth) applyTileCrop(entryOf(bird.id))
  else tileImg.onload = () => applyTileCrop(entryOf(bird.id))
}

function pctFromEvent(ev) {
  const m = containMetrics()
  if (!m) return null
  const clientX = ev.clientX ?? ev.touches?.[0]?.clientX
  const clientY = ev.clientY ?? ev.touches?.[0]?.clientY
  if (clientX == null) return null
  const x = ((clientX - m.rect.left - m.ox) / m.dispW) * 100
  const y = ((clientY - m.rect.top - m.oy) / m.dispH) * 100
  if (x < 0 || x > 100 || y < 0 || y > 100) return null
  return roundPoint({ x, y })
}

function onPointerDown(ev) {
  if (state.mode !== 'bbox') return
  const pct = pctFromEvent(ev)
  if (!pct) return
  ev.preventDefault()
  state.drag = { x0: pct.x, y0: pct.y, x1: pct.x, y1: pct.y }
  stageEl.setPointerCapture?.(ev.pointerId)
  applyFocusVisual(current())
}

function onPointerMove(ev) {
  if (!state.drag || state.mode !== 'bbox') return
  const pct = pctFromEvent(ev)
  if (!pct) return
  state.drag.x1 = pct.x
  state.drag.y1 = pct.y
  applyFocusVisual(current())
}

function onPointerUp(ev) {
  if (state.mode === 'head') {
    const pct = pctFromEvent(ev)
    if (!pct) return
    const bird = current()
    const entry = ensureEntry(bird.id)
    entry.head = pct
    state.dirty = true
    applyFocusVisual(bird)
    renderList()
    statsEl.textContent = `${labeledCount()} / ${state.birds.length} complètes · #${state.index + 1}`
    setStatus(
      entry.bbox ? 'Tête OK — Enregistrer quand prêt' : 'Tête OK — trace encore la bbox',
      entry.bbox ? 'ok' : '',
    )
    return
  }

  if (!state.drag) return
  const bbox = dragToBBox(state.drag)
  state.drag = null
  if (!bbox) {
    applyFocusVisual(current())
    return
  }
  const bird = current()
  const entry = ensureEntry(bird.id)
  entry.bbox = bbox
  state.dirty = true
  applyFocusVisual(bird)
  renderList()
  statsEl.textContent = `${labeledCount()} / ${state.birds.length} complètes · #${state.index + 1}`
  setStatus('BBox OK — passe en mode Tête', 'ok')
  setMode('head')
}

async function load() {
  const res = await fetch('/api/catalog')
  if (!res.ok) throw new Error('Catalogue indisponible')
  const data = await res.json()
  state.birds = data.birds || []
  const raw = data.focus || {}
  state.focus = {}
  for (const [id, v] of Object.entries(raw)) {
    const n = normalizeEntry(v)
    if (n) state.focus[id] = n
  }
  if (!state.birds.length) {
    setStatus('Aucune espèce avec photo dans birds.ts', 'err')
    return
  }
  setMode('bbox')
  showBird(0)
  setStatus('Prêt — trace la bounding box de l’animal', 'ok')
}

function serializeFocus() {
  const out = {}
  for (const [id, e] of Object.entries(state.focus)) {
    const n = normalizeEntry(e)
    if (!n) continue
    out[id] = n
  }
  return out
}

async function save() {
  const payload = serializeFocus()
  const res = await fetch('/api/focus', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const data = await res.json()
  if (!res.ok || !data.ok) {
    setStatus(data.error || 'Échec enregistrement', 'err')
    return
  }
  state.dirty = false
  setStatus(`Enregistré (${data.count}) → src/data/image-focus.json`, 'ok')
}

function download() {
  const blob = new Blob([`${JSON.stringify(serializeFocus(), null, 2)}\n`], {
    type: 'application/json',
  })
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = 'image-focus.json'
  a.click()
  URL.revokeObjectURL(a.href)
  setStatus('JSON téléchargé (secours)', 'ok')
}

listEl.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-i]')
  if (!btn) return
  showBird(Number(btn.dataset.i))
})

stageEl.addEventListener('pointerdown', onPointerDown)
stageEl.addEventListener('pointermove', onPointerMove)
stageEl.addEventListener('pointerup', onPointerUp)
stageEl.addEventListener('pointercancel', () => {
  state.drag = null
})

modeBbox.addEventListener('click', () => setMode('bbox'))
modeHead.addEventListener('click', () => setMode('head'))
btnPrev.addEventListener('click', () => showBird(state.index - 1))
btnNext.addEventListener('click', () => showBird(state.index + 1))
btnSave.addEventListener('click', () => save().catch((err) => setStatus(String(err), 'err')))
btnDownload.addEventListener('click', download)
btnClear.addEventListener('click', () => {
  const bird = current()
  if (!bird || !state.focus[bird.id]) return
  delete state.focus[bird.id]
  state.dirty = true
  applyFocusVisual(bird)
  renderList()
  setStatus('Label retiré — Enregistrer pour persister', '')
  setMode('bbox')
})

window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') showBird(state.index - 1)
  if (e.key === 'ArrowRight') showBird(state.index + 1)
  if (e.key === 'b' || e.key === 'B') setMode('bbox')
  if (e.key === 't' || e.key === 'T') setMode('head')
  if ((e.ctrlKey || e.metaKey) && e.key === 's') {
    e.preventDefault()
    save().catch((err) => setStatus(String(err), 'err'))
  }
})

window.addEventListener('beforeunload', (e) => {
  if (state.dirty) e.preventDefault()
})

window.addEventListener('resize', () => {
  const bird = current()
  if (bird) applyFocusVisual(bird)
})

load().catch((err) => setStatus(String(err), 'err'))
