import { AGENT_OS_REPO_URL } from "../../data/career";

const AG = AGENT_OS_REPO_URL;

export const ptCareer = {
  experiences: [
    {
      company: "XL Soluções",
      role: "MyPet, Autoponto, GET 4.0 (CMOC) — suporte, features e agentes",
      period: "Presente",
      desc: `Atuação nos produtos da XL: **MyPet** (clínicas veterinárias e profissionais do ramo); **Autoponto** (ERP de autopeças) — integrações com **WhatsApp**, carrinho e catálogo, APIs ligando front novo ao sistema legado de vendas, endpoint em **Linux** legado e ponte com **DBF/CDX**; e **GET 4.0**, sistema de **controle de treinamentos de funcionários** desenvolvido pela XL para o cliente **CMOC**, em **PHP** e **JavaScript** — hoje com **suporte ativo** e **desenvolvimento de novas funcionalidades**. Ajudo a **treinar os agentes OpenClaw**; no dia a dia uso **Cursor**, [Agent OS](${AG}) (padrões e specs no contexto da IA) e outras ferramentas de desenvolvimento assistido.`,
      bullets: [
        "Autoponto: integração entre stack atual e ERP legado (DBF/CDX, APIs, canais comerciais)",
        "GET 4.0: evolução contínua em PHP + JS no contexto CMOC",
        `Práticas de IA: OpenClaw + Cursor + [Agent OS](${AG}) (padronização e spec-driven com IA)`,
      ],
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
    },
    {
      company: "KUBO Building",
      role: "Fullstack Developer",
      period: "2024",
      desc: "React, Next.js e Node; arquitetura web e PostgreSQL.",
    },
    {
      company: "S4Sys",
      role: "Analista de Sistemas",
      period: "2021 – 2022",
      desc: "Requisitos, segurança em software, BPMN (Sydle One) e low-code (Hubtool).",
    },
    {
      company: "Okulos",
      role: "Magento e e-commerce",
      period: "2018 – 2019",
      desc:
        "Foco em **Magento**: manutenção de longo prazo, análise da modelagem **EAV** e metadados para entidades flexíveis, **SEO** e operação de e-commerce. Experiência profunda na estrutura de dados e extensibilidade da plataforma.",
      bullets: ["Mapas de calor, performance e visão de catálogo em ambiente B2B/B2C"],
    },
    {
      company: "Infobase",
      role: "WordPress, PHP e sites sob medida",
      period: "2018 – 2019",
      desc:
        "Trabalho com **WordPress**: **custom fields**, backends administráveis e automação. Backend completo do site **Enerprev** (área admin, gráficos dinâmicos e blog) — anos no ar. Scripts de inicialização de projetos (Linux/Windows) para padronizar novos sites.",
      bullets: ["Conteúdo editável pelo cliente, sem depender de deploy para cada ajuste"],
    },
    {
      company: "OI (integração via Sereno)",
      role: "Automação RH × identidade (E-Trust)",
      period: "Era corporativa",
      desc:
        "Scripts em **VBScript** que liam planilhas exportadas do RH, conectavam ao **LDAP** do eTrust Admin e aplicavam criação de usuários, perfis, bloqueios e revogações — essenciais na alta rotatividade de call center.",
    },
    {
      company: "Casa & Video",
      role: "BI e operações em loja",
      period: "Era corporativa",
      desc:
        "Planilhas e painéis para BI: vendas e produtividade de equipes **em tempo real**, apoiando decisão na loja.",
      bullets: ["Visão de dados operacional, não só relatório mensal"],
    },
    {
      company: "SulAmérica Seguros",
      role: "Sistemas de carreira e sucessão",
      period: "Era corporativa",
      desc:
        "Desenvolvimento **integral** do sistema de carreira e sucessão. O projeto foi **adquirido pela Globo** após demonstrar valor — referência de impacto em produto corporativo.",
    },
    {
      company: "ANP — Agência Nacional do Petróleo (via Módulo)",
      role: "Análise de requisitos e governança de documentação",
      period: "Projeto corporativo",
      desc:
        "Responsável por **alinhar e corrigir** a documentação do sistema de **controle de royalties** de extração e produção: **casos de uso**, vocabulário e estilo (ex.: **terceira pessoa**, termos proibidos, padrão de locução) para ficar em conformidade com as regras do órgão e do contrato.",
      bullets: ["Consistência entre requisitos, léxico e diagramas de caso de uso"],
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
    },
  ],
  narrative: [
    {
      title: "De grandes corporações a produto digital",
      text:
        "Minha trajetória mistura **código**, **dados** e **operação real**: na Souza Cruz (BAT), do **body shop** a projetos via **terceiros até 2015**, criei o **marketing share** adotado pelas regionais globais; na SulAmérica construí de ponta a ponta o sistema de **carreira e sucessão**, projeto que a **Globo** adquiriu. **Casa & Video** (BI em tempo real). **Okulos**: **Magento**. **Infobase**: **WordPress**, **Enerprev** e automação de projetos. **Hoje, na XL**: **MyPet**, **Autoponto** e **GET 4.0** (CMOC) — **negócio antes de tecnologia**.",
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
        "Na **Nomad Foods** (via GO4SPARK), ajudei a montar o **capital de giro** com Access como engine e Excel como superfície — unindo SAP, ERPs e dados financeiros. Na **Okulos**, aprofundei **Magento** e o modelo **EAV** (entidades com propriedades dinâmicas); essa lógica de **metadados flexíveis** reaparece quando o produto precisa cadastrar tipos muito diferentes na mesma base. Somam-se **mapas de calor**, **SEO**, **checagem de preços** em marketplaces e visualização de estoque.",
    },
    {
      title: "Como trabalho hoje",
      text: `Na **XL**, estou em **PHP + JavaScript** em sistemas como o **GET 4.0**, além de **Autoponto** e **MyPet**; ajudo a **treinar os agentes OpenClaw** e uso **Cursor** com [Agent OS](${AG}) — sistema para **alinhar padrões do projeto e specs** ao que a IA vê no editor, reduzindo retrabalho em desenvolvimento assistido. Continuo próximo de **legado** (Linux antigo, DBF/CDX) e de **stack moderna** (React, integrações). Ministrei **Excel** e ensinei **VBA**: ferramenta certa para o contexto, não moda. **IA** acelera análise e documentação, mas não substitui o pensamento sistêmico construído em quase três décadas.`,
    },
  ],
  stackCategories: [
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
      name: "IA, tooling & automação",
      items: [
        "LLMs",
        "OpenClaw (treinamento de agentes)",
        "Cursor (desenvolvimento assistido)",
        { agentOs: true as const },
        "Orquestração de tarefas",
        "Stripe",
        "AWS S3",
        "CI/CD",
      ],
    },
  ],
};
