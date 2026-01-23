<script lang="ts">
	import { DetailPage } from '$lib/components/layout';
	import { Assets, ProjectsData } from '$lib/data';
	import type { Project } from '$lib/types';
	import { computeExactDuration, getMonthAndYear, href } from '$lib/utils';
	import { mode } from 'mode-watcher';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	let { data }: { data: { item?: Project } } = $props();

	let currentSlug = $derived($page.params.slug);
	let currentItem = $derived(ProjectsData.items.find(item => item.slug === currentSlug));

	let title = $derived(`${currentItem?.name ?? 'Projet non trouvé'} - Projets`);
	let banner = $derived(
		($mode == 'dark' ? currentItem?.logo.dark : currentItem?.logo.light) ?? Assets.Unknown.light
	);

	let duration = $derived(
		currentItem?.period 
			? `${getMonthAndYear(currentItem.period.from)} - ${getMonthAndYear(currentItem.period.to)} · ${computeExactDuration(currentItem.period.from, currentItem.period.to)}`
			: ''
	);

	// Helper pour obtenir un timestamp safe
	const safeTime = (date: Date | undefined | null): number => {
		if (!date || !(date instanceof Date) || isNaN(date.getTime())) return 0;
		return date.getTime();
	};

	const allProjects = ProjectsData.items
		.filter(proj => proj.period?.from)
		.sort((a, b) => safeTime(b.period.from) - safeTime(a.period.from));
	const currentIndex = $derived(
		currentItem ? allProjects.findIndex(proj => proj.slug === currentItem?.slug) : -1
	);
	const previousProject = $derived(currentIndex > 0 ? allProjects[currentIndex - 1] : null);
	const nextProject = $derived(currentIndex < allProjects.length - 1 && currentIndex !== -1 ? allProjects[currentIndex + 1] : null);

	const scrollToTop = () => {
		if (!browser) return;
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	async function navigateToProject(slug: string) {
		await goto(`/projects/${slug}`);
		setTimeout(scrollToTop, 100);
	}

	async function navigateToProjects() {
		await goto('/projects');
		setTimeout(scrollToTop, 100);
	}

	let previousNav = $derived(previousProject ? { slug: previousProject.slug, label: previousProject.name } : null);
	let nextNav = $derived(nextProject ? { slug: nextProject.slug, label: nextProject.name } : null);
</script>

<DetailPage
	{title}
	{banner}
	itemTitle={currentItem?.name ?? ''}
	description={currentItem?.description ?? ''}
	screenshots={currentItem?.screenshots ?? []}
	attachments={currentItem?.attachments ?? []}
	exists={!!currentItem}
	entityName="Projet"
	entityNamePlural="Tous les projets"
	entityIcon="i-carbon-cube"
	entityRoute="/projects"
	previousItem={previousNav}
	nextItem={nextNav}
	onNavigateToItem={navigateToProject}
	onNavigateToList={navigateToProjects}
>
	{#snippet headerMeta()}
		{#if currentItem?.type}
			<span class="detail-meta-item">
				<div class="i-carbon-category"></div>
				{currentItem.type}
			</span>
		{/if}
		{#if duration}
			<span class="detail-meta-item">
				<div class="i-carbon-calendar"></div>
				{duration}
			</span>
		{/if}
	{/snippet}

	{#snippet headerBadges()}
		{#if currentItem?.links && currentItem.links.length > 0}
			<div class="detail-badges">
				{#each currentItem.links as link, index (`link-${index}-${link.to}`)}
					<a href={link.to} target="_blank" class="detail-badge">
						{#if link.icon}
							<div class={`${link.icon} text-sm`}></div>
						{:else}
							<div class="i-carbon-launch text-sm"></div>
						{/if}
						{link.label}
					</a>
				{/each}
			</div>
		{/if}
		{#if currentItem?.skills && currentItem.skills.length > 0}
			<div class="detail-badges">
				{#each currentItem.skills as skill, index (`skill-${index}-${skill.slug}`)}
					<a href={href(`/skills/${skill.slug}`)} class="detail-badge">
						<img class="h-4 w-4 rounded" src={$mode === 'dark' ? skill.logo.dark : skill.logo.light} alt={skill.name} />
						<span class="text-muted-foreground">{skill.name}</span>
					</a>
				{/each}
			</div>
		{/if}
	{/snippet}
</DetailPage>
