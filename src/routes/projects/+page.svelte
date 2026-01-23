<script lang="ts">
	import { EmptyResult } from '$lib/components/feedback';
	import { SearchPage } from '$lib/components/layout';
	import { ProjectCard } from '$lib/components/features';
	import { Icon, Toggle, Separator, Muted } from '$lib/components/ui';
	import { ProjectsData, SkillsData, groupProjectsByCategory } from '$lib/data';
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
	
	// Group projects by category
	let groups = $derived(groupProjectsByCategory(search, selectedFilters));

	const toggleSelected = (slug: string) => {
		filters = filters.map((it) => (it.slug === slug ? { ...it, isSelected: !it.isSelected } : it));
	};

	const onSearch = (query: string) => (search = query);
</script>

<SearchPage title={ProjectsData.title} {onSearch}>
	<div class="flex flex-1 flex-col gap-8">
		<div class="flex flex-row flex-wrap gap-2">
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
