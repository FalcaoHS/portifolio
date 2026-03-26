import { useState, useEffect, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Sun, Moon, ArrowUp } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { SpaceBackground } from "./SpaceBackground";

type Theme = "light" | "dark";

export function LayoutShell({ children }: { children: ReactNode }) {
  const { t } = useTranslation();
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
    <main className="relative min-h-screen transition-colors duration-500 bg-bg text-text-primary">
      <SpaceBackground theme={theme} />
      <div className="relative z-10 min-h-screen">
      <div className="fixed top-6 right-6 z-50 flex flex-col items-end gap-4">
        <LanguageSwitcher />
        <button
          type="button"
          onClick={toggleTheme}
          className="p-3 rounded-full bg-surface border border-border text-text-primary hover:scale-110 transition-all shadow-lg hover:border-accent/50"
          aria-label={t("layout.toggleTheme")}
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        {scrolled && (
          <button
            type="button"
            onClick={scrollToTop}
            className="p-3 rounded-full bg-surface border border-border text-text-primary hover:scale-110 transition-all shadow-lg hover:border-accent/50 animate-in fade-in slide-in-from-bottom-4 duration-300"
            aria-label={t("layout.backToTop")}
          >
            <ArrowUp size={20} />
          </button>
        )}
      </div>

      {children}

      <footer className="py-12 px-6 border-t border-border text-center text-text-secondary text-sm font-mono">
        <p>{t("footer", { year: new Date().getFullYear() })}</p>
      </footer>
      </div>
    </main>
  );
}
