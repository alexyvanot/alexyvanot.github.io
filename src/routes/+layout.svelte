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

	onMount(() => {
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
