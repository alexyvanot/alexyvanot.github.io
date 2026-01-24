---
name: TensorFlow
slug: tensorflow
published: true
category: library
color: orange
logo: TensorFlow
---

::toc

# TensorFlow : le deep learning à grande échelle

## :i[pin] Définition et contexte professionnel

**TensorFlow** est une bibliothèque open-source de **machine learning et deep learning** développée par Google Brain. Lancée en 2015, elle est devenue l'un des frameworks les plus utilisés pour l'IA.

L'importance de TensorFlow dans l'industrie :

- **Production-ready** : utilisé par Google, Airbnb, Twitter, Intel
- **Écosystème complet** : TensorFlow Lite (mobile), TensorFlow.js (web), TensorFlow Serving
- **TensorBoard** : visualisation des entraînements
- **Keras intégré** : API haut niveau pour le prototypage rapide
- **Déploiement** : du cloud à l'embarqué (Edge TPU)

Bien que PyTorch gagne en popularité dans la recherche, TensorFlow reste très utilisé en **production industrielle**.

---

## :i[search] Mes réalisations concrètes

### CIFAR-10 : classification d'images par deep learning

Le projet **CIFAR-10** m'a permis d'explorer TensorFlow/Keras pour la classification d'images.

**Ma contribution** :
- Implémentation de **CNN** (Convolutional Neural Networks) avec Keras
- Entraînement sur le dataset **CIFAR-10** (60 000 images, 10 classes)
- Expérimentation avec l'**architecture** (convolutions, pooling, dropout)
- Analyse des résultats avec **TensorBoard**

**Résultat** : modèle atteignant **~85% de précision** sur le test set après tuning.

→ [Voir le projet CIFAR-10](/projects/tpvpocifar)

### Snake Game AI : réseaux de neurones from scratch

Le projet **Snake Game AI** utilise des réseaux de neurones (inspirés de TensorFlow) implémentés avec NumPy.

**Ce que j'ai appris** :
- Fonctionnement interne des **réseaux de neurones**
- **Propagation avant** et **rétropropagation**
- Intérêt des frameworks comme TensorFlow qui automatisent ces calculs

→ [Voir le projet Snake Game AI](/projects/snake-game-ai)

---

## :i[target] Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| Keras API (Sequential, Functional) | ::stars[3/5] Intermédiaire |
| CNN pour images | ::stars[3/5] Intermédiaire |
| Transfer learning | ::stars[2/5] Débutant |
| TensorBoard | ::stars[3/5] Intermédiaire |
| Déploiement (TF Serving, TF Lite) | ::stars[1/5] Découverte |

### Marge de progression

- **Transfer learning** : utilisation de modèles pré-entraînés (ResNet, VGG)
- **NLP** : transformers, BERT avec TensorFlow
- **Déploiement** : TensorFlow Serving pour la production
- **PyTorch** : framework concurrent à explorer

### Place dans mon profil

TensorFlow représente ma **porte d'entrée vers le ML/DL**. C'est une compétence en développement que je souhaite approfondir pour les projets impliquant de l'IA.

### Conseils tirés de mon expérience

> *"Commencez par Keras pour comprendre les concepts, puis descendez vers l'API TensorFlow basse niveau si nécessaire."*

- Utiliser **Google Colab** pour les GPU gratuits
- Commencer par des **datasets simples** (MNIST, CIFAR-10)
- **TensorBoard** est indispensable pour comprendre l'entraînement

---

## :i[growth] Évolution et perspectives

### Objectif à moyen terme

Approfondir le **deep learning** et explorer le **NLP** (traitement du langage naturel) avec TensorFlow ou PyTorch.

### Formations prévues

| Formation | Statut |
|-----------|--------|
| Deep Learning Specialization (Coursera) | En veille |
| TensorFlow Developer Certificate | Prévu |


