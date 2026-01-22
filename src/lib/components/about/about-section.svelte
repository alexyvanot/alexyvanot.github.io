<script lang="ts">
	import type { AboutSection } from '$lib/data/about';
	import PersonalityCard from './personality-card.svelte';
	import H2 from '$lib/components/ui/typography/h2.svelte';
	import H3 from '$lib/components/ui/typography/h3.svelte';
	import P from '$lib/components/ui/typography/p.svelte';
	import { fly, fade } from 'svelte/transition';

	const {
		section,
		mounted = false,
		index = 0
	}: {
		section: AboutSection;
		mounted?: boolean;
		index?: number;
	} = $props();

	const delay = $derived(200 + index * 100);
</script>

<section 
	id={section.id}
	class="min-h-screen flex items-center justify-center py-20 scroll-mt-16"
>
	<div class="container mx-auto px-4 max-w-6xl">
		
		<!-- En-tête de section -->
		{#if mounted}
			<div transition:fly={{ y: 30, delay, duration: 600 }} class="text-center mb-16">
				<H2 class="mb-4">{section.title}</H2>
				{#if section.subtitle}
					<H3 class="text-muted-foreground font-normal">{section.subtitle}</H3>
				{/if}
			</div>
		{/if}

		<!-- Contenu selon le layout -->
		{#if section.layout === 'traits'}
			<!-- Layout avec traits de personnalité -->
			{#if mounted}
				<div transition:fly={{ y: 40, delay: delay + 200, duration: 600 }} class="mb-12">
					<div class="max-w-4xl mx-auto text-center">
						{#each section.content.split('\n\n') as paragraph}
							<P class="text-lg leading-relaxed mb-4">
								{paragraph.trim()}
							</P>
						{/each}
					</div>
				</div>
			{/if}

			{#if section.traits}
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{#each section.traits as trait, traitIndex}
						{#if mounted}
							<div transition:fly={{ y: 50, delay: delay + 400 + traitIndex * 100, duration: 600 }}>
								<PersonalityCard {trait} />
							</div>
						{/if}
					{/each}
				</div>
			{/if}

		{:else if section.layout === 'image-text'}
			<!-- Layout avec image et texte -->
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				
				<!-- Image -->
				<div class="order-2 lg:order-1">
					{#if mounted && section.image}
						<div transition:fade={{ delay: delay + 200, duration: 800 }}>
							<div class="relative overflow-hidden rounded-2xl shadow-2xl group">
								<img 
									src={section.image} 
									alt={section.title}
									class="w-full h-[400px] object-cover object-center scale-[1.15] hover:scale-[1.35] transition-transform duration-700"
								/>
								<div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
							</div>
						</div>
					{/if}
				</div>

				<!-- Texte -->
				<div class="order-1 lg:order-2">
					{#if mounted}
						<div transition:fly={{ x: 50, delay: delay + 400, duration: 600 }}>
							<div class="space-y-6">
								{#each section.content.split('\n\n') as paragraph}
									<P class="text-lg leading-relaxed">
										{paragraph.trim()}
									</P>
								{/each}
							</div>
						</div>
					{/if}
				</div>
			</div>

		{:else}
			<!-- Layout texte simple -->
			{#if mounted}
				<div transition:fly={{ y: 40, delay: delay + 200, duration: 600 }}>
					<div class="max-w-4xl mx-auto text-center space-y-6">
						{#each section.content.split('\n\n') as paragraph}
							<P class="text-lg leading-relaxed">
								{paragraph.trim()}
							</P>
						{/each}
					</div>
				</div>
			{/if}
		{/if}
	</div>
</section>

<style>
	/* Smooth scroll pour la navigation entre sections */
	section {
		scroll-behavior: smooth;
	}
</style>
