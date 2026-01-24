---
name: Flutter Todo List - Gestion d'état avec Provider
slug: flutter-todo-list
category: technique
type: Mobile Development
color: "#02569B"
published: true
logo: https://raw.githubusercontent.com/alexyvanot/flutter_todo_list/main/assets/images/README/appshow.png
period:
  from: 2024-10-04
  to: 2024-10-17
links:
  - label: GitHub
    to: https://github.com/alexyvanot/flutter_todo_list
skills:
  - flutter
  - dart
attachments:
  - label: Aperçu de l'application
    src: https://raw.githubusercontent.com/alexyvanot/flutter_todo_list/main/assets/images/README/appshow.png
team:
  - name: Alexy VANOT
    role: Développeur unique
---

::toc

## Mon regard critique

> Ce projet représente ma **montée en compétence sur la gestion d'état avancée** en Flutter. Ma valeur ajoutée ? Avoir implémenté une architecture propre avec Provider pour la réactivité et SharedPreferences pour la persistance, tout en maintenant une UX fluide et intuitive.

**Mes apports principaux :**
- Architecture Provider pour une gestion d'état propre et testable
- Persistance automatique des données sans action utilisateur
- Interface Cupertino soignée avec interactions tactiles naturelles

**Ce que j'en retire :** J'ai compris l'importance de séparer la logique métier de l'interface utilisateur. Provider m'a permis de gérer l'état de manière centralisée, rendant le code plus maintenable et les tests plus faciles à écrire.

---

## Présentation du projet

**Flutter Todo List** est une application de gestion de tâches complète développée en Flutter. Elle permet d'ajouter, compléter, filtrer et supprimer des tâches, avec une **sauvegarde automatique** locale grâce à SharedPreferences.

L'application utilise le pattern **Provider** pour une gestion d'état réactive et un design **Cupertino** pour une expérience iOS native.

![Aperçu de l'application|clean](https://raw.githubusercontent.com/alexyvanot/flutter_todo_list/main/assets/images/README/appshow.png)

---

## Objectifs, Contexte et Enjeux

### Contexte académique

Ce projet a été réalisé sur **2 semaines** dans le cadre d'un cours de développement mobile avancé. L'objectif était d'aller au-delà du simple `setState()` pour explorer des patterns de gestion d'état plus robustes.

### Objectifs pédagogiques

| Objectif | Concept Flutter associé |
|----------|-------------------------|
| Gestion d'état avancée | Pattern Provider |
| Persistance locale | SharedPreferences |
| UI réactive | Widgets Cupertino |
| Interactions utilisateur | Swipe-to-delete, filtres |

### Enjeux et défis

**Enjeux :**
- **Architecture** : séparation claire entre logique et UI
- **UX** : interactions fluides et feedback immédiat
- **Persistance** : sauvegarde transparente pour l'utilisateur

**Défis rencontrés :**
- Synchronisation entre Provider et SharedPreferences
- Gestion des confirmations de suppression
- Animation fluide des transitions d'état

---

## Étapes de réalisation

### Phase 1 : Architecture et setup (2 jours)

- Mise en place de la structure Provider
- Configuration de SharedPreferences
- Création du modèle de données `Task`

### Phase 2 : Logique métier (3 jours)

**TaskProvider :**
- Méthodes CRUD pour les tâches
- Persistance automatique à chaque modification
- Gestion des filtres (toutes, complètes, incomplètes)

### Phase 3 : Interface utilisateur (5 jours)

**Fonctionnalités implémentées :**
- :i[add] Ajout de nouvelles tâches avec validation
- :i[checkmark-filled] Toggle de complétion avec feedback visuel
- :i[trash-can] Suppression par swipe avec confirmation
- :i[search] Filtrage dynamique des tâches

### Phase 4 : Polissage (3 jours)

- Animations de transition
- Gestion des cas limites (liste vide, erreurs)
- Tests sur différents appareils

---

## Acteurs et interactions

| Acteur | Rôle | Interactions |
|--------|------|--------------|
| **Moi (développeur)** | Conception et développement | Projet individuel |
| **Enseignant Flutter** | Cadrage et évaluation | Consignes, feedback |

---

## Résultats obtenus

### Fonctionnalités livrées

- :i[checkmark-filled] Ajout, modification, suppression de tâches
- :i[checkmark-filled] Persistance locale automatique
- :i[checkmark-filled] Filtrage par état (toutes/complètes/incomplètes)
- :i[checkmark-filled] Interface Cupertino responsive
- :i[checkmark-filled] Swipe-to-delete avec confirmation

### Pour moi

- **Maîtrise de Provider** pour la gestion d'état
- **Compréhension de la persistance** avec SharedPreferences
- **Amélioration de mes compétences UX** mobile

---

## Lendemains du projet

### Aujourd'hui

L'application est fonctionnelle et disponible sur GitHub. Elle me sert de référence pour les patterns de gestion d'état Flutter.

### Améliorations envisagées

- Migration vers Riverpod (évolution de Provider)
- Ajout de catégories et priorités
- Synchronisation cloud avec Firebase
- Notifications de rappel

### Ce que j'ai réinvesti

Ce projet m'a donné les bases pour des applications Flutter plus complexes nécessitant une gestion d'état robuste.

---

## Compétences mobilisées

Ce projet m'a permis de mobiliser et développer les compétences suivantes :

:::buttons
::button[Autonomie]{link=/skills/autonomy icon=i-carbon-user-certification}
::button[Créativité]{link=/skills/creativity icon=i-carbon-idea}
:::

# Technologies utilisées

| Technologie | Utilisation |
|-------------|-------------|
| **Flutter** | Framework UI cross-platform |
| **Dart** | Langage de programmation |
| **Provider** | Gestion de l'état global |
| **SharedPreferences** | Persistance locale des données |
| **Cupertino Widgets** | Style iOS natif |
