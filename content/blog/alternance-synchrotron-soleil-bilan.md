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

Le service informatique où j'ai travaillé, le groupe **ISG (Infrastructure des Systèmes de Gestion)**, supporte l'ensemble des besoins numériques de l'installation :

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

### SUN Auto : d'un échec assumé à une suite de tests fiable

Mon premier projet d'envergure, et pas le plus glorieux au départ. Ma première suite de tests, écrite en Selenium/Java pendant mon stage, reposait sur une base fragile. Un hackathon proposé par mon maître d'apprentissage nous a permis de repartir sur Playwright, Cucumber (BDD) et Allure pour fiabiliser SUNset, l'application de gestion des demandes de temps de faisceau.

**Ce que j'ai appris :**
- Savoir jeter son propre code quand la fondation est mauvaise, plutôt que d'empiler du code par-dessus.
- Écrire un test, c'est d'abord formaliser une règle métier qui n'était écrite nulle part.
- Un rapport de test n'est pas un verdict binaire : sans les vidéos d'exécution, les faux positifs auraient sapé la confiance de l'équipe dans l'outil.

Ce projet m'a donné une vision plus mature du développement logiciel.

### Étude de faisabilité SUNset : chercher avant de construire

Le projet le plus formateur sur le plan méthodologique. On m'a confié une question, pas un cahier des charges : SUNset doit-il évoluer techniquement, et vers quoi ?

**Démarche suivie :**
- Chercher d'abord si d'autres synchrotrons avaient déjà résolu le même problème, plutôt que d'envisager une réécriture
- Déployer réellement une instance de test d'un candidat open source (DUO ESS) plutôt que de se limiter à sa documentation
- Cartographier les fonctionnalités de SUNset et rejouer le workflow complet dans chaque solution candidate

**Impact concret :**
L'étude n'a pas débouché sur un feu vert automatique pour tout reconstruire — et c'est précisément ce qui en fait, à mes yeux, un livrable utile plutôt qu'un exercice de style.

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

### Compétences techniques approfondies

**Tests automatisés et BDD**
Playwright, Cucumber (Gherkin), Allure. Je sais maintenant construire une suite de tests end-to-end lisible par des non-développeurs, pas seulement l'écrire pour moi-même.

**CI/CD**
GitLab CI, intégration de la suite de tests dans un pipeline de livraison continue.

**Aide à la décision technique**
Comparer des solutions sur des critères de long terme (pérennité, dépendance, coût total) plutôt que sur une préférence personnelle — c'est la compétence la plus inattendue que cette alternance m'ait apportée.

**Qualité logicielle**
Tests end-to-end, lecture critique des rapports d'exécution, distinction entre vrai bug et faux positif.

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
