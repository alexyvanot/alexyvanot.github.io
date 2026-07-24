import { SITE_URL } from '$lib/seo';
import {
	SkillsData,
	ProjectsData,
	ExperienceData,
	EducationData,
	BlogData
} from '$lib/data';

// Genere a la compilation (site statique). Le sitemap se met a jour
// automatiquement a partir du contenu publie dans /content.
export const prerender = true;

const STATIC_ROUTES = [
	'',
	'/about',
	'/skills',
	'/projects',
	'/experience',
	'/education',
	'/blog',
	'/resume',
	'/contact'
];

export function GET() {
	const paths: string[] = [...STATIC_ROUTES];

	for (const item of SkillsData.items) paths.push(`/skills/${item.slug}`);
	for (const item of ProjectsData.items) paths.push(`/projects/${item.slug}`);
	for (const item of ExperienceData.items) paths.push(`/experience/${item.slug}`);
	for (const item of EducationData.items) paths.push(`/education/${item.slug}`);
	for (const item of BlogData.items) paths.push(`/blog/${item.slug}`);

	const urls = paths
		.map((path) => {
			const priority = path === '' ? '1.0' : '0.7';
			return `  <url>\n    <loc>${SITE_URL}${path || '/'}</loc>\n    <priority>${priority}</priority>\n  </url>`;
		})
		.join('\n');

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'public, max-age=3600'
		}
	});
}
