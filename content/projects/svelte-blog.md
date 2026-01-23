---
name: Svelte Static Blog
slug: svelte-blog
category: technique
type: Web Development
color: "#FF3E00"
published: true
logo: https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg
links:
  - label: GitHub
    url: https://github.com/alexyvanot/testing-blog
  - label: Demo
    url: https://alexyvanot.github.io/testing-blog/
skills:
  - svelte
  - typescript
  - javascript
  - html
  - css
  - markdown
---

# Svelte Static Blog Generator

Mon **premier projet Svelte** ! 🎉 Un générateur de site statique moderne et minimaliste, conçu pour créer des blogs rapidement avec le support complet du **Markdown**.

Ce projet m'a permis de découvrir l'écosystème Svelte et d'explorer comment construire un système de gestion de contenu léger et performant.

# ✨ Pourquoi ce projet ?

L'idée était simple : créer un outil permettant de générer un blog statique sans la complexité des CMS traditionnels. Juste du **Markdown**, du **Svelte**, et c'est parti !

# 🚀 Fonctionnalités

- 📝 **Support Markdown complet** - Écrivez vos articles en Markdown, ils sont automatiquement convertis en HTML
- ⚡ **Génération statique** - Site ultra-rapide, déployable partout (GitHub Pages, Netlify, Vercel...)
- 🎨 **Design minimaliste** - Interface épurée qui met le contenu en avant
- 🔄 **Hot Reload** - Rechargement automatique en développement
- 📁 **Organisation simple** - Un dossier `posts/` pour tous vos articles
- 🌐 **SEO-friendly** - Pages statiques optimisées pour le référencement
- 🚀 **CI/CD intégré** - Déploiement automatique via GitHub Actions

# 💡 Ce que j'ai appris

Ce projet a été l'occasion parfaite pour découvrir :

| Concept | Description |
|---------|-------------|
| **Réactivité Svelte** | Le système de réactivité simple et intuitif de Svelte |
| **SvelteKit** | Le framework full-stack pour Svelte |
| **Static Adapter** | Génération de sites statiques avec SvelteKit |
| **Markdown Processing** | Parsing et rendu de fichiers Markdown |
| **GitHub Pages** | Déploiement automatisé de sites statiques |
| **GitHub Actions** | Workflows CI/CD pour l'automatisation |

# 🛠️ Architecture

```
svelte-blog/
├── posts/              # Articles en Markdown
│   ├── article-1.md
│   └── article-2.md
├── src/
│   ├── routes/         # Pages Svelte
│   └── lib/            # Composants réutilisables
├── static/             # Assets statiques
├── svelte.config.js    # Configuration SvelteKit
└── vite.config.ts      # Configuration Vite
```

# 🎯 Utilisation

## Ajouter un article

1. Créez un fichier `.md` dans le dossier `posts/`
2. Ajoutez votre contenu en Markdown
3. Le site se met à jour automatiquement !

## Développement local

```bash
# Cloner le projet
git clone https://github.com/alexyvanot/testing-blog.git
cd testing-blog

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## Déploiement

Le site se déploie automatiquement sur GitHub Pages via GitHub Actions à chaque push sur `main`.

# 🔮 Pourquoi Svelte ?

Après avoir travaillé avec d'autres frameworks, j'ai voulu explorer Svelte pour :

- **Sa simplicité** - Moins de boilerplate, plus de productivité
- **Ses performances** - Compilation en JavaScript vanilla, pas de virtual DOM
- **Sa courbe d'apprentissage** - Plus accessible que React ou Vue
- **Son écosystème moderne** - SvelteKit offre une expérience développeur exceptionnelle

Ce premier projet m'a convaincu, et c'est pourquoi mon portfolio actuel est aussi construit avec Svelte ! 🧡
