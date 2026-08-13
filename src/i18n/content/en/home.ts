import type { HomeCopy } from '../types';

export const home: HomeCopy = {
  meta: {
    title: 'SyncDistro — Field sales management for distribution teams',
    description:
      'SyncDistro digitizes customer records, routes, sales visits and orders for reps in the field, and pushes those orders straight into your ERP.',
  },
  hero: {
    title: 'Everything your reps do in the field, <span class="text-accent">in one place</span>',
    subtitle:
      'SyncDistro digitizes the routes, visits and orders of the reps who call on neighborhood shops, grocery stores and supermarkets.',
    subtitleExtra:
      'A mobile app for the field team, a web system for whoever supervises them, and orders sent straight to your ERP.',
    ctaPrimary: 'Sign in to the platform',
    ctaSecondary: 'See how it works',
  },
  heroFrame: {
    label: 'customers / map',
    alt: 'SyncDistro customer map with the lasso tool selecting businesses for a new route',
  },
  note: {
    title: "It doesn't replace your ERP:",
    description:
      'SyncDistro covers field sales operations and sends orders to SyncFreight, Odoo, SAP or whichever system you already run.',
  },
  problem: {
    tagline: 'Where it starts',
    title: 'Field information gets lost between paper notes and scattered tools',
    subtitle:
      'When every visit is jotted down in a different notebook, chat or spreadsheet, the team loses time and the company loses sales.',
    items: [
      {
        title: 'Duplicate customers',
        description:
          'The same business gets recorded several times with different details, and nobody knows which record is the right one.',
      },
      {
        title: 'Documents that go missing',
        description: "Tax documents, storefront photos and contact details end up loose on the rep's phone.",
      },
      {
        title: 'Opportunities with no follow-up',
        description:
          'An interested customer asks the rep to come back in two weeks, and that commitment never reaches any system.',
      },
      {
        title: 'No visibility for management',
        description:
          'With no data on visits made or routes completed, running the team turns into a hallway conversation.',
      },
    ],
  },
  steps: {
    tagline: 'How it works',
    title: 'From planning the route to the order landing in your ERP',
    subtitle: 'One continuous flow between the office and the street, with nothing retyped from system to system.',
    items: [
      {
        title: 'Step 1: <span class="font-medium">Plan the route</span>',
        description:
          'On the web system map you pick customers and prospects — one by one or in bulk with the lasso tool — and SyncDistro works out the best visiting order.',
      },
      {
        title: 'Step 2: <span class="font-medium">Assign it to a rep</span>',
        description:
          'The route is assigned to a rep with an execution date. It can be edited, reassigned or cancelled before it starts.',
      },
      {
        title: 'Step 3: <span class="font-medium">Run the route and log the visit</span>',
        description:
          'The rep sees the route on the map, navigates to each stop, starts the visit and records the outcome: sale closed, interested, follow-up pending, not interested, business closed or nobody available.',
      },
      {
        title: 'Step 4: <span class="font-medium">Record a note and let AI organize it</span>',
        description:
          'A voice note is transcribed automatically in Spanish or English, and AI proposes products, quantities, prices and follow-up actions for the rep to simply review and confirm.',
      },
      {
        title: 'Step 5: <span class="font-medium">Send the order to the ERP</span>',
        description:
          'Once confirmed, the order is built and sent to your ERP, where invoicing, delivery and collection carry on as usual.',
      },
    ],
    done: 'Done',
    phoneAlt: 'Optimized route shown on the map in the mobile app',
  },
  features: {
    tagline: 'Features',
    title: 'Everything SyncDistro covers',
    subtitle: 'The modules the field team and their supervisors use every day.',
    items: [
      {
        title: 'Customers with geolocation',
        description:
          'Legal and trade name, business type, contact, address, tax details and coordinates taken from the address or dropped on the map.',
      },
      {
        title: 'Customer documents',
        description: 'Tax and commercial documents attached to the customer record, available to the whole team.',
      },
      {
        title: 'No duplicate records',
        description:
          'Search by name, address, phone or tax ID so the same business never gets created twice, with the option to import customers from an external CRM.',
      },
      {
        title: 'Optimized routes',
        description:
          'Pick customers on the map, get the visiting order calculated automatically, and track clear states: pending, assigned, in progress, completed or cancelled.',
      },
      {
        title: 'Visits with an outcome',
        description:
          'Start and end timestamps, visit outcome, notes, reason for no sale, and a follow-up date where relevant.',
      },
      {
        title: 'Voice notes with AI',
        description:
          'Automatic transcription in Spanish or English, plus analysis that identifies products, quantities, agreed prices and pending actions.',
      },
      {
        title: 'Orders into the ERP',
        description:
          'The order is built from the visit, the rep confirms it, and it goes to the ERP with delivery status and an audit trail.',
      },
      {
        title: 'Route tracking',
        description:
          "The rep's live position while the route is active, the stored trail, timings, distance and an approximate fuel cost.",
      },
      {
        title: 'Team and organization',
        description: 'Invite colleagues by email, roles with distinct permissions, and data isolated per organization.',
      },
    ],
  },
  reps: {
    tagline: 'For the field team',
    title: 'An app built to be used standing at the counter',
    heading: 'Mobile app for sales reps',
    lead: 'Available on Google Play. Works with assigned routes, or on its own with just customers and orders.',
    cta: 'Explore the mobile app',
    items: [
      {
        title: "The day's route, in order",
        description: 'Suggested stops, every customer located on the map, and navigation to the next stop.',
      },
      {
        title: 'Visits in a few taps',
        description: 'Open and close the visit with its outcome, without endless forms.',
      },
      {
        title: 'Talk instead of typing',
        description: 'A voice note on the way out replaces the notebook; transcription and AI take care of the rest.',
      },
      {
        title: 'Pause when needed',
        description:
          'If the rep has to deal with something unrelated to the route, pausing also stops location from being collected.',
      },
    ],
    phoneRoutesAlt: 'List of assigned routes in the mobile app',
    phoneCustomersAlt: 'Customer list in the mobile app',
  },
  managers: {
    tagline: 'For admins and managers',
    title: "Know what's happening out there, while it happens",
    heading: 'Web system for supervision',
    lead: 'Straight from the browser, nothing to install.',
    cta: 'Explore the web system',
    items: [
      {
        title: 'Routes under control',
        description: 'Create, optimize, assign, reassign and review history, filtering by rep, date, status or area.',
      },
      {
        title: 'Live progress',
        description: "The rep's position on the map while the route is in progress, with the full trail stored.",
      },
      {
        title: 'Visit history',
        description: 'Detail of every visit, filtered by rep, customer, date, outcome or route.',
      },
      {
        title: 'Opportunities surfaced',
        description: 'Visits with a sale, visits without one, and follow-ups AI spotted in the conversation.',
      },
    ],
    frameLabel: 'routes / detail',
    screenshotAlt:
      'Detail of an assigned route in SyncDistro, with the visiting order on the map and the GPS tracking panel',
  },
  erp: {
    tagline: 'Integrations',
    title: 'Orders end up where you already work',
    heading: 'SyncFreight, Odoo, SAP and more',
    lead: 'Invoicing, inventory, delivery and collection stay in your ERP. SyncDistro just hands it the orders.',
    cta: 'See ERP integrations',
    items: [
      {
        title: 'Catalog from your ERP',
        description: 'Reps quote using the products, categories and prices that already exist in your system.',
      },
      {
        title: 'Configurable mapping',
        description:
          'Endpoints, credentials and field transformation are configured per organization, with no custom development.',
      },
      {
        title: 'Visible outcome',
        description: 'Every order shows whether it was created, left pending or failed, together with its audit trail.',
      },
    ],
    frameLabel: 'orders',
    screenshotAlt: 'Orders module showing the result of each ERP submission',
  },
  stats: {
    title: 'Built for how the work actually happens',
    subtitle: 'Details that define how the system behaves.',
    items: [
      { title: 'Languages supported', amount: '2' },
      { title: 'Visit outcomes', amount: '6' },
      { title: 'Route states', amount: '5' },
      { title: 'Data per organization', amount: '100%' },
    ],
  },
  faqs: {
    tagline: 'Questions',
    title: 'Frequently asked questions',
    subtitle: 'What teams usually ask before getting started.',
    items: [
      {
        title: 'Do I need an ERP to use SyncDistro?',
        description:
          'No. The app works on its own to manage customers and orders, with no routes and no integration. Once you connect an ERP, the product catalog and automatic order submission become available.',
      },
      {
        title: "When is the rep's location used?",
        description:
          'Only while a route is in progress, to show its progress and store the trail. Pausing the route suspends tracking; completing or cancelling it stops tracking. The coordinates of each logged visit are also stored. The full detail is in our <a class="text-primary underline dark:text-cyan-300" href="%PRIVACY%">Privacy Policy</a>.',
      },
      {
        title: "Who can see a rep's position?",
        description:
          'Only users with the corresponding role inside their own organization. The information is not shared with other organizations or with third parties outside the service.',
      },
      {
        title: 'Are recordings mandatory?',
        description:
          'No. Recording the conversation or leaving an audio note is optional and works as a complement; the visit can be closed just as well by logging its outcome manually.',
      },
      {
        title: 'What if the AI gets it wrong?',
        description:
          'What AI extracts from the transcript is a proposal. The rep reviews, corrects or completes the information before saving it and before the order goes to the ERP.',
      },
      {
        title: 'Does it work if I run several companies or brands?',
        description:
          'Yes. Each organization has its own users, customers, routes and integrations, and its data stays isolated from the rest.',
      },
      {
        title: 'Is the system available in English?',
        description:
          'Yes. Both the mobile app and the web system are available in Spanish and English, and each organization sets its own currency and date, time and number formats.',
      },
      {
        title: 'Does SyncDistro invoice or handle deliveries?',
        description:
          'No. Invoicing, inventory, delivery logistics and collection stay in your ERP. SyncDistro focuses on field sales management and hands the orders over.',
      },
    ],
  },
  cta: {
    title: 'Start bringing order to your field operation',
    subtitle: 'Tell us how your team works and we will show you what it would look like in SyncDistro.',
    primary: 'Sign in to the platform',
    secondary: 'Get the app',
    demoLink: 'Request a demo',
  },
};
