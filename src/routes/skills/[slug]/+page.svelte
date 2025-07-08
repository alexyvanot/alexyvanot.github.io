<script lang="ts">
	import BasePage from '$lib/components/common/base-page/base-page.svelte';
	import EmptyResult from '$lib/components/common/empty-result/empty-result.svelte';
	import FancyBanner from '$lib/components/common/fancy-banner/fancy-banner.svelte';
	import EmptyMarkdown from '$lib/components/common/markdown/empty-markdown.svelte';
	import Markdown from '$lib/components/common/markdown/markdown.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import H1 from '$lib/components/ui/typography/h1.svelte';
	import Muted from '$lib/components/ui/typography/muted.svelte';
	import Assets from '$lib/data/assets';
	import ExperienceData from '$lib/data/experience';
	import ProjectsData from '$lib/data/projects';
	import SkillsData from '$lib/data/skills';
	import type { Skill } from '$lib/data/types';
	import { href } from '$lib/utils';
	import { mode } from 'mode-watcher';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let { data }: { data: { item?: Skill } } = $props();

	// Utiliser le slug de la page pour forcer la réactivité
	let currentSlug = $derived($page.params.slug);
	let currentItem = $derived(SkillsData.items.find(item => item.slug === currentSlug));

	let title = $derived(`${currentItem?.name ?? 'Compétence non trouvée'} - Compétences`);
	let banner = $derived(
		($mode == 'dark' ? currentItem?.logo.dark : currentItem?.logo.light) ?? Assets.Unknown.light
	);

	let related = $derived(
		(() => {
			const current = currentItem;

			if (!current) return [];

			const items: Array<{ name: string; logo: string; link: string }> = [];

			ProjectsData.items.forEach((it) => {
				if (it.skills.find((skill) => skill.slug === current.slug)) {
					items.push({
						link: `/projects/${it.slug}`,
						logo: $mode === 'dark' ? it.logo.dark : it.logo.light,
						name: it.name
					});
				}
			});

			ExperienceData.items.forEach((it) => {
				if (it.skills.find((skill) => skill.slug === current.slug)) {
					items.push({
						link: `/experience/${it.slug}`,
						logo: $mode === 'dark' ? it.logo.dark : it.logo.light,
						name: it.name
					});
				}
			});

			return items;
		})()
	);

	// Navigation entre compétences
	const allSkills = SkillsData.items.slice().sort((a, b) => a.name.localeCompare(b.name));
	const currentIndex = $derived(
		currentItem ? allSkills.findIndex(skill => skill.slug === currentItem?.slug) : -1
	);
	const previousSkill = $derived(
		currentIndex > 0 ? allSkills[currentIndex - 1] : null
	);
	const nextSkill = $derived(
		currentIndex < allSkills.length - 1 && currentIndex !== -1 ? allSkills[currentIndex + 1] : null
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
	async function navigateToSkill(slug: string) {
		await goto(`/skills/${slug}`);
		// Attendre un peu que la page se charge puis remonter
		setTimeout(scrollToTop, 100);
	}

	async function navigateToSkills() {
		await goto('/skills');
		// Attendre un peu que la page se charge puis remonter
		setTimeout(scrollToTop, 100);
	}
</script>

<BasePage {title}>
	{#if !currentItem}
		<EmptyResult />
	{:else}
		<FancyBanner img={banner} class="rounded-xl overflow-hidden border border-border/30">
			<H1>{currentItem.name}</H1>
		</FancyBanner>
		
		<!-- Navigation en haut -->
		<div class="mb-6 mt-12">
			<div class="flex items-center justify-between gap-4 flex-wrap">
				<!-- Compétence précédente -->
				{#if previousSkill}
					<button 
						onclick={() => navigateToSkill(previousSkill.slug)}
						class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-200 group shadow-sm hover:shadow-md text-sm font-medium"
					>
						<div class="i-carbon-arrow-left group-hover:-translate-x-1 transition-transform duration-200"></div>
						<div class="text-left hidden sm:block">
							<div class="text-xs text-muted-foreground">Compétence précédente</div>
							<div class="line-clamp-1 max-w-[200px]">{previousSkill.name}</div>
						</div>
						<span class="sm:hidden">Précédent</span>
					</button>
				{:else}
					<div class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-muted text-muted-foreground cursor-not-allowed shadow-sm text-sm font-medium opacity-50">
						<div class="i-carbon-arrow-left"></div>
						<span class="hidden sm:inline">Compétence précédente</span>
						<span class="sm:hidden">Précédent</span>
					</div>
				{/if}
				
				<!-- Retour aux compétences -->
				<button 
					onclick={navigateToSkills}
					class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-200 shadow-sm hover:shadow-md text-sm font-medium"
				>
					<div class="i-carbon-list"></div>
					<span>Toutes les compétences</span>
				</button>
				
				<!-- Compétence suivante -->
				{#if nextSkill}
					<button 
						onclick={() => navigateToSkill(nextSkill.slug)}
						class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-200 group shadow-sm hover:shadow-md text-sm font-medium"
					>
						<div class="text-right hidden sm:block">
							<div class="text-xs text-muted-foreground">Compétence suivante</div>
							<div class="line-clamp-1 max-w-[200px]">{nextSkill.name}</div>
						</div>
						<span class="sm:hidden">Suivant</span>
						<div class="i-carbon-arrow-right group-hover:translate-x-1 transition-transform duration-200"></div>
					</button>
				{:else}
					<div class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-muted text-muted-foreground cursor-not-allowed shadow-sm text-sm font-medium opacity-50">
						<span class="hidden sm:inline">Compétence suivante</span>
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
		
		{#if related.length !== 0}
			<div class="flex flex-col gap-4 px-4 py-4 mt-8 border-t border-border/30">
				<Muted>Projets et expériences liés</Muted>
				<div class="flex flex-row flex-wrap items-center gap-2">
					{#each related as item}
						<a href={href(item.link)}>
							<Badge variant="outline" class="flex flex-row items-center justify-center gap-2">
								<img class="h-[20px] w-[20px]" src={item.logo} alt={item.name} />
								<span>{item.name}</span>
							</Badge>
						</a>
					{/each}
				</div>
			</div>
		{/if}
		
		<!-- Navigation en bas -->
		<div class="mt-12 mb-6">
			<div class="flex items-center justify-between gap-4 flex-wrap">
				<!-- Compétence précédente -->
				{#if previousSkill}
					<button 
						onclick={() => navigateToSkill(previousSkill.slug)}
						class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-200 group shadow-sm hover:shadow-md text-sm font-medium"
					>
						<div class="i-carbon-arrow-left group-hover:-translate-x-1 transition-transform duration-200"></div>
						<div class="text-left hidden sm:block">
							<div class="text-xs text-muted-foreground">Compétence précédente</div>
							<div class="line-clamp-1 max-w-[200px]">{previousSkill.name}</div>
						</div>
						<span class="sm:hidden">Précédent</span>
					</button>
				{:else}
					<div class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-muted text-muted-foreground cursor-not-allowed shadow-sm text-sm font-medium opacity-50">
						<div class="i-carbon-arrow-left"></div>
						<span class="hidden sm:inline">Compétence précédente</span>
						<span class="sm:hidden">Précédent</span>
					</div>
				{/if}
				
				<!-- Retour aux compétences -->
				<button 
					onclick={navigateToSkills}
					class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-200 shadow-sm hover:shadow-md text-sm font-medium"
				>
					<div class="i-carbon-list"></div>
					<span>Toutes les compétences</span>
				</button>
				
				<!-- Compétence suivante -->
				{#if nextSkill}
					<button 
						onclick={() => navigateToSkill(nextSkill.slug)}
						class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-200 group shadow-sm hover:shadow-md text-sm font-medium"
					>
						<div class="text-right hidden sm:block">
							<div class="text-xs text-muted-foreground">Compétence suivante</div>
							<div class="line-clamp-1 max-w-[200px]">{nextSkill.name}</div>
						</div>
						<span class="sm:hidden">Suivant</span>
						<div class="i-carbon-arrow-right group-hover:translate-x-1 transition-transform duration-200"></div>
					</button>
				{:else}
					<div class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-muted text-muted-foreground cursor-not-allowed shadow-sm text-sm font-medium opacity-50">
						<span class="hidden sm:inline">Compétence suivante</span>
						<span class="sm:hidden">Suivant</span>
						<div class="i-carbon-arrow-right"></div>
					</div>
				{/if}
			</div>
		</div>
	{/if}
</BasePage>
