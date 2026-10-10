import { useMemo, useState } from 'react'
import { birds } from '../data/birds'
import { BirdCard } from '../components/BirdCard'
import { COLLECTION_ORDER_CHIPS } from '../lib/orders'

export function CollectionPage() {
  const [query, setQuery] = useState('')
  const [order, setOrder] = useState('all')

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
        <div className="filters" role="group" aria-label="Filtrer par ordre">
          {COLLECTION_ORDER_CHIPS.map((chip) => (
            <button
              key={chip.id}
              type="button"
              className="chip"
              aria-pressed={order === chip.id}
              onClick={() => setOrder(chip.id)}
            >
              {chip.label}
            </button>
          ))}
        </div>
      </header>
      <div className="grid">
        {filtered.length === 0 ? (
          <p className="empty">Aucune espèce pour ces filtres.</p>
        ) : (
          filtered.map((bird) => <BirdCard key={bird.id} bird={bird} />)
        )}
      </div>
    </section>
  )
}
