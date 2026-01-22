<script lang="ts">
	import { fade } from 'svelte/transition';

	export let visible = true;
</script>

{#if visible}
	<div 
		class="loader"
		transition:fade={{ duration: 200 }}
	>
		<div class="loader-content">
			<!-- Spinner animé -->
			<div class="loader-spinner"></div>
		</div>
	</div>
{/if}

<style>
	.loader {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: hsl(var(--background));
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 9999;
	}
	
	.loader-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	/* Spinner */
	.loader-spinner {
		width: 40px;
		height: 40px;
		border: 3px solid hsl(var(--muted));
		border-top: 3px solid hsl(var(--primary));
		border-radius: 50%;
		animation: spin 1s linear infinite;
	}
	
	/* Animations */
	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
</style>
