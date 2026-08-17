import type { Dictionary } from './index';

export const enUS: Dictionary = {
  meta: {
    title: 'SDGs in Brazil 2026 | September 18 • UN Headquarters • New York',
  },

  common: {
    dateImage: './assets/data_horizontal_en.png',
    brandsImage: './assets/marcas_en.png',
    brandsAlt: 'Brands: UN Global Compact - Brazil Network, AYA Earth Partners, Aegea, Permanent Mission of Brazil to the UN',
    interest: "I'm Interested",
    interestLong: "I'M INTERESTED IN ATTENDING",
    viewSchedule: 'View Schedule',
    backToTop: 'Back to top ↑',
    close: 'Close',
    languageSwitch: 'Switch language',
  },

  labels: {
    unHqShort: 'UN HQ NY',
    unHqNy: 'UN HEADQUARTERS NY',
    photosCount: (n: number) => `${n} PHOTOS`,
    officialRecord: 'Official Event Record',
    zoomHd: 'Click to view in HD',
    viewDetails: 'View Details →',
    defaultPillar: 'UN Global Compact - Brazil Network',
    sessionType: {
      'Abertura': 'OPENING',
      'Keynote': 'KEYNOTE',
      'Painel': 'PANEL',
      'Entrevista': 'INTERVIEW',
      'Talk': 'TALK',
      'Almoço': 'LUNCH',
      'Encerramento': 'CLOSING',
    },
    speakerCategory: {
      'Keynote': 'KEYNOTE',
      'Painelista': 'PANELIST',
      'Moderador': 'MODERATOR',
      'Liderança Institucional': 'INSTITUTIONAL LEADERSHIP',
    },
  },

  header: {
    brandDate: 'SEP 18 · UN HEADQUARTERS · NY',
    menuLabel: 'Open navigation menu',
    nav: {
      about: 'About',
      schedule: 'Schedule',
      speakers: 'Speakers',
      venue: 'Venue',
    },
  },

  hero: {
    countdownLabel: 'COUNTDOWN TO THE OPENING',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    disclaimer:
      '* Submitting this form does not guarantee a seat. All registrations are subject to approval by the organizers and to availability.',
    dateAlt: 'September 18, 2026 - UN Headquarters - NY',
  },

  preloader: {
    venue: 'UNITED NATIONS HEADQUARTERS · NY',
    date: 'SEPTEMBER 18, 2026',
    org: 'UN Global Compact - Brazil Network',
    tagline: 'EVIDENCE & REAL IMPACT',
    toward2030: 'TOWARD 2030',
  },

  about: {
    eyebrow: 'SDGS IN BRAZIL 2026 · UN HEADQUARTERS NY',
    title: 'Toward 2030: Time to Prove It.',
    quote: '"We committed. We acted. Now we prove it."',
    stats: [
      { value: '35%', label: 'of SDG targets are on track for 2030' },
      { value: '18%', label: 'of targets have regressed since 2015' },
      { value: '4 Years', label: 'is the remaining window to deliver Agenda 2030' },
    ],
    diagnosisEyebrow: 'DIAGNOSIS & GLOBAL CONTEXT',
    diagnosisTitle: 'The Urgency of Verifiable Results at UN Headquarters',
    diagnosisP1Before:
      "Ten years after Agenda 2030 was adopted, the world has made real progress, but the UN's 2025 SDG Report is blunt: none of the 17 Goals is moving at the required pace. With a financing gap of ",
    diagnosisP1Highlight: 'US$ 4 trillion per year',
    diagnosisP1After:
      ' across developing countries, these final four years demand empirical proof.',
    diagnosisP2:
      'On the Friday preceding the UN General Assembly (UNGA-81), Brazilian business leadership takes the floor at United Nations Headquarters in New York to show that sustainability is the only path to lasting business.',
    metaVenue: 'UNGA-81 · UN HQ NY',
    metaDate: 'SEPTEMBER 18, 2026',
    officialRecord: 'OFFICIAL RECORD',
    brandCity: 'SDGs in Brazil · New York',
    brandVenue: 'United Nations Headquarters',
    photos: [
      { tag: 'UN HEADQUARTERS · NEW YORK', title: 'Previous Edition at the United Nations ECOSOC Chamber' },
      { tag: 'OPENING PLENARY', title: 'Business Leadership in Multilateral Dialogue' },
      { tag: 'IMPACT DEBATES', title: 'Climate Commitments and a Just Transition' },
    ],
    forcesEyebrow: 'THE 2026 LANDSCAPE',
    forcesTitle: 'Three Simultaneous Forces Defining Global Leadership',
    forcesSubtitle:
      'The market now demands proof rather than intent. Those with empirical substance hold a real competitive advantage.',
    forcesFooterLabel: 'SDGs IN BRAZIL',
    forcesFooterCta: 'EVIDENCE 2026 →',
    forces: [
      {
        num: 'FORCE 01',
        tag: 'Geopolitics & Markets',
        title: 'The world has reorganized',
        desc: 'Unstable geopolitics, fragmented value chains and new social and environmental criteria are redefining who gets access to markets and global capital.',
      },
      {
        num: 'FORCE 02',
        tag: 'Substance & Metrics',
        title: 'ESG fatigue is real — and here',
        desc: 'The market is going through a moment of growing skepticism toward the ESG agenda — not because the topic lost relevance, but because companies must now show real leadership on sustainability.',
      },
      {
        num: 'FORCE 03',
        tag: 'Compliance & Transparency',
        title: 'Proof is the new standard',
        desc: 'Real-time traceability and new global regulations have made verifiable transparency a minimum requirement.',
      },
    ],
  },

  gallery: {
    eyebrow: 'ARCHIVE · UN HEADQUARTERS NY',
    title: 'Highlights From Our Latest Edition.',
    subtitle: (count: number) =>
      `Explore the defining moments of SDGs in Brazil at United Nations Headquarters — ${count} official photographs.`,
    photoAlt: (id: number) => `Official Photograph #${id}`,
    dragHint: 'DRAG TO EXPLORE',
    prev: 'Previous photo',
    next: 'Next photo',
  },

  cta: {
    eyebrow: 'SEPTEMBER 18, 2026 · UN HEADQUARTERS NY',
    title: 'Join the Brazilian Business Delegation at the UN.',
    subtitle:
      'Register your interest and connect your company to the leading global opportunities in impact, integrity and sustainable governance.',
    noticeTitle: 'ABOUT REGISTERING YOUR INTEREST',
    noticeBody:
      'Submitting this form does not guarantee participation in the event. All registrations are subject to approval by the organizers and to seat availability; approved applicants will receive an email confirming their participation.',
  },

  footer: {
    realization: 'ORGANIZED & OFFICIALLY ENDORSED BY',
    sponsorship: 'Sponsorship',
    description:
      "Brazil's leading business leadership forum at United Nations Headquarters in New York during UNGA-81 week.",
    copyright:
      '© 2026 SDGs in Brazil · UN Global Compact - Brazil Network. All rights reserved.',
    cookiePreferences: 'Cookie Preferences',
    tags: {
      sdgs: '18 SDGS',
      agenda: 'AGENDA 2030',
      unga: 'UNGA-81',
    },
  },

  schedule: {
    eyebrow: 'OFFICIAL AGENDA · UN HEADQUARTERS NY',
    title: 'Program Schedule.',
    titleAccent: 'September 18, 2026.',
    subtitle:
      'A dynamic format alternating keynotes, panels with audience Q&A, interviews and masterclasses focused on the 4 Pillars of the UN Global Compact - Brazil Network.',
    periods: { all: 'Full Program', manha: 'Morning (9 AM - 1 PM)', tarde: 'Afternoon (1 PM - 6 PM)' },
    pillars: {
      'session-1': 'Movement 1 · Governance',
      'session-2': 'Movement 1 · Geopolitics',
      'session-3': 'Movement 2 · ESG Metrics',
      'session-4': 'Movement 2 · Anti-corruption & Integrity',
      'session-5': 'Executive Lunch',
      'session-6': 'Movement 2 · Water Management',
      'session-7': 'Movement 2 · AI & Algorithmic Ethics',
      'session-8': 'Movement 2 · Human Rights',
      'session-9': 'Movement 3 · Purpose & Value',
      'session-10': 'Movement 3 · Bioeconomy',
      'session-11': 'Movement 3 · Transparency',
      'session-12': 'Movement 3 · Vision for the Future',
      'session-13': 'Institutional Closing',
    },
  },

  speakers: {
    eyebrow: 'EVENT SPEAKERS · UN HQ NY',
    title: 'Speaker Lineup.',
    titleAccent: 'Global & National Leaders.',
    subtitle:
      'Highly influential CEOs, diplomats and experts gathered to present evidence and metrics of sustainable transformation.',
    brandLabel: 'SDGs IN BRAZIL',
  },

  pastLeaders: {
    eyebrow: 'LEGACY & TRACK RECORD AT THE UN',
    title: 'Figures Who Joined SDGs.',
    titleAccent: 'Leadership in New York.',
    subtitle:
      'Internationally prominent CEOs, board members, athletes, artists and diplomats who have led SDGs in Brazil panels in previous editions.',
    scrollHint: 'Scroll or drag sideways',
    fallbackQuote:
      'A highly influential figure in social and environmental engagement and leadership at UN Headquarters in New York.',
  },

  sessionModal: {
    closeLabel: 'Close modal',
    aboutSession: 'ABOUT THIS SESSION',
    brand: 'SDGs IN BRAZIL 2026',
    venue: 'UN HQ NY',
  },

  sponsors: {
    eyebrow: 'INVESTING IN GLOBAL IMPACT · PARTNERSHIPS',
    title: 'Organizers & Sponsors.',
    titleAccent: 'An Alliance of Business Leaders.',
    subtitle:
      'Leading organizations driving the presence and prominence of Brazilian sustainability at United Nations Headquarters.',
    opportunityEyebrow: 'IMPACT OPPORTUNITY',
    opportunityTitle: 'Interested in sponsoring?',
    opportunityBody:
      'Be part of SDGs in Brazil 2026 at UN Headquarters in New York. Supporting the sustainability and SDG agenda is a statement of leadership and social and environmental responsibility.',
    benefits: [
      { title: 'INSTITUTIONAL VISIBILITY', desc: 'Strategic positioning in a high-level environment led by the United Nations at its New York headquarters.' },
      { title: 'C-SUITE RELATIONSHIPS', desc: 'Qualified access to 300 leaders from the private sector, government, diplomacy and civil society.' },
      { title: 'IMPACT ASSOCIATION', desc: 'Position your brand at the forefront of the social and environmental agenda and the Sustainable Development Goals.' },
      { title: 'GLOBAL NETWORK', desc: 'Stronger strategic partnerships with organizations committed to evidence and real metrics.' },
    ],
    contactEyebrow: 'PARTNERSHIPS & COMMERCIAL SUPPORT',
    contactBody:
      'Talk to our commercial coordinator to receive the sponsorship portfolio, support tiers and all structured benefits.',
    contactCta: 'TALK TO RAFAEL →',
    aboutEyebrow: 'ABOUT THE ORGANIZER',
    aboutTitle: 'About the UN Global Compact – Brazil Network',
    globalTitle: 'About the UN Global Compact',
    globalP1:
      "As a special initiative of the UN Secretary-General, the United Nations Global Compact is a call to companies worldwide to align their operations and strategies with ten universal principles in the areas of human rights, labor, environment and anti-corruption.",
    globalP2:
      'Launched in 2000, the Global Compact guides and supports the global business community in advancing UN goals and values through responsible corporate practices. It has more than 20,000 participants across 62 networks covering 77 countries, making it the largest corporate sustainability initiative in the world. There are also 5 Hubs in different regions and 14 additional country managers responsible for implementation in over 20 countries.',
    brazilTitle: 'The Global Compact – Brazil Network',
    brazilP1:
      'The Global Compact – Brazil Network was created in 2003 and is today the second largest local network in the world, with more than 2,000 participants. The 60-plus projects run in the country mainly cover: Water, Ocean, Waste, Agriculture, Forests, Climate, Human Rights and Labor, Anti-corruption, Engagement and Communication.',
    brazilP2:
      'In Brazil, the Global Compact brings companies together around strategic commitments that strengthen competitiveness, integrity, inclusion and climate action.',
    logoAlt: 'UN Global Compact - Brazil Network logo',
    stats: [
      { value: '2,000+', label: 'Brazil Network Participants' },
      { value: '393', label: 'Ambition 2030 Orgs' },
      { value: '2M+', label: 'Workers Impacted' },
      { value: '2nd Largest', label: 'Local Network Worldwide' },
    ],
  },

  venue: {
    eyebrow: 'LOCATION & LOGISTICS · NEW YORK',
    title: 'United Nations Headquarters.',
    subtitle:
      'Main halls of the official United Nations complex in Manhattan during the week of the 81st UN General Assembly.',
    mapTitle: 'United Nations Headquarters - Google Maps',
    mapCaption: '📍 UNITED NATIONS HEADQUARTERS · NY 10017',
    details: [
      { title: 'Official Address', detail: '405 E 42nd St\nNew York, NY 10017\nUnited States' },
      { title: 'Date & Time', detail: 'September 18, 2026\n10:00 AM to 8:30 PM (EDT)\nUNGA-81 week' },
      { title: 'Getting There', detail: 'JFK or EWR Airport\nSubway: Lines 4, 5, 6, 7 (42nd St)\nAdvance accreditation required' },
      { title: 'UN Security', detail: 'Restricted access to the complex\nCheck-in starts at 9:30 AM\nBring your physical passport' },
    ],
  },

  legal: {
    termsOfUse: 'Terms of Use',
    privacyPolicy: 'Privacy Policy',
  },
};
