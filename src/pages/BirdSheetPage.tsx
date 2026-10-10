import { Link, useParams } from 'react-router-dom'
import { BirdImage } from '../components/BirdImage'
import { WildRangeMap } from '../components/WildRangeMap'
import { getBirdById } from '../lib/birds'
import { orderAccent } from '../lib/orders'

export function BirdSheetPage() {
  const { slug = '' } = useParams()
  const bird = getBirdById(slug)

  if (!bird) {
    return (
      <main className="flex flex-1 flex-col gap-4 py-6">
        <p className="font-bold text-muted">Espèce introuvable.</p>
        <Link to="/collection" className="font-display font-semibold text-sky underline">
          Retour à la collection
        </Link>
      </main>
    )
  }

  return (
    <main className="flex flex-1 flex-col gap-4 pb-4">
      <div className="flex items-center gap-2">
        <Link
          to="/collection"
          className="font-display inline-flex min-h-11 items-center rounded-[16px] border-[2.5px] border-navy bg-white px-3 text-sm font-semibold text-navy shadow-[0_3px_0_rgb(27_54_93/0.12)]"
        >
          ← Collection
        </Link>
      </div>

      <BirdImage
        src={bird.image}
        alt={bird.commonName}
        order={bird.order}
        className="aspect-3/4 max-h-[320px] w-full rounded-[var(--radius)] border-[3px] border-navy shadow-[var(--shadow)]"
      />

      {bird.imageCredit ? (
        <p className="text-xs font-semibold text-muted">{bird.imageCredit}</p>
      ) : null}

      <header className="space-y-2">
        <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-navy">
          {bird.commonName}
        </h1>
        <p className="text-base font-bold italic text-muted">{bird.scientificName}</p>
        <div className="flex flex-wrap items-center gap-2 text-sm font-extrabold text-navy">
          <span
            className="inline-flex items-center gap-1.5 rounded-full border-2 border-navy bg-white px-2.5 py-1"
          >
            <span
              className="size-2.5 rounded-full border-2 border-navy"
              style={{ background: orderAccent(bird.order) }}
              aria-hidden
            />
            {bird.order}
          </span>
          <span className="rounded-full border-2 border-navy/30 bg-white/80 px-2.5 py-1 text-muted">
            {bird.family}
          </span>
        </div>
      </header>

      <WildRangeMap bird={bird} />

      <section aria-labelledby="points-cours" className="space-y-2">
        <h2 id="points-cours" className="font-display text-xl font-bold text-navy">
          Points de cours
        </h2>
        <ul className="space-y-2">
          {bird.coursePoints.map((point) => (
            <li
              key={`${point.level}-${point.text}`}
              className="rounded-[var(--radius-sm)] border-[2.5px] border-navy bg-white px-3 py-3 text-sm font-semibold leading-snug text-ink shadow-[0_3px_0_rgb(27_54_93/0.1)]"
            >
              <span
                className={[
                  'font-display mb-1 inline-block rounded-full px-2 py-0.5 text-xs font-bold',
                  point.level === 'programme'
                    ? 'bg-sky-soft/80 text-navy'
                    : 'bg-lime/40 text-navy',
                ].join(' ')}
              >
                {point.level}
              </span>
              <p className="mt-1">{renderInlineMarkdown(point.text)}</p>
            </li>
          ))}
        </ul>
      </section>

      {bird.audio?.[0] ? (
        <section aria-labelledby="audio-title" className="space-y-2">
          <h2 id="audio-title" className="font-display text-xl font-bold text-navy">
            Écoute
          </h2>
          {bird.audio[0].startsWith('/audio/') ? (
            <audio
              controls
              preload="metadata"
              className="w-full rounded-[var(--radius-sm)] border-[3px] border-navy bg-white p-2"
              src={bird.audio[0]}
            >
              Lecteur audio non supporté
            </audio>
          ) : null}
          <a
            href={bird.audioRemote?.[0] ?? bird.audio[0]}
            target="_blank"
            rel="noreferrer"
            className="font-display inline-flex min-h-12 w-full items-center justify-center rounded-[var(--radius-sm)] border-[3px] border-navy bg-gradient-to-b from-sky-soft to-sky px-4 text-base font-semibold text-navy-deep shadow-[0_4px_0_rgb(27_54_93/0.14)]"
          >
            {bird.audio[0].startsWith('/audio/')
              ? 'Crédit / page Xeno-canto'
              : 'Ouvrir l’enregistrement'}
          </a>
        </section>
      ) : null}

      <section aria-labelledby="sources-title" className="space-y-2 border-t-[3px] border-navy/20 pt-4">
        <h2 id="sources-title" className="font-display text-lg font-bold text-navy">
          Sources
        </h2>
        <ul className="space-y-2 text-xs font-semibold text-muted">
          {bird.sources.map((source) => (
            <li key={source.id}>
              <span className="font-bold text-navy">{source.id}</span>
              {' — '}
              {source.url ? (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky underline"
                >
                  {source.title}
                </a>
              ) : (
                source.title
              )}
              {source.publisher ? ` (${source.publisher})` : ''}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

/** Italiques markdown simples (*texte*) — pas de HTML inventé. */
function renderInlineMarkdown(text: string) {
  const parts = text.split(/(\*[^*]+\*)/g)
  return parts.map((part, index) => {
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return <em key={index}>{part.slice(1, -1)}</em>
    }
    return <span key={index}>{part}</span>
  })
}
