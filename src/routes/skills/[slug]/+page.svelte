<script lang="ts">
	import { DetailPage } from '$lib/components/layout';
	import { Assets, ExperienceData, ProjectsData, SkillsData } from '$lib/data';
	import type { Skill } from '$lib/types';
	import { href } from '$lib/utils';
	import { mode } from 'mode-watcher';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { fly } from 'svelte/transition';

	let { data }: { data: { item?: Skill } } = $props();

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

	const allSkills = SkillsData.items.slice().sort((a, b) => a.name.localeCompare(b.name));
	const currentIndex = $derived(
		currentItem ? allSkills.findIndex(skill => skill.slug === currentItem?.slug) : -1
	);
	const previousSkill = $derived(currentIndex > 0 ? allSkills[currentIndex - 1] : null);
	const nextSkill = $derived(currentIndex < allSkills.length - 1 && currentIndex !== -1 ? allSkills[currentIndex + 1] : null);

	const scrollToTop = () => {
		if (!browser) return;
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	async function navigateToSkill(slug: string) {
		await goto(`/skills/${slug}`);
		setTimeout(scrollToTop, 100);
	}

	async function navigateToSkills() {
		await goto('/skills');
		setTimeout(scrollToTop, 100);
	}

	let previousNav = $derived(previousSkill ? { slug: previousSkill.slug, label: previousSkill.name } : null);
	let nextNav = $derived(nextSkill ? { slug: nextSkill.slug, label: nextSkill.name } : null);
</script>

<DetailPage
	{title}
	{banner}
	itemTitle={currentItem?.name ?? ''}
	description={currentItem?.description ?? ''}
	exists={!!currentItem}
	entityName="Compétence"
	entityNamePlural="Toutes les compétences"
	entityIcon="i-carbon-skill-level-advanced"
	entityRoute="/skills"
	previousItem={previousNav}
	nextItem={nextNav}
	onNavigateToItem={navigateToSkill}
	onNavigateToList={navigateToSkills}
>
	{#snippet extraSections()}
		{#if related.length > 0}
			<div class="detail-section detail-animate detail-animate-delay-3" in:fly={{ y: 20, duration: 400, delay: 300 }}>
				<h3 class="detail-section-title">
					<div class="i-carbon-connect"></div>
					Projets et expériences liés
				</h3>
				<div class="detail-related">
					{#each related as item}
						<a href={href(item.link)} class="detail-badge">
							<img class="h-5 w-5 rounded" src={item.logo} alt={item.name} />
							<span>{item.name}</span>
						</a>
					{/each}
				</div>
			</div>
		{/if}
	{/snippet}
</DetailPage>
