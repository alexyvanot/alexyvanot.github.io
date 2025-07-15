<script lang="ts">
	import { gfmHeadingId } from 'marked-gfm-heading-id';
	import { mangle } from 'marked-mangle';
	import Prism from 'prismjs';
	import createSanitizer from 'dompurify';
	import { marked } from 'marked';
	import 'prismjs/components/prism-typescript';
	import 'prismjs/themes/prism-tomorrow.css';
	import { onMount } from 'svelte';

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

<div bind:this={container} class="markdown-container p-6"></div>

<style>
	.markdown-container {
		background: hsl(var(--card) / 0.85);
		backdrop-filter: blur(4px);
		border-radius: 0.75rem;
		border: 1px solid hsl(var(--border) / 0.3);
		margin: 1rem 0;
		transition: all 0.2s ease-out;
	}
	
	.markdown-container:hover {
		background: hsl(var(--card) / 0.92);
		border-color: hsl(var(--border) / 0.5);
	}
	
	/* Assurer que le contenu reste lisible */
	.markdown-container {
		position: relative;
		z-index: 1;
	}
</style>
