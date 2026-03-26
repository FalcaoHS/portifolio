import type { TFunction } from "i18next";
import type { Project } from "./projects";
import { PROJECT_META_BY_SLUG } from "./projectMeta";

type ProjectBundle = {
  name: string;
  desc: string;
  sectionTitle: string;
  paragraphs: string[];
  highlights?: string[];
  linkLabels: string[];
};

export function getLocalizedProject(slug: string, t: TFunction): Project | undefined {
  const meta = PROJECT_META_BY_SLUG[slug];
  const bundle = t(`projects.items.${slug}`, { returnObjects: true }) as ProjectBundle | string;
  if (!meta || !bundle || typeof bundle !== "object") return undefined;
  const labels = bundle.linkLabels ?? [];
  return {
    slug,
    name: bundle.name,
    desc: bundle.desc,
    tags: meta.tags,
    status: meta.status,
    sectionTitle: bundle.sectionTitle,
    paragraphs: bundle.paragraphs ?? [],
    highlights: bundle.highlights,
    links: meta.links.map((l, i) => ({
      href: l.href,
      label: labels[i] ?? "",
    })),
  };
}
