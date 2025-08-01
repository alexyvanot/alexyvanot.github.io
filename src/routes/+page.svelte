<script lang="ts">
	import Title from '$lib/components/common/title/title.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import CarouselContent from '$lib/components/ui/carousel/carousel-content.svelte';
	import CarouselItem from '$lib/components/ui/carousel/carousel-item.svelte';
	import CarouselNext from '$lib/components/ui/carousel/carousel-next.svelte';
	import CarouselPrevious from '$lib/components/ui/carousel/carousel-previous.svelte';
	import Carousel from '$lib/components/ui/carousel/carousel.svelte';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import ResponsiveContainer from '$lib/components/ui/responsive-container/responsive-container.svelte';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
	import H1 from '$lib/components/ui/typography/h1.svelte';
	import Muted from '$lib/components/ui/typography/muted.svelte';
	import HomeData from '$lib/data/home';
	import { href } from '$lib/utils';
	import { mode } from 'mode-watcher';
	import { type CarouselAPI } from '$lib/components/ui/carousel/context.js';
	import { onMount } from 'svelte';

	let api: CarouselAPI;
	let intervalId: number | null = null;
	let isHovered = false;
	let isTouched = false;

	function startAutoScroll() {
		if (intervalId) return;
		intervalId = Number(setInterval(() => {
			if (!api || isHovered || isTouched) return;
			api.scrollNext();
		}, 2000));
	}

	function stopAutoScroll() {
		if (intervalId) {
			clearInterval(intervalId);
			intervalId = null;
		}
	}

	onMount(() => {
		startAutoScroll();
		
		// Ajouter les écouteurs d'événements tactiles directement
		const carouselElement = document.querySelector('.w-\\[200px\\]');
		let handleTouchStartDirect: () => void;
		let handleTouchEndDirect: () => void;
		
		if (carouselElement) {
			handleTouchStartDirect = () => {
				isTouched = true;
			};
			
			handleTouchEndDirect = () => {
				// Garder le carrousel en pause un moment après le touch
				setTimeout(() => {
					isTouched = false;
				}, 1500);
			};
			
			// Événements tactiles
			carouselElement.addEventListener('touchstart', handleTouchStartDirect, { passive: true });
			carouselElement.addEventListener('touchend', handleTouchEndDirect, { passive: true });
			carouselElement.addEventListener('touchcancel', handleTouchEndDirect, { passive: true });
			
			// Événements pointer (plus universels)
			carouselElement.addEventListener('pointerdown', handleTouchStartDirect, { passive: true });
			carouselElement.addEventListener('pointerup', handleTouchEndDirect, { passive: true });
			carouselElement.addEventListener('pointercancel', handleTouchEndDirect, { passive: true });
		}
		
		return () => {
			stopAutoScroll();
			// Nettoyer les événements tactiles
			if (carouselElement && handleTouchStartDirect && handleTouchEndDirect) {
				carouselElement.removeEventListener('touchstart', handleTouchStartDirect);
				carouselElement.removeEventListener('touchend', handleTouchEndDirect);
				carouselElement.removeEventListener('touchcancel', handleTouchEndDirect);
				carouselElement.removeEventListener('pointerdown', handleTouchStartDirect);
				carouselElement.removeEventListener('pointerup', handleTouchEndDirect);
				carouselElement.removeEventListener('pointercancel', handleTouchEndDirect);
			}
		};
	});

	function handleMouseEnter() {
		isHovered = true;
	}

	function handleMouseLeave() {
		isHovered = false;
	}

	function handleTouchStart() {
		isTouched = true;
	}

	function handleTouchEnd() {
		// Garder le carrousel en pause un moment après le touch pour éviter les transitions abruptes
		setTimeout(() => {
			isTouched = false;
		}, 1500);
	}
</script>

<Title title={HomeData.title} />
<ResponsiveContainer className="flex flex-col justify-center flex-1 relative z-10">
	<div
		class="flex flex-1 flex-col items-center justify-center gap-8 px-14 md:flex-row md:justify-between backdrop-blur-sm rounded-lg p-8"
	>
		<div
			class="flex flex-col items-center justify-center gap-4 text-center md:items-start md:text-left"
		>
			<H1>{HomeData.hero.title}</H1>
			<Muted>{HomeData.hero.description}</Muted>
			<div class="flex flex-row gap-1">
				{#each HomeData.hero.links as item}
					<a href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'}>
						<Tooltip>
							<TooltipTrigger>
								<Button variant="outline" size="icon">
									<Icon icon={item.icon} className="text-lg" />
								</Button>
							</TooltipTrigger>
							<TooltipContent side="bottom">{item.label}</TooltipContent>
						</Tooltip>
					</a>
				{/each}
			</div>
		</div>
		<div>
			<Carousel 
				bind:api 
				class="w-[200px] md:ml-14" 
				opts={{ loop: true }}
				on:mouseenter={handleMouseEnter}
				on:mouseleave={handleMouseLeave}
				on:touchstart={handleTouchStart}
				on:touchend={handleTouchEnd}
			>
				<CarouselContent>
					{#each HomeData.carousel as item}
						<CarouselItem class="flex flex-col items-center justify-center gap-4">
							<a href={href(`/skills/${item.slug}`)} class="cursor-pointer">
								<img
									src={$mode === 'dark' ? item.logo.dark : item.logo.light}
									class="h-[150px] w-[150px]"
									alt={item.name}
								/>
							</a>
							<a href={href(`/skills/${item.slug}`)}>
								<Button variant="ghost">
									{item.name}
								</Button>
							</a>
						</CarouselItem>
					{/each}
				</CarouselContent>
				<CarouselNext />
				<CarouselPrevious />
			</Carousel>
		</div>
	</div>
</ResponsiveContainer>
