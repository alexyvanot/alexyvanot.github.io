---
name: Flutter Movie App
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
    url: https://github.com/alexyvanot/flutter_movie_manip
skills:
  - flutter
  - dart
attachments:
  - label: Page d'accueil
    src: https://raw.githubusercontent.com/alexyvanot/flutter_movie_manip/main/assets/images/HomePage.png
  - label: Détail d'un film
    src: https://raw.githubusercontent.com/alexyvanot/flutter_movie_manip/main/assets/images/MovieDetail.png
---

# Flutter Movie App

Bienvenue dans le projet **Flutter Movie Manip** ! Ce projet a pour but d'explorer les concepts clés de Flutter tout en construisant une application qui récupère les films à venir à partir de l'API [The Movie Database (TMDb)](https://www.themoviedb.org/).

![Page d'accueil|clean](https://raw.githubusercontent.com/alexyvanot/flutter_movie_manip/main/assets/images/HomePage.png)

# Objectifs pédagogiques

Ce projet a été conçu dans le cadre d'un cours de Flutter afin de pratiquer et comprendre les notions suivantes :

1. **Stateless vs Stateful Widgets** : comprendre la différence entre des widgets statiques et ceux dont l'état peut changer
2. **Appels HTTP dans Flutter** : apprendre à faire des requêtes à une API externe
3. **Gestion de l'état** : manipulation de l'état dans une application Flutter via `setState`
4. **Affichage dynamique avec `ListView.builder`** : utilisation de ce widget pour générer des listes dynamiques basées sur des données reçues d'une API
5. **Utilisation d'environnements avec `flutter_dotenv`** : apprendre à gérer des informations sensibles comme les clés d'API

# Structure du projet

```
lib/
├── main.dart          # Point d'entrée, initialisation de dotenv
├── home_page.dart     # Page principale avec liste des films (StatefulWidget)
├── http_helper.dart   # Classe utilitaire pour les appels HTTP à TMDb
└── model/
    └── movie.dart     # Modèle de données pour représenter un film
```

# Concepts clés

## 1. Stateful Widgets et `setState()`

Dans Flutter, un widget peut être **Stateful** ou **Stateless**. Ce projet utilise un `StatefulWidget` dans `home_page.dart` pour maintenir la liste des films à jour. Chaque fois que les données des films sont récupérées, la méthode `setState()` est appelée pour mettre à jour l'interface utilisateur.

## 2. Appels HTTP et gestion des données

Pour communiquer avec une API externe, nous utilisons le package [http](https://pub.dev/packages/http). L'appel HTTP se fait dans `http_helper.dart`, où nous envoyons une requête GET pour obtenir les films à venir. La réponse JSON est décodée puis transformée en objets Dart avec `Movie.fromJson()`.

## 3. Gestion des environnements avec `flutter_dotenv`

Afin de sécuriser la clé API, le package `flutter_dotenv` est utilisé pour charger les variables d'environnement. Cela permet de garder les informations sensibles hors du code source.

## 4. Affichage dynamique avec `ListView.builder`

Le widget `ListView.builder` est utilisé pour afficher une liste de films récupérés de manière dynamique. Ce widget est efficace pour les listes longues.

# Installation

```bash
# Cloner le projet
git clone https://github.com/alexyvanot/flutter_movie_manip.git
cd flutter_movie_manip

# Installer les dépendances
flutter pub get

# Configurer l'API (créer un fichier .env)
echo "API_KEY=your_api_key_here" > .env

# Lancer l'application
flutter run
```

# Configuration de l'API

1. Inscrivez-vous sur [The Movie Database (TMDb)](https://www.themoviedb.org/)
2. Rendez-vous dans la section API de votre compte pour générer votre clé API
3. Créez un fichier `.env` dans le répertoire racine avec votre clé :

```env
API_KEY=your_api_key_here
```

# Aperçu de l'application

L'application affiche une liste des films à venir avec leurs affiches et informations. En cliquant sur un film, l'utilisateur accède à une page de détails avec plus d'informations.

![Détail d'un film|clean](https://raw.githubusercontent.com/alexyvanot/flutter_movie_manip/main/assets/images/MovieDetail.png)
