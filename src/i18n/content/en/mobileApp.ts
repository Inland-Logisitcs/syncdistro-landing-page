import type { MobileAppCopy } from '../types';

export const mobileApp: MobileAppCopy = {
  meta: {
    title: 'Mobile app for sales reps',
    description:
      'The SyncDistro app for reps in the field: assigned routes, visit logging, voice notes with automatic transcription, and order creation.',
  },
  hero: {
    tagline: 'Sales rep app',
    title: "The day's route, in the rep's pocket",
    subtitle:
      'Check the assigned stops, log every visit with its outcome, leave a voice note and build the order before getting back in the car for the next one.',
    ctaPrimary: 'Get it on Google Play',
    ctaSecondary: 'See the web system',
  },
  captions: {
    routes: 'Assigned routes',
    activeRoute: 'Route in progress',
    map: 'Visiting order on the map',
  },
  note: {
    title: 'It works in two modes:',
    description: 'with routes and an ERP for the full operation, or on its own with just customers and orders.',
  },
  features: {
    tagline: 'In the app',
    title: 'What a rep can do',
    items: [
      {
        title: 'See the assigned route',
        description:
          'Route detail, suggested visiting order and every customer located on the map, with navigation to the current stop.',
      },
      {
        title: 'Start, pause and close the route',
        description:
          'Mark visits as started or completed, and pause the route when something unrelated to it comes up.',
      },
      {
        title: 'Log the visit',
        description: 'Visit outcome, notes, remarks, reason for no sale and a follow-up date where relevant.',
      },
      {
        title: 'Record a voice note',
        description:
          'Optionally record the conversation with the customer, or dictate the relevant details when the visit ends.',
      },
      {
        title: 'Automatic transcription',
        description:
          'The audio is transcribed with automatic language detection, in Spanish or English, and stays attached to the visit.',
      },
      {
        title: 'AI proposal',
        description:
          'Products, quantities, agreed prices, dates and follow-up actions are extracted from the transcript, ready to review.',
      },
      {
        title: 'Look up customers',
        description:
          "Search and browse the organization's customers and prospects, with their contact details and location.",
      },
      {
        title: 'Build the order',
        description:
          'Pick products from the ERP catalog, confirm quantities and prices, and submit the order for processing.',
      },
      {
        title: 'In their language',
        description: 'Interface in Spanish or English, with the currency and formats the organization configures.',
      },
    ],
  },
  visitFlow: {
    tagline: 'One visit, step by step',
    title: 'From the counter to the order in minutes',
    subtitle: 'The rep never types anything twice: what they say during the visit is the basis of the order.',
    items: [
      {
        title: 'Arrive at the stop',
        description: 'The app shows the current stop, the business address and the next one on the list.',
      },
      {
        title: 'Start the visit',
        description: 'The start time and coordinates are recorded automatically.',
      },
      {
        title: 'Record the note',
        description: 'On the way out, a voice note with what was agreed: products, quantities, prices and commitments.',
      },
      {
        title: 'Review and confirm',
        description:
          'The app proposes the visit outcome and the order lines; the rep fixes whatever needs fixing and saves.',
      },
    ],
  },
  standalone: {
    tagline: 'Customers',
    title: 'It also works without assigned routes',
    heading: 'Standalone mode',
    lead: 'Useful for teams that do not plan routes from the office yet, or that work without a connected ERP.',
    cta: '',
    items: [
      {
        title: 'Your book of business at hand',
        description: 'Active customers and prospects with their address, phone and status, with search and filters.',
      },
      {
        title: 'Add new businesses',
        description: 'Register a new business during the round, with its location and contact details.',
      },
      {
        title: 'Direct orders',
        description: 'Create an order for a customer without needing an active route or a scheduled visit.',
      },
    ],
    phoneAlt: 'List of customers and prospects in the SyncDistro mobile app',
  },
  permissions: {
    tagline: 'Transparency',
    title: 'Permissions and privacy',
    subtitle: 'The app asks for location, microphone and camera access. Here is how each one is used.',
    items: [
      {
        title: 'Location during the route',
        description:
          "While a route is in progress, the rep's position is recorded and sent to the web system to show progress and store the trail. Pausing the route suspends tracking; completing or cancelling it stops tracking.",
      },
      {
        title: 'Location of each visit',
        description:
          'When a visit starts, its coordinates are stored to record where it took place and to be able to geolocate the customer.',
      },
      {
        title: 'Microphone',
        description:
          'Only used when the rep chooses to record a voice note. Recording is optional and the visit can be closed without it.',
      },
      {
        title: 'Camera',
        description:
          'To take photos of the business directly from the app, without going through the gallery. It is only activated when the rep chooses to take the photo, and the image stays attached to the customer or the visit.',
      },
      {
        title: 'Revoking permissions',
        description:
          'Location, microphone and camera permissions can be withdrawn at any time from the device settings; some features will stop being available.',
      },
    ],
  },
  privacyNote: {
    title: 'More detail:',
    description:
      'see the <a class="underline" href="%PRIVACY%">Privacy Policy</a> for what data is collected, who can see it and how long it is kept.',
  },
  cta: {
    title: 'Put it in your team’s hands',
    subtitle: 'Reps need an invitation from their organization in order to sign in.',
    primary: 'Get it on Google Play',
    secondary: 'Request a demo',
  },
};
