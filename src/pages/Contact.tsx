import { useState, type FormEvent, type ReactNode } from 'react'
import { Link } from 'react-router'
import SocialIcon from '@/components/ui/SocialIcon'
import { site, socials, type SocialName } from '@/data/site'

// Adresse du service d'envoi (ex. Formspree : https://formspree.io/f/xxxx), à mettre dans un fichier .env
// Sans adresse, le formulaire ouvre la messagerie du visiteur avec le message pré-rempli.
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined

const inputClass =
  'w-full rounded-lg border border-white/10 bg-white/3 px-4 py-3 text-sm placeholder:text-white/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary'

const sujets = ['Demande de devis', 'Création de site', 'Refonte de site', 'Collaboration', 'Autre question']

const faq = [
  {
    question: 'Quel est le délai de réalisation ?',
    answer:
      'Comptez 2 à 4 semaines pour un site vitrine et 6 à 10 semaines pour un e-commerce ou une application. Le planning précis est fixé ensemble dans le devis.',
  },
  {
    question: 'Proposez-vous un accompagnement ?',
    answer:
      'Oui : formation à la prise en main à la livraison, puis maintenance et évolutions si vous le souhaitez. Vous n’êtes jamais seul après la mise en ligne.',
  },
  {
    question: 'Travaillez-vous avec tous les secteurs ?',
    answer:
      'Oui, artisans, commerces, indépendants, associations ou startups. Chaque site est pensé pour votre activité et vos clients.',
  },
  {
    question: 'Puis-je demander un devis ?',
    answer:
      'Bien sûr, le devis est gratuit et sans engagement. Décrivez votre projet dans le formulaire et je vous réponds sous 48h.',
  },
]

const contactSocials: SocialName[] = ['instagram', 'twitter', 'youtube', 'linkedin']

type Status = 'idle' | 'sending' | 'sent' | 'error'

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'size-5',
  'aria-hidden': true,
}

function MailIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg {...iconProps}>
      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" />
      <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" strokeWidth={2.6} />
    </svg>
  )
}

function ContactCard({ href, title, text, icon }: { href: string; title: string; text: string; icon: ReactNode }) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-black/50 p-4 backdrop-blur transition-colors hover:border-primary/60 hover:bg-black/70"
    >
      <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-primary/60 bg-primary/10 text-primary-light">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-semibold">{title}</span>
        <span className="block truncate text-sm text-white/60">{text}</span>
      </span>
      <span className="text-white/80 transition-transform group-hover:translate-x-1" aria-hidden>
        →
      </span>
    </a>
  )
}

function Card({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-surface p-6 md:p-7">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-white/60">{subtitle}</p>
      <div className="mt-6">{children}</div>
    </div>
  )
}

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>

    // Champ piège invisible : rempli uniquement par les robots
    if (data._gotcha) return

    if (!FORM_ENDPOINT) {
      const body = `Nom : ${data.nom}\nEmail : ${data.email}\n\n${data.message}`
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(data.sujet)}&body=${encodeURIComponent(body)}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <title>Contact | XU XI</title>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        {/* Image de fond + dégradés pour la lisibilité du texte */}
        <img
          src="/contact.png"
          alt=""
          aria-hidden
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-black via-black/75 to-black/10" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-t from-black to-transparent" />

        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-primary-light">
            Contact
            <span className="h-px w-8 bg-primary-light" />
          </p>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Discutons
            <br />
            de votre <span className="text-primary-light">projet</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80 md:text-xl">
            Une question, un projet ou une collaboration ? Je suis disponible pour échanger et vous répondre dans les plus
            brefs délais.
          </p>

          <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
            <ContactCard href={`mailto:${site.email}`} title="Email" text={site.email} icon={<MailIcon />} />
            <ContactCard href="#formulaire" title="Message direct" text="Réponse rapide" icon={<ChatIcon />} />
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 lg:grid-cols-2">
          {/* Formulaire */}
          <div id="formulaire" className="scroll-mt-24">
            <Card title="Envoyez-moi un message" subtitle="Remplissez le formulaire et je vous réponds rapidement.">
              {status === 'sent' ? (
                <div className="rounded-xl border border-primary/40 bg-primary/10 p-6">
                  <p className="text-lg font-semibold">Merci, message bien reçu !</p>
                  <p className="mt-2 text-sm text-white/70">Je vous réponds sous 48h à l’adresse indiquée.</p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-sm text-primary-light underline hover:text-white"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5">
                  <label className="grid gap-2 text-sm font-medium">
                    Nom
                    <input type="text" name="nom" required autoComplete="name" placeholder="Votre nom" className={inputClass} />
                  </label>
                  <label className="grid gap-2 text-sm font-medium">
                    Email
                    <input
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="votre@email.com"
                      className={inputClass}
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-medium">
                    Sujet
                    <select name="sujet" required defaultValue="" className={`${inputClass} invalid:text-white/40`}>
                      <option value="" disabled>
                        Sujet de votre message
                      </option>
                      {sujets.map((s) => (
                        <option key={s} className="text-white">
                          {s}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="grid gap-2 text-sm font-medium">
                    Message
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Votre message..."
                      className={`${inputClass} resize-y`}
                    />
                  </label>

                  {/* Anti-spam : caché aux humains */}
                  <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                  {status === 'error' && (
                    <p role="alert" className="rounded-lg border border-red-500/40 bg-red-950/40 px-4 py-3 text-sm text-red-300">
                      L’envoi a échoué. Réessayez ou écrivez-moi directement à{' '}
                      <a href={`mailto:${site.email}`} className="underline">
                        {site.email}
                      </a>
                      .
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="mt-1 flex items-center justify-center gap-3 rounded-xl bg-primary-light py-3.5 text-sm font-medium text-black transition-colors hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}
                    <span aria-hidden>→</span>
                  </button>

                  <p className="text-xs text-white/40">
                    Vos données servent uniquement à répondre à votre demande.{' '}
                    <Link to="/confidentialite" className="underline hover:text-white">
                      En savoir plus
                    </Link>
                  </p>
                </form>
              )}
            </Card>
          </div>

          <div className="flex flex-col gap-6">
            {/* FAQ */}
            <Card title="Questions fréquentes" subtitle="Quelques réponses aux questions les plus courantes.">
              <div className="space-y-3">
                {faq.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-xl border border-white/10 bg-white/2 open:border-primary/40"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3.5 text-sm font-medium [&::-webkit-details-marker]:hidden">
                      {item.question}
                      <span className="text-xl leading-none transition-transform group-open:rotate-45" aria-hidden>
                        +
                      </span>
                    </summary>
                    <p className="px-4 pb-4 text-sm text-white/60">{item.answer}</p>
                  </details>
                ))}
              </div>
            </Card>

            {/* Réseaux */}
            <Card title="Autres moyens de contact" subtitle="Vous pouvez également me retrouver ici.">
              <div className="grid gap-3 sm:grid-cols-2">
                {contactSocials.map((name) => (
                  <a
                    key={name}
                    href={socials[name].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/2 px-4 py-3.5 transition-colors hover:border-primary/50"
                  >
                    <SocialIcon name={name} className="size-7 text-primary-light" />
                    <span>
                      <span className="block text-sm font-medium">{socials[name].label}</span>
                      <span className="block text-xs text-white/50">{socials[name].handle}</span>
                    </span>
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
