import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Terminal, Code2, Brain, Zap, Layout, Layers, Rocket, Globe, FlaskConical, Settings, ChevronRight, ExternalLink, ArrowRight } from "lucide-react";
import { EXPERIENCES, STORY_BLOCKS, STACK_CATEGORIES } from "../data/career";
import { HOME_SECTION_SLUGS, PROJECT_BY_SLUG } from "../data/projects";

export const Hero = () => {
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
          <span>CORPORATIVO · E-COMMERCE · DADOS · LEGADO · IA</span>
        </motion.div>
        
        <div className="flex items-center gap-4 mb-4 text-[10px] font-mono text-text-secondary opacity-50">
          <span className="flex items-center gap-1"><div className="w-1 h-1 rounded-full bg-accent animate-pulse" /> STATUS: ACTIVE</span>
          <span className="flex items-center gap-1"><div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" /> LATENCY: 12ms</span>
          <span className="flex items-center gap-1"><div className="w-1 h-1 rounded-full bg-purple-500 animate-pulse" /> UPTIME: 99.9%</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
          Hudson <span className="text-accent relative">
            Falcão
            <motion.div 
              className="absolute -bottom-2 left-0 w-full h-1 bg-accent"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </span> Silva
        </h1>
        
        <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-10 max-w-2xl">
          Há <strong className="text-text-primary font-semibold">28 anos</strong> unindo negócio, infraestrutura e código — da Souza Cruz e SulAmérica a integrações com WhatsApp e APIs modernas. Na web desde 1996; hoje conecto legado, dados e IA para entregar o que a operação realmente precisa.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            className="px-8 py-4 bg-accent text-black font-bold rounded-xl hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            Vamos conversar
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/FalcaoHS" 
            target="_blank"
            className="px-8 py-4 bg-surface border border-border text-text-primary font-bold rounded-xl hover:bg-accent/5 transition-all flex items-center gap-2"
          >
            <Globe size={18} /> GitHub
          </motion.a>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/10 blur-[120px] rounded-full pointer-events-none animate-pulse-soft" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse-soft" style={{ animationDelay: "2s" }} />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-mono">System initialized</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-surface/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-4 flex items-center gap-2">
            <ChevronRight size={14} /> 01 · Sobre mim
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Não sou só quem codifica. Sou quem entende o tabuleiro inteiro.</h3>
          <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
            <p>
              Sou analista de sistemas sênior com trajetória em <strong className="text-text-primary font-medium">multinacionais</strong>, seguradoras, varejo e integradoras — de sistemas que rodaram no mundo inteiro (BAT) a produtos que viraram ativo (SulAmérica → Globo).
            </p>
            <p>
              Domino o caminho entre <strong className="text-text-primary font-medium">planilha, banco, ERP legado e API</strong>: já unifiquei SAP e ERPs para capital de giro na Europa, mantive Magento por anos, e hoje ponho WhatsApp e front moderno para conversar com DBF e servidores que ninguém manda aposentar — porque o negócio não pode parar.
            </p>
            <p>
              Uso <strong className="text-text-primary font-medium">IA</strong> (LLMs e agentes como OpenClaw) para acelerar análise, documentação e qualidade — sempre como alavanca sobre o que já aprendi em quase três décadas, não como atalho para pensar.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { icon: <Brain />, title: "Pensador de Produto", desc: "Visão além da feature, foco no valor real." },
            { icon: <Zap />, title: "Orquestrador de IA", desc: "LLMs, OpenClaw e agentes autônomos que colaboram entre si, não só prompts soltos." },
            { icon: <Layout />, title: "UX & Design", desc: "Interfaces que reduzem esforço operacional." },
            { icon: <Rocket />, title: "Builder de Sistemas", desc: "De ideias complexas a sistemas escaláveis." }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-all group animate-scan"
            >
              <div className="text-accent mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-text-secondary">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export const Philosophy = () => {
  return (
    <section className="py-24 px-6 border-y border-border bg-dot-pattern relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-4">02 · Como eu penso</h2>
        <div className="grid gap-8 mt-12">
          {[
            "Não desenvolvo features, resolvo problemas",
            "Não começo pelo código, começo pelo entendimento",
            "Não otimizo só performance, otimizo clareza",
            "Não sigo padrões cegamente, adapto para o contexto"
          ].map((text, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 text-2xl md:text-3xl font-medium text-left group p-4 rounded-xl hover:bg-accent/5 transition-all"
            >
              <span className="text-accent font-mono text-sm">0{i+1}</span>
              <span className="group-hover:translate-x-2 transition-transform">{text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

function renderInlineEmphasis(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, j) => {
    const m = part.match(/^\*\*(.+)\*\*$/);
    if (m) return <strong key={j}>{m[1]}</strong>;
    return <span key={j}>{part}</span>;
  });
}

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-4 text-center">03 · Trajetória profissional</h2>
        <p className="text-center text-text-secondary text-sm max-w-2xl mx-auto mb-12 leading-relaxed">
          Destaques reais — de sistemas globais a integrações que ninguém vê, mas que mantêm a empresa de pé.
        </p>
        <div className="space-y-12">
          {EXPERIENCES.map((exp, i) => (
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
              <p className="text-text-secondary leading-relaxed max-w-3xl [&_strong]:text-text-primary">
                {renderInlineEmphasis(exp.desc)}
              </p>
              {exp.bullets && exp.bullets.length > 0 && (
                <ul className="mt-4 space-y-2 max-w-3xl text-text-secondary text-sm list-disc pl-5 marker:text-accent">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{renderInlineEmphasis(b)}</li>
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

export const Stack = () => {
  return (
    <section className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-16 text-center">04 · Stack & tecnologias</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {STACK_CATEGORIES.map((cat, i) => (
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
                  <li key={j} className="flex items-center gap-3 text-text-secondary group">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                    {item}
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
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-12 text-center">05 · Narrativa & linha do tempo</h2>
        <div className="space-y-16">
          {STORY_BLOCKS.map((item, i) => (
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
                {renderInlineEmphasis(item.text)}
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
  return (
    <section id="projects" className="py-24 px-6 bg-surface/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-16 text-center">06 · Produtos & experimentos</h2>
        
        <div className="space-y-20">
          {HOME_SECTION_SLUGS.map((section, idx) => (
            <div key={section.sectionTitle}>
              <div className="flex items-center gap-3 mb-10">
                {PROJECT_SECTION_ICONS[idx] ?? PROJECT_SECTION_ICONS[0]}
                <h3 className="text-2xl font-bold tracking-tight">{section.sectionTitle}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.projectSlugs.map((slug) => {
                  const item = PROJECT_BY_SLUG[slug];
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
                        aria-label={`Abrir página do projeto ${item.name}`}
                      />
                      <div className="relative z-10 flex flex-col h-full pointer-events-none">
                        <div className="flex justify-between items-start gap-2 mb-4">
                          <h4 className="text-xl font-bold group-hover:text-accent transition-colors">{item.name}</h4>
                          <span className="flex items-center gap-1.5 shrink-0 text-accent text-xs font-mono">
                            Detalhes <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
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
                        {primaryExternal && (
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
          ))}
        </div>

        <div className="mt-24 p-8 rounded-3xl border border-dashed border-border text-center bg-surface/50">
          <h4 className="text-lg font-bold mb-4">Resumo da linha de frente</h4>
          <p className="text-text-secondary text-sm max-w-2xl mx-auto leading-relaxed">
            Souza Cruz (BAT) 2002–2015: body shop, terceiros, marketing share, AD, GenaSV2, segurança na padronização de acessos. SulAmérica → Globo. ANP (royalties), TJES (PROJUDI), auditoria de código (Nossa Caixa, OAB). Nomad Foods, Magento, BI, OI × LDAP, integrações legado ↔ canais digitais.
          </p>
        </div>
      </div>
    </section>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto glass p-12 rounded-3xl relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Vamos construir a solução certa?</h2>
        <p className="text-xl text-text-secondary mb-10">
          Se você precisa de alguém que entende o problema antes de sair codando, vamos conversar.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:falcaoh@gmail.com" 
            className="flex items-center justify-center gap-3 px-8 py-4 bg-accent text-black font-bold rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            falcaoh@gmail.com
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+5521993073019" 
            className="flex items-center justify-center gap-3 px-8 py-4 bg-surface border border-border text-text-primary font-bold rounded-xl"
          >
            (21) 99307-3019
          </motion.a>
        </div>
        <div className="mt-12 pt-12 border-t border-border flex justify-center gap-8 text-text-secondary text-sm font-mono">
          <span>NITERÓI - RJ, BRASIL</span>
          <span>+28 ANOS NA ÁREA</span>
        </div>
      </motion.div>
    </section>
  );
};
