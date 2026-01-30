---
name: MySudoku - Jeu de Sudoku en JavaFX
slug: mysudoku
category: technique
type: Application Desktop & Jeu
color: "#FF7043"
published: true
logo: https://raw.githubusercontent.com/alexyvanot/mysudoku-archive/main/src/main/resources/images/iconhd.png
period:
  from: 2022-01-01
  to: 2026-01-30
links:
  - label: GitHub
    to: https://github.com/alexyvanot/mysudoku-archive
  - label: Télécharger
    to: https://alexyvanot.fr/mysudoku-archive/
skills:
  - java
  - javafx
  - css
attachments:
  - label: Logo MySudoku
    src: https://raw.githubusercontent.com/alexyvanot/mysudoku-archive/main/src/main/resources/images/iconhd.png
team:
  - name: Alexy VANOT
    role: Développeur principal
  - name: BriESIEA
    role: Contributeur
---

::toc

## Mon regard critique

> MySudoku illustre ma capacité à **reprendre et améliorer un projet existant** plusieurs années après sa création initiale. Ma valeur ajoutée ? Avoir corrigé des bugs critiques du solver et ajouté des fonctionnalités visuelles qui améliorent significativement l'expérience utilisateur.

**Mes apports principaux :**
- Correction du solver qui ne respectait pas les valeurs initiales de la grille
- Ajout d'un système de feedback visuel coloré (vert/rouge/orange)
- Amélioration de la lisibilité avec les bordures de blocs 3x3
- Pipeline CI/CD pour générer automatiquement les releases

**Ce que j'en retire :** Ce projet m'a appris l'importance de la maintenance logicielle et comment revenir sur du code ancien avec un regard neuf. J'ai aussi découvert les défis de la distribution d'applications Java cross-platform.

---

## Présentation du projet

**MySudoku** est un jeu de Sudoku développé en JavaFX lors de ma 2ème année d'études, puis remasterisé en 2026 avec des corrections de bugs et des améliorations visuelles.

L'application propose plusieurs niveaux de difficulté, un chronomètre, et un mode "Give Up" avec un feedback coloré sur les erreurs commises.

![Logo MySudoku|clean](https://raw.githubusercontent.com/alexyvanot/mysudoku-archive/main/src/main/resources/images/iconhd.png)

---

## Objectifs, Contexte et Enjeux

### Contexte académique

Ce projet a été initialement réalisé lors de ma **2ème année d'études** pour apprendre JavaFX et les interfaces graphiques en Java. En 2026, j'ai décidé de le reprendre pour corriger les bugs et le rendre distribuable.

### Fonctionnalités

| Fonctionnalité | Description |
|----------------|-------------|
| Niveaux de difficulté | Débutant, Modéré, Difficile |
| Chronomètre | Suivi du temps de résolution |
| Feedback visuel | Bordures 3x3 et distinction cellules éditables/fixes |
| Mode Give Up | Solution avec code couleur |
| Multi-langue | Anglais & Français |

### Code couleur du mode Give Up

- 🟢 **Vert** : Entrées correctes de l'utilisateur
- 🔴 **Rouge** : Cellules vides remplies par le solver
- 🟠 **Orange** : Entrées incorrectes corrigées

---

## Évolutions du projet

### v1.0 (2022) - Version originale

- Gameplay Sudoku de base
- Interface JavaFX fonctionnelle
- Algorithme de résolution par backtracking

### v2.0 (2026) - Édition remasterisée

- ✅ Correction du solver qui ne respectait pas les valeurs initiales
- ✅ Correction de l'écran de victoire qui apparaissait après "Give Up"
- ✅ Ajout du feedback coloré (vert/rouge/orange)
- ✅ Ajout des bordures de blocs 3x3
- ✅ Amélioration visuelle des cellules éditables vs fixes
- ✅ Correction de l'affichage du chronomètre
- ✅ Différenciation "You Won" vs "Game Over"

---

## Stack technique

| Technologie | Usage |
|-------------|-------|
| Java 11 | Langage principal (94.8%) |
| JavaFX 11 | Framework d'interface graphique |
| CSS | Stylisation de l'interface (5.2%) |
| Maven | Build tool et gestion des dépendances |
| GitHub Actions | CI/CD pour les releases automatiques |

---

## Structure du projet

```
mysudoku-archive/
├── src/main/java/com/intech/mysudoku/
│   ├── application/     # Point d'entrée de l'application
│   ├── controllers/     # Contrôleurs JavaFX
│   ├── model/           # Modèles et composants JavaFX
│   └── tools/           # Logique Sudoku (Board, Cell, Solver)
├── src/main/resources/
│   ├── images/          # Icônes et assets
│   └── views/           # Fichiers FXML et CSS
└── pom.xml              # Configuration Maven
```

---

## Comment jouer

1. **Démarrer** une nouvelle partie depuis le menu principal
2. **Sélectionner** la difficulté : Débutant, Modéré ou Difficile
3. **Remplir** la grille en cliquant sur les cellules vides et en entrant les chiffres 1-9
4. **Gagner** en complétant la grille selon les règles du Sudoku
5. **Abandonner** (optionnel) : Cliquer sur "Give Up" pour voir la solution avec le feedback coloré

### Règles du Sudoku

- Chaque ligne doit contenir les chiffres 1-9 sans répétition
- Chaque colonne doit contenir les chiffres 1-9 sans répétition
- Chaque bloc 3x3 doit contenir les chiffres 1-9 sans répétition

---

## Ce que j'ai appris

- **JavaFX** : Création d'interfaces graphiques riches avec FXML et CSS
- **Algorithme de backtracking** : Résolution de grilles de Sudoku
- **Maintenance logicielle** : Reprendre et améliorer du code existant
- **Distribution cross-platform** : Créer des JAR et EXE exécutables
- **CI/CD** : Automatiser les builds et releases avec GitHub Actions
