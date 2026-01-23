---
name: Quiz AI - Générateur de quiz intelligent
slug: quiz-ai
category: technique
type: AI & Web Application
color: "#7C3AED"
published: true
pinned: true
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
team:
  - name: Alexy VANOT
    role: Développeur full-stack
---

::toc

## Mon regard critique

> Quiz AI représente ma **capacité à combiner IA et développement web** pour créer un produit utilisable. Ma valeur ajoutée ? Avoir conçu une expérience utilisateur fluide de bout en bout : coller un texte → configurer → jouer → voir ses résultats, le tout en quelques secondes grâce au prompt engineering optimisé.

**Mes apports principaux :**
- Architecture full-stack propre (SvelteKit + Express + Ollama)
- Prompt engineering pour générer des quiz cohérents et de qualité
- UX soignée avec feedback instantané et thème sombre moderne

**Ce que j'en retire :** Ce projet m'a appris l'importance du **prompt engineering** — la qualité des quiz dépend directement de la façon dont on formule les instructions à l'IA. J'ai aussi expérimenté le déploiement Docker avec support GPU.

---

## Présentation du projet

**Quiz AI** est un générateur de quiz intelligent qui utilise l'IA pour créer des questionnaires interactifs à partir de n'importe quel texte. Collez un article, un cours ou une documentation, et l'application génère automatiquement des questions à choix multiples pertinentes.

Le projet a été réalisé dans le cadre de mes études en **Prompt Engineering**.

![Démo de l'application|clean](https://raw.githubusercontent.com/alexyvanot/quiz-ai/main/src/lib/assets/demo_quiz.gif)

---

## Objectifs, Contexte et Enjeux

### Contexte académique

Ce projet a été réalisé en **4 jours** dans le cadre d'un module de **Prompt Engineering**. L'objectif était de créer une application concrète exploitant les capacités des LLMs (Large Language Models).

### Objectifs du projet

| Objectif | Réalisation |
|----------|-------------|
| Générer du contenu via IA | Intégration Ollama (llama3.2, gemma:2b) |
| Créer une interface utilisateur | SvelteKit + Tailwind CSS |
| Construire une API backend | Express.js REST API |
| Déployer facilement | Docker & Docker Compose |

### Enjeux et défis

**Enjeux :**
- **Qualité des quiz** : générer des questions pertinentes et des distracteurs crédibles
- **Performance** : temps de génération acceptable pour l'utilisateur
- **Configurabilité** : adapter le nombre de questions et de choix

**Défis rencontrés :**
- Prompt engineering pour éviter les questions ambiguës
- Parsing du JSON retourné par le LLM (parfois mal formaté)
- Gestion du temps de génération (10-30 secondes selon le modèle)

---

## Étapes de réalisation

### Phase 1 : Architecture et setup (1 jour)

- Choix de la stack : SvelteKit pour le frontend, Express pour l'API, Ollama pour l'IA
- Configuration Docker avec support GPU optionnel
- Structure du projet avec séparation claire des responsabilités

### Phase 2 : Intégration IA et prompt engineering (1,5 jours)

**Prompt engineering :**
- Conception du prompt système pour générer des quiz structurés
- Format JSON strict pour faciliter le parsing
- Gestion des cas limites (textes courts, langues mixtes)

**Backend Express :**
- Route `/generate` pour la création de quiz
- Gestion des timeouts et erreurs
- Support de plusieurs modèles Ollama

### Phase 3 : Interface utilisateur (1 jour)

**Fonctionnalités implémentées :**
- Zone de saisie pour coller le texte source
- Configuration (nombre de questions, choix, modèle IA)
- Lecteur de quiz interactif avec feedback instantané
- Écran de résultats avec détail des réponses

**Design :**
- Thème sombre inspiré de Discord
- Animations et transitions fluides
- Responsive design

### Phase 4 : Docker et documentation (0,5 jour)

- Dockerfile optimisé avec multi-stage build
- Docker Compose avec 3 profils (default, GPU, local)
- Téléchargement automatique des modèles au premier lancement
- README complet avec instructions d'installation

---

## Acteurs et interactions

| Acteur | Rôle | Interactions |
|--------|------|--------------|
| **Moi (développeur)** | Conception et développement full-stack | Projet individuel |
| **Enseignant Prompt Engineering** | Cadrage et évaluation | Consignes, feedback |
| **Ollama** | Moteur IA | Appels API pour la génération |

---

## Résultats obtenus

### Fonctionnalités livrées

- ✅ Génération de quiz à partir de n'importe quel texte
- ✅ Support de plusieurs modèles IA (llama3.2, gemma:2b)
- ✅ Configuration flexible (3-10 questions, 2-4 choix)
- ✅ Interface interactive avec scoring en temps réel
- ✅ Déploiement Docker one-command

### Performance

| Métrique | Valeur |
|----------|--------|
| Temps de génération (llama3.2) | 15-30 secondes |
| Temps de génération (gemma:2b) | 5-10 secondes |
| Qualité des questions | ~85% pertinentes |

### Pour moi

- **Maîtrise du prompt engineering** pour la génération structurée
- **Compétences full-stack** SvelteKit + Express
- **Expérience Docker** avec support GPU

---

## Lendemains du projet

### Aujourd'hui

Le projet est disponible sur GitHub et peut être déployé en une commande. Il sert de démonstration de mes compétences en IA et développement web.

### Améliorations envisagées

- Support de l'upload de fichiers (PDF, Word)
- Historique des quiz générés
- Mode multijoueur en temps réel
- Export des quiz (JSON, PDF)

### Ce que j'ai réinvesti

Les techniques de prompt engineering apprises ici me servent pour d'autres projets intégrant des LLMs.

---

## Compétences mobilisées

Ce projet m'a permis de mobiliser et développer les compétences suivantes :

:::buttons
::button[Svelte]{link=/skills/svelte icon=i-logos-svelte-icon}
::button[Autonomie]{link=/skills/autonomy icon=i-carbon-user-certification}
::button[Créativité]{link=/skills/creativity icon=i-carbon-idea}
:::
