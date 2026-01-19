<script>
	import Large from '$lib/components/ui/typography/large.svelte';
	import Muted from '$lib/components/ui/typography/muted.svelte';
</script>

<div class="empty-markdown-container">
	<div class="empty-icon">
		<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
			<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
			<polyline points="14 2 14 8 20 8"/>
			<line x1="9" y1="15" x2="15" y2="15"/>
		</svg>
	</div>
	<Large class="text-center">Contenu à venir...</Large>
	<Muted class="text-center max-w-md">
		Cette section est en cours de rédaction. Revenez bientôt pour découvrir le contenu complet !
	</Muted>
</div>

<style>
	.empty-markdown-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		padding: 3rem 2rem;
		margin: 1.5rem 0;
		background: linear-gradient(
			135deg,
			hsl(var(--card) / 0.4) 0%,
			hsl(var(--card) / 0.6) 50%,
			hsl(var(--card) / 0.4) 100%
		);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border: 1px dashed hsl(var(--border) / 0.5);
		border-radius: 1rem;
		text-align: center;
	}
	
	.empty-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 80px;
		height: 80px;
		border-radius: 50%;
		background: linear-gradient(135deg, hsl(var(--muted) / 0.5) 0%, hsl(var(--muted) / 0.3) 100%);
		color: hsl(var(--muted-foreground));
		margin-bottom: 0.5rem;
	}
	
	.empty-icon svg {
		opacity: 0.7;
	}
</style>
