import { birds } from '../data/birds'
import type { Bird } from '../types/bird'
import { resolveBirdImageUrl } from './media'

export type QuizMode = 'photo' | 'chant'

export type QuizQuestion = {
  mode: QuizMode
  bird: Bird
  /** Quatre noms communs, dont la bonne réponse. */
  choices: string[]
  correctIndex: number
  imageUrl?: string
  audioEmbedUrl?: string
  audioPageUrl?: string
}

const SCORE_KEY = 'ornithodex.quiz.score'

export type QuizScore = {
  correct: number
  answered: number
}

export function shuffleInPlace<T>(items: T[]): T[] {
  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[items[i], items[j]] = [items[j], items[i]]
  }
  return items
}

export function loadQuizScore(): QuizScore {
  try {
    const raw = localStorage.getItem(SCORE_KEY)
    if (!raw) return { correct: 0, answered: 0 }
    const parsed = JSON.parse(raw) as QuizScore
    if (
      typeof parsed.correct !== 'number' ||
      typeof parsed.answered !== 'number'
    ) {
      return { correct: 0, answered: 0 }
    }
    return parsed
  } catch {
    return { correct: 0, answered: 0 }
  }
}

export function saveQuizScore(score: QuizScore): void {
  localStorage.setItem(SCORE_KEY, JSON.stringify(score))
}

export function resetQuizScore(): void {
  localStorage.removeItem(SCORE_KEY)
}

/** Extraire l’id XC pour l’embed lecture. */
export function xenoCantoEmbedUrl(pageUrl: string): string | undefined {
  const m = pageUrl.match(/xeno-canto\.org\/(\d+)/i)
  if (!m) return undefined
  return `https://xeno-canto.org/${m[1]}/embed`
}

export function birdsForMode(mode: QuizMode): Bird[] {
  if (mode === 'photo') {
    return birds.filter((bird) => Boolean(resolveBirdImageUrl(bird.image)))
  }
  return birds.filter((bird) =>
    Boolean(bird.audio?.[0] && xenoCantoEmbedUrl(bird.audio[0])),
  )
}

export function buildQuestion(
  mode: QuizMode,
  excludeId?: string,
): QuizQuestion | null {
  const pool = birdsForMode(mode).filter((bird) => bird.id !== excludeId)
  if (pool.length < 4) return null

  const bird = pool[Math.floor(Math.random() * pool.length)]
  const sameOrder = pool.filter(
    (candidate) => candidate.order === bird.order && candidate.id !== bird.id,
  )
  const others = pool.filter((candidate) => candidate.id !== bird.id)

  const distractorSource = [
    ...shuffleInPlace([...sameOrder]),
    ...shuffleInPlace([...others.filter((b) => b.order !== bird.order)]),
  ]
  const distractors: Bird[] = []
  for (const candidate of distractorSource) {
    if (distractors.some((d) => d.commonName === candidate.commonName)) continue
    distractors.push(candidate)
    if (distractors.length === 3) break
  }
  if (distractors.length < 3) return null

  const options = shuffleInPlace([bird, ...distractors])
  const correctIndex = options.findIndex((option) => option.id === bird.id)

  const question: QuizQuestion = {
    mode,
    bird,
    choices: options.map((option) => option.commonName),
    correctIndex,
  }

  if (mode === 'photo') {
    question.imageUrl = resolveBirdImageUrl(bird.image)
  } else if (bird.audio?.[0]) {
    question.audioPageUrl = bird.audio[0]
    question.audioEmbedUrl = xenoCantoEmbedUrl(bird.audio[0])
  }

  return question
}
