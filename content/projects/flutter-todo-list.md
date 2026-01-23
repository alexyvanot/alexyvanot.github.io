---
name: Flutter Todo List
slug: flutter-todo-list
type: Mobile Development
color: "#02569B"
published: true
logo: https://raw.githubusercontent.com/alexyvanot/flutter_todo_list/main/assets/images/README/appshow.png
links:
  - label: GitHub
    url: https://github.com/alexyvanot/flutter_todo_list
skills:
  - flutter
  - dart
attachments:
  - label: Aperçu de l'application
    src: https://raw.githubusercontent.com/alexyvanot/flutter_todo_list/main/assets/images/README/appshow.png
---

# Flutter Todo List

**Flutter Todo List** est une application simple de gestion de tâches écrite en Dart. L'utilisateur peut ajouter des tâches, marquer des tâches comme terminées, et les supprimer.

![Aperçu de l'application|clean](https://raw.githubusercontent.com/alexyvanot/flutter_todo_list/main/assets/images/README/appshow.png)

L'application utilise [shared-preferences](https://pub.dev/packages/shared_preferences) pour sauvegarder les tâches localement et [Provider](https://pub.dev/packages/provider) pour la gestion de l'état global, permettant ainsi de conserver les données et d'actualiser l'interface de manière réactive.

# Fonctionnalités

- ➕ **Ajout de nouvelles tâches**
- ✅ **Marquer les tâches comme terminées**
- 🗑️ **Suppression des tâches** avec confirmation
- 🔄 **Gestion de l'état global** avec `Provider`
- 💾 **Sauvegarde locale** avec `SharedPreferences`
- 🎨 **Interface utilisateur réactive** avec le style Cupertino
- 🔍 **Filtrage des tâches** par état (toutes, complètes, incomplètes)

# Architecture et concepts

## Gestion de l'état avec Provider

L'application utilise le pattern **Provider** pour gérer l'état global de la liste de tâches. Cela permet :
- Une séparation claire entre la logique métier et l'interface utilisateur
- Une mise à jour réactive de l'UI lors des changements d'état
- Un partage facile des données entre les widgets

## Persistance avec SharedPreferences

Les tâches sont automatiquement sauvegardées localement grâce à `SharedPreferences`. Les modifications sont enregistrées et persistées, ce qui signifie que vos tâches resteront disponibles même après la fermeture de l'application.

# Utilisation

## Ajouter une tâche
Entrez le titre de la tâche dans le champ de texte et appuyez sur le bouton **Ajouter**. La tâche sera ajoutée à la liste.

## Cocher et décocher une tâche
Appuyez sur l'interrupteur à côté de chaque tâche pour la marquer comme terminée. Cela barrera le texte de la tâche. Appuyez à nouveau pour la décocher.

## Supprimer une tâche
Glissez la tâche de droite à gauche. Une boîte de dialogue de confirmation apparaîtra pour vérifier si vous souhaitez bien supprimer la tâche.

# Installation

```bash
# Cloner le dépôt
git clone https://github.com/alexyvanot/flutter_todo_list.git

# Naviguer dans le répertoire
cd flutter_todo_list

# Installer les dépendances
flutter pub get

# Lancer l'application
flutter run
```

# Technologies utilisées

| Technologie | Utilisation |
|-------------|-------------|
| **Flutter** | Framework UI cross-platform |
| **Dart** | Langage de programmation |
| **Provider** | Gestion de l'état global |
| **SharedPreferences** | Persistance locale des données |
| **Cupertino Widgets** | Style iOS natif |
