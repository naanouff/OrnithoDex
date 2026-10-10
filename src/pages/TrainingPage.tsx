import { CtaButton } from '../components/CtaButton'

export function TrainingPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 py-2">
      <header className="space-y-1">
        <h1 className="font-display text-3xl font-bold tracking-tight text-navy">
          Entraînement
        </h1>
        <p className="text-sm font-bold text-muted">
          Les quiz photo et chant arrivent au prochain livrable.
        </p>
      </header>
      <CtaButton to="/collection" variant="secondary">
        Explorer la collection
      </CtaButton>
    </main>
  )
}
