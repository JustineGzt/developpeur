import { Link } from 'react-router'
import Button from '@/components/ui/Button'
import Process from '@/components/sections/Process'
import Section from '@/components/ui/Section'
import ServiceCard from '@/components/ui/ServiceCard'
import ProjetsBento from '@/components/sections/ProjetsBento'
import { services } from '@/data/services'

export default function Home() {
  return (
    <>
      <title>Développeur web freelance | XU XI</title>
      {/* Hero */}
      <section className="relative isolate flex h-[85vh] min-h-[600px] max-h-[900px] items-center overflow-hidden">
        {/* Image de fond + dégradés pour la lisibilité du texte */}
        <img
          src="/deashbord.png"
          alt=""
          aria-hidden
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-black via-black/70 to-black/10" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-black to-transparent" />

        <div className="mx-auto w-full max-w-6xl px-4 py-24">
          <h1 className="text-5xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Créer
            <br />
            Développer
            <br />
            <span className="text-primary-light">Automatiser</span>
          </h1>
          <p className="mt-8 max-w-md text-lg text-white/80 md:text-xl">
            Des expériences digitales uniques pour des projets qui sortent du lot.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button to="/realisations">Voir mes projets →</Button>
            <Button to="/contact" variant="outline">
              Me contacter
            </Button>
          </div>
        </div>
      </section>

      <Process />

      <Section>
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-primary-light">
              Services
              <span className="h-px w-8 bg-primary-light" />
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Mes <span className="text-primary-light">services</span>
            </h2>
            <p className="mt-2 text-lg text-white/70">Des solutions web adaptées à vos besoins et à votre budget.</p>
          </div>
          <Link
            to="/services"
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-white/25 px-6 py-3 text-sm font-medium transition-colors hover:bg-white/10 sm:self-auto"
          >
            Tous les services
            <span className="transition-transform group-hover:translate-x-1" aria-hidden>
              →
            </span>
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.slice(0, 3).map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Mes derniers projets</h2>
            <p className="mt-2 text-lg text-white/70">Des réalisations concrètes, pour des besoins réels.</p>
          </div>
          <Link
            to="/realisations"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-white/25 px-6 py-3 text-sm font-medium transition-colors hover:bg-white/10 sm:self-auto"
          >
            Voir tous <span aria-hidden>→</span>
          </Link>
        </div>
        <ProjetsBento />
      </Section>

      {/* Appel à l'action */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 px-8 py-14 md:px-14 md:py-20">
            {/* Image de fond + dégradé pour la lisibilité du texte */}
            <img
              src="/contact.png"
              alt=""
              aria-hidden
              loading="lazy"
              className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
            />
            <div className="absolute inset-0 -z-10 bg-linear-to-r from-black via-black/80 to-black/20" />
            {/* Halo violet */}
            <div className="pointer-events-none absolute -bottom-32 -left-20 -z-10 h-64 w-2/3 rounded-full bg-primary/25 blur-3xl" />

            <p className="flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-primary-light">
              Contact
              <span className="h-px w-8 bg-primary-light" />
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Un <span className="text-primary-light">projet</span> en tête ?
            </h2>
            <p className="mt-4 max-w-md text-lg text-white/80">Parlons-en, le devis est gratuit et sans engagement.</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button to="/contact">Me contacter →</Button>
              <Button to="/services" variant="outline">
                Voir mes services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
