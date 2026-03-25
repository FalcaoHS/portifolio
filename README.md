# Portfólio

Meu currículo online — site em Vite + React + TypeScript.

Repositório: [github.com/FalcaoHS/portifolio](https://github.com/FalcaoHS/portifolio)

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Variáveis de ambiente

Copie `.env.example` para `.env` e preencha (por exemplo `GEMINI_API_KEY` se usar integração com Gemini). No Vercel, configure as mesmas variáveis em **Project → Settings → Environment Variables**.

## Deploy na Vercel

**Opção A — Git (recomendado)**  
No [Vercel Dashboard](https://vercel.com/new), importe o repositório GitHub. A Vercel detecta Vite automaticamente (`npm run build` → `dist`). O `vercel.json` só adiciona rewrites para o React Router (rotas como `/projeto/:slug`).

**Opção B — CLI**

```bash
npm run deploy:preview   # preview
npm run deploy           # produção
```

Na primeira vez, o CLI pede login e vincula o projeto.
