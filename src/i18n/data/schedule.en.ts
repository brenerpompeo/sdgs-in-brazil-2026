import type { SessionItem } from '../../data/scheduleData';

type SessionOverride = Partial<Pick<SessionItem, 'title' | 'description' | 'speakerNamesRaw'>>;

export const SCHEDULE_EN: Record<string, SessionOverride> = {
  'abertura-institucional': {
    title: 'Institutional Opening',
    description:
      'Official opening bringing together complementary voices from the UN Global Compact - Brazil Network and its global headquarters in New York, establishing the Brazilian private sector’s business commitment to Agenda 2030.',
    speakerNamesRaw: [
      'Ana Paula Carracedo (Chair of the Board, UN Global Compact - Brazil Network)',
      'Sanda Ojiambo (CEO of the UN Global Compact - TBC)',
    ],
  },
  'keynote-danese': {
    speakerNamesRaw: [
      'Ambassador Sérgio Danese (Permanent Representative, Permanent Mission of Brazil to the UN - TBC)',
    ],
    title: 'The new map: geopolitics, regulation and opportunities for Brazil',
    description:
      'An analysis of global realignment, international requirements and new regulations reshaping the business environment and opening strategic opportunities for Brazil.',
  },
  'painel-esg-evidencia': {
    title: 'The ESG agenda: what the market now demands as evidence',
    description:
      'A diagnostic panel on moving past "ESG fatigue". Investors and sustainability leaders discuss the level of proof and transparency the global market now requires.',
  },
  'entrevista-crime-organizado': {
    speakerNamesRaw: [
      'Eugênio Ricas (Director, Office of Internal Oversight, Interpol)',
      'Sandra Coutinho (International Journalist)',
    ],
    title: 'The influence of organized crime on corporate value chains',
    description:
      'A discussion of the impacts of organized crime infiltrating legal operations — experiences from Mexico, Colombia and Brazil, focused on integrity, anti-corruption and human rights.',
  },
  'almoco-networking': {
    speakerNamesRaw: [
      'Leaders from the private sector, government and global organizations',
    ],
    title: 'Networking Lunch',
    description:
      'Lunch break and executive networking among the 300 invited leaders at United Nations Headquarters.',
  },
  'keynote-falencia-hidrica': {
    speakerNamesRaw: [
      'Kaveh Madani (Director of the Institute for Water, Environment and Health, UNU-INWEH)',
    ],
    title: 'Water bankruptcy: the next global systemic risk',
    description:
      'A presentation on water bankruptcy as a present-day reality affecting supply chains, operating costs and business resilience.',
  },
  'talk-falencia-hidrica': {
    speakerNamesRaw: [
      'Kaveh Madani (Director of the Institute for Water, UNU-INWEH)',
      'Radamés Casseb (CEO, AEGEA)',
    ],
    title: 'Water bankruptcy: the next global systemic risk',
    description:
      'A panel focused on water management, investment and reporting to prepare the private sector for scarcity risk.',
  },
  'keynote-ia-etica': {
    speakerNamesRaw: [
      'Calvin Lawrence (CEO, IntegrityFirst.AI)',
    ],
    title: 'AI and Ethics: using technology responsibly',
    description:
      'An analysis of the boundary between AI and corporate responsibility: algorithmic bias, data governance and digital human rights.',
  },
  'keynote-direitos-humanos': {
    speakerNamesRaw: [
      'Erika George (Associate Dean for Equity, Justice & Engagement - Boston University School of Law)',
    ],
    title: 'Business, Human Rights and the Future of Responsible Leadership',
    description:
      'A talk on responsible leadership and advancing human rights in the private sector amid rapid transformation.',
  },
  'painel-case': {
    speakerNamesRaw: [
      'Luciana Nicola (Sustainability Director, Itaú)',
      'Silvana Machado (Executive Director, Bradesco)',
      'Moderator: Renata Piazzon (President, Arapyaú Institute)',
    ],
    title: 'Accelerating Corporate Initiatives for Sustainable Development',
    description:
      'Leading Brazilian executives share practical initiatives and concrete results from social and environmental investment.',
  },
  'keynote-bayo-akomolafe': {
    speakerNamesRaw: [
      'Bayo Akomolafe (Hubert Humphrey Distinguished Professor of American Studies)',
    ],
    title: 'Beyond Certainty: Reimagining the Futures We Need',
    description:
      'A forward-looking talk on building a lasting legacy and the systemic regeneration of people, nature and institutions.',
  },
  'encerramento-oficial': {
    speakerNamesRaw: [
      'Guilherme Xavier (CEO, UN Global Compact - Brazil Network)',
    ],
    title: 'Official Closing',
    description:
      'Closing remarks from the CEO of the UN Global Compact - Brazil Network, anchoring the event in the Network’s ongoing journey and projects in Brazil.',
  },
};
