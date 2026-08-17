import type { Speaker } from '../../data/speakersData';

/** Sobrescreve apenas os campos textuais; o restante vem do dado em PT-BR. */
type SpeakerOverride = Partial<Pick<Speaker, 'role' | 'company' | 'bio'>>;

export const SPEAKERS_EN: Record<string, SpeakerOverride> = {
  'ana-paula-carracedo': {
    role: 'Chair of the Board',
    company: 'UN Global Compact - Brazil Network',
    bio: 'Chair of the Board of the UN Global Compact - Brazil Network. A leader in corporate governance and private-sector sustainability.',
  },
  'sanda-ojiambo': {
    role: 'CEO & Executive Director',
    company: 'UN Global Compact (UN HQ NY)',
    bio: 'CEO and Executive Director of the United Nations Global Compact. She leads the world’s largest corporate sustainability initiative from UN headquarters in New York.',
  },
  'sergio-danese': {
    role: 'Permanent Representative',
    company: 'Permanent Mission of Brazil to the United Nations',
    bio: 'Permanent Representative of Brazil to the United Nations in New York. A specialist in multilateral diplomacy and international relations.',
  },
  'toni-ballabriga': {
    role: 'Global Head of Sustainability Intelligence & Advocacy',
    company: 'BBVA',
    bio: 'BBVA’s global lead for sustainability intelligence. A European reference in sustainable finance, green taxonomy and ESG criteria.',
  },
  'eugenio-ricas': {
    role: 'Director, Office of Internal Oversight',
    company: 'Interpol',
    bio: 'Director of Interpol’s Office of Internal Oversight. A specialist in investigating organized crime networks and corporate integrity governance.',
  },
  'sandra-coutinho': {
    role: 'International Journalist',
    company: 'GloboNews / New York',
    bio: 'Journalist and international correspondent in New York. She covers the UN’s main multilateral forums and global economic policy.',
  },
  'kaveh-madani': {
    role: 'Director of the Institute for Water, Environment and Health',
    company: 'UNU-INWEH (United Nations University)',
    bio: 'A world-renowned scientist in water resource management. Director of the United Nations University’s Institute for Water.',
  },
  'radames-casseb': {
    role: 'CEO',
    company: 'AEGEA',
    bio: 'CEO of Aegea Saneamento. He leads Brazil’s largest private sanitation company in advancing SDG 6 and water infrastructure investment.',
  },
  'calvin-lawrence': {
    role: 'CEO',
    company: 'IntegrityFirst.AI',
    bio: 'Author and pioneer in responsible artificial intelligence development. Dedicated to mitigating algorithmic bias and to ethical technology governance.',
  },
  'erika-george': {
    role: 'Associate Dean for Equity, Justice & Engagement',
    company: 'Boston University School of Law',
    bio: 'Law professor at Boston University and an authority on Business and Human Rights. She advises governments and companies on applying the UN Guiding Principles.',
  },
  'luciana-nicola': {
    role: 'Director of Institutional Relations and Sustainability',
    company: 'Itaú Unibanco',
    bio: 'A leader in corporate sustainability and ESG investment at Itaú Unibanco, driving sustainable finance in Brazil.',
  },
  'silvana-machado': {
    role: 'Executive Director',
    company: 'Bradesco',
    bio: 'Executive Director at Bradesco. She works on corporate strategy, the ecological transition and financial innovation.',
  },
  'renata-piazzon': {
    role: 'President',
    company: 'Arapyaú Institute',
    bio: 'President of the Arapyaú Institute and co-facilitator of Uma Concertação pela Amazônia. She leads bioeconomy and territorial development initiatives.',
  },
  'bayo-akomolafe': {
    role: 'Distinguished Professor of American Studies',
    company: 'Hubert Humphrey Institute / The Emergence Network',
    bio: 'An internationally acclaimed philosopher, writer and professor. His work explores post-humanist ontologies, systems transition and new imaginaries for 2030.',
  },
  'guilherme-xavier': {
    role: 'CEO',
    company: 'UN Global Compact - Brazil Network',
    bio: 'CEO of the UN Global Compact - Brazil Network. He leads the largest local network in the Americas in private-sector engagement.',
  },
};
