// Types pour le sélecteur de langue

export type FlagDisplay = {
	type: 'emoji';
	value: string;
} | {
	type: 'icon';
	value: string; // Nom de l'icône (ex: 'i-flag-fr')
} | {
	type: 'image';
	value: string; // URL de l'image
	alt?: string; // Texte alternatif pour l'image
};

export interface Language {
	code: string;
	name: string;
	flag: FlagDisplay;
}

export interface LanguageSelectorConfig {
	// Langue par défaut de la page ('auto' pour détection automatique)
	defaultLanguage: string;
	
	// Page language pour Google Translate (langue source)
	pageLanguage: string;
	
	// Liste des langues supportées
	supportedLanguages: Language[];
	
	// Configuration de la persistance
	persistence: {
		// Si true, se souvient de la langue choisie par l'utilisateur
		enabled: boolean;
		
		// Clé utilisée dans localStorage
		storageKey: string;
		
		// Si true, détecte automatiquement la langue du navigateur au premier chargement
		detectBrowserLanguage: boolean;
	};

	// Configuration de la détection automatique
	autoDetection: {
		// Active la détection automatique quand defaultLanguage = 'auto'
		enabled: boolean;
		
		// Langue de fallback si détection échoue
		fallbackLanguage: string;
		
		// Utilise navigator.languages pour avoir toutes les langues préférées
		useNavigatorLanguages: boolean;
		
		// Utilise le fuseau horaire comme indice géographique
		useTimezone: boolean;
		
		// Priorité de détection : 'browser' | 'timezone' | 'mixed'
		priority: 'browser' | 'timezone' | 'mixed';
	};
	
	// Configuration de Google Translate
	googleTranslate: {
		// Délai avant d'initialiser Google Translate (ms)
		initializationDelay: number;
		
		// Délai avant d'appliquer une traduction (ms)
		translationDelay: number;
		
		// Délai avant de réactiver la détection automatique après un changement manuel (ms)
		manualChangeDelay: number;
		
		// Délai pour les événements de changement de langue (ms)
		changeEventDelay: number;
		
		// Délai pour forcer la mise à jour de l'interface (ms)
		uiUpdateDelay: number;
	};
	
	// Configuration de l'interface
	ui: {
		// Texte du tooltip
		tooltipText: string;
		
		// Largeur du menu déroulant (classe CSS)
		dropdownWidth: string;
		
		// Taille des drapeaux dans le menu
		flagSize: string;
		
		// Taille du drapeau dans le bouton
		buttonFlagSize: string;
	};
}
