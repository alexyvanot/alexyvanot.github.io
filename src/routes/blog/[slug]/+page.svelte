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
	import BlogData from '$lib/data/blog';
	import type { BlogPost } from '$lib/data/types';
	import { mode } from 'mode-watcher';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let { data }: { data: { item?: BlogPost } } = $props();

	// Utiliser le slug de la page pour forcer la réactivité
	let currentSlug = $derived($page.params.slug);
	let currentItem = $derived(BlogData.items.find(item => item.slug === currentSlug));

	let title = $derived(`${currentItem?.title ?? 'Article non trouvé'} - Blog`);
	let banner = $derived(
		currentItem?.coverImage 
			? ($mode === 'dark' ? currentItem.coverImage.dark : currentItem.coverImage.light)
			: ($mode === 'dark' ? currentItem?.logo.dark : currentItem?.logo.light) ?? Assets.Unknown.light
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

	// Navigation entre articles
	const allPosts = BlogData.items.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
	const currentIndex = $derived(
		currentItem ? allPosts.findIndex(post => post.slug === currentItem?.slug) : -1
	);
	const previousPost = $derived(
		currentIndex > 0 ? allPosts[currentIndex - 1] : null
	);
	const nextPost = $derived(
		currentIndex < allPosts.length - 1 && currentIndex !== -1 ? allPosts[currentIndex + 1] : null
	);

	// Fonction pour remonter en haut (inspirée du composant scroll-to-top)
	const scrollToTop = () => {
		if (typeof window === 'undefined') return;
		
		// Trouver tous les conteneurs scrollables
		const scrollContainers: Element[] = [];
		
		// Chercher les éléments avec overflow
		const overflowElements = document.querySelectorAll(
			'[style*="overflow"], .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll'
		);
		
		for (const el of overflowElements) {
			if (el.scrollHeight > el.clientHeight) {
				scrollContainers.push(el);
			}
		}
		
		// Chercher les conteneurs scrollables actifs
		const allElements = document.querySelectorAll('*');
		for (const el of allElements) {
			if (el.scrollHeight > el.clientHeight && el.scrollTop > 0) {
				if (!scrollContainers.includes(el)) {
					scrollContainers.push(el);
				}
			}
		}
		
		// Scroll sur tous les conteneurs trouvés
		scrollContainers.forEach(container => {
			container.scrollTo({ top: 0, behavior: 'smooth' });
		});
		
		// Fallbacks pour être sûr
		window.scrollTo({ top: 0, behavior: 'smooth' });
		document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
		document.body.scrollTo({ top: 0, behavior: 'smooth' });
	};

	// Fonction de navigation avec scroll optimisé vers le haut
	async function navigateToPost(slug: string) {
		await goto(`/blog/${slug}`);
		// Attendre un peu que la page se charge puis remonter
		setTimeout(scrollToTop, 100);
	}

	async function navigateToBlog() {
		await goto('/blog');
		// Attendre un peu que la page se charge puis remonter
		setTimeout(scrollToTop, 100);
	}
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

<BasePage {title}>
	{#if !currentItem}
		<EmptyResult />
	{:else}
		<FancyBanner img={banner}>
			<div class="flex w-full flex-col items-center justify-center gap-4">
				<H1 class="text-center">{currentItem.title}</H1>
				<div class="flex flex-col items-center gap-2">
					<Muted>Par {currentItem.author}</Muted>
					<Muted>Publié le {formatDate(currentItem.publishedAt)}</Muted>
					{#if currentItem.updatedAt && currentItem.updatedAt > currentItem.publishedAt}
						<Muted>Mis à jour le {formatDate(currentItem.updatedAt)}</Muted>
					{/if}
					<Muted>
						{getReadingTime(currentItem.readingTime || estimateReadingTime(currentItem.content))}
					</Muted>
				</div>
				<Separator />
				<div class="flex flex-row flex-wrap justify-center gap-2">
					{#each currentItem.tags as tag}
						<Badge variant="outline" class="flex flex-row items-center justify-center gap-2">
							<div class="i-carbon-tag"></div>
							{tag}
						</Badge>
					{/each}
				</div>
				{#if currentItem.links && currentItem.links.length > 0}
					<div class="flex flex-row flex-wrap justify-center gap-2">
						{#each currentItem.links as link (link.to)}
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
		<!-- Navigation en haut -->
		<div class="mb-6 mt-12">
			<div class="flex items-center justify-between gap-4 flex-wrap">
				<!-- Article précédent -->
				{#if previousPost}
					<button 
						onclick={() => navigateToPost(previousPost.slug)}
						class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-200 group shadow-sm hover:shadow-md text-sm font-medium"
					>
						<div class="i-carbon-arrow-left group-hover:-translate-x-1 transition-transform duration-200"></div>
						<div class="text-left hidden sm:block">
							<div class="text-xs text-muted-foreground">Article précédent</div>
							<div class="line-clamp-1 max-w-[200px]">{previousPost.title}</div>
						</div>
						<span class="sm:hidden">Précédent</span>
					</button>
				{:else}
					<div class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-muted text-muted-foreground cursor-not-allowed shadow-sm text-sm font-medium opacity-50">
						<div class="i-carbon-arrow-left"></div>
						<span class="hidden sm:inline">Article précédent</span>
						<span class="sm:hidden">Précédent</span>
					</div>
				{/if}
				
				<!-- Retour au blog -->
				<button 
					onclick={navigateToBlog}
					class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-200 shadow-sm hover:shadow-md text-sm font-medium"
				>
					<div class="i-carbon-list"></div>
					<span>Retour au blog</span>
				</button>
				
				<!-- Article suivant -->
				{#if nextPost}
					<button 
						onclick={() => navigateToPost(nextPost.slug)}
						class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-200 group shadow-sm hover:shadow-md text-sm font-medium"
					>
						<div class="text-right hidden sm:block">
							<div class="text-xs text-muted-foreground">Article suivant</div>
							<div class="line-clamp-1 max-w-[200px]">{nextPost.title}</div>
						</div>
						<span class="sm:hidden">Suivant</span>
						<div class="i-carbon-arrow-right group-hover:translate-x-1 transition-transform duration-200"></div>
					</button>
				{:else}
					<div class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-muted text-muted-foreground cursor-not-allowed shadow-sm text-sm font-medium opacity-50">
						<span class="hidden sm:inline">Article suivant</span>
						<span class="sm:hidden">Suivant</span>
						<div class="i-carbon-arrow-right"></div>
					</div>
				{/if}
			</div>
		</div>
		{#if currentItem.content.trim()}
			<div class="prose prose-lg dark:prose-invert max-w-none">
				<Markdown content={currentItem.content} />
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
						class="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-200 text-sm shadow-sm hover:shadow-md"
						onclick={() => navigator.share?.({ title: currentItem?.title, url: window.location.href }) || navigator.clipboard.writeText(window.location.href)}
						title="Partager cet article"
						aria-label="Partager cet article"
					>
						<div class="i-carbon-share"></div>
						<span class="hidden sm:inline">Partager</span>
					</button>
				</div>
			</div>
			{#if currentItem.screenshots && currentItem.screenshots.length > 0}
				<Separator />
				<div class="flex flex-col gap-2">
					<Muted>Captures d'écran</Muted>
					<div class="grid grid-cols-1 gap-2 py-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{#each currentItem.screenshots as img, index (index)}
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
		
		<!-- Navigation en bas -->
		<Separator />
		<div class="mt-8 mb-6">
			<div class="flex items-center justify-between gap-4 flex-wrap">
				<!-- Article précédent -->
				{#if previousPost}
					<button 
						onclick={() => navigateToPost(previousPost.slug)}
						class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-200 group shadow-sm hover:shadow-md text-sm font-medium"
					>
						<div class="i-carbon-arrow-left group-hover:-translate-x-1 transition-transform duration-200"></div>
						<div class="text-left hidden sm:block">
							<div class="text-xs text-muted-foreground">Article précédent</div>
							<div class="line-clamp-1 max-w-[200px]">{previousPost.title}</div>
						</div>
						<span class="sm:hidden">Précédent</span>
					</button>
				{:else}
					<div class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-muted text-muted-foreground cursor-not-allowed shadow-sm text-sm font-medium opacity-50">
						<div class="i-carbon-arrow-left"></div>
						<span class="hidden sm:inline">Article précédent</span>
						<span class="sm:hidden">Précédent</span>
					</div>
				{/if}
				
				<!-- Retour au blog -->
				<button 
					onclick={navigateToBlog}
					class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-200 shadow-sm hover:shadow-md text-sm font-medium"
				>
					<div class="i-carbon-list"></div>
					<span>Retour au blog</span>
				</button>
				
				<!-- Article suivant -->
				{#if nextPost}
					<button 
						onclick={() => navigateToPost(nextPost.slug)}
						class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-200 group shadow-sm hover:shadow-md text-sm font-medium"
					>
						<div class="text-right hidden sm:block">
							<div class="text-xs text-muted-foreground">Article suivant</div>
							<div class="line-clamp-1 max-w-[200px]">{nextPost.title}</div>
						</div>
						<span class="sm:hidden">Suivant</span>
						<div class="i-carbon-arrow-right group-hover:translate-x-1 transition-transform duration-200"></div>
					</button>
				{:else}
					<div class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-muted text-muted-foreground cursor-not-allowed shadow-sm text-sm font-medium opacity-50">
						<span class="hidden sm:inline">Article suivant</span>
						<span class="sm:hidden">Suivant</span>
						<div class="i-carbon-arrow-right"></div>
					</div>
				{/if}
			</div>
		</div>
	{/if}
</BasePage>
