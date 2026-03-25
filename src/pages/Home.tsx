import { useEffect } from "react";
import { Hero, About, Philosophy, Experience, Stack, TechnicalNarrative, Projects, Contact } from "../components/Sections";

export default function Home() {
  useEffect(() => {
    document.title = "Hudson Falcão Silva | Portfólio";
  }, []);

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
