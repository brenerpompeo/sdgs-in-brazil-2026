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
    odsFocus: [17],
    bio: 'Presidente do Conselho de Administração do Pacto Global da ONU - Rede Brasil. Líder reconhecida em governança corporativa e sustentabilidade no setor privado brasileiro.'
  },
  {
    id: 'sanda-ojiambo',
    name: 'Sanda Ojiambo',
    role: 'CEO & Diretora Executiva',
    company: 'UN Global Compact (Sede ONU NY)',
    category: 'Liderança Institucional',
    confirmed: false,
    odsFocus: [17],
    bio: 'CEO e Diretora Executiva do Pacto Global das Nações Unidas. Lidera a maior iniciativa de sustentabilidade corporativa do mundo a partir da sede da ONU em Nova York.'
  },
  {
    id: 'sergio-danese',
    name: 'Embaixador Sérgio Danese',
    role: 'Representante Permanente do Brasil',
    company: 'Missão do Brasil junto às Nações Unidas',
    category: 'Keynote',
    confirmed: true,
    odsFocus: [16, 17],
    bio: 'Diplomata de carreira e Representante Permanente do Brasil junto à Organização das Nações Unidas em Nova York. Especialista em diplomacia multilateral e relações internacionais.'
  },
  {
    id: 'punjanit-leagnavar',
    name: 'Punjanit Leagnavar',
    role: 'Global Environment Policy Director',
    company: "L'Oréal",
    category: 'Painelista',
    confirmed: false,
    odsFocus: [12, 13, 17],
    bio: 'Diretora Global de Políticas Ambientais na L\'Oréal. Atua na formulação de estratégias internacionais de descarbonização, biodiversidade e rastreabilidade na cadeia de suprimentos.'
  },
  {
    id: 'toni-ballabriga',
    name: 'Toni Ballabriga',
    role: 'Global Head Sustainability Intelligence & Advocacy',
    company: 'BBVA',
    category: 'Painelista',
    confirmed: true,
    odsFocus: [8, 13, 17],
    bio: 'Líder global de inteligência em sustentabilidade e advocacy do BBVA. Referência europeia em finanças sustentáveis, taxonomia verde e critérios de investimento ESG.'
  },
  {
    id: 'eugenio-ricas',
    name: 'Eugênio Ricas',
    role: 'Director, Office of Internal Oversight',
    company: 'INTERPOL',
    category: 'Keynote',
    confirmed: true,
    odsFocus: [16, 17],
    bio: 'Diretor do Escritório de Supervisão Interna da INTERPOL e Delegado da Polícia Federal. Especialista na investigação de redes de crime organizado e governança de integridade corporativa.'
  },
  {
    id: 'sandra-coutinho',
    name: 'Sandra Coutinho',
    role: 'Jornalista Internacional',
    company: 'GloboNews / Nova York',
    category: 'Moderador',
    confirmed: true,
    odsFocus: [16],
    bio: 'Jornalista e correspondente internacional baseada em Nova York. Acompanha os principais fóruns multilaterais da ONU e a política econômica global há mais de duas décadas.'
  },
  {
    id: 'kaveh-madani',
    name: 'Kaveh Madani',
    role: 'Diretor do Instituto de Água, Meio Ambiente e Saúde',
    company: 'UNU-INWEH (Universidade das Nações Unidas)',
    category: 'Keynote',
    confirmed: true,
    odsFocus: [5, 6, 10, 17],
    bio: 'Cientista mundialmente renomado em gestão de recursos hídricos. Diretor do Instituto de Água da Universidade das Nações Unidas e ex-Vice-Ministro do Meio Ambiente do Irã.'
  },
  {
    id: 'calvin-lawrence',
    name: 'Calvin Lawrence',
    role: 'CEO & Especialista em IA Ética',
    company: 'IntegrityFirst.AI / ex-IBM Fellow',
    category: 'Keynote',
    confirmed: true,
    odsFocus: [8, 16, 18],
    bio: 'Autor e pioneiro no desenvolvimento de inteligência artificial responsável. Ex-IBM Fellow dedicado à mitigação de viés algorítmico e governança ética da tecnologia.'
  },
  {
    id: 'erika-george',
    name: 'Erika George',
    role: 'Associate Dean for Equity, Justice & Engagement',
    company: 'Boston University School of Law',
    category: 'Keynote',
    confirmed: true,
    odsFocus: [8, 10, 16],
    bio: 'Professora de Direito da Universidade de Boston e autoridade em Empresas e Direitos Humanos. Assessora governos e empresas na aplicação dos Princípios Orientadores da ONU.'
  },
  {
    id: 'renata-piazzon',
    name: 'Renata Piazzon',
    role: 'Presidente',
    company: 'Instituto Arapyaú',
    category: 'Moderador',
    confirmed: true,
    odsFocus: [13, 15, 17],
    bio: 'Presidente do Instituto Arapyaú e cofacilitadora da Uma Concertação pela Amazônia. Lidera iniciativas de bioeconomia, desenvolvimento territorial sustentável e filantropia de impacto.'
  },
  {
    id: 'bayo-akomolafe',
    name: 'Bayo Akomolafe',
    role: 'Distinguished Professor of American Studies',
    company: 'Hubert Humphrey Institute / The Emergence Network',
    category: 'Keynote',
    confirmed: true,
    odsFocus: [10, 16, 17],
    bio: 'Filósofo, escritor e professor internacionalmente aclamado. Investiga ontologias pós-humanistas, transição de sistemas globais e novos imaginários para o desenvolvimento sustentável.'
  },
  {
    id: 'guilherme-xavier',
    name: 'Guilherme Xavier',
    role: 'CEO',
    company: 'Pacto Global da ONU - Rede Brasil',
    category: 'Liderança Institucional',
    confirmed: true,
    odsFocus: [17],
    bio: 'CEO do Pacto Global da ONU - Rede Brasil. Responsável por liderar a maior rede local das Américas no engajamento do setor privado rumo às metas da Agenda 2030.'
  }
];
