<script lang="ts">
	import { Input } from '$lib/components/ui';
	import { onMount, type Snippet } from 'svelte';
	import TitledPage from './titled-page.svelte';
	import { goto } from '$app/navigation';

	let {
		title = 'Untitled',
		onSearch,
		onFocus,
		onBlur,
		children
	}: { 
		title: string; 
		onSearch: (value: string) => void; 
		onFocus?: () => void;
		onBlur?: () => void;
		children: Snippet 
	} = $props();

	let query = $state('');
	let mounted = $state(false);

	$effect(() => {
		if (mounted) {
			let url = new URL(window.location.href);
			
			// Ajouter le paramètre q uniquement si la requête n'est pas vide
			if (query.trim() !== '') {
				url.searchParams.set('q', query);
			} else {
				url.searchParams.delete('q');  // Supprimer le paramètre q s'il existe et que la requête est vide
			}
			
			// Utiliser goto de SvelteKit au lieu de history.replaceState
			goto(url.toString(), { replaceState: true, keepFocus: true, noScroll: true });

			onSearch(query);
		}
	});

	onMount(() => {
		let searchParams = new URLSearchParams(window.location.search);
		query = searchParams.get('q') ?? '';
		mounted = true;
	});

	function handleFocus() {
		onFocus?.();
	}

	function handleBlur() {
		onBlur?.();
	}
</script>

<TitledPage {title}>
	<Input placeholder="Search..." bind:value={query} on:focus={handleFocus} on:blur={handleBlur} />
	{@render children()}
</TitledPage>
