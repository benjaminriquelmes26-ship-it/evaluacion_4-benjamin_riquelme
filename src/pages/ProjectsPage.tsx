import { projects } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard/ProjectCard';
import { RepoCard } from '../components/RepoCard/RepoCard';
import { StatusMessage } from '../components/StatusMessage/StatusMessage';
import { useFetchApi } from '../hooks/useFetchApi';
import { GITHUB_REPOS_URL } from '../services/apiService';
import type { GitHubRepo } from '../types';
import './Pages.css';

export function ProjectsPage() {
  const { data: repos, loading, error } = useFetchApi<GitHubRepo[]>(GITHUB_REPOS_URL);

  return (
    <>
      <section className="page">
        <h2 className="page__title">Trabajos del semestre</h2>
        <div className="page__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="page" aria-labelledby="titulo-repos">
        <h2 className="page__title" id="titulo-repos">
          Repositorios en GitHub
        </h2>

        {loading && (
          <StatusMessage variant="loading" message="Cargando repositorios desde GitHub..." />
        )}

        {error && (
          <StatusMessage variant="error" message={`No fue posible obtener los datos: ${error}`} />
        )}

        {!loading && !error && repos && repos.length === 0 && (
          <StatusMessage variant="loading" message="Aún no hay repositorios públicos para mostrar." />
        )}

        {!loading && !error && repos && repos.length > 0 && (
          <div className="page__grid">
            {repos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}