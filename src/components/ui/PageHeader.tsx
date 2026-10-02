import type { ReactNode } from 'react'

interface PageHeaderProps {
  title: ReactNode
  subtitle?: string
  eyebrow?: string
}

export default function PageHeader({ title, subtitle, eyebrow }: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Grille discrète qui s'estompe vers les bords */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] bg-size-[56px_56px] mask-[radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]"
      />
      {/* Halos violets */}
      <div aria-hidden className="absolute -top-32 right-[-10%] -z-10 h-96 w-160 rounded-full bg-primary/25 blur-3xl" />
      <div aria-hidden className="absolute top-1/2 right-[15%] -z-10 size-40 rounded-full bg-primary-light/20 blur-2xl" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-t from-black to-transparent" />

      <div className="mx-auto max-w-6xl px-4 py-24 md:py-32">
        {eyebrow && (
          <p className="flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-primary-light">
            {eyebrow}
            <span className="h-px w-8 bg-primary-light" />
          </p>
        )}
        <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">{title}</h1>
        {subtitle && <p className="mt-6 max-w-xl text-lg text-white/80 md:text-xl">{subtitle}</p>}
      </div>
    </section>
  )
}
