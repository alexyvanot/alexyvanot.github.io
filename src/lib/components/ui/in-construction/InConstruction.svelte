<script lang="ts">
	import InConstructionData from '$lib/data/in-construction';
	
	// Extraire la valeur enabled pour éviter l'avertissement de réactivité
	const { enabled: isVisible, title, message } = InConstructionData;
</script>

{#if isVisible}
	<div class="in-construction-banner">
		<div class="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 border-t-4 border-black">
			<!-- Motif rayé jaune et noir -->
			<div 
				class="h-1 w-full opacity-30 animate-stripe-right"
				style="background: repeating-linear-gradient(
					45deg,
					#000000,
					#000000 10px,
					#FACC15 10px,
					#FACC15 20px
				);"
			></div>
			
			<!-- Contenu du bandeau -->
			<div class="px-4 py-1 text-center bg-yellow-400">
				<div class="flex items-center justify-center gap-4">
					<!-- Icône de construction gauche -->
					<svg 
						class="w-6 h-6 text-black animate-pulse" 
						fill="currentColor" 
						viewBox="0 0 20 20"
					>
						<path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
					</svg>
					
					<div class="text-black">
						<div class="font-bold text-sm md:text-base">
							{title}
						</div>
						<div class="text-xs md:text-sm font-medium">
							{message}
						</div>
					</div>
					
					<!-- Icône de construction droite -->
					<svg 
						class="w-6 h-6 text-black animate-pulse" 
						fill="currentColor" 
						viewBox="0 0 20 20"
					>
						<path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
					</svg>
				</div>
			</div>
			
			<!-- Motif rayé du bas -->
			<div 
				class="h-1 w-full opacity-30 animate-stripe-left"
				style="background: repeating-linear-gradient(
					45deg,
					#000000,
					#000000 10px,
					#FACC15 10px,
					#FACC15 20px
				);"
			></div>
		</div>
	</div>
{/if}

<style>
	.in-construction-banner {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		z-index: 9999;
		box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06);
	}

	/* Animation pour les rayures vers la droite */
	@keyframes stripeRight {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: 28.28px 0; /* 20px * sqrt(2) pour correspondre au pattern à 45deg */
		}
	}

	/* Animation pour les rayures vers la gauche */
	@keyframes stripeLeft {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: -28.28px 0; /* 20px * sqrt(2) pour correspondre au pattern à 45deg */
		}
	}

	.animate-stripe-right {
		animation: stripeRight 1.5s linear infinite;
	}

	.animate-stripe-left {
		animation: stripeLeft 1.5s linear infinite;
	}
</style>
