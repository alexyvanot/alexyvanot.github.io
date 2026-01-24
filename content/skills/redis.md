---
name: Redis
slug: redis
published: true
category: db
color: red
logo: Redis
---

::toc

# Redis : le cache haute performance

## :i[pin] Définition et contexte professionnel

**Redis** (Remote Dictionary Server) est une base de données **in-memory** open-source, utilisée principalement comme **cache**, **broker de messages** et **store de sessions**. Sa rapidité exceptionnelle (opérations en microsecondes) en fait un composant critique des architectures modernes.

Dans l'industrie, Redis est devenu **incontournable** pour :

- **Caching** : réduire la charge sur les bases de données principales
- **Sessions utilisateur** : stockage rapide et distribué
- **Rate limiting** : contrôle du débit des API
- **Pub/Sub** : communication temps réel entre services
- **Files d'attente** : gestion de tâches asynchrones

Au **Synchrotron SOLEIL**, Redis est utilisé pour **optimiser les performances** des applications web en cachant les données fréquemment accédées.

---

## :i[search] Mes réalisations concrètes

### TAP : cache des résultats de tests

Dans la plateforme **TAP**, j'ai implémenté un **système de cache Redis** pour accélérer l'affichage des tableaux de bord.

**Le défi** : les agrégations de résultats de tests (taux de succès, tendances) nécessitaient des requêtes SQL coûteuses.

**Ma contribution** :
- Configuration de **Redis comme cache Spring** avec TTL configurable
- Implémentation d'une **stratégie d'invalidation** intelligente (cache-aside pattern)
- Mise en cache des **rapports Allure** générés

**Résultat** : temps de chargement des dashboards réduit de **3 secondes à 200ms** en moyenne.

→ [Voir le projet TAP](/projects/tap)

---

## :i[meter] Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| Caching basique | ::stars[4/5] Avancé |
| Structures de données | ::stars[3/5] Intermédiaire |
| Pub/Sub | ::stars[3/5] Intermédiaire |
| Cluster / Sentinel | ::stars[2/5] Débutant |

### Marge de progression

- **Redis Cluster** : déploiement distribué pour la haute disponibilité
- **Streams** : traitement d'événements en temps réel
- **Lua scripting** : opérations atomiques complexes

### Place dans mon profil

Redis est un **outil complémentaire** que j'utilise systématiquement pour optimiser les performances. Couplé à PostgreSQL et Spring Boot, il forme une stack backend performante.

### Conseils tirés de mon expérience

> *"Redis n'est pas une base de données principale. Utilisez-le comme cache avec une stratégie d'invalidation claire."*

- Toujours définir des **TTL (Time To Live)** sur les clés
- Monitorer la **mémoire utilisée** pour éviter les évictions non désirées
- Prévoir un **fallback** si Redis est indisponible

---

## :i[growth] Évolution et perspectives

### Objectif à moyen terme

Maîtriser **Redis Cluster** pour des architectures distribuées et haute disponibilité.

### Formations prévues

| Formation | Statut |
|-----------|--------|
| Redis University (gratuit) | Prévu 2026 |
| Patterns de caching avancés | En veille |


