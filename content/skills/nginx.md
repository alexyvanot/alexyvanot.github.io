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

## 📌 Définition et contexte professionnel

**Nginx** (prononcé "engine-x") est un serveur web **haute performance** créé en 2004, devenu le serveur web le plus utilisé au monde devant Apache. Il excelle dans trois rôles clés :

- **Serveur web** : service de fichiers statiques avec des performances exceptionnelles
- **Reverse proxy** : répartition de charge entre serveurs backend
- **Load balancer** : distribution du trafic et haute disponibilité

Dans l'industrie, Nginx est **omniprésent** : Netflix, Cloudflare, WordPress.com et des millions de sites l'utilisent. Sa légèreté et son architecture événementielle lui permettent de gérer des **milliers de connexions simultanées** avec une empreinte mémoire minimale.

Au **Synchrotron SOLEIL**, Nginx sert de **reverse proxy** devant les applications web, gérant le SSL/TLS, le routage et la mise en cache.

---

## 🔍 Mes réalisations concrètes

### TAP : reverse proxy et load balancing

Pour la plateforme **TAP**, j'ai configuré Nginx comme **point d'entrée unique** vers l'application.

**Ma contribution** :
- Configuration du **reverse proxy** vers le backend Spring Boot
- Mise en place du **SSL/TLS** avec Let's Encrypt
- **Load balancing** entre plusieurs instances de l'application
- **Caching** des assets statiques et des rapports Allure

**Résultat** : architecture robuste supportant les pics de charge lors des exécutions massives de tests.

→ [Voir le projet TAP](/projects/tap)

### Ce portfolio : configuration production

Ce portfolio utilise Nginx pour servir le **build statique SvelteKit** avec une configuration optimisée.

**Configuration clé** :
- Compression gzip/brotli des assets
- Headers de cache agressifs pour les fichiers immutables
- Redirection HTTP → HTTPS
- Configuration CSP (Content Security Policy)

---

## 🎯 Autocritique et positionnement

### Niveau de maîtrise

| Domaine | Niveau |
|---------|--------|
| Serveur web / fichiers statiques | ★★★★★ Expert |
| Reverse proxy | ★★★★☆ Avancé |
| SSL/TLS / Let's Encrypt | ★★★★☆ Avancé |
| Load balancing avancé | ★★★☆☆ Intermédiaire |
| Modules Lua / OpenResty | ★★☆☆☆ Débutant |

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

## 📈 Évolution et perspectives

### Objectif à moyen terme

Maîtriser les configurations **haute disponibilité** et l'intégration avec Kubernetes (Ingress Controller).


