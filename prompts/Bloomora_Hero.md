---
title: "Bloomora Hero"
category: Sections
subCategory: Hero
premium: false
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1782993525050-bloomora_hero.webp
---

# Bloomora Hero

```text
Create a world-class, premium luxury travel landing page named "Elevate". The website must be a cinematic, highly interactive, and immersive experience that blends the aesthetics of Apple, Awwwards-winning sites, and ultra-luxury brands. It must feel boundless, aspirational, and meticulously crafted.

## Technology Stack
- **Framework**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS (v3.4+)
- **Animation Engines**: 
  - Framer Motion (v12) for layout transitions, scroll reveals, and shared layout modal expansions.
  - GSAP (v3.15) for high-performance mouse parallax effects and continuous background looping animations.
- **Scrolling**: Lenis (v1.3) for buttery-smooth native scroll hijacking.
- **Icons**: React Icons (`react-icons/pi` for Phosphor thin/fill icons, `react-icons/hi` for Heroicons).

---

## Design System

### Color Palette
- **Primary Backgrounds**: Deep blacks and charcoal.
  - `#000000` (Pure Black) for main sections.
  - `#0a0a0a` and `#0c0c0c` for subtle depth and modal backgrounds.
- **Text & Foreground**: 
  - Pure White (`#ffffff`) for primary headings.
  - Translucent Whites (`rgba(255,255,255, 0.4)` to `0.8`) for body text, subtitles, and borders.
- **Glassmorphism Theme**: 
  - Core utility class structure used across UI: `bg-white/5 backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.2)]`.

### Typography
- **Primary Serif (Headings, Quotes, Logo)**: `Playfair Display`
  - Weights: Light (300), Regular (400), Medium (500).
- **Secondary Sans-Serif (Body, UI, Metadata)**: `Inter`
  - Weights: Light (300), Medium (500).
- **Key Sizing**:
  - Hero Headline: `text-[clamp(3rem,8vw,112px)]` with `leading-[0.9]` and `font-medium`.
  - Eyebrows: `text-sm uppercase tracking-[0.25em] font-medium`.
  - Footer Massive Text: `text-[15vw] leading-none tracking-tighter`.

---

## Layout & Content Architecture

### 1. Global Navigation (`Navigation.tsx`)
- **Desktop Layout**: 
  - Fixed at `top-6`, perfectly centered using Framer Motion (`x: "-50%"`). Width `90%`, max `1400px`.
  - Fully frosted glassmorphism pill shape (`rounded-3xl`).
  - **Left**: Logo "Elevate." (Playfair) alongside an airplane icon (`PiAirplaneTiltFill`).
  - **Center**: Absolute centered links ("Home", "Destinations", "Experiences", "Stories", "About").
  - **Right**: "Start Your Journey" glass button with hover arrow translation.
- **Mobile Navigation**:
  - Replaces desktop links with a hamburger menu.
  - **Interaction**: Clicking triggers a full-screen, deep black glassmorphism overlay (`AnimatePresence`). Menu links stagger-fade in from the left. Body scroll is locked.
  - Clicking any link smoothly scrolls to the anchor ID and closes the menu.

### 2. Cinematic Hero Section (`Hero.tsx`)
- **Container**: `100vh min-h-[700px]`, relative, overflow hidden.
- **Video Background (`VideoBackground.tsx`)**:
  - URL: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_bg_clouds.mp4`
  - Overlays: A 25% black layer, a vertical gradient (dark top to clear to dark bottom), and a radial warm glow (`rgba(255,220,180,0.35)`) mimicking a sun bloom.
  - GSAP Animation: Infinite slow zoom (`scale: 1.05` to `1.15`) over 40s with `yoyo: true`.
- **Flight Image Overlay**:
  - URL: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_flight.png`
  - GSAP Animation: Subtle floating `x: 50, y: -20` over 8s with `yoyo: true`. Drop shadow added for depth.
- **Typography (`AnimatedHeadline.tsx`)**:
  - Headline: "Rise Above Ordinary". 
  - Framer Motion spring animation: Each character staggers in from `y: 100` with `type: 'spring', damping: 20, stiffness: 100`.
- **Mouse Parallax**:
  - Uses `gsap.quickTo` mapped to `window.addEventListener('mousemove')`.
  - Headline translates inversely to mouse (-30%). Video translates with mouse (50%). Buttons translate inversely (-20%).
- **Scroll Indicator**: Bouncing mouse icon at the bottom center.

### 3. Curated Destinations (`Destinations.tsx`)
- **Layout**: Horizontal snap-scrolling gallery (`flex overflow-x-auto snap-x`). 
- **Cards**: Large cinematic portrait cards (`h-[600px] min-w-[400px]`). Dark gradient overlay at the bottom.
- **Hover State**: Image scales slowly (`duration-1000`), gradient darkens, text translates up slightly.
- **Expanding Modal Interaction**:
  - Powered by Framer Motion `layoutId` (shared layout).
  - Clicking a card seamlessly morphs it into a massive, centered modal (`max-w-6xl h-[850px]`) wrapped in a React `createPortal` with `z-[9999]`.
  - The image anchors to the left half, content fades into the right half.
  - A detached close button (`PiXThin`) fades in at `fixed top-12 right-12`.
- **Images (Unsplash)**:
  - Santorini: `https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=1200&q=80`
  - Swiss Alps: `https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1200&q=80`
  - Maldives: `https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80`
  - Kyoto: `https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80`

### 4. The Elevate Difference (`Experiences.tsx`)
- **Layout**: Sticky Parallax Split-Screen.
- **Desktop**: Left side `lg:sticky lg:top-0 h-screen` containing massive serif headings ("Redefining Luxury Travel"). Right side scrolls vertically through large, staggered images.
- **Mobile**: Breaks down to a standard vertically stacked layout.
- **Images (Unsplash)**:
  - Private Aviation: `https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1200&q=80`
  - Exclusive Retreats: `https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80`
  - Curated Itineraries: `https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80`

### 5. Member Stories (`Stories.tsx`)
- **Layout**: Minimalist typography carousel. No cards or borders.
- **Visuals**: A massive background quotation mark (`text-8xl md:text-[150px] text-white/30`).
- **Interaction**: Quotes fade up and out automatically every 6 seconds using `AnimatePresence`. Small dot indicators at the bottom to switch quotes manually.

### 6. Our Philosophy (`About.tsx`)
- **Layout**: 2-column flexbox (image left, text right).
- **Features**: A high-end Unsplash image (`https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1200&q=80`), elegant manifesto text, and a bottom border stats row (15+ Years, 200 Partners, 24/7 Concierge).

### 7. Start Your Journey (`StartJourney.tsx`)
- **Layout**: Massive, centered glassmorphism block (`rounded-[3rem] p-24`).
- **Visuals**: A pure white glowing bloom placed absolutely behind the text using `bg-white/20 blur-[120px]`.
- **Button**: A primary CTA button featuring a hover fill effect (a pseudo-element scaling in from the left).

### 8. Footer (`Footer.tsx`)
- **Layout**: Minimalist 4-column top grid (Brand, Newsletter, Destinations Links, Company Links).
- **Newsletter**: Sleek glassmorphism input field with a solid white subscribe button.
- **Footer Text**: The absolute bottom of the page features the word "ELEVATE." stretched to full width (`text-[15vw]`).

---

## Technical & Motion Specifications

### Scroll Animations
- Every major section and text block must utilize `framer-motion`'s `whileInView` prop to trigger a smooth fade-up entrance (`y: 40`, `duration: 1`, `ease: [0.16, 1, 0.3, 1]`) as the user scrolls down the page.

### Global CSS (`index.css`)
- Hide all native scrollbars visually globally to maintain a native-app feel:
  ```css
  ::-webkit-scrollbar { display: none; }
  * { -ms-overflow-style: none; scrollbar-width: none; }
  ```
- Import fonts:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500&family=Playfair+Display:wght@300;400;500&display=swap');
  ```

### Responsive Requirements (Mobile First)
- Mobile breakpoints must ensure paddings are reduced (e.g., `px-6` vs `px-24`).
- All flex containers that are side-by-side on desktop (`md:flex-row`) must stack gracefully (`flex-col`) on mobile.
- Massive typography must use `clamp()` or `vw` units to prevent horizontal overflow and breaking on narrow iPhone screens.
- Mobile Navigation overlay is strictly required; do not rely on standard inline drop-downs.

### SEO & Accessibility
- Ensure semantic HTML (`<main>`, `<section>`, `<nav>`, `<footer>`, `<header>`).
- Image `alt` tags must be descriptive.
- Ensure minimum contrast ratios on text sitting over images (utilize CSS gradients behind text overlays).
- Navigation links must use actual `<a href="#id">` tags for proper semantic routing, even if intercepted by JavaScript for smooth scrolling.

```
