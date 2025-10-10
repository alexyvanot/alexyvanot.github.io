// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

declare module '*.md' {
	const content: string;
	export default content;
}

// Déclaration des variables d'environnement publiques
declare module '$env/static/public' {
	export const PUBLIC_SERVICE_ID: string;
	export const PUBLIC_TEMPLATE_ID: string;
	export const PUBLIC_EMAILJS_KEY: string;
}
