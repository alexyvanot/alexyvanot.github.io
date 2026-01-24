---
name: Rigueur
slug: rigor
published: true
category: soft
color: red
logo: Rigor
---

::toc

## Ma définition

La rigueur est l'attention méticuleuse portée à la qualité, à la précision et à la cohérence dans chaque aspect du travail. C'est la capacité à suivre des processus établis, à vérifier systématiquement son travail, et à maintenir des standards élevés même sous pression. En développement logiciel, cela se traduit par du **code propre, bien testé et documenté**.

Dans l'industrie tech, la rigueur est particulièrement valorisée car elle réduit la dette technique, facilite la maintenance du code, et minimise les bugs en production. Une étude de Stripe en 2023 estime que les développeurs passent en moyenne 42% de leur temps à corriger des erreurs évitables — la rigueur permet de réduire drastiquement ce chiffre.

---

## Mes éléments de preuve

### 1. SUN Auto — Architecture pensée pour la maintenabilité

Sur le projet [SUN Auto](/projects/sun-auto), j'ai appliqué une rigueur particulière dans l'architecture du code, sachant que la plateforme devrait être maintenue après mon départ du Synchrotron SOLEIL.

**Mon approche rigoureuse** :
- Respect strict des conventions de nommage et de structure Spring Boot
- Couverture de tests unitaires supérieure à 80% sur les composants critiques
- Documentation Javadoc exhaustive de chaque classe et méthode publique
- Revue de code systématique de mon propre code avant chaque commit
- Utilisation de SonarQube pour garantir la qualité du code

**Résultat** : Mon tuteur a souligné que le code était "d'une qualité rare pour un alternant" et qu'il pourrait être repris facilement par un autre développeur.

### 2. Plateforme TAP — Processus de tests standardisés

Le projet [TAP](/projects/tap) exigeait une rigueur absolue car il s'agissait d'une plateforme de tests automatisés — l'outil devait lui-même être irréprochable.

**Mes pratiques rigoureuses** :
- Définition de templates de tests suivant des conventions strictes
- Mise en place d'un processus de validation en plusieurs étapes
- Création de checklists de déploiement détaillées
- Versioning sémantique et changelogs exhaustifs
- Tests de non-régression systématiques avant chaque release

**Résultat** : La plateforme a permis de détecter 95% des bugs avant mise en production sur les projets où elle était utilisée.

### 3. Portfolio — Clean Code et bonnes pratiques

Même pour ce portfolio personnel, j'ai appliqué les mêmes standards de rigueur que pour un projet professionnel :

**Pratiques mises en œuvre** :
- Configuration TypeScript strict avec aucune erreur tolérée
- ESLint et Prettier pour garantir un style de code cohérent
- Tests de build automatisés via GitHub Actions
- Commits conventionnels (Conventional Commits) pour un historique lisible
- Séparation claire des responsabilités (composants, données, styles)

Cette rigueur personnelle démontre que mes standards de qualité ne sont pas uniquement motivés par une obligation professionnelle, mais par une **conviction personnelle**.

---

## Ce que cette compétence m'apporte

- **Confiance des équipes** : On me confie souvent les parties critiques des projets
- **Moins de stress en production** : Je dors tranquille après un déploiement
- **Code réutilisable** : Mes composants sont souvent repris par d'autres développeurs
- **Progression professionnelle** : La rigueur est un différenciateur dans les entretiens techniques

---

## Comment je continue à la développer

- Lecture régulière de "Clean Code" de Robert C. Martin et "The Pragmatic Programmer"
- Participation à des code reviews sur des projets open-source
- Certification en cours sur les méthodologies de test (ISTQB)
- Expérimentation avec le TDD (Test-Driven Development) sur mes projets personnels
