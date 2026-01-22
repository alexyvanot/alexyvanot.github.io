<script lang="ts">
	import { page } from '$app/stores';
	import { NotFound } from '$lib/components/feedback';

	let status = $derived($page.status);
	let isNotFound = $derived(status === 404);
	let title = $derived(isNotFound ? 'Page non trouvée' : 'Une erreur est survenue');
	let message = $derived(isNotFound 
		? "Oups ! La page que vous recherchez n'existe pas ou a été déplacée."
		: ($page.error?.message || "Quelque chose s'est mal passé."));
</script>

<svelte:head>
	<title>{status} - {title} | Alexy VANOT</title>
</svelte:head>

<NotFound code={status} {title} {message} />
