import type { ReactNode } from 'react'
import { Link } from 'react-router'
import type { Offre } from '@/types'

// Icônes au trait (style Lucide)
const icons: Record<Offre['icon'], ReactNode> = {
  code: <path d="m16 18 6-6-6-6M8 6l-6 6 6 6M14.5 4l-5 16" />,
  palette: (
    <>
      <path d="M12 22a10 10 0 1 1 10-10c0 2.8-2.2 4-4 4h-1.8a2 2 0 0 0-1.5 3.3c.3.4.5.8.5 1.3 0 .8-.6 1.4-1.4 1.4H12Z" />
      <circle cx="13.5" cy="6.5" r="1" />
      <circle cx="17.5" cy="10.5" r="1" />
      <circle cx="6.5" cy="12.5" r="1" />
      <circle cx="8.5" cy="7.5" r="1" />
    </>
  ),
  layers: (
    <>
      <path d="m12 2 10 5-10 5L2 7l10-5Z" />
      <path d="m2 12 10 5 10-5M2 17l10 5 10-5" />
    </>
  ),
  bag: (
    <>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6ZM3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </>
  ),
}

const strokeProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export default function OffreCard({ icon, title, description, features, image }: Offre) {
  return (
    <article className="group relative isolate flex min-h-105 flex-col overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-white/5 to-white/1 p-7 transition-colors hover:border-primary/50 md:p-8">
      {/* Visuel à droite, fondu vers la gauche */}
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-y-0 right-0 -z-20 h-full w-3/5 object-cover object-left transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#0b0b10] via-[#0b0b10]/90 to-transparent" />
        </>
      )}
      {/* Halo violet */}
      <div className="pointer-events-none absolute -right-24 -bottom-24 -z-10 size-72 rounded-full bg-primary/20 blur-3xl transition-opacity duration-500 group-hover:bg-primary/30" />

      <span className="flex size-14 items-center justify-center rounded-full border border-primary/60 bg-primary/10 text-primary-light shadow-[0_0_20px_2px_rgba(109,93,252,0.3)]">
        <svg {...strokeProps} className="size-6">
          {icons[icon]}
        </svg>
      </span>

      <h2 className="mt-6 text-2xl font-semibold">{title}</h2>
      <p className="mt-2 max-w-xs text-white/70">{description}</p>

      <ul className="mt-6 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-3 text-sm text-white/85">
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-primary/60 text-primary-light">
              <svg {...strokeProps} className="size-3" strokeWidth={2.4}>
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <Link
          to="/contact"
          aria-label={`Demander un devis : ${title}`}
          className="flex h-10 w-16 items-center justify-center rounded-full border border-white/30 transition-colors group-hover:border-primary-light group-hover:bg-primary/20"
        >
          <span className="transition-transform group-hover:translate-x-1" aria-hidden>
            →
          </span>
        </Link>
      </div>
    </article>
  )
}
