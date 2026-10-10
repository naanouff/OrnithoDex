import type { Bird, HemisphereCode } from '../types/bird'

type Props = {
  bird: Bird
}

function mapSrc(hemisphere?: HemisphereCode): string {
  if (hemisphere === 'AM') return '/maps/hemisphere-west.svg'
  if (hemisphere === 'multi' || !hemisphere) return '/maps/hemisphere-world.svg'
  return '/maps/hemisphere-east.svg'
}

function hemisphereLabel(code?: HemisphereCode): string {
  switch (code) {
    case 'AF':
      return 'Afrique'
    case 'AU':
      return 'Océanie / Australie'
    case 'AS':
      return 'Asie'
    case 'AM':
      return 'Amériques'
    case 'EU':
      return 'Europe'
    case 'multi':
      return 'Plusieurs régions'
    default:
      return 'Non précisé'
  }
}

export function WildRangeMap({ bird }: Props) {
  const range = bird.wildRange
  const hasRegions = Boolean(range?.regions?.length)

  return (
    <section aria-labelledby="repartition-title" className="space-y-2">
      <h2 id="repartition-title" className="font-display text-xl font-bold text-navy">
        Répartition sauvage
      </h2>
      <div className="overflow-hidden rounded-[var(--radius-sm)] border-[3px] border-navy bg-white p-3 shadow-[0_4px_0_rgb(27_54_93/0.1)]">
        <img
          src={mapSrc(range?.hemisphere)}
          alt=""
          className={[
            'mx-auto h-auto w-full max-w-[220px]',
            hasRegions ? '' : 'opacity-50 grayscale',
          ].join(' ')}
        />
        {hasRegions && range ? (
          <div className="mt-3 space-y-2">
            {range.hemisphere ? (
              <p className="font-display text-center text-sm font-bold text-navy">
                {hemisphereLabel(range.hemisphere)}
              </p>
            ) : null}
            <ul className="flex flex-wrap justify-center gap-1.5">
              {range.regions.map((region) => (
                <li
                  key={region}
                  className="rounded-full border-2 border-navy bg-cream px-2.5 py-1 text-xs font-extrabold text-navy"
                >
                  {region}
                </li>
              ))}
            </ul>
            {range.summary ? (
              <p className="text-center text-xs font-semibold text-muted">{range.summary}</p>
            ) : null}
          </div>
        ) : (
          <p className="mt-3 text-center text-sm font-bold text-muted">Non documenté</p>
        )}
      </div>
    </section>
  )
}
