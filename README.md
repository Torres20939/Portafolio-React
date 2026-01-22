# Portafolio React

Portafolio personal desarrollado con React, Vite y React Router.

## Características

- 🎨 Diseño moderno y responsivo
- ⚡ Optimizado con Vite
- 🎭 Animaciones suaves con CSS
- 📱 Mobile-friendly
- 🚀 Listo para producción

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Torres20939/Portafolio-React.git
cd Portafolio-React

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

## Despliegue

### Vercel (Recomendado)

1. Push tu código a GitHub
2. Ve a [Vercel](https://vercel.com)
3. Conecta tu repositorio de GitHub
4. Vercel detectará automáticamente que es un proyecto Vite
5. Click en "Deploy"

**Vercel detectará automáticamente:**
- Build command: `npm run build`
- Output directory: `dist`

### GitHub Pages

1. Actualizar el `package.json` con el repositorio correcto
2. Ejecutar:

```bash
npm run build:ghpages
```

3. Push a GitHub con los cambios

### Despliegue Manual

```bash
# Para Vercel
npm run build:vercel

# Para GitHub Pages
npm run build:ghpages
```

El build se guardará en la carpeta `dist/`.

## Estructura del Proyecto

```
src/
├── App.jsx           # Componente principal
├── main.jsx          # Entrada de la aplicación
├── styles/
│   └── App.css       # Estilos globales
├── pages/
│   ├── proyectos/
│   │   ├── proyectos.jsx
│   │   └── proyectos.css
│   └── habilidades/
│       ├── habilidades.jsx
│       └── Habilidades.css
└── assets/
    └── ProyectosImg/
```

## Tecnologías

- React 19
- Vite 7
- React Router 7
- Lucide React (iconos)
- CSS3 (animaciones y diseño responsivo)

## Variables de Entorno

Crear un archivo `.env` en la raíz (opcional):

```env
# Para Vercel
VITE_BASE_URL=/

# Para GitHub Pages
# VITE_BASE_URL=/Portafolio-React/
```

## Optimizaciones

- ✅ Modal overlay sin blur para mejor rendimiento
- ✅ CSS con will-change para animaciones suaves
- ✅ Rutas de assets optimizadas
- ✅ Responsive design para todos los dispositivos

## Autor

Miguel Torres - [GitHub](https://github.com/Torres20939)

## Licencia

ISC
