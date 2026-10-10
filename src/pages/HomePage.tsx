import { CtaButton } from '../components/CtaButton'

export function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 py-6 text-center">
      <img
        src="/brand/logo-ornithodex.jpg"
        alt=""
        width={168}
        height={168}
        className="h-[168px] w-[168px] rounded-[var(--radius)] border-[3px] border-navy object-cover shadow-[var(--shadow)]"
      />
      <div className="space-y-2">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-navy">
          OrnithoDex
        </h1>
        <p className="font-body mx-auto max-w-[24ch] text-base font-semibold text-muted">
          Mémoriser les oiseaux du programme BAC PRO TCVA.
        </p>
      </div>
      <div className="flex w-full flex-col gap-3">
        <CtaButton to="/collection" variant="primary">
          Collection
        </CtaButton>
        <CtaButton to="/entrainement" variant="secondary">
          Entraînement
        </CtaButton>
      </div>
    </main>
  )
}
