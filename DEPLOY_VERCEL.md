# Despliegue paso a paso en GitHub Web + Vercel

## 1) Subir el proyecto a GitHub Web

1. Cree un repositorio nuevo en GitHub.
2. Descomprima este ZIP en su computadora.
3. Entre al repositorio en GitHub Web.
4. Use **Add file > Upload files**.
5. Arrastre todas las carpetas y archivos del proyecto.
6. Espere a que suban completamente.
7. Haga commit con un mensaje como: `QTS premium site initial upload`.

## 2) Importar a Vercel

1. Entre a Vercel.
2. Haga clic en **Add New > Project**.
3. Conecte su cuenta de GitHub si hace falta.
4. Seleccione el repositorio del proyecto.
5. Verifique que Vercel detecte **Next.js** automáticamente.
6. No cambie nada extraño si no hace falta.
7. Haga clic en **Deploy**.

## 3) Variables de entorno opcionales

Si quiere que los formularios envíen datos a un webhook real:

- `QTS_CONTACT_WEBHOOK_URL`
- `QTS_RESOURCES_WEBHOOK_URL`

Dónde ponerlas:

1. En Vercel abra el proyecto.
2. Vaya a **Settings > Environment Variables**.
3. Agregue cada variable.
4. Guarde.
5. Haga un nuevo deploy.

## 4) Cómo verificar que el build corre

Después del deploy revise:

- que el Home cargue completo
- que el hero muestre video o poster fallback
- que el menú sticky funcione
- que las páginas internas carguen
- que los catálogos descarguen
- que el formulario muestre validación y mensaje de éxito

## 5) Si el video no carga

Revise primero:

- que existan estos archivos:
  - `public/videos/home/hero-desktop.mp4`
  - `public/videos/home/hero-tablet.mp4`
  - `public/videos/home/hero-mobile.mp4`
- que no hayan sido renombrados
- que mantengan extensión `.mp4`
- que no pesen 0 KB

Si el video no está disponible, el componente caerá al poster fallback.

## 6) Si faltan assets

Revise:

- nombres exactos
- carpetas exactas en `public/`
- mayúsculas y minúsculas
- que no se haya cambiado la ruta en el código sin actualizar el archivo

Use `ASSET_ROUTES.md` como referencia exacta.

## 7) Si el formulario no manda a un sistema externo

Eso ocurre cuando no hay webhook configurado.

En ese caso:

- la UI seguirá funcionando
- la API responderá correctamente
- el modo demo dejará la carga en consola del servidor

Para producción real, conecte el webhook desde Vercel.
