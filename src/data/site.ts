import type { NavLinkItem } from '@/types'

// Infos générales : à personnaliser
export const site = {
  name: 'XU XI',
  logo: 'JG',
  owner: 'Justine Gozet',
  title: 'Développeur web freelance',
  email: 'contact@mon-domaine.fr',
  url: 'https://www.mon-domaine.fr',
  tagline: 'Création digitale sur mesure',
}

// Réseaux sociaux : remplacer les liens et les pseudos par les vrais profils
export const socials = {
  facebook: { label: 'Facebook', handle: '@xuxi', url: 'https://www.facebook.com/' },
  twitter: { label: 'Twitter', handle: '@xuxi', url: 'https://x.com/' },
  instagram: { label: 'Instagram', handle: '@xuxi', url: 'https://www.instagram.com/' },
  youtube: { label: 'YouTube', handle: '@xuxi', url: 'https://www.youtube.com/' },
  linkedin: { label: 'LinkedIn', handle: 'XU XI', url: 'https://www.linkedin.com/' },
}

export type SocialName = keyof typeof socials

export const navLinks: NavLinkItem[] = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Réalisations', to: '/realisations' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Contact', to: '/contact' },
]
