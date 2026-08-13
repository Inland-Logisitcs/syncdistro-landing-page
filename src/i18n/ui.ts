/**
 * Cadenas de interfaz (navegación, pie de página, botones, 404) por idioma.
 *
 * El texto de cada página vive en `src/i18n/content/<idioma>/`.
 */
import type { Locale } from './index';

export interface UIStrings {
  /** Ids de las secciones ancladas de la portada */
  sections: {
    howItWorks: string;
    features: string;
    faqs: string;
  };
  nav: {
    product: string;
    howItWorks: string;
    features: string;
    mobileApp: string;
    platform: string;
    integrations: string;
    contact: string;
    login: string;
    mainNavigation: string;
  };
  footer: {
    product: string;
    access: string;
    support: string;
    legal: string;
    loginLong: string;
    googlePlay: string;
    requestDemo: string;
    faqs: string;
    privacy: string;
    terms: string;
    locationUse: string;
    note: string;
  };
  announcement: {
    tag: string;
    text: string;
  };
  language: {
    label: string;
    switchTo: string;
  };
  notFound: {
    title: string;
    heading: string;
    body: string;
    home: string;
    contact: string;
  };
}

export const UI: Record<Locale, UIStrings> = {
  es: {
    sections: {
      howItWorks: 'como-funciona',
      features: 'funcionalidades',
      faqs: 'faqs',
    },
    nav: {
      product: 'Producto',
      howItWorks: 'Cómo funciona',
      features: 'Funcionalidades',
      mobileApp: 'App para vendedores',
      platform: 'Sistema web',
      integrations: 'Integraciones ERP',
      contact: 'Contacto',
      login: 'Ingresar',
      mainNavigation: 'Navegación principal',
    },
    footer: {
      product: 'Producto',
      access: 'Acceso',
      support: 'Soporte',
      legal: 'Legal',
      loginLong: 'Ingresar a la plataforma',
      googlePlay: 'Descargar en Google Play',
      requestDemo: 'Solicitar una demo',
      faqs: 'Preguntas frecuentes',
      privacy: 'Política de Privacidad',
      terms: 'Términos y Condiciones',
      locationUse: 'Uso de la ubicación',
      note: 'SyncDistro · Gestión comercial en campo · Todos los derechos reservados.',
    },
    announcement: {
      tag: 'NUEVO',
      text: 'La app para vendedores ya está disponible en Google Play »',
    },
    language: {
      label: 'Idioma',
      switchTo: 'Ver el sitio en inglés',
    },
    notFound: {
      title: 'Página no encontrada',
      heading: 'No encontramos esta página.',
      body: 'Puede que el enlace haya cambiado. Vuelve al inicio o revisa las secciones principales del sitio.',
      home: 'Ir al inicio',
      contact: 'Contacto',
    },
  },
  en: {
    sections: {
      howItWorks: 'how-it-works',
      features: 'features',
      faqs: 'faqs',
    },
    nav: {
      product: 'Product',
      howItWorks: 'How it works',
      features: 'Features',
      mobileApp: 'Sales rep app',
      platform: 'Web system',
      integrations: 'ERP integrations',
      contact: 'Contact',
      login: 'Sign in',
      mainNavigation: 'Main navigation',
    },
    footer: {
      product: 'Product',
      access: 'Access',
      support: 'Support',
      legal: 'Legal',
      loginLong: 'Sign in to the platform',
      googlePlay: 'Get it on Google Play',
      requestDemo: 'Request a demo',
      faqs: 'FAQs',
      privacy: 'Privacy Policy',
      terms: 'Terms and Conditions',
      locationUse: 'How location is used',
      note: 'SyncDistro · Field sales management · All rights reserved.',
    },
    announcement: {
      tag: 'NEW',
      text: 'The sales rep app is now available on Google Play »',
    },
    language: {
      label: 'Language',
      switchTo: 'Ver el sitio en español',
    },
    notFound: {
      title: 'Page not found',
      heading: "We couldn't find this page.",
      body: 'The link may have changed. Head back home or browse the main sections of the site.',
      home: 'Go to homepage',
      contact: 'Contact',
    },
  },
};

export const useUI = (locale: Locale): UIStrings => UI[locale];
