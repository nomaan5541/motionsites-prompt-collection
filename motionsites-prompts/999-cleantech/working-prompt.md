**Create a scroll-driven landing page for "Terova" -- a circular-systems / waste-reclamation tech company. Use React + Vite + TypeScript + Tailwind CSS + Framer Motion + Lucide React. The page has 4 major zones stacked vertically.**

---

### GLOBAL SETUP

- **Font**: Google Fonts `Inter` (weights 300, 400, 500, 600, 700). Body uses `'Inter', system-ui, sans-serif`. Tailwind config overrides `fontFamily.sans` to `"Flexo Soft Medium", system-ui, sans-serif` (but only affects Tailwind's `font-sans` utility -- the body CSS directly sets Inter).
- **Background color**: `#19261D` (dark muted green-black)
- **Text color**: white
- **Anti-aliasing**: `-webkit-font-smoothing: antialiased`
- **Selection**: `rgba(255, 255, 255, 0.2)` background
- **Dependencies**: `framer-motion ^12.42.2`, `lucide-react ^0.344.0`, `react ^18.3.1`, `react-dom ^18.3.1`

---

### PERSISTENT ELEMENT: DICE ICON (Fixed, bottom-right)

A fixed-position element at `bottom-4 right-4` (responsive: `sm:bottom-6 sm:right-6`), `z-50`. It's a 10x10 (sm:11x11, md:12x12) rounded-md box with background `#E2DBC8`. Inside is a 3x3 CSS grid showing 5 dots (like the "5" face of a die) -- dots are 7px circles colored `#1C261E`. The dots sit at positions: top-left, top-right, center, bottom-left, bottom-right.

---

### SECTION 1: HERO (Fixed fullscreen with parallax fade)

**Behavior**: The hero is `position: fixed; inset: 0; z-index: 0`. As the user scrolls, it fades out using JavaScript: `opacity = Math.max(0, 1 - scrollY / (innerHeight * 0.6))`. A `170vh` spacer div follows in the DOM to create scroll room before the next section.

**Layout**: Full viewport, `flex flex-col`, background `#464340`, with `px-3 py-3` (responsive sm/md padding). Contains a single inner card div that is `flex-1 rounded-2xl relative`.

**Background video** (inside the card, absolutely positioned with `rounded-2xl overflow-hidden`):
```
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260703_154802_dcffa901-509b-4aa3-8e34-36bbf6edcfcb.mp4
```
`autoPlay muted loop playsInline`, `object-cover h-full w-full`.

**Content overlay** (relative z-10, flex-col justify-between):

- **Top-left**: Large heading: "Circular systems / for a cleaner / planet" (3 lines via `<br>`). Styled: `text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl`, `font-normal`, `leading-[1.05]`, `tracking-tighter`, `text-[#E2DBC8]/80`. Wrapped in a `<Reveal delay={200}>` component.

- **Bottom center**: Two elements centered:
  1. Paragraph: "Next-Generation Portable Waste / Reclamation Technology" (line break with `<br>`). `text-sm sm:text-base`, `text-[#E2DBC8]/80`, `max-w-xs`. Wrapped in `<Reveal delay={400}>`.
  2. Link: "Start Here" -- `text-xs uppercase tracking-[0.2em] text-[#E2DBC8]/50` with `hover:text-[#E2DBC8]` transition. Wrapped in `<Reveal delay={500}>`.

- **Bottom-left notch with social icons**: An absolutely positioned element at `bottom-0 left-0`. It contains a `flex items-center gap-4` div with background `#464340`, `px-5 py-3 rounded-tr-[20px]`. Two decorative concave-corner divs use `radial-gradient(circle at 100% 0%, transparent 20px, #464340 20px)` -- one above (top, 20x20) and one to the right (bottom, 20x20). Icons: `Linkedin`, `Phone`, `Mail` from lucide-react, size 18, color `text-[#E2DBC8]/60` with `hover:text-[#E2DBC8]`.

---

### REVEAL COMPONENT (Reusable animation wrapper)

Uses `IntersectionObserver` with `threshold: 0.15`. When visible, transitions from `translate-y-8 opacity-0` to `translate-y-0 opacity-100`. Duration `700ms`, `ease-out`, `will-change-transform`. Accepts optional `delay` (applied as `transitionDelay`), `className`, and `as` ('div' or 'span').

---

### SECTION 2: ABOUT / TEXT REVEAL (Scroll-driven character opacity)

**Background**: `#1C261E`. Layout: `min-h-screen`, content aligned to bottom with `flex items-end`.

**Text content**: A single paragraph with per-character opacity animation driven by scroll. The text reads:

> "Our planet's ecological balance is shifting at an unprecedented pace. Resource recovery obstacles and contamination crises have surpassed critical limits, and the pursuit of transformative green solutions has never carried more weight."

**Animation mechanic** (uses `framer-motion`):
- `useScroll({ target: containerRef, offset: ['start 0.8', 'end 0.2'] })`
- Each character's opacity transitions from `0.3` to `1` based on its position in the text.
- For character at index `i` out of `total`: `start = i/total`, `end = start + 0.005`. UseTransform maps `scrollYProgress` from `[start, end]` to `[0.3, 1]`.
- Words are wrapped in `inline-block whitespace-nowrap` spans to prevent breaks mid-word.
- Visible/invisible span layering: invisible span holds space, absolute motion.span shows the animated character.
- All characters colored `text-[#E2DBC8]`, `font-normal`.
- Typography: `text-2xl sm:text-3xl md:text-5xl lg:text-6xl`, `leading-snug` (lg: `leading-[1.15]`), `tracking-tight`.
- Container padding: `px-5 pb-10 sm:px-8 sm:pb-14 md:px-12 md:pb-16`.

---

### SECTION 3: SCROLL VIDEO + PINNED STAT OVERLAYS

This section has two sub-systems:

#### A) Scroll-linked Video Background (Sticky)

**Video URL**:
```
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260703_102446_48ac5215-4f23-49f4-a433-ec9798029150.mp4
```

**Implementation**: Extracts up to 120 frames from the video into `ImageBitmap` objects (scaled to max 1280px width). Renders frames onto a full-screen `<canvas>` driven by scroll progress.

- Container: `sticky top-0 h-screen w-full -z-10 bg-[#0a0a0a]`.
- Falls back to a `<video>` element with seek-based scrubbing if frame extraction fails.
- Scroll progress: calculated from the parent container's scroll position (how far the container's top has moved off-screen relative to its height minus viewport height).
- Smoothing: `smoothed += (targetProgress - smoothed) * 0.1` per animation frame.
- Canvas draws frames using "cover" logic (like `object-cover`).
- Overlay: `absolute inset-0 bg-black/20` tint.
- Top gradient fade: `absolute inset-x-0 top-0 h-40 sm:h-56 md:h-72`, `linear-gradient(to bottom, #1C261E, transparent)` -- blends the previous section's background into the video.

#### B) Pinned Statistics Sections (overlaid on the video)

The parent container is `h-[400vh]` (creating 4x viewport of scroll distance). A `sticky top-0 h-screen pointer-events-none z-10` child holds two absolutely-positioned text sections that fade in/out based on scroll progress:

**Section One** ("2.01 billion"):
- Fade in: progress 0 to 0.2
- Stay visible: 0.2 to 0.45
- Fade out: 0.45 to 0.55
- Layout: `flex-col justify-end`, bottom-aligned.
- Heading: "2.01 billion" -- `text-4xl sm:text-5xl md:text-7xl lg:text-8xl`, `font-normal tracking-tighter text-[#E2DBC8]`
- Paragraph: "Tons of household and commercial refuse produced every single year. Lined up in hauling vehicles, this debris would circle the globe **24 times**"
  - `text-sm sm:text-base text-[#E2DBC8]/70 max-w-lg leading-relaxed`
  - "24 times" is in a green badge: `inline-flex items-center rounded bg-[#4caf50] px-2 py-0.5 text-xs sm:text-sm font-semibold text-[#E2DBC8]`
- Both text elements have individual slide-up animation: `translateY(2rem)` when opacity < threshold, `translateY(0)` when visible. `transition-all duration-700 ease-out will-change-transform`.

**Section Two** ("under a fifth"):
- Fade in: progress 0.5 to 0.6
- Stay visible: 0.6 to 0.85
- Fade out: 0.85 to 1.0
- Heading: "under a fifth" -- same typographic treatment as Section One.
- Paragraph: "Of all refuse is reclaimed each year" -- `text-sm sm:text-base text-[#E2DBC8]/70`
- Same slide-up animation pattern with staggered delay of 100ms for the paragraph.

---

### NAVBAR (Fixed, top-right)

Position: `fixed right-4 top-4 z-50` (responsive: `sm:right-8 sm:top-7 md:right-12`). Wrapped in `<Reveal>`.

Contains a link with:
- **Custom SVG logo**: A 24x24 SVG, viewBox `0 0 256 256`, filled `#E2DBC8`. The path is a squircle shape with a leaf/arc cutout: `M 156 0 C 211.228 0 256 44.772 256 100 L 256 256 L 100 256 C 44.772 256 0 211.228 0 156 L 0 0 Z M 80 80 C 80 133.019 122.981 176 176 176 C 176 122.981 133.019 80 80 80 Z`
- **Brand name**: "terova" -- `text-lg font-semibold tracking-tight` in `text-[#E2DBC8]`
- Hover: `opacity-80` transition

---

### COLOR PALETTE

| Token | Hex | Usage |
|-------|-----|-------|
| Page background | `#19261D` | Body, about section |
| Hero card outer bg | `#464340` | Hero section bg, notch bg |
| About section bg | `#1C261E` | Text reveal section |
| Primary text | `#E2DBC8` | Headings, brand, icons |
| Primary text muted | `#E2DBC8/80` | Hero heading, subtext |
| Secondary text | `#E2DBC8/70` | Stat descriptions |
| Tertiary text | `#E2DBC8/50` | CTA link |
| Icon default | `#E2DBC8/60` | Social icons |
| Accent green | `#4caf50` | Badge ("24 times") |
| Dice dots | `#1C261E` | Dots on dice element |
| Dice background | `#E2DBC8` | Dice square |
| Video fallback bg | `#0a0a0a` | Canvas container |
| Overlay | `black/20` | Video darkening |

---

### SCROLL ARCHITECTURE SUMMARY

1. **0px - ~170vh**: Hero is fixed and fades from full opacity to 0
2. **After 170vh spacer**: AboutSection enters viewport (relative, z-10). Character-by-character text reveals on scroll.
3. **After AboutSection**: ScrollVideo container begins. Video is sticky, scrubs with scroll. Pinned stat overlays fade in/out at defined thresholds over 400vh of scroll distance.

---

### KEY TECHNICAL NOTES

- No GSAP or ScrollTrigger -- all scroll logic is vanilla JS `window.addEventListener('scroll')` + `requestAnimationFrame` smoothing, except the About section which uses Framer Motion's `useScroll`/`useTransform`.
- Video frame extraction uses `createImageBitmap` from a seeked `<video>` element for smooth canvas-based playback.
- The canvas uses `devicePixelRatio` (capped at 2) for sharp rendering.
- All responsive breakpoints use Tailwind's default `sm:640px`, `md:768px`, `lg:1024px`.
- The page is fully static/client-side -- no backend, no routing.