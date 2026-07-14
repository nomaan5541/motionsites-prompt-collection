**Create a React + Vite + Tailwind CSS v4 landing page for "WISA" -- a premium football/soccer organization website. The page has a scroll-driven video background, 3 content sections, and a glassmorphism footer. Use ONLY these dependencies: react 19, motion (framer-motion v12+), gsap, lucide-react, tailwindcss v4 with @tailwindcss/vite plugin. The design is dark, cinematic, minimal, with Manrope (sans) and JetBrains Mono (mono) fonts.**

---

### GLOBAL SETUP

**package.json dependencies (exact):**
```
react, react-dom ^19.0.0
motion ^12.23.24
gsap ^3.14.2
lucide-react ^0.546.0
tailwindcss ^4.1.14
@tailwindcss/vite ^4.1.14
@vitejs/plugin-react ^5.0.4
vite ^6.2.0
```

**vite.config.ts:** Use `@tailwindcss/vite` plugin + `@vitejs/plugin-react`. Alias `@` to project root.

**index.html:** Standard HTML5. Include `<script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js"></script>` in head.

**src/index.css -- EXACT:**
```css
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Manrope:wght@300;400;500;600;700&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Manrope", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
}

@keyframes flyOutRight {
  0% { transform: translateX(0); }
  100% { transform: translateX(250%); }
}

@keyframes flyInLeft {
  0% { transform: translateX(-250%); }
  100% { transform: translateX(0); }
}

.animate-fly-out {
  animation: flyOutRight 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.animate-fly-in {
  animation: flyInLeft 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes flyOutUp {
  0% { transform: translateY(0); }
  100% { transform: translateY(-150%); }
}

@keyframes flyInUp {
  0% { transform: translateY(150%); }
  100% { transform: translateY(0); }
}

.animate-fly-out-up {
  animation: flyOutUp 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.animate-fly-in-up {
  animation: flyInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
```

These define 4 keyframe animations:
- `flyOutRight / flyInLeft` (250% translateX, 0.5s) -- for the arrow button hover
- `flyOutUp / flyInUp` (150% translateY, 0.4s) -- for nav text hover
- All use `cubic-bezier(0.4, 0, 0.2, 1)` easing with `forwards` fill mode

---

### COMPONENT: ScrollReveal (`src/components/ScrollReveal.tsx` + `ScrollReveal.css`)

**ScrollReveal.css:**
```css
.scroll-reveal { margin: 0; }
.scroll-reveal-text { display: flex; flex-wrap: wrap; margin: 0; }
.word { display: inline-block; white-space: pre; }
```

**ScrollReveal.tsx:** A GSAP-powered word-by-word scroll reveal component.
- Props: `children` (string), `scrollContainerRef?`, `enableBlur` (default true), `baseOpacity` (default 0.1), `baseRotation` (default 3), `blurStrength` (default 4), `containerClassName`, `textClassName`, `rotationEnd` (default "bottom bottom"), `wordAnimationEnd` (default "bottom bottom")
- Splits children text by whitespace into `<span className="word">` elements using `useMemo`
- Three GSAP ScrollTrigger animations:
  1. **Rotation**: Container rotates from `baseRotation` degrees to 0, origin "0% 50%", scrub true, trigger start "top bottom", end = `rotationEnd`
  2. **Opacity**: Each `.word` fades from `baseOpacity` to 1, stagger 0.05, scrub true, trigger start "top bottom-=20%", end = `wordAnimationEnd`
  3. **Blur** (if `enableBlur`): Each `.word` goes from `blur(blurStrength px)` to `blur(0px)`, same stagger/trigger as opacity
- Renders: `<h2 ref={containerRef} className="scroll-reveal {containerClassName}"><p className="scroll-reveal-text {textClassName}">{splitText}</p></h2>`
- Cleanup: kills all ScrollTrigger instances on unmount

---

### COMPONENT: Reveal (inline in App.tsx)

A motion.div wrapper for viewport-triggered fade-in:
```tsx
function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```
Easing is `[0.16, 1, 0.3, 1]` (ease-out-expo style).

---

### COMPONENT: NavItem (inline in App.tsx)

A hover-animated navigation link with vertical text fly animation:
- Uses a `cycle` counter state (useState(0))
- On `mouseEnter` and `mouseLeave`: increment cycle
- When `cycle === 0` (initial, no hover yet): render single `<span>` with `text-white/64` and `group-hover:text-white transition-colors duration-300`
- When `cycle > 0`: render TWO spans keyed by cycle -- one with `.animate-fly-out-up` (exits upward), one absolute-positioned with `.animate-fly-in-up` (enters from below)
- Container: `<a>` with `relative overflow-hidden group flex items-center justify-center py-1`

---

### MAIN APP (src/App.tsx) - ARCHITECTURE

**Video URL constant:**
```
const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260521_064421_279656fd-e76f-40a0-8fed-7456d4f7715a.mp4';
```

**State & Refs:**
- `arrowCycle` (useState(0)) -- for arrow button hover animation, same pattern as NavItem
- `videoRef` (useRef HTMLVideoElement)
- `videoContainerRef` (useRef HTMLDivElement)
- `isLoaded` (useState false) -- tracks when video is ready
- `screen3Ref` (useRef HTMLDivElement) -- reference to footer section for scroll calculation
- `scrollY` from motion's `useScroll()`
- `headerY` = `useTransform(scrollY, [0, 500, 800], [0, 0, -150])` -- header slides up and out after scrolling past 500px

---

### SCROLL-DRIVEN VIDEO - CRITICAL IMPLEMENTATION

**Effect 1: Video Loading**
```tsx
useEffect(() => {
  const video = videoRef.current;
  if (!video) return;
  const handleCanPlay = () => setIsLoaded(true);
  video.addEventListener('canplaythrough', handleCanPlay);
  video.load();
  return () => video.removeEventListener('canplaythrough', handleCanPlay);
}, []);
```

**Effect 2: Scroll-to-Video-Scrub (with the `video.seeking` guard)**
```tsx
useEffect(() => {
  if (!isLoaded) return;
  const video = videoRef.current;
  if (!video || !video.duration) return;

  const handleScroll = () => {
    if (!screen3Ref.current || video.seeking) return;
    // ^^ CRITICAL: "video.seeking" check tells the browser: "Only update the video
    // frame when you've completely finished rendering the previous one."
    // Without this guard, rapid scroll events queue up competing .currentTime assignments,
    // causing visible frame tearing, flickering, and dropped frames. The browser's
    // internal seek operation is asynchronous -- setting .currentTime while a previous
    // seek is still in progress gets silently ignored or causes visual glitches.
    // By checking video.seeking, we skip scroll events that arrive before the prior
    // frame has been decoded and painted, resulting in smooth, tear-free scrubbing.

    const rect = screen3Ref.current.getBoundingClientRect();
    const absoluteTop = window.scrollY + rect.top;
    const stopScroll = Math.max(1, absoluteTop - (window.innerHeight * 0.2));
    const scrollFraction = Math.max(0, Math.min(1, window.scrollY / stopScroll));
    video.currentTime = scrollFraction * video.duration;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
  return () => window.removeEventListener('scroll', handleScroll);
}, [isLoaded]);
```

The scroll fraction maps from 0 (top of page) to 1 (when the footer section is 20% of viewport height from top). This means the video plays through its full duration as the user scrolls from top to the footer.

---

### SECTION 0: LOADING SCREEN

Shown when `!isLoaded`. Fixed fullscreen, z-50, black bg, centered:
- "LOADING" text: `text-[10px] font-mono tracking-widest mb-4 text-white/50`
- Progress bar below: `w-64 h-[1px] bg-white/10 mt-8 overflow-hidden` with inner `h-full bg-white w-1/3 animate-pulse`

---

### LAYER STRUCTURE

The entire page is layered:
1. **Fixed video background** (`fixed inset-0 z-0 bg-black`) -- video is absolutely centered with cover behavior using `transform: translate(-50%, -50%)`, `minWidth/minHeight: 100%`, `objectFit: cover`
2. **Fixed header** (z-20) -- animated with motion, slides out via `headerY` transform
3. **Scrollable content** (`relative z-10 pointer-events-none`) -- all sections flow here, with `pointer-events-auto` on interactive areas

---

### SECTION 1: HERO (Screen 1)

Container: `w-[90%] mx-auto h-screen flex flex-col py-8 md:py-12 lg:py-16 pb-12`

Inner main: `flex-1 w-full pointer-events-auto flex flex-col md:grid md:grid-cols-12 md:grid-rows-[1fr_auto] gap-y-8 md:gap-y-0 md:gap-x-8`

**Grid layout (desktop 12-col, 2-row):**

1. **Heading** (bottom-left): `md:row-start-2 md:col-start-1 md:col-span-8 flex items-end`
   - H1: `text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] font-medium tracking-tight text-white whitespace-nowrap`
   - Text: "Championing" `<br/>` "The Pitch Of Legends"
   - Wrapped in `<Reveal delay={0.2}>`

2. **Description paragraph** (center-right): `md:row-start-1 md:col-start-8 md:col-span-5 flex flex-col justify-center items-start md:items-end text-left md:text-right`
   - Paragraph: `text-[clamp(1rem,1.6vw,1.375rem)] text-white/64 leading-[1.3] font-normal max-w-[460px] relative -top-[90px]`
   - Text: "Advanced preparation and training of world-class football teams for leagues, tournaments, and trophies. **We bring the trophy closer to your cabinet.**" (bold part is `font-semibold text-white`)
   - Wrapped in `<Reveal delay={0.3}>`

3. **CTA Button** (bottom-right): `md:row-start-2 md:col-start-8 md:col-span-5 flex items-end justify-start md:justify-end`
   - Two-part button with 1px gap (`flex items-stretch gap-1 group cursor-pointer`)
   - **Text part**: `px-8 py-5 bg-white/8 backdrop-blur-[80px]` -> on group-hover: `bg-white`. Text: "EXPLORE OUR STADIUMS" in `font-mono text-[12px] tracking-[-0.01em] text-white/90` -> hover: `text-black`
   - **Arrow part**: `px-6 bg-white/8 backdrop-blur-[80px]` -> hover: `bg-white`. Contains `<ArrowRight>` (lucide, w-5 h-5) with the same fly-out/fly-in animation pattern as NavItem but horizontal (`.animate-fly-out` / `.animate-fly-in`)
   - `arrowCycle` state drives the animation, same increment pattern on mouseEnter/mouseLeave
   - Wrapped in `<Reveal delay={0.4}>`

---

### SECTION 1.5: SPACER

`<div className="h-[200px] w-full"></div>` -- 200px empty gap

---

### SECTION 2: SCROLL-REVEAL TEXT + 3-COLUMN GRID

Container: `w-[90%] mx-auto min-h-screen flex flex-col justify-center py-8 md:py-12 lg:py-16 pointer-events-auto`

Inner: `max-w-[1200px] w-full`

**ScrollReveal component usage:**
```tsx
<ScrollReveal
  baseOpacity={0.1}
  enableBlur={true}
  baseRotation={3}
  blurStrength={4}
  textClassName="text-[clamp(2rem,4.5vw,4rem)] leading-[1.1] font-medium tracking-tight text-white w-full"
>
  Complete Football Programs For Professional Player Development. We Build The Foundations For Next-Generation Strikers, Midfielders, And Star Defenders.
</ScrollReveal>
```

**3-Column Grid below** (`mt-24 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8`):

1. **Col 1 (md:col-span-4)**: Globe SVG (71x43 wireframe globe) + WISA logo SVG (157x25, scaled to h-[18px] w-auto) side by side with `gap-4`. Below: tagline "Winning the future on pitch" in `text-[11px] font-mono tracking-widest text-white/60 uppercase leading-relaxed`. Wrapped in `<Reveal delay={0.1}>`

2. **Col 2 (md:col-span-4)**: H3 "Performance Analytics / Facilities" (`text-xl font-medium text-white`), paragraph below (`text-[15px] text-white/80 leading-relaxed`). Wrapped in `<Reveal delay={0.2}>`

3. **Col 3 (md:col-span-4)**: H3 "Matchday Premium / Fan Experiences!" same styling, paragraph same styling. Wrapped in `<Reveal delay={0.3}>`

---

### SECTION 2.5: SPACER

Another `h-[200px]` spacer

---

### SECTION 3: FOOTER (ref={screen3Ref})

This is the scroll endpoint for the video scrub calculation. Wrapped in `pointer-events-auto`.

**Footer container**: `width: 90%, margin: 0 auto, paddingBottom: 64px` (inline styles)

**Inner card** (glassmorphism): `backgroundColor: rgba(26, 26, 26, 0.6)`, `backdropFilter: blur(80px)`, `WebkitBackdropFilter: blur(80px)`, `border: 1px solid rgba(255, 255, 255, 0.1)`, `padding: clamp(32px, 4vw, 64px)` -- all inline styles

**CTA Section** (top of footer card):
- Flexbox wrap, `alignItems: flex-end`, `justifyContent: space-between`, `gap: 40px`
- Bottom border: `1px solid rgba(255, 255, 255, 0.1)`, `paddingBottom: clamp(48px, 4vw, 80px)`
- H2: "Ready To Score / Your Winning Season?" -- `fontSize: clamp(2rem, 4.5vw, 3.5rem)`, `fontWeight: 500`, `letterSpacing: -0.02em`, `lineHeight: 1.05`
- Button: Same two-part pattern (text + arrow) but with white bg / black text, `padding: 20px 32px` and `20px 24px`. Text: "START YOUR SEASONS" in `font-mono, 12px, -0.01em tracking, bold 700`

**Footer Links Grid** (`paddingTop: clamp(48px, 4vw, 64px)`):
- CSS Grid: `repeat(auto-fit, minmax(160px, 1fr))`, `gap: clamp(32px, 3vw, 48px)`
- 4 columns:
  1. **Brand**: WISA logo SVG (h:14px) + tagline paragraph (13px, rgba white 0.4, maxWidth 220)
  2. **Company**: Header "COMPANY" (10px mono, 0.1em tracking, rgba white 0.3) + links: About, Rosters, Press, Contact (14px, rgba white 0.6)
  3. **Services**: Header "SERVICES" same style + links: Coaching, Training Camp, Fitness, Tryout
  4. **Connect**: Header "CONNECT" same style + links: LinkedIn, X / Twitter, YouTube, Newsletter

**Copyright Bar** (`marginTop: 56, paddingTop: 32, borderTop: 1px solid rgba white 0.1`):
- Flex wrap space-between
- Left: "2026 WISA. ALL RIGHTS RESERVED." (11px mono, rgba white 0.25, 0.1em tracking)
- Right: PRIVACY | TERMS links (same styling, gap-24px)

---

### FIXED HEADER

`<motion.header>` with:
- `style={{ y: headerY }}` -- slides out after scroll 500-800px
- `initial={{ opacity: 0, y: 20 }}`, `animate={{ opacity: 1 }}`, easing `[0.16, 1, 0.3, 1]`, duration 0.8
- Classes: `fixed top-0 left-1/2 -translate-x-1/2 z-20 w-[90%] flex items-center justify-between pointer-events-auto py-4 md:py-6 lg:py-8`

**Left: WISA Logo SVG** (157x25, white, 4 paths spelling "WISA")

**Right: Navigation bar** (`hidden lg:flex items-stretch bg-[#1A1A1A]/40 backdrop-blur-[80px]`):
- Nav links container: `flex items-center justify-between px-6 font-mono text-xs tracking-[-0.01em] w-[480px]`
- 5 NavItem components: LEAGUES, STADIUMS, TRAINING, COMPETITIONS, TICKETS
- CTA button: `bg-white text-black px-6 py-5 font-mono text-xs leading-4 font-bold tracking-[-0.01em] hover:bg-gray-200 transition-colors w-[148px]` -- text "BUY MATCH PASS"

---

### SVG ASSETS

**WISA Logo** (used 3 times -- header, section 2, footer): 157x25 viewBox, 4 white paths. The paths spell "W I S A" in a custom typeface.

**Globe icon** (used in section 2 col 1): 71x43 viewBox, wireframe globe with horizontal/vertical/meridian lines, stroke white, no fill.

Both SVGs are inlined directly. They are too detailed to describe -- copy the exact path data from the source code above.

---

### KEY DESIGN TOKENS SUMMARY

| Token | Value |
|-------|-------|
| Font sans | Manrope 300-700 |
| Font mono | JetBrains Mono 400-700 |
| Background | Pure black (#000) |
| Text primary | white |
| Text secondary | white/64 (rgba 255,255,255,0.64) |
| Text muted | white/60, white/50, white/40, white/25 |
| Glass bg | #1A1A1A at 40% opacity |
| Glass blur | 80px |
| Glass border | rgba(255,255,255,0.1) |
| Button bg | white/8 -> white on hover |
| Spacing rhythm | 90% viewport width container, clamp-based responsive values |
| Easing (motion) | [0.16, 1, 0.3, 1] |
| Easing (CSS) | cubic-bezier(0.4, 0, 0.2, 1) |