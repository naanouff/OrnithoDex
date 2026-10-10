import { Link } from 'react-router-dom'
import type { Bird } from '../types/bird'
import { resolveBirdImageUrl } from '../lib/media'
import { orderAccent } from '../lib/orders'

type Props = {
  bird: Bird
}

export function BirdCard({ bird }: Props) {
  const image = resolveBirdImageUrl(bird.image)

  return (
    <Link
      to={`/espece/${bird.id}`}
      className="group flex flex-col text-left no-underline"
    >
      <div className="relative aspect-3/4 overflow-hidden rounded-[var(--radius-sm)] border-[3px] border-navy shadow-[0_6px_0_rgb(27_54_93/0.16)] transition-transform group-active:translate-y-0.5">
        {image ? (
          <img
            src={image}
            alt=""
            loading="lazy"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            className="flex h-full w-full items-end p-3"
            style={{ background: orderAccent(bird.order) }}
            aria-hidden
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-navy-deep/70 via-transparent to-white/20" />
        <span className="font-display absolute inset-x-2 bottom-2 text-sm font-bold leading-tight text-white drop-shadow">
          {bird.commonName}
        </span>
      </div>
      <div className="mt-2 flex items-center gap-1.5 text-xs font-extrabold text-muted">
        <span
          className="inline-block size-2.5 shrink-0 rounded-full border-2 border-navy"
          style={{ background: orderAccent(bird.order) }}
          aria-hidden
        />
        <span className="truncate">
          {bird.order} · {bird.family}
        </span>
      </div>
    </Link>
  )
}
