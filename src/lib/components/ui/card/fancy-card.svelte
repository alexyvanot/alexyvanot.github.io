<script lang="ts">
	import type { HTMLAttributes, MouseEventHandler } from 'svelte/elements';
	import { cn } from '$lib/utils.js';
	import { changeColorOpacity, isHexColor } from '@riadh-adrani/utils';
	import { convertNamedToHexColor, NAMED_COLORS, type NamedColor } from '$lib/data/colors';
	import { mode } from 'mode-watcher';

	const {
		color = NAMED_COLORS.gray,
		href,
		bgImg,
		tilt = 5,
		class: className,
		children,
		...reset
	}: HTMLAttributes<HTMLDivElement> & {
		color?: string;
		href?: string;
		bgImg?: string;
		tilt?: number;
	} = $props();

	let el: HTMLElement;

	let computedColor = $derived(
		isHexColor(color) ? color : convertNamedToHexColor(color as NamedColor)
	);
	let borderColor = $derived(changeColorOpacity(computedColor, 0.3));
	let dropColor = $derived(changeColorOpacity(computedColor, 0.15));
	let bgColor = $derived(changeColorOpacity(computedColor, 0.01));
	
	// Enhanced glassmorphism effects based on mode - optimized for performance
	let glassBackdrop = $derived($mode === 'dark' ? 'rgba(15, 15, 15, 0.1)' : 'rgba(250, 250, 250, 0.1)');
	let glassBorder = $derived($mode === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.2)');
	let hoverBackdrop = $derived($mode === 'dark' ? 'rgba(0, 0, 0, 0.15)' : 'rgba(220, 220, 220, 0.15)');
	let shadowColor = $derived($mode === 'dark' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.15)');

	const onHover: MouseEventHandler<HTMLElement> = (ev) => {
		if (!tilt) return;

		const target = ev.currentTarget;

		const rect = target.getBoundingClientRect();

		const x = ev.clientX - rect.left;
		const y = ev.clientY - rect.top;

		el.style.setProperty('--drop-x', `${x}px`);
		el.style.setProperty('--drop-y', `${y}px`);

		const width = el.offsetWidth;
		const height = el.offsetHeight;

		const cX = rect.x + width / 2;
		const cY = rect.y + height / 2;

		const mX = ev.clientX - cX;
		const mY = ev.clientY - cY;

		const rY = ((tilt * mX) / (width / 2)).toFixed(2);
		const rX = ((-1 * (tilt * mY)) / (height / 2)).toFixed(2);

		el.style.setProperty('--rot-x', `${rX}deg`);
		el.style.setProperty('--rot-y', `${rY}deg`);
	};

	$effect(() => {
		if (!el) return;

		el.style.setProperty('--border-color', borderColor);
		el.style.setProperty('--drop-color', dropColor);
		el.style.setProperty('--bg-color', bgColor);
		el.style.setProperty('--glass-backdrop', glassBackdrop);
		el.style.setProperty('--glass-border', glassBorder);
		el.style.setProperty('--hover-backdrop', hoverBackdrop);
		el.style.setProperty('--shadow-color', shadowColor);

		if (bgImg) {
			el.style.setProperty('--bg-img', `url("${bgImg}")`);
		}

		if (tilt) {
			el.style.setProperty('--drop-x', '0');
			el.style.setProperty('--drop-y', '0');
			el.style.setProperty('--rot-x', '0');
			el.style.setProperty('--rot-y', '0');
		}
	});

	$effect(() => {
		// as defined by shadcn
		el.style.setProperty('--card-color', 'hsl(var(--card) / 1)');
		el.style.setProperty('--card-color-60', 'hsl(var(--card) / 0.6)');
		el.style.setProperty('--card-color-30', 'hsl(var(--card) / 0.3)');
	});
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<svelte:element
	this={href ? 'a' : 'div'}
	bind:this={el}
	{href}
	class={cn('card rounded-lg border text-card-foreground shadow-sm', className)}
	{...reset}
	onmousemove={onHover}
>
	<div class="card-color flex flex-1 flex-col">
		{@render children?.()}
	</div>
</svelte:element>

<style>
	.card {
		background:
			linear-gradient(
				135deg,
				var(--glass-backdrop) 0%,
				var(--glass-backdrop) 50%,
				var(--glass-backdrop) 100%
			),
			linear-gradient(
				45deg,
				transparent 30%,
				rgba(255, 255, 255, 0.1) 50%,
				transparent 70%
			),
			no-repeat right 40% / 40% var(--bg-img) !important;
		border: 1px solid var(--glass-border) !important;
		box-shadow: 
			0 8px 32px var(--shadow-color),
			inset 0 1px 0 rgba(255, 255, 255, 0.1),
			inset 0 -1px 0 rgba(0, 0, 0, 0.1) !important;
		transition: all 0.2s ease-out;
		transform-style: preserve-3d;
		will-change: transform;
	}

	.card:hover {
		transform: perspective(1000px) rotateX(var(--rot-x)) rotateY(var(--rot-y)) scale(1.01);
		border-color: var(--border-color);
		box-shadow: 
			0 20px 40px var(--shadow-color),
			inset 0 2px 0 rgba(255, 255, 255, 0.2),
			inset 0 -2px 0 rgba(0, 0, 0, 0.2);
	}

	.card-color {
		background: transparent;
		border-radius: inherit;
		transform-style: preserve-3d;
	}

	.card-color:hover {
		background: 
			radial-gradient(
				circle at var(--drop-x) var(--drop-y),
				var(--drop-color) 0%,
				transparent 60%
			);
		background-color: var(--hover-backdrop);
	}
</style>
