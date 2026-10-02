import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'

export default function MentionsLegales() {
  return (
    <>
      <title>Mentions légales | XU XI</title>
      <meta name="robots" content="noindex" />
      <PageHeader title="Mentions légales" />
      <Section>
        {/* Éditeur (nom, statut, SIRET, adresse, email), hébergeur (nom, adresse), propriété intellectuelle */}
        <p className="text-muted">À compléter.</p>
      </Section>
    </>
  )
}
