---
title: "SvelteKit : Le framework full-stack pour Svelte"
slug: sveltekit-full-stack-framework
excerpt: "Découvrez SvelteKit, le framework full-stack officiel qui révolutionne le développement web avec Svelte."
author: Alexy VANOT
publishedAt: 2025-07-06
tags:
  - sveltekit
  - svelte
  - full-stack
  - ssr
  - framework
logo: Svelte
readingTime: 18
color: orange
pinned: true
links:
  - label: Site officiel SvelteKit
    to: https://kit.svelte.dev/
    newTab: true
  - label: Documentation SvelteKit
    to: https://kit.svelte.dev/docs
    newTab: true
---

# SvelteKit : Le framework full-stack pour Svelte

SvelteKit est le framework officiel pour construire des applications web avec Svelte. Il offre tout ce dont vous avez besoin pour créer des applications rapides et modernes.

## Qu'est-ce que SvelteKit ?

SvelteKit est un framework full-stack qui s'appuie sur Svelte pour fournir :

- **Routage basé sur le système de fichiers** : Organisation intuitive de vos pages
- **Rendu côté serveur (SSR)** : Performances et SEO optimisés
- **Génération de sites statiques (SSG)** : Sites ultra-rapides
- **API routes** : Backend intégré pour vos endpoints
- **Optimisations automatiques** : Code splitting, préchargement, etc.

## Architecture basée sur les fichiers

SvelteKit utilise une approche de routage basée sur les fichiers :

```
src/routes/
├── +layout.svelte          # Layout principal
├── +layout.ts             # Code de layout
├── +page.svelte           # Page d'accueil
├── about/
│   └── +page.svelte       # Page /about
├── blog/
│   ├── +page.svelte       # Page /blog
│   └── [slug]/
│       ├── +page.svelte   # Page /blog/[slug]
│       └── +page.ts       # Données pour /blog/[slug]
└── api/
    └── posts/
        └── +server.ts     # API endpoint /api/posts
```

## Chargement de données

SvelteKit offre plusieurs façons de charger des données :

### Load functions

```typescript
// +page.ts
export async function load({ params, fetch }) {
  const response = await fetch(`/api/posts/${params.slug}`);
  const post = await response.json();
  
  return {
    post
  };
}
```

### Server-side load

```typescript
// +page.server.ts
import { db } from '$lib/database';

export async function load({ params }) {
  const post = await db.getPost(params.slug);
  
  return {
    post
  };
}
```

## Rendu adaptatif

SvelteKit peut s'adapter à différents environnements :

```typescript
// svelte.config.js
import adapter from '@sveltejs/adapter-auto';

export default {
  kit: {
    adapter: adapter()
  }
};
```

Adaptateurs disponibles :
- `@sveltejs/adapter-auto` : Détection automatique
- `@sveltejs/adapter-node` : Serveur Node.js
- `@sveltejs/adapter-static` : Sites statiques
- `@sveltejs/adapter-vercel` : Déploiement Vercel
- `@sveltejs/adapter-netlify` : Déploiement Netlify

## API Routes

Créez facilement des endpoints API :

```typescript
// src/routes/api/posts/+server.ts
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
  const limit = Number(url.searchParams.get('limit') ?? '10');
  
  const posts = await getPosts(limit);
  
  return json(posts);
};

export const POST: RequestHandler = async ({ request }) => {
  const data = await request.json();
  const post = await createPost(data);
  
  return json(post, { status: 201 });
};
```

## Formulaires avancés

SvelteKit simplifie la gestion des formulaires :

```svelte
<!-- +page.svelte -->
<script>
  import { enhance } from '$app/forms';
  
  let { form } = $props();
</script>

<form method="POST" use:enhance>
  <input name="title" required />
  <textarea name="content" required></textarea>
  <button type="submit">Publier</button>
</form>

{#if form?.success}
  <p>Article publié avec succès !</p>
{/if}
```

```typescript
// +page.server.ts
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const title = data.get('title') as string;
    const content = data.get('content') as string;
    
    if (!title || !content) {
      return fail(400, { error: 'Titre et contenu requis' });
    }
    
    await createPost({ title, content });
    
    return { success: true };
  }
};
```

## Performance et optimisations

SvelteKit inclut de nombreuses optimisations automatiques :

### Préchargement intelligent

```svelte
<a href="/blog/article-important" data-sveltekit-preload-data="hover">
  Article important
</a>
```

### Code splitting automatique

```javascript
// Import dynamique automatique par route
const Component = () => import('./Component.svelte');
```

### Service Worker

```typescript
// src/service-worker.ts
import { build, files, version } from '$service-worker';

const CACHE = `cache-${version}`;
const ASSETS = [...build, ...files];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(ASSETS))
  );
});
```

## Déploiement

SvelteKit facilite le déploiement sur différentes plateformes :

### Vercel
```bash
npm i -D @sveltejs/adapter-vercel
```

### Netlify
```bash
npm i -D @sveltejs/adapter-netlify
```

### Site statique
```bash
npm i -D @sveltejs/adapter-static
npm run build
```

## Conclusion

SvelteKit offre une expérience de développement exceptionnelle en combinant la simplicité de Svelte avec les fonctionnalités d'un framework full-stack moderne. Que vous construisiez une SPA, un site statique ou une application web complète, SvelteKit s'adapte à vos besoins.

Commencez dès aujourd'hui avec :

```bash
npm create svelte@latest my-app
cd my-app
npm install
npm run dev
```
