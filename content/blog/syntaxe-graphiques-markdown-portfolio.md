---
title: "Syntaxe de Graphiques Markdown - Documentation Complète"
description: "Guide complet sur la syntaxe personnalisée pour créer des graphiques interactifs directement en Markdown : pie, donut, bar, progress, radar, line, scatter, area."
date: "2026-01-24"
updated: "2026-01-24"
categories:
  - "Documentation"
  - "Markdown"
  - "Data Visualization"
published: true
image: ""
featured: true
---

## Introduction

J'ai développé une syntaxe Markdown personnalisée pour intégrer des graphiques SVG directement dans mes articles de blog et pages de contenu. Cette fonctionnalité permet de visualiser des données sans dépendre de bibliothèques externes comme Chart.js ou D3.js.

:::chart{type=donut title="Types de graphiques disponibles" size=medium}
Basiques (pie, donut, progress): 37.5
Barres (horizontal, vertical): 25
2D (line, scatter, area): 37.5
:::

## Syntaxe de Base

La syntaxe utilise les blocs de directive Markdown avec le préfixe `:::chart` :

```markdown
:::chart{type=TYPE title="Titre" options...}
données...
:::
```

---

## 1. Graphique Circulaire (Pie)

Le graphique **pie** affiche des données sous forme de camembert.

### Syntaxe

```markdown
:::chart{type=pie title="Répartition" size=medium}
Label 1: 30
Label 2: 45
Label 3: 25
:::
```

### Exemple

:::chart{type=pie title="Langages utilisés dans mes projets" size=medium}
TypeScript: 35
Python: 25
Dart: 20
Java: 15
Autres: 5
:::

### Options disponibles

| Option | Valeurs | Description |
|--------|---------|-------------|
| `type` | `pie` | Type de graphique |
| `title` | texte | Titre du graphique |
| `size` | `small`, `medium`, `large` | Taille du graphique |
| `legend` | `true`, `false` | Afficher la légende |

---

## 2. Graphique Donut

Le **donut** est similaire au pie mais avec un trou au centre, idéal pour mettre en valeur un total ou une métrique centrale.

### Syntaxe

```markdown
:::chart{type=donut title="Distribution" size=medium}
Catégorie A: 40
Catégorie B: 35
Catégorie C: 25
:::
```

### Exemple

:::chart{type=donut title="Temps passé par activité (semaine type)" size=medium}
Développement: 45
Réunions: 15
Code Review: 20
Documentation: 10
Veille tech: 10
:::

---

## 3. Barres Horizontales

Les barres horizontales sont parfaites pour comparer des valeurs entre catégories.

### Syntaxe

```markdown
:::chart{type=bar title="Comparaison" size=medium}
Item 1: 80
Item 2: 65
Item 3: 45
:::
```

### Exemple

:::chart{type=bar title="Compétences Frontend" size=medium}
Svelte/SvelteKit: 95
React: 75
Vue.js: 60
Angular: 40
:::

---

## 4. Barres Verticales

**Nouveauté !** Les barres peuvent maintenant être affichées verticalement avec l'option `vertical=true`.

### Syntaxe

```markdown
:::chart{type=bar vertical=true title="Données verticales" size=medium}
Jan: 120
Fév: 150
Mar: 180
Avr: 200
:::
```

### Exemple

:::chart{type=bar vertical=true title="Commits par mois (2025)" size=large}
Jan: 45
Fév: 62
Mar: 78
Avr: 55
Mai: 89
Jun: 102
Jul: 67
Aoû: 43
Sep: 91
Oct: 115
Nov: 98
Déc: 76
:::

### Options spécifiques

| Option | Valeurs | Description |
|--------|---------|-------------|
| `vertical` | `true`, `false` | Orientation verticale (défaut: false) |

---

## 5. Barres de Progression

Les barres de **progress** sont idéales pour afficher des pourcentages ou des niveaux de complétion.

### Syntaxe

```markdown
:::chart{type=progress title="Progression" size=medium}
Tâche 1: 100
Tâche 2: 75
Tâche 3: 50
:::
```

### Exemple

:::chart{type=progress title="Avancement du projet Portfolio v3" size=medium}
Design UI/UX: 100
Composants Svelte: 95
Système de blog: 90
Graphiques Markdown: 100
Mode sombre: 85
Animations: 75
SEO: 80
Tests: 60
:::

---

## 6. Graphique Radar

Le **radar** permet de visualiser plusieurs dimensions simultanément, parfait pour les profils de compétences.

### Syntaxe

```markdown
:::chart{type=radar title="Profil" size=medium}
Dimension 1: 80
Dimension 2: 70
Dimension 3: 90
Dimension 4: 60
Dimension 5: 85
:::
```

### Exemple

:::chart{type=radar title="Profil développeur Full-Stack" size=large}
Frontend: 90
Backend: 85
DevOps: 70
Base de données: 75
UI/UX Design: 65
Architecture: 80
:::

---

## 7. Graphique Linéaire (Line)

**Nouveauté !** Les graphiques 2D permettent de tracer des courbes avec des axes X et Y personnalisables.

### Syntaxe

```markdown
:::chart{type=line title="Évolution" xLabel="Temps" yLabel="Valeur" smooth=true grid=true}
0, 10
1, 25
2, 18
3, 35
4, 42
:::
```

### Exemple - Courbe lisse

:::chart{type=line title="Trafic du portfolio (visiteurs/jour)" xLabel="Jour" yLabel="Visiteurs" size=large smooth=true grid=true}
1, 120
5, 185
10, 230
15, 195
20, 310
25, 425
30, 380
:::

### Exemple - Courbe avec points

:::chart{type=line title="Performance des tests" xLabel="Version" yLabel="Score %" size=medium smooth=false points=true grid=true}
1.0, 65
1.1, 72
1.2, 78
1.3, 71
1.4, 85
1.5, 92
2.0, 88
2.1, 95
:::

### Options complètes

| Option | Valeurs | Description |
|--------|---------|-------------|
| `xLabel` | texte | Label de l'axe X |
| `yLabel` | texte | Label de l'axe Y |
| `xMin`, `xMax` | nombre | Bornes de l'axe X |
| `yMin`, `yMax` | nombre | Bornes de l'axe Y |
| `smooth` | `true`, `false` | Courbe lissée (Bézier) |
| `points` | `true`, `false` | Afficher les points |
| `line` | `true`, `false` | Afficher la ligne |
| `grid` | `true`, `false` | Afficher la grille |
| `fill` | `true`, `false` | Remplir sous la courbe |

---

## 8. Nuage de Points (Scatter)

Le graphique **scatter** affiche uniquement des points, idéal pour visualiser des corrélations.

### Syntaxe

```markdown
:::chart{type=scatter title="Corrélation" xLabel="X" yLabel="Y" grid=true}
x1, y1
x2, y2
x3, y3
:::
```

### Exemple

:::chart{type=scatter title="Temps de réponse vs Charge serveur" xLabel="Requêtes/sec" yLabel="Latence (ms)" size=large grid=true}
10, 45
25, 52
40, 68
55, 85
70, 110
85, 145
100, 195
120, 280
50, 72
65, 95
80, 130
95, 165
:::

---

## 9. Graphique en Aires (Area)

Le graphique **area** remplit la zone sous la courbe, parfait pour visualiser des volumes ou des accumulations.

### Syntaxe

```markdown
:::chart{type=area title="Volume" xLabel="Temps" yLabel="Quantité" smooth=true fill=true}
0, 10
5, 45
10, 30
15, 60
:::
```

### Exemple

:::chart{type=area title="Utilisation mémoire (MB)" xLabel="Heure" yLabel="MB" size=large smooth=true grid=true}
0, 512
2, 680
4, 720
6, 850
8, 1200
10, 980
12, 1100
14, 1350
16, 1500
18, 1200
20, 950
22, 680
24, 520
:::

---

## 10. Combinaisons Avancées

### Scatter avec ligne de tendance

:::chart{type=line title="Données avec tendance" xLabel="Experience (années)" yLabel="Salaire (k€)" size=large points=true smooth=true grid=true}
0, 32
1, 35
2, 38
3, 42
4, 48
5, 52
6, 58
7, 62
8, 68
10, 75
:::

### Barres verticales avec légende

:::chart{type=bar vertical=true title="Stack technique par projet" size=large legend=true}
Portfolio: 4
TAP: 6
FootAI: 5
SunAuto: 8
Flutter: 3
:::

---

## Récapitulatif des Types

:::chart{type=progress title="Maîtrise de chaque type de graphique" size=medium}
Pie: 100
Donut: 100
Bar horizontal: 100
Bar vertical: 100
Progress: 100
Radar: 100
Line: 100
Scatter: 100
Area: 100
:::

## Implémentation Technique

Cette fonctionnalité est implémentée dans les composants Svelte :
- `markdown.svelte` - Rendu statique
- `markdown-animated.svelte` - Rendu avec animations

Les graphiques sont générés en **SVG pur**, sans dépendance externe. Le parsing utilise des expressions régulières pour extraire les options et les données du bloc Markdown.

### Points techniques clés

1. **Sanitisation SVG** : DOMPurify est configuré pour autoriser les tags SVG (`svg`, `path`, `circle`, `line`, `polygon`, `polyline`, `text`, `rect`, `g`)

2. **Courbes de Bézier** : L'option `smooth=true` utilise une conversion Catmull-Rom vers Bézier pour des courbes fluides

3. **Responsive** : Les graphiques s'adaptent avec les tailles `small`, `medium`, `large`

4. **Couleurs** : Palette prédéfinie de 10 couleurs harmonieuses

---

## Conclusion

Cette syntaxe de graphiques Markdown permet de créer des visualisations riches directement dans le contenu, sans quitter l'éditeur Markdown. C'est particulièrement utile pour :

- 📊 Documentation technique avec métriques
- 📈 Articles de blog avec statistiques
- 🎯 Pages de compétences avec visualisations
- 📉 Rapports de projet avec KPIs

:::chart{type=donut title="Satisfaction de cette feature" size=small}
Très utile: 85
Pratique: 10
À améliorer: 5
:::

N'hésitez pas à explorer et combiner ces différents types de graphiques dans vos contenus !
