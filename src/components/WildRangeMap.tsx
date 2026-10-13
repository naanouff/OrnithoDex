import { shortSourceLabel } from '../lib/text'
import type { Bird, HemisphereCode, SourceRef } from '../types/bird'
import {
  PLANISPHERE_LAND,
  type PlanisphereRealm,
} from './planisphere-land'

type Props = {
  bird: Bird
  sourceById: Map<string, SourceRef>
}

const REALM_LABELS: Record<string, PlanisphereRealm[]> = {
  afrique: ['AF'],
  europe: ['EU'],
  asie: ['AS'],
  amerique: ['NA', 'SA'],
  ameriques: ['NA', 'SA'],
  'amerique du sud': ['SA'],
  'amerique du nord': ['NA'],
  oceanie: ['AU'],
}

const NAME_ALIASES: Record<string, string> = {
  'nouvelle-guinee': 'papouasie-nouvelle-guinee',
}

function fold(value: string): string {
  return value
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/['’]/g, '')
}

function isHemisphere(
  id: PlanisphereRealm,
  hemisphere?: HemisphereCode,
): boolean {
  if (!hemisphere || hemisphere === 'multi') return false
  if (hemisphere === 'AM') return id === 'NA' || id === 'SA'
  if (hemisphere === 'AF') return id === 'AF'
  if (hemisphere === 'EU') return id === 'EU'
  if (hemisphere === 'AS') return id === 'AS'
  if (hemisphere === 'AU') return id === 'AU'
  return false
}

function highlightFor(regions: string[], hemisphere?: HemisphereCode) {
  const labels = regions.map(fold)
  const names = new Set(labels.map((label) => NAME_ALIASES[label] ?? label))
  const realms = new Set<PlanisphereRealm>()
  for (const label of labels) {
    for (const realm of REALM_LABELS[label] ?? []) realms.add(realm)
  }
  const countryHit = PLANISPHERE_LAND.some((land) => names.has(fold(land.name)))
  const precise = countryHit || realms.size > 0
  return (land: (typeof PLANISPHERE_LAND)[number]) => {
    if (names.has(fold(land.name))) return true
    if (realms.has(land.id)) return true
    if (!precise) return isHemisphere(land.id, hemisphere)
    return false
  }
}

function formatSourceIds(
  ids: string[],
  sourceById: Map<string, SourceRef>,
): string {
  if (!ids.length) return ''
  const labels = ids.map((id) => shortSourceLabel(sourceById.get(id), id))
  return [...new Set(labels)].join(' · ')
}

/** Planisphère Natural Earth — pays ou continent déjà cités dans la fiche. */
export function WildRangeMap({ bird, sourceById }: Props) {
  const range = bird.wildRange
  if (!range?.regions?.length) return null

  const srcLine = formatSourceIds(range.sourceIds, sourceById)
  const highlighted = highlightFor(range.regions, range.hemisphere)

  return (
    <div className="sheet__range">
      <svg
        viewBox="0 0 360 180"
        role="img"
        aria-label="Planisphère — répartition documentée"
        className="sheet__range-svg"
      >
        <rect width="360" height="180" className="sheet__range-ocean" rx="4" />
        <g className="sheet__range-grid" aria-hidden="true">
          <line x1="0" y1="90" x2="360" y2="90" />
          <line x1="180" y1="0" x2="180" y2="180" />
        </g>
        {PLANISPHERE_LAND.map((land, index) => (
          <path
            key={`${land.id}-${index}`}
            d={land.d}
            className={
              highlighted(land)
                ? 'sheet__range-land is-active'
                : 'sheet__range-land'
            }
          />
        ))}
      </svg>
      <ul className="sheet__range-regions">
        {range.regions.map((region) => (
          <li key={region}>{region}</li>
        ))}
      </ul>
      {range.summary ? <p className="sheet__range-src">{range.summary}</p> : null}
      {srcLine ? <p className="sheet__range-src">{srcLine}</p> : null}
    </div>
  )
}
