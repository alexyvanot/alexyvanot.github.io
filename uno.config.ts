import { defineConfig, presetIcons, presetWebFonts } from 'unocss';

export default defineConfig({
	// Safelist pour les icônes chargées dynamiquement depuis YAML et Markdown
	safelist: [
		// Social links
		'i-carbon-logo-github',
		'i-carbon-logo-linkedin',
		'i-carbon-at',
		'i-carbon-blog',
		// Attachment types icons
		'i-carbon-image',
		'i-carbon-document-pdf',
		'i-carbon-document',
		'i-carbon-zip',
		'i-carbon-video',
		'i-carbon-music',
		'i-carbon-code',
		'i-carbon-link',
		'i-carbon-attachment',
		'i-carbon-download',
		'i-carbon-launch',
		// Icônes pour boutons markdown (compétences soft skills)
		'i-carbon-user-certification', // Autonomie
		'i-carbon-idea', // Créativité
		'i-carbon-group', // Travail d'équipe
		// Icônes pour boutons markdown (compétences techniques)
		'i-logos-python',
		'i-logos-java',
		'i-logos-svelte-icon'
	],
	content: {
		pipeline: {
			include: [
				/\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
				// include js/ts files
				'src/**/*.{js,ts}',
				// include yaml files for dynamic icons
				'content/**/*.yaml',
				// include markdown files for dynamic icons in buttons
				'content/**/*.md'
			]
		}
	},
	presets: [
		presetWebFonts({
			fonts: {
				sans: {
					name: 'Inter',
					weights: [400, 500, 600, 700], // Réduire les poids pour améliorer le chargement
					italic: false, // Désactiver l'italique si pas utilisé
					provider: 'google'
				}
			},
			inlineImports: false // Éviter l'import inline pour un meilleur contrôle
		}),
		presetIcons({
			extraProperties: {
				display: 'inline-block',
				'vertical-align': 'middle',
				'font-size': '1em'
			}
		})
	]
});
