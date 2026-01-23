---
name: Nano Pong - Jeu rétro sur Arduino
slug: nano-pong
published: true
category: technique
type: Embedded System
color: "#00979D"
logo: https://raw.githubusercontent.com/alexyvanot/nano-pong/main/resources/images/breadboard/t_main3.png
period:
  from: 2022-01-01
  to: 2022-06-01
skills:
  - c
  - arduino
  - vscode
links:
  - label: GitHub
    to: https://github.com/alexyvanot/nano-pong
attachments:
  - label: Circuit principal
    src: https://raw.githubusercontent.com/alexyvanot/nano-pong/main/resources/images/breadboard/t_main3.png
  - label: Montage breadboard
    src: https://raw.githubusercontent.com/alexyvanot/nano-pong/main/resources/images/breadboard/main.jpg
team:
  - name: Alexy VANOT
    role: Développeur
  - name: Sandro Bakuradze
    role: Développeur
  - name: Pierre Gervais
    role: Développeur
  - name: Brice Nyamsi
    role: Développeur
---

::toc

## Mon regard critique

> Ce projet a été ma **première expérience de programmation embarquée**, et aussi ma première expérience de **travail en équipe de 4 sur du code**. Ma valeur ajoutée ? Avoir contribué à la logique de jeu (calcul des angles de rebond) et à la coordination de l'équipe pour intégrer les différents modules.

**Mes apports principaux :**
- Implémentation de la physique des rebonds (angles selon la zone de la raquette)
- Participation à l'intégration des différents modules
- Tests et débogage sur le matériel réel

**Ce que j'en retire :** J'ai découvert les contraintes de la programmation embarquée : ressources limitées, timing critique, débogage difficile. Ce projet m'a aussi appris la coordination en équipe sur un projet technique avec du matériel partagé.

---

## Présentation du projet

**Nano Pong** est une réplique du célèbre jeu Pong développée sur microcontrôleur **Arduino Nano**. Le jeu s'affiche sur une matrice LED 8x8 et se joue à deux joueurs, chacun contrôlant sa raquette via un potentiomètre.

Ce projet étudiant réalisé en équipe de 4 reproduit l'expérience classique du tennis de table en version électronique miniature.

<img src="https://raw.githubusercontent.com/alexyvanot/nano-pong/main/resources/images/breadboard/t_main3.png" alt="Circuit Nano Pong" width="400" />

---

## Objectifs, Contexte et Enjeux

### Contexte académique

Ce projet a été réalisé dans le cadre d'un **module de systèmes embarqués** à l'ESIEA. L'objectif était de mettre en pratique les concepts de programmation bas niveau sur un microcontrôleur réel.

### Objectifs du projet

| Objectif | Réalisation |
|----------|-------------|
| Programmer un Arduino | Code C avec bibliothèques Arduino |
| Interfacer des composants | LEDs, potentiomètres, matrice MAX7219 |
| Créer un jeu interactif | Gameplay Pong complet |
| Travailler en équipe | Répartition des tâches, intégration |

### Enjeux et défis

**Enjeux :**
- **Contraintes hardware** : mémoire et puissance limitées de l'Arduino Nano
- **Temps réel** : rafraîchissement fluide de l'affichage
- **Ergonomie** : contrôles réactifs et gameplay agréable

**Défis rencontrés :**
- Synchronisation de l'affichage avec la logique de jeu
- Gestion du bruit des potentiomètres
- Coordination du travail à 4 sur un seul prototype physique

---

## Étapes de réalisation

### Phase 1 : Conception et montage (2 semaines)

- Choix des composants (Arduino Nano, MAX7219, potentiomètres)
- Conception du circuit sur breadboard
- Premiers tests de chaque composant individuellement

### Phase 2 : Développement par modules (4 semaines)

**Module Affichage :**
- Pilotage de la matrice LED MAX7219
- Rendu de la balle et des raquettes

**Module Contrôles :**
- Lecture des potentiomètres
- Mapping des valeurs sur la position des raquettes

**Module Logique de jeu :**
- Déplacement de la balle avec rebonds
- Calcul des angles selon la zone de la raquette touchée
- Détection des points marqués

**Module Score :**
- Affichage du score sur LEDs dédiées
- Détection de la victoire (premier à 3 points)

### Phase 3 : Intégration et tests (2 semaines)

- Assemblage des modules
- Tests de gameplay intensifs
- Ajustements de la difficulté (vitesse de la balle)

---

## Acteurs et interactions

| Acteur | Rôle | Contribution |
|--------|------|--------------|
| **Alexy VANOT** | Développeur | Logique de jeu, physique des rebonds |
| **Sandro Bakuradze** | Développeur | Module affichage |
| **Pierre Gervais** | Développeur | Module contrôles |
| **Brice Nyamsi** | Développeur | Module score, intégration |
| **Enseignant ESIEA** | Encadrement | Consignes, validation |

### Dynamique d'équipe

- **Répartition par modules** : chacun responsable d'une partie
- **Intégration régulière** : sessions communes pour assembler
- **Matériel partagé** : rotation pour les tests sur le prototype

---

## Résultats obtenus

### Spécifications techniques

| Composant | Description |
|-----------|-------------|
| Microcontrôleur | Arduino Nano |
| Affichage | Matrice LED 8x8 MAX7219 |
| Contrôleurs | 2 potentiomètres |
| Indicateurs de score | 6 LEDs (3 par joueur) |
| Langage | C avec bibliothèques Arduino |

### Règles du jeu implémentées

- Balle rebondissant à **45° vers le haut/bas** selon la zone de la raquette
- Rebond **horizontal** si la balle touche le centre
- **Premier à 3 points** gagne la partie
- Possibilité de relancer sans reset

### Pour l'équipe

- Projet fonctionnel présenté devant le jury
- Bonne note et retours positifs sur la qualité du gameplay

### Pour moi

- **Découverte de l'embarqué** et de ses contraintes
- **Travail en équipe** sur un projet technique
- **Compétences en C** et programmation bas niveau

---

## Lendemains du projet

### Aujourd'hui

Le code et les schémas sont disponibles sur GitHub. Le projet peut être reproduit par d'autres étudiants.

### Améliorations envisagées

- Ajout de niveaux de difficulté
- Effets sonores avec buzzer
- Mode solo contre une IA basique

### Ce que j'ai réinvesti

Ce projet m'a donné goût à l'électronique et aux systèmes embarqués, même si mon orientation s'est ensuite tournée vers le développement logiciel.

---

## Compétences mobilisées

Ce projet m'a permis de mobiliser et développer les compétences suivantes :

:::buttons
::button[Travail d'équipe]{link=/skills/teamwork icon=i-carbon-group}
::button[Créativité]{link=/skills/creativity icon=i-carbon-idea}
:::
