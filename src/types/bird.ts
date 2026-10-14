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
  /** Libellé section fiche (Description, Habitat…). */
  label?: string
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

/** Statut UICN structuré — uniquement si section fiche remplie. */
export type IucnStatus = {
  category: string
  year?: string
  sourceIds: string[]
}

/** Valeur citée, ou trace de recherche si la base ne donne pas de fait. */
export type CitedField = {
  value: string
  sourceIds: string[]
  /** Vrai quand `value` est « Non documenté — bases consultées… », pas un fait. */
  undocumented?: boolean
}

/** Mensurations scolaires — `na` omis côté data. */
export type Measurements = {
  adultSize?: CitedField
  mass?: CitedField
  longevity?: CitedField
}

/** Reproduction en milieu naturel, chiffres ADW uniquement. */
export type Reproduction = {
  season?: CitedField
  clutch?: CitedField
  incubation?: CitedField
}

/** Cases du polycopié encore hors sections naturalistes. */
export type SchoolSheet = {
  morphology?: CitedField
  cites?: CitedField
  domesticVarieties?: CitedField
  cageSize?: CitedField
  shopPrice?: CitedField
  webPrice?: CitedField
  captiveDiet?: CitedField
  captiveAdvice?: CitedField
  compatibility?: CitedField
}

export type Bird = {
  id: string
  scientificName: string
  commonName: string
  order: string
  family: string
  programSourceId: string
  /** Photo sourcée — fiche + quiz. Chemin local `/images/birds/…` ou URL Commons. */
  image?: string
  /** URL Commons d’origine si `image` est local. */
  imageRemote?: string
  imageCredit?: string
  imageSourceId?: string
  /** Illustration naturaliste — tuiles Collection. `/images/illustrations/{id}.webp`. */
  illustration?: string
  /** Fond uni échantillonné sur la planche (hex), pour le cadre portrait. */
  illustrationBg?: string
  /** Chemins locaux `/audio/birds/…` ou URLs Xeno-canto. */
  audio?: string[]
  /** Pages XC d’origine si `audio` est local. */
  audioRemote?: string[]
  wildRange?: WildRange
  iucn?: IucnStatus
  measurements?: Measurements
  reproduction?: Reproduction
  school?: SchoolSheet
  sheet: {
    status: SheetStatus
    sections: SourcedText[]
  }
  coursePoints: CoursePoint[]
  sources: SourceRef[]
}
