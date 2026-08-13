import { getHomePermalink, getPermalink } from './utils/permalinks';
import { CONTACT_EMAIL, PLATFORM_URL, PLAY_STORE_URL } from './links';
import type { CallToAction } from './types';

export const headerData = {
  links: [
    {
      text: 'Producto',
      links: [
        {
          text: 'Cómo funciona',
          href: `${getHomePermalink()}#como-funciona`,
        },
        {
          text: 'Funcionalidades',
          href: `${getHomePermalink()}#funcionalidades`,
        },
        {
          text: 'App para vendedores',
          href: getPermalink('/app-movil'),
        },
        {
          text: 'Sistema web',
          href: getPermalink('/plataforma'),
        },
        {
          text: 'Integraciones ERP',
          href: getPermalink('/integraciones'),
        },
      ],
    },
    {
      text: 'Contacto',
      href: getPermalink('/contacto'),
    },
  ],
  actions: [
    {
      text: 'Ingresar',
      href: PLATFORM_URL,
      target: '_blank',
      variant: 'primary',
      icon: 'tabler:login',
    },
  ] as CallToAction[],
};

export const footerData = {
  links: [
    {
      title: 'Producto',
      links: [
        { text: 'Cómo funciona', href: `${getHomePermalink()}#como-funciona` },
        { text: 'Funcionalidades', href: `${getHomePermalink()}#funcionalidades` },
        { text: 'App para vendedores', href: getPermalink('/app-movil') },
        { text: 'Sistema web', href: getPermalink('/plataforma') },
        { text: 'Integraciones ERP', href: getPermalink('/integraciones') },
      ],
    },
    {
      title: 'Acceso',
      links: [
        { text: 'Ingresar a la plataforma', href: PLATFORM_URL },
        { text: 'Descargar en Google Play', href: PLAY_STORE_URL },
        { text: 'Solicitar una demo', href: getPermalink('/contacto') },
      ],
    },
    {
      title: 'Soporte',
      links: [
        { text: 'Contacto', href: getPermalink('/contacto') },
        { text: 'Preguntas frecuentes', href: `${getHomePermalink()}#faqs` },
        { text: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Política de Privacidad', href: getPermalink('/privacy') },
        { text: 'Términos y Condiciones', href: getPermalink('/terms') },
        // El ancla se concatena aparte: si se pasa dentro de getPermalink(), la
        // barra final acabaría después del fragmento (`/privacy#ubicacion/`).
        { text: 'Uso de la ubicación', href: `${getPermalink('/privacy')}#ubicacion` },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos y Condiciones', href: getPermalink('/terms') },
    { text: 'Política de Privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Correo', icon: 'tabler:mail', href: `mailto:${CONTACT_EMAIL}` },
    { ariaLabel: 'Google Play', icon: 'tabler:brand-google-play', href: PLAY_STORE_URL },
  ],
  footNote: `
    SyncDistro · Gestión comercial en campo · Todos los derechos reservados.
  `,
};
