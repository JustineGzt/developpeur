import type { Projet } from '@/types'

export default function ProjetCard({ title, category, description, image, technos, url }: Projet) {
  return (
    <article className="overflow-hidden rounded-xl border border-white/10 transition-shadow hover:shadow-lg">
      <div className="aspect-video bg-surface">
        {image && <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />}
      </div>
      <div className="p-6">
        <p className="text-sm whitespace-pre-line text-primary-light">{category}</p>
        <h3 className="mt-1 text-xl font-semibold">{title}</h3>
        {description && <p className="mt-2 text-muted">{description}</p>}
        {technos && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {technos.map((t) => (
              <li key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs">
                {t}
              </li>
            ))}
          </ul>
        )}
        {url && (
          <a href={url} target="_blank" rel="noreferrer" className="mt-4 inline-block text-primary-light hover:underline">
            Voir le site →
          </a>
        )}
      </div>
    </article>
  )
}
