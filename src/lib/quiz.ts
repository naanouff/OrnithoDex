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

export type SeriesSize = 10 | 20

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

export function parseSeriesSize(raw: string | null): SeriesSize | null {
  if (raw === '10') return 10
  if (raw === '20') return 20
  return null
}

export function xenoCantoEmbedUrl(pageUrl: string): string | undefined {
  const m = pageUrl.match(/xeno-canto\.org\/(\d+)/i)
  if (!m) return undefined
  return `https://xeno-canto.org/${m[1]}/embed`
}

/**
 * Quiz chant : uniquement audio **local** (`/audio/…`).
 * Les embeds Xeno-canto distants peuvent afficher le nom de l’espèce (fuite de réponse) —
 * exclus jusqu’à fichier local (P0.4 remédiation 0.3).
 */
function hasPlayableAudio(bird: Bird): boolean {
  return Boolean(bird.audio?.some((a) => a.startsWith('/audio/')))
}

export function birdsForMode(mode: QuizMode): Bird[] {
  if (mode === 'photo') {
    return birds.filter((bird) => Boolean(resolveBirdImageUrl(bird.image)))
  }
  return birds.filter((bird) => hasPlayableAudio(bird))
}

export function buildQuestion(
  mode: QuizMode,
  excludeIds: string[] = [],
): QuizQuestion | null {
  const excluded = new Set(excludeIds)
  const pool = birdsForMode(mode).filter((bird) => !excluded.has(bird.id))
  if (pool.length < 4) {
    /* Fin de série : trop peu d’espèces restantes pour 4 choix. */
    const fallback = birdsForMode(mode).filter((bird) => !excluded.has(bird.id))
    if (fallback.length === 0) return null
    /* Si < 4 restantes mais encore des oiseaux : élargir distracteurs hors exclusion. */
    if (pool.length < 1) return null
  }

  const pickPool =
    pool.length >= 4
      ? pool
      : birdsForMode(mode).filter((bird) => !excluded.has(bird.id))
  if (pickPool.length < 1) return null

  const bird = pickPool[Math.floor(Math.random() * pickPool.length)]!
  const distractorPool = birdsForMode(mode).filter((candidate) => candidate.id !== bird.id)

  const sameOrder = distractorPool.filter((candidate) => candidate.order === bird.order)
  const others = distractorPool.filter((candidate) => candidate.order !== bird.order)

  const distractorSource = [
    ...shuffleInPlace([...sameOrder]),
    ...shuffleInPlace([...others]),
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
    const local = bird.audio?.find((a) => a.startsWith('/audio/'))
    if (local) {
      question.audioUrl = local
      const remote = bird.audioRemote?.[0]
      if (remote?.includes('xeno-canto')) {
        question.audioPageUrl = remote
      }
    }
  }

  return question
}
