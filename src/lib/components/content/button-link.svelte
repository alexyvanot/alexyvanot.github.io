<script lang="ts">
	import { Button, Icon, Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui';
	import type { Link } from '$lib/data/types';

	const { link }: { link: Link } = $props();
</script>

<a href={link.to} target={link.newTab ? '_blank' : undefined}>
	<Tooltip openDelay={300}>
		<TooltipTrigger>
			<Button size="icon" variant="outline">
				<Icon icon="i-carbon-link" />
			</Button>
		</TooltipTrigger>
		<TooltipContent>
			{link.label}
		</TooltipContent>
	</Tooltip>
</a>
