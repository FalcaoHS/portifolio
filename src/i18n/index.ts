import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { pt } from "../locales/pt";
import { en } from "../locales/en";
import { es } from "../locales/es";

export const I18N_STORAGE_KEY = "portfolio-lang";

const saved =
  typeof window !== "undefined" ? window.localStorage.getItem(I18N_STORAGE_KEY) : null;
const initialLng = saved === "en" || saved === "es" || saved === "pt" ? saved : "pt";

void i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: pt },
    en: { translation: en },
    es: { translation: es },
  },
  lng: initialLng,
  fallbackLng: "pt",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lng === "pt" ? "pt-BR" : lng;
  }
  if (typeof window !== "undefined") {
    window.localStorage.setItem(I18N_STORAGE_KEY, lng);
  }
});

if (typeof document !== "undefined") {
  document.documentElement.lang = initialLng === "pt" ? "pt-BR" : initialLng;
}

export default i18n;
