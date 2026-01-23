<script lang="ts">
	import { EmptyResult } from '$lib/components/feedback';
	import { SearchPage } from '$lib/components/layout';
	import { ProjectCard } from '$lib/components/features';
	import { 
		Avatar, AvatarFallback, AvatarImage,
		Badge, CardDescription, CardTitle,
		Icon, Toggle, Separator, Muted, H2
	} from '$lib/components/ui';
	import FancyCard from '$lib/components/ui/card/fancy-card.svelte';
	import * as Carousel from '$lib/components/ui/carousel';
	import { Assets, ProjectsData, SkillsData, groupProjectsByCategory } from '$lib/data';
	import { href } from '$lib/utils';
	import { mode } from 'mode-watcher';
	import { type CarouselAPI } from '$lib/components/ui/carousel/context.js';
	import { onMount } from 'svelte';
	import type { Skill } from '$lib/types';

	interface SkillFilter extends Skill {
		isSelected?: boolean;
	}

	let filters: Array<SkillFilter> = $state(
		SkillsData.items.filter((it) => {
			return ProjectsData.items.some((project) =>
				project.skills.some((skill) => skill.slug === it.slug)
			);
		})
	);

	let search = $state('');
	
	// Get selected skill slugs for filtering
	let selectedFilters = $derived(
		filters.filter(f => f.isSelected).map(f => f.slug)
	);
	
	// Projets épinglés pour le carrousel
	let pinnedProjects = $derived(
		ProjectsData.items
			.filter(item => item.pinned)
			.sort((a, b) => b.period.from.getTime() - a.period.from.getTime())
	);

	// Vérifier si on est en mode recherche ou filtre
	let isSearching = $derived(search.trim().length > 0 || selectedFilters.length > 0);
	
	// Group projects by category
	let groups = $derived(groupProjectsByCategory(search, selectedFilters));

	const toggleSelected = (slug: string) => {
		filters = filters.map((it) => (it.slug === slug ? { ...it, isSelected: !it.isSelected } : it));
	};

	const onSearch = (query: string) => (search = query);

	// Fonction pour formater la période
	const formatPeriod = (from: Date, to?: Date) => {
		const formatDate = (d: Date) => new Intl.DateTimeFormat('fr-FR', {
			year: 'numeric',
			month: 'short'
		}).format(d);
		
		if (to) {
			return `${formatDate(from)} - ${formatDate(to)}`;
		}
		return formatDate(from);
	};

	// Gestion de la rotation automatique du carrousel
	let api: CarouselAPI | undefined = $state();
	let intervalId: number | null = null;
	let isHovered = $state(false);
	let isTouched = $state(false);

	function startAutoScroll() {
		if (intervalId) return;
		intervalId = Number(setInterval(() => {
			if (!api || isHovered || isTouched || pinnedProjects.length <= 1) return;
			api.scrollNext();
		}, 10000));
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
		setTimeout(() => {
			isTouched = false;
		}, 1500);
	}

	// Gestion du focus de la barre de recherche pour animer les filtres
	let isSearchFocused = $state(false);

	function handleSearchFocus() {
		isSearchFocused = true;
	}

	function handleSearchBlur() {
		isSearchFocused = false;
	}
</script>

<svelte:head>
	<title>Projets - Alexy VANOT</title>
	<meta name="description" content="Découvrez mes projets personnels et professionnels en développement web, mobile, IA et data science." />
</svelte:head>

<SearchPage title={ProjectsData.title} {onSearch} onFocus={handleSearchFocus} onBlur={handleSearchBlur}>
	<div class="flex flex-1 flex-col gap-8">
		<div 
			class="filters-container flex flex-row flex-wrap gap-2"
			class:filters-visible={isSearchFocused}
		>
			{#each filters as it (it.slug)}
				<Toggle
					pressed={it.isSelected}
					variant="outline"
					class="flex flex-row items-center gap-2 rounded-lg"
					on:click={() => toggleSelected(it.slug)}
				>
					{#if it.isSelected}
						<Icon icon="i-carbon-close" />
					{/if}
					{it.name}</Toggle
				>
			{/each}
		</div>

		{#if !isSearching && pinnedProjects.length > 0}
			<div class="mb-4">
				<div class="flex justify-center items-center mb-4">
					<H2>Projets à la une</H2>
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
						{#each pinnedProjects as project (project.slug)}
							<Carousel.Item class="basis-full">
								<div class="px-4">
									<FancyCard color={project.color} href={href(`/projects/${project.slug}`)} class="relative carousel-card" tilt={1}>
										<div class="absolute top-2 left-2 z-10">
											<Badge variant="secondary" class="text-xs bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
												📌
											</Badge>
										</div>
										<div class="carousel-card-content flex flex-col md:flex-row gap-6 p-6">
											<!-- Logo et infos -->
											<div class="flex items-center gap-3 md:flex-col md:items-center md:min-w-0">
												<Avatar class="w-16 h-16">
													<AvatarFallback>
														<img src={Assets.Unknown.light} alt={project.name} class="w-full h-full object-cover" />
													</AvatarFallback>
													<AvatarImage src={$mode === 'dark' ? project.logo.dark : project.logo.light} class="w-full h-full object-cover" />
												</Avatar>
												<div class="flex flex-col gap-1 md:text-center">
													<Muted class="text-xs">{formatPeriod(project.period.from, project.period.to)}</Muted>
													<Badge variant="outline" class="text-xs">{project.type}</Badge>
												</div>
											</div>
											
											<!-- Contenu principal -->
											<div class="flex-1 flex flex-col">
												<div class="flex-1">
													<CardTitle class="text-xl mb-3">{project.name}</CardTitle>
													<CardDescription class="text-base mb-4">{project.shortDescription}</CardDescription>
													
													<!-- Skills -->
													<div class="flex flex-wrap gap-2 mb-4">
														{#each project.skills.slice(0, 4) as skill}
															<Badge variant="secondary" class="text-xs">
																{skill.name}
															</Badge>
														{/each}
														{#if project.skills.length > 4}
															<Badge variant="outline" class="text-xs">
																+{project.skills.length - 4}
															</Badge>
														{/if}
													</div>
												</div>
												
												<!-- Footer avec catégorie -->
												{#if project.category}
													<div class="border-t pt-3 mt-auto">
														<Muted class="text-xs">{project.category.name}</Muted>
													</div>
												{/if}
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
		{/if}

		{#if groups.length === 0}
			<EmptyResult />
		{:else}
			<div class="flex flex-col gap-14">
				{#each groups as group (group.category.slug)}
					<div class="flex flex-col gap-6">
						<div class="flex flex-row items-center gap-2">
							<Separator class="w-[50px]" />
							<Muted class="text-lg font-medium">{group.category.name}</Muted>
							<Separator class="flex-1" />
						</div>
						<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
							{#each group.items as project (project.slug)}
								<ProjectCard {project} />
							{/each}
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</SearchPage>

<style>
	/* Styles pour le carrousel des projets épinglés - identiques au blog */
	:global(.carousel-card.card) {
		background: transparent !important;
		border: none !important;
		box-shadow: none !important;
	}
	
	:global(.carousel-card.card:hover) {
		background: transparent !important;
		border: none !important;
		box-shadow: none !important;
		transform: none !important;
		border-color: transparent !important;
		transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) !important;
	}
	
	:global(.carousel-card .card-color) {
		background: transparent !important;
		transform: none !important;
	}
	
	:global(.carousel-card .card-color:hover) {
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
		border: 1px solid hsl(var(--border));
		border-radius: 0.5rem;
		box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
		background: hsl(var(--card) / 0.5);
		backdrop-filter: blur(8px);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}
	
	:global(.carousel-card:hover .carousel-card-content) {
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
	}

	/* Animation smooth pour les filtres - cachés par défaut, visibles quand focus */
	.filters-container {
		max-height: 0;
		opacity: 0;
		overflow: hidden;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		transform: translateY(-10px);
		pointer-events: none;
		margin-bottom: -1rem;
	}

	.filters-visible {
		max-height: 500px;
		opacity: 1;
		transform: translateY(0);
		pointer-events: auto;
		margin-bottom: 0;
	}
</style>
