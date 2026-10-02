import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import FormuleCard from '@/components/ui/FormuleCard'
import { formules } from '@/data/tarifs'

export default function Tarifs() {
  return (
    <>
      <title>Tarifs | XU XI</title>
      <PageHeader title="Tarifs" subtitle="Des formules claires, sans surprise. Chaque projet fait l’objet d’un devis personnalisé." />
      <Section>
        <div className="grid gap-8 md:grid-cols-3">
          {formules.map((f) => (
            <FormuleCard key={f.name} {...f} />
          ))}
        </div>
      </Section>
    </>
  )
}
