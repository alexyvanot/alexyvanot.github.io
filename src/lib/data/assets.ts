import { base } from '$app/paths';

// Fonction modifiée pour gérer les fichiers manquants de manière générique
const url = (file: string) => `${base}/logos/${file}`;

// Image transparente 1x1 à utiliser comme fallback
const transparentGif = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

const asset = (lightFilename: string, darkFilename = lightFilename) => {
	return { 
		light: url(lightFilename), 
		dark: url(darkFilename),
		// Ajouter une propriété pour indiquer un fallback en cas d'erreur de chargement
		fallback: transparentGif
	};
};

const Assets = {
	AWS: asset('aws.svg'),
	Bootstrap: asset('bootstrap.svg'),
	C: asset('c.svg'),
	Cpp: asset('cpp.svg'),
	Celery: asset('celery.svg'),
	Django: asset('django.svg'),
	FastApi: asset('fastapi'),
	Flask: asset('flask.svg'),
	Go: asset('go.svg'),
	Kafka: asset('kafka.svg'),
	Neo4j: asset('neo4j.svg'),
	Nginx: asset('nginx.svg'),
	Numpy: asset('numpy.svg'),
	Pandas: asset('pandas.svg'),
	RabbitMQ: asset('rabbitmq.svg'),
	Rust: asset('rust.svg', 'rust-dark.png'),
	Scrapy: asset('scrapy.png'),
	Selenium: asset('selenium.svg'),
	Docker: asset('docker.svg'),
	Kubernetes: asset('kubernetes.svg'),
	Csharp: asset('csharp.svg'),
	Xamarin: asset('xamarin.svg'),
	TypeScript: asset('ts.png'),
	VueJs: asset('vue.png'),
	ReactJs: asset('react.svg'),
	Dart: asset('dart.png'),
	Kotlin: asset('kotlin.png'),
	Python: asset('python.png'),
	NodeJs: asset('node.png'),
	Deno: asset('deno.svg'),
	Svelte: asset('svelte.svg'),
	ExpressJs: asset('express.png'),
	JavaScript: asset('js.png'),
	Fastify: asset('fastify.svg', 'fastify-dark.png'),
	NestJs: asset('nest.svg'),
	Quasar: asset('quasar.svg'),
	SolidJs: asset('solid.svg'),
	Electron: asset('electron.png'),
	Flutter: asset('flutter.svg'),
	Java: asset('java.png'),
	AdonisJs: asset('adonis.png'),
	Android: asset('android.png'),
	Angular: asset('angular.png'),
	PostgreSQL: asset('postgres.png'),
	Firebase: asset('firebase.png'),
	Sass: asset('sass.png'),
	Unknown: asset('no-img.svg'),
	MongoDB: asset('mongodb.svg'),
	Redis: asset('redis.svg'),
	Tailwind: asset('tailwind.svg'),
	HTML: asset('html.svg'),
	Premiere: asset('premiere.svg'),
	Photoshop: asset('photoshop.svg'),
	CSS: asset('css.svg'),
	AfterEffects: asset('after-effects.svg'),
	Illustrator: asset('illustrator.svg'),
	Nuxt: asset('nuxt.png'),
	Vite: asset('vite.png'),
	Vitest: asset('vitest.svg'),
	Jest: asset('jest.png'),
	Unocss: asset('unocss.svg'),
	Ruvy: asset('ruvy.svg'),
	Postcss: asset('postcss.svg'),
	Soleil: asset('soleil.png'),
	AGH: asset('agh.png'),
	InTech: asset('intech.png'),
	ESIEA: asset('esiea.png'),
	PMF: asset('pmf.png'),
	// Assets manquants ajoutés
	Git: asset('no-img.svg'), // Pas de logo git trouvé, utilise fallback
	Linux: asset('no-img.svg'), // Pas de logo linux trouvé, utilise fallback
	SQLite: asset('no-img.svg'), // Pas de logo sqlite trouvé, utilise fallback
	CICD: asset('no-img.svg'), // Pas de logo ci/cd trouvé, utilise fallback
	Teamwork: asset('no-img.svg'), // Soft skill
	Autonomy: asset('no-img.svg'), // Soft skill
	Creativity: asset('no-img.svg'), // Soft skill
	MiniArticle: asset('mini-article.png'),
};

export default Assets;
