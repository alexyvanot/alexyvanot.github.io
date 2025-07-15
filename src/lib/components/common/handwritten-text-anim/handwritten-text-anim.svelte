<script lang="ts">
	import { onMount } from 'svelte';

	// Propriétés configurables du composant
	const {
		text = '',                          // Texte à animer
		fontSize = 72,                      // Taille de la police
		strokeWidth = 2,                    // Épaisseur du trait
		color = "var(--color-primary)",     // Couleur du texte (utilise la variable CSS par défaut)
		duration = 3000,                    // Durée de l'animation en ms
		textAlign = "center",               // Alignement du texte
		fontPath = "/fonts/Pacifico.json",  // Chemin vers la police (dans static)
		y = 100,                           // Position verticale pour éviter la coupure du haut des lettres
		height = 300,                      // Hauteur du conteneur
		varaScriptPath = "/scripts/vara.min.js", // Chemin vers le script Vara.js
		autoStart = true,                  // Démarrage automatique de l'animation
		// Callbacks pour les événements (nouvelle approche Svelte 5)
		onStart = () => {},                // Appelé quand l'animation démarre
		onComplete = () => {},             // Appelé quand l'animation se termine
		onError = (error: { message: string }) => {} // Appelé en cas d'erreur
	} = $props();
	
	// Variables locales
	let containerElement: HTMLElement;
	let varaInstance: any;
	let isAnimationComplete = false;
	let containerId = "vara-container-" + Math.random().toString(36).substring(2, 9); // ID unique
	
	// Fonction pour ajouter des logs de débogage (uniquement dans la console)
	function log(message: string) {
		console.log(`[HandwrittenTextAnim] ${message}`);
	}

	// Fonction pour démarrer l'animation
	export function startAnimation() {
		if (isAnimationComplete) {
			log('Animation déjà terminée');
			return;
		}
		
		if (varaInstance) {
			log('Redémarrage de l\'animation');
			varaInstance.playAll();
			return;
		}
		
		// Initialiser Vara.js si pas encore fait
		initVara();
	}

	// Fonction pour arrêter l'animation
	export function stopAnimation() {
		if (varaInstance) {
			log('Arrêt de l\'animation');
			varaInstance.pauseAll();
		}
	}

	// Fonction pour réinitialiser l'animation
	export function resetAnimation() {
		if (varaInstance) {
			log('Réinitialisation de l\'animation');
			varaInstance.destroy();
			varaInstance = null;
		}
		isAnimationComplete = false;
		
		if (containerElement) {
			containerElement.innerHTML = '';
		}
		
		// Redémarrer l'animation
		setTimeout(() => {
			initVara();
		}, 100);
	}

	// Chargement et initialisation de Vara.js
	onMount(() => {
		log(`Initialisation du composant avec le texte: "${text}"`);
		
		// Démarrer automatiquement si autoStart est true
		if (autoStart) {
			// Définir un court délai pour s'assurer que le DOM est prêt
			setTimeout(() => {
				loadVaraAndInit();
			}, 300);
		}
		
		// Nettoyage au démontage du composant
		return () => {
			if (varaInstance && typeof varaInstance.destroy === 'function') {
				varaInstance.destroy();
			}
			log('Composant démonté');
		};
	});

	// Fonction pour charger Vara.js et initialiser l'animation
	function loadVaraAndInit() {
		// Si Vara.js est déjà chargé, initialiser directement
		if (typeof window.Vara !== 'undefined') {
			log('Vara.js déjà chargé');
			initVara();
			return;
		}
		
		// Sinon, charger le script Vara.js
		const script = document.createElement('script');
		script.src = varaScriptPath;
		
		// Vérifier si le script existe déjà
		if (document.querySelector(`script[src="${varaScriptPath}"]`)) {
			log('Script Vara.js déjà présent dans le DOM');
			// Attendre un peu pour s'assurer que le script est exécuté
			setTimeout(() => {
				if (typeof window.Vara !== 'undefined') {
					initVara();
				} else {
					log('Erreur: Vara non défini malgré la présence du script');
					onError({ message: 'Vara non disponible' });
				}
			}, 100);
			return;
		}
		
		script.onload = () => {
			log('Script Vara.js chargé avec succès');
			initVara();
		};
		script.onerror = (error) => {
			log(`Erreur lors du chargement de Vara.js: ${error}`);
			onError({ message: 'Échec du chargement de Vara.js' });
		};
		document.body.appendChild(script);
		log('Script Vara.js ajouté au document');
	}
	
	// Fonction pour initialiser Vara.js
	function initVara() {
		// S'assurer que Vara est défini
		if (typeof window.Vara === 'undefined') {
			log('Vara n\'est pas défini après le chargement du script');
			onError({ message: 'Vara non disponible' });
			return;
		}
		
		// Attendre que le conteneur DOM soit disponible
		setTimeout(() => {
			const container = document.getElementById(containerId);
			if (!container) {
				log(`Le conteneur #${containerId} n\'existe pas`);
				onError({ message: 'Conteneur non trouvé' });
				return;
			}
			
			try {
				// Vider le conteneur avant d'initialiser Vara pour éviter les conflits
				container.innerHTML = '';
				log('Conteneur vara vidé et prêt');
				
				// Initialiser Vara avec la police configurée
				varaInstance = new window.Vara(
					`#${containerId}`,
					fontPath,
					[{
						text,
						fontSize,
						strokeWidth,
						color,
						textAlign,
						duration,
						y // Position verticale ajustée
					}],
					{
						autoAnimation: true
					}
				);
				
				log('Vara initialisé avec succès');
				
				// Appeler le callback de démarrage
				onStart();
				
				// Lorsque l'animation d'écriture est terminée, appeler le callback
				varaInstance.animationEnd(() => {
					log('Animation Vara terminée');
					isAnimationComplete = true;
					onComplete();
				});
			} catch (error) {
				log(`Erreur lors de l'initialisation de Vara: ${error}`);
				onError({ message: `Erreur d'initialisation: ${error}` });
			}
		}, 300);
	}
</script>

<div 
	id={containerId} 
	bind:this={containerElement} 
	class="handwritten-text-anim" 
	style="height: {height}px;"
>
	<!-- L'animation Vara.js sera rendue ici -->
</div>

<style>
	.handwritten-text-anim {
		width: 100%;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: transparent;
		overflow: visible; /* Pour éviter la coupure des lettres */
		margin: 0 auto;
	}
	
	/* Variable CSS pour les couleurs utilisées par Vara (si pas déjà définie) */
	:global(:root) {
		--color-primary: hsl(var(--primary, 210 100% 50%));
	}
</style>
