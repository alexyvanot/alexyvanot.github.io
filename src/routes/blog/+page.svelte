<script lang="ts">
	import EmptyResult from '$lib/components/common/empty-result/empty-result.svelte';
	import SearchPage from '$lib/components/common/search-page/search-page.svelte';
	import AvatarFallback from '$lib/components/ui/avatar/avatar-fallback.svelte';
	import AvatarImage from '$lib/components/ui/avatar/avatar-image.svelte';
	import Avatar from '$lib/components/ui/avatar/avatar.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import FancyCard from '$lib/components/ui/card/fancy-card.svelte';
	import * as Carousel from '$lib/components/ui/carousel';
	import Input from '$lib/components/ui/input/input.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import Muted from '$lib/components/ui/typography/muted.svelte';
	import H2 from '$lib/components/ui/typography/h2.svelte';
	import Assets from '$lib/data/assets';
	import BlogData from '$lib/data/blog';
	import { href } from '$lib/utils';
	import { mode } from 'mode-watcher';

	let search = $state('');

	// Articles épinglés pour le carrousel
	let pinnedPosts = $derived(
		BlogData.items
			.filter(item => item.pinned)
			.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
	);

	// Vérifier si on est en mode recherche
	let isSearching = $derived(search.trim().length > 0);

	// Filtrage et tri des articles (plus récents en premier)
	let result = $derived(
		BlogData.items
			.filter((item) =>
				search.trim().length === 0 ||
				item.title.toLowerCase().includes(search.toLowerCase()) ||
				item.excerpt.toLowerCase().includes(search.toLowerCase()) ||
				item.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase())) ||
				item.author.toLowerCase().includes(search.toLowerCase())
			)
			.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
	);

	const onSearch = (query: string) => (search = query);

	// Fonction pour formater la date
	const formatDate = (date: Date) => {
		return new Intl.DateTimeFormat('fr-FR', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		}).format(date);
	};

	// Fonction pour formater la date d'édition en format court
	const formatEditDate = (date: Date) => {
		return new Intl.DateTimeFormat('fr-FR', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit'
		}).format(date);
	};

	// Fonction pour obtenir le temps de lecture
	const getReadingTime = (minutes: number) => {
		return `${minutes} min de lecture`;
	};

	// Fonction pour vérifier si un article est récent (moins de 30 jours)
	const isRecent = (date: Date) => {
		const now = new Date();
		const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
		return date > thirtyDaysAgo;
	};
</script>

<svelte:head>
	<title>Blog - Alexy VANOT</title>
	<meta name="description" content="Articles et tutoriels sur le développement web, JavaScript, TypeScript, Svelte et autres technologies." />
</svelte:head>

<SearchPage title={BlogData.title} {onSearch}>
	{#if !isSearching && pinnedPosts.length > 0}
		<div class="mb-6">
			<H2 class="mb-4">Articles en vedette</H2>
			<Carousel.Root opts={{ align: "center", loop: true }} class="w-full max-w-4xl mx-auto">
				<Carousel.Content>
					{#each pinnedPosts as item (item.slug)}
						<Carousel.Item class="basis-full">
							<div class="px-4">
								<FancyCard color={item.color} href={href(`/blog/${item.slug}`)} class="relative">
									<div class="absolute top-2 left-2 z-10">
										<Badge variant="secondary" class="text-xs bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
											📌
										</Badge>
									</div>
									{#if isRecent(item.publishedAt)}
										<div class="absolute top-2 right-2 z-10">
											<Badge variant="destructive" class="text-xs animate-pulse">
												Nouveau
											</Badge>
										</div>
									{/if}
									<div class="flex flex-col md:flex-row gap-6 p-6 border border-border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 bg-card/50 backdrop-blur-sm">
										<!-- Avatar et infos -->
										<div class="flex items-center gap-3 md:flex-col md:items-center md:min-w-0">
											<Avatar class="w-16 h-16">
												<AvatarFallback>
													<img src={Assets.Unknown.light} alt={item.title} class="w-full h-full object-cover" />
												</AvatarFallback>
												<AvatarImage src={$mode === 'dark' ? item.logo.dark : item.logo.light} class="w-full h-full object-cover" />
											</Avatar>
											<div class="flex flex-col gap-1 md:text-center">
												<Muted class="text-xs">{formatDate(item.publishedAt)}</Muted>
												<Muted class="text-xs">{getReadingTime(item.readingTime)}</Muted>
											</div>
										</div>
										
										<!-- Contenu principal -->
										<div class="flex-1 flex flex-col">
											<div class="flex-1">
												<CardTitle class="text-xl mb-3">{item.title}</CardTitle>
												<CardDescription class="text-base mb-4">{item.excerpt}</CardDescription>
												
												<!-- Tags -->
												<div class="flex flex-wrap gap-2 mb-4">
													{#each item.tags.slice(0, 4) as tag}
														<Badge variant="secondary" class="text-xs">
															{tag}
														</Badge>
													{/each}
													{#if item.tags.length > 4}
														<Badge variant="outline" class="text-xs">
															+{item.tags.length - 4}
														</Badge>
													{/if}
												</div>
											</div>
											
											<!-- Footer avec auteur -->
											<div class="border-t pt-3 mt-auto">
												<div class="flex items-center justify-between">
													<Muted class="text-xs">Par {item.author}</Muted>
													{#if item.updatedAt && item.updatedAt > item.publishedAt}
														<Muted class="text-xs italic">Edited {formatEditDate(item.updatedAt)}</Muted>
													{/if}
												</div>
											</div>
										</div>
									</div>
								</FancyCard>
							</div>
						</Carousel.Item>
					{/each}
				</Carousel.Content>
				<Carousel.Previous class="-left-9" />
				<Carousel.Next class="-right-9" />
			</Carousel.Root>
		</div>
		<Separator class="mb-6" />
	{/if}

	{#if result.length === 0}
		<EmptyResult />
	{:else}
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" style="grid-auto-rows: 1fr;">
			{#each result as item (item.slug)}
				<FancyCard color={item.color} href={href(`/blog/${item.slug}`)} class="relative h-full transition-all duration-300 hover:shadow-lg">
					{#if isRecent(item.publishedAt)}
						<div class="absolute top-2 right-2 z-10">
							<Badge variant="destructive" class="text-xs animate-pulse">
								Nouveau
							</Badge>
						</div>
					{/if}
					<div class="flex flex-col h-full p-6">
						<!-- Contenu principal -->
						<div class="flex-1">
							<div class="pb-4">
								<div class="flex items-center gap-3 mb-3">
									<Avatar>
										<AvatarFallback>
											<img src={Assets.Unknown.light} alt={item.title} />
										</AvatarFallback>
										<AvatarImage src={$mode === 'dark' ? item.logo.dark : item.logo.light} />
									</Avatar>
									<div class="flex flex-col gap-1">
										<Muted class="text-xs">{formatDate(item.publishedAt)}</Muted>
										<Muted class="text-xs">{getReadingTime(item.readingTime)}</Muted>
									</div>
								</div>
								<CardTitle class="line-clamp-2 text-left">{item.title}</CardTitle>
								<CardDescription class="line-clamp-3 text-left">{item.excerpt}</CardDescription>
							</div>
							
							<!-- Tags au milieu -->
							<div class="pb-2">
								<div class="flex flex-wrap gap-2">
									{#each item.tags.slice(0, 3) as tag}
										<Badge variant="secondary" class="text-xs">
											{tag}
										</Badge>
									{/each}
									{#if item.tags.length > 3}
										<Badge variant="outline" class="text-xs">
											+{item.tags.length - 3}
										</Badge>
									{/if}
								</div>
							</div>
						</div>
						
						<!-- Footer avec auteur, toujours en bas -->
						<div class="mt-auto border-t pt-3">
							<div class="flex items-center justify-between">
								<Muted class="text-xs">Par {item.author}</Muted>
								{#if item.updatedAt && item.updatedAt > item.publishedAt}
									<Muted class="text-xs italic">Edited {formatEditDate(item.updatedAt)}</Muted>
								{/if}
							</div>
						</div>
					</div>
				</FancyCard>
			{/each}
		</div>
	{/if}
</SearchPage>

<style>
	/* Smooth scroll behavior for better UX */
	:global(html) {
		scroll-behavior: smooth;
	}

	/* Custom grid animation */
	:global(.grid > *) {
		animation: fadeInUp 0.6s ease-out forwards;
		opacity: 0;
		transform: translateY(20px);
	}

	:global(.grid > *:nth-child(1)) { animation-delay: 0.1s; }
	:global(.grid > *:nth-child(2)) { animation-delay: 0.2s; }
	:global(.grid > *:nth-child(3)) { animation-delay: 0.3s; }
	:global(.grid > *:nth-child(4)) { animation-delay: 0.4s; }
	:global(.grid > *:nth-child(5)) { animation-delay: 0.5s; }
	:global(.grid > *:nth-child(6)) { animation-delay: 0.6s; }

	@keyframes fadeInUp {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* Enhanced carousel styling */
	:global(.carousel-item .fancy-card) {
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	:global(.carousel-item:hover .fancy-card) {
		transform: translateY(-2px);
	}
</style>
