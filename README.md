# Portfólio

Site do portfólio (Vite + React + TypeScript).

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
No [Vercel Dashboard](https://vercel.com/new), importe o repositório GitHub. O `vercel.json` já define build (`npm run build`), saída (`dist`) e rotas SPA para o React Router.

**Opção B — CLI**

```bash
npm run deploy:preview   # preview
npm run deploy           # produção
```

Na primeira vez, o CLI pede login e vincula o projeto.
