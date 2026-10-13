import { useCallback, useEffect, useMemo, useRef } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { BirdImage } from '../components/BirdImage'
import { useSheetBrowseSwipe } from '../hooks/useSheetBrowseSwipe'
import { resolveBrowse } from '../lib/browse'
import { getBirdById } from '../lib/birds'
import { orderAccent, orderMediaStyle } from '../lib/orders'
import { resolveBirdImageUrl } from '../lib/media'
import { renderInlineMarkdown, shortSourceLabel } from '../lib/text'
import type { CoursePoint, SourceRef } from '../types/bird'

type LocationState = { from?: string }

export function BirdSheetPage() {
  const { slug = '' } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const from =
    typeof (location.state as LocationState | null)?.from === 'string'
      ? (location.state as LocationState).from
      : undefined
  const fromQuiz = Boolean(from?.startsWith('/entrainement/'))
  const sheetRef = useRef<HTMLDivElement>(null)
  const bird = getBirdById(slug)
  const browse = useMemo(() => resolveBrowse(slug), [slug])

  const goPrev = useCallback(() => {
    if (browse.prevId) navigate(`/espece/${browse.prevId}`, { replace: true })
  }, [browse.prevId, navigate])

  const goNext = useCallback(() => {
    if (browse.nextId) navigate(`/espece/${browse.nextId}`, { replace: true })
  }, [browse.nextId, navigate])

  useSheetBrowseSwipe(sheetRef, {
    enabled: Boolean(bird) && !fromQuiz,
    onPrev: goPrev,
    onNext: goNext,
    canPrev: Boolean(browse.prevId),
    canNext: Boolean(browse.nextId),
  })

  useEffect(() => {
    if (!bird || fromQuiz) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goPrev()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        goNext()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [bird, fromQuiz, goPrev, goNext])

  if (!bird) {
    return (
      <div className="sheet" aria-hidden="false">
        <Link to={from ?? '/collection'} className="sheet__back">
          {fromQuiz ? '← Quiz' : '← Collection'}
        </Link>
        <p className="sources">Espèce introuvable.</p>
      </div>
    )
  }

  const hasIllustration = Boolean(resolveBirdImageUrl(bird.illustration))
  const hasPhoto = Boolean(resolveBirdImageUrl(bird.image))
  const photoSource = bird.imageSourceId
    ? bird.sources.find((s) => s.id === bird.imageSourceId)
    : undefined
  const photoCredit =
    bird.imageCredit ||
    (photoSource
      ? [photoSource.title, photoSource.note].filter(Boolean).join(' — ')
      : undefined)
  const posLabel = `${browse.index + 1} / ${browse.ids.length}`
  const sections = bird.sheet.sections.filter((s) => s.text.trim().length > 0)
  const localAudio = bird.audio?.find((a) => a.startsWith('/audio/'))
  const sourceById = new Map(bird.sources.map((s) => [s.id, s]))

  return (
    <div
      className="sheet"
      ref={sheetRef}
      aria-hidden="false"
      style={{ '--ordre': orderAccent(bird.order) } as React.CSSProperties}
    >
      <Link to={from ?? '/collection'} className="sheet__back">
        {fromQuiz ? '← Quiz' : '← Collection'}
      </Link>
      {!fromQuiz ? (
        <p className="sheet__pos" aria-label="Position dans la liste">
          {posLabel}
        </p>
      ) : null}
      <p className="sheet__live" aria-live="polite">
        {bird.commonName}
      </p>
      <div
        className="sheet__media sheet__media--illustration"
        style={
          hasIllustration
            ? { background: bird.illustrationBg ?? 'var(--illustration-cream)' }
            : { background: orderMediaStyle(bird.order) }
        }
      >
        <BirdImage
          src={bird.illustration}
          variant="illustration"
          alt={`Illustration — ${bird.commonName}`}
          order={bird.order}
          loading="eager"
        />
      </div>
      <h3>{bird.commonName}</h3>
      <p className="latin">{bird.scientificName}</p>
      <div className="pills">
        <span className="pill pill--order">{bird.order}</span>
        <span className="pill">{bird.family}</span>
        {bird.iucn ? (
          <span className="pill pill--iucn" title="Statut UICN">
            UICN {bird.iucn.category}
            {bird.iucn.year ? ` (${bird.iucn.year})` : ''}
          </span>
        ) : null}
      </div>
      {bird.measurements?.adultSize || bird.measurements?.longevity ? (
        <dl className="sheet__metrics">
          {bird.measurements.adultSize ? (
            <>
              <dt>Taille adulte</dt>
              <dd>{bird.measurements.adultSize.value}</dd>
            </>
          ) : null}
          {bird.measurements.longevity ? (
            <>
              <dt>Longévité</dt>
              <dd>{bird.measurements.longevity.value}</dd>
            </>
          ) : null}
        </dl>
      ) : null}
      <ul className="points">
        {bird.coursePoints.map((point) => (
          <CoursePointItem
            key={`${point.level}-${point.text}`}
            point={point}
            sourceById={sourceById}
          />
        ))}
      </ul>
      {localAudio ? (
        <div className="sheet__audio">
          <p className="sheet__audio-label">Écouter</p>
          <audio controls preload="metadata" src={localAudio}>
            Lecteur audio non supporté
          </audio>
        </div>
      ) : null}
      {sections.length > 0 ? (
        <details className="sheet__more">
          <summary>En savoir plus</summary>
          <div className="sheet__sections">
            {sections.map((section) => (
              <section
                key={`${section.label ?? 'section'}-${section.text.slice(0, 24)}`}
                className="sheet__section"
              >
                {section.label ? <h4>{section.label}</h4> : null}
                <p>{renderInlineMarkdown(section.text)}</p>
                {section.sourceIds.length > 0 ? (
                  <p className="sheet__section-src">
                    {formatSourceIds(section.sourceIds, sourceById)}
                  </p>
                ) : null}
              </section>
            ))}
          </div>
        </details>
      ) : null}
      {hasPhoto ? (
        <figure className="sheet__photo">
          <div className="sheet__photo-frame">
            <BirdImage
              src={bird.image}
              birdId={bird.id}
              variant="photo"
              alt={`Photo — ${bird.commonName}`}
              order={bird.order}
              loading="lazy"
            />
          </div>
          <figcaption className="sheet__photo-credit">
            {photoCredit
              ? `Photo : ${photoCredit}`
              : 'Photo sourcée (voir Sources)'}
          </figcaption>
        </figure>
      ) : null}
      <SourcesBlock sources={bird.sources} />
    </div>
  )
}

function CoursePointItem({
  point,
  sourceById,
}: {
  point: CoursePoint
  sourceById: Map<string, SourceRef>
}) {
  const srcLine =
    point.level === 'sourcé' ? formatSourceIds(point.sourceIds, sourceById) : ''
  const badgeLabel = point.level === 'programme' ? 'Programme' : 'Sourcé'
  const badgeClass =
    point.level === 'programme' ? 'point__badge point__badge--programme' : 'point__badge point__badge--source'

  return (
    <li>
      <span className={badgeClass} title={badgeLabel}>
        <span className="sr-only">{badgeLabel}</span>
        {point.level === 'programme' ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
        )}
      </span>
      <span className="point__body">
        {renderInlineMarkdown(point.text)}
        {srcLine ? <span className="point__src">{srcLine}</span> : null}
      </span>
    </li>
  )
}

function SourcesBlock({ sources }: { sources: SourceRef[] }) {
  if (!sources.length) return null
  return (
    <div className="sheet__sources-block">
      <h4>Sources</h4>
      <ul>
        {sources.map((source) => (
          <li key={source.id}>
            <span className="sheet__sources-id">
              {shortSourceLabel(source, source.id)}
            </span>
            {' — '}
            {source.url ? (
              <a href={source.url} target="_blank" rel="noreferrer">
                {source.title}
              </a>
            ) : (
              source.title
            )}
            {source.note ? (
              <span className="sheet__sources-note"> ({source.note})</span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  )
}

function formatSourceIds(
  ids: string[],
  sourceById: Map<string, SourceRef>,
): string {
  if (!ids.length) return ''
  const labels = ids.map((id) => shortSourceLabel(sourceById.get(id), id))
  return [...new Set(labels)].join(' · ')
}
