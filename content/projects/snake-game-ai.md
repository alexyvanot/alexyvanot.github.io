---
name: Snake Game AI
slug: snake-game-ai
published: true
category: technique
type: Machine Learning
color: "#3776AB"
logo: https://raw.githubusercontent.com/alexyvanot/Snake-Game-AI/main/assets/animfull.gif
period:
  from: 2024-12-01
  to: 2025-01-01
skills:
  - python
  - numpy
  - tensorflow
links:
  - label: GitHub
    to: https://github.com/alexyvanot/Snake-Game-AI
attachments:
  - label: Démo du jeu
    src: https://raw.githubusercontent.com/alexyvanot/Snake-Game-AI/main/assets/animfull.gif
  - label: Modèle Vertical (txt)
    src: https://raw.githubusercontent.com/alexyvanot/Snake-Game-AI/main/vertical_model.txt
  - label: Modèle Horizontal (txt)
    src: https://raw.githubusercontent.com/alexyvanot/Snake-Game-AI/main/horizontal_model.txt
---

<img src="https://raw.githubusercontent.com/alexyvanot/Snake-Game-AI/main/assets/animfull.gif" alt="Snake Game AI clean" width="350" />

## À propos

**Snake Game AI** est un projet de Machine Learning qui utilise des **algorithmes génétiques** et des **réseaux de neurones** pour entraîner une intelligence artificielle à jouer au jeu classique Snake.

L'IA apprend à jouer en évoluant sur plusieurs générations, améliorant ses performances grâce à des scores de fitness. Ce projet a été développé dans le cadre d'un module académique de Machine Learning.

## Fonctionnement

- 🧬 **Algorithmes génétiques** — L'IA évolue par sélection naturelle, croisant les meilleurs individus
- 🧠 **Réseaux de neurones** — Chaque snake possède un réseau neuronal qui prend des décisions
- 📈 **Fitness scoring** — Les performances sont évaluées et les meilleurs gènes sont transmis
- 🔄 **Apprentissage itératif** — L'IA s'améliore génération après génération

## Résultats des modèles

| Modèle | Itérations | Meilleur score |
|--------|------------|----------------|
| Vertical | 573/1000 | **96.00%** |
| Horizontal | 1000/1000 | **98.00%** |

## Stack technique

| Technologie | Utilisation |
|-------------|-------------|
| Python 3.13 | Langage principal |
| NumPy | Calculs matriciels et opérations sur les réseaux de neurones |
| Pygame | Interface graphique et rendu du jeu |

## Configuration

Les paramètres d'entraînement de l'IA sont personnalisables via le fichier `.env` :
- Taille de la population
- Nombre de générations
- Taux de mutation
- Architecture du réseau neuronal

## Contexte académique

Projet réalisé dans le cadre du module **Machine Learning** à l'ESIEA. Basé sur un codebase fourni par l'enseignant, avec des améliorations et modifications personnelles significatives.
