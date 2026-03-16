import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/la-empresa', '/servicios', '/productos', '/centro-de-recursos', '/contacto'];

  return routes.map((route) => ({
    url: `https://qualitytechnoservices.com${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
