import { Link } from 'react-router-dom'
import { birdsForMode, loadQuizScore, resetQuizScore } from '../lib/quiz'
import { useState } from 'react'

export function TrainingPage() {
  const photoCount = birdsForMode('photo').length
  const chantCount = birdsForMode('chant').length
  const photoOk = photoCount >= 4
  const chantOk = chantCount >= 4
  const [score, setScore] = useState(() => loadQuizScore())

  function onResetScore() {
    resetQuizScore()
    setScore({ correct: 0, answered: 0 })
  }

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
          <div className="mode mode--photo mode--block">
            <strong>Photo → nom</strong>
            <span>Reconnais l’espèce — {photoCount} photos</span>
            <div className="mode__series" role="group" aria-label="Longueur de série photo">
              <Link className="mode__serie" to="/entrainement/photo?serie=10">
                Série 10
              </Link>
              <Link className="mode__serie" to="/entrainement/photo?serie=20">
                Série 20
              </Link>
            </div>
          </div>
        ) : (
          <div className="mode mode--photo is-disabled" aria-disabled="true">
            <strong>Photo → nom</strong>
            <span>Pas assez de photos pour ce mode</span>
          </div>
        )}
        {chantOk ? (
          <div className="mode mode--block">
            <strong>Chant → espèce</strong>
            <span>Identifie à l’écoute — {chantCount} chants</span>
            <div className="mode__series" role="group" aria-label="Longueur de série chant">
              <Link className="mode__serie" to="/entrainement/chant?serie=10">
                Série 10
              </Link>
              <Link className="mode__serie" to="/entrainement/chant?serie=20">
                Série 20
              </Link>
            </div>
          </div>
        ) : (
          <div className="mode is-disabled" aria-disabled="true">
            <strong>Chant → espèce</strong>
            <span>Pas assez d’audio local pour ce mode</span>
          </div>
        )}
      </div>
      {score.answered > 0 ? (
        <div className="training-score">
          <p>
            Score cumulé : {score.correct} / {score.answered}
          </p>
          <button type="button" className="btn btn--ghost" onClick={onResetScore}>
            Remettre le score à zéro
          </button>
        </div>
      ) : null}
    </section>
  )
}
