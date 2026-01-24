---
name: Streamlit
slug: streamlit
published: true
category: framework
color: red
logo: Streamlit
---

::toc

# Streamlit : le prototypage web Python ultra-rapide

## :i[pin] Définition et contexte professionnel

**Streamlit** est un framework Python open-source permettant de créer des **applications web interactives** en quelques lignes de code. Lancé en 2019 et acquis par Snowflake en 2022, il a révolutionné le prototypage en data science.

L'attrait de Streamlit dans l'industrie :

- **Rapidité** : une app fonctionnelle en 10 minutes
- **Pur Python** : pas besoin de connaître HTML/CSS/JavaScript
- **Réactif** : mise à jour automatique quand le code change
- **Widgets** : sliders, boutons, graphiques, tables sans effort
- **Déploiement** : Streamlit Cloud gratuit pour partager ses apps

Streamlit est devenu l'outil de choix pour les **data scientists** qui veulent présenter leurs résultats sans développer un frontend complet.

---

## :i[search] Mes réalisations concrètes

### Squat Counter IA : interface computer vision

Le projet **Squat Counter IA** utilise Streamlit pour son interface utilisateur.

**Ma contribution** :
- **Interface webcam** pour la détection de pose en temps réel
- **Jauge visuelle** dynamique montrant l'état de la pose
- **Configuration** des seuils de détection via sliders
- Affichage du **compteur de squats** en temps réel

**Résultat** : application fonctionnelle développée en une journée grâce à la simplicité de Streamlit.

→ [Voir le projet Squat Counter IA](/projects/squat-counter-ia)

### Quiz AI : interface de quiz

Le projet **Quiz AI** utilise également Streamlit pour présenter les questions et réponses générées par IA.

→ [Voir le projet Quiz AI](/projects/quiz-ai)

---

## :i[meter] Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| Widgets de base | ::stars[5/5] Expert |
| Layout et colonnes | ::stars[4/5] Avancé |
| Graphiques (Plotly, Altair) | ::stars[3/5] Intermédiaire |
| Caching et performance | ::stars[3/5] Intermédiaire |
| Components custom | ::stars[2/5] Débutant |

### Marge de progression

- **Components custom** : création de widgets en React
- **Authentification** : gestion des utilisateurs
- **Performance** : caching avancé, session state

### Contextualisation

Streamlit excelle pour le **prototypage rapide** et les **dashboards internes**. Pour des applications publiques avec besoins de performance et de customisation, je privilégie **SvelteKit**.

### Place dans mon profil

Streamlit est mon **outil de prototypage Python**. Quand j'ai besoin de créer rapidement une interface pour un projet ML/data science, c'est mon premier choix.

### Conseils tirés de mon expérience

> *"Streamlit est parfait pour les POC et les démos. Ne cherchez pas à en faire une app production complexe."*

- Utilisez **`st.cache_data`** pour les calculs coûteux
- **Session state** pour gérer l'état entre les re-runs
- Déployez sur **Streamlit Cloud** pour partager facilement

---

## :i[growth] Évolution et perspectives

### Objectif à moyen terme

Continuer à utiliser Streamlit pour le prototypage tout en explorant **Gradio** comme alternative pour les démos ML.


