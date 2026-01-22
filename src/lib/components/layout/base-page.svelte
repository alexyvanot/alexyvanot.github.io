<script lang="ts">
	import ResponsiveContainer from './responsive-container.svelte';
	import Title from '$lib/components/content/title.svelte';

	export let title = 'Title';
</script>

<Title {title} />
<ResponsiveContainer className="flex flex-col flex-1 pb-8">
	<slot />
</ResponsiveContainer>
