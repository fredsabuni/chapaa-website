# Chapaa website

Marketing site for Chapaa, a savings and goals app for Tanzania. Built with Next.js 15 (App Router) and TypeScript. It has no backend and is statically rendered.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check
```

## Project layout

- `app/layout.tsx`: fonts (Bricolage Grotesque, Manrope via `next/font`), SEO and Open Graph metadata
- `app/page.tsx`: puts the page sections together
- `app/globals.css`: all styles, with light and dark themes set as CSS variables on `:root`
- `app/icon.png`: favicon
- `components/Sections.tsx`: Nav, Hero, Banner, How it works, Group savings, Products, Safety, FAQ, Footer
- `components/KangaPanel.tsx`: client component for the animated kanga pattern and the demo savings ticket
- `components/Phone.tsx`: CSS phone mockup building blocks
- `public/logo.png`: Chapaa logo

## Deploy to Vercel

1. Push this folder to a GitHub, GitLab or Bitbucket repo.
2. In Vercel, choose **Add New → Project** and import the repo. Vercel detects Next.js on its own, so the defaults work as they are.
3. Optional: set the environment variable `NEXT_PUBLIC_SITE_URL` (for example `https://chapaa.co.tz`). It is used for the canonical and Open Graph URLs.
4. Deploy, then add your custom domain under **Settings → Domains**.

Or deploy from the CLI with `npx vercel` (preview) and `npx vercel --prod`.
