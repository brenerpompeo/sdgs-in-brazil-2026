export interface SessionItem {
  id: string;
  timeStart: string;
  timeEnd: string;
  title: string;
  type: 'Abertura' | 'Keynote' | 'Painel' | 'Entrevista' | 'Talk' | 'Almoço' | 'Encerramento';
  period: 'manhã' | 'tarde';
  description: string;
  speakers: string[];
  speakerNamesRaw?: string[];
  ods: number[];
  highlight?: boolean;
}

export const SCHEDULE_DATA: SessionItem[] = [
  {
    id: 'abertura-institucional',
    timeStart: '10:50',
    timeEnd: '11:05',
    title: 'Abertura Institucional',
    type: 'Abertura',
    period: 'manhã',
    description: 'Abertura oficial reunindo vozes complementares do Pacto Global da ONU - Rede Brasil e da sede global em Nova York, estabelecendo o comprometimento empresarial do setor privado brasileiro na Agenda 2030.',
    speakers: ['ana-paula-carracedo', 'sanda-ojiambo'],
    speakerNamesRaw: [
      'Ana Paula Carracedo (Presidente do Conselho, Pacto Global da ONU - Rede Brasil)',
      'Sanda Ojiambo (CEO do Pacto Global da ONU)'
    ],
    ods: [17],
    highlight: true
  },
  {
    id: 'keynote-danese',
    timeStart: '11:10',
    timeEnd: '11:30',
    title: 'O novo mapa: geopolítica, regulação e oportunidades para o Brasil',
    type: 'Keynote',
    period: 'manhã',
    description: 'Análise do reordenamento global, exigências internacionais e novas regulações que redesenham o ambiente de negócios e abrem oportunidades estratégicas para o Brasil.',
    speakers: ['sergio-danese'],
    speakerNamesRaw: ['Embaixador Sérgio França Danese (Representante Permanente do Brasil junto às Nações Unidas)'],
    ods: [16, 17],
    highlight: true
  },
  {
    id: 'painel-esg-evidencia',
    timeStart: '11:35',
    timeEnd: '12:15',
    title: 'A agenda ESG: o que o mercado exige como evidência agora',
    type: 'Painel',
    period: 'manhã',
    description: 'Painel de diagnóstico sobre a superação do "ESG Fatigue". Investidores e líderes de sustentabilidade discutem o nível de prova e transparência exigido pelo mercado global.',
    speakers: [],
    speakerNamesRaw: [],
    ods: [8, 12, 13, 17],
    highlight: true
  },
  {
    id: 'entrevista-crime-organizado',
    timeStart: '12:30',
    timeEnd: '12:45',
    title: 'A influência do crime organizado nas cadeias de valor das empresas',
    type: 'Entrevista',
    period: 'manhã',
    description: 'Discussão sobre os impactos da infiltração do crime organizado em operações legais — experiências do México, Colômbia e Brasil com foco em integridade, anticorrupção e direitos humanos.',
    speakers: ['eugenio-ricas', 'sandra-coutinho'],
    speakerNamesRaw: [
      'Eugênio Ricas (Director, Office of Internal Oversight, Interpol)',
      'Sandra Coutinho (Jornalista Internacional, TV Globo)'
    ],
    ods: [16, 17],
    highlight: false
  },
  {
    id: 'almoco-networking',
    timeStart: '13:00',
    timeEnd: '15:00',
    title: 'Almoço de Networking',
    type: 'Almoço',
    period: 'tarde',
    description: 'Intervalo para almoço e relacionamento executivo entre as 300 lideranças convidadas na sede das Nações Unidas.',
    speakers: [],
    speakerNamesRaw: ['Lideranças do Setor Privado, Público e Organizações Globais'],
    ods: [17],
    highlight: false
  },
  {
    id: 'keynote-falencia-hidrica',
    timeStart: '15:00',
    timeEnd: '15:15',
    title: 'Falência hídrica: o próximo risco sistêmico global',
    type: 'Keynote',
    period: 'tarde',
    description: 'Apresentação sobre a falência hídrica como realidade presente que impacta cadeias produtivas, custos operacionais e resiliência dos negócios.',
    speakers: ['kaveh-madani'],
    speakerNamesRaw: ['Kaveh Madani (Diretor do Instituto de Água, Meio Ambiente e Saúde da UNU-INWEH)'],
    ods: [5, 6, 10, 17],
    highlight: true
  },
  {
    id: 'talk-falencia-hidrica',
    timeStart: '15:15',
    timeEnd: '15:35',
    title: 'Falência hídrica: o próximo risco sistêmico global',
    type: 'Talk',
    period: 'tarde',
    description: 'Painel focado em gestão, investimento e reporte hídrico para preparar o setor privado frente ao risco de escassez.',
    speakers: ['kaveh-madani', 'radames-casseb'],
    speakerNamesRaw: [
      'Kaveh Madani (Diretor do Instituto de Água da UNU-INWEH)',
      'Radamés Casseb (CEO AEGEA)'
    ],
    ods: [5, 6, 10, 17],
    highlight: true
  },
  {
    id: 'keynote-ia-etica',
    timeStart: '15:40',
    timeEnd: '16:00',
    title: 'IA e Ética: como usar tecnologia com responsabilidade',
    type: 'Keynote',
    period: 'tarde',
    description: 'Análise da fronteira entre IA e responsabilidade corporativa: viés algorítmico, governança de dados e direitos humanos digitais.',
    speakers: ['calvin-lawrence'],
    speakerNamesRaw: ['Dr. Calvin Lawrence (CEO IntegrityFirst.ai)'],
    ods: [8, 16, 18],
    highlight: true
  },
  {
    id: 'keynote-direitos-humanos',
    timeStart: '16:05',
    timeEnd: '16:25',
    title: 'Business, Human Rights and the Future of Responsible Leadership',
    type: 'Keynote',
    period: 'tarde',
    description: 'Palestra sobre liderança responsável e promoção dos Direitos Humanos no setor privado em um cenário de rápidas transformações.',
    speakers: ['erika-george'],
    speakerNamesRaw: ['Erika George (Associate Dean for Equity, Justice & Engagement - Boston University School of Law)'],
    ods: [8, 10, 16],
    highlight: false
  },
  {
    id: 'painel-case',
    timeStart: '16:30',
    timeEnd: '17:10',
    title: 'Acelerando Iniciativas Empresariais em prol do desenvolvimento sustentável',
    type: 'Painel',
    period: 'tarde',
    description: 'Grandes lideranças empresariais brasileiras compartilham iniciativas práticas e resultados concretos de investimento socioambiental.',
    speakers: ['luciana-nicola', 'silvana-machado', 'renata-piazzon'],
    speakerNamesRaw: [
      'Luciana Nicola (Diretora de Relações Institucionais e Sustentabilidade do Itaú Unibanco e vice-presidente do conselho administrativo do Pacto Global da ONU no Brasil)',
      'Silvana Machado (Diretora Executiva, Bradesco)',
      'Moderação: Renata Piazzon (CEO do Instituto Arapyaú)'
    ],
    ods: [8, 9, 12, 13, 17],
    highlight: true
  },
  {
    id: 'keynote-bayo-akomolafe',
    timeStart: '17:15',
    timeEnd: '17:45',
    title: 'Beyond Certainty: Reimagining the Futures We Need',
    type: 'Keynote',
    period: 'tarde',
    description: 'Palestra com visão de futuro sobre a construção de um legado duradouro e a regeneração sistêmica de pessoas, natureza e instituições.',
    speakers: ['bayo-akomolafe'],
    speakerNamesRaw: ['Dr. Bayo Akomolafe (Idealizador dos conceitos de pós-ativismo, transracialidade e ontofugitividade)'],
    ods: [10, 16, 17],
    highlight: true
  },
  {
    id: 'encerramento-oficial',
    timeStart: '17:45',
    timeEnd: '17:55',
    title: 'Encerramento Oficial',
    type: 'Encerramento',
    period: 'tarde',
    description: 'Palavra final do CEO do Pacto Global da ONU - Rede Brasil ancorando o evento na jornada e projetos contínuos da Rede no Brasil.',
    speakers: ['guilherme-xavier'],
    speakerNamesRaw: ['Guilherme Xavier (CEO do Pacto Global da ONU - Rede Brasil)'],
    ods: [17],
    highlight: true
  }
];
