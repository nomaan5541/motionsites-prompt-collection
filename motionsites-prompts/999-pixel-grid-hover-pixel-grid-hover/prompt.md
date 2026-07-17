# Pixel Grid Hover

## Metadata

- Source: https://motionsites.ai/
- Prompt ID: `pixel-grid-hover`
- Title: Pixel Grid Hover
- Category: Case Studies
- Type: blog
- Types: 
- Page type: hero
- Sort order: 999
- Free in site metadata: yes
- Fetch status: fetched

## Preview Assets

- Video: https://stream.mux.com/fqUlhqOGQZMgbxSNWbsVvX8g01lPd3y8d8e4Ks7pRsvY.m3u8

## Full Prompt

````
Build a "Projects / Case Studies" section as a React + TypeScript component using Tailwind CSS 3 and Framer Motion. Font is `'DM Sans', sans-serif` (Google Fonts: `https://fonts.googleapis.com/css?family=DM+Sans:500,400`). White background, black text. Here is the exact specification:

---

**Section Container:**
- `<section>` with `relative bg-white text-black`, inline style `fontFamily: "'DM Sans', sans-serif"`
- All animations use easing `[0.22, 1, 0.36, 1]`
- Inject a `<style>` block for the marquee keyframe:
  ```css
  @keyframes marqueeProjects {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .marquee-projects {
    animation: marqueeProjects 28s linear infinite;
  }
  .marquee-projects:hover {
    animation-play-state: paused;
  }
  ```

---

**Top Area (Header with floating squares):**
- Container: `relative px-6 pb-10 pt-32 sm:px-10 lg:px-16 lg:pt-40`
- Contains a `pointer-events-none absolute inset-0 overflow-hidden` layer with 8 parallax floating black squares. Each square uses `useScroll` (target: the section ref, offset `["start end", "end start"]`) and `useTransform` + `useSpring` for vertical parallax, plus a gentle infinite bob animation (`y: [0, -10, 0]`, duration `3s + index * 0.4s`, ease `easeInOut`, staggered delay `index * 0.3s`).
- Square positions (x%, y%, size px):
  ```
  (6, 20, 12), (12, 32, 8), (8, 44, 6), (88, 18, 10),
  (92, 30, 14), (85, 42, 7), (90, 52, 5), (14, 56, 5)
  ```
- Parallax formula: `useTransform(scrollYProgress, [0, 1], [0, -(80 + index * 30)])`, smoothed with `useSpring({ stiffness: 40, damping: 20 })`

**Header text** (centered, inside `relative mx-auto max-w-7xl text-center`):
- Animates from `opacity: 0, y: 24` to visible, duration `0.7s`, triggered by `useInView` with `{ once: true, margin: "-60px" }`
- Badge: "Projects" in `mb-5 inline-block bg-black px-4 py-1.5 text-[13px] font-medium tracking-wide text-white`
- Heading: `text-[clamp(1.8rem,3.2vw,2.8rem)] font-light leading-[1.25] tracking-tight`
  - "Insights from " in `text-black`, then "Our" in `text-black/40`
  - New line: "Case Studies" in `text-black/40`

---

**Case Study Cards (2x2 grid):**
- Container: `mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-16`, inner `grid gap-4 md:grid-cols-2`
- Each card animates from `opacity: 0, y: 30` to visible, staggered `delay: index * 0.1`, duration `0.7s`

**4 case studies data:**
```
1. id: "heartx", title: "HeartX", category: "Brand Strategy & Product Design", year: "2026"
   image: https://images.pexels.com/photos/7691249/pexels-photo-7691249.jpeg?auto=compress&cs=tinysrgb&w=800

2. id: "swave", title: "Swave\u00AE", category: "Web Design & Identity", year: "2025"
   image: https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=800

3. id: "eduspark", title: "EduSpark", category: "Brand Strategy & Web Design", year: "2023"
   image: https://images.pexels.com/photos/5428003/pexels-photo-5428003.jpeg?auto=compress&cs=tinysrgb&w=800

4. id: "greenergy", title: "Greenergy", category: "Brand Strategy & Web Design", year: "2022"
   image: https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800
```

**Each card structure** (aspect ratio `4/3`, `group relative overflow-hidden`):

1. **Background image**: absolutely positioned, `h-full w-full object-cover`

2. **Pixel-block hover overlay**: A 12-column x 8-row grid of absolutely positioned `bg-black/80` blocks. Each block covers `100/12 %` width and `100/8 %` height. On hover they animate `scale: 0 -> 1, opacity: 0 -> 1` with a diagonal stagger: `delayIn = (row + col) * 0.018s`, `delayOut = ((8 - row) + (12 - col)) * 0.012s`. Duration `0.25s`. This creates a pixel-dissolve reveal effect on hover.

3. **Magnetic squares**: 5-6 small black squares per card, absolutely positioned. They react to the cursor via `useMotionValue` + `useTransform` + `useSpring`: when the card is hovered, each square shifts toward the pointer proportionally (`dist * 40`). Spring config: `{ stiffness: 80, damping: 18, mass: 0.6 }`. When pointer leaves, they spring back to center (pointer resets to `0.5, 0.5`).

   Square positions per card (x%, y%, size px):
   ```
   HeartX:    (5,30,16), (10,42,10), (3,52,7), (80,70,14), (85,82,9), (78,60,6)
   Swave:     (82,55,16), (88,68,10), (78,72,7), (85,42,6), (90,80,8)
   EduSpark:  (4,24,16), (10,36,10), (2,44,7), (78,78,14), (84,88,8)
   Greenergy: (82,26,14), (88,38,10), (78,44,7), (84,54,5), (90,60,8)
   ```

4. **Plus button** (top right): `absolute right-4 top-4`, `h-7 w-7 items-center justify-center border border-white/30 text-xs text-white`, "+" text, `zIndex: 10`

5. **Info plate** (bottom left): `absolute bottom-0 left-0 bg-white px-4 pb-3 pt-2.5`, `zIndex: 20`, `maxWidth: "70%"`
   - Title: `text-[clamp(1.4rem,2.2vw,2rem)] font-normal leading-tight text-black`
   - Below: flex row with category (`text-[12px] text-black/60`) and year (`text-[12px] font-medium text-black`), `mt-1.5 gap-4`

---

**Footer Area:**
- Container: `mx-auto max-w-7xl px-6 pb-6 sm:px-10 lg:px-16`
- Flex row on desktop (`md:flex-row md:items-end md:justify-between`), column on mobile

**Left side** (`max-w-md`):
- Plus button: `mb-4 flex h-7 w-7 items-center justify-center border border-black/20 text-xs text-black`, "+"
- Paragraph: "We partner with ambitious brands that are ready to move beyond fragmented visuals and shallow quick fixes -- turning their identity, website, and messaging into one focused engine for growth." in `text-[14px] leading-[1.7] text-black/60`
- CTA button (`mt-6`): A `<button>` with `group flex items-end`:
  - Main label: `inline-flex items-center gap-[10px] border border-black/20 bg-black px-3 py-2 text-base font-medium text-white`, hover `bg-black/85`. Text: "Let's work together"
  - Arrow badge: A small `h-6 w-6` black square with `mb-6`, containing a diagonal arrow SVG (white, 16x16, viewBox `0 0 24 24`, path: `M18.75 6V15.75C18.75 15.949 18.671 16.14 18.53 16.28C18.39 16.421 18.199 16.5 18 16.5C17.801 16.5 17.61 16.421 17.47 16.28C17.329 16.14 17.25 15.949 17.25 15.75V7.81L6.53 18.53C6.39 18.671 6.199 18.75 6 18.75C5.801 18.75 5.61 18.671 5.47 18.53C5.329 18.39 5.25 18.199 5.25 18C5.25 17.801 5.329 17.61 5.47 17.47L16.19 6.75H8.25C8.051 6.75 7.86 6.671 7.72 6.53C7.579 6.39 7.5 6.199 7.5 6C7.5 5.801 7.579 5.61 7.72 5.47C7.86 5.329 8.051 5.25 8.25 5.25H18C18.199 5.25 18.39 5.329 18.53 5.47C18.671 5.61 18.75 5.801 18.75 6Z`). On group hover, the badge shifts up: `mb-6 -> mb-9`, with `transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]`

**Right side** (`flex-1 overflow-hidden md:ml-12`, with `border-t border-black/10` on mobile, no border on desktop):
- An infinite horizontal marquee (`overflow-hidden py-5`)
- Inner track: `marquee-projects flex w-max` (uses the CSS keyframe above, 28s duration)
- Pauses on hover
- 8 logos, doubled (16 total) for seamless loop. Each item: `flex shrink-0 items-center gap-2.5 px-8`
  - An SVG icon (black, varying per logo)
  - Name text: `whitespace-nowrap text-sm font-medium tracking-wide text-black/80`

**8 marquee logos** (name, icon type):
```
("Codecraft_", code), ("ennLabs", dots), ("GlobalBank", circle-ring),
("45 Degrees\u00b0", arrow), ("AlphaWave", wave-circle), ("Biosynthesis", lines),
("Boltshift", bolt), ("Clandestine", plus)
```

**SVG icon definitions** (all black stroke or fill):
- **code**: 22x18, viewBox `0 0 22 18`, stroke, strokeWidth 2, round caps. Two polylines `6,4 1,9 6,14` and `16,4 21,9 16,14`, one line `13,2 to 9,16`
- **dots**: 20x20, viewBox `0 0 20 20`, filled. 9 circles at grid positions `[3,10,17] x [3,10,17]`, radius `2.2`
- **circle-ring**: 22x22, viewBox `0 0 22 22`, stroke, strokeWidth 2. Two circles at `(11,11)` with radii `9` and `4`
- **arrow**: 18x18, viewBox `0 0 18 18`, stroke, strokeWidth 2, round caps. Line `2,16 to 16,2`, polyline `7,2 16,2 16,11`
- **wave-circle**: 22x22, viewBox `0 0 22 22`, stroke, strokeWidth 1.5. Circle `(11,11)` r=9, path `M5 11Q8 7 11 11Q14 15 17 11`
- **lines**: 24x18, viewBox `0 0 24 18`, stroke, strokeWidth 2.2, round caps. Three horizontal lines: `(0,3 to 24,3)`, `(6,9 to 24,9)`, `(0,15 to 18,15)`
- **bolt**: 14x20, viewBox `0 0 14 20`, filled. Polygon `8,0 0,11 6,11 6,20 14,9 8,9`
- **plus**: 18x18, viewBox `0 0 18 18`, filled. Two rects: `(7.5, 0, 3, 18)` and `(0, 7.5, 18, 3)`

**Bottom spacer**: `<div className="h-12" />`

---

**Dependencies:** React 18, Framer Motion (v12+), Tailwind CSS 3. Uses `useRef`, `useState`, `useCallback`, `useScroll`, `useTransform`, `useSpring`, `useMotionValue`, `useInView`, and `motion` from framer-motion. No other libraries.
````
