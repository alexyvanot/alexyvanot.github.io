---
name: Foot AI - Analyse tactique par vision par ordinateur
slug: foot-ai
category: technique
type: Computer Vision & Machine Learning
color: "#4CAF50"
published: true
logo: https://raw.githubusercontent.com/alexyvanot/foot-ai/main/tactical%20map.jpg
period:
  from: 2025-07-12
  to: 2025-07-12
links:
  - label: GitHub
    url: https://github.com/alexyvanot/foot-ai
skills:
  - python
  - opencv
  - mediapipe
  - streamlit
  - jupyter
attachments:
  - label: Démo de l'application
    src: https://raw.githubusercontent.com/alexyvanot/foot-ai/main/images/demo.gif
  - label: Diagramme de workflow
    src: https://raw.githubusercontent.com/alexyvanot/foot-ai/main/workflow%20diagram.png
  - label: Carte tactique
    src: https://raw.githubusercontent.com/alexyvanot/foot-ai/main/tactical%20map.jpg
team:
  - name: Alexy VANOT
    role: Développeur unique
---

::toc

## Mon regard critique

> Foot AI illustre ma capacité à **combiner plusieurs technologies** (OpenCV, MediaPipe, Streamlit) pour résoudre un problème concret. Ma valeur ajoutée ? Avoir créé un pipeline complet de la vidéo brute à la visualisation tactique, avec une interface utilisateur accessible aux non-techniciens.

**Mes apports principaux :**
- Architecture modulaire séparant traitement vidéo, détection et visualisation
- Interface Streamlit intuitive pour les utilisateurs finaux
- Documentation technique et notebook Jupyter pour la reproductibilité

**Ce que j'en retire :** Ce projet m'a confirmé que la computer vision est un domaine passionnant où les résultats sont immédiatement visibles. J'ai aussi appris l'importance de gérer les cas limites (occlusions, qualité vidéo variable, mouvements rapides).

---

## Présentation du projet

**Foot AI** est un projet Python qui utilise la vision par ordinateur et le machine learning pour analyser des vidéos de football. Le système détecte les positions des joueurs frame par frame et génère une **carte tactique** en temps réel.

L'application combine OpenCV pour le traitement vidéo, MediaPipe pour la détection de pose, et Streamlit pour l'interface web interactive.

![Démo de l'application|clean](https://raw.githubusercontent.com/alexyvanot/foot-ai/main/images/demo.gif)

---

## Objectifs, Contexte et Enjeux

### Contexte académique

Ce projet a été réalisé dans le cadre de mes études en **Computer Vision**. L'objectif était d'appliquer les concepts théoriques (traitement d'images, détection d'objets, tracking) à un cas concret et ludique.

### Objectifs techniques

| Objectif | Réalisation |
|----------|-------------|
| Traiter des vidéos de football | Pipeline OpenCV fonctionnel |
| Détecter les joueurs | Intégration MediaPipe |
| Générer une carte tactique | Projection sur un terrain 2D |
| Interface utilisateur | Application Streamlit |

### Enjeux et défis

**Enjeux :**
- **Performance** : traitement vidéo en temps quasi-réel
- **Précision** : détection fiable malgré les occlusions et mouvements rapides
- **Utilisabilité** : interface accessible aux non-techniciens

**Défis techniques :**
- Gestion des occlusions (joueurs se chevauchant)
- Qualité vidéo variable selon les sources
- Calibration de la projection terrain

---

## Étapes de réalisation

### Phase 1 : Recherche et exploration (1 semaine)

- Étude des approches existantes (YOLO, MediaPipe, OpenPose)
- Analyse des datasets de football disponibles
- Choix de MediaPipe pour sa simplicité d'intégration et ses performances
- Définition du workflow de traitement

![Workflow du projet|clean](https://raw.githubusercontent.com/alexyvanot/foot-ai/main/workflow%20diagram.png)

### Phase 2 : Développement du pipeline de traitement (2 semaines)

**Traitement vidéo (OpenCV) :**
- Extraction frame par frame
- Prétraitement (redimensionnement, normalisation)
- Gestion des différents formats vidéo

**Détection des joueurs (MediaPipe) :**
- Configuration du modèle de détection de pose
- Extraction des points clés (position, posture)
- Filtrage des faux positifs

### Phase 3 : Génération de la carte tactique (1 semaine)

- Définition du mapping vidéo → terrain 2D
- Algorithme de projection des positions
- Visualisation avec Matplotlib/Plotly

### Phase 4 : Interface utilisateur (1 semaine)

**Application Streamlit :**
- Upload de vidéos par l'utilisateur
- Paramètres de configuration (seuils de détection, FPS)
- Affichage temps réel de la carte tactique
- Export des résultats

### Phase 5 : Documentation et tests

- Notebook Jupyter pour l'analyse détaillée
- README complet avec instructions d'installation
- Tests sur différentes vidéos sources

---

## Acteurs et interactions

| Acteur | Rôle | Interactions |
|--------|------|--------------|
| **Moi (développeur)** | Conception et développement complet | Projet individuel |
| **Enseignant CV** | Cadrage et évaluation | Suivi du projet, feedback |
| **Communauté open-source** | Ressources et support | Documentation MediaPipe, forums |

---

## Résultats obtenus

### Fonctionnalités livrées

- ✅ Upload et traitement de vidéos de football
- ✅ Détection des positions des joueurs
- ✅ Génération de cartes tactiques en temps réel
- ✅ Interface web interactive (Streamlit)
- ✅ Notebook Jupyter pour l'analyse

### Performance

| Métrique | Résultat |
|----------|----------|
| FPS de traitement | ~15 FPS sur GPU moyen |
| Précision détection | ~85% dans de bonnes conditions |
| Temps de génération carte | < 2 secondes par frame |

### Pour moi

- **Maîtrise d'OpenCV** et du traitement vidéo
- **Expérience MediaPipe** pour la détection de pose
- **Compétences Streamlit** pour le prototypage rapide d'interfaces

---

## Lendemains du projet

### Aujourd'hui

Le projet est disponible sur GitHub et peut être utilisé pour analyser des vidéos de football amateur ou professionnel.

### Améliorations envisagées

- Intégration de YOLO pour une détection multi-joueurs plus robuste
- Tracking temporel pour suivre les trajectoires
- Analyse tactique automatique (formations, zones de jeu)
- Export vers des formats utilisés par les entraîneurs

### Applications potentielles

- Analyse post-match pour les entraîneurs
- Création de highlights automatiques
- Statistiques de positionnement des joueurs

---

## Compétences mobilisées

Ce projet m'a permis de mobiliser et développer les compétences suivantes :

:::buttons
::button[Python]{link=/skills/python icon=i-logos-python}
::button[Autonomie]{link=/skills/autonomy icon=i-carbon-user-certification}
::button[Créativité]{link=/skills/creativity icon=i-carbon-idea}
:::
