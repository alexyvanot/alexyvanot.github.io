<script lang="ts">
	import {
		Button, Card, CardContent, CardFooter, CardHeader, CardTitle, Separator, Icon,
		Dialog, DialogClose, DialogContent, DialogFooter, DialogTitle, DialogTrigger
	} from '$lib/components/ui';
	import { Muted } from '$lib/components/ui';
	import type { Attachment } from '$lib/data/types';
	import { AttachmentType } from '$lib/data/types';

	interface Props {
		item: Attachment;
	}

	let { item }: Props = $props();

	// Mapping des icônes par défaut
	const defaultIcons: Record<AttachmentType, string> = {
		[AttachmentType.Image]: 'i-carbon-image',
		[AttachmentType.PDF]: 'i-carbon-document-pdf',
		[AttachmentType.Document]: 'i-carbon-document',
		[AttachmentType.Archive]: 'i-carbon-zip',
		[AttachmentType.Video]: 'i-carbon-video',
		[AttachmentType.Audio]: 'i-carbon-music',
		[AttachmentType.Code]: 'i-carbon-code',
		[AttachmentType.Link]: 'i-carbon-link',
		[AttachmentType.Other]: 'i-carbon-attachment'
	};

	// ============================================
	// Toutes les propriétés avec valeurs par défaut
	// ============================================
	let itemType = $derived(item?.type ?? AttachmentType.Link);
	let itemIcon = $derived(item?.icon ?? defaultIcons[itemType] ?? 'i-carbon-attachment');
	let itemSrc = $derived(item?.src ?? '');
	let itemLabel = $derived(item?.label ?? 'Pièce jointe');
	let itemDescription = $derived(item?.description ?? '');
	let itemSize = $derived(item?.size ?? '');
	let itemNewTab = $derived(item?.newTab ?? true);

	// Déterminer le type d'affichage
	let isImage = $derived(itemType === AttachmentType.Image);
	let isPDF = $derived(itemType === AttachmentType.PDF);
	let isVideo = $derived(itemType === AttachmentType.Video);
</script>

{#if isImage}
	<!-- Affichage spécial pour les images -->
	<Dialog>
		<DialogTrigger>
			<Card
				class="flex aspect-square flex-col justify-end bg-cover bg-center bg-no-repeat cursor-pointer hover:ring-2 hover:ring-primary transition-all"
				style={`background-image:url("${itemSrc}")`}
			>
				<Separator />
				<CardFooter class="rounded-b-md bg-[#00000099] pt-4 text-white backdrop-blur-sm">
					{itemLabel}
				</CardFooter>
			</Card>
		</DialogTrigger>
		<DialogContent class="flex min-h-[70%] min-w-[70%] flex-col">
			<DialogTitle>{itemLabel}</DialogTitle>
			{#if itemDescription}
				<Muted>{itemDescription}</Muted>
			{/if}
			<div
				class="flex-1 bg-contain bg-center bg-no-repeat"
				style={`background-image: url("${itemSrc}")`}
			></div>
			<DialogFooter>
				<a href={itemSrc} target="_blank" download>
					<Button variant="outline">
						<Icon icon="i-carbon-download" className="mr-2" />
						Télécharger
					</Button>
				</a>
				<DialogClose>
					<Button>Fermer</Button>
				</DialogClose>
			</DialogFooter>
		</DialogContent>
	</Dialog>
{:else if isPDF}
	<!-- Affichage spécial pour les PDF -->
	<Dialog>
		<DialogTrigger>
			<Card class="flex flex-col cursor-pointer hover:ring-2 hover:ring-primary transition-all p-4 gap-3">
				<div class="flex items-center gap-3">
					<Icon icon={itemIcon as `i-carbon-${string}`} className="text-3xl text-red-500" />
					<div class="flex flex-col items-start">
						<span class="font-medium">{itemLabel}</span>
						{#if itemSize}
							<Muted class="text-xs">{itemSize}</Muted>
						{/if}
					</div>
				</div>
				{#if itemDescription}
					<Muted class="text-sm text-left">{itemDescription}</Muted>
				{/if}
			</Card>
		</DialogTrigger>
		<DialogContent class="flex min-h-[80%] min-w-[80%] flex-col">
			<DialogTitle>{itemLabel}</DialogTitle>
			<iframe
				src={itemSrc}
				class="flex-1 w-full border-0 rounded-md"
				title={itemLabel}
			></iframe>
			<DialogFooter>
				<a href={itemSrc} target="_blank" download>
					<Button variant="outline">
						<Icon icon="i-carbon-download" className="mr-2" />
						Télécharger
					</Button>
				</a>
				<a href={itemSrc} target="_blank">
					<Button variant="outline">
						<Icon icon="i-carbon-launch" className="mr-2" />
						Ouvrir
					</Button>
				</a>
				<DialogClose>
					<Button>Fermer</Button>
				</DialogClose>
			</DialogFooter>
		</DialogContent>
	</Dialog>
{:else}
	<!-- Affichage générique pour les autres types -->
	<a 
		href={itemSrc} 
		target={itemNewTab ? '_blank' : '_self'}
		rel={itemNewTab ? 'noopener noreferrer' : ''}
	>
		<Card class="flex flex-col cursor-pointer hover:ring-2 hover:ring-primary transition-all p-4 gap-3">
			<div class="flex items-center gap-3">
				<Icon icon={itemIcon as `i-carbon-${string}`} className="text-3xl" />
				<div class="flex flex-col items-start">
					<span class="font-medium">{itemLabel}</span>
					{#if itemSize}
						<Muted class="text-xs">{itemSize}</Muted>
					{/if}
				</div>
				{#if itemNewTab}
					<Icon icon="i-carbon-launch" className="ml-auto text-muted-foreground" />
				{/if}
			</div>
			{#if itemDescription}
				<Muted class="text-sm text-left">{itemDescription}</Muted>
			{/if}
		</Card>
	</a>
{/if}
