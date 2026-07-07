import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/fechas', label: 'Fechas' },
  { to: '/fotos', label: 'Fotos' },
  { to: '/videos', label: 'Videos' },
  { to: '/viajes', label: 'Viajes' },
  { to: '/compromisos', label: 'Compromisos' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--paper)]/90 backdrop-blur border-b border-[var(--rose)]/30">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-display text-xl text-[var(--wine)]">
          Kim <span className="font-hand text-2xl text-[var(--rose)]">&</span> Tú
        </span>
        <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm font-medium">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `pb-1 border-b-2 transition-colors ${
                    isActive
                      ? 'border-[var(--wine)] text-[var(--wine)]'
                      : 'border-transparent text-[var(--ink)]/70 hover:text-[var(--wine)]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
