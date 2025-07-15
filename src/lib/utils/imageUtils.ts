/**
 * Utilitaire pour gérer les erreurs de chargement d'images
 * 
 * Cette fonction permet de remplacer une image qui n'a pas pu être chargée
 * par l'image de fallback définie dans les assets (Unknown), évitant ainsi 
 * les erreurs 404 dans la console.
 */
import Assets from '../data/assets';

export function handleImageError(event: Event) {
  const imgElement = event.target as HTMLImageElement;
  
  // Remplace l'image qui a échoué par l'image Unknown des assets
  imgElement.src = Assets.Unknown.light;
  
  // Empêche de nouvelles tentatives de chargement qui génèreraient d'autres erreurs
  imgElement.onerror = null;
  
  return true;
}
