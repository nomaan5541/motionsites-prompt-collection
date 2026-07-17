## PROJECT OVERVIEW

Build a **single-screen, scroll-driven, custom-gesture landing page** called **"Inner Circle"**. There is **no native browser scrolling** — `document.body` and `html` both have `overflow: hidden`. A wheel/touch gesture controller drives a single `scrollProgress` numeric state from `0` to `3.5`. All animations (video scrubbing, text exits, rising panel, cylindrical drum) are derived from this single value.

### Stack
- **Vite + React 19 + TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **GSAP 3.15** for char-level split-text and parallax wiggle
- **lucide-react** for menu icons (`Menu`, `X`)
- `motion`, `@google/genai`, `express`, `dotenv` installed (the page itself only needs GSAP + Tailwind + React)

### Fonts (loaded in `src/index.css`)
```css
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Michroma&display=swap');
@import "tailwindcss";

@theme {
  --font-manrope: "Manrope", sans-serif;
  --font-michroma: "Michroma", sans-serif;
}
```
- Use `font-manrope` for body, paragraph drum text, header subtitle, nav.
- Use `font-michroma` for the giant hero title and tile labels.

### Global CSS (also in `index.css`)
```css
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #11010a; }
::-webkit-scrollbar-thumb { background: #ea1f63; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #ff5c93; }

html, body {
  background-color: #11010a;
  color: #ffffff;
  overflow-x: hidden;
  font-family: var(--font-manrope);
}

@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.marquee-container {
  display: flex; overflow: hidden; width: 100%; position: relative;
  mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
}
.marquee-track {
  display: flex; width: max-content; flex-wrap: nowrap;
  animation: marquee-scroll linear infinite;
  will-change: transform;
}
```

### Color palette
- Hero background magenta: `#FF005E`
- Second screen near-black/wine: `#11010a`
- Loader accents: `#ea1f63`, `pink-500` (`#ec4899`), `#ff5c93`
- Text: white (`#ffffff`) and `text-white/60` for low-emphasis drum copy
- **No purple/indigo anywhere.**

### Data files

`src/types.ts`:
```ts
export interface NavigationItem { id: string; label: string; scrollRatio: number; }
export interface Project { title: string; category: string; description: string; tags: string[]; }
export interface ExpertiseItem { title: string; percentage: number; description: string; }
```

`src/data.ts`:
```ts
export const NAVIGATION_ITEMS: NavigationItem[] = [
  { id: "projects",  label: "Projects",  scrollRatio: 0.25 },
  { id: "expertise", label: "Expertise", scrollRatio: 0.50 },
  { id: "about",     label: "About",     scrollRatio: 0.95 },
  { id: "contact",   label: "Manifesto", scrollRatio: 3.50 },
];
```
(Keep `PROJECTS_DATA` and `EXPERTISE_DATA` as defined — unused on this page but kept for parity.)

---

## ROOT LAYOUT (`src/App.tsx`)

### State
- `scrollProgress: number` (0 → 3.5)
- `lerpedScrollProgress: number` — smoothed copy of `scrollProgress`, updated each rAF tick with `currentLerp += (target - currentLerp) * 0.08`. Threshold `0.0001`.
- `activeSectionId: string` — derived via `updateActiveSection(progress)`:
  - `< 0.18` → "hero"
  - `0.18–0.45` → "projects"
  - `0.45–0.68` → "expertise"
  - `0.68–1.15` → "about"
  - else → "contact"

### Gesture controller (runs once on mount)
- Sets `document.body.style.overflow = "hidden"` and same on `documentElement`.
- `wheel` listener (passive: false, `preventDefault()`): `scaleFactor = 0.0006`, new value = `clamp(prev + deltaY * 0.0006, 0, 3.5)`.
- `touchstart` saves `lastTouchY`. `touchmove`: `deltaTouchY = lastTouchY - currentTouchY`, `scaleFactor = 0.0015`, clamp same range.
- If a programmatic nav animation is in flight, cancel it on any user input.

### Programmatic navigation (`handleNavigateToSection`)
- Duration: `1200ms`, easeInOutCubic:
  ```
  ease = p < 0.5 ? 4p³ : 1 - (-2p + 2)³ / 2
  ```
- Lerps `scrollProgress` from current to `item.scrollRatio` while calling `updateActiveSection` each frame.

### Derived values
```ts
const secondScreenProgress = clamp01((lerped - 1.15) / 0.50);
const easedRisingProgress  = 1 - Math.pow(1 - secondScreenProgress, 3);
const smoothBlurAmount     = Math.sin(secondScreenProgress * Math.PI / 2) * 64;
```

### Markup skeleton
```tsx
<main className="relative w-screen h-screen overflow-hidden bg-[#FF005E] text-white">
  <div className="relative w-full h-full overflow-hidden">

    {/* FIRST SCREEN — gets blurred as second screen rises */}
    <div
      className="absolute inset-0 w-full h-full z-10 transition-transform duration-[100ms] ease-out"
      style={{ filter: secondScreenProgress > 0 ? `blur(${smoothBlurAmount}px)` : "none" }}
    >
      <VideoScrubber scrollProgress={Math.min(1, lerpedScrollProgress)} />

      {/* Hero title strip pinned to bottom */}
      <div className="absolute bottom-[40px] left-[1%] right-[1%] w-[98%] pointer-events-none z-20 select-none flex justify-center items-center">
        <ScrollExitSplitText
          scrollProgress={Math.min(1, lerpedScrollProgress)}
          containerClassName="w-full text-[10.4vw] leading-none font-michroma font-normal uppercase text-white whitespace-nowrap text-center transition-all duration-300 will-change-transform"
          style={{ letterSpacing: "-0.07em" }}
        >
          INNER CIRCLE
        </ScrollExitSplitText>
      </div>

      <SoapTiles scrollProgress={lerpedScrollProgress} />
    </div>

    <Header activeSectionId={activeSectionId} onNavigate={handleNavigateToSection} />

    {/* SECOND SCREEN — rises from below, rounded top */}
    <div
      className="absolute bottom-0 left-0 w-full h-full bg-[#11010a] rounded-t-[48px] overflow-hidden z-40"
      style={{
        transform: `translateY(${(1 - easedRisingProgress) * 100}%)`,
        visibility: secondScreenProgress > 0 ? "visible" : "hidden",
        willChange: "transform",
      }}
    >
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-16 h-[5px] bg-white rounded-full z-50 pointer-events-none" />
      <SecondVideoScrubber scrollProgress={lerpedScrollProgress} />
      <CylindricalTextDrum scrollProgress={lerpedScrollProgress} />

      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-0 w-full sm:w-[65%] md:w-[60%] pl-6 sm:pl-12 md:pl-20 pr-6 sm:pr-12 md:pr-16 z-50 pointer-events-auto">
        <div className="w-full border-t border-white/[0.08] pt-6">
          <Marquee gap="80px" speed={25} fade>
            <GoogleWordmark size={100} />
            <GithubWordmark size={100} />
            <img src="https://raw.githubusercontent.com/dsMagnatov/Acreage-landing-assets/refs/heads/main/voiceflow-logo-svg-150px.svg" alt="Voiceflow" className="h-6 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
            <img src="https://raw.githubusercontent.com/dsMagnatov/Acreage-landing-assets/refs/heads/main/zendesk-logo-svg-150px.svg"   alt="Zendesk"   className="h-6 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
            <img src="https://raw.githubusercontent.com/dsMagnatov/Acreage-landing-assets/refs/heads/main/pendo-logo-svg-150px.svg"     alt="Pendo"     className="h-6 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
            <img src="https://raw.githubusercontent.com/dsMagnatov/Acreage-landing-assets/refs/heads/main/glide-logo-svg-150px.svg"     alt="Glide"     className="h-6 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
            <img src="https://raw.githubusercontent.com/dsMagnatov/Acreage-landing-assets/refs/heads/main/canva-logo-svg-150px.svg"     alt="Canva"     className="h-6 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
          </Marquee>
        </div>
      </div>
    </div>
  </div>
</main>
```

---

## SECTION 1 — HERO (First Screen)

### 1a. Background video — `VideoScrubber`
- **Video URL (exact):**
  `https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/cloudinarry%20to%20cloudflare/202606021731-e_hqa6sn.mp4`
- `<video>` is `playsInline muted preload="auto"`, `object-cover`, full size, `pointer-events-none`.
- Wrapped in a `style={{ scale: "1.05" }}` div with `will-change-transform`. Container background is `bg-[#FF005E]`.
- **Scrub algorithm:** On every rAF tick:
  - `targetTime = clamp(scrollProgress * duration, 0, duration)` (fallback duration `4.2`).
  - `current += (target - current) * 0.15` (lerp).
  - Seek only when `!video.seeking && Math.abs(video.currentTime - current) > 0.01` → `video.currentTime = current`.
- **GSAP mouse parallax** on the container: on `mousemove`, compute `mx = e.clientX/innerWidth - 0.5`, `my = ...`. Animate `x: -mx*40, y: -my*40, duration: 1.2, ease: "power2.out", overwrite: "auto"`.
- **Loader overlay** (while `!isLoaded`): full-bleed `bg-[#FF005Ef4]`, centered: a 64×64 wrapper with `animate-ping` pink-500/20 ring + a 40×40 spinner ring (`border-4 border-[#ea1f63]/20 border-t-[#ea1f63] animate-spin`), label "LOADING SCROLL STREAM..." in `font-manrope font-semibold text-[12px] uppercase tracking-[0.25em] text-pink-500 drop-shadow-[0_0_8px_rgba(234,31,99,0.4)]`.

### 1b. Hero title — `ScrollExitSplitText`
- Text: `INNER CIRCLE`
- Class on outer container (from App): `text-[10.4vw] leading-none font-michroma font-normal uppercase text-white whitespace-nowrap text-center`, `letterSpacing: -0.07em`.
- Positioned: `absolute bottom-[40px] left-[1%] right-[1%] w-[98%]`, `z-20`, `pointer-events-none`.
- **Split-text mechanic:** split into lines → words → characters. Each char is a `span.char inline-block will-change-transform`. Words separated by a literal `&nbsp;` span.
- **GSAP timeline** (paused, controlled by scroll):
  ```ts
  tl.fromTo(chars,
    { opacity: 1, yPercent: 0, y: 0, scaleY: 1, scaleX: 1, transformOrigin: "50% 0%" },
    { opacity: 0, yPercent: 300, y: "25vh", scaleY: 1.2, scaleX: 0.9, stagger: 0.03, ease: "power2.inOut" }
  );
  ```
- On every `scrollProgress` change: `gsap.to(timeline, { progress: scrollProgress, duration: 0.6, ease: "power1.out", overwrite: "auto" })`. This produces a smooth lag/scrub.

### 1c. Reveal tiles — `SoapTiles`
- Three white pill-cards stacked vertically on the left:
  1. `Private Discord & Networking` — baseXOffset `120`, delay `0ms`
  2. `Weekly Market Alpha Drops` — baseXOffset `180`, delay `100ms`
  3. `Exclusive Web3 Tooling Access` — baseXOffset `240`, delay `200ms`
- Container: `absolute left-4 right-4 md:left-[64px] top-[38%] md:top-1/2 -translate-y-1/2 flex flex-col gap-2 md:gap-[10px] z-40 pointer-events-auto transition-all duration-[800ms] ease-out`. Hidden state: `opacity-0 -translate-x-6 md:-translate-x-12 pointer-events-none`. Visible when `scrollProgress > 0.75`.
- Each tile class: `group relative h-[52px] sm:h-[72px] md:h-[138px] text-black bg-white rounded-xl sm:rounded-2xl md:rounded-[34px] flex items-center justify-center px-4 sm:px-8 md:px-14 w-full md:w-auto md:self-start cursor-pointer origin-left transition-all duration-[400ms] cubic-bezier(0.16, 1, 0.3, 1) whitespace-nowrap`.
- **Entry animation:** `easeProgress = clamp01((scrollProgress - 0.75) / 0.22)`. Each tile:
  - `translateX = (easeProgress - 1) * responsiveOffset` (on mobile, offset is `× 0.25`)
  - `opacity = easeProgress`
  - `filter = blur(${(1 - easeProgress) * 12}px)`
- **Hover behavior (desktop only):** hovered tile scales `1.2`. Non-hovered tiles shift vertically by `±13.8px` (`baseHeight * 0.1`, with `baseHeight` 138/52) — up if above hovered, down if below. On mobile, hover scale stays `1.0`.
- Label inside each tile: `font-michroma font-medium text-[11px] sm:text-[14px] md:text-[23px] leading-[16px] sm:leading-[22px] md:leading-[34px] tracking-tight`, `letter-spacing: -0.03em`.

### 1d. Header — `Header`
- Container: `absolute top-4 left-4 right-4 sm:top-8 sm:left-8 sm:right-8 md:top-[64px] md:left-[64px] md:right-[64px] flex items-center justify-between z-40`.
- **Logo group (left):** clicking navigates to scrollRatio `0`. Contains:
  - `Logo` — 48×48 SVG with this exact path: a stylized "M" mark (`viewBox="0 0 80 80"`, single `<path>`, see code snippet below).
  - Subtitle (hidden < sm): three lines `Full Workflow Automation.` / `We Manage Everything. You` / `Unwind.` in `font-manrope font-normal tracking-wide text-[12px] leading-[16px] text-white`.
- **Desktop nav (≥ md):** the 4 NAVIGATION_ITEMS as buttons: `font-manrope font-medium text-[12px] leading-[16px] tracking-wider text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300`.
- **Mobile burger:** circular `w-10 h-10 rounded-full border border-white/10 bg-white/5`. Toggles a full-screen overlay `fixed inset-0 bg-[#11010a]/98 backdrop-blur-xl z-30` with each item in `font-michroma text-[16px] uppercase tracking-widest py-4 px-6 border-b border-white/5`; active item: `text-[#FF005E] font-semibold`.

Logo path (exact):
```
M40 80C17.9086 80 0 62.0914 0 40V0C15.0436 0 28.1476 8.30466 34.9776 20.5796C25.6529 22.8063 18.7198 31.1937 18.7198 41.2004V42.0962C18.7198 53.3099 27.8104 62.4004 39.0242 62.4004H39.9199L39.9197 41.2004C39.9197 52.9088 49.4113 62.4004 61.1198 62.4004L61.1198 41.2004C61.1198 29.5187 51.6717 20.0437 40 20.0005L40 0H41.6902C62.8481 0 80 17.1519 80 38.3099V40C80 62.0914 62.0914 80 40 80Z
```

---

## SECTION 2 — SECOND SCREEN (Rising Panel)

### Reveal mechanics
- Triggered when `lerpedScrollProgress > 1.15`. Becomes fully on-screen at `1.65`.
- Panel: `absolute bottom-0 left-0 w-full h-full bg-[#11010a] rounded-t-[48px] overflow-hidden z-40`.
- `transform: translateY((1 - easedRisingProgress) * 100%)` where `easedRisingProgress = 1 - (1 - secondScreenProgress)^3`.
- `visibility: hidden` when `secondScreenProgress === 0`.
- While rising, the **first screen blurs** up to `64px` via `Math.sin(p * π/2) * 64`.
- **iOS grab-handle pill:** `absolute top-5 left-1/2 -translate-x-1/2 w-16 h-[5px] bg-white rounded-full z-50 pointer-events-none`.

### 2a. Background video — `SecondVideoScrubber`
- **Video URL (exact):**
  `https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/cloudinarry%20to%20cloudflare/2026060218225-v_kcy5rl.mp4`
- Same component skeleton as `VideoScrubber` but with these differences:
  - Background color of the loader bg: `bg-[#11010af4]`.
  - `DRUM_START = 1.45`, `DRUM_END = 3.50`.
  - `drumProgress = clamp01((scrollProgress - 1.45) / (3.50 - 1.45))`, `target = drumProgress * duration`.
  - Same lerp `0.15`, same `!video.seeking && diff > 0.01` guard.
  - Same GSAP mouse parallax `x/y: ±40px, duration 1.2, ease "power2.out"`.
  - Loader label: `LOADING DRUM STREAM...` with `border-pink-500/20 border-t-pink-500`.

### 2b. Cylindrical text drum — `CylindricalTextDrum`
- Container: `absolute inset-y-0 left-0 w-full sm:w-[65%] md:w-[60%] z-30 flex flex-col items-start justify-center pointer-events-none select-none text-left pl-6 sm:pl-12 md:pl-20 py-16`, with `perspective: 1000px; perspectiveOrigin: 25% 50%`.
- Inner: `relative w-full h-[85vh] flex flex-col justify-center items-start overflow-visible` with `transformStyle: "preserve-3d"`.
- **Geometry:** `R = 380`, `lineHeight = 32`.
- `targetIndex = clamp01((scrollProgress - 1.45) / 2.05) * (LINES.length - 1)`.
- For each line `idx`:
  - `indexDiff = idx - targetIndex`
  - `translateY = indexDiff * 32`
  - `angleRad = translateY / 380`, `angleDeg = angleRad * 180/π`
  - `translateZ = cos(angleRad) * 380 - 380`
  - `baseScale = 0.78 + cos(angleRad) * 0.22`
  - `opacity = max(0, (cos(angleRad) - 0.2) / 0.8)`
  - `depthBlur = min(8, max(0, (|indexDiff| - 1.5) * 0.75))`
  - Apply `transform: translateY(${ty}px) translateZ(${tz}px) rotateX(${-angleDeg * 0.8}deg) scale(${baseScale})`, `transformOrigin: "left center"`, plus blur when > 0.1.
- Each line `<p>`: `font-manrope text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-semibold leading-[0.90] tracking-tight whitespace-nowrap`, `letter-spacing: -0.035em`.
- Text segments: if `highlight === true` use `text-white font-bold opacity-100`; else `text-white/60`. Empty `""` line renders a sized spacer at `opacity * 0.3`.
- **Use the exact `LINES` array below — 32 entries (one empty string at index 15):**

```
1.  Welcome to the [ultimate convergence]
2.  of [digital rebels], [underground creators],
3.  and [top-tier product builders] who
4.  refuse to follow [guidelines].
5.  This is where [high-end design principles]
6.  meet [pure technical execution],
7.  without the [corporate bureaucracy] and
8.  meaningless [standard aesthetics].
9.  We [gather in the shadows] to build
10. the [next generation] of [scalable interfaces],
11. [automated workflows], and [decentralized assets]
12. that move the [cultural needle forward].
13. Experience [zero-bullshit networking],
14. weekly [alpha allocations], and [unreleased]
15. [toolkits] to shape the [internet's landscape].
16. (empty line)
17. This is [not another social club]
18. for casual enthusiasts or [template consumers].
19. This is a [highly selective environment]
20. engineered for [hyper-productive creators],
21. [UI/UX visionaries], and [AI prompt architects]
22. who operate at the [absolute limits]
23. of [digital product creation].
24. Our [framework is simple]:
25. [eliminate intermediate noise],
26. [automate the execution layer],
27. and [deploy elite digital products]
28. while others are still [scheduling meetings].
29. We loop through [complex design systems],
30. [break conventional grids], and
31. [execute fluid interactions] that
32. [redefine digital environments].
```
(Words in `[brackets]` are `highlight: true`.)

### 2c. Logo marquee — `Marquee`
- Position: `absolute bottom-8 sm:bottom-12 md:bottom-16 left-0 w-full sm:w-[65%] md:w-[60%] pl-6 sm:pl-12 md:pl-20 pr-6 sm:pr-12 md:pr-16 z-50`.
- Inside a wrapper `border-t border-white/[0.08] pt-6`.
- `<Marquee gap="80px" speed={25} fade>` produces two duplicated tracks animated infinitely with the keyframe `marquee-scroll` (0% → -50%) over `25s` linear infinite, masked with a left/right transparent fade at 15%/85%.
- Children in order: `<GoogleWordmark size={100} />`, `<GithubWordmark size={100} />`, then `<img>` tags for these exact URLs, each styled `h-6 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity`, `referrerPolicy="no-referrer"`:
  - `https://raw.githubusercontent.com/dsMagnatov/Acreage-landing-assets/refs/heads/main/voiceflow-logo-svg-150px.svg`
  - `.../zendesk-logo-svg-150px.svg`
  - `.../pendo-logo-svg-150px.svg`
  - `.../glide-logo-svg-150px.svg`
  - `.../canva-logo-svg-150px.svg`
- `GoogleWordmark` and `GithubWordmark` are inline `<svg>` wordmarks at `viewBox="0 0 115 30"` / `0 0 110 30` — see file for exact text/paths.

---

## INTERACTIONS — Summary table

| Trigger | Effect |
|---|---|
| Mouse wheel | `scrollProgress += deltaY * 0.0006`, clamp `[0, 3.5]` |
| Touch drag | `scrollProgress += (lastY - currentY) * 0.0015` |
| Nav click | 1200ms easeInOutCubic lerp to target ratio |
| `scrollProgress` 0 → 1 | Hero video scrubs forward, "INNER CIRCLE" chars fall (300% y, 25vh) with 0.03 stagger |
| `scrollProgress` > 0.75 | Soap tiles fade/slide in (over a 0.22 range), with 12px → 0 blur |
| Hover tile (desktop) | Hovered tile scales 1.2, neighbors shift ±13.8px |
| `scrollProgress` > 1.15 | Second screen rises (ease-out cubic), first screen blurs to 64px |
| `scrollProgress` 1.45 → 3.50 | Second video scrubs; cylindrical drum rotates; line at center is at scale 1.0/opacity 1.0 |
| Mouse move (anywhere) | Both videos parallax-translate ±40px via GSAP `power2.out`, 1.2s |

---

## DATA PERSISTENCE

Supabase is available. This page is presentational and does not persist user state, so no database tables are required for the recreation. If extending with capture forms, waitlist sign-ups, or analytics events, create a Supabase table with RLS enabled and `auth.uid()`-based policies (one INSERT policy for `authenticated`, restrictive SELECT).

---

## FILE STRUCTURE

```
src/
  App.tsx
  main.tsx
  index.css
  types.ts
  data.ts
  components/
    Header.tsx
    Logo.tsx
    Logos.tsx                 (GoogleWordmark, GithubWordmark exported)
    Marquee.tsx
    VideoScrubber.tsx
    SecondVideoScrubber.tsx
    ScrollExitSplitText.tsx
    SoapTiles.tsx
    CylindricalTextDrum.tsx
```
