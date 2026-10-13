import { readFileSync, writeFileSync } from 'node:fs'

const src = process.argv[2]
const destTs = process.argv[3]
const destJs = process.argv[4]
const gj = JSON.parse(readFileSync(src, 'utf8'))

const realmOf = {
  Africa: 'AF',
  Europe: 'EU',
  Asia: 'AS',
  'North America': 'NA',
  'South America': 'SA',
  Oceania: 'AU',
  Antarctica: 'AQ',
}

function outerRings(geom) {
  if (!geom) return []
  if (geom.type === 'Polygon') return [geom.coordinates[0]]
  if (geom.type === 'MultiPolygon') return geom.coordinates.map((poly) => poly[0])
  return []
}

function splitAntimeridian(ring) {
  const parts = [[]]
  for (let i = 0; i < ring.length; i++) {
    const cur = ring[i]
    const prev = i > 0 ? ring[i - 1] : null
    if (prev && Math.abs(cur[0] - prev[0]) > 180) parts.push([])
    parts[parts.length - 1].push(cur)
  }
  return parts.filter((part) => part.length >= 3)
}

function toPath(ring) {
  const pts = []
  for (const [lon, lat] of ring) {
    const x = (lon + 180).toFixed(1)
    const y = (90 - lat).toFixed(1)
    const last = pts[pts.length - 1]
    if (last && last[0] === x && last[1] === y) continue
    pts.push([x, y])
  }
  if (pts.length < 3) return ''
  return `M${pts.map((p) => p.join(' ')).join('L')}Z`
}

function jsString(value) {
  return value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

const lands = []
for (const feature of gj.features) {
  const id = realmOf[feature.properties.CONTINENT]
  if (!id) continue
  const name = feature.properties.NAME_FR || feature.properties.NAME || ''
  for (const ring of outerRings(feature.geometry)) {
    for (const part of splitAntimeridian(ring)) {
      const d = toPath(part)
      if (d) lands.push({ id, name, d })
    }
  }
}

const rows = lands
  .map(
    (land) =>
      `  { id: '${land.id}', name: '${jsString(land.name)}', d: '${land.d}' },`,
  )
  .join('\n')

writeFileSync(
  destTs,
  `/** Silhouettes Natural Earth 110m (domaine public) — généré, ne pas éditer à la main. */
export type PlanisphereRealm = 'NA' | 'SA' | 'EU' | 'AF' | 'AS' | 'AU' | 'AQ'

export const PLANISPHERE_LAND: { id: PlanisphereRealm; name: string; d: string }[] = [
${rows}
]
`,
)

writeFileSync(
  destJs,
  `/** Silhouettes Natural Earth 110m — généré, ne pas éditer à la main. */
window.PLANISPHERE_LAND = [
${rows}
];
`,
)

console.log('lands', lands.length)
