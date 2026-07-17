Build a premium scroll-driven landing page for "Elias Norden — Health Capital" using Vite + React + TypeScript + Tailwind CSS. Dark navy aesthetic, white text throughout.

**Fonts (load in index.html):**
- Body font: `Roobert TRIAL` via `<link href="https://db.onlinewebfonts.com/c/0ab46e1b2f236c9fad58c1e34cdecdf1?family=Roobert+TRIAL" rel="stylesheet" />`, fallback `system-ui, sans-serif`
- Accent serif: `Instrument Serif` (regular + italic) via `<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />`
- Tailwind config: `fontFamily: { sans: ['"Roobert TRIAL"', 'system-ui', 'sans-serif'], instrument: ['"Instrument Serif"', 'Georgia', 'serif'] }`, custom colors `navy-950: #020b1f`, `navy-900: #041536`

**Global CSS:** `html { scroll-behavior: smooth }`, body uses Roobert TRIAL, background `#020b1f`, white text, `-webkit-font-smoothing: antialiased`, `::selection { background: rgba(255,255,255,0.2) }`. Page title: "Elias Norden — Health Capital".

**Navbar (fixed, top, z-50, transparent):**
- Flex row, justify-between, padding `px-4 py-4 sm:px-6 sm:py-5 md:px-12 md:py-7`
- Left logo link: "Elias Norden" — `text-lg sm:text-xl md:text-2xl tracking-tight text-white`, where "Norden" is wrapped in `<span className="font-instrument italic">` with NO font-weight applied
- Right links: Articles, Allocations, Inquire — `text-[10px] sm:text-[11px] md:text-xs font-medium uppercase tracking-[0.14em] sm:tracking-[0.18em] text-white/80 hover:text-white transition-colors duration-300`, gaps `gap-4 sm:gap-6 md:gap-10`

**Hero section — scroll-scrubbed video (the core feature):**
- Outer `<section>` is `relative h-[700vh]`; inside it a `sticky top-0 h-screen overflow-hidden bg-navy-950 supports-[height:100svh]:h-[100svh]` viewport
- Video URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260610_193933_20e7efd7-2d68-4946-a270-04cb7b9ab74b.mp4`
- On mount: fetch the video as a blob, create an object URL, then pre-extract frames into `ImageBitmap[]` by seeking through a detached `<video>` element — frame count = `clamp(round(duration * 24), 30, 110)`, frames resized to max width 1280 via `createImageBitmap(video, { resizeWidth, resizeHeight })`. Clean up bitmaps and object URL on unmount; handle cancellation
- While frames extract, render a fallback muted/playsInline `<video>` scrubbed by setting `currentTime` (guard with a `seeking` flag and `seeked` listener); once frames are ready, switch to a full-screen `<canvas>` drawn with object-cover math (`scale = max(cw/fw, ch/fh)`, centered). Canvas resizes with `devicePixelRatio` capped at 2
- Scroll logic in a single `requestAnimationFrame` loop: compute raw progress = `-section.getBoundingClientRect().top / (section.offsetHeight - window.innerHeight)` clamped 0–1, then smooth it with lerp `smoothed += (target - smoothed) * 0.1`
- Phase boundaries: `SCRUB_END = 0.55`, `FADE_END = 0.65`. Phase 1 (0–0.55): video scrubs frame-by-frame with scroll. Phase 2 (0.55–0.65): hero layer fades out while a near-black layer (`bg-[#000308]`) fades in (set opacities directly via refs, no React state). Phase 3 (0.65–1.0): three paragraphs reveal sequentially, one per third of remaining scroll
- Overlay on video: `absolute inset-0 bg-black/35`

**Hero headline (centered over video):**
- `<h1 className="max-w-5xl text-center text-[2rem] leading-[1.15] tracking-tight text-white sm:text-5xl sm:leading-[1.1] md:text-6xl lg:text-7xl">` — NO font-weight class (natural weight)
- Text: "Merging science, defi and `<br className="hidden sm:block" />` lifespans into *true wellness.*" where "true wellness." is `<span className="font-instrument italic">` with no font-weight

**Press logos strip (bottom-right of hero):**
- Label "In the news:" — `text-right text-xs sm:text-sm text-white/70`
- Right-aligned flex-wrap row, `gap-x-5 gap-y-3 sm:gap-x-8 sm:gap-y-4 md:gap-x-12`, each `text-sm sm:text-lg md:text-xl text-white/90 hover:opacity-60 transition-opacity duration-300`:
  - Praxis — `font-instrument font-bold tracking-wide`
  - VENTURE BULLETIN — `font-sans font-bold tracking-tight`
  - Blockdispatch — `font-sans font-semibold italic`
  - Healthspan.Quarterly — `font-mono font-medium tracking-tighter`
  - Vetted / TJ — `font-instrument italic tracking-wide`
  - biofuture.io — `font-sans font-light tracking-widest`
- Container padding: `px-5 pb-10 sm:px-6 sm:pb-16 md:px-12 md:pb-24`

**Navy reveal layer (fades in after scrub):**
- `absolute inset-0 bg-[#000308]`, starts `opacity-0 pointer-events-none` (pointer-events enabled when fade > 0.5), centered `max-w-4xl space-y-6 sm:space-y-10 text-center`
- Three paragraphs, each `text-lg sm:text-2xl md:text-3xl leading-relaxed md:leading-snug text-white transition-all duration-700 ease-out`, animating from `translate-y-8 opacity-0` to `translate-y-0 opacity-100` as visibleCount increments:
  1. "Elias is committed to a tomorrow where people enjoy more vibrant, rewarding decades beside loved ones."
  2. "In pursuit of this purpose, in 2021 he co-founded the Healthspan Research Alliance, a global nonprofit backing early-stage science on prolonging the healthy human lifespan."
  3. "Elias is also a managing partner and co-founder of VitalVC, a venture capital firm backing bold pioneers in biotech and lifespans."

**App structure:** `<div className="bg-navy-950"><Navbar /><Hero /></div>`. Use lucide-react for any icons. No purple hues.