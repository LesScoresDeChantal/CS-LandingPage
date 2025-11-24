# CryptoScores Landing Page

Une landing page moderne et élégante pour CryptoScores, construite avec Next.js 16, React 19, TailwindCSS v4 et Framer Motion.

## 🚀 Technologies

- **Next.js 16** - Framework React avec App Router
- **React 19** - Bibliothèque UI
- **TailwindCSS v4** - Styling avec les nouvelles classes `bg-linear-*`
- **Framer Motion** - Animations fluides et modernes
- **shadcn/ui** - Composants UI réutilisables
- **Lucide React** - Icônes modernes
- **TypeScript** - Type safety

## 📁 Structure du projet

```
src/
├── app/
│   ├── layout.tsx          # Layout principal avec metadata
│   ├── page.tsx            # Page d'accueil avec toutes les sections
│   └── globals.css         # Styles globaux
├── components/
│   ├── ui/                 # Composants shadcn (Button, etc.)
│   └── landing/            # Composants de la landing page
│       ├── Navbar.tsx      # Navigation sticky
│       ├── Hero.tsx        # Section hero avec CTA
│       ├── WhySection.tsx  # Pourquoi CryptoScores
│       ├── HowItWorks.tsx  # Comment ça fonctionne (3 étapes)
│       ├── AnalysisTable.tsx # Tableau des analyses
│       ├── SocialProof.tsx # Témoignages et moments clés
│       ├── EducationSection.tsx # Section éducative
│       ├── Pricing.tsx     # Plans tarifaires
│       ├── FinalCTA.tsx    # CTA final
│       └── Footer.tsx      # Footer avec legal info
```

## 🎨 Design Features

### Thème Crypto Moderne
- **Gradients**: Dégradés purple/blue pour le look crypto
- **Animations**: Animations fluides avec Framer Motion
- **Effets visuels**: Orbes lumineux, grilles, effets de blur
- **Dark theme**: Design sombre avec accents colorés

### Composants Réactifs
- Navigation sticky avec effet de scroll
- Animations d'apparition au scroll (viewport-aware)
- Hover effects sur les cartes
- Menu mobile responsive

### Sections de la Landing Page

1. **Hero** - Titre principal avec CTA et démo placeholder
2. **Why CryptoScores** - 4 avantages principaux
3. **How It Works** - 3 étapes simples
4. **Analysis Table** - Tableau des 8 catégories d'analyse
5. **Social Proof** - Témoignages + moments d'utilisation
6. **Education** - Section GitBook éducatif
7. **Pricing** - 3 plans (Essential, PRO, Ultimate)
8. **Final CTA** - Dernier appel à l'action
9. **Footer** - Informations légales et liens

## 🚀 Commandes

```bash
# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev

# Build pour la production
pnpm build

# Démarrer en production
pnpm start

# Lint
pnpm lint
```

## 📝 Modifications possibles

### Ajouter des composants shadcn
```bash
npx shadcn@latest add [component-name]
```

### Personnaliser les couleurs
Les couleurs sont définies dans `src/app/globals.css` avec les variables CSS.

### Ajouter des animations
Utiliser Framer Motion pour créer des animations personnalisées :
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* Contenu */}
</motion.div>
```

## 🎯 Prochaines étapes

1. **Images/Vidéos** - Ajouter des captures d'écran réelles du bot Telegram
2. **Analytics** - Intégrer Google Analytics ou équivalent
3. **SEO** - Optimiser les meta tags et ajouter structured data
4. **Formulaires** - Ajouter des formulaires de contact/inscription
5. **Liens CTA** - Connecter les boutons aux vraies URLs (Telegram, paiement, etc.)
6. **Tests** - Ajouter des tests avec Jest/React Testing Library

## 📱 Responsive Design

La landing page est entièrement responsive :
- **Mobile first** - Design optimisé pour mobile
- **Breakpoints** - sm, md, lg, xl
- **Menu mobile** - Navigation mobile avec hamburger

## ⚡ Performance

- **Next.js 16 avec Turbopack** - Build ultra-rapide
- **Images optimisées** - Utiliser next/image pour les images
- **Lazy loading** - Chargement progressif des sections
- **Code splitting** - Séparation automatique du code

## 📄 License

Propriétaire - CryptoScores

---

Développé avec ❤️ pour CryptoScores
