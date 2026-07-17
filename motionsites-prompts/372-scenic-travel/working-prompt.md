Here is a complete, drop-in prompt you can hand to a fresh model to reproduce the site byte-for-byte. It captures the stack, structure, animations, every CloudFront URL, and the exact CSS quirks.

---

## Master Recreation Prompt

Build a Next.js 16.2.6 (App Router, webpack — not Turbopack) site for a luxury travel concept. Stack and conventions below are mandatory. Reproduce file paths, classNames, animation timings, and copy verbatim.

### Stack & dependencies
- `next` `16.2.6`, `react` `19.2.4`, `react-dom` `19.2.4`
- `framer-motion` `^12.38.0`
- `lucide-react` `^1.14.0`
- `gsap` `^3.15.0` (installed but unused — keep it in deps)
- Tailwind v4 (`tailwindcss` + `@tailwindcss/postcss`), TypeScript 5.9.3, ESLint 9, `eslint-config-next` 16.2.6

`package.json` scripts:
```json
"dev": "next dev --webpack",
"build": "next build --webpack",
"start": "next start",
"lint": "eslint"
```

`next.config.ts` is empty default (`{}`). No `images.remotePatterns`.

### File layout
```
app/
  layout.tsx
  page.tsx
  globals.css
  not-found.tsx
  [...catchAll]/page.tsx
  destinations/
    page.tsx
    [id]/page.tsx
  components/
    Navbar.tsx
  sections/
    HeroSection.tsx
    DestinationsSection.tsx
    TourDetailSection.tsx
  lib/
    tours.ts
public/
  img1.jpg … img10.jpg
```

### Global constants (used everywhere)
```ts
const goldEase = [0.76, 0, 0.24, 1] as const
```
Background color throughout: `#f3ebe4`. Selection: `bg-black text-white`.

### `app/layout.tsx`
- Metadata title: `"Travel — Discover the World"`
- Description: `"Escape the ordinary and find inspiration in the most breathtaking corners of the globe."`
- Loads Google Fonts Inter (weights 300, 400, 500) via `<link rel="preconnect">` + stylesheet in `<head>`
- `<body>` has `className="h-full antialiased"` and inline `style={{ fontFamily: "'Inter', sans-serif" }}`
- Renders `<Navbar />` then `{children}`. `<html lang="en" className="h-full">`.

### `app/globals.css` (exact content)
```css
@import "tailwindcss";

* { margin: 0; padding: 0; box-sizing: border-box; -webkit-font-smoothing: antialiased; }

html, body { height: 100%; background-color: #f3ebe4; font-family: 'Inter', system-ui, sans-serif; }

.destinations-page { overflow-y: auto; }

.hero-container { position: relative; width: 100vw; height: 100vh; display: flex; }
.left-bg  { width: 50vw; height: 100%; background-color: #f3ebe4; }
.right-bg { width: 50vw; height: 100%; position: relative; display: flex; justify-content: flex-end; align-items: flex-end; padding: 30px; }
.bg-image-wrapper { position: absolute; inset: 0; z-index: 0; }

.text-layer-wrapper { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; pointer-events: none; z-index: 20; }
.text-black-side { color: #1c1c1c; clip-path: inset(0 50% 0 0); }
.text-white-side { color: white;   clip-path: inset(0 0 0 50%); }

.gem-card { position: relative; z-index: 30; background: white; border-radius: 32px; padding: 16px; display: flex; gap: 24px; width: 100%; height: 200px; box-shadow: 0 25px 60px -15px rgba(0,0,0,0.15); }
.gem-image-box { width: 200px; height: 100%; border-radius: 20px; }
.gem-content { display: flex; flex-direction: column; justify-content: space-between; padding: 8px 0; }
#explorebtn { padding: 12px 24px; }

.footerLink { color: #000; }
.footerLink:hover { margin-left: 10px; color: #555; }

#destcontainer { padding: 30px; padding-top: 100px; }
#Popular { margin-bottom: 1rem; }
#infocard { padding: 24px; gap: 24px; }
#tourcontainer { padding: 30px; }
#bookbtn { padding: 8px; }

@media (max-width: 1000px) {
  .gem-image-box { display: none; }
  .gem-content p { font-size: 15px; }
  #destcontainer { padding: 20px; padding-top: 80px; }
}

@media (max-width: 850px) {
  #topContent { padding: 6px; gap: 10px; }
  .left-bg, .text-black-side { display: none; }
  .right-bg { width: 100vw; padding: 0; }
  .text-white-side { clip-path: none; width: 100vw; color: white; }
  .gem-card { max-width: 100%; flex-direction: column; border-radius: 40px 40px 0 0; padding: 24px; gap: 15px; position: fixed; bottom: 0; left: 0; right: 0; box-shadow: 0 -15px 50px rgba(0,0,0,0.15); }
  .gem-image-box { display: none; }
  .gem-content { width: 100%; text-align: left; }
  .gem-content p { font-size: 12px; }
  #destcontainer { padding: 10px; padding-top: 120px; }
}

@media (max-width: 500px) {
  #tourcontainer { padding: 10px; padding-top: 100px; justify-content: center; }
  #searchInput { margin-bottom: 3rem; }
}
```

### `app/components/Navbar.tsx`
Client component. Imports `useState` from react, `motion, AnimatePresence` from framer-motion, `Star, Menu, X` from lucide-react, `usePathname` from next/navigation, `Link` from next/link.

- `desktopLinks`: About `/`, Destinations `/destinations`, Booking `/booking`, FAQ `/faq`, Account `/account`
- `mobileLinks`: same, minus Account
- `pathname === '/'` → `isHome`. `pathname.startsWith('/destinations/') && pathname !== '/destinations'` → `isTourDetail`.
- **Star icon** (size 30, `fill="currentColor"`, `strokeWidth={0}`): fixed top-left at `top:30, left:30`, `z-1001`, color logic:
  - menu open → black
  - tour detail → white
  - home → `max-[850px]:text-white min-[851px]:text-black`
  - else → black
- **Hamburger** (Menu, size 32): fixed `top-7.5 right-7.5 z-300`, white on home/tour-detail else black. Hover scale-110 with 300ms ease-out.
- **Mobile overlay** (AnimatePresence): full-screen white panel slides from `y:'-100%'` to `0`, duration 0.75s, goldEase. Close X (size 32) top-right, `hover:rotate-90`. Links centered, `text-5xl md:text-7xl font-light tracking-tighter hover:italic`, each animates from `{opacity:0, y:28}` to `{0,0}` with delay `0.3 + i*0.07`, duration 0.55s. If active, prepend `<span className="mr-1">/</span>`.
- **Desktop nav** (fixed `bottom-10 left-10`, hidden by default, `min-[851px]:flex` flex-col gap-1, but only when NOT tour detail): `text-[13px] tracking-widest font-medium`, each item animates `{y:20, opacity:0}` → `{0,1}`, delay `0.4 + i*0.08`, duration 0.6s. Active link prefixed with `<span className="mr-0.5">/</span>`.

### `app/sections/HeroSection.tsx`
Client component. Imports `motion` from framer-motion, `ArrowRight` from lucide-react, `Image` from next/image, `Link` from next/link, plus `useEffect, useRef` from react.

A `HeroContent` subcomponent (used twice, mirrored via clip-path):
- Wrapper div `id="topContent"`, `flex flex-col items-center justify-center transform -translate-y-[40px] md:-translate-y-[20px] px-6`
- Two `<motion.h1>` lines wrapped in `overflow-hidden` divs:
  - `"Discover the beauty"` (initial `y:'110%'` → `y:0`, duration 1.1s, goldEase)
  - `"of the world around"` (same, but `delay: 0.08`, parent div has `mb-8`)
  - Both: `font-light leading-[1.05] tracking-[-0.04em] text-[clamp(42px,6vw,80px)]`
- A `<motion.p>` body: copy `"Escape the ordinary and find inspiration in the most breathtaking corners of the globe. We curate unique travel experiences tailored to your rhythm and spirit."`. Class `text-[clamp(14px,1vw,16px)] leading-[1.7] max-w-[550px] mx-auto opacity-80 font-light tracking-wide`. Initial `{opacity:0, y:18}` → `{1,0}`, duration 0.9s, delay 0.55s.

Default export `HeroSection`:
- `videoRef` for the hero video. `useEffect`: set `v.muted = true`, call `v.play().catch(()=>{})` immediately and on `loadeddata`. Remove listener on cleanup. (This defeats Safari/Chrome autoplay edge cases.)
- Outer div: `bg-[#f3ebe4] selection:bg-black selection:text-white min-h-screen overflow-hidden font-sans`.
- `<main className="hero-container">` with:
  1. `<div className="left-bg" />`
  2. `<div className="right-bg">`:
     - `.bg-image-wrapper` containing a `<motion.div className="relative w-full h-full">` (initial `scale:1.06` → `scale:1`, duration 2.2s, goldEase) wrapping a `<video>`:
       - `src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_220929_e6719f25-1ba0-45c2-97fc-0148805d9fb9.mp4"`
       - `autoPlay loop muted playsInline preload="auto"`, `ref={videoRef}`
       - Class `absolute inset-0 w-full h-full object-cover object-left`
     - Sibling `<div className="absolute inset-0 bg-black/20 md:bg-transparent" />` (mobile darkening only)
     - **Gem card** `<motion.div className="gem-card">` (initial `{y:60, opacity:0}` → `{0,1}`, duration 1.1s, delay 0.5s):
       - `.gem-image-box relative shrink-0 overflow-hidden` containing a `<video>`:
         - `src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260509_073207_eeb9b7e5-7df4-4204-80c2-163eb46466e8.mp4"`
         - `autoPlay loop muted playsInline preload="auto"`
         - Class `absolute inset-0 w-full h-full object-cover`
       - `.gem-content gap-[20px]` with:
         - `<div className="mb-5 md:mb-0">`: `<h3 className="font-semibold text-[#1c1c1c] text-xl md:text-base mb-2">Hidden Gems</h3>` and `<p className="text-gray-500 text-xs leading-relaxed">Explore our handpicked collection of authentic stays and secluded retreats, where nature meets comfort in perfect harmony.</p>`
         - `<Link id="explorebtn" href="/destinations" className="bg-black text-white px-8 py-4 md:px-5 md:py-2.5 rounded-full text-xs flex items-center gap-2 self-start hover:bg-zinc-800 transition-all duration-300 active:scale-95 cursor-pointer">Explore more <ArrowRight size={14} /></Link>`
  3. Two text layers stacked:
     - `<div className="text-layer-wrapper text-black-side"><HeroContent /></div>`
     - `<div className="text-layer-wrapper text-white-side"><HeroContent /></div>`
     - The clip-path CSS makes the left half show black text and the right half show white — same headline, two colors, perfectly aligned.

### `app/sections/DestinationsSection.tsx`
Client component. State `query`. Filters `tours` by `name.toLowerCase().includes(query.toLowerCase())`.

- Outer: `bg-[#f3ebe4] min-h-screen font-sans selection:bg-black selection:text-white`
- `<div id="destcontainer" className="transition-all duration-500">`
  - Search row (`<motion.div>` initial `{opacity:0, y:20}` → `{1,0}`, duration 0.8s) wrapping `<input id="searchInput" placeholder="Find your tour" className="w-full max-w-2xl bg-transparent text-[clamp(24px,4vw,42px)] font-light tracking-[-0.02em] outline-none placeholder-black/20 caret-black/40 text-center" />`
  - `<motion.p id="Popular" className="text-sm font-medium tracking-widest mb-[15px]">Popular</motion.p>` (initial `opacity:0` → `0.6`, duration 0.6s, delay 0.2s)
  - `<div className="flex gap-5 overflow-x-auto pb-6 no-scrollbar">` with empty-state `<p className="text-black/40 text-sm pt-4">No tours found for "{query}"</p>` then card map. Each `<motion.div>` has `style={{ width: tour.w, flexShrink: 0 }}`, animates `{opacity:0, y:30}` → `{1,0}` with `delay: 0.1 + i*0.07`, duration 0.55s. Inside is a `<Link href={`/destinations/${tour.id}`} className="flex flex-col gap-3 group">` containing:
    - Media box `relative rounded-2xl overflow-hidden` with inline `style={{ height: tour.imgH }}`. **If `tour.video`**, render a paused `<video src={\`${tour.video}#t=0.1\`} muted playsInline preload="metadata">` with class `absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out`. **Else** `<Image src={tour.image} fill alt={tour.name}>` with the same hover transform classes.
    - Caption: `<h3 className="text-sm font-medium leading-tight">{name}</h3><p className="text-sm text-black/45 mt-1">{priceDisplay} / person</p>`
- Append a `<style jsx global>` block hiding scrollbars on `.no-scrollbar`.

### `app/sections/TourDetailSection.tsx`
Client component, accepts `{ tour: Tour }`.

- Outer: `<div id="tourcontainer" className="relative min-h-screen w-full flex items-end justify-end font-sans selection:bg-black selection:text-white overflow-hidden p-4 md:p-10">`
- Background: `<div className="absolute inset-0 z-0 overflow-hidden">` containing `<motion.div className="relative w-full h-full">` (scale 1.06 → 1, duration 2.2s).
  - **If `tour.video`**: `<video src={tour.video} autoPlay loop muted playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover" />`. **No overlay, no brightness filter.**
  - **Else**: `<Image src={tour.image} fill alt={tour.name} className="object-cover brightness-90" priority />` AND a sibling overlay `<div className="absolute inset-0 bg-black/10 md:bg-transparent md:bg-gradient-to-r from-black/20 to-transparent" />` (only when no video).
- Info card `<motion.div id="infocard" className="relative z-10 w-full max-w-[400px] bg-[#f3ebe4] rounded-[20px] shadow-2xl overflow-y-auto max-h-[90vh] no-scrollbar sm:gap-6 gap-2 flex flex-col">` (initial `{opacity:0, x:40}` → `{1,0}`, duration 0.8s):
  1. Header block `flex flex-col gap-[10px]`:
     - `<Link href="/destinations" className="inline-flex items-center gap-2 text-sm text-black px-4 py-2 rounded-full transition-all"><ArrowLeft size={15} />Back to explore</Link>`
     - `<h1 className="text-[20px] font-semibold text-[#1c1c1c] mb-4 tracking-tight">{name}</h1>`
  2. Description `<p className="sm:text-[15px] text-[12px] text-black/70 leading-relaxed mb-8">{description}</p>`
  3. Friends row `flex items-center gap-4 mb-10`: stacked avatar circles (3 of `tour.images`) — each `relative w-9 h-9 rounded-full overflow-hidden border-2 border-[#f3ebe4] shadow-sm`, `marginLeft: i===0 ? 0 : -12`, `zIndex: 3-i`, `<Image fill object-cover>`. Then a `+{friends-3}` chip `w-9 h-9 rounded-full bg-black text-white text-[11px] font-bold flex items-center justify-center border-2 border-[#f3ebe4]`. Trailing label `<span className="text-[13px] font-medium text-black/60">{friends} friends been there</span>`
  4. Three info rows in `space-y-4 mb-10 gap-2 flex flex-col`. Each `flex justify-between items-center pb-4 border-b border-black/10` (last row uses `pb-2` and no border):
     - `Avg cost per trip` → `priceDisplay`
     - `Best time to visit` → `bestTime`
     - `Visa` → `<span className="text-blue-600">🇪🇺</span> {visa}`. Labels: `text-[13px] text-black/40 font-medium uppercase tracking-wider`. Values: `text-sm font-bold text-black/90`.
  5. `grid grid-cols-3 gap-3 mb-8` of three thumbnails — `relative aspect-square rounded-[20px] overflow-hidden group` with `<Image fill className="object-cover transition-transform duration-500 group-hover:scale-110">`.
  6. CTA `<motion.button id="bookbtn" whileHover={{ y: -2 }} className="w-full bg-[#0f1115] text-white rounded-[24px] text-[15px] font-bold tracking-tight hover:bg-black active:scale-[0.98] transition-all duration-300">Book this tour</motion.button>`
- Append the same `<style jsx global>` no-scrollbar block.

### `app/lib/tours.ts`
```ts
export type Tour = {
  id: string
  image: string
  video?: string
  images: string[]
  name: string
  description: string
  price: number
  priceDisplay: string
  friends: number
  bestTime: string
  visa: string
  imgH: number
  w: number
}

export const tours: Tour[] = [
  {
    id: 'cold-islands-norway',
    image: '/img1.jpg',
    video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_071134_9cc2f2d8-a599-4a73-8c89-6eb4af170352.mp4',
    images: ['/img4.jpg','/img6.jpg','/img9.jpg'],
    name: 'Cold Islands Norway',
    description: "Experience the raw beauty of Norway's remote arctic islands. From dramatic fjords to the magical northern lights, Norway offers a perfect blend of wilderness and Scandinavian culture.",
    price: 1800, priceDisplay: '$1,800', friends: 8, bestTime: 'Jun - Sep', visa: 'Schengen / EU', imgH: 230, w: 200,
  },
  { id: 'serengeti-tanzania', image: '/img2.jpg', images: ['/img5.jpg','/img7.jpg','/img8.jpg'],
    name: 'Serengeti National Park, Tanzania',
    description: 'Witness the greatest wildlife spectacle on Earth. The Serengeti offers unmatched safari experiences, from the Great Migration to close encounters with the Big Five across endless golden plains.',
    price: 2400, priceDisplay: '$2,400', friends: 14, bestTime: 'Jul - Oct', visa: 'Visa on arrival', imgH: 310, w: 340 },
  { id: 'switzerland-alps', image: '/img3.jpg', images: ['/img1.jpg','/img6.jpg','/img10.jpg'],
    name: 'Switzerland',
    description: 'Experience the pinnacle of alpine serenity. From the pristine peaks of the Jungfrau region to the crystal-clear waters of Lake Brienz, Switzerland offers a perfect blend of high-end comfort and untouched nature.',
    price: 3200, priceDisplay: '$3,200', friends: 12, bestTime: 'May - Oct', visa: 'Schengen / EU', imgH: 360, w: 250 },
  { id: 'norway-coastal', image: '/img4.jpg', images: ['/img1.jpg','/img9.jpg','/img6.jpg'],
    name: 'Cold Islands Norway',
    description: "Sail through Norway's stunning coastal landscapes where turquoise waters meet towering cliffs. A journey through some of the most dramatic scenery on the planet.",
    price: 1800, priceDisplay: '$1,800', friends: 6, bestTime: 'May - Aug', visa: 'Schengen / EU', imgH: 215, w: 210 },
  { id: 'mountain-valleys-iceland', image: '/img6.jpg', images: ['/img5.jpg','/img3.jpg','/img9.jpg'],
    name: 'Mountain Valleys, Iceland',
    description: "Explore Iceland's surreal volcanic landscapes, cascading waterfalls and geothermal wonders. A land of fire and ice unlike anywhere else on Earth.",
    price: 2100, priceDisplay: '$2,100', friends: 9, bestTime: 'Jun - Aug', visa: 'Schengen / EU', imgH: 250, w: 235 },
  { id: 'hidden-coves-croatia', image: '/img7.jpg', images: ['/img8.jpg','/img2.jpg','/img5.jpg'],
    name: 'Hidden Coves, Croatia',
    description: "Discover Croatia's secluded Adriatic coastline — crystal clear waters, ancient walled cities and charming fishing villages tucked between dramatic limestone cliffs.",
    price: 1950, priceDisplay: '$1,950', friends: 11, bestTime: 'May - Sep', visa: 'Schengen / EU', imgH: 300, w: 220 },
  { id: 'desert-dunes-morocco', image: '/img8.jpg', images: ['/img2.jpg','/img7.jpg','/img10.jpg'],
    name: 'Desert Dunes, Morocco',
    description: "Journey into the Sahara's vast golden dunes, ancient medinas and vibrant souks. Morocco blends Berber, Arab and French influences into one unforgettable sensory experience.",
    price: 1600, priceDisplay: '$1,600', friends: 7, bestTime: 'Oct - Apr', visa: 'Visa free / 90 days', imgH: 240, w: 215 },
]

export function getTourById(id: string): Tour | undefined {
  return tours.find(t => t.id === id)
}
```

### Routing pages
- `app/page.tsx` → `import HeroSection from './sections/HeroSection'; export default function Home(){ return <HeroSection /> }`
- `app/destinations/page.tsx` → renders `<DestinationsSection />`
- `app/destinations/[id]/page.tsx` is `async`, awaits `params: Promise<{id:string}>`, calls `getTourById`, calls `notFound()` if missing, otherwise renders `<TourDetailSection tour={tour} />`
- `app/[...catchAll]/page.tsx` → `import { notFound } from 'next/navigation'; export default function CatchAll(){ notFound() }`

### `app/not-found.tsx`
Client component, full-screen `bg-[#f3ebe4]` flex center. Three motion blocks (all goldEase):
- Big `404`: `text-[120px] font-light leading-none tracking-[-0.04em] text-black/10 select-none`, `{opacity:0, y:30}`→`{1,0}`, duration 1s
- `Page not found`: `text-2xl font-light tracking-tight text-black mt-4 mb-3`, delay 0.15s, duration 0.8s
- `This page doesn't exist yet.`: `text-sm text-black/40 mb-10`, delay 0.25s, duration 0.7s
- `Back to home` link to `/`: `text-[13px] tracking-widest font-medium text-black border-b border-black/20 pb-0.5 hover:border-black transition-colors duration-200`, delay 0.35s

### Assets
Put any 10 photographs into `public/` named `img1.jpg` through `img10.jpg` (the gallery references all of them).

### CloudFront video URLs (use exactly these strings)
1. **Hero background video** — used in `HeroSection.tsx` only:
   `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_220929_e6719f25-1ba0-45c2-97fc-0148805d9fb9.mp4`
2. **Hidden Gems card video** — used inside `.gem-image-box` in `HeroSection.tsx`:
   `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260509_073207_eeb9b7e5-7df4-4204-80c2-163eb46466e8.mp4`
3. **First-tour video** — `tours[0].video` (Cold Islands Norway). On `/destinations` rendered paused with `#t=0.1` as a still frame. On `/destinations/cold-islands-norway` rendered as autoplaying full-bleed background, **no overlay, no brightness filter**:
   `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_071134_9cc2f2d8-a599-4a73-8c89-6eb4af170352.mp4`

### Behavioral requirements (do not omit)
- All three videos: `autoPlay loop muted playsInline preload="auto"` (the destinations card uses `preload="metadata"` and no autoplay — it's a still frame via `#t=0.1`).
- Hero video focal point is left-aligned: `object-cover object-left`.
- Hero video has a defensive `useEffect` that forces `muted = true` and re-calls `play()` on `loadeddata`.
- The split-screen headline is two identical `HeroContent` components clipped via `clip-path: inset(0 50% 0 0)` (black, left half) and `clip-path: inset(0 0 0 50%)` (white, right half). Below 850px the black side is hidden and the white side fills the viewport.
- Active route in Navbar is prefixed with `/` and a small margin.
- Tour detail with a video has *no* darkening overlay and *no* `brightness-90`. Image-backed tours keep both.