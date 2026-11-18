import { useTheme } from '../../hooks/useTheme';
import './ThemeToggle.css';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button type="button" className="theme-toggle" onClick={toggleTheme}>
      {isDark ? '☀️ Modo claro' : '🌙 Modo oscuro'}
    </button>
  );
}