---
title: "Livarta Interiors"
category: Sections
subCategory: Hero
premium: true
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1782997120033-livarta_hero.webp
---

# Livarta Interiors

```text
# Luxury Watch Maison — Detailed Technical & Design Specification Prompt

This prompt serves as a complete blueprint to recreate the luxury watch website (e.g., "Maison Horlogerie"). Use these exact specifications to recreate the design, animations, and frontend architecture flawlessly.

## 1. Project Overview & Tech Stack
- **Framework:** React 18+ via Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v3) + PostCSS
- **Animation Engine:** GSAP (Core + ScrollTrigger) & Framer Motion
- **Smooth Scrolling:** Lenis (`lenis` package)
- **Icons:** `lucide-react`
- **Architecture:** Single-page scroll application featuring complex pinned horizontal/vertical scroll interactions, background morphs, and parallax effects.

## 2. Visual Design System

### Typography
- **Primary Font (Headings/Display):** `Bodoni Moda` (Serif)
  - Usage: Massive section titles, Collection Names, Key Headings.
  - Weights: `700` (Bold) to `900` (Black).
- **Secondary Font (Body/Labels):** `Inter` (Sans-Serif)
  - Usage: Subtitles, Navigation, Body copy, Specs, Buttons.
  - Weights: `300` (Light) for body text, `700` (Bold) for subtitles and buttons.

### Color Palette
- **Base Backgrounds:** Pure Black (`#000000`) and Deep Charcoal (`#050505`).
- **Text:** White (`#FFFFFF`) with opacities (`/40`, `/60`, `/70`, `/80`) for visual hierarchy.
- **Accents:** Amber/Gold (`#F59E0B` or `amber-500`) for vintage/heritage elements.

**Dynamic Collection Colors (Tailwind Config):**
```javascript
colors: {
  aura: { light: '#3B82F6', mid: '#0F172A', dark: '#020617' },
  elixir: { light: '#FDE68A', mid: '#D4A017', dark: '#2D1B0E' },
  verdant: { light: '#86EFAC', mid: '#14532D', dark: '#02110A' },
  rose: { light: '#F9A8D4', mid: '#EC4899', dark: '#4A044E' }
}
```

## 3. Core Architecture & Global Setup

### Lenis Smooth Scroll
Initialize Lenis at the `App` root with GSAP ticker integration:
- `duration: 1.2`
- `easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))`
- `smoothWheel: true`

### Navigation (`Navbar.tsx`)
- **State:** Fixed top layer (`z-50`).
- **Scroll Behavior:** Transitions from transparent to glassmorphism (`bg-white/5 backdrop-blur-md border-b border-white/10`) when scrolled past 50px.

## 4. Section-by-Section Specifications

### Section 1: Hero / Home (`Home.tsx`)
- **Layout:** `h-screen` `w-full` flex-centered.
- **Background:** Full-screen looping video (`hero_bg_watch.mp4`) with a linear gradient overlay (`from-black/80 via-black/40 to-black`).
- **Typography:** 
  - Subtitle: "The Pinnacle of Swiss Watchmaking" (Inter, text-sm, tracking-[0.4em], text-white/60).
  - Title: "Time Is An Art" (Bodoni Moda, massive 5xl to 9xl, flex-col stacked).
- **Animations (GSAP):**
  - Titles fade and slide up (`y: 100`, `opacity: 0` to `y: 0`, `opacity: 1`) staggered.
  - Parallax: The entire container scales down (`scale: 0.85`) and fades out on scroll via ScrollTrigger.

### Section 2: Collections Showcase (`CollectionsShowcase.tsx`)
- **Layout:** Pinned full-screen layout. ScrollTrigger pins the container for `+=1200px` to allow scrolling through 4 collections.
- **Mechanism:** As the user scrolls, `self.progress` maps to an `activeIndex` (0 to 3), triggering Framer Motion `AnimatePresence` swaps.
- **Left Column:** Collection Number, Name (Bodoni), Headline (Inter), Button.
- **Center Column:** Massive absolute centered image of the watch (height up to 90%), dropping in with `y: "100%", opacity: 0` and easing out.
- **Right Column:** Description and a 2x2 grid of specs (Movement, Power Reserve, Case Material, Water Resistance).
- **Background Morph & Particles:** A dynamic background div transitions colors based on the active index, overlaying floating particle SVGs (stars, gold dust, etc.).

**Collections Data:**
1. **ROYAL OCEAN** (Blue/Aura) — "Precision Beyond The Horizon"
2. **SAHARA HERITAGE** (Gold/Elixir) — "Timeless As The Desert Winds"
3. **ROSE ELEGANCE** (Rose/Rose) — "Luxury Worn Like Jewelry"
4. **NOIR CRIMSON** (Red) — "Built For Passion And Power"

### Section 3: Heritage (`Heritage.tsx`)
- **Layout:** Asymmetrical side-by-side flexbox. `bg-[#050505]`.
- **Left Side (Image):** A 50vh-80vh tall container with an `inset` clip-path mask reveal. Contains an image (`heritage.png`) with `grayscale` and `mix-blend-luminosity`. Parallax `y: "20%"` on scroll.
- **Right Side (Text):** 
  - Eyebrow: "Since 1884" (Amber/Gold tracking-wide).
  - Heading: "A Legacy of Perfection" (Bodoni).
  - Paragraph: Explaining the history.
  - Staggered GSAP reveal for all text elements.

### Section 4: Craftsmanship (`Craftsmanship.tsx`)
- **Layout:** High-height section (`150vh`) relying on `sticky top-0 h-screen` to keep content in frame while scrolling.
- **Background Layer:** Macro shot of watch gears (`craftsmanship.png`) scaling up and moving `y: "20%"` via GSAP scrub. Includes a rotating dashed border element (`animate-[spin_120s_linear_infinite]`) to simulate clockwork.
- **Foreground Text:** Center-aligned "Unseen Precision" that fades in at `start: "top 60%"` and fades out at `start: "bottom 80%"` using ScrollTrigger scrub.

### Section 5: Gallery (`Gallery.tsx`)
- **Layout:** Horizontal scroll section powered by GSAP. A standard `h-screen` container pinned using `ScrollTrigger`, containing a flex container that moves left (`x: -totalWidth`) based on scrub.
- **Velocity Skew Effect:** Implemented via `ScrollTrigger` and a `gsap.quickSetter` that applies `skewX` to `.gallery-item` based on scroll velocity (clamped between -15 and 15 degrees).
- **Fullscreen Modal:** Clicking an image opens a modal using Framer Motion `AnimatePresence`. The modal features left/right navigation arrows, a prominent close button, and a borderless image display with descriptive text beneath it.

### Section 6: Contact & Footer (`Contact.tsx`)
- **Animations:** Uses `framer-motion` combined with `useInView` from `react-intersection-observer` (threshold 0.3) for smooth `y: 30` fade-ins of form sections.
- **Form Layout:** Dark luxury aesthetic featuring transparent inputs with `border-b border-white/20`. Includes Name, Email, and Boutique Location (Geneva, Paris, New York, Tokyo) dropdown.
- **Footer:** A simple flex row displaying "Maison", social links (Instagram, Journal, Legal), and copyright text.

## 5. Animations & Micro-interactions
- **Custom Cursor:** Implement a custom fixed DOM element tracking mouse position with spring physics or GSAP `quickTo`, blending into the black background.
- **Buttons:** Pill-shaped, transparent borders (`border-white/20`), on hover transition to white background with black text and scale `1.05`.
- **Stagger & Masks:** Rely heavily on GSAP `clip-path: inset(...)` for image reveals, and `y: 50, opacity: 0` for text stagger.

## 6. Asset Specifications

Ensure 100% accuracy for the following video and image sources used throughout the site:

**Hero/Home Video (Background):**
- `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_bg_watch.mp4`

**Collection Watches (Massive center images):**
1. Royal Ocean (Blue): `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/watch_blue.png`
2. Sahara Heritage (Gold): `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/watch_desert.png`
3. Rose Elegance (Rose): `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/watch_rose.png`
4. Noir Crimson (Red): `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/watch_sensual.png`

**Static Local Images (Placed in `/public/images/`):**
- Heritage Image: `/images/heritage.png` (Used as the masked reveal background)
- Craftsmanship Image: `/images/craftsmanship.png` (Macro watch movement used for parallax background)
- Gallery Items:
  - `/images/gallery1.png`
  - `/images/gallery2.png`
  - `/images/gallery3.png`
  - `/images/gallery4.png`
  - `/images/gallery5.png`

## 7. Performance & Optimization
- **Lenis + GSAP:** Ensure `gsap.ticker.lagSmoothing(0)` and register `lenis.raf(time * 1000)` into the GSAP ticker to prevent jitter.
- **Images/Videos:** Use WebP format and compressed `.mp4`. Implement `pointer-events-none` on background overlays and particles to avoid repaints during scroll.
- **State Updates:** Inside the Pinned Collection section, wrap the `ScrollTrigger.create` `onUpdate` index change in a ref check to prevent unnecessary React renders on every pixel scroll.

## 8. Responsive Behavior
- Heavily utilize Tailwind's `md:` and `lg:` prefixes.
- On mobile: Collections Showcase stacks vertically (Image first, text below), particle counts are reduced, font sizes drop from `text-8xl` down to `text-5xl`. Parallax values are minimized to preserve layout stability on touch devices.

```
