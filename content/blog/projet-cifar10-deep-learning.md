---
title: "Deep Learning et classification d'images : Mon expérience avec CIFAR-10"
slug: projet-cifar10-deep-learning
published: true
excerpt: "Implémentation et comparaison de différentes architectures de réseaux de neurones pour la classification d'images sur le dataset CIFAR-10. De la théorie à la pratique avec PyTorch."
author: Alexy VANOT
publishedAt: 2025-05-15
tags:
  - projet-technique
  - deep-learning
  - classification
  - pytorch
  - cnn
logo: PyTorch
readingTime: 18
color: "#EE4C2C"
pinned: true
---

# Deep Learning et classification d'images : Mon expérience avec CIFAR-10

CIFAR-10 est un classique incontournable de l'apprentissage automatique. Avec ses 60 000 images couleur de 32x32 pixels réparties en 10 classes, c'est le terrain d'entraînement idéal pour comprendre les réseaux de neurones convolutifs avant de s'attaquer à des problèmes plus complexes.

Ce projet, réalisé dans le cadre d'un cours de Deep Learning, m'a permis de passer de la théorie à la pratique et de développer une intuition concrète pour le fonctionnement des CNN.

## Présentation de CIFAR-10

### Le dataset

CIFAR-10 (Canadian Institute For Advanced Research) est composé de :
- 50 000 images d'entraînement
- 10 000 images de test
- 10 classes équilibrées : avion, automobile, oiseau, chat, cerf, chien, grenouille, cheval, bateau, camion

Chaque image fait 32x32 pixels en RGB, soit 3072 valeurs par image. Cette faible résolution est à la fois un avantage (entraînement rapide) et une limitation (détails peu visibles).

### Pourquoi CIFAR-10

Ce dataset occupe une place particulière dans l'histoire du deep learning :
- Suffisamment petit pour être traité sur un GPU modeste
- Suffisamment complexe pour nécessiter des architectures non triviales
- Benchmark standardisé avec des résultats publiés pour comparaison
- Disponible directement dans PyTorch et TensorFlow

## Objectifs du projet

Le travail pratique définissait plusieurs objectifs progressifs :

1. **Implémenter un CNN from scratch** : comprendre chaque couche, chaque paramètre
2. **Comparer différentes architectures** : mesurer l'impact de la profondeur et de la complexité
3. **Maîtriser les techniques de régularisation** : lutter contre l'overfitting
4. **Analyser les erreurs** : comprendre les limites du modèle

L'évaluation portait autant sur la démarche méthodologique que sur les performances brutes.

## Architecture de base

### Le premier modèle naïf

Mon premier modèle était volontairement minimaliste : deux couches convolutives suivies de deux couches fully connected.

```python
class SimpleConvNet(nn.Module):
    def __init__(self):
        super().__init__()
        self.conv1 = nn.Conv2d(3, 32, kernel_size=3, padding=1)
        self.conv2 = nn.Conv2d(32, 64, kernel_size=3, padding=1)
        self.pool = nn.MaxPool2d(2, 2)
        self.fc1 = nn.Linear(64 * 8 * 8, 512)
        self.fc2 = nn.Linear(512, 10)
    
    def forward(self, x):
        x = self.pool(F.relu(self.conv1(x)))  # 32x32 -> 16x16
        x = self.pool(F.relu(self.conv2(x)))  # 16x16 -> 8x8
        x = x.view(-1, 64 * 8 * 8)
        x = F.relu(self.fc1(x))
        x = self.fc2(x)
        return x
```

**Résultat** : 65% d'accuracy sur le test set après 20 époques.

C'est un point de départ, pas une destination. Ce score de base sert de référence pour mesurer l'apport de chaque amélioration.

### Analyse de ce premier modèle

Le gap entre train accuracy (95%) et test accuracy (65%) révèle un overfitting massif. Le modèle mémorise les exemples d'entraînement sans généraliser.

Causes identifiées :
- Capacité du modèle trop grande par rapport à la régularisation
- Pas d'augmentation de données
- Pas de dropout ni de batch normalization

## Évolution progressive de l'architecture

### Ajout de profondeur

La profondeur d'un réseau détermine sa capacité à apprendre des features hiérarchiques. J'ai progressivement ajouté des couches :

```python
class DeeperConvNet(nn.Module):
    def __init__(self):
        super().__init__()
        # Block 1
        self.conv1_1 = nn.Conv2d(3, 64, 3, padding=1)
        self.conv1_2 = nn.Conv2d(64, 64, 3, padding=1)
        # Block 2
        self.conv2_1 = nn.Conv2d(64, 128, 3, padding=1)
        self.conv2_2 = nn.Conv2d(128, 128, 3, padding=1)
        # Block 3
        self.conv3_1 = nn.Conv2d(128, 256, 3, padding=1)
        self.conv3_2 = nn.Conv2d(256, 256, 3, padding=1)
        
        self.pool = nn.MaxPool2d(2, 2)
        self.fc1 = nn.Linear(256 * 4 * 4, 512)
        self.fc2 = nn.Linear(512, 10)
        self.dropout = nn.Dropout(0.5)
```

Avec cette architecture plus profonde et du dropout : 74% d'accuracy.

### Batch Normalization

L'ajout de BatchNorm après chaque convolution a été une révélation. Les bénéfices sont multiples :

**Stabilisation de l'entraînement**
Les activations restent dans une plage raisonnable, évitant les problèmes de gradient vanishing/exploding.

**Régularisation implicite**
Le bruit introduit par les statistiques de batch agit comme une forme de régularisation.

**Learning rates plus élevés**
Avec BatchNorm, le modèle tolère des learning rates plus agressifs, accélérant la convergence.

```python
self.bn1_1 = nn.BatchNorm2d(64)
self.bn1_2 = nn.BatchNorm2d(64)
# ...
x = F.relu(self.bn1_1(self.conv1_1(x)))
```

Avec BatchNorm : 79% d'accuracy. Un gain significatif pour un ajout simple.

### Architecture finale optimisée

Après de nombreuses itérations, mon architecture personnalisée atteignait :

```python
class OptimizedConvNet(nn.Module):
    def __init__(self):
        super().__init__()
        # Block 1: 32x32 -> 16x16
        self.block1 = nn.Sequential(
            nn.Conv2d(3, 64, 3, padding=1),
            nn.BatchNorm2d(64),
            nn.ReLU(inplace=True),
            nn.Conv2d(64, 64, 3, padding=1),
            nn.BatchNorm2d(64),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(2, 2),
            nn.Dropout2d(0.25)
        )
        # Block 2: 16x16 -> 8x8
        self.block2 = nn.Sequential(
            nn.Conv2d(64, 128, 3, padding=1),
            nn.BatchNorm2d(128),
            nn.ReLU(inplace=True),
            nn.Conv2d(128, 128, 3, padding=1),
            nn.BatchNorm2d(128),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(2, 2),
            nn.Dropout2d(0.25)
        )
        # Block 3: 8x8 -> 4x4
        self.block3 = nn.Sequential(
            nn.Conv2d(128, 256, 3, padding=1),
            nn.BatchNorm2d(256),
            nn.ReLU(inplace=True),
            nn.Conv2d(256, 256, 3, padding=1),
            nn.BatchNorm2d(256),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(2, 2),
            nn.Dropout2d(0.25)
        )
        # Classifier
        self.classifier = nn.Sequential(
            nn.Linear(256 * 4 * 4, 512),
            nn.BatchNorm1d(512),
            nn.ReLU(inplace=True),
            nn.Dropout(0.5),
            nn.Linear(512, 10)
        )
```

**Résultat** : 82% d'accuracy avec environ 1.2M de paramètres.

## Les techniques qui font la différence

### Data Augmentation

Sans augmentation, le modèle overfitte inévitablement sur les 50 000 images d'entraînement. L'augmentation crée artificiellement de la variété :

```python
transform_train = transforms.Compose([
    transforms.RandomCrop(32, padding=4),
    transforms.RandomHorizontalFlip(p=0.5),
    transforms.ColorJitter(brightness=0.2, contrast=0.2, saturation=0.2),
    transforms.RandomRotation(15),
    transforms.ToTensor(),
    transforms.Normalize(
        mean=[0.4914, 0.4822, 0.4465],
        std=[0.2470, 0.2435, 0.2616]
    )
])

transform_test = transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize(
        mean=[0.4914, 0.4822, 0.4465],
        std=[0.2470, 0.2435, 0.2616]
    )
])
```

**Important** : l'augmentation ne s'applique qu'à l'entraînement, pas au test. Les métriques de test doivent refléter la performance sur des données réelles, non augmentées.

**Impact** : +3-4 points d'accuracy et réduction significative de l'overfitting.

### Learning Rate Scheduling

Un learning rate constant n'est pas optimal. Au début, on veut avancer vite ; vers la fin, on veut des ajustements fins.

J'ai testé plusieurs stratégies :

**StepLR**
Division par 10 tous les N epochs. Simple mais brutal.
```python
scheduler = optim.lr_scheduler.StepLR(optimizer, step_size=30, gamma=0.1)
```

**CosineAnnealingLR**
Décroissance douce suivant une courbe cosinus.
```python
scheduler = optim.lr_scheduler.CosineAnnealingLR(optimizer, T_max=100)
```

**ReduceLROnPlateau**
Réduction automatique quand la loss stagne. Ma préférée pour sa nature adaptive.
```python
scheduler = optim.lr_scheduler.ReduceLROnPlateau(
    optimizer, mode='min', factor=0.5, patience=5, verbose=True
)
```

ReduceLROnPlateau a donné les meilleurs résultats sur ce dataset : le scheduler s'adapte à la dynamique réelle de l'apprentissage plutôt que de suivre un calendrier fixe.

### Optimiseur

J'ai comparé SGD avec momentum et Adam :

**SGD + Momentum**
```python
optimizer = optim.SGD(model.parameters(), lr=0.1, momentum=0.9, weight_decay=5e-4)
```

**Adam**
```python
optimizer = optim.Adam(model.parameters(), lr=0.001, weight_decay=5e-4)
```

Résultat surprenant : SGD avec un bon scheduling atteint de meilleures performances finales qu'Adam, bien qu'il converge plus lentement au début. Ce constat est cohérent avec la littérature académique sur les benchmarks d'images.

## Comparaison des architectures

Au-delà de mon CNN personnalisé, j'ai implémenté et comparé des architectures classiques :

### VGG-11 adapté

VGG utilise uniquement des convolutions 3x3 empilées. J'ai adapté VGG-11 pour les images 32x32 de CIFAR-10 :

```python
class VGG11_CIFAR(nn.Module):
    def __init__(self):
        super().__init__()
        self.features = nn.Sequential(
            # Conv block 1
            nn.Conv2d(3, 64, 3, padding=1), nn.BatchNorm2d(64), nn.ReLU(True),
            nn.MaxPool2d(2, 2),
            # Conv block 2
            nn.Conv2d(64, 128, 3, padding=1), nn.BatchNorm2d(128), nn.ReLU(True),
            nn.MaxPool2d(2, 2),
            # Conv block 3
            nn.Conv2d(128, 256, 3, padding=1), nn.BatchNorm2d(256), nn.ReLU(True),
            nn.Conv2d(256, 256, 3, padding=1), nn.BatchNorm2d(256), nn.ReLU(True),
            nn.MaxPool2d(2, 2),
            # Conv block 4
            nn.Conv2d(256, 512, 3, padding=1), nn.BatchNorm2d(512), nn.ReLU(True),
            nn.Conv2d(512, 512, 3, padding=1), nn.BatchNorm2d(512), nn.ReLU(True),
            nn.MaxPool2d(2, 2),
            # Conv block 5
            nn.Conv2d(512, 512, 3, padding=1), nn.BatchNorm2d(512), nn.ReLU(True),
            nn.Conv2d(512, 512, 3, padding=1), nn.BatchNorm2d(512), nn.ReLU(True),
            nn.MaxPool2d(2, 2),
        )
        self.classifier = nn.Sequential(
            nn.Linear(512, 512), nn.ReLU(True), nn.Dropout(0.5),
            nn.Linear(512, 10)
        )
```

### ResNet-18 adapté

ResNet introduit les connexions résiduelles qui permettent d'entraîner des réseaux beaucoup plus profonds :

```python
class BasicBlock(nn.Module):
    def __init__(self, in_channels, out_channels, stride=1):
        super().__init__()
        self.conv1 = nn.Conv2d(in_channels, out_channels, 3, stride, 1, bias=False)
        self.bn1 = nn.BatchNorm2d(out_channels)
        self.conv2 = nn.Conv2d(out_channels, out_channels, 3, 1, 1, bias=False)
        self.bn2 = nn.BatchNorm2d(out_channels)
        
        self.shortcut = nn.Sequential()
        if stride != 1 or in_channels != out_channels:
            self.shortcut = nn.Sequential(
                nn.Conv2d(in_channels, out_channels, 1, stride, bias=False),
                nn.BatchNorm2d(out_channels)
            )
    
    def forward(self, x):
        out = F.relu(self.bn1(self.conv1(x)))
        out = self.bn2(self.conv2(out))
        out += self.shortcut(x)  # Skip connection
        out = F.relu(out)
        return out
```

### Résultats comparatifs

| Architecture | Test Accuracy | Paramètres | Temps/époque |
|-------------|---------------|------------|--------------|
| CNN simple | 65% | 0.4M | 15s |
| CNN optimisé | 82% | 1.2M | 25s |
| VGG-11 | 89% | 9.8M | 45s |
| ResNet-18 | 93% | 11.2M | 50s |

**Observations :**
- La profondeur et les skip connections de ResNet apportent un gain significatif
- VGG atteint de bonnes performances mais avec beaucoup plus de paramètres
- Mon CNN personnalisé offre un bon ratio performance/complexité

## Analyse des erreurs

### Matrice de confusion

La matrice de confusion révèle les patterns d'erreur :

```python
from sklearn.metrics import confusion_matrix
import seaborn as sns

def plot_confusion_matrix(model, test_loader):
    model.eval()
    all_preds, all_labels = [], []
    
    with torch.no_grad():
        for images, labels in test_loader:
            outputs = model(images.cuda())
            _, predicted = outputs.max(1)
            all_preds.extend(predicted.cpu().numpy())
            all_labels.extend(labels.numpy())
    
    cm = confusion_matrix(all_labels, all_preds)
    plt.figure(figsize=(10, 8))
    sns.heatmap(cm, annot=True, fmt='d', 
                xticklabels=classes, yticklabels=classes)
    plt.xlabel('Predicted')
    plt.ylabel('True')
```

### Classes les plus confondues

Les paires de classes problématiques sont prévisibles et instructives :

**Chat / Chien** : 15% de confusion mutuelle
Deux animaux à quatre pattes, souvent photographiés de face. La faible résolution (32x32) ne permet pas de distinguer finement les traits du visage.

**Automobile / Camion** : 12% de confusion
Véhicules de forme similaire. La distinction repose sur des proportions subtiles difficiles à capturer en basse résolution.

**Oiseau / Avion** : 8% de confusion
Formes parfois proches (ailes étendues). Le contexte (ciel) est souvent similaire.

**Cerf / Cheval** : 7% de confusion
Quadrupèdes de profil, morphologie comparable à cette résolution.

### Ce que révèle l'analyse des erreurs

Le modèle a appris des features pertinentes mais manque de granularité pour les distinctions fines. C'est une limitation inhérente à la résolution des images plus qu'à l'architecture du modèle.

Cette analyse suggère que pour améliorer significativement les performances, il faudrait :
- Des images de plus haute résolution
- Des features supplémentaires (texture, contexte)
- Des mécanismes d'attention pour se focaliser sur les régions discriminantes

## Visualisation des features

### Feature maps

Pour comprendre ce que le modèle "voit", j'ai visualisé les activations des couches intermédiaires :

```python
def visualize_feature_maps(model, image, layer_name):
    activation = {}
    
    def hook(model, input, output):
        activation['output'] = output.detach()
    
    layer = dict(model.named_modules())[layer_name]
    handle = layer.register_forward_hook(hook)
    
    model(image.unsqueeze(0).cuda())
    handle.remove()
    
    features = activation['output'].squeeze().cpu()
    
    fig, axes = plt.subplots(8, 8, figsize=(12, 12))
    for idx, ax in enumerate(axes.flat):
        if idx < features.shape[0]:
            ax.imshow(features[idx], cmap='viridis')
        ax.axis('off')
```

**Observations :**
- Les premières couches détectent des edges et des gradients de couleur
- Les couches intermédiaires capturent des textures et des motifs répétitifs
- Les couches profondes activent des patterns plus abstraits, spécifiques aux classes

### Grad-CAM

Gradient-weighted Class Activation Mapping montre quelles régions de l'image influencent la prédiction :

Les visualisations Grad-CAM confirment que le modèle se focalise sur les régions pertinentes : la tête et le corps pour les animaux, la carrosserie pour les véhicules.

## Leçons apprises

### L'importance de la méthodologie

Modifier plusieurs hyperparamètres simultanément rend l'analyse impossible. Chaque expérience doit isoler une variable :
- Une seule modification par run
- Logging systématique des paramètres et résultats
- Reproductibilité via seeds fixées

```python
torch.manual_seed(42)
torch.cuda.manual_seed(42)
np.random.seed(42)
```

### Les limites du dataset

CIFAR-10 reste un dataset "jouet". Ses images de 32x32 pixels limitent la complexité des features extractibles. Les architectures qui excellent sur CIFAR-10 ne sont pas nécessairement optimales pour des problèmes réels avec des images haute résolution.

C'est un outil d'apprentissage précieux, pas une représentation fidèle des défis industriels.

### L'importance de la reproductibilité

Fixer les seeds aléatoires, documenter chaque expérience, sauvegarder les checkpoints : ces pratiques semblent fastidieuses mais deviennent vite indispensables.

Un résultat non reproductible n'a pas de valeur scientifique.

## Conclusion

Ce projet m'a donné une compréhension intuitive et pratique des CNN. Au-delà des formules mathématiques, j'ai compris pourquoi certaines techniques fonctionnent (BatchNorm stabilise les distributions, skip connections permettent le flux de gradient) et quand les utiliser.

Les 93% d'accuracy atteints avec ResNet-18 sont proches de l'état de l'art publié sur ce dataset. Plus important que ce chiffre, c'est le chemin parcouru depuis les 65% du premier modèle naïf qui constitue l'apprentissage réel.

Cette expérience a posé les fondations pour des projets plus complexes : détection d'objets (YOLO), segmentation sémantique (U-Net), et au-delà. Les principes restent les mêmes ; seule la complexité augmente.
