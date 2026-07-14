Build a React + Vite + Tailwind CSS landing page for an AI agency called "COGNITRA". Use `framer-motion` for animations and `lucide-react` for icons. The design uses "Helvetica Now Var" font throughout. Here is the exact specification:

---

## FONT

Import via CSS:
```
@import url('https://db.onlinewebfonts.com/c/e66905e07608167a84e6ad52f638c3c6?family=Helvetica+Now+Var');
```
Apply globally: `font-family: 'Helvetica Now Var', 'Helvetica Neue', Helvetica, Arial, sans-serif;`

---

## FadeUp ANIMATION COMPONENT

Create a reusable `FadeUp` component wrapping Framer Motion with these exact values:
- Props: `children`, `delay` (default 0), `duration` (default 0.7), `y` (default 24), `className`, `style`, `as` (polymorphic: div/section/span/h1/h2/h3/p/nav), `once` (default true)
- `initial={{ opacity: 0, y }}`
- `whileInView={{ opacity: 1, y: 0 }}`
- `viewport={{ once, amount: 0.2 }}`
- `transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}`

---

## LAYOUT STRUCTURE

The page is a single `<div style={{ position: 'relative' }}>` containing:

1. A **fixed full-viewport background video** (z-index 0)
2. A **fixed transparent navbar** (z-index 10)
3. **Section 1** -- Hero (100vh, z-index 1)
4. **Section 2** -- Statement (100vh, z-index 1, transparent bg over video)
5. **Section 3** -- Services (auto height, z-index 2, #C5C5C5 bg)
6. **Fixed scroll indicator** (bottom center, z-index 5)
7. **Fixed share/repost button** (bottom right, z-index 5)

---

## FIXED BACKGROUND VIDEO

```
position: fixed, top: 0, left: 0, width: 100%, height: 100vh, objectFit: cover, zIndex: 0
src: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260514_135830_bb6491d1-9b66-4aec-9722-13b4dfe3fb46.mp4"
autoPlay, muted, loop, playsInline
```

---

## NAVBAR (fixed, transparent)

- `position: fixed; top:0; left:0; right:0; z-index:10; background: transparent; border-bottom: 1px solid rgba(0,0,0,0.18); display:flex; align-items:center; justify-content:space-between; padding: 20px 32px;`
- **Left:** Brand "COGNITRA" -- FadeUp delay=0, fontSize 13px, fontWeight 700, letterSpacing 0.12em, uppercase, color #1a1a1a
- **Center:** Links ['MAIN', 'OFFERING', 'CASE', 'RATES'] in a flex row gap 48px. Each link wrapped in FadeUp with delay = 0.05 + i*0.05. Links: fontSize 11px, letterSpacing 0.06em, color #1a1a1a, fontWeight 400
- **Right:** Links ['CREW', 'CONNECT'] same style, FadeUp delay = 0.3 + i*0.05
- Hover on all links: opacity 0.6

---

## SECTION 1 -- HERO (100vh)

- `position: relative; zIndex: 1; height: 100vh;`
- **Top overlay div** (absolute, top:0, left:0, right:0, height: 48%, background: #C5C5C5, flex column, paddingTop: 70px)
  - Inner content area: `flex:1; display:flex; alignItems:flex-end; padding: 0 32px 24px 32px;`
  - **Hero row** (flex, stretch, width 100%, gap 48px):
    - **Left column** (width 32%, flex-column, justify space-between, gap 80px):
      - `<h1>` FadeUp as="h1" delay=0.1 -- "SCALING\nFASTER USING AI" -- fontSize clamp(26px, 3vw, 42px), fontWeight 700, lineHeight 1.05, letterSpacing -0.01em, uppercase, color #1a1a1a
      - Slide counter FadeUp delay=0.5 -- "001 / 005" -- fontSize 11px, letterSpacing 0.08em, color #666
    - **Right column** (flex:1, flex-column, justify space-between, gap 80px):
      - `<p>` FadeUp as="p" delay=0.25 -- "We engineer custom automation flows and personalized AI products for ambitious modern businesses." -- fontSize 18px, lineHeight 1.6, color #5a5a5a, maxWidth 340px
      - Buttons row (flex, gap 10px) FadeUp delay=0.4:
        - "BOOK A CALL!" -- btn-primary: bg #1a1a1a, color #fff, border 1px solid #1a1a1a, border-radius 9999px, padding 12px 36px, fontSize 11px, fontWeight 500, letterSpacing 0.08em, uppercase
        - "OUR PRODUCTS" -- btn-secondary: bg transparent, color #1a1a1a, border 1px solid #1a1a1a, same radius/padding/fontSize/weight/spacing. Hover: bg #1a1a1a, color #fff
- **Bottom-left text** (absolute, top 74%, transform translateY(-50%), left 32px, maxWidth 260px) FadeUp delay=0.6:
  - "Guiding future-minded companies forward with bespoke AI products and streamlined workflows." -- fontSize 14px, lineHeight 1.65, color rgba(255,255,255,0.9)

---

## SECTION 2 -- STATEMENT (100vh, transparent over video)

- `position:relative; zIndex:1; height:100vh; display:flex; flexDirection:column; justify-content:center; padding: 70px 32px 32px 32px;`
- Inner div: flex-column, align flex-start, maxWidth 720px, padding 80px 0
- `<h2>` -- fontSize clamp(26px, 3vw, 42px), fontWeight 700, lineHeight 1.08, letterSpacing -0.01em, uppercase, color #fff, display flex, flexWrap wrap, gap 0.25em
  - Text "WE BUILD END-TO-END AI AUTOMATION SYSTEMS." split by space, each word wrapped in FadeUp as="span" delay = 0.15 + i*0.08, y=32
- `<p>` FadeUp as="p" delay=0.9 -- "We provide all-in-one AI automation services in one place." -- marginTop 24px, fontSize 14px, lineHeight 1.65, color rgba(255,255,255,0.85), maxWidth 260px

---

## SECTION 3 -- SERVICES (gray bg)

- `position:relative; zIndex:2; background:#C5C5C5; display:flex; flexDirection:column; padding: 70px 32px 80px 32px; min-height:auto;`
- **Counter**: FadeUp delay=0 -- "003 / 005" -- fontSize 11px, letterSpacing 0.08em, color #666, marginBottom 20px
- **Head row** (flex, gap 48px, align flex-start, marginBottom 32px):
  - Left col (width 32%): `<h2>` "EXPLORE WHAT WE OFFER" -- fontSize clamp(26px, 3vw, 42px), fontWeight 700, lineHeight 1.05, letterSpacing -0.01em, uppercase, color #1a1a1a, maxWidth 320px, display flex, flexWrap wrap, gap 0.25em. Each word FadeUp as="span" delay = 0.1 + i*0.1, y=28
  - Right col (flex:1, paddingTop 8px): FadeUp as="p" delay=0.25 -- "We provide all-in-one AI automation services in one place." -- fontSize 14px, lineHeight 1.65, color #3a3a3a, maxWidth 320px
- **Cards grid** (CSS grid, 3 columns 1fr, gap 20px, grid-auto-rows 1fr):
  - 3 cards, each FadeUp delay = 0.4 + idx*0.15:
    - Card container: bg transparent, border 1px solid rgba(0,0,0,0.18), borderRadius 20px, overflow hidden, flex column, paddingTop 16px
    - Video area: width 100%, aspectRatio 4/3, position relative, overflow hidden. Video inside: absolute inset 0, objectFit cover
    - Text area: padding 24px 28px 28px 28px
      - `<h3>` fontSize 18px, fontWeight 600, color #1a1a1a, marginBottom 14px
      - `<p>` fontSize 13px, lineHeight 1.6, color #3a3a3a
  - Card data:
    1. video: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260513_220333_48163edc-995f-4513-9f44-48dbb07a7329.mp4`, title: "Process Streamlining", text: "We automate your processes by linking together the daily tools you rely upon. Lifting throughput and improving overall output."
    2. video: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260513_221040_e6ba7c5a-864e-46e9-871e-341a176a7e3e.mp4`, title: "Strategic advisory", text: "We craft intelligent assistants that are adaptive, grasp context, and are skilled enough to handle highly intricate customer requests."
    3. video: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260513_221104_fb538584-5b87-495f-952e-09ddd5a1792a.mp4`, title: "Assistant engineering", text: "Through our knowledge, we explore deep into your business and advise you on how AI powered automations may transform your operations."

---

## FIXED SCROLL INDICATOR (bottom center)

- `position:fixed; bottom:32px; left:50%; transform:translateX(-50%); zIndex:5;`
- CSS animation `scrollBounce`: `0%,100% { transform: translateY(0); } 50% { transform: translateY(6px); }` -- 2s ease-in-out infinite
- Pill shape: width 22px, height 36px, border 1.5px solid rgba(0,0,0,0.75), borderRadius 11px, flex, justify center, paddingTop 6px
- Inner dot: width 3px, height 8px, background rgba(0,0,0,0.85), borderRadius 2px

---

## FIXED REPOST BUTTON (bottom right)

- `position:fixed; bottom:32px; right:32px; zIndex:5; display:flex; alignItems:center; gap:6px; color:rgba(0,0,0,0.8); fontSize:11px; letterSpacing:0.08em; uppercase; cursor:pointer;`
- Inline SVG (share icon), width 14, height 14, viewBox "0 0 24 24", fill none, stroke currentColor, strokeWidth 2, strokeLinecap round, strokeLinejoin round:
  ```
  <circle cx="18" cy="5" r="3"/>
  <circle cx="6" cy="12" r="3"/>
  <circle cx="18" cy="19" r="3"/>
  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
  ```
- Text: "REPOST"

---

## RESPONSIVE BREAKPOINTS

**@media (max-width: 900px):**
- nav padding: 16px 18px; nav-links gap: 18px; hide .nav-links-secondary
- hero-row: flex-direction column, gap 24px; hero-col-left/right: width 100%, gap 24px
- section-pad: 90px 18px 32px 18px; section-pad-lg: 90px 18px 60px 18px
- services-head-row: flex-direction column, gap 16px, marginBottom 24px; services-head-col: width 100%
- cards-grid: 1 column, gap 16px
- section-3: height auto, min-height 100vh
- hero-bottom-text: top auto, bottom 80px, transform none, left 18px, right 18px, maxWidth none
- btn-primary/secondary: padding 11px 22px, fontSize 10px

**@media (max-width: 600px):**
- nav-links gap: 14px; nav-brand fontSize: 12px
- hero-overlay height: 56%, paddingTop: 64px
- hero-buttons: flex-wrap wrap

---

## PACKAGES

- react, react-dom
- framer-motion
- lucide-react
- tailwindcss, postcss, autoprefixer
- vite, @vitejs/plugin-react