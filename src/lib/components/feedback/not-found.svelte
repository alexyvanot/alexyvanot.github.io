<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Home from 'lucide-svelte/icons/home';
	import ArrowLeft from 'lucide-svelte/icons/arrow-left';

	interface Props {
		code?: number | string;
		title?: string;
		message?: string;
		showActions?: boolean;
	}

	let { 
		code = 404, 
		title = 'Page non trouvée',
		message = "Le contenu que vous recherchez n'existe pas ou a été déplacé.",
		showActions = true
	}: Props = $props();
</script>

<div class="not-found">
	<h1 class="not-found-code">{code}</h1>
	<h2 class="not-found-title">{title}</h2>
	<p class="not-found-message">{message}</p>
	
	{#if showActions}
		<div class="not-found-actions">
			<Button variant="default" href="/" class="gap-2">
				<Home class="w-4 h-4" />
				Retour à l'accueil
			</Button>
			<Button variant="outline" onclick={() => history.back()} class="gap-2">
				<ArrowLeft class="w-4 h-4" />
				Page précédente
			</Button>
		</div>
	{/if}
</div>

<style>
	.not-found {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex: 1;
		text-align: center;
		padding: 2rem;
		min-height: calc(100vh - 12rem);
	}

	.not-found-code {
		font-size: 8rem;
		font-weight: 800;
		line-height: 1;
		background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.5) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin-bottom: 0.5rem;
	}

	.not-found-title {
		font-size: 1.75rem;
		font-weight: 600;
		margin-bottom: 0.75rem;
		color: hsl(var(--foreground));
	}

	.not-found-message {
		color: hsl(var(--muted-foreground));
		margin-bottom: 2rem;
		line-height: 1.6;
		max-width: 400px;
	}

	.not-found-actions {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}
</style>
