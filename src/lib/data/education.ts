import Assets from './assets';
import type { Education } from './types';

const title = 'Formation';

const items: Array<Education> = [
	{
		degree: 'Master en ingénierie informatique',
		description: '',
		location: 'France',
		logo: Assets.ESIEA, // remplace Assets.Unknown par le logo approprié
		name: 'ESIEA',
		organization: 'ESIEA',
		period: { from: new Date(2024, 0, 1), to: new Date(2026, 5, 1) },
		shortDescription: 'Diplôme RNCP Niveau 7 (Bac+5)',
		slug: 'master-esiea',
		subjects: [] // à compléter selon le détail voulu
	},
	{
		degree: 'Bachelor en ingénierie informatique',
		description: '',
		location: 'France',
		logo: Assets.InTech,
		name: 'InTech',
		organization: 'InTech',
		period: { from: new Date(2021, 0, 1), to: new Date(2023, 5, 1) },
		shortDescription: 'Diplôme Bac+3 en génie informatique',
		slug: 'bachelor-intech',
		subjects: []
	},
	{
		degree: 'Baccalauréat (SVT / SES)',
		description: '',
		location: 'Savigny‑le‑Temple, France',
		logo: Assets.PMF,
		name: 'Pierre Mendès France',
		organization: 'Lycée Pierre Mendès France',
		period: { from: new Date(2017, 8, 1), to: new Date(2020, 6, 1) },
		shortDescription: 'Spécialisation Sciences de la Vie, Terre & Sciences Éco.',
		slug: 'bac-pmf-2020',
		subjects: ['SVT', 'SES']
	}
];

const EducationData = { title, items };
export default EducationData;
