import { Link } from 'react-router-dom'
import type { Bird } from '../types/bird'
import { orderAccent, orderMediaStyle } from '../lib/orders'
import { BirdImage } from './BirdImage'
import { resolveBirdImageUrl } from '../lib/media'

type Props = {
  bird: Bird
  /** Ligne dans la grille, pour le décalage du fondu. */
  row?: number
  reveal?: boolean
  onReady?: () => void
}

export function BirdCard({ bird, row = 0, reveal = true, onReady }: Props) {
  const hasPhoto = Boolean(resolveBirdImageUrl(bird.image))

  return (
    <Link
      to={`/espece/${bird.id}`}
      className="card"
      style={{ '--row': row } as React.CSSProperties}
    >
      <div
        className="card__media"
        style={hasPhoto ? undefined : { background: orderMediaStyle(bird.order) }}
      >
        <BirdImage
          src={bird.image}
          birdId={bird.id}
          alt=""
          order={bird.order}
          label={bird.commonName}
          loading="eager"
          reveal={reveal}
          onReady={onReady}
        />
      </div>
      <div className="card__meta">
        <span className="dot" style={{ background: orderAccent(bird.order) }} />
        {bird.order}
      </div>
    </Link>
  )
}
