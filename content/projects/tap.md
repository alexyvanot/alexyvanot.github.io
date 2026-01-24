---
name: TAP - Plateforme de Tests Automatisés
slug: tap
category: technique
type: Quality Assurance & DevOps
color: "#00B8A9"
published: true
pinned: true
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
  - name: Tuteur entreprise
    role: Responsable technique
  - name: Équipes scientifiques
    role: Utilisateurs finaux
---

::toc

## Mon regard critique

> TAP est le projet **le plus complet** de mon alternance. Il combine backend robuste, communication temps réel, intégration avec des outils tiers et une vraie attention à l'UX. Ma plus grande fierté ? Avoir créé un outil que les équipes **utilisent vraiment** — un outil interne mal conçu finit toujours abandonné.

**Mes apports principaux :**
- Architecture WebSocket avec batching intelligent pour le streaming temps réel
- Choix d'Allure (standard ouvert) plutôt qu'un format propriétaire
- UX soignée qui a favorisé l'adoption par les équipes

**Ce que j'en retire :** J'ai appris que **tester une plateforme de tests est méta mais nécessaire**. J'ai aussi compris l'importance du feedback utilisateur : les meilleures fonctionnalités sont venues des retours terrain, pas de mes suppositions initiales.

---

## Présentation du projet

**TAP** (Test Automation Platform) est une plateforme de centralisation et d'exécution des tests automatisés que j'ai développée au **Synchrotron SOLEIL**. Elle permet aux équipes de lancer des campagnes de tests, de suivre leur exécution en temps réel et de consulter des rapports Allure interactifs.

Le projet répond à un besoin concret : avant TAP, les tests étaient dispersés, difficiles à consulter et sans historique exploitable.

---

## Objectifs, Contexte et Enjeux

### Contexte organisationnel

Au Synchrotron SOLEIL, les équipes scientifiques et techniques maintiennent de nombreuses applications critiques. La qualité logicielle est essentielle : un bug dans un outil de pilotage peut compromettre des expériences scientifiques coûteuses.

**Situation avant TAP :**
- Tests dispersés : chaque équipe avait ses propres scripts et outils
- Résultats dans les logs CI uniquement, difficiles à consulter
- Pas de vision globale de la qualité ni d'historique

### Objectifs du projet

| Objectif | Indicateur de succès |
|----------|----------------------|
| Centraliser tous les tests | Interface unique multi-frameworks |
| Visibilité temps réel | Streaming WebSocket fonctionnel |
| Rapports exploitables | Intégration Allure avec historique |
| Adoption par les équipes | Utilisation quotidienne effective |

### Enjeux et risques

**Enjeux :**
- **Qualité logicielle** : détecter les régressions avant la production
- **Productivité** : réduire le temps d'analyse des résultats de tests
- **Standardisation** : uniformiser les pratiques de test

**Risques identifiés :**
- Performance : gestion de nombreuses exécutions simultanées
- Adoption : résistance si l'outil est plus complexe que les scripts existants
- Maintenance : dépendance à un framework de reporting (Allure)

---

## Étapes de réalisation

### Phase 1 : Étude et architecture (1,5 mois)

- Benchmark des solutions existantes (Jenkins, GitLab CI, outils spécialisés)
- Recueil des besoins auprès des équipes utilisatrices
- Conception de l'architecture : séparation frontend/backend, choix WebSocket pour le temps réel
- Validation technique avec mon tuteur

### Phase 2 : Développement du backend (4 mois)

**Orchestration des tests :**
- API REST pour la configuration et le lancement des campagnes
- Pool de threads avec queue de priorités pour la gestion de la concurrence
- Support multi-frameworks (JUnit, pytest, TestNG)

**Streaming temps réel :**
- Implémentation WebSocket avec protocole STOMP
- Batching intelligent (envoi groupé toutes les 500ms) pour optimiser les performances
- Gestion de la reconnexion automatique côté client

### Phase 3 : Intégration Allure et frontend (3 mois)

**Rapports Allure :**
- Génération automatique après chaque campagne
- Catégorisation par features, stories et sévérité
- Historique et tendances d'exécution

**Interface utilisateur :**
- Dashboard de monitoring des campagnes
- Visualisation en direct des résultats
- Comparaison entre campagnes

### Phase 4 : Tests, déploiement et formation (1,5 mois)

- Tests de charge pour valider la tenue sous plusieurs exécutions simultanées
- Déploiement Docker sur l'infrastructure SOLEIL
- Rédaction de la documentation utilisateur
- Sessions de formation pour les équipes

---

## Acteurs et interactions

| Acteur | Rôle | Interactions |
|--------|------|--------------|
| **Moi (développeur)** | Conception, développement, documentation | Responsabilité technique complète |
| **Tuteur entreprise** | Validation, orientation technique | Points réguliers, revue d'architecture |
| **Équipes scientifiques** | Utilisateurs finaux | Recueil besoins, feedback, tests beta |
| **Équipe infrastructure** | Support déploiement | Mise à disposition des ressources |

### Interactions clés

- **Feedback loop** avec les utilisateurs : j'ai organisé des sessions de démonstration régulières pour recueillir les retours et ajuster les fonctionnalités
- **Collaboration avec l'équipe infra** : coordination pour l'intégration avec les runners de tests existants

---

## Résultats obtenus

### Pour l'entreprise

| Aspect | Avant TAP | Avec TAP |
|--------|-----------|----------|
| Visibilité des tests | Logs CI uniquement | Dashboard centralisé |
| Temps d'accès aux résultats | Minutes de recherche | Instantané |
| Comparaison historique | Impossible | Intégrée |
| Adoption par les équipes | Variable | Généralisée |

:::chart{type=bar title="Temps d'analyse des échecs de tests"}
Avant TAP: 100
Après TAP: 30
:::

**Impact concret :** Réduction du temps d'analyse des échecs de tests de **70%** grâce aux rapports Allure détaillés et à la navigation intuitive.

### Pour moi

- **Maîtrise des WebSockets** et de la communication temps réel
- **Compétences en UX** : comprendre que l'adoption dépend de la facilité d'utilisation
- **Gestion de projet** : coordination entre développement et besoins utilisateurs

---

## Lendemains du projet

### Aujourd'hui

TAP est **en production active** et utilisé quotidiennement par plusieurs équipes du Synchrotron. Le système a traité des milliers de campagnes de tests depuis son lancement.

### Évolutions prévues

- Intégration avec Slack pour les notifications d'échec
- Support de nouveaux frameworks de tests (Robot Framework)
- Tableaux de bord de métriques qualité pour la direction

### Pérennité

J'ai documenté l'architecture et les choix techniques pour faciliter la maintenance future. Un collègue a été formé pour reprendre le projet après mon départ.

---

## Compétences mobilisées

Ce projet m'a permis de mobiliser et développer les compétences suivantes :

:::buttons
::button[Java]{link=/skills/java icon=i-logos-java}
::button[Autonomie]{link=/skills/autonomy icon=i-carbon-user-certification}
::button[Créativité]{link=/skills/creativity icon=i-carbon-idea}
:::
