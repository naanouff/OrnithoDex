import { NavLink } from 'react-router-dom'

const tabs = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/collection', label: 'Collection', end: false },
  { to: '/entrainement', label: 'Entraînement', end: false },
] as const

export function BottomNav() {
  return (
    <nav
      className="sticky bottom-0 z-20 -mx-4 mt-auto border-t-[3px] border-navy bg-cream/95 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-sm"
      aria-label="Navigation principale"
    >
      <ul className="grid grid-cols-3 gap-1">
        {tabs.map((tab) => (
          <li key={tab.to}>
            <NavLink
              to={tab.to}
              end={tab.end}
              className={({ isActive }) =>
                [
                  'font-display flex min-h-11 items-center justify-center rounded-[16px] px-2 text-sm font-semibold',
                  isActive
                    ? 'bg-gradient-to-b from-yellow to-orange text-navy-deep'
                    : 'text-muted',
                ].join(' ')
              }
            >
              {tab.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
