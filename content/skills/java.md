---
name: Java
slug: java
published: true
category: pro-lang
color: red
logo: Java
---

::toc

# Java : le socle de mes développements backend

## :i[pin] Définition et contexte professionnel

**Java** est un langage de programmation orienté objet créé par Sun Microsystems en 1995, aujourd'hui maintenu par Oracle. Sa philosophie *"Write Once, Run Anywhere"* (WORA) et sa robustesse en font le langage de prédilection pour les **applications d'entreprise critiques**.

Dans le contexte du **Synchrotron SOLEIL**, où je réalise mon alternance depuis 2023, Java représente **le standard pour le développement backend**. L'infrastructure informatique du synchrotron repose sur des centaines d'applications Java, certaines en production depuis plus de 15 ans. Le choix de Java s'explique par plusieurs facteurs :

- **Stabilité à long terme** : les API Java évoluent en maintenant une compatibilité ascendante
- **Écosystème mature** : frameworks éprouvés (Spring, Hibernate), outils de build (Maven, Gradle)
- **Performance et scalabilité** : la JVM optimise l'exécution en temps réel
- **Maintenabilité** : le typage statique et les conventions strictes facilitent la reprise de code

Avec la sortie de **Java 21 LTS** en septembre 2023 et l'arrivée des **Virtual Threads** (Project Loom), Java connaît un renouveau significatif. Ces évolutions répondent aux besoins modernes de programmation concurrente, rendant le langage plus pertinent que jamais face à des alternatives comme Go ou Kotlin.

---

## :i[search] Mes réalisations concrètes

### SUN Auto : orchestration du cycle de vie applicatif

Lors de mon alternance, j'ai développé **SUN Auto** (SOLEIL Unified Notification Auto), un système Java/Spring Boot qui automatise la gestion du cycle de vie des applications du synchrotron.

**Le défi** : le parc applicatif comptait des dizaines d'applications sans suivi de leur état (maintenues, obsolètes, à décommissionner). Les équipes perdaient du temps à maintenir des applications que plus personne n'utilisait.

**Ma contribution** :
- Architecture d'un **backend Spring Boot** avec API REST complète
- Implémentation d'un **système de workflows** pour les états des applications (découverte → analyse → notification → archivage)
- Développement de **jobs schedulés** (Spring Scheduler) pour le scan automatique des dépôts GitLab
- Intégration avec **PostgreSQL** via Spring Data JPA avec requêtes optimisées

**Résultat** : identification automatique de **23 applications obsolètes** dès le premier mois de déploiement, économisant environ 40h/mois de maintenance inutile.

→ [Voir le projet SUN Auto](/projects/sun-auto)

### TAP : plateforme de tests automatisés

**TAP** (Test Automation Platform) centralise l'exécution et le reporting des tests automatisés au Synchrotron SOLEIL.

**Le défi** : les tests étaient dispersés dans chaque projet, sans vision globale de la qualité logicielle. Les résultats se perdaient dans les logs Jenkins.

**Ma contribution** :
- Conception d'une **architecture modulaire** en Java 17 avec injection de dépendances Spring
- Développement d'un **streaming temps réel** des résultats de tests via WebSocket
- Intégration du framework **Allure** pour la génération de rapports visuels
- Mise en place de **tests d'intégration** avec JUnit 5 et Testcontainers

**Résultat** : temps de diagnostic des échecs de tests réduit de **70%** grâce à la centralisation et aux rapports Allure. L'équipe QA a adopté la plateforme pour tous les nouveaux projets.

→ [Voir le projet TAP](/projects/tap)

### Projets Minecraft : apprentissage par la passion

Avant mon parcours professionnel, j'ai développé plusieurs **plugins Minecraft** en Java, notamment pour le serveur **Comet Learning**. Ces projets m'ont permis d'acquérir les fondamentaux :

- Programmation orientée objet (héritage, interfaces, design patterns)
- Gestion d'événements et programmation asynchrone
- Manipulation de bases de données (MySQL, SQLite)
- Travail collaboratif avec Git

Cette expérience autodidacte, bien que non professionnelle, a posé les bases solides qui me servent aujourd'hui.

→ [Voir le projet Comet Learning](/projects/comet-learning)

---

## :i[target] Autocritique et positionnement

### Niveau de maîtrise

Je situe ma compétence Java à un **niveau avancé**, sans prétendre à l'expertise. Je maîtrise :

| Domaine | Niveau |
|---------|--------|
| Syntaxe et concepts OOP | ::stars[5/5] Expert |
| Spring Boot / Spring Data | ::stars[4/5] Avancé |
| Tests (JUnit, Mockito) | ::stars[4/5] Avancé |
| Performance / JVM tuning | ::stars[3/5] Intermédiaire |
| Architectures distribuées | ::stars[3/5] Intermédiaire |

### Marge de progression

Mes axes d'amélioration identifiés :

- **Optimisation JVM** : je sais que la JVM offre des leviers de performance (GC tuning, JIT), mais je n'ai pas encore eu l'occasion de les exploiter en profondeur
- **Reactive Programming** : Spring WebFlux et la programmation réactive restent à approfondir
- **Microservices avancés** : patterns comme CQRS, Event Sourcing, Saga

### Contextualisation

Ma compétence Java fonctionne particulièrement bien dans un **contexte d'applications métier structurées** avec des besoins de maintenabilité long terme. En revanche, pour du prototypage rapide ou des scripts one-shot, je privilégie Python.

### Place dans mon profil

Java constitue **le pilier central** de mon profil technique. C'est le langage sur lequel je suis le plus productif pour des projets backend d'envergure. Il complète mon expertise frontend (SvelteKit/TypeScript) pour proposer un profil **full-stack polyvalent**.

### Vitesse d'acquisition

Mon apprentissage de Java s'est fait en **deux phases** :
1. **Autodidacte (2018-2021)** : plugins Minecraft, projets personnels → acquisition des fondamentaux
2. **Professionnel (2023-présent)** : frameworks entreprise, bonnes pratiques → montée en compétence rapide grâce aux bases solides

### Conseils tirés de mon expérience

> *"Apprenez Java par la pratique sur des projets qui vous passionnent. Les concepts abstraits (interfaces, generics, design patterns) prennent tout leur sens quand vous en avez besoin pour résoudre un vrai problème."*

Mes recommandations :
- **Commencer par les fondamentaux OOP** avant de toucher aux frameworks
- **Maîtriser Maven ou Gradle** : la gestion de dépendances est cruciale en Java
- **Écrire des tests dès le début** : JUnit s'apprend facilement et change la qualité du code
- **Ne pas ignorer les nouveautés** : Java évolue vite depuis Java 8 (streams, records, pattern matching)

---

## :i[growth] Évolution et perspectives

### Mon objectif à moyen terme

D'ici 2 ans, je vise le niveau **d'architecte technique Java**, capable de :
- Concevoir des architectures microservices robustes
- Optimiser les performances critiques (profiling, tuning JVM)
- Accompagner des développeurs juniors sur les bonnes pratiques

### Formations en cours et à venir

| Formation | Statut | Objectif |
|-----------|--------|----------|
| Spring Certified Professional | Prévu 2026 | Certification officielle |
| Java 21 : Virtual Threads | En cours (autoformation) | Maîtriser la concurrence moderne |
| Architecture microservices | Prévu | Patterns avancés (Saga, CQRS) |

### Veille technologique

Je suis activement :
- Les releases Java via les JEPs (JDK Enhancement Proposals)
- Le blog de Baeldung pour les tutoriels Spring
- Les conférences Devoxx et Spring I/O (replay YouTube)
