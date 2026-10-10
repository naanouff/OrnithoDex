import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  buildQuestion,
  birdsForMode,
  loadQuizScore,
  resetQuizScore,
  saveQuizScore,
  type QuizMode,
  type QuizQuestion,
  type QuizScore,
} from '../lib/quiz'

function isQuizMode(value: string | undefined): value is QuizMode {
  return value === 'photo' || value === 'chant'
}

export function QuizPage() {
  const { mode: modeParam } = useParams()
  const mode = isQuizMode(modeParam) ? modeParam : null

  const [score, setScore] = useState<QuizScore>(() => loadQuizScore())
  const [question, setQuestion] = useState<QuizQuestion | null>(null)
  const [picked, setPicked] = useState<number | null>(null)
  const [unavailable, setUnavailable] = useState(false)

  useEffect(() => {
    if (!mode) return
    if (birdsForMode(mode).length < 4) {
      setUnavailable(true)
      setQuestion(null)
      return
    }
    setUnavailable(false)
    setPicked(null)
    setQuestion(buildQuestion(mode))
  }, [mode])

  if (!mode) {
    return (
      <main className="flex flex-1 flex-col gap-4 py-4">
        <p className="font-bold text-muted">Mode quiz inconnu.</p>
        <Link to="/entrainement" className="font-display font-semibold text-sky underline">
          Retour à l’entraînement
        </Link>
      </main>
    )
  }

  if (unavailable) {
    return (
      <main className="flex flex-1 flex-col gap-4 py-4">
        <p className="font-bold text-muted">
          Pas assez d’espèces avec média pour ce quiz.
        </p>
        <Link to="/entrainement" className="font-display font-semibold text-sky underline">
          Retour
        </Link>
      </main>
    )
  }

  const answered = picked !== null
  const isCorrect = answered && picked === question?.correctIndex

  function onPick(index: number) {
    if (!question || answered) return
    setPicked(index)
    const next = {
      correct: score.correct + (index === question.correctIndex ? 1 : 0),
      answered: score.answered + 1,
    }
    setScore(next)
    saveQuizScore(next)
  }

  function nextQuestion() {
    if (!mode) return
    setPicked(null)
    setQuestion(buildQuestion(mode, question?.bird.id))
  }

  function onResetScore() {
    resetQuizScore()
    setScore({ correct: 0, answered: 0 })
  }

  return (
    <main className="flex flex-1 flex-col gap-3 pb-2">
      <div className="flex items-center justify-between gap-2">
        <Link
          to="/entrainement"
          className="font-display inline-flex min-h-11 items-center rounded-[16px] border-[2.5px] border-navy bg-white px-3 text-sm font-semibold text-navy shadow-[0_3px_0_rgb(27_54_93/0.12)]"
        >
          ← Modes
        </Link>
        <div className="flex items-center gap-2">
          <p className="font-display rounded-full border-[2.5px] border-navy bg-white px-3 py-1.5 text-sm font-bold text-navy">
            {score.correct}/{score.answered}
          </p>
          {score.answered > 0 ? (
            <button
              type="button"
              onClick={onResetScore}
              className="min-h-11 rounded-[16px] px-2 text-xs font-bold text-muted underline"
            >
              Reset
            </button>
          ) : null}
        </div>
      </div>

      <h1 className="font-display text-2xl font-bold text-navy">
        {mode === 'photo' ? 'Photo → nom' : 'Chant → espèce'}
      </h1>
      <p className="font-display text-center text-lg font-bold text-navy">
        {mode === 'photo'
          ? 'Quel est cet oiseau ?'
          : 'Quelle espèce entends-tu ?'}
      </p>

      {question?.mode === 'photo' && question.imageUrl ? (
        <div className="relative mx-auto aspect-3/4 max-h-[260px] w-full overflow-hidden rounded-[var(--radius)] border-[3px] border-navy shadow-[var(--shadow)]">
          <img
            src={question.imageUrl}
            alt="Espèce à identifier"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover"
          />
        </div>
      ) : null}

      {question?.mode === 'chant' && question.audioEmbedUrl ? (
        <div className="overflow-hidden rounded-[var(--radius-sm)] border-[3px] border-navy bg-white shadow-[0_4px_0_rgb(27_54_93/0.12)]">
          <iframe
            title="Enregistrement Xeno-canto"
            src={question.audioEmbedUrl}
            className="h-[140px] w-full border-0"
            loading="lazy"
          />
          {question.audioPageUrl ? (
            <a
              href={question.audioPageUrl}
              target="_blank"
              rel="noreferrer"
              className="block px-3 py-2 text-center text-xs font-bold text-sky underline"
            >
              Crédit / page Xeno-canto
            </a>
          ) : null}
        </div>
      ) : null}

      {question ? (
        <ul className="grid gap-2.5" aria-label="Réponses">
          {question.choices.map((choice, index) => {
            let stateClass =
              'border-navy bg-white text-navy shadow-[0_4px_0_rgb(27_54_93/0.12)]'
            if (answered) {
              if (index === question.correctIndex) {
                stateClass =
                  'border-ok bg-[#d3f9d8] text-[#1b6b2a] shadow-none'
              } else if (index === picked) {
                stateClass =
                  'border-ko bg-[#ffe3e3] text-[#a01818] shadow-none'
              } else {
                stateClass = 'border-navy/40 bg-white/70 text-muted shadow-none'
              }
            }
            return (
              <li key={`${choice}-${index}`}>
                <button
                  type="button"
                  disabled={answered}
                  onClick={() => onPick(index)}
                  className={[
                    'font-display w-full min-h-14 rounded-[16px] border-[3px] px-3.5 py-3 text-left text-base font-bold transition-transform active:enabled:translate-y-0.5',
                    stateClass,
                  ].join(' ')}
                >
                  {choice}
                </button>
              </li>
            )
          })}
        </ul>
      ) : (
        <p className="font-bold text-muted">Préparation de la question…</p>
      )}

      {answered && question ? (
        <div className="space-y-3">
          <p
            className={[
              'font-display text-center text-lg font-bold',
              isCorrect ? 'text-ok' : 'text-ko',
            ].join(' ')}
            role="status"
          >
            {isCorrect
              ? 'Bien joué !'
              : `Réponse : ${question.choices[question.correctIndex]}`}
          </p>
          <button
            type="button"
            onClick={nextQuestion}
            className="font-display inline-flex w-full min-h-14 items-center justify-center rounded-[var(--radius)] border-[3px] border-navy bg-gradient-to-b from-yellow to-orange px-4 text-lg font-semibold text-navy-deep shadow-[var(--shadow)] active:translate-y-1 active:shadow-[var(--shadow-press)]"
          >
            Question suivante
          </button>
          <Link
            to={`/espece/${question.bird.id}`}
            className="block text-center text-sm font-bold text-sky underline"
          >
            Voir la fiche
          </Link>
        </div>
      ) : null}
    </main>
  )
}
