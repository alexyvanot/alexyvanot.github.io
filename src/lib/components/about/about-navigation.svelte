<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let {
		sections,
		sectionTitles,
		currentSection = $bindable('')
	}: {
		sections: string[];
		sectionTitles: string[];
		currentSection?: string;
	} = $props();

	let mounted = $state(false);

	// Observer pour détecter la section visible
	onMount(() => {
		mounted = true;
		
		if (!browser) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						currentSection = entry.target.id;
					}
				});
			},
			{ 
				threshold: 0.5,
				rootMargin: '-50px 0px'
			}
		);

		// Observer toutes les sections
		sections.forEach(sectionId => {
			const element = document.getElementById(sectionId);
			if (element) {
				observer.observe(element);
			}
		});

		return () => observer.disconnect();
	});

	function scrollToSection(sectionId: string) {
		if (!browser) return;
		
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ 
				behavior: 'smooth',
				block: 'start'
			});
		}
	}
</script>

{#if mounted}
	<!-- Navigation fixe des sections -->
	<nav class="section-navigation hidden lg:block">
		<div class="section-navigation-inner bg-card/80 backdrop-blur-sm p-3 rounded-lg border shadow-lg mr-2 flex flex-col gap-3">
			{#each sections as sectionId, index}
				<Tooltip>
					<TooltipTrigger>					<Button
						variant={currentSection === sectionId ? 'default' : 'ghost'}
						size="sm"
						class="w-3 h-3 p-0 rounded-full transition-all duration-300 hover:scale-125 {currentSection === sectionId ? '' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 dark:bg-muted-foreground/40 dark:hover:bg-muted-foreground/60'}"
						onclick={() => scrollToSection(sectionId)}
					>
							<span class="sr-only">{sectionTitles[index]}</span>
						</Button>
					</TooltipTrigger>
					<TooltipContent side="left">{sectionTitles[index]}</TooltipContent>
				</Tooltip>
			{/each}
		</div>
	</nav>

	<!-- Navigation mobile (en bas) -->
	<nav class="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 lg:hidden">
		<div class="flex gap-2 bg-card/90 backdrop-blur-sm p-2 rounded-full border shadow-lg">
			{#each sections as sectionId}			<Button
				variant={currentSection === sectionId ? 'default' : 'ghost'}
				size="sm"
				class="w-3 h-3 p-0 rounded-full transition-all duration-300 {currentSection === sectionId ? '' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 dark:bg-muted-foreground/40 dark:hover:bg-muted-foreground/60'}"
				onclick={() => scrollToSection(sectionId)}
			>
					<span class="sr-only">{sectionTitles[sections.indexOf(sectionId)]}</span>
				</Button>
			{/each}
		</div>
	</nav>
{/if}
