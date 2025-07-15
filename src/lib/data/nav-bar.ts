import BaseData from './base';

// icon can take any value from the Carbon icon set
// https://icon-sets.iconify.design/carbon/
// or can take image URLs or local Path
const left = { title: BaseData.fullName, icon: 'i-carbon-code' } as const;

const items: Array<{
	title: string;
	icon: `i-carbon-${string}`;
	href: string;
}> = [
	{ title: 'À Propos', icon: 'i-carbon-user', href: '/about' },
	{ title: 'Skills', icon: 'i-carbon-assembly-cluster', href: '/skills' },
	{ title: 'Projets', icon: 'i-carbon-cube', href: '/projects' },
	{ title: 'Experience', icon: 'i-carbon-development', href: '/experience' },
	{ title: 'Formation', icon: 'i-carbon-education', href: '/education' },
	{ title: 'Blog', icon: 'i-carbon-blog', href: '/blog' },
	{ title: 'CV', icon: 'i-carbon-document', href: '/resume' },
	{ title: 'Contact', icon: 'i-carbon-email', href: '/contact' }
];

const NavBarData = { left, items };

export default NavBarData;
