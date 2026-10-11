import { useEffect, useRef, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { BirdImage } from '../components/BirdImage'
import { orderMediaStyle } from '../lib/orders'
import { resolveBirdImageUrl } from '../lib/media'
import { renderInlineMarkdown } from '../lib/text'
import {
  buildQuestion,
  birdsForMode,
  loadQuizScore,
  parseSeriesSize,
  saveQuizScore,
  type QuizMode,
  type QuizQuestion,
  type QuizScore,
  type SeriesSize,
} from '../lib/quiz'

function isQuizMode(value: string | undefined): value is QuizMode {
  return value === 'photo' || value === 'chant'
}

/** Uniquement un point de contraste ; sinon rien (pas la ligne d’identité). */
function contrastHint(question: QuizQuestion): string | undefined {
  const contrast = question.bird.coursePoints.find((p) =>
    /confusion|ne pas confondre|même genre|ne pas mélanger/i.test(p.text),
  )
  return contrast?.text
}

type Missed = { id: string; commonName: string }

function nextQuestionFor(
  mode: QuizMode,
  seenIds: string[],
  focusIds: string[] | null,
): QuizQuestion | null {
  if (focusIds && focusIds.length > 0) {
    const remaining = focusIds.filter((id) => !seenIds.includes(id))
    if (remaining.length === 0) return null
    const exclude = birdsForMode(mode)
      .map((b) => b.id)
      .filter((id) => !remaining.includes(id))
    return buildQuestion(mode, exclude)
  }
  return buildQuestion(mode, seenIds)
}

export function QuizPage() {
  const { mode: modeParam } = useParams()
  const [searchParams] = useSearchParams()
  const mode = isQuizMode(modeParam) ? modeParam : null
  const seriesSize: SeriesSize | null = parseSeriesSize(searchParams.get('serie'))

  const [score, setScore] = useState<QuizScore>(() => loadQuizScore())
  const [question, setQuestion] = useState<QuizQuestion | null>(null)
  const [picked, setPicked] = useState<number | null>(null)
  const [unavailable, setUnavailable] = useState(false)
  const [seriesIndex, setSeriesIndex] = useState(0)
  const [seriesCorrect, setSeriesCorrect] = useState(0)
  const [seriesTotal, setSeriesTotal] = useState<number | null>(seriesSize)
  const [seenIds, setSeenIds] = useState<string[]>([])
  const [missed, setMissed] = useState<Missed[]>([])
  const [finished, setFinished] = useState(false)
  const [focusIds, setFocusIds] = useState<string[] | null>(null)
  const nextBtnRef = useRef<HTMLButtonElement>(null)

  function startFresh(size: number | null = seriesSize) {
    if (!mode) return
    setPicked(null)
    setSeriesIndex(0)
    setSeriesCorrect(0)
    setSeriesTotal(size)
    setSeenIds([])
    setMissed([])
    setFinished(false)
    setFocusIds(null)
    setQuestion(buildQuestion(mode))
  }

  useEffect(() => {
    if (!mode) return
    if (birdsForMode(mode).length < 4) {
      setUnavailable(true)
      setQuestion(null)
      return
    }
    setUnavailable(false)
    startFresh(seriesSize)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- reset only when mode / série change
  }, [mode, seriesSize])

  useEffect(() => {
    if (picked !== null) nextBtnRef.current?.focus()
  }, [picked])

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

  const total = seriesTotal ?? seriesSize

  if (finished && total) {
    const quizFrom = seriesSize
      ? `/entrainement/${mode}?serie=${seriesSize}`
      : `/entrainement/${mode}`
    return (
      <section className="screen" aria-label="Bilan de série">
        <div className="quiz-bar">
          <Link className="btn btn--ghost" to="/entrainement">
            ← Modes
          </Link>
        </div>
        <h2 className="quiz-prompt">Série terminée</h2>
        <p className="feedback is-ok">
          {seriesCorrect} / {total} bonnes réponses
        </p>
        {missed.length > 0 ? (
          <div className="quiz-summary">
            <p className="quiz-summary__label">À revoir</p>
            <ul className="quiz-summary__list">
              {missed.map((item) => (
                <li key={item.id}>
                  <Link to={`/espece/${item.id}`} state={{ from: quizFrom }}>
                    {item.commonName}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => {
                const ids = missed.map((m) => m.id)
                setFocusIds(ids)
                setSeriesTotal(ids.length)
                setSeriesIndex(0)
                setSeriesCorrect(0)
                setSeenIds([])
                setMissed([])
                setFinished(false)
                setPicked(null)
                setQuestion(nextQuestionFor(mode, [], ids))
              }}
            >
              Rejouer les ratées
            </button>
          </div>
        ) : (
          <p className="feedback is-ok">Aucune erreur — bien joué !</p>
        )}
        <div className="quiz-actions">
          <button type="button" className="btn btn--next" onClick={() => startFresh(seriesSize)}>
            Nouvelle série
          </button>
          <Link className="btn btn--ghost" to="/entrainement">
            Changer de mode
          </Link>
        </div>
      </section>
    )
  }

  const answered = picked !== null
  const isCorrect = answered && picked === question?.correctIndex
  const hasPhoto =
    question?.mode === 'photo' &&
    Boolean(resolveBirdImageUrl(question.imageUrl ?? question.bird.image))
  const hint = answered && question && !isCorrect ? contrastHint(question) : undefined
  const scoreLabel = total
    ? `${Math.min(seriesIndex + (answered ? 1 : 0), total)} / ${total}`
    : `${score.correct} / ${score.answered}`

  function onPick(index: number) {
    if (!question || answered) return
    setPicked(index)
    const ok = index === question.correctIndex
    const next = {
      correct: score.correct + (ok ? 1 : 0),
      answered: score.answered + 1,
    }
    setScore(next)
    saveQuizScore(next)
    if (ok) setSeriesCorrect((c) => c + 1)
    else {
      setMissed((list) =>
        list.some((m) => m.id === question.bird.id)
          ? list
          : [...list, { id: question.bird.id, commonName: question.bird.commonName }],
      )
    }
  }

  function goNext() {
    if (!mode || !question) return
    const nextSeen = [...seenIds, question.bird.id]
    setSeenIds(nextSeen)

    if (total) {
      const nextIndex = seriesIndex + 1
      if (nextIndex >= total) {
        setFinished(true)
        setPicked(null)
        setQuestion(null)
        return
      }
      const q = nextQuestionFor(mode, nextSeen, focusIds)
      if (!q) {
        setFinished(true)
        setPicked(null)
        setQuestion(null)
        return
      }
      setSeriesIndex(nextIndex)
      setPicked(null)
      setQuestion(q)
      return
    }

    setPicked(null)
    setQuestion(buildQuestion(mode, [question.bird.id]))
  }

  const quizFrom = seriesSize
    ? `/entrainement/${mode}?serie=${seriesSize}`
    : `/entrainement/${mode}`

  return (
    <section className="screen" aria-label="Quiz">
      <div className="quiz-bar">
        <Link className="btn btn--ghost" to="/entrainement">
          ← Modes
        </Link>
        <span className="score" aria-label={total ? 'Progression de la série' : 'Score cumulé'}>
          {scoreLabel}
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
            birdId={question.bird.id}
            alt="Espèce à identifier"
            order={question.bird.order}
            loading="eager"
          />
        </div>
      ) : null}

      {question?.mode === 'chant' && question.audioUrl ? (
        <div className="stimulus" style={{ background: orderMediaStyle(question.bird.order) }}>
          <audio
            key={question.audioUrl}
            controls
            preload="metadata"
            src={question.audioUrl}
            style={{ width: '90%', margin: 'auto' }}
          >
            Lecteur audio non supporté
          </audio>
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

      {answered && question && !isCorrect && hint ? (
        <p className="quiz-hint">{renderInlineMarkdown(hint)}</p>
      ) : null}

      {answered && question ? (
        <div className="quiz-actions">
          {!isCorrect ? (
            <Link
              className="btn btn--ghost"
              to={`/espece/${question.bird.id}`}
              state={{ from: quizFrom }}
            >
              Revoir la fiche
            </Link>
          ) : null}
          <button ref={nextBtnRef} type="button" className="btn btn--next" onClick={goNext}>
            {total && seriesIndex + 1 >= total ? 'Voir le bilan' : 'Question suivante'}
          </button>
        </div>
      ) : null}
    </section>
  )
}
