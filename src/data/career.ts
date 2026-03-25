/**
 * Trajetória profissional — ordem: mais recente primeiro
 */

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  desc: string;
  bullets?: string[];
  color: string;
}

export const EXPERIENCES: ExperienceEntry[] = [
  {
    company: "XL Soluções",
    role: "Desenvolvimento de produtos (MyPet e outros)",
    period: "Recente",
    desc:
      "Atuação no MyPet, plataforma para clínicas veterinárias e profissionais do ramo. Foco em fluxos operacionais, integrações e evolução do produto.",
    color: "border-purple-500",
  },
  {
    company: "Autoponto / ERP de autopeças",
    role: "Integrações, legado e canais digitais",
    period: "Em andamento",
    desc:
      "Telas de integração com WhatsApp, carrinho e catálogo; APIs compondo o novo front ao sistema legado de vendas. Endpoint em servidor Linux legado, scripts de recebimento de requisições e ponte com dados DBF/CDX. Apoio à camada de framework PHP da empresa.",
    bullets: [
      "Comunicação entre stack moderna e ERP legado (incl. base DBF/CDX)",
      "Integração WhatsApp e produtos para time comercial",
    ],
    color: "border-emerald-500",
  },
  {
    company: "GO4SPARK",
    role: "Capital de giro — Nomad Foods (Europa)",
    period: "Projeto recente (~8 meses)",
    desc:
      "Participação na construção do sistema de **capital de giro** da Nomad Foods (multinacional de alimentos com operações na Europa — marcas como Birds Eye e Findus): Excel como camada de análise com **Microsoft Access** como base indexada, unificando **SAP**, ERPs, bancos, inventário, vendas, compras e forecast.",
    bullets: [
      "Mais de 80 planilhas, 200+ módulos e dezenas de templates para alimentação automática do modelo",
      "Storytelling dos dados, definição de fluxos e padrões com o time durante o levantamento",
    ],
    color: "border-amber-500",
  },
  {
    company: "KUBO Building",
    role: "Fullstack Developer",
    period: "2024",
    desc: "React, Next.js e Node; arquitetura web e PostgreSQL.",
    color: "border-blue-500",
  },
  {
    company: "S4Sys",
    role: "Analista de Sistemas",
    period: "2021 – 2022",
    desc: "Requisitos, segurança em software, BPMN (Sydle One) e low-code (Hubtool).",
    color: "border-cyan-500",
  },
  {
    company: "Infobase / Okulos",
    role: "PHP, Magento e WordPress",
    period: "2018 – 2019",
    desc:
      "Manutenção profunda de **Magento** (incluindo análise da modelagem EAV e metadados para entidades flexíveis). Backend completo do site **Enerprev** (admin com custom fields, gráficos dinâmicos e blog) — anos no ar. WordPress, custom fields e automação de novos projetos via scripts de inicialização (Linux/Windows).",
    bullets: [
      "SEO e operações de e-commerce em contexto B2B/B2C",
    ],
    color: "border-orange-500",
  },
  {
    company: "OI (integração via Sereno)",
    role: "Automação RH × identidade (E-Trust)",
    period: "Era corporativa",
    desc:
      "Scripts em **VBScript** que liam planilhas exportadas do RH, conectavam ao **LDAP** do eTrust Admin e aplicavam criação de usuários, perfis, bloqueios e revogações — essenciais na alta rotatividade de call center.",
    color: "border-teal-500",
  },
  {
    company: "Casa & Video",
    role: "BI e operações em loja",
    period: "Era corporativa",
    desc:
      "Planilhas e painéis para BI: vendas e produtividade de equipes **em tempo real**, apoiando decisão na loja.",
    bullets: ["Visão de dados operacional, não só relatório mensal"],
    color: "border-rose-500",
  },
  {
    company: "SulAmérica Seguros",
    role: "Sistemas de carreira e sucessão",
    period: "Era corporativa",
    desc:
      "Desenvolvimento **integral** do sistema de carreira e sucessão. O projeto foi **adquirido pela Globo** após demonstrar valor — referência de impacto em produto corporativo.",
    color: "border-indigo-500",
  },
  {
    company: "ANP — Agência Nacional do Petróleo (via Módulo)",
    role: "Análise de requisitos e governança de documentação",
    period: "Projeto corporativo",
    desc:
      "Responsável por **alinhar e corrigir** a documentação do sistema de **controle de royalties** de extração e produção: **casos de uso**, vocabulário e estilo (ex.: **terceira pessoa**, termos proibidos, padrão de locução) para ficar em conformidade com as regras do órgão e do contrato.",
    bullets: [
      "Consistência entre requisitos, léxico e diagramas de caso de uso",
    ],
    color: "border-sky-500",
  },
  {
    company: "Tribunal de Justiça do Espírito Santo",
    role: "Estudo de viabilidade — sistema próprio × PROJUDI",
    period: "Projeto corporativo",
    desc:
      "Avaliação técnica e de negócio para decidir entre **manter o sistema exclusivo** do tribunal (já com investimento relevante em desenvolvimento) ou **migrar para o PROJUDI**, adotado na época por outros tribunais. **Entrevistas em profundidade** com juízes, promotores e oficiais de justiça para mapear o fluxo real da área jurídica e comparar cenários.",
    bullets: [
      "Análise de custo-benefício, aderência ao processo de trabalho e risco de manutenção",
      "Desfecho recomendado: **substituição pelo PROJUDI**",
    ],
    color: "border-violet-500",
  },
  {
    company: "Auditorias de segurança em código-fonte",
    role: "Inspeção e achados de fragilidades",
    period: "Diversos projetos",
    desc:
      "**Leitura de código** em busca de vulnerabilidades e más práticas, com foco em risco para o negócio. Experiência em contextos regulados e de alto impacto.",
    bullets: [
      "**Banco Nossa Caixa** — análise de fonte com foco em fragilidades de segurança",
      "**OAB** — inspeção de segurança no sistema de **plano de saúde**",
    ],
    color: "border-red-500",
  },
  {
    company: "Souza Cruz (BAT)",
    role: "Body shop (2002–2005) · projetos via terceiros até 2015",
    period: "2002 – 2015",
    desc:
      "**2002–2005:** alocação em **body shop** na Souza Cruz. **Até 2015:** continuidade desenvolvendo **sistemas e projetos** para a empresa **por meio de terceiros**. Autor do **sistema de marketing share** adotado pelas regionais mundiais. **Reestruturação de Active Directory**, diretórios e rede em escala Brasil — atuação na **área de segurança** no projeto que **padronizou diretórios, grupos e direitos de acesso** segundo especificação da minha equipe junto aos **analistas da Souza Cruz**. Projeto **GenaSV2**: migração do parque (legado → Windows profissional), homologação, engenharia reversa e sistemas legados com nova partição (**NTFS**).",
    bullets: [
      "**Auditoria** de diretórios de rede em minutos, com rastreio de alterações e responsáveis",
      "Imaging com **Ghost**; scripts pós-login (NetWare → Windows) para perfil de acesso por função",
      "**eTrust Admin** (identidade): microsistemas, chamados, policies/rules",
    ],
    color: "border-lime-500",
  },
];

export const STORY_BLOCKS: { title: string; text: string }[] = [
  {
    title: "De grandes corporações a produto digital",
    text:
      "Minha trajetória mistura **código**, **dados** e **operação real**: na Souza Cruz (BAT), do **body shop** a projetos via **terceiros até 2015**, criei o **marketing share** adotado pelas regionais globais; na SulAmérica construí de ponta a ponta o sistema de **carreira e sucessão**, projeto que a **Globo** adquiriu. Em paralelo, **BI na Casa & Video**, **Magento**, **WordPress** com custom fields. Hoje integro WhatsApp a ERPs legados e produtos como MyPet e autopeças — **negócio antes de tecnologia**.",
  },
  {
    title: "Infraestrutura, identidade, segurança e legado",
    text:
      "Em **AD** e rede em nível Brasil (**GenaSV2**, **NTFS**, imaging com **Ghost**), atuei na **segurança** do projeto que **padronizou diretórios, grupos e direitos** com os analistas da Souza Cruz. **Auditoria** de rede em escala, **eTrust Admin** e, em outros contextos, **inspeção de código-fonte** (ex.: **Banco Nossa Caixa**, **OAB** — plano de saúde). Na **OI**, batimento RH ↔ LDAP em **VBScript** para rotatividade de call center.",
  },
  {
    title: "Requisitos, órgãos e decisão de produto",
    text:
      "Na **ANP** (via Módulo), **governança de documentação** e **casos de uso** do sistema de **royalties** de extração/produção — léxico, voz (**terceira pessoa**) e conformidade contratual. No **TJES**, entrevistas com magistrados e servidores para avaliar **sistema próprio vs PROJUDI**; leitura de processo jurídico real, não só de requisitos no papel. É o mesmo DNA que levo para discovery e arquitetura hoje.",
  },
  {
    title: "Dados complexos e e-commerce",
    text:
      "Na **Nomad Foods** (via GO4SPARK), ajudei a montar o **capital de giro** com Access como engine e Excel como superfície — unindo SAP, ERPs e dados financeiros. No **Magento**, aprofundei a análise do modelo EAV (entidades com propriedades dinâmicas) e levo essa lógica de **metadados flexíveis** para produtos que precisam cadastrar entidades bem diferentes na mesma base. Somam-se **mapas de calor**, **SEO**, **checagem de preços** em marketplaces e visualização de estoque para achar falhas rápido.",
  },
  {
    title: "Como trabalho hoje",
    text:
      "Continuo próximo de **legado** (Linux antigo, DBF/CDX, APIs pontuais) e de **stack moderna** (React, PHP, integrações). Ministrei **Excel** na carreira e ensinei **VBA** a colegas — acredito em ferramenta certa para o contexto, não moda. Com **IA**, uso LLMs e agentes (ex.: OpenClaw) para acelerar análise, documentação e qualidade — sem substituir o pensamento sistêmico que construí em quase três décadas.",
  },
];

export const STACK_CATEGORIES: { name: string; items: string[] }[] = [
  {
    name: "Backend & integração",
    items: [
      "PHP (Laravel / legado)",
      "Node.js",
      "Python",
      "NestJS",
      "APIs REST",
      "LDAP / identidade",
      "VBScript (legado)",
    ],
  },
  {
    name: "Requisitos, segurança & pesquisa",
    items: [
      "Análise e governança de requisitos (casos de uso)",
      "Documentação normativa (léxico, voz, conformidade)",
      "Revisão de código-fonte (achados de segurança)",
      "Entrevistas / discovery com especialistas de domínio",
      "IAM / governança de acesso (AD, grupos, direitos)",
      "Setor público e regulado (ANP, tribunais)",
    ],
  },
  {
    name: "Frontend & produto",
    items: ["React", "Next.js", "TypeScript", "Flutter", "UX para fluxos complexos"],
  },
  {
    name: "Dados & BI",
    items: [
      "Excel avançado (incl. VBA)",
      "Access como engine",
      "PostgreSQL",
      "SQL Server",
      "MySQL",
      "PostGIS",
    ],
  },
  {
    name: "Legado, e-commerce & ops",
    items: [
      "Magento (EAV / metadados)",
      "WordPress + custom fields",
      "Active Directory",
      "DBF/CDX",
      "Docker",
      "Redis",
      "BullMQ",
    ],
  },
  {
    name: "IA & automação",
    items: ["LLMs", "OpenClaw (agentes)", "Orquestração de tarefas", "Stripe", "AWS S3", "CI/CD"],
  },
];
