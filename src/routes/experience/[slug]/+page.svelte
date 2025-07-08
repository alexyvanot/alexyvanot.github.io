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
	import ExperienceData from '$lib/data/experience';
	import type { Experience } from '$lib/data/types';
	import { computeExactDuration, getMonthAndYear, href } from '$lib/utils';
	import { mode } from 'mode-watcher';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let { data }: { data: { item?: Experience } } = $props();

	// Utiliser le slug de la page pour forcer la réactivité
	let currentSlug = $derived($page.params.slug);
	let currentItem = $derived(ExperienceData.items.find(item => item.slug === currentSlug));

	let title = $derived(`${currentItem?.name ?? 'Expérience non trouvée'} - Expériences`);
	let banner = $derived(
		($mode == 'dark' ? currentItem?.logo.dark : currentItem?.logo.light) ?? Assets.Unknown.light
	);

	let duration = $derived(
		`${getMonthAndYear(currentItem?.period.from)} - ${getMonthAndYear(currentItem?.period.to)} · ${computeExactDuration(
			currentItem?.period.from ?? new Date(),
			currentItem?.period.to
		)}`
	);

	// Navigation entre expériences
	const allExperiences = ExperienceData.items.sort((a, b) => b.period.from.getTime() - a.period.from.getTime());
	const currentIndex = $derived(
		currentItem ? allExperiences.findIndex(exp => exp.slug === currentItem?.slug) : -1
	);
	const previousExperience = $derived(
		currentIndex > 0 ? allExperiences[currentIndex - 1] : null
	);
	const nextExperience = $derived(
		currentIndex < allExperiences.length - 1 && currentIndex !== -1 ? allExperiences[currentIndex + 1] : null
	);

	// Fonction pour remonter en haut (inspirée du composant scroll-to-top)
	const scrollToTop = () => {
		if (typeof window === 'undefined') return;
		
		// Trouver tous les conteneurs scrollables
		const scrollContainers: Element[] = [];
		
		// Chercher les éléments avec overflow
		const overflowElements = document.querySelectorAll(
			'[style*="overflow"], .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll'
		);
		
		for (const el of overflowElements) {
			if (el.scrollHeight > el.clientHeight) {
				scrollContainers.push(el);
			}
		}
		
		// Chercher les conteneurs scrollables actifs
		const allElements = document.querySelectorAll('*');
		for (const el of allElements) {
			if (el.scrollHeight > el.clientHeight && el.scrollTop > 0) {
				if (!scrollContainers.includes(el)) {
					scrollContainers.push(el);
				}
			}
		}
		
		// Scroll sur tous les conteneurs trouvés
		scrollContainers.forEach(container => {
			container.scrollTo({ top: 0, behavior: 'smooth' });
		});
		
		// Fallbacks pour être sûr
		window.scrollTo({ top: 0, behavior: 'smooth' });
		document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
		document.body.scrollTo({ top: 0, behavior: 'smooth' });
	};

	// Fonction de navigation avec scroll optimisé vers le haut
	async function navigateToExperience(slug: string) {
		await goto(`/experience/${slug}`);
		// Attendre un peu que la page se charge puis remonter
		setTimeout(scrollToTop, 100);
	}

	async function navigateToExperiences() {
		await goto('/experience');
		// Attendre un peu que la page se charge puis remonter
		setTimeout(scrollToTop, 100);
	}
</script>

<BasePage {title}>
	{#if !currentItem}
		<EmptyResult />
	{:else}
		<FancyBanner img={banner} class="rounded-xl overflow-hidden border border-border/30">
			<div class="flex w-full flex-col items-center justify-center gap-4">
				<H1>{currentItem.name}</H1>
				<Muted>{currentItem.company} · {currentItem.location} · {currentItem.type}</Muted>
				<Muted>{duration}</Muted>
				<div class="w-full border-t border-border/30 my-4"></div>
				<div class="flex flex-row flex-wrap justify-center gap-2">
					{#each currentItem.links as link (link.to)}
						<a href={link.to} target="_blank">
							<Badge variant="outline" class="flex flex-row items-center justify-center gap-2">
								{#if link.icon}
									<div class={link.icon}></div>
								{:else}
									<div class="i-carbon-launch"></div>
								{/if}
								{link.label}
							</Badge>
						</a>
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
				<!-- Expérience précédente -->
				{#if previousExperience}
					<button 
						onclick={() => navigateToExperience(previousExperience.slug)}
						class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-200 group shadow-sm hover:shadow-md text-sm font-medium"
					>
						<div class="i-carbon-arrow-left group-hover:-translate-x-1 transition-transform duration-200"></div>
						<div class="text-left hidden sm:block">
							<div class="text-xs text-muted-foreground">Expérience précédente</div>
							<div class="line-clamp-1 max-w-[200px]">{previousExperience.name}</div>
						</div>
						<span class="sm:hidden">Précédent</span>
					</button>
				{:else}
					<div class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-muted text-muted-foreground cursor-not-allowed shadow-sm text-sm font-medium opacity-50">
						<div class="i-carbon-arrow-left"></div>
						<span class="hidden sm:inline">Expérience précédente</span>
						<span class="sm:hidden">Précédent</span>
					</div>
				{/if}
				
				<!-- Retour aux expériences -->
				<button 
					onclick={navigateToExperiences}
					class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-200 shadow-sm hover:shadow-md text-sm font-medium"
				>
					<div class="i-carbon-list"></div>
					<span>Toutes les expériences</span>
				</button>
				
				<!-- Expérience suivante -->
				{#if nextExperience}
					<button 
						onclick={() => navigateToExperience(nextExperience.slug)}
						class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-200 group shadow-sm hover:shadow-md text-sm font-medium"
					>
						<div class="text-right hidden sm:block">
							<div class="text-xs text-muted-foreground">Expérience suivante</div>
							<div class="line-clamp-1 max-w-[200px]">{nextExperience.name}</div>
						</div>
						<span class="sm:hidden">Suivant</span>
						<div class="i-carbon-arrow-right group-hover:translate-x-1 transition-transform duration-200"></div>
					</button>
				{:else}
					<div class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-muted text-muted-foreground cursor-not-allowed shadow-sm text-sm font-medium opacity-50">
						<span class="hidden sm:inline">Expérience suivante</span>
						<span class="sm:hidden">Suivant</span>
						<div class="i-carbon-arrow-right"></div>
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
		
		<!-- Navigation en bas -->
		<div class="mt-12 mb-6">
			<div class="flex items-center justify-between gap-4 flex-wrap">
				<!-- Expérience précédente -->
				{#if previousExperience}
					<button 
						onclick={() => navigateToExperience(previousExperience.slug)}
						class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-200 group shadow-sm hover:shadow-md text-sm font-medium"
					>
						<div class="i-carbon-arrow-left group-hover:-translate-x-1 transition-transform duration-200"></div>
						<div class="text-left hidden sm:block">
							<div class="text-xs text-muted-foreground">Expérience précédente</div>
							<div class="line-clamp-1 max-w-[200px]">{previousExperience.name}</div>
						</div>
						<span class="sm:hidden">Précédent</span>
					</button>
				{:else}
					<div class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-muted text-muted-foreground cursor-not-allowed shadow-sm text-sm font-medium opacity-50">
						<div class="i-carbon-arrow-left"></div>
						<span class="hidden sm:inline">Expérience précédente</span>
						<span class="sm:hidden">Précédent</span>
					</div>
				{/if}
				
				<!-- Retour aux expériences -->
				<button 
					onclick={navigateToExperiences}
					class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-200 shadow-sm hover:shadow-md text-sm font-medium"
				>
					<div class="i-carbon-list"></div>
					<span>Toutes les expériences</span>
				</button>
				
				<!-- Expérience suivante -->
				{#if nextExperience}
					<button 
						onclick={() => navigateToExperience(nextExperience.slug)}
						class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-200 group shadow-sm hover:shadow-md text-sm font-medium"
					>
						<div class="text-right hidden sm:block">
							<div class="text-xs text-muted-foreground">Expérience suivante</div>
							<div class="line-clamp-1 max-w-[200px]">{nextExperience.name}</div>
						</div>
						<span class="sm:hidden">Suivant</span>
						<div class="i-carbon-arrow-right group-hover:translate-x-1 transition-transform duration-200"></div>
					</button>
				{:else}
					<div class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-muted text-muted-foreground cursor-not-allowed shadow-sm text-sm font-medium opacity-50">
						<span class="hidden sm:inline">Expérience suivante</span>
						<span class="sm:hidden">Suivant</span>
						<div class="i-carbon-arrow-right"></div>
					</div>
				{/if}
			</div>
		</div>
	{/if}
</BasePage>
