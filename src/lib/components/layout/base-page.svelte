<script lang="ts">
	import ResponsiveContainer from './responsive-container.svelte';
	import Title from '$lib/components/content/title.svelte';

	export let title = 'Title';
	export let description = '';
</script>

<Title {title} {description} />
<ResponsiveContainer className="flex flex-col flex-1 pb-8">
	<slot />
</ResponsiveContainer>
