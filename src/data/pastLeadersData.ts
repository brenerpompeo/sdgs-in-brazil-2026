export interface PastLeader {
  id: string;
  name: string;
  role: string;
  company: string;
  photo: string;
  edition: string;
  quote?: string;
  ods: number[];
  category: 'C-Suite' | 'Diplomacia & Governança' | 'Conselho & Impacto' | 'Keynote Global';
}

export const PAST_LEADERS: PastLeader[] = [
  {
    id: 'rachel-maia',
    name: 'Rachel Maia',
    role: 'Presidente do Conselho de Administração',
    company: 'Pacto Global da ONU - Rede Brasil',
    photo: './assets/leaders/rachel_maia.jpg',
    edition: 'EDIÇÃO 2024',
    quote: 'A verdadeira liderança ESG exige diversidade, equidade de gênero e representatividade nos conselhos.',
    ods: [5, 10, 8],
    category: 'Conselho & Impacto',
  },
  {
    id: 'tania-cosentino',
    name: 'Tânia Cosentino',
    role: 'Presidente',
    company: 'Microsoft Brasil',
    photo: './assets/leaders/tania_cosentino.jpg',
    edition: 'EDIÇÕES 2023 & 2024',
    quote: 'Tecnologia e Inteligência Artificial são aceleradores fundamentais para o cumprimento das metas da Agenda 2030.',
    ods: [9, 8, 17],
    category: 'C-Suite',
  },
  {
    id: 'roberto-sallouti',
    name: 'Roberto Sallouti',
    role: 'CEO',
    company: 'BTG Pactual',
    photo: './assets/leaders/roberto_sallouti.jpg',
    edition: 'EDIÇÃO 2024',
    quote: 'O mercado financeiro precisa direcionar capital em escala para a transição ecológica e descarbonização da economia.',
    ods: [8, 13, 17],
    category: 'C-Suite',
  },
  {
    id: 'luciana-ribeiro',
    name: 'Luciana Ribeiro',
    role: 'Co-fundadora & Chair',
    company: 'AYA Earth Partners',
    photo: './assets/leaders/rachel-maia.jpg',
    edition: 'EDIÇÃO 2024',
    quote: 'O Brasil possui vocação única para liderar a bioeconomia e a transição justa global baseada na natureza.',
    ods: [13, 15, 17],
    category: 'Conselho & Impacto',
  },
];
