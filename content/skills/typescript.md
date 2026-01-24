---
name: TypeScript
slug: ts
published: true
category: pro-lang
color: blue
logo: TypeScript
---

::toc

# TypeScript : JavaScript typé pour les projets sérieux

## :i[pin] Définition et contexte professionnel

**TypeScript** est un superset de JavaScript développé par Microsoft qui ajoute le **typage statique**. Tout code JavaScript valide est du TypeScript valide, mais TypeScript permet de détecter les erreurs à la compilation plutôt qu'à l'exécution.

L'adoption de TypeScript dans l'industrie :

- **Standard de facto** : adopté par Angular, Vue 3, Svelte, Next.js
- **Sécurité** : détection d'erreurs avant l'exécution
- **Maintenabilité** : code auto-documenté grâce aux types
- **Refactoring** : modifications sûre grâce à l'analyse statique
- **IntelliSense** : auto-complétion puissante dans les IDE

Selon l'enquête State of JS 2024, **TypeScript a un taux de satisfaction de 93%** et est utilisé par la majorité des projets professionnels.

---

## :i[search] Mes réalisations concrètes

### Ce portfolio : 100% TypeScript

Ce portfolio est entièrement écrit en **TypeScript** avec SvelteKit.

**Ma contribution** :
- Définition des **interfaces et types** pour le contenu (projets, skills, blog)
- Utilisation des **generics** pour les composants réutilisables
- **Typage strict** (`strict: true`) pour une sécurité maximale
- Types utilitaires : `Pick`, `Omit`, `Partial`, `Record`

### TAP : API TypeScript

Dans le projet **TAP**, j'ai contribué au frontend TypeScript.

**Ma contribution** :
- **Types pour l'API** : interfaces correspondant aux DTOs Java
- Validation avec **Zod** pour les données externes
- **Type guards** pour le narrowing de types

→ [Voir le projet TAP](/projects/tap)

---

## :i[target] Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| Types de base (string, number, etc.) | ::stars[5/5] Expert |
| Interfaces et types | ::stars[5/5] Expert |
| Generics | ::stars[4/5] Avancé |
| Types utilitaires | ::stars[4/5] Avancé |
| Types conditionnels / infer | ::stars[3/5] Intermédiaire |

### Marge de progression

- **Types conditionnels avancés** : `infer`, types récursifs
- **Declaration files** : écriture de fichiers `.d.ts` pour des libraries
- **Template literal types** : types basés sur des chaînes

### Vitesse d'acquisition

Venant de Java, l'adoption de TypeScript a été **naturelle**. Le système de types de TypeScript est plus flexible et expressif que celui de Java.

### Place dans mon profil

TypeScript est mon **langage principal pour le frontend**. Je ne fais plus de JavaScript pur pour les projets sérieux. Couplé à Svelte, il forme ma stack frontend de prédilection.

### Conseils tirés de mon expérience

> *"Activez le mode strict dès le début de votre projet. C'est plus difficile de l'activer après coup."*

- **Commencer avec `strict: true`** même si c'est plus exigeant
- **Éviter `any`** : si vous l'utilisez, c'est que vous perdez les bénéfices de TS
- Apprendre les **types utilitaires** built-in : ils couvrent 90% des besoins

---

## :i[growth] Évolution et perspectives

### Objectif à moyen terme

Maîtriser les **types conditionnels avancés** et contribuer à des définitions de types pour des libraries.


