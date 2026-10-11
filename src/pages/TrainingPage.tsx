import { Link } from 'react-router-dom'
import { birdsForMode } from '../lib/quiz'

export function TrainingPage() {
  const photoCount = birdsForMode('photo').length
  const chantCount = birdsForMode('chant').length
  const photoOk = photoCount >= 4
  const chantOk = chantCount >= 4

  return (
    <section className="screen" aria-label="Entraînement">
      <header className="screen-head">
        <div>
          <h2>Entraînement</h2>
          <p>Comme un défi — 1 question, 4 choix</p>
        </div>
      </header>
      <div className="mode-list">
        {photoOk ? (
          <Link className="mode mode--photo" to="/entrainement/photo">
            <strong>Photo → nom</strong>
            <span>Reconnais l’espèce sur la carte</span>
          </Link>
        ) : (
          <div className="mode mode--photo is-disabled" aria-disabled="true">
            <strong>Photo → nom</strong>
            <span>Pas assez de photos pour ce mode</span>
          </div>
        )}
        {chantOk ? (
          <Link className="mode" to="/entrainement/chant">
            <strong>Chant → espèce</strong>
            <span>Identifie l’oiseau à l’écoute</span>
          </Link>
        ) : (
          <div className="mode is-disabled" aria-disabled="true">
            <strong>Chant → espèce</strong>
            <span>Pas assez d’audio local pour ce mode</span>
          </div>
        )}
      </div>
    </section>
  )
}
