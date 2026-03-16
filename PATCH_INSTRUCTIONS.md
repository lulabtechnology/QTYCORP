# QTS build fix patch

## Archivo a reemplazar
- `components/layout/hero-video.tsx`

## Qué corrige
Corrige el error de TypeScript en Vercel donde `useState` infería un string literal demasiado específico para `poster`.

## Cambio aplicado
Antes:
```tsx
const [poster, setPoster] = useState(assets.posters.homeHeroDesktop);
```

Ahora:
```tsx
const [poster, setPoster] = useState<string>(assets.posters.homeHeroDesktop);
```

## Cómo usarlo
1. Descomprime este ZIP.
2. En tu proyecto actual, reemplaza el archivo:
   - `components/layout/hero-video.tsx`
3. Haz commit y push otra vez a GitHub.
4. Vercel debería volver a intentar el build con este error corregido.
