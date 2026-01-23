---
name: Nano Pong
slug: nano-pong
published: true
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
  - label: Vue d'ensemble
    src: https://raw.githubusercontent.com/alexyvanot/nano-pong/main/resources/images/breadboard/main2.jpg
  - label: Détail circuit
    src: https://raw.githubusercontent.com/alexyvanot/nano-pong/main/resources/images/breadboard/main3.jpg
  - label: Matrice LED MAX7219
    src: https://raw.githubusercontent.com/alexyvanot/nano-pong/main/resources/images/breadboard/MAX7219.jpg
  - label: Arduino Nano
    src: https://raw.githubusercontent.com/alexyvanot/nano-pong/main/resources/images/breadboard/nano.jpg
  - label: Potentiomètres
    src: https://raw.githubusercontent.com/alexyvanot/nano-pong/main/resources/images/breadboard/potentiometers.jpg
---

<img src="https://raw.githubusercontent.com/alexyvanot/nano-pong/main/resources/images/breadboard/t_main3.png" alt="Circuit Nano Pong clean" width="400" />

## À propos

**Nano Pong** est une réplique du célèbre jeu Pong développée sur microcontrôleur **Arduino Nano**. Ce projet étudiant réalisé en équipe de 4 reproduit l'expérience classique du tennis de table en version électronique miniature.

## Fonctionnalités

- 🎮 **Gameplay 2 joueurs** — Chaque joueur contrôle sa raquette via un potentiomètre
- 💡 **Affichage LED** — Le jeu s'affiche sur une matrice de LEDs MAX7219
- 🏓 **Physique réaliste** — Angles de rebond variables selon la zone de la raquette touchée
- 🏆 **Système de score** — 3 LEDs par joueur pour afficher les points, premier à 3 gagne
- 🔄 **Rejouabilité** — Possibilité de relancer une partie sans reset du système

## Règles du jeu

- La balle rebondit à **45° vers le haut** si elle touche le bord supérieur de la raquette
- La balle rebondit à **45° vers le bas** si elle touche le bord inférieur
- La balle repart **horizontalement** si elle touche le centre de la raquette
- Les bords haut et bas du terrain font rebondir la balle
- Quand la balle touche un bord latéral, l'adversaire marque un point

## Spécifications techniques

| Composant | Description |
|-----------|-------------|
| Microcontrôleur | Arduino Nano |
| Affichage | Matrice LED 8x8 MAX7219 |
| Contrôleurs | 2 potentiomètres (un par joueur) |
| Indicateurs de score | 6 LEDs (3 par joueur) |
| Langage | C avec bibliothèques Arduino |

## Équipe

Projet réalisé dans le cadre d'un exercice de fin de module à l'**ESIEA** par :
- Alexy Vanot
- Sandro Bakuradze
- Pierre Gervais
- Brice Nyamsi
