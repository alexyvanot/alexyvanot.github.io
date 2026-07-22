---
name: Étude de faisabilité SUNset - Chercher avant de construire
slug: tap
category: technique
type: Architecture & Aide à la décision
color: "#00B8A9"
published: true
pinned: true
logo: https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactjs/reactjs-original.svg
period:
  from: 2024-01-01
skills:
  - reactjs
  - gitlab
team:
  - name: Alexy VANOT
    role: Chargé de l'étude
  - name: Idrissou CHADO
    role: Maître d'apprentissage
---

::toc

## Mon regard critique

> On m'a confié une question, pas un cahier des charges à coder : **faut-il faire évoluer SUNset, et vers quoi ?** Ma valeur ajoutée n'a pas été d'écrire une nouvelle application, mais de résister au réflexe le plus naturel de notre métier — celui de tout réécrire — pour chercher d'abord si quelqu'un d'autre avait déjà résolu ce problème.

**Mes apports principaux :**
- Une méthode : cartographier toutes les fonctionnalités de SUNset avant de comparer quoi que ce soit
- Le déploiement réel d'une instance de test d'une solution candidate, plutôt qu'une simple lecture de documentation
- Une conclusion honnête, nuancée, qui n'était pas un simple feu vert

**Ce que j'en retire :** Le livrable d'une étude de faisabilité n'est pas obligatoirement une recommandation de réécriture. Ne pas construire est aussi un livrable — souvent le plus économe, en temps comme en argent public.

---

## Présentation du projet

**SUNset**, l'application de gestion des demandes de temps de faisceau au Synchrotron SOLEIL, existe en deux générations : une première version en **PHP**, aujourd'hui largement abandonnée mais dont certains scripts tournent encore, et une version en **Java**, celle qui porte le service aujourd'hui.

La question qu'on m'a confiée : cette technologie doit-elle évoluer, et si oui vers quoi ? Mon mandat n'était pas d'écrire du code, mais d'**objectiver une décision**.

---

## Ma démarche : chercher avant de construire

Plutôt que de comparer des frameworks dans l'abstrait, je suis parti d'un constat simple : **tous les synchrotrons du monde ont le même besoin** — recevoir des demandes de temps de faisceau, les faire évaluer par des pairs, valider la sécurité, planifier. Est-ce que quelqu'un avait déjà résolu ce problème, et publié sa solution ?

J'ai donc cherché du côté de l'**open source scientifique**, chez d'autres grands instruments de recherche confrontés au même besoin de gestion des utilisateurs et des propositions d'expérience.

### Les deux candidats retenus

- **DUO ESS**, développé par l'European Spallation Source en Suède, en React.js
- **USO** (User System Online), du synchrotron canadien

Nous n'en sommes pas restés à la documentation : nous avons **déployé une instance de test de DUO ESS en interne** et l'avons réellement utilisée — gestion des propositions, des appels, des personnes, des instruments, des comités d'évaluation.

### La méthode

J'ai cartographié l'ensemble des fonctionnalités de SUNset, puis rejoué le workflow complet dans chaque solution candidate, fonction par fonction, pour vérifier ce qui était directement reproductible.

Le résultat comportait des **nuances** : tout ne se transposait pas directement — nos parcours de demande, nos règles de sécurité et nos types spécifiques de proposition n'ont pas d'équivalent immédiat ailleurs. C'est vers **USO** que l'analyse s'est finalement orientée, avec mon maître d'apprentissage.

---

## Ce que j'en retiens

Passer de « quelle technologie je préfère » à « quelle technologie sert le besoin dans quinze ans » est, je crois, le vrai saut entre un développeur et un ingénieur. Les critères que j'ai appris à intégrer dans cette réflexion : la **pérennité** d'une solution (sera-t-elle encore maintenue dans dix ans ?), la **dépendance** qu'elle crée (qui la contrôle ?), et le **coût total sur la durée de vie** plutôt que le seul coût de développement initial.

Et une humilité nécessaire : la décision finale ne m'appartenait pas. Mon rôle était de la rendre éclairée, pas de la prendre.

---

## Compétences mobilisées

Ce projet m'a permis de mobiliser et développer les compétences suivantes :

:::buttons
::button[React.js]{link=/skills/reactjs icon=i-logos-react}
::button[GitLab]{link=/skills/gitlab icon=i-logos-gitlab}
:::
