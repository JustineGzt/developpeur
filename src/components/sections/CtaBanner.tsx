import { Link } from 'react-router'

interface CtaBannerProps {
  eyebrow: string
  title: string
  text: string
}

// Bandeau d'appel à l'action avec l'image contact2 en fond
export default function CtaBanner({ eyebrow, title, text }: CtaBannerProps) {
  return (
    <section className="pb-16 md:pb-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 px-8 py-12 md:px-14 md:py-16">
          {/* Image de fond + dégradé pour la lisibilité du texte */}
          <img
            src="/contact2.png"
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-[75%_center]"
          />
          <div className="absolute inset-0 -z-10 bg-linear-to-r from-black via-black/70 to-black/0" />

          <p className="text-sm font-medium uppercase tracking-widest text-primary-light">{eyebrow}</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
          <p className="mt-4 max-w-md text-lg text-white/80">{text}</p>
          <Link
            to="/contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 font-medium text-white shadow-[0_0_24px_2px_rgba(109,93,252,0.45)] transition-colors hover:bg-primary-dark"
          >
            Me contacter
            <span className="transition-transform group-hover:translate-x-1" aria-hidden>
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
