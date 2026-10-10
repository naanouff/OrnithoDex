const ORDER_VARS: Record<string, string> = {
  Galliformes: 'var(--ordre-galliformes)',
  Ansériformes: 'var(--ordre-anseriformes)',
  Columbiformes: 'var(--ordre-columbiformes)',
  Psittaciformes: 'var(--ordre-psittaciformes)',
  Passériformes: 'var(--ordre-passeriformes)',
}

export function orderAccent(order: string): string {
  return ORDER_VARS[order] ?? 'var(--navy)'
}
