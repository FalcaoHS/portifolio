/**
 * Metadados técnicos dos projetos (tags, links). Textos exibidos vêm de i18n (`projects.items.*`).
 */

import type { ProjectStatus } from "./projects";

export interface ProjectMeta {
  slug: string;
  status: ProjectStatus;
  tags: string[];
  /** Apenas href — rótulos em i18n */
  links: { href: string }[];
}

export const PROJECT_META_LIST: ProjectMeta[] = [
  {
    slug: "banheiro-urgente",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Leaflet", "Redis"],
    status: "production",
    links: [{ href: "https://banheirourgente.app" }],
  },
  {
    slug: "lorely",
    tags: ["NestJS", "Next.js", "Stripe", "OpenAI", "Android TWA"],
    status: "production",
    links: [{ href: "https://lorely.app" }],
  },
  {
    slug: "compile-chill",
    tags: ["Next.js", "Prisma", "Framer Motion", "Upstash"],
    status: "open-source",
    links: [
      { href: "https://compileandchill.dev" },
      { href: "https://github.com/FalcaoHS/Compile-Chill" },
    ],
  },
  {
    slug: "mapsports",
    tags: ["NestJS", "PostGIS", "Mapbox", "BullMQ"],
    status: "technical",
    links: [],
  },
  {
    slug: "faktra",
    tags: ["FastAPI", "Python", "pgvector", "Next.js"],
    status: "technical",
    links: [],
  },
  {
    slug: "rpg-ia",
    tags: ["Next.js 16", "Express", "WebSocket", "pgvector"],
    status: "technical",
    links: [],
  },
  {
    slug: "onescan",
    tags: ["Next.js", "AWS S3", "QRCode", "Playwright"],
    status: "technical",
    links: [],
  },
  {
    slug: "portal-streamers",
    tags: ["NestJS", "TypeORM", "React", "PostgreSQL"],
    status: "technical",
    links: [],
  },
  {
    slug: "taroom",
    tags: ["Next.js 15", "NestJS", "Stack Auth", "Neon"],
    status: "development",
    links: [],
  },
  {
    slug: "poupancinha",
    tags: ["Flutter", "Riverpod", "Isar", "Biometrics"],
    status: "development",
    links: [],
  },
  {
    slug: "s4s-saas-generator",
    tags: ["TypeScript", "Drizzle", "JSON Schema", "Vitest"],
    status: "development",
    links: [],
  },
  {
    slug: "shuk-code",
    tags: ["DSL", "Tree-sitter", "MCP", "Research"],
    status: "development",
    links: [],
  },
  {
    slug: "shuktv",
    tags: ["Next.js", "Node", "Radix UI", "Docker"],
    status: "showcase",
    links: [],
  },
  {
    slug: "paqueta",
    tags: ["React", "Vite", "TypeScript", "Tailwind"],
    status: "showcase",
    links: [],
  },
  {
    slug: "meditacao-vida-real",
    tags: ["Vite", "Google Ads", "GA4", "Hotmart"],
    status: "showcase",
    links: [],
  },
  {
    slug: "quantum-development",
    tags: ["Python", "Qiskit", "Quantum Computing"],
    status: "showcase",
    links: [{ href: "https://github.com/FalcaoHS/qiskit-superposition-demo" }],
  },
];

export const PROJECT_META_BY_SLUG: Record<string, ProjectMeta> = Object.fromEntries(
  PROJECT_META_LIST.map((m) => [m.slug, m])
);

/** Seções da home: chave i18n do título + slugs */
export const HOME_SECTION_CONFIG: { sectionTitleKey: string; projectSlugs: string[] }[] = [
  { sectionTitleKey: "sections.production", projectSlugs: ["banheiro-urgente", "lorely"] },
  { sectionTitleKey: "sections.openSource", projectSlugs: ["compile-chill"] },
  {
    sectionTitleKey: "sections.technical",
    projectSlugs: ["mapsports", "faktra", "rpg-ia", "onescan", "portal-streamers"],
  },
  {
    sectionTitleKey: "sections.development",
    projectSlugs: ["taroom", "poupancinha", "s4s-saas-generator", "shuk-code"],
  },
  {
    sectionTitleKey: "sections.showcase",
    projectSlugs: ["shuktv", "paqueta", "meditacao-vida-real", "quantum-development"],
  },
];
