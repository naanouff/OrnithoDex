import { useState } from 'react'
import { orderAccent } from '../lib/orders'
import { resolveBirdImageUrl } from '../lib/media'

type Props = {
  src?: string
  alt: string
  order: string
  className?: string
  imgClassName?: string
}

/** Image espèce avec fallback coloré si URL absente ou chargement impossible. */
export function BirdImage({
  src,
  alt,
  order,
  className = '',
  imgClassName = 'h-full w-full object-cover',
}: Props) {
  const resolved = resolveBirdImageUrl(src)
  const [failed, setFailed] = useState(false)
  const showImage = Boolean(resolved) && !failed

  return (
    <div className={`relative overflow-hidden ${className}`.trim()}>
      {showImage ? (
        <img
          src={resolved}
          alt={alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          className={imgClassName}
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-2 p-4"
          style={{ background: orderAccent(order) }}
          role="img"
          aria-label={alt || 'Illustration indisponible'}
        >
          <svg
            viewBox="0 0 64 64"
            className="h-14 w-14 text-navy/50"
            aria-hidden
          >
            <circle cx="32" cy="28" r="14" fill="currentColor" opacity="0.35" />
            <path
              d="M18 48c8-10 20-10 28 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.55"
            />
          </svg>
          <span className="font-display text-center text-xs font-bold text-navy/70">
            Photo à venir
          </span>
        </div>
      )}
    </div>
  )
}
