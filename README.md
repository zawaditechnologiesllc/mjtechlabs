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
2. **Pick a length** — 3s / 6s / 9s / 12s (more slides on longer clips).
3. **Pick a vibe** — background + brand-blue accent. Backgrounds:
   - **Clean gradient** — premium brand mesh (Apple / Stripe / Linear feel)
   - **Floating UI** — drifting website/app mockups (on-brand for a web studio)
   - **Satisfying slice** — ASMR engagement bait
   - **Blocky parkour** — gameplay-style scroll bait
4. **Edit the captions** freely (one slide per block, blank line between slides,
   `>` = testimonial quote, `@` = name).
5. **Export**:
   - **Export this clip** — current topic at current length
   - **All 4 lengths** — 3/6/9/12s of the current topic
   - **Every topic** — one clip per topic + the all-services showcase

Clips export **silent on purpose** — add a trending sound inside the app when
you post (native audio is what the algorithm rewards).

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
