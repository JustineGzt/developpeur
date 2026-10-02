import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="py-32 text-center">
      <title>Page introuvable | XU XI</title>
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="mt-4 text-lg text-muted">Cette page n’existe pas.</p>
      <div className="mt-8">
        <Button to="/">Retour à l’accueil</Button>
      </div>
    </section>
  )
}
