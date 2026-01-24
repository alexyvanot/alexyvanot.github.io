---
title: "Travailler en alternance au Synchrotron SOLEIL : Bilan et perspectives"
slug: alternance-synchrotron-soleil-bilan
published: true
excerpt: "Retour sur deux années d'alternance dans un centre de recherche scientifique. Les projets, l'environnement unique, les apprentissages techniques et humains, et ce que cette expérience m'a apporté pour la suite."
author: Alexy VANOT
publishedAt: 2025-06-20
tags:
  - projet-entreprise
  - synchrotron-soleil
  - alternance
  - carriere
  - bilan
logo: Java
readingTime: 18
color: "#1E3A5F"
---

::toc

# Travailler en alternance au Synchrotron SOLEIL : Bilan et perspectives

Deux années d'alternance dans un synchrotron. Dit comme ça, cela semble inhabituel pour un étudiant en informatique. Quand on pense développeur junior, on imagine plutôt une startup, une ESN, ou une grande entreprise du numérique. Et pourtant, cette expérience dans un centre de recherche scientifique a été déterminante dans mon parcours professionnel.

## Qu'est-ce qu'un synchrotron ?

Avant de parler de mon expérience, une brève explication s'impose pour ceux qui ne connaissent pas ces installations.

### Un accélérateur de particules au service de la science

Un synchrotron est un type d'accélérateur de particules circulaire qui produit un rayonnement électromagnétique extrêmement intense appelé lumière synchrotron. À SOLEIL, des électrons circulent à une vitesse proche de celle de la lumière dans un anneau de 354 mètres de circonférence.

Quand ces électrons sont déviés par des aimants, ils émettent un rayonnement très brillant. Ce rayonnement est capté par des lignes de lumière (29 à SOLEIL) où les scientifiques mènent leurs expériences.

### Des applications concrètes

La lumière synchrotron permet d'observer la matière à l'échelle atomique. Les applications sont variées :
- **Biologie** : structure des protéines, développement de médicaments
- **Chimie** : catalyse, nouveaux matériaux
- **Physique** : propriétés des semi-conducteurs
- **Patrimoine** : analyse de tableaux anciens, manuscrits
- **Environnement** : dépollution des sols, stockage du CO2

Chaque année, des milliers de chercheurs du monde entier viennent à SOLEIL pour mener leurs expériences.

## Découvrir le monde de la recherche scientifique

### Un environnement unique

Le Synchrotron SOLEIL n'est pas une entreprise classique. C'est un Très Grand Équipement (TGE) au service de la communauté scientifique. Le financement vient principalement du CNRS et du CEA. Les "utilisateurs" (les scientifiques) viennent du monde entier pour mener des expériences, souvent pendant quelques jours seulement.

Cette mission de service public crée une culture particulière :
- **Rigueur scientifique** : les données doivent être fiables, les systèmes reproductibles
- **Partage des connaissances** : publication, documentation, open source
- **Vision long terme** : les équipements sont conçus pour durer des décennies
- **Excellence technique** : le synchrotron est un concentré de technologies de pointe

### L'informatique au service de la science

Le service informatique où j'ai travaillé, rattaché à la Division Informatique, supporte l'ensemble des besoins numériques de l'installation :

**Contrôle-commande**
Piloter les équipements du synchrotron : aimants, détecteurs, motorisations. Ces systèmes doivent être disponibles 24h/24 pendant les périodes de fonctionnement.

**Acquisition et stockage des données**
Les expériences génèrent des téraoctets de données. Il faut les acquérir en temps réel, les stocker de manière pérenne, et permettre leur exploitation par les scientifiques.

**Applications métier**
Gestion des utilisateurs, planification des expériences, suivi des échantillons, inventaire du matériel. Chaque aspect de la vie du synchrotron a son logiciel dédié.

**Infrastructure**
Réseau, serveurs, sécurité, postes de travail. L'informatique de base mais à l'échelle d'une installation critique.

C'est un terrain de jeu vaste avec des problématiques variées, de l'embarqué temps réel au développement web en passant par le traitement de données scientifiques.

## Mon intégration dans l'équipe

### Les premières semaines

Arriver dans un environnement aussi technique peut être intimidant. La quantité de choses à comprendre est immense : l'architecture des systèmes existants, les processus internes, le vocabulaire métier, les interlocuteurs.

Mes premières semaines ont été consacrées à :
- **Observer** : assister aux réunions, lire la documentation, explorer le code existant
- **Poser des questions** : aucune n'est stupide quand on découvre un domaine
- **Contribuer modestement** : corriger des bugs simples, améliorer de la documentation
- **Construire ma carte mentale** : qui fait quoi, quel système interagit avec quel autre

Mon tuteur a joué un rôle clé en me guidant vers les bonnes ressources et en m'intégrant progressivement aux projets.

### Trouver ma place

En tant qu'alternant, on occupe une position particulière : ni vraiment étudiant, ni vraiment salarié à temps plein. Cette ambiguïté peut être inconfortable mais aussi libératrice.

J'ai choisi de :
- **Être proactif** : proposer des idées, signaler des problèmes, ne pas attendre qu'on me dise quoi faire
- **Être fiable** : respecter les délais, prévenir en cas de difficulté, documenter mon travail
- **Être humble** : accepter de ne pas tout comprendre, demander de l'aide quand nécessaire

Avec le temps, la confiance s'est installée et j'ai pu prendre des responsabilités croissantes.

## Les projets marquants

### SUN Auto : Gérer le cycle de vie des applications

Mon premier projet d'envergure. SUN Auto (SOLEIL Unified Notification Auto) est un système qui surveille l'ensemble des applications de l'organisation, détecte celles qui arrivent en fin de vie (obsolètes, non maintenues, problèmes de sécurité), et orchestre leur traitement.

**Ce que j'ai appris :**
- Penser cycle de vie, pas seulement développement. Une application ne s'arrête pas une fois déployée.
- L'importance de l'automatisation. Les tâches répétitives doivent être mécanisées.
- Concevoir des systèmes résilients. Le code doit gérer les cas d'erreur gracieusement.

Ce projet m'a donné une vision plus mature du développement logiciel.

### TAP : Une plateforme de tests automatisés

Le projet le plus ambitieux de mon alternance. TAP (Test Automation Platform) centralise l'exécution des tests automatisés et génère des rapports Allure.

**Défis techniques relevés :**
- Orchestration de tests parallèles
- Streaming temps réel des résultats via WebSockets
- Intégration avec divers frameworks (JUnit, pytest)
- Génération et hébergement des rapports

**Impact concret :**
TAP a changé les pratiques de test de plusieurs équipes. Voir les collègues adopter un outil que j'ai développé et en tirer bénéfice est une satisfaction professionnelle profonde.

### Contributions diverses

Au-delà des projets principaux, une part significative de mon temps a été consacrée à des activités moins glamour mais tout aussi formatrices :

**Maintenance d'applications existantes**
Corriger des bugs, ajouter des fonctionnalités mineures, adapter à de nouvelles versions de dépendances. C'est confrontant : on travaille sur du code écrit par d'autres, parfois depuis des années, avec des choix qu'on n'aurait pas faits.

**Support aux utilisateurs**
Répondre aux questions, diagnostiquer des problèmes, former à l'utilisation des outils. Cela développe la patience et la pédagogie.

**Documentation technique**
Rédiger des guides, des READMEs, des commentaires dans le code. La documentation est souvent négligée mais elle est essentielle pour la pérennité des systèmes.

**Revues de code**
Participer aux revues de merge requests, d'abord en observateur puis en contributeur. C'est un excellent moyen d'apprendre des pratiques des collègues plus expérimentés.

Ces activités "annexes" sont formatrices car elles confrontent à la réalité du métier : du code legacy, des utilisateurs avec des besoins réels et parfois contradictoires, de la dette technique accumulée.

## Ce que l'alternance m'a apporté

:::chart{type=pie title="Compétences développées" size=200}
Java/Spring: 35
DevOps/CI-CD: 25
Bases de données: 20
Architecture: 20
:::

### Compétences techniques approfondies

**Java et l'écosystème Spring**
J'ai dépassé le niveau académique pour atteindre une maîtrise pratique : Spring Boot, Spring Data, Spring Security, Spring Batch. Je sais maintenant structurer une application professionnelle.

**Bases de données relationnelles**
PostgreSQL principalement. Au-delà du SQL basique, j'ai appris l'optimisation des requêtes, la conception de schémas, l'analyse des plans d'exécution.

**DevOps et CI/CD**
GitLab CI, Docker, déploiement sur serveurs Linux. La chaîne complète du code au déploiement.

**Architecture logicielle**
Patterns de conception, architecture hexagonale, microservices vs monolithe. Je comprends maintenant les compromis et quand utiliser quoi.

**Qualité logicielle**
Tests unitaires, tests d'intégration, analyse statique. La qualité n'est pas une option.

### Compétences transverses développées

**Communication avec des interlocuteurs variés**
Chercheurs, administratifs, techniciens, managers. Chacun a son vocabulaire, ses préoccupations, son niveau technique. Adapter son discours est essentiel.

**Gestion de projet et priorisation**
Avec des ressources limitées (mon temps est partagé avec l'école), il faut savoir dire non, négocier les délais, livrer le plus important d'abord.

**Autonomie et prise d'initiative**
Personne ne va me dire exactement quoi faire à chaque instant. Il faut identifier les problèmes, proposer des solutions, avancer sans supervision constante.

**Documentation et transmission**
Quand je suis à l'école, mes collègues doivent pouvoir reprendre mon travail. Documenter devient naturel.

### Vision professionnelle élargie

L'alternance m'a montré la réalité du travail en entreprise, bien différente des projets scolaires :

**Les compromis sont constants**
Le temps est limité, le budget aussi. On ne peut pas toujours faire les choses "bien". Il faut choisir ses batailles.

**La maintenance domine**
La majorité du travail n'est pas de créer du neuf mais de maintenir l'existant. Aimer ça (ou au moins l'accepter) est nécessaire.

**Les personnes comptent autant que le code**
Les meilleures solutions techniques échouent si elles ne sont pas adoptées par les utilisateurs. La dimension humaine est centrale.

**Le long terme existe**
Contrairement aux projets scolaires qui s'arrêtent à la soutenance, le code en entreprise vit des années. Les décisions d'aujourd'hui ont des conséquences lointaines.

## Les défis de l'alternance

### Jongler entre deux mondes

Le rythme d'alternance (2 semaines école / 2 semaines entreprise dans mon cas) impose une gymnastique mentale constante.

À chaque retour en entreprise :
- Se remettre dans le contexte des projets
- Rattraper ce qui s'est passé pendant l'absence
- Être productif rapidement

À chaque retour à l'école :
- Lâcher prise sur les projets professionnels en cours
- Se reconcentrer sur les cours et examens
- Résister à la tentation de travailler le soir pour l'entreprise

J'ai développé des stratégies :
- **Notes détaillées** avant chaque départ : où j'en suis, ce qu'il reste à faire
- **Tâches découpées** en morceaux réalisables sur une période
- **Communication régulière** avec l'équipe même pendant les périodes école

### Gérer la fatigue

L'alternance est exigeante. Combiner études et travail, avec les déplacements associés, peut être épuisant. J'ai appris à :
- Protéger mes week-ends autant que possible
- Dire non aux engagements non essentiels
- Reconnaître les signes de surmenage

### Accepter l'incomplétude

Face à des systèmes complexes et un historique de plusieurs années, il est impossible de tout comprendre immédiatement. Les premières semaines, cette ignorance peut être frustrante.

J'ai appris à être efficace malgré une connaissance partielle :
- Identifier ce qui est nécessaire pour la tâche en cours
- Savoir où chercher l'information quand on en a besoin
- Accepter les zones d'ombre temporaires

## Conseils aux futurs alternants

Fort de cette expérience, voici ce que je conseillerais à ceux qui s'apprêtent à commencer une alternance :

### Avant de commencer

**Choisissez bien votre entreprise**
L'alternance est longue (2 ans dans mon cas). Autant que le poste soit intéressant et l'environnement agréable. Renseignez-vous, posez des questions en entretien.

**Clarifiez les attentes**
Quels projets ? Quel niveau d'autonomie ? Quel accompagnement ? Plus c'est clair au départ, moins il y aura de déceptions.

### Pendant l'alternance

**Soyez proactif**
N'attendez pas qu'on vous donne du travail. Proposez des améliorations, posez des questions, montrez votre intérêt. L'alternant qui attend dans son coin ne progressera pas.

**Documentez votre travail**
Pour vous (reprendre après une absence) et pour les autres (continuité). Cela facilite la vie de tous et valorise votre contribution.

**Construisez un réseau**
Les collègues que vous côtoyez sont une ressource précieuse. Ils peuvent devenir des références professionnelles, des contacts pour la suite, voire des amis.

**Demandez du feedback**
Comment je m'en sors ? Qu'est-ce que je pourrais améliorer ? Le feedback régulier est plus utile que l'évaluation annuelle.

**Prenez du recul**
L'alternance est aussi un moment d'observation. Notez ce qui fonctionne bien dans l'organisation, ce qui pourrait être amélioré, les pratiques que vous voudriez reproduire ou éviter dans votre future carrière.

### Pour la fin

**Préparez la transition**
Documentez ce que vous laissez, formez vos successeurs si possible, remerciez ceux qui vous ont aidé.

**Gardez le contact**
Le monde professionnel est petit. Les relations construites pendant l'alternance peuvent se révéler précieuses des années plus tard.

## Et après ?

Mon alternance au Synchrotron SOLEIL se termine, mais elle a façonné ma vision professionnelle.

### Ce que je recherche maintenant

- **Des projets techniques stimulants** où je peux continuer à apprendre
- **Un environnement bienveillant** où l'erreur est permise
- **Un impact concret** : voir mon travail utilisé et utile
- **Un équilibre** entre vie professionnelle et personnelle

### Ce que j'éviterai

- Les environnements où la qualité est sacrifiée systématiquement pour la vitesse
- Les postes sans autonomie où on exécute sans comprendre
- Les cultures toxiques où la compétition prime sur la collaboration

L'alternance m'a donné suffisamment d'expérience pour savoir ce que je veux et ce que je ne veux pas.

## Conclusion

Mon alternance au Synchrotron SOLEIL restera une étape fondatrice de ma carrière. Elle m'a donné une expérience concrète sur des projets réels, des compétences techniques valorisables, et surtout une meilleure compréhension de ce que signifie être développeur au quotidien.

L'environnement de recherche scientifique, avec ses exigences de rigueur et sa culture de partage, a été un cadre d'apprentissage idéal. Les projets sur lesquels j'ai travaillé, SUN Auto et TAP en tête, m'ont permis de contribuer de manière tangible tout en développant mes compétences.

À ceux qui hésitent sur l'alternance : c'est un format exigeant mais extrêmement formateur. Le temps investi, les sacrifices parfois nécessaires, sont largement rentabilisés par l'expérience acquise et les portes qu'elle ouvre.

Merci au Synchrotron SOLEIL, à mon tuteur et à toute l'équipe pour ces deux années.
