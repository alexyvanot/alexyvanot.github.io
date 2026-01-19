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
