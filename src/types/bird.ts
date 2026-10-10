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
  /** Chemin local `/images/birds/…` ou URL Commons. */
  image?: string
  /** URL Commons d’origine si `image` est local. */
  imageRemote?: string
  imageCredit?: string
  imageSourceId?: string
  /** Chemins locaux `/audio/birds/…` ou URLs Xeno-canto. */
  audio?: string[]
  /** Pages XC d’origine si `audio` est local. */
  audioRemote?: string[]
  sheet: {
    status: SheetStatus
    sections: SourcedText[]
  }
  coursePoints: CoursePoint[]
  sources: SourceRef[]
}
