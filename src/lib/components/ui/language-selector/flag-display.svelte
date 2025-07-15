<script lang="ts">
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import type { FlagDisplay } from '$lib/types/language-selector';

	interface Props {
		flag: FlagDisplay;
		class?: string;
	}

	let { flag, class: className = '' }: Props = $props();
</script>

{#if flag.type === 'emoji'}
	<span class={className}>{flag.value}</span>
{:else if flag.type === 'icon'}
	<Icon icon={flag.value as any} className={className} />
{:else if flag.type === 'image'}
	<img 
		src={flag.value} 
		alt={flag.alt || ''} 
		class={`${className} object-contain`}
	/>
{/if}
