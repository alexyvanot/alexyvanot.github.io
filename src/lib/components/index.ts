/**
 * Components barrel export
 * 
 * Clean architecture with semantic grouping:
 * 
 * - ui/       → Design system (shadcn-style atomic components)
 * - layout/   → Page structure and navigation
 * - feedback/ → User feedback and state indication
 * - content/  → Rich content display
 * - effects/  → Visual effects and animations
 * - features/ → Domain-specific business components
 * 
 * @example
 * import { Button, Icon } from '$lib/components/ui';
 * import { NavBar, BasePage } from '$lib/components/layout';
 * import { Loader, EmptyResult } from '$lib/components/feedback';
 * import { Markdown, FancyBanner } from '$lib/components/content';
 * import { AnimatedBackground } from '$lib/components/effects';
 * import { ProjectCard, SkillBadge } from '$lib/components/features';
 */

// Design System
export * from './ui';

// Layout & Navigation
export * from './layout';

// User Feedback
export * from './feedback';

// Content Display
export * from './content';

// Visual Effects
export * from './effects';

// Business Features
export * from './features';
