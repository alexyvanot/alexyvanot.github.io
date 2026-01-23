<script lang="ts">
	import '$lib/styles/detail-page.css';
	import BasePage from './base-page.svelte';
	import { EmptyResult } from '$lib/components/feedback';
	import { EmptyMarkdown, Markdown, ImageCard, AttachmentCard } from '$lib/components/content';
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { fade, fly } from 'svelte/transition';
	import type { Snippet } from 'svelte';
	import type { Screenshot, Attachment } from '$lib/data/types';
	import { AttachmentType } from '$lib/data/types';

	interface NavItem {
		slug: string;
		label: string;
	}

	interface Props {
		// Données de base
		title: string;
		banner: string;
		itemTitle: string;
		description?: string;
		screenshots?: Screenshot[];
		attachments?: Attachment[];
		exists?: boolean;
		
		// Image de fond optionnelle pour le header
		backgroundImage?: string;
		
		// Navigation
		entityName: string;
		entityNamePlural: string;
		entityIcon: string;
		entityRoute: string;
		previousItem?: NavItem | null;
		nextItem?: NavItem | null;
		
		// Slots pour personnalisation
		headerMeta?: Snippet;
		headerBadges?: Snippet;
		extraSections?: Snippet;
		
		// Callbacks de navigation
		onNavigateToItem: (slug: string) => void;
		onNavigateToList: () => void;
	}

	let {
		title,
		banner,
		itemTitle,
		description = '',
		screenshots = [],
		attachments = [],
		exists = true,
		backgroundImage,
		entityName,
		entityNamePlural,
		entityIcon,
		entityRoute,
		previousItem = null,
		nextItem = null,
		headerMeta,
		headerBadges,
		extraSections,
		onNavigateToItem,
		onNavigateToList
	}: Props = $props();

	// Variable pour déterminer si la page nécessite les boutons de navigation en bas
	let needsBottomNav = $state(false);
	let scrollContainers = $state<Element[]>([]);

	// Fonction pour trouver les conteneurs de défilement
	const findScrollContainers = () => {
		if (!browser) return [];
		
		const containers: Element[] = [];
		
		const overflowElements = document.querySelectorAll(
			'[style*="overflow"], .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll'
		);
		
		for (const el of overflowElements) {
			if (el.scrollHeight > el.clientHeight) {
				containers.push(el);
			}
		}
		
		const allElements = document.querySelectorAll('*');
		for (const el of allElements) {
			if (el.scrollHeight > el.clientHeight && el.scrollTop > 0) {
				if (!containers.includes(el)) {
					containers.push(el);
				}
			}
		}
		
		return containers;
	};

	// Fonction pour vérifier si la page nécessite un défilement
	function checkPageNeedsScroll() {
		if (!browser) return;
		
		scrollContainers = findScrollContainers();
		const margin = 200;
		
		const documentHeight = Math.max(
			document.body.scrollHeight,
			document.documentElement.scrollHeight,
			document.body.offsetHeight,
			document.documentElement.offsetHeight,
			document.body.clientHeight,
			document.documentElement.clientHeight
		);
		
		const windowHeight = window.innerHeight;
		let needsScroll = documentHeight > (windowHeight + margin);
		
		if (!needsScroll && scrollContainers.length > 0) {
			for (const container of scrollContainers) {
				if (container.scrollHeight > container.clientHeight + margin) {
					needsScroll = true;
					break;
				}
			}
		}
		
		needsBottomNav = needsScroll;
	}

	// Fonction pour surveiller le défilement sur tous les conteneurs
	function setupScrollListeners() {
		if (!browser) return;
		
		checkPageNeedsScroll();
		
		window.addEventListener('scroll', checkPageNeedsScroll, { passive: true });
		document.addEventListener('scroll', checkPageNeedsScroll, { passive: true });
		window.addEventListener('resize', checkPageNeedsScroll);
		window.addEventListener('load', checkPageNeedsScroll);
		
		scrollContainers.forEach(container => {
			container.addEventListener('scroll', checkPageNeedsScroll, { passive: true });
		});
		
		const interval = setInterval(() => {
			const newContainers = findScrollContainers();
			const added = newContainers.filter(c => !scrollContainers.includes(c));
			
			added.forEach(container => {
				container.addEventListener('scroll', checkPageNeedsScroll, { passive: true });
			});
			
			if (added.length > 0) {
				scrollContainers = [...scrollContainers, ...added];
			}
		}, 1000);
		
		return () => {
			window.removeEventListener('scroll', checkPageNeedsScroll);
			document.removeEventListener('scroll', checkPageNeedsScroll);
			window.removeEventListener('resize', checkPageNeedsScroll);
			window.removeEventListener('load', checkPageNeedsScroll);
			
			scrollContainers.forEach(container => {
				container.removeEventListener('scroll', checkPageNeedsScroll);
			});
			
			clearInterval(interval);
		};
	}

	let cleanupFunction: (() => void) | undefined;
	
	onMount(() => {
		setTimeout(() => {
			cleanupFunction = setupScrollListeners();
		}, 300);
	});
	
	onDestroy(() => {
		if (cleanupFunction) cleanupFunction();
	});

	// Navigation helper
	function handleNavigateToItem(slug: string) {
		onNavigateToItem(slug);
	}
	
	// Déterminer l'image de fond du header
	// - Si backgroundImage est "none" → pas de fond
	// - Si backgroundImage est défini → utiliser backgroundImage
	// - Sinon → utiliser le banner par défaut
	let effectiveBackground = $derived(
		backgroundImage === 'none' 
			? null 
			: (backgroundImage || banner)
	);
</script>

<BasePage {title}>
	{#if !exists}
		<EmptyResult />
	{:else}
		<div class="detail-page">
			<!-- Header amélioré -->
			<header 
				class="detail-header detail-animate" 
				class:has-background={effectiveBackground}
				style={effectiveBackground ? `--header-bg: url(${effectiveBackground})` : ''}
				in:fly={{ y: 20, duration: 400 }}
			>
				{#if effectiveBackground}
					<div class="header-background"></div>
				{/if}
				<div class="header-content">
					<!-- Logo/Banner -->
					<div class="header-logo">
						<img src={banner} alt={itemTitle} />
					</div>
					
					<!-- Titre -->
					<h1 class="header-title">{itemTitle}</h1>
					
					<!-- Métadonnées (slot personnalisable) -->
					{#if headerMeta}
						<div class="detail-meta">
							{@render headerMeta()}
						</div>
					{/if}
					
					{#if headerBadges}
						<div class="header-badges-container">
							{@render headerBadges()}
						</div>
					{/if}
				</div>
			</header>
			
			<!-- Navigation -->
			<nav class="detail-navigation detail-animate detail-animate-delay-1" in:fly={{ y: 20, duration: 400, delay: 100 }}>
				<!-- Élément précédent -->
				<button 
					onclick={() => previousItem && handleNavigateToItem(previousItem.slug)}
					disabled={!previousItem}
					class="detail-nav-button"
				>
					<div class="i-carbon-chevron-left text-lg nav-icon nav-icon-left"></div>
					{#if previousItem}
						<div class="nav-info text-left">
							<span class="nav-label">{entityName} précédent(e)</span>
							<span class="nav-title">{previousItem.label}</span>
						</div>
					{:else}
						<span class="hidden sm:inline">{entityName} précédent(e)</span>
					{/if}
					<span class="sm:hidden">{previousItem ? '' : 'Précédent'}</span>
				</button>
				
				<!-- Retour à la liste -->
				<button 
					onclick={onNavigateToList}
					class="detail-nav-button detail-nav-center"
				>
					<div class={`${entityIcon} text-lg`}></div>
					<span>{entityNamePlural}</span>
				</button>
				
				<!-- Élément suivant -->
				<button 
					onclick={() => nextItem && handleNavigateToItem(nextItem.slug)}
					disabled={!nextItem}
					class="detail-nav-button"
				>
					{#if nextItem}
						<div class="nav-info text-right">
							<span class="nav-label">{entityName} suivant(e)</span>
							<span class="nav-title">{nextItem.label}</span>
						</div>
					{:else}
						<span class="hidden sm:inline">{entityName} suivant(e)</span>
					{/if}
					<span class="sm:hidden">{nextItem ? '' : 'Suivant'}</span>
					<div class="i-carbon-chevron-right text-lg nav-icon nav-icon-right"></div>
				</button>
			</nav>
			
			<!-- Contenu principal -->
			<div class="detail-content detail-animate detail-animate-delay-2" in:fly={{ y: 20, duration: 400, delay: 200 }}>
				{#if description.trim()}
					<Markdown content={description} />
				{:else}
					<EmptyMarkdown />
				{/if}
			</div>
			
			<!-- Sections supplémentaires (slot personnalisable) -->
			{#if extraSections}
				{@render extraSections()}
			{/if}
			
			<!-- Screenshots legacy -->
			{#if screenshots && screenshots.length > 0}
				<div class="detail-section detail-animate detail-animate-delay-3" in:fly={{ y: 20, duration: 400, delay: 300 }}>
					<h3 class="detail-section-title">
						<div class="i-carbon-image"></div>
						Images
					</h3>
					<div class="detail-screenshots">
						{#each screenshots as img, index (index)}
							<ImageCard item={img} />
						{/each}
					</div>
				</div>
			{/if}
			
			<!-- Pièces jointes (images rendues, autres en liens) -->
			{#if attachments && attachments.length > 0}
				<div class="detail-section detail-animate detail-animate-delay-3" in:fly={{ y: 20, duration: 400, delay: 350 }}>
					<h3 class="detail-section-title">
						<div class="i-carbon-attachment"></div>
						Pièces jointes
					</h3>
					<div class="detail-attachments">
						{#each attachments as attachment, index (index)}
							{#if attachment.type === AttachmentType.Image}
								<!-- Image: rendue directement -->
								<ImageCard item={{ src: attachment.src, label: attachment.label }} />
							{:else}
								<!-- Autre: affiché comme carte/lien -->
								<AttachmentCard {attachment} />
							{/if}
						{/each}
					</div>
				</div>
			{/if}
			
			<!-- Navigation en bas (si page longue) -->
			{#if needsBottomNav}
				<nav class="detail-navigation detail-animate-delay-4" in:fade={{ duration: 200 }}>
					<button 
						onclick={() => previousItem && handleNavigateToItem(previousItem.slug)}
						disabled={!previousItem}
						class="detail-nav-button"
					>
						<div class="i-carbon-chevron-left text-lg nav-icon nav-icon-left"></div>
						{#if previousItem}
							<div class="nav-info text-left">
								<span class="nav-label">{entityName} précédent(e)</span>
								<span class="nav-title">{previousItem.label}</span>
							</div>
						{:else}
							<span class="hidden sm:inline">{entityName} précédent(e)</span>
						{/if}
						<span class="sm:hidden">{previousItem ? '' : 'Précédent'}</span>
					</button>
					
					<button 
						onclick={onNavigateToList}
						class="detail-nav-button detail-nav-center"
					>
						<div class={`${entityIcon} text-lg`}></div>
						<span>{entityNamePlural}</span>
					</button>
					
					<button 
						onclick={() => nextItem && handleNavigateToItem(nextItem.slug)}
						disabled={!nextItem}
						class="detail-nav-button"
					>
						{#if nextItem}
							<div class="nav-info text-right">
								<span class="nav-label">{entityName} suivant(e)</span>
								<span class="nav-title">{nextItem.label}</span>
							</div>
						{:else}
							<span class="hidden sm:inline">{entityName} suivant(e)</span>
						{/if}
						<span class="sm:hidden">{nextItem ? '' : 'Suivant'}</span>
						<div class="i-carbon-chevron-right text-lg nav-icon nav-icon-right"></div>
					</button>
				</nav>
			{/if}
		</div>
	{/if}
</BasePage>
