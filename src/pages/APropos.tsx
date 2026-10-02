import { Link } from 'react-router'
import Section from '@/components/ui/Section'
import CtaBanner from '@/components/sections/CtaBanner'

const approche = [
  'Écoute et compréhension de vos besoins',
  'Design UX/UI pensé pour vos utilisateurs',
  'Développement web sur mesure',
  'Suivi tout au long du projet',
  'Résultats concrets et durables',
]

// Icônes au trait (style Lucide)
const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

const valeurs = [
  {
    title: 'Qualité',
    description: 'Un travail soigné, avec une attention particulière aux détails.',
    icon: <path d="M6 3h12l4 6-10 12L2 9l4-6ZM2 9h20M12 21 8 9l4-6 4 6-4 12" />,
  },
  {
    title: 'Proximité',
    description: 'Un échange transparent et un accompagnement humain.',
    icon: (
      <>
        <circle cx="9" cy="7" r="4" />
        <path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2M16 3.1a4 4 0 0 1 0 7.8M22 21v-2a4 4 0 0 0-3-3.9" />
      </>
    ),
  },
  {
    title: 'Innovation',
    description: 'Des solutions modernes pour répondre aux besoins d’aujourd’hui et de demain.',
    icon: (
      <>
        <path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1Z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-4A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2Z" />
        <path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5" />
      </>
    ),
  },
]

export default function APropos() {
  return (
    <>
      <title>À propos | XU XI</title>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        {/* Image de fond + dégradés pour la lisibilité du texte */}
        <img
          src="/apropos.png"
          alt=""
          aria-hidden
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[75%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-black via-black/70 to-black/0" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-t from-black to-transparent" />

        <div className="mx-auto max-w-6xl px-4 py-24 md:py-32">
          <p className="flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-primary-light">
            À propos
            <span className="h-px w-8 bg-primary-light" />
          </p>
          <h1 className="mt-6 max-w-2xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Derrière XU XI, une passion pour le <span className="text-primary-light">digital</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80 md:text-xl">
            Développeur web avant tout, je conçois aussi l’UX/UI de vos interfaces. J’accompagne entrepreneurs, créatifs
            et marques de la maquette jusqu’à la mise en ligne.
          </p>
          <Link
            to="/contact"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 font-medium text-white shadow-[0_0_24px_2px_rgba(109,93,252,0.45)] transition-colors hover:bg-primary-dark"
          >
            Me contacter
            <span className="transition-transform group-hover:translate-x-1" aria-hidden>
              →
            </span>
          </Link>
        </div>
      </section>

      {/* Mon approche */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-primary/20 blur-3xl" />
            <img
              src="/apropos2.png"
              alt="Poste de travail avec un écran affichant un paysage de montagnes"
              loading="lazy"
              className="aspect-4/3 w-full rounded-2xl border border-white/10 object-cover"
            />
          </div>

          <div>
            <p className="flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-primary-light">
              Mon approche
              <span className="h-px w-8 bg-primary-light" />
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Un accompagnement
              <br />
              simple <span className="text-primary-light">et efficace</span>
            </h2>
            <p className="mt-5 text-white/70">
              Chaque projet est unique. Je pense d’abord l’expérience utilisateur et le design de l’interface, puis je
              développe un site rapide, solide et simple à utiliser.
            </p>
            <ul className="mt-8 space-y-4">
              {approche.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-primary/60 bg-primary/10 text-primary-light">
                    <svg viewBox="0 0 24 24" className="size-3.5" {...strokeProps}>
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Mes valeurs */}
      <Section className="pt-0 md:pt-0">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Mes valeurs</h2>
        <p className="mt-2 text-lg text-white/70">Des principes simples qui guident chaque projet.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {valeurs.map((v) => (
            <article
              key={v.title}
              className="group relative isolate overflow-hidden rounded-2xl border border-white/10 bg-linear-to-b from-white/4 to-white/1 p-7 transition-colors hover:border-primary/50"
            >
              <div className="pointer-events-none absolute -top-20 -right-20 -z-10 size-48 rounded-full bg-primary/25 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <svg viewBox="0 0 24 24" className="size-8 text-primary-light" {...strokeProps}>
                {v.icon}
              </svg>
              <h3 className="mt-6 text-xl font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{v.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <CtaBanner
        eyebrow="Envie de collaborer ?"
        title="Discutons de votre projet"
        text="Je suis toujours ouvert à de nouveaux projets et collaborations."
      />
    </>
  )
}
