// Configuration du sélecteur de langue

import type { LanguageSelectorConfig } from '$lib/types/language-selector';

// Configuration par défaut
const defaultConfig: LanguageSelectorConfig = {
	defaultLanguage: 'fr',
	pageLanguage: 'fr',
	
	supportedLanguages: [
		{ code: 'fr', name: 'Français', flag: '🇫🇷' },
		{ code: 'en', name: 'English', flag: '🇺🇸' },
		{ code: 'es', name: 'Español', flag: '🇪🇸' },
		{ code: 'de', name: 'Deutsch', flag: '🇩🇪' },
		{ code: 'it', name: 'Italiano', flag: '🇮🇹' },
		{ code: 'pt', name: 'Português', flag: '🇵🇹' },
		{ code: 'ru', name: 'Русский', flag: '🇷🇺' },
		{ code: 'ja', name: '日本語', flag: '🇯🇵' },
		{ code: 'ko', name: '한국어', flag: '🇰🇷' },
		{ code: 'zh', name: '中文', flag: '🇨🇳' },
		{ code: 'ar', name: 'العربية', flag: '🇸🇦' }
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
		flagSize: 'text-lg',
		buttonFlagSize: 'text-base'
	}
};

// Fonction pour merger la configuration personnalisée avec la configuration par défaut
export function createLanguageSelectorConfig(customConfig?: Partial<LanguageSelectorConfig>): LanguageSelectorConfig {
	if (!customConfig) {
		return defaultConfig;
	}
	
	return {
		defaultLanguage: customConfig.defaultLanguage ?? defaultConfig.defaultLanguage,
		pageLanguage: customConfig.pageLanguage ?? defaultConfig.pageLanguage,
		supportedLanguages: customConfig.supportedLanguages ?? defaultConfig.supportedLanguages,
		
		persistence: {
			...defaultConfig.persistence,
			...customConfig.persistence
		},
		
		googleTranslate: {
			...defaultConfig.googleTranslate,
			...customConfig.googleTranslate
		},
		
		ui: {
			...defaultConfig.ui,
			...customConfig.ui
		}
	};
}

// Export de la configuration par défaut
export const LanguageSelectorData = defaultConfig;

export default LanguageSelectorData;
