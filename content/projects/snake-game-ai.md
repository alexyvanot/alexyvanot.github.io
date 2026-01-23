---
name: Snake Game AI - Apprentissage par algorithmes génétiques
slug: snake-game-ai
published: true
pinned: true
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
team:
  - name: Alexy VANOT
    role: Développeur ML
---

::toc

## Mon regard critique

> Ce projet m'a fait comprendre la puissance et les limites de l'**apprentissage par renforcement** via algorithmes génétiques. Ma valeur ajoutée ? Avoir optimisé les paramètres d'entraînement pour atteindre **98% de performance** sur le modèle horizontal, et avoir documenté l'ensemble du processus d'expérimentation.

**Mes apports principaux :**
- Optimisation des hyperparamètres (taux de mutation, taille de population)
- Visualisation de l'apprentissage en temps réel
- Analyse comparative des modèles vertical et horizontal

**Ce que j'en retire :** J'ai compris que l'apprentissage par algorithmes génétiques est fascinant mais coûteux en temps de calcul. La convergence peut prendre des milliers de générations. Ce projet m'a aussi appris à être patient et à laisser l'entraînement tourner pendant des heures.

---

## Présentation du projet

**Snake Game AI** est un projet de Machine Learning qui entraîne une intelligence artificielle à jouer au jeu classique Snake. L'IA utilise des **algorithmes génétiques** combinés à des **réseaux de neurones** pour apprendre à jouer sans aucune programmation explicite des règles.

Le snake apprend en évoluant sur plusieurs générations : les meilleurs individus sont sélectionnés et leurs "gènes" (poids du réseau neuronal) sont transmis à la génération suivante.

<img src="https://raw.githubusercontent.com/alexyvanot/Snake-Game-AI/main/assets/animfull.gif" alt="Snake Game AI" width="350" />

---

## Objectifs, Contexte et Enjeux

### Contexte académique

Ce projet a été réalisé dans le cadre d'un module **Machine Learning** à l'ESIEA. Il s'appuie sur un codebase fourni par l'enseignant, que j'ai amélioré et optimisé.

### Objectifs du projet

| Objectif | Réalisation |
|----------|-------------|
| Comprendre les algorithmes génétiques | Implémentation complète |
| Entraîner un réseau neuronal | Sans TensorFlow (NumPy only) |
| Optimiser les performances | 98% de score maximal |
| Visualiser l'apprentissage | Pygame pour le rendu |

### Enjeux et défis

**Enjeux :**
- **Convergence** : trouver les bons hyperparamètres pour que l'IA apprenne
- **Performance** : temps d'entraînement raisonnable
- **Généralisation** : IA capable de jouer dans différentes configurations

**Défis rencontrés :**
- Équilibre exploration/exploitation dans l'algorithme génétique
- Éviter les minima locaux (snake qui tourne en rond)
- Optimisation du temps de calcul

---

## Étapes de réalisation

### Phase 1 : Compréhension et setup (3 jours)

- Analyse du codebase fourni
- Compréhension de l'architecture du réseau neuronal
- Configuration de l'environnement (Python 3.13, NumPy, Pygame)

### Phase 2 : Expérimentation des hyperparamètres (1 semaine)

**Paramètres testés :**
- Taille de la population (50, 100, 200)
- Taux de mutation (0.01, 0.05, 0.1)
- Nombre de générations (500, 1000, 2000)
- Architecture du réseau (nombre de couches, neurones)

**Méthode :**
- Tests systématiques avec logging des résultats
- Comparaison des scores moyens et maximaux

### Phase 3 : Entraînement des modèles finaux (2 jours)

**Modèle Vertical :**
- 573 itérations d'entraînement
- Score maximal : 96%

**Modèle Horizontal :**
- 1000 itérations d'entraînement
- Score maximal : 98%

### Phase 4 : Documentation et analyse (2 jours)

- Sauvegarde des modèles entraînés (.txt)
- Création des GIFs de démonstration
- Rédaction de la documentation

---

## Acteurs et interactions

| Acteur | Rôle | Interactions |
|--------|------|--------------|
| **Moi (développeur ML)** | Optimisation et entraînement | Projet individuel |
| **Enseignant ML** | Fourniture du codebase initial | Consignes, évaluation |

---

## Résultats obtenus

### Performance des modèles

| Modèle | Itérations | Meilleur score |
|--------|------------|----------------|
| **Vertical** | 573/1000 | 96.00% |
| **Horizontal** | 1000/1000 | 98.00% |

### Observations

- Le modèle horizontal converge mieux (espace de recherche plus adapté ?)
- Les premières générations sont chaotiques, puis l'apprentissage s'accélère
- Les modèles évitent généralement les murs mais peuvent se coincer

### Pour moi

- **Compréhension profonde** des algorithmes génétiques
- **Expérience en optimisation** d'hyperparamètres
- **Patience** : l'entraînement peut prendre des heures

---

## Lendemains du projet

### Aujourd'hui

Les modèles entraînés sont disponibles sur GitHub. Le projet peut servir de base pour d'autres expérimentations en apprentissage par renforcement.

### Améliorations envisagées

- Migration vers PyTorch pour plus de flexibilité
- Ajout du Q-Learning pour comparaison
- Entraînement sur GPU pour accélérer la convergence
- Visualisation des poids du réseau neuronal

### Ce que j'ai réinvesti

Ce projet m'a donné une bonne base pour comprendre l'apprentissage par renforcement, que j'ai pu approfondir dans d'autres contextes.

---

## Compétences mobilisées

Ce projet m'a permis de mobiliser et développer les compétences suivantes :

:::buttons
::button[Python]{link=/skills/python icon=i-logos-python}
::button[Autonomie]{link=/skills/autonomy icon=i-carbon-user-certification}
:::
