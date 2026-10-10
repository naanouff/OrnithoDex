import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BirdImage } from '../components/BirdImage'
import { orderMediaStyle } from '../lib/orders'
import { resolveBirdImageUrl } from '../lib/media'
import {
  buildQuestion,
  birdsForMode,
  loadQuizScore,
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
      <section className="screen" aria-label="Quiz">
        <p className="feedback">Mode quiz inconnu.</p>
        <Link className="btn btn--ghost" to="/entrainement">
          ← Modes
        </Link>
      </section>
    )
  }

  if (unavailable) {
    return (
      <section className="screen" aria-label="Quiz">
        <div className="quiz-bar">
          <Link className="btn btn--ghost" to="/entrainement">
            ← Modes
          </Link>
        </div>
        <p className="feedback">Pas assez d’espèces avec média pour ce quiz.</p>
      </section>
    )
  }

  const answered = picked !== null
  const isCorrect = answered && picked === question?.correctIndex
  const hasPhoto =
    question?.mode === 'photo' &&
    Boolean(resolveBirdImageUrl(question.imageUrl ?? question.bird.image))

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

  return (
    <section className="screen" aria-label="Quiz">
      <div className="quiz-bar">
        <Link className="btn btn--ghost" to="/entrainement">
          ← Modes
        </Link>
        <span className="score">
          {score.correct} / {score.answered}
        </span>
      </div>
      <p className="quiz-prompt">
        {mode === 'photo' ? 'Quel est cet oiseau\u00a0?' : 'Quelle espèce entends-tu\u00a0?'}
      </p>

      {question?.mode === 'photo' ? (
        <div
          className="stimulus"
          style={hasPhoto ? undefined : { background: orderMediaStyle(question.bird.order) }}
        >
          <BirdImage
            src={question.imageUrl ?? question.bird.image}
            alt="Espèce à identifier"
            order={question.bird.order}
            loading="eager"
          />
        </div>
      ) : null}

      {question?.mode === 'chant' && (question.audioUrl || question.audioEmbedUrl) ? (
        <div className="stimulus" style={{ background: orderMediaStyle(question.bird.order) }}>
          {question.audioUrl ? (
            <audio
              key={question.audioUrl}
              controls
              preload="metadata"
              src={question.audioUrl}
              style={{ width: '90%', margin: 'auto' }}
            >
              Lecteur audio non supporté
            </audio>
          ) : (
            <iframe
              title="Enregistrement Xeno-canto"
              src={question.audioEmbedUrl}
              style={{ width: '100%', height: 140, border: 0 }}
              loading="lazy"
            />
          )}
        </div>
      ) : null}

      {question ? (
        <div className="answers" role="group" aria-label="Propositions">
          {question.choices.map((choice, index) => {
            let className = 'answer'
            if (answered) {
              if (index === question.correctIndex) className += ' is-correct'
              else if (index === picked) className += ' is-wrong'
              else className += ' is-muted'
            }
            return (
              <button
                key={`${choice}-${index}`}
                type="button"
                className={className}
                disabled={answered}
                onClick={() => onPick(index)}
              >
                {choice}
              </button>
            )
          })}
        </div>
      ) : (
        <p className="feedback">Préparation de la question…</p>
      )}

      <p
        className={['feedback', answered ? (isCorrect ? 'is-ok' : 'is-ko') : ''].join(' ')}
        aria-live="polite"
      >
        {answered && question
          ? isCorrect
            ? 'Bien joué !'
            : `C’était : ${question.choices[question.correctIndex]}`
          : ''}
      </p>

      {answered ? (
        <button type="button" className="btn btn--next" onClick={nextQuestion}>
          Question suivante
        </button>
      ) : null}
    </section>
  )
}
