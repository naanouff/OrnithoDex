import type { CSSProperties } from 'react'
import focusMap from '../data/image-focus.json'

export type ImagePoint = { x: number; y: number }

export type ImageBBox = {
  /** Coin haut-gauche, % de la largeur image */
  x: number
  /** Coin haut-gauche, % de la hauteur image */
  y: number
  w: number
  h: number
}

/** Entrée labellisée : tête + bbox animal (optionnelle). */
export type ImageFocusEntry = {
  head: ImagePoint
  bbox?: ImageBBox
}

/** Défaut : tête haute sans bbox. */
export const DEFAULT_IMAGE_FOCUS: ImageFocusEntry = {
  head: { x: 50, y: 12 },
}

type LegacyPoint = { x: number; y: number; bbox?: ImageBBox; head?: ImagePoint }

export function normalizeFocusEntry(raw: unknown): ImageFocusEntry | undefined {
  if (!raw || typeof raw !== 'object') return undefined
  const o = raw as LegacyPoint

  let head: ImagePoint | undefined
  if (o.head && typeof o.head.x === 'number' && typeof o.head.y === 'number') {
    head = { x: clampPercent(o.head.x), y: clampPercent(o.head.y) }
  } else if (typeof o.x === 'number' && typeof o.y === 'number') {
    head = { x: clampPercent(o.x), y: clampPercent(o.y) }
  }
  if (!head) return undefined

  const entry: ImageFocusEntry = { head }
  if (o.bbox && isValidBBox(o.bbox)) {
    entry.bbox = {
      x: clampPercent(o.bbox.x),
      y: clampPercent(o.bbox.y),
      w: clampPercent(o.bbox.w),
      h: clampPercent(o.bbox.h),
    }
  }
  return entry
}

export function getImageFocus(birdId?: string): ImageFocusEntry {
  if (!birdId) return DEFAULT_IMAGE_FOCUS
  const raw = (focusMap as Record<string, unknown>)[birdId]
  return normalizeFocusEntry(raw) ?? DEFAULT_IMAGE_FOCUS
}

export function focusToObjectPosition(entry: ImageFocusEntry): string {
  return `${entry.head.x}% ${entry.head.y}%`
}

const COVER_FALLBACK = (entry: ImageFocusEntry): CSSProperties => ({
  objectFit: 'cover',
  objectPosition: focusToObjectPosition(entry),
  width: '100%',
  height: '100%',
  left: 0,
  top: 0,
  right: 'auto',
  bottom: 'auto',
  maxWidth: 'none',
  maxHeight: 'none',
})

/**
 * Crop en pixels, une seule échelle (pas d’étirement).
 * La bbox (+ marge) couvre le cadre réel ; la tête reste dans le cadre.
 * Sans mesures ou sans bbox → object-fit cover.
 */
export function focusToCropStyle(
  entry: ImageFocusEntry,
  naturalW: number,
  naturalH: number,
  containerW = 0,
  containerH = 0,
): CSSProperties {
  if (!naturalW || !naturalH || !entry.bbox || containerW < 2 || containerH < 2) {
    return COVER_FALLBACK(entry)
  }

  const containerAspect = containerW / containerH
  const pad = 0.08
  let bx = (entry.bbox.x / 100) * naturalW
  let by = (entry.bbox.y / 100) * naturalH
  let bw = (entry.bbox.w / 100) * naturalW
  let bh = (entry.bbox.h / 100) * naturalH

  bx = Math.max(0, bx - bw * pad)
  by = Math.max(0, by - bh * pad)
  bw = Math.min(naturalW - bx, bw * (1 + 2 * pad))
  bh = Math.min(naturalH - by, bh * (1 + 2 * pad))

  const headX = (entry.head.x / 100) * naturalW
  const headY = (entry.head.y / 100) * naturalH

  let cropW: number
  let cropH: number
  let cropX: number
  let cropY: number

  if (bw / bh > containerAspect) {
    cropW = bw
    cropH = bw / containerAspect
    cropX = bx
    cropY = by + bh / 2 - cropH / 2
  } else {
    cropH = bh
    cropW = bh * containerAspect
    cropY = by
    cropX = bx + bw / 2 - cropW / 2
  }

  if (headX < cropX) cropX = headX
  if (headX > cropX + cropW) cropX = headX - cropW
  if (headY < cropY) cropY = headY
  if (headY > cropY + cropH) cropY = headY - cropH

  cropX = Math.max(0, Math.min(naturalW - cropW, cropX))
  cropY = Math.max(0, Math.min(naturalH - cropH, cropY))
  if (cropW > naturalW) {
    cropW = naturalW
    cropH = naturalW / containerAspect
    cropX = 0
    cropY = Math.max(0, Math.min(naturalH - cropH, headY - cropH * 0.35))
  }
  if (cropH > naturalH) {
    cropH = naturalH
    cropW = naturalH * containerAspect
    cropY = 0
    cropX = Math.max(0, Math.min(naturalW - cropW, headX - cropW * 0.5))
  }

  if (cropW < 1 || cropH < 1) return COVER_FALLBACK(entry)

  const scale = Math.max(containerW / cropW, containerH / cropH)
  return {
    objectFit: 'fill',
    objectPosition: '0 0',
    width: naturalW * scale,
    height: naturalH * scale,
    left: (containerW - cropW * scale) / 2 - cropX * scale,
    top: (containerH - cropH * scale) / 2 - cropY * scale,
    right: 'auto',
    bottom: 'auto',
    maxWidth: 'none',
    maxHeight: 'none',
  }
}

function isValidBBox(b: ImageBBox): boolean {
  return (
    typeof b.x === 'number' &&
    typeof b.y === 'number' &&
    typeof b.w === 'number' &&
    typeof b.h === 'number' &&
    b.w > 1 &&
    b.h > 1 &&
    b.x >= 0 &&
    b.y >= 0 &&
    b.x + b.w <= 100.5 &&
    b.y + b.h <= 100.5
  )
}

function clampPercent(n: number): number {
  return Math.min(100, Math.max(0, Math.round(n * 10) / 10))
}
