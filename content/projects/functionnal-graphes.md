---
name: Functional Graphes - Exploration de graphes en programmation fonctionnelle
slug: functionnal-graphes
category: technique
type: Programmation Fonctionnelle & Algorithmes
color: "#3178C6"
published: true
logo: https://raw.githubusercontent.com/alexyvanot/functionnal_graphes/main/demo/Assets/Images/demo.gif
period:
  from: 2026-01-29
  to: 2026-01-29
links:
  - label: GitHub
    to: https://github.com/alexyvanot/functionnal_graphes
  - label: Démo Live
    to: https://alexyvanot.fr/functionnal_graphes/
skills:
  - ts
  - vue
  - vitest
  - vite
attachments:
  - label: Démo de l'application
    src: https://raw.githubusercontent.com/alexyvanot/functionnal_graphes/main/demo/Assets/Images/demo.gif
team:
  - name: Alexy VANOT
    role: Développeur unique
---

::toc

## Mon regard critique

> Ce projet illustre ma capacité à **respecter des contraintes strictes de programmation fonctionnelle** tout en produisant du code maintenable et testable. Ma valeur ajoutée ? Avoir créé une démo interactive Vue.js avec Cytoscape.js permettant de visualiser pas à pas les algorithmes DFS et BFS.

**Mes apports principaux :**
- Implémentation strictement fonctionnelle sans boucles, mutations ni if/else
- Suite de tests complète avec 128 tests et 100% de couverture
- Démo interactive avec debugger step-by-step

**Ce que j'en retire :** Ce projet m'a confirmé que la programmation fonctionnelle pure est un paradigme puissant qui force à repenser la façon de résoudre les problèmes. J'ai aussi appris l'importance de la visualisation pour comprendre et démontrer des algorithmes.

---

## Présentation du projet

**Functional Graphes** est un projet TypeScript réalisé dans le cadre de mes études, explorant les parcours de graphes (DFS/BFS) dans un style strictement fonctionnel.

L'application inclut une démo interactive Vue.js + Cytoscape.js pour visualiser les algorithmes étape par étape.

![Démo de l'application|clean](https://raw.githubusercontent.com/alexyvanot/functionnal_graphes/main/demo/Assets/Images/demo.gif)

---

## Objectifs, Contexte et Enjeux

### Contexte académique

Ce projet a été réalisé dans le cadre de mes études en **Programmation Fonctionnelle**. L'objectif était d'implémenter des algorithmes de parcours de graphes en respectant des contraintes strictes.

### Contraintes de programmation

| Interdit ❌ | Autorisé ✅ |
|-------------|-------------|
| Boucles (`for`, `while`, `forEach`) | Récursion uniquement |
| `map` / `filter` / `reduce` | Fonctions pures |
| Mutations (`push`, `pop`, etc.) | Immutabilité |
| `if` / `else` | Opérateur ternaire uniquement |

### Objectifs techniques

| Objectif | Réalisation |
|----------|-------------|
| Utilitaires de listes fonctionnels | `src/list-utils.ts` |
| Gestion des nœuds visités (cycles) | `src/visited.ts` |
| Accessibilité DFS | `src/dfs.ts` |
| Carte des parents + reconstruction de chemin | `src/parent.ts` |
| Trouver un chemin avec DFS | `src/dfs.ts` |
| Plus court chemin avec BFS | `src/bfs.ts` |

---

## Fonctionnalités de la démo interactive

La démo Vue.js + Cytoscape.js permet d'explorer les algorithmes visuellement :

- 🎨 **5 graphes prédéfinis** : Simple, Complexe, Déconnecté, Arbre, Inaccessible
- 🔄 **Visualisation DFS et BFS**
- ⏯️ **Animation Play/Pause** avec contrôle de vitesse
- 🐛 **Debugger step-by-step** avec navigation avant/arrière
- 🎯 **Code couleur des états** :
  - 🟢 Vert = Visité
  - 🔵 Bleu = Dans la file (BFS)
  - 🟠 Bordure orange = En cours de traitement
  - ⬛ Noir = Chemin final

---

## Tests et couverture

Le projet dispose d'une suite de tests complète vérifiant à la fois la **correction des algorithmes** ET le **respect des contraintes fonctionnelles** (pas de boucles, pas de if/else, etc.).

| Métrique | Valeur |
|----------|--------|
| Nombre de tests | 128 |
| Couverture de code | 100% |
| Framework de tests | Vitest |

---

## Stack technique

| Technologie | Usage |
|-------------|-------|
| TypeScript | Langage principal (99.5%) |
| Vue.js | Framework de la démo interactive |
| Cytoscape.js | Visualisation des graphes |
| Vitest | Tests unitaires |
| Vite | Build tool |
| GitHub Actions | CI/CD et déploiement GitHub Pages |

---

## Structure du projet

```
src/
├── list-utils.ts   # Q1 - Utilitaires de listes fonctionnels
├── visited.ts      # Q2 - Gestion des nœuds visités
├── dfs.ts          # Q3 & Q5 - Parcours en profondeur
├── parent.ts       # Q4 - Map des parents et reconstruction
└── bfs.ts          # Q6 - Plus court chemin (BFS)

demo/                # Démo interactive Vue.js
tests/               # 128 tests avec 100% couverture
```

---

## Ce que j'ai appris

- **Paradigme fonctionnel pur** : penser en termes de transformations de données plutôt que de mutations
- **Récursion** : maîtriser les appels récursifs et la tail recursion
- **Visualisation d'algorithmes** : créer des outils pédagogiques interactifs
- **Testing rigoureux** : atteindre 100% de couverture avec des tests vérifiant les contraintes
