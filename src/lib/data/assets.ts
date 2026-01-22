import { resolve } from '$app/paths';

// Fonction modifiée pour gérer les fichiers manquants de manière générique
const url = (file: string) => resolve(`/logos/${file}`);

// Image transparente 1x1 à utiliser comme fallback
const transparentGif = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

// Image par défaut quand aucune icône n'est trouvée
const defaultImage = url('no-img.svg');

const asset = (lightFilename: string, darkFilename = lightFilename) => {
	return { 
		light: url(lightFilename), 
		dark: url(darkFilename),
		// Ajouter une propriété pour indiquer un fallback en cas d'erreur de chargement
		fallback: transparentGif
	};
};

/**
 * Mapping des noms de technologies vers les slugs Devicon
 * Voir: https://devicon.dev/ pour la liste complète
 */
const deviconMap: Record<string, string> = {
	// Langages
	'javascript': 'javascript',
	'typescript': 'typescript',
	'python': 'python',
	'java': 'java',
	'c': 'c',
	'cpp': 'cplusplus',
	'c++': 'cplusplus',
	'csharp': 'csharp',
	'c#': 'csharp',
	'go': 'go',
	'rust': 'rust',
	'kotlin': 'kotlin',
	'dart': 'dart',
	'php': 'php',
	'ruby': 'ruby',
	'swift': 'swift',
	'r': 'r',
	'scala': 'scala',
	'perl': 'perl',
	'lua': 'lua',
	'haskell': 'haskell',
	'elixir': 'elixir',
	'clojure': 'clojure',
	'matlab': 'matlab',
	'bash': 'bash',
	'powershell': 'powershell',
	
	// Frameworks & Libraries Frontend
	'react': 'react',
	'reactjs': 'react',
	'vue': 'vuejs',
	'vuejs': 'vuejs',
	'angular': 'angularjs',
	'svelte': 'svelte',
	'nextjs': 'nextjs',
	'nuxt': 'nuxtjs',
	'nuxtjs': 'nuxtjs',
	'gatsby': 'gatsby',
	'ember': 'ember',
	'backbone': 'backbonejs',
	'jquery': 'jquery',
	'bootstrap': 'bootstrap',
	'tailwind': 'tailwindcss',
	'tailwindcss': 'tailwindcss',
	'materialui': 'materialui',
	'sass': 'sass',
	'less': 'less',
	'css': 'css3',
	'html': 'html5',
	
	// Frameworks Backend
	'nodejs': 'nodejs',
	'node': 'nodejs',
	'express': 'express',
	'expressjs': 'express',
	'nestjs': 'nestjs',
	'fastify': 'fastify',
	'django': 'django',
	'flask': 'flask',
	'fastapi': 'fastapi',
	'spring': 'spring',
	'rails': 'rails',
	'laravel': 'laravel',
	'dotnet': 'dotnetcore',
	'.net': 'dotnetcore',
	'aspnet': 'dotnetcore',
	
	// Databases
	'postgresql': 'postgresql',
	'postgres': 'postgresql',
	'mysql': 'mysql',
	'mongodb': 'mongodb',
	'redis': 'redis',
	'sqlite': 'sqlite',
	'oracle': 'oracle',
	'mariadb': 'mariadb',
	'cassandra': 'cassandra',
	'neo4j': 'neo4j',
	'firebase': 'firebase',
	'dynamodb': 'dynamodb',
	
	// DevOps & Cloud
	'docker': 'docker',
	'kubernetes': 'kubernetes',
	'aws': 'amazonwebservices',
	'azure': 'azure',
	'gcp': 'googlecloud',
	'googlecloud': 'googlecloud',
	'heroku': 'heroku',
	'nginx': 'nginx',
	'apache': 'apache',
	'jenkins': 'jenkins',
	'circleci': 'circleci',
	'travisci': 'travis',
	'terraform': 'terraform',
	'ansible': 'ansible',
	'vagrant': 'vagrant',
	
	// Tools
	'git': 'git',
	'github': 'github',
	'gitlab': 'gitlab',
	'bitbucket': 'bitbucket',
	'vscode': 'vscode',
	'vim': 'vim',
	'jetbrains': 'jetbrains',
	'intellij': 'intellij',
	'webpack': 'webpack',
	'vite': 'vitejs',
	'babel': 'babel',
	'eslint': 'eslint',
	'npm': 'npm',
	'yarn': 'yarn',
	'pnpm': 'pnpm',
	'gradle': 'gradle',
	'maven': 'maven',
	'cmake': 'cmake',
	
	// Testing
	'jest': 'jest',
	'mocha': 'mocha',
	'jasmine': 'jasmine',
	'selenium': 'selenium',
	'cypress': 'cypressio',
	'pytest': 'pytest',
	
	// Mobile
	'android': 'android',
	'flutter': 'flutter',
	'reactnative': 'react',
	'ionic': 'ionic',
	'xamarin': 'xamarin',
	
	// OS & Platforms
	'linux': 'linux',
	'ubuntu': 'ubuntu',
	'debian': 'debian',
	'centos': 'centos',
	'windows': 'windows8',
	'apple': 'apple',
	'macos': 'apple',
	'raspberrypi': 'raspberrypi',
	
	// Other
	'graphql': 'graphql',
	'kafka': 'apachekafka',
	'rabbitmq': 'rabbitmq',
	'electron': 'electron',
	'figma': 'figma',
	'sketch': 'sketch',
	'photoshop': 'photoshop',
	'illustrator': 'illustrator',
	'blender': 'blender',
	'unity': 'unity',
	'unrealengine': 'unrealengine',
	'threejs': 'threejs',
	'opencv': 'opencv',
	'tensorflow': 'tensorflow',
	'pytorch': 'pytorch',
	'pandas': 'pandas',
	'numpy': 'numpy',
	'jupyter': 'jupyter',
	'anaconda': 'anaconda',
	'markdown': 'markdown',
	'latex': 'latex',
	'wordpress': 'wordpress',
	'drupal': 'drupal',
	'jira': 'jira',
	'confluence': 'confluence',
	'trello': 'trello',
	'slack': 'slack',
	'postman': 'postman',
	'insomnia': 'insomnia',
	'swagger': 'swagger',
};

/**
 * Normalise un nom pour la recherche fuzzy
 * Supprime les caractères spéciaux, espaces, et met en minuscules
 */
function normalizeForSearch(name: string): string {
	return name
		.toLowerCase()
		.replace(/[.\-_\s]/g, '')  // Supprimer . - _ et espaces
		.replace(/js$/i, '')        // Supprimer "js" à la fin (react.js -> react)
		.replace(/\.js$/i, '')
		.replace(/lang$/i, '');     // golang -> go
}

/**
 * Trouve le meilleur match dans le mapping Devicon
 * Utilise une recherche fuzzy pour trouver le plus proche
 */
function findBestDeviconMatch(name: string): string | undefined {
	const normalized = normalizeForSearch(name);
	
	// 1. Essayer correspondance exacte (normalisée)
	for (const [key, slug] of Object.entries(deviconMap)) {
		if (normalizeForSearch(key) === normalized) {
			return slug;
		}
	}
	
	// 2. Essayer si le nom contient une clé ou vice versa
	for (const [key, slug] of Object.entries(deviconMap)) {
		const normalizedKey = normalizeForSearch(key);
		if (normalized.includes(normalizedKey) || normalizedKey.includes(normalized)) {
			return slug;
		}
	}
	
	// 3. Essayer avec les alias courants
	const aliases: Record<string, string> = {
		'node': 'nodejs',
		'js': 'javascript',
		'ts': 'typescript',
		'py': 'python',
		'rb': 'ruby',
		'cpp': 'cplusplus',
		'cxx': 'cplusplus',
		'cs': 'csharp',
		'postgres': 'postgresql',
		'mongo': 'mongodb',
		'k8s': 'kubernetes',
		'tf': 'terraform',
		'vue': 'vuejs',
		'react': 'react',
		'ng': 'angularjs',
		'angular': 'angularjs',
		'next': 'nextjs',
		'nuxt': 'nuxtjs',
		'tailwind': 'tailwindcss',
		'tw': 'tailwindcss',
		'bs': 'bootstrap',
		'electron': 'electron',
		'deno': 'denojs',
		'bun': 'bun',
		'aws': 'amazonwebservices',
		'gcloud': 'googlecloud',
		'gc': 'googlecloud',
		'az': 'azure',
		'gh': 'github',
		'gl': 'gitlab',
		'vsc': 'vscode',
		'code': 'vscode',
		'vim': 'vim',
		'nvim': 'neovim',
		'neovim': 'neovim',
		'intellij': 'intellij',
		'idea': 'intellij',
		'pycharm': 'pycharm',
		'webstorm': 'webstorm',
	};
	
	if (aliases[normalized]) {
		return aliases[normalized];
	}
	
	// 4. Calculer la distance de Levenshtein pour les cas plus difficiles
	let bestMatch: string | undefined;
	let bestScore = Infinity;
	
	for (const [key, slug] of Object.entries(deviconMap)) {
		const distance = levenshteinDistance(normalized, normalizeForSearch(key));
		// Accepter seulement si la distance est faible (max 2 caractères de différence)
		if (distance < bestScore && distance <= 2) {
			bestScore = distance;
			bestMatch = slug;
		}
	}
	
	return bestMatch;
}

/**
 * Calcule la distance de Levenshtein entre deux chaînes
 * (nombre minimum d'opérations pour transformer une chaîne en l'autre)
 */
function levenshteinDistance(a: string, b: string): number {
	if (a.length === 0) return b.length;
	if (b.length === 0) return a.length;
	
	const matrix: number[][] = [];
	
	for (let i = 0; i <= b.length; i++) {
		matrix[i] = [i];
	}
	
	for (let j = 0; j <= a.length; j++) {
		matrix[0][j] = j;
	}
	
	for (let i = 1; i <= b.length; i++) {
		for (let j = 1; j <= a.length; j++) {
			if (b.charAt(i - 1) === a.charAt(j - 1)) {
				matrix[i][j] = matrix[i - 1][j - 1];
			} else {
				matrix[i][j] = Math.min(
					matrix[i - 1][j - 1] + 1, // substitution
					matrix[i][j - 1] + 1,     // insertion
					matrix[i - 1][j] + 1      // deletion
				);
			}
		}
	}
	
	return matrix[b.length][a.length];
}

/**
 * Génère une URL Devicon pour une technologie
 * Utilise une recherche fuzzy pour trouver le meilleur match
 * @param name Le nom de la technologie
 * @param variant Le variant ('original', 'plain', 'line', etc.)
 * @returns L'URL de l'icône ou undefined si pas trouvé
 */
/**
 * Liste des termes qui ne sont PAS des technologies (soft skills, valeurs vides, etc.)
 * Ces termes ne doivent pas essayer de charger depuis un CDN
 */
const nonTechTerms = new Set([
	// Valeurs vides / par défaut
	'unknown', 'none', 'null', 'undefined', '', 'n/a', 'na', 'no-img', 'placeholder',
	// Soft skills
	'autonomy', 'autonomie',
	'creativity', 'créativité', 'creativite',
	'teamwork', 'travail d\'équipe', 'travail equipe',
	'communication',
	'leadership',
	'problem-solving', 'problem solving', 'résolution de problèmes',
	'adaptability', 'adaptabilité', 'adaptabilite',
	'time-management', 'time management', 'gestion du temps',
	'critical-thinking', 'critical thinking', 'pensée critique',
	'collaboration',
	'motivation',
	'organization', 'organisation',
	'flexibility', 'flexibilité', 'flexibilite',
	'patience',
	'empathy', 'empathie',
	'curiosity', 'curiosité', 'curiosite',
	'rigor', 'rigueur',
	'initiative',
	'perseverance', 'persévérance', 'perseverance',
	'soft skill', 'soft skills',
]);

/**
 * Vérifie si un terme est une soft skill ou valeur vide (pas une technologie)
 */
function isNonTechTerm(name: string): boolean {
	if (!name) return true; // null, undefined, empty string
	const normalized = name.toLowerCase().trim();
	if (normalized.length === 0) return true;
	return nonTechTerms.has(normalized);
}

export function getDeviconUrl(name: string, variant: 'original' | 'plain' | 'line' = 'original'): string | undefined {
	// Ne pas chercher les soft skills sur Devicon
	if (isNonTechTerm(name)) return undefined;
	
	// Essayer d'abord la correspondance exacte
	let slug = deviconMap[name.toLowerCase()];
	
	// Si pas trouvé, utiliser la recherche fuzzy
	if (!slug) {
		slug = findBestDeviconMatch(name);
	}
	
	if (!slug) return undefined;
	
	// CDN Devicon avec fallback sur différents variants
	return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-${variant}.svg`;
}

/**
 * Génère un asset automatique basé sur Devicon
 * Utilise une recherche intelligente pour trouver le meilleur match
 * Retourne l'image par défaut pour les soft skills et termes inconnus
 */
export function autoAsset(name: string): { light: string; dark: string; fallback: string } {
	// Pour les soft skills et valeurs vides, retourner l'image par défaut
	if (isNonTechTerm(name)) {
		return {
			light: defaultImage,
			dark: defaultImage,
			fallback: defaultImage
		};
	}
	
	const deviconUrl = getDeviconUrl(name);
	
	if (deviconUrl) {
		return {
			light: deviconUrl,
			dark: deviconUrl,
			fallback: defaultImage
		};
	}
	
	// Essayer Simple Icons comme fallback (plus de logos de marques)
	const simpleIconSlug = name.toLowerCase().replace(/[^a-z0-9]/g, '');
	const simpleIconUrl = `https://cdn.simpleicons.org/${simpleIconSlug}`;
	
	return {
		light: simpleIconUrl,
		dark: simpleIconUrl,
		fallback: defaultImage
	};
}

const Assets = {
	AWS: asset('aws.svg'),
	Bootstrap: asset('bootstrap.svg'),
	C: asset('c.svg'),
	Cpp: asset('cpp.svg'),
	Celery: asset('celery.svg'),
	Django: asset('django.svg'),
	FastApi: asset('fastapi'),
	Flask: asset('flask.svg'),
	Go: asset('go.svg'),
	Kafka: asset('kafka.svg'),
	Neo4j: asset('neo4j.svg'),
	Nginx: asset('nginx.svg'),
	Numpy: asset('numpy.svg'),
	Pandas: asset('pandas.svg'),
	RabbitMQ: asset('rabbitmq.svg'),
	Rust: asset('rust.svg', 'rust-dark.png'),
	Scrapy: asset('scrapy.png'),
	Selenium: asset('selenium.svg'),
	Docker: asset('docker.svg'),
	Kubernetes: asset('kubernetes.svg'),
	Csharp: asset('csharp.svg'),
	Xamarin: asset('xamarin.svg'),
	TypeScript: asset('ts.png'),
	VueJs: asset('vue.png'),
	ReactJs: asset('react.svg'),
	Dart: asset('dart.png'),
	Kotlin: asset('kotlin.png'),
	Python: asset('python.png'),
	NodeJs: asset('node.png'),
	Deno: asset('deno.svg'),
	Svelte: asset('svelte.svg'),
	ExpressJs: asset('express.png'),
	JavaScript: asset('js.png'),
	Fastify: asset('fastify.svg', 'fastify-dark.png'),
	NestJs: asset('nest.svg'),
	Quasar: asset('quasar.svg'),
	SolidJs: asset('solid.svg'),
	Electron: asset('electron.png'),
	Flutter: asset('flutter.svg'),
	Java: asset('java.png'),
	AdonisJs: asset('adonis.png'),
	Android: asset('android.png'),
	Angular: asset('angular.png'),
	PostgreSQL: asset('postgres.png'),
	Firebase: asset('firebase.png'),
	Sass: asset('sass.png'),
	Unknown: asset('no-img.svg'),
	MongoDB: asset('mongodb.svg'),
	Redis: asset('redis.svg'),
	Tailwind: asset('tailwind.svg'),
	HTML: asset('html.svg'),
	Premiere: asset('premiere.svg'),
	Photoshop: asset('photoshop.svg'),
	CSS: asset('css.svg'),
	AfterEffects: asset('after-effects.svg'),
	Illustrator: asset('illustrator.svg'),
	Nuxt: asset('nuxt.png'),
	Vite: asset('vite.png'),
	Vitest: asset('vitest.svg'),
	Jest: asset('jest.png'),
	Unocss: asset('unocss.svg'),
	Ruvy: asset('ruvy.svg'),
	Postcss: asset('postcss.svg'),
	Soleil: asset('soleil.png'),
	AGH: asset('agh.png'),
	InTech: asset('intech.png'),
	ESIEA: asset('esiea.png'),
	PMF: asset('pmf.png'),
	// Assets téléchargés localement (évite les warnings CDN)
	Git: asset('git-original.svg'),
	Linux: asset('linux-original.svg'),
	SQLite: asset('sqlite-original.svg'),
	CICD: asset('cicd.svg'),
	// Soft skills (pas d'icône)
	Teamwork: asset('no-img.svg'),
	Autonomy: asset('no-img.svg'),
	Creativity: asset('no-img.svg'),
	MiniArticle: asset('mini-article.png'),
};

export default Assets;
