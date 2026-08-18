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
    image: './assets/speakers/ana_paula_carracedo.jpg',
    category: 'Liderança Institucional',
    confirmed: true,
    bio: 'Presidente do Conselho de Administração do Pacto Global da ONU - Rede Brasil. Líder em governança corporativa e sustentabilidade no setor privado.'
  },
  {
    id: 'sanda-ojiambo',
    name: 'Sanda Ojiambo',
    role: 'CEO & Diretora Executiva',
    company: 'UN Global Compact (Sede ONU NY)',
    image: './assets/speakers/sanda_ojiambo.jpg',
    category: 'Liderança Institucional',
    confirmed: true,
    bio: 'CEO e Diretora Executiva do Pacto Global das Nações Unidas. Lidera a maior iniciativa de sustentabilidade corporativa do mundo a partir da sede da ONU em Nova York.'
  },
  {
    id: 'sergio-danese',
    name: 'Embaixador Sérgio França Danese',
    role: 'Representante Permanente',
    company: 'Missão do Brasil junto às Nações Unidas',
    image: './assets/speakers/sergio_danese.jpg',
    category: 'Keynote',
    confirmed: true,
    bio: 'Embaixador e Representante Permanente do Brasil junto às Nações Unidas (ONU) em Nova York. Com mais de quatro décadas de carreira diplomática, foi Secretário-Geral das Relações Exteriores e Embaixador do Brasil na Argélia, Argentina, África do Sul e Peru.'
  },
  {
    id: 'eugenio-ricas',
    name: 'Eugênio Ricas',
    role: 'Director, Office of Internal Oversight',
    company: 'Interpol',
    image: './assets/speakers/eugenio_ricas.jpg',
    category: 'Keynote',
    confirmed: true,
    bio: 'Diretor do Escritório de Supervisão Interna da Interpol. Especialista na investigação de redes de crime organizado e governança de integridade corporativa.'
  },
  {
    id: 'sandra-coutinho',
    name: 'Sandra Coutinho',
    role: 'Jornalista Internacional',
    company: 'TV Globo',
    image: './assets/speakers/sandra_coutinho.jpg',
    category: 'Moderador',
    confirmed: true,
    bio: 'Jornalista e correspondente internacional sênior da TV Globo em Nova York. Acompanha as sessões da Assembleia Geral da ONU, a política externa norte-americana e os desdobramentos socioeconômicos globais há mais de duas décadas.'
  },
  {
    id: 'kaveh-madani',
    name: 'Kaveh Madani',
    role: 'Diretor do Instituto de Água, Meio Ambiente e Saúde',
    company: 'UNU-INWEH (Universidade das Nações Unidas)',
    image: './assets/speakers/kaveh_madani.jpg',
    category: 'Keynote',
    confirmed: true,
    bio: 'Cientista mundialmente renomado em gestão de recursos hídricos. Diretor do Instituto de Água da Universidade das Nações Unidas.'
  },
  {
    id: 'radames-casseb',
    name: 'Radamés Casseb',
    role: 'CEO',
    company: 'AEGEA',
    image: './assets/speakers/radames_casseb.jpg',
    category: 'Painelista',
    confirmed: true,
    bio: 'CEO da Aegea Saneamento, liderando as operações da companhia com sólida experiência em infraestrutura regulada e saneamento no avanço do ODS 6.'
  },
  {
    id: 'calvin-lawrence',
    name: 'Dr. Calvin Lawrence',
    role: 'CEO',
    company: 'IntegrityFirst.ai',
    image: './assets/speakers/calvin_lawrence.jpg',
    category: 'Keynote',
    confirmed: true,
    bio: 'Dr. Calvin D. Lawrence, PhD é CEO da IntegrityFirst.AI e ex-IBM Distinguished Engineer com mais de 30 anos de experiência em IA. Autoridade internacional em governança algorítmica, equidade de dados e inteligência artificial responsável.'
  },
  {
    id: 'erika-george',
    name: 'Erika George',
    role: 'Associate Dean for Equity, Justice & Engagement',
    company: 'Boston University School of Law',
    image: './assets/speakers/erika_george.jpg',
    category: 'Keynote',
    confirmed: true,
    bio: 'Erika George é Associate Dean for Equity, Justice & Engagement da Boston University School of Law. Autora de Incorporating Rights (Oxford University Press), integra o conselho do Shift — centro de referência nos Princípios Orientadores sobre Empresas e Direitos Humanos da ONU.'
  },
  {
    id: 'luciana-nicola',
    name: 'Luciana Nicola',
    role: 'Diretora de Relações Institucionais e Sustentabilidade',
    company: 'Itaú Unibanco',
    image: './assets/speakers/luciana_nicola.jpg',
    category: 'Painelista',
    confirmed: true,
    bio: 'Diretora de Relações Institucionais e Sustentabilidade do Itaú Unibanco e vice-presidente do Conselho de Administração do Pacto Global da ONU no Brasil.'
  },
  {
    id: 'silvana-machado',
    name: 'Silvana Machado',
    role: 'Diretora Executiva',
    company: 'Bradesco',
    image: './assets/speakers/silvana_machado.jpg',
    category: 'Painelista',
    confirmed: true,
    bio: 'Diretora Executiva do Bradesco. Atua no direcionamento de estratégias corporativas, transição ecológica e inovação financeira.'
  },
  {
    id: 'renata-piazzon',
    name: 'Renata Piazzon',
    role: 'CEO',
    company: 'Instituto Arapyaú',
    image: './assets/speakers/renata_piazzon.jpg',
    category: 'Moderador',
    confirmed: true,
    bio: 'Renata Piazzon é CEO do Instituto Arapyaú. Com 20 anos de experiência em direito ambiental e filantropia estratégica, é cofundadora da rede Uma Concertação pela Amazônia e integra o CDESS da Presidência da República.'
  },
  {
    id: 'bayo-akomolafe',
    name: 'Dr. Bayo Akomolafe',
    role: 'Idealizador & Escritor',
    company: 'The Emergence Network',
    image: './assets/speakers/bayo_akomolafe.jpg',
    category: 'Keynote',
    confirmed: true,
    bio: 'O Dr. Bayo Akomolafe, idealizador dos conceitos de \'pós-ativismo\', \'transracialidade\' e \'ontofugitividade\', é um palestrante internacionalmente reconhecido, professor, intelectual público, ensaísta e autor de dois livros: These Wilds Beyond our Fences: Letters to My Daughter on Humanity\'s Search for Home (North Atlantic Books) e We Will Tell our Own Story: The Lions of Africa Speak.'
  },
  {
    id: 'guilherme-xavier',
    name: 'Guilherme Xavier',
    role: 'CEO',
    company: 'Pacto Global da ONU - Rede Brasil',
    image: './assets/speakers/guilherme_xavier.jpg',
    category: 'Liderança Institucional',
    confirmed: true,
    bio: 'CEO do Pacto Global da ONU - Rede Brasil. Responsável por liderar a maior rede local das Américas no engajamento do setor privado.'
  }
];
