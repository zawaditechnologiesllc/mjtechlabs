# MJ Tech Labs — mjtechlabs.me

Portfolio website for **John Muriuki**, Full-Stack Software Developer (Nairobi, Kenya).

Built with **Next.js 15 + TypeScript + Tailwind CSS**, fully static (no database or separate backend needed).

## Pages

| Page | What's on it |
|---|---|
| `/` | Hero, stats, about preview, skills, services grid, work process, latest blog posts, CTA |
| `/about/` | Bio, tech stack, career timeline |
| `/services/` | 5 services + featured **Dropshipping Complete Course — $500** with WhatsApp enrollment |
| `/blog/` | 50 prefilled articles with category filters, search and pagination |
| `/blog/[slug]/` | Full article pages with related posts |
| `/contact/` | Contact cards + form (email via FormSubmit, or send via WhatsApp) |

Every page has a floating **WhatsApp chat widget** wired to **+254 715 432 303**.

## Architecture — why no database?

This is a portfolio: all content (services, blog posts, profile info) lives in the code under `lib/`. That means:

- **No Supabase / Render needed** — nothing to pay for, nothing to break.
- **Vercel (frontend) is the entire deployment** — the site is exported as static HTML.
- **No admin panel needed** — to edit content, change the files below and push; Vercel redeploys automatically:
  - `lib/site.ts` — name, tagline, WhatsApp number, email
  - `lib/services.ts` — services and course pricing
  - `lib/posts-data/posts1|2|3.ts` — blog articles
- The contact form emails `okoth59@gmail.com` through [FormSubmit](https://formsubmit.co) (free, no backend). **The first submission sends you a confirmation email — click it once to activate.**

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Deploying to Vercel with mjtechlabs.me

1. Go to [vercel.com](https://vercel.com) → **Add New Project** → import this GitHub repo.
2. Framework preset: **Next.js** (auto-detected). No env vars needed. Deploy.
3. In the Vercel project → **Settings → Domains** → add `mjtechlabs.me` and `www.mjtechlabs.me`.
4. At your domain registrar (where you bought mjtechlabs.me), set the DNS records Vercel shows you:
   - `A` record for `mjtechlabs.me` → `76.76.21.21`
   - `CNAME` for `www` → `cname.vercel-dns.com`
5. Wait for DNS to propagate (minutes to a few hours). Vercel issues SSL automatically.

Every push to the production branch redeploys the site automatically.

---

*Also in this repo: `mjtechlabs-video-studio.html` — a standalone short-form video studio tool (docs in [VIDEO-STUDIO.md](VIDEO-STUDIO.md)).*
