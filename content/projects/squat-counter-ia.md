---
name: Squat Counter IA
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
---

# 🏋️ Squat Counter

Ce projet a été développé dans le cadre d'un TP universitaire. L'objectif était de créer un compteur de squats utilisant l'estimation de pose humaine avec **MediaPipe** et d'afficher les résultats via une interface **Streamlit**.

![Démo de l'application|clean](https://raw.githubusercontent.com/alexyvanot/squat-counter-ia/main/resources/images/demo.png)

L'exercice a été donné par Ilyes Talbi avec les instructions suivantes :

> "Construire un compteur de squats utilisant l'estimation de pose humaine. Utiliser MediaPipe pour extraire les positions des articulations, calculer les angles et distances pour détecter les squats, et afficher le tout avec une UI Streamlit."

# Fonctionnalités

- 📹 **Détection de squats en temps réel** depuis la webcam
- 🧠 **Analyse d'angles et de position des hanches**
- 📊 **Jauge visuelle** montrant l'état de la pose
- 🖼️ **Interface Streamlit** intuitive

# Comment ça fonctionne

Le système utilise MediaPipe pour détecter le squelette humain et extraire les positions des articulations clés (genoux, hanches). En calculant les angles entre ces articulations, l'application peut déterminer si l'utilisateur est en position debout ou accroupie.

## Logique de détection

| État | Angle des genoux | Position des hanches |
|------|------------------|----------------------|
| **Debout** | > 150° | Haute (< 0.60) |
| **Squat** | < 100° | Basse (> 0.70) |

# Configuration

Les seuils de détection peuvent être ajustés dans `src/squat_counter/init/config_init.py` :

```python
# Plus la valeur de l'angle est basse, plus les genoux sont pliés
SQUAT_THRESHOLD = 100  # Angle minimum pour considérer un squat
STAND_THRESHOLD = 150  # Angle maximum pour considérer debout

# Plus la valeur des hanches est haute, plus les hanches sont proches du sol
SQUAT_HIP_MIN = 0.70   # Distance minimum des hanches pour un squat
STAND_HIP_MAX = 0.60   # Distance maximum des hanches pour être debout
```

# Installation et utilisation

```bash
git clone https://github.com/alexyvanot/squat-counter-ia.git && cd squat-counter-ia
python -m venv .venv
source .venv/bin/activate  # Sur Windows: .venv\Scripts\activate
pip install -r requirements.txt
streamlit run main.py
```

# Technologies utilisées

| Technologie | Utilisation |
|-------------|-------------|
| **MediaPipe** | Estimation de pose et détection du squelette |
| **OpenCV** | Traitement de la vidéo webcam |
| **Streamlit** | Interface utilisateur web |
| **NumPy** | Calculs mathématiques (angles, distances) |

# Utilisation

1. Lancer l'application avec `streamlit run main.py`
2. Autoriser l'accès à la webcam
3. Commencer à faire des squats ! L'app compte vos squats et affiche l'état actuel
4. La jauge visuelle montre votre position en temps réel (vert = debout, rouge = squat)
