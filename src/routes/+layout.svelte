<script lang="ts">
	import NavBar from '$lib/components/common/nav-bar/nav-bar.svelte';
	import ScrollToTop from '$lib/components/common/scroll-to-top/scroll-to-top.svelte';
	import Loader from '$lib/components/common/loader/loader.svelte';
	import { AnimatedBackground } from '$lib/components/ui/animated-background';
	import { InConstruction } from '$lib/components/ui/in-construction';
	import 'virtual:uno.css';
	import '../app.css';
	import '../markdown.css';
	import { ModeWatcher } from 'mode-watcher';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cleanGoogleTranslateArtifacts } from '$lib/utils/googleTranslateCleaner';

	let { children } = $props();
	let showLoader = $state(true);
	let appReady = $state(false);

	/**
	 * Détecte si le visiteur est un bot, crawler ou navigateur headless.
	 * Utilisé pour bypasser le loader et afficher directement le contenu,
	 * permettant ainsi aux services de preview (GitHub, Discord, etc.) de
	 * capturer le rendu final sans animation.
	 * 
	 * Note: Le contenu reste identique, seule l'animation est désactivée.
	 * Aucun impact sur le SEO.
	 */
	function isBotOrHeadless(): boolean {
		if (typeof window === 'undefined' || typeof navigator === 'undefined') {
			return false; // SSR guard
		}

		// Détection via navigator.webdriver (true pour Puppeteer, Playwright, Selenium, etc.)
		if (navigator.webdriver === true) {
			return true;
		}

		const userAgent = navigator.userAgent.toLowerCase();

		// Liste des patterns de bots, crawlers et services de preview
		const botPatterns = [
			// Navigateurs headless
			'headlesschrome',
			'headless',
			'puppeteer',
			'playwright',
			'phantomjs',
			'selenium',
			// Moteurs de recherche
			'googlebot',
			'bingbot',
			'yandexbot',
			'duckduckbot',
			'baiduspider',
			'sogou',
			// Réseaux sociaux et messageries
			'discordbot',
			'slackbot',
			'twitterbot',
			'facebookexternalhit',
			'linkedinbot',
			'whatsapp',
			'telegrambot',
			'skypeuripreview',
			// Services de preview et screenshots
			'prerender',
			'screenshotbot',
			'browsershot',
			'urlpreviewbot',
			// Crawlers génériques
			'bot',
			'crawler',
			'spider',
			'scraper',
			'curl',
			'wget',
			'fetch'
		];

		return botPatterns.some(pattern => userAgent.includes(pattern));
	}

	onMount(() => {
		// Bypass du loader pour les bots/headless : affichage immédiat du contenu
		if (isBotOrHeadless()) {
			showLoader = false;
			appReady = true;
			return;
		}

		// Comportement normal pour les vrais utilisateurs
		// Temps de chargement très rapide pour une UX optimale
		setTimeout(() => {
			showLoader = false;
			// Attendre que le loader commence à disparaître avant de montrer l'app
			setTimeout(() => {
				appReady = true;
			}, 20);
		}, 100); // Réduit de 300ms à 100ms
		
		cleanGoogleTranslateArtifacts();

		const observer = new MutationObserver(() => {
			cleanGoogleTranslateArtifacts();
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true
		});
	});
</script>

<ModeWatcher />

<!-- Background animé toujours visible -->
<AnimatedBackground />

<!-- Loader -->
<Loader visible={showLoader} />

<!-- App principale -->
{#if appReady}
	<div 
		class="app-container" 
		transition:fade={{ duration: 200 }}
	>
		<div class="flex h-screen w-screen flex-col overflow-x-hidden">
			<NavBar />
			<div class="mt-[50px] flex flex-1 flex-col">{@render children()}</div>
			<InConstruction />
		</div>
		<ScrollToTop />
	</div>
{/if}
