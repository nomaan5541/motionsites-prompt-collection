Build a full-screen, two-section yoga coach landing page using React + TypeScript + Vite + Tailwind CSS v4 + Motion (framer-motion successor) + hls.js. The page has NO scrolling -- it is exactly viewport-sized with two states: a hero video screen and a second "collection" screen that slides up after the video ends.

---

### TECH STACK & SETUP

- **Framework:** React 19 with TypeScript
- **Bundler:** Vite 6 with `@vitejs/plugin-react` and `@tailwindcss/vite`
- **Styling:** Tailwind CSS v4 (imported via `@import "tailwindcss"` in CSS)
- **Animation:** `motion` package (the `motion/react` import path)
- **Video Streaming:** `hls.js` for HLS (.m3u8) stream playback
- **Font:** Google Fonts "Anton" (display sans-serif, all-caps condensed)

---

### FONT & THEME CONFIGURATION

**index.css:**
```css
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
@import "tailwindcss";

@theme {
  --font-anton: "Anton", sans-serif;
}
```

Use `font-anton` class throughout. All text is UPPERCASE.

---

### MEDIA ASSETS (EXACT URLS)

**Poster/Background Image (first screen, before video plays):**
```
https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260624_053103_a6c6fd5c-8f43-4942-a487-e81c8f3cd0c1.png&w=1920&q=85
```

**Main Background Video (HLS stream, plays on button click):**
```
https://stream.mux.com/YyFgoUXUTVMiVMMLeQoq49tP00joMyEzoRmnEnk02H5rA.m3u8
```

**Three Card Videos (HLS streams, second section, play on hover):**
```
Card 1 (Left):   https://stream.mux.com/S9BmS8DLYYowz7jr1BkN2PbAQm4bjEwijllpwmEB4xA.m3u8
Card 2 (Center): https://stream.mux.com/83kMTSKA4Xy01RTddNwDdt7OjCocQTCdKHY7AsD02Dlgc.m3u8
Card 3 (Right):  https://stream.mux.com/c4KUkE6NHGljcc4M8458iMEdHAbUvsG5MTpqefzBYvo.m3u8
```

---

### SECTION 1: HERO VIDEO SCREEN (Full Viewport)

**Container:** `w-screen h-screen bg-black overflow-hidden select-none` with `onMouseMove` handler for parallax.

#### Background Video Layer
- A `<video>` element with the poster image URL as the `poster` attribute.
- HLS initialized via hls.js: create `new Hls({ enableWorker: false })`, call `hls.loadSource(url)` and `hls.attachMedia(video)`. Set `isLoaded=true` on `Hls.Events.MANIFEST_PARSED`. Fallback for Safari: set `video.src` directly (native HLS support).
- Video attributes: `muted`, `playsInline`, `preload="auto"`, no `controls`, `onEnded` triggers second screen.
- Inline style: `transform: scale(1.08) translate(${parallax.x}px, ${parallax.y}px)` -- parallax moves max 20px in each direction based on mouse position relative to window center.
- CSS: `w-full h-full object-cover transition-opacity duration-1000 ease-in-out origin-center`. Starts at `opacity-0`, transitions to `opacity-100` when loaded.
- An overlay div on top: `absolute inset-0 bg-black/10 pointer-events-none`.

#### Parallax Logic
- On mousemove, compute `x = (clientX - innerWidth/2) / (innerWidth/2)` (range -1 to 1), same for y.
- Set parallax state to `{ x: x * 20, y: y * 20 }`.

#### UI Overlay (absolute, full viewport, z-10, pointer-events-none)
- Padding: `p-6 sm:p-12 md:p-16`
- Layout: `flex flex-col justify-between`

#### Top-Left Slogan
- Container: `max-w-xs sm:max-w-sm md:max-w-md pointer-events-auto overflow-hidden`
- Animated with Motion: when `isPlaying` is true, animates `{ y: 250, opacity: 0 }`. When false: `{ y: 0, opacity: 1 }`.
- Transition: `duration: 1, ease: [0.16, 1, 0.3, 1]` (custom cubic bezier).
- Text: `font-anton text-white text-xl sm:text-2xl md:text-3xl lg:text-[2.2rem] leading-[0.95] tracking-wide uppercase`
- Content:
  ```
  FIND YOUR FOCUS,
  ARRANGE PRIVATE
  YOGA SESSIONS, AND LIVE
  THE MINDFUL WAY
  ```

#### Bottom Bar (w-full, flex col on mobile, flex row items-end justify-between on md+)

**Bottom-Left Title:**
- Container: `pointer-events-auto overflow-hidden`
- Animated: when `isPlaying`, `{ y: "150%", opacity: 0 }` else `{ y: 0, opacity: 1 }`.
- Transition: `duration: 1.1, ease: [0.16, 1, 0.3, 1]`
- Text: `font-anton text-white text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[11rem] leading-none tracking-tight uppercase`
- Content:
  ```
  HEY, I AM
  JESSICA
  ```

**Bottom-Right Title:**
- Same animation/transition as bottom-left.
- Container: `text-left md:text-right pointer-events-auto overflow-hidden`
- Same text sizing.
- Content:
  ```
  YOGA
  COACH
  ```

**Center Circular "LET'S START" Button:**
- Position: `absolute left-1/2 bottom-[15%] md:bottom-2 -translate-x-1/2 z-20 pointer-events-auto`
- Wrapped in `<AnimatePresence>`. Only renders when `!isPlaying`.
- Exit animation: `{ scale: 0, opacity: 0 }` with `duration: 0.8, ease: [0.34, 1.56, 0.64, 1]` (bouncy overshoot bezier).
- Button classes: `w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-black/90 hover:bg-black text-white font-anton text-xs sm:text-sm tracking-widest flex flex-col items-center justify-center gap-1 cursor-pointer transition-all duration-300 border border-white/20 hover:border-white/40 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-sm relative overflow-hidden group`
- Inner radial glow: `absolute inset-0 bg-radial from-white/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300`
- Label: `relative z-10 font-bold tracking-wider` text "LET'S START"
- onClick: plays the video and sets `isPlaying=true`.

#### Play/Pause Logic
- Clicking button calls `video.play()`, sets `isPlaying=true`.
- When video ends (`onEnded`): sets `isPlaying=false`, `showSecondScreen=true`.

---

### SECTION 2: COLLECTION SCREEN (Slides Up Over Hero)

**Container:** A `motion.div` that covers the full viewport.
- `initial={{ y: "100%" }}`
- `animate={showSecondScreen ? { y: 0 } : { y: "100%" }}`
- `transition={{ type: "spring", damping: 32, stiffness: 220 }}`
- Classes: `absolute inset-0 w-full h-full z-30 flex flex-col items-center justify-start p-6 pt-24 sm:p-12 md:p-16`
- Background: `bg-gradient-to-b from-[#d5effd] via-[#aedcf9] to-[#8cd0f7]` (light blue gradient)

#### "BACK TO START" Button
- Position: `absolute top-[56px] left-1/2 -translate-x-1/2 z-40`
- Classes: `flex items-center font-anton text-black hover:text-black/70 text-lg sm:text-xl border border-black/20 hover:border-black/40 px-8 py-3 rounded-full bg-white/40 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer`
- onClick: pauses video, resets `currentTime=0`, hides second screen, resets `isPlaying`.

#### Content Body
- Container: `w-full flex-1 flex flex-col items-center justify-center relative select-none mt-20 sm:mt-16`

**Background Giant Text (behind cards):**
- `font-anton select-none pointer-events-none uppercase text-[13.5vw] sm:text-[16.9vw] leading-none text-center w-full absolute z-10 whitespace-nowrap`
- Gradient text effect: `bg-gradient-to-b from-white via-white/70 to-white/0 bg-clip-text text-transparent`
- Additional: `transform translate-y-4 filter drop-shadow-[0_2px_15px_rgba(255,255,255,0.1)]`
- Content: `COLLECTION #451`

#### Overlapping Card Deck
- Container: `flex items-center justify-center relative z-20 w-full max-w-5xl mt-6`
- Three `<YogaCard>` components overlapping with negative margins.

**Left Card:**
- `src`: Card 1 URL
- `initialRotation={-8}`
- `hoverOffset={{ x: -60, y: -25, rotate: -12, scale: 1.04 }}`
- `zIndexClass="z-20 hover:z-40"`
- `className="-mr-14 sm:-mr-22 md:-mr-28 lg:-mr-32"`

**Center Card:**
- `src`: Card 2 URL
- `initialRotation={0}`
- `hoverOffset={{ x: 0, y: -15, rotate: 0, scale: 1.08 }}`
- `zIndexClass="z-30 hover:z-40"`
- `className="scale-105"`

**Right Card:**
- `src`: Card 3 URL
- `initialRotation={8}`
- `hoverOffset={{ x: 60, y: -25, rotate: 12, scale: 1.04 }}`
- `zIndexClass="z-20 hover:z-40"`
- `className="-ml-14 sm:-ml-22 md:-ml-28 lg:-ml-32"`

---

### YOGACARD COMPONENT (src/components/YogaCard.tsx)

**Props:** `src: string`, `initialRotation: number`, `hoverOffset: { x, y, rotate, scale }`, `zIndexClass: string`, `className?: string`

**HLS Setup:**
- On mount, if `src.endsWith(".m3u8") && Hls.isSupported()`: create `new Hls({ enableWorker: false })`, `loadSource`, `attachMedia`. Destroy on unmount.
- Safari fallback: set `video.src` directly.

**Hover Behavior:**
- Track `isHovered` state via `onMouseEnter`/`onMouseLeave`.
- When hovered: `video.play()`. When unhovered: `video.pause()` and `video.currentTime = 0`.

**Card Styling:**
- `motion.div` with classes: `relative rounded-3xl overflow-hidden aspect-[9/16] w-72 sm:w-[21rem] md:w-[24rem] bg-white border-[6px] sm:border-[8px] border-white shadow-[0_15px_40px_rgba(0,0,0,0.22)] cursor-pointer origin-bottom select-none`
- `initial={{ rotate: initialRotation, x: 0, y: 0, scale: 1 }}`
- `whileHover` animates to `hoverOffset` values with `transition: { type: "spring", stiffness: 200, damping: 20 }`

**Video element:** `w-full h-full object-cover rounded-2xl pointer-events-none`, `muted`, `loop`, `playsInline`, `preload="auto"`.

**Inner ring overlay:** `absolute inset-0 rounded-2xl ring-1 ring-black/10 pointer-events-none`

---

### KEY ANIMATION SUMMARY

| Element | Trigger | Animation | Transition |
|---------|---------|-----------|------------|
| Top slogan | isPlaying | y: 0 to 250, opacity 1 to 0 | 1s, ease [0.16, 1, 0.3, 1] |
| Bottom titles (both) | isPlaying | y: 0 to "150%", opacity 1 to 0 | 1.1s, ease [0.16, 1, 0.3, 1] |
| Play button | isPlaying (exit) | scale 1 to 0, opacity 1 to 0 | 0.8s, ease [0.34, 1.56, 0.64, 1] |
| Second screen | showSecondScreen | y: "100%" to 0 | spring, damping 32, stiffness 220 |
| Cards hover | mouse enter/leave | rotate/x/y/scale to hoverOffset | spring, stiffness 200, damping 20 |
| Background video parallax | mousemove | translate up to 20px each axis | inline style (no transition) |
| Video opacity | loaded state | opacity 0 to 1 | CSS transition 1000ms ease-in-out |

---

### DEPENDENCIES (package.json)

```json
"dependencies": {
  "@tailwindcss/vite": "^4.1.14",
  "@vitejs/plugin-react": "^5.0.4",
  "hls.js": "^1.6.16",
  "motion": "^12.23.24",
  "react": "^19.0.1",
  "react-dom": "^19.0.1",
  "vite": "^6.2.3"
}
```

---

### VITE CONFIG

Uses `@tailwindcss/vite` plugin and `@vitejs/plugin-react`. Path alias `@` resolves to project root.