<script lang="ts">
	import { Button, Icon, Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui';
	import type { Link } from '$lib/data/types';

	const { link }: { link: Link } = $props();
	
	// Utiliser l'icône du lien si disponible, sinon icône par défaut
	const icon = $derived(link.icon || 'i-carbon-link');
</script>

<a href={link.to} target={link.newTab ? '_blank' : undefined}>
	<Tooltip openDelay={300}>
		<TooltipTrigger>
			<Button size="icon" variant="outline">
				<Icon icon={icon} />
			</Button>
		</TooltipTrigger>
		<TooltipContent>
			{link.label}
		</TooltipContent>
	</Tooltip>
</a>
