/**
 * Catálogo de projetos do portfólio: uma entrada por slug para a lista e para /projeto/:slug
 */

export type ProjectStatus =
  | "production"
  | "open-source"
  | "technical"
  | "development"
  | "showcase";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  name: string;
  desc: string;
  tags: string[];
  status: ProjectStatus;
  /** Título da seção na home (ex.: Produtos em Produção) */
  sectionTitle: string;
  paragraphs: string[];
  highlights?: string[];
  links: ProjectLink[];
}

export const PROJECTS: Project[] = [
  {
    slug: "banheiro-urgente",
    name: "BanheiroUrgente.app",
    desc: "Aplicativo web para localizar banheiros públicos em situações de emergência. Produto orientado a problema real com clustering de mapas, SEO e documentação de operações.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Leaflet", "Redis"],
    status: "production",
    sectionTitle: "Produtos em Produção",
    paragraphs: [
      "O BanheiroUrgente nasceu de um problema urbano concreto: em deslocamentos ou emergências, encontrar um banheiro público confiável rapidamente é difícil. O produto combina mapa interativo, dados geográficos e uma experiência mobile-first pensada para uso sob pressão.",
      "A stack prioriza performance e SEO (descoberta orgânica) e camadas de cache com Redis para reduzir latência em áreas com muitos pontos. A modelagem no PostgreSQL com Prisma facilita evolução do schema conforme novas fontes de dados e parcerias.",
    ],
    highlights: [
      "Mapas com agrupamento (clustering) para leitura clara em densidade variável",
      "Base preparada para crescimento de contribuições e moderação",
      "Foco em acessibilidade e tempo de carregamento em redes móveis",
    ],
    links: [{ label: "Aplicativo em produção", href: "https://banheirourgente.app" }],
  },
  {
    slug: "lorely",
    name: "LoreLY.app",
    desc: "Plataforma SaaS de criação de livros com IA. Monorepo com NestJS/Next.js, billing com Stripe, filas BullMQ e app Android via TWA.",
    tags: ["NestJS", "Next.js", "Stripe", "OpenAI", "Android TWA"],
    status: "production",
    sectionTitle: "Produtos em Produção",
    paragraphs: [
      "LoreLY é um SaaS completo: autenticação, assinaturas, filas de trabalho pesado e interface web moderna, com distribuição Android via Trusted Web Activity para unificar codebase e atualizações.",
      "O backend em NestJS organiza domínios (billing, geração, assets) e integra Stripe para cobrança recorrente. BullMQ desacopela tarefas longas (geração, pós-processamento) da API síncrona. A camada de IA usa modelos da OpenAI com fluxos pensados para custo e qualidade editorial.",
    ],
    highlights: [
      "Monorepo alinhado a domínios de produto",
      "Filas para workloads de IA sem travar a experiência do usuário",
      "TWA para presença na Play Store mantendo o web como fonte da verdade",
    ],
    links: [{ label: "Aplicativo em produção", href: "https://lorely.app" }],
  },
  {
    slug: "compile-chill",
    name: "Compile & Chill",
    desc: "Portal de descompressão para desenvolvedores com jogos temáticos, validação server-side de scores e UX 'dev'. Foco em comunidade e acessibilidade.",
    tags: ["Next.js", "Prisma", "Framer Motion", "Upstash"],
    status: "open-source",
    sectionTitle: "Open Source & Impacto",
    paragraphs: [
      "Compile & Chill é um espaço leve para pausas entre builds: jogos com estética e linguagem de desenvolvedores, com pontuação validada no servidor para manter integridade dos rankings.",
      "O projeto é open source (MIT) e está em evolução comunitária, com issues e discussões no GitHub.",
    ],
    highlights: [
      "Validação server-side de scores",
      "Motion e microinterações com Framer Motion",
      "Rate limiting / cache com Upstash quando aplicável",
    ],
    links: [
      { label: "Site em produção", href: "https://compileandchill.dev" },
      { label: "Código no GitHub", href: "https://github.com/FalcaoHS/Compile-Chill" },
    ],
  },
  {
    slug: "mapsports",
    name: "MapSports",
    desc: "Plataforma geoespacial completa: check-in, notificações e reputação. Backend NestJS com PostGIS e frontend React com Mapbox.",
    tags: ["NestJS", "PostGIS", "Mapbox", "BullMQ"],
    status: "technical",
    sectionTitle: "Profundidade Técnica & Experimentos",
    paragraphs: [
      "MapSports explora geolocalização em cenário esportivo ou de comunidade: presença em locais, histórico e elementos de reputação, com PostGIS para consultas espaciais eficientes.",
      "O frontend em React com Mapbox oferece visualização rica; o backend NestJS coordena regras de negócio, notificações e processamento assíncrono via BullMQ.",
    ],
    highlights: [
      "Modelagem espacial nativa no PostgreSQL (PostGIS)",
      "Separação clara entre API, workers e cliente",
    ],
    links: [],
  },
  {
    slug: "faktra",
    name: "Faktra (FACTRA)",
    desc: "Extração e inteligência de dados via linguagem natural. Busca semântica usando pgvector e interpretação de intenção.",
    tags: ["FastAPI", "Python", "pgvector", "Next.js"],
    status: "technical",
    sectionTitle: "Profundidade Técnica & Experimentos",
    paragraphs: [
      "Faktra investiga como expressar perguntas em linguagem natural sobre bases estruturadas e semi-estruturadas, combinando FastAPI para serviços Python e pgvector para similaridade vetorial no PostgreSQL.",
      "A camada Next.js entrega interfaces de exploração e feedback; o desafio central é alinhar embeddings, chunking e metadados para respostas úteis e auditáveis.",
    ],
    highlights: [
      "RAG e busca semântica com vetores no próprio Postgres",
      "API tipada e documentada em FastAPI",
    ],
    links: [],
  },
  {
    slug: "rpg-ia",
    name: "RPG & IA",
    desc: "Engine de contexto para RPG solo guiado por IA. Narrativa em streaming, persistência vetorial e processamento em background.",
    tags: ["Next.js 16", "Express", "WebSocket", "pgvector"],
    status: "technical",
    sectionTitle: "Profundidade Técnica & Experimentos",
    paragraphs: [
      "Um narrador virtual precisa de memória de longo prazo, consistência de personagens e baixa latência na percepção do jogador. Este experimento usa streaming de texto, WebSockets onde faz sentido e pgvector para lembrar trechos relevantes da campanha.",
      "Express complementa pontos de API e workers; Next.js concentra a experiência de jogo e painéis.",
    ],
    highlights: [
      "Persistência vetorial para “memória” de sessão",
      "Streaming para sensação de diálogo contínuo",
    ],
    links: [],
  },
  {
    slug: "onescan",
    name: "OneScan",
    desc: "Serviço de links e QR codes descartáveis com controle de acesso e armazenamento S3. Foco em segurança e ciclo de vida de URLs.",
    tags: ["Next.js", "AWS S3", "QRCode", "Playwright"],
    status: "technical",
    sectionTitle: "Profundidade Técnica & Experimentos",
    paragraphs: [
      "OneScan trata URLs e QR como recursos com expiração e políticas de acesso: ideal para campanhas, compartilhamento temporário ou redução de superfície de ataque.",
      "Armazenamento em S3 e geração de QR no servidor ou edge, com testes e2e (Playwright) para fluxos críticos.",
    ],
    highlights: [
      "Ciclo de vida explícito do link (criação, revogação, analytics)",
      "Testes automatizados de jornadas principais",
    ],
    links: [],
  },
  {
    slug: "portal-streamers",
    name: "Portal dos Streamers",
    desc: "Hub para streamers gerenciarem conteúdo (clipes, playlists, social). Modelagem rica de domínio e API documentada.",
    tags: ["NestJS", "TypeORM", "React", "PostgreSQL"],
    status: "technical",
    sectionTitle: "Profundidade Técnica & Experimentos",
    paragraphs: [
      "Centralizar presença de criadores exige modelo de domínio que represente canais, clipes, metadados e integrações sem virar um monólito confuso.",
      "NestJS + TypeORM estruturam o backend; React entrega painéis operacionais. PostgreSQL sustenta relacionamentos e consultas analíticas básicas.",
    ],
    highlights: [
      "API pensada para evolução e consumo por terceiros",
      "Separação entre core de identidade e catálogo de mídia",
    ],
    links: [],
  },
  {
    slug: "taroom",
    name: "TAROOM",
    desc: "App de Tarot com IA e jornada reflexiva. Design system robusto e conformidade LGPD planejada.",
    tags: ["Next.js 15", "NestJS", "Stack Auth", "Neon"],
    status: "development",
    sectionTitle: "Em Desenvolvimento & Pesquisa",
    paragraphs: [
      "TAROOM combina ritual, reflexão e IA com cuidado de privacidade: autenticação moderna (Stack Auth), banco serverless (Neon) e camadas explícitas de consentimento.",
      "O design system garante consistência entre fluxos sensíveis e áreas educativas do app.",
    ],
    highlights: [
      "Arquitetura preparada para requisitos de dados pessoais (LGPD)",
      "Stack alinhada a deploy rápido e escala elástica",
    ],
    links: [],
  },
  {
    slug: "poupancinha",
    name: "Poupancinha",
    desc: "App de microfinanças offline-first com biometria e armazenamento seguro. Foco em privacidade e UX mobile.",
    tags: ["Flutter", "Riverpod", "Isar", "Biometrics"],
    status: "development",
    sectionTitle: "Em Desenvolvimento & Pesquisa",
    paragraphs: [
      "Finanças pessoais no celular exigem confiança: biometria, armazenamento local com Isar e Riverpod para estado previsível em Flutter.",
      "Modo offline-first permite uso sem rede estável, sincronizando quando possível.",
    ],
    highlights: [
      "Privacidade by design no dispositivo",
      "UX mobile nativa com Flutter",
    ],
    links: [],
  },
  {
    slug: "s4s-saas-generator",
    name: "S4S (SaaS Generator)",
    desc: "Meta-gerador de SaaS baseado em metadados ('genome'). Automação de código e engenharia de ferramentas.",
    tags: ["TypeScript", "Drizzle", "JSON Schema", "Vitest"],
    status: "development",
    sectionTitle: "Em Desenvolvimento & Pesquisa",
    paragraphs: [
      "S4S explora gerar estrutura de produto a partir de um “genoma” declarativo: schemas JSON, tipagem TypeScript e testes com Vitest para não regredir geração.",
      "Drizzle mantém migrations e tipos alinhados ao banco quando o gerador emite camadas de persistência.",
    ],
    highlights: [
      "Abordagem metadata-first para repetibilidade",
      "Testes como contrato do gerador",
    ],
    links: [],
  },
  {
    slug: "shuk-code",
    name: "Shuk-Code",
    desc: "Pesquisa de DSL 'AI-first' para o ecossistema web. Estudo de arquitetura de linguagens e integração com IA.",
    tags: ["DSL", "Tree-sitter", "MCP", "Research"],
    status: "development",
    sectionTitle: "Em Desenvolvimento & Pesquisa",
    paragraphs: [
      "Shuk-Code é linha de pesquisa: como linguagens específicas de domínio podem colaborar com modelos de linguagem e protocolos como MCP para ferramentas que “entendem” o projeto.",
      "Tree-sitter entra como base para parsing robusto e evolução da sintaxe.",
    ],
    highlights: [
      "Convergência entre tooling clássico e agentes",
      "Parsing incremental para IDEs e automação",
    ],
    links: [],
  },
  {
    slug: "shuktv",
    name: "Site ShukTV",
    desc: "Hub de lives e comunidade para criadores de conteúdo. Monorepo Node com frontend Next.js.",
    tags: ["Next.js", "Node", "Radix UI", "Docker"],
    status: "showcase",
    sectionTitle: "Vitrine & Legado",
    paragraphs: [
      "ShukTV agrega presença de criadores: agendamento, links e identidade visual coerente. Radix UI acelera componentes acessíveis; Docker padroniza ambientes.",
      "Monorepo Node facilita compartilhar pacotes internos entre apps e serviços.",
    ],
    highlights: [
      "UI acessível com primitivos headless",
      "Containerização para paridade dev/prod",
    ],
    links: [],
  },
  {
    slug: "paqueta",
    name: "Paquetá",
    desc: "Landing de marca para banda (surf punk). Demonstração de front-end rápido e roteamento simples.",
    tags: ["React", "Vite", "TypeScript", "Tailwind"],
    status: "showcase",
    sectionTitle: "Vitrine & Legado",
    paragraphs: [
      "Projeto de vitrine musical: entrega rápida com Vite, tipagem forte e Tailwind para iteração visual. Ideal para releases, tour dates e streaming embutido.",
    ],
    highlights: ["Performance de build com Vite", "Componentização leve com React 19-ready patterns"],
    links: [],
  },
  {
    slug: "meditacao-vida-real",
    name: "Meditação na Vida Real",
    desc: "Funil de conversão com rastreamento de marketing técnico e integração com Hotmart.",
    tags: ["Vite", "Google Ads", "GA4", "Hotmart"],
    status: "showcase",
    sectionTitle: "Vitrine & Legado",
    paragraphs: [
      "Landing otimizada para campanhas: eventos GA4, pixels e integração com Hotmart para checkout e entrega de produto digital. Vite mantém o front enxuto e mensurável.",
    ],
    highlights: [
      "Rastreamento alinhado a funil (Ads → landing → conversão)",
      "Integração com plataforma de infoproduto",
    ],
    links: [],
  },
  {
    slug: "quantum-development",
    name: "Quantum Development",
    desc: "Estudos educacionais em computação quântica ilustrando qubits e porta Hadamard.",
    tags: ["Python", "Qiskit", "Quantum Computing"],
    status: "showcase",
    sectionTitle: "Vitrine & Legado",
    paragraphs: [
      "Material educativo com Qiskit para visualizar superposição e operações básicas, como ponte entre curiosidade e formalismo quântico.",
      "Repositório público no GitHub concentra notebooks e demos reproduzíveis.",
    ],
    highlights: ["Qiskit para experimentação em simulador", "Base para expandir para algoritmos introdutórios"],
    links: [{ label: "Código no GitHub", href: "https://github.com/FalcaoHS/qiskit-superposition-demo" }],
  },
];

export const PROJECT_BY_SLUG: Record<string, Project> = Object.fromEntries(
  PROJECTS.map((p) => [p.slug, p])
);

export function getProject(slug: string): Project | undefined {
  return PROJECT_BY_SLUG[slug];
}

/** Ordem e agrupamento exibidos na seção Projects da home */
export const HOME_SECTION_SLUGS: { sectionTitle: string; projectSlugs: string[] }[] = [
  { sectionTitle: "Produtos em Produção", projectSlugs: ["banheiro-urgente", "lorely"] },
  { sectionTitle: "Open Source & Impacto", projectSlugs: ["compile-chill"] },
  {
    sectionTitle: "Profundidade Técnica & Experimentos",
    projectSlugs: ["mapsports", "faktra", "rpg-ia", "onescan", "portal-streamers"],
  },
  {
    sectionTitle: "Em Desenvolvimento & Pesquisa",
    projectSlugs: ["taroom", "poupancinha", "s4s-saas-generator", "shuk-code"],
  },
  {
    sectionTitle: "Vitrine & Legado",
    projectSlugs: ["shuktv", "paqueta", "meditacao-vida-real", "quantum-development"],
  },
];
