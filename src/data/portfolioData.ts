import type {
  ProfileData,
  Project,
  Course,
  SkillsData,
  Extension,
  OtherProject,
  NavItem,
} from '../types/portfolio';

export const NAVIGATION_ITEMS: ReadonlyArray<NavItem> = [
  { id: 'sobre', label: 'Sobre', icon: 'bi-person-bounding-box' },
  { id: 'cursos', label: 'Cursos/Bootcamps', icon: 'bi-mortarboard-fill' },
  { id: 'habilidades', label: 'Habilidades', icon: 'bi-gear-wide-connected' },
  { id: 'projetos', label: 'Projetos', icon: 'bi-archive-fill' },
  { id: 'outros-projetos', label: 'Outros Projetos', icon: 'bi-lightbulb' },
  { id: 'extensoes', label: 'Extensões', icon: 'bi-puzzle-fill' },
  { id: 'contato', label: 'Contato', icon: 'bi-wechat' },
];

export const PROFILE_DATA: ProfileData = {
  name: 'Rafael Perroni',
  role: 'Desenvolvedor Front-End & Engenharia de Software',
  photo: 'assets/icons/fotoperfil.WebP',
  photoAlternative: 'assets/icons/fotoperfil2.WebP',
  githubUrl: 'https://github.com/rafaelpoh',
  linkedinUrl: 'https://www.linkedin.com/in/rafaelperroni',
  email: 'rafaelperroni@hotmail.com',
  paragraphs: [
    'Um Desenvolvedor Front-End que une o rigor da lógica estruturada à eficiência das interfaces modernas.',
    'Minha trajetória na tecnologia é marcada por uma base de engenharia profunda. Antes de focar na experiência do usuário, consolidei meu raciocínio lógico e a resolução de problemas complexos através de linguagens de baixo nível como C e C++. Essa bagagem me permite entender exatamente o que acontece por trás dos panos de uma aplicação, resultando em um código nativo (JavaScript, HTML5 e CSS3) muito mais sólido, semântico e performático.',
    'Graduado em Análise e Desenvolvimento de Sistemas (ADS) e com histórico prático no Banco do Brasil manipulando bancos de dados relacionais (SQL) e relatórios, desenvolvi uma visão analítica sobre a organização e o fluxo de dados. Hoje, aplico essa disciplina na construção de layouts responsivos, modulares e pautados em Acessibilidade Web (WCAG), dominando a arquitetura e o desenvolvimento de aplicações modernas com React e TypeScript.',
    'Além disso, sou um entusiasta de Inteligência Artificial, integrando ferramentas inteligentes para otimizar meu fluxo de desenvolvimento e elevar a precisão das minhas entregas. Sou movido por desafios arquiteturais e pela evolução técnica constante. Vamos construir algo incrível juntos?',
  ],
};

export const COURSES_DATA: ReadonlyArray<Course> = [
  {
    id: 'curso-ads',
    title: 'Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas',
    image: './assets/certificados/diploma.WebP',
    description:
      'Graduação tecnológica focada no ciclo completo de vida do software. A formação consolidou minha base em engenharia de software, modelagem de dados e gestão de projetos, permitindo-me atuar não apenas na codificação, mas na análise estratégica de soluções tecnológicas.',
    certificateUrl: './assets/pdfs/RAFAEL_PERRONI_CSTADS.pdf',
    institution: 'Ensino Superior',
  },
  {
    id: 'curso-santander-ai-react',
    title: 'Bootcamp Santander 2026 - AI React Front-end',
    image: './assets/certificados/Santander 2026 - AI React Front-end.png',
    description:
      'Formação prática em desenvolvimento front-end moderno combinando React 19, Vite e Inteligência Artificial. Foco na criação de interfaces responsivas, acessíveis e orientadas a UI/UX, utilizando componentes funcionais, hooks e sistemas de theming. No projeto de conclusão, integrei a API Gemini para processamento de IA generativa em tempo real, entregando uma aplicação completa de orientações financeiras personalizadas com arquitetura limpa e boas práticas de código.',
    certificateUrl: './assets/pdfs/Santander 2026 - AI React Front-end.pdf',
    institution: 'Santander / DIO',
  },
  {
    id: 'curso-caixa-ia',
    title: 'Bootcamp CAIXA - IA Generativa com Microsoft Copilot',
    image: './assets/certificados/caixa.WebP',
    description:
      'Formação focada em aplicar IA e engenharia de prompts em finanças, empreendedorismo e carreira, em parceria com a CAIXA. Desenvolvi soluções práticas como um app de organização financeira inteligente e mentores de carreira personalizados.',
    certificateUrl: './assets/pdfs/caixa.pdf',
    institution: 'CAIXA / DIO',
  },
  {
    id: 'curso-ia-agentes',
    title: 'IA Generativa e Agentes: Do Prompting à Construção de Copilotos',
    image: './assets/certificados/lupo.WebP',
    description:
      'Bootcamp de Inteligência Artificial com foco em produtividade e automação, dominando desde fundamentos de LLMs até a criação de Agentes. Como projeto final, desenvolvi um consultor inteligente de livros utilizando técnicas avançadas de prompting.',
    certificateUrl: './assets/pdfs/lupo.pdf',
    institution: 'DIO / Lupo',
  },
  {
    id: 'curso-html-css-js',
    title: 'HTML, CSS e JavaScript',
    image: './assets/certificados/DVWBRP14HT28111080.WebP',
    description:
      'Módulo focado na tríade fundamental do desenvolvimento web. Estruturação semântica e acessível com HTML5, layouts responsivos modernos utilizando CSS3 (Flexbox e Grid), e manipulação dinâmica do DOM com JavaScript ES6+.',
    certificateUrl: './assets/pdfs/HTML-CSS-JavaScript.pdf',
    institution: 'DIO',
  },
  {
    id: 'curso-blip-logica',
    title: 'Blip - Lógica de Programação',
    image: './assets/certificados/blip.WebP',
    description:
      'Aprimoramento da lógica de programação e algoritmos robustos utilizando JavaScript, além de versionamento profissional com Git e GitHub. Alicerce fundamental para arquitetura Front-end e React.',
    certificateUrl: './assets/pdfs/blip.pdf',
    institution: 'Blip / DIO',
  },
  {
    id: 'curso-santander-front',
    title: 'Bootcamp Santander - Front-End',
    image: './assets/certificados/dio_santander_front-end.WebP',
    description:
      'Programa intensivo promovido pelo Santander. Focado na realidade do mercado de tecnologia, com mentorias de especialistas e interfaces responsivas de alta performance aplicando boas práticas corporativas.',
    certificateUrl: './assets/pdfs/Santander_Front-End.pdf',
    institution: 'Santander / DIO',
  },
  {
    id: 'curso-universia-ia',
    title: 'Universia - Fundamentos de IA Generativa',
    image: './assets/certificados/dio_universia_fundamentos_de_IA.WebP',
    description:
      'Imersão nos fundamentos e aplicações da IA Generativa, engenharia de prompt e utilização estratégica de LLMs para criação de soluções e aumento de produtividade no ciclo de vida de software.',
    certificateUrl: './assets/pdfs/Universia_Fundamentos_de_IA.pdf',
    institution: 'Universia / Santander',
  },
  {
    id: 'curso-github-copilot',
    title: 'GitHub Copilot',
    image: './assets/certificados/Github_Copilot.WebP',
    description:
      'Integração de IA Generativa ao fluxo de desenvolvimento (DevOps). Aplicação de engenharia de prompt no GitHub Copilot para aceleração de testes, snippets e documentação técnica.',
    certificateUrl: './assets/pdfs/Github_Copilot.pdf',
    institution: 'DIO',
  },
];

export const SKILLS_DATA: SkillsData = {
  programming: [
    { id: 'prog-react', name: 'React', iconUrl: 'assets/icons/react.svg' },
    { id: 'prog-ts', name: 'TypeScript', iconUrl: 'assets/icons/ts.svg' },
    { id: 'prog-html', name: 'HTML5', iconUrl: 'assets/icons/html.png' },
    { id: 'prog-css', name: 'CSS3', iconUrl: 'assets/icons/css.png' },
    { id: 'prog-js', name: 'JavaScript', iconUrl: 'assets/icons/js.png' },
    { id: 'prog-sql', name: 'SQL', iconUrl: 'assets/icons/sql.png' },
    { id: 'prog-cpp', name: 'C++', iconUrl: 'assets/icons/cpp.png' },
  ],
  tools: [
    { id: 'tool-vscode', name: 'VS Code', iconUrl: 'assets/icons/vscode.png' },
    { id: 'tool-git', name: 'Git', iconUrl: 'assets/icons/git.png' },
    { id: 'tool-github', name: 'GitHub', iconUrl: 'assets/icons/github.png' },
    { id: 'tool-figma', name: 'Figma', iconUrl: 'assets/icons/figma.png' },
    { id: 'tool-postman', name: 'Postman', iconUrl: 'assets/icons/postman.png' },
    { id: 'tool-vercel', name: 'Vercel', iconUrl: 'assets/icons/vercel.png' },
  ],
  languages: [
    { id: 'lang-pt', name: 'Português', level: 'Nativo' },
    { id: 'lang-en', name: 'Inglês', level: 'Intermediário / Avançado' },
    { id: 'lang-es', name: 'Espanhol', level: 'Básico' },
  ],
};

export const PROJECTS_DATA: ReadonlyArray<Project> = [
  {
    id: 'proj-viajante',
    title: 'Viajante - Roteirista de Viagens com IA',
    image: 'assets/img/Viajante.WebP',
    description:
      'O Viajante é um planejador inteligente de viagens em React e TypeScript. Ele combina a IA do Google Gemini com dados reais de clima (OpenWeather) e moedas (REST Countries) para criar itinerários dia a dia detalhados com dicas de roupas e orçamento. Inclui mapas interativos com Leaflet para explorar atrações próximas, login seguro via Firebase Auth e histórico salvo no Firestore através de APIs serverless na Vercel validadas com Zod.',
    liveUrl: 'https://viajante-six.vercel.app',
    githubUrl: 'https://github.com/rafaelpoh/Viajante',
    tags: ['React 18', 'TypeScript', 'Google Gemini', 'Leaflet', 'Firebase Auth', 'Zod'],
  },
  {
    id: 'proj-gymtracker',
    title: 'GymTracker',
    image: 'assets/img/GymTracker.WebP',
    description:
      'Aplicação web mobile-first para acompanhamento de evolução de cargas em treinos de musculação. Estética dark neon, autenticação segura via Firebase, dashboard analítico com gráficos de progressão (Chart.js), histórico filtrável e sincronização em tempo real na nuvem.',
    liveUrl: 'https://rafaelpoh.github.io/GymTracker/',
    githubUrl: 'https://github.com/rafaelpoh/GymTracker',
    tags: ['Mobile First', 'Firebase', 'Chart.js', 'Firestore Realtime', 'ES6+'],
  },
  {
    id: 'proj-streamerhub',
    title: 'StreamerHub',
    image: 'assets/img/streamerpage.WebP',
    description:
      'Single Page Application "White Label" para criadores de conteúdo com navegação dinâmica de alta performance e player de vídeo persistente durante a transição de rotas. Interface responsiva, chat simulado em tempo real e galerias otimizadas com event delegation.',
    liveUrl: 'https://rafaelpoh.github.io/streamerpage/',
    githubUrl: 'https://github.com/rafaelpoh/streamerpage',
    tags: ['SPA', 'Persistent Player', 'Event Delegation', 'Performance'],
  },
  {
    id: 'proj-agente-financeiro',
    title: 'Agente Financeiro com IA',
    image: 'assets/img/agente-financeiro.WebP',
    description:
      'Controle financeiro inteligente que substitui formulários exaustivos por um agente conversacional integrado ao Google Gemini. O usuário registra gastos, ganhos e aportes via chat e acompanha métricas em tempo real em um dashboard limpo e responsivo. Desenvolvido com React 18 e TypeScript, adota gráficos em CSS3 nativo para máxima velocidade, validação Zero Trust com Zod, autenticação com Firebase Auth e banco de dados NoSQL no Cloud Firestore com rotas serverless na Vercel.',
    liveUrl: 'https://financas-three-chi.vercel.app',
    githubUrl: 'https://github.com/rafaelpoh/dio-lab-vibe-coding-app-financas',
    tags: ['React 18', 'TypeScript', 'Google Gemini', 'Firebase Auth', 'Firestore', 'Zod'],
  },
  {
    id: 'proj-sucoflesh',
    title: 'Sucoflesh — Landing Page',
    image: 'assets/img/sucoflesh.WebP',
    description:
      'Landing page interativa e responsiva para e-commerce de sucos naturais. Design mobile-first, animações fluidas atreladas ao scroll, rigorosa prevenção contra XSS e foco absoluto em métricas de performance e sustentabilidade digital.',
    liveUrl: 'https://rafaelpoh.github.io/Sucoflesh/',
    githubUrl: 'https://github.com/rafaelpoh/Sucoflesh',
    tags: ['Mobile First', 'Scroll Animations', 'WCAG A11y', 'Performance'],
  },
  {
    id: 'proj-receitasdavo',
    title: 'Receitas da Vó',
    image: 'assets/img/receitasdavo.WebP',
    description:
      'Receitas da Vó é um livro de receitas digital minimalista com estética editorial "modo revista", livre de anúncios e distrações. Desenvolvido em React, TypeScript e Vite, o app traz importação inteligente de receitas via IA (Google Gemini), checklists interativos para uso prático na cozinha, compressão local de fotos via Canvas e sincronização em nuvem com Firebase. O resgate dos cadernos de família com o frescor da web moderna.',
    liveUrl: 'https://receitasdavo-one.vercel.app',
    githubUrl: 'https://github.com/rafaelpoh/Receitasdavo',
    tags: ['React 18', 'TypeScript', 'Google Gemini', 'Firebase Auth', 'Cloud Firestore', 'Zod'],
  },
  {
    id: 'proj-co2calculadora',
    title: 'Calculadora de Impacto Ambiental',
    image: 'assets/img/CO2calculadora.WebP',
    description:
      'Calculadora de pegada de carbono integrada à API de rotas para mensurar emissões baseadas em distâncias e trajetórias geográficas reais, transformando dados matemáticos complexos em visualizações acessíveis.',
    liveUrl: 'https://rafaelpoh.github.io/CO2calculadora/',
    githubUrl: 'https://github.com/rafaelpoh/CO2calculadora',
    tags: ['Geocoding API', 'Math Logic', 'Data Visualization'],
  },
  {
    id: 'proj-serielist',
    title: 'SerieList',
    image: 'assets/img/serielist.WebP',
    description:
      'Plataforma de exploração de catálogo audiovisual consumindo a API TMDb. Implementação de busca instantânea reativa, filtros por gênero e visualização interativa de trailers oficiais via modais acessíveis.',
    liveUrl: 'https://rafaelpoh.github.io/serielist/',
    githubUrl: 'https://github.com/rafaelpoh/serielist',
    tags: ['TMDb API', 'Async Fetch', 'Dynamic Modals', 'Responsive Grid'],
  },
  {
    id: 'proj-criptohunter',
    title: 'CriptoHunter',
    image: 'assets/img/criptohunter.WebP',
    description:
      'Dashboard analítico em tempo real de ativos digitais integrado à CoinGecko API. Processamento de variações percentuais para identificar Top Gainers e Top Losers com manipulação avançada de arrays e ordenação rápida.',
    liveUrl: 'https://rafaelpoh.github.io/CriptoHunter',
    githubUrl: 'https://github.com/rafaelpoh/CriptoHunter',
    tags: ['CoinGecko API', 'Realtime Financial Data', 'Array Optimization'],
  },
  {
    id: 'proj-movielist',
    title: 'MovieList',
    image: 'assets/img/movielist.WebP',
    description:
      'Aplicação cinematográfica com foco em integridade e verificação de dados de trailers oficiais, priorizando confiabilidade de conteúdo, baixo consumo de dados e navegação fluida.',
    liveUrl: 'https://rafaelpoh.github.io/movielist',
    githubUrl: 'https://github.com/rafaelpoh/movielist',
    tags: ['REST API', 'Cinema DB', 'Responsive Design'],
  },
  {
    id: 'proj-quadro-ideias',
    title: 'Quadro de Ideias',
    image: 'assets/img/quadro-de-ideias.WebP',
    description:
      'Ecossistema de produtividade 100% autoral. Ferramentas interativas de desenho e quadro de tarefas nativo, com foco em altíssima fluidez e otimização de renderização mesmo em hardware modesto.',
    liveUrl: 'https://rafaelpoh.github.io/Quadro-de-ideias',
    githubUrl: 'https://github.com/rafaelpoh/Quadro-de-ideias',
    tags: ['Canvas Drawing', 'Productivity', 'Task Management'],
  },
  {
    id: 'proj-jperroni',
    title: 'JPerroni',
    image: 'assets/img/JPerroni.WebP',
    description:
      'Landing page institucional para empresa do setor de serviços, desenvolvida com forte foco em SEO, arquitetura limpa e alta taxa de conversão para solicitação de orçamentos.',
    liveUrl: 'https://jperroni.com.br',
    githubUrl: 'https://github.com/rafaelpoh/Jperroni',
    tags: ['Institutional', 'SEO', 'Performance'],
  },
  {
    id: 'proj-mega-sorte',
    title: 'Mega-Sorte',
    image: 'assets/img/mega-sorte.WebP',
    description:
      'Simulador probabilístico matemático com estruturas condicionais e laços complexos, demonstrando precisão analítica e validação de regras de probabilidade combinatória.',
    liveUrl: 'https://rafaelpoh.github.io/mega-sorte',
    githubUrl: 'https://github.com/rafaelpoh/mega-sorte',
    tags: ['Probability Math', 'State Logic', 'Algorithms'],
  },
  {
    id: 'proj-churrascometro',
    title: 'Churrascômetro',
    image: 'assets/img/churras.WebP',
    description:
      'Calculadora de planejamento de suprimentos baseada em perfis de consumo e tempo de evento, gerando relatórios de insumos com lógica de cálculo paramétrico dinâmico.',
    liveUrl: 'https://rafaelpoh.github.io/Churrascometro/',
    githubUrl: 'https://github.com/rafaelpoh/Churrascometro',
    tags: ['Parametric Logic', 'Dynamic Forms', 'UX Utility'],
  },
  {
    id: 'proj-jogo-velha',
    title: 'Jogo da Velha',
    image: 'assets/img/jogo-da-veia.WebP',
    description:
      'Implementação com lógica matricial bidimensional, detecção instantânea de vitórias/empates e interface com responsividade tátil completa.',
    liveUrl: 'https://rafaelpoh.github.io/jogo-da-veia/',
    githubUrl: 'https://github.com/rafaelpoh/jogo-da-veia',
    tags: ['Matrix Logic', 'Game State', 'Touch Support'],
  },
];

export const EXTENSIONS_DATA: ReadonlyArray<Extension> = [
  {
    id: 'ext-anotai',
    title: 'Anotai — Notas Rápidas & Acessibilidade',
    image: 'assets/img/banner-anotai.WebP',
    description:
      'Extensão para Google Chrome que simplifica a captura de notas com recursos avançados de inclusão e acessibilidade: suporte nativo a tipografia para pessoas com dislexia (OpenDyslexic) e ajuste granular de tamanho de fonte para leitura ergonômica.',
    storeUrl:
      'https://chromewebstore.google.com/detail/nmgkaochnoccdaffdajbocdhemjcilgb?utm_source=item-share-cb',
    badgeText: 'Chrome Web Store Oficial',
  },
  {
    id: 'ext-promptbox',
    title: 'PromptBox — Gerenciador de Prompts de IA',
    image: 'assets/img/banner-promptbox.WebP',
    description:
      'Repositório pessoal de prompts direto no navegador, projetado para organizar e recuperar comandos do ChatGPT, Claude e Midjourney em 1 clique. Busca instantânea, sincronização em nuvem via Supabase com segurança RLS e ultra-leve com apenas 509KB.',
    storeUrl:
      'https://chromewebstore.google.com/detail/promptbox/bckjlaiingnenhplbgckkppkbhkkajph?authuser=0&hl=pt-BR',
    badgeText: 'Chrome Web Store Oficial',
  },
];

export const OTHER_PROJECTS_DATA: ReadonlyArray<OtherProject> = [
  {
    id: 'other-yugioh',
    title: 'Yu-Gi-Oh! Game Logic',
    image: 'assets/img/yugioh.WebP',
    description:
      'Estudo focado na arquitetura de máquinas de estados complexas e regras de negócio. Sistema de turnos para partidas de 5 rodadas com mecanismos customizados de vitória/derrota e validações robustas.',
    liveUrl: 'https://rafaelpoh.github.io/js-yugioh-assets/',
    githubUrl: 'https://github.com/rafaelpoh/js-yugioh-assets',
    tags: ['State Machine', 'Turn Logic', 'Game Loop'],
  },
  {
    id: 'other-pokedex',
    title: 'Pokedex Engine',
    image: 'assets/img/pokedex.WebP',
    description:
      'Integração avançada com a PokéAPI. Refatoração arquitetural de UI, tela de detalhes dinâmicos com animações e otimização do fluxo de requisições assíncronas com paginação sob demanda.',
    liveUrl: 'https://rafaelpoh.github.io/js-developer-pokedex/',
    githubUrl: 'https://github.com/rafaelpoh/js-developer-pokedex',
    tags: ['PokéAPI', 'Async Pagination', 'Dynamic Views'],
  },
];
