<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	// Props optionnels pour personnaliser le comportement
	const {
		disableScrollbar = false,  // Si true, désactive complètement la scrollbar
		customClass = ''           // Classe CSS supplémentaire pour le conteneur
	}: {
		disableScrollbar?: boolean;
		customClass?: string;
	} = $props();

	// Ajouter/supprimer les classes CSS au montage/démontage
	onMount(() => {
		if (disableScrollbar) {
			document.documentElement.classList.add('scrollbar-disabled');
			document.body.classList.add('scrollbar-disabled');
		}
	});

	onDestroy(() => {
		// Toujours nettoyer les classes au démontage pour éviter les effets persistants
		document.documentElement.classList.remove('scrollbar-disabled');
		document.body.classList.remove('scrollbar-disabled');
	});
</script>

<!-- Pas de contenu visible, uniquement un composant utilitaire -->
<div class={`scrollbar-custom ${customClass}`}>
	<slot />
</div>

<style>
	/* Style de base pour le composant */
	.scrollbar-custom {
		/* Ce div ne fait qu'encapsuler le contenu et n'ajoute pas de style visuel */
		display: contents;
	}

	/* Styles globaux pour les scrollbars personnalisées */
	:global(body) {
		scrollbar-width: thin;
		scrollbar-color: hsl(var(--muted-foreground)) hsl(var(--background));
		/* Padding pour éviter que la scrollbar passe derrière la navbar */
		padding-top: env(safe-area-inset-top, 0);
	}
	
	:global(body::-webkit-scrollbar) {
		width: 8px;
	}
	
	:global(body::-webkit-scrollbar-track) {
		background: hsl(var(--background));
		/* Commencer la track après la navbar (50px) */
		margin-top: 50px;
	}
	
	:global(body::-webkit-scrollbar-thumb) {
		background-color: hsl(var(--muted-foreground));
		border-radius: 4px;
		border: 2px solid hsl(var(--background));
	}
	
	:global(body::-webkit-scrollbar-thumb:hover) {
		background-color: hsl(var(--foreground));
	}
	
	:global(body::-webkit-scrollbar-corner) {
		background: hsl(var(--background));
	}

	/* Style pour masquer la barre de défilement tout en maintenant la fonctionnalité */
	:global(html.scrollbar-disabled),
	:global(body.scrollbar-disabled) {
		scrollbar-width: none !important;
		-ms-overflow-style: none !important;
		overflow: hidden !important;
		margin-right: 0 !important;
		padding-right: 0 !important;
	}

	:global(html.scrollbar-disabled::-webkit-scrollbar),
	:global(body.scrollbar-disabled::-webkit-scrollbar) {
		width: 0 !important;
		display: none !important;
	}
</style>
