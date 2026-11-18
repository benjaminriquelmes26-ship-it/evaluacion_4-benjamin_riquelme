import { NavLink } from 'react-router-dom';
import './Navbar.css';

interface NavItem {
  to: string;
  label: string;
}

const links: NavItem[] = [
  { to: '/', label: 'Inicio' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/contacto', label: 'Contacto' },
];

export function Navbar() {
  return (
    <nav className="navbar" aria-label="Navegación principal">
      <ul className="navbar__list">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}