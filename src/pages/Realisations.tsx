import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import ProjetCard from '@/components/ui/ProjetCard'
import { projets } from '@/data/projets'

export default function Realisations() {
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projets.map((p) => (
            <ProjetCard key={p.title} {...p} />
          ))}
        </div>
      </Section>
    </>
  )
}
