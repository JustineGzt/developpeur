import type { Formule } from '@/types'
import Button from './Button'

export default function FormuleCard({ name, price, description, features, highlighted }: Formule) {
  return (
    <article
      className={`flex flex-col rounded-xl border p-8 ${
        highlighted ? 'border-primary shadow-xl ring-1 ring-primary' : 'border-white/10'
      }`}
    >
      {highlighted && <span className="mb-4 self-start rounded-full bg-primary px-3 py-1 text-xs text-white">Populaire</span>}
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="mt-2 text-muted">{description}</p>
      <p className="mt-6 text-3xl font-bold">{price}</p>
      <ul className="mt-6 flex-1 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex gap-2">
            <span className="text-primary">✓</span> {f}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button to="/contact" variant={highlighted ? 'primary' : 'outline'}>
          Demander un devis
        </Button>
      </div>
    </article>
  )
}
