# MJTECHLABS — Short-Form Video Studio

A single, self-contained HTML page that generates **premium vertical (1080×1920)
short-form video clips** for TikTok, Instagram Reels, Facebook Reels, YouTube
Shorts and LinkedIn — built around the MJTECHLABS brand.

Everything runs **in the browser**. No build step, no server, no dependencies,
nothing uploaded. Just open the file.

## Open it

Open `mjtechlabs-video-studio.html` in **desktop Chrome or Edge** (fastest
export) and you're done. It also works in other modern browsers.

## Export format (TikTok / Instagram / YouTube Shorts ready)

Clips export as a **standard H.264 `.mp4`** — the exact format TikTok, Instagram
Reels and YouTube Shorts accept and play directly, no conversion needed. There
are two encoders, chosen automatically:

- **WebCodecs** (desktop Chrome / Edge): hardware-accelerated H.264 with
  **faststart** (the `moov` atom is written to the front of the file). Fast.
- **WASM H.264 encoder** (any other browser, bundled offline): software fallback
  that still produces a valid, non-fragmented `.mp4`. Slower, but it works
  everywhere with no plugins.

It does **not** use `MediaRecorder`, which produces `.webm` or *fragmented* MP4
files that TikTok/Instagram reject as "non-playable" — that was the cause of the
earlier broken exports. Encoding runs entirely in your browser; nothing is
uploaded.

## What it does

1. **Pick a topic** — pre-written, scroll-stopping decks aligned to the brand:
   - *Your WhatsApp Is Not A Website*
   - *Found On Google* (if your business vanished, would Google notice?)
   - *Your Competitor Took Your Customer*
   - *The Expensive Mistake* (a Facebook page is not a website)
   - *Before vs After*
   - *Sell Online · M-Pesa*
   - *Booking Systems*
   - *Your Business Isn't Bad, It's Invisible* (SEO)
   - *Pricing & Plans* (KSh 65,000 / 95,000 / 125,000)
   - *All services (showcase)*
2. **Pick a platform** — *TikTok / Reels / Shorts / All 3*. This sets the
   correct **safe zone** (so text never hides behind the platform UI) and the
   recommended length.
3. **Pick a length** — 7s / 15s / 22s / 30s (platform sweet spots; more slides
   on longer clips).
4. **Pick a caption style** — *Karaoke* (current word highlighted), *Word pop*
   (words appear one-by-one), or *Block* — animated text holds attention.
5. **Pick a vibe** — background + brand-blue accent. Backgrounds:
   - **Clean gradient** — premium brand mesh (Apple / Stripe / Linear feel)
   - **Floating UI** — drifting website/app mockups (on-brand for a web studio)
   - **Satisfying slice** — ASMR engagement bait
   - **Blocky parkour** — gameplay-style scroll bait
6. **Edit the captions** freely. Blank line = new slide. First slide is the
   **hook**. Markers: `>` = testimonial quote, `@` = name, `!` = CTA button.
7. **Export**:
   - **Export this clip** — current topic at current length
   - **All 4 lengths** — 7/15/22/30s of the current topic
   - **Every topic** — one clip per topic + the all-services showcase

Clips export **silent on purpose** — add a trending sound inside the app when
you post (native audio is what the algorithm rewards).

## Why these videos are built to convert

Every preset follows the structure that performs on short-form, backed by
current platform data:

- **Hook in frame 1** — 50–60% of viewers drop in the first 3 seconds and ~87%
  decide whether to keep watching in that window. Slide 1 is an oversized,
  sound-off-readable hook (≤7 words).
- **Platform-aware safe zones** — TikTok, Reels and Shorts each hide parts of
  the 1080×1920 frame behind their UI (action buttons, captions, audio bar,
  subscribe button). All text and the CTA stay inside the selected platform's
  safe box; a preview-only overlay shows you exactly where.
- **Animated, high-contrast captions** — ~80% of people watch muted, so the
  message lives in the text. Word-by-word reveal with an accent-highlighted
  active word on a dark pill boosts retention and comprehension.
- **One comment-bait CTA** — the last slide is a single high-contrast button
  ("Comment WEBSITE", "DM us SITE"…). Comment prompts feed the algorithm and
  CTAs lift click-through dramatically. Keep it to one ask.
- **Pacing & motion** — one idea per slide, a story-style progress bar, and a
  subtle background punch-in keep visual interest resetting.
- **Length sweet spots** — 7s (Reels-viral) · 15s · 22s (TikTok) · 30s (Shorts).

> No tool can *guarantee* a conversion rate — that depends on your offer,
> audience and consistency. What this does is remove every structural reason a
> good clip underperforms (weak hook, hidden text, no captions, buried CTA).

## Brand guardrails baked in

- MJTECHLABS palette (Primary `#2563EB`, Accent `#3B82F6`, Navy `#081120`),
  bold sans-serif, lots of whitespace, soft shadows — premium, never cheap.
- Testimonial slides are for **real words from real, consenting clients** only —
  no invented results, fake screenshots or "guaranteed" claims.
- Native-to-social tone: educate / create curiosity first, sell second.

## Honesty note

Testimonials in the presets are placeholders to show the format. Replace them
with genuine, approved client quotes before publishing.

---

MJTECHLABS · Premium websites that grow Kenyan businesses
WhatsApp **+254 715 432 303** · **WE GET WHAT WE GIVE**
