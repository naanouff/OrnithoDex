import { NavLink } from 'react-router-dom'

const tabs = [
  {
    to: '/',
    label: 'Accueil',
    end: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-10.5z" />
      </svg>
    ),
  },
  {
    to: '/collection',
    label: 'Collection',
    end: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    to: '/entrainement',
    label: 'Entraînement',
    end: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M6 12h12M4 8h2v8H4zM18 8h2v8h-2z" />
      </svg>
    ),
  },
] as const

export function BottomNav() {
  return (
    <nav className="tabbar" aria-label="Navigation principale">
      {tabs.map((tab) => (
        <NavLink key={tab.to} to={tab.to} end={tab.end}>
          {tab.icon}
          {tab.label}
        </NavLink>
      ))}
    </nav>
  )
}
