import type { Skill, SkillCategory } from './types';
import type { StringWithAutoComplete } from '@riadh-adrani/utils';
import { omit } from '@riadh-adrani/utils';
import Assets from './assets';
import svelteMd from './md/skills/svelte.md?raw';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Languages', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => {
	return items.filter((it) => (slugs.length === 0 ? true : slugs.includes(it.slug)));
};

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}
	
	// Trier les catégories selon l'ordre défini dans la liste 'categories'
	out.sort((a, b) => {
		const indexA = categories.findIndex(cat => cat.slug === a.category.slug);
		const indexB = categories.findIndex(cat => cat.slug === b.category.slug);
		
		// Si une catégorie n'est pas dans la liste (par exemple 'others'), la placer à la fin
		if (indexA === -1) return 1;
		if (indexB === -1) return -1;
		
		return indexA - indexB;
	});
	
	// Trier les compétences à l'intérieur de chaque catégorie par ordre alphabétique
	out.forEach(category => {
		category.items.sort((a, b) => a.name.localeCompare(b.name));
	});

	return out;
};

const title = 'Skills';

const items = [
	// Programming Languages
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			'Langage de programmation principal utilisé pour les interfaces interactives, côté client comme côté serveur avec Node.js.',
		logo: Assets.JavaScript,
		name: 'JavaScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description:
			'Superset de JavaScript typé statiquement. Utilisé pour des projets robustes avec des IDE performants.',
		logo: Assets.TypeScript,
		name: 'TypeScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'java',
		color: 'red',
		description:
			'Langage orienté objet utilisé principalement dans mes projets backend chez Synchrotron SOLEIL.',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),

	// Frameworks
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: svelteMd,
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'framework'
	}),

	// Libraries
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description:
			'Bibliothèque JavaScript pour créer des interfaces utilisateur réactives. Utilisé professionnellement.',
		logo: Assets.ReactJs,
		name: 'React.js',
		category: 'library'
	}),

	// Databases
	defineSkill({
		slug: 'sqlite',
		color: 'gray',
		description: 'Base de données légère intégrée. Idéale pour des projets locaux ou embarqués.',
		logo: Assets.SQLite,
		name: 'SQLite',
		category: 'db'
	}),

	// DevOps
	defineSkill({
		slug: 'docker',
		color: 'blue',
		description:
			'Conteneurisation d’applications. Utilisé pour créer des environnements de test ou déployer des apps.',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'ci-cd',
		color: 'gray',
		description:
			'Mise en place de pipelines CI/CD via GitLab. Automatisation des tests et déploiement.',
		logo: Assets.CICD,
		name: 'CI/CD',
		category: 'devops'
	}),

	// Markup & Style
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: 'Structure des pages web. Maîtrisé depuis mes débuts.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description: 'Mise en forme des interfaces. Utilisé avec Sass ou Tailwind selon les projets.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		description: 'Préprocesseur CSS qui facilite la factorisation et la gestion de grands projets.',
		logo: Assets.Sass,
		name: 'Sass',
		category: 'markup-style'
	}),

	// Dev Tools
	defineSkill({
		slug: 'git',
		color: 'orange',
		description:
			'Système de versionnement utilisé dans tous mes projets. Workflow GitLab et GitHub.',
		logo: Assets.Git,
		name: 'Git',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'linux',
		color: 'gray',
		description: 'Utilisation quotidienne de serveurs Debian et Red Hat au Synchrotron.',
		logo: Assets.Linux,
		name: 'Linux',
		category: 'devtools'
	}),

	// Soft Skills
	defineSkill({
		slug: 'teamwork',
		color: 'green',
		description:
			'Collaboration efficace dans des équipes pluridisciplinaires. Communication claire et partage de responsabilités.',
		logo: Assets.Teamwork,
		name: 'Travail en équipe',
		category: 'soft'
	}),
	defineSkill({
		slug: 'autonomy',
		color: 'blue',
		description:
			'Capacité à apprendre par moi-même, à m’auto-former rapidement, et à être force de proposition.',
		logo: Assets.Autonomy,
		name: 'Autonomie & apprentissage',
		category: 'soft'
	}),
	defineSkill({
		slug: 'creativity',
		color: 'purple',
		description:
			'Création d’expériences originales, notamment en réalité virtuelle ou dans la conception d’UI.',
		logo: Assets.Creativity,
		name: 'Créativité',
		category: 'soft'
	})
] as const;

const SkillsData = {
	title,
	items
};

export default SkillsData;
