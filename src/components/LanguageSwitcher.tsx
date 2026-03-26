import { useTranslation } from "react-i18next";

const LANGS = [
  { code: "pt" as const, labelKey: "layout.langPt" as const },
  { code: "en" as const, labelKey: "layout.langEn" as const },
  { code: "es" as const, labelKey: "layout.langEs" as const },
];

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  return (
    <div
      className="flex rounded-full bg-surface border border-border p-0.5 gap-0.5 shadow-lg"
      role="group"
      aria-label={t("layout.langAria")}
    >
      {LANGS.map(({ code, labelKey }) => (
        <button
          key={code}
          type="button"
          onClick={() => void i18n.changeLanguage(code)}
          className={`px-2.5 py-1.5 rounded-full text-[11px] font-mono transition-colors ${
            i18n.language === code
              ? "bg-accent text-black font-semibold"
              : "text-text-secondary hover:text-text-primary"
          }`}
          aria-pressed={i18n.language === code}
        >
          {t(labelKey)}
        </button>
      ))}
    </div>
  );
}
