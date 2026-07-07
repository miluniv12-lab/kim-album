# kim-album

Álbum de recuerdos con React + Vite + Tailwind CSS v4.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Estructura

- `src/components/` — piezas reutilizables (Navbar, PhotoCard, Footer)
- `src/pages/<Seccion>/<Seccion>.jsx` — una carpeta por sección (Home, Fechas, Fotos, Videos, Viajes, Compromisos)
- `src/data/<seccion>.js` — el contenido de cada sección, separado del diseño. Edita estos archivos para agregar fotos, fechas, viajes, etc. sin tocar el código visual.
- `public/images/` — pon aquí tus fotos reales y referencia la ruta como `/images/nombre.jpg` en los archivos de `data/`.

## Cómo agregar una foto real

1. Copia la imagen a `public/images/`, por ejemplo `public/images/playa.jpg`.
2. En `src/data/fotos.js`, agrega: `{ id: 4, src: '/images/playa.jpg', caption: 'ese día en la playa' }`.

## Cómo agregar una nueva sección en el futuro

1. Crea `src/pages/NuevaSeccion/NuevaSeccion.jsx`.
2. Crea `src/data/nuevaSeccion.js` si necesita datos propios.
3. Agrega la ruta en `src/App.jsx` y el link en `src/components/Navbar.jsx`.
