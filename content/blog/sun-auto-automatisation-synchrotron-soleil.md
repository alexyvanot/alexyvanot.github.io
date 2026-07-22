---
title: "SUN Auto : d'un échec sur Selenium à une suite de tests BDD pour SUNset"
slug: sun-auto-automatisation-synchrotron-soleil
published: true
excerpt: "Comment ma première tentative de tests automatisés, construite sur une base fragile, a été jetée après un hackathon pour repartir sur Playwright, Cucumber et Allure. L'histoire d'un pivot technique assumé, au Synchrotron SOLEIL."
author: Alexy VANOT
publishedAt: 2025-06-10
tags:
  - projet-entreprise
  - tests-automatises
  - synchrotron-soleil
  - playwright
  - bdd
logo: NodeJS
readingTime: 12
color: "#1E3A5F"
---

::toc

# SUN Auto : d'un échec sur Selenium à une suite de tests BDD pour SUNset

Au Synchrotron SOLEIL, **SUNset** est l'application par laquelle les scientifiques du monde entier déposent leurs demandes de temps de faisceau. C'est un logiciel critique : il couvre un workflow complet, de la candidature au rapport d'expérience, réparti en cinq parcours différents selon le type de demande, avec jusqu'à seize étapes chacun. Vérifier tout ça à la main à chaque livraison, c'est long, incomplet, et risqué : un correctif peut casser silencieusement quelque chose qui marchait avant.

C'est ce problème que SUN Auto devait résoudre. Son histoire n'a pas été linéaire, et c'est précisément ce qui la rend intéressante à raconter.

## Une première version fragile

Pendant mon stage, j'ai construit une première suite de tests avec **Selenium** en Java. Elle fonctionnait. Mais j'apprenais sur le tas, et la base n'était pas solide : Selenium oblige à assembler soi-même beaucoup de briques séparées — gestion des attentes, des captures d'écran, du cycle de vie du navigateur — et à croiser en permanence plusieurs documentations pour le moindre besoin nouveau.

Avec le recul, le diagnostic est clair : **je n'avais pas un problème de code, j'avais un problème de choix de fondation**. Et un mauvais choix de fondation ne se corrige pas en empilant du code par-dessus.

## Le hackathon qui a tout changé

Mon maître d'apprentissage, **Idrissou CHADO**, a proposé un hackathon à l'équipe. C'est ce qui nous a permis de repartir sur une base saine plutôt que de continuer à rafistoler l'existant. J'ai accepté de jeter mon propre travail — ce n'est jamais confortable, mais un ingénieur qui ne sait pas abandonner son propre code coûte cher à son entreprise.

Le choix technique retenu : **Playwright**, avec **Cucumber** pour écrire les scénarios en langage BDD (Gherkin), et **Allure** pour les rapports, le tout en **Node.js**. Playwright embarque nativement ce que Selenium obligeait à assembler à la main : attente intelligente des éléments, captures d'écran, enregistrement vidéo de chaque exécution.

## Écrire les tests en langage presque naturel

Le principe du BDD, c'est de décrire un comportement attendu avant de l'implémenter, dans un langage lisible par des non-développeurs :

```gherkin
Fonctionnalité: Déclaration des participants à une expérience
  Scénario: Un champ obligatoire non rempli bloque la validation
    Étant donné qu'un chercheur consulte sa demande acceptée
    Quand il tente de valider la déclaration de participants
    Et qu'un champ obligatoire n'est pas renseigné
    Alors le système affiche une erreur explicite
    Et la validation est bloquée
```

*(Exemple simplifié, illustrant la structure réelle des scénarios sans reproduire le code interne.)*

C'est ce qui rend les tests utiles à quelqu'un qui ne code pas : un gestionnaire du User Office peut relire un scénario et dire « non, ce n'est pas comme ça que ça se passe ». Un bilan de preuve de concept, livré le **12 avril 2024**, a documenté honnêtement les forces et les limites de cette approche.

**Ce qui fonctionnait bien :**
- L'approche Gherkin facilite l'implication des équipes métier
- Des tests fonctionnels, de performance et d'intégration à l'échelle du navigateur
- Une intégration CI/CD compatible avec GitLab
- Une architecture respectant les principes SOLID

**Ce qui restait fragile :**
- Une dépendance au contenu textuel des balises HTML, corrigée depuis
- Un langage différent de celui de SUNset (JavaScript côté tests, Java côté application), sans impact fonctionnel direct mais à surveiller

Aujourd'hui, la suite compte **66 fichiers de scénarios**, couvrant les cinq parcours de SUNset.

## Ce que les tests attrapent réellement

Je ne vais pas prétendre que SUN Auto détecte des failles de sécurité critiques. L'essentiel de ce qu'il attrape, ce sont des problèmes de **performance et d'accessibilité fonctionnelle** : une page qui ne finit jamais de charger, un bouton peu accessible, un champ obligatoire bloquant que rien ne signale avant la soumission. Ce sont des bugs discrets, qui ne font tomber aucun serveur, mais qui font recharger, recliquer et recommencer des utilisateurs pendant des mois si personne ne les remarque.

## Les faux positifs : l'honnêteté d'un outil

Un rapport de test automatisé n'est pas toujours juste. L'environnement de test n'étant pas totalement isolé de l'usage manuel, une manipulation en parallèle peut faire échouer un scénario à tort — et inversement. La règle qu'on a fini par poser : laisser le champ libre aux tests pendant leur exécution.

Ce que change la vidéo enregistrée par Allure : au lieu de subir un résultat binaire, on peut **regarder ce qui s'est réellement passé** et justifier soi-même un faux positif, plutôt que de perdre confiance dans l'outil au premier résultat douteux.

Sur les scénarios les plus complexes — en particulier la lecture de tableaux HTML sur l'écran de planification — j'étais bloqué depuis plusieurs jours sur une logique de sélection. Ma collègue **Yamna TAYEB** a proposé une approche bien plus simple qui a tout débloqué en une conversation. J'ai compris après coup pourquoi je n'y arrivais pas : je cherchais une solution compliquée à un problème qui en avait une simple.

## Ce que j'ai appris

**Savoir jeter son propre code.** La première version n'était pas un échec à cacher, c'était une étape nécessaire pour comprendre ce qui ne fonctionnait pas.

**Un test, c'est d'abord une spécification.** Écrire un scénario m'a obligé à formaliser des règles métier qui n'étaient écrites nulle part avant ça.

**Demander de l'aide fait gagner du temps, pas en perdre.** J'ai mis plusieurs jours à comprendre ce qu'une conversation de dix minutes avec Yamna a résolu.

**Un rapport de test n'est pas un verdict.** Sans les vidéos d'exécution, chaque faux positif aurait sapé un peu plus la confiance de l'équipe dans l'outil.

## Conclusion

SUN Auto n'est pas une plateforme spectaculaire. C'est une suite de tests qui fiabilise, discrètement, un logiciel dont dépendent des centaines de campagnes scientifiques chaque année. Ce que j'en retiens dépasse la technique : accepter d'avoir eu tort sur un choix de fondation, et le corriger, compte davantage que de défendre un premier jet imparfait.
