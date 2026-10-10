import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary'

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-b from-yellow to-orange text-navy-deep',
  secondary:
    'bg-gradient-to-b from-sky-soft to-sky text-navy-deep',
}

const base =
  'font-display inline-flex w-full min-h-14 items-center justify-center rounded-[var(--radius)] border-[3px] border-navy px-4 text-lg font-semibold shadow-[var(--shadow)] transition-[transform,box-shadow] active:translate-y-1 active:shadow-[var(--shadow-press)]'

type Props = {
  variant?: Variant
  children: ReactNode
  to?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export function CtaButton({
  variant = 'primary',
  children,
  to,
  className = '',
  ...rest
}: Props) {
  const classes = `${base} ${variants[variant]} ${className}`.trim()
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}
