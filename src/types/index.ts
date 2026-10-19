export interface NavLinkItem {
  label: string
  to: string
}

export interface Service {
  title: string
  description: string
  icon: 'vitrine' | 'ecommerce' | 'app' | 'refonte' | 'maintenance' | 'seo'
}

export interface Offre {
  icon: 'code' | 'palette' | 'layers' | 'bag'
  title: string
  description: string
  features: string[]
  image?: string
}

export interface ProcessStep {
  icon: 'chat' | 'idea' | 'code' | 'rocket'
  title: string
  description: string
}

export interface Projet {
  title: string
  category: string
  image?: string
  description?: string
  technos?: string[]
  url?: string
  accent?: string
}

export interface Formule {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
}
