---
title: "Analyse d'images et Computer Vision : Retour sur le projet Foot AI"
slug: projet-foot-ai-computer-vision
published: true
excerpt: "Comment j'ai développé un système de détection et segmentation des pieds en temps réel avec YOLOv8. Les défis de la création d'un dataset personnalisé et du fine-tuning d'un modèle de deep learning."
author: Alexy VANOT
publishedAt: 2025-06-01
tags:
  - projet-technique
  - computer-vision
  - yolo
  - deep-learning
  - python
logo: Python
readingTime: 16
color: "#FF6F00"
---

# Analyse d'images et Computer Vision : Retour sur le projet Foot AI

Le projet Foot AI est né d'une question apparemment simple : peut-on entraîner un modèle de deep learning à détecter et segmenter des pieds dans une image ? Ce qui semblait trivial au premier abord s'est révélé être un excellent exercice d'apprentissage, couvrant l'intégralité du pipeline d'un projet de Computer Vision moderne.

## Contexte et objectifs

### Le cadre académique

Ce projet s'inscrivait dans le cadre d'un cours de Vision par Ordinateur en dernière année d'études. L'objectif pédagogique était ambitieux : maîtriser le pipeline complet d'un projet de vision par ordinateur, de la collecte des données au déploiement d'un modèle fonctionnel.

Les étapes à couvrir :
1. Définition du problème et collecte des données
2. Annotation et préparation du dataset
3. Choix et configuration de l'architecture
4. Entraînement et validation du modèle
5. Évaluation et analyse des erreurs
6. Déploiement pour l'inférence en temps réel

### Pourquoi la détection de pieds

Le choix du sujet peut sembler incongru. En réalité, il répondait à plusieurs critères pédagogiques :
- Classe unique (simplifie l'analyse des résultats)
- Variabilité importante (chaussures, angles, éclairages)
- Applications potentielles (podologie, sport, essayage virtuel)
- Absence de dataset public existant (obligation de créer le sien)

Ce dernier point était crucial : l'objectif n'était pas de reproduire un tutoriel avec un dataset tout prêt, mais de vivre l'expérience complète de la création d'un système de vision sur mesure.

## La création du dataset

### Stratégie de collecte

La qualité d'un modèle de machine learning dépend fondamentalement de la qualité de ses données d'entraînement. J'ai donc consacré un temps significatif à la réflexion sur la stratégie de collecte.

**Sources d'images utilisées :**
- Photos personnelles prises spécifiquement pour le projet
- Images libres de droits de banques d'images
- Captures d'écran de vidéos YouTube (tutoriels de danse, sport)
- Photos de proches ayant donné leur consentement

**Critères de diversité :**
- Types de chaussures : baskets, talons, sandales, chaussures de ville, pieds nus
- Environnements : intérieur, extérieur, sols variés
- Conditions d'éclairage : lumière naturelle, artificielle, ombres portées
- Angles de vue : face, profil, plongée, contre-plongée
- Nombre de pieds : un seul, deux, groupe de personnes
- Occlusions : partielles (herbe, vêtements) ou pieds entièrement visibles

Au total, j'ai collecté 247 images répondant à ces critères de diversité.

### L'annotation avec Roboflow

L'annotation est la phase la plus chronophage d'un projet de Computer Vision. Pour la segmentation (contrairement à la simple détection par boîtes englobantes), il faut délimiter précisément les contours de chaque objet.

**Choix de l'outil**
J'ai utilisé Roboflow pour plusieurs raisons :
- Interface intuitive pour l'annotation polygonale
- Génération automatique des formats d'export (YOLO, COCO, etc.)
- Fonctionnalités d'augmentation de données intégrées
- Versioning du dataset

**Le processus d'annotation**
Chaque image nécessitait :
1. Identification de tous les pieds présents
2. Traçage du contour précis de chaque pied (20-30 points par objet)
3. Vérification et ajustement des polygones

En moyenne, une image prenait 3 à 5 minutes à annoter correctement. Soit environ 15 heures de travail pour les 247 images.

### Les erreurs du premier dataset

Ma première version du dataset présentait plusieurs biais que j'ai identifiés a posteriori :

**Biais de source**
Trop d'images provenaient du même environnement (mon appartement). Le modèle apprenait à reconnaître mon parquet autant que les pieds.

**Biais de distribution**
80% des images montraient des baskets. Le modèle échouait systématiquement sur les pieds nus et les talons.

**Annotations incohérentes**
Au début, j'hésitais sur les cas limites : inclure ou non la cheville ? Où s'arrête le pied quand la chaussure monte ? L'absence de convention claire créait de l'inconsistance.

**Corrections apportées**
- Diversification des sources d'images
- Rééquilibrage des types de chaussures
- Rédaction d'un guide d'annotation avec règles explicites
- Ré-annotation des cas ambigus

Cette phase de correction a ajouté une semaine au projet mais a significativement amélioré les résultats finaux.

## L'entraînement avec YOLOv8

### Pourquoi YOLO

YOLO (You Only Look Once) est devenu la référence pour la détection d'objets en temps réel. Sa version 8, développée par Ultralytics, apporte :
- Architecture modernisée (backbone CSPDarknet, neck PANet)
- Support natif de la segmentation d'instance
- API Python simple et bien documentée
- Poids pré-entraînés sur COCO (80 classes, millions d'images)

Le transfer learning depuis ces poids pré-entraînés est la clé : le modèle sait déjà extraire des features générales des images. Il suffit de l'adapter à notre classe spécifique.

### Choix de la taille du modèle

YOLOv8 existe en plusieurs variantes :

| Modèle | Paramètres | mAP (COCO) | Vitesse (FPS) |
|--------|------------|------------|---------------|
| YOLOv8n | 3.2M | 37.3 | 480 |
| YOLOv8s | 11.2M | 44.9 | 230 |
| YOLOv8m | 25.9M | 50.2 | 120 |
| YOLOv8l | 43.7M | 52.9 | 80 |
| YOLOv8x | 68.2M | 53.9 | 45 |

J'ai opté pour YOLOv8n (nano) pour plusieurs raisons :
- Ressources GPU limitées (GTX 1060 6GB)
- Objectif d'inférence temps réel sur hardware modeste
- Classe unique ne nécessitant pas une capacité de représentation énorme

### Configuration de l'entraînement

```python
from ultralytics import YOLO

# Charger le modèle pré-entraîné
model = YOLO('yolov8n-seg.pt')

# Entraînement
results = model.train(
    data='foot_dataset.yaml',
    epochs=100,
    imgsz=640,
    batch=16,
    patience=20,
    lr0=0.01,
    lrf=0.01,
    augment=True,
    mosaic=1.0,
    mixup=0.1,
    copy_paste=0.1
)
```

**Hyperparamètres clés :**

*Learning rate (lr0, lrf)*
Trop élevé : le modèle diverge et la loss explose
Trop bas : l'apprentissage est lent et peut rester coincé dans un minimum local
J'ai commencé à 0.01 et utilisé un scheduler cosine pour décroître progressivement.

*Patience*
Nombre d'époques sans amélioration avant arrêt anticipé. 20 époques permettent de s'assurer qu'une stagnation n'est pas temporaire.

*Augmentations*
Mosaic (assemblage de 4 images), MixUp (superposition d'images), Copy-Paste (copie d'objets d'une image à l'autre). Ces techniques augmentent artificiellement la diversité du dataset.

### Suivi de l'entraînement

YOLOv8 génère automatiquement des courbes de loss et métriques dans TensorBoard. J'ai surveillé :

**Box loss et Segmentation loss**
Les deux doivent diminuer. Une divergence suggère un problème d'architecture ou d'hyperparamètres.

**Precision et Recall**
Le compromis entre les deux est crucial. Une precision élevée avec recall faible signifie que le modèle est trop conservateur (manque des détections). L'inverse signifie trop de faux positifs.

**mAP50 et mAP50-95**
Mean Average Precision à IoU 50% et sur la plage 50-95%. Ces métriques standards permettent la comparaison avec d'autres travaux.

## Résultats et analyse

### Performances finales

Après 73 époques (arrêt anticipé), le modèle atteignait :

| Métrique | Valeur |
|----------|--------|
| mAP50 (boxes) | 0.924 |
| mAP50-95 (boxes) | 0.789 |
| mAP50 (masks) | 0.912 |
| mAP50-95 (masks) | 0.756 |
| Inference time | 12ms/image |

Ces résultats sont satisfaisants pour un dataset de cette taille et une classe unique.

### Analyse des succès

Le modèle excelle sur :
- Pieds de face ou de profil avec éclairage correct
- Chaussures de sport (sur-représentées dans le dataset)
- Images sans occlusion majeure
- Résolutions moyennes à élevées

### Analyse des échecs

Les cas d'erreur révèlent les limites du modèle et du dataset :

**Faux négatifs (pieds non détectés)**
- Pieds partiellement occultés (moins de 30% visibles)
- Images très sombres ou surexposées
- Pieds flous (mouvement rapide)
- Angles de vue extrêmes (vue du dessus pure)

**Faux positifs (détections erronées)**
- Objets oblongs de couleur chair (mains parfois)
- Chaussures posées au sol sans pied dedans
- Reflets dans des surfaces brillantes

**Segmentation imprécise**
- Contours imprécis sur les chaussures noires (faible contraste)
- Confusion cheville/pied sur les images serrées
- Artefacts sur les bords d'occlusion

### Visualisation des erreurs

J'ai implémenté un outil de visualisation pour analyser systématiquement les cas d'erreur :

```python
def analyze_errors(model, test_dataset, iou_threshold=0.5):
    false_positives = []
    false_negatives = []
    
    for image, gt_boxes in test_dataset:
        predictions = model(image)
        
        for pred in predictions:
            if not matches_any_gt(pred, gt_boxes, iou_threshold):
                false_positives.append((image, pred))
        
        for gt in gt_boxes:
            if not matched_by_any_pred(gt, predictions, iou_threshold):
                false_negatives.append((image, gt))
    
    return false_positives, false_negatives
```

Cette analyse systématique a guidé les améliorations du dataset pour des itérations futures.

## Ce que j'ai appris

### La donnée est reine

C'est un adage répété dans le machine learning, mais l'expérimenter concrètement marque durablement. J'ai passé plus de temps sur le dataset que sur l'entraînement lui-même. Et c'est le temps le mieux investi.

Un bon modèle avec des données médiocres donnera des résultats médiocres. Un modèle basique avec d'excellentes données peut surpasser un modèle sophistiqué mal nourri.

### L'importance des métriques multiples

Regarder uniquement l'accuracy globale est trompeur. Elle masque les biais de distribution et les cas limites. Une analyse complète inclut :
- Courbes precision-recall
- Matrice de confusion
- Distribution des erreurs par catégorie d'images
- Inspection visuelle des cas limites

### Le transfer learning change la donne

Partir d'un modèle pré-entraîné sur COCO a énormément accéléré l'apprentissage. Le modèle savait déjà détecter des contours, des textures, des formes. Il n'avait qu'à adapter ces features générales à notre classe spécifique.

Entraîner from scratch avec seulement 247 images aurait produit un modèle très pauvre.

### L'augmentation de données est puissante

Les techniques d'augmentation (rotations, changements de luminosité, miroir, mosaic) multiplient virtuellement la taille du dataset. Elles permettent au modèle de généraliser au-delà des exemples vus exactement.

Mais attention aux augmentations qui n'ont pas de sens pour le problème : une rotation de 180° peut être pertinente pour des objets quelconques, moins pour des pieds qui ont généralement une orientation verticale.

## Application pratique

### Interface de démonstration

Pour concrétiser le projet au-delà des métriques abstraites, j'ai développé une interface de démonstration avec Gradio :

```python
import gradio as gr
from ultralytics import YOLO

model = YOLO('best.pt')

def detect_feet(image):
    results = model(image)
    annotated = results[0].plot()
    return annotated

demo = gr.Interface(
    fn=detect_feet,
    inputs=gr.Image(type="pil"),
    outputs=gr.Image(type="pil"),
    title="Foot AI - Détection et segmentation de pieds",
    description="Uploadez une image pour détecter les pieds présents."
)

demo.launch()
```

Cette interface permet de :
- Tester le modèle sur des images uploadées
- Utiliser la webcam pour de l'inférence en direct
- Visualiser les masques de segmentation superposés

### Démonstration en direct

La démo en temps réel via webcam était particulièrement impressionnante. Le modèle détectait et segmentait les pieds à 30+ FPS sur un laptop standard, suivant les mouvements en temps réel.

Cette capacité temps réel ouvre des perspectives d'applications concrètes :
- Analyse de la foulée pour le sport
- Aide au diagnostic en podologie
- Essayage virtuel de chaussures

## Perspectives d'amélioration

### À court terme

- Augmenter le dataset à 500+ images
- Ajouter des sous-classes (pied gauche/droit, type de chaussure)
- Tester des architectures plus grandes (YOLOv8s)
- Implémenter du tracking pour suivre les pieds dans une vidéo

### À long terme

- Collecter un dataset à grande échelle avec crowdsourcing
- Entraîner un modèle multi-tâches (détection + estimation de pose du pied)
- Déployer comme API pour intégration dans d'autres applications

## Conclusion

Ce projet Foot AI m'a donné une compréhension solide et pratique du pipeline Computer Vision. Les concepts appris (annotation, augmentation, fine-tuning, évaluation, déploiement) sont directement transférables à n'importe quel autre problème de détection d'objets ou de segmentation.

Au-delà des compétences techniques, j'ai développé une intuition pour les pièges courants : biais de dataset, surapprentissage, métriques trompeuses. Cette expérience pratique est impossible à acquérir par la seule lecture de tutoriels.

C'est aussi un rappel salutaire que derrière les performances impressionnantes des modèles de vision modernes, il y a un travail considérable et souvent ingrat de préparation des données. Le deep learning n'est pas de la magie : c'est de l'ingénierie rigoureuse.
