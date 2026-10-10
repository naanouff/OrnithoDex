const ORDER_VARS: Record<string, string> = {
  Galliformes: 'var(--ordre-galliformes)',
  Ansériformes: 'var(--ordre-anseriformes)',
  Columbiformes: 'var(--ordre-columbiformes)',
  Psittaciformes: 'var(--ordre-psittaciformes)',
  Passériformes: 'var(--ordre-passeriformes)',
}

/** Dégradés placeholder (maquette) — utilisés si photo absente. */
const ORDER_GRADIENTS: Record<string, [string, string]> = {
  Galliformes: ['#ffd84d', '#e6a817'],
  Ansériformes: ['#7ed4f5', '#2eb7e6'],
  Columbiformes: ['#c4b5f0', '#8b7ec8'],
  Psittaciformes: ['#ffb15a', '#ff8a1f'],
  Passériformes: ['#b6e87a', '#7bcf3a'],
}

export const COLLECTION_ORDER_CHIPS = [
  { id: 'all', label: 'Tous' },
  { id: 'Galliformes', label: 'Galliformes' },
  { id: 'Ansériformes', label: 'Ansériformes' },
  { id: 'Columbiformes', label: 'Columbiformes' },
  { id: 'Psittaciformes', label: 'Psittaciformes' },
  { id: 'Passériformes', label: 'Passériformes' },
] as const

export function orderAccent(order: string): string {
  return ORDER_VARS[order] ?? 'var(--navy)'
}

export function orderMediaStyle(order: string): string {
  const [a, b] = ORDER_GRADIENTS[order] ?? ['#7ed4f5', '#2eb7e6']
  return `linear-gradient(145deg, ${a}, ${b})`
}
