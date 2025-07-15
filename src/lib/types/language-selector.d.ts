// Types pour le sélecteur de langue

export interface Language {
	code: string;
	name: string;
	flag: string;
}

export interface LanguageSelectorConfig {
	// Langue par défaut de la page
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
