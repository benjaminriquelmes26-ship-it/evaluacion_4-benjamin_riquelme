import { Link } from 'react-router-dom';
import './Pages.css';

export function NotFoundPage() {
  return (
    <section className="page">
      <h2 className="page__title">Error 404: página no encontrada</h2>
      <p>La dirección que buscas no existe.</p>
      <Link className="page__link" to="/">
        Volver al inicio
      </Link>
    </section>
  );
}