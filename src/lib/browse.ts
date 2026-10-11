import { birds } from '../data/birds'

const BROWSE_KEY = 'ornithodex.browse.ids'

export type BrowsePosition = {
  ids: string[]
  index: number
  prevId: string | null
  nextId: string | null
}

/** Persiste la liste filtrée Collection pour le parcours swipe. */
export function setBrowseIds(ids: string[]): void {
  try {
    sessionStorage.setItem(BROWSE_KEY, JSON.stringify(ids))
  } catch {
    /* sessionStorage indisponible */
  }
}

function readBrowseIds(): string[] | null {
  try {
    const raw = sessionStorage.getItem(BROWSE_KEY)
    if (!raw) return null
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed) || !parsed.every((id) => typeof id === 'string')) {
      return null
    }
    return parsed as string[]
  } catch {
    return null
  }
}

function catalogIds(): string[] {
  return birds.map((bird) => bird.id)
}

/**
 * Position dans le parcours : liste filtrée si elle contient le slug,
 * sinon catalogue complet (deep link / refresh).
 */
export function resolveBrowse(slug: string): BrowsePosition {
  const stored = readBrowseIds()
  const ids =
    stored && stored.length > 0 && stored.includes(slug) ? stored : catalogIds()
  const index = ids.indexOf(slug)
  if (index < 0) {
    const fallback = catalogIds()
    const i = fallback.indexOf(slug)
    return {
      ids: fallback,
      index: Math.max(0, i),
      prevId: i > 0 ? fallback[i - 1]! : null,
      nextId: i >= 0 && i < fallback.length - 1 ? fallback[i + 1]! : null,
    }
  }
  return {
    ids,
    index,
    prevId: index > 0 ? ids[index - 1]! : null,
    nextId: index < ids.length - 1 ? ids[index + 1]! : null,
  }
}
