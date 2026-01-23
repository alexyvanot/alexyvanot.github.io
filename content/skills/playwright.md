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

## 📌 Définition et contexte professionnel

**Playwright** est un framework d'automatisation de tests **end-to-end** développé par Microsoft, conçu pour tester les applications web modernes. Lancé en 2020, il s'est rapidement imposé comme le **successeur de Selenium** pour les tests automatisés.

Les avantages de Playwright dans l'industrie :

- **Multi-navigateurs** : Chromium, Firefox, WebKit avec une API unifiée
- **Auto-waiting** : attente automatique des éléments, fini les `sleep()`
- **Isolation** : contextes de navigateur isolés, parallélisation native
- **Debugging** : trace viewer, screenshots, vidéos intégrés
- **Modern web** : support natif des SPA, Shadow DOM, iframes

Playwright représente l'état de l'art du **testing E2E**, remplacant Selenium dans de nombreux projets.

---

## 🔍 Mes réalisations concrètes

### TAP : intégration dans la plateforme de tests

Dans le cadre du projet **TAP** au Synchrotron SOLEIL, j'ai intégré Playwright comme moteur d'exécution de tests E2E.

**Ma contribution** :
- Intégration de **Playwright dans Docker** pour exécution headless
- Configuration du **reporting vers Allure** pour la visualisation des résultats
- Écriture de tests pour les applications web internes du synchrotron
- Documentation des **bonnes pratiques** pour les équipes

**Résultat** : Playwright est devenu le standard recommandé pour les nouveaux tests E2E, remplaçant progressivement Selenium.

→ [Voir le projet TAP](/projects/tap)

### Tests de ce portfolio

Ce portfolio utilise Playwright pour les tests E2E, vérifiant que toutes les pages se chargent correctement et que la navigation fonctionne.

---

## 🎯 Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| API de base (locators, actions) | ★★★★★ Expert |
| Configuration et setup | ★★★★☆ Avancé |
| Page Object Model | ★★★★☆ Avancé |
| Debugging (traces, screenshots) | ★★★★☆ Avancé |
| Tests API | ★★★☆☆ Intermédiaire |

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

## 📈 Évolution et perspectives

### Objectif à moyen terme

Maîtriser les **tests visuels** et le **component testing** pour une couverture de tests complète.


