<script lang="ts">
	import BasePage from '$lib/components/common/base-page/base-page.svelte';
	import EmptyResult from '$lib/components/common/empty-result/empty-result.svelte';
	import FancyBanner from '$lib/components/common/fancy-banner/fancy-banner.svelte';
	import EmptyMarkdown from '$lib/components/common/markdown/empty-markdown.svelte';
	import Markdown from '$lib/components/common/markdown/markdown.svelte';
	import ScreenshotCard from '$lib/components/common/screenshot/screenshot-card.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import H1 from '$lib/components/ui/typography/h1.svelte';
	import Muted from '$lib/components/ui/typography/muted.svelte';
	import Assets from '$lib/data/assets';
	import ProjectsData from '$lib/data/projects';
	import type { Project } from '$lib/data/types';
	import { computeExactDuration, getMonthAndYear, href } from '$lib/utils';
	import { mode } from 'mode-watcher';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { fade, fly } from 'svelte/transition';

	let { data }: { data: { item?: Project } } = $props();
	
	// Variable pour déterminer si la page nécessite les boutons de navigation en bas
	let needsBottomNav = $state(false);
	let scrollContainers = $state<Element[]>([]);

	// Utiliser le slug de la page pour forcer la réactivité
	let currentSlug = $derived($page.params.slug);
	let currentItem = $derived(ProjectsData.items.find(item => item.slug === currentSlug));

	let title = $derived(`${currentItem?.name ?? 'Projet non trouvé'} - Projets`);
	let banner = $derived(
		($mode == 'dark' ? currentItem?.logo.dark : currentItem?.logo.light) ?? Assets.Unknown.light
	);

	let duration = $derived(
		`${getMonthAndYear(currentItem?.period.from)} - ${getMonthAndYear(currentItem?.period.to)} · ${computeExactDuration(
			currentItem?.period.from ?? new Date(),
			currentItem?.period.to
		)}`
	);

	// Navigation entre projets
	const allProjects = ProjectsData.items.sort((a, b) => b.period.from.getTime() - a.period.from.getTime());
	const currentIndex = $derived(
		currentItem ? allProjects.findIndex(proj => proj.slug === currentItem?.slug) : -1
	);
	const previousProject = $derived(
		currentIndex > 0 ? allProjects[currentIndex - 1] : null
	);
	const nextProject = $derived(
		currentIndex < allProjects.length - 1 && currentIndex !== -1 ? allProjects[currentIndex + 1] : null
	);
	
	// Fonction pour trouver les conteneurs de défilement
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

	// Fonction pour vérifier si la page nécessite un défilement (et donc des boutons de navigation en bas)
	function checkPageNeedsScroll() {
		if (!browser) return;
		
		// Mettre à jour la liste des conteneurs scrollables
		scrollContainers = findScrollContainers();
		
		// On considère qu'on a besoin des boutons en bas si la hauteur du document est supérieure 
		// à la hauteur de la fenêtre + une marge (pour éviter des apparitions/disparitions trop fréquentes)
		const margin = 200; // marge en pixels
		
		// Hauteur du contenu de la page
		const documentHeight = Math.max(
			document.body.scrollHeight,
			document.documentElement.scrollHeight,
			document.body.offsetHeight,
			document.documentElement.offsetHeight,
			document.body.clientHeight,
			document.documentElement.clientHeight
		);
		
		// Hauteur de la fenêtre
		const windowHeight = window.innerHeight;
		
		// Vérifier si la page principale nécessite un défilement
		let needsScroll = documentHeight > (windowHeight + margin);
		
		// Vérifier également si l'un des conteneurs scrollables nécessite un défilement
		if (!needsScroll && scrollContainers.length > 0) {
			for (const container of scrollContainers) {
				if (container.scrollHeight > container.clientHeight + margin) {
					needsScroll = true;
					break;
				}
			}
		}
		
		// Mise à jour de la variable d'état
		needsBottomNav = needsScroll;
	}

	// Fonction pour remonter en haut
	const scrollToTop = () => {
		if (!browser) return;
		
		// Utiliser les conteneurs scrollables trouvés
		scrollContainers.forEach(container => {
			container.scrollTo({ top: 0, behavior: 'smooth' });
		});
		
		// Fallbacks pour être sûr
		window.scrollTo({ top: 0, behavior: 'smooth' });
		document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
		document.body.scrollTo({ top: 0, behavior: 'smooth' });
	};
	
	// Fonction pour surveiller le défilement sur tous les conteneurs
	function setupScrollListeners() {
		if (!browser) return;
		
		// Vérifier d'abord au chargement
		checkPageNeedsScroll();
		
		// Ajouter les écouteurs d'événements sur la fenêtre et le document
		window.addEventListener('scroll', checkPageNeedsScroll, { passive: true });
		document.addEventListener('scroll', checkPageNeedsScroll, { passive: true });
		window.addEventListener('resize', checkPageNeedsScroll);
		window.addEventListener('load', checkPageNeedsScroll);
		
		// Ajouter les écouteurs sur tous les conteneurs scrollables
		scrollContainers.forEach(container => {
			container.addEventListener('scroll', checkPageNeedsScroll, { passive: true });
		});
		
		// Vérifier périodiquement s'il y a de nouveaux conteneurs scrollables
		const interval = setInterval(() => {
			const newContainers = findScrollContainers();
			const added = newContainers.filter(c => !scrollContainers.includes(c));
			
			// Ajouter des écouteurs aux nouveaux conteneurs
			added.forEach(container => {
				container.addEventListener('scroll', checkPageNeedsScroll, { passive: true });
			});
			
			// Mettre à jour la liste des conteneurs
			if (added.length > 0) {
				scrollContainers = newContainers;
				checkPageNeedsScroll();
			}
		}, 2000);
		
		// Retourner une fonction de nettoyage
		return () => {
			window.removeEventListener('scroll', checkPageNeedsScroll);
			document.removeEventListener('scroll', checkPageNeedsScroll);
			window.removeEventListener('resize', checkPageNeedsScroll);
			window.removeEventListener('load', checkPageNeedsScroll);
			
			scrollContainers.forEach(container => {
				container.removeEventListener('scroll', checkPageNeedsScroll);
			});
			
			clearInterval(interval);
		};
	}

	// Fonction de navigation avec scroll optimisé vers le haut
	async function navigateToProject(slug: string) {
		await goto(`/projects/${slug}`);
		// Attendre un peu que la page se charge puis remonter
		setTimeout(scrollToTop, 100);
	}

	async function navigateToProjects() {
		await goto('/projects');
		// Attendre un peu que la page se charge puis remonter
		setTimeout(scrollToTop, 100);
	}
	
	// Initialisation et nettoyage des écouteurs d'événements
	let cleanupFunction: (() => void) | undefined;
	
	onMount(() => {
		// Décalage pour s'assurer que le DOM est complètement chargé
		setTimeout(() => {
			cleanupFunction = setupScrollListeners();
		}, 300);
	});
	
	onDestroy(() => {
		if (cleanupFunction) cleanupFunction();
	});
</script>

<BasePage {title}>
	{#if !currentItem}
		<EmptyResult />
	{:else}
		<FancyBanner img={banner} class="rounded-xl overflow-hidden border border-border/30">
			<div class="flex w-full flex-col items-center justify-center gap-4">
				<H1>{currentItem.name}</H1>
				<Muted>{currentItem.type}</Muted>
				<Muted>{duration}</Muted>
				<div class="w-full border-t border-border/30 my-4"></div>
				<div class="flex flex-row flex-wrap justify-center gap-2">
					{#each currentItem.links as link (link.to)}
						<a href={link.to} target="_blank"><Badge variant="outline">{link.label}</Badge></a>
					{/each}
				</div>
				<div class="flex flex-row flex-wrap justify-center gap-2">
					{#each currentItem.skills as skill (skill.slug)}
						<a href={href(`/skills/${skill.slug}`)}>
							<Badge variant="outline" class="flex flex-row items-center justify-center gap-2">
								<img
									class="h-[20px] w-[20px]"
									src={$mode === 'dark' ? skill.logo.dark : skill.logo.light}
									alt={skill.name}
								/>
								<Muted>{skill.name}</Muted>
							</Badge>
						</a>
					{/each}
				</div>
			</div>
		</FancyBanner>
		
		<!-- Navigation en haut -->
		<div class="mb-6 mt-12">
			<div class="flex items-center justify-between gap-4 flex-wrap">
				<!-- Projet précédent -->
				{#if previousProject}
					<button 
						onclick={() => navigateToProject(previousProject.slug)}
						class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-200 group shadow-sm hover:shadow-md text-sm font-medium"
					>
						<div class="i-carbon-chevron-left group-hover:-translate-x-1 transition-transform duration-200"></div>
						<div class="text-left hidden sm:block">
							<div class="text-xs text-muted-foreground">Projet précédent</div>
							<div class="line-clamp-1 max-w-[200px]">{previousProject.name}</div>
						</div>
						<span class="sm:hidden">Précédent</span>
					</button>
				{:else}
					<div class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-muted text-muted-foreground cursor-not-allowed shadow-sm text-sm font-medium opacity-50">
						<div class="i-carbon-chevron-left"></div>
						<span class="hidden sm:inline">Projet précédent</span>
						<span class="sm:hidden">Précédent</span>
					</div>
				{/if}
				
				<!-- Retour aux projets -->
				<button 
					onclick={navigateToProjects}
					class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-200 shadow-sm hover:shadow-md text-sm font-medium"
				>
					<div class="i-carbon-list"></div>
					<span>Tous les projets</span>
				</button>
				
				<!-- Projet suivant -->
				{#if nextProject}
					<button 
						onclick={() => navigateToProject(nextProject.slug)}
						class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-200 group shadow-sm hover:shadow-md text-sm font-medium"
					>
						<div class="text-right hidden sm:block">
							<div class="text-xs text-muted-foreground">Projet suivant</div>
							<div class="line-clamp-1 max-w-[200px]">{nextProject.name}</div>
						</div>
						<span class="sm:hidden">Suivant</span>
						<div class="i-carbon-chevron-right group-hover:translate-x-1 transition-transform duration-200"></div>
					</button>
				{:else}
					<div class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-muted text-muted-foreground cursor-not-allowed shadow-sm text-sm font-medium opacity-50">
						<span class="hidden sm:inline">Projet suivant</span>
						<span class="sm:hidden">Suivant</span>
						<div class="i-carbon-chevron-right"></div>
					</div>
				{/if}
			</div>
		</div>
		
		<div class="mt-8">
			{#if currentItem.description.trim()}
				<Markdown content={currentItem.description} />
			{:else}
				<EmptyMarkdown />
			{/if}
		</div>
		
		<div class="flex flex-col gap-2 px-4 pt-4 mt-8">
			{#if currentItem.screenshots && currentItem.screenshots.length > 0}
				<Muted>Captures d'écran</Muted>
				<div class="grid grid-cols-1 gap-2 py-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{#each currentItem.screenshots as img, index (index)}
						<ScreenshotCard item={img} />
					{/each}
				</div>
			{/if}
		</div>
		
		<!-- Navigation en bas (affichée seulement si la page est longue) -->
		{#if needsBottomNav}
			<div class="mt-12 mb-6" in:fade={{ duration: 200 }}>
				<div class="flex items-center justify-between gap-4 flex-wrap">
					<!-- Projet précédent -->
					{#if previousProject}
						<button 
							onclick={() => navigateToProject(previousProject.slug)}
							class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-200 group shadow-sm hover:shadow-md text-sm font-medium"
						>
							<div class="i-carbon-chevron-left group-hover:-translate-x-1 transition-transform duration-200"></div>
							<div class="text-left hidden sm:block">
								<div class="text-xs text-muted-foreground">Projet précédent</div>
								<div class="line-clamp-1 max-w-[200px]">{previousProject.name}</div>
							</div>
							<span class="sm:hidden">Précédent</span>
						</button>
					{:else}
						<div class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-muted text-muted-foreground cursor-not-allowed shadow-sm text-sm font-medium opacity-50">
							<div class="i-carbon-chevron-left"></div>
							<span class="hidden sm:inline">Projet précédent</span>
							<span class="sm:hidden">Précédent</span>
						</div>
					{/if}
				
				<!-- Retour aux projets -->
				<button 
					onclick={navigateToProjects}
					class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-200 shadow-sm hover:shadow-md text-sm font-medium"
				>
					<div class="i-carbon-list"></div>
					<span>Tous les projets</span>
				</button>
				
				<!-- Projet suivant -->
				{#if nextProject}
					<button 
						onclick={() => navigateToProject(nextProject.slug)}
						class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-200 group shadow-sm hover:shadow-md text-sm font-medium"
					>
						<div class="text-right hidden sm:block">
							<div class="text-xs text-muted-foreground">Projet suivant</div>
							<div class="line-clamp-1 max-w-[200px]">{nextProject.name}</div>
						</div>
						<span class="sm:hidden">Suivant</span>
						<div class="i-carbon-chevron-right group-hover:translate-x-1 transition-transform duration-200"></div>
					</button>
				{:else}
					<div class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-muted text-muted-foreground cursor-not-allowed shadow-sm text-sm font-medium opacity-50">
						<span class="hidden sm:inline">Projet suivant</span>
						<span class="sm:hidden">Suivant</span>
						<div class="i-carbon-chevron-right"></div>
					</div>
				{/if}
			</div>
		</div>
		{/if}
	{/if}
</BasePage>
