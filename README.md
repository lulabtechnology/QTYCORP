# QTS Premium Corporate Site

Sitio corporativo premium para **Quality Techno Services (QTS)**, construido con **Next.js App Router**, **TypeScript**, **Tailwind CSS**, **Motion para React** y **Lucide React**.

## Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Motion para React
- Lucide React
- API Routes simples para formularios
- Optimizado para despliegue en Vercel

## Estructura general

- `app/` páginas, layout global, API routes, sitemap y robots
- `components/` componentes reutilizables de layout, secciones y formularios
- `lib/` rutas de assets, contenido centralizado y helper para envío de formularios
- `public/images/` imágenes, logos, posters y recursos visuales
- `public/videos/` videos del hero
- `public/docs/resources/` PDFs de ejemplo para la sección de recursos

## Cómo cambiar imágenes

1. Reemplace el archivo deseado dentro de `public/images/...`
2. Mantenga exactamente el mismo nombre de archivo para no tocar el código
3. Si cambia tamaños, mantenga proporciones similares a la sección donde se usa
4. Revise `ASSET_ROUTES.md` para ubicar cada asset

## Cómo cambiar videos del hero

Reemplace estos archivos:

- `public/videos/home/hero-desktop.mp4`
- `public/videos/home/hero-tablet.mp4`
- `public/videos/home/hero-mobile.mp4`

Fallback posters:

- `public/images/home/hero/hero-poster-desktop.jpg`
- `public/images/home/hero/hero-poster-tablet.jpg`
- `public/images/home/hero/hero-poster-mobile.jpg`

El componente responsable es `components/layout/hero-video.tsx`.

## Cómo cambiar textos

La mayor parte del contenido está centralizada en:

- `lib/site-data.ts`

Ahí puede ajustar:

- copy del Home
- títulos y descripciones por página
- diferenciales
- industrias
- fabricantes
- contacto
- CTAs

## Formularios

Se incluyen dos formularios con validación frontend:

- contacto
- solicitud de información técnica

API routes:

- `app/api/contact/route.ts`
- `app/api/resource-request/route.ts`

### Modo de funcionamiento

- Si configura un webhook externo, el sitio enviará los datos a ese endpoint.
- Si no configura webhook, el proyecto responde exitosamente en modo demo y deja registro en consola del servidor.

### Variables opcionales

- `QTS_CONTACT_WEBHOOK_URL`
- `QTS_RESOURCES_WEBHOOK_URL`

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run start
```

## Despliegue en Vercel

Consulte `DEPLOY_VERCEL.md`.

## Notas importantes

- Los assets visuales incluidos permiten dejar el proyecto funcional y con rutas listas.
- Los wordmarks de fabricantes incluidos deben considerarse placeholders visuales hasta reemplazarse por logos aprobados por marca.
- Los PDFs en `public/docs/resources/` son archivos de reemplazo funcionales para que no existan links muertos.
