<script lang="ts">
	import NavBar from '$lib/components/common/nav-bar/nav-bar.svelte';
	import ScrollToTop from '$lib/components/common/scroll-to-top/scroll-to-top.svelte';
	import Loader from '$lib/components/common/loader/loader.svelte';
	import { AnimatedBackground } from '$lib/components/ui/animated-background';
	import 'virtual:uno.css';
	import '../app.css';
	import '../markdown.css';
	import { ModeWatcher } from 'mode-watcher';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

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
			}, 50);
		}, 300); // Réduit de 500ms à 300ms
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
		</div>
		<ScrollToTop />
	</div>
{/if}
