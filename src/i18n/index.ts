/**
 * Configuración de idiomas del sitio.
 *
 * El español vive en la raíz (`/`, `/plataforma`, `/privacy`…) y el inglés bajo
 * `/en/`. Es importante que el español no lleve prefijo: las URLs `/privacy` y
 * `/terms` son las que se declaran en Google Play, y moverlas las rompería.
 *
 * La detección del idioma del navegador es del lado del cliente (el sitio es
 * estático, no hay servidor que lea `Accept-Language`) y solo actúa en la
 * portada; ver `LanguageRedirect.astro`.
 */
import { getPermalink, trimSlash } from '~/utils/permalinks';
import { SITE } from 'astrowind:config';
import { CONTACT_EMAIL, PRIVACY_EMAIL } from '~/links';

export const LOCALES = ['es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'es';

/** Clave de página → ruta en cada idioma (sin el `base` del sitio). */
export const ROUTES = {
  home: { es: '/', en: '/en' },
  mobileApp: { es: '/app-movil', en: '/en/mobile-app' },
  platform: { es: '/plataforma', en: '/en/platform' },
  integrations: { es: '/integraciones', en: '/en/integrations' },
  contact: { es: '/contacto', en: '/en/contact' },
  privacy: { es: '/privacy', en: '/en/privacy' },
  terms: { es: '/terms', en: '/en/terms' },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof ROUTES;

/** Etiqueta de cada idioma, en su propio idioma. */
export const LOCALE_NAMES: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
};

/** Valor de `lang`/`hreflang` para cada idioma. */
export const LOCALE_TAGS: Record<Locale, string> = {
  es: 'es',
  en: 'en',
};

/** Quita el `base` del sitio de un pathname y normaliza barras. */
const stripBase = (pathname: string): string => {
  const base = trimSlash(SITE.base || '');
  let path = trimSlash(pathname);
  if (base && (path === base || path.startsWith(`${base}/`))) {
    path = trimSlash(path.slice(base.length));
  }
  return path;
};

/** Idioma de una URL. Todo lo que empiece por `/en` es inglés. */
export const getLocale = (pathname: string): Locale => {
  const path = stripBase(pathname);
  return path === 'en' || path.startsWith('en/') ? 'en' : DEFAULT_LOCALE;
};

/** Clave de página de una URL, o `undefined` si no es una página del mapa. */
export const getRouteKey = (pathname: string): RouteKey | undefined => {
  const path = stripBase(pathname);
  const locale = getLocale(pathname);
  return (Object.keys(ROUTES) as RouteKey[]).find((key) => trimSlash(ROUTES[key][locale]) === path);
};

/** Permalink final (con `base` y barra final) de una página en un idioma. */
export const localePath = (key: RouteKey, locale: Locale): string => getPermalink(ROUTES[key][locale]);

/** Permalink de la portada de un idioma. */
export const localeHome = (locale: Locale): string => localePath('home', locale);

/** El otro idioma disponible. */
export const otherLocale = (locale: Locale): Locale => (locale === 'es' ? 'en' : 'es');

/**
 * Sustituye los marcadores de enlace de los textos por la URL correspondiente
 * en el idioma de la página. Así el texto traducido no tiene que conocer el
 * `base` del sitio ni los slugs de cada idioma.
 */
export const resolveLinks = (text: string, locale: Locale): string =>
  text
    .replaceAll('%PRIVACY%', localePath('privacy', locale))
    .replaceAll('%TERMS%', localePath('terms', locale))
    .replaceAll('%CONTACT%', localePath('contact', locale))
    .replaceAll('%MOBILE_APP%', localePath('mobileApp', locale))
    .replaceAll('%PLATFORM_PAGE%', localePath('platform', locale))
    .replaceAll('%INTEGRATIONS%', localePath('integrations', locale))
    .replaceAll('%EMAIL%', CONTACT_EMAIL)
    .replaceAll('%PRIVACY_EMAIL%', PRIVACY_EMAIL);

/** Aplica `resolveLinks` a los `description` de una lista de items. */
export const resolveItems = <T extends { description?: string }>(items: T[] = [], locale: Locale): T[] =>
  items.map((item) => (item.description ? { ...item, description: resolveLinks(item.description, locale) } : item));
