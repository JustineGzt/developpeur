import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'

export default function Confidentialite() {
  return (
    <>
      <title>Politique de confidentialité | XU XI</title>
      <meta name="robots" content="noindex" />
      <PageHeader title="Politique de confidentialité" />
      <Section>
        {/* Données collectées via le formulaire, finalité, durée de conservation, droits RGPD */}
        <p className="text-muted">À compléter.</p>
      </Section>
    </>
  )
}
