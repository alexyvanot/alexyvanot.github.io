<script lang="ts">
	import { SiteConfigData } from '$lib/data';

	const suffix = `${SiteConfigData.firstName} ${SiteConfigData.lastName} - ${SiteConfigData.jobTitle}`;

	export let title = 'Title';
</script>

<svelte:head>
	<title>{`${title} | ${suffix}`}</title>
</svelte:head>
