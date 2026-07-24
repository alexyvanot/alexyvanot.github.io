<script lang="ts">
	import { page } from '$app/stores';
	import { SiteConfigData } from '$lib/data';
	import { SITE_URL, cleanDescription, DEFAULT_DESCRIPTION } from '$lib/seo';

	const suffix = `${SiteConfigData.firstName} ${SiteConfigData.lastName} - ${SiteConfigData.jobTitle}`;

	export let title = 'Title';
	export let description = '';

	$: fullTitle = `${title} | ${suffix}`;
	$: metaDescription = cleanDescription(description || DEFAULT_DESCRIPTION);
	$: canonical = `${SITE_URL}${$page.url.pathname}`;
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={metaDescription} />
	<link rel="canonical" href={canonical} />

	<!-- Open Graph (partie variable ; les champs constants sont dans app.html) -->
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={metaDescription} />
	<meta property="og:url" content={canonical} />

	<!-- Twitter (partie variable) -->
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={metaDescription} />
</svelte:head>
