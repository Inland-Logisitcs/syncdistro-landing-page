import type { PlatformCopy } from '../types';

export const platform: PlatformCopy = {
  meta: {
    title: 'Web system for admins and managers',
    description:
      'The SyncDistro web system: customer management, route planning and optimization, live tracking, visit history and orders into your ERP.',
  },
  hero: {
    tagline: 'Web system',
    title: 'Plan, assign and supervise from the browser',
    subtitle:
      'Admins and sales managers work straight on the map: they build routes from the customers they want visited, assign them to a rep, and follow progress without picking up the phone.',
    ctaPrimary: 'Sign in to the platform',
    ctaSecondary: 'See the mobile app',
  },
  note: {
    title: 'Note:',
    description:
      'the customer, visit and order views on this page are illustrative while the final screenshots are being prepared.',
  },
  modules: {
    tagline: 'Modules',
    title: 'What you manage from the web system',
    items: [
      {
        title: 'Customers',
        description:
          'Create, browse and edit customers with legal and trade name, business type, contact, address, tax details and attached documents.',
      },
      {
        title: 'Geolocation',
        description:
          'Coordinates taken from the address, entered manually or dropped on the map, with the customer location displayed.',
      },
      {
        title: 'Routes',
        description:
          'Built from the map, with the visiting order optimized, assigned to a rep and given an execution date.',
      },
      {
        title: 'Tracking',
        description:
          "The rep's live position while the route is active, the stored trail, timings, distance and an approximate fuel cost.",
      },
      {
        title: 'Visits',
        description:
          'Full history filtered by rep, customer, date, outcome or route, including the transcript and the conversation analysis.',
      },
      {
        title: 'Orders',
        description:
          'Review the orders created in the field, the result of each ERP submission and the audit trail of every operation.',
      },
      {
        title: 'Products',
        description: 'Browse the ERP catalog with code, name, description, category and base price.',
      },
      {
        title: 'Colleagues and roles',
        description:
          'Email invitations, role assignment, pending invitation management, and activating or deactivating users.',
      },
      {
        title: 'Organization',
        description:
          'Company details, tax information, logo, and regional settings for currency, date, time and number format.',
      },
    ],
  },
  customers: {
    tagline: 'Customers',
    title: 'One record per business',
    heading: 'Customer management',
    lead: 'The foundation routes and visits are built on.',
    cta: '',
    frameLabel: 'customers',
    items: [
      {
        title: 'Search before creating',
        description:
          'By name, address, phone or tax ID, so you never end up with the same business recorded three times.',
      },
      {
        title: 'Import from a CRM',
        description: 'Customers that already exist in an external system can be integrated instead of retyped.',
      },
      {
        title: 'Documents where they belong',
        description: 'Tax and commercial documents attached to the customer, available to the whole authorized team.',
      },
    ],
  },
  visits: {
    tagline: 'Visits',
    title: 'What actually happened at each business',
    heading: 'Visit history',
    lead: 'With the transcript and the AI proposal in plain view.',
    cta: '',
    frameLabel: 'visits / detail',
    items: [
      {
        title: 'Outcome and context',
        description:
          'Sale closed, interested, follow-up pending, not interested, business closed or nobody available, with notes and the reason for no sale.',
      },
      {
        title: 'Conversation on hand',
        description: "Audio and transcript attached to the visit, viewable according to the user's permissions.",
      },
      {
        title: 'Opportunities identified',
        description: 'The conversation analysis highlights pending follow-ups and agreed commitments.',
      },
    ],
  },
  tracking: {
    tagline: 'Tracking',
    title: 'Route progress, while it happens',
    heading: 'Route progress',
    lead: 'Tracking is suspended when the rep pauses the route.',
    cta: '',
    frameLabel: 'routes / detail',
    screenshotAlt:
      'Detail of an assigned route in SyncDistro, with the visiting order on the map and the GPS tracking panel',
    items: [
      {
        title: 'Live position',
        description: "A progress map with the rep's location while the route is under way.",
      },
      {
        title: 'Stored trail',
        description: 'The full path from the moment the route started is saved so it can be reviewed later.',
      },
      {
        title: 'Metrics for the day',
        description:
          'Idle time, time on the road, time spent at each store, distance covered and an approximate fuel cost.',
      },
    ],
  },
  access: {
    tagline: 'Access',
    title: 'Everyone sees what concerns them',
    subtitle:
      'Access to modules, views and actions depends on the assigned role, and all information is isolated per organization.',
    items: [
      {
        title: 'Sign-in and recovery',
        description: 'Access with email and password, secure sign-out, and password recovery by email.',
      },
      {
        title: 'Roles with permissions',
        description: 'Every user gets a role based on their job, and that role defines what they can see and do.',
      },
      {
        title: 'Colleague invitations',
        description:
          'The admin invites by email and assigns the role; the invitee accepts and sets up their credentials.',
      },
      {
        title: 'Audit trail',
        description: 'Records that identify which user changed relevant information, and when.',
      },
    ],
  },
  cta: {
    title: 'Want to see it with your own data?',
    subtitle: 'We set up a demo with your customers and your catalog so you can see the whole flow.',
    primary: 'Sign in to the platform',
    secondary: 'See ERP integrations',
  },
  screenshotAlt: {
    routePlanner: 'SyncDistro customer map with the lasso tool selecting businesses for a new route',
  },
};
