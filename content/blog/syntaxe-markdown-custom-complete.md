---
title: "Syntaxe Markdown Custom - Guide Complet"
description: "Documentation complète de toutes les syntaxes Markdown personnalisées disponibles dans ce portfolio : icônes, étoiles, graphiques, boutons, tags, table des matières, et plus encore."
date: "2026-01-24"
updated: "2026-01-24"
categories:
  - "Documentation"
  - "Markdown"
  - "Guide"
published: true
image: ""
featured: true
---

::toc{maxLevel=2 title="Sommaire"}

## Introduction

Ce portfolio utilise un système de Markdown étendu avec des syntaxes personnalisées pour enrichir le contenu. Ce guide documente **toutes les syntaxes custom** disponibles.

---

## 1. Icônes ::icon[carbon-name]

Intégrez des icônes [Carbon Design System](https://carbondesignsystem.com/guidelines/icons/library/) directement dans le texte.

### Syntaxe

```markdown
::icon[carbon-icon-name]
```

### Exemples

| Syntaxe | Rendu | Description |
|---------|-------|-------------|
| `::icon[logo-github]` | ::icon[logo-github] | Logo GitHub |
| `::icon[logo-linkedin]` | ::icon[logo-linkedin] | Logo LinkedIn |
| `::icon[checkmark-filled]` | ::icon[checkmark-filled] | Checkmark |
| `::icon[star-filled]` | ::icon[star-filled] | Étoile pleine |
| `::icon[code]` | ::icon[code] | Code |
| `::icon[terminal]` | ::icon[terminal] | Terminal |
| `::icon[rocket]` | ::icon[rocket] | Rocket |
| `::icon[flash]` | ::icon[flash] | Flash |

### Usage dans le texte

Les technologies utilisées incluent ::icon[logo-svelte] Svelte, ::icon[logo-typescript] TypeScript et ::icon[logo-docker] Docker.

---

## 2. Notation en Étoiles ::stars[x/y]

Affichez des notations sous forme d'étoiles, idéal pour les niveaux de compétence.

### Syntaxe

```markdown
::stars[filled/total]
::rating[filled/total]
```

### Exemples

| Syntaxe | Rendu |
|---------|-------|
| `::stars[1/5]` | ::stars[1/5] |
| `::stars[2/5]` | ::stars[2/5] |
| `::stars[3/5]` | ::stars[3/5] |
| `::stars[4/5]` | ::stars[4/5] |
| `::stars[5/5]` | ::stars[5/5] |
| `::rating[3/4]` | ::rating[3/4] |

### Cas d'usage

- **Maîtrise TypeScript** : ::stars[5/5]
- **Niveau Docker** : ::stars[4/5]
- **Expérience Kubernetes** : ::stars[2/5]

---

## 3. Table des Matières ::toc

Génère automatiquement une table des matières basée sur les titres du document.

### Syntaxe

```markdown
::toc
::toc{maxLevel=2}
::toc{maxLevel=3 title="Navigation"}
```

### Options

| Option | Valeur | Description |
|--------|--------|-------------|
| `maxLevel` | 1-6 | Profondeur max des titres (défaut: 3) |
| `title` | texte | Titre de la TOC (défaut: "Table des matières") |

### Exemple

```markdown
::toc{maxLevel=2 title="Sommaire"}

## Section 1
### Sous-section 1.1
## Section 2
```

---

## 4. Graphiques :::chart

Créez des graphiques SVG directement en Markdown. Voir l'[article dédié aux graphiques](syntaxe-graphiques-markdown-portfolio) pour plus de détails.

### Types disponibles

| Type | Description |
|------|-------------|
| `pie` | Camembert |
| `donut` | Donut (avec trou central) |
| `bar` | Barres horizontales |
| `bar vertical=true` | Barres verticales |
| `progress` | Barres de progression |
| `radar` | Graphique radar/spider |
| `line` | Courbe 2D |
| `scatter` | Nuage de points |
| `area` | Aire sous la courbe |

### Syntaxe de base

```markdown
:::chart{type=TYPE title="Titre" size=medium}
Label1: valeur1
Label2: valeur2
:::
```

### Exemples rapides

:::chart{type=pie title="Langages" size=small}
TypeScript: 40
Python: 30
Dart: 20
Java: 10
:::

:::chart{type=progress title="Avancement projet"}
Backend: 100
Frontend: 85
Tests: 70
:::

:::chart{type=bar vertical=true title="Stats mensuelles" size=medium}
Jan: 45
Fév: 62
Mar: 78
Avr: 55
:::

---

## 5. Boutons :::buttons

Créez des groupes de boutons stylisés avec icônes.

### Syntaxe

```markdown
:::buttons{align=center}
::button[Label]{href=url icon=carbon-icon style=ghost}
::button[Autre]{href=url style=default newTab=true}
:::
```

### Options du conteneur

| Option | Valeurs | Description |
|--------|---------|-------------|
| `align` | `left`, `center`, `right` | Alignement des boutons |

### Options du bouton

| Option | Valeurs | Description |
|--------|---------|-------------|
| `href` | URL | Lien du bouton |
| `icon` | carbon-icon | Icône à gauche |
| `style` | `ghost`, `default`, `outline`, `secondary` | Style visuel |
| `newTab` | `true`, `false` | Ouvrir dans un nouvel onglet |

### Exemple

:::buttons{align=center}
::button[GitHub]{href=https://github.com icon=logo-github style=default newTab=true}
::button[Documentation]{href=/blog icon=document style=outline}
::button[Contact]{href=/contact icon=email style=ghost}
:::

---

## 6. Tags :::tags

Affichez des badges/tags avec icônes et descriptions.

### Syntaxe

```markdown
:::tags{layout=wrap}
::tag[Label]{icon=carbon-icon desc="Description courte"}
::tag[Autre]{icon=autre-icon desc="Autre description" full="Description longue"}
:::
```

### Options du conteneur

| Option | Valeurs | Description |
|--------|---------|-------------|
| `layout` | `wrap`, `grid` | Disposition des tags |

### Options du tag

| Option | Description |
|--------|-------------|
| `icon` | Icône Carbon |
| `desc` | Description courte (sur la même ligne) |
| `full` | Description longue (ligne séparée) |

### Exemple

:::tags{layout=wrap}
::tag[TypeScript]{icon=logo-typescript desc="Langage principal"}
::tag[Svelte]{icon=logo-svelte desc="Framework frontend"}
::tag[Docker]{icon=logo-docker desc="Conteneurisation"}
::tag[PostgreSQL]{icon=logo-postgres desc="Base de données"}
:::

---

## 7. Texte Manuscrit ::handwritten (Animé uniquement)

Affiche du texte avec une animation d'écriture manuscrite. **Disponible uniquement dans le composant markdown-animated.**

### Syntaxe

```markdown
::handwritten[Texte à animer]
::handwritten[Texte]{fontSize=32 duration=2000 strokeWidth=1.5}
```

### Options

| Option | Valeur | Description |
|--------|--------|-------------|
| `fontSize` | nombre | Taille de police (défaut: 24) |
| `duration` | ms | Durée de l'animation (défaut: 1500) |
| `strokeWidth` | nombre | Épaisseur du trait (défaut: 1) |
| `height` | nombre | Hauteur du conteneur |

### Exemple

```markdown
::handwritten[Bonjour !]{fontSize=36 duration=2000}
```

---

## 8. Carte de Profil :::profile-card (Animé uniquement)

Affiche une carte de profil avec photo, nom, titre et liens sociaux.

### Syntaxe

```markdown
:::profile-card{name="Nom" title="Titre" image="/path/to/image.jpg"}
::social[github]{url=https://github.com/username}
::social[linkedin]{url=https://linkedin.com/in/username}
::social[email]{url=mailto:email@example.com}
:::
```

### Options

| Option | Description |
|--------|-------------|
| `name` | Nom affiché |
| `title` | Titre/profession |
| `image` | URL de la photo |

### Réseaux sociaux supportés

- `github` - GitHub
- `linkedin` - LinkedIn
- `email` - Email
- `twitter` - Twitter/X
- `website` - Site web

---

## 9. Grille de Valeurs :::values (Animé uniquement)

Affiche une grille de cartes avec icônes et descriptions pour présenter des valeurs ou principes.

### Syntaxe

```markdown
:::values{cols=3}
::value[Titre]{icon=carbon-icon color=blue}
Description de la valeur avec **markdown** supporté.
::endvalue

::value[Autre]{icon=autre-icon color=green}
Autre description.
::endvalue
:::
```

### Options du conteneur

| Option | Valeur | Description |
|--------|--------|-------------|
| `cols` | 1-4 | Nombre de colonnes |

### Options de la valeur

| Option | Valeurs | Description |
|--------|---------|-------------|
| `icon` | carbon-icon | Icône de la carte |
| `color` | `blue`, `green`, `purple`, `orange`, `red`, `cyan` | Couleur d'accent |

---

## 10. Markdown Standard Amélioré

En plus des syntaxes custom, le Markdown standard est supporté avec quelques améliorations.

### Tableaux

```markdown
| Colonne 1 | Colonne 2 | Colonne 3 |
|-----------|-----------|-----------|
| Valeur 1  | Valeur 2  | Valeur 3  |
```

### Blocs de code avec coloration

```typescript
// Code TypeScript avec coloration Prism.js
const greeting: string = "Hello, World!";
console.log(greeting);
```

```python
# Code Python
def hello():
    print("Hello, World!")
```

### Citations

> Ceci est une citation avec du **texte en gras** et du *texte en italique*.

### Listes imbriquées

- Item 1
  - Sous-item 1.1
  - Sous-item 1.2
- Item 2
  - Sous-item 2.1

### Détails/Accordéon (HTML)

<details>
<summary>Cliquez pour voir plus</summary>

Contenu caché qui s'affiche au clic.

</details>

---

## Récapitulatif des Syntaxes

| Syntaxe | Usage | Composant |
|---------|-------|-----------|
| `::icon[name]` | Icônes Carbon | Tous |
| `::stars[x/y]` | Notation étoiles | Tous |
| `::toc{...}` | Table des matières | Tous |
| `:::chart{...}` | Graphiques SVG | Tous |
| `:::buttons{...}` | Groupes de boutons | Tous |
| `:::tags{...}` | Tags/badges | Tous |
| `::handwritten[...]` | Texte animé | Animé uniquement |
| `:::profile-card{...}` | Carte de profil | Animé uniquement |
| `:::values{...}` | Grille de valeurs | Animé uniquement |

---

## Conclusion

Ces syntaxes Markdown personnalisées permettent de créer du contenu riche et interactif sans quitter l'éditeur Markdown. Elles sont particulièrement utiles pour :

- ::icon[checkmark] Documenter des compétences avec des notations visuelles
- ::icon[checkmark] Illustrer des données avec des graphiques
- ::icon[checkmark] Créer des interfaces utilisateur cohérentes
- ::icon[checkmark] Améliorer la lisibilité des articles

N'hésitez pas à combiner ces syntaxes pour créer des contenus uniques et engageants !

:::buttons{align=center}
::button[Voir les graphiques]{href=syntaxe-graphiques-markdown-portfolio icon=chart-line style=default}
::button[Retour au blog]{href=/blog icon=arrow-left style=ghost}
:::
