---
name: Docker
slug: docker
published: true
category: devops
color: blue
logo: Docker
---

::toc

# Docker : la conteneurisation au cœur du DevOps

## :i[pin] Définition et contexte professionnel

**Docker** est une plateforme de **conteneurisation** qui permet d'empaqueter une application avec toutes ses dépendances dans un **conteneur** portable. Lancé en 2013, Docker a révolutionné le déploiement logiciel en résolvant le fameux problème *"ça marche sur ma machine"*.

Docker est devenu **incontournable** dans l'industrie :

- **Portabilité** : même comportement en dev, test et production
- **Isolation** : chaque conteneur est indépendant
- **Reproductibilité** : Dockerfile versionné = infrastructure as code
- **Scalabilité** : orchestration avec Kubernetes ou Docker Swarm
- **CI/CD** : intégration native dans les pipelines

Au **Synchrotron SOLEIL**, Docker est utilisé pour **standardiser les environnements de développement** et faciliter les déploiements.

---

## :i[search] Mes réalisations concrètes

### SUN Auto : containerisation complète

Le projet **SUN Auto** est entièrement conteneurisé avec Docker.

**Ma contribution** :
- Rédaction du **Dockerfile multi-stage** (build Maven + runtime JRE)
- Configuration de **Docker Compose** pour l'environnement complet (app + PostgreSQL + Redis)
- Optimisation de l'image (< 200 MB en production)
- Intégration dans le **pipeline CI/CD** GitLab

**Résultat** : déploiement reproductible en une commande `docker-compose up`.

→ [Voir le projet SUN Auto](/projects/sun-auto)

### TAP : environnement de test isolé

Pour **TAP**, j'ai utilisé Docker pour créer des **environnements de test isolés**.

**Ma contribution** :
- **Testcontainers** : bases de données éphémères pour les tests d'intégration
- Images custom pour les **agents de test** (Selenium, Playwright)
- **Docker-in-Docker** pour les tests nécessitant Docker

→ [Voir le projet TAP](/projects/tap)

### Ce portfolio : déploiement Docker

Ce portfolio dispose d'un **Dockerfile** et d'un **docker-compose.yml** pour un déploiement simplifié.

---

## :i[target] Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| Dockerfile / images | ★★★★★ Expert |
| Docker Compose | ★★★★★ Expert |
| Volumes / réseaux | ★★★★☆ Avancé |
| Docker Swarm | ★★★☆☆ Intermédiaire |
| Sécurité conteneurs | ★★★☆☆ Intermédiaire |

### Marge de progression

- **Kubernetes** : orchestration à grande échelle (en cours d'apprentissage)
- **Sécurité** : scan d'images, rootless containers, secrets management
- **Buildkit** : fonctionnalités avancées de build (cache, multi-platform)

### Place dans mon profil

Docker est une **compétence fondamentale** de mon profil. Je l'utilise quotidiennement, que ce soit pour le développement local ou le déploiement en production. C'est le socle de ma pratique DevOps.

### Vitesse d'acquisition

J'ai appris Docker **rapidement** grâce à son adoption massive et à l'abondance de ressources. En quelques semaines, j'étais capable de conteneuriser n'importe quelle application.

### Conseils tirés de mon expérience

> *"Un bon Dockerfile multi-stage peut diviser la taille de vos images par 10. Investissez du temps dans l'optimisation."*

- Toujours utiliser des **images de base officielles** et les pinned versions
- **Ne pas exécuter en root** dans les conteneurs
- Utiliser `.dockerignore` pour éviter de copier des fichiers inutiles
- **Layer caching** : ordonnez les instructions du moins au plus changeant

---

## :i[growth] Évolution et perspectives

### Objectif à moyen terme

Maîtriser **Kubernetes** pour l'orchestration à grande échelle et obtenir une certification **CKA** (Certified Kubernetes Administrator).

### Formations prévues

| Formation | Statut |
|-----------|--------|
| Kubernetes (CKA) | Prévu 2026 |
| Docker Security | En veille |


