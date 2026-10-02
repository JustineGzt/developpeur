import { Link } from 'react-router'
import type { Projet } from '@/types'
import { projets } from '@/data/projets'

function ProjetTile({ projet, large = false, className = '' }: { projet: Projet; large?: boolean; className?: string }) {
  return (
    <Link
      to="/realisations"
      className={`group relative isolate block overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-primary/25 via-surface to-black ${
        large ? 'min-h-[380px]' : 'min-h-[220px]'
      } ${className}`}
    >
      {projet.image && (
        <img
          src={projet.image}
          alt=""
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[65%_center] transition-transform duration-700 group-hover:scale-105"
        />
      )}
      {/* Dégradé pour la lisibilité du texte */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-black/80 via-black/30 to-transparent" />

      <div className={large ? 'p-8 md:p-10' : 'p-6'}>
        <h3 className={large ? 'text-5xl font-bold tracking-tight md:text-6xl' : 'text-xl font-semibold'}>
          {projet.title}
        </h3>
        <p className={`mt-2 whitespace-pre-line text-white/70 ${large ? 'text-xl md:text-2xl' : 'text-sm'}`}>
          {projet.category}
        </p>

        {large && (
          <span className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/25 bg-black/30 px-6 py-3 text-sm font-medium backdrop-blur transition-colors group-hover:bg-white/10">
            Voir le projet <span aria-hidden>→</span>
          </span>
        )}
      </div>

      {!large && (
        <span
          aria-hidden
          className="absolute bottom-6 left-6 flex size-10 items-center justify-center rounded-full border border-white/25 bg-black/30 backdrop-blur transition-colors group-hover:bg-white/10"
        >
          →
        </span>
      )}
    </Link>
  )
}

export default function ProjetsBento() {
  const [featured, ...others] = projets

  return (
    <div className="grid gap-4 md:h-[520px] md:grid-cols-3 md:grid-rows-2">
      <ProjetTile projet={featured} large className="md:col-span-2 md:row-span-2" />
      {others.slice(0, 2).map((p) => (
        <ProjetTile key={p.title} projet={p} />
      ))}
    </div>
  )
}
