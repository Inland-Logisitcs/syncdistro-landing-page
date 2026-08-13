import { CONTACT_EMAIL, PLATFORM_URL, PLAY_STORE_URL } from './links';
import { localeHome, localePath, type Locale } from './i18n';
import { useUI } from './i18n/ui';
import type { CallToAction } from './types';

/**
 * Menú de cabecera y pie de página, por idioma.
 *
 * Las anclas se concatenan al permalink de la portada: si se pasaran dentro de
 * `getPermalink()`, la barra final acabaría después del fragmento
 * (`/#seccion/`) y el enlace no saltaría a la sección.
 */
export const getHeaderData = (locale: Locale) => {
  const ui = useUI(locale);
  const home = localeHome(locale);

  return {
    links: [
      {
        text: ui.nav.product,
        links: [
          { text: ui.nav.howItWorks, href: `${home}#${ui.sections.howItWorks}` },
          { text: ui.nav.features, href: `${home}#${ui.sections.features}` },
          { text: ui.nav.mobileApp, href: localePath('mobileApp', locale) },
          { text: ui.nav.platform, href: localePath('platform', locale) },
          { text: ui.nav.integrations, href: localePath('integrations', locale) },
        ],
      },
      { text: ui.nav.contact, href: localePath('contact', locale) },
    ],
    actions: [
      {
        text: ui.nav.login,
        href: PLATFORM_URL,
        target: '_blank',
        variant: 'primary',
        icon: 'tabler:login',
      },
    ] as CallToAction[],
  };
};

export const getFooterData = (locale: Locale) => {
  const ui = useUI(locale);
  const home = localeHome(locale);

  return {
    links: [
      {
        title: ui.footer.product,
        links: [
          { text: ui.nav.howItWorks, href: `${home}#${ui.sections.howItWorks}` },
          { text: ui.nav.features, href: `${home}#${ui.sections.features}` },
          { text: ui.nav.mobileApp, href: localePath('mobileApp', locale) },
          { text: ui.nav.platform, href: localePath('platform', locale) },
          { text: ui.nav.integrations, href: localePath('integrations', locale) },
        ],
      },
      {
        title: ui.footer.access,
        links: [
          { text: ui.footer.loginLong, href: PLATFORM_URL },
          { text: ui.footer.googlePlay, href: PLAY_STORE_URL },
          { text: ui.footer.requestDemo, href: localePath('contact', locale) },
        ],
      },
      {
        title: ui.footer.support,
        links: [
          { text: ui.nav.contact, href: localePath('contact', locale) },
          { text: ui.footer.faqs, href: `${home}#${ui.sections.faqs}` },
          { text: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
        ],
      },
      {
        title: ui.footer.legal,
        links: [
          { text: ui.footer.privacy, href: localePath('privacy', locale) },
          { text: ui.footer.terms, href: localePath('terms', locale) },
          { text: ui.footer.locationUse, href: `${localePath('privacy', locale)}#ubicacion` },
        ],
      },
    ],
    secondaryLinks: [
      { text: ui.footer.terms, href: localePath('terms', locale) },
      { text: ui.footer.privacy, href: localePath('privacy', locale) },
    ],
    socialLinks: [
      { ariaLabel: 'Email', icon: 'tabler:mail', href: `mailto:${CONTACT_EMAIL}` },
      { ariaLabel: 'Google Play', icon: 'tabler:brand-google-play', href: PLAY_STORE_URL },
    ],
    footNote: ui.footer.note,
  };
};
