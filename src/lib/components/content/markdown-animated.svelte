<script lang="ts">
	import { gfmHeadingId } from 'marked-gfm-heading-id';
	import { mangle } from 'marked-mangle';
	import Prism from 'prismjs';
	import createSanitizer from 'dompurify';
	import { marked } from 'marked';
	// Importer tous les langages nécessaires pour la coloration syntaxique
	import 'prismjs/components/prism-markup';
	import 'prismjs/components/prism-css';
	import 'prismjs/components/prism-javascript';
	import 'prismjs/components/prism-typescript';
	import 'prismjs/components/prism-python';
	import 'prismjs/components/prism-java';
	import 'prismjs/components/prism-bash';
	import 'prismjs/components/prism-yaml';
	import 'prismjs/components/prism-json';
	import 'prismjs/components/prism-sql';
	import 'prismjs/components/prism-dart';
	import 'prismjs/components/prism-csharp';
	import 'prismjs/components/prism-c';
	import 'prismjs/components/prism-cpp';
	import 'prismjs/components/prism-docker';
	import 'prismjs/components/prism-go';
	import 'prismjs/components/prism-kotlin';
	import 'prismjs/components/prism-swift';
	import 'prismjs/components/prism-rust';
	import 'prismjs/components/prism-jsx';
	import 'prismjs/components/prism-tsx';
	import 'prismjs/themes/prism-tomorrow.css';
	import { onMount, tick } from 'svelte';
	import { browser } from '$app/environment';
	import { mode } from 'mode-watcher';

	declare global {
		interface Window {
			Vara: any;
		}
	}

	let container: HTMLDivElement;

	let { content }: { content: string } = $props();

	let isInitialized = false;
	let sanitizer: any;
	let varaInitialized = false;
	let currentTheme = $state<string | undefined>(undefined);

	// Couleur selon le thème
	let handwrittenColor = $derived($mode === 'dark' ? '#ffffff' : '#1a1a1a');

	/**
	 * Parse la syntaxe custom:
	 * - ::handwritten[texte]{options} - Texte animé simple
	 * - :::profile-card - Début d'une carte profil (photo + texte côte à côte)
	 * - ::: - Fin du bloc
	 */
	function preprocessContent(md: string): string {
		// Pattern pour les blocs profile-card
		// :::profile-card
		// ![alt](url)
		// ::handwritten[texte]{options}
		// :::
		let result = md.replace(
			/:::profile-card\s*\n([\s\S]*?)\n:::/g,
			(match, innerContent) => {
				// Parser les images markdown dans le bloc
				let parsedInner = innerContent.replace(
					/!\[([^\]]*)\]\(([^)]+)\)/g,
					'<img src="$2" alt="$1" />'
				);
				return `<div class="profile-card">${parsedInner}</div>`;
			}
		);

		// Pattern: ::handwritten[Texte ici]{fontSize=36 duration=2000}
		const handwrittenPattern = /::handwritten\[([^\]]+)\](?:\{([^}]*)\})?/g;
		
		result = result.replace(handwrittenPattern, (match, text, optionsStr) => {
			const options: Record<string, string> = {};
			if (optionsStr) {
				optionsStr.split(/\s+/).forEach((opt: string) => {
					const [key, value] = opt.split('=');
					if (key && value) options[key] = value;
				});
			}
			
			const fontSize = options.fontSize || '32';
			const duration = options.duration || '2000';
			const strokeWidth = options.strokeWidth || '1.2';
			const height = options.height || '60';
			
			// Générer un ID unique
			const id = `handwritten-${Math.random().toString(36).substr(2, 9)}`;
			
			return `<div class="handwritten-wrapper" data-handwritten="${encodeURIComponent(text)}" data-fontsize="${fontSize}" data-duration="${duration}" data-strokewidth="${strokeWidth}" data-height="${height}" id="${id}" style="min-height: ${height}px;"></div>`;
		});

		return result;
	}

	/**
	 * Charger Vara.js via script tag
	 */
	function loadVaraScript(): Promise<void> {
		return new Promise((resolve, reject) => {
			if (typeof window.Vara !== 'undefined') {
				resolve();
				return;
			}
			
			const existingScript = document.querySelector('script[src="/scripts/vara.min.js"]');
			if (existingScript) {
				const checkInterval = setInterval(() => {
					if (typeof window.Vara !== 'undefined') {
						clearInterval(checkInterval);
						resolve();
					}
				}, 50);
				setTimeout(() => {
					clearInterval(checkInterval);
					reject(new Error('Vara load timeout'));
				}, 5000);
				return;
			}
			
			const script = document.createElement('script');
			script.src = '/scripts/vara.min.js';
			script.onload = () => {
				setTimeout(resolve, 100); // Petit délai pour s'assurer que Vara est prêt
			};
			script.onerror = (error) => reject(error);
			document.body.appendChild(script);
		});
	}

	async function initializeVara(color: string) {
		if (!browser || !container || varaInitialized) return;

		const elements = container.querySelectorAll('[data-handwritten]');
		if (elements.length === 0) return;

		try {
			await loadVaraScript();
		} catch (e) {
			console.error('Failed to load Vara.js:', e);
			// Fallback pour tous les éléments
			elements.forEach((el) => {
				const text = decodeURIComponent(el.getAttribute('data-handwritten') || '');
				const fontSize = el.getAttribute('data-fontsize') || '32';
				el.innerHTML = `<span style="font-size: ${fontSize}px; font-family: 'Pacifico', cursive;">${text}</span>`;
			});
			return;
		}

		elements.forEach((el) => {
			// Vider l'élément avant d'initialiser
			el.innerHTML = '';
			
			const text = decodeURIComponent(el.getAttribute('data-handwritten') || '');
			const fontSize = parseInt(el.getAttribute('data-fontsize') || '32');
			const duration = parseInt(el.getAttribute('data-duration') || '2000');
			const strokeWidth = parseFloat(el.getAttribute('data-strokewidth') || '1.2');
			const height = parseInt(el.getAttribute('data-height') || '60');

			try {
				new window.Vara(
					`#${el.id}`,
					'/fonts/Pacifico.json',
					[{
						text,
						fontSize,
						strokeWidth,
						color,
						duration,
						x: 10, // Décalage pour éviter que le texte soit coupé à gauche
						y: fontSize * 1.1 // Positionner juste sous la ligne de base
					}],
					{
						autoAnimation: true
					}
				);
			} catch (e) {
				console.error('Vara init error:', e);
				el.innerHTML = `<span style="font-size: ${fontSize}px; font-family: 'Pacifico', cursive;">${text}</span>`;
			}
		});

		varaInitialized = true;
	}

	onMount(async () => {
		marked.use(gfmHeadingId());
		marked.use(mangle());
		sanitizer = createSanitizer(window);
		isInitialized = true;
		currentTheme = $mode;
		await renderContent();
	});

	async function renderContent() {
		if (!isInitialized || !container || !sanitizer) return;

		// Prétraiter le contenu
		const preprocessed = preprocessContent(content);
		const parsed = await marked.parse(preprocessed);
		
		// Sanitize en autorisant les attributs data-* et les classes
		container.innerHTML = sanitizer.sanitize(parsed, {
			ADD_ATTR: ['data-handwritten', 'data-fontsize', 'data-duration', 'data-strokewidth', 'data-height'],
			ADD_TAGS: ['div']
		});
		
		Prism.highlightAllUnder(container);
		
		// Initialiser les animations après le rendu
		await tick();
		varaInitialized = false; // Reset pour permettre la réinitialisation
		await initializeVara(handwrittenColor);
	}

	// Observer les changements de thème
	$effect(() => {
		const newTheme = $mode;
		if (isInitialized && currentTheme !== undefined && currentTheme !== newTheme) {
			currentTheme = newTheme;
			// Re-render quand le thème change
			varaInitialized = false;
			renderContent();
		}
	});
</script>

<div class="markdown-wrapper">
	<div bind:this={container} class="markdown-container"></div>
</div>

<style>
	.markdown-wrapper {
		position: relative;
	}
	
	.markdown-wrapper::before {
		content: '';
		position: absolute;
		inset: 10px;
		background: radial-gradient(
			ellipse at 50% 0%,
			hsl(var(--primary) / 0.08) 0%,
			transparent 70%
		);
		border-radius: 1rem;
		z-index: -1;
		pointer-events: none;
	}
	
	.markdown-container {
		position: relative;
		z-index: 1;
	}

	/* Style pour la carte profil (photo + texte côte à côte) */
	:global(.markdown-container .profile-card) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin: 1.5rem auto; /* auto pour centrer horizontalement */
		max-width: fit-content;
	}

	@media (min-width: 640px) {
		:global(.markdown-container .profile-card) {
			flex-direction: row;
			align-items: center;
			justify-content: center;
			gap: 1.5rem;
		}
	}

	:global(.markdown-container .profile-card img) {
		width: 120px;
		height: 120px;
		border-radius: 50%;
		object-fit: cover;
		border: 3px solid hsl(var(--primary) / 0.3);
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
		flex-shrink: 0;
	}

	:global(.markdown-container .profile-card .handwritten-wrapper) {
		display: flex;
		align-items: center;
		min-width: 280px; /* Largeur min pour éviter trop de retours à la ligne */
		padding-left: 8px; /* Éviter que le texte soit coupé à gauche */
	}

	:global(.markdown-container .handwritten-wrapper) {
		display: flex;
		justify-content: center;
		padding-left: 8px; /* Éviter que le texte soit coupé à gauche */
	}
</style>
