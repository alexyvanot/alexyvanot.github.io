---
title: "SUN Auto : Automatisation de la gestion des applications en fin de vie au Synchrotron SOLEIL"
slug: sun-auto-automatisation-synchrotron-soleil
published: true
excerpt: "Comment j'ai conçu et développé un système automatisé pour gérer le cycle de vie des applications internes, de la détection à l'archivage. Une mission d'alternance au coeur de l'infrastructure IT d'un grand instrument scientifique."
author: Alexy VANOT
publishedAt: 2025-06-10
tags:
  - projet-entreprise
  - automatisation
  - synchrotron-soleil
  - java
  - devops
logo: Java
readingTime: 18
color: "#FF8C00"
---

::toc

# SUN Auto : Automatisation de la gestion des applications en fin de vie au Synchrotron SOLEIL

Au Synchrotron SOLEIL, comme dans toute grande infrastructure de recherche scientifique, des dizaines d'applications internes coexistent, chacune répondant à un besoin spécifique. Avec le temps, certaines deviennent obsolètes, d'autres ne sont plus maintenues, d'autres encore continuent de tourner alors que personne ne les utilise. Le projet SUN Auto vise à automatiser la gestion de ces applications en fin de vie, un enjeu crucial pour la sécurité, la performance et la maintenabilité du système d'information.

## Contexte

### Le Synchrotron SOLEIL

SOLEIL (Source Optimisée de Lumière d'Énergie Intermédiaire du LURE) est un accélérateur de particules de troisième génération situé sur le plateau de Saclay. Il produit un rayonnement synchrotron, une lumière extrêmement intense utilisée par des chercheurs du monde entier pour des expériences dans des domaines variés : biologie structurale, science des matériaux, chimie, patrimoine culturel, environnement.

L'infrastructure informatique qui supporte cette activité scientifique est considérable :
- **Contrôle-commande** : pilotage des équipements de l'accélérateur et des lignes de lumière
- **Acquisition de données** : collecte et stockage des téraoctets de données expérimentales
- **Applications métier** : outils pour les scientifiques, les administratifs, la maintenance
- **Infrastructure** : réseau, sécurité, serveurs, stockage

C'est au sein du service informatique, plus précisément dans l'équipe en charge des applications métier, que j'ai effectué mon alternance.

### La problématique des applications "sunset"

Au fil des années, des applications ont été développées pour répondre à des besoins spécifiques : un outil de suivi pour une expérience particulière, un dashboard pour un chef de projet, une interface pour une procédure administrative temporaire.

Ces applications posent plusieurs problèmes quand elles ne sont plus activement utilisées ou maintenues :

**Consommation de ressources**
Chaque application tournant sur un serveur consomme de la mémoire, du CPU, et de l'espace disque. Même inactive, elle représente un coût.

**Risques de sécurité**
Une application non maintenue ne reçoit plus de correctifs de sécurité. Elle devient une porte d'entrée potentielle pour des attaquants.

**Complexité de maintenance**
Plus le parc applicatif est grand, plus la maintenance est complexe. Les dépendances entre applications créent des contraintes lors des mises à jour d'infrastructure.

**Dette technique**
Des applications utilisant des technologies obsolètes (Java 6, PHP 5, bases de données legacy) bloquent parfois la modernisation de l'ensemble.

**Perte de connaissance**
Quand le développeur d'origine a quitté l'organisation et qu'aucune documentation n'existe, l'application devient une boîte noire que personne n'ose toucher.

### Le processus manuel existant

Avant SUN Auto, l'identification des applications candidates au décommissionnement était un processus manuel et chronophage :

1. Un membre de l'équipe devait périodiquement passer en revue la liste des applications
2. Pour chaque application suspecte, il fallait contacter le responsable présumé
3. Des échanges de mails s'ensuivaient pour déterminer si l'application était encore utilisée
4. Si non, un processus d'archivage manuel était enclenché
5. L'application était finalement éteinte

Ce processus prenait plusieurs semaines par application et dépendait entièrement de la disponibilité et de la bonne volonté des interlocuteurs.

## Objectifs du projet SUN Auto

SUN Auto devait répondre à plusieurs besoins identifiés avec mon tuteur et l'équipe :

### Inventaire automatique
Découvrir et maintenir à jour la liste des applications déployées sur l'infrastructure, sans dépendre de déclarations manuelles.

### Détection d'inactivité
Identifier automatiquement les applications qui ne sont plus utilisées en se basant sur des métriques objectives (logs d'accès, connexions réseau, utilisation CPU).

### Workflow de notification
Alerter les responsables d'applications quand certains seuils sont atteints, avec un processus graduel (avertissement, rappel, escalade).

### Archivage automatisé
Procéder à l'archivage propre des applications décommissionnées : sauvegarde des données, documentation de l'état final, extinction contrôlée.

### Tableau de bord
Offrir une visibilité sur l'état du parc applicatif aux responsables informatiques.

## Architecture technique

### Stack technologique

Après analyse des contraintes et des compétences de l'équipe, j'ai retenu :

- **Backend** : Java 17 avec Spring Boot 3
- **Base de données** : PostgreSQL 15
- **Orchestration** : Spring Scheduler pour les tâches périodiques
- **API** : REST avec OpenAPI/Swagger pour la documentation
- **Frontend** : Dashboard développé par un collègue, consommant l'API

Ce choix s'alignait avec les standards de l'équipe et facilitait la maintenance future.

### Architecture modulaire

Le système est découpé en modules indépendants, chacun avec une responsabilité claire :

```
sun-auto/
├── sun-auto-core/          # Modèles et interfaces communes
├── sun-auto-discovery/     # Module de découverte des applications
├── sun-auto-metrics/       # Collecte des métriques d'usage
├── sun-auto-notification/  # Système de notification
├── sun-auto-archive/       # Processus d'archivage
├── sun-auto-api/           # API REST
└── sun-auto-scheduler/     # Orchestration des tâches
```

Cette modularité permet de faire évoluer ou remplacer un module sans impacter les autres.

### Module Discovery

Le module de découverte scanne l'infrastructure pour identifier les applications déployées. Plusieurs techniques sont combinées :

**Scan réseau**
Identification des ports ouverts sur les serveurs applicatifs. Chaque port correspond potentiellement à une application.

```java
@Service
public class NetworkScanner {
    
    public List<DiscoveredEndpoint> scanServer(String host) {
        List<DiscoveredEndpoint> endpoints = new ArrayList<>();
        
        for (int port : commonAppPorts) {
            try (Socket socket = new Socket()) {
                socket.connect(new InetSocketAddress(host, port), TIMEOUT_MS);
                endpoints.add(new DiscoveredEndpoint(host, port, detectProtocol(host, port)));
            } catch (IOException e) {
                // Port fermé, pas d'application
            }
        }
        
        return endpoints;
    }
    
    private String detectProtocol(String host, int port) {
        // Tentative HTTP/HTTPS, détection de headers
        // Identification du framework (Spring, Express, etc.)
    }
}
```

**Analyse des processus**
Via des agents SSH sur les serveurs, récupération de la liste des processus Java, Python, Node.js avec leurs arguments de lancement.

**Parsing des fichiers de configuration**
Lecture des fichiers nginx, Apache, systemd pour identifier les applications configurées.

**Intégration avec l'existant**
Synchronisation avec la CMDB (Configuration Management Database) existante pour enrichir les informations.

### Module Metrics

Une fois les applications identifiées, il faut mesurer leur activité. Le module Metrics collecte plusieurs types de données :

**Logs d'accès web**
Parsing des logs Apache/Nginx pour extraire le nombre de requêtes, les codes de retour, les adresses IP sources.

```java
@Service
public class AccessLogAnalyzer {
    
    private static final Pattern LOG_PATTERN = Pattern.compile(
        "^(\\S+) - - \\[(.+?)\\] \"(\\S+) (\\S+) (\\S+)\" (\\d+) (\\d+)"
    );
    
    public AccessStats analyzeLog(Path logFile, LocalDate date) {
        try (Stream<String> lines = Files.lines(logFile)) {
            return lines
                .map(LOG_PATTERN::matcher)
                .filter(Matcher::matches)
                .filter(m -> parseDate(m.group(2)).equals(date))
                .collect(Collectors.teeing(
                    Collectors.counting(),
                    Collectors.groupingBy(m -> m.group(6), Collectors.counting()),
                    AccessStats::new
                ));
        }
    }
}
```

**Métriques système**
Utilisation CPU, mémoire, I/O disque par processus, collectées via des commandes système (ps, top) ou des agents de monitoring existants.

**Connexions réseau**
Analyse des connexions actives (netstat, ss) pour identifier les clients connectés.

**Activité base de données**
Pour les applications avec base de données dédiée, requêtes sur les statistiques PostgreSQL (pg_stat_activity, pg_stat_user_tables).

Les métriques sont agrégées quotidiennement et stockées pour analyse de tendance.

### Module Notification

Le système de notification implémente un workflow graduel :

**Niveau 1 : Avertissement** (après 30 jours d'inactivité)
Email au responsable déclaré de l'application signalant la faible activité et demandant confirmation de l'utilité.

**Niveau 2 : Rappel** (après 60 jours)
Relance avec copie au responsable hiérarchique. Le ton devient plus pressant.

**Niveau 3 : Escalade** (après 90 jours)
Notification à la direction informatique. Proposition de date de décommissionnement.

**Niveau 4 : Décommissionnement programmé** (après 120 jours sans réponse)
Annonce de la date d'extinction définitive, 2 semaines à l'avance.

```java
@Service
public class NotificationWorkflow {
    
    public void processApplication(Application app) {
        int inactiveDays = calculateInactiveDays(app);
        NotificationLevel currentLevel = app.getNotificationLevel();
        
        NotificationLevel requiredLevel = determineRequiredLevel(inactiveDays);
        
        if (requiredLevel.isHigherThan(currentLevel)) {
            sendNotification(app, requiredLevel);
            app.setNotificationLevel(requiredLevel);
            app.setLastNotificationDate(LocalDate.now());
            applicationRepository.save(app);
        }
    }
    
    private void sendNotification(Application app, NotificationLevel level) {
        NotificationTemplate template = templateRepository.findByLevel(level);
        List<String> recipients = determineRecipients(app, level);
        
        emailService.send(
            recipients,
            template.getSubject().replace("{APP_NAME}", app.getName()),
            template.getBody()
                .replace("{APP_NAME}", app.getName())
                .replace("{INACTIVE_DAYS}", String.valueOf(app.getInactiveDays()))
                .replace("{LAST_ACCESS}", app.getLastAccessDate().toString())
        );
        
        notificationHistoryRepository.save(new NotificationHistory(app, level, recipients));
    }
}
```

### Module Archive

Quand une application est validée pour décommissionnement, le module Archive prend le relais :

**Sauvegarde des données**
- Export de la base de données si applicable
- Copie des fichiers de configuration
- Snapshot des logs récents
- Capture d'écran de l'interface si disponible

**Documentation automatique**
Génération d'un document récapitulatif : historique de l'application, technologies utilisées, responsables successifs, raison du décommissionnement.

**Extinction propre**
- Arrêt du service applicatif
- Désactivation des configurations (nginx, systemd)
- Suppression des entrées DNS internes
- Archivage des sauvegardes vers un stockage long terme

**Notification finale**
Email de confirmation à tous les intervenants avec lien vers l'archive.

## Défis rencontrés

### Hétérogénéité des environnements

Les applications ciblées utilisent des technologies extrêmement variées :
- Java 6 à Java 17
- Python 2 et Python 3
- PHP 5.x et 7.x
- Applications legacy en C
- Scripts Perl d'une autre époque

Le module Discovery devait être suffisamment générique pour tous les détecter, ce qui a nécessité de nombreuses heuristiques et cas particuliers.

### Faux positifs

Une application peut sembler inactive alors qu'elle est utilisée ponctuellement :
- Traitements batch mensuels (paie, reporting)
- Applications de gestion de crise (utilisées uniquement en cas d'incident)
- Outils saisonniers (campagnes d'expériences)

J'ai dû affiner les critères de détection et implémenter un système de "whitelist" pour les applications à usage ponctuel connu.

### Résistance au changement

Certains utilisateurs étaient réticents à voir leurs applications décommissionnées, même inutilisées. "On ne sait jamais, ça pourrait servir."

Le processus de notification graduel avec escalade hiérarchique a permis de débloquer la plupart des situations. La documentation automatique et l'archivage rassurent : les données ne sont pas perdues, juste archivées.

### Gestion des propriétaires fantômes

Pour certaines applications anciennes, le responsable déclaré avait quitté l'organisation depuis longtemps. Il a fallu implémenter une logique de recherche de propriétaire de substitution (chef de service, dernière personne ayant modifié l'application, etc.).

## Résultats

Après six mois de déploiement progressif :

### Métriques quantitatives

| Indicateur | Valeur |
|------------|--------|
| Applications inventoriées | 47 |
| Candidates au décommissionnement identifiées | 12 |
| Applications archivées proprement | 8 |
| Ressources serveur libérées | ~40 GB RAM, 500 GB disque |
| Temps de gestion réduit | -80% |

### Gains qualitatifs

**Visibilité accrue**
Pour la première fois, l'équipe dispose d'une vue complète et à jour du parc applicatif.

**Processus objectif**
Les décisions de décommissionnement sont basées sur des données, pas sur des impressions ou des rapports de force.

**Traçabilité**
Chaque notification, chaque décision est historisée et auditable.

**Réactivité**
Les applications problématiques sont identifiées en jours plutôt qu'en mois.

## Ce que j'ai appris

### L'importance de la communication

Un système automatisé qui impacte le travail des autres nécessite une communication soignée. J'ai passé presque autant de temps à rédiger les templates d'emails qu'à coder le module de notification.

Le ton, les informations fournies, les délais accordés : tout influe sur l'acceptation du système par les utilisateurs.

### La valeur des métriques

Sans données quantitatives, les discussions tournent en rond. "Je pense que cette application est encore utilisée" contre "Je pense que non" ne mène nulle part.

Avec des métriques objectives (0 requête depuis 90 jours), la discussion devient factuelle et les décisions plus rapides.

### Le pragmatisme technique

Face à l'hétérogénéité des systèmes, j'ai dû accepter que certaines solutions ne seraient pas élégantes. Un script bash ad hoc pour une application legacy particulière n'est pas glorieux, mais s'il fonctionne de manière fiable, c'est ce qui compte.

La perfection technique est un luxe quand on doit livrer dans les temps.

### La gestion du changement

Introduire un nouveau système dans une organisation établie demande de la diplomatie. Présenter SUN Auto comme un outil d'aide plutôt que comme un outil de contrôle a facilité son adoption.

## Conclusion

SUN Auto illustre comment l'automatisation peut apporter de la valeur dans des processus organisationnels, pas seulement techniques. Ce projet m'a donné une vision concrète de la gestion du cycle de vie des applications en entreprise, un sujet rarement abordé dans les cursus académiques mais crucial en production.

C'est une expérience que je valorise particulièrement car elle combine développement logiciel, compréhension de l'infrastructure, et gestion des aspects humains. Un système parfait techniquement mais rejeté par les utilisateurs est un échec. Un système imparfait mais adopté et utilisé est une réussite.

Cette leçon m'accompagne dans tous mes projets professionnels depuis.
