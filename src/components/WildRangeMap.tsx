import type { Bird, HemisphereCode, SourceRef } from '../types/bird'
import { shortSourceLabel } from '../lib/text'

type Props = {
  bird: Bird
  sourceById: Map<string, SourceRef>
}

type RealmId = 'AM-N' | 'AM-S' | 'AF' | 'EU' | 'AS' | 'AU'

function activeRealms(hemisphere?: HemisphereCode, regions: string[] = []): Set<RealmId> {
  const active = new Set<RealmId>()
  const blob = `${hemisphere ?? ''} ${regions.join(' ')}`.toLowerCase()

  if (hemisphere === 'AM' || /amérique|america|amériques/.test(blob)) {
    active.add('AM-N')
    active.add('AM-S')
  }
  if (hemisphere === 'AF' || /afrique|africa/.test(blob)) active.add('AF')
  if (hemisphere === 'EU' || /europe/.test(blob)) active.add('EU')
  if (hemisphere === 'AS' || /asie|asia/.test(blob)) active.add('AS')
  if (hemisphere === 'AU' || /australie|océanie|oceanie|australia/.test(blob)) {
    active.add('AU')
  }
  if (hemisphere === 'multi') {
    ;(['AM-N', 'AM-S', 'AF', 'EU', 'AS', 'AU'] as RealmId[]).forEach((id) => active.add(id))
  }

  if (/amérique du nord|north america/.test(blob)) {
    active.add('AM-N')
    active.delete('AM-S')
  }
  if (/amérique du sud|south america/.test(blob)) {
    active.add('AM-S')
  }

  return active
}

function landClass(id: RealmId, active: Set<RealmId>): string {
  return active.has(id) ? 'sheet__range-land is-active' : 'sheet__range-land'
}

/** Planisphère inline — uniquement si `wildRange.regions` documentées. */
export function WildRangeMap({ bird, sourceById }: Props) {
  const range = bird.wildRange
  if (!range?.regions?.length) return null

  const active = activeRealms(range.hemisphere, range.regions)
  const hemi = range.hemisphere
  const showWest = !hemi || hemi === 'AM' || hemi === 'multi'
  const showEast = !hemi || hemi === 'multi' || (hemi !== 'AM' && hemi !== undefined)

  const srcLine = range.sourceIds.length
    ? [...new Set(range.sourceIds.map((id) => shortSourceLabel(sourceById.get(id), id)))].join(
        ' · ',
      )
    : ''

  return (
    <div className="sheet__range">
      <div className="sheet__range-maps" aria-hidden="true">
        {showWest ? (
          <svg className="sheet__range-svg" viewBox="0 0 320 320" role="img">
            <circle className="sheet__range-ocean" cx="160" cy="160" r="150" />
            <path
              className={landClass('AM-N', active)}
              d="M120 60c28-12 56 0 64 28 8 24-2 50-20 68-10 10-12 28-4 40-22 2-42-10-52-28-12-22-10-48 2-68 6-12 8-28 10-40z"
            />
            <path
              className={landClass('AM-S', active)}
              d="M150 175c16-4 28 10 30 26 4 22-6 48-20 64-12 14-14 30-6 42-18 0-32-14-36-30-6-24 0-50 12-70 6-10 12-22 20-32z"
            />
          </svg>
        ) : null}
        {showEast && range.hemisphere !== 'AM' ? (
          <svg className="sheet__range-svg" viewBox="0 0 320 320" role="img">
            <circle className="sheet__range-ocean" cx="160" cy="160" r="150" />
            <path
              className={landClass('EU', active)}
              d="M150 70c12-10 28-12 40-4 8 6 10 16 4 24-10 12-28 14-40 6-8-6-10-16-4-26z"
            />
            <path
              className={landClass('AF', active)}
              d="M145 95c18-8 42-4 52 18 8 18 4 40-6 58-6 12-8 28-2 40 6 14-2 28-18 32-20 6-40-4-48-22-10-22-8-48 2-68 6-12 8-28 4-42 8-8 12-12 16-16z"
            />
            <path
              className={landClass('AS', active)}
              d="M195 75c30-6 55 10 62 38 6 22-2 48-18 64-14 14-18 34-10 50-20 4-38-8-46-26-10-22-8-50 6-70 8-12 10-28 6-56z"
            />
            <path
              className={landClass('AU', active)}
              d="M230 210c18-4 34 8 36 24 2 14-8 26-22 28-16 2-30-8-32-22-2-14 8-26 18-30z"
            />
          </svg>
        ) : null}
      </div>
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
