<script lang="ts">
	import type { Attachment } from '$lib/data/types';
	import { AttachmentType } from '$lib/data/types';
	import AttachmentCard from './attachment-card.svelte';
	import { H4 } from '$lib/components/ui';

	interface Props {
		attachments: Attachment[];
		title?: string;
		showTitle?: boolean;
	}

	let { attachments, title = 'Pièces jointes', showTitle = true }: Props = $props();

	// Séparer les images des autres pièces jointes
	let images = $derived(attachments.filter(a => a.type === AttachmentType.Image));
	let documents = $derived(attachments.filter(a => a.type !== AttachmentType.Image));
</script>

{#if attachments.length > 0}
	<div class="flex flex-col gap-4">
		{#if showTitle}
			<H4>{title}</H4>
		{/if}
		
		{#if images.length > 0}
			<!-- Grille d'images (comme les screenshots) -->
			<div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
				{#each images as attachment}
					<AttachmentCard item={attachment} />
				{/each}
			</div>
		{/if}
		
		{#if documents.length > 0}
			<!-- Liste de documents/fichiers/liens -->
			<div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
				{#each documents as attachment}
					<AttachmentCard item={attachment} />
				{/each}
			</div>
		{/if}
	</div>
{/if}
