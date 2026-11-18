import type { ProjectItem } from '../../types';
import './ProjectCard.css';

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <h3 className="project-card__title">{project.titulo}</h3>
      <p className="project-card__description">{project.descripcion}</p>
      <p className="project-card__tech">
        <strong>Tecnologías:</strong> {project.tecnologias.join(', ')}
      </p>
      {project.urlRepo && (
        <a
          className="project-card__link"
          href={project.urlRepo}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver código en GitHub
        </a>
      )}
    </article>
  );
}