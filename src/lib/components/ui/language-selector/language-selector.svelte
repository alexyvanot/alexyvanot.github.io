<script lang="ts">
	import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '$lib/components/ui/dropdown-menu';
	import Button from '$lib/components/ui/button/button.svelte';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import { Tooltip, TooltipTrigger } from '$lib/components/ui/tooltip';
	import TooltipContent from '$lib/components/ui/tooltip/tooltip-content.svelte';
	import { onMount } from 'svelte';
	import type { LanguageSelectorConfig } from '$lib/types/language-selector';
	import { createLanguageSelectorConfig } from '$lib/data/language-selector';

	// Props pour personnaliser la configuration
	interface Props {
		config?: Partial<LanguageSelectorConfig>;
	}

	let { config: customConfig }: Props = $props();

	// Fusionner la configuration personnalisée avec la configuration par défaut
	const config = createLanguageSelectorConfig(customConfig);
	const { supportedLanguages, defaultLanguage, pageLanguage, persistence, googleTranslate, ui } = config;

	let currentLang = $state(defaultLanguage);
	let isTranslateReady = $state(false);
	let updateTrigger = $state(0); // Variable pour forcer les mises à jour
	let isManualChange = $state(false); // Empêcher la détection auto pendant les changements manuels
	let forceRerender = $state(0); // Force le re-rendu de l'interface

	// Obtenir la langue actuelle avec forçage de réactivité
	const currentLanguage = $derived.by(() => {
		// Utiliser updateTrigger ET forceRerender pour forcer la réactivité
		updateTrigger;
		forceRerender;
		const lang = supportedLanguages.find((lang: { code: string }) => lang.code === currentLang) || supportedLanguages[0];
		return lang;
	});

	onMount(() => {
		// Charger la langue sauvegardée ou détecter celle du navigateur (selon la configuration)
		if (persistence.enabled) {
			const savedLang = localStorage.getItem(persistence.storageKey);
			
			if (savedLang && supportedLanguages.find((lang: { code: string }) => lang.code === savedLang)) {
				currentLang = savedLang;
				// Initialiser Google Translate SEULEMENT si on a une langue sauvegardée (non-par défaut)
				if (savedLang !== defaultLanguage) {
					initializeGoogleTranslate();
					// Appliquer la langue sauvegardée après initialisation
					setTimeout(() => {
						changeLanguage(savedLang);
					}, googleTranslate.initializationDelay);
				}
			} else if (persistence.detectBrowserLanguage) {
				// Pas de langue sauvegardée, détecter celle du navigateur
				const browserLang = navigator.language.split('-')[0];
				const supportedLang = supportedLanguages.find((lang: { code: string }) => lang.code === browserLang);
				if (supportedLang && supportedLang.code !== defaultLanguage) {
					currentLang = supportedLang.code;
					// Initialiser Google Translate pour la langue du navigateur
					initializeGoogleTranslate();
					setTimeout(() => {
						changeLanguage(supportedLang.code);
					}, googleTranslate.initializationDelay);
				} else {
					currentLang = defaultLanguage;
					// S'assurer que localStorage est propre pour la langue par défaut
					localStorage.removeItem(persistence.storageKey);
					isTranslateReady = false; // Pas prêt car pas initialisé
				}
			} else {
				// Pas de détection du navigateur, utiliser la langue par défaut
				currentLang = defaultLanguage;
				localStorage.removeItem(persistence.storageKey);
				isTranslateReady = false;
			}
		} else {
			// Persistance désactivée, toujours utiliser la langue par défaut
			currentLang = defaultLanguage;
			isTranslateReady = false;
		}
		
		// Forcer la mise à jour initiale
		updateTrigger++;
		forceRerender++;
	});

	function initializeGoogleTranslate() {
		// Créer l'élément Google Translate s'il n'existe pas
		if (!document.getElementById('google_translate_element')) {
			const translateDiv = document.createElement('div');
			translateDiv.id = 'google_translate_element';
			document.body.appendChild(translateDiv);
		}

		// Configuration Google Translate
		(window as any).googleTranslateElementInit = function() {
			new (window as any).google.translate.TranslateElement(
				{ pageLanguage: pageLanguage },
				'google_translate_element'
			);
			
			// Marquer comme prêt après un délai
			setTimeout(() => {
				const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
				if (select) {
					isTranslateReady = true;
					
					// Appliquer les styles pour cacher l'interface
					applyOriginalStyles();
					
					// Configurer la détection de langue
					setupLanguageDetection();
				}
			}, 2000);
		};

		// Charger le script Google Translate
		if (!document.querySelector('script[src*="translate.google.com"]')) {
			const script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
			document.head.appendChild(script);
		}
	}

	function applyOriginalStyles() {
		// Appliquer les styles CSS exactement comme dans l'ancienne version
		const style = document.createElement('style');
		style.innerHTML = `
			#goog-gt-tt { display: none !important; }
			.VIpgJd-ZVi9od-ORHb-OEVmcd { display: none !important; }
			body { top: 0px !important; }
			.goog-te-banner-frame { display: none !important; }
			.goog-logo-link { display: none !important; }
			.goog-te-gadget { height: 28px !important; overflow: hidden; }
			#goog-gt-tt, .goog-te-balloon-frame { display: none !important; }
			.goog-text-highlight { background: none !important; box-shadow: none !important; }
			
			#google_translate_element {
				position: absolute !important;
				top: -9999px !important;
				left: -9999px !important;
				width: 1px !important;
				height: 1px !important;
				overflow: hidden !important;
			}
		`;
		document.head.appendChild(style);
	}

	// Fonction pour changer la langue
	function changeLanguage(langCode: string) {
		// Bloquer la détection automatique pendant le changement manuel
		isManualChange = true;
		
		// Mettre à jour immédiatement l'état pour l'icône
		currentLang = langCode;
		updateTrigger++;
		forceRerender++; // Force le re-rendu
		
		// Ajouter un petit délai pour s'assurer que l'interface se met à jour
		setTimeout(() => {
			forceRerender++;
		}, googleTranslate.uiUpdateDelay);
		
		if (langCode === defaultLanguage) {
			// Pour la langue par défaut, supprimer la langue sauvegardée et recharger
			if (persistence.enabled) {
				localStorage.removeItem(persistence.storageKey);
			}
			window.location.reload();
			return;
		}
		
		// Pour les autres langues, vérifier si Google Translate est initialisé
		if (!isTranslateReady) {
			// Sauvegarder la langue avant d'initialiser (si la persistance est activée)
			if (persistence.enabled) {
				localStorage.setItem(persistence.storageKey, langCode);
			}
			// Initialiser Google Translate puis appliquer la langue
			initializeGoogleTranslate();
			setTimeout(() => {
				// Une fois initialisé, appliquer la traduction
				applyTranslation(langCode);
			}, googleTranslate.translationDelay);
		} else {
			// Google Translate déjà prêt, appliquer directement
			if (persistence.enabled) {
				localStorage.setItem(persistence.storageKey, langCode);
			}
			applyTranslation(langCode);
		}

		// Réactiver la détection automatique après un délai
		setTimeout(() => {
			isManualChange = false;
		}, googleTranslate.manualChangeDelay);
	}

	// Fonction pour mapper notre code vers le code Google Translate
	function getGoogleTranslateCode(langCode: string): string {
		const mapping: { [key: string]: string } = {
			'zh': 'zh', // Essayons d'abord zh simple
			'pt': 'pt',    // Portugais
			'ar': 'ar',    // Arabe
			'ko': 'ko',    // Coréen
			'ja': 'ja',    // Japonais
			'ru': 'ru',    // Russe
			'de': 'de',    // Allemand
			'es': 'es',    // Espagnol
			'it': 'it',    // Italien
			'en': 'en',    // Anglais
			'fr': 'fr'     // Français
		};
		
		return mapping[langCode] || langCode;
	}

	// Fonction pour mapper le code Google Translate vers notre code
	function getOurLanguageCode(googleCode: string): string {
		// Gérer toutes les variantes de chinois possibles
		if (googleCode.includes('zh') || googleCode.includes('chinese') || googleCode.includes('中文')) {
			return 'zh';
		}
		
		const reverseMapping: { [key: string]: string } = {
			'zh-cn': 'zh',
			'zh-tw': 'zh',
			'zh-Hans': 'zh',
			'zh-Hant': 'zh',
			'zh': 'zh'
		};
		
		return reverseMapping[googleCode] || googleCode;
	}

	// Fonction pour appliquer la traduction
	function applyTranslation(langCode: string) {
		const translateSelect = document.querySelector('.goog-te-combo') as HTMLSelectElement;
		if (translateSelect) {
			const googleCode = getGoogleTranslateCode(langCode);
			
			// Essayer de trouver l'option exacte dans le select
			let foundOption = false;
			for (let i = 0; i < translateSelect.options.length; i++) {
				const option = translateSelect.options[i];
				if (option.value === googleCode || option.value.includes(langCode)) {
					translateSelect.value = option.value;
					foundOption = true;
					break;
				}
			}
			
			// Si pas trouvé, essayer les variantes chinoises
			if (!foundOption && langCode === 'zh') {
				const chineseVariants = ['zh-cn', 'zh-tw', 'zh-Hans', 'zh-Hant', 'chinese'];
				for (const variant of chineseVariants) {
					for (let i = 0; i < translateSelect.options.length; i++) {
						const option = translateSelect.options[i];
						if (option.value === variant || option.text.toLowerCase().includes('chinese') || option.text.includes('中文')) {
							translateSelect.value = option.value;
							foundOption = true;
							break;
						}
					}
					if (foundOption) break;
				}
			}
			
			if (!foundOption) {
				return;
			}
			
			translateSelect.dispatchEvent(new Event('change', { bubbles: true }));
		}
	}

	// Fonction pour détecter la langue actuellement active et mettre à jour l'icône
	function detectAndUpdateCurrentLanguage() {
		// Ignorer si on est en plein changement manuel
		if (isManualChange) {
			return;
		}

		const translateSelect = document.querySelector('.goog-te-combo') as HTMLSelectElement;
		
		if (translateSelect && translateSelect.value !== undefined) {
			const selectedValue = translateSelect.value;
			
			let newLang = currentLang; // Garder la valeur actuelle par défaut
			
			// Si c'est vide ou 'auto', c'est la langue par défaut
			if (!selectedValue || selectedValue === '' || selectedValue === 'auto') {
				newLang = defaultLanguage;
			} else {
				// D'abord essayer la conversion inverse pour les codes spéciaux
				const mappedCode = getOurLanguageCode(selectedValue);
				const matchedLanguage = supportedLanguages.find((lang: { code: string }) => lang.code === mappedCode);
				
				if (matchedLanguage) {
					newLang = matchedLanguage.code;
				} else {
					// Fallback : chercher par inclusion comme avant
					const fallbackLanguage = supportedLanguages.find((lang: { code: string }) => 
						selectedValue === lang.code || selectedValue.includes(lang.code)
					);
					
					if (fallbackLanguage) {
						newLang = fallbackLanguage.code;
					}
				}
			}
			
			// Mettre à jour seulement si c'est vraiment différent ET qu'on n'est pas en changement manuel
			if (currentLang !== newLang && !isManualChange) {
				currentLang = newLang;
				updateTrigger++; // Forcer la mise à jour de Svelte
				forceRerender++; // Force le re-rendu
				
				// IMPORTANT: Ne sauvegarder que les langues autres que la langue par défaut (si persistance activée)
				if (persistence.enabled) {
					if (newLang !== defaultLanguage) {
						localStorage.setItem(persistence.storageKey, newLang);
					} else {
						// Si on détecte la langue par défaut, s'assurer que localStorage est propre
						localStorage.removeItem(persistence.storageKey);
					}
				}
			}
		}
	}

	// Fonction pour surveiller les changements de Google Translate
	function setupLanguageDetection() {
		const translateSelect = document.querySelector('.goog-te-combo') as HTMLSelectElement;
		
		if (translateSelect) {
			// Écouter les changements sur le select de Google Translate
			translateSelect.addEventListener('change', () => {
				// Délai configurable pour laisser le système de blocage manuel s'activer
				setTimeout(() => {
					if (!isManualChange) {
						detectAndUpdateCurrentLanguage();
					}
				}, googleTranslate.changeEventDelay);
			});
			
			// Surveiller avec un observateur pour les changements
			const observer = new MutationObserver(() => {
				// Vérifier si c'est un changement manuel avant de déclencher la détection
				if (!isManualChange) {
					detectAndUpdateCurrentLanguage();
				}
			});
			
			observer.observe(translateSelect, {
				attributes: true,
				attributeFilter: ['value'],
				childList: false,
				subtree: false
			});
		}
	}


</script>

<!-- Composant de sélection de langue -->
<DropdownMenu>
	<DropdownMenuTrigger asChild let:builder>
		<Tooltip>
			<TooltipTrigger asChild let:builder={tooltipBuilder}>
				<!-- Forcer la destruction/recréation complète du bouton avec une clé unique -->
				{#key `${currentLang}-${forceRerender}`}
					<Button 
						builders={[builder, tooltipBuilder]} 
						variant="ghost" 
						size="icon"
						class="text-xl"
					>
						<div class="flex items-center justify-center">
							<span class={ui.buttonFlagSize}>{currentLanguage?.flag || supportedLanguages[0]?.flag}</span>
						</div>
					</Button>
				{/key}
			</TooltipTrigger>
			<TooltipContent side="bottom">
				{ui.tooltipText}
			</TooltipContent>
		</Tooltip>
	</DropdownMenuTrigger>
	<DropdownMenuContent align="end" class={ui.dropdownWidth}>
		{#each supportedLanguages as language}
			<DropdownMenuItem 
				on:click={() => changeLanguage(language.code)}
				class="flex items-center gap-3 cursor-pointer {currentLang === language.code ? 'bg-accent' : ''}"
			>
				<span class={ui.flagSize}>{language.flag}</span>
				<span class="flex-1">{language.name}</span>
				{#if currentLang === language.code}
					<Icon icon="i-carbon-checkmark" className="text-sm text-primary" />
				{/if}
			</DropdownMenuItem>
		{/each}
	</DropdownMenuContent>
</DropdownMenu>

<style>
	/* Styles pour cacher certains éléments Google Translate indésirables */
	:global(#goog-gt-tt) {
		display: none !important;
	}
	
	:global(.VIpgJd-ZVi9od-ORHb-OEVmcd) {
		display: none !important;
	}
	
	:global(body) {
		top: 0px !important;
	}
	
	:global(.goog-te-banner-frame) {
		display: none !important;
	}
	
	:global(.goog-logo-link) {
		display: none !important;
	}
	
	:global(#goog-gt-tt, .goog-te-balloon-frame) {
		display: none !important;
	}
	
	:global(.goog-text-highlight) {
		background: none !important;
		box-shadow: none !important;
	}
</style>