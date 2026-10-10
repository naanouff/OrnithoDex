import { useMemo, useState } from 'react'
import { birds } from '../data/birds'
import { listFamilies, listOrders } from '../lib/birds'
import { BirdCard } from '../components/BirdCard'

export function CollectionPage() {
  const [query, setQuery] = useState('')
  const [order, setOrder] = useState('')
  const [family, setFamily] = useState('')

  const orders = useMemo(() => listOrders(), [])
  const families = useMemo(() => listFamilies(order || undefined), [order])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return birds.filter((bird) => {
      if (order && bird.order !== order) return false
      if (family && bird.family !== family) return false
      if (!q) return true
      return (
        bird.commonName.toLowerCase().includes(q) ||
        bird.scientificName.toLowerCase().includes(q) ||
        bird.family.toLowerCase().includes(q) ||
        bird.order.toLowerCase().includes(q)
      )
    })
  }, [query, order, family])

  return (
    <main className="flex flex-1 flex-col gap-3 pb-2">
      <header className="space-y-1">
        <h1 className="font-display text-3xl font-bold tracking-tight text-navy">
          Collection
        </h1>
        <p className="text-sm font-bold text-muted">
          {filtered.length} espèce{filtered.length > 1 ? 's' : ''}
        </p>
      </header>

      <label className="sr-only" htmlFor="bird-search">
        Rechercher une espèce
      </label>
      <input
        id="bird-search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Nom, latin, famille…"
        className="min-h-12 w-full rounded-[16px] border-[3px] border-navy bg-white px-4 text-base font-bold text-ink shadow-[0_4px_0_rgb(27_54_93/0.1)] outline-none focus:outline focus:outline-3 focus:outline-offset-2 focus:outline-orange"
      />

      <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <FilterChip
          label="Tous"
          pressed={!order}
          onClick={() => {
            setOrder('')
            setFamily('')
          }}
        />
        {orders.map((item) => (
          <FilterChip
            key={item}
            label={item}
            pressed={order === item}
            onClick={() => {
              setOrder(item)
              setFamily('')
            }}
          />
        ))}
      </div>

      {order ? (
        <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <FilterChip
            label="Toutes familles"
            pressed={!family}
            onClick={() => setFamily('')}
          />
          {families.map((item) => (
            <FilterChip
              key={item}
              label={item}
              pressed={family === item}
              onClick={() => setFamily(item)}
            />
          ))}
        </div>
      ) : null}

      {filtered.length === 0 ? (
        <p className="py-10 text-center font-bold text-muted">
          Aucune espèce pour ces filtres.
        </p>
      ) : (
        <ul className="grid grid-cols-2 gap-3">
          {filtered.map((bird) => (
            <li key={bird.id}>
              <BirdCard bird={bird} />
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}

function FilterChip({
  label,
  pressed,
  onClick,
}: {
  label: string
  pressed: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={[
        'font-display min-h-11 shrink-0 rounded-full border-[2.5px] border-navy px-3.5 text-sm font-semibold shadow-[0_3px_0_rgb(27_54_93/0.12)]',
        pressed
          ? 'bg-gradient-to-b from-yellow to-orange text-navy-deep'
          : 'bg-white text-navy',
      ].join(' ')}
    >
      {label}
    </button>
  )
}
