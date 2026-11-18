import { projects } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard/ProjectCard';
import './Pages.css';

export function ProjectsPage() {
  return (
    <section className="page">
      <h2 className="page__title">Trabajos del semestre</h2>
      <div className="page__grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}