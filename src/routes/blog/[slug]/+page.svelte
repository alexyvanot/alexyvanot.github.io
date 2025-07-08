<script lang="ts">
	import BasePage from '$lib/components/common/base-page/base-page.svelte';
	import EmptyResult from '$lib/components/common/empty-result/empty-result.svelte';
	import FancyBanner from '$lib/components/common/fancy-banner/fancy-banner.svelte';
	import Markdown from '$lib/components/common/markdown/markdown.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import H1 from '$lib/components/ui/typography/h1.svelte';
	import Large from '$lib/components/ui/typography/large.svelte';
	import Muted from '$lib/components/ui/typography/muted.svelte';
	import Assets from '$lib/data/assets';
	import type { BlogPost } from '$lib/data/types';
	import { mode } from 'mode-watcher';

	let { data }: { data: { item?: BlogPost } } = $props();

	let title = $derived(`${data?.item?.title ?? 'Article non trouvé'} - Blog`);
	let banner = $derived(
		data?.item?.coverImage 
			? ($mode === 'dark' ? data.item.coverImage.dark : data.item.coverImage.light)
			: ($mode === 'dark' ? data?.item?.logo.dark : data?.item?.logo.light) ?? Assets.Unknown.light
	);

	// Fonction pour formater la date
	const formatDate = (date: Date) => {
		return new Intl.DateTimeFormat('fr-FR', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		}).format(date);
	};

	// Fonction pour obtenir le temps de lecture
	const getReadingTime = (minutes: number) => {
		return `${minutes} minute${minutes > 1 ? 's' : ''} de lecture`;
	};

	// Estimation du temps de lecture basée sur le contenu
	const estimateReadingTime = (content: string) => {
		const wordsPerMinute = 200;
		const words = content.split(/\s+/).length;
		return Math.ceil(words / wordsPerMinute);
	};
</script>

<svelte:head>
	{#if data.item}
		<title>{data.item.title} - Blog</title>
		<meta name="description" content={data.item.excerpt} />
		<meta name="author" content={data.item.author} />
		<meta property="og:title" content={data.item.title} />
		<meta property="og:description" content={data.item.excerpt} />
		<meta property="og:type" content="article" />
		<meta property="article:author" content={data.item.author} />
		<meta property="article:published_time" content={data.item.publishedAt.toISOString()} />
		{#if data.item.updatedAt}
			<meta property="article:modified_time" content={data.item.updatedAt.toISOString()} />
		{/if}
		{#each data.item.tags as tag}
			<meta property="article:tag" content={tag} />
		{/each}
	{:else}
		<title>Article non trouvé - Blog</title>
		<meta name="description" content="L'article demandé n'existe pas." />
	{/if}
</svelte:head>

<BasePage {title}>
	{#if !data.item}
		<EmptyResult />
	{:else}
		<FancyBanner img={banner}>
			<div class="flex w-full flex-col items-center justify-center gap-4">
				<H1 class="text-center">{data.item.title}</H1>
				<div class="flex flex-col items-center gap-2">
					<Muted>Par {data.item.author}</Muted>
					<Muted>Publié le {formatDate(data.item.publishedAt)}</Muted>
					{#if data.item.updatedAt && data.item.updatedAt > data.item.publishedAt}
						<Muted>Mis à jour le {formatDate(data.item.updatedAt)}</Muted>
					{/if}
					<Muted>
						{getReadingTime(data.item.readingTime || estimateReadingTime(data.item.content))}
					</Muted>
				</div>
				<Separator />
				<div class="flex flex-row flex-wrap justify-center gap-2">
					{#each data.item.tags as tag}
						<Badge variant="outline" class="flex flex-row items-center justify-center gap-2">
							<div class="i-carbon-tag"></div>
							{tag}
						</Badge>
					{/each}
				</div>
				{#if data.item.links && data.item.links.length > 0}
					<div class="flex flex-row flex-wrap justify-center gap-2">
						{#each data.item.links as link (link.to)}
							<a href={link.to} target={link.newTab ? '_blank' : '_self'} rel={link.newTab ? 'noopener noreferrer' : ''}>
								<Badge variant="outline" class="flex flex-row items-center justify-center gap-2">
									{#if link.icon}
										<div class={link.icon}></div>
									{:else}
										<div class="i-carbon-launch"></div>
									{/if}
									{link.label}
								</Badge>
							</a>
						{/each}
					</div>
				{/if}
			</div>
		</FancyBanner>
		<Separator />
		<div class="mb-6">
			<a href="/blog" class="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
				<div class="i-carbon-arrow-left group-hover:-translate-x-1 transition-transform"></div>
				Retour au blog
			</a>
		</div>
		{#if data.item.content.trim()}
			<div class="prose prose-lg dark:prose-invert max-w-none">
				<Markdown content={data.item.content} />
			</div>
		{:else}
			<div class="flex flex-col items-center justify-center py-12">
				<Large>Contenu en cours de rédaction...</Large>
				<Muted>Cet article sera bientôt disponible.</Muted>
			</div>
		{/if}
		<Separator />
		<div class="flex flex-col gap-4 p-4">
			<div class="flex items-center justify-between">
				<Muted>Article publié dans la catégorie Blog</Muted>
				<div class="flex items-center gap-2">
					<Muted>Partager :</Muted>
					<button 
						class="text-muted-foreground hover:text-foreground transition-colors"
						onclick={() => navigator.share?.({ title: data.item?.title, url: window.location.href }) || navigator.clipboard.writeText(window.location.href)}
						title="Partager cet article"
						aria-label="Partager cet article"
					>
						<div class="i-carbon-share"></div>
					</button>
				</div>
			</div>
			{#if data.item.screenshots && data.item.screenshots.length > 0}
				<Separator />
				<div class="flex flex-col gap-2">
					<Muted>Captures d'écran</Muted>
					<div class="grid grid-cols-1 gap-2 py-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{#each data.item.screenshots as img, index (index)}
							<div class="relative overflow-hidden rounded-lg border">
								<img 
									src={img.src} 
									alt={img.label}
									class="w-full h-auto object-cover transition-transform hover:scale-105"
									loading="lazy"
								/>
								{#if img.label}
									<div class="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
										{img.label}
									</div>
								{/if}
							</div>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	{/if}
</BasePage>
