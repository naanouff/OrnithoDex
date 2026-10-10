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
  /** Fichier local `/audio/birds/…`. */
  audioUrl?: string
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

export function xenoCantoEmbedUrl(pageUrl: string): string | undefined {
  const m = pageUrl.match(/xeno-canto\.org\/(\d+)/i)
  if (!m) return undefined
  return `https://xeno-canto.org/${m[1]}/embed`
}

function hasPlayableAudio(bird: Bird): boolean {
  const primary = bird.audio?.[0]
  if (!primary) return false
  if (primary.startsWith('/audio/')) return true
  return Boolean(xenoCantoEmbedUrl(primary))
}

export function birdsForMode(mode: QuizMode): Bird[] {
  if (mode === 'photo') {
    return birds.filter((bird) => Boolean(resolveBirdImageUrl(bird.image)))
  }
  return birds.filter((bird) => hasPlayableAudio(bird))
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
  } else {
    const primary = bird.audio?.[0]
    const remote = bird.audioRemote?.[0] ?? primary
    if (primary?.startsWith('/audio/')) {
      question.audioUrl = primary
      if (remote && remote.includes('xeno-canto')) {
        question.audioPageUrl = remote
      }
    } else if (primary) {
      question.audioPageUrl = primary
      question.audioEmbedUrl = xenoCantoEmbedUrl(primary)
    }
  }

  return question
}
