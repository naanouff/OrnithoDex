import { useEffect, useMemo, useRef, useState } from 'react'
import { birds } from '../data/birds'
import { BirdCard } from '../components/BirdCard'
import { setBrowseIds } from '../lib/browse'
import { COLLECTION_ORDER_CHIPS } from '../lib/orders'
import { foldSearch } from '../lib/text'

const COLS_KEY = 'ornithodex.collection.cols'
const COLS = [2, 3, 4] as const

type Cols = (typeof COLS)[number]

function parseCols(raw: string | null): Cols | null {
  const n = Number(raw)
  if (n === 2 || n === 3 || n === 4) return n
  return null
}

/** Préférence durable ; migre une éventuelle valeur `sessionStorage`. */
function loadCols(): Cols {
  try {
    const fromLocal = parseCols(localStorage.getItem(COLS_KEY))
    if (fromLocal !== null) return fromLocal

    const fromSession = parseCols(sessionStorage.getItem(COLS_KEY))
    if (fromSession !== null) {
      localStorage.setItem(COLS_KEY, String(fromSession))
      sessionStorage.removeItem(COLS_KEY)
      return fromSession
    }
  } catch {
    /* storage indisponible */
  }
  return 2
}

export function CollectionPage() {
  const [query, setQuery] = useState('')
  const [order, setOrder] = useState('all')
  const [family, setFamily] = useState('all')
  const [cols, setCols] = useState<Cols>(loadCols)
  const [revealed, setRevealed] = useState(false)
  const readyRef = useRef(new Set<string>())
  const paintedRef = useRef(false)

  const families = useMemo(() => {
    const set = new Set<string>()
    for (const bird of birds) {
      if (order !== 'all' && bird.order !== order) continue
      set.add(bird.family)
    }
    return [...set].sort((a, b) => a.localeCompare(b, 'fr'))
  }, [order])

  const filtered = useMemo(() => {
    const q = foldSearch(query.trim())
    return birds.filter((bird) => {
      const orderOk = order === 'all' || bird.order === order
      if (!orderOk) return false
      const familyOk = family === 'all' || bird.family === family
      if (!familyOk) return false
      if (!q) return true
      return (
        foldSearch(bird.commonName).includes(q) ||
        foldSearch(bird.scientificName).includes(q)
      )
    })
  }, [query, order, family])

  const firstRowCount = Math.min(filtered.length, cols)
  const listKey = `${filtered.map((bird) => bird.id).join('|')}|${cols}`
  const [listStamp, setListStamp] = useState(listKey)

  if (listStamp !== listKey) {
    readyRef.current = new Set()
    paintedRef.current = false
    setListStamp(listKey)
    setRevealed(false)
  }

  function markReady(id: string) {
    readyRef.current.add(id)
    const firstRowIds = filtered.slice(0, firstRowCount).map((b) => b.id)
    const firstRowReady = firstRowIds.every((bid) => readyRef.current.has(bid))
    if (paintedRef.current && (firstRowReady || readyRef.current.size >= filtered.length)) {
      setRevealed(true)
    }
  }

  useEffect(() => {
    paintedRef.current = true
    const firstRowIds = filtered.slice(0, firstRowCount).map((b) => b.id)
    const firstRowReady =
      firstRowIds.length === 0 ||
      firstRowIds.every((bid) => readyRef.current.has(bid))
    if (filtered.length === 0 || firstRowReady) {
      setRevealed(true)
    }
    return () => {
      paintedRef.current = false
    }
  }, [listStamp, filtered, firstRowCount])

  useEffect(() => {
    if (family !== 'all' && !families.includes(family)) {
      setFamily('all')
    }
  }, [families, family])

  function onCols(next: Cols) {
    setCols(next)
    try {
      localStorage.setItem(COLS_KEY, String(next))
      sessionStorage.removeItem(COLS_KEY)
    } catch {
      /* ignore */
    }
  }

  function onOrder(next: string) {
    setOrder(next || 'all')
    setFamily('all')
  }

  return (
    <section className="screen" aria-label="Collection">
      <header className="screen-head">
        <div>
          <h2>Collection</h2>
          <p>Tes cartes d’espèces — cherche et filtre</p>
        </div>
        <label htmlFor="search" className="sr-only">
          Rechercher
        </label>
        <div className="search-wrap">
          <input
            className="search"
            id="search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Nom commun ou latin…"
            autoComplete="off"
          />
          {query ? (
            <button
              type="button"
              className="search-clear"
              aria-label="Effacer la recherche"
              onClick={() => setQuery('')}
            >
              ×
            </button>
          ) : null}
        </div>
        <p className="collection-count" aria-live="polite">
          {filtered.length} espèce{filtered.length === 1 ? '' : 's'}
        </p>
        <div className="filter-row">
          <div className="filter-field">
            <label htmlFor="filter-order">Ordre</label>
            <select
              className="filter-select"
              id="filter-order"
              aria-label="Filtrer par ordre"
              value={order}
              onChange={(e) => onOrder(e.target.value || 'all')}
            >
              {COLLECTION_ORDER_CHIPS.map((chip) => (
                <option key={chip.id} value={chip.id}>
                  {chip.id === 'all' ? 'Tous les ordres' : chip.label}
                </option>
              ))}
            </select>
          </div>
          <div className="density" role="group" aria-label="Taille des tuiles">
            <DensityButton cols={2} current={cols} onCols={onCols} />
            <DensityButton cols={3} current={cols} onCols={onCols} />
            <DensityButton cols={4} current={cols} onCols={onCols} />
          </div>
        </div>
        <div className="filter-field">
          <label htmlFor="filter-family">Famille</label>
          <select
            className="filter-select"
            id="filter-family"
            aria-label="Filtrer par famille"
            value={family}
            onChange={(e) => setFamily(e.target.value || 'all')}
          >
            <option value="all">Toutes les familles</option>
            {families.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </header>
      <div
        className={revealed ? 'grid is-revealed' : 'grid'}
        data-cols={cols}
        aria-busy={!revealed}
      >
        {filtered.length === 0 ? (
          <p className="empty">Aucune espèce pour ces filtres.</p>
        ) : (
          filtered.map((bird, index) => (
            <BirdCard
              key={bird.id}
              bird={bird}
              row={Math.floor(index / cols)}
              reveal={revealed}
              loading={index < cols * 2 ? 'eager' : 'lazy'}
              onReady={() => markReady(bird.id)}
              onOpen={() => setBrowseIds(filtered.map((b) => b.id))}
            />
          ))
        )}
      </div>
    </section>
  )
}

function DensityButton({
  cols,
  current,
  onCols,
}: {
  cols: Cols
  current: Cols
  onCols: (cols: Cols) => void
}) {
  return (
    <button
      type="button"
      className="density__btn"
      data-cols={cols}
      aria-pressed={current === cols}
      title={`${cols} colonnes`}
      aria-label={`${cols} colonnes`}
      onClick={() => onCols(cols)}
    >
      <ColsIcon cols={cols} />
    </button>
  )
}

function ColsIcon({ cols }: { cols: Cols }) {
  if (cols === 2) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <rect x="3" y="4" width="8" height="16" rx="1.5" />
        <rect x="13" y="4" width="8" height="16" rx="1.5" />
      </svg>
    )
  }
  if (cols === 3) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <rect x="2" y="4" width="5.5" height="16" rx="1.2" />
        <rect x="9.25" y="4" width="5.5" height="16" rx="1.2" />
        <rect x="16.5" y="4" width="5.5" height="16" rx="1.2" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="1.5" y="4" width="4" height="16" rx="1" />
      <rect x="7.2" y="4" width="4" height="16" rx="1" />
      <rect x="12.8" y="4" width="4" height="16" rx="1" />
      <rect x="18.5" y="4" width="4" height="16" rx="1" />
    </svg>
  )
}
