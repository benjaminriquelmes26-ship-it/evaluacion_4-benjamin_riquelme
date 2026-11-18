import type { ProjectItem } from '../types';

export const profile = {
  nombre: 'Benjamin Riquelme Sanchez',
  carrera: 'Estudiante de Ingeniería Civil en Informática',
  presentacion:
    'Soy Benjamin Riquelme Sanchez, estudiante de primer año de Ingeniería Civil en Informática en la Universidad Católica de Temuco. Este portafolio reúne los proyectos que he desarrollado durante mi primer semestre de carrera y en mis prácticas de manera autónoma.',
};

export const projects: ProjectItem[] = [
  {
    id: 1,
    titulo: 'Calculadora de límites',
    descripcion:
      'Proyecto de Cálculo Básico. Programa en Python que resuelve límites matemáticos. Aprendí a traducir un procedimiento matemático a lógica de programación.',
    tecnologias: ['Python'],
    urlRepo: null,
  },
  {
    id: 2,
    titulo: 'Portafolio web',
    descripcion:
      'Esta misma página, construida con HTML semántico y CSS responsivo. Aprendí a diseñar pensando en el usuario y en la accesibilidad.',
    tecnologias: ['HTML5', 'CSS3', 'Git y GitHub'],
    urlRepo: 'https://github.com/benjaminriquelmes26-ship-it/portafolio',
  },
  {
    id: 3,
    titulo: 'Videojuego en Python',
    descripcion:
      'Juego desarrollado el semestre pasado con la librería pygame. Aprendí a manejar eventos, ciclos de juego y organización del código.',
    tecnologias: ['Python', 'pygame'],
    urlRepo: null,
  },
];