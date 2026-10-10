/** Types runtime — peuplés à l’étape « dataset aligné sur les fiches ». */

export type SheetStatus = 'liste_seule' | 'partielle' | 'complete'

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

export type Bird = {
  id: string
  scientificName: string
  commonName: string
  order: string
  family: string
  programSourceId: string
  image?: string
  audio?: string[]
  sheet: {
    status: SheetStatus
    sections: SourcedText[]
  }
  sources: SourceRef[]
}
