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

---

## :i[search] Mes réalisations concrètes

Mon expérience Redis vient de projets personnels plutôt que de mon alternance au Synchrotron SOLEIL : mes deux missions principales là-bas, [SUN Auto](/projects/sun-auto) et l'[étude de faisabilité SUNset](/projects/tap), n'ont pas mobilisé de système de cache.

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


