export interface SessionItem {
  id: string;
  timeStart: string;
  timeEnd: string;
  title: string;
  type: 'Abertura' | 'Keynote' | 'Painel' | 'Entrevista' | 'Almoço' | 'Encerramento' | 'Social';
  period: 'manhã' | 'tarde' | 'noite';
  description: string;
  speakers: string[];
  speakerNamesRaw?: string[];
  ods: number[];
  highlight?: boolean;
}

export const SCHEDULE_DATA: SessionItem[] = [
  {
    id: 'abertura-institucional',
    timeStart: '11:00',
    timeEnd: '11:15',
    title: 'Abertura Institucional',
    type: 'Abertura',
    period: 'manhã',
    description: 'Boas-vindas oficiais e abertura dos trabalhos do SDGs in Brazil 2026 na sede das Nações Unidas, alinhando a visão da liderança empresarial brasileira à estratégia global do Pacto Global da ONU.',
    speakers: ['ana-paula-carracedo', 'sanda-ojiambo'],
    speakerNamesRaw: [
      'Ana Paula Carracedo (Presidente do Conselho, Pacto Global da ONU - Rede Brasil)',
      'Sanda Ojiambo (CEO do Pacto Global da ONU - TBC)'
    ],
    ods: [17],
    highlight: true
  },
  {
    id: 'keynote-danese',
    timeStart: '11:20',
    timeEnd: '11:40',
    title: 'KEYNOTE SPEAKER | O novo mapa: geopolítica, regulação e oportunidades para o Brasil',
    type: 'Keynote',
    period: 'manhã',
    description: 'Análise estratégica da conjuntura geopolítica global, o avanço de regulações transfronteiriças (CBAM, EUDR) e a posição de liderança do Brasil no fornecimento de soluções baseadas na natureza e transição energética.',
    speakers: ['sergio-danese'],
    speakerNamesRaw: ['Embaixador Sérgio Danese (Representante Permanente da Missão do Brasil na ONU)'],
    ods: [16, 17],
    highlight: true
  },
  {
    id: 'painel-esg-evidencia',
    timeStart: '11:45',
    timeEnd: '12:25',
    title: 'PAINEL | A agenda ESG: o que o mercado exige como evidência agora',
    type: 'Painel',
    period: 'manhã',
    description: 'Debate de alto nível sobre a superação do "ESG Fatigue". Investidores globais e líderes de políticas ambientais discutem a transição das métricas declaratórias para a rastreabilidade em tempo real e comprovação empírica.',
    speakers: ['punjanit-leagnavar', 'toni-ballabriga'],
    speakerNamesRaw: [
      "Punjanit Leagnavar (Global Environment Policy Director at L'Oréal - TBC)",
      'Toni Ballabriga (Global Head Sustainability Intelligence & Advocacy at BBVA)',
      'Representante Salesforce (TBC)',
      'Moderação: Representante Aegea'
    ],
    ods: [8, 12, 13, 17],
    highlight: true
  },
  {
    id: 'entrevista-crime-organizado',
    timeStart: '12:30',
    timeEnd: '12:55',
    title: 'ENTREVISTA | A influência do crime organizado nas cadeias de valor das empresas',
    type: 'Entrevista',
    period: 'manhã',
    description: 'Estudo de caso e conversa aprofundada sobre as ameaças transnacionais do crime organizado à integridade do setor privado nas Américas (México, Colômbia e Brasil) e estratégias de compliance de cadeia de valor.',
    speakers: ['eugenio-ricas', 'sandra-coutinho'],
    speakerNamesRaw: [
      'Eugênio Ricas (Director, Office of Internal Oversight, INTERPOL)',
      'Sandra Coutinho (Jornalista Internacional)'
    ],
    ods: [16, 17],
    highlight: false
  },
  {
    id: 'almoco-networking',
    timeStart: '13:00',
    timeEnd: '15:00',
    title: 'ALMOÇO DE NETWORKING',
    type: 'Almoço',
    period: 'tarde',
    description: 'Intervalo para almoço de relacionamento e networking executivo entre os 300 convidados da alta liderança no complexo da ONU.',
    speakers: [],
    speakerNamesRaw: ['Lideranças do Setor Privado, Público e Organizações Globais'],
    ods: [17],
    highlight: false
  },
  {
    id: 'keynote-falencia-hidrica',
    timeStart: '15:15',
    timeEnd: '15:35',
    title: 'KEYNOTE SPEAKER | Falência hídrica: o próximo risco sistêmico global',
    type: 'Keynote',
    period: 'tarde',
    description: 'Apresentação impactante sobre a escassez de água potável como fator determinante para a estabilidade geopolítica, alimentar e de cadeias produtivas globais, e os caminhos de resiliência hídrica.',
    speakers: ['kaveh-madani'],
    speakerNamesRaw: ['Kaveh Madani (Diretor do Instituto de Água, Meio Ambiente e Saúde da UNU-INWEH)'],
    ods: [5, 6, 10, 17],
    highlight: true
  },
  {
    id: 'keynote-ia-etica',
    timeStart: '15:40',
    timeEnd: '16:00',
    title: 'KEYNOTE SPEAKER | IA e Ética: como usar tecnologia com responsabilidade',
    type: 'Keynote',
    period: 'tarde',
    description: 'Como garantir a governança ética na era dos modelos de inteligência artificial generativa e preditiva, prevenindo vieses algorítmicos e respeitando direitos fundamentais dos trabalhadores.',
    speakers: ['calvin-lawrence'],
    speakerNamesRaw: ['Calvin Lawrence (CEO IntegrityFirst.AI / ex-IBM Fellow)'],
    ods: [8, 16, 18],
    highlight: true
  },
  {
    id: 'keynote-direitos-humanos',
    timeStart: '16:05',
    timeEnd: '16:25',
    title: 'KEYNOTE SPEAKER | Business, Human Rights and the Future of Responsible Leadership',
    type: 'Keynote',
    period: 'tarde',
    description: 'O papel da governança corporaiva e da liderança responsável no respeito e promoção dos Direitos Humanos em um cenário de transformação econômica e rápida mudança social.',
    speakers: ['erika-george'],
    speakerNamesRaw: ['Erika George (Associate Dean for Equity, Justice and Engagement - Boston University School of Law)'],
    ods: [8, 10, 16],
    highlight: false
  },
  {
    id: 'painel-case',
    timeStart: '16:30',
    timeEnd: '17:10',
    title: 'PAINEL C.A.S.E. | Acelerando Iniciativas Empresariais em prol do desenvolvimento sustentável',
    type: 'Painel',
    period: 'tarde',
    description: 'Grandes corporações brasileiras apresentam cases concretos de aceleração dos ODS, destacando métricas de investimento socioambiental, bioeconomia e parcerias multisetoriais.',
    speakers: ['renata-piazzon'],
    speakerNamesRaw: [
      'Representante Itaú',
      'Representante Bradesco',
      'Representante Itaúsa',
      'Representante Natura',
      'Representante Nestlé',
      'Moderação: Renata Piazzon (Presidente do Instituto Arapyaú)'
    ],
    ods: [8, 9, 12, 13, 17],
    highlight: true
  },
  {
    id: 'keynote-bayo-akomolafe',
    timeStart: '17:15',
    timeEnd: '17:45',
    title: 'KEYNOTE SPEAKER | Beyond Certainty: Reimagining the Futures We Need',
    type: 'Keynote',
    period: 'tarde',
    description: 'Palestra de encerramento inspiracional. Uma provocação filosófica sobre a necessidade de desarmar velhos paradigmas e reimaginar formas de coexistência em um mundo pós-crise.',
    speakers: ['bayo-akomolafe'],
    speakerNamesRaw: ['Bayo Akomolafe (Hubert Humphrey Distinguished Professor of American Studies)'],
    ods: [10, 16, 17],
    highlight: true
  },
  {
    id: 'encerramento-oficial',
    timeStart: '17:45',
    timeEnd: '17:55',
    title: 'ENCERRAMENTO OFICIAL',
    type: 'Encerramento',
    period: 'tarde',
    description: 'Sintese das diretrizes pactuadas ao longo do dia e anúncio dos compromissos prioritários do setor privado brasileiro na sede das Nações Unidas.',
    speakers: ['guilherme-xavier'],
    speakerNamesRaw: ['Guilherme Xavier (CEO do Pacto Global da ONU - Rede Brasil)'],
    ods: [17],
    highlight: true
  },
  {
    id: 'coquetel',
    timeStart: '18:30',
    timeEnd: '20:30',
    title: 'COQUETEL DE ENCERRAMENTO',
    type: 'Social',
    period: 'noite',
    description: 'Recepção e coquetel de encerramento em celebração ao protagonismo do setor privado brasileiro na Agenda 2030.',
    speakers: [],
    speakerNamesRaw: ['Todos os Participantes e Convidados Especiais'],
    ods: [17],
    highlight: false
  }
];
