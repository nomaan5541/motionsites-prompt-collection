## Overview

Build a single-page React + TypeScript + Vite + Tailwind CSS v4 landing page. The page is extremely tall (1200vh) but all visual content is position-fixed to the viewport. Scrolling drives two scroll-scrubbed HLS videos, a typewriter text deletion effect, a vertically-scrolling manifesto, mouse-trail stickers, and a scroll-triggered feedback form. The aesthetic is brutalist/retro-digital with a pixel font, lime green on near-black with electric blue accents.

---

## TECH STACK (exact versions)

```json
{
  "dependencies": {
    "@tailwindcss/vite": "^4.1.14",
    "@vitejs/plugin-react": "^5.0.4",
    "express": "^4.21.2",
    "hls.js": "^1.6.16",
    "react": "^19.0.1",
    "react-dom": "^19.0.1",
    "vite": "^6.2.3"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/node": "^22.14.0",
    "esbuild": "^0.25.0",
    "tailwindcss": "^4.1.14",
    "tsx": "^4.21.0",
    "typescript": "~5.8.2"
  }
}
```

---

## ALL ASSET URLs

### HLS Videos (Mux streams):
```
VIDEO_URL_1 = "https://stream.mux.com/W2NRcV6MrewS7QyWWqAWZvJR9jrnPU5rxymlPg01gRzk.m3u8"
VIDEO_URL_2 = "https://stream.mux.com/aypDi1exkKgYKEbWme9Csi47zxIim0101hw3ghmSzQIyw.m3u8"
```

### Static Stickers (Figma CDN):
```
STICKER1 = "https://crow-peanut-06457083.figma.site/_components/v2/4c2b061456bbff22b92923348791b501874ded3f/d9a6de619b1e7bf4b31b22e6d29324306ee68ad9.d9a6de61.png"
STICKER2 = "https://crow-peanut-06457083.figma.site/_components/v2/4c2b061456bbff22b92923348791b501874ded3f/7d1d8f4421fc4780ec85b4153ca6605a4b90dd65.7d1d8f44.png"
STICKER3 = "https://crow-peanut-06457083.figma.site/_components/v2/4c2b061456bbff22b92923348791b501874ded3f/80809d23ccb460d0db21f77bb3afef67d3ad1d9a.80809d23.png"
STICKER4 = "https://crow-peanut-06457083.figma.site/_components/v2/4c2b061456bbff22b92923348791b501874ded3f/50d6c27f67bc10d6859cf37d2f017bc406ad3a0d.50d6c27f.png"
```

### Mouse Trail Stickers (Figma CDN):
```
TRAIL_STICKER1 = "https://crow-peanut-06457083.figma.site/_components/v2/4c2b061456bbff22b92923348791b501874ded3f/b77ef81dabfca9ce4a4d1af5d553e17019a0d229.b77ef81d.png"
TRAIL_STICKER2 = "https://crow-peanut-06457083.figma.site/_components/v2/4c2b061456bbff22b92923348791b501874ded3f/9ece3a6bf6c5cecf6c0078d022a171bc93baf9c5.9ece3a6b.png"
TRAIL_STICKER3 = "https://crow-peanut-06457083.figma.site/_components/v2/4c2b061456bbff22b92923348791b501874ded3f/41b9f0bffb2c0b2e1d3fbe26c124ed1378970c35.41b9f0bf.png"
TRAIL_STICKER4 = "https://crow-peanut-06457083.figma.site/_components/v2/4c2b061456bbff22b92923348791b501874ded3f/0edc0785a3e3bf26be7a494886999c4a6f1dc14c.0edc0785.png"
TRAIL_STICKER5 = "https://crow-peanut-06457083.figma.site/_components/v2/4c2b061456bbff22b92923348791b501874ded3f/d12ddf42fe4c8437df4414c883fe60fb77b20cbe.d12ddf42.png"
```

---

## FONT

Google Font: **"Press Start 2P"** -- imported via CSS `@import url(...)`. Registered as a Tailwind v4 theme token:

```css
@theme {
  --font-press-start: "Press Start 2P", system-ui, sans-serif;
}
```

Applied everywhere via class `font-press-start`.

---

## COLOR SYSTEM

| Token | Value | Usage |
|-------|-------|-------|
| Background | `slate-950` | Page bg, form bg |
| Primary text/accent | `#85D743` | All headings, buttons, cursor, manifesto text |
| Secondary accent | `#0033FF` | Marquee bg, form border, button shadows |
| Button hover | `#9eff5c` / `#9bfb4e` | Submit/reset button hover states |
| Form bg | `slate-950/95` | 95% opacity dark overlay |
| Input bg | `slate-900` | Form input fields |
| Input border | `slate-700` | Default border, `#85D743` on focus |
| Nav text | white | Navigation links |
| Selection | `emerald-500/20` | Text selection highlight |

---

## HTML SHELL (`index.html`)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Scroll Video</title>
  </head>
  <body class="bg-slate-950 overflow-x-hidden m-0 p-0 selection:bg-emerald-500/20">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## CSS (`src/index.css`) -- EXACT

```css
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
@import "tailwindcss";

@theme {
  --font-press-start: "Press Start 2P", system-ui, sans-serif;
}

@keyframes marquee {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}

@keyframes sticker-fade-out {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) rotate(var(--rot)) scale(0);
  }
  20% {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(var(--rot)) scale(1.05);
  }
  30% {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(var(--rot)) scale(1.0);
  }
  85% {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(var(--rot)) scale(1.0);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) rotate(var(--rot)) scale(0.8);
  }
}

.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 10s linear infinite;
}
```

---

## PAGE LAYOUT

Root container: `relative w-full bg-slate-950 min-h-[1200vh] select-none`

All visual content is `position: fixed`. The 1200vh height exists solely to create scroll distance that drives the animations.

---

## ELEMENT-BY-ELEMENT BREAKDOWN

### 1. FULL-SCREEN VIDEO BACKGROUND (fixed, z-auto)

Container: `fixed inset-0 w-full h-full overflow-hidden`

Two `<video>` elements stacked:
- Both: `absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-300`
- Both: `muted playsInline autoPlay={false} preload="auto" crossOrigin="anonymous"`
- Video 1 starts at `opacity: 1`, Video 2 starts at `opacity: 0`

**HLS Setup:**
- Use `hls.js` with `{ maxBufferLength: 60 }`
- On `MANIFEST_PARSED`: call `video.play().then(() => video.pause())` to warm decoder
- Fallback: native HLS for Safari via `canPlayType("application/vnd.apple.mpegurl")`

**Scroll-Scrub Logic (requestAnimationFrame lerp loop):**
- Calculate `progress = scrollY / (documentHeight - windowHeight)` [0 to 1]
- Video 1 maps progress [0, 0.5] to its full duration
- Video 2 maps progress [0.5, 1.0] to its full duration
- Lerp factor: 0.3 (smooth interpolation per frame)
- Guard: Only update `video.currentTime` when `!video.seeking`
- Snap immediately at scroll boundaries (scrollY <= 10 for v1, at bottom for v2)

**Crossfade (no dim):**
- Progress 0-0.45: v1 opacity 1, v2 opacity 0
- Progress 0.45-0.5: v1 stays at opacity 1, v2 fades from 0 to 1 (overlaid on top)
- Progress 0.5+: v1 opacity 0 (GPU savings), v2 opacity 1

---

### 2. DIAGONAL MARQUEE BANNER (fixed, z-50)

Container: `fixed top-14 left-[-170px] w-[650px] -rotate-[30deg] z-50 bg-[#0033FF] py-[18px] overflow-hidden select-none pointer-events-none shadow-2xl`

Inner: `.animate-marquee flex whitespace-nowrap`

Two identical `<span>` elements for seamless loop:
```
font-press-start text-[16px] text-[#85D743] tracking-widest px-4
```
Content: `WARNING! WARNING! WARNING! WARNING! WARNING! WARNING! WARNING! WARNING!&nbsp;` (repeated twice)

Animation: `marquee 10s linear infinite` (translates X from 0 to -50%)

---

### 3. FLOATING STICKER - TOP LEFT (fixed, z-40)

Container: `fixed z-40 select-none pointer-events-none transition-transform duration-300`
- Inline style: `top: 232px`, `left: 120px`, `transform: rotate(32deg)`
- Image: STICKER1, `w-[100px] h-auto object-contain`, `referrerPolicy="no-referrer"`

---

### 4. FLOATING STICKER - BOTTOM RIGHT (fixed, z-40)

Container: `fixed bottom-8 right-8 z-40 select-none pointer-events-none transition-transform duration-300`
- Image: STICKER2, `w-[110px] sm:w-[150px] h-auto object-contain`, `referrerPolicy="no-referrer"`

---

### 5. NAVIGATION (fixed, z-50)

```
fixed top-10 right-8 md:right-16 z-50 flex gap-6 md:gap-10 font-press-start text-[10px] sm:text-xs md:text-sm text-white select-auto
```

Links: Projects, Expertise, About, Contact
- Each: `hover:text-[#85D743] transition-colors duration-200`
- Contact link: `onClick` prevents default, calls `window.scrollTo({ top: documentElement.scrollHeight, behavior: "smooth" })`

---

### 6. HERO TEXT - TYPEWRITER DELETION (fixed, z-30)

Container: `fixed top-0 left-0 w-full h-screen z-30 pointer-events-none flex flex-col justify-end p-8 md:p-16 pb-16 sm:pb-24`

H1: `font-press-start text-[#85D743] text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.2] tracking-tight uppercase select-none max-w-5xl`

**Three lines:**

**Line 1: "PROBLEM"** -- 7 individual `<span className="inline-block relative">` characters (indices 1-7)

**Line 2: "WITH" + 2 stickers** -- wrapped in `inline-flex items-center gap-3 sm:gap-5 md:gap-7 align-middle`
- Letters W-I-T-H in nested `inline-flex items-center gap-[0.06em] sm:gap-[0.08em] md:gap-[0.1em]` (indices 8-11)
- STICKER4 image at index 12: `h-[0.85em] w-auto object-contain`, rotated `-8deg`
- STICKER3 image at index 13: `h-[0.85em] w-auto object-contain`, rotated `6deg`

**Line 3: "CREATIVE?"** -- 9 characters (indices 14-22)

**Total character count: 22**

**Cursor:** After the last visible character: `inline-block w-[0.14em] h-[0.8em] bg-[#85D743] ml-1 select-none animate-pulse align-middle`

**Deletion logic:**
- During scroll progress 0 to 0.25, characters are removed right-to-left
- `visibleCount = Math.round((1 - activeProgress) * 22)` where `activeProgress = min(progress, 0.25) / 0.25`

---

### 7. MANIFESTO - ROLLING CREDITS (fixed, z-25)

Container: `fixed top-0 left-0 w-full md:w-[70%] h-screen z-25 pointer-events-none flex flex-col justify-start p-8 md:p-16 pt-[12vh] pb-16 select-none`
- Initial inline style: `opacity: 0`, `transform: translateY(100vh)`

Text div: `font-press-start text-[#85D743] text-[20px] sm:text-[26px] md:text-[32px] leading-[1.35] tracking-tight uppercase text-left whitespace-pre-line select-none`

**Scroll behavior:**
- Begins after progress 0.25 + (200px / maxScroll) delay
- `alpha = (progress - startProgress) / (1 - startProgress)` [0 to 1]
- `opacity = min(1, alpha / 0.05)` (fast fade-in)
- `translateY = 100 - (alpha * 450)` in vh (scrolls from +100vh to -350vh)

**Exact manifesto text:**
```
LIMITLESS INPUTS OR
STANDARD LAYOUT
TEMPLATE
CONSUMERS. THIS IS
A HIGHLY SELECTIVE
ENVIRONMENT
ENGINEERED FOR
HYPER-PRODUCTIVE
CREATORS, UI/UX
VISIONARIES, AND
AI PROMPT
ARCHITECTS WHO
OPERATE AT THE
ABSOLUTE LIMITS OF
DIGITAL PRODUCT
CREATION. OUR
FRAMEWORK IS

---

WHY CHOOSE US?
1. ZERO MOCKUPS,
   ONLY REAL CODE.
2. SPEED RUNS -
   ZERO WASTED TIME.
3. DIGITAL EDGE -
   AESTHETIC
   DOMINANCE.
4. SYSTEM STATE -
   INTELLIGENT
   INTERACTION.

---

WE REJECT
THE BORING.
WE REJECT
THE STANDARD.

CHOOSE ABSOLUTE
CREATIVE EDGE.

THE FUTURE IS
NOW SECURED.
```

---

### 8. MOUSE TRAIL STICKERS (fixed, z-[60])

Container: `fixed inset-0 pointer-events-none z-[60] overflow-hidden`

**Behavior:**
- Track mouse position via `window.addEventListener("mousemove", ..., { passive: true })`
- Spawn new sticker when cursor moves > 150px from last spawn point
- 5 sticker types cycle sequentially (not randomly): trail_sticker1 through trail_sticker5
- Random rotation: `Math.random() * 40 - 20` degrees
- Max 4 stickers visible: `[...prev.slice(-3), newSticker]`
- Auto-remove after 2200ms via `setTimeout`

**Each sticker element:**
- `absolute select-none pointer-events-none flex items-center justify-center -translate-x-1/2 -translate-y-1/2`
- Inline style: `left: x`, `top: y`, `transform: translate(-50%, -50%) rotate(Xdeg)`, `--rot: Xdeg`
- `animation: sticker-fade-out 2.2s forwards cubic-bezier(0.16, 1, 0.3, 1)`
- Images: `w-[110px] sm:w-[150px] md:w-[180px] h-auto object-contain`, `referrerPolicy="no-referrer"`

---

### 9. FEEDBACK FORM (fixed, z-[55])

Container: `fixed left-1/2 z-[55] w-[92%] max-w-[460px] p-6 sm:p-8 bg-slate-950/95 border-4 border-[#0033FF] shadow-[10px_10px_0px_#85D743] select-auto transition-all duration-[900ms] pointer-events-auto`

**Position/Animation:**
- `bottom: 50%`
- When visible: `transform: translate(-50%, 50%) rotate(0deg)`
- When hidden: `transform: translate(-50%, 150vh) rotate(15deg)`
- `transitionTimingFunction: cubic-bezier(0.16, 1, 0.3, 1)`

**Triggers at:** scroll progress >= 0.95

**Close button:** `absolute top-4 right-4 font-press-start text-[14px] text-slate-500 hover:text-red-500 hover:scale-110 active:scale-95 transition-all cursor-pointer select-none border-none bg-transparent` -- content: `[X]`

**Form (default state):**
- Title: "FEEDBACK SYSTEM" -- `font-press-start text-xs sm:text-sm text-[#85D743] tracking-widest uppercase text-center mb-1`
- Name input: `type="text" required placeholder="YOUR NAME"` -- `font-mono text-xs text-white bg-slate-900 border-2 border-slate-700 focus:border-[#85D743] hover:border-slate-500 focus:outline-none p-2.5 w-full uppercase transition-all placeholder-slate-600`
- Email input: `type="email" required placeholder="NAME@DOMAIN.COM"` -- same styles minus `uppercase`
- Textarea: `required rows={3} placeholder="FEEDBACK / ARCHITECTURE IDEAS..."` -- same styles plus `resize-none`
- Submit button: "LAUNCH TRANSMISSION" -- `font-press-start text-[8px] sm:text-[9px] text-black bg-[#85D743] hover:bg-[#9bfb4e] active:translate-y-0.5 active:shadow-none border-2 border-black py-3 px-6 shadow-[4px_4px_0px_#0033FF] w-full font-bold uppercase tracking-widest cursor-pointer select-none transition-all mt-1`
- Form gap: `flex flex-col gap-4 sm:gap-5`

**Success state:**
- Symbol: `font-press-start text-[32px] text-[#85D743] mb-4 animate-bounce` -- content: `✦`
- Heading: "TRANSMISSION SUCCESS" -- `font-press-start text-xs sm:text-sm text-[#85D743] mb-3 tracking-widest uppercase`
- Subtext: "Your feedback is secured in our neural network database." -- `font-mono text-[10px] sm:text-xs text-slate-400 max-w-sm mb-6 uppercase leading-relaxed`
- Reset button: "[ NEW TRANSMISSION ]" -- `font-press-start text-[8px] sm:text-[10px] text-black bg-[#85D743] hover:bg-[#9eff5c] border-2 border-black py-2.5 px-5 font-bold uppercase tracking-wider shadow-[3px_3px_0px_#0033FF] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer`

---

## SERVER (`server.ts`)

Express server on port 3000. In development: Vite middleware mode (SPA). In production: serves static `dist/` directory.

```typescript
import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;
  const publicDir = path.join(process.cwd(), "public");
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({ server: { middlewareMode: true }, appType: "spa" });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => res.sendFile(path.join(distPath, "index.html")));
  }

  app.listen(PORT, "0.0.0.0", () => console.log(`Server running on http://localhost:${PORT}`));
}
startServer();
```

---

## VITE CONFIG (`vite.config.ts`)

```typescript
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => ({
  plugins: [react(), tailwindcss()],
  resolve: { alias: { '@': path.resolve(__dirname, '.') } },
}));
```

---

## CRITICAL IMPLEMENTATION DETAILS

1. **No auto-play videos** -- videos are paused immediately after a play() call to warm up the decoder. Scroll scrubbing sets `currentTime` directly.
2. **Seeking guard** -- `if (!video.seeking)` prevents setting new frames while browser is still rendering the previous seek.
3. **No dim on crossfade** -- Video 1 stays at full opacity while video 2 fades in on top. Only after transition completes does video 1 go to opacity 0.
4. **All images use `referrerPolicy="no-referrer"`** to avoid Figma CDN blocking.
5. **State updates use equality check** -- `setX((prev) => prev !== newVal ? newVal : prev)` to avoid unnecessary re-renders during scroll.
6. **The manifesto translates a total of 450vh** (from +100vh to -350vh) to ensure it fully scrolls off screen.
7. **Mouse trail uses sequential cycling** (`typeCounter % 5`), not random selection.