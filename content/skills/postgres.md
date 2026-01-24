---
name: PostgreSQL
slug: postgres
published: true
category: db
color: blue
logo: PostgreSQL
---

::toc

# PostgreSQL : la base de données relationnelle de référence

## :i[pin] Définition et contexte professionnel

**PostgreSQL** (souvent abrégé "Postgres") est un système de gestion de bases de données relationnelles **open-source** reconnu pour sa **robustesse**, son **respect des standards SQL** et ses fonctionnalités avancées. Créé en 1986, il est aujourd'hui utilisé par des géants comme Apple, Instagram, Spotify et la NASA.

Dans le contexte professionnel actuel, PostgreSQL s'impose comme **le choix par défaut** pour les nouvelles applications, détrônant progressivement MySQL. Les raisons de cette adoption massive :

- **Conformité ACID complète** : garantie d'intégrité des données même en cas de crash
- **Fonctionnalités avancées** : JSON natif, full-text search, extensions (PostGIS, TimescaleDB)
- **Performance** : optimiseur de requêtes sophistiqué, indexation avancée (B-tree, GIN, GiST)
- **Évolutivité** : réplication, partitionnement, support de téraoctets de données

Au **Synchrotron SOLEIL**, PostgreSQL est la base de données **standard pour tous les nouveaux développements**. Cette standardisation facilite la maintenance et permet aux équipes de partager leur expertise.

---

## :i[search] Mes réalisations concrètes

### SUN Auto : gestion du cycle de vie applicatif

Pour le projet **SUN Auto**, j'ai conçu et implémenté le **schéma de base de données PostgreSQL** qui stocke toutes les informations sur les applications du synchrotron.

**Le défi** : modéliser efficacement les relations complexes entre applications, responsables, technologies et états du workflow.

**Ma contribution** :
- Conception du **modèle de données relationnel** avec 12 tables interconnectées
- Optimisation des requêtes via des **index stratégiques** et des vues matérialisées
- Implémentation de **contraintes d'intégrité** (foreign keys, check constraints)
- Migration de données depuis l'ancien système (scripts SQL + Spring Batch)

**Résultat** : temps de réponse moyen de **< 50ms** sur les requêtes complexes impliquant plusieurs jointures.

→ [Voir le projet SUN Auto](/projects/sun-auto)

### TAP : stockage des résultats de tests

La plateforme **TAP** utilise PostgreSQL pour stocker l'historique de toutes les exécutions de tests et leurs résultats détaillés.

**Ma contribution** :
- Modélisation du schéma pour les **séries temporelles de tests** (exécutions, résultats, métriques)
- Utilisation du **type JSONB** pour stocker les données de configuration flexibles
- Mise en place de la **rétention automatique** des données anciennes (partitionnement par date)

**Résultat** : capacité de stocker **+100 000 exécutions de tests** avec des requêtes d'agrégation rapides pour les tableaux de bord.

→ [Voir le projet TAP](/projects/tap)

---

## :i[target] Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| Modélisation relationnelle | ::stars[4/5] Avancé |
| Requêtes SQL (SELECT, JOIN) | ::stars[5/5] Expert |
| Optimisation / EXPLAIN | ::stars[4/5] Avancé |
| Administration (backup, réplication) | ::stars[3/5] Intermédiaire |
| Extensions (PostGIS, etc.) | ::stars[2/5] Débutant |

### Marge de progression

- **Administration avancée** : réplication streaming, haute disponibilité, failover automatique
- **Tuning performances** : configuration mémoire, vacuum, autovacuum
- **Extensions spécialisées** : PostGIS pour les données géospatiales, TimescaleDB pour les séries temporelles

### Place dans mon profil

PostgreSQL est **ma base de données par défaut** pour tout projet backend. Je l'associe systématiquement à Spring Data JPA en Java ou à Prisma/Drizzle en TypeScript. C'est une compétence **essentielle** pour un développeur backend.

### Conseils tirés de mon expérience

> *"Investissez du temps dans la modélisation avant d'écrire du code. Un bon schéma de données facilite tout le développement qui suit."*

- **Utiliser EXPLAIN ANALYZE** pour comprendre les plans d'exécution
- **Indexer stratégiquement** : trop d'index ralentit les écritures
- **Préférer les contraintes en base** aux validations applicatives pour l'intégrité

---

## :i[growth] Évolution et perspectives

### Objectif à moyen terme

Maîtriser l'**administration PostgreSQL** pour pouvoir gérer des environnements de production critiques en autonomie.

### Formations prévues

| Formation | Statut | Objectif |
|-----------|--------|----------|
| PostgreSQL Administration | Prévu 2026 | Maîtrise opérationnelle |
| Performance Tuning | En veille | Optimisation avancée |


