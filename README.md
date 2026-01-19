# 🚀 Portfolio - Alexy VANOT

<div align="center">

![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)

[![Website](https://img.shields.io/website?url=https%3A%2F%2Falexyvanot.fr&style=for-the-badge)](https://alexyvanot.fr)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

**Portfolio personnel moderne et responsive présentant mes compétences, projets et expériences professionnelles.**

[🌐 Voir le site](https://alexyvanot.fr) • [📧 Contact](https://alexyvanot.fr/contact)

</div>

---

## 📋 Table des matières

- [✨ Fonctionnalités](#-fonctionnalités)
- [🛠️ Technologies utilisées](#️-technologies-utilisées)
- [📁 Structure du projet](#-structure-du-projet)
- [🚀 Installation et démarrage](#-installation-et-démarrage)
- [🐳 Déploiement avec Docker](#-déploiement-avec-docker)
- [⚙️ Configuration](#️-configuration)
- [📝 Scripts disponibles](#-scripts-disponibles)
- [🌐 Déploiement](#-déploiement)
- [📄 Licence](#-licence)

---

## ✨ Fonctionnalités

| Fonctionnalité | Description |
|----------------|-------------|
| 🏠 **Page d'accueil** | Présentation rapide, porte d'entrée du site |
| 👤 **À propos** | Section détaillée sur qui je suis |
| 💼 **Expériences** | Timeline interactive de mes expériences professionnelles |
| 🎓 **Formation** | Parcours éducatif avec détails des diplômes |
| 🛠️ **Compétences** | Catalogue organisé par catégories (langages, frameworks, outils, soft skills...) |
| 📂 **Projets** | Galerie de projets avec descriptions détaillées |
| 📝 **Blog** | Articles et publications techniques |
| 📄 **CV** | CV téléchargeable en PDF |
| 📧 **Contact** | Formulaire de contact intégré avec EmailJS |
| 🔍 **Recherche** | Recherche globale dans le contenu du site |
| 🌐 **Multilingue** | Support pour plusieurs langues |
| 🌙 **Mode sombre** | Thème clair/sombre adaptatif |
| 📱 **Responsive** | Design adapté à tous les écrans |

---

## 🛠️ Technologies utilisées

### Frontend
- **[SvelteKit 2](https://kit.svelte.dev/)** - Framework web full-stack moderne
- **[Svelte 5](https://svelte.dev/)** - Compilateur UI réactif
- **[TypeScript](https://www.typescriptlang.org/)** - Typage statique JavaScript
- **[TailwindCSS](https://tailwindcss.com/)** - Framework CSS utilitaire
- **[UnoCSS](https://unocss.dev/)** - Moteur CSS atomique
- **[Bits UI](https://www.bits-ui.com/)** - Composants UI headless

### Bibliothèques UI
- **[Lucide Svelte](https://lucide.dev/)** - Icônes SVG
- **[Iconify](https://iconify.design/)** - Collection d'icônes universelle
- **[Embla Carousel](https://www.embla-carousel.com/)** - Carrousel performant
- **[Svelte Sonner](https://svelte-sonner.vercel.app/)** - Notifications toast
- **[Vara.js](http://vara.js.org/)** - Animation d'écriture manuscrite

### Outils de développement
- **[Vite](https://vitejs.dev/)** - Build tool ultra-rapide
- **[ESLint](https://eslint.org/)** - Linting JavaScript/TypeScript
- **[Prettier](https://prettier.io/)** - Formatage de code
- **[PrismJS](https://prismjs.com/)** - Coloration syntaxique

### Backend & Services
- **[EmailJS](https://www.emailjs.com/)** - Service d'envoi d'emails
- **[Nginx](https://nginx.org/)** - Serveur web et reverse proxy
- **[Docker](https://www.docker.com/)** - Conteneurisation

---

## 🚀 Installation et démarrage

### Prérequis

- **Node.js** >= 18.x
- **npm** >= 9.x (ou pnpm/yarn)

### Installation

```bash
# Cloner le repository
git clone https://github.com/alexyvanot/alexyvanot.github.io.git

# Accéder au dossier
cd alexyvanot.github.io

# Installer les dépendances
npm install
```

### Démarrage en développement

```bash
# Lancer le serveur de développement
npm run dev

# Ou ouvrir automatiquement dans le navigateur
npm run dev -- --open
```

Le site de développement sera accessible sur `http://localhost:5173`

### Build de production

```bash
# Générer le build statique
npm run build

# Prévisualiser le build
npm run preview
```

Le site de build sera accessible sur `http://localhost:4173`

---

## 🐳 Déploiement avec Docker

### Prérequis Docker

- **Docker** >= 20.x
- **Docker Compose** >= 2.x

### Configuration des variables d'environnement

Créez un fichier `.env` à la racine du projet :

```env
# Configuration EmailJS pour le formulaire de contact
PUBLIC_SERVICE_ID=your_emailjs_service_id
PUBLIC_TEMPLATE_ID=your_emailjs_template_id
PUBLIC_EMAILJS_KEY=your_emailjs_public_key
```

### Lancement avec Docker Compose

```bash
# Build et démarrage
docker-compose up -d --build

# Vérifier les logs
docker-compose logs -f

# Arrêter les conteneurs
docker-compose down
```

Le site sera accessible sur `http://localhost:8080`

### Build Docker manuel

```bash
# Build de l'image
docker build -t alexyvanot-portfolio \
  --build-arg PUBLIC_SERVICE_ID=$PUBLIC_SERVICE_ID \
  --build-arg PUBLIC_TEMPLATE_ID=$PUBLIC_TEMPLATE_ID \
  --build-arg PUBLIC_EMAILJS_KEY=$PUBLIC_EMAILJS_KEY \
  .

# Lancement du conteneur
docker run -d -p 8080:80 --name portfolio alexyvanot-portfolio
```

---

## ⚙️ Configuration

### Variables d'environnement

| Variable | Description | Requis |
|----------|-------------|--------|
| `PUBLIC_SERVICE_ID` | ID du service EmailJS | ✅ |
| `PUBLIC_TEMPLATE_ID` | ID du template EmailJS | ✅ |
| `PUBLIC_EMAILJS_KEY` | Clé publique EmailJS | ✅ |

### Personnalisation des données

Les données du portfolio sont centralisées dans `src/lib/data/` :

| Fichier | Contenu |
|---------|---------|
| `base.ts` | Informations de base (nom, prénom) |
| `about.ts` | Section "À propos" |
| `skills.ts` | Compétences techniques |
| `experience.ts` | Expériences professionnelles |
| `education.ts` | Formation et diplômes |
| `projects.ts` | Projets réalisés |
| `blog.ts` | Articles de blog |
| `contact.ts` | Informations de contact |

---

## 📝 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Génère le build de production |
| `npm run preview` | Prévisualise le build de production |
| `npm run check` | Vérifie les types TypeScript |
| `npm run check:watch` | Vérifie les types en mode watch |
| `npm run lint` | Lint le code avec ESLint et Prettier |
| `npm run format` | Formate le code avec Prettier |

---

## 🌐 Déploiement

### GitHub Pages (Automatique)

Le site est configuré pour être déployé automatiquement sur GitHub Pages via le build statique généré par `@sveltejs/adapter-static`.

1. Pusher sur la branche `main`
2. Le build est généré dans le dossier `build/`
3. GitHub Pages sert le contenu statique

### Domaine personnalisé

Le domaine `alexyvanot.fr` est configuré via le fichier `CNAME`.

### Auto-hébergement

Pour un déploiement sur votre propre serveur :

1. Clonez le repository
2. Configurez les variables d'environnement
3. Lancez avec Docker Compose
4. Configurez un reverse proxy (optionnel)

---

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. 🍴 Fork le projet
2. 🔀 Créer une branche (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push sur la branche (`git push origin feature/AmazingFeature`)
5. 🔃 Ouvrir une Pull Request

---

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 📬 Contact

**Alexy VANOT** - Full Stack Developer & Software Engineer

- 🌐 Website: [alexyvanot.fr](https://alexyvanot.fr)
- 💼 LinkedIn: [linkedin.com/in/alexyvanot](https://linkedin.com/in/alexyvanot)
- 🐙 GitHub: [github.com/alexyvanot](https://github.com/alexyvanot)

---

<div align="center">

**⭐ Si ce projet vous a été utile, n'hésitez pas à lui donner une étoile !**

Made with ❤️ by [Alexy VANOT](https://alexyvanot.fr)

</div>

