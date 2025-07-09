import Assets from './assets';
import type { Education } from './types';
import esieaMd from './md/education/esiea.md?raw';
import intechMd from './md/education/intech.md?raw';
import pmfMd from './md/education/pmf.md?raw';

const title = 'Formation';

const items: Array<Education> = [
	{
		degree: 'Master en ingénierie informatique',
		description: esieaMd,
		location: 'France',
		logo: Assets.ESIEA,
		name: 'ESIEA',
		organization: 'ESIEA',
		period: { from: new Date(2024, 0, 1), to: new Date(2026, 5, 1) },
		shortDescription: 'Diplôme RNCP Niveau 7 (Bac+5)',
		slug: 'master-esiea',
		subjects: [],
		links: [{ label: 'Site web ESIEA', to: 'https://www.esiea.fr', newTab: true }],
		color: 'deepskyblue'
	},
	{
		degree: 'Bachelor en ingénierie informatique',
		description: intechMd,
		location: 'France',
		logo: Assets.InTech,
		name: 'InTech',
		organization: 'InTech',
		period: { from: new Date(2021, 0, 1), to: new Date(2023, 5, 1) },
		shortDescription: 'Diplôme Bac+3 en génie informatique',
		slug: 'bachelor-intech',
		subjects: [],
		links: [{ label: 'Site web InTech', to: 'https://www.intechinfo.fr', newTab: true }],
		color: 'limegreen'
	},
	{
		degree: 'Baccalauréat (SVT / SES)',
		description: pmfMd,
		location: 'Savigny-le-Temple, France',
		logo: Assets.PMF,
		name: 'Pierre Mendès France',
		organization: 'Lycée Pierre Mendès France',
		period: { from: new Date(2017, 8, 1), to: new Date(2020, 6, 1) },
		shortDescription: 'Spécialisation Sciences de la Vie, Terre & Sciences Éco.',
		slug: 'bac-pmf-2020',
		subjects: ['SVT', 'SES'],
		links: [{ label: 'Site Web PMF', to: 'https://www.lyceepmf-savigny77.fr', newTab: true }],
		color: 'moccasin'
	}
];

const EducationData = { title, items };
export default EducationData;
