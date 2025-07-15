<script lang="ts">
	import { onMount } from 'svelte';

	const {
		text = '',
		fontSize = 72,
		strokeWidth = 2,
		color = 'var(--color-primary)',
		duration = 3000,
		fontPath = '/fonts/Pacifico.json',
		height = 300,
		y = 100,
		onAnimationEnd = () => {}
	} = $props();
	
	let containerEl: HTMLElement;
	let varaInstance: any;
	let ready = false;
	
	// Fonction pour ajouter des logs de débogage (uniquement dans la console)
	function log(message: string) {
		console.log(`[HandwrittenText] ${message}`);
	}
	
	// Fonction pour charger Vara.js
	function loadVaraScript(): Promise<void> {
		return new Promise((resolve, reject) => {
			// Si Vara est déjà chargé, on résout immédiatement
			if (typeof window.Vara !== 'undefined') {
				log('Vara.js déjà chargé');
				resolve();
				return;
			}
			
			// Vérifier si le script existe déjà dans le DOM
			if (document.querySelector('script[src="/scripts/vara.min.js"]')) {
				log('Script Vara.js déjà présent dans le DOM');
				// Attendre un peu pour s'assurer que le script est exécuté
				setTimeout(() => {
					if (typeof window.Vara !== 'undefined') {
						resolve();
					} else {
						reject(new Error('Vara non défini malgré la présence du script'));
					}
				}, 100);
				return;
			}
			
			// Charger le script
			const script = document.createElement('script');
			script.src = '/scripts/vara.min.js';
			script.onload = () => {
				log('Script Vara.js chargé avec succès');
				resolve();
			};
			script.onerror = (error) => {
				log(`Erreur lors du chargement de Vara.js: ${error}`);
				reject(error);
			};
			document.body.appendChild(script);
		});
	}
	
	// Fonction pour initialiser l'animation
	function initAnimation() {
		if (!containerEl) {
			log('Conteneur non disponible');
			return;
		}
		
		// Vider le conteneur avant d'initialiser Vara pour éviter les conflits
		containerEl.innerHTML = '';
		
		try {
			// Initialiser Vara avec la police spécifiée
			varaInstance = new window.Vara(
				`#${containerEl.id}`,
				fontPath,
				[{
					text,
					fontSize,
					strokeWidth,
					color,
					textAlign: "center",
					duration,
					y // Ajustement vertical
				}],
				{
					autoAnimation: true
				}
			);
			
			log('Animation initialisée');
			
			// Callback à la fin de l'animation
			varaInstance.animationEnd(() => {
				log('Animation terminée');
				onAnimationEnd();
			});
		} catch (error) {
			log(`Erreur lors de l'initialisation: ${error}`);
			onAnimationEnd(); // Appeler le callback même en cas d'erreur
		}
	}
	
	onMount(() => {
		// Générer un ID unique pour le conteneur si non défini
		if (!containerEl.id) {
			containerEl.id = `vara-container-${Math.random().toString(36).substring(2, 9)}`;
		}
		
		// Charger Vara.js puis initialiser l'animation
		loadVaraScript()
			.then(() => {
				// Attendre un court délai pour s'assurer que le DOM est prêt
				setTimeout(() => {
					initAnimation();
					ready = true;
				}, 200);
			})
			.catch(error => {
				log(`Échec du chargement de Vara: ${error}`);
				onAnimationEnd(); // Appeler le callback même en cas d'erreur
			});
			
		// Nettoyage à la destruction du composant
		return () => {
			if (varaInstance && typeof varaInstance.destroy === 'function') {
				varaInstance.destroy();
			}
		};
	});
</script>

<div class="handwritten-text-container" style="height: {height}px" bind:this={containerEl}></div>

<style>
	.handwritten-text-container {
		width: 100%;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: transparent;
	}
</style>
