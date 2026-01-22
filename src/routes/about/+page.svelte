<script lang="ts">
	import { TitledPage } from '$lib/components/layout';
	import { MarkdownAnimated, ScreenshotCard, AttachmentCard } from '$lib/components/content';
	import { AboutPageData } from '$lib/data/content-loader';
	import { AttachmentType } from '$lib/data/types';

	const { title, content, attachments } = AboutPageData;
</script>

<TitledPage {title}>
	<div class="about-page">
		<div class="container mx-auto max-w-4xl px-4">
			<!-- Contenu Markdown -->
			<article class="prose prose-lg dark:prose-invert max-w-none">
				<MarkdownAnimated {content} />
			</article>
			
			<!-- Pièces jointes (en bas, comme les projets) -->
			{#if attachments && attachments.length > 0}
				<div class="attachments-section mt-12">
					<h3 class="section-title flex items-center gap-2 text-xl font-semibold mb-6">
						<div class="i-carbon-attachment"></div>
						Pièces jointes
					</h3>
					<div class="attachments-grid">
						{#each attachments as attachment, index (index)}
							{#if attachment.type === AttachmentType.Image}
								<ScreenshotCard item={{ src: attachment.src, label: attachment.label }} />
							{:else}
								<AttachmentCard {attachment} />
							{/if}
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</div>
</TitledPage>

<style>
	.about-page {
		min-height: calc(100vh - 4rem);
	}

	.attachments-section {
		border-top: 1px solid hsl(var(--border) / 0.5);
		padding-top: 2rem;
	}

	.section-title {
		color: hsl(var(--primary) / 0.8);
	}

	.attachments-grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(1, 1fr);
	}

	@media (min-width: 640px) {
		.attachments-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.attachments-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	/* Styles pour les images dans le markdown */
	:global(.about-page .markdown-container img) {
		max-width: 100%;
		height: auto;
		border-radius: 1rem;
		margin: 1.5rem auto;
		display: block;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	}

	/* Image de profil centrée et ronde */
	:global(.about-page .markdown-container img[alt="Photo de profil"]) {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		object-fit: cover;
		border: 4px solid hsl(var(--primary) / 0.2);
	}

	/* Blockquotes stylées */
	:global(.about-page .markdown-container blockquote) {
		border-left: 4px solid hsl(var(--primary));
		background: hsl(var(--secondary) / 0.3);
		padding: 1rem 1.5rem;
		border-radius: 0 0.5rem 0.5rem 0;
		font-style: italic;
		margin: 2rem 0;
	}

	/* Séparateurs */
	:global(.about-page .markdown-container hr) {
		border: none;
		height: 1px;
		background: linear-gradient(to right, transparent, hsl(var(--border)), transparent);
		margin: 2.5rem 0;
	}

	/* Headers */
	:global(.about-page .markdown-container h1),
	:global(.about-page .markdown-container h2),
	:global(.about-page .markdown-container h3) {
		margin-top: 2rem;
		margin-bottom: 1rem;
	}

	:global(.about-page .markdown-container h2) {
		border-bottom: 1px solid hsl(var(--border) / 0.5);
		padding-bottom: 0.5rem;
	}

	/* Listes */
	:global(.about-page .markdown-container ul),
	:global(.about-page .markdown-container ol) {
		padding-left: 1.5rem;
	}

	:global(.about-page .markdown-container li) {
		margin-bottom: 0.5rem;
	}

	/* Liens */
	:global(.about-page .markdown-container a) {
		color: hsl(var(--primary));
		text-decoration: none;
		border-bottom: 1px solid transparent;
		transition: border-color 0.2s;
	}

	:global(.about-page .markdown-container a:hover) {
		border-bottom-color: hsl(var(--primary));
	}

	/* Code inline */
	:global(.about-page .markdown-container code:not(pre code)) {
		background: hsl(var(--secondary));
		padding: 0.2rem 0.4rem;
		border-radius: 0.25rem;
		font-size: 0.875em;
	}

	/* Conteneur d'écriture manuscrite */
	:global(.about-page .handwritten-container) {
		display: flex;
		justify-content: center;
		margin: 1rem 0;
	}
</style>
