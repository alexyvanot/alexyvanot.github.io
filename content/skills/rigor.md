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

### 1. SUN Auto — Documenter honnêtement les limites de son propre travail

Sur le projet [SUN Auto](/projects/sun-auto), la rigueur ne s'est pas exprimée dans un score de couverture, mais dans la capacité à **documenter honnêtement les points faibles** de mon propre travail. Le bilan de preuve de concept que j'ai rédigé en avril 2024 listait explicitement ce qui ne fonctionnait pas encore (dépendance au texte des balises HTML, écart de langage avec l'application testée), plutôt que de présenter uniquement les points forts.

**Mon approche rigoureuse** :
- Écriture de scénarios de test structurés en BDD, suivant une convention stricte (Gherkin)
- Distinction systématique entre un vrai bug et un faux positif, appuyée sur les vidéos d'exécution Allure
- Respect d'une règle d'équipe simple mais non négociable : laisser le champ libre aux tests pendant leur exécution

### 2. Étude de faisabilité SUNset — Ne pas conclure trop vite

L'[étude de faisabilité SUNset](/projects/tap) exigeait une rigueur méthodologique plutôt que technique : ne pas se contenter d'une impression sur une solution candidate.

**Mes pratiques rigoureuses** :
- Cartographie exhaustive des fonctionnalités de SUNset avant toute comparaison
- Déploiement réel d'une instance de test plutôt qu'une évaluation sur documentation
- Rejeu du workflow complet, fonction par fonction, pour chaque solution candidate
- Restitution honnête des nuances trouvées, plutôt qu'une conclusion tranchée qui aurait simplifié le message

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
