import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';

export default defineConfig({
	plugins: [sveltekit(), UnoCSS()],
	optimizeDeps: {
		include: [
			'@emailjs/browser', 
			'svelte-sonner',
			'marked',
			'marked-gfm-heading-id',
			'marked-mangle',
			'prismjs',
			'prismjs/components/prism-typescript',
			'dompurify',
			// Composants UI
			'mode-watcher',
			'bits-ui',
			'clsx',
			'tailwind-merge',
			'embla-carousel-svelte',
			'tailwind-variants',
			'@riadh-adrani/utils',
			// Icônes Lucide communes
			'lucide-svelte',
			'lucide-svelte/icons/circle',
			'lucide-svelte/icons/chevron-right',
			'lucide-svelte/icons/check',
			'lucide-svelte/icons/menu',
			'lucide-svelte/icons/x',
			'lucide-svelte/icons/arrow-right',
			'lucide-svelte/icons/arrow-left',
			'lucide-svelte/icons/external-link',
			'lucide-svelte/icons/github',
			'lucide-svelte/icons/mail',
			'lucide-svelte/icons/linkedin',
			'lucide-svelte/icons/calendar',
			'lucide-svelte/icons/clock',
			'lucide-svelte/icons/user',
			'lucide-svelte/icons/home',
			'lucide-svelte/icons/briefcase',
			'lucide-svelte/icons/book',
			'lucide-svelte/icons/code',
			'lucide-svelte/icons/download',
			'lucide-svelte/icons/eye',
			'lucide-svelte/icons/star',
			'lucide-svelte/icons/heart',
			'lucide-svelte/icons/share',
			'lucide-svelte/icons/search',
			'lucide-svelte/icons/filter',
			'lucide-svelte/icons/more-horizontal',
			'lucide-svelte/icons/chevron-down',
			'lucide-svelte/icons/chevron-up',
			'lucide-svelte/icons/plus',
			'lucide-svelte/icons/minus',
			'lucide-svelte/icons/edit',
			'lucide-svelte/icons/trash',
			'lucide-svelte/icons/settings',
			'lucide-svelte/icons/sun',
			'lucide-svelte/icons/moon'
		],
		// Force le rebuild des dépendances au lieu de les exclure
		force: true
	},
	server: {
		fs: {
			strict: false
		}
	},
	// Éviter la découverte dynamique des dépendances
	ssr: {
		noExternal: ['lucide-svelte', 'bits-ui', 'mode-watcher']
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: undefined
			}
		}
	},
	define: {
		// Forcer le chargement des variables d'environnement côté serveur
		'process.env.EMAILJS_SERVICE_ID': JSON.stringify(process.env.EMAILJS_SERVICE_ID),
		'process.env.EMAILJS_TEMPLATE_ID': JSON.stringify(process.env.EMAILJS_TEMPLATE_ID),
		'process.env.EMAILJS_PUBLIC_KEY': JSON.stringify(process.env.EMAILJS_PUBLIC_KEY),
		'process.env.EMAILJS_PRIVATE_KEY': JSON.stringify(process.env.EMAILJS_PRIVATE_KEY)
	}
});
