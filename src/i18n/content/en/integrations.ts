import type { IntegrationsCopy } from '../types';

export const integrations: IntegrationsCopy = {
  meta: {
    title: 'ERP integrations',
    description:
      'SyncDistro reads your ERP product catalog and sends it the orders created in the field. Works with SyncFreight, Odoo, SAP and in-house systems over an API.',
  },
  hero: {
    tagline: 'Integrations',
    title: 'SyncDistro connects to the ERP you already run',
    subtitle:
      'Two points of contact: SyncDistro reads your product catalog and hands you the orders created in the field. Everything else keeps happening in your system.',
    ctaPrimary: 'Talk to us',
    ctaSecondary: 'See the web system',
  },
  note: {
    title: 'Works with:',
    description: 'SyncFreight, Odoo, SAP and in-house systems that expose an API.',
  },
  flows: {
    tagline: 'What travels between systems',
    title: 'Two flows, in opposite directions',
    items: [
      {
        title: 'From the ERP into SyncDistro: products',
        description:
          'The catalog is read from the ERP with its code, name, description, category and base price, and becomes available in the app and the web system for building orders.',
      },
      {
        title: 'From SyncDistro into the ERP: orders',
        description:
          'Every confirmed order is sent with the customer, the rep, the originating visit, the products, quantities, agreed prices and remarks.',
      },
    ],
  },
  setup: {
    tagline: 'Setup',
    title: 'Configured once, per organization',
    subtitle: 'No custom development: endpoints and data shape are declared from the web system.',
    items: [
      {
        title: 'Register the integration',
        description: 'Name, product lookup endpoint, order creation endpoint, credentials and status.',
      },
      {
        title: 'Map the products',
        description:
          'You define how to read and transform the ERP response so the catalog is used correctly inside SyncDistro.',
      },
      {
        title: 'Map the orders',
        description: 'You define how to convert a SyncDistro order into the exact format the target ERP expects.',
      },
      {
        title: 'Test the connection',
        description: 'Both endpoints are checked for a correct response before the integration is left active.',
      },
    ],
  },
  traceability: {
    tagline: 'Traceability',
    title: 'Know what happened to every order',
    heading: 'Nothing is sent blind',
    lead: 'If the ERP rejects an order, it is recorded together with the reason.',
    cta: '',
    frameLabel: 'orders',
    items: [
      {
        title: 'Submission status',
        description: 'Every order shows whether it was created in the ERP, left pending, or failed.',
      },
      {
        title: 'Operation logs',
        description:
          'Logs of order creation and submission are kept as evidence and to resolve errors without guessing.',
      },
      {
        title: 'Review before sending',
        description: 'The rep confirms or corrects the order before it leaves for the ERP.',
      },
    ],
  },
  faqs: {
    tagline: 'FAQs',
    title: 'Questions about the integration',
    items: [
      {
        title: 'What if my ERP is not on the list?',
        description:
          'If it exposes an API to look up products and create orders, it can be integrated by configuring its endpoints and the field mapping.',
      },
      {
        title: 'Does SyncDistro modify data in my ERP?',
        description:
          'It only creates orders through the endpoint you configure. It does not touch inventory, invoices or any other record.',
      },
      {
        title: 'Can I start without integrating anything?',
        description:
          'Yes. The app works on its own to manage customers and orders, and the integration is added when you are ready.',
      },
      {
        title: 'Who sets up the integration?',
        description:
          'An admin user in the organization, with help from your technical team if the field mapping needs adjusting.',
      },
    ],
  },
  cta: {
    title: 'Tell us which ERP you use',
    subtitle: 'We will look at its API with you and tell you what it takes to connect it.',
    primary: 'Email us',
    secondary: 'See the web system',
  },
  frameLabels: {
    integration: 'settings / integrations',
  },
};
