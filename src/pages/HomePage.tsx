import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <section className="screen screen--home" aria-label="Accueil">
      <header className="brand">
        <img
          className="logo"
          src="/brand/logo-ornithodex.jpg"
          width={280}
          height={280}
          alt="OrnithoDex — L'encyclopédie des oiseaux"
        />
        <p className="tagline-home">Apprends les oiseaux en t’amusant</p>
      </header>
      <div className="cta">
        <Link className="btn" to="/collection">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
          Collection
        </Link>
        <Link className="btn btn--secondary" to="/entrainement">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <path d="M6 12h12M4 8h2v8H4zM18 8h2v8h-2z" />
          </svg>
          Entraînement
        </Link>
      </div>
    </section>
  )
}
