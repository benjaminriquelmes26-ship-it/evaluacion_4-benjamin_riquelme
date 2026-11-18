import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import { profile } from '../../data/portfolioData';
import './Layout.css';

export function Layout() {
  return (
    <div className="layout">
      <header className="layout__header">
        <h1 className="layout__title">{profile.nombre}</h1>
        <p className="layout__subtitle">{profile.carrera}</p>
        <Navbar />
      </header>

      <main className="layout__main">
        <Outlet />
      </main>

      <footer className="layout__footer">
        <p>&copy; 2026 {profile.nombre}</p>
      </footer>
    </div>
  );
}