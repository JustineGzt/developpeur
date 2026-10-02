import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  title?: string
  subtitle?: string
  className?: string
}

export default function Section({ children, title, subtitle, className = '' }: SectionProps) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-4">
        {title && <h2 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h2>}
        {subtitle && <p className="mb-12 max-w-2xl text-lg text-muted">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
