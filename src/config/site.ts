// ─────────────────────────────────────────────────────────────
// 345 Technology — site settings
// All IDs and shared settings live here. Leave an ID as '' to
// switch that integration off (useful for test builds).
// ─────────────────────────────────────────────────────────────

export const site = {
  name: '345 Technology',
  tagline: 'Confident migration, without disruption.',
  description:
    'Move from legacy middleware to modern Azure integration without putting your operations at risk. Plan-first, AI-assisted migration from 345 Technology.',
  url: 'https://345.technology',
  email: 'hello@345.technology', // TODO: confirm public contact address
  primaryCta: { label: 'Book a migration assessment', href: '/assessment/' },
};

export const integrations = {
  // HubSpot: Settings → Account details. Region is 'eu1' if your
  // HubSpot URL starts app-eu1.hubspot.com, otherwise 'na1'.
  hubspotPortalId: '',
  hubspotRegion: 'eu1',
  // HubSpot form IDs (Marketing → Forms → Share/Embed)
  forms: {
    assessment: '',
    contact: '',
  },
  // Google Analytics 4 Measurement ID, e.g. 'G-XXXXXXXXXX'
  ga4MeasurementId: '',
};

export const nav = [
  { label: 'What we migrate', href: '/what-we-migrate/' },
  { label: 'How we work', href: '/how-we-work/' },
  { label: 'Cost & timeline', href: '/cost-and-timeline/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];
