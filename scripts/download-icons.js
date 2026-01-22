#!/usr/bin/env node
/**
 * 🎨 Script de téléchargement automatique des icônes
 * 
 * Ce script scanne le contenu (skills, projects, etc.) et télécharge
 * automatiquement les icônes manquantes depuis Devicon CDN.
 * 
 * Usage: npm run icons
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LOGOS_DIR = path.join(__dirname, '..', 'static', 'logos');
const CONTENT_DIR = path.join(__dirname, '..', 'content');

// Mapping des noms vers les slugs Devicon
const deviconMap = {
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
	'bash': 'bash',
	'powershell': 'powershell',
	
	// Frameworks Frontend
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
	'jquery': 'jquery',
	'bootstrap': 'bootstrap',
	'tailwind': 'tailwindcss',
	'tailwindcss': 'tailwindcss',
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
	
	// Databases
	'postgresql': 'postgresql',
	'postgres': 'postgresql',
	'mysql': 'mysql',
	'mongodb': 'mongodb',
	'redis': 'redis',
	'sqlite': 'sqlite',
	'oracle': 'oracle',
	'mariadb': 'mariadb',
	'neo4j': 'neo4j',
	'firebase': 'firebase',
	
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
	'terraform': 'terraform',
	'ansible': 'ansible',
	
	// Tools
	'git': 'git',
	'github': 'github',
	'gitlab': 'gitlab',
	'bitbucket': 'bitbucket',
	'vscode': 'vscode',
	'vim': 'vim',
	'webpack': 'webpack',
	'vite': 'vitejs',
	'babel': 'babel',
	'eslint': 'eslint',
	'npm': 'npm',
	'yarn': 'yarn',
	'gradle': 'gradle',
	'maven': 'maven',
	
	// Testing
	'jest': 'jest',
	'mocha': 'mocha',
	'selenium': 'selenium',
	'cypress': 'cypressio',
	'pytest': 'pytest',
	
	// Mobile
	'android': 'android',
	'flutter': 'flutter',
	'ionic': 'ionic',
	'xamarin': 'xamarin',
	
	// OS
	'linux': 'linux',
	'ubuntu': 'ubuntu',
	'debian': 'debian',
	'windows': 'windows8',
	'apple': 'apple',
	'raspberrypi': 'raspberrypi',
	
	// CI/CD
	'cicd': 'githubactions',
	'ci/cd': 'githubactions',
	'githubactions': 'githubactions',
	
	// Other
	'graphql': 'graphql',
	'kafka': 'apachekafka',
	'rabbitmq': 'rabbitmq',
	'electron': 'electron',
	'figma': 'figma',
	'photoshop': 'photoshop',
	'illustrator': 'illustrator',
	'blender': 'blender',
	'unity': 'unity',
	'tensorflow': 'tensorflow',
	'pytorch': 'pytorch',
	'pandas': 'pandas',
	'numpy': 'numpy',
	'jupyter': 'jupyter',
	'anaconda': 'anaconda',
	'markdown': 'markdown',
	'wordpress': 'wordpress',
	'jira': 'jira',
	'trello': 'trello',
	'slack': 'slack',
	'postman': 'postman',
};

// Termes à ignorer (pas des technologies)
const ignoredTerms = new Set([
	'unknown', 'none', 'null', 'undefined', '', 'n/a', 'na', 'no-img', 'placeholder',
	'autonomy', 'autonomie', 'creativity', 'créativité', 'teamwork', 'communication',
	'leadership', 'adaptability', 'collaboration', 'motivation', 'organization',
	'patience', 'empathy', 'curiosity', 'rigor', 'initiative', 'perseverance',
]);

/**
 * Télécharge un fichier depuis une URL
 */
function downloadFile(url, destPath) {
	return new Promise((resolve, reject) => {
		const file = fs.createWriteStream(destPath);
		
		https.get(url, (response) => {
			if (response.statusCode === 301 || response.statusCode === 302) {
				// Suivre la redirection
				https.get(response.headers.location, (res) => {
					if (res.statusCode !== 200) {
						fs.unlinkSync(destPath);
						reject(new Error(`HTTP ${res.statusCode}`));
						return;
					}
					res.pipe(file);
					file.on('finish', () => {
						file.close();
						resolve(true);
					});
				}).on('error', reject);
				return;
			}
			
			if (response.statusCode !== 200) {
				fs.unlinkSync(destPath);
				reject(new Error(`HTTP ${response.statusCode}`));
				return;
			}
			
			response.pipe(file);
			file.on('finish', () => {
				file.close();
				resolve(true);
			});
		}).on('error', (err) => {
			fs.unlinkSync(destPath);
			reject(err);
		});
	});
}

/**
 * Trouve le slug Devicon pour un nom
 */
function findDeviconSlug(name) {
	const normalized = name.toLowerCase().replace(/[.\-_\s]/g, '').replace(/js$/i, '');
	
	// Correspondance exacte
	if (deviconMap[name.toLowerCase()]) {
		return deviconMap[name.toLowerCase()];
	}
	
	// Correspondance normalisée
	for (const [key, slug] of Object.entries(deviconMap)) {
		if (key.replace(/[.\-_\s]/g, '') === normalized) {
			return slug;
		}
	}
	
	// Correspondance partielle
	for (const [key, slug] of Object.entries(deviconMap)) {
		if (normalized.includes(key) || key.includes(normalized)) {
			return slug;
		}
	}
	
	return null;
}

/**
 * Scanne les fichiers markdown pour trouver les logos utilisés
 */
function scanContentForLogos() {
	const logos = new Set();
	
	function scanDir(dir) {
		if (!fs.existsSync(dir)) return;
		
		const files = fs.readdirSync(dir);
		for (const file of files) {
			const filePath = path.join(dir, file);
			const stat = fs.statSync(filePath);
			
			if (stat.isDirectory()) {
				scanDir(filePath);
			} else if (file.endsWith('.md') || file.endsWith('.yaml') || file.endsWith('.yml')) {
				const content = fs.readFileSync(filePath, 'utf-8');
				
				// Chercher les logos dans le frontmatter
				const logoMatch = content.match(/logo:\s*(\S+)/gi);
				if (logoMatch) {
					logoMatch.forEach(match => {
						const logo = match.replace(/logo:\s*/i, '').trim();
						if (logo && !ignoredTerms.has(logo.toLowerCase())) {
							logos.add(logo);
						}
					});
				}
				
				// Chercher les skills référencées
				const skillsMatch = content.match(/skills:\s*\n((?:\s*-\s*\S+\n?)+)/gi);
				if (skillsMatch) {
					skillsMatch.forEach(match => {
						const skills = match.match(/-\s*(\S+)/g);
						if (skills) {
							skills.forEach(s => {
								const skill = s.replace(/^-\s*/, '').trim();
								if (skill && !ignoredTerms.has(skill.toLowerCase())) {
									logos.add(skill);
								}
							});
						}
					});
				}
			}
		}
	}
	
	scanDir(CONTENT_DIR);
	return logos;
}

/**
 * Vérifie si une icône existe déjà localement
 */
function iconExistsLocally(name) {
	const variations = [
		`${name}.svg`,
		`${name}.png`,
		`${name}-original.svg`,
		`${name.toLowerCase()}.svg`,
		`${name.toLowerCase()}.png`,
		`${name.toLowerCase()}-original.svg`,
	];
	
	for (const variation of variations) {
		if (fs.existsSync(path.join(LOGOS_DIR, variation))) {
			return true;
		}
	}
	
	return false;
}

/**
 * Télécharge une icône depuis Devicon
 */
async function downloadIcon(name) {
	const slug = findDeviconSlug(name);
	if (!slug) {
		console.log(`  ⚠️  ${name}: pas trouvé dans Devicon`);
		return false;
	}
	
	const variants = ['original', 'plain', 'line'];
	
	for (const variant of variants) {
		const url = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-${variant}.svg`;
		const destPath = path.join(LOGOS_DIR, `${name.toLowerCase()}-${variant}.svg`);
		
		try {
			await downloadFile(url, destPath);
			console.log(`  ✅ ${name}: téléchargé (${slug}-${variant}.svg)`);
			return true;
		} catch (err) {
			// Essayer le variant suivant
		}
	}
	
	console.log(`  ❌ ${name}: échec du téléchargement`);
	return false;
}

/**
 * Point d'entrée principal
 */
async function main() {
	console.log('🎨 Téléchargement automatique des icônes\n');
	console.log('📂 Dossier logos:', LOGOS_DIR);
	console.log('📂 Dossier content:', CONTENT_DIR);
	console.log('');
	
	// S'assurer que le dossier logos existe
	if (!fs.existsSync(LOGOS_DIR)) {
		fs.mkdirSync(LOGOS_DIR, { recursive: true });
	}
	
	// Scanner le contenu
	console.log('🔍 Scan du contenu...');
	const logos = scanContentForLogos();
	console.log(`   Trouvé ${logos.size} logos référencés\n`);
	
	// Filtrer ceux qui existent déjà
	const missing = [];
	for (const logo of logos) {
		if (!iconExistsLocally(logo)) {
			missing.push(logo);
		}
	}
	
	if (missing.length === 0) {
		console.log('✨ Toutes les icônes sont déjà présentes localement!');
		return;
	}
	
	console.log(`📥 Téléchargement de ${missing.length} icônes manquantes:\n`);
	
	let downloaded = 0;
	let failed = 0;
	
	for (const logo of missing) {
		const success = await downloadIcon(logo);
		if (success) {
			downloaded++;
		} else {
			failed++;
		}
	}
	
	console.log('\n📊 Résumé:');
	console.log(`   ✅ Téléchargées: ${downloaded}`);
	console.log(`   ❌ Échouées: ${failed}`);
	console.log(`   📁 Déjà présentes: ${logos.size - missing.length}`);
}

main().catch(console.error);
