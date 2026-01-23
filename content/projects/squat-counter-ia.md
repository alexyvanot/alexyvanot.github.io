---
name: Squat Counter IA - Détection de pose avec MediaPipe
slug: squat-counter-ia
category: technique
type: Computer Vision & Pose Estimation
color: "#FF5722"
published: true
logo: https://raw.githubusercontent.com/alexyvanot/squat-counter-ia/main/resources/images/demo.png
period:
  from: 2025-06-27
  to: 2025-06-27
links:
  - label: GitHub
    url: https://github.com/alexyvanot/squat-counter-ia
skills:
  - python
  - opencv
  - mediapipe
  - streamlit
  - numpy
attachments:
  - label: Démo de l'application
    src: https://raw.githubusercontent.com/alexyvanot/squat-counter-ia/main/resources/images/demo.png
team:
  - name: Alexy VANOT
    role: Développeur
---

::toc

## Mon regard critique

> Ce mini-projet réalisé en une journée m'a démontré la **puissance des outils de vision par ordinateur modernes**. Grâce à MediaPipe, j'ai pu implémenter une détection de pose en temps réel en quelques heures seulement.

**Mes apports principaux :**
- Configuration fine des seuils de détection (angles, positions)
- Interface utilisateur intuitive avec jauge visuelle
- Architecture modulaire et configurable

**Ce que j'en retire :** J'ai découvert MediaPipe et sa simplicité d'utilisation. En une journée de TP, j'ai pu créer une application fonctionnelle avec détection de pose en temps réel. Cela m'a donné envie d'explorer davantage la computer vision.

---

## Présentation du projet

**Squat Counter IA** est une application de **computer vision** qui compte automatiquement les squats en analysant la pose de l'utilisateur via la webcam. Elle utilise **MediaPipe** pour la détection du squelette et **Streamlit** pour l'interface.

![Démo de l'application|clean](https://raw.githubusercontent.com/alexyvanot/squat-counter-ia/main/resources/images/demo.png)

---

## Objectifs, Contexte et Enjeux

### Contexte académique

Ce projet a été réalisé dans le cadre d'un **TP universitaire** donné par Ilyes Talbi avec la consigne suivante :

> "Construire un compteur de squats utilisant l'estimation de pose humaine. Utiliser MediaPipe pour extraire les positions des articulations, calculer les angles et distances pour détecter les squats, et afficher le tout avec une UI Streamlit."

### Objectifs du projet

| Objectif | Réalisation |
|----------|-------------|
| Détection de pose en temps réel | MediaPipe Pose |
| Calcul des angles articulaires | NumPy |
| Interface utilisateur intuitive | Streamlit + jauge visuelle |
| Configuration des seuils | Fichier de config dédié |

### Enjeux et défis

**Enjeux :**
- **Précision** : détecter correctement les squats sans faux positifs
- **Temps réel** : traitement fluide de la vidéo webcam
- **Ergonomie** : interface simple et informative

**Défis rencontrés :**
- Calibrer les seuils pour différentes morphologies
- Gérer les cas limites (mauvais éclairage, angle de caméra)

---

## Étapes de réalisation

### Phase 1 : Configuration MediaPipe (2h)

- Installation et configuration de MediaPipe Pose
- Test de détection des points clés du squelette
- Extraction des coordonnées des articulations (genoux, hanches)

### Phase 2 : Logique de détection (2h)

**Algorithme implémenté :**

| État | Angle des genoux | Position des hanches |
|------|------------------|----------------------|
| **Debout** | > 150° | Haute (< 0.60) |
| **Squat** | < 100° | Basse (> 0.70) |

- Calcul des angles entre les articulations
- Machine à états pour compter les répétitions
- Système de validation anti-rebond

### Phase 3 : Interface Streamlit (2h)

- Affichage de la vidéo avec overlay du squelette
- Jauge visuelle dynamique (vert → rouge selon la position)
- Compteur de squats en temps réel
- Configuration des seuils ajustable

### Phase 4 : Tests et ajustements (1h)

- Tests avec différents utilisateurs
- Ajustement des seuils de détection
- Documentation du projet

---

## Acteurs et interactions

| Acteur | Rôle | Interactions |
|--------|------|--------------|
| **Moi (développeur)** | Développement complet | Projet individuel |
| **Ilyes Talbi** | Enseignant, consignes du TP | Fourniture du sujet |

---

## Résultats obtenus

### Application fonctionnelle

- **Détection en temps réel** de la pose humaine
- **Comptage précis** des squats (99%+ de précision dans de bonnes conditions)
- **Interface intuitive** avec feedback visuel
- **Configuration flexible** des seuils

### Pour moi

- **Découverte de MediaPipe** et de ses capacités
- **Expérience en Streamlit** pour le prototypage rapide
- **Compréhension de la pose estimation** et des calculs d'angles

---

## Lendemains du projet

### Aujourd'hui

Le projet est disponible sur GitHub et peut servir de base pour d'autres applications de fitness tracking.

### Améliorations envisagées

- Ajout d'autres exercices (pompes, fentes, etc.)
- Analyse de la qualité du mouvement (feedback correctif)
- Version mobile avec TensorFlow Lite
- Historique des entraînements

### Ce que j'ai réinvesti

La maîtrise de MediaPipe m'a été utile pour d'autres projets de computer vision.

---

## Compétences mobilisées

Ce projet m'a permis de mobiliser et développer les compétences suivantes :

:::buttons
::button[Python]{link=/skills/python icon=i-logos-python}
::button[Autonomie]{link=/skills/autonomy icon=i-carbon-user-certification}
:::
