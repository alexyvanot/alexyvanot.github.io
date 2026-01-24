---
name: Svelte Static Blog - Mon premier projet Svelte
slug: svelte-blog
category: technique
type: Web Development
color: "#FF3E00"
published: true
logo: https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg
period:
  from: 2025-07-03
  to: 2025-07-15
links:
  - label: GitHub
    to: https://github.com/alexyvanot/testing-blog
  - label: Demo
    to: https://alexyvanot.github.io/testing-blog/
skills:
  - svelte
  - typescript
  - javascript
  - html
  - css
  - markdown
team:
  - name: Alexy VANOT
    role: Développeur
---

::toc

## Mon regard critique

> Ce projet marque ma **découverte de Svelte** et le début d'une passion ! En créant ce générateur de blog statique, j'ai été convaincu par la simplicité et l'élégance du framework. C'est d'ailleurs pourquoi **ce portfolio est aussi construit avec Svelte**.

**Mes apports principaux :**
- Architecture modulaire pour la gestion des articles Markdown
- Pipeline CI/CD complet avec GitHub Actions
- Design minimaliste orienté contenu

**Ce que j'en retire :** Ce projet m'a fait découvrir l'écosystème Svelte et SvelteKit. La courbe d'apprentissage douce et les performances exceptionnelles m'ont convaincu. J'ai aussi approfondi mes connaissances en génération de sites statiques et en CI/CD.

---

## Présentation du projet

**Svelte Static Blog** est un générateur de blog statique moderne et minimaliste. Il permet de créer des articles en **Markdown** qui sont automatiquement convertis en pages HTML statiques, déployables partout.

Ce projet m'a servi de terrain d'apprentissage pour explorer **SvelteKit** et comprendre comment construire un système de gestion de contenu léger et performant.

---

## Objectifs, Contexte et Enjeux

### Contexte personnel

Premier projet Svelte, réalisé en **autoformation** pour découvrir le framework et son écosystème.

### Objectifs du projet

| Objectif | Réalisation |
|----------|-------------|
| Découvrir Svelte et SvelteKit | Mission accomplie ✅ |
| Créer un blog statique | Générateur fonctionnel |
| Implémenter un pipeline CI/CD | GitHub Actions |
| Maîtriser le déploiement statique | GitHub Pages |

### Enjeux et défis

**Enjeux :**
- **Apprentissage** : comprendre la philosophie Svelte
- **Performance** : site statique ultra-rapide
- **Maintenabilité** : architecture claire et évolutive

**Défis rencontrés :**
- Comprendre le système de routing de SvelteKit
- Configurer correctement l'adapter statique
- Mettre en place le déploiement automatisé

---

## Étapes de réalisation

### Phase 1 : Découverte de Svelte (3 jours)

- Tutoriel officiel Svelte
- Compréhension du système de réactivité
- Premiers composants basiques

### Phase 2 : Setup SvelteKit (2 jours)

- Initialisation du projet SvelteKit
- Configuration TypeScript
- Mise en place de la structure de fichiers

```
svelte-blog/
├── posts/              # Articles en Markdown
├── src/
│   ├── routes/         # Pages Svelte
│   └── lib/            # Composants réutilisables
├── static/             # Assets statiques
└── svelte.config.js    # Configuration SvelteKit
```

### Phase 3 : Système de blog (4 jours)

- Parsing des fichiers Markdown avec frontmatter
- Génération dynamique des pages d'articles
- Liste des articles avec tri par date
- Navigation entre articles

### Phase 4 : Déploiement et CI/CD (3 jours)

- Configuration de l'adapter statique
- Workflow GitHub Actions pour le build automatique
- Déploiement sur GitHub Pages

---

## Acteurs et interactions

| Acteur | Rôle | Interactions |
|--------|------|--------------|
| **Moi (développeur)** | Développement complet | Projet personnel |
| **Communauté Svelte** | Ressources et documentation | Discord, docs officielles |

---

## Résultats obtenus

### Application fonctionnelle

- **Support Markdown complet** avec frontmatter
- **Génération statique** ultra-performante
- **Design minimaliste** orienté contenu
- **SEO-friendly** par défaut
- **Déploiement automatique** à chaque push

### Pour moi

| Concept appris | Description |
|----------------|-------------|
| **Réactivité Svelte** | Système simple et intuitif |
| **SvelteKit** | Framework full-stack moderne |
| **Static Adapter** | Génération de sites statiques |
| **Markdown Processing** | Parsing et rendu de fichiers |
| **GitHub Actions** | Workflows CI/CD |

---

## Lendemains du projet

### Aujourd'hui

Le projet est accessible en démo et a servi de **base d'apprentissage** pour créer ce portfolio.

### Impact sur mes projets suivants

Ce premier projet Svelte m'a tellement convaincu que :
- **Ce portfolio** est construit avec SvelteKit
- J'ai adopté Svelte comme framework frontend principal
- J'explore maintenant les fonctionnalités avancées (runes Svelte 5, etc.)

### Ce que j'ai réinvesti

Les connaissances acquises m'ont permis de créer ce portfolio bien plus élaboré, avec des composants custom et une architecture plus complexe.

---

## Compétences mobilisées

Ce projet m'a permis de mobiliser et développer les compétences suivantes :

:::buttons
::button[Svelte]{link=/skills/svelte icon=i-logos-svelte-icon}
::button[Autonomie]{link=/skills/autonomy icon=i-carbon-user-certification}
::button[Créativité]{link=/skills/creativity icon=i-carbon-idea}
:::
