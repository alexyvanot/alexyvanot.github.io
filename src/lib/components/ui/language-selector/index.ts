export { default as LanguageSelector } from './language-selector.svelte';
export { default as FlagDisplayComponent } from './flag-display.svelte';

// Export des utilitaires de configuration
export { 
	LanguageSelectorData,
	createLanguageSelectorConfig
} from '$lib/data/language-selector';

// Export des types
export type { 
	LanguageSelectorConfig, 
	Language, 
	FlagDisplay 
} from '$lib/types/language-selector';
