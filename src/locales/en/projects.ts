/** Project copy — English */
export const enProjects = {
  items: {
    "banheiro-urgente": {
      name: "BanheiroUrgente.app",
      desc: "Web app to find public restrooms in emergencies. Real-world product with map clustering, SEO, and operational documentation.",
      sectionTitle: "Live products",
      paragraphs: [
        "BanheiroUrgente addresses a concrete urban problem: when traveling or in an emergency, finding a reliable public restroom quickly is hard. The product combines an interactive map, geographic data, and a mobile-first experience built for pressure.",
        "The stack prioritizes performance and SEO (organic discovery) and Redis-backed caching to cut latency in dense areas. PostgreSQL + Prisma modeling evolves cleanly as new data sources and partnerships appear.",
      ],
      highlights: [
        "Clustered maps for readable density",
        "Foundation for contributions and moderation",
        "Accessibility and load time on mobile networks",
      ],
      linkLabels: ["Live app"],
    },
    lorely: {
      name: "LoreLY.app",
      desc: "SaaS platform for AI-assisted book creation. NestJS/Next.js monorepo, Stripe billing, BullMQ queues, and Android app via TWA.",
      sectionTitle: "Live products",
      paragraphs: [
        "LoreLY is full SaaS: auth, subscriptions, heavy job queues, and a modern web UI, with Android distribution via Trusted Web Activity to unify codebase and updates.",
        "The NestJS backend organizes domains (billing, generation, assets) and integrates Stripe for recurring billing. BullMQ decouples long jobs (generation, post-processing) from the sync API. The AI layer uses OpenAI models with cost and editorial quality in mind.",
      ],
      highlights: [
        "Monorepo aligned to product domains",
        "Queues for AI workloads without blocking UX",
        "TWA on the Play Store with the web as source of truth",
      ],
      linkLabels: ["Live app"],
    },
    "compile-chill": {
      name: "Compile & Chill",
      desc: "Decompression portal for developers with themed games, server-side score validation, and a “dev” UX. Community and accessibility focused.",
      sectionTitle: "Open source & impact",
      paragraphs: [
        "Compile & Chill is a light space for breaks between builds: games with developer aesthetics and language, with server-validated scores to keep rankings honest.",
        "The project is open source (MIT) and evolving with the community via GitHub issues and discussions.",
      ],
      highlights: [
        "Server-side score validation",
        "Motion and micro-interactions with Framer Motion",
        "Rate limiting / Upstash cache where applicable",
      ],
      linkLabels: ["Live site", "Code on GitHub"],
    },
    mapsports: {
      name: "MapSports",
      desc: "Full geospatial platform: check-in, notifications, and reputation. NestJS backend with PostGIS and React + Mapbox frontend.",
      sectionTitle: "Technical depth & experiments",
      paragraphs: [
        "MapSports explores geolocation in sports or community scenarios: presence, history, and reputation elements, with PostGIS for efficient spatial queries.",
        "React + Mapbox on the frontend; NestJS coordinates business rules, notifications, and async processing with BullMQ.",
      ],
      highlights: [
        "Native spatial modeling in PostgreSQL (PostGIS)",
        "Clear split between API, workers, and client",
      ],
      linkLabels: [],
    },
    faktra: {
      name: "Faktra (FACTRA)",
      desc: "Data extraction and intelligence via natural language. Semantic search with pgvector and intent interpretation.",
      sectionTitle: "Technical depth & experiments",
      paragraphs: [
        "Faktra explores natural-language questions over structured and semi-structured data, combining FastAPI services with pgvector similarity in PostgreSQL.",
        "The Next.js layer provides exploration and feedback UIs; the core challenge is aligning embeddings, chunking, and metadata for useful, auditable answers.",
      ],
      highlights: [
        "RAG and semantic search with vectors in Postgres",
        "Typed, documented FastAPI",
      ],
      linkLabels: [],
    },
    "rpg-ia": {
      name: "RPG & IA",
      desc: "Context engine for solo RPG guided by AI. Streaming narrative, vector persistence, and background processing.",
      sectionTitle: "Technical depth & experiments",
      paragraphs: [
        "A virtual narrator needs long-term memory, character consistency, and low perceived latency. This experiment uses text streaming, WebSockets where useful, and pgvector to recall relevant campaign snippets.",
        "Express covers API and workers; Next.js hosts the game experience and dashboards.",
      ],
      highlights: [
        "Vector persistence for “session memory”",
        "Streaming for continuous dialogue feel",
      ],
      linkLabels: [],
    },
    onescan: {
      name: "OneScan",
      desc: "Disposable links and QR codes with access control and S3 storage. Security and URL lifecycle focused.",
      sectionTitle: "Technical depth & experiments",
      paragraphs: [
        "OneScan treats URLs and QR as resources with expiration and access policies: campaigns, temporary sharing, or reducing attack surface.",
        "S3 storage and server- or edge-generated QR, with Playwright e2e tests for critical flows.",
      ],
      highlights: [
        "Explicit link lifecycle (create, revoke, analytics)",
        "Automated tests for main journeys",
      ],
      linkLabels: [],
    },
    "portal-streamers": {
      name: "Portal dos Streamers",
      desc: "Hub for streamers to manage content (clips, playlists, social). Rich domain model and documented API.",
      sectionTitle: "Technical depth & experiments",
      paragraphs: [
        "Centralizing creator presence needs a domain model for channels, clips, metadata, and integrations without a confusing monolith.",
        "NestJS + TypeORM on the backend; React for ops dashboards. PostgreSQL backs relationships and basic analytics.",
      ],
      highlights: [
        "API designed to evolve and for third-party use",
        "Separation between identity core and media catalog",
      ],
      linkLabels: [],
    },
    taroom: {
      name: "TAROOM",
      desc: "Tarot app with AI and reflective journey. Strong design system and planned GDPR-style compliance.",
      sectionTitle: "In development & research",
      paragraphs: [
        "TAROOM blends ritual, reflection, and AI with privacy care: modern auth (Stack Auth), serverless DB (Neon), and explicit consent layers.",
        "The design system keeps sensitive flows and educational areas consistent.",
      ],
      highlights: [
        "Architecture ready for personal-data requirements",
        "Stack suited to fast deploy and elastic scale",
      ],
      linkLabels: [],
    },
    poupancinha: {
      name: "Poupancinha",
      desc: "Offline-first microfinance app with biometrics and secure storage. Privacy and mobile UX focused.",
      sectionTitle: "In development & research",
      paragraphs: [
        "Personal finance on the phone needs trust: biometrics, local Isar storage, and predictable Flutter state with Riverpod.",
        "Offline-first use without stable network, syncing when possible.",
      ],
      highlights: [
        "Privacy by design on device",
        "Native mobile UX with Flutter",
      ],
      linkLabels: [],
    },
    "s4s-saas-generator": {
      name: "S4S (SaaS Generator)",
      desc: "Metadata-driven SaaS meta-generator (“genome”). Code automation and tooling engineering.",
      sectionTitle: "In development & research",
      paragraphs: [
        "S4S explores generating product structure from a declarative “genome”: JSON schemas, TypeScript typing, and Vitest tests to avoid regressions in generation.",
        "Drizzle keeps migrations and types aligned when the generator emits persistence layers.",
      ],
      highlights: [
        "Metadata-first approach for repeatability",
        "Tests as generator contract",
      ],
      linkLabels: [],
    },
    "shuk-code": {
      name: "Shuk-Code",
      desc: "Research on an “AI-first” DSL for the web ecosystem. Language architecture and AI integration.",
      sectionTitle: "In development & research",
      paragraphs: [
        "Shuk-Code is a research line: how domain-specific languages can work with LLMs and protocols like MCP so tools “understand” the project.",
        "Tree-sitter supports robust parsing and syntax evolution.",
      ],
      highlights: [
        "Convergence of classic tooling and agents",
        "Incremental parsing for IDEs and automation",
      ],
      linkLabels: [],
    },
    shuktv: {
      name: "Site ShukTV",
      desc: "Live and community hub for content creators. Node monorepo with Next.js frontend.",
      sectionTitle: "Showcase & legacy",
      paragraphs: [
        "ShukTV aggregates creator presence: scheduling, links, and coherent visual identity. Radix UI speeds accessible components; Docker standardizes environments.",
        "Node monorepo shares internal packages across apps and services.",
      ],
      highlights: [
        "Accessible UI with headless primitives",
        "Containerization for dev/prod parity",
      ],
      linkLabels: [],
    },
    paqueta: {
      name: "Paquetá",
      desc: "Brand landing for a surf-punk band. Fast front-end demo and simple routing.",
      sectionTitle: "Showcase & legacy",
      paragraphs: [
        "Music showcase: fast delivery with Vite, strong typing, and Tailwind for visual iteration. Suited to releases, tour dates, and embedded streaming.",
      ],
      highlights: ["Vite build performance", "Light React 19-ready component patterns"],
      linkLabels: [],
    },
    "meditacao-vida-real": {
      name: "Meditação na Vida Real",
      desc: "Conversion funnel with technical marketing tracking and Hotmart integration.",
      sectionTitle: "Showcase & legacy",
      paragraphs: [
        "Campaign-optimized landing: GA4 events, pixels, and Hotmart integration for checkout and digital product delivery. Vite keeps the front lean and measurable.",
      ],
      highlights: [
        "Funnel-aligned tracking (Ads → landing → conversion)",
        "Infoproduct platform integration",
      ],
      linkLabels: [],
    },
    "quantum-development": {
      name: "Quantum Development",
      desc: "Educational studies in quantum computing illustrating qubits and the Hadamard gate.",
      sectionTitle: "Showcase & legacy",
      paragraphs: [
        "Educational material with Qiskit to visualize superposition and basic operations, bridging curiosity and quantum formalism.",
        "A public GitHub repo hosts reproducible notebooks and demos.",
      ],
      highlights: ["Qiskit experiments on simulator", "Base to extend to introductory algorithms"],
      linkLabels: ["Code on GitHub"],
    },
  },
};
