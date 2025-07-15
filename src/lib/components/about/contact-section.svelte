<script lang="ts">
	import H2 from '$lib/components/ui/typography/h2.svelte';
	import H3 from '$lib/components/ui/typography/h3.svelte';
	import P from '$lib/components/ui/typography/p.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { href } from '$lib/utils';
	import { fade, fly } from 'svelte/transition';
	import type { AboutSection, AboutProfile } from '$lib/data/about';

	const {
		section,
		profile,
		mounted = false,
		delay = 200
	}: {
		section: AboutSection;
		profile: AboutProfile;
		mounted?: boolean;
		delay?: number;
	} = $props();

	// Fonction pour formater le texte avec des mots en gras et support markdown
	function formatText(text: string): string {
		return text
			// Support markdown : **gras** et *italique* 
			.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
			.replace(/\*(.*?)\*/g, '<em>$1</em>')
			// Mots clés en gras automatique (seulement si pas déjà dans markdown)
			.replace(/(?<![*])(collaborer|projets|défis|ensemble|contact|échanges|idées|opportunités)(?![*])/gi, '<strong>$1</strong>');
	}
</script>

<section class="w-full">
	<div class="container mx-auto px-4">
		<div class="max-w-6xl mx-auto">
			
			{#if mounted}
				<!-- Layout avec image et appel à l'action -->
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					
					<!-- Image à gauche - sans Card -->
					{#if section.image}
						<div 
							class="order-2 lg:order-1"
							transition:fly={{ x: -50, delay: delay + 200, duration: 800 }}
						>
							<div class="relative overflow-hidden rounded-lg shadow-2xl h-full min-h-[400px]">
								<img 
									src={section.image} 
									alt={section.title}
									class="w-full h-full object-cover object-center scale-[1.15] hover:scale-[1.35] transition-transform duration-700"
									loading="lazy"
								/>
								<div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
							</div>
						</div>
					{/if}
					
					<!-- Texte et CTA à droite - avec Card -->
					<div 
						class="order-1 lg:order-2"
						transition:fly={{ x: 50, delay: delay + 400, duration: 800 }}
					>
						<Card class="bg-card/80 dark:bg-card/80 backdrop-blur-sm border border-border/50 shadow-xl">
							<CardHeader class="text-center">
								<div class="flex items-center justify-center gap-3 mb-2">
									{#if section.icon}
										<Icon icon={section.icon} className="text-2xl text-primary" />
									{/if}
									<CardTitle class="text-3xl">{section.title}</CardTitle>
								</div>
								{#if section.subtitle}
									<CardDescription class="text-lg">{section.subtitle}</CardDescription>
								{/if}
							</CardHeader>
							
							<CardContent class="space-y-8">
								<P class="text-lg leading-relaxed">
									{@html formatText(section.content.trim())}
								</P>
								
								<!-- Boutons d'action - Grid responsive pour éviter le débordement -->
								<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
									{#each profile.socialLinks as link}
										<a 
											href={link.href.startsWith('/') ? href(link.href) : link.href} 
											target={link.href.startsWith('http') ? '_blank' : '_self'}
											rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
											class="w-full"
										>
											<Button 
												variant={link.label === 'Email' ? 'default' : 'outline'} 
												size="lg" 
												class="w-full hover:scale-105 transition-transform"
											>
												<Icon icon={link.icon} className="mr-2" />
												{link.label}
											</Button>
										</a>
									{/each}
								</div>
								
								<!-- Informations supplémentaires -->
								<div class="pt-6 border-t border-border/50">
									<P class="text-sm text-muted-foreground text-center">
										<strong>Disponible</strong> pour des projets passionnants et des <strong>collaborations créatives</strong>
									</P>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>
