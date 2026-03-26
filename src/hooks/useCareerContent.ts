import { useTranslation } from "react-i18next";
import { EXPERIENCE_BORDER_COLORS } from "../data/experienceColors";
import type { ExperienceEntry } from "../data/projects";

export function useCareerExperiences(): ExperienceEntry[] {
  const { t } = useTranslation();
  const raw = t("career.experiences", { returnObjects: true }) as Omit<ExperienceEntry, "color">[];
  if (!Array.isArray(raw)) return [];
  return raw.map((e, i) => ({
    ...e,
    color: EXPERIENCE_BORDER_COLORS[i] ?? "border-zinc-500",
  }));
}

export function useStoryBlocks(): { title: string; text: string }[] {
  const { t } = useTranslation();
  const raw = t("career.narrative", { returnObjects: true }) as { title: string; text: string }[];
  return Array.isArray(raw) ? raw : [];
}

export type StackItemRaw = string | { agentOs: true };

export function useStackCategories(): { name: string; items: StackItemRaw[] }[] {
  const { t } = useTranslation();
  const raw = t("career.stackCategories", { returnObjects: true }) as {
    name: string;
    items: StackItemRaw[];
  }[];
  return Array.isArray(raw) ? raw : [];
}
