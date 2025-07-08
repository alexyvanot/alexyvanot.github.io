import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullName},`,
	description:
		'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
	links: [
		{ label: 'GitHub', href: 'https://github.com/alexyvanot', icon: 'i-carbon-logo-github' },
		{ label: 'LinkedIn', href: 'https://linkedin.com/in/vanot', icon: 'i-carbon-logo-linkedin' },
		{ label: 'Email', href: 'mailto:contact@alexyvanot.fr', icon: 'i-carbon-at' },
		{ label: 'Blog', href: '/blog', icon: 'i-carbon-blog' }
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
