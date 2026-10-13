import type { Bird, HemisphereCode, SourceRef } from '../types/bird'
import { shortSourceLabel } from '../lib/text'

type Props = {
  bird: Bird
  sourceById: Map<string, SourceRef>
}

function mapSrc(hemisphere?: HemisphereCode): string {
  if (hemisphere === 'AM') return '/maps/hemisphere-west.svg'
  if (hemisphere === 'multi' || !hemisphere) return '/maps/hemisphere-world.svg'
  return '/maps/hemisphere-east.svg'
}

/** Planisphère compact — uniquement si `wildRange.regions` documentées. */
export function WildRangeMap({ bird, sourceById }: Props) {
  const range = bird.wildRange
  if (!range?.regions?.length) return null

  const srcLine = range.sourceIds.length
    ? [...new Set(range.sourceIds.map((id) => shortSourceLabel(sourceById.get(id), id)))].join(
        ' · ',
      )
    : ''

  return (
    <div className="sheet__range">
      <img
        className="sheet__range-svg"
        src={mapSrc(range.hemisphere)}
        alt=""
        width={220}
        height={140}
      />
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
