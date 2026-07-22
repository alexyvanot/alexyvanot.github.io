---
name: Playwright
slug: playwright
published: true
category: test
color: green
logo: Playwright
---

::toc

# Playwright : l'automatisation de tests nouvelle génération

## :i[pin] Définition et contexte professionnel

**Playwright** est un framework d'automatisation de tests **end-to-end** développé par Microsoft, conçu pour tester les applications web modernes. Lancé en 2020, il s'est rapidement imposé comme le **successeur de Selenium** pour les tests automatisés.

Les avantages de Playwright dans l'industrie :

- **Multi-navigateurs** : Chromium, Firefox, WebKit avec une API unifiée
- **Auto-waiting** : attente automatique des éléments, fini les `sleep()`
- **Isolation** : contextes de navigateur isolés, parallélisation native
- **Debugging** : trace viewer, screenshots, vidéos intégrés
- **Modern web** : support natif des SPA, Shadow DOM, iframes

Playwright représente l'état de l'art du **testing E2E**, remplacant Selenium dans de nombreux projets.

---

## :i[search] Mes réalisations concrètes

### SUN Auto : le pivot depuis Selenium

Dans le cadre du projet **SUN Auto** au Synchrotron SOLEIL, j'ai adopté Playwright comme moteur d'exécution de tests E2E, après un hackathon d'équipe qui nous a fait abandonner notre première suite en Selenium/Java.

**Ma contribution** :
- Réécriture des scénarios de test de SUNset avec Playwright et Cucumber (BDD)
- Configuration du **reporting vers Allure**, avec vidéo d'exécution pour justifier les faux positifs
- Passage à l'échelle jusqu'à 66 scénarios couvrant les 5 parcours de SUNset

**Résultat** : une suite de tests bien plus maintenable, capable d'attraper des bugs de performance et d'accessibilité (chargements infinis, champs bloquants) que la version précédente ne détectait pas de manière fiable.

→ [Voir le projet SUN Auto](/projects/sun-auto)

### Tests de ce portfolio

Ce portfolio utilise Playwright pour les tests E2E, vérifiant que toutes les pages se chargent correctement et que la navigation fonctionne.

---

## :i[meter] Autocritique et positionnement

### Niveau de maîtrise

:::chart{type=radar title="Maîtrise Playwright" size=260}
API de base: 100
Configuration: 80
Page Object Model: 80
Debugging: 80
Tests API: 60
:::

| Domaine | Niveau |
|---------|--------|
| API de base (locators, actions) | ::stars[5/5] Expert |
| Configuration et setup | ::stars[4/5] Avancé |
| Page Object Model | ::stars[4/5] Avancé |
| Debugging (traces, screenshots) | ::stars[4/5] Avancé |
| Tests API | ::stars[3/5] Intermédiaire |

### Marge de progression

- **Tests visuels** : comparaison de screenshots, régression visuelle
- **Tests API** : utilisation de Playwright pour les tests d'API REST
- **Component testing** : tests de composants isolés

### Vitesse d'acquisition

Venant de Selenium, j'ai adopté Playwright **très rapidement** grâce à son API intuitive et sa documentation excellente. En quelques jours, j'étais plus productif qu'après des mois de Selenium.

### Place dans mon profil

Playwright est mon **outil principal** pour les tests E2E. Il complète parfaitement mon profil de développeur en y ajoutant une compétence QA indispensable.

### Conseils tirés de mon expérience

> *"Si vous faites encore du Selenium, migrez vers Playwright. L'expérience développeur est incomparable."*

- Utiliser les **locators semantiques** (`getByRole`, `getByText`) plutôt que CSS/XPath
- Activer le **trace viewer** pour déboguer les tests qui échouent
- Implémenter le **Page Object Model** dès le début

---

## :i[growth] Évolution et perspectives

### Objectif à moyen terme

Maîtriser les **tests visuels** et le **component testing** pour une couverture de tests complète.


