<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import {
		Dialog,
		DialogClose,
		DialogContent,
		DialogFooter,
		DialogTrigger
	} from '$lib/components/ui/dialog';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { Tooltip, TooltipTrigger } from '$lib/components/ui/tooltip';
	import TooltipContent from '$lib/components/ui/tooltip/tooltip-content.svelte';
	import H4 from '$lib/components/ui/typography/h4.svelte';
	import Large from '$lib/components/ui/typography/large.svelte';
	import { LanguageSelector } from '$lib/components/ui/language-selector';
	import BaseData from '$lib/data/base';
	import NavBarData from '$lib/data/nav-bar';
	import { href } from '$lib/utils';
	import { mode, setMode } from 'mode-watcher';
	import { page } from '$app/stores';

	let isDarkMode = $derived($mode === 'dark');
	
	// Fonction pour vérifier si un lien est actif
	function isActiveLink(itemHref: string): boolean {
		return $page.url.pathname === itemHref || $page.url.pathname.startsWith(itemHref + '/');
	}
	
	// Fonction personnalisée pour toggle avec transition
	function toggleModeWithTransition() {
		// Ajouter la classe pour activer les transitions
		document.documentElement.classList.add('theme-transitioning');
		
		// Changer le mode
		const newMode = $mode === 'dark' ? 'light' : 'dark';
		setMode(newMode);
		
		// Supprimer la classe après l'animation (100ms + 50ms de marge)
		setTimeout(() => {
			document.documentElement.classList.remove('theme-transitioning');
		}, 150);
	}
</script>

<div
	class="border-1 absolute left-0 right-0 top-0 z-10 flex h-[50px] flex-row items-center border-b bg-[--bg] px-4 backdrop-blur-xl sm:px-8"
	style="--bg : hsl(var(--background) / 0.5)"
>
	<div class="sm:flex-1">
		<a href={href('/')} class="flex flex-row items-center justify-start gap-2 text-2xl" data-sveltekit-preload-data="hover" data-sveltekit-preload-code="hover">
			<Tooltip>
				<TooltipTrigger>
					{#if NavBarData.left.icon.startsWith('/') || NavBarData.left.icon.startsWith('http')}
						<img src={NavBarData.left.icon} alt="Logo" class="h-6 w-6" />
					{:else}
						<Icon icon={NavBarData.left.icon as `i-carbon-${string}`} />
					{/if}
				</TooltipTrigger>
				<TooltipContent side="bottom" class="lg:hidden">
					{NavBarData.left.title}
				</TooltipContent>
			</Tooltip>
			<H4 className="hidden lg:block">{NavBarData.left.title}</H4>
		</a>
	</div>

	<!-- larger than sm -->
	<div class="hidden flex-[2] flex-row items-center justify-center gap-2 sm:flex">
		{#each NavBarData.items as item}
			<a href={href(item.href)} data-sveltekit-preload-data="hover" data-sveltekit-preload-code="hover">
				<Tooltip>
					<TooltipTrigger>
						<Button 
							class="flex flex-row items-center justify-center gap-2" 
							variant={isActiveLink(item.href) ? "default" : "ghost"}
						>
							<Icon icon={item.icon} className="text-xl" />
							<div class="hidden lg:block">{item.title}</div>
						</Button>
					</TooltipTrigger>
					<TooltipContent side="bottom" class="lg:hidden">
						{item.title}
					</TooltipContent>
				</Tooltip>
			</a>
		{/each}
	</div>
	<div class="hidden flex-row items-center justify-end gap-2 sm:flex sm:flex-1">
		<a href={href('/search')} data-sveltekit-preload-data="hover" data-sveltekit-preload-code="hover">
			<Button variant={isActiveLink('/search') ? "default" : "ghost"} class="text-xl">
				<Icon icon="i-carbon-search" />
			</Button>
		</a>
		<LanguageSelector />
		<Button variant="ghost" class="text-xl" on:click={toggleModeWithTransition}>
			<Icon icon={isDarkMode ? 'i-carbon-moon' : 'i-carbon-sun'} />
		</Button>
	</div>

	<!-- sm -->
	<div class="flex flex-[2] flex-row items-center justify-center sm:hidden">
		<a href={href('/')}>
			<Large>{BaseData.fullName}</Large>
		</a>
	</div>
	<div class="flex flex-row items-center justify-center sm:hidden">
		<Dialog>
			<DialogTrigger>
				<Button size="icon" variant="ghost">
					<Icon className="text-xl" icon="i-carbon-menu" />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<div class="flex flex-col gap-2 pt-4">
					{#each NavBarData.items as item}
						<DialogClose>
							<a href={href(item.href)} class="w-full" data-sveltekit-preload-data="hover" data-sveltekit-preload-code="hover">
								<Button
									class="flex w-full flex-row items-center justify-start gap-2"
									variant={isActiveLink(item.href) ? "default" : "ghost"}
								>
									<Icon icon={item.icon} className="text-xl" />
									<div>{item.title}</div>
								</Button>
							</a>
						</DialogClose>
					{/each}
					<Separator />
					<DialogClose>
						<a href={href('/search')} class="w-full" data-sveltekit-preload-data="hover" data-sveltekit-preload-code="hover">
							<Button 
								class="flex w-full flex-row items-center justify-start gap-2" 
								variant={isActiveLink('/search') ? "default" : "ghost"}
							>
								<Icon icon={'i-carbon-search'} className="text-xl" />
								<div>Search</div>
							</Button>
						</a>
					</DialogClose>
					<Separator />
					<div class="flex flex-row items-center justify-between gap-2 px-3 py-2">
						<div class="flex flex-row items-center gap-2">
							<Icon icon="i-carbon-language" className="text-xl" />
							<div>Langue</div>
						</div>
						<LanguageSelector />
					</div>
					<Separator />
					<Button
						class="flex w-full flex-row items-center justify-start gap-2"
						variant="ghost"
						on:click={toggleModeWithTransition}
					>
						<Icon icon={isDarkMode ? 'i-carbon-moon' : 'i-carbon-sun'} className="text-xl" />
						<div>{isDarkMode ? 'Dark' : 'Light'}</div>
					</Button>
				</div>
				<DialogFooter class="items-end">
					<DialogClose>
						<Button>Close</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	</div>
</div>
