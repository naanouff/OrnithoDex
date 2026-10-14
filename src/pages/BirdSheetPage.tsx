import { useCallback, useEffect, useMemo, useRef } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { BirdImage } from '../components/BirdImage'
import { WildRangeMap } from '../components/WildRangeMap'
import { useSheetBrowseSwipe } from '../hooks/useSheetBrowseSwipe'
import { resolveBrowse } from '../lib/browse'
import { getBirdById } from '../lib/birds'
import { orderAccent } from '../lib/orders'
import { resolveBirdImageUrl } from '../lib/media'
import { renderInlineMarkdown, shortSourceLabel } from '../lib/text'
import type { CoursePoint, SourceRef, SourcedText } from '../types/bird'

type LocationState = { from?: string }

const EMPTY = 'Non documenté'

/** Sections affichées dans les cases du gabarit (pas dans « En savoir plus »). */
const FIELD_SECTION_LABELS = new Set(['Dimorphisme', 'Comportement', 'Habitat'])

/** Régime sauvage + description statut restent hors cases captivité / morphologie. */
const MORE_SECTION_LABELS = new Set(['Description', 'Régime', 'Chant'])

export function BirdSheetPage() {
  const { slug = '' } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const from =
    typeof (location.state as LocationState | null)?.from === 'string'
      ? (location.state as LocationState).from
      : undefined
  const fromQuiz = Boolean(from?.startsWith('/entrainement/'))
  const sheetRef = useRef<HTMLDivElement>(null)
  const bird = getBirdById(slug)
  const browse = useMemo(() => resolveBrowse(slug), [slug])

  const goPrev = useCallback(() => {
    if (browse.prevId) navigate(`/espece/${browse.prevId}`, { replace: true })
  }, [browse.prevId, navigate])

  const goNext = useCallback(() => {
    if (browse.nextId) navigate(`/espece/${browse.nextId}`, { replace: true })
  }, [browse.nextId, navigate])

  useSheetBrowseSwipe(sheetRef, {
    enabled: Boolean(bird) && !fromQuiz,
    onPrev: goPrev,
    onNext: goNext,
    canPrev: Boolean(browse.prevId),
    canNext: Boolean(browse.nextId),
  })

  useEffect(() => {
    if (!bird || fromQuiz) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goPrev()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        goNext()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [bird, fromQuiz, goPrev, goNext])

  if (!bird) {
    return (
      <div className="sheet" aria-hidden="false">
        <Link to={from ?? '/collection'} className="sheet__back">
          {fromQuiz ? '← Quiz' : '← Collection'}
        </Link>
        <p className="sources">Espèce introuvable.</p>
      </div>
    )
  }

  const hasPhoto = Boolean(resolveBirdImageUrl(bird.image))
  const photoSource = bird.imageSourceId
    ? bird.sources.find((s) => s.id === bird.imageSourceId)
    : undefined
  const photoCredit =
    bird.imageCredit ||
    (photoSource
      ? [photoSource.title, photoSource.note].filter(Boolean).join(' — ')
      : undefined)
  const posLabel = `${browse.index + 1} / ${browse.ids.length}`
  const localAudio = bird.audio?.find((a) => a.startsWith('/audio/'))
  const sourceById = new Map(bird.sources.map((s) => [s.id, s]))
  const byLabel = sectionMap(bird.sheet.sections)
  const moreSections = bird.sheet.sections.filter(
    (s) =>
      s.text.trim().length > 0 &&
      (!s.label || MORE_SECTION_LABELS.has(s.label) || !FIELD_SECTION_LABELS.has(s.label)),
  )
  const hasRange = Boolean(bird.wildRange?.regions?.length)
  const iucnLabel = bird.iucn
    ? `${bird.iucn.category}${bird.iucn.year ? ` (${bird.iucn.year})` : ''}`
    : null

  return (
    <div
      className="sheet"
      ref={sheetRef}
      aria-hidden="false"
      style={{ '--ordre': orderAccent(bird.order) } as React.CSSProperties}
    >
      <Link to={from ?? '/collection'} className="sheet__back">
        {fromQuiz ? '← Quiz' : '← Collection'}
      </Link>
      {!fromQuiz ? (
        <p className="sheet__pos" aria-label="Position dans la liste">
          {posLabel}
        </p>
      ) : null}
      <p className="sheet__live" aria-live="polite">
        {bird.commonName}
      </p>

      <h3>{bird.commonName}</h3>
      <p className="latin">{bird.scientificName}</p>
      <div className="pills">
        <span className="pill pill--order">{bird.order}</span>
        <span className="pill">{bird.family}</span>
        {bird.iucn ? (
          <span className="pill pill--iucn" title="Statut UICN">
            UICN {iucnLabel}
          </span>
        ) : null}
      </div>

      <ul className="points">
        {bird.coursePoints.map((point) => (
          <CoursePointItem
            key={`${point.level}-${point.text}`}
            point={point}
            sourceById={sourceById}
          />
        ))}
      </ul>

      {hasPhoto ? (
        <figure className="sheet__photo">
          <div className="sheet__photo-frame">
            <BirdImage
              src={bird.image}
              birdId={bird.id}
              variant="photo"
              alt={`Photo — ${bird.commonName}`}
              order={bird.order}
              loading="eager"
            />
          </div>
          <figcaption className="sheet__photo-credit">
            {photoCredit
              ? `Photo : ${photoCredit}`
              : 'Photo sourcée (voir Sources)'}
          </figcaption>
        </figure>
      ) : (
        <SheetField label="Photo" value={null} />
      )}

      <div className="sheet__fields">
        <SheetField
          label="Description morphologique"
          {...citedProps(bird.school?.morphology)}
        />
        <div className="sheet__pair">
          <SheetField
            label="Taille adulte"
            {...citedProps(bird.measurements?.adultSize)}
          />
          <SheetField
            label="Longévité"
            {...citedProps(bird.measurements?.longevity)}
          />
        </div>
        <SheetField label="Poids" {...citedProps(bird.measurements?.mass)} />
        <SheetField
          label="Période (milieu naturel)"
          {...citedProps(bird.reproduction?.season)}
        />
        <div className="sheet__pair">
          <SheetField
            label="Nombre d'œufs (milieu naturel)"
            {...citedProps(bird.reproduction?.clutch)}
          />
          <SheetField
            label="Couvaison (milieu naturel)"
            {...citedProps(bird.reproduction?.incubation)}
          />
        </div>
        <SheetField
          label="Taille de cage ou volière"
          {...citedProps(bird.school?.cageSize)}
        />
        <SheetField
          label="Prix en animalerie"
          {...citedProps(bird.school?.shopPrice)}
        />
        <SheetField
          label="Prix sur internet"
          {...citedProps(bird.school?.webPrice)}
        />
        <SheetField
          label="Dimorphisme sexuel"
          value={sectionText(byLabel, 'Dimorphisme')}
        />
        <SheetField
          label="Comportement"
          value={sectionText(byLabel, 'Comportement')}
        />
        <SheetField
          label="Habitat naturel"
          value={sectionText(byLabel, 'Habitat')}
        />
        <dl className="sheet__field">
          <dt>Origine géographique</dt>
          {hasRange ? (
            <dd>
              <WildRangeMap bird={bird} sourceById={sourceById} />
            </dd>
          ) : (
            <dd className="is-empty">{EMPTY}</dd>
          )}
        </dl>
        <div className="sheet__pair">
          <SheetField label="Statut UICN" value={iucnLabel} />
          <SheetField label="Statut CITES" {...citedProps(bird.school?.cites)} />
        </div>
        <SheetField
          label="Variétés domestiques"
          {...citedProps(bird.school?.domesticVarieties)}
        />
        <SheetField
          label="Alimentation en captivité"
          {...citedProps(bird.school?.captiveDiet)}
        />
        <SheetField
          label="Conseils captivité"
          {...citedProps(bird.school?.captiveAdvice)}
        />
        <SheetField
          label="Compatibilité"
          {...citedProps(bird.school?.compatibility)}
        />
      </div>

      {localAudio ? (
        <div className="sheet__audio">
          <p className="sheet__audio-label">Écouter</p>
          <audio controls preload="metadata" src={localAudio}>
            Lecteur audio non supporté
          </audio>
        </div>
      ) : null}

      {moreSections.length > 0 ? (
        <details className="sheet__more">
          <summary>En savoir plus</summary>
          <div className="sheet__sections">
            {moreSections.map((section) => (
              <section
                key={`${section.label ?? 'section'}-${section.text.slice(0, 24)}`}
                className="sheet__section"
              >
                {section.label ? (
                  <h4>
                    {section.label === 'Régime'
                      ? 'Régime (sauvage)'
                      : section.label === 'Description'
                        ? 'Description (statut)'
                        : section.label}
                  </h4>
                ) : null}
                <p>{renderInlineMarkdown(section.text)}</p>
                {section.sourceIds.length > 0 ? (
                  <p className="sheet__section-src">
                    {formatSourceIds(section.sourceIds, sourceById)}
                  </p>
                ) : null}
              </section>
            ))}
          </div>
        </details>
      ) : null}

      <SourcesBlock sources={bird.sources} />
    </div>
  )
}

function sectionMap(sections: SourcedText[]): Map<string, SourcedText> {
  const map = new Map<string, SourcedText>()
  for (const section of sections) {
    if (section.label) map.set(section.label, section)
  }
  return map
}

function sectionText(
  byLabel: Map<string, SourcedText>,
  label: string,
): string | null {
  const text = byLabel.get(label)?.text.trim()
  return text ? text : null
}

function citedProps(field?: { value: string; undocumented?: boolean }): {
  value: string | null
  undocumented: boolean
} {
  if (!field?.value) return { value: null, undocumented: false }
  return { value: field.value, undocumented: Boolean(field.undocumented) }
}

function SheetField({
  label,
  value,
  undocumented = false,
}: {
  label: string
  value: string | null
  undocumented?: boolean
}) {
  const empty = !value || undocumented
  return (
    <dl className="sheet__field">
      <dt>{label}</dt>
      <dd className={empty ? 'is-empty' : undefined}>
        {value ? renderInlineMarkdown(value) : EMPTY}
      </dd>
    </dl>
  )
}

function CoursePointItem({
  point,
  sourceById,
}: {
  point: CoursePoint
  sourceById: Map<string, SourceRef>
}) {
  const srcLine =
    point.level === 'sourcé' ? formatSourceIds(point.sourceIds, sourceById) : ''
  const badgeLabel = point.level === 'programme' ? 'Programme' : 'Sourcé'
  const badgeClass =
    point.level === 'programme'
      ? 'point__badge point__badge--programme'
      : 'point__badge point__badge--source'

  return (
    <li>
      <span className={badgeClass} title={badgeLabel}>
        <span className="sr-only">{badgeLabel}</span>
        {point.level === 'programme' ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
        )}
      </span>
      <span className="point__body">
        {renderInlineMarkdown(point.text)}
        {srcLine ? <span className="point__src">{srcLine}</span> : null}
      </span>
    </li>
  )
}

function SourcesBlock({ sources }: { sources: SourceRef[] }) {
  if (!sources.length) return null
  return (
    <div className="sheet__sources-block">
      <h4>Sources</h4>
      <ul>
        {sources.map((source) => (
          <li key={source.id}>
            <span className="sheet__sources-id">
              {shortSourceLabel(source, source.id)}
            </span>
            {' — '}
            {source.url ? (
              <a href={source.url} target="_blank" rel="noreferrer">
                {source.title}
              </a>
            ) : (
              source.title
            )}
            {source.note ? (
              <span className="sheet__sources-note"> ({source.note})</span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  )
}

function formatSourceIds(
  ids: string[],
  sourceById: Map<string, SourceRef>,
): string {
  if (!ids.length) return ''
  const labels = ids.map((id) => shortSourceLabel(sourceById.get(id), id))
  return [...new Set(labels)].join(' · ')
}
