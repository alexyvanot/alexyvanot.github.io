---
name: SUN Auto - Gestion automatisée du cycle de vie applicatif
slug: sun-auto
category: technique
type: DevOps & Automation
color: "#1E3A5F"
published: true
pinned: true
logo: https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg
period:
  from: 2024-01-01
  to: 2024-12-01
skills:
  - java
  - spring
  - postgresql
  - gitlab
  - docker
team:
  - name: Alexy VANOT
    role: Développeur principal
---

# SUN Auto - SOLEIL Unified Notification Auto

**SUN Auto** est un système développé durant mon alternance au **Synchrotron SOLEIL** pour automatiser la gestion du cycle de vie des applications. Le projet surveille l'ensemble du parc applicatif et orchestre le traitement des applications en fin de vie.

# 🎯 Problématique adressée

Le Synchrotron SOLEIL maintient des centaines d'applications internes. Avec le temps, certaines deviennent :
- **Obsolètes** : technologies ou dépendances plus supportées
- **Non maintenues** : plus de développeur référent
- **Vulnérables** : failles de sécurité non corrigées

Sans processus automatisé, ces applications "zombies" s'accumulent, consommant des ressources et représentant des risques de sécurité.

# 🏗️ Architecture du système

SUN Auto est structuré en modules spécialisés :

## Module Discovery
- Scan automatique de l'infrastructure (GitLab, Jenkins, serveurs)
- Inventaire dynamique des applications et leurs métadonnées
- Détection des liens entre composants

## Module Metrics
- Collecte des indicateurs de santé de chaque application
- Analyse des dépendances et leur état (EOL, vulnérabilités)
- Calcul d'un score de santé global

## Module Notification
- Système d'alerte multi-niveau (développeur → responsable → direction)
- Escalade automatique selon l'urgence et le temps écoulé
- Templates d'emails personnalisés par contexte

## Module Archive
- Workflow d'archivage pour les applications en fin de vie
- Sauvegarde documentée avant désactivation
- Traçabilité complète des décisions

# 🛠️ Technologies utilisées

| Technologie | Utilisation |
|-------------|-------------|
| **Java 17** | Langage principal |
| **Spring Boot 3** | Framework applicatif |
| **Spring Data JPA** | Accès aux données |
| **PostgreSQL** | Base de données |
| **GitLab API** | Intégration avec les dépôts |
| **Docker** | Conteneurisation |

# 📊 Résultats obtenus

| Indicateur | Avant | Après |
|------------|-------|-------|
| Applications non maintenues identifiées | Manuel (incomplet) | 100% automatisé |
| Temps de détection d'une anomalie | Semaines/mois | < 24h |
| Couverture du parc applicatif | ~60% | 100% |
| Notifications d'alerte envoyées | Manuelles | Automatiques |

# 💡 Apprentissages clés

Ce projet m'a enseigné l'importance de :
- **Penser cycle de vie** : une application ne s'arrête pas au déploiement
- **Automatiser la surveillance** : ce qui n'est pas mesuré n'est pas géré
- **Concevoir des systèmes résilients** : gérer gracieusement les erreurs et cas limites
- **Documenter pour la pérennité** : le code vit plus longtemps que ses auteurs

# 🔗 Contexte

Projet réalisé dans le cadre de mon alternance au **Synchrotron SOLEIL**, un centre de recherche scientifique utilisant le rayonnement synchrotron. Le service informatique supporte l'ensemble des besoins numériques de cette grande infrastructure de recherche.
