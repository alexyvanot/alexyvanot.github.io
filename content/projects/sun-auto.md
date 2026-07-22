---
name: SUN Auto - Automatisation des tests de SUNset
slug: sun-auto
category: technique
type: Quality Assurance & Automatisation de tests
color: "#1E3A5F"
published: true
pinned: true
logo: https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg
period:
  from: 2023-09-01
skills:
  - playwright
  - cucumber
  - nodejs
  - selenium
  - gitlab
team:
  - name: Alexy VANOT
    role: Développeur
  - name: Idrissou CHADO
    role: Maître d'apprentissage
  - name: Yamna TAYEB
    role: Collègue - support technique
---

::toc

## Mon regard critique

> Ce projet a commencé par un échec que j'assume : ma première version, écrite pendant mon stage, reposait sur une base fragile. Ma vraie valeur ajoutée n'a pas été d'écrire du code, mais d'accepter de **jeter mon propre travail** pour repartir sur des fondations saines après un hackathon proposé par mon maître d'apprentissage.

**Mes apports principaux :**
- Avoir su reconnaître qu'un problème de code cachait en réalité un problème de choix technique
- L'écriture de 66 scénarios de test en BDD (Gherkin), couvrant les 5 parcours de demande de temps de faisceau
- Une lecture honnête des faux positifs : les distinguer d'un vrai bug grâce aux rapports vidéo

**Ce que j'en retire :** Écrire un test, c'est d'abord formaliser ce qu'on attend d'une application. J'ai découvert que beaucoup de règles métier n'étaient écrites nulle part avant ça — elles vivaient dans la tête de mes collègues.

---

## Présentation du projet

**SUN Auto** est la suite de tests automatisés que j'ai développée au **Synchrotron SOLEIL** pour fiabiliser **SUNset**, l'application par laquelle les scientifiques du monde entier déposent leurs demandes de temps de faisceau.

SUNset couvre un workflow complet et critique : candidature, évaluation technique, évaluation scientifique par les pairs, validation sécurité, décision, planification du faisceau, déclaration des participants, rapport d'expérience — jusqu'à **16 étapes**, réparties en **5 parcours** différents selon le type de demande (standard, BAG, BAG hors mixte, NPRC, accès rapide).

Avant SUN Auto, valider ce workflow à chaque livraison se faisait à la main. C'est long, ça ne couvre jamais tout, et le risque de régression — casser sans le savoir quelque chose qui marchait — reste entier.

---

## Un premier échec assumé

Pendant mon stage, j'ai construit une première version avec **Selenium et Java**. Elle fonctionnait, mais sur une base fragile : Selenium oblige à assembler beaucoup de briques séparées et à croiser plusieurs documentations pour chaque nouveau besoin. Le problème n'était pas mon code, c'était le choix de fondation — et un mauvais choix de fondation ne se corrige pas en ajoutant du code par-dessus.

Mon maître d'apprentissage, **Idrissou CHADO**, a proposé un **hackathon** à l'équipe. C'est ce qui nous a permis de repartir sur une base saine plutôt que de continuer à rafistoler l'existant.

## Le pivot technique

Nous avons choisi **Playwright**, avec **Cucumber** pour écrire les scénarios en BDD (Gherkin) et **Allure** pour les rapports, le tout en **Node.js**. Playwright embarque nativement ce que Selenium obligeait à assembler : attente intelligente des éléments, captures d'écran, enregistrement vidéo.

Un **PoC** a été livré le **12 avril 2024** et formalisé dans un bilan écrit, avec ses points forts et ses points faibles assumés :

**Points forts**
- L'approche Gherkin en BDD facilite l'implication des équipes métier dans la lecture des tests
- Tests fonctionnels, de performance et d'intégration à l'échelle du navigateur
- CI/CD compatible avec GitLab
- Architecture respectant les principes SOLID, favorisant la modularité et la maintenabilité
- Mise en forme automatique des rapports de test

**Points faibles**
- Une dépendance au contenu textuel des balises HTML, qui rend les tests fragiles au moindre changement de libellé — un point résolu depuis la version 8.1.1
- Un langage différent de celui de SUNset (Java côté application, JavaScript côté tests), sans impact fonctionnel direct mais à surveiller pour la cohérence à long terme

À l'échelle réelle, la suite compte **66 fichiers de scénarios**, répartis sur les 5 parcours de SUNset.

---

## Ce que les tests attrapent vraiment

Les bugs interceptés relèvent surtout de la **performance et de l'accessibilité fonctionnelle** : des pages qui ne finissent jamais de charger, des boutons peu accessibles, ou des champs obligatoires bloquants qui ne sont pas signalés clairement à l'utilisateur — par exemple une déclaration de participant impossible à valider tant qu'un champ de financement n'est pas rempli, sans que l'erreur soit visible avant la soumission.

Ce sont des bugs discrets, qui ne font tomber aucun serveur, mais qui font recharger, recliquer et recommencer des utilisateurs pendant des mois si personne ne les attrape.

## Les faux positifs, une honnêteté d'outil

Un rapport de test automatisé n'est pas toujours juste. L'environnement de test n'étant pas totalement isolé, une manipulation manuelle en parallèle peut faire échouer un scénario à tort — ou l'inverse. La règle qu'on a posée : laisser le champ libre aux tests pendant leur exécution.

Ce que la vidéo enregistrée par Allure change concrètement : au lieu de subir un résultat binaire (réussi / échoué), on peut **regarder ce qui s'est passé** et justifier soi-même un faux positif plutôt que de perdre confiance dans l'outil.

Sur les scénarios les plus complexes — en particulier la lecture de tableaux HTML sur l'écran de planification — j'ai été débloqué par **Yamna TAYEB**, qui a proposé une approche de sélection bien plus simple que celle que j'essayais de faire fonctionner depuis plusieurs jours.

---

## Aujourd'hui

La suite est maintenue et exécutée régulièrement en intégration continue sur GitLab, en amont des livraisons de SUNset. Elle sert de garde-fou avant la mise en production, pas de certification absolue : chaque échec est encore lu, pas seulement compté.

---

## Compétences mobilisées

Ce projet m'a permis de mobiliser et développer les compétences suivantes :

:::buttons
::button[Playwright]{link=/skills/playwright icon=i-logos-playwright}
::button[Cucumber]{link=/skills/cucumber icon=i-logos-cucumber}
::button[Node.js]{link=/skills/nodejs icon=i-logos-nodejs-icon}
:::
