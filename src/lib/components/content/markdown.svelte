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

	onMount(async () => {
		marked.use(gfmHeadingId());
		marked.use(mangle());
		sanitizer = createSanitizer(window);
		isInitialized = true;
		renderContent();
	});

	async function renderContent() {
		if (!isInitialized || !container || !sanitizer) return;

		const parsed = await marked.parse(content);
		container.innerHTML = sanitizer.sanitize(parsed);
		Prism.highlightAllUnder(container);
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
</style>
