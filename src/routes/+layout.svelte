<script lang="ts">
	import NavBar from '$lib/components/common/nav-bar/nav-bar.svelte';
	import { AnimatedBackground } from '$lib/components/ui/animated-background';
	import 'virtual:uno.css';
	import '../app.css';
	import '../markdown.css';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<ModeWatcher />
<AnimatedBackground />
<div class="flex h-screen w-screen flex-col overflow-x-hidden">
	<NavBar />
	<div class="mt-[50px] flex flex-1 flex-col">{@render children()}</div>
</div>
