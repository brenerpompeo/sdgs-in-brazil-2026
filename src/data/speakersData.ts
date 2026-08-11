export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  image?: string;
  bio: string;
  odsFocus?: number[];
  category: 'Keynote' | 'Painelista' | 'Moderador' | 'Liderança Institucional';
  confirmed: boolean;
}

export const SPEAKERS_DATA: Speaker[] = [
  {
    id: 'ana-paula-carracedo',
    name: 'Ana Paula Carracedo',
    role: 'Presidente do Conselho',
    company: 'Pacto Global da ONU - Rede Brasil',
    category: 'Liderança Institucional',
    confirmed: true,
    bio: 'Presidente do Conselho de Administração do Pacto Global da ONU - Rede Brasil. Líder em governança corporativa e sustentabilidade no setor privado.'
  },
  {
    id: 'sanda-ojiambo',
    name: 'Sanda Ojiambo',
    role: 'CEO & Diretora Executiva',
    company: 'UN Global Compact (Sede ONU NY)',
    category: 'Liderança Institucional',
    confirmed: true,
    bio: 'CEO e Diretora Executiva do Pacto Global das Nações Unidas. Lidera a maior iniciativa de sustentabilidade corporativa do mundo a partir da sede da ONU em Nova York.'
  },
  {
    id: 'sergio-danese',
    name: 'Embaixador Sérgio Danese',
    role: 'Representante Permanente',
    company: 'Missão do Brasil junto às Nações Unidas',
    category: 'Keynote',
    confirmed: true,
    bio: 'Representante Permanente do Brasil junto à Organização das Nações Unidas em Nova York. Especialista em diplomacia multilateral e relações internacionais.'
  },
  {
    id: 'toni-ballabriga',
    name: 'Toni Ballabriga',
    role: 'Global Head Sustainability Intelligence & Advocacy',
    company: 'BBVA',
    category: 'Painelista',
    confirmed: true,
    bio: 'Líder global de inteligência em sustentabilidade do BBVA. Referência europeia em finanças sustentáveis, taxonomia verde e critérios ESG.'
  },
  {
    id: 'eugenio-ricas',
    name: 'Eugênio Ricas',
    role: 'Director, Office of Internal Oversight',
    company: 'Interpol',
    category: 'Keynote',
    confirmed: true,
    bio: 'Diretor do Escritório de Supervisão Interna da Interpol. Especialista na investigação de redes de crime organizado e governança de integridade corporativa.'
  },
  {
    id: 'sandra-coutinho',
    name: 'Sandra Coutinho',
    role: 'Jornalista Internacional',
    company: 'GloboNews / Nova York',
    category: 'Moderador',
    confirmed: true,
    bio: 'Jornalista e correspondente internacional em Nova York. Acompanha os principais fóruns multilaterais da ONU e a política econômica global.'
  },
  {
    id: 'kaveh-madani',
    name: 'Kaveh Madani',
    role: 'Diretor do Instituto de Água, Meio Ambiente e Saúde',
    company: 'UNU-INWEH (Universidade das Nações Unidas)',
    category: 'Keynote',
    confirmed: true,
    bio: 'Cientista mundialmente renomado em gestão de recursos hídricos. Diretor do Instituto de Água da Universidade das Nações Unidas.'
  },
  {
    id: 'radames-casseb',
    name: 'Radamés Casseb',
    role: 'CEO',
    company: 'AEGEA',
    category: 'Painelista',
    confirmed: true,
    bio: 'CEO da Aegea Saneamento. Lidera a maior empresa privada de saneamento do Brasil no avanço do ODS 6 e investimentos de infraestrutura hídrica.'
  },
  {
    id: 'calvin-lawrence',
    name: 'Calvin Lawrence',
    role: 'CEO',
    company: 'IntegrityFirst.AI',
    category: 'Keynote',
    confirmed: true,
    bio: 'Autor e pioneiro no desenvolvimento de inteligência artificial responsável. Dedicado à mitigação de viés algorítmico e governança ética da tecnologia.'
  },
  {
    id: 'erika-george',
    name: 'Erika George',
    role: 'Associate Dean for Equity, Justice & Engagement',
    company: 'Boston University School of Law',
    category: 'Keynote',
    confirmed: true,
    bio: 'Professora de Direito da Universidade de Boston e autoridade em Empresas e Direitos Humanos. Assessora governos e empresas na aplicação dos Princípios da ONU.'
  },
  {
    id: 'luciana-nicola',
    name: 'Luciana Nicola',
    role: 'Diretora de Relações Institucionais e Sustentabilidade',
    company: 'Itaú Unibanco',
    category: 'Painelista',
    confirmed: true,
    bio: 'Liderança em sustentabilidade corporativa e investimentos ESG no Itaú Unibanco, impulsionando a finança sustentável no Brasil.'
  },
  {
    id: 'fabiana-costa',
    name: 'Fabiana Costa',
    role: 'Líder de Sustentabilidade',
    company: 'Bradesco',
    category: 'Painelista',
    confirmed: true,
    bio: 'Executiva de sustentabilidade do Bradesco, atuando na estruturação de produtos financeiros de transição ecológica e reporte de impacto.'
  },
  {
    id: 'renata-piazzon',
    name: 'Renata Piazzon',
    role: 'Presidente',
    company: 'Instituto Arapyaú',
    category: 'Moderador',
    confirmed: true,
    bio: 'Presidente do Instituto Arapyaú e cofacilitadora da Uma Concertação pela Amazônia. Lidera iniciativas de bioeconomia e desenvolvimento territorial.'
  },
  {
    id: 'bayo-akomolafe',
    name: 'Bayo Akomolafe',
    role: 'Distinguished Professor of American Studies',
    company: 'Hubert Humphrey Institute / The Emergence Network',
    category: 'Keynote',
    confirmed: true,
    bio: 'Filósofo, escritor e professor internacionalmente aclamado. Investiga ontologias pós-humanistas, transição de sistemas e novos imaginários para 2030.'
  },
  {
    id: 'guilherme-xavier',
    name: 'Guilherme Xavier',
    role: 'CEO',
    company: 'Pacto Global da ONU - Rede Brasil',
    category: 'Liderança Institucional',
    confirmed: true,
    bio: 'CEO do Pacto Global da ONU - Rede Brasil. Responsável por liderar a maior rede local das Américas no engajamento do setor privado.'
  }
];
