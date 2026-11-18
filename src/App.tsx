import { projects } from './data/portfolioData';
import { ProjectCard } from './components/ProjectCard/ProjectCard';

function App() {
  return (
    <main>
      <h1>Trabajos del semestre</h1>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </main>
  );
}

export default App;