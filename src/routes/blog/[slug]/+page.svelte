<script lang="ts">
	import { DetailPage } from '$lib/components/layout';
	import { Assets, BlogData } from '$lib/data';
	import type { BlogPost } from '$lib/types';
	import { mode } from 'mode-watcher';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';

	let { data }: { data: { item?: BlogPost } } = $props();

	let shareMessageTimer: ReturnType<typeof setTimeout> | null = null;

	let currentSlug = $derived($page.params.slug);
	let currentItem = $derived(BlogData.items.find(item => item.slug === currentSlug));

	async function handleShare(title: string, url: string) {
		if (!browser) return;
		try {
			if (navigator.share) {
				await navigator.share({ title, url });
			} else {
				await navigator.clipboard.writeText(url);
			}
		} catch (error) {
			try {
				await navigator.clipboard.writeText(url);
			} catch (clipboardError) {
				console.error("Erreur de partage:", error, clipboardError);
			}
		}
	}

	onDestroy(() => {
		if (shareMessageTimer) clearTimeout(shareMessageTimer);
	});

	let title = $derived(`${currentItem?.title ?? 'Article non trouvé'} - Blog`);
	let banner = $derived(
		($mode === 'dark' ? currentItem?.logo.dark : currentItem?.logo.light) ?? Assets.Unknown.light
	);
	
	// Image de fond optionnelle (si coverImage existe)
	let backgroundImage = $derived(
		currentItem?.coverImage 
			? ($mode === 'dark' ? currentItem.coverImage.dark : currentItem.coverImage.light)
			: undefined
	);

	const formatDate = (date: Date | undefined | null) => {
		if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
			return 'Date inconnue';
		}
		return new Intl.DateTimeFormat('fr-FR', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		}).format(date);
	};

	const getReadingTime = (minutes: number) => `${minutes} minute${minutes > 1 ? 's' : ''} de lecture`;

	const estimateReadingTime = (content: string) => {
		const wordsPerMinute = 200;
		const words = content.split(/\s+/).length;
		return Math.ceil(words / wordsPerMinute);
	};

	const allPosts = BlogData.items
		.filter(p => p.publishedAt instanceof Date && !isNaN(p.publishedAt.getTime()))
		.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
	const currentIndex = $derived(
		currentItem ? allPosts.findIndex(post => post.slug === currentItem?.slug) : -1
	);
	const previousPost = $derived(currentIndex > 0 ? allPosts[currentIndex - 1] : null);
	const nextPost = $derived(currentIndex < allPosts.length - 1 && currentIndex !== -1 ? allPosts[currentIndex + 1] : null);

	const scrollToTop = () => {
		if (!browser) return;
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	async function navigateToPost(slug: string) {
		await goto(`/blog/${slug}`);
		setTimeout(scrollToTop, 100);
	}

	async function navigateToBlog() {
		await goto('/blog');
		setTimeout(scrollToTop, 100);
	}

	let previousNav = $derived(previousPost ? { slug: previousPost.slug, label: previousPost.title } : null);
	let nextNav = $derived(nextPost ? { slug: nextPost.slug, label: nextPost.title } : null);
</script>

<svelte:head>
	{#if currentItem}
		<title>{currentItem.title} - Blog</title>
		<meta name="description" content={currentItem.excerpt} />
		<meta name="author" content={currentItem.author} />
		<meta property="og:title" content={currentItem.title} />
		<meta property="og:description" content={currentItem.excerpt} />
		<meta property="og:type" content="article" />
		<meta property="article:author" content={currentItem.author} />
		<meta property="article:published_time" content={currentItem.publishedAt.toISOString()} />
		{#if currentItem.updatedAt}
			<meta property="article:modified_time" content={currentItem.updatedAt.toISOString()} />
		{/if}
		{#each currentItem.tags as tag}
			<meta property="article:tag" content={tag} />
		{/each}
	{:else}
		<title>Article non trouvé - Blog</title>
		<meta name="description" content="L'article demandé n'existe pas." />
	{/if}
</svelte:head>

<DetailPage
	{title}
	{banner}
	{backgroundImage}
	itemTitle={currentItem?.title ?? ''}
	description={currentItem?.content ?? ''}
	screenshots={currentItem?.screenshots ?? []}
	exists={!!currentItem}
	entityName="Article"
	entityNamePlural="Retour au blog"
	entityIcon="i-carbon-blog"
	entityRoute="/blog"
	previousItem={previousNav}
	nextItem={nextNav}
	onNavigateToItem={navigateToPost}
	onNavigateToList={navigateToBlog}
>
	{#snippet headerMeta()}
		{#if currentItem?.author}
			<span class="detail-meta-item">
				<div class="i-carbon-user"></div>
				{currentItem.author}
			</span>
		{/if}
		{#if currentItem?.publishedAt}
			<span class="detail-meta-item">
				<div class="i-carbon-calendar"></div>
				{formatDate(currentItem.publishedAt)}
			</span>
		{/if}
		{#if currentItem?.updatedAt && currentItem.updatedAt > currentItem.publishedAt}
			<span class="detail-meta-item">
				<div class="i-carbon-edit"></div>
				Mis à jour le {formatDate(currentItem.updatedAt)}
			</span>
		{/if}
		{#if currentItem}
			<span class="detail-meta-item">
				<div class="i-carbon-time"></div>
				{getReadingTime(currentItem.readingTime || estimateReadingTime(currentItem.content))}
			</span>
		{/if}
	{/snippet}

	{#snippet headerBadges()}
		{#if currentItem?.tags && currentItem.tags.length > 0}
			<div class="detail-badges">
				{#each currentItem.tags as tag}
					<span class="detail-badge">
						<div class="i-carbon-tag text-sm"></div>
						{tag}
					</span>
				{/each}
			</div>
		{/if}
		{#if currentItem?.links && currentItem.links.length > 0}
			<div class="detail-badges">
				{#each currentItem.links as link (link.to)}
					<a href={link.to} target={link.newTab ? '_blank' : '_self'} rel={link.newTab ? 'noopener noreferrer' : ''} class="detail-badge">
						{#if link.icon}
							<div class={`${link.icon} text-sm`}></div>
						{:else}
							<div class="i-carbon-launch text-sm"></div>
						{/if}
						{link.label}
					</a>
				{/each}
			</div>
		{/if}
	{/snippet}

	{#snippet extraSections()}
		<div class="detail-section detail-animate detail-animate-delay-3" in:fly={{ y: 20, duration: 400, delay: 300 }}>
			<div class="flex items-center justify-between flex-wrap gap-4">
				<span class="text-muted-foreground text-sm">Article publié dans la catégorie Blog</span>
				<button 
					class="detail-badge"
					onclick={() => handleShare(currentItem?.title || 'Article de blog', typeof window !== 'undefined' ? window.location.href : '')}
					title="Partager cet article"
					aria-label="Partager cet article"
				>
					<div class="i-carbon-share text-sm"></div>
					<span>Partager</span>
				</button>
			</div>
		</div>
	{/snippet}
</DetailPage>
