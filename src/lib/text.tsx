import type { ReactNode } from 'react'
import type { SourceRef } from '../types/bird'

/** Gras / italiques markdown simples — pas de HTML inventé. */
export function renderInlineMarkdown(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g)
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return <strong key={index}>{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return <em key={index}>{part.slice(1, -1)}</em>
    }
    return <span key={index}>{part}</span>
  })
}

/** Recherche tolérante : casse + accents. */
export function foldSearch(value: string): string {
  return value
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
}

/** Libellé court pour l’élève (pas l’id technique). */
export function shortSourceLabel(
  source: SourceRef | undefined,
  fallbackId: string,
): string {
  if (!source) return fallbackId
  const blob = `${source.id} ${source.title} ${source.publisher ?? ''}`
  if (/birdlife/i.test(blob)) return 'BirdLife'
  if (/\badw\b|animal diversity/i.test(blob)) return 'ADW'
  if (/bac-pro|tcva/i.test(blob)) return 'Programme'
  if (/^media-|xeno-canto|commons/i.test(blob)) return 'Média'
  if (source.publisher?.trim()) {
    return source.publisher.replace(/\s*International\s*$/i, '').trim()
  }
  const head = source.title.split(/[—–|:(-]/)[0]?.trim()
  return head && head.length <= 28 ? head : fallbackId
}
