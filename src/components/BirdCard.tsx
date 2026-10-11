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
  /** Avant navigation : persister le contexte de parcours swipe. */
  onOpen?: () => void
}

export function BirdCard({ bird, row = 0, reveal = true, onReady, onOpen }: Props) {
  const illustrationUrl = resolveBirdImageUrl(bird.illustration)
  const hasIllustration = Boolean(illustrationUrl)

  return (
    <Link
      to={`/espece/${bird.id}`}
      className="card"
      style={
        {
          '--row': row,
          '--ordre': orderAccent(bird.order),
        } as React.CSSProperties
      }
      onClick={() => onOpen?.()}
      aria-label={`${bird.commonName}, ${bird.order}`}
    >
      <div className="card__frame">
        <div
          className={hasIllustration ? 'card__media card__media--illustration' : 'card__media'}
          style={
            hasIllustration
              ? { background: bird.illustrationBg ?? 'var(--illustration-cream)' }
              : { background: orderMediaStyle(bird.order) }
          }
        >
          <BirdImage
            src={bird.illustration}
            variant="illustration"
            alt=""
            order={bird.order}
            loading="eager"
            reveal={reveal}
            onReady={onReady}
          />
        </div>
        <div className="card__caption">
          <span className="card__order">{bird.order}</span>
          <span className="card__name">{bird.commonName}</span>
        </div>
      </div>
    </Link>
  )
}
