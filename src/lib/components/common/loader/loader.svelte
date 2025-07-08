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
		border: 3px solid transparent;
		border-top: 3px solid #3b82f6;
		border-radius: 50%;
		animation: spin 1s linear infinite;
	}
	
	/* Mode sombre - classe et media query */
	:global(.dark) .loader-spinner {
		border-top-color: #60a5fa;
	}
	
	@media (prefers-color-scheme: dark) {
		.loader-spinner {
			border-top-color: #60a5fa;
		}
	}
	
	/* Texte */
	.loader-text {
		color: #6b7280;
		font-size: 14px;
		font-weight: 500;
		margin-bottom: 8px;
	}
	
	@media (prefers-color-scheme: dark) {
		.loader-text {
			color: #9ca3af;
		}
	}
	
	/* Points animés */
	.loader-dots {
		display: flex;
		gap: 4px;
	}
	
	.loader-dot {
		width: 6px;
		height: 6px;
		background: #6b7280;
		border-radius: 50%;
		animation: pulse-dot 1.4s ease-in-out infinite both;
	}
	
	@media (prefers-color-scheme: dark) {
		.loader-dot {
			background: #9ca3af;
		}
	}
	
	.loader-dot:nth-child(1) { animation-delay: -0.32s; }
	.loader-dot:nth-child(2) { animation-delay: -0.16s; }
	.loader-dot:nth-child(3) { animation-delay: 0s; }
	
	/* Animations */
	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
	
	@keyframes pulse-dot {
		0%, 80%, 100% { 
			transform: scale(0.8);
			opacity: 0.5; 
		}
		40% { 
			transform: scale(1);
			opacity: 1; 
		}
	}
</style>
