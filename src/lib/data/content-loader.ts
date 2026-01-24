/**
 * ╔═══════════════════════════════════════════════════════════════════════════╗
 * ║                      🔮 CONTENT LOADER SYSTEM                             ║
 * ║                                                                           ║
 * ║  Ce module charge TOUT le contenu depuis le dossier /content              ║
 * ║  Aucune donnée n'est hardcodée dans le code TypeScript !                  ║
 * ║                                                                           ║
 * ║  ✨ Ajouter un blog post ? → Créer un .md dans /content/blog/             ║
 * ║  ✨ Ajouter un projet ?    → Créer un .md dans /content/projects/         ║
 * ║  ✨ Ajouter une skill ?    → Créer un .md dans /content/skills/           ║
 * ║  ✨ Ajouter une exp ?      → Créer un .md dans /content/experience/       ║
 * ║  ✨ Ajouter une formation? → Créer un .md dans /content/education/        ║
 * ║                                                                           ║
 * ╚═══════════════════════════════════════════════════════════════════════════╝
 */

import yaml from 'js-yaml';
import Assets, { autoAsset } from './assets';
import type { Asset, BlogPost, Project, Skill, Experience, Education, Link, Screenshot, SkillCategory, ContractType, Attachment, AttachmentType } from './types';
import { ContractType as CT, AttachmentType as AT } from './types';

// ============================================================================
// HELPERS
// ============================================================================

/**
 * Parse une date depuis YAML (peut être Date object ou string)
 */
function parseDate(value: unknown, fallback = new Date()): Date {
	if (value instanceof Date && !isNaN(value.getTime())) {
		return value;
	}
	if (typeof value === 'string') {
		// Gère le format YYYY-MM-DD explicitement
		const isoMatch = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
		if (isoMatch) {
			const [, year, month, day] = isoMatch;
			return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
		}
		const d = new Date(value);
		if (!isNaN(d.getTime())) return d;
	}
	console.log('[parseDate] Failed to parse:', value, '- using fallback');
	return fallback;
}

function parseDateOptional(value: unknown): Date | undefined {
	if (!value) return undefined;
	if (value instanceof Date && !isNaN(value.getTime())) {
		return value;
	}
	if (typeof value === 'string') {
		// Gère le format YYYY-MM-DD explicitement
		const isoMatch = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
		if (isoMatch) {
			const [, year, month, day] = isoMatch;
			return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
		}
		const d = new Date(value);
		if (!isNaN(d.getTime())) return d;
	}
	return undefined;
}

/**
 * Vérifie si un asset est le fallback "no-img" (pas une vraie icône)
 */
function isPlaceholderAsset(asset: Asset): boolean {
	return asset.light.includes('no-img') || asset.light === Assets.Unknown.light;
}

/**
 * Résout un nom d'asset vers un objet Asset
 * Utilise Devicon/SimpleIcons comme fallback automatique si pas trouvé localement
 */
function resolveAsset(name: string | undefined): Asset {
	if (!name) {
		return Assets.Unknown;
	}
	
	// Si c'est une URL externe (http/https), créer un asset direct
	if (name.startsWith('http://') || name.startsWith('https://')) {
		return {
			light: name,
			dark: name,
			fallback: Assets.Unknown.light
		};
	}
	
	// Essayer la correspondance exacte d'abord
	let asset = (Assets as Record<string, Asset>)[name];
	if (asset && !isPlaceholderAsset(asset)) {
		return asset;
	}
	
	// Essayer avec différentes variations de casse
	const variations = [
		name,
		name.charAt(0).toUpperCase() + name.slice(1), // Capitalize first
		name.toUpperCase(),
		name.toLowerCase(),
		// CamelCase vers PascalCase pour des cas comme "reactjs" -> "ReactJs"
		name.replace(/(?:^|[-_])(\w)/g, (_, c) => c ? c.toUpperCase() : '')
	];
	
	for (const variant of variations) {
		asset = (Assets as Record<string, Asset>)[variant];
		if (asset && !isPlaceholderAsset(asset)) return asset;
	}
	
	// Mapping spécifique pour les cas courants
	const aliasMap: Record<string, string> = {
		'react': 'ReactJs',
		'node': 'NodeJs',
		'js': 'JavaScript',
		'ts': 'TypeScript',
		'vue': 'VueJs',
		'express': 'ExpressJs',
		'postgres': 'PostgreSQL',
		'postgresql': 'PostgreSQL',
		'mongo': 'MongoDB',
		'tailwindcss': 'Tailwind'
	};
	
	const aliasKey = name.toLowerCase();
	if (aliasMap[aliasKey]) {
		asset = (Assets as Record<string, Asset>)[aliasMap[aliasKey]];
		if (asset && !isPlaceholderAsset(asset)) return asset;
	}
	
	// 🚀 FALLBACK AUTOMATIQUE: Utiliser Devicon/SimpleIcons CDN
	const autoAssetResult = autoAsset(name);
	return autoAssetResult;
}

/**
 * Nettoie le Markdown pour obtenir du texte brut (pour les descriptions courtes)
 */
function stripMarkdown(md: string): string {
	if (!md) return '';
	
	return md
		// Supprimer les directives custom (::toc, :::buttons, ::button[...]{...}, :i[icon], etc.)
		.replace(/^::toc\s*$/gm, '')
		.replace(/^:::[\w-]+\s*$/gm, '')
		.replace(/::button\[[^\]]*\]\{[^}]*\}/g, '')
		.replace(/:i(?:con)?\[[^\]]+\]/g, '') // Supprimer les icônes inline
		.replace(/::[\w-]+(?:\[[^\]]*\])?(?:\{[^}]*\})?/g, '')
		// Supprimer les balises HTML
		.replace(/<[^>]*>/g, '')
		// Supprimer les headers
		.replace(/^#{1,6}\s+/gm, '')
		// Supprimer les emojis (optionnel, garde-les si tu veux)
		// .replace(/[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '')
		// Supprimer le gras et l'italique
		.replace(/\*\*([^*]+)\*\*/g, '$1')
		.replace(/\*([^*]+)\*/g, '$1')
		.replace(/__([^_]+)__/g, '$1')
		.replace(/_([^_]+)_/g, '$1')
		// Supprimer les liens mais garder le texte
		.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
		// Supprimer les images
		.replace(/!\[[^\]]*\]\([^)]+\)/g, '')
		// Supprimer les blocs de code
		.replace(/```[\s\S]*?```/g, '')
		.replace(/`([^`]+)`/g, '$1')
		// Supprimer les listes
		.replace(/^[\s]*[-*+]\s+/gm, '')
		.replace(/^[\s]*\d+\.\s+/gm, '')
		// Supprimer les blockquotes
		.replace(/^>\s+/gm, '')
		// Supprimer les lignes horizontales
		.replace(/^[-*_]{3,}$/gm, '')
		// Supprimer les sauts de ligne multiples
		.replace(/\n{2,}/g, ' ')
		// Supprimer les sauts de ligne simples
		.replace(/\n/g, ' ')
		// Supprimer les espaces multiples
		.replace(/\s{2,}/g, ' ')
		// Trim
		.trim();
}

/**
 * Détecte automatiquement l'icône d'un lien basé sur son URL
 */
function detectLinkIcon(url: string, label: string): string | undefined {
	const lowerUrl = url.toLowerCase();
	const lowerLabel = label.toLowerCase();
	
	// GitHub
	if (lowerUrl.includes('github.com') || lowerLabel.includes('github')) {
		return 'i-carbon-logo-github';
	}
	
	// GitLab
	if (lowerUrl.includes('gitlab.com') || lowerLabel.includes('gitlab')) {
		return 'i-carbon-logo-gitlab';
	}
	
	// YouTube
	if (lowerUrl.includes('youtube.com') || lowerUrl.includes('youtu.be') || lowerLabel.includes('youtube')) {
		return 'i-carbon-logo-youtube';
	}
	
	// LinkedIn
	if (lowerUrl.includes('linkedin.com') || lowerLabel.includes('linkedin')) {
		return 'i-carbon-logo-linkedin';
	}
	
	// Twitter/X
	if (lowerUrl.includes('twitter.com') || lowerUrl.includes('x.com') || lowerLabel.includes('twitter')) {
		return 'i-carbon-logo-x';
	}
	
	// Discord
	if (lowerUrl.includes('discord.com') || lowerUrl.includes('discord.gg') || lowerLabel.includes('discord')) {
		return 'i-carbon-logo-discord';
	}
	
	// Slack
	if (lowerUrl.includes('slack.com') || lowerLabel.includes('slack')) {
		return 'i-carbon-logo-slack';
	}
	
	// Medium
	if (lowerUrl.includes('medium.com') || lowerLabel.includes('medium')) {
		return 'i-carbon-logo-medium';
	}
	
	// Figma
	if (lowerUrl.includes('figma.com') || lowerLabel.includes('figma')) {
		return 'i-carbon-logo-figma';
	}
	
	// npm
	if (lowerUrl.includes('npmjs.com') || lowerLabel.includes('npm')) {
		return 'i-carbon-logo-npm';
	}
	
	// Documentation / Wiki
	if (lowerLabel.includes('doc') || lowerLabel.includes('wiki') || lowerLabel.includes('readme')) {
		return 'i-carbon-document';
	}
	
	// Notebook / Jupyter
	if (lowerUrl.includes('.ipynb') || lowerLabel.includes('notebook') || lowerLabel.includes('jupyter')) {
		return 'i-carbon-notebook';
	}
	
	// Demo / Live
	if (lowerLabel.includes('demo') || lowerLabel.includes('live') || lowerLabel.includes('preview')) {
		return 'i-carbon-view';
	}
	
	// Download
	if (lowerLabel.includes('download') || lowerLabel.includes('télécharger')) {
		return 'i-carbon-download';
	}
	
	// Video
	if (lowerLabel.includes('video') || lowerLabel.includes('vidéo')) {
		return 'i-carbon-video';
	}
	
	// API
	if (lowerLabel.includes('api')) {
		return 'i-carbon-api';
	}
	
	// Pas d'icône détectée - retourne undefined pour utiliser l'icône par défaut
	return undefined;
}

/**
 * Parse les liens depuis le frontmatter
 */
function parseLinks(links: unknown): Link[] {
	if (!Array.isArray(links)) return [];
	return links.map((l: any) => {
		const to = l.to || '';
		const label = l.label || '';
		return {
			to,
			label,
			newTab: l.newTab ?? true,
			icon: l.icon || detectLinkIcon(to, label)
		};
	});
}

/**
 * Parse les screenshots depuis le frontmatter
 */
function parseScreenshots(screenshots: unknown): Screenshot[] {
	if (!Array.isArray(screenshots)) return [];
	return screenshots.map((s: any) => ({
		src: s.src || '',
		label: s.label || ''
	}));
}

/**
 * Détecte automatiquement le type de pièce jointe basé sur l'extension ou l'URL
 */
function detectAttachmentType(src: string): AttachmentType {
	const lowerSrc = src.toLowerCase();
	
	// Images
	if (/\.(jpg|jpeg|png|gif|webp|svg|bmp|ico)(\?.*)?$/i.test(lowerSrc) ||
		lowerSrc.includes('unsplash.com') || 
		lowerSrc.includes('imgur.com')) {
		return AT.Image;
	}
	
	// PDF
	if (/\.pdf(\?.*)?$/i.test(lowerSrc)) {
		return AT.PDF;
	}
	
	// Documents
	if (/\.(doc|docx|odt|rtf|txt|xls|xlsx|ppt|pptx)(\?.*)?$/i.test(lowerSrc)) {
		return AT.Document;
	}
	
	// Archives
	if (/\.(zip|rar|7z|tar|gz|bz2)(\?.*)?$/i.test(lowerSrc)) {
		return AT.Archive;
	}
	
	// Vidéo
	if (/\.(mp4|webm|avi|mov|mkv)(\?.*)?$/i.test(lowerSrc) ||
		lowerSrc.includes('youtube.com') ||
		lowerSrc.includes('youtu.be') ||
		lowerSrc.includes('vimeo.com')) {
		return AT.Video;
	}
	
	// Audio
	if (/\.(mp3|wav|ogg|flac|aac)(\?.*)?$/i.test(lowerSrc)) {
		return AT.Audio;
	}
	
	// Code
	if (/\.(js|ts|py|java|c|cpp|cs|go|rs|rb|php|html|css|json|xml|yaml|yml|sh|bash)(\?.*)?$/i.test(lowerSrc) ||
		lowerSrc.includes('github.com') ||
		lowerSrc.includes('gitlab.com') ||
		lowerSrc.includes('gist.github.com')) {
		return AT.Code;
	}
	
	// Liens externes (URLs sans extension de fichier connue)
	if (lowerSrc.startsWith('http://') || lowerSrc.startsWith('https://')) {
		return AT.Link;
	}
	
	return AT.Other;
}

/**
 * Retourne l'icône par défaut pour un type de pièce jointe
 */
function getDefaultAttachmentIcon(type: AttachmentType): string {
	const icons: Record<AttachmentType, string> = {
		[AT.Image]: 'i-carbon-image',
		[AT.PDF]: 'i-carbon-document-pdf',
		[AT.Document]: 'i-carbon-document',
		[AT.Archive]: 'i-carbon-zip',
		[AT.Video]: 'i-carbon-video',
		[AT.Audio]: 'i-carbon-music',
		[AT.Code]: 'i-carbon-code',
		[AT.Link]: 'i-carbon-link',
		[AT.Other]: 'i-carbon-attachment'
	};
	return icons[type] || 'i-carbon-attachment';
}

/**
 * Parse les pièces jointes depuis le frontmatter
 */
function parseAttachments(attachments: unknown): Attachment[] {
	if (!Array.isArray(attachments)) return [];
	
	return attachments.map((a: any) => {
		const src = a.src || a.url || '';
		const type = a.type ? (AT[a.type as keyof typeof AT] || detectAttachmentType(src)) : detectAttachmentType(src);
		const isExternal = src.startsWith('http://') || src.startsWith('https://');
		
		return {
			label: a.label || a.name || 'Pièce jointe',
			src,
			type,
			description: a.description || undefined,
			size: a.size || undefined,
			icon: a.icon || getDefaultAttachmentIcon(type),
			newTab: a.newTab ?? isExternal
		} as Attachment;
	});
}

/**
 * Parse le type de contrat
 */
function parseContract(contract: string | undefined): ContractType {
	const map: Record<string, ContractType> = {
		'FullTime': CT.FullTime,
		'Full-time': CT.FullTime,
		'PartTime': CT.PartTime,
		'Part-time': CT.PartTime,
		'SelfEmployed': CT.SelfEmployed,
		'Self-employed': CT.SelfEmployed,
		'Freelance': CT.Freelance,
		'Contract': CT.Contract,
		'Internship': CT.Internship,
		'Apprenticeship': CT.Apprenticeship
	};
	return map[contract || ''] || CT.Contract;
}

/**
 * Extrait le slug du chemin du fichier
 */
function extractSlug(path: string): string {
	const filename = path.split('/').pop() || '';
	return filename.replace(/\.(md|yaml|yml)$/, '');
}

/**
 * Parse le frontmatter YAML et le contenu markdown d'un fichier
 */
function parseMarkdownFile<T = Record<string, unknown>>(raw: string, slug: string): { meta: T; content: string } {
	// Normaliser les retours à la ligne (Windows \r\n -> Unix \n)
	const normalizedRaw = raw.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
	
	const frontmatterRegex = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/;
	const match = normalizedRaw.match(frontmatterRegex);

	if (!match) {
		console.log(`[parseMarkdownFile] No frontmatter found for ${slug}, raw starts with:`, normalizedRaw.substring(0, 50));
		return { meta: { slug } as T, content: normalizedRaw };
	}

	       const [, frontmatter, content] = match;

	       try {
		       const meta = yaml.load(frontmatter) as T;
		       console.log(`[parseMarkdownFile] Parsed ${slug}:`, JSON.stringify(meta));
		       // Ne pas faire trim() global, juste retirer le frontmatter
		       // On retire seulement le \n de début si présent
		       const cleanContent = content.startsWith('\n') ? content.slice(1) : content;
		       return { meta: { ...meta, slug }, content: cleanContent };
	       } catch (e) {
		       console.error(`Error parsing frontmatter for ${slug}:`, e);
		       return { meta: { slug } as T, content: content?.startsWith('\n') ? content.slice(1) : (content || normalizedRaw) };
	       }
}

// ============================================================================
// CATEGORIES (pour les skills)
// ============================================================================

const categories: SkillCategory[] = [
	{ name: 'Programming Languages', slug: 'pro-lang' },
	{ name: 'Frameworks', slug: 'framework' },
	{ name: 'Libraries', slug: 'library' },
	{ name: 'Languages', slug: 'lang' },
	{ name: 'Databases', slug: 'db' },
	{ name: 'ORMs', slug: 'orm' },
	{ name: 'DevOps', slug: 'devops' },
	{ name: 'Testing', slug: 'test' },
	{ name: 'Dev Tools', slug: 'devtools' },
	{ name: 'Markup & Style', slug: 'markup-style' },
	{ name: 'Design', slug: 'design' },
	{ name: 'Soft Skills', slug: 'soft' },
	{ name: 'IDE', slug: 'ide' },
	{ name: 'Operating Systems', slug: 'os' },
	{ name: 'Office', slug: 'office' },
	{ name: 'Collaboration', slug: 'collaboration' },
	{ name: 'Game Engine', slug: 'game-engine' },
	{ name: 'Hardware', slug: 'hardware' },
	{ name: 'Spoken Languages', slug: 'spoken-lang' }
];

function findCategory(slug: string | undefined): SkillCategory | undefined {
	if (!slug) return undefined;
	return categories.find(c => c.slug === slug);
}

// ============================================================================
// LOADERS
// ============================================================================

// Import tous les fichiers de contenu
const blogFiles = import.meta.glob('/content/blog/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;
const projectFiles = import.meta.glob('/content/projects/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;
const skillFiles = import.meta.glob('/content/skills/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;
const experienceFiles = import.meta.glob('/content/experience/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;
const educationFiles = import.meta.glob('/content/education/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;

// ============================================================================
// SKILLS
// ============================================================================

interface SkillMeta {
	name: string;
	slug?: string;
	category?: string;
	color?: string;
	logo?: string;
	published?: boolean;
}

let _skillsCache: Skill[] | null = null;

function loadAllSkills(): Skill[] {
	if (_skillsCache) return _skillsCache;
	
	console.log('[loadAllSkills] Starting to load skills...');
	console.log('[loadAllSkills] skillFiles keys:', Object.keys(skillFiles));
	
	const skills: Skill[] = [];
	
	for (const [path, raw] of Object.entries(skillFiles)) {
		const slug = extractSlug(path);
		const { meta, content } = parseMarkdownFile<SkillMeta>(raw, slug);
		
		// Skip unpublished content
		if (meta.published === false) {
			console.log(`[loadAllSkills] Skipping ${slug} (published: false)`);
			continue;
		}
		
		console.log(`[loadAllSkills] Processing ${slug}:`, { name: meta.name, logo: meta.logo, rawLogoType: typeof meta.logo });
		
		skills.push({
			slug: meta.slug || slug,
			name: meta.name || slug,
			logo: resolveAsset(meta.logo),
			description: content || meta.name || '',
			color: meta.color || 'gray',
			category: findCategory(meta.category)
		});
	}
	
	_skillsCache = skills;
	return skills;
}

export function getSkills(...slugs: string[]): Skill[] {
	const all = loadAllSkills();
	if (slugs.length === 0) return all;
	return all.filter(s => slugs.includes(s.slug));
}

export function groupByCategory(query: string = ''): Array<{ category: SkillCategory; items: Skill[] }> {
	const all = loadAllSkills();
	const out: Array<{ category: SkillCategory; items: Skill[] }> = [];
	const others: Skill[] = [];

	all.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		if (!item.category) {
			others.push(item);
			return;
		}

		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };
			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	// Trier les catégories selon l'ordre défini
	out.sort((a, b) => {
		const indexA = categories.findIndex(cat => cat.slug === a.category.slug);
		const indexB = categories.findIndex(cat => cat.slug === b.category.slug);
		if (indexA === -1) return 1;
		if (indexB === -1) return -1;
		return indexA - indexB;
	});

	// Trier les compétences à l'intérieur de chaque catégorie par ordre alphabétique
	out.forEach(category => {
		category.items.sort((a, b) => a.name.localeCompare(b.name));
	});

	return out;
}

// ============================================================================
// BLOG
// ============================================================================

interface BlogMeta {
	title?: string;
	slug?: string;
	name?: string;
	excerpt?: string;
	author?: string;
	publishedAt?: Date | string;
	updatedAt?: Date | string;
	tags?: string[];
	logo?: string;
	coverImage?: string;
	readingTime?: number;
	color?: string;
	pinned?: boolean;
	links?: any[];
	published?: boolean;
}

function loadAllBlogPosts(): BlogPost[] {
	const posts: BlogPost[] = [];
	
	for (const [path, raw] of Object.entries(blogFiles)) {
		const slug = extractSlug(path);
		const { meta, content } = parseMarkdownFile<BlogMeta>(raw, slug);
		
		// Skip unpublished content
		if (meta.published === false) continue;
		
		posts.push({
			slug: meta.slug || slug,
			name: meta.name || meta.title || slug,
			title: meta.title || meta.name || slug,
			logo: resolveAsset(meta.logo),
			excerpt: meta.excerpt || '',
			shortDescription: meta.excerpt || '',
			description: content,
			content: content,
			author: meta.author || 'Anonymous',
			publishedAt: parseDate(meta.publishedAt),
			updatedAt: parseDateOptional(meta.updatedAt),
			tags: meta.tags || [],
			coverImage: meta.coverImage ? resolveAsset(meta.coverImage) : undefined,
			readingTime: meta.readingTime || Math.ceil(content.split(/\s+/).length / 200),
			color: meta.color,
			links: parseLinks(meta.links),
			pinned: meta.pinned || false
		});
	}
	
	// Trier par date (plus récent en premier)
	return posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
}

// ============================================================================
// PROJECTS
// ============================================================================

interface ProjectMeta {
	name?: string;
	slug?: string;
	shortDescription?: string;
	type?: string;
	color?: string;
	logo?: string;
	category?: string;
	period?: { from?: Date | string; to?: Date | string };
	skills?: string[];
	links?: any[];
	screenshots?: any[];
	attachments?: any[];
	published?: boolean;
	pinned?: boolean;
}

function loadAllProjects(): Project[] {
	const projects: Project[] = [];
	
	for (const [path, raw] of Object.entries(projectFiles)) {
		const slug = extractSlug(path);
		const { meta, content } = parseMarkdownFile<ProjectMeta>(raw, slug);
		
		// Skip unpublished content
		if (meta.published === false) continue;
		
		projects.push({
			slug: meta.slug || slug,
			name: meta.name || slug,
			logo: resolveAsset(meta.logo),
			shortDescription: meta.shortDescription || stripMarkdown(content).substring(0, 200),
			description: content,
			color: meta.color || 'gray',
			type: meta.type || 'Project',
			category: meta.category ? parseProjectCategory(meta.category) : undefined,
			period: {
				from: parseDate(meta.period?.from),
				to: parseDateOptional(meta.period?.to)
			},
			skills: getSkills(...(meta.skills || [])),
			links: parseLinks(meta.links),
			screenshots: parseScreenshots(meta.screenshots),
			attachments: parseAttachments(meta.attachments),
			pinned: meta.pinned || false
		});
	}
	
	// Trier par date (plus récent en premier), puis par nom alphabétique pour stabilité
	return projects.sort((a, b) => {
		const dateCompare = b.period.from.getTime() - a.period.from.getTime();
		if (dateCompare !== 0) return dateCompare;
		return a.name.localeCompare(b.name);
	});
}

// Catégories de projets
const projectCategories = [
	{ slug: 'technique', name: '💻 Projets Techniques' },
	{ slug: 'humain', name: '🤝 Projets Humains' }
];

function parseProjectCategory(category: string): { name: string; slug: string } | undefined {
	const found = projectCategories.find(c => c.slug === category.toLowerCase());
	return found || { name: category, slug: category.toLowerCase() };
}

export function groupProjectsByCategory(query: string = '', filters: string[] = []): Array<{ category: { name: string; slug: string }; items: Project[] }> {
	const all = loadAllProjects();
	const out: Array<{ category: { name: string; slug: string }; items: Project[] }> = [];
	const others: Project[] = [];

	all.forEach((item) => {
		// Filtre par recherche
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;
		
		// Filtre par skills
		if (filters.length > 0 && !item.skills.some(skill => filters.includes(skill.slug))) return;

		if (!item.category) {
			others.push(item);
			return;
		}

		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };
			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: '📁 Autres', slug: 'others' }, items: others });
	}

	// Trier les catégories selon l'ordre défini
	out.sort((a, b) => {
		const indexA = projectCategories.findIndex(cat => cat.slug === a.category.slug);
		const indexB = projectCategories.findIndex(cat => cat.slug === b.category.slug);
		if (indexA === -1) return 1;
		if (indexB === -1) return -1;
		return indexA - indexB;
	});

	return out;
}

// ============================================================================
// EXPERIENCE
// ============================================================================

interface ExperienceMeta {
	name?: string;
	slug?: string;
	shortDescription?: string;
	company?: string;
	type?: string;
	contract?: string;
	location?: string;
	color?: string;
	logo?: string;
	period?: { from?: Date | string; to?: Date | string };
	skills?: string[];
	links?: any[];
	attachments?: any[];
	published?: boolean;
}

function loadAllExperiences(): Experience[] {
	const experiences: Experience[] = [];
	
	for (const [path, raw] of Object.entries(experienceFiles)) {
		const slug = extractSlug(path);
		const { meta, content } = parseMarkdownFile<ExperienceMeta>(raw, slug);
		
		// Skip unpublished content
		if (meta.published === false) continue;
		
		console.log(`[loadAllExperiences] ${slug}:`, {
			name: meta.name,
			shortDescription: meta.shortDescription?.substring(0, 50),
			period: meta.period
		});
		
		experiences.push({
			slug: meta.slug || slug,
			name: meta.name || slug,
			logo: resolveAsset(meta.logo),
			shortDescription: meta.shortDescription || stripMarkdown(content).substring(0, 200),
			description: content,
			company: meta.company || '',
			location: meta.location || '',
			contract: parseContract(meta.contract),
			type: meta.type || 'Development',
			color: meta.color || 'gray',
			period: {
				from: parseDate(meta.period?.from),
				to: parseDateOptional(meta.period?.to)
			},
			skills: getSkills(...(meta.skills || [])),
			links: parseLinks(meta.links),
			attachments: parseAttachments(meta.attachments)
		});
	}
	
	// Trier par date (plus récent en premier)
	return experiences.sort((a, b) => b.period.from.getTime() - a.period.from.getTime());
}

// ============================================================================
// EDUCATION
// ============================================================================

interface EducationMeta {
	name?: string;
	slug?: string;
	shortDescription?: string;
	degree?: string;
	organization?: string;
	location?: string;
	color?: string;
	logo?: string;
	period?: { from?: Date | string; to?: Date | string };
	subjects?: string[];
	links?: any[];
	attachments?: any[];
	published?: boolean;
}

function loadAllEducation(): Education[] {
	const education: Education[] = [];
	
	for (const [path, raw] of Object.entries(educationFiles)) {
		const slug = extractSlug(path);
		const { meta, content } = parseMarkdownFile<EducationMeta>(raw, slug);
		
		// Skip unpublished content
		if (meta.published === false) continue;
		
		education.push({
			slug: meta.slug || slug,
			name: meta.name || slug,
			logo: resolveAsset(meta.logo),
			shortDescription: meta.shortDescription || stripMarkdown(content).substring(0, 200),
			description: content,
			degree: meta.degree || '',
			organization: meta.organization || '',
			location: meta.location || '',
			color: meta.color,
			period: {
				from: parseDate(meta.period?.from),
				to: parseDateOptional(meta.period?.to)
			},
			subjects: meta.subjects || [],
			links: parseLinks(meta.links),
			attachments: parseAttachments(meta.attachments)
		});
	}
	
	// Trier par date (plus récent en premier)
	return education.sort((a, b) => b.period.from.getTime() - a.period.from.getTime());
}

// ============================================================================
// ABOUT PAGE
// ============================================================================

// Charger le fichier about.md
const aboutFile = import.meta.glob('/content/about.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;

interface AboutMeta {
	title?: string;
	attachments?: any[];
}

export interface AboutData {
	title: string;
	content: string;
	attachments: Attachment[];
}

function loadAboutPage(): AboutData {
	const raw = Object.values(aboutFile)[0];
	
	if (!raw) {
		console.log('[loadAboutPage] No about.md file found');
		return {
			title: 'À propos',
			content: '',
			attachments: []
		};
	}
	
	const { meta, content } = parseMarkdownFile<AboutMeta>(raw, 'about');
	
	return {
		title: meta.title || 'À propos',
		content,
		attachments: parseAttachments(meta.attachments)
	};
}

// ============================================================================
// SITE CONFIG & PAGES
// ============================================================================

// Charger les fichiers de configuration
const siteConfigFile = import.meta.glob('/content/site.yaml', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;
const homePageFile = import.meta.glob('/content/pages/home.yaml', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;
const resumePageFile = import.meta.glob('/content/pages/resume.yaml', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;
const contactPageFile = import.meta.glob('/content/pages/contact.yaml', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;

interface SocialLink {
	label: string;
	href: string;
	icon: string;
}

interface InConstructionConfig {
	enabled: boolean;
	title: string;
	message: string;
}

interface SiteConfig {
	firstName: string;
	lastName: string;
	jobTitle: string;
	email: string;
	socialLinks: SocialLink[];
	inConstruction: InConstructionConfig;
}

function loadSiteConfig(): SiteConfig {
	const raw = Object.values(siteConfigFile)[0];
	if (!raw) {
		return {
			firstName: 'Prénom',
			lastName: 'NOM',
			jobTitle: 'Développeur',
			email: 'contact@example.com',
			socialLinks: [],
			inConstruction: {
				enabled: false,
				title: '',
				message: ''
			}
		};
	}
	
	const normalized = raw.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
	const config = yaml.load(normalized) as Record<string, unknown>;
	
	const inConstructionRaw = config.inConstruction as Record<string, unknown> | undefined;
	
	return {
		firstName: (config.firstName as string) || 'Prénom',
		lastName: (config.lastName as string) || 'NOM',
		jobTitle: (config.jobTitle as string) || 'Développeur',
		email: (config.email as string) || 'contact@example.com',
		socialLinks: ((config.socialLinks as SocialLink[]) || []).map(link => ({
			label: link.label,
			href: link.href,
			icon: link.icon
		})),
		inConstruction: {
			enabled: inConstructionRaw?.enabled as boolean ?? false,
			title: (inConstructionRaw?.title as string) || '',
			message: (inConstructionRaw?.message as string) || ''
		}
	};
}

interface HomePageData {
	title: string;
	heroDescription: string;
	socialLinks: SocialLink[];
	fullName: string;
}

function loadHomePage(): HomePageData {
	const siteConfig = loadSiteConfig();
	const raw = Object.values(homePageFile)[0];
	
	let title = 'Accueil';
	let heroDescription = '';
	
	if (raw) {
		const normalized = raw.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
		const config = yaml.load(normalized) as Record<string, unknown>;
		title = (config.title as string) || 'Accueil';
		const hero = config.hero as Record<string, unknown> | undefined;
		heroDescription = (hero?.description as string) || '';
	}
	
	return {
		title,
		heroDescription,
		socialLinks: siteConfig.socialLinks,
		fullName: `${siteConfig.firstName} ${siteConfig.lastName}`
	};
}

interface ResumePageData {
	title: string;
	pdfPath: string;
	downloadLabel: string;
	fullscreenLabel: string;
}

function loadResumePage(): ResumePageData {
	const raw = Object.values(resumePageFile)[0];
	
	if (!raw) {
		return {
			title: 'CV',
			pdfPath: '/pdf/cv.pdf',
			downloadLabel: 'Télécharger',
			fullscreenLabel: 'Plein écran'
		};
	}
	
	const normalized = raw.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
	const config = yaml.load(normalized) as Record<string, unknown>;
	
	return {
		title: (config.title as string) || 'CV',
		pdfPath: (config.pdfPath as string) || '/pdf/cv.pdf',
		downloadLabel: (config.downloadLabel as string) || 'Télécharger',
		fullscreenLabel: (config.fullscreenLabel as string) || 'Plein écran'
	};
}

interface ContactPageData {
	title: string;
	description: string;
	email: string;
	form: {
		nameLabel: string;
		namePlaceholder: string;
		emailLabel: string;
		emailPlaceholder: string;
		messageLabel: string;
		messagePlaceholder: string;
		submitLabel: string;
		sendingLabel: string;
	};
	messages: {
		success: string;
		error: string;
		validationError: string;
	};
}

function loadContactPage(): ContactPageData {
	const siteConfig = loadSiteConfig();
	const raw = Object.values(contactPageFile)[0];
	
	const defaults: ContactPageData = {
		title: 'Contact',
		description: "N'hésitez pas à me contacter.",
		email: siteConfig.email,
		form: {
			nameLabel: 'Nom',
			namePlaceholder: 'Votre nom',
			emailLabel: 'Email',
			emailPlaceholder: 'votre@email.com',
			messageLabel: 'Message',
			messagePlaceholder: 'Votre message...',
			submitLabel: 'Envoyer',
			sendingLabel: 'Envoi en cours...'
		},
		messages: {
			success: 'Message envoyé avec succès !',
			error: 'Une erreur est survenue.',
			validationError: 'Veuillez remplir tous les champs.'
		}
	};
	
	if (!raw) return defaults;
	
	const normalized = raw.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
	const config = yaml.load(normalized) as Record<string, unknown>;
	const formConfig = config.form as Record<string, string> | undefined;
	const messagesConfig = config.messages as Record<string, string> | undefined;
	
	return {
		title: (config.title as string) || defaults.title,
		description: (config.description as string) || defaults.description,
		email: (config.email as string) || defaults.email,
		form: {
			nameLabel: formConfig?.nameLabel || defaults.form.nameLabel,
			namePlaceholder: formConfig?.namePlaceholder || defaults.form.namePlaceholder,
			emailLabel: formConfig?.emailLabel || defaults.form.emailLabel,
			emailPlaceholder: formConfig?.emailPlaceholder || defaults.form.emailPlaceholder,
			messageLabel: formConfig?.messageLabel || defaults.form.messageLabel,
			messagePlaceholder: formConfig?.messagePlaceholder || defaults.form.messagePlaceholder,
			submitLabel: formConfig?.submitLabel || defaults.form.submitLabel,
			sendingLabel: formConfig?.sendingLabel || defaults.form.sendingLabel
		},
		messages: {
			success: messagesConfig?.success || defaults.messages.success,
			error: messagesConfig?.error || defaults.messages.error,
			validationError: messagesConfig?.validationError || defaults.messages.validationError
		}
	};
}

// ============================================================================
// EXPORTS
// ============================================================================

export const SiteConfigData = loadSiteConfig();
export const HomePageData = loadHomePage();
export const ResumePageData = loadResumePage();
export const ContactPageData = loadContactPage();

export const AboutPageData = loadAboutPage();

export const BlogData = {
	title: 'Blog',
	items: loadAllBlogPosts()
};

export const ProjectsData = {
	title: 'Projets',
	items: loadAllProjects()
};

export const SkillsData = {
	title: 'Skills',
	items: loadAllSkills()
};

export const ExperienceData = {
	title: 'Expérience',
	items: loadAllExperiences()
};

export const EducationData = {
	title: 'Formation',
	items: loadAllEducation()
};
