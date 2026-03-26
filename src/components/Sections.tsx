import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Terminal,
  Code2,
  Brain,
  Zap,
  Layout,
  Layers,
  Rocket,
  Globe,
  FlaskConical,
  Settings,
  ChevronRight,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { AGENT_OS_REPO_URL } from "../data/career";
import { HOME_SECTION_CONFIG, getLocalizedProject } from "../data/projects";
import { renderRichText } from "./richText";
import { useCareerExperiences, useStoryBlocks, useStackCategories, type StackItemRaw } from "../hooks/useCareerContent";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 py-20 overflow-hidden tech-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/50 to-bg pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono mb-6 animate-pulse-soft"
        >
          <Terminal size={14} />
          <span>{t("hero.badge")}</span>
        </motion.div>

        <div className="flex items-center gap-4 mb-4 text-[10px] font-mono text-text-secondary opacity-50">
          <span className="flex items-center gap-1">
            <div className="w-1 h-1 rounded-full bg-accent animate-pulse" /> {t("hero.statusLine")}
          </span>
          <span className="flex items-center gap-1">
            <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" /> {t("hero.latency")}
          </span>
          <span className="flex items-center gap-1">
            <div className="w-1 h-1 rounded-full bg-purple-500 animate-pulse" /> {t("hero.uptime")}
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
          Hudson{" "}
          <span className="text-accent relative">
            Falcão
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1 bg-accent"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </span>{" "}
          Silva
        </h1>

        <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-10 max-w-2xl">{renderRichText(t("hero.lead"))}</p>

        <div className="flex flex-wrap gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-8 py-4 bg-accent text-black font-bold rounded-xl hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            {t("hero.cta")}
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/FalcaoHS"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-surface border border-border text-text-primary font-bold rounded-xl hover:bg-accent/5 transition-all flex items-center gap-2"
          >
            <Globe size={18} /> {t("hero.github")}
          </motion.a>
        </div>
      </motion.div>

      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/10 blur-[120px] rounded-full pointer-events-none animate-pulse-soft" />
      <div
        className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse-soft"
        style={{ animationDelay: "2s" }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-mono">{t("hero.scrollHint")}</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
};

export const About = () => {
  const { t } = useTranslation();
  const cards = [
    { icon: <Brain />, title: t("about.cards.product.title"), desc: t("about.cards.product.desc") as string },
    {
      icon: <Zap />,
      title: t("about.cards.ai.title"),
      desc: (
        <span className="text-sm text-text-secondary">
          {t("about.cards.ai.descBeforeLink")}{" "}
          <a
            href={AGENT_OS_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-medium underline-offset-2 hover:underline"
          >
            Agent OS
          </a>
          {t("about.cards.ai.descAfterLink")}
        </span>
      ),
    },
    { icon: <Layout />, title: t("about.cards.ux.title"), desc: t("about.cards.ux.desc") as string },
    { icon: <Rocket />, title: t("about.cards.builder.title"), desc: t("about.cards.builder.desc") as string },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-surface/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start relative z-10">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-4 flex items-center gap-2">
            <ChevronRight size={14} /> {t("about.kicker")}
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">{t("about.title")}</h3>
          <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
            <p>{renderRichText(t("about.p1"))}</p>
            <p>{renderRichText(t("about.p2"))}</p>
            <p>{renderRichText(t("about.p3"))}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {cards.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-all group animate-scan"
            >
              <div className="text-accent mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="font-bold mb-2">{item.title}</h4>
              {typeof item.desc === "string" ? <p className="text-sm text-text-secondary">{item.desc}</p> : item.desc}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export const Philosophy = () => {
  const { t } = useTranslation();
  const lines = t("philosophy.lines", { returnObjects: true }) as string[];
  const list = Array.isArray(lines) ? lines : [];

  return (
    <section className="py-24 px-6 border-y border-border bg-dot-pattern relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-4">{t("philosophy.kicker")}</h2>
        <div className="grid gap-8 mt-12">
          {list.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 text-2xl md:text-3xl font-medium text-left group p-4 rounded-xl hover:bg-accent/5 transition-all"
            >
              <span className="text-accent font-mono text-sm">0{i + 1}</span>
              <span className="group-hover:translate-x-2 transition-transform">{text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Experience = () => {
  const { t } = useTranslation();
  const experiences = useCareerExperiences();

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-4 text-center">{t("experience.kicker")}</h2>
        <p className="text-center text-text-secondary text-sm max-w-2xl mx-auto mb-12 leading-relaxed">{t("experience.intro")}</p>
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative pl-8 border-l-2 ${exp.color} pb-4 group`}
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-bg border-2 border-inherit group-hover:scale-150 transition-transform" />
              <div className="flex flex-wrap justify-between items-baseline gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{exp.company}</h3>
                  <p className="text-accent font-medium">{exp.role}</p>
                </div>
                <span className="text-sm font-mono text-text-secondary bg-surface px-3 py-1 rounded-full border border-border">
                  {exp.period}
                </span>
              </div>
              <p className="text-text-secondary leading-relaxed max-w-3xl [&_strong]:text-text-primary">{renderRichText(exp.desc)}</p>
              {exp.bullets && exp.bullets.length > 0 && (
                <ul className="mt-4 space-y-2 max-w-3xl text-text-secondary text-sm list-disc pl-5 marker:text-accent">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{renderRichText(b)}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

function renderStackItem(item: StackItemRaw, t: (k: string) => string) {
  if (typeof item === "string") return item;
  if (item && typeof item === "object" && "agentOs" in item && item.agentOs) {
    return (
      <a
        href={AGENT_OS_REPO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex flex-wrap items-center gap-1.5 text-accent hover:underline underline-offset-2"
      >
        {t("stack.agentOsLabel")}
        <ExternalLink size={12} className="opacity-70" aria-hidden />
      </a>
    );
  }
  return null;
}

export const Stack = () => {
  const { t } = useTranslation();
  const categories = useStackCategories();

  return (
    <section className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-16 text-center">{t("stack.kicker")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-6 p-6 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-all"
            >
              <h3 className="text-lg font-bold border-b border-border pb-2 flex items-center gap-2">
                <Code2 size={18} className="text-accent" /> {cat.name}
              </h3>
              <ul className="space-y-3">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-text-secondary group">
                    <div className="w-1.5 h-1.5 mt-2 shrink-0 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                    {typeof item === "string" ? item : renderStackItem(item, t)}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const TechnicalNarrative = () => {
  const { t } = useTranslation();
  const blocks = useStoryBlocks();

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-12 text-center">{t("narrative.kicker")}</h2>
        <div className="space-y-16">
          {blocks.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-[1fr_2fr] gap-8 items-start p-8 rounded-3xl bg-surface/50 border border-border hover:bg-surface transition-all"
            >
              <div className="sticky top-24">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <div className="w-12 h-1 bg-accent rounded-full" />
              </div>
              <p className="text-text-secondary text-lg leading-relaxed [&_strong]:text-text-primary [&_strong]:font-semibold">
                {renderRichText(item.text)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PROJECT_SECTION_ICONS = [
  <Rocket key="i0" className="text-accent" />,
  <Globe key="i1" className="text-accent" />,
  <FlaskConical key="i2" className="text-accent" />,
  <Settings key="i3" className="text-accent" />,
  <Layers key="i4" className="text-accent" />,
];

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 px-6 bg-surface/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-16 text-center">{t("projectsSection.kicker")}</h2>

        <div className="space-y-20">
          {HOME_SECTION_CONFIG.map((section, idx) => {
            const sectionTitle = t(section.sectionTitleKey);
            return (
              <div key={section.sectionTitleKey}>
                <div className="flex items-center gap-3 mb-10">
                  {PROJECT_SECTION_ICONS[idx] ?? PROJECT_SECTION_ICONS[0]}
                  <h3 className="text-2xl font-bold tracking-tight">{sectionTitle}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.projectSlugs.map((slug) => {
                    const item = getLocalizedProject(slug, t);
                    if (!item) return null;
                    const primaryExternal = item.links[0];
                    return (
                      <motion.div
                        key={slug}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="relative p-8 rounded-3xl bg-surface border border-border hover:border-accent/50 transition-all group flex flex-col h-full animate-scan"
                      >
                        <Link
                          to={`/projeto/${slug}`}
                          className="absolute inset-0 z-0 rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                          aria-label={t("projectsSection.ariaOpen", { name: item.name })}
                        />
                        <div className="relative z-10 flex flex-col h-full pointer-events-none">
                          <div className="flex justify-between items-start gap-2 mb-4">
                            <h4 className="text-xl font-bold group-hover:text-accent transition-colors">{item.name}</h4>
                            <span className="flex items-center gap-1.5 shrink-0 text-accent text-xs font-mono">
                              {t("projectsSection.details")}{" "}
                              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                            </span>
                          </div>
                          <p className="text-text-secondary mb-6 text-sm leading-relaxed flex-grow">{item.desc}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {item.tags.map((tag, j) => (
                              <span key={j} className="text-[10px] font-mono px-2 py-1 rounded bg-bg border border-border text-text-secondary">
                                {tag}
                              </span>
                            ))}
                          </div>
                          {primaryExternal && primaryExternal.label && (
                            <a
                              href={primaryExternal.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="pointer-events-auto relative z-20 inline-flex items-center gap-1.5 text-[11px] font-mono text-text-secondary hover:text-accent transition-colors w-fit"
                            >
                              {primaryExternal.label} <ExternalLink size={12} />
                            </a>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-24 p-8 rounded-3xl border border-dashed border-border text-center bg-surface/50">
          <h4 className="text-lg font-bold mb-4">{t("projectsSection.summaryTitle")}</h4>
          <p className="text-text-secondary text-sm max-w-2xl mx-auto leading-relaxed">{t("projectsSection.summaryBody")}</p>
        </div>
      </div>
    </section>
  );
};

export const Contact = () => {
  const { t } = useTranslation();
  const subject = encodeURIComponent(t("contact.emailSubject"));

  return (
    <section id="contact" className="py-32 px-6 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto glass p-12 rounded-3xl relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("contact.title")}</h2>
        <p className="text-xl text-text-secondary mb-10">{t("contact.subtitle")}</p>
        <div className="flex flex-col items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:falcaoh@gmail.com?subject=${subject}`}
            className="flex items-center justify-center gap-3 px-8 py-4 bg-accent text-black font-bold rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            falcaoh@gmail.com
          </motion.a>
          <p className="text-sm text-text-secondary max-w-md leading-relaxed">{t("contact.phoneNote")}</p>
        </div>
        <div className="mt-12 pt-12 border-t border-border flex justify-center gap-8 text-text-secondary text-sm font-mono">
          <span>{t("contact.location")}</span>
          <span>{t("contact.years")}</span>
        </div>
      </motion.div>
    </section>
  );
};
