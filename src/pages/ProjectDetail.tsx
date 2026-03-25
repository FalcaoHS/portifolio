import { useEffect } from "react";
import { motion } from "motion/react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getProject, type Project, type ProjectStatus } from "../data/projects";

const STATUS_LABEL: Record<ProjectStatus, string> = {
  production: "Produção",
  "open-source": "Open source",
  technical: "Experimento técnico",
  development: "Em desenvolvimento",
  showcase: "Vitrine & legado",
};

function ProjectBody({ project }: { project: Project }) {
  return (
    <>
      <header className="mb-12">
        <p className="text-sm font-mono text-accent uppercase tracking-widest mb-4">
          {project.sectionTitle} · {STATUS_LABEL[project.status]}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{project.name}</h1>
        <p className="text-xl text-text-secondary leading-relaxed">{project.desc}</p>
      </header>

      <div className="flex flex-wrap gap-2 mb-12">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-mono px-3 py-1.5 rounded-full bg-surface border border-border text-text-secondary"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="space-y-6 text-lg text-text-secondary leading-relaxed mb-12">
        {project.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {project.highlights && project.highlights.length > 0 && (
        <div className="mb-12 p-8 rounded-3xl bg-surface/50 border border-border">
          <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-6">Destaques</h2>
          <ul className="space-y-4">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-text-secondary">
                <span className="text-accent font-mono text-sm shrink-0">•</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="rounded-3xl border border-dashed border-border p-8 bg-surface/30">
        <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-6">Links</h2>
        {project.links.length > 0 ? (
          <ul className="space-y-3">
            {project.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-text-primary font-medium hover:text-accent transition-colors"
                >
                  {link.label}
                  <ExternalLink size={16} className="opacity-60" />
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-text-secondary text-sm leading-relaxed">
            Não há link público cadastrado para este projeto. A página reúne contexto técnico e escopo. Quando houver demo ou repositório público, os links aparecerão aqui.
          </p>
        )}
      </div>
    </>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : undefined;

  useEffect(() => {
    if (!project) return;
    const prev = document.title;
    document.title = `${project.name} | Hudson Falcão Silva`;
    window.scrollTo(0, 0);
    return () => {
      document.title = prev;
    };
  }, [project]);

  if (!slug || !project) {
    return <Navigate to="/" replace />;
  }

  return (
    <article className="px-6 py-24 md:py-32 max-w-3xl mx-auto relative z-10">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm font-mono text-text-secondary hover:text-accent transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Voltar aos projetos
        </Link>

        <ProjectBody project={project} />
      </motion.div>
    </article>
  );
}
