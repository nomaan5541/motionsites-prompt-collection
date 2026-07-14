**Build a React + Vite + TypeScript + Tailwind CSS landing page called "Digital Archive" -- a high-end art gallery/studio showcase website. It should be dark, cinematic, and editorial in style. Use ONLY `lucide-react` for icons. No other UI libraries.**

---

### FONTS

Load two fonts in `index.html`:
1. **Arsenica Trial Light** (serif) from: `https://db.onlinewebfonts.com/c/cbb3cb559d2e4387e139cfb1656e31f5?family=Arsenica+Trial+Light`
2. **Inter** (sans-serif, weights 300, 400, 500, 600) from Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap`

In CSS, define:
```css
:root {
  --font-serif: 'Arsenica Trial Light', serif;
  --font-sans: 'Inter', sans-serif;
}
body { font-family: var(--font-sans); }
.font-arsenica { font-family: var(--font-serif); }
.font-inter { font-family: var(--font-sans); }
```

---

### GLOBAL CSS (index.css)

Include these exact custom styles:

**Liquid Glass Effect:**
```css
.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}
.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
```

**Hero Fade-Up Animation:**
```css
@keyframes hero-fade-up {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
.hero-fade-up {
  opacity: 0;
  animation: hero-fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
```

**Scroll Reveal Animations:**
```css
@keyframes reveal-up {
  from { opacity: 0; transform: translateY(32px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes reveal-scale {
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: scale(1); }
}
.reveal { opacity: 0; }
.reveal.revealed {
  animation: reveal-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.reveal-scale { opacity: 0; }
.reveal-scale.revealed {
  animation: reveal-scale 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
```

---

### CUSTOM HOOK: `useScrollReveal`

A reusable IntersectionObserver hook that finds all `.reveal` and `.reveal-scale` elements within a ref, and adds `.revealed` class when they enter view (threshold default 0.15, rootMargin `0px 0px -40px 0px`). Once revealed, unobserve.

---

### SECTION 1: NAVBAR (fixed, centered, floating)

- Fixed position, centered horizontally (`left-1/2 -translate-x-1/2`), top-4 on mobile, top-6 on sm+
- Uses the `.liquid-glass` class with `rounded-full`
- Padding: `px-4 py-2.5` mobile, `px-10 py-3` on sm+
- 5 items in a row with gap-4 mobile, gap-12 on sm+:
  - Text link: "Gallery"
  - Text link: "Talents"
  - Center: Custom SVG logo (a geometric angular shape, white fill, `h-5 w-5` mobile / `h-7 w-7` sm+, with hover:scale-110 transition)
  - Text link: "Journal"
  - Text link: "Story"
- Link styles: `text-[10px]` mobile / `text-xs` sm+, uppercase, `font-medium`, `tracking-[0.15em]` mobile / `tracking-[0.2em]` sm+, `text-white/85`, hover `text-white`

**Logo SVG path:**
```
M 64 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 L 128 64 L 128 64.5 L 161 32 L 192 0 L 256 0 L 256 64 L 192 128 L 128 128 L 128 192 L 96 223 L 63.5 256 L 0 256 L 0 192 Z M 256 192 L 224 223 L 191.5 256 L 128 256 L 128 192 L 192 128 L 256 128 Z
```
viewBox `0 0 256 256`, fill white.

---

### SECTION 2: HERO (full viewport video background)

- Full `h-screen w-full` section with `overflow-hidden`
- Background: autoplay muted looping video covering the full section (`object-cover`), URL:
  `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260611_130946_e6793cc7-6b6f-4035-9852-44290b781ae6.mp4`
- Content centered vertically and horizontally, z-10, white text:
  - **Subtitle line 1** (delay 0.1s): "Studioworks" -- `text-xs` mobile / `text-sm` sm+, `font-medium`, uppercase, `tracking-[0.35em]`, `text-white/90`
  - **Subtitle line 2** (delay 0.1s): "Exhibits" -- `text-[10px]` mobile / `text-xs` sm+, `font-light`, uppercase, `tracking-[0.4em]`, `text-white/70`
  - **Heading** (delay 0.25s): Two lines:
    - "DIGITAL" in Arsenica, `text-5xl` up to `text-[7rem]`, `tracking-wide`
    - "ARCHIVE" in Inter, `font-semibold`, `text-5xl` up to `text-[7rem]`, `tracking-tight`
    - `leading-[1.05]`, `drop-shadow-[0_2px_24px_rgba(0,0,0,0.25)]`
  - **Description** (delay 0.4s): "A showcase honoring the makers, visionaries and creators who turned a hard season into something rare." -- Arsenica font, `text-sm` up to `text-xl`, `max-w-xl`, `text-white/90`
  - **CTA Button** (delay 0.55s): "Enter Gallery" -- uses `.liquid-glass` class, `rounded-[50%]` (pill), `px-10 py-5` mobile / `px-12 py-6` sm+, `text-[10px]` mobile / `text-xs` sm+, uppercase, `tracking-[0.25em]`, Inter font, hover effects: `scale-[1.03]`, `shadow-[0_0_30px_rgba(255,255,255,0.15)]`, active `scale-[0.98]`

---

### TRANSITION LAYER (between Hero and Showcase)

In the App layout, after the Hero, add a decorative cloud/fog image that overlaps:
```
<div className="relative z-20 -mt-64 sm:-mt-72 md:-mt-80 lg:-mt-96">
  <img src="https://res.cloudinary.com/dy5er7kv5/image/upload/q_auto/f_auto/v1781584857/top-bg_j88wyu.png" className="pointer-events-none w-full" />
</div>
```

---

### SECTION 3: SHOWCASE (full-screen image background with text)

- Wrapped in a container with `relative -mt-40 sm:-mt-48 md:-mt-56 lg:-mt-64` (negative margin to overlap the transition image)
- Full `min-h-screen` section with `overflow-hidden`
- Background image (absolute, object-cover):
  `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260616_040223_98d314e9-b8b4-4218-bcbd-18ffc38032ac.png&w=1280&q=85`
- Content (centered, z-10, py-32, using `useScrollReveal`):
  - **Heading**: "Still Frame" -- Arsenica, `text-4xl` up to `text-7xl`, `tracking-wide`, `drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)]`, class `.reveal`
  - **Subtext** (delay 0.15s): Three lines --
    ```
    gave the world beauty
    born from the silence
    of empty studios.
    ```
    Arsenica, `text-xl` up to `text-4xl`, `tracking-wide`, `text-white/90`, `drop-shadow-[0_2px_16px_rgba(0,0,0,0.25)]`, class `.reveal`
  - **Button** (delay 0.3s): "View Their Archive" -- rounded-[50%] pill, `border border-white/50`, transparent bg, `px-10 py-4` mobile / `px-12 py-5` sm+, Inter, `text-[10px]`/`text-xs`, uppercase, `tracking-[0.25em]`, hover: `border-white bg-white/10 scale-[1.03] shadow-[0_0_30px_rgba(255,255,255,0.1)]`, class `.reveal`
- **Bottom gradient**: absolute bottom div, `h-48 w-full`, gradient from transparent to `#410C01`
- **Dove image**: positioned absolute on the parent wrapper:
  `https://res.cloudinary.com/dy5er7kv5/image/upload/q_auto/f_auto/v1781584853/dove_xpaeub.png`
  Right-aligned, offset below bottom (`-bottom-12` mobile up to standard positioning), responsive widths (`w-24` up to `w-64`), z-20

---

### SECTION 4: Q&A (dark maroon background with parallax cloud overlay)

- Background: solid `bg-[#410C01]`
- Padding: `px-4 pt-20` mobile, up to `px-28 pt-32` on lg. `paddingBottom: '50vh'` (inline style)
- **Title**: "Q & A" -- Each letter separately, Arsenica font, `text-4xl` up to `text-7xl`, centered with `flex items-baseline justify-center gap-1`. The ampersand is italic, smaller (`text-xl` to `text-4xl`), `text-white/80`. Uses `.reveal` class.
- **Two-column layout** (grid, `md:grid-cols-2`, gap-10 up to gap-20):
  - **Left column** -- 3 Q&A items
  - **Right column** -- 3 Q&A items, offset `md:mt-24`
  - Each item has staggered animation delay (starting at 0.12s, incrementing by 0.12s per item globally across both columns)
  - **Question**: Arsenica, `text-xs` up to `text-base`, uppercase, `tracking-wide`, white
  - **Answer**: Inter, `text-[11px]` up to `text-sm`, `leading-relaxed`, `text-white/60`

**Q&A Content:**
- Left column:
  1. Q: "Welcome Maren. So how did Still Frame begin its journey?" / A: "Less than a year into launching the gallery, everything shut down. I had to close our doors, cancel every exhibit, and rethink it all. But I never stopped curating because I was so determined not to let the artists' momentum die. We hit the ground running to build a digital space, and we've been evolving since."
  2. Q: "How did you know where to begin?" / A: "I didn't wait until we had the perfect platform. I saw artists struggling, isolated, uninspired, overwhelmed, and set to the task of creating ways to share their work with the world as quickly as possible."
  3. Q: "So what was the first exhibit?" / A: "We were one of the first galleries to launch a virtual exhibition after the shutdown. I think our artists were really grateful for that, they saw how hard we worked to honor their craft, and they trusted us while we continued to refine the digital experience."

- Right column:
  1. Q: "What was the initial reaction?" / A: "We had so many people writing and reaching out that the online exhibits and archived works saved them in isolation. The atmosphere was so intimate, and it was really powerful to have people connecting through art, even though we were all in our own rooms, in different cities."
  2. Q: "Where did you evolve from there?" / A: "The in-person pop-ups have been really special too, recently, now that enough people feel comfortable to gather. We had our first open-air exhibit in the courtyard last month, and I was basically in tears it was so beautiful."
  3. Q: "Do you find there's a new appreciation for art?" / A: "There's a feeling of urgency like -- this is our one life, our one chance, we don't have time to be indifferent anymore. We're gonna create like there's no tomorrow, we're gonna create for a better world, we're gonna create to reclaim our voice in this life, and we're gonna create because we deserve to feel beauty and wonder."

- **Parallax cloud overlay**: The same cloud image from earlier (`top-bg_j88wyu.png`) positioned absolute at `bottom-0 left-0 w-full z-10`. It has a parallax scroll effect: as section scrolls, the image transforms with `translateY(60 - offset%)` where offset is `progress * 30` and progress = `1 - rect.bottom / (vh + rect.height)`.

---

### SECTION 5: QUOTE BANNER (full-screen background with parallax bottom overlay)

- Full viewport height, centered content
- Background image (via inline style `backgroundImage`, with `bg-cover bg-center`):
  `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260616_042421_41f4fa0b-770c-4545-a416-73a809366e49.png&w=1280&q=85`
- On lg+, content aligns `items-start pt-[25vh]` instead of center
- **Quote** (uses `.reveal-scale` animation): `"Art, resilience and vision are more important than ever."` where "are more important than ever." is in `font-light italic`. Arsenica, `text-xl` up to `text-5xl`, `leading-snug`/`lg:leading-tight`, white, max-w `xs` up to `2xl`
- **Parallax bottom overlay**: Image positioned absolute `-bottom-16 left-0 w-full z-10`:
  `https://res.cloudinary.com/dy5er7kv5/image/upload/q_auto/f_auto/v1781584854/bottom_bg_liw6lc.png`
  Parallax: transforms with `translateY(-offset px)` where offset is `progress * 80`.

---

### SECTION 6: FOOTER (fixed bottom bar)

- Fixed at bottom (`fixed bottom-0 left-0 right-0 z-40`)
- `bg-gradient-to-t from-black/40 to-transparent`
- Flex row with `justify-between`, padding `px-3 py-2.5` mobile / `px-10 py-4` sm+
- **Left side**:
  - Facebook icon (lucide `Facebook`, `h-3.5 w-3.5` / `h-4 w-4` sm+)
  - Twitter icon (lucide `Twitter`)
  - LinkedIn icon (lucide `Linkedin`)
  - "Privacy Notice" text link (hidden on mobile, shown sm+)
- **Right side**:
  - "Terms & Policies" text link (hidden on mobile, shown sm+)
  - BarChart3 icon (lucide `BarChart3`)
  - Aperture icon (lucide `Aperture`)
- Icon links: `text-white/80`, hover `text-white`
- Text links: `text-[9px]` mobile / `text-[10px]` sm+, uppercase, `font-medium`, `tracking-[0.15em]`/`tracking-[0.25em]`, `text-white/80`, hover `text-white`

---

### APP LAYOUT ORDER

```
<Navbar />
<Hero />
<TransitionCloudImage (overlaps hero with negative margin) />
<div (negative margin wrapper)>
  <Showcase />
  <DoveImage (absolute positioned) />
</div>
<QAndA />
<QuoteBanner />
<Footer />
```

---

### TAILWIND CONFIG

Default Tailwind v3 config -- no custom theme extensions. Content: `['./index.html', './src/**/*.{js,ts,jsx,tsx}']`.

---

### KEY DESIGN DETAILS

- No background color on body -- sections provide their own
- Negative margins create seamless overlapping transitions between sections
- The "liquid glass" effect creates a frosted-glass look with a subtle gradient border pseudo-element
- All animations use `cubic-bezier(0.22, 1, 0.36, 1)` easing (smooth deceleration)
- Staggered animations via inline `animationDelay` styles
- Responsive scaling uses Tailwind breakpoints: default (mobile) -> sm -> md -> lg -> xl
- Color palette: white text on dark backgrounds, `#410C01` (deep burnt maroon) as the Q&A section background
- Typography hierarchy: Arsenica for display/headings, Inter for body/UI text