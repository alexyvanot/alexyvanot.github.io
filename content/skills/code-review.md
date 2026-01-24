---
name: Code Review
slug: code-review
published: true
category: soft
color: teal
logo: CodeReview
---

::toc

## Ma définition

La code review est le processus d'**examen du code par des pairs** avant son intégration. C'est à la fois une pratique de qualité (détecter les bugs, améliorer le design) et un outil d'apprentissage (partage de connaissances, alignement des pratiques).

Être bon en code review signifie savoir **donner** des retours constructifs et **recevoir** des critiques de manière productive. C'est une compétence sociale autant que technique.

---

## Mes éléments de preuve

### 1. Reviewer — Retours constructifs

Dans les projets d'équipe, j'applique une approche bienveillante mais rigoureuse :

**Ce que je vérifie** :
- Logique métier correcte
- Edge cases gérés
- Performance (complexité algorithmique)
- Sécurité (injection, validation)
- Lisibilité et maintenabilité
- Tests présents et pertinents

**Comment je formule mes retours** :
- Questions plutôt qu'affirmations : "As-tu considéré le cas où... ?"
- Suggestions avec explication : "On pourrait utiliser X car..."
- Distinction critique/suggestion : "Bloquant:" vs "Nit:"
- Compliments sur les bonnes pratiques

### 2. Reviewee — Accepter les retours

J'ai appris à recevoir les code reviews de manière constructive :
- Ne pas prendre les critiques personnellement
- Demander des clarifications si nécessaire
- Remercier pour les retours utiles
- Implémenter rapidement les corrections

### 3. Auto-review — Avant de soumettre

Avant chaque PR, je fais une relecture personnelle :
- Relire le diff comme si c'était le code de quelqu'un d'autre
- Vérifier que le commit message est clair
- S'assurer que les tests passent
- Retirer les `console.log` et code de debug

---

## Checklist de code review

### Fonctionnel
- [ ] Le code fait ce qu'il est censé faire ?
- [ ] Les edge cases sont gérés ?
- [ ] Les erreurs sont gérées correctement ?

### Qualité
- [ ] Le code est lisible et bien nommé ?
- [ ] Il n'y a pas de duplication ?
- [ ] Les fonctions sont courtes et focalisées ?

### Sécurité
- [ ] Pas d'injection SQL/XSS possible ?
- [ ] Les données sensibles sont protégées ?
- [ ] Les validations sont présentes ?

### Performance
- [ ] Pas de requêtes N+1 ?
- [ ] Complexité algorithmique raisonnable ?
- [ ] Pas de calculs inutiles ?

---

## Ce que cette compétence m'apporte

- **Qualité collective** : Le code de l'équipe s'améliore
- **Apprentissage** : Je découvre d'autres approches
- **Collaboration** : Meilleures relations avec l'équipe
- **Expertise** : Lire beaucoup de code améliore le mien
