---
name: Flutter Movie App - Découverte des API REST
slug: flutter-movie-manip
category: technique
type: Mobile Development
color: "#02569B"
published: true
logo: https://raw.githubusercontent.com/alexyvanot/flutter_movie_manip/main/assets/images/HomePage.png
period:
  from: 2024-10-18
  to: 2024-10-18
links:
  - label: GitHub
    to: https://github.com/alexyvanot/flutter_movie_manip
skills:
  - flutter
  - dart
attachments:
  - label: Page d'accueil
    src: https://raw.githubusercontent.com/alexyvanot/flutter_movie_manip/main/assets/images/HomePage.png
  - label: Détail d'un film
    src: https://raw.githubusercontent.com/alexyvanot/flutter_movie_manip/main/assets/images/MovieDetail.png
team:
  - name: Alexy VANOT
    role: Développeur unique
---

::toc

## Mon regard critique

> Ce projet m'a permis de **maîtriser les fondamentaux de Flutter** tout en construisant quelque chose de concret. Ma valeur ajoutée ? Avoir structuré le code de manière propre dès le départ, avec une séparation claire entre les appels HTTP, les modèles de données et l'interface utilisateur.

**Mes apports principaux :**
- Architecture modulaire avec séparation des responsabilités
- Gestion sécurisée des clés API via `flutter_dotenv`
- Code documenté et réutilisable

**Ce que j'en retire :** Ce projet m'a appris l'importance de la gestion d'état dans Flutter. La différence entre Stateless et Stateful widgets est devenue concrète quand j'ai dû mettre à jour la liste des films dynamiquement.

---

## Présentation du projet

**Flutter Movie App** est une application mobile qui récupère et affiche les films à venir depuis l'API **The Movie Database (TMDb)**. Ce projet a été conçu dans le cadre d'un cours de Flutter pour pratiquer les concepts fondamentaux du framework.

L'application permet de parcourir une liste de films avec leurs affiches, titres et descriptions, et d'accéder aux détails de chaque film.

![Page d'accueil|clean](https://raw.githubusercontent.com/alexyvanot/flutter_movie_manip/main/assets/images/HomePage.png)

---

## Objectifs, Contexte et Enjeux

### Contexte académique

Ce projet a été réalisé dans le cadre d'un **cours de développement mobile Flutter**. L'objectif pédagogique était de mettre en pratique les concepts théoriques vus en cours sur un cas d'usage réel.

### Objectifs pédagogiques

| Objectif | Concept Flutter associé |
|----------|-------------------------|
| Comprendre les widgets | Stateless vs Stateful Widgets |
| Consommer une API REST | Package `http`, appels asynchrones |
| Gérer l'état de l'application | `setState()` et cycle de vie |
| Afficher des listes dynamiques | `ListView.builder` |
| Sécuriser les données sensibles | `flutter_dotenv` pour les clés API |

### Enjeux et défis

**Enjeux :**
- **Apprentissage** : comprendre le paradigme déclaratif de Flutter
- **Bonnes pratiques** : structurer le code dès le début
- **Performance** : gérer efficacement les listes longues

**Défis rencontrés :**
- Gestion des états de chargement (loading, erreur, succès)
- Parsing du JSON retourné par l'API
- Affichage des images avec gestion du cache

---

## Étapes de réalisation

### Phase 1 : Mise en place du projet (1h)

- Création du projet Flutter avec structure de dossiers organisée
- Configuration de `flutter_dotenv` pour les variables d'environnement
- Obtention d'une clé API sur TMDb

### Phase 2 : Modèle de données et appels HTTP (2h)

**Création du modèle Movie :**
- Classe Dart représentant un film
- Factory `fromJson()` pour le parsing automatique

**Helper HTTP :**
- Classe utilitaire pour les appels à l'API TMDb
- Gestion des erreurs et des timeouts

### Phase 3 : Interface utilisateur (3h)

**Page principale (StatefulWidget) :**
- Liste des films avec `ListView.builder`
- Appel à l'API au `initState()`
- Mise à jour de l'UI via `setState()`

**Page de détail :**
- Affichage complet des informations du film
- Navigation entre les écrans

### Phase 4 : Polissage et tests (1h)

- Ajout d'indicateurs de chargement
- Gestion des erreurs réseau
- Tests sur différents appareils (émulateur, physique)

---

## Acteurs et interactions

| Acteur | Rôle | Interactions |
|--------|------|--------------|
| **Moi (développeur)** | Conception et développement | Projet individuel |
| **Enseignant Flutter** | Cadrage et évaluation | Consignes, feedback |
| **API TMDb** | Source de données | Appels REST |

---

## Résultats obtenus

### Fonctionnalités livrées

- ✅ Récupération des films à venir depuis TMDb
- ✅ Affichage en liste avec affiches et descriptions
- ✅ Navigation vers les détails d'un film
- ✅ Gestion sécurisée de la clé API

### Pour moi

- **Maîtrise des fondamentaux Flutter** : widgets, état, navigation
- **Compréhension des appels HTTP** en Dart
- **Bonnes pratiques** : architecture et sécurité

---

## Lendemains du projet

### Aujourd'hui

Le projet est disponible sur GitHub et sert de référence pour mes futurs développements Flutter.

### Améliorations envisagées

- Ajout d'une barre de recherche
- Système de favoris avec persistance locale
- Amélioration du design avec des animations

### Ce que j'ai réinvesti

Les compétences acquises sur ce projet m'ont servi pour développer des applications Flutter plus complexes comme [Georges le Chat](/projects/georges-le-chat) et la [Todo List](/projects/flutter-todo-list).

---

## Compétences mobilisées

Ce projet m'a permis de mobiliser et développer les compétences suivantes :

:::buttons
::button[Autonomie]{link=/skills/autonomy icon=i-carbon-user-certification}
::button[Créativité]{link=/skills/creativity icon=i-carbon-idea}
:::
