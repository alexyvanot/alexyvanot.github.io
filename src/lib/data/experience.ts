import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';
import soleilMd from './md/experience/soleil.md?raw';
import aghMd from './md/experience/agh.md?raw';

const title = 'Expérience';

const items: Array<Experience> = [
	{
		slug: 'fullstack-synchrotron-soleil',
		company: 'Synchrotron SOLEIL',
		description: soleilMd,
		contract: ContractType.Apprenticeship,
		type: 'Développement Full-Stack',
		location: 'Saint-Aubin, France',
		period: { from: new Date(2023, 8, 1) },
		skills: getSkills('java', 'react', 'node', 'docker', 'ci', 'linux'),
		name: 'Full-Stack Developer',
		color: 'orange',
		links: [{ to: 'https://www.synchrotron-soleil.fr/', label: 'Site Web', newTab: true }],
		logo: Assets.Soleil,
		shortDescription: 'Développement full-stack et automatisation au Synchrotron SOLEIL'
	},
	{
		slug: 'stagiaire-aghb',
		company: 'AGH Bâtiment',
		description: aghMd,
		contract: ContractType.Internship,
		type: 'Développement Web',
		location: 'France',
		period: { from: new Date(2022, 7, 1), to: new Date(2022, 7, 31) },
		skills: getSkills('html', 'css', 'js', 'svg'),
		name: 'Stagiaire – Rénovation administrative',
		color: 'teal',
		links: [],
		logo: Assets.AGH,
		shortDescription: 'Stage de développement web & logo chez AGH Bâtiment'
	}
];

const ExperienceData = { title, items };
export default ExperienceData;
