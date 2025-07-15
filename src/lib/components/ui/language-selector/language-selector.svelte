<script lang="ts">
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';
	import Button from '$lib/components/ui/button/button.svelte';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import { Tooltip, TooltipTrigger } from '$lib/components/ui/tooltip';
	import TooltipContent from '$lib/components/ui/tooltip/tooltip-content.svelte';
	import FlagDisplay from './flag-display.svelte';
	import { onMount } from 'svelte';
	import { replaceState } from '$app/navigation';
	import type { LanguageSelectorConfig } from '$lib/types/language-selector';
	import { createLanguageSelectorConfig } from '$lib/data/language-selector';

	// Props pour personnaliser la configuration
	interface Props {
		config?: Partial<LanguageSelectorConfig>;
	}

	let { config: customConfig }: Props = $props();

	// Fusionner la configuration personnalisée avec la configuration par défaut
	const config = createLanguageSelectorConfig(customConfig);
	const { supportedLanguages, defaultLanguage, pageLanguage, persistence, googleTranslate, ui } =
		config;

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
		const lang =
			supportedLanguages.find((lang: { code: string }) => lang.code === currentLang) ||
			supportedLanguages[0];
		return lang;
	});

	// Fonction de détection automatique de la langue
	function detectBrowserLanguage(): string {
		if (!config.autoDetection.enabled || config.defaultLanguage !== 'auto') {
			return config.defaultLanguage;
		}

		const supportedCodes = config.supportedLanguages.map(lang => lang.code);
		let detectedLanguage = config.autoDetection.fallbackLanguage;

		if (config.autoDetection.useNavigatorLanguages) {
			// Utilise navigator.languages pour avoir toutes les préférences
			const browserLanguages = navigator.languages || [navigator.language];
			
			for (const lang of browserLanguages) {
				const langCode = lang.split('-')[0]; // 'fr-FR' -> 'fr'
				if (supportedCodes.includes(langCode)) {
					detectedLanguage = langCode;
					break;
				}
			}
		}

		// Si détection par timezone activée et pas encore trouvé
		if (config.autoDetection.useTimezone && 
			(detectedLanguage === config.autoDetection.fallbackLanguage || 
			 config.autoDetection.priority === 'timezone' || 
			 config.autoDetection.priority === 'mixed')) {
			
			try {
				const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
				const timezoneToLanguage: Record<string, string> = {
					// Europe
					'Europe/Paris': 'fr',
					'Europe/London': 'en',
					'Europe/Berlin': 'de',
					'Europe/Madrid': 'es',
					'Europe/Rome': 'it',
					'Europe/Amsterdam': 'nl',
					'Europe/Brussels': 'nl',
					'Europe/Lisbon': 'pt',
					'Europe/Warsaw': 'pl',
					'Europe/Prague': 'cs',
					'Europe/Stockholm': 'sv',
					'Europe/Copenhagen': 'da',
					'Europe/Oslo': 'no',
					'Europe/Helsinki': 'fi',
					'Europe/Vienna': 'de',
					'Europe/Zurich': 'de',
					
					// Amériques
					'America/New_York': 'en',
					'America/Los_Angeles': 'en',
					'America/Chicago': 'en',
					'America/Toronto': 'en',
					'America/Montreal': 'fr',
					'America/Mexico_City': 'es',
					'America/Sao_Paulo': 'pt',
					'America/Buenos_Aires': 'es',
					
					// Asie
					'Asia/Tokyo': 'ja',
					'Asia/Shanghai': 'zh',
					'Asia/Seoul': 'ko',
					'Asia/Mumbai': 'en',
					'Asia/Bangkok': 'th',
					'Asia/Manila': 'en',
					
					// Autres
					'Australia/Sydney': 'en',
					'Africa/Cairo': 'ar',
					'Africa/Johannesburg': 'en'
				};

				const timezoneLanguage = timezoneToLanguage[timezone];
				if (timezoneLanguage && supportedCodes.includes(timezoneLanguage)) {
					if (config.autoDetection.priority === 'timezone') {
						detectedLanguage = timezoneLanguage;
					} else if (config.autoDetection.priority === 'mixed' && 
							   detectedLanguage === config.autoDetection.fallbackLanguage) {
						detectedLanguage = timezoneLanguage;
					}
				}
			} catch (error) {
				console.warn('Erreur lors de la détection du fuseau horaire:', error);
			}
		}

		return detectedLanguage;
	}

	onMount(() => {
		// Vérifier d'abord si on a un paramètre de traduction dans l'URL
		const urlParams = new URLSearchParams(window.location.search);
		const googtrans = urlParams.get('googtrans');
		
		if (googtrans) {
			// Si on a un paramètre googtrans, extraire la langue cible
			const match = googtrans.match(/\/[^\/]+\/([^\/]+)/);
			if (match) {
				const urlLang = match[1];
				currentLang = urlLang;
				
				// Nettoyer l'URL (enlever le paramètre googtrans)
				const newUrl = new URL(window.location.href);
				newUrl.searchParams.delete('googtrans');
				replaceState(newUrl.pathname + newUrl.search, {});
				
				// IMPORTANT: Initialiser Google Translate pour que la traduction fonctionne !
				initializeGoogleTranslate(() => {
					// Après l'initialisation, forcer la traduction
					setTimeout(() => {
						applyTranslation(urlLang);
					}, 500);
				});
				
				// Sauvegarder la langue détectée - TOUJOURS marquer comme choix manuel si vient d'une URL googtrans
				if (persistence.enabled && urlLang !== pageLanguage) {
					localStorage.setItem(persistence.storageKey, urlLang);
					localStorage.setItem(persistence.storageKey + '_manual', 'true');
				}
				
				return;
			}
		}

		// Vérifier si on a un choix manuel précédent AVANT toute autre logique
		const isManualChoice = persistence.enabled && localStorage.getItem(persistence.storageKey + '_manual') === 'true';
		
		// Charger la langue sauvegardée ou détecter celle du navigateur (selon la configuration)
		if (persistence.enabled) {
			const savedLang = localStorage.getItem(persistence.storageKey);

			if (
				savedLang &&
				supportedLanguages.find((lang: { code: string }) => lang.code === savedLang)
			) {
				currentLang = savedLang;
				// Si langue sauvegardée != langue par défaut, rediriger avec googtrans
				if (savedLang !== pageLanguage) {
					forceTranslationByReload(savedLang);
					return;
				}
			} else if (defaultLanguage === 'auto' && !isManualChoice) {
				// Mode détection automatique UNIQUEMENT si pas de choix manuel précédent
				const detectedLang = detectBrowserLanguage();
				currentLang = detectedLang;
				
				// Si la langue détectée n'est pas la langue de la page (source), rediriger
				if (detectedLang !== pageLanguage) {
					forceTranslationByReload(detectedLang);
					return;
				} else {
					localStorage.removeItem(persistence.storageKey);
				}
			} else if (isManualChoice) {
				// Si c'est un choix manuel de rester en français, ne rien faire de plus
				currentLang = pageLanguage;
			} else if (persistence.detectBrowserLanguage && !isManualChoice) {
				// Pas de langue sauvegardée, détecter celle du navigateur (ancien système) UNIQUEMENT si pas de choix manuel
				const browserLang = navigator.language.split('-')[0];
				const supportedLang = supportedLanguages.find(
					(lang: { code: string }) => lang.code === browserLang
				);
				if (supportedLang && supportedLang.code !== pageLanguage) {
					currentLang = supportedLang.code;
					forceTranslationByReload(supportedLang.code);
					return;
				} else {
					currentLang = defaultLanguage;
					localStorage.removeItem(persistence.storageKey);
					localStorage.removeItem(persistence.storageKey + '_manual');
				}
			} else {
				// Pas de détection du navigateur, utiliser la langue par défaut
				currentLang = defaultLanguage;
				localStorage.removeItem(persistence.storageKey);
				localStorage.removeItem(persistence.storageKey + '_manual');
			}
		} else {
			// Persistance désactivée, toujours utiliser la langue par défaut
			currentLang = defaultLanguage;
		}

		// Forcer la mise à jour initiale
		updateTrigger++;
		forceRerender++;

		// Si la langue actuelle n'est pas la langue par défaut, neutraliser les artefacts de Google Translate
		if (currentLang !== defaultLanguage) {
			const interval = setInterval(() => {
				neutralizeGoogleTranslateArtifacts();
			}, 1500);
			return () => clearInterval(interval);
		}
	});

	// Fonction pour neutraliser les artefacts de Google Translate
	function neutralizeGoogleTranslateArtifacts() {
		const elements = document.querySelectorAll(
			'[class*="VIpgJd"], .goog-text-highlight, font, span'
		);
		elements.forEach((el) => {
			const className = el.className && el.className.toString ? el.className.toString() : '';
			if (
				(el as HTMLElement).dataset?.gtCleaned === 'true' ||
				!(
					className.includes('VIpgJd') ||
					className.includes('goog-text-highlight') ||
					el.tagName.toLowerCase() === 'font'
				)
			)
				return;

			el.removeAttribute('style');
			Object.assign((el as HTMLElement).style, {
				all: 'unset',
				background: 'transparent',
				boxShadow: 'none',
				color: 'inherit',
				fontSize: 'inherit',
				fontWeight: 'inherit',
				lineHeight: 'inherit',
				padding: '0',
				margin: '0',
				border: 'none',
				textShadow: 'none'
			});
			el.setAttribute('data-gt-cleaned', 'true');
		});

		// Supprimer la barre bleue du bas
		const bottomBar = document.querySelector('.VIpgJd-ZVi9od-aZ2wEe-OiiCO');
		if (bottomBar) (bottomBar as HTMLElement).style.display = 'none';

		// Supprimer les iframes de Google Translate
		const gtIframes = document.querySelectorAll('iframe');
		gtIframes.forEach((iframe) => {
			const src = iframe.getAttribute('src') || '';
			const className = iframe.className?.toString?.() || '';
			if (
				className.includes('VIpgJd') ||
				src.includes('translate.googleapis.com') ||
				src.includes('/_/Translate') ||
				src.includes('translate-pa')
			) {
				iframe.remove();
			}
		});

		// Supprimer le lien Google Traduction
		const gLink = document.querySelector('a.VIpgJd-ZVi9od-l4eHX-hSRGPd');
		if (gLink) gLink.remove();
	}

	function initializeGoogleTranslate(callback?: () => void) {
		// Créer l'élément Google Translate s'il n'existe pas
		if (!document.getElementById('google_translate_element')) {
			const translateDiv = document.createElement('div');
			translateDiv.id = 'google_translate_element';
			document.body.appendChild(translateDiv);
		}

		// Configuration Google Translate
		(window as any).googleTranslateElementInit = function () {
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
					
					// Exécuter le callback s'il existe
					if (callback) {
						callback();
					}
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
		// Marquer comme changement manuel pour empêcher la détection auto
		isManualChange = true;
		
		// Mettre à jour immédiatement l'état pour l'icône
		currentLang = langCode;
		updateTrigger++;
		forceRerender++;

		if (langCode === pageLanguage) {
			// Pour la langue par défaut, marquer comme choix manuel et supprimer la langue sauvegardée
			if (persistence.enabled) {
				localStorage.removeItem(persistence.storageKey);
				// IMPORTANT: Marquer comme choix manuel pour empêcher la détection auto future
				localStorage.setItem(persistence.storageKey + '_manual', 'true');
			}
			// Recharger pour revenir au français original (sans traduction)
			window.location.reload();
			return;
		}

		// Pour les autres langues, sauvegarder et rediriger avec googtrans
		if (persistence.enabled) {
			localStorage.setItem(persistence.storageKey, langCode);
			// Marquer que c'est un choix manuel pour empêcher la détection auto future
			localStorage.setItem(persistence.storageKey + '_manual', 'true');
		}
		
		forceTranslationByReload(langCode);
	}

	// Fonction pour mapper notre code vers le code Google Translate
	function getGoogleTranslateCode(langCode: string): string {
		const mapping: { [key: string]: string } = {
			zh: 'zh', // Essayons d'abord zh simple
			pt: 'pt', // Portugais
			ar: 'ar', // Arabe
			ko: 'ko', // Coréen
			ja: 'ja', // Japonais
			ru: 'ru', // Russe
			de: 'de', // Allemand
			es: 'es', // Espagnol
			it: 'it', // Italien
			en: 'en', // Anglais
			fr: 'fr' // Français
		};

		return mapping[langCode] || langCode;
	}

	// Fonction pour mapper le code Google Translate vers notre code
	function getOurLanguageCode(googleCode: string): string {
		// Gérer toutes les variantes de chinois possibles
		if (
			googleCode.includes('zh') ||
			googleCode.includes('chinese') ||
			googleCode.includes('中文')
		) {
			return 'zh';
		}

		const reverseMapping: { [key: string]: string } = {
			'zh-cn': 'zh',
			'zh-tw': 'zh',
			'zh-Hans': 'zh',
			'zh-Hant': 'zh',
			zh: 'zh'
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
			let optionValue = '';
			for (let i = 0; i < translateSelect.options.length; i++) {
				const option = translateSelect.options[i];
				if (option.value === googleCode || option.value.includes(langCode)) {
					optionValue = option.value;
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
						if (
							option.value === variant ||
							option.text.toLowerCase().includes('chinese') ||
							option.text.includes('中文')
						) {
							optionValue = option.value;
							foundOption = true;
							break;
						}
					}
					if (foundOption) break;
				}
			}

			if (!foundOption) {
				return false;
			}
			
			// Méthode 1: Utiliser l'API interne de Google Translate
			try {
				// Accéder à l'instance Google Translate
				const googleTranslateInstance = (window as any).google?.translate?.TranslateElement?.getInstance?.();
				if (googleTranslateInstance) {
					googleTranslateInstance.setLanguage(optionValue);
					return true;
				} else {
					throw new Error('Instance Google Translate non trouvée');
				}
			} catch (error) {
				// Méthode 2: Manipulation directe du select
				translateSelect.value = optionValue;
				
				// Créer et déclencher l'événement change de manière plus agressive
				const event = new Event('change', { 
					bubbles: true, 
					cancelable: true,
					composed: true 
				});
				
				// Déclencher immédiatement
				translateSelect.dispatchEvent(event);
				
				// Et aussi avec onchange si disponible
				if (translateSelect.onchange) {
					translateSelect.onchange(event as any);
				}
				
				return true;
			}
		}
		
		return false;
	}

	// Fonction pour forcer la traduction avec ou sans rechargement
	function forceTranslationByReload(langCode: string) {
		// D'abord essayer la traduction directe sans rechargement
		if (isTranslateReady) {
			applyTranslation(langCode);
			
			// Vérifier après un délai si la traduction a fonctionné
			setTimeout(() => {
				const translateSelect = document.querySelector('.goog-te-combo') as HTMLSelectElement;
				if (translateSelect) {
					const currentValue = translateSelect.value;
					const expectedCode = getGoogleTranslateCode(langCode);
					
					// Si la traduction directe a échoué, utiliser l'URL
					if (!currentValue || (!currentValue.includes(expectedCode) && currentValue !== expectedCode)) {
						forceTranslationByUrl(langCode);
					}
				} else {
					// Pas de Google Translate initialisé, utiliser l'URL
					forceTranslationByUrl(langCode);
				}
			}, 1000);
		} else {
			// Google Translate pas encore prêt, utiliser l'URL
			forceTranslationByUrl(langCode);
		}
	}
	
	// Fonction pour forcer la traduction avec URL (rechargement)
	function forceTranslationByUrl(langCode: string) {
		// Construire l'URL avec le paramètre googtrans
		const url = new URL(window.location.href);
		// Nettoyer les anciens paramètres
		url.searchParams.delete('googtrans');
		
		// Ajouter le paramètre de traduction
		url.searchParams.set('googtrans', `/${pageLanguage}/${langCode}`);
		
		// Rediriger
		window.location.href = url.toString();
	}

	// Fonction pour détecter la langue actuellement active et mettre à jour l'icône
	function detectAndUpdateCurrentLanguage() {
		// Ignorer si on est en plein changement manuel
		if (isManualChange) {
			return;
		}
		
		// Ignorer si un choix manuel a été fait précédemment
		const isManualChoice = persistence.enabled && localStorage.getItem(persistence.storageKey + '_manual') === 'true';
		if (isManualChoice) {
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
				const matchedLanguage = supportedLanguages.find(
					(lang: { code: string }) => lang.code === mappedCode
				);

				if (matchedLanguage) {
					newLang = matchedLanguage.code;
				} else {
					// Fallback : chercher par inclusion comme avant
					const fallbackLanguage = supportedLanguages.find(
						(lang: { code: string }) =>
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
					<Button builders={[builder, tooltipBuilder]} variant="ghost" size="icon" class="text-xl">
						<div class="flex items-center justify-center">
							<FlagDisplay
								flag={currentLanguage?.flag || supportedLanguages[0]?.flag}
								class={ui.buttonFlagSize}
							/>
						</div>
					</Button>
				{/key}
			</TooltipTrigger>
			<TooltipContent side="bottom" translate="no">
				{ui.tooltipText}
			</TooltipContent>
		</Tooltip>
	</DropdownMenuTrigger>
	<DropdownMenuContent align="end" class={ui.dropdownWidth} translate="no">
		{#each supportedLanguages as language}
			<DropdownMenuItem
				on:click={() => changeLanguage(language.code)}
				class="flex cursor-pointer items-center gap-3 {currentLang === language.code
					? 'bg-accent'
					: ''}"
				translate="no"
			>
				<FlagDisplay flag={language.flag} class={ui.flagSize} />
				<span class="flex-1" translate="no">{language.name}</span>
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

	/* Exclure le sélecteur de langue de la traduction */
	:global([translate='no']) {
		font-family: inherit !important;
		font-size: inherit !important;
		color: inherit !important;
	}

	:global(.goog-te-combo) {
		display: none !important;
	}

    :global(a.VIpgJd-ZVi9od-l4eHX-hSRGPd) {
	    display: none !important;
	    opacity: 0 !important;
	    pointer-events: none !important;
	    position: absolute !important;
	    top: -9999px !important;
	    left: -9999px !important;
	    width: 0 !important;
	    height: 0 !important;
	    overflow: hidden !important;
    }

</style>
