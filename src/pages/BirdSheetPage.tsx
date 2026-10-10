import { Link, useParams } from 'react-router-dom'
import { BirdImage } from '../components/BirdImage'
import { getBirdById } from '../lib/birds'
import { orderAccent, orderMediaStyle } from '../lib/orders'
import { resolveBirdImageUrl } from '../lib/media'

export function BirdSheetPage() {
  const { slug = '' } = useParams()
  const bird = getBirdById(slug)

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

  const hasPhoto = Boolean(resolveBirdImageUrl(bird.image))
  const programSource = bird.sources.find((s) => s.id === bird.programSourceId)
  const sourceLine = programSource
    ? `Source identité : ${programSource.title}${programSource.id ? ` (${programSource.id})` : ''}`
    : 'Source identité : liste BAC PRO TCVA'

  return (
    <div className="sheet" aria-hidden="false">
      <Link to="/collection" className="sheet__back">
        ← Collection
      </Link>
      <div
        className="sheet__media"
        style={hasPhoto ? undefined : { background: orderMediaStyle(bird.order) }}
      >
        <BirdImage src={bird.image} alt={bird.commonName} order={bird.order} loading="eager" />
      </div>
      <h3>{bird.commonName}</h3>
      <p className="latin">{bird.scientificName}</p>
      <div className="pills">
        <span className="pill">
          <span className="dot" style={{ background: orderAccent(bird.order) }} />
          {bird.order}
        </span>
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
