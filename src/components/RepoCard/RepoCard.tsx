import type { GitHubRepo } from '../../types';
import './RepoCard.css';

interface RepoCardProps {
  repo: GitHubRepo;
}

export function RepoCard({ repo }: RepoCardProps) {
  const fecha = new Date(repo.updated_at).toLocaleDateString('es-CL');

  return (
    <article className="repo-card">
      <h3 className="repo-card__title">{repo.name}</h3>
      <p className="repo-card__description">
        {repo.description ?? 'Sin descripción proporcionada en el repositorio.'}
      </p>
      <ul className="repo-card__meta">
        <li>Lenguaje: {repo.language ?? 'No especificado'}</li>
        <li>Estrellas: {repo.stargazers_count}</li>
        <li>Actualizado: {fecha}</li>
      </ul>
      <a
        className="repo-card__link"
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver código fuente
      </a>
    </article>
  );
}