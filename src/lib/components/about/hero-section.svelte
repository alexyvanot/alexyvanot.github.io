<script lang="ts">
	import ProfilePhoto from './profile-photo.svelte';
	import H1 from '$lib/components/ui/typography/h1.svelte';
	import Lead from '$lib/components/ui/typography/lead.svelte';
	import P from '$lib/components/ui/typography/p.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
	import { href } from '$lib/utils';
	import { fade, fly } from 'svelte/transition';

	const {
		profile,
		mounted = false
	}: {
		profile: {
			photo: string;
			name: string;
			subtitle: string;
			description: string;
		};
		mounted?: boolean;
	} = $props();

	// Liens vers les réseaux sociaux (à adapter selon vos besoins)
	const socialLinks = [
		{ icon: 'i-carbon-logo-github' as const, href: 'https://github.com/alexyvanot', label: 'GitHub' },
		{ icon: 'i-carbon-logo-linkedin' as const, href: 'https://linkedin.com/in/alexy-vanot', label: 'LinkedIn' },
		{ icon: 'i-carbon-email' as const, href: '/contact', label: 'Contact' }
	];
</script>

<section class="min-h-screen flex items-center justify-center relative overflow-hidden">
	<!-- Background avec effet parallaxe -->
	<div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
	
	<!-- Contenu principal -->
	<div class="container mx-auto px-4 py-20">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
			
			<!-- Photo de profil - Côté gauche -->
			<div class="flex justify-center lg:justify-start order-1 lg:order-1">
				{#if mounted}
					<div transition:fade={{ delay: 200, duration: 800 }} class="relative">
						<ProfilePhoto 
							src={profile.photo} 
							alt={profile.name}
							size="xlarge" 
							class="relative z-10"
						/>
						<!-- Effet décoratif derrière la photo -->
						<div 
							class="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-2xl -z-10"
							transition:fade={{ delay: 400, duration: 1000 }}
						></div>
					</div>
				{/if}
			</div>
			
			<!-- Texte de présentation - Côté droit -->
			<div class="flex flex-col gap-6 order-2 lg:order-2 text-center lg:text-left">
				{#if mounted}
					<div transition:fly={{ x: 50, delay: 400, duration: 800 }}>
						<H1 class="mb-4">{profile.name}</H1>
						<Lead class="text-muted-foreground">{profile.subtitle}</Lead>
					</div>
					
					<div transition:fly={{ x: 50, delay: 600, duration: 800 }}>
						<P class="text-lg leading-relaxed">
							{profile.description.trim()}
						</P>
					</div>
					
					<!-- Liens sociaux -->
					<div transition:fly={{ x: 50, delay: 800, duration: 800 }}>
						<div class="flex flex-row gap-4 justify-center lg:justify-start">
							{#each socialLinks as link}
								<Tooltip>
									<TooltipTrigger>
										<a href={link.href.startsWith('/') ? href(link.href) : link.href} 
										   target={link.href.startsWith('http') ? '_blank' : '_self'}
										   rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}>
											<Button variant="outline" size="icon" class="hover:scale-110 transition-transform">
												<Icon icon={link.icon} className="text-lg" />
											</Button>
										</a>
									</TooltipTrigger>
									<TooltipContent>{link.label}</TooltipContent>
								</Tooltip>
							{/each}
						</div>
					</div>

					<!-- Indicateur de scroll -->
					<div 
						transition:fade={{ delay: 1200, duration: 600 }}
						class="flex justify-center lg:justify-start mt-8"
					>
						<div class="flex flex-col items-center animate-bounce">
							<span class="text-sm text-muted-foreground mb-2">Découvrez plus</span>
							<Icon icon="i-carbon-chevron-down" className="text-xl text-muted-foreground" />
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	/* Animation subtile pour l'indicateur de scroll */
	@keyframes bounce {
		0%, 20%, 50%, 80%, 100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(-10px);
		}
		60% {
			transform: translateY(-5px);
		}
	}
	
	.animate-bounce {
		animation: bounce 2s infinite;
	}
</style>
