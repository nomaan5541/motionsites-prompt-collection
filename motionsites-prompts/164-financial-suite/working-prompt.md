Build a single-page premium credit card landing page called **"Infinite"** using **React + Vite + TypeScript + Tailwind CSS + lucide-react**. The page background is `#0A0B11`. The page title is "Infinite - Premium Credit Card".

**Tech Stack:**
- Vite + React 18 + TypeScript
- Tailwind CSS 3.4
- lucide-react (icons: `Play`, `Menu`, `X`, `User`, `Plus`)
- No other dependencies

**Fonts:**
- Primary: **Geist** from Google Fonts (`https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap`), applied globally via `* { font-family: 'Geist', sans-serif; }`
- Secondary: **Helvetica Neue Roman** loaded locally via `@font-face` from `/fonts/HelveticaNeue-Roman.woff2` and `.woff`. Applied via a utility class `.font-helvetica-neue` (and all children) used on the hero section only.

**Tailwind config extension:**
```js
transitionDuration: { '400': '400ms' }
```

---

### GLOBAL CSS (index.css)

```css
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@font-face {
  font-family: 'Helvetica Neue Roman';
  src: url('/fonts/HelveticaNeue-Roman.woff2') format('woff2'),
       url('/fonts/HelveticaNeue-Roman.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

* {
  font-family: 'Geist', sans-serif;
}

.font-helvetica-neue,
.font-helvetica-neue * {
  font-family: 'Helvetica Neue Roman', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

@keyframes fadeSlideUp {
  0% { opacity: 0; transform: translateY(24px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.anim-stagger {
  opacity: 0;
  transform: translateY(24px);
  animation: fadeSlideUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.anim-fade {
  opacity: 0;
  animation: fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) both;
}
```

---

### CONSTANTS

```
SCROLL_DISTANCE = 1800 (pixels of scroll to scrub through full video)
SPOTLIGHT_R = 260 (radius of cursor spotlight reveal effect in pixels)
GRID_CELL = 48 (grid pattern cell size in pixels)
```

---

### IMAGE & VIDEO URLS

```
BG_IMAGE_1 (hero base): https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260629_235011_7a23734e-7fe9-4491-ac28-e46133f980c2.png&w=1280&q=85

BG_IMAGE_2 (hero spotlight reveal): https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260630_011539_f0e4cacc-143c-4bec-9db3-d3415e656a83.png&w=1280&q=85

CARD_IMAGE_1 (card section base): https://soft-zoom-63098134.figma.site/_assets/v11/47ffd9fae3c79a54bef0ff41737f6ad654c92213.png?w=1024

CARD_IMAGE_2 (card section spotlight reveal): https://soft-zoom-63098134.figma.site/_assets/v11/400e1612d64f65aee1c05735530d6f7a86ae3b8d.png?w=1024

VIDEO_1 (scroll-scrubbed video): https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260630_060707_72cd8ca2-3e4b-460c-9293-575573810866.mp4
```

---

### Z-INDEX HIERARCHY

```
z-0:  scroll spacer div
z-2:  fixed video layer
z-3:  sticky hero section
z-4:  fixed card section
z-5:  content overlays within card section
z-10: "+ More" button in card section
z-30: spotlight reveal layers
z-40: bottom gradient overlays
z-50: hero bottom content
z-54: mobile menu backdrop overlay
z-55: mobile dropdown menu
z-60: fixed navigation bar
```

---

### NAVIGATION BAR (fixed, z-60, all sections)

A `position: fixed; top: 0; left: 0; right: 0` nav with `z-[60]`, flex row, items centered, justify-between. Padding: `px-5 sm:px-8 md:px-10 py-4 sm:py-5`.

**Left: Logo + Wordmark**
- Custom SVG logo (24x24, white, viewBox 0 0 256 256) — a geometric 4-quadrant shape with cut corners:
  ```
  M 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 128 L 64 128 Z
  M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z
  M 128 64 L 128 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 Z
  M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 128 0 L 192 0 Z
  ```
- "INFINITE" text: `text-sm font-medium tracking-wide uppercase text-white`

**Center (hidden on mobile, `hidden md:flex`):** Pill navigation
- Container: `absolute left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-full px-1.5 py-1.5 items-center gap-0.5`
- Active tab "Card": `bg-white text-gray-900 text-sm font-medium px-4 py-1.5 rounded-full`
- Inactive tabs ("Rewards", "Travel", "Plans", "Support"): `text-white/70 text-sm font-medium px-4 py-1.5 rounded-full hover:text-white transition-colors`

**Right (hidden on mobile, `hidden md:flex`):**
- Account button: pill with embedded avatar circle. `flex items-center gap-2 bg-white/10 backdrop-blur-md text-white/80 text-sm font-medium pl-1.5 pr-4 py-1.5 rounded-full hover:text-white hover:bg-white/15 transition-colors`. Inner circle: `w-7 h-7 rounded-full bg-white/20` with `User` icon (size 14, strokeWidth 1.8).
- "Get Started" button: `bg-white text-gray-900 text-sm font-medium px-5 py-2 rounded-full hover:bg-white/90 transition-colors`

**Mobile hamburger (md:hidden):**
- Button: `text-white p-2 relative w-8 h-8 flex items-center justify-center`
- Two overlapping icon spans (X and Menu) with crossfade + rotation animation: the active icon is `opacity-100 rotate-0`, the inactive is `opacity-0 rotate-90` (or `-rotate-90`). Both have `absolute transition-all duration-300`.

**Mobile menu overlay (z-54):**
- `fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-300`
- Visible when menuOpen, otherwise `opacity-0 pointer-events-none`
- Clicking closes menu

**Mobile dropdown menu (z-55):**
- `fixed top-0 left-0 right-0 bg-[#0A0B11]/98 backdrop-blur-xl pt-20 pb-8 px-6 border-b border-white/10 flex flex-col gap-0 md:hidden`
- Transform animation: `transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top`
- Open state: `translate-y-0 opacity-100 scale-y-100`
- Closed state: `-translate-y-4 opacity-0 scale-y-95 pointer-events-none`
- Menu items: ['Card', 'Rewards', 'Travel', 'Plans', 'Support'] — each is `text-white/80 text-[17px] font-medium py-4 border-b border-white/[0.06] text-left hover:text-white transition-all duration-300`
- Staggered entrance: each item gets `transitionDelay: ${80 + i * 40}ms` when open, `0ms` when closed
- Bottom buttons group (Account + Get Started) with `transitionDelay: 300ms`

---

### SECTION 1: HERO SECTION (sticky, z-3)

Component: `HeroSection({ faded: boolean })`

A full-viewport section with:
- `position: sticky; top: 0; height: 100vh; overflow: clip; z-index: 3`
- Class: `font-helvetica-neue relative w-full`
- The entire inner content wrapper has `transition-opacity duration-500` and fades to `opacity: 0` when `faded` is true (when scroll begins).

**Mouse tracking system:**
- Raw mouse position tracked via `mousemove` listener
- Smoothed position via lerp in a `requestAnimationFrame` loop: `smooth += (raw - smooth) * 0.1`
- Grid offset calculated: cursor position relative to section center * 16, eased at 0.06 factor

**Layer 1: SVG Grid Pattern (z-0, opacity 8%)**
- Full absolute inset-0 SVG with a `<pattern>` element
- Cell size: 48px x 48px, `patternUnits="userSpaceOnUse"`
- Pattern x/y offset driven by the smoothed grid offset (parallax)
- Path draws an L-shape: `M 48 0 L 0 0 0 48` (top and left edges of each cell)
- Stroke: `#94a3b8`, strokeWidth: 0.5, fill: none
- A full `<rect width="100%" height="100%">` fills with the pattern

**Layer 2: Base Background Image (z-10)**
- `absolute inset-0 bg-center bg-cover bg-no-repeat`
- Uses `BG_IMAGE_1` as background-image
- Has class `anim-fade` with `animationDelay: '0.1s'`

**Layer 3: Spotlight Reveal Layer (z-30)**
- Component: `RevealLayer({ image, cursorX, cursorY })`
- A hidden `<canvas>` sized to window dimensions (resized on window resize)
- On every render (no dependency array on the useEffect), draws a radial gradient at cursor position:
  - `createRadialGradient(cursorX, cursorY, 0, cursorX, cursorY, 260)`
  - Stops: 0 -> white 100%, 0.4 -> white 100%, 0.6 -> white 75%, 0.75 -> white 40%, 0.88 -> white 12%, 1.0 -> white 0%
  - Draws filled arc circle
- Canvas is converted to `toDataURL()` and applied as CSS mask (`maskImage` + `webkitMaskImage`) to the image div
- Image div: `absolute inset-0 bg-center bg-cover bg-no-repeat z-30 pointer-events-none` with `BG_IMAGE_2`

**Layer 4: Bottom Gradient (z-40)**
- `absolute bottom-0 left-0 right-0 h-72 pointer-events-none`
- `bg-gradient-to-t from-[#0A0B11] via-[#0A0B11]/60 to-transparent`

**Layer 5: Hero Content (z-50)**
- `absolute bottom-0 left-0 right-0 px-6 sm:px-10 md:px-14 pb-12 sm:pb-16 md:pb-20`
- 12-column grid: `grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end`

**Left column (md:col-span-7 lg:col-span-8):**

1. Badge line (animationDelay: 0.3s, class: anim-stagger):
   - White circle: `w-2.5 h-2.5 rounded-full bg-white/80`
   - Text: "Best digital banking card 2026" — `text-sm sm:text-[15px] text-white/80 font-normal tracking-wide`

2. Heading (animationDelay: 0.5s, class: anim-stagger):
   - `"One Card, Zero\nLimits. Worldwide."` (line break after "Zero")
   - `text-[clamp(2.2rem,6.5vw,5rem)] font-light text-white leading-[0.95] tracking-[-0.03em] mb-8 sm:mb-10`

3. Buttons row (animationDelay: 0.7s, class: anim-stagger):
   - "See Features": `bg-white text-gray-900 text-sm font-medium px-6 sm:px-7 py-3 sm:py-3.5 rounded-full hover:bg-white/90 transition-all`
   - "How It Works": `flex items-center gap-2.5 bg-white/5 backdrop-blur-sm border border-white/10 text-white/90 text-sm font-medium px-6 sm:px-7 py-3 sm:py-3.5 rounded-full hover:bg-white/15 transition-all` with `Play` icon (size 13, `fill-white/90`)

**Right column (md:col-span-5 lg:col-span-4, animationDelay: 0.85s, class: anim-stagger):**
- Paragraph: "Infinite is a premium metal credit card built for those who move fast and spend globally. Tap anywhere, earn instantly, skip foreign fees entirely, and travel already rewarded."
- `text-[15px] sm:text-base text-white/75 leading-relaxed font-normal`

---

### SECTION 2: SCROLL-DRIVEN VIDEO LAYER (fixed, z-2)

A `position: fixed; inset: 0; z-index: 2` div containing:

- `transition-opacity duration-500 pointer-events-none`
- Opacity: 1 when videoPhase is not 'idle', 0 when 'idle'

**Video element:**
- `src={VIDEO_1}`, `muted`, `playsInline`, `preload="auto"`
- `className="w-full h-full object-cover"`
- Does NOT autoplay — `currentTime` is set programmatically

**Bottom gradient overlay:**
- `absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-[#0A0B11] via-[#0A0B11]/60 to-transparent`

**Scroll spacer:**
- A div with `height: 1800px; position: relative; z-index: 0` placed in the document flow after the hero section

**Video scrubbing logic (in App component useEffect with rAF loop):**
```
progress = Math.min(window.scrollY / 1800, 1)
video.currentTime = progress * video.duration
```
- Phase state machine:
  - scrollY === 0 -> 'idle' (reset currentTime to 0)
  - 0 < progress < 0.99 -> 'playing'
  - progress >= 0.99 -> 'done'
- Only sets currentTime when `!video.seeking`
- Uses a ref (`phaseRef`) to avoid unnecessary re-renders

---

### SECTION 3: CARD SECTION (fixed, z-4)

Component: `CardSection({ imagesVisible: boolean })`

A `position: fixed; inset: 0; width: 100%; height: 100%; z-index: 4` section.
- `transition-opacity duration-1000 ease-out`
- opacity: 1 when `imagesVisible` (videoPhase === 'done'), 0 otherwise
- pointerEvents: 'auto' when visible, 'none' when hidden

**Has its own independent mouse tracking + spotlight system** (same lerp technique as hero, factor 0.1, using local coordinates relative to section bounds).

**Layer 1: Base Card Image (z-1)**
- `absolute inset-0 bg-center bg-cover bg-no-repeat`
- backgroundImage: `CARD_IMAGE_1`

**Layer 2: Spotlight Reveal Card Image (z-3)**
- Hidden canvas + masked div, same technique as hero RevealLayer
- Local coordinates: `smooth.x - sectionRect.left`, `smooth.y - sectionRect.top`
- Same gradient stops (260px radius)
- backgroundImage: `CARD_IMAGE_2`

**Layer 3: Giant Background Text (z-0)**
- `absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden`
- Text: "INFINITE"
- Styles: `font-medium tracking-[-0.05em] text-white/[0.04] whitespace-nowrap uppercase` with inline `fontSize: '26vw'`
- This text fills the full width of the viewport

**Content Overlays:**

**Top-left heading (z-5):**
- `relative pt-16 sm:pt-28 md:pt-32 px-5 sm:px-10 md:px-14`
- "Instantly Active" — `text-[clamp(2rem,7vw,5.5rem)] font-light text-white leading-[0.95] tracking-[-0.03em]`

**Top-right "+ More" button (z-10):**
- `absolute top-16 sm:top-28 md:top-32 right-5 sm:right-10 md:right-14`
- Button: `flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 text-white/80 text-sm font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-white/15 transition-all`
- lucide `Plus` icon (size 15) + "More" text

**Bottom-right heading (z-5):**
- `absolute bottom-44 sm:bottom-40 md:bottom-44 right-5 sm:right-10 md:right-14`
- "Before You Swipe" — same typography as top-left heading, with `text-right`

**Bottom-left content (z-5):**
- `absolute bottom-6 sm:bottom-14 md:bottom-16 left-5 sm:left-10 md:left-14 right-5 sm:right-auto`
- Inner `max-w-md`:
  - Paragraph: "Get approved in seconds, receive your virtual card instantly, and arrive with cashback, travel perks, and spending insights already active." — `text-sm sm:text-[15px] md:text-base text-white/65 leading-relaxed mb-5 sm:mb-6`
  - Button "Apply now for free": `bg-white text-gray-900 text-sm font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-white/90 transition-all`

---

### KEY INTERACTION BEHAVIORS

1. **On load:** Hero is visible with staggered entrance animations (fadeSlideUp with incremental delays: 0.3s, 0.5s, 0.7s, 0.85s). Base image fades in (0.1s delay).

2. **Scrolling (0 to 1800px):** Video layer fades in (opacity 0 -> 1, 500ms transition). Video currentTime is scrubbed proportionally to scroll position. Hero content fades out simultaneously (500ms opacity transition to 0).

3. **Scroll reaches 99%+:** Video phase becomes "done". Card section fades in over 1000ms (ease-out). Video layer remains visible underneath.

4. **Spotlight reveal effect (both sections):** A 260px-radius radial spotlight follows the cursor with smooth lerp tracking (factor 0.1). The spotlight masks a second image layer, creating a reveal effect. The gradient feathers from full opacity at center to transparent at edges.

5. **Grid parallax (hero only):** The SVG grid pattern subtly shifts position based on cursor location (max offset ~16px, eased at 0.06 factor).

6. **Mobile menu:** Hamburger toggles with crossfade rotation. Menu slides down with scale-y transform, items stagger in with 40ms incremental delays.

---

### DOCUMENT STRUCTURE (render order in App)

```
<div min-h-screen bg-[#0A0B11]>
  <div fixed video layer z-2 />
  <nav fixed z-60 />
  <div mobile overlay z-54 />
  <div mobile menu z-55 />
  <HeroSection sticky z-3 />
  <div scroll-spacer 1800px z-0 />
  <CardSection fixed z-4 />
</div>
```