---
name: Quiz AI
slug: quiz-ai
category: technique
type: AI & Web Application
color: "#7C3AED"
published: true
logo: https://raw.githubusercontent.com/alexyvanot/quiz-ai/main/src/lib/assets/demo_init.png
period:
  from: 2025-09-26
  to: 2025-09-29
links:
  - label: GitHub
    url: https://github.com/alexyvanot/quiz-ai
skills:
  - svelte
  - typescript
  - javascript
  - nodejs
  - express
  - tailwindcss
  - docker
attachments:
  - label: Démo complète (GIF)
    src: https://raw.githubusercontent.com/alexyvanot/quiz-ai/main/src/lib/assets/demo_quiz.gif
  - label: Formulaire initial
    src: https://raw.githubusercontent.com/alexyvanot/quiz-ai/main/src/lib/assets/demo_init.png
  - label: Quiz interactif
    src: https://raw.githubusercontent.com/alexyvanot/quiz-ai/main/src/lib/assets/demo_player.png
  - label: Écran des résultats
    src: https://raw.githubusercontent.com/alexyvanot/quiz-ai/main/src/lib/assets/demo_result.png
---

# Quiz AI

**Quiz AI** est un générateur de quiz intelligent qui utilise l'IA pour créer des quiz interactifs à partir de n'importe quel texte. Construit avec des technologies modernes incluant SvelteKit, Express.js et les modèles Ollama AI.

Ce projet a été réalisé dans le cadre de mes études en **Prompt Engineering**.

![Démo de l'application|clean](https://raw.githubusercontent.com/alexyvanot/quiz-ai/main/src/lib/assets/demo_quiz.gif)

# Fonctionnalités

- 🎯 **Génération intelligente de quiz** - Créez des quiz à partir de n'importe quel texte grâce à l'IA
- 🤖 **Multiples modèles IA** - Support de llama3.2:latest et gemma:2b
- 🎮 **Lecteur de quiz interactif** - Interface moderne pour répondre aux quiz
- 📊 **Scoring en temps réel** - Feedback instantané et résultats détaillés
- 🐳 **Docker Ready** - Plusieurs modes de déploiement (default, GPU, local)
- ⚡ **Téléchargement auto des modèles** - Les modèles se téléchargent automatiquement au premier lancement
- 🌙 **Thème sombre** - Interface moderne inspirée de Discord
- 🔧 **Configurable** - Personnalisez le nombre de questions et de choix de réponses

# Architecture

| Composant | Technologie |
|-----------|-------------|
| **Frontend** | SvelteKit 5 avec Tailwind CSS |
| **Backend** | Express.js REST API |
| **Moteur IA** | Ollama (llama3.2:latest, gemma:2b) |
| **Conteneurisation** | Docker & Docker Compose |

# Comment ça fonctionne

1. **Coller votre texte** dans la zone de saisie
2. **Configurer** le nombre de questions (3-10) et de choix (2-4)
3. **Générer** le quiz avec le modèle IA de votre choix
4. **Répondre** aux questions de manière interactive
5. **Consulter** vos résultats avec le détail des bonnes/mauvaises réponses

# Installation et lancement

## 🚀 Quick Start (Recommandé)

```bash
git clone https://github.com/alexyvanot/quiz-ai.git && cd quiz-ai
docker compose up -d
```

Les modèles se téléchargent automatiquement au premier lancement (llama3.2:latest + gemma:2b)

> Accédez à l'application sur [http://localhost:5173](http://localhost:5173)

## GPU Accelerated (NVIDIA)

```bash
docker compose -f docker-compose.gpu.yml up -d
```

## Mode Ollama Local

```bash
# Démarrer Ollama localement
ollama serve

# Télécharger les modèles si nécessaire
ollama pull llama3.2:latest
ollama pull gemma:2b

# Lancer l'application
docker compose -f docker-compose.local.yml up -d
```

# Modèles IA

| Modèle | Taille | Description |
|--------|--------|-------------|
| **llama3.2:latest** | 2.0GB | Modèle principal de génération de questions |
| **gemma:2b** | 1.7GB | Modèle alternatif léger |

# Screenshots

![Formulaire initial|clean](https://raw.githubusercontent.com/alexyvanot/quiz-ai/main/src/lib/assets/demo_init.png)

![Quiz interactif|clean](https://raw.githubusercontent.com/alexyvanot/quiz-ai/main/src/lib/assets/demo_player.png)

![Résultats|clean](https://raw.githubusercontent.com/alexyvanot/quiz-ai/main/src/lib/assets/demo_result.png)
