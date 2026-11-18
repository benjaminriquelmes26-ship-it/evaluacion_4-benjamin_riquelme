# Portafolio profesional en React | Benjamin Riquelme Sanchez
Evaluación 4 (Proyecto Integrado Final) de Desarrollo de Frontend (ICINF1107), Ingeniería Civil en Informática, Universidad Católica de Temuco.

## Descripción
Portafolio personal dirigido a un docente, migrado desde la Evaluación 2 (HTML, CSS y JavaScript) a una Single Page Application con React, TypeScript y Vite. Incluye navegación con React Router, consumo de la API REST de GitHub, modo claro/oscuro con Context API y un formulario de contacto con validación.

## Referencia visual (Evaluación 2)
Captura del portafolio original, para comparar con esta versión: [docs/captura-e2.png](docs/captura-e2.png)

[Portafolio de la Evaluación 2](docs/captura-e2.png)
El repositorio original de la E2 se mantiene intacto como referencia: https://github.com/benjaminriquelmes26-ship-it/portafolio

## Tecnologías
 React y TypeScript (sin uso de `any`)
 Vite
 React Router (`BrowserRouter`, `Routes`, `Route`, `NavLink`)
 Context API (tema claro/oscuro)
 CSS con metodología BEM
 Git y GitHub (ramas, Conventional Commits y Pull Requests)

## Contrato técnico de la API

API elegida: GitHub REST API (Alternativa A), listado de repositorios públicos.

URL base: `https://api.github.com/users/benjaminriquelmes26-ship-it/repos`
Parámetros: `sort=updated` (los más recientes primero) y `per_page=6` (máximo de 6 resultados).
Autenticación: no requiere API key, por lo que no se exponen credenciales.
Estructura JSON esperada: arreglo de objetos. Los campos usados están tipados en `src/types/index.ts` (`GitHubRepo`):

```json
[
  {
    "id": 123456,
    "name": "portafolio",
    "description": "portafolio web personal",
    "html_url": "https://github.com/benjaminriquelmes26-ship-it/portafolio",
    "language": "CSS",
    "stargazers_count": 0,
    "updated_at": "2026-11-17T22:30:00Z"}]
```

 Estados de la petición: cargando (`role="status"`), éxito (tarjetas de repositorio) y error (`role="alert"`, con mensajes distintos para 403, 404 y falta de conexión).
Race conditions: el hook `useFetchApi` usa `AbortController` y cancela la petición en la función de limpieza de `useEffect`.
Limitación: sin autenticación, GitHub permite unas 60 consultas por hora por dirección IP. Si se supera, la página muestra un mensaje de error claro.
Justificación:muestra mis repositorios reales y el docente puede abrir el código fuente de cada proyecto.

Evidencia: [docs/lighthouse.png](docs/lighthouse.png)

Validación manual con teclado:
Todos los enlaces, botones y campos se alcanzan con `Tab` y se activan con `Enter`.
El foco es visible (`:focus-visible` con borde naranja).
No hay desbordamiento horizontal desde 320 px de ancho.

Medidas aplicadas:

HTML semántico: `header`, `nav`, `main`, `section`, `article`, `footer`.
Cada campo del formulario se asocia con su `label` mediante `htmlFor` e `id`.
Atributos ARIA: `aria-label`, `aria-invalid`, `aria-describedby` y `aria-live`.
Mensajes de estado con `role="status"` y `role="alert"`.
Diseño mobile first con tres puntos de quiebre (móvil, 768 px y 1024 px).


## Flujo de trabajo en Git

Ramas por funcionalidad, cada una con su Pull Request y merge a `main`, y commits con el estándar Conventional Commits: `docs/captura-e2`, `feat/componentes-datos`, `feat/rutas`, `feat/consumo-api`, `feat/tema-formulario` y `docs/documentacion`.

## Documentación adicional

 [INVENTARIO.md](INVENTARIO.md): trazabilidad de lo migrado desde la E2.
[uso_ia.md](uso_ia.md): declaración y bitácora de uso de IA.