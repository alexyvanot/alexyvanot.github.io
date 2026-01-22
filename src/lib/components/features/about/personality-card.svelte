<script lang="ts">
	import type { PersonalityTrait } from '$lib/data/about';
	import { Icon, CardContent, H3, P } from '$lib/components/ui';
	import FancyCard from '$lib/components/ui/card/fancy-card.svelte';

	const { trait }: { trait: PersonalityTrait } = $props();
</script>

<FancyCard color={trait.color} class="h-full">
	<CardContent class="flex flex-col items-center text-center gap-4 p-6">
		<div class="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
			<Icon icon={trait.icon} className="text-2xl text-primary" />
		</div>
		
		<div class="space-y-2">
			<H3 className="text-lg">{trait.title}</H3>
			<P className="text-sm text-muted-foreground leading-relaxed">
				{trait.description}
			</P>
		</div>
	</CardContent>
</FancyCard>
