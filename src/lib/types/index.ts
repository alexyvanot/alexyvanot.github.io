/**
 * Types barrel export
 * 
 * Centralizes all TypeScript types and interfaces used throughout the application.
 * Domain types are re-exported from data/types.ts for backward compatibility.
 */

// Domain types (models)
export type {
	Icon,
	Asset,
	Screenshot,
	Item,
	Link,
	SkillCategory,
	Skill,
	Project,
	Experience,
	Education,
	BlogPost
} from '../data/types';

export { Platform, ContractType } from '../data/types';

// Language selector types
export type {
	FlagDisplay,
	Language,
	LanguageSelectorConfig
} from './language-selector';
