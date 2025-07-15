import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  // Vérifier si la requête concerne une ressource d'image
  if (event.url.pathname.startsWith('/logos/') && event.url.pathname.endsWith('.png')) {
    // Vérifier si c'est mini-article.png ou un autre fichier spécifique
    if (event.url.pathname.includes('mini-article.png') || 
        event.url.pathname.includes('fastapi') ||
        !await checkResourceExists(event.url.pathname)) {
      // Rediriger vers l'image fallback (no-img.svg)
      return new Response('', {
        status: 302,
        headers: {
          'Location': '/logos/no-img.svg'
        }
      });
    }
  }

  // Pour toutes les autres requêtes, continuer normalement
  const response = await resolve(event);
  return response;
};

/**
 * Vérifie si une ressource existe
 * Cette fonction est simulée car nous n'avons pas accès au système de fichiers côté serveur
 * Dans un environnement réel, vous devriez vérifier si le fichier existe
 */
async function checkResourceExists(pathname: string): Promise<boolean> {
  // Liste des ressources connues comme manquantes
  const knownMissingResources = [
    '/logos/mini-article.png',
    '/logos/fastapi',
    // Ajoutez d'autres ressources manquantes ici
  ];
  
  return !knownMissingResources.includes(pathname);
}
