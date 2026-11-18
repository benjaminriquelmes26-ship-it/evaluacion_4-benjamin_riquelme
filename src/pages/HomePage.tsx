import { Link } from 'react-router-dom';
import { profile } from '../data/portfolioData';
import './Pages.css';

export function HomePage() {
  return (
    <section className="page">
      <h2 className="page__title">Sobre mí</h2>
      <p>{profile.presentacion}</p>
      <Link className="page__link" to="/proyectos">
        Ver mis proyectos
      </Link>
    </section>
  );
}