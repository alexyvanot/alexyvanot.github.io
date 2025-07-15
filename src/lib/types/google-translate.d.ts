// Types pour Google Translate
declare global {
	interface Window {
		google?: {
			translate: {
				TranslateElement: {
					new (options: Record<string, unknown>, elementId: string): TranslateElementInstance;
					InlineLayout: {
						SIMPLE: string;
					};
				};
			};
		};
		googleTranslateElementInit?: () => void;
	}
	
	type TranslateElementInstance = object;
}

export {};
