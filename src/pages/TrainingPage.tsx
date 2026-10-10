import { Link, useLocation } from 'react-router-dom'
import { birdsForMode, loadQuizScore } from '../lib/quiz'

export function TrainingPage() {
  useLocation()
  const score = loadQuizScore()
  const photoCount = birdsForMode('photo').length
  const chantCount = birdsForMode('chant').length

  return (
    <main className="flex flex-1 flex-col gap-4 py-2">
      <header className="space-y-1">
        <h1 className="font-display text-3xl font-bold tracking-tight text-navy">
          Entraînement
        </h1>
        <p className="text-sm font-bold text-muted">
          Une question, quatre réponses — feedback immédiat.
        </p>
        {score.answered > 0 ? (
          <p className="font-display text-sm font-bold text-navy">
            Score session : {score.correct}/{score.answered}
          </p>
        ) : null}
      </header>

      <ul className="grid gap-3">
        <li>
          <ModeCard
            to="/entrainement/photo"
            title="Photo → nom"
            description={`Reconnaître l’espèce sur la photo (${photoCount} disponibles).`}
            tone="photo"
            disabled={photoCount < 4}
          />
        </li>
        <li>
          <ModeCard
            to="/entrainement/chant"
            title="Chant → espèce"
            description={`Identifier l’oiseau à l’écoute (${chantCount} disponibles).`}
            tone="chant"
            disabled={chantCount < 4}
          />
        </li>
      </ul>
    </main>
  )
}

function ModeCard({
  to,
  title,
  description,
  tone,
  disabled,
}: {
  to: string
  title: string
  description: string
  tone: 'photo' | 'chant'
  disabled?: boolean
}) {
  const classes = [
    'flex min-h-[92px] w-full flex-col justify-center gap-1 rounded-[var(--radius)] border-[3px] border-navy px-4 py-4 text-left shadow-[var(--shadow)] transition-[transform,box-shadow] active:translate-y-1 active:shadow-[var(--shadow-press)]',
    tone === 'photo'
      ? 'bg-gradient-to-br from-[#fff7d6] to-[#ffe0b0]'
      : 'bg-gradient-to-br from-sky-soft/50 to-sky/40',
    disabled ? 'pointer-events-none opacity-50 shadow-none' : '',
  ].join(' ')

  if (disabled) {
    return (
      <div className={classes} aria-disabled>
        <strong className="font-display text-xl text-navy">{title}</strong>
        <span className="text-sm font-bold text-muted">{description}</span>
      </div>
    )
  }

  return (
    <Link to={to} className={`${classes} no-underline`}>
      <strong className="font-display text-xl text-navy">{title}</strong>
      <span className="text-sm font-bold text-muted">{description}</span>
    </Link>
  )
}
