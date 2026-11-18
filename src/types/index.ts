export type Theme = 'light' | 'dark';

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