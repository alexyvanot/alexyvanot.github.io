---
name: SUN Auto - Automatisation du cycle de vie applicatif
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
  - name: Tuteur entreprise
    role: Responsable technique
---

::toc

## Mon regard critique

> Ce projet représente **ma plus grande fierté technique** de mon alternance. En partant d'une feuille blanche, j'ai conçu et développé seul un système qui répond à un vrai besoin métier. Ma valeur ajoutée ? Avoir su transformer un problème organisationnel flou ("on a trop d'applications obsolètes") en une solution technique concrète et automatisée.

**Mes apports principaux :**
- Architecture modulaire que j'ai pensée dès le départ pour l'évolutivité
- Intégration avec les outils existants (GitLab, Jenkins) sans perturber les équipes
- Documentation technique complète pour assurer la pérennité

**Ce que j'en retire :** Ce projet m'a appris à gérer un cycle de développement complet en autonomie, de l'analyse du besoin à la mise en production. J'ai aussi compris l'importance de **penser "maintenance" dès la conception** — le code que j'écris vivra après moi.

---

## Présentation du projet

**SUN Auto** (SOLEIL Unified Notification Auto) est un système que j'ai développé durant mon alternance au **Synchrotron SOLEIL** pour automatiser la surveillance et la gestion du cycle de vie des applications internes.

Le Synchrotron SOLEIL maintient un parc de plusieurs centaines d'applications. Avec le temps, certaines deviennent obsolètes, non maintenues ou vulnérables. SUN Auto détecte automatiquement ces situations et orchestre le processus de notification et d'archivage.

---

## Objectifs, Contexte et Enjeux

### Contexte organisationnel

Le Synchrotron SOLEIL est un grand instrument de recherche scientifique. Son service informatique supporte l'ensemble des besoins numériques : applications métier, outils de pilotage des lignes de lumière, infrastructure réseau.

Avant SUN Auto, la gestion des applications en fin de vie était **manuelle et incomplète** :
- Pas de vision exhaustive du parc applicatif
- Détection des problèmes au cas par cas
- Notifications manuelles, souvent oubliées

### Objectifs du projet

| Objectif | Indicateur de succès |
|----------|----------------------|
| Inventorier 100% des applications | Scan automatique complet |
| Détecter les anomalies en < 24h | Métriques de santé automatisées |
| Automatiser les notifications | Escalade multi-niveau sans intervention |
| Archiver proprement les applications EOL | Workflow documenté et traçable |

### Enjeux et risques

**Enjeux :**
- **Sécurité** : applications vulnérables = portes d'entrée pour attaques
- **Ressources** : applications "zombies" consomment serveurs et temps de support
- **Conformité** : traçabilité exigée par les audits

**Risques identifiés :**
- Résistance au changement des équipes habituées au manuel
- Faux positifs pouvant générer des alertes inutiles
- Complexité d'intégration avec l'existant hétérogène

---

## Étapes de réalisation

### Phase 1 : Analyse et conception (2 mois)

- Interviews des responsables d'équipe pour comprendre les besoins
- Cartographie des outils existants (GitLab, Jenkins, bases de données)
- Rédaction d'un document d'architecture validé par mon tuteur
- Choix technologiques : Java 17 + Spring Boot 3 pour la cohérence avec l'existant

### Phase 2 : Développement du cœur (4 mois)

**Module Discovery :**
- Scan automatique de l'infrastructure GitLab via API
- Extraction des métadonnées de chaque application
- Détection des liens entre composants (dépendances, sous-modules)

**Module Metrics :**
- Collecte des indicateurs de santé (dernière mise à jour, dépendances EOL, vulnérabilités)
- Algorithme de scoring pour prioriser les applications à risque

### Phase 3 : Système de notification (3 mois)

**Module Notification :**
- Chaîne d'escalade : développeur → responsable → direction
- Templates d'emails contextualisés par niveau d'urgence
- Historique des notifications pour éviter le spam

### Phase 4 : Archivage et mise en production (3 mois)

**Module Archive :**
- Workflow d'archivage avec sauvegarde documentée
- Traçabilité complète des décisions

**Mise en production :**
- Déploiement Docker sur l'infrastructure SOLEIL
- Formation des administrateurs
- Période de rodage avec ajustements

---

## Acteurs et interactions

| Acteur | Rôle | Interactions |
|--------|------|--------------|
| **Moi (développeur)** | Conception, développement, documentation | Autonomie sur le code, points hebdo avec tuteur |
| **Tuteur entreprise** | Validation technique, accès ressources | Revue d'architecture, déblocages administratifs |
| **Équipe infrastructure** | Mise à disposition des serveurs | Coordination pour le déploiement |
| **Responsables d'équipe** | Utilisateurs finaux des notifications | Recueil des besoins, feedback sur les alertes |
| **Direction informatique** | Sponsor du projet | Validation des objectifs, présentation finale |

---

## Résultats obtenus

### Pour l'entreprise

| Indicateur | Avant | Après |
|------------|-------|-------|
| Applications non maintenues identifiées | Manuel (~60% couverture) | 100% automatisé |
| Temps de détection d'une anomalie | Semaines/mois | < 24h |
| Notifications d'alerte | Manuelles, oubliées | Automatiques, traçables |
| Archivage des applications EOL | Ad hoc | Processus structuré |

:::chart{type=progress title="Couverture de détection"}
Avant SUN Auto: 60
Après SUN Auto: 100
:::

### Pour moi

- **Montée en compétence Java/Spring Boot** sur un projet de grande envergure
- **Expérience DevOps** : CI/CD, Docker, intégration avec GitLab
- **Soft skills** : communication avec des profils non-techniques, gestion de projet en autonomie

---

## Lendemains du projet

### Aujourd'hui

SUN Auto est en **production active** au Synchrotron SOLEIL. Le système tourne quotidiennement et a déjà permis d'identifier et traiter une vingtaine d'applications obsolètes.

### Évolutions prévues

- Intégration avec le système de ticketing pour créer automatiquement des demandes d'archivage
- Dashboard de visualisation du parc applicatif
- Extension aux applications hébergées hors infrastructure principale

### Mon implication future

Même après mon alternance, la documentation que j'ai rédigée permettra aux équipes de maintenir et faire évoluer le système. J'ai formé un collègue pour assurer la transition.

---

## Compétences mobilisées

Ce projet m'a permis de mobiliser et développer les compétences suivantes :

:::buttons
::button[Java]{link=/skills/java icon=i-logos-java}
::button[Autonomie]{link=/skills/autonomy icon=i-carbon-user-certification}
::button[Travail d'équipe]{link=/skills/teamwork icon=i-carbon-group}
:::
