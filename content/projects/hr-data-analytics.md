---
name: HR Data Analytics
slug: hr-data-analytics
type: Data Science & Machine Learning
color: "#E91E63"
published: true
logo: https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg
links:
  - label: GitHub
    url: https://github.com/alexyvanot/hr-data-analytics
  - label: Notebook
    url: https://github.com/alexyvanot/hr-data-analytics/blob/main/ProjetFinal_DataCrafting_Mining.ipynb
skills:
  - python
  - pandas
  - numpy
  - matplotlib
  - scikitlearn
  - jupyter
---

# 📊 HR Data Analytics – Prédiction du Type de Contrat

Projet de **Machine Learning** réalisé dans le cadre du module académique **DataCrafting & Data Mining**.

Ce projet se concentre sur l'analyse d'un dataset RH synthétique afin de :

- 🧹 Nettoyer et prétraiter les informations des employés
- 🔍 Détecter les anomalies et valeurs manquantes
- 🤖 Construire un modèle prédictif pour déterminer le type de contrat (Stage, Alternance, CDD, CDI)

# Pipeline de traitement des données

## 1. Nettoyage des données

- Suppression des doublons
- Correction des âges incohérents et salaires anormaux
- Gestion des valeurs manquantes (imputation ou suppression)
- Standardisation des champs catégoriels (genre, éducation, type de contrat...)

## 2. Feature Engineering

- Encodage des variables catégorielles
- Normalisation des features numériques
- Création d'une nouvelle feature : `Ancienneté` (seniority de l'employé)

## 3. Machine Learning

- Classification supervisée avec `RandomForestClassifier`
- Optimisation des hyperparamètres avec `GridSearchCV`
- Évaluation via rapport de classification et matrice de confusion

# Résultats du modèle

Le modèle montre une capacité partielle à distinguer les contrats CDI et CDD, mais a des difficultés à différencier les stages et alternances en raison de l'absence d'indicateurs RH spécifiques.

| Métrique | Valeur |
|----------|--------|
| **Précision obtenue** | ~22–45% selon le split du dataset |

> Note : Les performances limitées sont dues à la nature synthétique du dataset et au manque de features discriminantes pour les contrats courts.

# Technologies utilisées

| Technologie | Utilisation |
|-------------|-------------|
| **Python 3** | Langage principal |
| **Pandas** | Manipulation et nettoyage des données |
| **NumPy** | Calculs numériques |
| **Matplotlib/Seaborn** | Visualisation des données |
| **Scikit-learn** | Modèles de ML et évaluation |
| **Jupyter Notebook** | Environnement d'analyse |

# Installation et exécution

```bash
# Cloner le projet
git clone https://github.com/alexyvanot/hr-data-analytics.git
cd hr-data-analytics

# Installer les dépendances
pip install -r requirements.txt

# Ouvrir le notebook
jupyter notebook ProjetFinal_DataCrafting_Mining.ipynb
```

# Structure du projet

```
hr-data-analytics/
├── ProjetFinal_DataCrafting_Mining.ipynb  # Notebook principal
├── dataset_rh.csv                          # Dataset RH synthétique
├── requirements.txt                        # Dépendances Python
└── LICENCE                                 # Licence MIT
```
