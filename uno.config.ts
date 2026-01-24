import { defineConfig, presetIcons, presetWebFonts } from 'unocss';

export default defineConfig({
	// Safelist pour les icônes chargées dynamiquement depuis YAML et Markdown
	safelist: [
		// === TOUTES LES ICÔNES UTILISÉES DANS CONTENT/ ===
		// Générées automatiquement - ne pas supprimer
		'i-carbon-add',
		'i-carbon-analytics',
		'i-carbon-book',
		'i-carbon-calendar',
		'i-carbon-camera',
		'i-carbon-certificate',
		'i-carbon-chat',
		'i-carbon-checkmark-filled',
		'i-carbon-chemistry',
		'i-carbon-collaborate',
		'i-carbon-color-palette',
		'i-carbon-document',
		'i-carbon-earth',
		'i-carbon-education',
		'i-carbon-email',
		'i-carbon-face-satisfied',
		'i-carbon-favorite',
		'i-carbon-fire',
		'i-carbon-flash',
		'i-carbon-folder',
		'i-carbon-game-console',
		'i-carbon-globe',
		'i-carbon-group',
		'i-carbon-growth',
		'i-carbon-idea',
		'i-carbon-image',
		'i-carbon-image-copy',
		'i-carbon-laptop',
		'i-carbon-lightning',
		'i-carbon-link',
		'i-carbon-location',
		'i-carbon-logo-github',
		'i-carbon-logo-linkedin',
		'i-carbon-magic-wand',
		'i-carbon-meter',
		'i-carbon-moon',
		'i-carbon-music',
		'i-carbon-partnership',
		'i-carbon-pin',
		'i-carbon-portfolio',
		'i-carbon-quotes',
		'i-carbon-renew',
		'i-carbon-roadmap',
		'i-carbon-rocket',
		'i-carbon-scales',
		'i-carbon-search',
		'i-carbon-send-alt',
		'i-carbon-star',
		'i-carbon-star-filled',
		'i-carbon-task-complete',
		'i-carbon-terminal',
		'i-carbon-thumbs-up',
		'i-carbon-trash-can',
		'i-carbon-trophy',
		'i-carbon-user-certification',
		'i-carbon-warning-alt',
		// === AUTRES ICÔNES (attachments, etc.) ===
		'i-carbon-at',
		'i-carbon-blog',
		'i-carbon-document-pdf',
		'i-carbon-zip',
		'i-carbon-video',
		'i-carbon-code',
		'i-carbon-attachment',
		'i-carbon-download',
		'i-carbon-launch',
		// === LOGOS EXTERNES ===
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
