---
name: Documentation
slug: documentation
published: true
category: soft
color: indigo
logo: Documentation
---

::toc

## Ma définition

La documentation est l'art de **transmettre l'information technique de manière claire et utile**. Pour un développeur, c'est écrire des README, des commentaires, des guides d'utilisation, des spécifications d'API. C'est aussi savoir adapter son discours selon l'audience (développeur, utilisateur final, manager).

Une bonne documentation est celle qu'on **n'a pas besoin de chercher** : elle est là où on en a besoin, au moment où on en a besoin, dans le format approprié.

---

## Mes éléments de preuve

### 1. Documentation technique — SUN Auto

Pour [SUN Auto](/projects/sun-auto), j'ai produit plusieurs types de documentation :

**Documentation développeur** :
- README avec instructions d'installation et de build
- Javadoc exhaustive sur les classes et méthodes publiques
- Architecture Decision Records (ADR) pour les choix techniques
- Diagrammes UML pour les flux complexes

**Documentation utilisateur** :
- Guide de démarrage rapide
- FAQ des problèmes courants
- Tutoriels pas-à-pas avec captures d'écran

### 2. Ce portfolio — Documentation vivante

Ce site est lui-même un exercice de documentation :
- Articles de blog techniques structurés
- Descriptions de projets claires
- Code source commenté
- [Guide de syntaxe markdown custom](/blog/syntaxe-markdown-custom-complete)

### 3. Commentaires de code — L'art du juste milieu

Je documente le "pourquoi", pas le "quoi" :

```javascript
// ❌ Mauvais : commente l'évident
// Incrémente i de 1
i++;

// ✅ Bon : explique l'intention
// Workaround pour le bug #123 de la lib XYZ
// qui ne gère pas les caractères Unicode
const sanitized = input.normalize('NFC');
```

---

## Types de documentation que je produis

| Type | Audience | Exemple |
|------|----------|---------|
| **README** | Développeurs | Installation, usage, contribution |
| **API docs** | Développeurs | Endpoints, paramètres, exemples |
| **Guides utilisateur** | End users | Tutoriels, FAQ |
| **ADR** | Équipe technique | Décisions d'architecture |
| **Commentaires** | Mainteneurs | Contexte, edge cases |
| **Changelog** | Tous | Historique des versions |

---

## Principes de bonne documentation

1. **Audience d'abord** : Qui va lire ? Que veut-il savoir ?
2. **Exemples concrets** : Le code parle mieux que les mots
3. **Maintenue à jour** : Documentation obsolète = pire que rien
4. **Accessible** : Facile à trouver, bien structurée
5. **Testée** : Suivre ses propres instructions pour vérifier

---

## Ce que cette compétence m'apporte

- **Onboarding facilité** : Nouveaux arrivants autonomes plus vite
- **Moins de questions** : La doc répond avant qu'on demande
- **Clarté de pensée** : Documenter force à structurer ses idées
- **Pérennité** : Le projet survit à mon départ
