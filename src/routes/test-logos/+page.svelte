<script lang="ts">
	import { Assets, SkillsData, BlogData, ExperienceData, EducationData, ProjectsData } from '$lib/data';
	
	// Test direct access to Assets
	const testAssets = {
		Svelte: Assets.Svelte,
		Java: Assets.Java,
		Soleil: Assets.Soleil,
		Unknown: Assets.Unknown
	};
	
	// Get first items from each data source
	const firstSkill = SkillsData.items[0];
	const firstBlog = BlogData.items[0];
	const firstExp = ExperienceData.items[0];
	const firstEdu = EducationData.items[0];
	const firstProject = ProjectsData.items[0];
</script>

<div class="p-8 space-y-8">
	<h1 class="text-2xl font-bold">Test des Logos</h1>
	
	<section class="space-y-4">
		<h2 class="text-xl font-semibold">1. Assets directs</h2>
		<div class="grid grid-cols-4 gap-4">
			{#each Object.entries(testAssets) as [name, asset]}
				<div class="border p-4 rounded">
					<p class="font-medium mb-2">{name}</p>
					<p class="text-xs text-gray-500 mb-2">Light: {asset.light}</p>
					<p class="text-xs text-gray-500 mb-2">Dark: {asset.dark}</p>
					<img src={asset.light} alt={name} class="w-16 h-16 object-contain" />
				</div>
			{/each}
		</div>
	</section>
	
	<section class="space-y-4">
		<h2 class="text-xl font-semibold">2. Premier Skill: {firstSkill?.name}</h2>
		{#if firstSkill}
			<div class="border p-4 rounded">
				<p>Logo light: {firstSkill.logo.light}</p>
				<p>Logo dark: {firstSkill.logo.dark}</p>
				<img src={firstSkill.logo.light} alt={firstSkill.name} class="w-16 h-16 object-contain" />
			</div>
		{:else}
			<p class="text-red-500">Aucun skill trouvé!</p>
		{/if}
	</section>
	
	<section class="space-y-4">
		<h2 class="text-xl font-semibold">3. Premier Blog: {firstBlog?.title}</h2>
		{#if firstBlog}
			<div class="border p-4 rounded">
				<p>Logo light: {firstBlog.logo.light}</p>
				<p>Logo dark: {firstBlog.logo.dark}</p>
				<img src={firstBlog.logo.light} alt={firstBlog.title} class="w-16 h-16 object-contain" />
			</div>
		{:else}
			<p class="text-red-500">Aucun blog trouvé!</p>
		{/if}
	</section>
	
	<section class="space-y-4">
		<h2 class="text-xl font-semibold">4. Première Experience: {firstExp?.name}</h2>
		{#if firstExp}
			<div class="border p-4 rounded">
				<p>Logo light: {firstExp.logo.light}</p>
				<p>Logo dark: {firstExp.logo.dark}</p>
				<img src={firstExp.logo.light} alt={firstExp.name} class="w-16 h-16 object-contain" />
			</div>
		{:else}
			<p class="text-red-500">Aucune experience trouvée!</p>
		{/if}
	</section>
	
	<section class="space-y-4">
		<h2 class="text-xl font-semibold">5. Première Education: {firstEdu?.name}</h2>
		{#if firstEdu}
			<div class="border p-4 rounded">
				<p>Logo light: {firstEdu.logo.light}</p>
				<p>Logo dark: {firstEdu.logo.dark}</p>
				<img src={firstEdu.logo.light} alt={firstEdu.name} class="w-16 h-16 object-contain" />
			</div>
		{:else}
			<p class="text-red-500">Aucune education trouvée!</p>
		{/if}
	</section>
	
	<section class="space-y-4">
		<h2 class="text-xl font-semibold">6. Premier Projet: {firstProject?.name}</h2>
		{#if firstProject}
			<div class="border p-4 rounded">
				<p>Logo light: {firstProject.logo.light}</p>
				<p>Logo dark: {firstProject.logo.dark}</p>
				<img src={firstProject.logo.light} alt={firstProject.name} class="w-16 h-16 object-contain" />
			</div>
		{:else}
			<p class="text-red-500">Aucun projet trouvé!</p>
		{/if}
	</section>
	
	<section class="space-y-4">
		<h2 class="text-xl font-semibold">7. Test image directe</h2>
		<div class="grid grid-cols-3 gap-4">
			<div class="border p-4 rounded">
				<p>Direct /logos/svelte.svg</p>
				<img src="/logos/svelte.svg" alt="Svelte Direct" class="w-16 h-16 object-contain" />
			</div>
			<div class="border p-4 rounded">
				<p>Direct /logos/java.png</p>
				<img src="/logos/java.png" alt="Java Direct" class="w-16 h-16 object-contain" />
			</div>
			<div class="border p-4 rounded">
				<p>Direct /logos/soleil.png</p>
				<img src="/logos/soleil.png" alt="Soleil Direct" class="w-16 h-16 object-contain" />
			</div>
		</div>
	</section>
</div>
