export const GITHUB_USER = 'benjaminriquelmes26-ship-it';

export const GITHUB_REPOS_URL = `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=6`;

export function mensajeErrorHttp(status: number): string {
  if (status === 403) {
    return 'GitHub limitó las consultas por un momento. Intenta de nuevo en unos minutos.';
  }
  if (status === 404) {
    return 'No se encontró el usuario de GitHub indicado.';
  }
  return `El servidor respondió con un error (código ${status}).`;
}