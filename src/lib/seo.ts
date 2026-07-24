/**
 * Configuration SEO centralisee.
 *
 * SITE_URL est le domaine canonique (alexyvanot.fr). Le .com redirige en 301
 * vers .fr, donc toutes les URL canoniques / sitemap pointent vers .fr : c'est
 * cette version que Google indexe.
 */

export const SITE_URL = 'https://alexyvanot.fr';
export const SITE_NAME = 'Alexy VANOT';
export const OG_IMAGE = 'https://avatars.githubusercontent.com/u/48055002';

export const DEFAULT_DESCRIPTION =
	"Portfolio d'Alexy VANOT, developpeur Full-Stack et ingenieur logiciel. Projets, competences, experiences et articles autour du developpement web, du DevOps et de l'intelligence artificielle.";

/**
 * Transforme un contenu (Markdown ou texte) en meta description propre :
 * supprime la syntaxe Markdown / HTML, condense les espaces et tronque a
 * une longueur adaptee aux resultats de recherche (~160 caracteres).
 */
export function cleanDescription(input: string, max = 160): string {
	if (!input || !input.trim()) return DEFAULT_DESCRIPTION;

	const text = input
		.replace(/```[\s\S]*?```/g, ' ') // blocs de code
		.replace(/^:::.*$/gm, ' ') // conteneurs de directives (:::name{...} / :::)
		.replace(/::?[a-zA-Z][\w-]*(\[[^\]]*\])?(\{[^}]*\})?/g, ' ') // directives ::toc, :i[...], etc.
		.replace(/!\[[^\]]*\]\([^)]*\)/g, ' ') // images markdown
		.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // liens markdown -> texte
		.replace(/<[^>]+>/g, ' ') // balises HTML
		.replace(/[#>*_`~|]/g, ' ') // symboles markdown
		.replace(/\s+/g, ' ') // espaces multiples
		.trim();

	if (text.length <= max) return text;

	const truncated = text.slice(0, max);
	const lastSpace = truncated.lastIndexOf(' ');
	return (lastSpace > 40 ? truncated.slice(0, lastSpace) : truncated).trim() + '…';
}
