import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';

export default defineConfig({
	plugins: [sveltekit(), UnoCSS()],
	optimizeDeps: {
		include: ['@emailjs/browser', 'svelte-sonner']
	},
	define: {
		// Forcer le chargement des variables d'environnement côté serveur
		'process.env.EMAILJS_SERVICE_ID': JSON.stringify(process.env.EMAILJS_SERVICE_ID),
		'process.env.EMAILJS_TEMPLATE_ID': JSON.stringify(process.env.EMAILJS_TEMPLATE_ID),
		'process.env.EMAILJS_PUBLIC_KEY': JSON.stringify(process.env.EMAILJS_PUBLIC_KEY),
		'process.env.EMAILJS_PRIVATE_KEY': JSON.stringify(process.env.EMAILJS_PRIVATE_KEY)
	}
});
