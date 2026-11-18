import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import type { ThemeContextValue } from '../types';

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error('useTheme debe usarse dentro de un ThemeProvider');
  }
  return context;
}