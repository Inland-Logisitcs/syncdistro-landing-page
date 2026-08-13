import type { ContactCopy } from '../types';

export const contact: ContactCopy = {
  meta: {
    title: 'Contact',
    description: 'Get in touch to request a SyncDistro demo, ask a question or get support.',
  },
  hero: {
    tagline: 'Contact',
    title: "Let's talk about your field team",
    subtitle:
      'Tell us how many reps you have, how they log their visits today and which ERP you use. With that we can show you the whole flow using your own data.',
    ctaPrimary: 'Email us',
    ctaSecondary: 'Sign in to the platform',
  },
  channels: {
    title: 'How to reach us',
    subtitle: 'One inbox for sales, questions and support.',
    items: [
      {
        title: 'Sales and demos',
        description:
          'To learn about the product, book a demo or request a quote: <a class="text-primary underline dark:text-cyan-300" href="mailto:%EMAIL%">%EMAIL%</a>',
      },
      {
        title: 'User support',
        description:
          'If you already use SyncDistro and need help, write from your organization email to <a class="text-primary underline dark:text-cyan-300" href="mailto:%EMAIL%">%EMAIL%</a> and include your organization name.',
      },
      {
        title: 'Privacy and data',
        description:
          'For questions about personal data, location or recordings: <a class="text-primary underline dark:text-cyan-300" href="mailto:%PRIVACY_EMAIL%">%PRIVACY_EMAIL%</a>',
      },
      {
        title: 'ERP integrations',
        description:
          'If you want to know whether your ERP can be connected, tell us which one it is and we will review its API. See <a class="text-primary underline dark:text-cyan-300" href="%INTEGRATIONS%">integrations</a>.',
      },
    ],
  },
  process: {
    tagline: 'What happens next',
    title: 'How the first conversation usually goes',
    subtitle: 'No endless slide decks: we want to understand your operation before showing you screens.',
    items: [
      {
        title: 'You email us',
        description: 'A note with the size of the team and how they work today is enough to get started.',
      },
      {
        title: 'We talk',
        description: 'A short call to understand routes, your book of business and the ERP you use.',
      },
      {
        title: 'Demo in your context',
        description: 'We walk you through the flow using customers and products close to yours.',
      },
      {
        title: 'Proposal',
        description: 'Scope, recommended plan, and what it would take to get the system running.',
      },
    ],
  },
  cta: {
    title: 'Ready to get started?',
    subtitle: 'If your organization already uses SyncDistro, ask your admin to send you an email invitation.',
    primary: 'Email sales',
    secondary: 'Get the app',
  },
};
