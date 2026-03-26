import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Hero, About, Philosophy, Experience, Stack, TechnicalNarrative, Projects, Contact } from "../components/Sections";

export default function Home() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t("meta.homeTitle");
  }, [t, i18n.language]);

  return (
    <>
      <Hero />
      <About />
      <Philosophy />
      <Experience />
      <Stack />
      <TechnicalNarrative />
      <Projects />
      <Contact />
    </>
  );
}
