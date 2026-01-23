---
title: "Créer son portfolio avec SvelteKit : Pourquoi et comment"
slug: creer-portfolio-sveltekit
published: true
excerpt: "Retour d'expérience complet sur la création de ce portfolio avec SvelteKit. Architecture, choix techniques, système de contenu Markdown, composants UI, et toutes les leçons tirées de ce projet personnel."
author: Alexy VANOT
publishedAt: 2025-06-25
tags:
  - projet-personnel
  - sveltekit
  - portfolio
  - frontend
  - svelte
logo: Svelte
readingTime: 20
color: "#FF3E00"
pinned: true
---

# Créer son portfolio avec SvelteKit : Pourquoi et comment

Vous êtes sur ce portfolio. Il représente plusieurs semaines de travail intensif, de nombreuses itérations, et quelques nuits blanches. Ce n'est pas qu'une vitrine professionnelle : c'est un projet technique à part entière qui m'a permis d'explorer SvelteKit en profondeur. Voici l'histoire complète de sa création.

## Pourquoi un portfolio custom

### Les alternatives écartées

J'aurais pu utiliser une solution existante. Avant de me lancer dans le développement, j'ai évalué plusieurs options :

**LinkedIn**
Le profil LinkedIn est incontournable, mais il est limité : format rigide, personnalisation quasi nulle, noyé parmi des millions d'autres profils. Un recruteur passe quelques secondes sur un profil LinkedIn.

**GitHub Pages avec un template**
Des templates Jekyll ou Hugo existent, souvent de qualité. Mais utiliser un template, c'est accepter les choix de quelqu'un d'autre. La personnalisation profonde demande de comprendre le code du template, parfois aussi complexe que de partir de zéro.

**Plateformes no-code (Notion, Webflow)**
Rapides à mettre en œuvre, mais avec une dépendance totale à la plateforme. Si elle ferme ou change ses prix, tout est à refaire. Et pour un développeur, utiliser du no-code pour se présenter est... curieux.

**Templates payants**
Beaux, professionnels, mais impersonnels. Et quelle légitimité à présenter comme "mon portfolio" quelque chose que je n'ai pas créé ?

### L'argument du projet lui-même

Un portfolio de développeur qui n'est pas développé par le développeur, c'est paradoxal. Créer ce site from scratch est en soi une démonstration de compétences :
- **Maîtrise d'un framework moderne** (SvelteKit)
- **Compétences frontend** (HTML, CSS, JavaScript)
- **Sens du design** et de l'UX
- **Capacité à mener un projet de A à Z**

Si un recruteur me demande "qu'avez-vous développé récemment ?", ce portfolio est une réponse tangible et immédiatement vérifiable.

## Choix de SvelteKit

### Pourquoi pas React ou Vue

J'ai utilisé React dans plusieurs projets professionnels et scolaires. C'est un excellent framework, mature et bien documenté. Mais pour ce portfolio, plusieurs points m'ont fait hésiter :

**La verbosité**
Un composant React avec du state, des effets, du CSS-in-JS, ça fait vite beaucoup de code pour peu de fonctionnalité. Pour un site relativement simple, cette complexité me semblait excessive.

**Le runtime**
React embarque un runtime conséquent. Pour un portfolio où la performance est importante (première impression du visiteur), c'est du poids inutile.

**L'envie d'apprendre**
Je connaissais déjà React. Ce projet personnel était l'occasion d'explorer quelque chose de nouveau.

### Ce qui m'a séduit chez Svelte

Svelte propose une approche fondamentalement différente :

**Compilation plutôt que runtime**
Svelte compile les composants en JavaScript vanilla optimisé. Pas de Virtual DOM, pas de framework embarqué. Le code livré est minimal.

**Syntaxe naturelle**
Un composant Svelte ressemble à du HTML avec des superpouvers. Pas de JSX, pas de template strings, juste une syntaxe intuitive :

```svelte
<script>
    let count = 0;
    
    function increment() {
        count += 1;
    }
</script>

<button on:click={increment}>
    Clics : {count}
</button>

<style>
    button {
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
    }
</style>
```

Tout est au même endroit, clairement séparé.

**Réactivité simple**
La réactivité est intégrée au langage. Une variable modifiée déclenche automatiquement la mise à jour de l'UI. Pas besoin de `useState`, `useEffect`, ou d'autres hooks.

```svelte
<script>
    let firstName = 'Alexy';
    let lastName = 'VANOT';
    
    // $: déclare une valeur réactive dérivée
    $: fullName = `${firstName} ${lastName}`;
</script>

<p>Bonjour, {fullName}</p>
```

**Transitions natives**
Les animations et transitions sont intégrées, pas besoin de bibliothèque externe :

```svelte
<script>
    import { fade, fly } from 'svelte/transition';
    let visible = true;
</script>

{#if visible}
    <div transition:fade={{ duration: 300 }}>
        Contenu qui apparaît/disparaît en fondu
    </div>
{/if}
```

### SvelteKit : le framework full-stack

Svelte est le langage de composants, SvelteKit est le framework applicatif qui l'accompagne. Il apporte :

**Routing basé sur le système de fichiers**
Chaque fichier dans `src/routes` devient une page. `src/routes/about/+page.svelte` crée la route `/about`. Simple et intuitif.

**Rendu côté serveur (SSR) et génération statique (SSG)**
SvelteKit peut pré-rendre les pages au build time (idéal pour un portfolio) ou les rendre dynamiquement côté serveur.

**Data loading intégré**
Les fichiers `+page.ts` ou `+page.server.ts` permettent de charger des données avant le rendu :

```typescript
// src/routes/projects/+page.ts
import type { PageLoad } from './$types';
import { getProjects } from '$lib/data/projects';

export const load: PageLoad = async () => {
    const projects = await getProjects();
    return { projects };
};
```

**Adapter système**
SvelteKit s'adapte à différentes cibles de déploiement (Vercel, Netlify, Node.js, static) via des adapters.

## Architecture du projet

### Organisation des fichiers

J'ai structuré le projet de manière à séparer clairement les responsabilités :

```
src/
├── lib/
│   ├── components/          # Composants réutilisables
│   │   ├── common/          # Composants génériques
│   │   ├── projects/        # Composants spécifiques aux projets
│   │   ├── education/       # Composants pour la section formation
│   │   ├── experience/      # Composants pour l'expérience
│   │   └── ui/              # Composants UI de base (shadcn-svelte)
│   ├── data/                # Données et configuration
│   │   ├── projects.ts      # Définition des projets
│   │   ├── skills.ts        # Compétences
│   │   ├── education.ts     # Formation
│   │   └── experience.ts    # Expériences professionnelles
│   ├── utils/               # Fonctions utilitaires
│   └── types/               # Types TypeScript
├── routes/                  # Pages du site
│   ├── +layout.svelte       # Layout global
│   ├── +page.svelte         # Page d'accueil
│   ├── projects/            # Section projets
│   │   ├── +page.svelte     # Liste des projets
│   │   └── [slug]/          # Page détail d'un projet
│   ├── skills/              # Section compétences
│   ├── education/           # Section formation
│   ├── experience/          # Section expérience
│   ├── blog/                # Section blog
│   └── about/               # Page À propos
└── app.css                  # Styles globaux

content/
├── projects/                # Fichiers Markdown des projets
└── blog/                    # Articles de blog en Markdown
```

### Le système de contenu Markdown

Une des décisions structurantes : stocker le contenu (projets, articles) en Markdown avec un frontmatter YAML. Cette approche offre plusieurs avantages majeurs.

**Structure d'un fichier de contenu :**

```markdown
---
title: "Mon super projet"
slug: mon-super-projet
published: true
excerpt: "Description courte du projet"
technologies: ["SvelteKit", "TypeScript", "Tailwind"]
category: technique
startDate: 2024-01
endDate: 2024-03
thumbnail: /images/projects/mon-projet.png
color: "#FF3E00"
---

# Mon super projet

Le contenu détaillé du projet en Markdown...

## Fonctionnalités

- Feature 1
- Feature 2

## Code exemple

\`\`\`typescript
const hello = "world";
\`\`\`
```

**Avantages de cette approche :**

1. **Édition simple** : Ajouter un projet = créer un fichier Markdown. Pas besoin de toucher au code.

2. **Versioning naturel** : Tout est versionné avec Git. Je peux voir l'historique des modifications, revenir en arrière, brancher.

3. **Portabilité** : Si je décide de migrer vers un autre framework, le contenu reste exploitable.

4. **Séparation contenu/présentation** : Le Markdown contient le contenu, les composants Svelte s'occupent de l'affichage.

**Parsing du contenu :**

J'utilise la bibliothèque `gray-matter` pour extraire le frontmatter et `marked` pour convertir le Markdown en HTML :

```typescript
// lib/utils/content.ts
import matter from 'gray-matter';
import { marked } from 'marked';

export async function parseMarkdown(content: string) {
    const { data: frontmatter, content: markdown } = matter(content);
    const html = await marked(markdown);
    
    return {
        frontmatter,
        html
    };
}

export async function getProjects() {
    const projectFiles = import.meta.glob('/content/projects/*.md', { 
        query: '?raw', 
        import: 'default' 
    });
    
    const projects = await Promise.all(
        Object.entries(projectFiles).map(async ([path, loader]) => {
            const content = await loader() as string;
            const { frontmatter, html } = await parseMarkdown(content);
            const slug = path.split('/').pop()?.replace('.md', '');
            
            return {
                ...frontmatter,
                slug,
                content: html
            };
        })
    );
    
    return projects
        .filter(p => p.published)
        .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
}
```

### Système de composants avec shadcn-svelte

Pour les composants UI de base (boutons, cartes, badges), j'utilise shadcn-svelte, un portage de shadcn/ui pour Svelte. L'avantage : des composants bien conçus que je peux copier dans mon projet et personnaliser librement, plutôt qu'une dépendance externe figée.

```svelte
<!-- lib/components/common/project-card.svelte -->
<script lang="ts">
    import { Badge } from '$lib/components/ui/badge';
    import { Card } from '$lib/components/ui/card';
    import type { Project } from '$lib/types';
    
    export let project: Project;
</script>

<Card class="group hover:shadow-lg transition-shadow">
    <a href="/projects/{project.slug}">
        <img 
            src={project.thumbnail} 
            alt={project.title}
            class="w-full h-48 object-cover rounded-t-lg"
        />
        <div class="p-4">
            <h3 class="font-semibold text-lg group-hover:text-primary transition-colors">
                {project.title}
            </h3>
            <p class="text-muted-foreground mt-2 line-clamp-2">
                {project.excerpt}
            </p>
            <div class="flex flex-wrap gap-2 mt-4">
                {#each project.technologies.slice(0, 3) as tech}
                    <Badge variant="secondary">{tech}</Badge>
                {/each}
            </div>
        </div>
    </a>
</Card>
```

## Fonctionnalités implémentées

### Système de recherche

Une recherche full-text permet de trouver rapidement des projets, compétences ou articles. L'implémentation est entièrement côté client :

```typescript
// lib/utils/search.ts
export function searchItems<T extends { title: string; excerpt?: string; tags?: string[] }>(
    items: T[],
    query: string
): T[] {
    if (!query.trim()) return items;
    
    const normalizedQuery = query.toLowerCase().trim();
    const terms = normalizedQuery.split(/\s+/);
    
    return items.filter(item => {
        const searchableText = [
            item.title,
            item.excerpt || '',
            ...(item.tags || [])
        ].join(' ').toLowerCase();
        
        return terms.every(term => searchableText.includes(term));
    });
}
```

**Pourquoi côté client ?**
Le volume de données est faible (quelques dizaines d'items maximum). Une recherche serveur ajouterait de la latence sans bénéfice. Les données sont préchargées, la recherche est instantanée.

### Catégorisation des projets

Les projets sont classés selon deux axes :

**Par type (humain/technique)**
- Projets techniques : accent sur le code, les algorithmes, l'architecture
- Projets humains : accent sur la collaboration, la gestion, la pédagogie

**Par technologies utilisées**
Chaque projet est tagué avec les technologies employées. Un système de filtres permet de n'afficher que les projets utilisant une technologie donnée.

```svelte
<!-- routes/projects/+page.svelte -->
<script lang="ts">
    import { page } from '$app/stores';
    
    export let data;
    
    let selectedCategory = 'all';
    let selectedTech = 'all';
    
    $: filteredProjects = data.projects.filter(project => {
        if (selectedCategory !== 'all' && project.category !== selectedCategory) {
            return false;
        }
        if (selectedTech !== 'all' && !project.technologies.includes(selectedTech)) {
            return false;
        }
        return true;
    });
    
    $: allTechnologies = [...new Set(data.projects.flatMap(p => p.technologies))].sort();
</script>

<div class="filters">
    <select bind:value={selectedCategory}>
        <option value="all">Tous les types</option>
        <option value="technique">Technique</option>
        <option value="humain">Humain</option>
    </select>
    
    <select bind:value={selectedTech}>
        <option value="all">Toutes les technologies</option>
        {#each allTechnologies as tech}
            <option value={tech}>{tech}</option>
        {/each}
    </select>
</div>
```

### Mode sombre

Le mode sombre est implémenté via CSS custom properties et respecte la préférence système :

```css
/* app.css */
:root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    /* ... autres variables */
}

.dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    /* ... autres variables */
}
```

```typescript
// lib/utils/theme.ts
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark' | 'system';

function createThemeStore() {
    const stored = browser ? localStorage.getItem('theme') as Theme : 'system';
    const { subscribe, set } = writable<Theme>(stored || 'system');
    
    return {
        subscribe,
        set: (value: Theme) => {
            if (browser) {
                localStorage.setItem('theme', value);
                applyTheme(value);
            }
            set(value);
        }
    };
}

function applyTheme(theme: Theme) {
    const isDark = theme === 'dark' || 
        (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    document.documentElement.classList.toggle('dark', isDark);
}

export const theme = createThemeStore();
```

### Responsive design

J'ai adopté une approche mobile-first : concevoir d'abord pour les petits écrans, puis enrichir progressivement pour les grands écrans.

Tailwind CSS facilite cette approche avec ses breakpoints préfixés :

```svelte
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each projects as project}
        <ProjectCard {project} />
    {/each}
</div>
```

Cette classe signifie :
- Mobile (défaut) : 1 colonne
- Tablette (md: 768px+) : 2 colonnes
- Desktop (lg: 1024px+) : 3 colonnes

### Section À propos interactive

La page À propos utilise des animations et un système de slides pour présenter différents aspects de ma personnalité :

```svelte
<script>
    import { fly, fade } from 'svelte/transition';
    
    const slides = [
        { id: 'developer', title: 'Développeur', content: '...' },
        { id: 'learner', title: 'Apprenant', content: '...' },
        { id: 'collaborator', title: 'Collaborateur', content: '...' }
    ];
    
    let currentSlide = 0;
</script>

<div class="slides-container">
    {#key currentSlide}
        <div
            in:fly={{ x: 100, duration: 300 }}
            out:fly={{ x: -100, duration: 300 }}
            class="slide"
        >
            <h2>{slides[currentSlide].title}</h2>
            <p>{slides[currentSlide].content}</p>
        </div>
    {/key}
    
    <nav class="slide-nav">
        {#each slides as slide, i}
            <button
                class:active={i === currentSlide}
                on:click={() => currentSlide = i}
            >
                {slide.title}
            </button>
        {/each}
    </nav>
</div>
```

## Défis rencontrés

### Performance des images

Les images de projets peuvent être lourdes et impacter la performance. J'ai implémenté plusieurs optimisations :

**Lazy loading natif**
```svelte
<img src={project.thumbnail} alt={project.title} loading="lazy" />
```

**Formats modernes**
Conversion des images en WebP pour un meilleur ratio qualité/poids.

**Images responsive avec srcset**
```svelte
<img
    srcset="
        {project.thumbnail}?w=400 400w,
        {project.thumbnail}?w=800 800w,
        {project.thumbnail}?w=1200 1200w
    "
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
    src={project.thumbnail}
    alt={project.title}
/>
```

### SEO et accessibilité

Un portfolio doit être trouvable et accessible à tous :

**Balises meta dynamiques**
```svelte
<!-- routes/projects/[slug]/+page.svelte -->
<svelte:head>
    <title>{project.title} | Alexy VANOT</title>
    <meta name="description" content={project.excerpt} />
    <meta property="og:title" content={project.title} />
    <meta property="og:description" content={project.excerpt} />
    <meta property="og:image" content={project.thumbnail} />
</svelte:head>
```

**Accessibilité**
- Hiérarchie de titres logique (h1 > h2 > h3)
- Textes alternatifs pour toutes les images
- Contraste suffisant (vérifié avec l'outil WAVE)
- Navigation au clavier fonctionnelle
- Labels pour les champs de formulaire

### Déploiement continu

Le site est déployé sur GitHub Pages via GitHub Actions. Chaque push sur `main` déclenche automatiquement :

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run build
      
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

La configuration SvelteKit utilise l'adapter static :

```javascript
// svelte.config.js
import adapter from '@sveltejs/adapter-static';

export default {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: '404.html'
        }),
        paths: {
            base: process.env.NODE_ENV === 'production' ? '' : ''
        }
    }
};
```

## Ce que j'ai appris

### Svelte est un plaisir à utiliser

La courbe d'apprentissage est douce. Venant de React, j'ai été productif en quelques jours. La syntaxe est intuitive, le compilateur donne des messages d'erreur clairs, et la documentation est excellente.

Les stores réactifs et les transitions intégrées simplifient énormément de patterns courants. Ce qui demandait une bibliothèque externe en React est natif en Svelte.

### TypeScript apporte de la sérénité

J'ai hésité à utiliser TypeScript pour un projet personnel. "C'est juste un portfolio, pas besoin de typage strict." Erreur. Le typage a :
- Évité de nombreux bugs
- Facilité le refactoring
- Servi de documentation
- Amélioré l'autocomplétion dans VS Code

### Le perfectionnisme est un piège

J'ai passé trop de temps sur des détails que personne ne remarquera. L'animation parfaite au pixel près, le dégradé idéal, le micro-ajustement de spacing. À un moment, il faut accepter que c'est "assez bien" et publier.

La version actuelle n'est pas parfaite. Elle ne le sera jamais. Et c'est normal.

### Un projet personnel est un terrain d'expérimentation

Sans contraintes externes, j'ai pu :
- Tester des approches nouvelles
- Faire des erreurs sans conséquence
- Recommencer des parties entières
- Prendre le temps de comprendre

C'est un luxe qui n'existe pas toujours en contexte professionnel. J'en ai profité pour explorer en profondeur.

### L'importance du design system

Avoir défini des tokens de design (couleurs, espacements, typographie) dès le début a énormément facilité le développement. Chaque nouveau composant utilise ces tokens, garantissant la cohérence visuelle sans effort.

## Évolutions futures

Le portfolio continuera d'évoluer avec ma carrière :

**Court terme**
- Ajout de nouveaux projets au fil de leur réalisation
- Amélioration continue des performances
- Tests d'accessibilité plus poussés

**Moyen terme**
- Internationalisation (version anglaise)
- Section blog plus développée
- Intégration d'analytics respectueux de la vie privée

**Long terme**
- Migration vers de nouvelles versions de SvelteKit
- Exploration de Svelte 5 et ses runes
- Refonte visuelle éventuelle

## Conclusion

Créer ce portfolio a été un exercice formateur sur plusieurs plans. Techniquement, j'ai approfondi SvelteKit, TypeScript et les bonnes pratiques frontend. Personnellement, j'ai appris à arbitrer entre perfectionnisme et pragmatisme.

Au-delà de l'aspect vitrine professionnelle, ce projet est un espace d'expression et d'expérimentation. C'est gratifiant de voir le résultat en ligne, accessible à tous, et de savoir que chaque ligne de code est de ma main.

Si vous êtes développeur et hésitez à créer votre propre portfolio : lancez-vous. Le processus d'apprentissage est aussi précieux que le résultat final. Et vous aurez quelque chose de concret à montrer, qui vous ressemble vraiment.
