export type Theme = 'light' | 'dark';

export interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

export interface ProjectItem {
  id: number;
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  urlRepo: string | null;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
}

export interface ContactFormData {
  nombre: string;
  correo: string;
  mensaje: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;