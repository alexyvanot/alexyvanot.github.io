/**
 * Data barrel export
 * 
 * ╔═══════════════════════════════════════════════════════════════════════════╗
 * ║                      🔮 CONTENT MANAGEMENT SYSTEM                         ║
 * ║                                                                           ║
 * ║  TOUT le contenu est chargé depuis le dossier /content/                   ║
 * ║  Aucune donnée n'est hardcodée ici !                                      ║
 * ║                                                                           ║
 * ║  Pour ajouter du contenu, créez simplement un fichier dans /content/      ║
 * ║  Voir content/README.md pour plus de détails                              ║
 * ║                                                                           ║
 * ╚═══════════════════════════════════════════════════════════════════════════╝
 */

// ============================================
// Content loaded from /content/ folder
// ============================================
export { 
	BlogData, 
	ProjectsData, 
	SkillsData, 
	ExperienceData, 
	EducationData,
	AboutPageData,
	SiteConfigData,
	HomePageData,
	ResumePageData,
	ContactPageData,
	getSkills,
	groupByCategory
} from './content-loader';

// Assets (logos, images)
export { default as Assets } from './assets';

// ============================================
// Other Data Modules (legacy - à supprimer progressivement)
// ============================================
export { default as LanguageSelectorData } from './language-selector';
export { default as NavBarData } from './nav-bar';

// ============================================
// Named exports
// ============================================

// Colors
export { NAMED_COLORS, convertNamedToHexColor } from './colors';
export type { Color, NamedColor, HexColor } from './colors';

// Language selector utilities
export { createLanguageSelectorConfig } from './language-selector';

// Types are also available via $lib/types
export * from './types';
