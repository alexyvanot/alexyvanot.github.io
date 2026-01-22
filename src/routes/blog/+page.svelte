<script lang="ts">
	import { EmptyResult } from '$lib/components/feedback';
	import { SearchPage } from '$lib/components/layout';
	import { 
		Avatar, AvatarFallback, AvatarImage,
		Badge, CardContent, CardDescription, CardHeader, CardTitle,
		Input, Separator, Muted, H2
	} from '$lib/components/ui';
	import FancyCard from '$lib/components/ui/card/fancy-card.svelte';
	import * as Carousel from '$lib/components/ui/carousel';
	import { Assets, BlogData } from '$lib/data';
	import { href } from '$lib/utils';
	import { mode } from 'mode-watcher';
	import { type CarouselAPI } from '$lib/components/ui/carousel/context.js';
	import { onMount } from 'svelte';

	let search = $state('');

	// Helper pour obtenir un timestamp safe
	const safeTime = (date: Date | undefined | null): number => {
		if (!date || !(date instanceof Date) || isNaN(date.getTime())) return 0;
		return date.getTime();
	};

	// Articles épinglés pour le carrousel
	let pinnedPosts = $derived(
		BlogData.items
			.filter(item => item.pinned)
			.sort((a, b) => safeTime(b.publishedAt) - safeTime(a.publishedAt))
	);

	// Vérifier si on est en mode recherche
	let isSearching = $derived(search.trim().length > 0);

	// Filtrage et tri des articles (plus récents en premier)
	let result = $derived(
		BlogData.items
			.filter((item) =>
				search.trim().length === 0 ||
				item.title.toLowerCase().includes(search.toLowerCase()) ||
				item.excerpt.toLowerCase().includes(search.toLowerCase()) ||
				item.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase())) ||
				item.author.toLowerCase().includes(search.toLowerCase())
			)
			.sort((a, b) => safeTime(b.publishedAt) - safeTime(a.publishedAt))
	);

	const onSearch = (query: string) => (search = query);

	// Fonction pour formater la date avec protection contre les dates invalides
	const formatDate = (date: Date | undefined | null) => {
		if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
			return 'Date inconnue';
		}
		return new Intl.DateTimeFormat('fr-FR', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		}).format(date);
	};

	// Fonction pour formater la date d'édition en format court
	const formatEditDate = (date: Date | undefined | null) => {
		if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
			return '';
		}
		return new Intl.DateTimeFormat('fr-FR', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit'
		}).format(date);
	};

	// Fonction pour obtenir le temps de lecture
	const getReadingTime = (minutes: number) => {
		return `${minutes} min de lecture`;
	};

	// Fonction pour vérifier si un article est récent (moins de 30 jours)
	const isRecent = (date: Date) => {
		const now = new Date();
		const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
		return date > thirtyDaysAgo;
	};

	// Réinitialiser les styles au montage pour éviter les bugs de navigation SPA
	$effect(() => {
		// Forcer la réinitialisation des transformations CSS qui pourraient persister
		const resetStyles = () => {
			// Reset pour les cartes du carrousel spécifiquement
			const carouselCards = document.querySelectorAll('.carousel-card.card');
			carouselCards.forEach(card => {
				const element = card as HTMLElement;
				element.style.transform = '';
				element.style.boxShadow = '';
				element.style.transition = '';
				element.style.background = '';
				element.style.border = '';
				element.style.borderColor = '';
			});
			
			// Reset pour les card-color dans le carrousel
			const cardColors = document.querySelectorAll('.carousel-card .card-color');
			cardColors.forEach(cardColor => {
				const element = cardColor as HTMLElement;
				element.style.transform = '';
				element.style.background = '';
				element.style.backgroundColor = '';
			});
		};
		
		// Réinitialiser immédiatement et après un petit délai
		resetStyles();
		const timeout = setTimeout(resetStyles, 100);
		
		return () => clearTimeout(timeout);
	});

	// Gestion de la rotation automatique du carrousel (inspiré de la page d'accueil)
	let api: CarouselAPI | undefined = $state();
	let intervalId: number | null = null;
	let isHovered = $state(false);
	let isTouched = $state(false);

	function startAutoScroll() {
		if (intervalId) return;
		intervalId = Number(setInterval(() => {
			if (!api || isHovered || isTouched || pinnedPosts.length <= 1) return;
			api.scrollNext();
		}, 10000)); // 10 secondes
	}

	function stopAutoScroll() {
		if (intervalId) {
			clearInterval(intervalId);
			intervalId = null;
		}
	}

	onMount(() => {
		return () => {
			stopAutoScroll();
		};
	});

	// Démarrer l'auto-scroll quand l'API est disponible
	$effect(() => {
		if (api) {
			startAutoScroll();
			
			// Ajouter les écouteurs d'événements tactiles directement sur l'élément du carrousel
			const carouselElement = document.querySelector('.carousel-root');
			if (carouselElement) {
				const handleTouchStartDirect = () => {
					isTouched = true;
				};
				
				const handleTouchEndDirect = () => {
					// Garder le carrousel en pause un moment après le touch
					setTimeout(() => {
						isTouched = false;
					}, 1500);
				};
				
				// Événements tactiles
				carouselElement.addEventListener('touchstart', handleTouchStartDirect, { passive: true });
				carouselElement.addEventListener('touchend', handleTouchEndDirect, { passive: true });
				carouselElement.addEventListener('touchcancel', handleTouchEndDirect, { passive: true });
				
				// Événements pointer (plus universels, couvrent souris et tactile)
				carouselElement.addEventListener('pointerdown', handleTouchStartDirect, { passive: true });
				carouselElement.addEventListener('pointerup', handleTouchEndDirect, { passive: true });
				carouselElement.addEventListener('pointercancel', handleTouchEndDirect, { passive: true });
				
				// Nettoyer les événements quand le composant est détruit ou l'API change
				return () => {
					carouselElement.removeEventListener('touchstart', handleTouchStartDirect);
					carouselElement.removeEventListener('touchend', handleTouchEndDirect);
					carouselElement.removeEventListener('touchcancel', handleTouchEndDirect);
					carouselElement.removeEventListener('pointerdown', handleTouchStartDirect);
					carouselElement.removeEventListener('pointerup', handleTouchEndDirect);
					carouselElement.removeEventListener('pointercancel', handleTouchEndDirect);
				};
			}
		}
	});

	function handleMouseEnter() {
		isHovered = true;
	}

	function handleMouseLeave() {
		isHovered = false;
	}

	function handleTouchStart() {
		isTouched = true;
	}

	function handleTouchEnd() {
		// Garder le carrousel en pause un moment après le touch pour éviter les transitions abruptes
		setTimeout(() => {
			isTouched = false;
		}, 1500);
	}
</script>

<svelte:head>
	<title>Blog - Alexy VANOT</title>
	<meta name="description" content="Articles et tutoriels sur le développement web, JavaScript, TypeScript, Svelte et autres technologies." />
</svelte:head>

<SearchPage title={BlogData.title} {onSearch}>
	{#if !isSearching && pinnedPosts.length > 0}
		<div class="mb-10">
			<div class="flex justify-center items-center mt-6 mb-4">
				<H2>Articles à la une</H2>
			</div>
			<Carousel.Root 
				bind:api 
				opts={{ align: "center", loop: true }} 
				class="w-full max-w-4xl mx-auto carousel-root"
				on:mouseenter={handleMouseEnter}
				on:mouseleave={handleMouseLeave}
				on:touchstart={handleTouchStart}
				on:touchend={handleTouchEnd}
			>
				<Carousel.Content>
					{#each pinnedPosts as item (item.slug)}
						<Carousel.Item class="basis-full">
							<div class="px-4">
								<FancyCard color={item.color} href={href(`/blog/${item.slug}`)} class="relative carousel-card" tilt={1}>
									<div class="absolute top-2 left-2 z-10">
										<Badge variant="secondary" class="text-xs bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
											📌
										</Badge>
									</div>
									{#if isRecent(item.publishedAt)}
										<div class="absolute top-2 right-2 z-10">
											<Badge variant="destructive" class="text-xs animate-pulse">
												Nouveau
											</Badge>
										</div>
									{/if}
									<div class="carousel-card-content flex flex-col md:flex-row gap-6 p-6">
										<!-- Avatar et infos -->
										<div class="flex items-center gap-3 md:flex-col md:items-center md:min-w-0">
											<Avatar class="w-16 h-16">
												<AvatarFallback>
													<img src={Assets.Unknown.light} alt={item.title} class="w-full h-full object-cover" />
												</AvatarFallback>
												<AvatarImage src={$mode === 'dark' ? item.logo.dark : item.logo.light} class="w-full h-full object-cover" />
											</Avatar>
											<div class="flex flex-col gap-1 md:text-center">
												<Muted class="text-xs">{formatDate(item.publishedAt)}</Muted>
												<Muted class="text-xs">{getReadingTime(item.readingTime)}</Muted>
											</div>
										</div>
										
										<!-- Contenu principal -->
										<div class="flex-1 flex flex-col">
											<div class="flex-1">
												<CardTitle class="text-xl mb-3">{item.title}</CardTitle>
												<CardDescription class="text-base mb-4">{item.excerpt}</CardDescription>
												
												<!-- Tags -->
												<div class="flex flex-wrap gap-2 mb-4">
													{#each item.tags.slice(0, 4) as tag}
														<Badge variant="secondary" class="text-xs">
															{tag}
														</Badge>
													{/each}
													{#if item.tags.length > 4}
														<Badge variant="outline" class="text-xs">
															+{item.tags.length - 4}
														</Badge>
													{/if}
												</div>
											</div>
											
											<!-- Footer avec auteur -->
											<div class="border-t pt-3 mt-auto">
												<div class="flex items-center justify-between">
													<Muted class="text-xs">Par {item.author}</Muted>
													{#if item.updatedAt && item.updatedAt > item.publishedAt}
														<Muted class="text-xs italic">Edited {formatEditDate(item.updatedAt)}</Muted>
													{/if}
												</div>
											</div>
										</div>
									</div>
								</FancyCard>
							</div>
						</Carousel.Item>
					{/each}
				</Carousel.Content>
				<Carousel.Previous class="-left-9" />
				<Carousel.Next class="-right-9" />
			</Carousel.Root>
		</div>
		{#if !isSearching && pinnedPosts.length > 0}
			<Separator class="my-4" />
			<div class="flex justify-center items-center mt-6 mb-4">
				<H2>Tous les articles</H2>
			</div>
		{/if}
	{/if}

	{#if result.length === 0}
		<EmptyResult />
	{:else}
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" style="grid-auto-rows: 1fr;">
			{#each result as item (item.slug)}
				<FancyCard color={item.color} href={href(`/blog/${item.slug}`)} class="relative h-full transition-all duration-300 hover:shadow-lg">
					{#if isRecent(item.publishedAt)}
						<div class="absolute top-2 right-2 z-10">
							<Badge variant="destructive" class="text-xs animate-pulse">
								Nouveau
							</Badge>
						</div>
					{/if}
					<div class="flex flex-col h-full p-6">
						<!-- Contenu principal -->
						<div class="flex-1">
							<div class="pb-4">
								<div class="flex items-center gap-3 mb-3">
									<Avatar>
										<AvatarFallback>
											<img src={Assets.Unknown.light} alt={item.title} />
										</AvatarFallback>
										<AvatarImage src={$mode === 'dark' ? item.logo.dark : item.logo.light} />
									</Avatar>
									<div class="flex flex-col gap-1">
										<Muted class="text-xs">{formatDate(item.publishedAt)}</Muted>
										<Muted class="text-xs">{getReadingTime(item.readingTime)}</Muted>
									</div>
								</div>
								<CardTitle class="line-clamp-2 text-left">{item.title}</CardTitle>
								<CardDescription class="line-clamp-3 text-left">{item.excerpt}</CardDescription>
							</div>
							
							<!-- Tags au milieu -->
							<div class="pb-2">
								<div class="flex flex-wrap gap-2">
									{#each item.tags.slice(0, 3) as tag}
										<Badge variant="secondary" class="text-xs">
											{tag}
										</Badge>
									{/each}
									{#if item.tags.length > 3}
										<Badge variant="outline" class="text-xs">
											+{item.tags.length - 3}
										</Badge>
									{/if}
								</div>
							</div>
						</div>
						
						<!-- Footer avec auteur, toujours en bas -->
						<div class="mt-auto border-t pt-3">
							<div class="flex items-center justify-between">
								<Muted class="text-xs">Par {item.author}</Muted>
								{#if item.updatedAt && item.updatedAt > item.publishedAt}
									<Muted class="text-xs italic">Edited {formatEditDate(item.updatedAt)}</Muted>
								{/if}
							</div>
						</div>
					</div>
				</FancyCard>
			{/each}
		</div>
	{/if}
</SearchPage>

<style>
	/* Smooth scroll behavior for better UX */
	:global(html) {
		scroll-behavior: smooth;
	}
	
	/* Force reset des styles au chargement de la page */
	:global(.fancy-card) {
		transition: all 0.3s ease-out !important;
		transform: none !important;
	}

	/* Custom grid animation */
	:global(.grid > *) {
		animation: fadeInUp 0.6s ease-out forwards;
		opacity: 0;
		transform: translateY(20px);
	}

	:global(.grid > *:nth-child(1)) { animation-delay: 0.1s; }
	:global(.grid > *:nth-child(2)) { animation-delay: 0.2s; }
	:global(.grid > *:nth-child(3)) { animation-delay: 0.3s; }
	:global(.grid > *:nth-child(4)) { animation-delay: 0.4s; }
	:global(.grid > *:nth-child(5)) { animation-delay: 0.5s; }
	:global(.grid > *:nth-child(6)) { animation-delay: 0.6s; }

	@keyframes fadeInUp {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* Enhanced carousel styling */
	:global(.carousel-card.card) {
		/* Override complet des styles de FancyCard avec spécificité élevée */
		background: transparent !important;
		border: none !important;
		box-shadow: none !important;
		transition: none !important;
		transform: none !important;
		/* Désactiver les transformations 3D mais garder le tracking de souris */
		transform-style: flat !important;
	}
	
	:global(.carousel-card.card:hover) {
		background: transparent !important;
		border: none !important;
		box-shadow: none !important;
		transform: none !important;
		border-color: transparent !important;
		/* Forcer pas de transformation 3D */
		transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) !important;
	}
	
	:global(.carousel-card .card-color) {
		background: transparent !important;
		transform: none !important;
	}
	
	:global(.carousel-card .card-color:hover) {
		/* Garder l'effet de couleur au hover mais pas la transformation */
		background: 
			radial-gradient(
				circle at var(--drop-x) var(--drop-y),
				var(--drop-color) 0%,
				transparent 60%
			) !important;
		background-color: var(--hover-backdrop) !important;
		transform: none !important;
	}
	
	:global(.carousel-card-content) {
		/* Appliquer les styles directement sur le contenu */
		border: 1px solid hsl(var(--border));
		border-radius: 0.5rem;
		box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
		background: hsl(var(--card) / 0.5);
		backdrop-filter: blur(8px);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}
	
	/* Enlever l'effet de soulèvement au hover */
	:global(.carousel-card:hover .carousel-card-content) {
		/* Pas de transform: translateY(-2px) */
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
	}
	
	/* S'assurer que les cartes de la grille gardent leur comportement normal */
	:global(.grid .fancy-card:hover) {
		transform: translateY(-2px);
		box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
	}
</style>
