---
name: MariaDB
slug: mariadb
published: true
category: db
color: brown
logo: MariaDB
---

::toc

# MariaDB : l'alternative open-source à MySQL

## 📌 Définition et contexte professionnel

**MariaDB** est un système de gestion de bases de données relationnelles **open-source**, créé en 2009 comme fork de MySQL par ses fondateurs originaux. Suite au rachat de MySQL par Oracle, MariaDB garantit une **licence véritablement libre** et une **gouvernance communautaire**.

Dans le contexte professionnel, MariaDB est privilégiée pour :

- **Compatibilité MySQL** : migration transparente depuis MySQL
- **Performance** : optimisations spécifiques (Aria, thread pool)
- **Fonctionnalités avancées** : colonnes virtuelles, JSON, temporal tables
- **Licence libre** : pas de coûts de licence, pas de vendor lock-in

De nombreuses distributions Linux (Debian, Red Hat) ont remplacé MySQL par MariaDB comme base de données par défaut, témoignant de son adoption massive.

---

## 🔍 Mes réalisations concrètes

### Comet Learning : base de données du serveur Minecraft

Pour le projet **Comet Learning**, j'ai utilisé MariaDB pour stocker toutes les données du serveur éducatif Minecraft.

**Ma contribution** :
- Conception du **schéma de données** pour les joueurs, progressions et formations
- Développement de **requêtes optimisées** pour le leaderboard temps réel
- Mise en place de **sauvegardes automatiques** quotidiennes
- Intégration avec les plugins Java via **HikariCP** (connection pooling)

**Résultat** : base de données stable supportant **+200 joueurs simultanés** sans dégradation de performance.

→ [Voir le projet Comet Learning](/projects/comet-learning)

---

## 🎯 Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| SQL (SELECT, JOIN, etc.) | ★★★★★ Expert |
| Modélisation relationnelle | ★★★★☆ Avancé |
| Optimisation de requêtes | ★★★★☆ Avancé |
| Administration | ★★★☆☆ Intermédiaire |

### Marge de progression

- **Réplication** : master-slave, Galera Cluster
- **Spécificités MariaDB** : moteurs de stockage (Aria, ColumnStore), fonctionnalités absentes de MySQL

### Place dans mon profil

MariaDB est **interchangeable avec MySQL** dans mon profil. Je la préfère pour les projets personnels (licence libre) mais j'utilise indifféremment l'une ou l'autre selon le contexte. Aujourd'hui, je privilégie **PostgreSQL** pour les nouveaux projets.

### Conseils tirés de mon expérience

> *"MariaDB est un excellent choix pour remplacer MySQL sans effort de migration. Profitez-en pour explorer ses fonctionnalités exclusives."*

---

## 📈 Évolution et perspectives

### Objectif à moyen terme

Maintenir ma compétence MariaDB/MySQL tout en privilégiant **PostgreSQL** pour les nouveaux développements.


