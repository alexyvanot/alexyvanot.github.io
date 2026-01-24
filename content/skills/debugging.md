---
name: Débogage
slug: debugging
published: true
category: soft
color: red
logo: Debugging
---

::toc

## Ma définition

Le débogage est l'art de **trouver et corriger les défauts dans le code**. C'est bien plus qu'utiliser `console.log` : c'est une compétence méthodique qui combine logique, patience, et connaissance des outils. Un bon débogueur sait formuler des hypothèses, les tester systématiquement, et documenter ses trouvailles.

Pour un développeur senior, le débogage représente souvent **30-50% du temps de travail**. Être efficace dans cette activité est donc crucial pour la productivité.

---

## Mes éléments de preuve

### 1. Bug complexe — Deadlock dans SUN Auto

Sur [SUN Auto](/projects/sun-auto), un bug faisait que les scripts Python se figeaient aléatoirement après quelques heures d'utilisation :

**Mon processus de débogage** :
1. **Reproduction** : Identifier les conditions déclenchantes
2. **Logging** : Ajouter des logs stratégiques pour tracer l'exécution
3. **Hypothèse** : Suspicion de race condition dans les threads
4. **Isolation** : Test unitaire reproduisant le problème
5. **Correction** : Refactoring de la gestion des processus
6. **Validation** : Tests de stress pendant 72h

**Temps de résolution** : 2 jours pour un bug qui existait depuis des mois.

### 2. Débogage frontend — Ce portfolio

Problème de rendu markdown avec des graphiques qui ne s'affichaient pas :
- Utilisation des DevTools pour inspecter le DOM
- Breakpoints dans le code de parsing
- Identification du problème : DOMPurify strippait les SVG
- Solution : Configuration de DOMPurify pour autoriser les SVG

### 3. Débogage réseau — APIs et intégrations

Sur [Georges le Chat](/projects/georges-le-chat), débogage des appels API OpenAI :
- Utilisation de Postman pour tester les requêtes isolément
- Analyse des headers et payloads
- Gestion des différents codes d'erreur

---

## Ma boîte à outils de débogage

| Contexte | Outils |
|----------|--------|
| **JavaScript/TypeScript** | DevTools, console, debugger, breakpoints |
| **Java** | IntelliJ debugger, logs SLF4J, JMX |
| **Python** | pdb, print debugging, logging module |
| **Réseau** | Postman, curl, Network tab DevTools |
| **Base de données** | Logs SQL, EXPLAIN, DataGrip |

---

## Principes de débogage efficace

1. **Reproduire d'abord** : Pas de fix sans reproduction fiable
2. **Une variable à la fois** : Changer une seule chose et tester
3. **Hypothèses explicites** : "Je pense que X car Y, je vais tester Z"
4. **Rubber duck debugging** : Expliquer le problème à voix haute
5. **Prendre du recul** : Parfois, une pause révèle la solution

---

## Ce que cette compétence m'apporte

- **Efficacité** : Résolution de bugs plus rapide
- **Compréhension** : Meilleure connaissance du système
- **Prévention** : Écrire du code plus défensif
- **Calme** : Les bugs ne me stressent plus
