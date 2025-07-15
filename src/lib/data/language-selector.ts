// Configuration du sélecteur de langue

import type { LanguageSelectorConfig } from '$lib/types/language-selector';

// Configuration unique - chaque langue peut avoir son propre type d'affichage
const languageConfig: LanguageSelectorConfig = {
	defaultLanguage: 'fr',
	pageLanguage: 'fr',

	supportedLanguages: [
		{ code: 'fr', name: 'Français', flag: { type: 'icon', value: 'i-circle-flags-fr' } },
		{ code: 'en', name: 'English', flag: { type: 'icon', value: 'i-circle-flags-us' } },
		{ code: 'es', name: 'Español', flag: { type: 'icon', value: 'i-circle-flags-es' } },
		{ code: 'de', name: 'Deutsch', flag: { type: 'icon', value: 'i-circle-flags-de' } },
		{ code: 'it', name: 'Italiano', flag: { type: 'icon', value: 'i-circle-flags-it' } },
		{ code: 'pt', name: 'Português', flag: { type: 'icon', value: 'i-circle-flags-pt' } },
		{ code: 'ru', name: 'Русский', flag: { type: 'icon', value: 'i-circle-flags-ru' } },
		{ code: 'ja', name: '日本語', flag: { type: 'icon', value: 'i-circle-flags-jp' } },
		{ code: 'ko', name: '한국어', flag: { type: 'icon', value: 'i-circle-flags-kr' } },
		{ code: 'zh', name: '中文', flag: { type: 'icon', value: 'i-circle-flags-cn' } },
		{ code: 'ar', name: 'العربية', flag: { type: 'icon', value: 'i-circle-flags-sa' } }

	],

	persistence: {
		enabled: true,
		storageKey: 'selectedLanguage',
		detectBrowserLanguage: true
	},

	googleTranslate: {
		initializationDelay: 3000,
		translationDelay: 3000,
		manualChangeDelay: 3000,
		changeEventDelay: 200,
		uiUpdateDelay: 50
	},

	ui: {
		tooltipText: 'Changer la langue',
		dropdownWidth: 'w-48',
		flagSize: 'text-lg', // Pour emoji et icon
		buttonFlagSize: 'text-base' // Pour emoji et icon
		// Pour les images, utilise 'w-5 h-5' dans flagSize et 'w-4 h-4' dans buttonFlagSize
	}
};

// Fonction pour merger la configuration personnalisée avec la configuration par défaut
export function createLanguageSelectorConfig(customConfig?: Partial<LanguageSelectorConfig>): LanguageSelectorConfig {
	if (!customConfig) {
		return languageConfig;
	}
	
	return {
		defaultLanguage: customConfig.defaultLanguage ?? languageConfig.defaultLanguage,
		pageLanguage: customConfig.pageLanguage ?? languageConfig.pageLanguage,
		supportedLanguages: customConfig.supportedLanguages ?? languageConfig.supportedLanguages,
		
		persistence: {
			...languageConfig.persistence,
			...customConfig.persistence
		},
		
		googleTranslate: {
			...languageConfig.googleTranslate,
			...customConfig.googleTranslate
		},
		
		ui: {
			...languageConfig.ui,
			...customConfig.ui
		}
	};
}

// Export de la configuration par défaut
export const LanguageSelectorData = languageConfig;

export default LanguageSelectorData;
