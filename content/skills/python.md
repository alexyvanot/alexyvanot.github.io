---
name: Python
slug: python
published: true
category: pro-lang
color: yellow
logo: Python
---

::toc

# Python : ma boîte à outils pour l'IA et le prototypage

## :i[pin] Définition et contexte professionnel

**Python** est un langage de programmation interprété, créé par Guido van Rossum en 1991. Sa philosophie *"There should be one— and preferably only one —obvious way to do it"* et sa syntaxe épurée en font le langage le plus accessible pour débuter, tout en restant suffisamment puissant pour des applications complexes.

En 2025, Python domine plusieurs domaines clés :

- **Intelligence Artificielle et Machine Learning** : TensorFlow, PyTorch, scikit-learn
- **Data Science** : pandas, NumPy, Matplotlib
- **Computer Vision** : OpenCV, MediaPipe
- **Scripting et automatisation** : remplacement de Bash pour les tâches système
- **Web backend** : Django, Flask, FastAPI

Dans mon parcours, Python occupe une place **complémentaire à Java**. Là où Java excelle pour les applications d'entreprise structurées, Python brille pour le **prototypage rapide**, l'**analyse de données** et les projets d'**intelligence artificielle**. Au Synchrotron SOLEIL, Python est utilisé pour les scripts d'automatisation et l'analyse des données expérimentales des lignes de lumière.

L'écosystème Python connaît une croissance explosive avec l'essor de l'IA générative. Des frameworks comme **LangChain** ou **Hugging Face Transformers** permettent d'intégrer des LLM en quelques lignes de code. Cette actualité renforce l'importance de maîtriser Python pour tout développeur souhaitant travailler dans le domaine de l'IA.

---

## :i[search] Mes réalisations concrètes

### Foot AI : analyse tactique de matchs de football

**Foot AI** est un projet de Computer Vision développé dans le cadre de mes études. L'application analyse des vidéos de football pour générer des cartes tactiques montrant les positions des joueurs.

**Le défi** : extraire automatiquement les positions des joueurs à partir d'une vidéo de match, sans marqueurs ni capteurs, uniquement par analyse d'image.

**Ma contribution** :
- Pipeline complet de traitement vidéo avec **OpenCV** (extraction de frames, filtrage, détection de contours)
- Intégration de **MediaPipe** pour l'estimation de pose et la détection des joueurs
- Algorithme de **tracking** pour suivre les joueurs entre les frames
- Interface web interactive avec **Streamlit** pour upload et visualisation
- Génération de **cartes tactiques 2D** à partir des positions détectées

**Résultat** : application fonctionnelle capable de traiter des clips de 30 secondes et de générer une carte tactique avec une précision de détection de ~85% sur les vidéos de qualité broadcast.

→ [Voir le projet Foot AI](/projects/foot-ai)

### CIFAR-10 : pipeline complet de Deep Learning

Ce projet universitaire couvre l'ensemble du workflow Machine Learning, de l'exploration des données à l'inférence en production.

**Le défi** : construire un modèle de classification d'images capable de reconnaître 10 catégories (avion, voiture, oiseau, chat, etc.) avec une précision acceptable.

**Ma contribution** :
- Exploration et prétraitement du dataset **CIFAR-10** (60 000 images)
- Architecture **CNN** (Convolutional Neural Network) avec TensorFlow/Keras
- Optimisation des hyperparamètres (learning rate, batch size, epochs)
- Visualisation des courbes d'entraînement (loss, accuracy)
- Déploiement via **API Flask** et interface **Streamlit** pour l'inférence

**Résultat** : modèle atteignant **78% de précision** sur le jeu de test, avec une API permettant de classifier n'importe quelle image 32x32 en temps réel.

→ [Voir le projet CIFAR-10](/projects/tpvpocifar)

### Squat Counter : estimation de pose en temps réel

Application de comptage de squats utilisant la webcam et l'estimation de pose humaine.

**Le défi** : détecter et compter les squats en temps réel sans équipement spécial, uniquement avec une webcam standard.

**Ma contribution** :
- Extraction des **landmarks corporels** avec MediaPipe Pose (33 points d'articulation)
- Calcul d'**angles articulaires** (hanches, genoux) pour détecter la phase du squat
- **Machine à états** pour le comptage (debout → descente → bas → remontée → debout)
- Interface Streamlit avec **jauge visuelle** en temps réel
- Optimisation pour maintenir **30 FPS** sur un laptop standard

**Résultat** : compteur fonctionnel avec moins de 5% d'erreur sur des séries de 20 squats, utilisable pour l'entraînement personnel.

→ [Voir le projet Squat Counter](/projects/squat-counter-ia)

---

## :i[meter] Autocritique et positionnement

### Niveau de maîtrise

Je situe ma compétence Python à un **niveau avancé**, particulièrement dans les domaines de la data et du ML :

:::chart{type=radar title="Maîtrise Python" size=280}
Syntaxe: 100
Pandas/NumPy: 80
Computer Vision: 80
Deep Learning: 60
Web backend: 60
MLOps: 40
:::

| Domaine | Niveau |
|---------|--------|
| Syntaxe et idiomes Python | ::stars[5/5] Expert |
| Data manipulation (pandas, NumPy) | ::stars[4/5] Avancé |
| Computer Vision (OpenCV, MediaPipe) | ::stars[4/5] Avancé |
| Deep Learning (TensorFlow) | ::stars[3/5] Intermédiaire |
| Web backend (Flask, FastAPI) | ::stars[3/5] Intermédiaire |
| MLOps (déploiement modèles) | ::stars[2/5] Débutant |

### Marge de progression

Mes axes d'amélioration identifiés :

- **PyTorch** : j'utilise principalement TensorFlow, mais PyTorch domine la recherche académique
- **MLOps** : packaging de modèles, versioning (MLflow, DVC), déploiement scalable
- **LLM et IA générative** : LangChain, fine-tuning de modèles, RAG (Retrieval-Augmented Generation)
- **Async Python** : asyncio et programmation asynchrone pour les APIs performantes

### Contextualisation

Ma compétence Python fonctionne particulièrement bien pour :
- **Prototypage rapide** : tester une idée en quelques heures
- **Projets ML/IA** : l'écosystème est imbattable
- **Scripts d'automatisation** : plus lisible et maintenable que Bash

En revanche, pour des applications backend d'entreprise à long terme, je préfère **Java/Spring** pour sa robustesse et son typage statique.

### Place dans mon profil

Python est mon **langage de prédilection pour l'IA et le prototypage**. Combiné à Java pour le backend et TypeScript pour le frontend, il complète un profil full-stack orienté data. Dans mes responsabilités actuelles, Python sert principalement pour :
- Les PoC (Proof of Concept) rapides
- Les analyses de données ponctuelles
- Les projets personnels et universitaires en ML

### Vitesse d'acquisition

Python a été mon **premier langage de programmation** (2017), appris en autodidacte via des tutoriels YouTube et des projets personnels. La courbe d'apprentissage douce m'a permis de produire des scripts utiles dès les premières semaines. La montée en compétence sur les frameworks ML (2023-présent) s'est faite naturellement grâce aux bases solides.

### Conseils tirés de mon expérience

> *"Python pardonne beaucoup d'erreurs de débutant, mais apprenez rapidement les bonnes pratiques (PEP8, typing, virtual environments) pour ne pas accumuler de dette technique."*

Mes recommandations :
- **Toujours utiliser des virtual environments** (venv ou conda) : évite les conflits de dépendances
- **Apprendre pandas et NumPy** avant les frameworks ML : ce sont les fondations
- **Utiliser les type hints** : Python 3.10+ les rend presque indispensables pour la maintenabilité
- **Jupyter pour explorer, .py pour produire** : ne pas confondre notebook et code de production

---

## :i[growth] Évolution et perspectives

### Mon objectif à moyen terme

D'ici 2 ans, je vise à devenir **opérationnel sur les projets d'IA en entreprise**, capable de :
- Concevoir et déployer des pipelines ML end-to-end
- Intégrer des LLM dans des applications métier
- Mettre en place des pratiques MLOps (monitoring, versioning, CI/CD pour modèles)

### Formations en cours et à venir

| Formation | Statut | Objectif |
|-----------|--------|----------|
| Deep Learning Specialization (Coursera) | En cours | Fondamentaux théoriques solides |
| LangChain & LLM | Prévu 2026 | Maîtriser l'IA générative |
| MLOps avec MLflow | Prévu | Industrialiser les modèles |

### Veille technologique

Je suis activement :
- Les publications de Hugging Face et OpenAI
- La chaîne YouTube de Sentdex pour le ML pratique
- Le subreddit r/MachineLearning pour les dernières recherches
- Les releases Python (3.12, 3.13) pour les nouvelles fonctionnalités
