---
title: "Élysian Hero"
category: Sections
subCategory: Hero
premium: true
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781543033714-Élysian_Hero.webp
---

# Élysian Hero

```text
# System Prompt & Instructions
Act as an elite, professional web designer and frontend developer. Your objective is to flawlessly recreate the "Élysian Élégance" luxury perfume website. Treat the following prompt as your complete technical and design blueprint. Adhere strictly to the provided specifications for the design system, animations, and frontend architecture.

## 1. Project Overview & Tech Stack
- **Framework:** React 18+ via Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v3) + PostCSS
- **Animation Engine:** Framer Motion
- **Icons:** `lucide-react`
- **Scroll Detection:** `react-intersection-observer`
- **Architecture:** Single-page scroll-snap application with sequenced entrance animations and dynamic background morphing.

## 2. Visual Design System

### Typography
- **Primary Font (Headings/Display):** `Bodoni Moda` (Serif)
  - Usage: Subtitles, Navigation Logo, Footer Headings.
  - Weights: `700` (Bold).
- **Secondary Font (Body/Huge Background Text):** `Inter` (Sans-Serif)
  - Usage: Massive background text, Body descriptions, Navigation links, Buttons.
  - Weights: `300` (Light) for body text, `500` (Medium) for buttons, `900` (Black) for the huge background text.

### Color Palette & Gradients
The application background seamlessly morphs between these four radial gradients using CSS `transition-all duration-[1500ms] ease-in-out`:

1. **AURA (Blue):** `radial-gradient(circle at top, #3B82F6 0%, #0F172A 45%, #020617 100%)`
2. **ELIXIR (Gold):** `radial-gradient(circle at center, #FDE68A 0%, #D4A017 35%, #2D1B0E 100%)`
3. **VERDANT (Green):** `radial-gradient(circle at center, #86EFAC 0%, #14532D 50%, #02110A 100%)`
4. **ROSÉ (Pink):** `radial-gradient(circle at center, #F9A8D4 0%, #EC4899 40%, #4A044E 100%)`

- **Text Colors:** White (`#FFFFFF`) with varying opacities (`/90` for primary text, `/70` for secondary).
- **Buttons:** White background with Black text.

## 3. Layout Structure & Grid System

### Core Application Layout
- The `App` root container is full-height (`100vh`), with `overflow-y-auto`.
- **Scrolling Behavior:** Native CSS scroll snapping is applied via `snap-y snap-mandatory` on the root container, and `snap-center` on each 100vh section to ensure a "single stroke" snapping scroll.

### Section Layout (Centralized Hero)
Each `FragranceSection` is strictly `100vh`, `w-full`, and perfectly centered.
- **Layer 0 (Deep Background):** Particle system layer.
- **Layer 1 (Huge Background Text):** Centered via a full-bleed flex wrapper (`absolute inset-0 flex items-center justify-center`). This avoids CSS transform conflicts with Framer Motion. Font size `25vw` (desktop) and `35vw` (mobile). Font: `Inter`, Black, negative letter spacing (`tracking-tighter`), Opacity 90%, centered perfectly behind the bottle.
- **Layer 2 (The Product):** Centered via a full-bleed flex wrapper (`absolute inset-0 flex items-center justify-center`). Bottle height `85vh` (desktop) and `50vh` (mobile). Has a heavy drop-shadow.
- **Layer 3 (Bottom Details):** Pinned to the bottom center (`bottom-8` to `bottom-12`). Contains the Serif Subtitle, Sans-serif light description (max-width `max-w-2xl`), and the CTA button.

## 4. UI Components & Styling Details

### Navigation (`Navigation.tsx`)
- **Desktop:** Fixed top. Uses a **Liquid Glass** effect on scroll. Transitions from a transparent full-width bar (`max-w-7xl py-6`) to a floating pill shape (`max-w-4xl rounded-full`) when scrolled past 50px. The scrolled state features heavy glassmorphism (`bg-white/10 backdrop-blur-2xl`), delicate borders (`border-white/20`), and complex inset/drop shadows simulating the volume of liquid glass.
- **Logo:** Center absolute, `text-3xl tracking-[0.2em]` with a subtle drop shadow to maintain contrast against the background.
- **Mobile Menu:** Hamburger icon triggers a fixed, full-screen `bg-black/95 backdrop-blur-lg` overlay with `opacity` transition. Links are centered, `text-xl tracking-[0.2em]`.

### CTA Buttons
- Pill-shaped (`rounded-full`), white background, black text.
- `px-10 py-4`, `text-sm`, `tracking-widest`, `uppercase`.
- Hover state: `scale-105`, `hover:bg-white/90`, and an intense shadow (`shadow-[0_0_30px_rgba(255,255,255,0.3)]`).

## 5. Animations & Micro-interactions

### Section Entrance Sequence (Framer Motion)
Uses `AnimatePresence` triggered by an Intersection Observer (`inView` threshold: 0.5) to run a strict sequence of smooth entrances when a section snaps into view:
1. **Background Morph:** Triggers immediately (Duration `1.5s`).
2. **Layer 1 (Huge Text):** Enters at `delay: 0.4s`. Initial `{ scale: 0.9, opacity: 0, y: 50 }`, Animate `{ scale: 1, opacity: 1, y: 0 }`. Duration `1.2s`, custom ease `[0.25, 0.1, 0.25, 1]`.
3. **Layer 2 (Bottle):** Enters at `delay: 0.6s`. Initial `{ scale: 0.9, opacity: 0, y: 80 }`, Animate `{ scale: 1, opacity: 1, y: 0 }`. Duration `1.2s`.
4. **Layer 3 (Bottom Text/CTA):** Enters at `delay: 0.8s`. Initial `{ opacity: 0, y: 60 }`, Animate `{ opacity: 1, y: 0 }`. Duration `1.2s`.

### Exit Sequence
When scrolled out of view, elements exit upwards (`y: -50`, `y: -80`, `y: -60`) while fading and scaling down slightly, giving a scroll-directional feel.

### Floating Product Animation
Inside `Bottle.tsx`, the bottle loops infinitely:
- `animate={{ y: [0, -15, 0] }}`
- `transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}`

### Particle Systems
25 absolutely positioned DOM elements per section managed by Framer Motion traversing from bottom to top:
- Elements vary by section: `stars` (white blur), `gold` (yellow blur), `leaves` (🍃), `petals` (🌸 drop shadowed emojis).
- Uses `useMemo` to generate randomized arrays of particle configurations (size, xDrift, rotation, durations).
- Infinite loop moving from `y: '10vh'` to `y: '-110vh'` with randomized X rotation and drifting (`xDrift`).

## 6. Section-by-Section Content Hierarchy

**1. AURA**
- Subtitle: "Beyond Fragrance. A Universe Captured In Glass."
- Description: "An ethereal composition inspired by moonlit oceans, midnight skies, and celestial elegance. Crafted for those who leave a lasting impression."
- CTA: "Discover Aura"
- Image: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/parfume_blue.png`
- Particles: `stars`

**2. ELIXIR**
- Subtitle: "Liquid Gold. Timeless Seduction."
- Description: "Bright citrus unfolds into soft florals before settling into an unforgettable trail of sophistication. A fragrance designed for modern icons."
- CTA: "Experience Elixir"
- Image: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/parfume_gold.png`
- Particles: `gold`

**3. VERDANT**
- Subtitle: "Nature Reimagined."
- Description: "Fresh citrus and green accords merge with modern elegance to create a fragrance that feels alive. Pure. Vibrant. Distinctive."
- CTA: "Explore Verdant"
- Image: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/parfume_green.png`
- Particles: `leaves`

**4. ROSÉ**
- Subtitle: "The Art Of Romance."
- Description: "Delicate petals, radiant florals, and velvet softness unite in a fragrance crafted to enchant every moment. Elegant. Feminine. Eternal."
- CTA: "Discover Rosé"
- Image: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/parfume_pink.png`
- Particles: `petals`

## 7. Responsive Behavior
- **Desktop (>768px):** Bottle height `85vh`, Background text `25vw`, Navigation standard links.
- **Mobile (<768px):** Bottle height `50vh` (to avoid overlapping bottom text), Background text `35vw`, Navigation collapses into a hamburger icon overlay. Padding adjusts from `px-12` to `px-6`.

## 8. Performance Optimization Requirements
- Use standard CSS variables and Tailwind utility classes to avoid layout trashing.
- Optimize particle systems by ensuring `pointer-events-none` is active to prevent interactive paint blocking.
- Background transitions should utilize `transition-all` on the main wrapper div rather than forcing unneeded React re-renders of heavy components.

```
