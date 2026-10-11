import { useLayoutEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { orderMediaStyle } from '../lib/orders'
import { resolveBirdImageUrl } from '../lib/media'
import { focusToCropStyle, getImageFocus } from '../lib/imageFocus'

type Props = {
  src?: string
  alt: string
  order: string
  /** Slug espèce — focus tête + bbox (photos uniquement). */
  birdId?: string
  /** Nom affiché en overlay (cartes collection). */
  label?: string
  /**
   * `photo` : crop focus tête (fiche / quiz).
   * `illustration` : image entière, fond crème planche (collection / fiche).
   */
  variant?: 'photo' | 'illustration'
  /** lazy sur les grilles ; eager sur la fiche. */
  loading?: 'lazy' | 'eager'
  /** false : garder le voile jusqu’au signal de la grille. */
  reveal?: boolean
  /** Appelé une fois l’image décodée, absente ou en échec. */
  onReady?: () => void
}

/** Contours cream des planches (~#fbf5e1) — pas de crop. */
const ILLUSTRATION_FIT: CSSProperties = {
  objectFit: 'contain',
  objectPosition: 'center',
  width: '100%',
  height: '100%',
  left: 0,
  top: 0,
  right: 'auto',
  bottom: 'auto',
  maxWidth: 'none',
  maxHeight: 'none',
}

/** Image espèce — voile animé pendant le chargement, crop intelligent si focus labellisé. */
export function BirdImage({
  src,
  alt,
  order,
  birdId,
  label,
  variant = 'photo',
  loading = 'lazy',
  reveal = true,
  onReady,
}: Props) {
  const resolved = resolveBirdImageUrl(src)
  const focus = variant === 'photo' ? getImageFocus(birdId) : undefined
  const imgRef = useRef<HTMLImageElement>(null)
  const onReadyRef = useRef(onReady)
  const reported = useRef(false)
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [natural, setNatural] = useState({ w: 0, h: 0 })
  const [frame, setFrame] = useState({ w: 0, h: 0 })

  onReadyRef.current = onReady

  function report() {
    if (reported.current) return
    reported.current = true
    onReadyRef.current?.()
  }

  function rememberSize(img: HTMLImageElement | null) {
    if (!img?.naturalWidth) return
    setNatural((prev) =>
      prev.w === img.naturalWidth && prev.h === img.naturalHeight
        ? prev
        : { w: img.naturalWidth, h: img.naturalHeight },
    )
  }

  useLayoutEffect(() => {
    reported.current = false
    setFailed(false)
    setNatural({ w: 0, h: 0 })
    const img = imgRef.current
    const done = Boolean(img && img.complete && img.naturalWidth > 0)
    setLoaded(done)
    if (done) rememberSize(img)
    if (!resolved || done) report()
  }, [resolved, birdId])

  useLayoutEffect(() => {
    const parent = imgRef.current?.parentElement
    if (!parent) return
    const measure = () => {
      const rect = parent.getBoundingClientRect()
      setFrame((prev) =>
        Math.abs(prev.w - rect.width) < 0.5 && Math.abs(prev.h - rect.height) < 0.5
          ? prev
          : { w: rect.width, h: rect.height },
      )
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(parent)
    return () => observer.disconnect()
  }, [resolved, failed])

  const showImage = Boolean(resolved) && !failed
  const visible = reveal && loaded
  const cropStyle: CSSProperties =
    variant === 'illustration' || !focus
      ? ILLUSTRATION_FIT
      : focusToCropStyle(focus, natural.w, natural.h, frame.w, frame.h)

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
            className={loaded ? 'is-decoded is-loaded' : undefined}
            style={cropStyle}
            onLoad={(e) => {
              setLoaded(true)
              rememberSize(e.currentTarget)
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
