import type { Speaker } from '../../data/speakersData';

/** Sobrescreve apenas os campos textuais; o restante vem do dado em PT-BR. */
type SpeakerOverride = Partial<Pick<Speaker, 'name' | 'role' | 'company' | 'bio'>>;

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
    name: 'Ambassador Sérgio França Danese',
    role: 'Permanent Representative',
    company: 'Permanent Mission of Brazil to the United Nations',
    bio: 'Ambassador and Permanent Representative of Brazil to the United Nations in New York. Across more than four decades in diplomacy, he served as Secretary-General of Foreign Affairs and as Brazil’s Ambassador to Algeria, Argentina, South Africa and Peru.',
  },
  'eugenio-ricas': {
    role: 'Director, Office of Internal Oversight',
    company: 'Interpol',
    bio: 'Director of Interpol’s Office of Internal Oversight. A specialist in investigating organized crime networks and corporate integrity governance.',
  },
  'sandra-coutinho': {
    role: 'International Journalist',
    company: 'TV Globo',
    bio: 'Senior international correspondent for TV Globo in New York. For more than two decades she has covered the UN General Assembly, US foreign policy and global socioeconomic developments.',
  },
  'kaveh-madani': {
    role: 'Director of the Institute for Water, Environment and Health',
    company: 'UNU-INWEH (United Nations University)',
    bio: 'A world-renowned scientist in water resource management. Director of the United Nations University’s Institute for Water.',
  },
  'radames-casseb': {
    role: 'CEO',
    company: 'AEGEA',
    bio: 'CEO of Aegea Saneamento, leading the company’s operations with deep experience in regulated infrastructure and sanitation in advancing SDG 6.',
  },
  'calvin-lawrence': {
    name: 'Dr. Calvin Lawrence',
    role: 'CEO',
    company: 'IntegrityFirst.ai',
    bio: 'Dr. Calvin D. Lawrence, PhD is CEO of IntegrityFirst.AI and a former IBM Distinguished Engineer with over 30 years in AI. An international authority on algorithmic governance, data equity and responsible artificial intelligence.',
  },
  'erika-george': {
    role: 'Associate Dean for Equity, Justice & Engagement',
    company: 'Boston University School of Law',
    bio: 'Erika George is Associate Dean for Equity, Justice & Engagement at Boston University School of Law. Author of Incorporating Rights (Oxford University Press), she serves on the board of Shift, the leading center on the UN Guiding Principles on Business and Human Rights.',
  },
  'luciana-nicola': {
    role: 'Director of Institutional Relations and Sustainability',
    company: 'Itaú Unibanco',
    bio: 'Director of Institutional Relations and Sustainability at Itaú Unibanco and Vice-Chair of the Board of the UN Global Compact in Brazil.',
  },
  'silvana-machado': {
    role: 'Executive Director',
    company: 'Bradesco',
    bio: 'Executive Director at Bradesco. She works on corporate strategy, the ecological transition and financial innovation.',
  },
  'renata-piazzon': {
    role: 'CEO',
    company: 'Arapyaú Institute',
    bio: 'Renata Piazzon is CEO of the Arapyaú Institute. With 20 years of experience in environmental law and strategic philanthropy, she co-founded the Uma Concertação pela Amazônia network and sits on Brazil’s Council for Sustainable Economic and Social Development (CDESS).',
  },
  'bayo-akomolafe': {
    name: 'Dr. Bayo Akomolafe',
    role: 'Founder & Writer',
    company: 'The Emergence Network',
    bio: 'Dr. Bayo Akomolafe, who coined the concepts of “postactivism”, “transraciality” and “ontofugitivity”, is an internationally recognized speaker, teacher, public intellectual, essayist and author of two books: These Wilds Beyond our Fences: Letters to My Daughter on Humanity’s Search for Home (North Atlantic Books) and We Will Tell our Own Story: The Lions of Africa Speak.',
  },
  'guilherme-xavier': {
    role: 'CEO',
    company: 'UN Global Compact - Brazil Network',
    bio: 'CEO of the UN Global Compact - Brazil Network. He leads the largest local network in the Americas in private-sector engagement.',
  },
};
