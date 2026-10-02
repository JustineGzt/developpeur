import { Link } from 'react-router'
import SocialIcon from '@/components/ui/SocialIcon'
import { site, socials, type SocialName } from '@/data/site'

const footerLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Réalisations', to: '/realisations' },
  { label: 'Contact', to: '/contact' },
]

const footerSocials: SocialName[] = ['facebook', 'twitter', 'instagram', 'youtube']

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:items-start md:justify-between">
        <div>
          <Link to="/" className="text-3xl font-bold tracking-tight text-white">
            {site.logo}
          </Link>
          <p className="mt-3 text-white/80">{site.tagline}</p>
        </div>

        <div className="flex flex-col gap-6 md:items-end">
          <nav className="flex flex-wrap gap-x-10 gap-y-3 text-sm text-white/90">
            {footerLinks.map((link) => (
              <Link key={link.to} to={link.to} className="transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-6">
            {footerSocials.map((name) => (
              <a
                key={name}
                href={socials[name].url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={socials[name].label}
                className="text-white transition-opacity hover:opacity-70"
              >
                <SocialIcon name={name} />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-1 text-sm text-white/60 md:items-end">
            <p>
              © {new Date().getFullYear()} {site.owner}. Tous droits réservés.
            </p>
            <p className="flex gap-4 text-xs">
              <Link to="/mentions-legales" className="hover:text-white">
                Mentions légales
              </Link>
              <Link to="/confidentialite" className="hover:text-white">
                Confidentialité
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
