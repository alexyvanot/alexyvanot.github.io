<script lang="ts">
	import BasePage from '$lib/components/common/base-page/base-page.svelte';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import AboutHero from '$lib/components/about/about-hero.svelte';
	import AboutSectionSlide from '$lib/components/about/about-section-slide.svelte';
	import ContactSection from '$lib/components/about/contact-section.svelte';
	import SectionNavigation from '$lib/components/about/about-navigation.svelte';
	import { ScrollbarCustom } from '$lib/components/ui/scrollbar-custom';
	import aboutData from '$lib/data/about';
	import { onMount, onDestroy } from 'svelte';
	import './about-styles.css';

	let mounted = $state(false);
	let currentSection = $state('hero');
	let varaLoaded = $state(false);
	let aboutPageContainer: HTMLElement;
	let sectionElements: HTMLElement[] = [];
	let isScrolling = $state(false);
	let lastScrollTime = 0;
	let currentSectionIndex = 0;
	let allSections = ['hero', ...aboutData.sections.map(s => s.id)];
	
	onMount(() => {
		// Charger Vara.js dans la page principale pour s'assurer qu'il est bien chargé
		const loadVaraScript = () => {
			return new Promise<void>((resolve, reject) => {
				// Vérifier si le script existe déjà
				if (document.querySelector('script[src="/scripts/vara.min.js"]')) {
					console.log('Vara.js est déjà chargé dans la page principale');
					varaLoaded = true;
					resolve();
					return;
				}
				
				const script = document.createElement('script');
				script.src = '/scripts/vara.min.js';
				script.onload = () => {
					console.log('Vara.js chargé avec succès dans la page principale');
					varaLoaded = true;
					resolve();
				};
				script.onerror = (error) => {
					console.error('Erreur lors du chargement de Vara.js:', error);
					reject(error);
				};
				document.body.appendChild(script);
			});
		};
		
		// Charger le script puis activer le composant
		loadVaraScript()
			.then(() => {
				setTimeout(() => {
					mounted = true;
					console.log('Page mounted, Vara loaded:', varaLoaded);
					
					// Initialiser le système de défilement fluide
					setupSmoothScroll();
				}, 500); // Attendre un peu après le chargement du script
			})
			.catch((error) => {
				console.error('Échec du chargement de Vara, mais on continue:', error);
				mounted = true; // Monter quand même pour avoir le fallback
				setupSmoothScroll();
			});
	});
	
	// Nettoyer les événements lorsque la page est déchargée
	onDestroy(() => {
		// Nettoyer les écouteurs d'événements
		window.removeEventListener('wheel', handleWheel);
		document.removeEventListener('touchstart', handleTouchStart);
		document.removeEventListener('touchend', handleTouchEnd);
	});

	// Configuration du défilement fluide entre les sections
	function setupSmoothScroll() {
		// Collecter toutes les sections
		sectionElements = allSections.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
		currentSectionIndex = 0;
		
		// Désactiver le défilement standard et utiliser notre logique personnalisée
		window.addEventListener('wheel', handleWheel, { passive: false });
		
		// Aussi écouter les événements tactiles pour le mobile
		document.addEventListener('touchstart', handleTouchStart, { passive: true });
		document.addEventListener('touchend', handleTouchEnd, { passive: true });
	}
	
	// Variables pour la gestion du tactile
	let touchStartY = 0;
	
	function handleTouchStart(e: TouchEvent) {
		touchStartY = e.touches[0].clientY;
	}
	
	function handleTouchEnd(e: TouchEvent) {
		const touchEndY = e.changedTouches[0].clientY;
		const diff = touchStartY - touchEndY;
		
		// Seuil minimum pour considérer comme un swipe
		if (Math.abs(diff) > 50) {
			if (diff > 0) {
				// Swipe vers le haut, aller à la section suivante
				navigateToSection(1);
			} else {
				// Swipe vers le bas, aller à la section précédente
				navigateToSection(-1);
			}
		}
	}
	
	// Gérer l'événement de la molette de souris
	function handleWheel(e: WheelEvent) {
		e.preventDefault();
		
		// Ne pas réagir si un défilement est déjà en cours
		if (isScrolling) return;
		
		// Vérifier si le défilement est suffisant pour changer de section
		// et s'assurer qu'un certain délai s'est écoulé depuis le dernier défilement
		const now = Date.now();
		if (now - lastScrollTime < 800) return;
		lastScrollTime = now;
		
		// Déterminer la direction
		if (e.deltaY > 0) {
			// Défilement vers le bas
			navigateToSection(1);
		} else {
			// Défilement vers le haut
			navigateToSection(-1);
		}
	}
	
	// Naviguer vers une section relative à la position actuelle
	function navigateToSection(direction: number) {
		// Trouver l'index de la section actuelle
		const currentIndex = allSections.indexOf(currentSection);
		
		// Calculer le nouvel index
		let newIndex = currentIndex + direction;
		
		// S'assurer que l'index est dans les limites
		if (newIndex < 0) newIndex = 0;
		if (newIndex >= allSections.length) newIndex = allSections.length - 1;
		
		// Si c'est une section différente, y naviguer
		if (newIndex !== currentIndex) {
			isScrolling = true;
			const targetSection = allSections[newIndex];
			scrollToSection(targetSection);
			
			// Mettre à jour la section courante
			currentSection = targetSection;
			
			// Réinitialiser l'état de défilement après l'animation
			setTimeout(() => {
				isScrolling = false;
			}, 800);
		}
	}
	
	// Fonction pour défiler vers une section
	function scrollToSection(sectionId: string) {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ 
				behavior: 'smooth',
				block: 'start'
			});
		}
	}

	// Séparer la section contact des autres
	const regularSections = aboutData.sections.filter(s => s.id !== 'contact');
	const contactSection = aboutData.sections.find(s => s.id === 'contact');
</script>

<svelte:head>
	<!-- Ajouter la police manuscrite de secours au cas où -->
	<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<BasePage title={aboutData.title}>
	<ScrollbarCustom disableScrollbar={true}>
		<div class="about-page-container max-w-full overflow-hidden">
			<div class="about-page w-full" bind:this={aboutPageContainer}>
		<!-- Section héro avec photo et présentation -->
		<div id="hero" class="about-section relative">
			<AboutHero profile={aboutData.profile} {mounted} {varaLoaded} />
			
			<!-- Indicateur de scroll centré en bas - attaché à la première diapo -->
			{#if mounted}
				<button 
					type="button"
					class="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer bg-transparent border-none z-10"
					onclick={() => navigateToSection(1)}
					aria-label="Défiler vers la section suivante"
				>
					<div class="flex flex-col items-center">
						<span class="text-sm text-muted-foreground mb-2">Découvrez plus</span>
						<Icon icon="i-carbon-chevron-down" className="text-xl text-muted-foreground" />
					</div>
				</button>
			{/if}
		</div>
		
		<!-- Sections de contenu avec scroll -->
		{#each regularSections as section, index}
			<div id={section.id} class="about-section">
				<AboutSectionSlide {section} {mounted} {index} />
			</div>
		{/each}

		<!-- Section contact spéciale -->
		{#if contactSection}
			<div id={contactSection.id} class="about-section">
				<ContactSection section={contactSection} profile={aboutData.profile} {mounted} delay={600} />
			</div>
		{/if}
	</div>

	<!-- Navigation entre sections -->
	<SectionNavigation sections={allSections} sectionTitles={['Introduction', ...aboutData.sections.map(s => s.title)]} bind:currentSection />
	</div>
	</ScrollbarCustom>
</BasePage>
