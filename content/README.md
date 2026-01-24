# :i[document] Gestion du Contenu

Ce dossier contient **TOUT** le contenu du site. Pour modifier le site, il suffit d'éditer ces fichiers - **aucune connaissance en programmation n'est requise** !

## :i[checkmark-filled] Activer / Désactiver un contenu

Chaque fichier peut être **activé ou désactivé** avec le champ `published` :

```yaml
---
name: Ma compétence
published: true   # ✅ Visible sur le site (valeur par défaut)
# published: false  # ❌ Masqué du site
---
```

> **Par défaut**, tout contenu est `published: true`. Ajoutez `published: false` pour masquer un élément sans le supprimer.

---

## :i[folder] Structure

```
content/
├── blog/           # Articles de blog
├── projects/       # Projets
├── skills/         # Compétences
├── experience/     # Expériences professionnelles
├── education/      # Formations
└── README.md       # Ce fichier
```

---

## :i[document] Ajouter un article de blog

1. Créer un fichier `mon-article.md` dans `content/blog/`
2. Copier ce template :

```yaml
---
title: "Titre de l'article"
slug: mon-article
published: true    # ← mettre false pour masquer
excerpt: "Résumé court affiché dans les listes"
author: Alexy VANOT
publishedAt: 2025-01-22
tags:
  - tag1
  - tag2
logo: Svelte
readingTime: 5
color: orange
pinned: false
links:
  - label: Site officiel
    to: https://example.com
    newTab: true
---

Votre contenu en Markdown ici...
```

**Champs optionnels :** `updatedAt`, `coverImage`, `pinned`, `links`

---

## :i[rocket] Ajouter un projet

1. Créer un fichier `mon-projet.md` dans `content/projects/`
2. Copier ce template :

```yaml
---
name: Nom du projet
slug: mon-projet
published: true    # ← mettre false pour masquer
type: Website
color: "#ff3e00"
logo: Svelte
period:
  from: 2024-01-01
  to: 2024-06-01
skills:
  - svelte
  - ts
links:
  - label: GitHub
    to: https://github.com/...
screenshots:
  - label: "Screenshot 1"
    src: https://example.com/image.jpg
---

Description du projet en Markdown...
```

---

## :i[portfolio] Ajouter une compétence

1. Créer un fichier `ma-skill.md` dans `content/skills/`
2. Copier ce template :

```yaml
---
name: Nom de la compétence
slug: ma-skill
published: true    # ← mettre false pour masquer
category: framework
color: orange
logo: Svelte
---

Description de la compétence...
```

**Catégories disponibles :**
- `pro-lang` : Langages de programmation
- `framework` : Frameworks
- `library` : Bibliothèques
- `db` : Bases de données
- `devops` : DevOps
- `devtools` : Outils de développement
- `markup-style` : HTML/CSS
- `soft` : Soft skills

---

## :i[portfolio] Ajouter une expérience

1. Créer un fichier `mon-experience.md` dans `content/experience/`
2. Copier ce template :

```yaml
---
name: Poste occupé
slug: mon-experience
published: true    # ← mettre false pour masquer
company: Nom de l'entreprise
type: Développement Full-Stack
contract: Apprenticeship
location: Paris, France
color: orange
logo: Soleil
period:
  from: 2023-09-01
  to: 2024-06-01
skills:
  - java
  - reactjs
links:
  - label: Site Web
    to: https://example.com
    newTab: true
---

Description de l'expérience en Markdown...
```

**Types de contrat :** `FullTime`, `PartTime`, `Freelance`, `Internship`, `Apprenticeship`

---

## :i[education] Ajouter une formation

1. Créer un fichier `ma-formation.md` dans `content/education/`
2. Copier ce template :

```yaml
---
name: Nom de l'école
slug: ma-formation
published: true    # ← mettre false pour masquer
degree: Master en informatique
organization: Nom de l'organisation
location: Paris, France
color: deepskyblue
logo: ESIEA
period:
  from: 2024-01-01
  to: 2026-06-01
subjects:
  - Informatique
  - Réseaux
links:
  - label: Site web
    to: https://example.com
    newTab: true
---

Description de la formation en Markdown...
```

---

## :i[color-palette] Logos disponibles

Les logos suivants peuvent être utilisés dans le champ `logo` :

**Technologies :** `JavaScript`, `TypeScript`, `Java`, `Python`, `Svelte`, `ReactJs`, `Docker`, `Git`, `HTML`, `CSS`, `Sass`, `NodeJs`, `MongoDB`, `PostgreSQL`, `Redis`, `SQLite`

**Entreprises/Écoles :** `Soleil`, `AGH`, `InTech`, `ESIEA`, `PMF`

**Autre :** `Unknown` (image par défaut)

---

## :i[color-palette] Couleurs

Les couleurs peuvent être :
- Un nom CSS : `orange`, `blue`, `red`, `purple`, `green`, `gray`, `pink`, `cyan`, `teal`
- Un code hexadécimal : `#ff3e00`, `#3b82f6`

---

## :i[sparkle] C'est tout !

Une fois le fichier créé/modifié, le site se mettra à jour automatiquement au prochain build.
