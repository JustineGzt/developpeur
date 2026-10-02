import type { ReactNode } from 'react'
import type { Service } from '@/types'

// Icônes au trait (style Lucide)
const icons: Record<Service['icon'], ReactNode> = {
  vitrine: (
    <>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
  ecommerce: (
    <>
      <circle cx="9" cy="20" r="1" />
      <circle cx="19" cy="20" r="1" />
      <path d="M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L22 7H6" />
    </>
  ),
  app: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </>
  ),
  refonte: (
    <>
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16" />
      <path d="M8 16H3v5" />
    </>
  ),
  maintenance: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.8 3.8Z" />
  ),
  seo: <path d="m22 7-8.5 8.5-5-5L2 17M16 7h6v6" />,
}

export default function ServiceCard({ icon, title, description }: Service) {
  return (
    <article className="group relative isolate overflow-hidden rounded-2xl border border-white/10 bg-linear-to-b from-white/4 to-white/1 p-7 transition-colors hover:border-primary/50">
      {/* Halo violet au survol */}
      <div className="pointer-events-none absolute -top-20 -right-20 -z-10 size-48 rounded-full bg-primary/25 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <span className="flex size-12 items-center justify-center rounded-full border border-primary/60 bg-primary/10 text-primary-light transition-shadow group-hover:shadow-[0_0_20px_2px_rgba(109,93,252,0.5)]">
        <svg
          viewBox="0 0 24 24"
          className="size-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          {icons[icon]}
        </svg>
      </span>
      <h3 className="mt-6 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/60">{description}</p>
    </article>
  )
}
