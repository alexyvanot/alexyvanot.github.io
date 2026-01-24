---
name: C
slug: c
published: true
category: pro-lang
color: gray
logo: C
---

::toc

# C : les fondations de la programmation système

## :i[pin] Définition et contexte professionnel

**C** est un langage de programmation **bas niveau** créé en 1972 par Dennis Ritchie. Souvent considéré comme le "père des langages modernes", C reste **incontournable** pour la programmation système, l'embarqué et les performances critiques.

L'importance de C dans l'industrie :

- **Systèmes d'exploitation** : Linux, Windows, macOS sont écrits en C
- **Embarqué** : microcontrôleurs, IoT, automobile
- **Performance** : jeux vidéo, bases de données, compilateurs
- **Portabilité** : compilateurs disponibles pour toutes les architectures
- **Fondation** : comprendre C aide à comprendre tous les autres langages

Dans un contexte où les langages haut niveau dominent, C reste essentiel pour comprendre **comment fonctionne réellement un ordinateur** : mémoire, pointeurs, allocation.

---

## :i[search] Mes réalisations concrètes

### Nano Pong : jeu embarqué sur Arduino

Le projet **Nano Pong** m'a permis de programmer un jeu Pong en C sur Arduino Nano.

**Ma contribution** :
- Programmation **bas niveau** en C pour Arduino
- Gestion de l'**écran OLED** via protocole I2C
- Lecture des **entrées analogiques** (potentiomètres)
- Optimisation pour les **contraintes mémoire** de l'Arduino (2KB RAM)

**Résultat** : jeu Pong fonctionnel sur un microcontrôleur avec seulement 32KB de flash.

→ [Voir le projet Nano Pong](/projects/nano-pong)

### Formation ESIEA : programmation système

Dans le cadre de ma formation à l'**ESIEA**, j'ai réalisé plusieurs projets en C :

- **Shell Unix** : implémentation d'un shell basique avec pipes et redirections
- **Allocation mémoire** : recréation d'un `malloc` simplifié
- **Structures de données** : listes chaînées, arbres binaires, tables de hachage

Ces projets m'ont permis de comprendre les **mécanismes internes** des systèmes.

---

## :i[meter] Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| Syntaxe et structures de base | ::stars[4/5] Avancé |
| Pointeurs et mémoire | ::stars[3/5] Intermédiaire |
| Programmation système (POSIX) | ::stars[3/5] Intermédiaire |
| Embarqué / Arduino | ::stars[4/5] Avancé |
| Optimisation bas niveau | ::stars[2/5] Débutant |

### Marge de progression

- **Programmation système avancée** : threads POSIX, IPC, sockets
- **Debugging** : GDB, Valgrind pour la détection de fuites mémoire
- **Sécurité** : buffer overflows, programmation défensive

### Place dans mon profil

C est une **compétence fondamentale** qui m'aide à comprendre les langages de plus haut niveau. Je ne l'utilise pas quotidiennement mais il est précieux pour les projets embarqués et la compréhension des performances.

### Conseils tirés de mon expérience

> *"Apprendre C, c'est comprendre comment fonctionne vraiment un ordinateur. Même si vous ne l'utilisez jamais en production, ces connaissances vous serviront toujours."*

- **Dessiner la mémoire** pour comprendre les pointeurs
- Compiler avec **tous les warnings activés** (`-Wall -Wextra`)
- Utiliser **Valgrind** pour détecter les fuites mémoire

---

## :i[growth] Évolution et perspectives

### Objectif à moyen terme

Maintenir mes compétences C pour les projets embarqués et approfondir la **programmation système Linux**.


