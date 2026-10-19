import { useState } from 'react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import ProjetCard from '@/components/ui/ProjetCard'
import CtaBanner from '@/components/sections/CtaBanner'
import { projets } from '@/data/projets'
import type { Projet } from '@/types'

const filtres = ['Tous', 'E-commerce', 'Site vitrine', 'Sur mesure'] as const
type Filtre = (typeof filtres)[number]

// Range chaque projet dans un filtre d'après la première ligne de sa catégorie
function filtreDe(p: Projet): Filtre {
  const type = p.category.toLowerCase()
  if (type.includes('e-commerce')) return 'E-commerce'
  if (type.includes('vitrine')) return 'Site vitrine'
  return 'Sur mesure'
}

export default function Realisations() {
  const [actif, setActif] = useState<Filtre>('Tous')
  const visibles = actif === 'Tous' ? projets : projets.filter((p) => filtreDe(p) === actif)

  return (
    <>
      <title>Réalisations | XU XI</title>
      <PageHeader
        eyebrow="Réalisations"
        title={
          <>
            Des projets concrets, <span className="text-primary-light">des résultats réels</span>
          </>
        }
        subtitle="Sites vitrines, e-commerce et applications : découvrez quelques projets réalisés pour mes clients."
      />
      <Section>
        <div className="mb-10 flex flex-wrap gap-3" role="group" aria-label="Filtrer les projets">
          {filtres.map((f) => {
            const nb = f === 'Tous' ? projets.length : projets.filter((p) => filtreDe(p) === f).length
            if (nb === 0) return null
            const selected = f === actif
            return (
              <button
                key={f}
                type="button"
                aria-pressed={selected}
                onClick={() => setActif(f)}
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${
                  selected
                    ? 'border-primary bg-primary text-white shadow-[0_0_24px_2px_rgba(109,93,252,0.45)]'
                    : 'border-white/15 text-white/70 hover:border-primary-light hover:text-white'
                }`}
              >
                {f}
                <span className={`rounded-full px-2 text-xs ${selected ? 'bg-white/20' : 'bg-white/10'}`}>{nb}</span>
              </button>
            )
          })}
        </div>

        {/* La clé relance l'animation d'apparition à chaque changement de filtre */}
        <div key={actif} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibles.map((p, i) => {
            const featured = actif === 'Tous' && i === 0
            return (
              <ProjetCard
                key={p.title}
                {...p}
                index={i}
                featured={featured}
                className={featured ? 'md:col-span-2' : ''}
              />
            )
          })}
        </div>
      </Section>
      <CtaBanner
        eyebrow="Votre projet"
        title="Le prochain projet, c'est le vôtre ?"
        text="Parlons de votre idée et voyons ensemble comment lui donner vie."
      />
    </>
  )
}
