<script lang="ts">
	import { TitledPage } from '$lib/components/layout';
	import { Button } from '$lib/components/ui';
	import { ResumePageData } from '$lib/data';

	const { title, pdfPath, downloadLabel, fullscreenLabel } = ResumePageData;
</script>

<TitledPage {title}>
	<div class="flex flex-col items-center gap-3 mb-4">
		<a href={pdfPath} download>
			<Button>
				<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
				</svg>
				{downloadLabel}
			</Button>
		</a>
	</div>
	
	<div class="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-sm h-[65vh]">
		<div class="flex justify-end p-2 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
			<button on:click={() => {
				const iframe = document.getElementById('resume-iframe');
				if (iframe) iframe.requestFullscreen();
			}} class="text-xs px-2 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-gray-200 rounded transition-colors flex items-center gap-1">
				<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7V4a1 1 0 011-1h3m0 0l-3 3m3-3v4M20 7V4a1 1 0 00-1-1h-3m0 0l3 3m-3-3v4M4 17v3a1 1 0 001 1h3m0 0l-3-3m3 3v-4M20 17v3a1 1 0 01-1 1h-3m0 0l3-3m-3 3v-4"></path>
				</svg>
				{fullscreenLabel}
			</button>
		</div>
		<iframe id="resume-iframe" src={pdfPath} class="w-full h-[calc(100%-3rem)]" {title}></iframe>
	</div>
</TitledPage>
