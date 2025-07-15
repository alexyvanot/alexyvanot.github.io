import type { Icon } from './types';

export interface PersonalityTrait {
	title: string;
	description: string;
	icon: Icon;
	color: string;
}

export interface AboutSection {
	id: string;
	title: string;
	subtitle?: string;
	content: string;
	image?: string;
	icon?: Icon;
	traits?: PersonalityTrait[];
	layout?: 'text' | 'traits' | 'image-text';
}

export interface AboutProfile {
	photo: string;
	name: string;
	subtitle: string;
	description: string;
	quote?: string;
	socialLinks: {
		icon: Icon;
		href: string;
		label: string;
	}[];
}

const aboutData = {
	title: 'About',
	
	profile: {
		photo: 'https://avatars.githubusercontent.com/u/48055002',
		name: 'Alexy VANOT',
		subtitle: 'Développeur passionné, mélomane et créatif',
		quote: `"Le code, c'est de la poésie qui compile"`,
		description: `
			Bonjour ! Je suis **Alexy VANOT**, un *développeur full-stack* passionné par la **technologie** et l'**innovation**. 
			Actuellement en formation à l'*ESIEA* pour un **Master en ingénierie informatique**, je combine mes compétences 
			techniques avec une *approche créative* pour créer des **solutions élégantes** et **performantes**.
		`,
		socialLinks: [
			{
				icon: 'i-carbon-logo-github' as Icon,
				href: 'https://github.com/alexyvanot',
				label: 'GitHub'
			},
			{
				icon: 'i-carbon-logo-linkedin' as Icon,
				href: 'https://linkedin.com/in/vanot',
				label: 'LinkedIn'
			},
			{
				icon: 'i-carbon-at' as Icon,
				href: 'mailto:contact@alexyvanot.fr',
				label: 'Email'
			}
		]
	} as AboutProfile,
	
	sections: [
		{
			id: 'intro',
			title: 'Qui suis-je ?',
			subtitle: 'Mon parcours et ma passion',
			icon: 'i-carbon-user-speaker' as Icon,
			content: `
				Mon parcours m'a mené du **développement web** aux *applications mobiles*, en passant par l'**intelligence artificielle** 
				et les **systèmes distribués**. J'aime particulièrement travailler sur des projets qui allient *technique* et *créativité*.
				
				Chaque ligne de **code** que j'écris est guidée par la recherche de l'**élégance** et de la **performance**. 
				Je crois que la *technologie* doit servir l'humain et améliorer notre quotidien.
			`,
			image: '/images/cover_bg_1.jpg',
			layout: 'image-text' as const
		},
		{
			id: 'personality',
			title: 'Ma personnalité',
			subtitle: 'Les valeurs qui me définissent',
			icon: 'i-carbon-user-multiple' as Icon,
			content: `
				Au-delà du **code**, je suis une personne aux *multiples facettes*. La **musique** occupe une place centrale dans ma vie, 
				et j'aime explorer différents *genres* et *instruments*. Cette passion pour la **musique** nourrit ma **créativité** 
				et m'aide à aborder les problèmes techniques avec une *perspective unique*.
			`,
			layout: 'traits' as const,
			traits: [
				{
					title: 'Musique et Piano',
					description: 'Passionné de musique depuis toujours, je joue du piano et explore différents genres musicaux. La musique me permet de développer ma créativité et ma discipline.',
					icon: 'i-carbon-music' as Icon,
					color: 'purple'
				},
				{
					title: 'Apprentissage Continu',
					description: 'J\'adore apprendre de nouvelles technologies et concepts. Chaque projet est une opportunité d\'explorer et de maîtriser de nouveaux outils.',
					icon: 'i-carbon-education' as Icon,
					color: 'blue'
				},
				{
					title: 'Collaboration',
					description: 'Je crois fermement au pouvoir du travail d\'équipe. J\'aime partager mes connaissances et apprendre des autres dans un environnement collaboratif.',
					icon: 'i-carbon-group' as Icon,
					color: 'green'
				},
				{
					title: 'Innovation',
					description: 'J\'aime repousser les limites et explorer de nouvelles approches. L\'innovation technique et créative est au cœur de ma démarche de développement.',
					icon: 'i-carbon-idea' as Icon,
					color: 'orange'
				},
				{
					title: 'Attention aux Détails',
					description: 'Que ce soit dans le code ou dans la musique, je porte une attention particulière aux détails. La qualité et la précision sont essentielles à mon travail.',
					icon: 'i-carbon-view' as Icon,
					color: 'red'
				},
				{
					title: 'Équilibre Vie-Travail',
					description: 'Je crois en l\'importance d\'un équilibre sain entre vie professionnelle et personnelle. Mes hobbies m\'aident à rester créatif et motivé.',
					icon: 'i-carbon-home' as Icon,
					color: 'teal'
				}
			]
		},
		{
			id: 'values',
			title: 'Mes valeurs',
			subtitle: 'Ce en quoi je crois',
			icon: 'i-carbon-favorite' as Icon,
			content: `
				Je crois fermement en l'importance de la **qualité du code**, de la **collaboration** et de l'**innovation**. 
				J'aime *partager* mes connaissances et *apprendre* des autres. L'équilibre entre **rigueur technique** 
				et **créativité** est selon moi la clé pour créer des *solutions exceptionnelles*.
				
				La **transparence**, l'**honnêteté** et le *respect mutuel* sont les piliers de ma façon de travailler. 
				Je pense que les meilleures solutions émergent de la *diversité des perspectives* et de l'*écoute active*.
			`,
			image: '/images/mysudoku_bg.png',
			layout: 'image-text' as const
		},
		{
			id: 'hobbies',
			title: 'En dehors du code',
			subtitle: 'Mes passions et loisirs',
			icon: 'i-carbon-play' as Icon,
			content: `
				Quand je ne **code** pas, vous me trouverez probablement au **piano**, en train d'explorer de *nouvelles mélodies* 
				ou de perfectionner mes *morceaux préférés*. J'aime aussi découvrir de nouveaux **artistes** 
				et **genres musicaux**, ce qui enrichit ma *vision créative*.
				
				J'apprécie également les moments de détente avec des *amis*, les discussions sur la **technologie** 
				et l'*avenir*, et les **projets créatifs** qui sortent de l'ordinaire. Le *sport* et les *voyages* 
				complètent mon **équilibre personnel**.
			`,
			image: '/images/nanopong_bg.jpg',
			layout: 'image-text' as const
		},
		{
			id: 'contact',
			title: 'Collaborons ensemble',
			subtitle: 'Prêt pour de nouveaux défis',
			icon: 'i-carbon-collaborate' as Icon,
			content: `
				Je suis toujours ouvert aux **nouvelles opportunités** et *collaborations passionnantes*. 
				Que ce soit pour un **projet innovant**, une *opportunité professionnelle*, ou simplement 
				pour **échanger** sur la *technologie* et la *musique*, n'hésitez pas à me **contacter** !
				
				**Travaillons ensemble** pour créer quelque chose d'*extraordinaire*.
			`,
			image: '/images/setup-17.jpg',
			layout: 'image-text' as const
		}
	]
};

export default aboutData;
