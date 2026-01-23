<script lang="ts">
	import { NavBar, ScrollToTop } from '$lib/components/layout';
	import { Loader, InConstruction } from '$lib/components/feedback';
	import { AnimatedBackground } from '$lib/components/effects';
	import { cleanGoogleTranslateArtifacts } from '$lib/utils';
	import 'virtual:uno.css';
	import '../app.css';
	import '../markdown.css';
	import { ModeWatcher } from 'mode-watcher';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { afterNavigate } from '$app/navigation';

	let { children } = $props();
	let showLoader = $state(true);
	let appReady = $state(false);

	// Scroll en haut après chaque navigation interne (pas au rechargement)
	afterNavigate((navigation) => {
		const { from, to } = navigation;
		
		// Protection totale contre les valeurs null/undefined
		if (!to?.url?.pathname) return;
		
		// Rechargement de page (F5) ou accès direct avec un hash = scroll vers l'élément
		if (!from && to.url.hash) {
			const targetId = decodeURIComponent(to.url.hash.slice(1));
			
			// Fonction pour scroller vers l'élément avec retry
			const scrollToTarget = (attempts = 0) => {
				const targetElement = document.getElementById(targetId);
				
				if (targetElement) {
					targetElement.classList.add('hash-target-highlight');
					targetElement.scrollIntoView({ behavior: 'instant', block: 'start' });
				} else if (attempts < 20) {
					setTimeout(() => scrollToTarget(attempts + 1), 100);
				}
			};
			
			// Commencer après un petit délai initial
			setTimeout(() => scrollToTarget(), 200);
			return;
		}
		
		// Si pas de from, on ne fait rien de plus
		if (!from?.url?.pathname) return;
		
		// Navigation vers une page différente = scroll en haut
		if (from.url.pathname !== to.url.pathname) {
			if (!to.url.hash) {
				const scrollContainer = document.querySelector('.app-container > div');
				if (scrollContainer) {
					scrollContainer.scrollTop = 0;
				}
			}
		}
	});

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
				
				// Scroll vers le hash si présent dans l'URL (après chargement complet)
				if (window.location.hash) {
					const targetId = decodeURIComponent(window.location.hash.slice(1));
					
					const scrollToTarget = (attempts = 0) => {
						const targetElement = document.getElementById(targetId);
						
						if (targetElement) {
							targetElement.classList.add('hash-target-highlight');
							targetElement.scrollIntoView({ behavior: 'instant', block: 'start' });
						} else if (attempts < 30) {
							setTimeout(() => scrollToTarget(attempts + 1), 100);
						}
					};
					
					// Attendre plus longtemps que le markdown soit rendu
					setTimeout(() => scrollToTarget(), 500);
				}
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
