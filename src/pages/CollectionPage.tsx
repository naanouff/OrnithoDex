import { useEffect, useMemo, useRef, useState } from 'react'
import { birds } from '../data/birds'
import { BirdCard } from '../components/BirdCard'
import { setBrowseIds } from '../lib/browse'
import { COLLECTION_ORDER_CHIPS } from '../lib/orders'

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
  const [cols, setCols] = useState<Cols>(loadCols)
  const [revealed, setRevealed] = useState(false)
  const readyRef = useRef(new Set<string>())
  const paintedRef = useRef(false)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return birds.filter((bird) => {
      const orderOk = order === 'all' || bird.order === order
      if (!orderOk) return false
      if (!q) return true
      return (
        bird.commonName.toLowerCase().includes(q) ||
        bird.scientificName.toLowerCase().includes(q)
      )
    })
  }, [query, order])

  const listKey = filtered.map((bird) => bird.id).join('|')
  const [listStamp, setListStamp] = useState(listKey)

  if (listStamp !== listKey) {
    readyRef.current = new Set()
    paintedRef.current = false
    setListStamp(listKey)
    setRevealed(false)
  }

  function markReady(id: string) {
    readyRef.current.add(id)
    if (paintedRef.current && readyRef.current.size >= filtered.length) {
      setRevealed(true)
    }
  }

  useEffect(() => {
    paintedRef.current = true
    if (filtered.length === 0 || readyRef.current.size >= filtered.length) {
      setRevealed(true)
    }
    return () => {
      paintedRef.current = false
    }
  }, [listStamp, filtered.length])

  function onCols(next: Cols) {
    setCols(next)
    try {
      localStorage.setItem(COLS_KEY, String(next))
      sessionStorage.removeItem(COLS_KEY)
    } catch {
      /* ignore */
    }
  }

  return (
    <section className="screen" aria-label="Collection">
      <header className="screen-head">
        <div>
          <h2>Collection</h2>
          <p>Tes cartes d’espèces — cherche et filtre</p>
        </div>
        <label
          htmlFor="search"
          style={{
            position: 'absolute',
            width: 1,
            height: 1,
            overflow: 'hidden',
            clip: 'rect(0,0,0,0)',
          }}
        >
          Rechercher
        </label>
        <input
          className="search"
          id="search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Nom commun ou latin…"
          autoComplete="off"
        />
        <div className="filter-row">
          <div className="filter-field">
            <label htmlFor="filter-order">Ordre</label>
            <select
              className="filter-select"
              id="filter-order"
              aria-label="Filtrer par ordre"
              value={order}
              onChange={(e) => setOrder(e.target.value || 'all')}
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
