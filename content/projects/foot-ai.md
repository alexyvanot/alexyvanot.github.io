---
name: Foot AI
slug: foot-ai
category: technique
type: Computer Vision & Machine Learning
color: "#4CAF50"
published: true
logo: https://raw.githubusercontent.com/alexyvanot/foot-ai/main/tactical%20map.jpg
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
  - label: Match exemple 1
    src: https://raw.githubusercontent.com/alexyvanot/foot-ai/main/images/match.png
  - label: Match exemple 2
    src: https://raw.githubusercontent.com/alexyvanot/foot-ai/main/images/match2.png
  - label: Match exemple 3
    src: https://raw.githubusercontent.com/alexyvanot/foot-ai/main/images/match3.png
---

![Démo|clean](https://raw.githubusercontent.com/alexyvanot/foot-ai/main/images/demo.gif)

# Introduction

Ce projet a été réalisé dans le cadre de mes études en **Computer Vision**. Foot AI est un projet Python qui utilise la vision par ordinateur et le machine learning pour analyser des vidéos de football et générer des cartes tactiques avec les positions des joueurs.

Le système exploite **OpenCV** pour le traitement vidéo, **MediaPipe** pour l'estimation de pose, et **Streamlit** pour créer une application web interactive.

![Workflow du projet|clean](https://raw.githubusercontent.com/alexyvanot/foot-ai/main/workflow%20diagram.png)

# Fonctionnalités

- ⚽️ **Upload et traitement de vidéos** de football
- 🕵️‍♂️ **Détection des positions des joueurs** avec MediaPipe
- 🗺️ **Génération de cartes tactiques** avec les positions des joueurs
- 🌐 **Interface web interactive** avec Streamlit
- 📊 **Notebook Jupyter** pour l'analyse de données et la visualisation

# Comment ça fonctionne

1. L'utilisateur upload une vidéo de football via l'interface Streamlit
2. Le système traite la vidéo frame par frame avec OpenCV
3. MediaPipe détecte les poses et positions des joueurs
4. Une carte tactique est générée avec les positions mappées sur un terrain
5. Les résultats sont affichés dans l'interface web

# Technologies utilisées

| Technologie | Utilisation |
|-------------|-------------|
| **Python** | Langage principal |
| **OpenCV** | Traitement d'images et vidéos |
| **MediaPipe** | Détection de pose et tracking |
| **Streamlit** | Interface web interactive |
| **Jupyter Notebook** | Analyse et visualisation des données |
| **YAML** | Configuration des datasets |

# Installation

```bash
git clone https://github.com/alexyvanot/foot-ai.git && cd foot-ai
python -m venv .venv
source .venv/bin/activate  # Sur Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

# Utilisation

## Application Streamlit

```bash
streamlit run src/main.py
```

## Notebook Jupyter

```bash
jupyter notebook FootAI.ipynb
```

# Résultats

L'application permet de transformer une vidéo de match de football en une visualisation tactique, facilitant l'analyse des positions et mouvements des joueurs sur le terrain.

![Démo|clean](https://raw.githubusercontent.com/alexyvanot/foot-ai/main/images/demo.gif)
