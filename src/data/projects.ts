/**
 * Tipos de projeto e entrada de experiência. Conteúdo exibido vem de i18n + `projectMeta` + `projectI18n`.
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
  sectionTitle: string;
  paragraphs: string[];
  highlights?: string[];
  links: ProjectLink[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  desc: string;
  bullets?: string[];
  color: string;
}

export { PROJECT_META_BY_SLUG, PROJECT_META_LIST, HOME_SECTION_CONFIG } from "./projectMeta";
export { getLocalizedProject } from "./projectI18n";
