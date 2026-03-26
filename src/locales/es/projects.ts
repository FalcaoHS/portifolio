/** Textos de proyectos — Español */
export const esProjects = {
  items: {
    "banheiro-urgente": {
      name: "BanheiroUrgente.app",
      desc: "Aplicación web para localizar baños públicos en emergencias. Producto orientado a un problema real con clustering de mapas, SEO y documentación operativa.",
      sectionTitle: "Productos en producción",
      paragraphs: [
        "BanheiroUrgente nace de un problema urbano concreto: en desplazamientos o emergencias, encontrar un baño público confiable rápido es difícil. El producto combina mapa interactivo, datos geográficos y experiencia mobile-first pensada para uso bajo presión.",
        "La stack prioriza rendimiento y SEO (descubrimiento orgánico) y capas de caché con Redis para reducir latencia en zonas con muchos puntos. El modelado en PostgreSQL con Prisma facilita evolucionar el esquema con nuevas fuentes y alianzas.",
      ],
      highlights: [
        "Mapas con clustering para lectura clara con distinta densidad",
        "Base preparada para crecer en contribuciones y moderación",
        "Enfoque en accesibilidad y tiempo de carga en redes móviles",
      ],
      linkLabels: ["Aplicación en producción"],
    },
    lorely: {
      name: "LoreLY.app",
      desc: "Plataforma SaaS de creación de libros con IA. Monorepo NestJS/Next.js, facturación Stripe, colas BullMQ y app Android vía TWA.",
      sectionTitle: "Productos en producción",
      paragraphs: [
        "LoreLY es un SaaS completo: autenticación, suscripciones, colas de trabajo pesado e interfaz web moderna, con distribución Android vía Trusted Web Activity para unificar codebase y actualizaciones.",
        "El backend en NestJS organiza dominios (billing, generación, assets) e integra Stripe para cobro recurrente. BullMQ desacopla tareas largas (generación, post-proceso) de la API síncrona. La capa de IA usa modelos OpenAI pensando coste y calidad editorial.",
      ],
      highlights: [
        "Monorepo alineado a dominios de producto",
        "Colas para cargas de IA sin bloquear la experiencia",
        "TWA en Play Store manteniendo la web como fuente de verdad",
      ],
      linkLabels: ["Aplicación en producción"],
    },
    "compile-chill": {
      name: "Compile & Chill",
      desc: "Portal de descompresión para desarrolladores con juegos temáticos, validación server-side de puntuaciones y UX “dev”. Comunidad y accesibilidad.",
      sectionTitle: "Open source e impacto",
      paragraphs: [
        "Compile & Chill es un espacio ligero para pausas entre builds: juegos con estética y lenguaje de desarrolladores, con puntuación validada en servidor para integridad de rankings.",
        "El proyecto es open source (MIT) y evoluciona con la comunidad en GitHub.",
      ],
      highlights: [
        "Validación server-side de puntuaciones",
        "Motion y microinteracciones con Framer Motion",
        "Rate limiting / caché con Upstash cuando aplique",
      ],
      linkLabels: ["Sitio en producción", "Código en GitHub"],
    },
    mapsports: {
      name: "MapSports",
      desc: "Plataforma geoespacial completa: check-in, notificaciones y reputación. Backend NestJS con PostGIS y frontend React con Mapbox.",
      sectionTitle: "Profundidad técnica y experimentos",
      paragraphs: [
        "MapSports explora geolocalización en escenario deportivo o de comunidad: presencia en lugares, historial y reputación, con PostGIS para consultas espaciales eficientes.",
        "React con Mapbox en el frontend; NestJS coordina reglas de negocio, notificaciones y procesamiento asíncrono con BullMQ.",
      ],
      highlights: [
        "Modelado espacial nativo en PostgreSQL (PostGIS)",
        "Separación clara entre API, workers y cliente",
      ],
      linkLabels: [],
    },
    faktra: {
      name: "Faktra (FACTRA)",
      desc: "Extracción e inteligencia de datos en lenguaje natural. Búsqueda semántica con pgvector e interpretación de intención.",
      sectionTitle: "Profundidad técnica y experimentos",
      paragraphs: [
        "Faktra investiga preguntas en lenguaje natural sobre bases estructuradas y semi-estructuradas, con FastAPI y pgvector para similitud vectorial en PostgreSQL.",
        "La capa Next.js entrega interfaces de exploración y feedback; el reto es alinear embeddings, chunking y metadatos para respuestas útiles y auditables.",
      ],
      highlights: [
        "RAG y búsqueda semántica con vectores en Postgres",
        "API tipada y documentada en FastAPI",
      ],
      linkLabels: [],
    },
    "rpg-ia": {
      name: "RPG & IA",
      desc: "Motor de contexto para RPG en solitario guiado por IA. Narrativa en streaming, persistencia vectorial y procesamiento en background.",
      sectionTitle: "Profundidad técnica y experimentos",
      paragraphs: [
        "Un narrador virtual necesita memoria a largo plazo, consistencia de personajes y baja latencia percibida. El experimento usa streaming de texto, WebSockets donde aplica y pgvector para recordar fragmentos de campaña.",
        "Express complementa API y workers; Next.js concentra la experiencia de juego y paneles.",
      ],
      highlights: [
        "Persistencia vectorial para “memoria” de sesión",
        "Streaming para sensación de diálogo continuo",
      ],
      linkLabels: [],
    },
    onescan: {
      name: "OneScan",
      desc: "Servicio de enlaces y QR desechables con control de acceso y almacenamiento S3. Seguridad y ciclo de vida de URLs.",
      sectionTitle: "Profundidad técnica y experimentos",
      paragraphs: [
        "OneScan trata URLs y QR como recursos con expiración y políticas de acceso: campañas, uso temporal o reducción de superficie de ataque.",
        "Almacenamiento en S3 y generación de QR en servidor o edge, con pruebas e2e (Playwright) en flujos críticos.",
      ],
      highlights: [
        "Ciclo de vida explícito del enlace (creación, revocación, analytics)",
        "Pruebas automatizadas de recorridos principales",
      ],
      linkLabels: [],
    },
    "portal-streamers": {
      name: "Portal dos Streamers",
      desc: "Hub para que streamers gestionen contenido (clips, playlists, social). Modelado rico de dominio y API documentada.",
      sectionTitle: "Profundidad técnica y experimentos",
      paragraphs: [
        "Centralizar presencia de creadores exige un modelo de dominio para canales, clips, metadatos e integraciones sin un monolito confuso.",
        "NestJS + TypeORM en backend; React en paneles operativos. PostgreSQL sostiene relaciones y consultas analíticas básicas.",
      ],
      highlights: [
        "API pensada para evolución y consumo por terceros",
        "Separación entre núcleo de identidad y catálogo de medios",
      ],
      linkLabels: [],
    },
    taroom: {
      name: "TAROOM",
      desc: "App de Tarot con IA y recorrido reflexivo. Design system robusto y cumplimiento tipo RGPD planificado.",
      sectionTitle: "En desarrollo e investigación",
      paragraphs: [
        "TAROOM combina ritual, reflexión e IA con cuidado de privacidad: autenticación moderna (Stack Auth), base serverless (Neon) y capas explícitas de consentimiento.",
        "El design system asegura consistencia entre flujos sensibles y áreas educativas.",
      ],
      highlights: [
        "Arquitectura preparada para datos personales",
        "Stack alineada a despliegue rápido y escala elástica",
      ],
      linkLabels: [],
    },
    poupancinha: {
      name: "Poupancinha",
      desc: "App de microfinanzas offline-first con biometría y almacenamiento seguro. Privacidad y UX móvil.",
      sectionTitle: "En desarrollo e investigación",
      paragraphs: [
        "Las finanzas personales en el móvil exigen confianza: biometría, almacenamiento local con Isar y Riverpod para estado predecible en Flutter.",
        "Modo offline-first permite uso sin red estable, sincronizando cuando sea posible.",
      ],
      highlights: [
        "Privacidad by design en el dispositivo",
        "UX móvil nativa con Flutter",
      ],
      linkLabels: [],
    },
    "s4s-saas-generator": {
      name: "S4S (SaaS Generator)",
      desc: "Meta-generador de SaaS basado en metadatos (“genoma”). Automatización de código e ingeniería de herramientas.",
      sectionTitle: "En desarrollo e investigación",
      paragraphs: [
        "S4S explora generar estructura de producto desde un “genoma” declarativo: schemas JSON, tipado TypeScript y tests con Vitest para no regredir la generación.",
        "Drizzle mantiene migraciones y tipos alineados cuando el generador emite persistencia.",
      ],
      highlights: [
        "Enfoque metadata-first para repetibilidad",
        "Tests como contrato del generador",
      ],
      linkLabels: [],
    },
    "shuk-code": {
      name: "Shuk-Code",
      desc: "Investigación de DSL “AI-first” para el ecosistema web. Arquitectura de lenguajes e integración con IA.",
      sectionTitle: "En desarrollo e investigación",
      paragraphs: [
        "Shuk-Code es línea de investigación: cómo las DSL pueden colaborar con LLMs y protocolos como MCP para herramientas que “entienden” el proyecto.",
        "Tree-sitter como base para parsing robusto y evolución de sintaxis.",
      ],
      highlights: [
        "Convergencia entre tooling clásico y agentes",
        "Parsing incremental para IDEs y automatización",
      ],
      linkLabels: [],
    },
    shuktv: {
      name: "Site ShukTV",
      desc: "Hub de lives y comunidad para creadores. Monorepo Node con frontend Next.js.",
      sectionTitle: "Vitrina y legado",
      paragraphs: [
        "ShukTV agrega presencia de creadores: agenda, enlaces e identidad visual coherente. Radix UI acelera componentes accesibles; Docker estandariza entornos.",
        "Monorepo Node comparte paquetes internos entre apps y servicios.",
      ],
      highlights: [
        "UI accesible con primitivos headless",
        "Contenedorización para paridad dev/prod",
      ],
      linkLabels: [],
    },
    paqueta: {
      name: "Paquetá",
      desc: "Landing de marca para banda (surf punk). Demo de front rápido y routing simple.",
      sectionTitle: "Vitrina y legado",
      paragraphs: [
        "Proyecto vitrina musical: entrega rápida con Vite, tipado fuerte y Tailwind para iteración visual. Ideal para lanzamientos, fechas de gira y streaming embebido.",
      ],
      highlights: ["Rendimiento de build con Vite", "Componentización ligera con patrones React 19-ready"],
      linkLabels: [],
    },
    "meditacao-vida-real": {
      name: "Meditação na Vida Real",
      desc: "Embudo de conversión con tracking de marketing técnico e integración Hotmart.",
      sectionTitle: "Vitrina y legado",
      paragraphs: [
        "Landing optimizada para campañas: eventos GA4, píxeles e integración Hotmart para checkout y entrega de producto digital. Vite mantiene el front ligero y medible.",
      ],
      highlights: [
        "Tracking alineado al embudo (Ads → landing → conversión)",
        "Integración con plataforma de infoproducto",
      ],
      linkLabels: [],
    },
    "quantum-development": {
      name: "Quantum Development",
      desc: "Estudios educativos en computación cuántica ilustrando qubits y puerta Hadamard.",
      sectionTitle: "Vitrina y legado",
      paragraphs: [
        "Material educativo con Qiskit para visualizar superposición y operaciones básicas, como puente entre curiosidad y formalismo cuántico.",
        "Repositorio público en GitHub con notebooks y demos reproducibles.",
      ],
      highlights: ["Qiskit para experimentación en simulador", "Base para ampliar a algoritmos introductorios"],
      linkLabels: ["Código en GitHub"],
    },
  },
};
