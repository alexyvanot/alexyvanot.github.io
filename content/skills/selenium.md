---
name: Selenium
slug: selenium
published: true
category: test
color: green
logo: Selenium
---

::toc

# Selenium : l'automatisation de tests historique

## 📌 Définition et contexte professionnel

**Selenium** est un framework d'automatisation de tests pour navigateurs web, créé en 2004. Pendant près de 20 ans, il a été **le standard de facto** pour les tests end-to-end, utilisé par des milliers d'entreprises.

L'importance historique de Selenium :

- **Standard W3C** : WebDriver est devenu un standard du web
- **Multi-langages** : Java, Python, JavaScript, C#, Ruby
- **Multi-navigateurs** : Chrome, Firefox, Safari, Edge
- **Écosystème mature** : Selenium Grid, Selenium IDE, nombreux frameworks
- **Base installée** : des millions de tests existants dans l'industrie

Aujourd'hui, Selenium est progressivement remplacé par des outils plus modernes (Playwright, Cypress), mais il reste très présent dans les **projets legacy**.

---

## 🔍 Mes réalisations concrètes

### TAP : support des tests Selenium existants

La plateforme **TAP** au Synchrotron SOLEIL gère de nombreux tests Selenium existants.

**Ma contribution** :
- Intégration de **Selenium Grid** dans l'infrastructure TAP
- Configuration des **drivers Chrome et Firefox** en mode headless
- Conversion progressive de tests Selenium vers **Playwright**
- Maintenance des tests legacy jusqu'à leur migration

**Résultat** : continuité de service pour les tests existants tout en migrant vers des technologies plus modernes.

→ [Voir le projet TAP](/projects/tap)

### Formation : apprentissage du testing E2E

J'ai appris les tests E2E avec Selenium avant de découvrir Playwright. Cette expérience m'a permis de comprendre les **difficultés** que les outils modernes cherchent à résoudre.

---

## 🎯 Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| WebDriver API | ★★★★☆ Avancé |
| Locators (CSS, XPath) | ★★★★☆ Avancé |
| Selenium Grid | ★★★☆☆ Intermédiaire |
| Waits explicites | ★★★★☆ Avancé |

### Contextualisation

Selenium fonctionne bien pour les applications web **classiques** mais souffre avec les **SPA modernes** (React, Vue, Angular). Les problèmes de **timing** et de **synchronisation** peuvent rendre les tests instables ("flaky tests").

### Place dans mon profil

Selenium est une compétence **historique** que je conserve pour la maintenance de tests legacy, mais je recommande et utilise **Playwright** pour tout nouveau projet.

### Conseils tirés de mon expérience

> *"Si vous maintenez des tests Selenium, planifiez une migration vers Playwright. L'investissement en vaut la peine."*

- **Toujours** utiliser des **waits explicites**, jamais `Thread.sleep()`
- Préférer les **ID et data-testid** aux XPath fragiles
- Considérer sérieusement la **migration vers Playwright**

---

## 📈 Évolution et perspectives

### Objectif à moyen terme

Aider à la **migration des tests Selenium vers Playwright** dans les projets que je rejoins.


