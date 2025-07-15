import { defineConfig, presetIcons, presetWebFonts } from 'unocss';

export default defineConfig({
	content: {
		pipeline: {
			include: [
				/\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
				// include js/ts files
				'src/**/*.{js,ts}'
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
