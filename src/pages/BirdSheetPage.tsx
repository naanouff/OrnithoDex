import { useCallback, useMemo, useRef } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BirdImage } from '../components/BirdImage'
import { useSheetBrowseSwipe } from '../hooks/useSheetBrowseSwipe'
import { resolveBrowse } from '../lib/browse'
import { getBirdById } from '../lib/birds'
import { orderAccent, orderMediaStyle } from '../lib/orders'
import { resolveBirdImageUrl } from '../lib/media'

export function BirdSheetPage() {
  const { slug = '' } = useParams()
  const navigate = useNavigate()
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
    enabled: Boolean(bird),
    onPrev: goPrev,
    onNext: goNext,
    canPrev: Boolean(browse.prevId),
    canNext: Boolean(browse.nextId),
  })

  if (!bird) {
    return (
      <div className="sheet" aria-hidden="false">
        <Link to="/collection" className="sheet__back">
          ← Collection
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
  const programSource = bird.sources.find((s) => s.id === bird.programSourceId)
  const sourceLine = programSource
    ? `Source identité : ${programSource.title}${programSource.id ? ` (${programSource.id})` : ''}`
    : 'Source identité : liste BAC PRO TCVA'
  const posLabel = `${browse.index + 1} / ${browse.ids.length}`

  return (
    <div
      className="sheet"
      ref={sheetRef}
      aria-hidden="false"
      style={{ '--ordre': orderAccent(bird.order) } as React.CSSProperties}
    >
      <Link to="/collection" className="sheet__back">
        ← Collection
      </Link>
      <p className="sheet__pos" aria-label="Position dans la liste">
        {posLabel}
      </p>
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
      </div>
      <ul className="points">
        {bird.coursePoints.map((point) => (
          <li key={`${point.level}-${point.text}`}>
            <strong>[{point.level}]</strong>
            {' — '}
            {renderInlineMarkdown(point.text)}
          </li>
        ))}
      </ul>
      <p className="sources">{sourceLine}</p>
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
    </div>
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
