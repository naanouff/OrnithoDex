import { Link } from 'react-router-dom'
import type { Bird } from '../types/bird'
import { orderAccent, orderMediaStyle } from '../lib/orders'
import { BirdImage } from './BirdImage'
import { resolveBirdImageUrl } from '../lib/media'

type Props = {
  bird: Bird
}

export function BirdCard({ bird }: Props) {
  const hasPhoto = Boolean(resolveBirdImageUrl(bird.image))

  return (
    <Link to={`/espece/${bird.id}`} className="card">
      <div
        className="card__media"
        style={hasPhoto ? undefined : { background: orderMediaStyle(bird.order) }}
      >
        <BirdImage
          src={bird.image}
          alt=""
          order={bird.order}
          label={bird.commonName}
        />
      </div>
      <div className="card__meta">
        <span className="dot" style={{ background: orderAccent(bird.order) }} />
        {bird.order}
      </div>
    </Link>
  )
}
