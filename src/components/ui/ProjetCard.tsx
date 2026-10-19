import type { CSSProperties } from 'react'
import type { Projet } from '@/types'

interface ProjetCardProps extends Projet {
  index: number
  featured?: boolean
  className?: string
}

export default function ProjetCard({
  title,
  category,
  description,
  image,
  technos,
  url,
  accent = '#8f82ff',
  index,
  featured = false,
  className = '',
}: ProjetCardProps) {
  const [type, detail] = category.split('\n')

  return (
    <article
      style={{ '--accent': accent, animationDelay: `${index * 90}ms` } as CSSProperties}
      className={`group relative isolate flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface transition duration-500 hover:-translate-y-1.5 hover:border-(--accent)/60 hover:shadow-[0_20px_60px_-15px_var(--accent)] motion-safe:animate-fade-up ${className}`}
    >
      <div className={`relative overflow-hidden ${featured ? 'aspect-video lg:aspect-auto lg:flex-1' : 'aspect-video'}`}>
        {image && (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}
        {/* Dégradé + voile coloré au survol */}
        <div className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-transparent" />
        <div className="absolute inset-0 bg-(--accent) opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-25" />

        <span className="absolute top-4 left-4 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-xs font-medium backdrop-blur">
          {type}
        </span>
        <span className="absolute top-3 right-5 text-4xl font-bold text-white/15 transition-colors duration-500 group-hover:text-(--accent)">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="relative flex items-end justify-between gap-4 p-6">
        <div>
          {detail && <p className="text-sm text-(--accent)">{detail}</p>}
          <h3 className={`mt-1 font-semibold ${featured ? 'text-3xl' : 'text-xl'}`}>
            {url ? (
              // Le lien s'étend à toute la carte grâce au pseudo-élément
              <a href={url} target="_blank" rel="noreferrer" className="after:absolute after:inset-0 after:z-10">
                {title}
              </a>
            ) : (
              title
            )}
          </h3>
          {description && <p className="mt-2 text-muted">{description}</p>}
          {technos && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {technos.map((t) => (
                <li key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs">
                  {t}
                </li>
              ))}
            </ul>
          )}
          {url && <p className="mt-3 text-sm text-white/50 transition-colors group-hover:text-(--accent)">Voir le site ↗</p>}
        </div>
        <span
          aria-hidden
          className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 transition duration-500 group-hover:-rotate-45 group-hover:border-(--accent) group-hover:bg-(--accent) group-hover:text-black"
        >
          →
        </span>
      </div>

      {/* Liseré lumineux en bas de carte */}
      <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-(--accent) transition-transform duration-500 group-hover:scale-x-100" />
    </article>
  )
}
