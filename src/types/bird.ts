/** Types runtime — alignés sur les fiches du naturaliste. */

export type SheetStatus = 'liste_seule' | 'partielle' | 'complete'

export type CoursePointLevel = 'programme' | 'sourcé'

export type SourceRef = {
  id: string
  title: string
  publisher?: string
  year?: string
  url?: string
  note?: string
}

export type SourcedText = {
  text: string
  /** Obligatoire dès que `text` est non vide. */
  sourceIds: string[]
}

export type CoursePoint = {
  level: CoursePointLevel
  text: string
  sourceIds: string[]
}

export type Bird = {
  id: string
  scientificName: string
  commonName: string
  order: string
  family: string
  programSourceId: string
  /** URL Commons (ou chemin local plus tard). */
  image?: string
  imageCredit?: string
  imageSourceId?: string
  /** URLs Xeno-canto (ou chemins locaux plus tard). */
  audio?: string[]
  sheet: {
    status: SheetStatus
    sections: SourcedText[]
  }
  coursePoints: CoursePoint[]
  sources: SourceRef[]
}
