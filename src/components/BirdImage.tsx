import { useLayoutEffect, useRef, useState } from 'react'
import { orderMediaStyle } from '../lib/orders'
import { resolveBirdImageUrl } from '../lib/media'

type Props = {
  src?: string
  alt: string
  order: string
  /** Nom affiché en overlay (cartes collection). */
  label?: string
  /** lazy sur les grilles ; eager sur la fiche. */
  loading?: 'lazy' | 'eager'
  /** false : garder le voile jusqu’au signal de la grille. */
  reveal?: boolean
  /** Appelé une fois l’image décodée, absente ou en échec. */
  onReady?: () => void
}

/** Image espèce — voile animé pendant le chargement, dégradé ordre si absente. */
export function BirdImage({
  src,
  alt,
  order,
  label,
  loading = 'lazy',
  reveal = true,
  onReady,
}: Props) {
  const resolved = resolveBirdImageUrl(src)
  const imgRef = useRef<HTMLImageElement>(null)
  const onReadyRef = useRef(onReady)
  const reported = useRef(false)
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)

  onReadyRef.current = onReady

  function report() {
    if (reported.current) return
    reported.current = true
    onReadyRef.current?.()
  }

  useLayoutEffect(() => {
    reported.current = false
    setFailed(false)
    const img = imgRef.current
    const done = Boolean(img && img.complete && img.naturalWidth > 0)
    setLoaded(done)
    if (!resolved || done) report()
  }, [resolved])

  const showImage = Boolean(resolved) && !failed
  const visible = reveal && loaded

  return (
    <>
      {showImage ? (
        <>
          <div
            className={visible ? 'bird-skeleton is-hold' : 'bird-skeleton'}
            aria-hidden="true"
          />
          <img
            ref={imgRef}
            src={resolved}
            alt={alt}
            loading={loading}
            decoding="async"
            referrerPolicy="no-referrer"
            className={visible ? 'is-loaded' : undefined}
            onLoad={() => {
              setLoaded(true)
              report()
            }}
            onError={() => {
              setFailed(true)
              setLoaded(false)
              report()
            }}
          />
        </>
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
