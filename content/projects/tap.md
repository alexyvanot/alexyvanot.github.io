---
name: TAP - Test Automation Platform
slug: tap
category: technique
type: Quality Assurance & DevOps
color: "#00B8A9"
published: true
logo: https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg
period:
  from: 2024-03-01
  to: 2025-01-01
skills:
  - java
  - spring
  - postgresql
  - docker
  - junit
team:
  - name: Alexy VANOT
    role: Développeur principal
---

# TAP - Test Automation Platform

**TAP** (Test Automation Platform) est une plateforme de centralisation et d'exécution des tests automatisés développée au **Synchrotron SOLEIL**. Elle intègre la génération de rapports Allure, le streaming temps réel des résultats et la gestion des campagnes de tests.

# 🎯 Problématique adressée

Avant TAP, les tests automatisés au Synchrotron SOLEIL étaient :
- **Dispersés** : chaque équipe avait ses propres scripts et outils
- **Non centralisés** : pas de vision globale de la qualité
- **Difficiles à consulter** : résultats dans les logs de CI uniquement
- **Sans historique** : pas de traçabilité des exécutions passées

# 🏗️ Architecture de la plateforme

```
┌─────────────────────────────────────────────┐
│             TAP Frontend                     │
│  (Configuration, lancement, monitoring)      │
└─────────────────────┬───────────────────────┘
                      │ REST / WebSocket
┌─────────────────────▼───────────────────────┐
│             TAP Backend                      │
│  (Orchestration, gestion des campagnes)      │
└────────┬────────────┬───────────┬───────────┘
         │            │           │
         ▼            ▼           ▼
┌────────────┐  ┌──────────┐  ┌────────────┐
│ Test       │  │PostgreSQL│  │ Allure     │
│ Runners    │  │(Metadata)│  │ Reports    │
└────────────┘  └──────────┘  └────────────┘
```

# ✨ Fonctionnalités principales

## Orchestration des tests
- Configuration de campagnes multi-suites
- Exécution parallèle avec gestion de la concurrence
- Support multi-frameworks (JUnit, pytest, TestNG)

## Streaming temps réel
- Visualisation en direct de l'exécution via WebSockets
- Notification instantanée des succès et échecs
- Batching intelligent pour optimiser les performances

## Rapports Allure
- Génération automatique de rapports interactifs
- Catégorisation par features, stories et sévérité
- Historique et tendances d'exécution
- Screenshots et logs en cas d'échec

## Gestion des campagnes
- Historique complet des exécutions
- Comparaison entre campagnes
- Métriques de qualité (taux de succès, durée, tendances)

# 🛠️ Stack technique

| Technologie | Utilisation |
|-------------|-------------|
| **Java 17** | Backend principal |
| **Spring Boot 3** | Framework applicatif |
| **Spring WebSocket** | Communication temps réel |
| **PostgreSQL** | Stockage des métadonnées |
| **Allure Framework** | Génération de rapports |
| **STOMP** | Protocole WebSocket |
| **Docker** | Conteneurisation |

# 📊 Impact sur l'organisation

TAP a transformé les pratiques de test au Synchrotron SOLEIL :

| Aspect | Avant TAP | Avec TAP |
|--------|-----------|----------|
| Visibilité des tests | Logs CI uniquement | Dashboard centralisé |
| Temps d'accès aux résultats | Minutes de recherche | Instantané |
| Comparaison historique | Impossible | Intégrée |
| Adoption par les équipes | Variable | Généralisée |

# 💡 Défis techniques relevés

## Gestion de la concurrence
Plusieurs utilisateurs peuvent lancer des campagnes simultanément. Implémentation d'un pool de threads et d'une queue avec priorités.

## Isolation des environnements
Chaque exécution de test doit être isolée pour éviter les interférences. Variables d'environnement et préfixage des ressources par campagne.

## Performance WebSocket
Optimisation via batching des messages (envoi groupé toutes les 500ms) et compression des payloads.

# 💭 Apprentissages

Ce projet m'a confirmé l'importance de :
- **L'UX des outils internes** : un outil mal conçu ne sera pas adopté
- **Les standards ouverts** : Allure plutôt qu'un format propriétaire
- **Le feedback utilisateur** : les meilleures fonctionnalités viennent des retours terrain
- **Les tests de tests** : tester une plateforme de tests est méta mais nécessaire

# 🔗 Contexte

Projet phare de mon alternance au **Synchrotron SOLEIL**. TAP représente le projet le plus complet que j'ai développé, combinant backend, temps réel, intégration avec des outils tiers et attention particulière à l'expérience utilisateur.
