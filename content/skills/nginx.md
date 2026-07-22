---
name: Nginx
slug: nginx
published: true
category: devops
color: green
logo: Nginx
---

::toc

# Nginx : le serveur web haute performance

## :i[pin] Définition et contexte professionnel

**Nginx** (prononcé "engine-x") est un serveur web **haute performance** créé en 2004, devenu le serveur web le plus utilisé au monde devant Apache. Il excelle dans trois rôles clés :

- **Serveur web** : service de fichiers statiques avec des performances exceptionnelles
- **Reverse proxy** : répartition de charge entre serveurs backend
- **Load balancer** : distribution du trafic et haute disponibilité

Dans l'industrie, Nginx est **omniprésent** : Netflix, Cloudflare, WordPress.com et des millions de sites l'utilisent. Sa légèreté et son architecture événementielle lui permettent de gérer des **milliers de connexions simultanées** avec une empreinte mémoire minimale.

---

## :i[search] Mes réalisations concrètes

### Ce portfolio : configuration production

Ce portfolio utilise Nginx pour servir le **build statique SvelteKit** avec une configuration optimisée.

**Configuration clé** :
- Compression gzip/brotli des assets
- Headers de cache agressifs pour les fichiers immutables
- Redirection HTTP → HTTPS
- Configuration CSP (Content Security Policy)

---

## :i[meter] Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| Serveur web / fichiers statiques | ::stars[5/5] Expert |
| Reverse proxy | ::stars[4/5] Avancé |
| SSL/TLS / Let's Encrypt | ::stars[4/5] Avancé |
| Load balancing avancé | ::stars[3/5] Intermédiaire |
| Modules Lua / OpenResty | ::stars[2/5] Débutant |

### Marge de progression

- **Rate limiting avancé** : protection DDoS, throttling par IP
- **OpenResty** : scripting Lua pour logique custom
- **Nginx Plus** : fonctionnalités enterprise (health checks actifs, dashboard)

### Place dans mon profil

Nginx est un **outil essentiel** de ma stack DevOps. Je l'utilise systématiquement en production, que ce soit devant Docker, Kubernetes ou directement sur un serveur.

### Conseils tirés de mon expérience

> *"Nginx est simple à configurer pour les cas basiques, mais investissez du temps pour comprendre les directives de performance (worker_connections, keepalive)."*

- Toujours tester les configurations avec `nginx -t` avant reload
- Utiliser des **includes** pour organiser les configurations
- Activer le **gzip** mais attention au CRIME attack sur HTTPS

---

## :i[growth] Évolution et perspectives

### Objectif à moyen terme

Maîtriser les configurations **haute disponibilité** et l'intégration avec Kubernetes (Ingress Controller).


