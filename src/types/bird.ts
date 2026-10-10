/** Types runtime — alignés sur les fiches du naturaliste. */

export type SheetStatus = 'liste_seule' | 'partielle' | 'complete'

export type CoursePointLevel = 'programme' | 'sourcé'

export type HemisphereCode = 'AF' | 'AU' | 'AS' | 'AM' | 'EU' | 'multi'

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

/** Répartition sauvage — uniquement si documentée dans la fiche. */
export type WildRange = {
  regions: string[]
  hemisphere?: HemisphereCode
  summary?: string
  sourceIds: string[]
}

export type Bird = {
  id: string
  scientificName: string
  commonName: string
  order: string
  family: string
  programSourceId: string
  /** Chemin local `/images/birds/…` ou URL Commons. */
  image?: string
  imageRemote?: string
  imageCredit?: string
  imageSourceId?: string
  /** Chemins locaux `/audio/birds/…` ou URLs Xeno-canto. */
  audio?: string[]
  audioRemote?: string[]
  wildRange?: WildRange
  sheet: {
    status: SheetStatus
    sections: SourcedText[]
  }
  coursePoints: CoursePoint[]
  sources: SourceRef[]
}
