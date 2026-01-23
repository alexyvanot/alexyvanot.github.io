<script lang="ts">
	import {
		Button, Card, CardFooter, Separator, Icon,
		Dialog, DialogClose, DialogContent, DialogFooter, DialogTitle, DialogTrigger
	} from '$lib/components/ui';
	import type { ImageItem } from '$lib/data/types';

	const { item }: { item: ImageItem } = $props();
</script>

<Dialog>
	<DialogTrigger>
		<Card
			class="flex aspect-square flex-col justify-end bg-cover bg-center bg-no-repeat cursor-pointer hover:ring-2 hover:ring-primary transition-all"
			style={`background-image:url("${item.src}")`}
		>
			<Separator />
			<CardFooter class="rounded-b-md bg-[#00000099] pt-4 text-white backdrop-blur-sm"
				>{item.label}</CardFooter
			>
		</Card>
	</DialogTrigger>
	<DialogContent class="flex min-h-[70%] min-w-[70%] max-h-[90vh] flex-col">
		<DialogTitle>{item.label}</DialogTitle>
		<div class="flex-1 flex items-center justify-center overflow-hidden p-4">
			<img 
				src={item.src} 
				alt={item.label}
				class="max-w-full max-h-full object-contain rounded-md"
			/>
		</div>
		<DialogFooter>
			<a href={item.src} target="_blank" rel="noopener noreferrer" download={item.label}>
				<Button variant="outline">
					<Icon icon="i-carbon-download" className="mr-2" />
					Télécharger
				</Button>
			</a>
			<DialogClose>
				<Button>Close</Button>
			</DialogClose>
		</DialogFooter>
	</DialogContent>
</Dialog>
