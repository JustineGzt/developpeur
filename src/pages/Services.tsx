import Section from '@/components/ui/Section'
import OffreCard from '@/components/ui/OffreCard'
import CtaBanner from '@/components/sections/CtaBanner'
import { offres } from '@/data/services'

export default function Services() {
  return (
    <>
      <title>Services | XU XI</title>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        {/* Image de fond + dégradés pour la lisibilité du texte */}
        <img
          src="/service.png"
          alt=""
          aria-hidden
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[80%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-black via-black/70 to-black/0" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-t from-black to-transparent" />

        <div className="mx-auto max-w-6xl px-4 py-24 md:py-32">
          <p className="text-sm font-medium uppercase tracking-widest text-primary-light">Nos services</p>
          <h1 className="mt-6 max-w-2xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Des solutions digitales adaptées à <span className="text-primary-light">vos projets</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80 md:text-xl">
            De l’idée à la réalisation, je vous accompagne pour créer, développer et automatiser vos projets digitaux, avec
            des solutions sur mesure.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {offres.map((o) => (
            <OffreCard key={o.title} {...o} />
          ))}
        </div>
      </Section>

      <CtaBanner
        eyebrow="Un projet en tête ?"
        title="Parlons de votre projet"
        text="Je suis disponible pour échanger sur vos besoins et vous proposer une solution adaptée."
      />
    </>
  )
}
