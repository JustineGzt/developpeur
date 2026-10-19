import type { Projet } from '@/types'

// Images : placer les visuels dans public/ et indiquer le chemin (ex. '/montre.png')
// Le premier projet est mis en avant en grand sur l'accueil et sur la page Réalisations
// accent : couleur du halo au survol de la carte (reprendre la couleur dominante de l'image)
export const projets: Projet[] = [
  {
    title: 'Nexus',
    category: 'Site e-commerce\nMontres',
    image: '/montre.png',
    url: 'https://montre-taupe.vercel.app',
    accent: '#d08a4f',
  },
  {
    title: 'Plateforme de cours',
    category: 'Site sur mesure',
    image: '/cours.png',
    accent: '#4f6bff',
  },
  {
    title: 'Marque de vêtements',
    category: 'E-commerce',
    image: '/ecom.png',
    url: 'https://japon-drab.vercel.app',
    accent: '#e5262c',
  },
  {
    title: 'Basket',
    category: 'E-commerce\nSneakers',
    image: '/basket.svg',
    url: 'https://basketnike.vercel.app',
    accent: '#b6ff3b',
  },
  {
    title: 'Immobilier',
    category: 'Site vitrine\nAgence immobilière',
    image: '/immobilier.svg',
    url: 'https://immobilier-murex.vercel.app',
    accent: '#e8b04a',
  },
]
