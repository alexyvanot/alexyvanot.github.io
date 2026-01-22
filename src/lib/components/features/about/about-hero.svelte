<script lang="ts">
	import { Icon } from '$lib/components/ui';
	import { HandwrittenTextAnim } from '$lib/components/effects';
	import { href } from '$lib/utils';
	import { onMount } from 'svelte';
	import type { AboutProfile } from '$lib/data/about';

	const {
		profile,
		mounted = false,
		varaLoaded = false
	}: {
		profile: AboutProfile;
		mounted?: boolean;
		varaLoaded?: boolean;
	} = $props();

	// État pour suivre la fin de l'animation (uniquement pour logging)
	let animationCompleted = $state(false);
	
	// Gestion de la fin de l'animation d'écriture
	function handleAnimationEnd() {
		console.log('Animation d\'écriture terminée');
		// Marquer l'animation comme terminée, mais elle reste affichée naturellement
		animationCompleted = true;
	}

	// Fonction pour formater le texte avec support markdown basique
	function formatText(text: string): string {
		return text
			// Support markdown : **gras** et *italique* 
			.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
			.replace(/\*(.*?)\*/g, '<em>$1</em>');
	}

	// Utiliser onMount pour forcer l'affichage même si mounted est false
	onMount(() => {
		console.log(`AboutHero monté, mounted=${mounted}`);
		
		if (!mounted) {
			console.log("Force montage du composant");
		}
	});
</script>

<svelte:head>
	<!-- Ajouter des polices manuscrites de secours au cas où -->
	<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<section class="w-full relative min-h-screen flex items-center justify-center">
	<!-- Contenu principal -->
	<div class="container mx-auto px-4 relative z-10 -mt-20">
		{#if mounted}
			<!-- En-tête avec animation manuscrite qui reste visible après l'animation -->
			<div class="text-center mb-8 mt-16">
				<!-- Animation d'écriture manuscrite en haut de la page -->
				<div class="mb-2">
					<HandwrittenTextAnim 
						text={profile.name}
						fontSize={40}
						strokeWidth={1.8}
						color="var(--color-primary)"
						duration={3000}
						height={100}
						y={30}
						autoStart={varaLoaded}
						onComplete={handleAnimationEnd}
					/>
				</div>
				
				<!-- Séparateur décoratif -->
				<div class="w-20 h-1 bg-primary/40 mx-auto mt-6 mb-8 rounded-full animate-fade-in" style="animation-delay: 400ms;"></div>
			</div>

			<!-- Contenu principal avec photo et texte (visible dès le début) -->
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-stretch max-w-7xl mx-auto">
				<!-- Photo de profil - Côté gauche -->
				<div class="flex justify-center lg:justify-start animate-fade-in w-full h-full self-start" style="animation-delay: 500ms;">
					<div class="relative group w-full max-w-sm lg:max-w-md">
						<!-- Photo avec effet moderne -->
						<div class="relative flex items-center justify-center h-full">
							<div class="w-full h-full min-h-[320px] md:min-h-[370px] lg:min-h-[420px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 transform group-hover:scale-105">
								<img 
									src={profile.photo} 
									alt={profile.name}
									class="w-full h-full object-cover object-center scale-[1.15] transition-transform duration-700 group-hover:scale-[1.35]"
								/>
							</div>
							
							<!-- Badge décoratif -->
							<div class="absolute bottom-1 -right-4 -mb-5 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce-soft animate-fade-in" style="animation-delay: 1000ms;">
								✨ Développeur
							</div>
						</div>
					</div>
				</div>
				
				<!-- Contenu texte - Côté droit -->
				<div class="flex flex-col text-center lg:text-left animate-fade-in h-full" style="animation-delay: 700ms;">
					<!-- Description et liens sociaux dans un seul encadré -->
					<div class="prose prose-lg max-w-none bg-card/70 backdrop-blur-md shadow-md p-6 rounded-xl border border-border/40 flex-grow flex flex-col h-full">
						<!-- Description -->
						<p class="text-lg leading-relaxed text-foreground/90 font-light mb-8 flex-grow">
							{@html formatText(profile.description.trim())}
						</p>
						
						<!-- Liens sociaux -->
						<div class="space-y-4 mt-auto pt-6 border-t border-border/30">
							<h3 class="text-lg font-semibold text-foreground/70">Connectons-nous</h3>
							<div class="social-links-container flex flex-wrap gap-3 justify-center lg:justify-start">
								{#each profile.socialLinks as link, index}
									<a 
										href={link.href.startsWith('/') ? href(link.href) : link.href} 
										target={link.href.startsWith('http') ? '_blank' : '_self'}
										rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
										class="social-link group animate-fade-in"
										style="animation-delay: {900 + index * 100}ms"
									>
										<div class="flex items-center gap-2 bg-card/60 hover:bg-card/90 border border-border/30 hover:border-primary/50 rounded-xl px-4 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm">
											<Icon icon={link.icon} className="text-xl text-primary group-hover:scale-110 transition-transform" />
											<span class="font-medium text-sm">{link.label}</span>
										</div>
									</a>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>

<style>
	/* Animations pour les éléments */
	@keyframes bounce-soft {
		0%, 100% { transform: translateY(0px); }
		50% { transform: translateY(-5px); }
	}
	
	@keyframes fade-in {
		0% { opacity: 0; transform: translateY(15px); }
		100% { opacity: 1; transform: translateY(0px); }
	}
	
	.animate-bounce-soft {
		animation: bounce-soft 3s ease-in-out infinite;
	}
	
	.animate-fade-in {
		animation: fade-in 0.9s ease-out forwards;
		opacity: 0;
	}
	
	/* Style pour rendre les mots en gras plus prononcés */
	:global(.prose strong) {
		font-weight: 700;
		color: var(--color-primary);
		letter-spacing: 0.01em;
		position: relative;
	}
</style>
