# Holy Cross College of Carigara — Official Public Website

Modern institutional website for **Holy Cross College of Carigara, Incorporated (HCCC)** in Carigara, Leyte, Philippines.

This is a **public information website** (digital front door). It is **not** an LMS, student portal, grading system, or replacement for the existing enrollment portal.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Content modules in `src/content/` (CMS-ready architecture)
- Inquiry API with validation, honeypot, and basic rate limiting

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` to `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production, `.env.production` sets:

```bash
NEXT_PUBLIC_SITE_URL=https://hccc-carigara.pages.dev
```

## Cloudflare Pages (live site)

- **Live URL:** https://hccc-carigara.pages.dev
- **Project:** `hccc-carigara`

Deploy the current build (Windows PowerShell — use `npm.cmd` if `npm` is blocked by ExecutionPolicy):

```bash
npm.cmd run pages:deploy
```

Or from Command Prompt / after fixing ExecutionPolicy:

```bash
npm run pages:deploy
```

Requires Wrangler login once: `npx wrangler login`.

## Key official links used in content

- Enrollment portal: https://schoolaide.holycrosscollege.edu.ph/
- Facebook (main): https://www.facebook.com/holycrosscollegeofcarigaraofficial
- Facebook (College Department): https://www.facebook.com/holycrosscollegedepartment/
- RCAPS reference: https://rcapschools.org/hccc/
- Live website: https://hccc-carigara.pages.dev

## Content architecture

Editable content lives in:

- `src/content/site.ts` — identity, mission/vision, contact
- `src/content/programs.ts` — academic programs
- `src/content/admissions.ts` — process & requirements
- `src/content/faqs.ts` — FAQs
- `src/content/news.ts` — news articles
- `src/content/events.ts` — events & calendar
- `src/content/campus.ts` — history, facilities, gallery, campus life

Administrator placeholders are clearly marked where public verification was unavailable (leadership names, founding year, facility photos, SHS strands, etc.).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — ESLint
- `npm run pages:deploy` — build and deploy to Cloudflare Pages

## Deployment

Compatible with Vercel, Netlify, and Cloudflare Pages (Next.js). Configure the custom domain when ready.
