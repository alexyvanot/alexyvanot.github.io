/**
 * UI Components - Design System
 * 
 * Atomic, reusable UI components (shadcn-style).
 * These are pure presentation components with no business logic.
 * 
 * @example
 * import { Button, Icon, Card } from '$lib/components/ui';
 */

// ============================================
// Form Components
// ============================================
export * from './button';
export * from './input';
export * from './label';
export * from './textarea';
export * from './toggle';
export * from './toggle-group';
export * from './captcha';

// ============================================
// Data Display Components
// ============================================
export * from './avatar';
export * from './badge';
export * from './card';
export * from './icon';
export * from './separator';
export * from './typography';

// ============================================
// Overlay Components
// ============================================
export * from './dialog';

// Dropdown Menu - named exports to avoid Separator conflict
export {
	DropdownMenu,
	DropdownMenuSub,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuGroup,
	DropdownMenuContent,
	DropdownMenuTrigger,
	DropdownMenuShortcut,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuRadioGroup,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuCheckboxItem,
} from './dropdown-menu';

export * from './hover-card';
export * from './popover';
export * from './tooltip';

// ============================================
// Navigation Components
// ============================================
export * from './pagination';
export * from './carousel';

// ============================================
// Feedback Components
// ============================================
export * from './sonner';

// ============================================
// Specialized Form Components
// ============================================
export { LanguageSelector, FlagDisplayComponent } from './language-selector';

