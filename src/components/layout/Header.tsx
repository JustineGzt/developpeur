import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { navLinks, site } from '@/data/site'

function AvailabilityBadge({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      to="/contact"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-full border border-emerald-500/60 bg-emerald-950/40 px-4 py-1.5 text-sm text-emerald-300 transition-colors hover:bg-emerald-900/50"
    >
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
      </span>
      Disponible
    </Link>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-3 py-1.5 text-sm transition-colors ${
      isActive ? 'bg-white/10 text-white' : 'text-white/80 hover:text-white'
    }`

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-2xl font-bold tracking-tight text-white">
          {site.logo}
        </Link>

        {/* Menu desktop */}
        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <AvailabilityBadge />
        </div>

        {/* Bouton menu mobile */}
        <button
          className="text-2xl text-white md:hidden"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <nav className="flex flex-col items-start gap-2 border-t border-white/10 px-4 py-6 md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="mt-4">
            <AvailabilityBadge onClick={() => setOpen(false)} />
          </div>
        </nav>
      )}
    </header>
  )
}
