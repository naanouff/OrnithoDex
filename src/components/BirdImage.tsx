import { useState } from 'react'
import { orderMediaStyle } from '../lib/orders'
import { resolveBirdImageUrl } from '../lib/media'

type Props = {
  src?: string
  alt: string
  order: string
  /** Nom affiché en overlay (cartes collection). */
  label?: string
}

/** Image espèce — dégradé ordre si URL absente ou échec de chargement. */
export function BirdImage({ src, alt, order, label }: Props) {
  const resolved = resolveBirdImageUrl(src)
  const [failed, setFailed] = useState(false)
  const showImage = Boolean(resolved) && !failed

  return (
    <>
      {showImage ? (
        <img
          src={resolved}
          alt={alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            background: orderMediaStyle(order),
          }}
          role="img"
          aria-label={alt || 'Illustration indisponible'}
        />
      )}
      {label ? <span>{label}</span> : null}
    </>
  )
}
