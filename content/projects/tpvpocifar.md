---
name: TP VPO CIFAR-10
slug: tpvpocifar
category: technique
type: Deep Learning & Computer Vision
color: "#673AB7"
published: true
logo: https://raw.githubusercontent.com/alexyvanot/tpvpocifar/main/Figure_1.png
links:
  - label: GitHub
    url: https://github.com/alexyvanot/tpvpocifar
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
  - label: Consigne du TP
    src: https://raw.githubusercontent.com/alexyvanot/tpvpocifar/main/consigne.png
  - label: Image test 1
    src: https://raw.githubusercontent.com/alexyvanot/tpvpocifar/main/img/img.png
  - label: Image test 2
    src: https://raw.githubusercontent.com/alexyvanot/tpvpocifar/main/img/img2.png
  - label: Image custom 32x32
    src: https://raw.githubusercontent.com/alexyvanot/tpvpocifar/main/img/customc32.png
---

# TPVPOCIFAR - Pipeline de Vision par Ordinateur avec CIFAR-10

Ce projet démontre un pipeline complet de vision par ordinateur utilisant le dataset **CIFAR-10**. Il couvre l'ensemble du processus de machine learning, de l'exploration des données à l'inférence en temps réel.

![Courbes d'entraînement|clean](https://raw.githubusercontent.com/alexyvanot/tpvpocifar/main/Figure_1.png)

# Fonctionnalités

- 📊 Chargement et exploration des données
- 🔧 Prétraitement du dataset
- 🧠 Construction de modèle avec **CNN** (Convolutional Neural Networks)
- 📈 Entraînement et évaluation du modèle
- 📉 Visualisation des performances
- 💾 Sauvegarde du modèle pour l'inférence
- 🌐 Prédiction en direct via **API Flask** et **interface Streamlit**

# Comment ça fonctionne

1. Le modèle est entraîné sur **10 catégories** d'images RGB de 32x32 pixels
2. Un CNN avec **2 couches de convolution + couches denses** effectue la classification
3. L'utilisateur peut uploader sa propre image (doit être 32x32x3) pour obtenir une prédiction
4. L'app Streamlit envoie l'image à l'API Flask qui retourne la classe prédite

# Dataset CIFAR-10

CIFAR-10 contient **60 000 images** couleur 32x32 réparties en 10 classes :

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

Plus d'infos : [https://www.cs.toronto.edu/~kriz/cifar.html](https://www.cs.toronto.edu/~kriz/cifar.html)

# Architecture du projet

```
tpvpocifar/
├── training_notebook.py    # Script d'entraînement
├── flask_api.py            # API Flask pour les prédictions
├── streamlit_interface.py  # Interface utilisateur Streamlit
├── cifar10_model.h5        # Modèle entraîné sauvegardé
├── cifar.ipynb             # Notebook Jupyter d'expérimentation
└── img/                    # Images de test
```

# Installation et utilisation

```bash
# Cloner et installer
git clone https://github.com/alexyvanot/tpvpocifar.git && cd tpvpocifar
python -m venv venv
venv\Scripts\activate  # Sur Unix: source venv/bin/activate
pip install -r requirements.txt

# Entraîner le modèle
python training_notebook.py

# Lancer l'API Flask
python flask_api.py

# Dans un autre terminal, lancer Streamlit
streamlit run streamlit_interface.py
```

# Technologies utilisées

| Technologie | Utilisation |
|-------------|-------------|
| **TensorFlow/Keras** | Construction et entraînement du CNN |
| **NumPy** | Manipulation des données |
| **Matplotlib** | Visualisation des résultats |
| **Flask** | API REST pour les prédictions |
| **Streamlit** | Interface web interactive |
| **Pillow** | Traitement des images uploadées |
