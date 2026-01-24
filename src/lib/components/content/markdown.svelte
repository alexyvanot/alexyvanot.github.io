<script lang="ts">
	import { gfmHeadingId } from 'marked-gfm-heading-id';
	import { mangle } from 'marked-mangle';
	import Prism from 'prismjs';
	import createSanitizer from 'dompurify';
	import { marked } from 'marked';
	import { browser } from '$app/environment';
	import { href as hrefUtil } from '$lib/utils';
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
	import 'prismjs/components/prism-markdown';
	import 'prismjs/components/prism-shell-session';
	import 'prismjs/themes/prism-tomorrow.css';
	import { onMount } from 'svelte';

	// Configurer les alias pour les langages non reconnus
	if (typeof Prism !== 'undefined' && Prism.languages) {
		// Svelte utilise la syntaxe HTML/markup avec du JS intégré
		if (Prism.languages.markup) {
			Prism.languages.svelte = Prism.languages.markup;
		}
		// Alias ts pour typescript
		if (Prism.languages.typescript) {
			Prism.languages.ts = Prism.languages.typescript;
		}
		// Alias js pour javascript
		if (Prism.languages.javascript) {
			Prism.languages.js = Prism.languages.javascript;
		}
		// env utilise la syntaxe bash/shell
		if (Prism.languages.bash) {
			Prism.languages.env = Prism.languages.bash;
			Prism.languages.shell = Prism.languages.bash;
			Prism.languages.sh = Prism.languages.bash;
		}
		// Alias pour markdown
		if (Prism.languages.markdown) {
			Prism.languages.md = Prism.languages.markdown;
		}
	}

	let container: HTMLDivElement;

	let { content }: { content: string } = $props();

	let isInitialized = false;
	let sanitizer: any;

	/**
	 * Génère le sommaire APRÈS le parsing du markdown pour utiliser les vrais IDs générés
	 */
	function generateTocFromHtml(html: string, maxLevel: number, title: string): string {
		// Parser le HTML pour extraire les headings avec leurs IDs réels
		const parser = new DOMParser();
		const doc = parser.parseFromString(html, 'text/html');
		const headings: Array<{ level: number; text: string; id: string }> = [];
		
		for (let i = 1; i <= maxLevel; i++) {
			doc.querySelectorAll(`h${i}`).forEach((h) => {
				const id = h.getAttribute('id');
				const text = h.textContent?.trim();
				if (id && text) {
					headings.push({ level: i, text, id });
				}
			});
		}
		
		// Trier par ordre d'apparition dans le document
		const allHeadings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
		const orderedHeadings: Array<{ level: number; text: string; id: string }> = [];
		allHeadings.forEach((h) => {
			const level = parseInt(h.tagName[1]);
			if (level <= maxLevel) {
				const id = h.getAttribute('id');
				const text = h.textContent?.trim();
				if (id && text) {
					orderedHeadings.push({ level, text, id });
				}
			}
		});
		
		if (orderedHeadings.length === 0) {
			return '';
		}
		
		// Générer le HTML du sommaire
		let tocHtml = `<details class="toc-container">`;
		tocHtml += `<summary class="toc-title">${title}</summary>`;
		tocHtml += `<ul class="toc-list">`;
		
		for (const heading of orderedHeadings) {
			const indent = heading.level - 1;
			tocHtml += `<li class="toc-item toc-level-${heading.level}" style="margin-left: ${indent * 1}rem;">`;
			tocHtml += `<a href="#${heading.id}" class="toc-link">${heading.text}</a>`;
			tocHtml += `</li>`;
		}
		
		tocHtml += `</ul></details>`;
		
		return tocHtml;
	}

	/**
	 * Prétraite le contenu markdown pour détecter ::toc et retourne les options
	 */
	function extractTocOptions(md: string): { hasToc: boolean; maxLevel: number; title: string; content: string } {
		const tocPattern = /::toc(?:\{([^}]*)\})?/;
		const match = md.match(tocPattern);
		
		if (!match) {
			return { hasToc: false, maxLevel: 3, title: 'Sommaire', content: md };
		}
		
		const options: Record<string, string> = {};
		if (match[1]) {
			match[1].split(/\s+/).forEach((opt: string) => {
				const [key, value] = opt.split('=');
				if (key && value) options[key] = value;
			});
		}
		
		return {
			hasToc: true,
			maxLevel: parseInt(options.maxLevel || '3', 10),
			title: options.title || 'Sommaire',
			// Supprimer complètement le ::toc du contenu
			content: md.replace(tocPattern, '')
		};
	}

	onMount(async () => {
		marked.use(gfmHeadingId());
		marked.use(mangle());
		sanitizer = createSanitizer(window);
		isInitialized = true;
		await renderContent();
	});

	/**
	 * Parse les icônes inline :i[nom-icône] ou :icon[nom-icône]
	 * Exemple: :i[i-carbon-star] ou :icon[i-carbon-home]
	 */
	function parseIcons(md: string): string {
		// Pattern: :i[icon-name] ou :icon[icon-name]
		return md.replace(/:i(?:con)?\[([^\]]+)\]/g, (match, iconName) => {
			// Nettoyer le nom de l'icône
			const cleanIcon = iconName.trim();
			// Si l'icône ne commence pas par 'i-', ajouter le préfixe i-carbon-
			const finalIcon = cleanIcon.startsWith('i-') ? cleanIcon : `i-carbon-${cleanIcon}`;
			return `<span class="md-icon ${finalIcon}" aria-hidden="true"></span>`;
		});
	}

	/**
	 * Parse les blocs :::buttons avec boutons ::button[Label]{options}
	 * Supporte: href=, link=, icon= (emoji ou classe UnoCSS), style=, newTab=
	 */
	function parseButtons(md: string): { content: string; htmlBlocks: string[] } {
		const htmlBlocks: string[] = [];
		
		const processed = md.replace(
			/:::buttons(?:\{([^}]*)\})?\s*\n([\s\S]*?)\n:::/g,
			(match, gridOptionsStr, innerContent) => {
				const gridOptions: Record<string, string> = {};
				if (gridOptionsStr) {
					gridOptionsStr.split(/\s+/).forEach((opt: string) => {
						const [key, value] = opt.split('=');
						if (key && value) gridOptions[key] = value;
					});
				}
				const align = gridOptions.align || 'left';
				
				// Parser chaque ::button[Label]{href=url icon=emoji style=solid|outline|soft}
				const buttonPattern = /::button\[([^\]]+)\](?:\{([^}]*)\})?/g;
				let buttonsHtml = '';
				let buttonMatch;
				
				while ((buttonMatch = buttonPattern.exec(innerContent)) !== null) {
					const label = buttonMatch[1];
					const optionsStr = buttonMatch[2] || '';
					
					const options: Record<string, string> = {};
					if (optionsStr) {
						optionsStr.split(/\s+/).forEach((opt: string) => {
							const [key, value] = opt.split('=');
							if (key && value) options[key] = value;
						});
					}
					
					// Support 'link=' comme alias de 'href='
					let buttonHref = options.href || options.link || '#';
					// Utiliser hrefUtil pour les liens internes (commençant par /)
					if (buttonHref.startsWith('/')) {
						buttonHref = hrefUtil(buttonHref);
					}
					const icon = options.icon || '';
					const style = options.style || 'ghost'; // ghost, default, outline
					const newTab = options.newTab === 'true';
					
					const targetAttr = newTab ? ' target="_blank" rel="noopener noreferrer"' : '';
					
					// Déterminer si l'icône est une classe UnoCSS (commence par i-) ou un emoji
					let iconHtml = '';
					if (icon) {
						if (icon.startsWith('i-')) {
							// Classe UnoCSS/icône
							iconHtml = `<span class="btn-icon ${icon}"></span>`;
						} else {
							// Emoji ou texte
							iconHtml = `<span class="btn-icon">${icon}</span>`;
						}
					}
					
					buttonsHtml += `<a href="${buttonHref}" class="md-btn md-btn-${style}"${targetAttr}>${iconHtml}<span class="btn-label">${label}</span></a>`;
				}
				
				const html = `<div class="md-buttons md-buttons-${align}">${buttonsHtml}</div>`;
				htmlBlocks.push(html);
				return `<!--BTNBLOCK${htmlBlocks.length - 1}-->`;
			}
		);
		
		return { content: processed, htmlBlocks };
	}

	async function renderContent() {
		if (!isInitialized || !container || !sanitizer) return;

		// Extraire les options du TOC
		const tocOptions = extractTocOptions(content);
		
		// Parser les icônes AVANT tout le reste
		const contentWithIcons = parseIcons(tocOptions.content);
		
		// Parser les boutons AVANT marked
		const { content: contentWithoutButtons, htmlBlocks } = parseButtons(contentWithIcons);
		
		// Parser le markdown (sans le ::toc et sans les :::buttons)
		let parsed = await marked.parse(contentWithoutButtons);
		
		// Restaurer les blocs de boutons
		htmlBlocks.forEach((html, index) => {
			parsed = parsed.replace(`<!--BTNBLOCK${index}-->`, html);
		});
		
		let finalHtml = sanitizer.sanitize(parsed, {
			ADD_TAGS: ['nav', 'details', 'summary'],
			ALLOWED_TAGS: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'ul', 'ol', 'li', 'strong', 'em', 'code', 'pre', 'blockquote', 'img', 'div', 'span', 'br', 'hr', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'nav', 'details', 'summary'],
			ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'id', 'style', 'target', 'rel']
		});
		
		// Si on a un TOC, le générer et l'insérer au début
		if (tocOptions.hasToc) {
			const tocHtml = generateTocFromHtml(finalHtml, tocOptions.maxLevel, tocOptions.title);
			finalHtml = tocHtml + finalHtml;
		}
		
		container.innerHTML = finalHtml;
		Prism.highlightAllUnder(container);
		
		// Ajouter les event listeners pour les liens du TOC
		if (tocOptions.hasToc) {
			container.querySelectorAll('.toc-link').forEach((link) => {
				link.addEventListener('click', (e) => {
					e.preventDefault();
					const linkHref = link.getAttribute('href');
					if (linkHref) {
						const targetId = linkHref.slice(1);
						
						// Retirer la surbrillance des titres précédents
						document.querySelectorAll('.hash-target-highlight').forEach((el) => {
							el.classList.remove('hash-target-highlight');
						});
						
						// Ajouter la surbrillance au nouveau titre
						const targetElement = document.getElementById(targetId);
						if (targetElement) {
							targetElement.classList.add('hash-target-highlight');
						}
						
						// Mettre à jour l'URL avec le hash
						window.location.hash = targetId;
						// Scroll vers l'élément avec offset
						scrollToElement(targetId);
					}
				});
			});
		}
	}
	
	/**
	 * Scroll vers un élément avec offset pour le header
	 */
	function scrollToElement(targetId: string) {
		const targetElement = document.getElementById(targetId);
		if (targetElement) {
			const headerOffset = 100;
			const elementPosition = targetElement.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.scrollY - headerOffset;
			
			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			});
		}
	}

	// Réagir aux changements de contenu
	$effect(() => {
		if (content && isInitialized) {
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
	
	/* Effet de lueur subtile derrière le conteneur */
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

	/* Styles pour le sommaire (Table of Contents) */
	.markdown-container :global(.toc-container) {
		background: hsl(var(--card) / 0.6);
		border: 1px solid hsl(var(--border) / 0.5);
		border-radius: 0.75rem;
		padding: 0.6rem 1rem;
		margin-bottom: 1.5rem;
		backdrop-filter: blur(8px);
		box-shadow: 0 4px 16px hsl(var(--primary) / 0.05);
	}

	.markdown-container :global(.toc-title) {
		font-size: 0.9rem;
		font-weight: 600;
		color: hsl(var(--foreground));
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		list-style: none;
		user-select: none;
	}

	.markdown-container :global(.toc-title::-webkit-details-marker) {
		display: none;
	}

	.markdown-container :global(.toc-title)::before {
		content: '▶';
		font-size: 0.6rem;
		transition: transform 0.2s ease;
	}

	.markdown-container :global(.toc-container[open]) > :global(.toc-title)::before {
		transform: rotate(90deg);
	}

	.markdown-container :global(.toc-list) {
		list-style: none;
		padding: 0;
		margin: 0.3rem 0 0 0;
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.markdown-container :global(.toc-item) {
		margin: 0;
		line-height: 1.2;
		display: flex;
		align-items: baseline;
	}

	.markdown-container :global(.toc-item)::before {
		flex-shrink: 0;
		margin-right: 0.5rem;
	}

	.markdown-container :global(.toc-link) {
		color: hsl(var(--muted-foreground));
		text-decoration: none;
		font-size: 0.78rem;
		transition: all 0.2s ease;
		display: block;
		padding: 0.08rem 0;
	}

	.markdown-container :global(.toc-link:hover) {
		color: hsl(var(--primary));
	}

	.markdown-container :global(.toc-level-1)::before {
		content: '●';
		font-size: 0.5rem;
		color: hsl(var(--primary));
	}

	.markdown-container :global(.toc-level-1 .toc-link) {
		font-weight: 600;
		font-size: 0.82rem;
		color: hsl(var(--foreground));
	}

	.markdown-container :global(.toc-level-2)::before {
		content: '○';
		font-size: 0.5rem;
		color: hsl(var(--primary) / 0.7);
	}

	.markdown-container :global(.toc-level-2 .toc-link) {
		font-weight: 500;
		font-size: 0.78rem;
	}

	.markdown-container :global(.toc-level-3)::before {
		content: '◽';
		font-size: 0.45rem;
		color: hsl(var(--muted-foreground));
	}

	.markdown-container :global(.toc-level-3 .toc-link) {
		font-size: 0.74rem;
		opacity: 0.85;
	}

	/* Surbrillance des titres lors de la navigation */
	.markdown-container :global(.heading-highlight),
	.markdown-container :global(.hash-target-highlight),
	.markdown-container :global(h1:target),
	.markdown-container :global(h2:target),
	.markdown-container :global(h3:target),
	.markdown-container :global(h4:target),
	.markdown-container :global(h5:target),
	.markdown-container :global(h6:target) {
		background: #fef08a !important;
		color: #1a1a1a !important;
		-webkit-text-fill-color: #1a1a1a !important;
		-webkit-background-clip: unset !important;
		background-clip: unset !important;
		padding: 0.25rem 0.5rem;
		margin-left: -0.5rem;
		border-radius: 0.25rem;
	}

	/* Forcer la couleur sur tous les éléments enfants des titres surlignés */
	.markdown-container :global(.heading-highlight *),
	.markdown-container :global(.hash-target-highlight *),
	.markdown-container :global(h1:target *),
	.markdown-container :global(h2:target *),
	.markdown-container :global(h3:target *),
	.markdown-container :global(h4:target *),
	.markdown-container :global(h5:target *),
	.markdown-container :global(h6:target *) {
		color: #1a1a1a !important;
		-webkit-text-fill-color: #1a1a1a !important;
	}

	/* ===== BUTTONS - Boutons stylés ===== */
	.markdown-container :global(.md-buttons) {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin: 1.5rem 0;
		padding: 4px;
		margin-bottom: 0.5rem;
	}

	.markdown-container :global(.md-buttons-left) {
		justify-content: flex-start;
	}

	.markdown-container :global(.md-buttons-center) {
		justify-content: center;
	}

	.markdown-container :global(.md-buttons-right) {
		justify-content: flex-end;
	}

	.markdown-container :global(.md-btn) {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding: 0.625rem 1.25rem;
		font-size: 0.875rem;
		font-weight: 500;
		text-decoration: none !important;
		border-radius: 0.5rem;
		transition: background 0.15s ease, border-color 0.15s ease;
		cursor: pointer;
		white-space: nowrap;
		border: 1.5px solid transparent;
	}

	.markdown-container :global(.md-btn:hover) {
		text-decoration: none !important;
	}

	.markdown-container :global(.md-btn::after),
	.markdown-container :global(.md-btn:hover::after),
	.markdown-container :global(.md-btn::before),
	.markdown-container :global(.md-btn:hover::before) {
		display: none !important;
		content: none !important;
		width: 0 !important;
		height: 0 !important;
	}

	.markdown-container :global(.md-btn .btn-icon) {
		font-size: 1rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.markdown-container :global(.md-btn .btn-label) {
		color: inherit !important;
	}

	/* Style Default - Bouton noir plein, texte blanc */
	.markdown-container :global(.md-btn-default) {
		background: #1a1a1a;
		color: #ffffff !important;
		border-color: #1a1a1a;
	}
	.markdown-container :global(.md-btn-default:hover) {
		background: #333333;
		border-color: #333333;
	}
	.markdown-container :global(.md-btn-default .btn-label),
	.markdown-container :global(.md-btn-default .btn-icon) {
		color: #ffffff !important;
	}

	/* Style Outline - Bouton bordé, fond transparent */
	.markdown-container :global(.md-btn-outline) {
		background: hsl(var(--background));
		color: hsl(var(--foreground)) !important;
		border: none;
		box-shadow: inset 0 0 0 1.5px hsl(var(--foreground) / 0.3);
	}
	.markdown-container :global(.md-btn-outline:hover) {
		background: hsl(var(--foreground) / 0.05);
		box-shadow: inset 0 0 0 1.5px hsl(var(--foreground) / 0.5);
	}

	/* Style Ghost - Bouton léger avec fond gris */
	.markdown-container :global(.md-btn-ghost) {
		background: hsl(var(--muted));
		color: hsl(var(--foreground)) !important;
		border-color: hsl(var(--border));
	}
	.markdown-container :global(.md-btn-ghost:hover) {
		background: hsl(var(--muted) / 0.7);
		border-color: hsl(var(--foreground) / 0.2);
	}

	/* Icônes inline :i[nom] ou :icon[nom] */
	.markdown-container :global(.md-icon) {
		display: inline-block;
		width: 1.2em;
		height: 1.2em;
		vertical-align: -0.15em;
		flex-shrink: 0;
	}
</style>
