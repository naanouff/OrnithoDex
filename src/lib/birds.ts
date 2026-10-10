import { birds } from '../data/birds'
import type { Bird } from '../types/bird'

export function getBirdById(id: string): Bird | undefined {
  return birds.find((bird) => bird.id === id)
}

export function listOrders(): string[] {
  return [...new Set(birds.map((bird) => bird.order))].sort((a, b) =>
    a.localeCompare(b, 'fr'),
  )
}

export function listFamilies(order?: string): string[] {
  const pool = order ? birds.filter((bird) => bird.order === order) : birds
  return [...new Set(pool.map((bird) => bird.family))].sort((a, b) =>
    a.localeCompare(b, 'fr'),
  )
}
