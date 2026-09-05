import type { MetadataRoute } from 'next';
import { tools } from '@/data/tools';
import { categories } from '@/data/categories';
import { articles } from '@/data/articles';
import { comparisons } from '@/data/comparisons';
import { rankings } from '@/data/rankings';
import { longtailPages } from '@/data/longtail';
import { SITE_URL } from './layout';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/herramientas',
    '/categorias',
    '/blog',
    '/comparar',
    '/mejores-ias',
    '/sobre-nosotros',
    '/contacto',
    '/politica-de-privacidad',
    '/terminos',
    '/politica-de-cookies',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  const toolRoutes = tools.map((t) => ({
    url: `${SITE_URL}/herramientas/${t.slug}`,
    lastModified: new Date(`${t.lastUpdated}-01`),
  }));

  const categoryRoutes = categories.map((c) => ({
    url: `${SITE_URL}/categorias/${c.slug}`,
    lastModified: new Date(),
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${SITE_URL}/blog/${a.slug}`,
    lastModified: new Date(),
  }));

  const comparisonRoutes = comparisons.map((c) => ({
    url: `${SITE_URL}/comparar/${c.slug}`,
    lastModified: new Date(),
  }));

  const rankingRoutes = rankings
    .filter((r) => r.slug !== 'general')
    .map((r) => ({
      url: `${SITE_URL}/mejores-ias-${r.slug}`,
      lastModified: new Date(),
    }));

  const longtailRoutes = longtailPages.map((p) => ({
    url: `${SITE_URL}/ia-para-${p.slug}`,
    lastModified: new Date(),
  }));

  return [
    ...staticRoutes,
    ...toolRoutes,
    ...categoryRoutes,
    ...articleRoutes,
    ...comparisonRoutes,
    ...rankingRoutes,
    ...longtailRoutes,
  ];
}
