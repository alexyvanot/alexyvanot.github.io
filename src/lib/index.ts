/**
 * Main barrel export for $lib
 * 
 * This file provides centralized exports for all library modules,
 * enabling cleaner imports throughout the application.
 * 
 * @example
 * // Instead of:
 * import { cn, href } from '$lib/utils';
 * import Assets from '$lib/data/assets';
 * 
 * // You can use:
 * import { cn, href, Assets } from '$lib';
 */

// ============================================
// Utils
// ============================================
export * from './utils';

// ============================================
// Types
// ============================================
export * from './types';

// ============================================
// Data
// ============================================
export * from './data';
