import type { Color } from './colors';

export type Icon = `i-carbon-${string}`;

export enum Platform {
	GitHub = 'github',
	StackOverflow = 'stackoverflow',
	Twitter = 'twitter',
	Linkedin = 'linkedin',
	Email = 'email',
	Facebook = 'facebook',
	Youtube = 'youtube'
}

export enum ContractType {
	FullTime = 'Full-time',
	PartTime = 'Part-time',
	SelfEmployed = 'Self-employed',
	Freelance = 'Freelance',
	Contract = 'Contract',
	Internship = 'Internship',
	Apprenticeship = 'Apprenticeship'
}

export type Asset = { light: string; dark: string; fallback?: string };

export type ImageItem = {
	src: string;
	label: string;
};

// Alias pour rétrocompatibilité
export type Screenshot = ImageItem;

/**
 * Types de pièces jointes supportés
 */
export enum AttachmentType {
	Image = 'image',
	PDF = 'pdf',
	Document = 'document',  // Word, etc.
	Archive = 'archive',    // ZIP, RAR, etc.
	Video = 'video',
	Audio = 'audio',
	Code = 'code',
	Link = 'link',          // URL externe
	Other = 'other'
}

/**
 * Pièce jointe générique
 * Peut être une image, PDF, document, archive, lien externe, etc.
 */
export interface Attachment {
	/** Nom/label de la pièce jointe */
	label: string;
	/** Source : URL externe ou chemin local (ex: /pdf/cv.pdf, https://example.com/doc.pdf) */
	src: string;
	/** Type de pièce jointe (auto-détecté si non spécifié) */
	type?: AttachmentType;
	/** Description optionnelle */
	description?: string;
	/** Taille du fichier (optionnel, pour affichage) */
	size?: string;
	/** Icône personnalisée (optionnel) */
	icon?: Icon;
	/** Ouvrir dans un nouvel onglet (défaut: true pour liens externes) */
	newTab?: boolean;
}

export interface Item<S extends string = string> {
	slug: S;
	name: string;
	logo: Asset;
	shortDescription: string;
	description: string;
	screenshots?: Array<Screenshot>;
	/** Pièces jointes (images, PDF, documents, liens, etc.) */
	attachments?: Array<Attachment>;
}

export interface Link {
	to: string;
	label: string;
	newTab?: boolean;
	icon?: Icon;
}

export interface SkillCategory<S extends string = string> {
	slug: S;
	name: string;
}

export interface Skill<S extends string = string> extends Omit<Item<S>, 'shortDescription'> {
	color: string;
	category?: SkillCategory;
}

export interface Project<S extends string = string> extends Item<S> {
	links: Array<Link>;
	color: Color;
	period: {
		from: Date;
		to?: Date;
	};
	type: string;
	skills: Array<Skill<S>>;
}

export interface Experience<S extends string = string> extends Project<S> {
	company: string;
	location: string;
	contract: ContractType;
}

export interface Education<S extends string = string> extends Item<S> {
	organization: string;
	location: string;
	period: {
		from: Date;
		to?: Date;
	};
	subjects: Array<string>;
	degree: string;
	links: Array<Link>;
	color?: Color;
}

export interface BlogPost<S extends string = string> extends Item<S> {
	title: string;
	excerpt: string;
	content: string;
	author: string;
	publishedAt: Date;
	updatedAt?: Date;
	tags: Array<string>;
	coverImage?: Asset;
	readingTime: number;
	color?: Color;
	links?: Array<Link>;
	pinned?: boolean;
}
