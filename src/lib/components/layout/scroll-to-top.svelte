<script lang="ts">
	import { browser } from '$app/environment';

	let showButton = $state(false);
	let isVisible = $state(false);
	let isAnimating = $state(false);
	let scrollContainers: Element[] = [];

	// Fonction optimisée pour trouver les conteneurs de scroll
	const findScrollContainers = () => {
		if (!browser) return [];
		
		const containers: Element[] = [];
		
		// Chercher les éléments avec overflow
		const overflowElements = document.querySelectorAll(
			'[style*="overflow"], .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll'
		);
		
		for (const el of overflowElements) {
			if (el.scrollHeight > el.clientHeight) {
				containers.push(el);
			}
		}
		
		// Chercher les conteneurs scrollables actifs
		const allElements = document.querySelectorAll('*');
		for (const el of allElements) {
			if (el.scrollHeight > el.clientHeight && el.scrollTop > 0) {
				if (!containers.includes(el)) {
					containers.push(el);
				}
			}
		}
		
		return containers;
	};

	// Fonction pour remonter en haut
	const scrollToTop = () => {
		if (!browser) return;
		
		// Scroll sur tous les conteneurs trouvés
		scrollContainers.forEach(container => {
			container.scrollTo({ top: 0, behavior: 'smooth' });
		});
		
		// Fallbacks pour être sûr
		window.scrollTo({ top: 0, behavior: 'smooth' });
		document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
		document.body.scrollTo({ top: 0, behavior: 'smooth' });
	};

	// Fonction pour gérer le scroll
	const handleScroll = () => {
		if (!browser) return;
		
		let maxScroll = Math.max(
			window.scrollY || 0,
			document.documentElement.scrollTop || 0,
			document.body.scrollTop || 0
		);
		
		// Vérifier les conteneurs personnalisés
		scrollContainers.forEach(el => {
			if (el.scrollTop > maxScroll) {
				maxScroll = el.scrollTop;
			}
		});
		
		const shouldShow = maxScroll > 300;
		
		if (shouldShow !== showButton) {
			showButton = shouldShow;
			
			if (shouldShow) {
				// Apparition : afficher immédiatement
				isVisible = true;
				isAnimating = false;
			} else {
				// Disparition : commencer l'animation de fade out
				if (isVisible && !isAnimating) {
					isAnimating = true;
					// Laisser l'animation CSS se terminer avant de cacher
					setTimeout(() => {
						isVisible = false;
						isAnimating = false;
					}, 300); // Durée de l'animation fade-out
				}
			}
		}
	};

	$effect(() => {
		if (browser) {
			// Trouver les conteneurs au montage
			scrollContainers = findScrollContainers();
			
			// Ajouter les listeners
			window.addEventListener('scroll', handleScroll, { passive: true });
			document.addEventListener('scroll', handleScroll, { passive: true });
			
			// Ajouter listeners sur les conteneurs trouvés
			scrollContainers.forEach(container => {
				container.addEventListener('scroll', handleScroll, { passive: true });
			});
			
			// Vérifier périodiquement s'il y a de nouveaux conteneurs
			const interval = setInterval(() => {
				const newContainers = findScrollContainers();
				const added = newContainers.filter(c => !scrollContainers.includes(c));
				
				added.forEach(container => {
					container.addEventListener('scroll', handleScroll, { passive: true });
				});
				
				scrollContainers = newContainers;
			}, 2000);
			
			// Vérification initiale
			handleScroll();
			
			return () => {
				window.removeEventListener('scroll', handleScroll);
				document.removeEventListener('scroll', handleScroll);
				scrollContainers.forEach(container => {
					container.removeEventListener('scroll', handleScroll);
				});
				clearInterval(interval);
			};
		}
	});
</script>

{#if isVisible}
	<button
		onclick={scrollToTop}
		class="scroll-to-top-btn"
		class:fade-out={!showButton && isAnimating}
		title="Remonter en haut"
		aria-label="Remonter en haut de la page"
	>
		<div class="i-carbon-chevron-up w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5"></div>
	</button>
{/if}

<style>
	.scroll-to-top-btn {
		position: fixed;
		bottom: 1.5rem;
		right: 1.5rem;
		z-index: 50;
		
		/* Apparence */
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		border: none;
		cursor: pointer;
		
		/* Couleurs avec support dark/light mode */
		background: hsl(var(--primary));
		color: hsl(var(--primary-foreground));
		box-shadow: 
			0 4px 6px -1px rgb(0 0 0 / 0.1), 
			0 2px 4px -2px rgb(0 0 0 / 0.1),
			0 0 0 1px rgb(255 255 255 / 0.1);
		
		/* Effets visuels */
		backdrop-filter: blur(8px);
		
		/* Transitions */
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		
		/* Animation d'apparition */
		animation: fadeInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		
		/* Centrage de l'icône */
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.scroll-to-top-btn:hover {
		background: hsl(var(--primary) / 0.9);
		transform: translateY(-2px) scale(1.05);
		box-shadow: 
			0 10px 15px -3px rgb(0 0 0 / 0.2), 
			0 4px 6px -4px rgb(0 0 0 / 0.1),
			0 0 0 1px rgb(255 255 255 / 0.2);
	}
	
	.scroll-to-top-btn:active {
		transform: translateY(-1px) scale(1.02);
	}
	
	.scroll-to-top-btn:focus {
		outline: none;
		box-shadow: 
			0 4px 6px -1px rgb(0 0 0 / 0.1), 
			0 2px 4px -2px rgb(0 0 0 / 0.1),
			0 0 0 2px hsl(var(--ring));
	}
	
	/* Animation d'apparition */
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(20px) scale(0.8);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}
	
	/* Animation de disparition */
	@keyframes fadeOutDown {
		from {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
		to {
			opacity: 0;
			transform: translateY(20px) scale(0.8);
		}
	}
	
	/* Classe pour l'animation de disparition */
	.scroll-to-top-btn.fade-out {
		animation: fadeOutDown 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
	}
	
	/* Responsive */
	@media (max-width: 640px) {
		.scroll-to-top-btn {
			bottom: 1rem;
			right: 1rem;
			width: 2.75rem;
			height: 2.75rem;
		}
	}
	
	/* Adaptation mode sombre */
	@media (prefers-color-scheme: dark) {
		.scroll-to-top-btn {
			box-shadow: 
				0 4px 6px -1px rgb(0 0 0 / 0.3), 
				0 2px 4px -2px rgb(0 0 0 / 0.2),
				0 0 0 1px rgb(255 255 255 / 0.05);
		}
		
		.scroll-to-top-btn:hover {
			box-shadow: 
				0 10px 15px -3px rgb(0 0 0 / 0.4), 
				0 4px 6px -4px rgb(0 0 0 / 0.3),
				0 0 0 1px rgb(255 255 255 / 0.1);
		}
	}
</style>
