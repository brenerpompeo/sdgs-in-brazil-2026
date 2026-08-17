import type { PastLeader } from '../../data/pastLeadersData';

type LeaderOverride = Partial<Pick<PastLeader, 'role' | 'company' | 'quote' | 'edition'>>;

const PREVIOUS = 'PREVIOUS EDITION';

export const PAST_LEADERS_EN: Record<string, LeaderOverride> = {
  'drauzio-varella': {
    role: 'Physician, Writer & Broadcaster',
    company: 'Public Health & Social Awareness',
    quote: 'Quality public health is the structural pillar of any sustainable and just society.',
    edition: PREVIOUS,
  },
  'celia-xakriaba': {
    role: 'Federal Deputy & Indigenous Leader',
    company: 'Chamber of Deputies & Defense of Indigenous Peoples',
    quote: 'Demarcating territories is the most powerful climate policy of our time.',
    edition: PREVIOUS,
  },
  alok: {
    role: 'DJ, Producer & Philanthropist',
    company: 'Alok Institute & Social-Environmental Impact',
    quote: 'Music has the power to unite generations around protecting the Amazon and human rights.',
    edition: PREVIOUS,
  },
  'maju-coutinho': {
    role: 'Journalist & Anchor',
    company: 'TV Globo & Impact Communication',
    quote: 'Giving visibility to social and environmental issues is an ethical duty of contemporary journalism.',
    edition: PREVIOUS,
  },
  'luciano-huck': {
    role: 'Host & Social Entrepreneur',
    company: 'TV Globo & Agregadora Impact Fund',
    quote: 'Social entrepreneurship and private innovation are engines for reducing inequality in Brazil.',
    edition: PREVIOUS,
  },
  'sanda-ojiambo': {
    role: 'CEO & Executive Director',
    company: 'UN Global Compact (UN HQ NY)',
    quote: 'The global private sector must accelerate delivery of Agenda 2030 with transparency and proof.',
    edition: PREVIOUS,
  },
  'rayssa-leal': {
    role: 'Olympic Athlete & Ambassador',
    company: 'Sport & Youth Inclusion',
    quote: 'Sport transforms lives, inspires young people and shows that any barrier can be overcome.',
    edition: PREVIOUS,
  },
  'rebeca-andrade': {
    role: 'Olympic & World Champion',
    company: 'Artistic Gymnastics & Women’s Leadership',
    quote: 'Dedication and focus open paths for Black women to reach the top of the world.',
    edition: PREVIOUS,
  },
  'oliver-stuenkel': {
    role: 'Professor & Geopolitical Analyst',
    company: 'FGV & International Relations',
    quote: 'Global geopolitical realignment requires Brazil to place its environmental agenda at the center of negotiations.',
    edition: PREVIOUS,
  },
  'john-elkington': {
    role: 'Author & Creator of the Triple Bottom Line',
    company: 'Volans & Global ESG Authority',
    quote: 'Regenerative capitalism is the only possible evolution of the traditional economic model.',
    edition: PREVIOUS,
  },
  'lazaro-ramos': {
    role: 'Actor, Director & UNICEF Ambassador',
    company: 'Voices of Diversity & Human Rights',
    quote: 'There is no sustainable development without inclusion, racial equity and social justice as core pillars.',
    edition: PREVIOUS,
  },
  'luiza-trajano': {
    role: 'Chair of the Board',
    company: 'Magazine Luiza & Grupo Mulheres do Brasil',
    quote: 'The private sector must be the great catalyst of social transformation and equality in Brazil.',
    edition: PREVIOUS,
  },
  'tarciana-medeiros': {
    role: 'President',
    company: 'Banco do Brasil',
    quote: 'Inclusive banking and sustainable financing drive a just transition in the country.',
    edition: PREVIOUS,
  },
  'paulo-vieira': {
    role: 'Actor, Broadcaster & Activist',
    company: 'Engagement & Social Transformation',
    quote: 'Communication and culture are the most powerful tools to connect Agenda 2030 to people’s reality.',
    edition: PREVIOUS,
  },
  'gabriela-prioli': {
    role: 'Lawyer, Broadcaster & Host',
    company: 'Public Debate & Dialogue',
    quote: 'Clarity in public debate and rigor with facts are essential to fight disinformation and strengthen ESG.',
    edition: PREVIOUS,
  },
  'txai-surui': {
    role: 'Indigenous Leader & Climate Activist',
    company: 'Suruí Youth & Defense of the Amazon',
    quote: 'The Earth is speaking. We must listen to Indigenous voices to secure the planet’s future.',
    edition: PREVIOUS,
  },
  'tashka-yawanawa': {
    role: 'Indigenous Leader & Chief of the Yawanawá People',
    company: 'Forest Protection & Ancestral Knowledge',
    quote: 'Conserving biodiversity requires genuine partnerships with the guardians of the forest.',
    edition: PREVIOUS,
  },
  'amy-webb': {
    role: 'Futurist & CEO',
    company: 'Future Today Institute',
    quote: 'The future is not something that happens to us. It is something we build intentionally, with technology and governance.',
    edition: PREVIOUS,
  },
  'maria-prata': {
    role: 'Journalist & Innovation Specialist',
    company: 'Moderation & Media',
    quote: 'Sustainable innovation must be communicated authentically and transparently to society as a whole.',
    edition: PREVIOUS,
  },
  'rachel-maia': {
    role: 'Chair of the Board',
    company: 'UN Global Compact - Brazil Network',
    quote: 'True ESG leadership requires diversity, gender equity and representation on boards.',
    edition: '2024 EDITION',
  },
};
