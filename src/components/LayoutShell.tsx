import { useState, useEffect, type ReactNode } from "react";
import { Sun, Moon, ArrowUp } from "lucide-react";

type Theme = "light" | "dark";

export function LayoutShell({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "dark";
  });

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <main className="min-h-screen transition-colors duration-500 bg-bg text-text-primary">
      <div className="fixed top-6 right-6 z-50 flex flex-col gap-4">
        <button
          type="button"
          onClick={toggleTheme}
          className="p-3 rounded-full bg-surface border border-border text-text-primary hover:scale-110 transition-all shadow-lg hover:border-accent/50"
          aria-label="Alternar tema"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        {scrolled && (
          <button
            type="button"
            onClick={scrollToTop}
            className="p-3 rounded-full bg-surface border border-border text-text-primary hover:scale-110 transition-all shadow-lg hover:border-accent/50 animate-in fade-in slide-in-from-bottom-4 duration-300"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={20} />
          </button>
        )}
      </div>

      {children}

      <footer className="py-12 px-6 border-t border-border text-center text-text-secondary text-sm font-mono">
        <p>© {new Date().getFullYear()} Hudson Falcão Silva. Built with Vision & AI.</p>
      </footer>
    </main>
  );
}
