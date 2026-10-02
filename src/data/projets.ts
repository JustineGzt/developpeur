import type { Projet } from '@/types'

// Images : placer les visuels dans public/ et indiquer le chemin (ex. '/montre.png')
// Le premier projet est mis en avant en grand sur l'accueil
export const projets: Projet[] = [
  {
    title: 'Nexus',
    category: 'Site e-commerce\nMontres',
    image: '/montre.png',
  },
  {
    title: 'Plateforme de cours',
    category: 'Site sur mesure',
    image: '/cours.png',
  },
  {
    title: 'Marque de vêtements',
    category: 'E-commerce',
    image: '/ecom.png',
  },
]
