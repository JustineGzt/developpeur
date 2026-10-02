import type { Formule } from '@/types'

export const formules: Formule[] = [
  {
    name: 'Essentiel',
    price: 'À partir de X €',
    description: 'Site one-page pour démarrer.',
    features: ['1 page', 'Responsive mobile', 'Formulaire de contact', 'SEO de base'],
  },
  {
    name: 'Pro',
    price: 'À partir de X €',
    description: 'Site vitrine complet.',
    features: ['Jusqu’à 6 pages', 'Design sur mesure', 'SEO avancé', 'Formation à la prise en main'],
    highlighted: true,
  },
  {
    name: 'Sur mesure',
    price: 'Sur devis',
    description: 'E-commerce ou application web.',
    features: ['Fonctionnalités spécifiques', 'Paiement en ligne', 'Espace client', 'Maintenance incluse'],
  },
]
