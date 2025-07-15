import type { BlogPost } from './types';
import Assets from './assets';

// Import des fichiers markdown
import gettingStartedWithSvelteMd from './md/blog/getting-started-with-svelte.md?raw';
import typescriptBestPracticesMd from './md/blog/typescript-best-practices.md?raw';
import modernCssTechniquesMd from './md/blog/modern-css-techniques.md?raw';
import svelteKitFullStackMd from './md/blog/sveltekit-full-stack-framework.md?raw';
import blogPlatformDemoMd from './md/blog/blog-platform-demo.md?raw';
import miniArticleMd from './md/blog/mini-article.md?raw';
import georgesMd from './md/blog/georges-le-chat.md?raw';

const title = 'Blog';

const blogPosts: Array<BlogPost> = [
	{
		slug: 'georges-le-chat',
		name: 'Georges le Chat',
		title: 'Petit Georges vs Gros Georges 🐾',
		logo: Assets.Unknown,
		excerpt:
			'Georges, le chat de Nico, oscille entre moine zen et chaos incarné. Petit Georges ou Gros Georges, choisis ton camp.',
		shortDescription:
			'Une plongée absurde dans la psyché fragmentée de Georges, chat mystérieux et imprévisible.',
		description: georgesMd,
		content: georgesMd,
		author: 'Alexy VANOT',
		publishedAt: new Date('2025-07-15'),
		updatedAt: new Date('2025-07-15'),
		tags: ['humour', 'chat', 'wtf', 'georges', 'grosgeorges', 'petitgeorges'],
		coverImage: Assets.Unknown,
		readingTime: 3,
		color: 'lightpink',
		links: [{ to: 'https://www.alexyvanot.com', label: 'Mon site personnel', newTab: true }],
		pinned: true
	},
	{
		slug: 'mini-article',
		name: 'Mini Article',
		title: 'Mini Article',
		logo: Assets.MiniArticle,
		excerpt:
			'La technologie évolue rapidement, transformant notre quotidien. Rester curieux et apprendre en continu permet de s’adapter à ce monde en mouvement.',
		shortDescription:
			'Un bref aperçu de l’importance de la curiosité et de l’apprentissage continu dans un monde technologique en évolution.',
		description: miniArticleMd,
		content: miniArticleMd,
		author: 'Alexy VANOT',
		publishedAt: new Date('2023-10-01'),
		updatedAt: new Date('2023-10-02'),
		tags: ['technology', 'curiosity', 'learning', 'innovation'],
		coverImage: Assets.MiniArticle,
		readingTime: 2,
		color: 'lightgray',
		links: [{ to: 'https://www.alexyvanot.com', label: 'Mon site personnel', newTab: true }],
		pinned: false
	},
	{
		slug: 'getting-started-with-svelte',
		name: 'Commencer avec Svelte : Un guide pour débutants',
		title: 'Commencer avec Svelte : Un guide pour débutants',
		logo: Assets.Svelte,
		excerpt:
			'Découvrez les bases de Svelte, le framework JavaScript révolutionnaire qui compile vos composants.',
		shortDescription: 'Introduction complète à Svelte pour les développeurs débutants.',
		description: gettingStartedWithSvelteMd,
		content: gettingStartedWithSvelteMd,
		author: 'Alexy VANOT',
		publishedAt: new Date('2024-01-15'),
		updatedAt: new Date('2024-01-20'),
		tags: ['svelte', 'javascript', 'frontend', 'tutorial'],
		coverImage: Assets.Svelte,
		readingTime: 8,
		color: 'orange',
		links: [
			{ to: 'https://svelte.dev/', label: 'Site officiel Svelte', newTab: true },
			{ to: 'https://svelte.dev/tutorial', label: 'Tutoriel officiel', newTab: true }
		],
		pinned: true
	},
	{
		slug: 'typescript-best-practices',
		name: 'Meilleures pratiques TypeScript en 2024',
		title: 'Meilleures pratiques TypeScript en 2024',
		logo: Assets.TypeScript,
		excerpt:
			'Explorez les meilleures pratiques et patterns pour écrire du TypeScript maintenable et performant.',
		shortDescription: 'Guide des meilleures pratiques TypeScript pour 2024.',
		description: typescriptBestPracticesMd,
		content: typescriptBestPracticesMd,
		author: 'Alexy VANOT',
		publishedAt: new Date('2024-02-10'),
		tags: ['typescript', 'javascript', 'best-practices', 'development'],
		readingTime: 12,
		color: 'steelblue',
		links: [
			{ to: 'https://www.typescriptlang.org/', label: 'Site officiel TypeScript', newTab: true },
			{
				to: 'https://www.typescriptlang.org/docs/',
				label: 'Documentation TypeScript',
				newTab: true
			}
		]
	},
	{
		slug: 'modern-css-techniques',
		name: 'Techniques CSS modernes : Grid, Flexbox et plus',
		title: 'Techniques CSS modernes : Grid, Flexbox et plus',
		logo: Assets.CSS,
		excerpt:
			'Maîtrisez les techniques CSS modernes pour créer des layouts flexibles et responsives.',
		shortDescription: 'Guide complet des techniques CSS modernes pour 2024.',
		description: modernCssTechniquesMd,
		content: modernCssTechniquesMd,
		author: 'Alexy VANOT',
		publishedAt: new Date('2024-03-05'),
		tags: ['css', 'frontend', 'layout', 'responsive'],
		readingTime: 15,
		color: 'blue',
		links: [
			{
				to: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
				label: 'MDN CSS Documentation',
				newTab: true
			},
			{ to: 'https://css-tricks.com/', label: 'CSS-Tricks', newTab: true }
		]
	},
	{
		slug: 'sveltekit-full-stack-framework',
		name: 'SvelteKit : Le framework full-stack pour Svelte',
		title: 'SvelteKit : Le framework full-stack pour Svelte',
		logo: Assets.Svelte,
		excerpt:
			'Découvrez SvelteKit, le framework full-stack officiel qui révolutionne le développement web avec Svelte.',
		shortDescription: 'Guide complet de SvelteKit pour créer des applications web modernes.',
		description: svelteKitFullStackMd,
		content: svelteKitFullStackMd,
		author: 'Alexy VANOT',
		publishedAt: new Date('2025-07-06'),
		tags: ['sveltekit', 'svelte', 'full-stack', 'ssr', 'framework'],
		readingTime: 18,
		color: 'orange',
		links: [
			{ to: 'https://kit.svelte.dev/', label: 'Site officiel SvelteKit', newTab: true },
			{ to: 'https://kit.svelte.dev/docs', label: 'Documentation SvelteKit', newTab: true }
		],
		pinned: true
	},
	{
		slug: 'blog-platform-demo',
		name: 'Démonstration de la plateforme de blog',
		title: 'Démonstration de la plateforme de blog',
		logo: Assets.Svelte,
		excerpt:
			'Découvrez toutes les fonctionnalités de notre plateforme de blog moderne : recherche, navigation, épinglage, et bien plus encore.',
		shortDescription: 'Présentation complète des fonctionnalités de la plateforme de blog.',
		description: blogPlatformDemoMd,
		content: blogPlatformDemoMd,
		author: 'Alexy VANOT',
		publishedAt: new Date('2025-07-08'),
		tags: ['blog', 'sveltekit', 'demo', 'features', 'ux'],
		readingTime: 6,
		color: 'purple',
		links: [
			{ to: 'https://kit.svelte.dev/', label: 'SvelteKit', newTab: true },
			{ to: 'https://tailwindcss.com/', label: 'TailwindCSS', newTab: true }
		],
		pinned: true
	}
];

export default {
	title,
	items: blogPosts
} as const;
