**Build a luxury handcrafted jewelry brand landing page for "OYLA" — a single-page app using Vite + Express with an `index.html` entry point served through Vite's SPA middleware in development and Express static serving in production. The page features scroll-driven video scrubbing, horizontal product carousel with video reveal, a two-column stats section, and a fixed footer reveal. Use GSAP + ScrollTrigger for all scroll-driven animations.**

---

### BUILD & SERVING ARCHITECTURE

- **Dev:** Express server (`tsx server.ts`) on port 3000 with Vite mounted as middleware (`createViteServer({ server: { middlewareMode: true }, appType: "spa" })`)
- **Build:** `vite build` compiles the frontend into `dist/`, then `esbuild` bundles `server.ts` into `dist/server.cjs` (Node CJS, external packages)
- **Production:** Express serves the `dist/` folder as static, with a catch-all route serving `index.html`
- The main page content lives in `index.html` at the project root (Vite entry point) with inline `<style>` and `<script>` tags
- Express provides an API proxy endpoint at `GET /api/higgsfield-video` that extracts direct MP4 URLs from Higgsfield share pages

---

### BRAND & DESIGN SYSTEM

- **Brand name:** OYLA (handcrafted rings studio, based in Berlin, est. 2019)
- **Brand color:** `#A3111E` (deep crimson red) used for header text, logo, and navigation only
- **Background:** Pure white `#ffffff`
- **Text:** Pure black `#000000` for all body and heading text
- **Dividers:** `#000000` solid 1px lines
- **Color palette:** Strictly black and white with the single crimson accent for the header/nav only

### FONTS (Google Fonts)

Load these exact fonts:
- **Instrument Serif** (weights: 400, italic 400) — used for all large display headings (hero title, stat numbers, left column heading)
- **Inter Tight** (weights: 300–700, italic 300–700) — used for body text, buttons, navigation, footer, and all UI elements
- **Cormorant Garamond** (weights: 300–700, italic) — loaded but not actively used (available for future use)

CSS font stacks:
- Headings: `'Instrument Serif', Georgia, serif`
- Body/UI: `'Inter Tight', 'Inter', Arial, sans-serif`

### CSS VARIABLES

```css
:root {
  --color-bg: #ffffff;
  --color-primary-text: #000000;
  --color-demoted-text: #000000;
  --color-divider: #000000;
  --font-stack: 'Inter Tight', 'Inter', Arial, sans-serif;
}
```

---

### STRUCTURE (TOP TO BOTTOM)

---

#### 1. FIXED HEADER

- **Position:** Fixed, `top: 32px`, `left: 32px`, `right: 32px`, `height: 30px`, `z-index: 100`
- **Layout:** Flexbox row, space-between, center aligned
- **Left:** OYLA logo as inline SVG (112x60px viewBox), all paths filled `#A3111E`. The logo contains the letters "OYLA" in a custom serif typeface with a distinctive "O" made of two concentric ellipses
- **Right:** Navigation group containing:
  - "ABOUT" link — `font-size: 15px`, `font-weight: 500`, uppercase, `color: #A3111E`, `gap: 194px` from the cart/menu group
  - Cart/Menu group (`gap: 50px`):
    - Hamburger button: 2 horizontal lines, each `30px` wide, `2.2px` height, `#A3111E`, `5px` gap between them
    - "[ BAG ]" button text — same 15px/500 style as ABOUT, `color: #A3111E`
- **Hover states:** `opacity: 0.7` on all interactive header elements

---

#### 2. SCROLL-DRIVEN VIDEO HERO SECTION

- **Container:** `height: 500vh` (creates the scroll distance for video scrubbing), `background: #000000`, `z-index: 10`
- **Sticky viewport:** `position: sticky; top: 0; height: 100vh`, black background, flex column, content pinned to bottom-left with `padding: 48px`
- **Video element:** Absolutely positioned, full-cover (`object-fit: cover`), `z-index: 1`, playsinline, muted, preload="auto"
  - **Primary video URL:** `https://d8j0ntlcm91z4.cloudfront.net/user_39ca84eAE1ODL9hbR5VhoEj8tBf/hf_20260627_212146_743b92b3-40a3-46cb-988d-7bf716564ec3.mp4`
- **Hero content overlay** (`z-index: 3`, `max-width: 700px`, left-aligned):
  - **Title:** "MEASURED" on line 1, "PURITY" on line 2
    - Font: Instrument Serif, `clamp(36px, 6vw, 72px)`, weight 400, `line-height: 1.05`, `letter-spacing: -1px`, `color: #000000`
    - Each line wrapped in `<span class="hero-title-line"><span class="hero-title-line-inner">...</span></span>`
  - **DISCOVER button** (below title, `margin-top: 10px`):
    - Capsule shape: white background, `border: 1px solid rgba(0,0,0,0.08)`, `border-radius: 100px`, `padding: 4px 4px 4px 18px`
    - Text "DISCOVER" — 13px, weight 500, uppercase
    - Circle icon: `28px` diameter, `#2e2e2e` background, white `+` cross made with `::before`/`::after` pseudo-elements (10px x 1.5px horizontal, 1.5px x 10px vertical)
    - Hover: background flips to `#000000`, text becomes white, circle becomes white with black cross
    - Click action: smooth scrolls to the footer

---

### CRITICAL VIDEO SCRUBBING TECHNIQUE

The video scrubbing uses a `requestAnimationFrame` loop with a **seeking guard** — this is the most important performance pattern:

```js
if (!video.seeking && Math.abs(video.currentTime - currentTime) > 0.01) {
  video.currentTime = currentTime;
}
```

**The `!video.seeking` check is essential.** We tell the browser: "Update the video frame ONLY when you have completely finished rendering the previous one." (Оновлюй кадр відео ТІЛЬКИ тоді, коли ти повністю закінчив малювати попередній.) Without this guard, the browser's video decoder gets flooded with seek requests, causing freezing, black frames, and stuttering. The smooth interpolation (`currentTime += (targetTime - currentTime) * 0.08`) combined with this seeking guard creates a buttery-smooth cinematic scrubbing experience.

**Full scrubbing behavior:**
- Video is paused; `currentTime` is driven by scroll position within the 500vh container
- Smooth interpolation: `currentTime += (targetTime - currentTime) * 0.08` in a `requestAnimationFrame` loop
- Only updates `currentTime` when `!video.seeking` AND delta > 0.01
- At 80%+ scroll progress, hero text characters individually fade out, blur, and shift upward (per-character staggered animation using cubic easing)
- The DISCOVER button also fades/shifts up with `pow(progress, 4)` easing

**Text splitting:** On DOMContentLoaded, each `.hero-title-line-inner` text is split into individual `<span class="hero-char">` elements for per-character animation.

---

#### 3. HORIZONTAL PRODUCT CAROUSEL (Awards Section)

- **Section:** Full viewport height (`100vh`), `overflow: hidden`, `border-top` and `border-bottom: 1px solid #000`, `z-index: 10`
- **Grid:** Flexbox row, `width: max-content`, containing 6 product cards
- **Each card:** `width: 33.333vw`, `border-right: 1px solid #000`, white background, centered content with `padding: clamp(40px, 8vh, 80px) 48px`, `gap: clamp(24px, 4vh, 48px)`
  - Image container: `height: 280px`, centered, `max-width: 85%`, `object-fit: contain`
  - Product name: 18px, weight 400, `letter-spacing: -0.2px`
  - Price: 16px, weight 500, `opacity: 0.6`

**Products (with exact CloudFront image URLs):**

1. **Obsidian Coil** — $480
   - Image: `https://d8j0ntlcm91z4.cloudfront.net/user_39ca84eAE1ODL9hbR5VhoEj8tBf/hf_20260628_144408_92b74dc4-ca69-412a-acfd-304f9b29eb5e_min.webp`

2. **Void Arc** — $560
   - Image: `https://d8j0ntlcm91z4.cloudfront.net/user_39ca84eAE1ODL9hbR5VhoEj8tBf/hf_20260628_145142_ed02063b-d983-47d2-b60b-4b4a5a3448bd_min.webp`

3. **Onyx Hex** — $620
   - Image: `https://d8j0ntlcm91z4.cloudfront.net/user_39ca84eAE1ODL9hbR5VhoEj8tBf/hf_20260628_144747_f21bc119-e460-45be-a071-851291bd71c5_min.webp`

4. **Shadow Sigil** — $740
   - Image: `https://d8j0ntlcm91z4.cloudfront.net/user_39ca84eAE1ODL9hbR5VhoEj8tBf/hf_20260627_215521_100b78bd-d24a-4225-b2e8-5bb30d44af73_min.webp`

5. **Eclipse Band** — $820
   - Image: (same as Obsidian Coil) `https://d8j0ntlcm91z4.cloudfront.net/user_39ca84eAE1ODL9hbR5VhoEj8tBf/hf_20260628_144408_92b74dc4-ca69-412a-acfd-304f9b29eb5e_min.webp`

6. **Matte Skull** — $950
   - Image: (same as Void Arc) `https://d8j0ntlcm91z4.cloudfront.net/user_39ca84eAE1ODL9hbR5VhoEj8tBf/hf_20260628_145142_ed02063b-d983-47d2-b60b-4b4a5a3448bd_min.webp`

**GSAP ScrollTrigger animation:**
- Section is pinned (`pin: true`, `start: "top top"`)
- Phase 1: Grid scrolls horizontally (translateX from 0 to negative overflow distance), `scrub: true`, `ease: "none"`
- Phase 2: After horizontal scroll completes, a `.video-scaling-wrapper` element symmetrically expands from `width: 0%` to `width: 100%` centered (`left: 50%; transform: translateX(-50%)`) revealing a second scroll-scrubbed video beneath

**Second video:**
- URL: `https://d8j0ntlcm91z4.cloudfront.net/user_39ca84eAE1ODL9hbR5VhoEj8tBf/hf_20260628_122130_8b16d300-75cb-49f5-82ce-afd6b79c2d79.mp4`
- Positioned `absolute`, centered with `transform: translate(-50%, -50%)`, `width: 100vw`, `height: 100vh`, `object-fit: cover`
- Uses the same `!video.seeking` guard pattern for smooth scrubbing
- Scrubbed in sync with the expansion progress using the same smooth interpolation technique (0.08 lerp factor)

---

#### 4. TWO-COLUMN STATS & COPY SECTION

- **Layout:** CSS Grid `50% 50%`, `border-bottom: 1px solid #000`
- **Left column:** `position: sticky; top: 0; height: 100vh`, flex column, `justify-content: space-between`, `padding: 48px 96px 48px 48px`
  - **Heading:** "Made Without Compromise" — Instrument Serif, `clamp(32px, 4vw, 42px)`, weight 400, `line-height: 1.15`
  - **3 paragraphs** (Inter Tight, 24px, weight 400, `line-height: 1.1`, `letter-spacing: -0.2px`, `gap: 32px`):
    1. "Each ring is forged by a single pair of hands — no factory floor, no assembly line. The material is chosen first; the form follows its nature."
    2. "We work in oxidized silver, blackened bronze, and raw brass. Weights are deliberate. Edges are left where they fall. Nothing is smoothed for comfort."
    3. "OYLA exists for those who wear jewelry that means something. Not decoration — declaration. One piece at a time, made to last a lifetime."
  - **VIEW COLLECTION button** (same capsule style as DISCOVER button)
  - All left-column elements have `data-fade-slide-in` attribute for scroll-triggered fade+slide animation (autoAlpha 0->1, y 20->0, stagger 0.15, duration 0.8, power2.out)

- **Right column:** `border-left: 1px solid #000`, scrollable, contains 4 stat cards:
  - Each card: `padding: 48px`, `min-height: 45vh`, `border-bottom: 1px solid #000` (except last)
  - Each card has a "stomp-wrapper" with two "stomp-stack" divs (stack-a and stack-b), each containing duplicate h1 headings (first is hidden via CSS `:first-child { display: none }`)
  - Heading font: Instrument Serif, `clamp(46px, 5.5vw, 70px)`, `letter-spacing: -1.5px`, `line-height: 0.95`
  - Detail paragraph below: 24px, `padding-top: 42px`, `line-height: 1.2`

**Stat cards content:**

| Stack A | Stack B | Detail |
|---------|---------|--------|
| 100% | Handmade | Every ring crafted by a single artisan, start to finish |
| 14-92g | Per piece | Deliberate weight — each ring is a physical presence you feel |
| Sterling | & Silver | Oxidized metals only — no plating, no compromise |
| Lifetime | Guarantee | We stand behind every piece we make, forever |

Card 4 also has: `<p class="card-subtext">Est. OYLA Studio, 2019.</p>` (13px, `margin-top: 12px`)

**Text splitting for stats:** Each visible `.heading-style-h1:last-child` is split into `<span class="stat-char">` elements. Each `.detail-paragraph` is split into `<span class="detail-word">` elements.

---

#### 5. FOOTER (Fixed Reveal Pattern)

- **Position:** `position: fixed; bottom: 0; left: 0; z-index: 1` — revealed as main content scrolls past
- **A `.footer-spacer` div** (transparent, pointer-events none) sits in the normal flow with its height dynamically set to match the footer's height, creating the reveal effect
- **Layout:** CSS Grid `1.2fr 1fr 1.5fr`, `gap: 48px`, `padding: 80px 48px`, white background

**Column 1 — Sign in & Credits:**
- Header: "Sign in" link (18px, weight 400, `letter-spacing: -0.2px`)
- Credits block (18px, `line-height: 1.35`):
  ```
  Handcrafted in small batches
  OYLA Studio
  [blank line]
  Based in Berlin
  (c) OYLA 2026
  All pieces are original designs.
  ```

**Column 2 — Links:**
- Header: "Instagram" link
- Links list (`gap: 12px`): Refund Policy, Privacy Policy, Terms of Service
- All links: 18px, weight 400, hover `opacity: 0.6`

**Column 3 — Newsletter:**
- Header: "Newsletter" (h3, 18px, weight 400)
- Description: "Join our list. Be first to know new drops. 10% off your first order." (18px, `line-height: 1.35`, `max-width: 380px`, `margin-bottom: 24px`)
- Form: Capsule input (`background: #f7f7f5`, `border-radius: 100px`, `padding: 6px 6px 6px 24px`, `max-width: 440px`)
  - Input: placeholder "Email", 14px, transparent background
  - Focus state: `box-shadow: 0 0 0 1px #000000`
  - Submit button: same capsule button pattern with "SUBSCRIBE" text and `+` circle
  - On submit: `alert('You're on the list. Welcome.')`

---

### RESPONSIVE BREAKPOINTS

**Tablet (769px - 1199px):**
- Header: 24px safe zone, nav gap 100px, cart/menu gap 32px
- Left column: padding 40px 32px
- Hero title: 48px fixed
- Stat headings: 44px !important
- Left heading: 30px
- Body text: 18px
- Award cards: 50vw width
- Footer: 2-column grid (last col spans 2)

**Mobile (<=768px):**
- Header: 16px safe zone, 44px touch targets
- Grid collapses to 1 column
- Left column: no longer sticky, auto height
- Hero title: 38px
- Stat headings: 34px !important
- Body text: 15px
- Award cards: 85vw width
- Footer: 1 column, 48px 16px padding
- All buttons: min-height 44px, full-width where appropriate

---

### JAVASCRIPT ANIMATION SYSTEM

Uses GSAP 3.12.5 + ScrollTrigger (loaded from CDN):
```
https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js
https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js
```

Key behaviors:
1. **Video scrub loop** — requestAnimationFrame loop reads scroll position, lerps to target time, uses `!video.seeking` guard to prevent decoder flooding
2. **Hero text exit** — per-character opacity/blur/translateY driven by scroll progress > 80%
3. **Awards horizontal scroll + video reveal** — GSAP timeline with ScrollTrigger pin
4. **Left panel fade-in** — staggered autoAlpha/y animation on scroll
5. **Footer spacer** — dynamically matches footer height for reveal effect
6. **Resize handling** — debounced (200ms), kills all ScrollTriggers and rebuilds on width change
7. **Font-ready init** — animations initialize on `document.fonts.ready` (not window.load) to avoid waiting for slow CDN video downloads

---

### SERVER (Express + Vite)

- Express server on port 3000
- API endpoint `GET /api/higgsfield-video` — proxy that fetches a Higgsfield share page, extracts the direct MP4 URL from HTML source (via regex matching for .mp4 URLs and og:video meta tags), returns JSON `{ success: true, url: "..." }`
- Default share URL: `https://higgsfield.ai/s/keldUFnImRA`
- Second video fetched with query param: `?url=https://higgsfield.ai/s/iK6bYyCxd0I`
- In dev mode: mounts Vite middleware (`middlewareMode: true`, `appType: "spa"`) for HMR
- In production: serves static dist folder with catch-all to `index.html`

---

### KEY IMPLEMENTATION NOTES

- The page content lives in `index.html` with inline CSS and JS (Vite processes it as the SPA entry point)
- Videos have hardcoded CloudFront CDN fallback URLs and also attempt dynamic refresh from the Higgsfield proxy API on page load
- The `.video-overlay` div exists but is fully disabled (`display: none`, transparent)
- Duplicate h1 headings in stomp-stacks: first child hidden by CSS `:first-child { display: none }`, second child is the visible/animated one
- `will-change: width` on video-scaling-wrapper, `will-change: transform` on awards-grid
- `pointer-events: none` on video-scaling-wrapper when width is 0%
- The `!video.seeking` guard is used on BOTH video elements to prevent decoder overload — this is the single most important performance detail for scroll-scrubbed video