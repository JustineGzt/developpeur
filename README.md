# Site développeur web freelance

Site pour présenter et vendre mes prestations de développement web.

**Stack :** React 19 · TypeScript · Tailwind CSS 4 · Vite · React Router

## Commandes
```bash
npm install      # installer les dépendances
npm run dev      # serveur de dev (http://localhost:5173)
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build
npm run lint     # vérifier le code
```

## Structure
```
src/
├── main.tsx              # point d'entrée
├── App.tsx               # routes
├── index.css             # Tailwind + thème (couleurs, polices)
├── components/
│   ├── layout/           # Layout, Header, Footer
│   └── ui/               # Button, Section, PageHeader, cartes…
├── pages/                # une page = un fichier
├── data/                 # contenu : infos du site, services, projets, tarifs
├── types/                # types TypeScript partagés
└── assets/images/        # images importées dans le code
public/                   # fichiers servis tels quels (favicon, robots.txt, sitemap.xml)
```

Pour modifier le contenu (services, projets, tarifs), édite les fichiers de `src/data/` : pas besoin de toucher aux composants.

## À personnaliser
- `src/data/site.ts` : nom, email, domaine
- `MonNom` dans les balises `<title>` des pages et dans `index.html`
- `mon-domaine.fr` dans `public/robots.txt` et `public/sitemap.xml`
- Couleurs dans `src/index.css` (`@theme`)
- Formulaire : brancher l'envoi dans `src/pages/Contact.tsx` (Formspree, EmailJS…)
- Mentions légales : nom, statut, SIRET, adresse, hébergeur (obligatoire en France)

## Déploiement
Netlify ou Vercel : build `npm run build`, dossier `dist`. `public/_redirects` gère les routes côté Netlify.
