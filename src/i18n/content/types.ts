/**
 * Formas del texto de cada página. La estructura visual vive en
 * `src/components/pages/`, así que solo hay que traducir estos objetos.
 *
 * Los textos pueden contener HTML sencillo (los widgets lo insertan con
 * `set:html`) y los marcadores `%PRIVACY%`, `%CONTACT%` y `%PLATFORM%`, que se
 * sustituyen por la URL correspondiente en el idioma de la página.
 */

export interface CopyItem {
  title: string;
  description?: string;
}

export interface HeroCopy {
  /** Puede incluir HTML, p. ej. un <span> destacado */
  title: string;
  subtitle: string;
  /** Segunda mitad del subtítulo, oculta en móvil */
  subtitleExtra?: string;
  tagline?: string;
}

export interface SectionCopy {
  tagline?: string;
  title: string;
  subtitle?: string;
  items?: CopyItem[];
}

export interface SplitSectionCopy extends SectionCopy {
  /** Encabezado dentro de la columna de texto */
  heading: string;
  /** Frase de apoyo bajo el encabezado */
  lead: string;
  cta: string;
}

export interface HomeCopy {
  meta: { title: string; description: string };
  hero: HeroCopy & { ctaPrimary: string; ctaSecondary: string };
  heroFrame: { label: string; alt: string };
  note: { title: string; description: string };
  problem: SectionCopy;
  steps: SectionCopy & { done: string; phoneAlt: string };
  features: SectionCopy;
  reps: SplitSectionCopy & { phoneRoutesAlt: string; phoneCustomersAlt: string };
  managers: SplitSectionCopy & { frameLabel: string; screenshotAlt: string };
  erp: SplitSectionCopy & { frameLabel: string; screenshotAlt: string };
  stats: { title: string; subtitle: string; items: { title: string; amount: string }[] };
  faqs: SectionCopy;
  cta: { title: string; subtitle: string; primary: string; secondary: string; demoLink: string };
}

export interface MobileAppCopy {
  meta: { title: string; description: string };
  hero: HeroCopy & { ctaPrimary: string; ctaSecondary: string };
  captions: { routes: string; activeRoute: string; map: string };
  note: { title: string; description: string };
  features: SectionCopy;
  visitFlow: SectionCopy;
  standalone: SplitSectionCopy & { phoneAlt: string };
  permissions: SectionCopy;
  privacyNote: { title: string; description: string };
  cta: { title: string; subtitle: string; primary: string; secondary: string };
}

export interface PlatformCopy {
  meta: { title: string; description: string };
  hero: HeroCopy & { ctaPrimary: string; ctaSecondary: string };
  note: { title: string; description: string };
  modules: SectionCopy;
  customers: SplitSectionCopy & { frameLabel: string };
  visits: SplitSectionCopy & { frameLabel: string };
  tracking: SplitSectionCopy & { frameLabel: string; screenshotAlt: string };
  access: SectionCopy;
  cta: { title: string; subtitle: string; primary: string; secondary: string };
  screenshotAlt: { routePlanner: string };
}

export interface IntegrationsCopy {
  meta: { title: string; description: string };
  hero: HeroCopy & { ctaPrimary: string; ctaSecondary: string };
  note: { title: string; description: string };
  flows: SectionCopy;
  setup: SectionCopy;
  traceability: SplitSectionCopy & { frameLabel: string };
  faqs: SectionCopy;
  cta: { title: string; subtitle: string; primary: string; secondary: string };
  frameLabels: { integration: string };
}

export interface ContactCopy {
  meta: { title: string; description: string };
  hero: HeroCopy & { ctaPrimary: string; ctaSecondary: string };
  channels: SectionCopy;
  process: SectionCopy;
  cta: { title: string; subtitle: string; primary: string; secondary: string };
}
