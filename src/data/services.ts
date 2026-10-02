import type { Offre, Service } from '@/types'

export const services: Service[] = [
  {
    icon: 'vitrine',
    title: 'Site vitrine',
    description: 'Un site rapide et moderne pour présenter votre activité et attirer des clients.',
  },
  {
    icon: 'ecommerce',
    title: 'E-commerce',
    description: 'Une boutique en ligne simple à gérer pour vendre vos produits 24h/24.',
  },
  {
    icon: 'app',
    title: 'Application web',
    description: 'Des outils sur mesure pour automatiser et simplifier votre quotidien.',
  },
  {
    icon: 'refonte',
    title: 'Refonte',
    description: 'Modernisation de votre site existant : design, performances, mobile.',
  },
  {
    icon: 'maintenance',
    title: 'Maintenance',
    description: 'Mises à jour, sauvegardes et corrections pour un site toujours en forme.',
  },
  {
    icon: 'seo',
    title: 'SEO',
    description: 'Optimisation du référencement pour apparaître en haut de Google.',
  },
]

// Grandes cartes de la page Services. Pour ajouter une image : mettre le fichier dans public/ et renseigner `image`
export const offres: Offre[] = [
  {
    icon: 'code',
    title: 'Développement web',
    description: 'Des sites performants, modernes et optimisés pour vos besoins.',
    features: ['Site vitrine', 'Site e-commerce', 'Développement sur mesure', 'Optimisation & maintenance'],
  },
  {
    icon: 'palette',
    title: 'Design & identité visuelle',
    description: 'Une image de marque unique et impactante.',
    features: ['Création de logo', 'Charte graphique', 'Design d’interface', 'Visuels marketing'],
  },
  {
    icon: 'layers',
    title: 'Automatisation',
    description: 'Des processus optimisés pour gagner du temps et se concentrer sur l’essentiel.',
    features: ['Automatisation de tâches', 'Connexion d’outils', 'Workflows sur mesure', 'Suivi et optimisation'],
  },
  {
    icon: 'bag',
    title: 'E-commerce',
    description: 'Des boutiques en ligne prêtes à vendre et évolutives.',
    features: ['Création de boutique', 'Intégration de paiement', 'Configuration produits', 'Optimisation des ventes'],
  },
]
