<script lang="ts">
	import { H2, H3, P, Icon, Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui';
	import PersonalityCard from './personality-card.svelte';
	import { fade, fly } from 'svelte/transition';
	import type { AboutSection } from '$lib/data/about';

	const props: {
		section: AboutSection;
		mounted?: boolean;
		index?: number;
	} = $props();
	const section = props.section;
	const mounted = props.mounted ?? false;
	const index = props.index ?? 0;

	// Animation delay basé sur l'index de la section
	const delay = $derived((index + 1) * 200);

	// Fonction pour formater le texte avec des mots en gras et support markdown
	function formatText(text: string): string {
		return text
			// Support markdown : **gras** et *italique* 
			.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
			.replace(/\*(.*?)\*/g, '<em>$1</em>');
	}
</script>

<section class="w-full max-w-full">
	<div class="container mx-auto px-4 max-w-full">
		<div class="max-w-6xl mx-auto">
			
			{#if mounted}
			{#if section.layout === 'traits' && section.traits}
				<!-- Layout avec traits de personnalité - Card complète -->
				<div transition:fade={{ delay, duration: 800 }}>
					<Card class="w-full bg-card/80 dark:bg-card/80 backdrop-blur-sm border border-border/50 shadow-xl">
					<CardHeader class="text-center">
						<div class="flex items-center justify-center gap-3 mb-2">
							{#if section.icon}
								<Icon icon={section.icon} className="text-2xl text-primary" />
							{/if}
							<CardTitle class="text-3xl">{section.title}</CardTitle>
						</div>
						{#if section.subtitle}
							<CardDescription class="text-lg">{section.subtitle}</CardDescription>
						{/if}
					</CardHeader>
						
						<CardContent class="space-y-8">
							<div class="space-y-8">
								<div transition:fly={{ y: 30, delay: delay + 200, duration: 800 }}>
									<P class="text-lg text-center leading-relaxed">
										{@html formatText(section.content.trim())}
									</P>
								</div>
								
								<div 
									class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
									transition:fly={{ y: 30, delay: delay + 400, duration: 800 }}
								>
									{#each section.traits as trait, traitIndex}
										<div transition:fade={{ delay: delay + 600 + (traitIndex * 100), duration: 600 }}>
											<PersonalityCard {trait} />
										</div>
									{/each}
								</div>
							</div>
						</CardContent>
					</Card>
				</div>

			{:else if section.layout === 'image-text' && section.image}
				<!-- Layout avec image et texte - Image libre, Card seulement pour le texte -->
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
					
					<!-- Image à gauche - sans Card -->
					<div 
						class="order-2 lg:order-1"
						transition:fly={{ x: -50, delay: delay + 200, duration: 800 }}
					>
						<div class="relative overflow-hidden rounded-lg shadow-2xl h-full min-h-[400px]">
							<img 
								src={section.image} 
								alt={section.title}
								class="w-full h-full object-cover object-center scale-[1.15] hover:scale-[1.35] transition-transform duration-700"
								loading="lazy"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
						</div>
					</div>
					
					<!-- Texte à droite - avec Card -->
					<div 
						class="order-1 lg:order-2"
						transition:fly={{ x: 50, delay: delay + 400, duration: 800 }}
					>				<Card class="bg-card/80 dark:bg-card/80 backdrop-blur-sm border border-border/50 shadow-xl">
					<CardHeader class="text-center">
						<div class="flex items-center justify-center gap-3 mb-2">
							{#if section.icon}
								<Icon icon={section.icon} className="text-2xl text-primary" />
							{/if}
							<CardTitle class="text-3xl">{section.title}</CardTitle>
						</div>
						{#if section.subtitle}
							<CardDescription class="text-lg">{section.subtitle}</CardDescription>
						{/if}
					</CardHeader>
							<CardContent class="p-6">
								<P class="text-lg leading-relaxed">
									{@html formatText(section.content.trim())}
								</P>
							</CardContent>
						</Card>
					</div>
				</div>

			{:else}
				<!-- Layout texte simple - avec Card -->
				<div 
					class="text-center max-w-4xl mx-auto"
					transition:fly={{ y: 30, delay: delay + 200, duration: 800 }}
				>
					<Card class="bg-card/80 dark:bg-card/80 backdrop-blur-sm border border-border/50 shadow-xl">
						<CardHeader class="text-center">
							<div class="flex items-center justify-center gap-3 mb-2">
								{#if section.icon}
									<Icon icon={section.icon} className="text-2xl text-primary" />
								{/if}
								<CardTitle class="text-3xl">{section.title}</CardTitle>
							</div>
							{#if section.subtitle}
								<CardDescription class="text-lg">{section.subtitle}</CardDescription>
							{/if}
						</CardHeader>
						<CardContent class="p-6">
							<P class="text-lg leading-relaxed">
								{@html formatText(section.content.trim())}
							</P>
						</CardContent>
					</Card>
				</div>
			{/if}
		{/if}
		</div>
	</div>
</section>
