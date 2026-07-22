---
title: "Faut-il réécrire SUNset ? Une étude de faisabilité dans l'open source scientifique"
slug: tap-plateforme-tests-automatises-allure
published: true
excerpt: "On m'a confié une question, pas un cahier des charges : SUNset doit-il évoluer, et vers quoi ? Le récit d'une étude qui a commencé par chercher si d'autres synchrotrons avaient déjà résolu le problème, avant de comparer la moindre ligne de code."
author: Alexy VANOT
publishedAt: 2025-05-28
tags:
  - projet-entreprise
  - architecture
  - open-source
  - synchrotron-soleil
  - aide-a-la-decision
logo: React
readingTime: 11
color: "#00B8A9"
pinned: true
---

::toc

# Faut-il réécrire SUNset ? Une étude de faisabilité dans l'open source scientifique

**SUNset** existe en deux générations au Synchrotron SOLEIL : une première version en PHP, aujourd'hui largement abandonnée mais dont certains scripts tournent encore, et une version Java, celle qui porte le service aujourd'hui. La question qu'on m'a confiée n'était pas de coder, mais de trancher — ou plutôt d'éclairer une décision : cette technologie doit-elle évoluer, et si oui, vers quoi ?

## Le réflexe qu'il fallait éviter

Dans notre métier, la réponse par défaut à ce genre de question est presque toujours la même : on réécrit. C'est aussi, presque toujours, la réponse la plus coûteuse et la plus risquée. Avant de m'y engager, je me suis posé une autre question, plus simple : **tous les synchrotrons du monde ont exactement le même besoin** — recevoir des demandes de temps de faisceau, les faire évaluer par des pairs, valider la sécurité, planifier les expériences. Est-ce que quelqu'un avait déjà résolu ce problème, et publié sa solution ?

## Chercher dans l'open source scientifique

J'ai cherché du côté des autres grands instruments de recherche. Deux solutions se sont dégagées :

- **DUO ESS**, développé par l'European Spallation Source en Suède, en React.js
- **USO** (User System Online), du synchrotron canadien

Je ne me suis pas arrêté à la documentation. Nous avons **déployé une instance de test de DUO ESS en interne** et l'avons réellement utilisée : gestion des propositions, des appels à candidature, des personnes, des instruments, des comités d'évaluation.

## Cartographier avant de comparer

Ma méthode a consisté à lister exhaustivement les fonctionnalités de SUNset, puis à rejouer le workflow complet dans chaque solution candidate, fonction par fonction, pour vérifier ce qui était directement reproductible et ce qui ne l'était pas.

Le résultat comportait des nuances réelles : tout ne se transposait pas directement. Nos parcours de demande spécifiques, nos règles de sécurité et certains types particuliers de proposition n'avaient pas d'équivalent immédiat ailleurs. C'est vers **USO** que l'analyse s'est finalement orientée, en discussion avec mon maître d'apprentissage, Idrissou CHADO.

## Ce que ça change de raisonner en criteres de long terme

Comparer des solutions sur ce qu'elles savent faire aujourd'hui ne suffit pas. Les critères qui comptent vraiment pour un logiciel qui doit vivre quinze ou vingt ans :

**La pérennité.** Cette solution sera-t-elle encore maintenue dans dix ans ? Quelle est sa communauté, sa gouvernance ?

**La dépendance.** Qui contrôle cette brique ? Un éditeur unique peut changer ses conditions du jour au lendemain ; un projet porté par plusieurs institutions de recherche publique offre plus de garanties.

**Le coût total.** Pas seulement le coût de développement initial, mais la maintenance, les montées de version, la formation — sur toute la durée de vie du logiciel.

## Ne pas construire est aussi un livrable

Le résultat d'une étude de faisabilité n'est pas obligatoirement un feu vert pour tout réécrire. Dans la recherche publique, il y a une raison de plus de ne pas repartir de zéro : ce serait faire financer deux fois, par de l'argent public, une fonctionnalité qui existe déjà ailleurs. Chercher avant de construire, ce n'est pas seulement une économie de ressources — c'est aussi une forme de coopération scientifique entre instituts.

## Ce que j'en retiens

Passer de « quelle technologie je préfère » à « quelle technologie sert le besoin dans quinze ans », c'est je crois le vrai saut entre un développeur et un ingénieur. Et une humilité nécessaire est venue avec : la décision finale ne m'appartenait pas. Mon rôle était de la rendre éclairée, pas de la prendre à ma place.

## Conclusion

Cette étude m'a appris qu'un ingénieur ne se mesure pas seulement à ce qu'il sait construire, mais aussi à sa capacité à recommander de ne pas construire quand ça n'est pas nécessaire. Sur une infrastructure de recherche publique, où chaque euro et chaque heure de développement doivent être justifiés, c'est une compétence au moins aussi précieuse que de savoir écrire du code.
