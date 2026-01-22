import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';
import { base } from '$app/paths';

// Re-export utilities from utils folder
export { cleanGoogleTranslateArtifacts } from './utils/googleTranslateCleaner';
export { handleImageError } from './utils/imageUtils';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// ============================================================================
// Replacements for @riadh-adrani/utils (to fix 404 error)
// ============================================================================

/**
 * Truncate a string to a maximum length and add ellipsis
 */
export function ellipsify(str: string, maxLength: number): string {
	if (!str) return '';
	if (str.length <= maxLength) return str;
	return str.slice(0, maxLength - 3) + '...';
}

/**
 * Check if a string is a valid hex color
 */
export function isHexColor(color: string): boolean {
	if (!color || typeof color !== 'string') return false;
	return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
}

/**
 * Change the opacity of a hex color
 */
export function changeColorOpacity(hexColor: string, opacity: number): string {
	if (!hexColor) return 'rgba(128, 128, 128, ' + opacity + ')';
	
	// Remove # if present
	const hex = hexColor.replace('#', '');
	
	// Parse hex to RGB
	let r: number, g: number, b: number;
	
	if (hex.length === 3) {
		r = parseInt(hex[0] + hex[0], 16);
		g = parseInt(hex[1] + hex[1], 16);
		b = parseInt(hex[2] + hex[2], 16);
	} else if (hex.length === 6) {
		r = parseInt(hex.substring(0, 2), 16);
		g = parseInt(hex.substring(2, 4), 16);
		b = parseInt(hex.substring(4, 6), 16);
	} else {
		return 'rgba(128, 128, 128, ' + opacity + ')';
	}
	
	return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

type FlyAndScaleParams = {
	y?: number;
	x?: number;
	start?: number;
	duration?: number;
};

export const flyAndScale = (
	node: Element,
	params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150 }
): TransitionConfig => {
	const style = getComputedStyle(node);
	const transform = style.transform === 'none' ? '' : style.transform;

	const scaleConversion = (valueA: number, scaleA: [number, number], scaleB: [number, number]) => {
		const [minA, maxA] = scaleA;
		const [minB, maxB] = scaleB;

		const percentage = (valueA - minA) / (maxA - minA);
		const valueB = percentage * (maxB - minB) + minB;

		return valueB;
	};

	const styleToString = (style: Record<string, number | string | undefined>): string => {
		return Object.keys(style).reduce((str, key) => {
			if (style[key] === undefined) return str;
			return str + `${key}:${style[key]};`;
		}, '');
	};

	return {
		duration: params.duration ?? 200,
		delay: 0,
		css: (t) => {
			const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
			const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
			const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

			return styleToString({
				transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
				opacity: t
			});
		},
		easing: cubicOut
	};
};

const DAY = 24 * 60 * 60 * 1000;
const WEEK = 7 * 24 * 60 * 60 * 1000;
const MONTH = 30 * 24 * 60 * 60 * 1000;
const YEAR = 365 * 24 * 60 * 60 * 1000;

export function computeExactDuration(from: Date | undefined | null, to: Date | undefined | null = new Date()): string {
	// Protection contre les dates invalides
	const fromValid = from instanceof Date && !isNaN(from.getTime());
	const toValid = to instanceof Date && !isNaN(to.getTime());
	
	if (!fromValid) return '';
	
	const fromMs = from!.getTime();
	const toMs = toValid ? to!.getTime() : new Date().getTime();

	const display: Array<string> = [];

	let remaining = toMs - fromMs;

	const years = remaining / YEAR;

	if (years >= 1) {
		remaining = remaining % YEAR;
		display.push(`${Math.trunc(years)} year${years >= 2 ? 's' : ''}`);
	}

	const months = remaining / MONTH;
	if (months >= 1) {
		remaining = remaining % MONTH;
		display.push(`${Math.trunc(months)} month${months >= 2 ? 's' : ''}`);
	}

	const weeks = remaining / WEEK;
	if (weeks >= 1) {
		remaining = remaining % WEEK;
		display.push(`${Math.trunc(weeks)} week${weeks >= 2 ? 's' : ''}`);
	}

	const days = remaining / DAY;
	if (days >= 1) {
		remaining = remaining % DAY;
		display.push(`${Math.trunc(days)} day${days >= 2 ? 's' : ''}`);
	}

	if (display.length === 0) {
		return '1 day';
	}

	return display
		.map((it, index) => {
			if (display.length === 1 || index === display.length - 1) return it;

			if (index === display.length - 2) {
				return `${it} and`;
			}

			return `${it},`;
		})
		.join(' ');
}

const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

export const getMonthName = (index: number): string => {
	return monthNames[index];
};

export const href = (url: string) => `${base}${url}`;

export const getMonthAndYear = (date?: Date | null) => {
	if (!date || !(date instanceof Date) || isNaN(date.getTime())) return 'Present';

	return `${getMonthName(date.getMonth())} ${date.getFullYear()}`;
};
