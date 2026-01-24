---
name: Svelte
slug: svelte
published: true
category: framework
color: orange
logo: Svelte
---

::toc

# Svelte & SvelteKit : le renouveau du développement frontend

## :i[pin] Définition et contexte professionnel

**Svelte** est un framework frontend créé par Rich Harris en 2016, qui se distingue radicalement de ses concurrents (React, Vue, Angular) par son approche **"compile-time"**. Là où React manipule un Virtual DOM à l'exécution, Svelte compile les composants en JavaScript vanilla optimisé lors du build. Résultat : des bundles plus légers et des performances supérieures.

**SvelteKit**, sorti en 2022, est le framework full-stack officiel de Svelte. Il offre :

- **Server-Side Rendering (SSR)** : pages pré-rendues pour le SEO
- **Static Site Generation (SSG)** : sites statiques ultra-performants
- **API Routes** : endpoints backend intégrés
- **File-based routing** : structure de fichiers = structure de routes

En 2024, Svelte a franchi un cap majeur avec la sortie de **Svelte 5** et son nouveau système de réactivité basé sur les **Runes** ($state, $derived, $effect). Cette refonte rapproche Svelte des patterns modernes tout en conservant sa simplicité signature.

Dans le paysage frontend actuel, Svelte gagne du terrain face à React. Les enquêtes développeurs (State of JS 2024) le placent régulièrement en tête de satisfaction. Des entreprises comme **Apple**, **Spotify**, **The New York Times** et **IKEA** l'utilisent en production.

Pour mes projets personnels et ce portfolio, Svelte est devenu mon **framework frontend de prédilection**. Sa courbe d'apprentissage douce, sa syntaxe proche du HTML/CSS/JS natif et ses performances exceptionnelles en font un choix idéal pour des applications web modernes.

---

## :i[search] Mes réalisations concrètes

### Ce portfolio : vitrine de mes compétences

Le site que vous consultez actuellement est lui-même une démonstration de ma maîtrise de Svelte et SvelteKit.

**Le défi** : créer un portfolio professionnel qui soit à la fois performant, maintenable et riche en fonctionnalités (blog, projets, compétences, animations).

**Ma contribution** :
- Architecture **SvelteKit** avec génération statique (adapter-static)
- Système de **chargement de contenu Markdown** avec frontmatter YAML
- Composants réutilisables : `MarkdownAnimated`, `ProfileCard`, `ValueGrid`, `Tags` avec animations
- **Syntaxe Markdown personnalisée** : `:::values-grid`, `:::buttons`, `:::tags` avec parsing custom
- Intégration **Tailwind CSS** et **UnoCSS** pour le styling
- **Mode sombre/clair** avec persistance localStorage
- **Animations fluides** avec Svelte transitions et CSS
- Déploiement automatique via **GitHub Pages**

**Résultat** : score Lighthouse de **98/100** en performance, temps de chargement initial < 1.5s, expérience utilisateur fluide sur mobile comme desktop.

→ [Voir le code source sur GitHub](https://github.com/alexyvanot/alexyvanot.github.io)

### Quiz AI : intégration IA avec SvelteKit

**Quiz AI** génère des quiz interactifs à partir de n'importe quel texte grâce à l'intelligence artificielle.

**Le défi** : créer une application full-stack avec frontend réactif, backend API et intégration de modèles LLM, le tout déployable facilement.

**Ma contribution** :
- Frontend **SvelteKit 5** avec les nouvelles Runes ($state, $derived)
- Interface utilisateur inspirée de Discord avec **Tailwind CSS**
- Communication temps réel avec le backend via fetch et gestion d'états
- **Stores Svelte** pour la gestion globale de l'état (quiz en cours, scores)
- Composants réactifs : formulaire de configuration, player de quiz, écran de résultats
- Responsive design et thème sombre natif

**Résultat** : application fonctionnelle permettant de générer et jouer des quiz en moins de 30 secondes, avec une interface moderne et intuitive.

→ [Voir le projet Quiz AI](/projects/quiz-ai)

### Svelte Static Blog : premiers pas avec Svelte

Mon **premier projet Svelte**, un générateur de blog statique minimaliste.

**Le défi** : apprendre Svelte en construisant un outil concret, tout en explorant les capacités de SvelteKit pour la génération de sites statiques.

**Ma contribution** :
- Configuration complète de **SvelteKit avec adapter-static**
- Système de parsing **Markdown** avec mdsvex
- Routing dynamique pour les articles (`/posts/[slug]`)
- **Hot reload** en développement pour une DX optimale
- Pipeline **GitHub Actions** pour le déploiement automatique

**Résultat** : blog fonctionnel déployé sur GitHub Pages, servant de base à l'architecture de ce portfolio.

→ [Voir le projet Svelte Blog](/projects/svelte-blog)

---

## :i[meter] Autocritique et positionnement

### Niveau de maîtrise

Je situe ma compétence Svelte/SvelteKit à un **niveau avancé** :

:::chart{type=radar title="Maîtrise Svelte" size=280}
Composants: 100
SvelteKit: 80
Runes: 80
Stores: 80
Animations: 80
API routes: 60
Tests: 60
:::

| Domaine | Niveau |
|---------|--------|
| Composants et réactivité | ::stars[5/5] Expert |
| SvelteKit (routing, SSR, SSG) | ::stars[4/5] Avancé |
| Svelte 5 Runes | ::stars[4/5] Avancé |
| Stores et gestion d'état | ::stars[4/5] Avancé |
| Animations et transitions | ::stars[4/5] Avancé |
| SvelteKit API routes | ::stars[3/5] Intermédiaire |
| Tests (Playwright, Vitest) | ::stars[3/5] Intermédiaire |

### Marge de progression

Mes axes d'amélioration identifiés :

- **Tests end-to-end** : intégrer systématiquement Playwright dans mes projets
- **Server actions** : les form actions SvelteKit pour moins de JavaScript côté client
- **Accessibilité (a11y)** : Svelte facilite l'accessibilité, mais je dois approfondir les bonnes pratiques
- **Svelte Native** : explorer le développement mobile avec Svelte

### Contextualisation

Ma compétence Svelte fonctionne particulièrement bien pour :
- **Sites vitrines et portfolios** : performance et SEO optimaux
- **Applications web interactives** : réactivité native sans boilerplate
- **Prototypes rapides** : syntaxe concise, moins de code que React

En revanche, pour des applications très complexes avec beaucoup d'équipes, l'écosystème React (plus mature, plus de développeurs disponibles) reste parfois préférable en entreprise.

### Place dans mon profil

Svelte est devenu **le pilier de mon expertise frontend**. Combiné à mon backend Java/Spring et mes compétences Python/IA, il complète un profil full-stack moderne. Je l'utilise pour :
- Tous mes projets personnels web
- Les PoC frontend au travail (quand le choix de techno est libre)
- Ce portfolio, ma carte de visite professionnelle

### Vitesse d'acquisition

Mon apprentissage de Svelte a été **remarquablement rapide** (mi-2025). Venant de Vue.js et ayant des bases solides en HTML/CSS/JS, j'ai pu être productif en **moins de 2 semaines**. La documentation officielle, excellente, et le tutoriel interactif de Svelte ont été mes principales ressources.

La transition vers Svelte 5 et les Runes s'est faite naturellement grâce à la rétrocompatibilité et les guides de migration.

### Conseils tirés de mon expérience

> *"Si vous connaissez HTML, CSS et JavaScript, vous connaissez déjà 80% de Svelte. Le reste s'apprend en construisant."*

Mes recommandations :
- **Commencer par le tutoriel officiel** : [learn.svelte.dev](https://learn.svelte.dev) est le meilleur point d'entrée
- **Passer rapidement à SvelteKit** : même pour des projets simples, la structure imposée facilite la maintenance
- **Adopter Svelte 5 directement** : les Runes sont l'avenir, autant les apprendre maintenant
- **Explorer les transitions natives** : Svelte excelle dans les animations, ne pas s'en priver
- **Utiliser les stores avec parcimonie** : la réactivité composant suffit souvent

---

## :i[growth] Évolution et perspectives

### Mon objectif à moyen terme

D'ici 2 ans, je vise à devenir **référent Svelte** dans mon environnement professionnel, capable de :
- Architecturer des applications SvelteKit complexes
- Former des collègues à la migration depuis React/Vue
- Contribuer à l'écosystème (packages npm, articles techniques)

### Formations en cours et à venir

| Formation | Statut | Objectif |
|-----------|--------|----------|
| Svelte 5 deep dive | En cours (autoformation) | Maîtriser toutes les Runes |
| Testing avec Playwright | Prévu 2026 | Tests E2E systématiques |
| Svelte Summit (conférence) | Suivi en replay | Veille sur les nouveautés |

### Veille technologique

Je suis activement :
- Le blog officiel Svelte et les RFC
- Rich Harris sur Twitter/X pour les annonces
- La chaîne YouTube de Fireship pour les comparatifs frameworks
- Le Discord Svelte francophone pour les discussions communautaires
- Les releases SvelteKit sur GitHub
- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.
- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.

## Example

```ts
<script>
    let count = 1;
    $: doubled = count * 2;
</script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>
```

> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.
