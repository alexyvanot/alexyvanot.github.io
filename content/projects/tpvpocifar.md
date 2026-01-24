---
name: CIFAR-10 - Classification d'images par Deep Learning
slug: tpvpocifar
category: technique
type: Deep Learning & Computer Vision
color: "#673AB7"
published: true
logo: https://raw.githubusercontent.com/alexyvanot/tpvpocifar/main/Figure_1.png
period:
  from: 2025-05-23
  to: 2025-05-23
links:
  - label: GitHub
    to: https://github.com/alexyvanot/tpvpocifar
skills:
  - python
  - tensorflow
  - numpy
  - flask
  - streamlit
  - jupyter
attachments:
  - label: Courbes d'entraînement
    src: https://raw.githubusercontent.com/alexyvanot/tpvpocifar/main/Figure_1.png
team:
  - name: Alexy VANOT
    role: Développeur unique
---

::toc

## Mon regard critique

> Ce projet m'a permis de comprendre le **pipeline complet du machine learning** : de l'exploration des données à l'inférence en production. Ma valeur ajoutée ? Avoir créé non seulement un modèle fonctionnel, mais aussi une API Flask et une interface Streamlit pour le rendre utilisable par n'importe qui.

**Mes apports principaux :**
- Architecture CNN optimisée pour CIFAR-10 (2 couches convolutives + denses)
- API REST pour l'inférence en temps réel
- Interface utilisateur permettant de tester ses propres images

**Ce que j'en retire :** J'ai appris que l'entraînement d'un modèle n'est que la moitié du travail — le déploiement et l'interfaçage sont tout aussi importants. Ce projet m'a aussi montré l'importance de la visualisation pour comprendre le comportement d'un réseau de neurones.

---

## Présentation du projet

**TPVPOCIFAR** est un projet de vision par ordinateur qui implémente un pipeline complet de classification d'images sur le dataset **CIFAR-10**. Il couvre l'ensemble du processus : exploration des données, prétraitement, entraînement d'un CNN, évaluation et déploiement via API.

Le projet inclut une interface Streamlit permettant à n'importe qui de tester le modèle avec ses propres images.

![Courbes d'entraînement|clean](https://raw.githubusercontent.com/alexyvanot/tpvpocifar/main/Figure_1.png)

---

## Objectifs, Contexte et Enjeux

### Contexte académique

Ce projet a été réalisé dans le cadre d'un TP de **Vision Par Ordinateur** (VPO). L'objectif pédagogique était de mettre en pratique les concepts de deep learning sur un dataset classique et bien documenté.

### Le dataset CIFAR-10

CIFAR-10 est un benchmark standard en computer vision contenant **60 000 images** couleur 32×32 pixels réparties en 10 classes :

| Classe | Description |
|--------|-------------|
| 0 | Avion |
| 1 | Automobile |
| 2 | Oiseau |
| 3 | Chat |
| 4 | Cerf |
| 5 | Chien |
| 6 | Grenouille |
| 7 | Cheval |
| 8 | Bateau |
| 9 | Camion |

### Objectifs techniques

| Objectif | Réalisation |
|----------|-------------|
| Explorer et prétraiter les données | Notebook Jupyter |
| Entraîner un CNN | TensorFlow/Keras |
| Évaluer les performances | Métriques et visualisations |
| Déployer le modèle | API Flask + Interface Streamlit |

### Enjeux et défis

**Enjeux :**
- **Apprentissage** : comprendre le fonctionnement des CNN en pratique
- **Généralisation** : éviter l'overfitting sur un petit dataset
- **Déploiement** : rendre le modèle accessible

**Défis techniques :**
- Images de faible résolution (32×32) limitant la complexité des features
- Équilibre entre complexité du modèle et temps d'entraînement
- Gestion des images utilisateur (format, dimensions)

---

## Étapes de réalisation

### Phase 1 : Exploration des données (1 jour)

- Chargement du dataset via `tensorflow.keras.datasets`
- Visualisation d'exemples de chaque classe
- Analyse de la distribution des données
- Normalisation des valeurs de pixels (0-1)

### Phase 2 : Construction du modèle CNN (1 jour)

**Architecture choisie :**
```
Input (32×32×3)
    ↓
Conv2D (32 filtres, 3×3) + ReLU
    ↓
MaxPooling2D (2×2)
    ↓
Conv2D (64 filtres, 3×3) + ReLU
    ↓
MaxPooling2D (2×2)
    ↓
Flatten
    ↓
Dense (64) + ReLU
    ↓
Dense (10) + Softmax → Output
```

**Choix techniques :**
- 2 couches de convolution : suffisant pour des images 32×32
- MaxPooling pour réduire la dimensionnalité
- Dropout pour limiter l'overfitting

### Phase 3 : Entraînement et évaluation (1 jour)

- Entraînement sur 50 epochs avec early stopping
- Validation sur 20% des données d'entraînement
- Visualisation des courbes loss/accuracy
- Matrice de confusion pour analyser les erreurs

### Phase 4 : Déploiement (1 jour)

**API Flask :**
- Endpoint POST `/predict` acceptant une image
- Prétraitement automatique (redimensionnement 32×32)
- Retour JSON avec classe prédite et confiance

**Interface Streamlit :**
- Upload d'image par l'utilisateur
- Appel à l'API Flask
- Affichage du résultat avec probabilités par classe

---

## Acteurs et interactions

| Acteur | Rôle | Interactions |
|--------|------|--------------|
| **Moi (développeur)** | Conception et développement complet | Projet individuel |
| **Enseignant VPO** | Cadrage et évaluation | Consignes, feedback |
| **Dataset CIFAR-10** | Source de données | Toronto University |

---

## Résultats obtenus

### Performance du modèle

| Métrique | Valeur |
|----------|--------|
| Accuracy (test set) | ~78% |
| Loss finale | ~0.65 |
| Temps d'entraînement | ~10 min (GPU) |

### Fonctionnalités livrées

- :i[checkmark-filled] Notebook d'exploration et entraînement
- :i[checkmark-filled] Modèle sauvegardé (`.h5`)
- :i[checkmark-filled] API Flask pour l'inférence
- :i[checkmark-filled] Interface Streamlit
- :i[checkmark-filled] Documentation complète

### Pour moi

- **Maîtrise de TensorFlow/Keras** pour les CNN
- **Compréhension du pipeline ML** end-to-end
- **Compétences en déploiement** (Flask, Streamlit)

---

## Lendemains du projet

### Aujourd'hui

Le projet est disponible sur GitHub et peut servir de base pour d'autres expérimentations en classification d'images.

### Améliorations envisagées

- Data augmentation pour améliorer la généralisation
- Architectures plus profondes (ResNet, VGG)
- Transfer learning depuis des modèles pré-entraînés
- Déploiement cloud (Heroku, AWS Lambda)

### Apprentissages à réinvestir

Ce projet m'a donné les bases pour aborder des problèmes de computer vision plus complexes : détection d'objets, segmentation, etc.

---

## Compétences mobilisées

Ce projet m'a permis de mobiliser et développer les compétences suivantes :

:::buttons
::button[Python]{link=/skills/python icon=i-logos-python}
::button[Autonomie]{link=/skills/autonomy icon=i-carbon-user-certification}
::button[Créativité]{link=/skills/creativity icon=i-carbon-idea}
:::
