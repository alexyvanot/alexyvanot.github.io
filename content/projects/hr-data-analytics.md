---
name: HR Data Analytics - Prédiction de contrats par ML
slug: hr-data-analytics
category: technique
type: Data Science & Machine Learning
color: "#E91E63"
published: true
logo: https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg
period:
  from: 2025-12-04
  to: 2025-12-04
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
team:
  - name: Alexy VANOT
    role: Data Scientist
---

::toc

## Mon regard critique

> Ce projet m'a appris une leçon fondamentale en data science : **la qualité des données prime sur la complexité des algorithmes**. Ma valeur ajoutée ? Avoir documenté honnêtement les limites du modèle et analysé pourquoi les performances étaient limitées, plutôt que de maquiller les résultats.

**Mes apports principaux :**
- Pipeline de nettoyage de données robuste (doublons, anomalies, valeurs manquantes)
- Feature engineering pertinent (création de la variable "Ancienneté")
- Analyse critique des résultats avec identification des causes d'échec

**Ce que j'en retire :** J'ai compris que le machine learning n'est pas magique — un modèle ne peut pas prédire ce que les données ne permettent pas de distinguer. Ce projet m'a aussi appris l'importance du feature engineering et de l'analyse exploratoire.

---

## Présentation du projet

**HR Data Analytics** est un projet de Machine Learning visant à prédire le **type de contrat** (Stage, Alternance, CDD, CDI) d'un employé à partir de ses caractéristiques RH. Le projet couvre l'ensemble du pipeline : nettoyage des données, feature engineering, entraînement et évaluation.

Le projet a été réalisé sur un dataset RH synthétique dans le cadre du module **DataCrafting & Data Mining**.

---

## Objectifs, Contexte et Enjeux

### Contexte académique

Ce projet a été réalisé dans le cadre d'un **module de Data Science** portant sur le nettoyage de données et le machine learning. L'objectif pédagogique était de pratiquer l'ensemble du pipeline ML sur un cas concret.

### Objectifs du projet

| Objectif | Livrable |
|----------|----------|
| Nettoyer un dataset réaliste | Script de prétraitement documenté |
| Détecter et traiter les anomalies | Rapport d'analyse exploratoire |
| Construire un modèle prédictif | RandomForestClassifier optimisé |
| Évaluer et critiquer les résultats | Rapport de classification + analyse |

### Enjeux et défis

**Enjeux :**
- **Qualité des données** : le dataset contenait de nombreuses anomalies
- **Prédiction multi-classe** : 4 types de contrats à distinguer
- **Interprétabilité** : comprendre pourquoi le modèle fonctionne (ou non)

**Défis rencontrés :**
- Données synthétiques avec peu de features discriminantes
- Déséquilibre des classes (plus de CDI que de stages)
- Similarité des profils entre stages et alternances

---

## Étapes de réalisation

### Phase 1 : Exploration et nettoyage (3h)

**Analyse exploratoire :**
- Distribution des variables numériques et catégorielles
- Détection des valeurs aberrantes (âges négatifs, salaires incohérents)
- Identification des valeurs manquantes

**Nettoyage effectué :**
- Suppression des doublons
- Correction des âges incohérents (< 16 ou > 70)
- Imputation des valeurs manquantes
- Standardisation des champs catégoriels (genre, éducation)

### Phase 2 : Feature Engineering (2h)

**Transformations appliquées :**
- Encodage one-hot des variables catégorielles
- Normalisation des features numériques (salaire, âge)
- Création de la feature "Ancienneté" à partir des dates

### Phase 3 : Modélisation (3h)

**Choix du modèle :**
- RandomForestClassifier pour sa robustesse et interprétabilité
- GridSearchCV pour l'optimisation des hyperparamètres

**Paramètres optimisés :**
- Nombre d'arbres
- Profondeur maximale
- Critère de split

### Phase 4 : Évaluation et analyse (2h)

- Rapport de classification (précision, recall, F1-score)
- Matrice de confusion
- Analyse des erreurs et identification des limites

---

## Acteurs et interactions

| Acteur | Rôle | Interactions |
|--------|------|--------------|
| **Moi (data scientist)** | Analyse et modélisation | Projet individuel |
| **Enseignant Data Mining** | Cadrage et évaluation | Consignes, dataset, feedback |

---

## Résultats obtenus

### Performance du modèle

| Métrique | Valeur |
|----------|--------|
| **Précision globale** | ~22-45% selon le split |
| **Meilleure classe (CDI)** | ~60% recall |
| **Pire classe (Stage)** | ~10% recall |

### Analyse des résultats

**Pourquoi les performances sont limitées ?**
- Le dataset synthétique manque de features RH spécifiques (expérience, diplôme détaillé)
- Les profils Stage et Alternance sont très similaires dans les données
- Déséquilibre des classes impactant l'apprentissage

**Ce qui fonctionne :**
- Le modèle distingue relativement bien CDI vs autres contrats
- Le pipeline de prétraitement est robuste et réutilisable

### Pour moi

- **Compétences en data cleaning** : gestion des cas limites
- **Maîtrise de scikit-learn** : pipeline complet
- **Esprit critique** : savoir reconnaître les limites d'un modèle

---

## Lendemains du projet

### Aujourd'hui

Le notebook est disponible sur GitHub et documente l'ensemble du processus, y compris les échecs et leurs analyses.

### Améliorations envisagées

- Enrichissement avec des données réelles (si disponibles)
- Test d'autres algorithmes (XGBoost, SVM)
- Techniques de rééquilibrage des classes (SMOTE)

### Leçons apprises

Ce projet m'a appris que **documenter les échecs est aussi important que célébrer les succès**. Un modèle à 45% de précision sur un problème mal posé apprend plus qu'un 95% sur un dataset trivial.

---

## Compétences mobilisées

Ce projet m'a permis de mobiliser et développer les compétences suivantes :

:::buttons
::button[Python]{link=/skills/python icon=i-logos-python}
::button[Autonomie]{link=/skills/autonomy icon=i-carbon-user-certification}
:::
├── ProjetFinal_DataCrafting_Mining.ipynb  # Notebook principal
├── dataset_rh.csv                          # Dataset RH synthétique
├── requirements.txt                        # Dépendances Python
└── LICENCE                                 # Licence MIT
```
