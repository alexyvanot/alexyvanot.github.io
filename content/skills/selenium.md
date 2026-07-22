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

## :i[pin] Définition et contexte professionnel

**Selenium** est un framework d'automatisation de tests pour navigateurs web, créé en 2004. Pendant près de 20 ans, il a été **le standard de facto** pour les tests end-to-end, utilisé par des milliers d'entreprises.

L'importance historique de Selenium :

- **Standard W3C** : WebDriver est devenu un standard du web
- **Multi-langages** : Java, Python, JavaScript, C#, Ruby
- **Multi-navigateurs** : Chrome, Firefox, Safari, Edge
- **Écosystème mature** : Selenium Grid, Selenium IDE, nombreux frameworks
- **Base installée** : des millions de tests existants dans l'industrie

Aujourd'hui, Selenium est progressivement remplacé par des outils plus modernes (Playwright, Cypress), mais il reste très présent dans les **projets legacy**.

---

## :i[search] Mes réalisations concrètes

### SUN Auto : la première version, et sa limite

Pendant mon stage au Synchrotron SOLEIL, j'ai construit la toute première suite de tests de [SUN Auto](/projects/sun-auto) avec **Selenium** en Java.

**Ce que j'en ai retenu** :
- Selenium fonctionnait, mais obligeait à assembler soi-même beaucoup de briques (attentes, captures, cycle de vie du navigateur)
- Chaque nouveau scénario coûtait cher à écrire, sur une base qui restait fragile
- Un hackathon d'équipe nous a fait migrer vers Playwright, plus adapté à l'échelle qu'a fini par prendre la suite (66 scénarios)

Cette expérience m'a permis de comprendre concrètement les **difficultés** que les outils modernes comme Playwright cherchent à résoudre — pas en théorie, mais en ayant buté dessus.

→ [Voir le projet SUN Auto](/projects/sun-auto)

---

## :i[meter] Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| WebDriver API | ::stars[4/5] Avancé |
| Locators (CSS, XPath) | ::stars[4/5] Avancé |
| Selenium Grid | ::stars[3/5] Intermédiaire |
| Waits explicites | ::stars[4/5] Avancé |

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

## :i[growth] Évolution et perspectives

### Objectif à moyen terme

Aider à la **migration des tests Selenium vers Playwright** dans les projets que je rejoins.


