export function HomePage() {
  return (
    <main className="flex min-h-[calc(100dvh-2rem)] flex-col items-center justify-center gap-6 text-center">
      <img
        src="/brand/logo-ornithodex.jpg"
        alt="OrnithoDex"
        width={180}
        height={180}
        className="h-[180px] w-[180px] rounded-[var(--radius)] border-[3px] border-navy object-cover shadow-[var(--shadow)]"
      />
      <div className="space-y-2">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-navy">
          OrnithoDex
        </h1>
        <p className="font-body max-w-[22ch] text-base font-semibold text-muted">
          Mémoriser les oiseaux du programme BAC PRO TCVA.
        </p>
      </div>
      <p className="font-body text-sm text-muted">
        Scaffold prêt — Collection et Entraînement arrivent ensuite.
      </p>
    </main>
  )
}
