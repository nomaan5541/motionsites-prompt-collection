Build a dark, cinematic drone/UAV technology landing page called **"AETHER_X"** using React + Vite + TypeScript + Tailwind CSS. The site has a scroll-driven video background and two content sections with reveal-on-scroll animations. Here is the exact specification:

---

### Font & Global Styles

- Load **Helvetica Neue Regular** via this stylesheet in `index.html`:
  ```
  https://db.onlinewebfonts.com/c/0d49fc455f4a8951a42daf952412a713?family=Helvetica+Neue+Regular
  ```
- Body: `font-family: 'Helvetica Neue Regular', 'Helvetica Neue', Helvetica, Arial, sans-serif`, background `#0a0a0a`, color `#fff`, antialiased.
- In `tailwind.config.js`, set `fontFamily.sans` and `fontFamily.mono` to `'"Flexo Soft Medium"', 'system-ui', 'sans-serif'`.
- Selection highlight: `rgba(255, 255, 255, 0.2)`.
- Page title: `AETHER_X — Where Sky Meets Machine Logic`

---

### Dependencies

Only: `react`, `react-dom`, `lucide-react`, `@supabase/supabase-js`. Tailwind + PostCSS + Autoprefixer + Vite for tooling.

---

### Architecture (5 components)

```
App.tsx
  -> ScrollVideo (fixed fullscreen background)
  -> Navbar (fixed top)
  -> main
       -> SectionOne (hero, bottom-aligned)
       -> spacer div (h-[80vh], aria-hidden)
       -> SectionTwo (full-height, justify-between)
```

---

### Component 1: `Reveal.tsx` (scroll-triggered animation wrapper)

- Props: `children`, `delay` (ms, default 0), `className`, `as` ('div' | 'span', default 'div')
- Uses `IntersectionObserver` with `threshold: 0.15`
- Animates from `translate-y-8 opacity-0` to `translate-y-0 opacity-100`
- Transition: `duration-700 ease-out will-change-transform`
- `transitionDelay` applied via inline style from `delay` prop

---

Component 2: ScrollVideo.tsx (frame-extracted scroll-synced video)
Video URL (CloudFront):

https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_230900_ef8565a6-16eb-4fe9-98e4-4b972d3f436d.mp4
Architecture principle: The <video> element starts visible as a live fallback. The rAF loop starts immediately on mount and seeks the video on scroll. Once frame extraction finishes, the canvas becomes visible and the video is hidden -- seamless handoff with zero blank frames.
Implementation:
1. State: framesReady boolean (default false). framesRef holds extracted ImageBitmap[].
2. First useEffect (frame extraction, runs once):
    * Fetch video as blob, create object URL
    * Extract up to 120 frames at max width 1280px using createImageBitmap + sequential seek-based extraction (derive frame count from video.duration * 24, clamped between 30-120)
    * On success: store frames in framesRef.current, set framesReady = true
    * On failure or cancellation: do nothing -- the video fallback stays visible permanently
    * Cleanup: set cancelled flag, revoke object URL, close all ImageBitmaps
3. Second useEffect (rAF scroll-sync loop, deps: [framesReady]):
    * Starts immediately on mount (when framesReady is still false) -- this is critical
    * Re-runs when framesReady flips to true (cleans up old loop, starts new one with frame drawing)
    * Scroll handler: maps scrollY / (scrollHeight - innerHeight) to 0-1 progress, clamped
    * Resize handler: sets canvas dimensions to clientWidth * dpr x clientHeight * dpr (dpr capped at 2)
    * Tick function (rAF):
        * Smooth interpolation: smoothed += (targetProgress - smoothed) * 0.1
        * If frames exist (frames.length > 1): map smoothed to frame index, draw to canvas with cover-fit math
        * Else if video element exists (fallback): seek video.currentTime to smoothed * duration (with seek-lock to avoid stacking seeks)
    * Cover-fit draw: scale = max(canvasW/frameW, canvasH/frameH), center the scaled frame
4. Render structure:  <div class="fixed inset-0 -z-10 bg-[#0a0a0a]">
5.   {!framesReady && <video ... visible, muted, playsInline, preload="auto", object-cover />}
6.   <canvas ... class includes 'invisible' when !framesReady, removes it when framesReady />
7.   <div class="absolute inset-0 bg-black/20" /> (overlay)
8. </div>
9.   
Key detail: The <video> is conditionally rendered (!framesReady), so it is present and visible during loading. The canvas starts with invisible class and only becomes visible when framesReady flips. This guarantees something is always on screen -- the video during load, the canvas after extraction.



### Component 3: `Navbar.tsx`

- Fixed top, z-50, flex between, responsive padding (`px-5 py-4 sm:px-8 sm:py-5 md:px-12`)
- Left: custom SVG logo (white, 32x32, scales to 36x36 on sm+). SVG path:
  ```
  M 160 88 L 194 34 L 216 0 L 256 0 L 256 40 L 221.5 93.5 L 200 128 L 256 128 L 256 256 L 96 256 L 96 168 L 64.246 220 L 40 256 L 0 256 L 0 216 L 34 162 L 56 128 L 0 128 L 0 0 L 160 0 Z
  ```
- Right: pill button "Join The Fleet" -- `rounded-full bg-white text-black uppercase tracking-wider text-xs (sm:text-sm)`, hover: `bg-white/90 scale-105`
- Both wrapped in `<Reveal>` (logo delay 0, button delay 150)

---

### Component 4: `SectionOne.tsx` (Hero)

- Full viewport height, content at bottom (`flex-col justify-end`)
- 2-column grid on sm+, single column mobile
- **Column 1:** Large heading with 3 stacked `<Reveal as="span">` lines:
  - "Relentless." (delay 100)
  - "Sovereign." (delay 250)
  - "Unyielding." (delay 400)
  - Font size: `clamp(2.5rem, 8vw, 6rem)`, font-medium, leading-[1.05], tracking-tight, drop-shadow-lg
- **Column 2:** 3 stats in a flex-wrap row (right-aligned on sm+), delay 550:
  - `360` + degree symbol + "Sensor Array"
  - `12` + degree symbol + "Thermal Scan"
  - `98` + % + "Precision"
  - Values: `text-2xl sm:text-3xl md:text-4xl font-bold tabular-nums`
  - Labels: `text-[10px] sm:text-xs uppercase tracking-wider text-white/50`

---

### Component 5: `SectionTwo.tsx`

- Full viewport, `flex-col justify-between`, responsive padding
- **Top-right block** (self-end, max-w-sm):
  - Heading (delay 100): "Precision / built into / every line." -- `text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.1]`
  - Stat row (delay 250, mt-8): 2-column grid `[auto_1fr]`
    - Left: "99.7%" bold + label "Fleet Ready"
    - Right: paragraph "Proven in 14,000+ sorties with unmatched operational readiness and zero downtime." -- `text-xs sm:text-sm text-white/70`

- **Bottom area** (mt-auto pt-16 sm:pt-20, 2-col grid on sm+):
  - Column 1 (delay 400): 3 stats in flex row:
    - `240 km` / "Reach"
    - `85 kg` / "Capacity"
    - `42 km/h` / "Glide Speed"
  - Column 2 (delay 550, sm:ml-auto):
    - 4 stats: `grid-cols-2 sm:flex`. First stat has `border border-white/30 rounded-lg`:
      - `160 km` / "Reach"
      - `5.8 hrs` / "Endurance"
      - `52 km/h` / "Max Pace"
      - `18 kg` / "Carry"
    - 2 pill buttons below:
      - "Schedule a Call" -- outline style (`border border-white/60 rounded-full`), hover: `border-white bg-white/10`
      - "Full Details" -- solid white, text-black, hover: `bg-white/90 scale-105`

---

### Key responsive breakpoints:
- Mobile: single column, smaller text, reduced padding
- `sm` (640px): 2-column grids activate, larger text
- `md` (768px): max padding/text sizes

### Color palette:
- Background: `#0a0a0a`
- Text: white, `white/70`, `white/60`, `white/50`
- Borders: `white/30`, `white/60`
- Overlay: `black/20`