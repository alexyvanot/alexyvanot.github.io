<script lang="ts">
	import { DetailPage } from '$lib/components/layout';
	import { Assets, EducationData } from '$lib/data';
	import type { Education } from '$lib/types';
	import { computeExactDuration, getMonthAndYear, href } from '$lib/utils';
	import { mode } from 'mode-watcher';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	let { data }: { data: { item?: Education } } = $props();

	let currentSlug = $derived($page.params.slug);
	let currentItem = $derived(EducationData.items.find(item => item.slug === currentSlug));

	let title = $derived(`${currentItem?.name ?? 'Formation non trouvée'} - Formations`);
	let banner = $derived(
		($mode == 'dark' ? currentItem?.logo.dark : currentItem?.logo.light) ?? Assets.Unknown.light
	);

	let duration = $derived(
		currentItem?.period 
			? `${getMonthAndYear(currentItem.period.from)} - ${getMonthAndYear(currentItem.period.to)} · ${computeExactDuration(currentItem.period.from, currentItem.period.to)}`
			: ''
	);

	const allEducations = EducationData.items.sort((a, b) => b.period.from.getTime() - a.period.from.getTime());
	const currentIndex = $derived(
		currentItem ? allEducations.findIndex(edu => edu.slug === currentItem?.slug) : -1
	);
	const previousEducation = $derived(currentIndex > 0 ? allEducations[currentIndex - 1] : null);
	const nextEducation = $derived(currentIndex < allEducations.length - 1 && currentIndex !== -1 ? allEducations[currentIndex + 1] : null);

	const scrollToTop = () => {
		if (!browser) return;
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	async function navigateToEducation(slug: string) {
		await goto(`/education/${slug}`);
		setTimeout(scrollToTop, 100);
	}

	async function navigateToEducations() {
		await goto('/education');
		setTimeout(scrollToTop, 100);
	}

	let previousNav = $derived(previousEducation ? { slug: previousEducation.slug, label: previousEducation.name } : null);
	let nextNav = $derived(nextEducation ? { slug: nextEducation.slug, label: nextEducation.name } : null);
</script>

<DetailPage
	{title}
	{banner}
	itemTitle={currentItem?.name ?? ''}
	description={currentItem?.description ?? ''}
	screenshots={currentItem?.screenshots ?? []}
	exists={!!currentItem}
	entityName="Formation"
	entityNamePlural="Toutes les formations"
	entityIcon="i-carbon-education"
	entityRoute="/education"
	previousItem={previousNav}
	nextItem={nextNav}
	onNavigateToItem={navigateToEducation}
	onNavigateToList={navigateToEducations}
>
	{#snippet headerMeta()}
		{#if currentItem?.organization}
			<span class="detail-meta-item">
				<div class="i-carbon-building"></div>
				{currentItem.organization}
			</span>
		{/if}
		{#if currentItem?.location}
			<span class="detail-meta-item">
				<div class="i-carbon-location"></div>
				{currentItem.location}
			</span>
		{/if}
		{#if currentItem?.degree}
			<span class="detail-meta-item">
				<div class="i-carbon-certificate"></div>
				{currentItem.degree}
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
		{#if currentItem?.subjects && currentItem.subjects.length > 0}
			<div class="detail-badges">
				{#each currentItem.subjects as subject}
					<span class="detail-badge">
						<div class="i-carbon-bookmark text-sm"></div>
						{subject}
					</span>
				{/each}
			</div>
		{/if}
	{/snippet}
</DetailPage>
