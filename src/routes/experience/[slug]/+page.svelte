<script lang="ts">
	import { DetailPage } from '$lib/components/layout';
	import { Assets, ExperienceData } from '$lib/data';
	import type { Experience } from '$lib/types';
	import { computeExactDuration, getMonthAndYear, href } from '$lib/utils';
	import { mode } from 'mode-watcher';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	let { data }: { data: { item?: Experience } } = $props();

	let currentSlug = $derived($page.params.slug);
	let currentItem = $derived(ExperienceData.items.find(item => item.slug === currentSlug));

	let title = $derived(`${currentItem?.name ?? 'Expérience non trouvée'} - Expériences`);
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

	const allExperiences = ExperienceData.items
		.filter(exp => exp.period?.from)
		.sort((a, b) => safeTime(b.period.from) - safeTime(a.period.from));
	const currentIndex = $derived(
		currentItem ? allExperiences.findIndex(exp => exp.slug === currentItem?.slug) : -1
	);
	const previousExperience = $derived(currentIndex > 0 ? allExperiences[currentIndex - 1] : null);
	const nextExperience = $derived(currentIndex < allExperiences.length - 1 && currentIndex !== -1 ? allExperiences[currentIndex + 1] : null);

	const scrollToTop = () => {
		if (!browser) return;
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	async function navigateToExperience(slug: string) {
		await goto(`/experience/${slug}`);
		setTimeout(scrollToTop, 100);
	}

	async function navigateToExperiences() {
		await goto('/experience');
		setTimeout(scrollToTop, 100);
	}

	let previousNav = $derived(previousExperience ? { slug: previousExperience.slug, label: previousExperience.name } : null);
	let nextNav = $derived(nextExperience ? { slug: nextExperience.slug, label: nextExperience.name } : null);
</script>

<DetailPage
	{title}
	{banner}
	itemTitle={currentItem?.name ?? ''}
	description={currentItem?.description ?? ''}
	screenshots={currentItem?.screenshots ?? []}
	exists={!!currentItem}
	entityName="Expérience"
	entityNamePlural="Toutes les expériences"
	entityIcon="i-carbon-portfolio"
	entityRoute="/experience"
	previousItem={previousNav}
	nextItem={nextNav}
	onNavigateToItem={navigateToExperience}
	onNavigateToList={navigateToExperiences}
>
	{#snippet headerMeta()}
		{#if currentItem?.company}
			<span class="detail-meta-item">
				<div class="i-carbon-building"></div>
				{currentItem.company}
			</span>
		{/if}
		{#if currentItem?.location}
			<span class="detail-meta-item">
				<div class="i-carbon-location"></div>
				{currentItem.location}
			</span>
		{/if}
		{#if currentItem?.type}
			<span class="detail-meta-item">
				<div class="i-carbon-user"></div>
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
				{#each currentItem.links as link (link.to)}
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
				{#each currentItem.skills as skill (skill.slug)}
					<a href={href(`/skills/${skill.slug}`)} class="detail-badge">
						<img class="h-5 w-5 rounded" src={$mode === 'dark' ? skill.logo.dark : skill.logo.light} alt={skill.name} />
						<span class="text-muted-foreground">{skill.name}</span>
					</a>
				{/each}
			</div>
		{/if}
	{/snippet}
</DetailPage>
