---
name: OpenXR
slug: openxr
published: true
category: library
color: blue
logo: OpenXR
---

::toc

# OpenXR : le standard ouvert de la VR/AR

## 📌 Définition et contexte professionnel

**OpenXR** est un standard ouvert défini par le **Khronos Group** (créateurs d'OpenGL et Vulkan) pour le développement d'applications de **réalité virtuelle (VR)** et **réalité augmentée (AR)**. Il offre une API unifiée compatible avec tous les casques VR majeurs.

L'importance d'OpenXR dans l'industrie :

- **Cross-platform** : un seul code pour Meta Quest, HTC Vive, Windows MR, etc.
- **Standard industriel** : adopté par tous les fabricants de casques
- **Performance** : accès direct au runtime, moins de couches d'abstraction
- **Pérennité** : standard ouvert vs APIs propriétaires éphémères
- **Écosystème** : Unity, Unreal Engine, moteurs custom supportent OpenXR

La VR/AR est en pleine expansion avec des applications dans le **gaming**, la **formation professionnelle**, la **médecine** et l'**industrie**.

---

## 🔍 Mes réalisations concrètes

### InVR : expérience VR d'initiation

Le projet **InVR** utilise OpenXR via Unity pour créer une expérience VR accessible aux débutants.

**Ma contribution** :
- Configuration d'**OpenXR dans Unity** pour une compatibilité multi-casques
- Implémentation des **interactions XR** (grab, teleport, UI)
- Optimisation des **performances** pour le Meta Quest 2 standalone
- Tests sur plusieurs casques pour valider la portabilité

**Résultat** : application fonctionnelle sur Quest 2, Rift S et Windows MR avec une seule codebase.

→ [Voir le projet InVR](/projects/invr)

---

## 🎯 Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| OpenXR via Unity | ★★★☆☆ Intermédiaire |
| Interactions XR (grab, teleport) | ★★★☆☆ Intermédiaire |
| Optimisation VR | ★★☆☆☆ Débutant |
| OpenXR natif (C/C++) | ★☆☆☆☆ Découverte |

### Marge de progression

- **Hand tracking** : suivi des mains sans contrôleurs
- **AR / Mixed Reality** : fonctionnalités de réalité mixte
- **Optimisation** : techniques spécifiques VR (foveated rendering, LOD)
- **OpenXR natif** : utilisation directe de l'API sans Unity

### Place dans mon profil

OpenXR est une compétence **émergente** dans mon profil, découverte via le projet InVR. La VR/AR m'intéresse et je souhaite approfondir ce domaine.

### Conseils tirés de mon expérience

> *"Utilisez OpenXR dès le départ plutôt que des APIs propriétaires. Vous gagnerez en portabilité et en pérennité."*

- Commencer par les **XR Interaction Toolkit** d'Unity, puis explorer OpenXR
- **Tester sur plusieurs casques** dès le début du projet
- Attention aux **performances** : la VR est exigeante (90 FPS minimum)

---

## 📈 Évolution et perspectives

### Objectif à moyen terme

Approfondir le développement VR/AR et explorer les applications professionnelles (formation, visualisation de données).


