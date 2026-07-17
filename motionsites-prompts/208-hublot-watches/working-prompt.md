---
title: Hublot Watches
category: Templates
subCategory: E-commerce
premium: true
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1782788815855-hublot-watches.webp
---

# Hublot Watches

```text
Act as an award-winning UI/UX designer, master motion specialist, and elite web developer. Your objective is to recreate a hyper-premium, luxury watch brand website with absolute pixel-perfection, complex scroll-tied animations, and flawless multi-device responsiveness. 

This document serves as the absolute source of truth. Every detail must be implemented exactly as described below.

---

## 1. Visual Design System

### 1.1 Color Palette
The site uses a strict dark-mode luxury aesthetic with gold accents.
- **Background (`--color-bg`)**: `#050505` (Deep space black)
- **Text (`--color-text`)**: `#FFFFFF` (Pure white)
- **Accent/Gold (`--color-accent` \u0026 `--color-primary-container`)**: `#C79A42` (Luxury matte gold)
- **Muted Text (`--color-muted`)**: `#888888`
- **Border (`--color-border`)**: `#222222`
- **Overlay (`--color-overlay`)**: `rgba(5, 5, 5, 0.7)`
- **Surface (`--color-surface`)**: `#111111`
- **Surface Variant (`--color-on-surface-variant`)**: `#AAAAAA`

### 1.2 Typography
- **Heading Font (`--font-heading`)**: `'Bodoni Moda', serif` (For luxurious, high-contrast display titles)
- **Body Font (`--font-body`)**: `'Hanken Grotesk', sans-serif` (For ultra-legible, modern sans-serif body copy)
- **Title Sizes**: Scaled using `clamp(3rem, 6vw, 5rem)` for fluid typography.
- **Letter Spacing**: Used heavily on navigation and uppercase accents (e.g., `letter-spacing: 4px` or `0.2em`).
- **Line Heights**: `1.1` to `1.2` for headings, `1.5` to `1.6` for body text.

---

## 2. Global Layout \u0026 Grid System
- **Maximum Width**: Constrained elements use a `max-width: 1440px` with `margin: 0 auto`.
- **Global Padding**: `1.5rem` horizontal padding on mobile/tablet (`<=1024px`), and `2rem` on desktop (`>1024px`).
- **Scroll Behavior**: Hidden horizontal overflow (`overflow-x: hidden`) strictly enforced on `html, body`.
- **Box Sizing**: All elements inherit `box-sizing: border-box`.

---

## 3. Section-By-Section Implementation Details

### 3.1 ScrollHero Section (Canvas Video Scrubbing)
- **Architecture**: A 100vh pinned container that scrubs through a high-definition video using an HTML5 `<canvas>` element tied to the user's scroll position.
- **Video Source**: `https://res.cloudinary.com/dprydfxok/video/upload/v1740660604/scrolling_d8p8d8.mp4`
- **Technical Logic**:
  - Load video and draw frames to a `100%` width, `100%` height canvas using `object-fit: cover`.
  - Use `requestVideoFrameCallback` to sync canvas drawing with video playback.
  - Pin the container using GSAP `ScrollTrigger` (pin duration `+=2500`).
  - Animate an internal `frameObj.frame` tied to the scroll `scrub: 2` (smooth scrubbing).
- **Navigation (Overlay)**:
  - Top navigation overlapping the canvas.
  - Desktop: Flexbox `justify-content: space-between`.
  - Mobile (`<= 1024px`): Custom hamburger menu toggle. When open, a full-screen glassmorphism overlay (`backdrop-filter: blur(15px)`, `background: rgba(5, 5, 5, 0.95)`) slides in from `translateY(-100%)`.
- **Loading State**: An ultra-premium "vs-loading" overlay (`backdrop-filter: blur(25px)`) displaying a spinning gold loader (`border-top-color: var(--color-accent)`) until the video metadata triggers `loadeddata`.
- **Text Layers**: Sections of text (Title, description) fading in and out over the video at specific scroll percentages.

### 3.2 Narrative Section
- **Layout**: Center-aligned typography block.
- **Padding**: `16rem 0` on desktop, `6rem 1.5rem` on mobile.
- **Styling**: Large luxury heading with a muted, refined body text restricted to `max-width: 800px`. Includes a subtle radial background glow (`background: radial-gradient(circle, rgba(199, 154, 66, 0.05), transparent 70%)`).

### 3.3 Features Section (Material Alchemy)
- **Desktop Layout (`>1024px`)**: Grid `7fr 4fr`, `gap: 6rem`.
- **Mobile Layout (`<=1024px`)**: Flex column `gap: 4rem`. Image wrapper naturally hugs the image (no `aspect-ratio` collapse).
- **Image (`hhttps://res.cloudinary.com/dprydfxok/image/upload/v1782786581/w2_ih6nz9.webp`)**: Absolute positioned floating specs (`18K Rose Gold`, `Skeletonized Dial`) pinned to the image wrapper's corners, featuring a thin `border: 1px solid var(--color-border)` and microscopic backdrop blur.
- **Content**: Clean typography lists separating "Case", "Bezel", and "Strap".

### 3.4 Exploded View Section
- **Layout**: Stacked center-aligned layout.
- **Image (`https://res.cloudinary.com/dprydfxok/image/upload/v1782788684/img-2_zuiqcy.png`)**: The exploded mechanical view of the watch spanning `max-width: 800px`.

### 3.5 Collection Gallery
- **Desktop Layout (`>1024px`)**: A stunning 5-item, 6-column bento grid. 
  - Items 1 \u0026 2: `grid-column: span 3; aspect-ratio: 4 / 3`.
  - Items 3, 4, \u0026 5: `grid-column: span 2; aspect-ratio: 3 / 4`.
- **Mobile Layout (`<=1024px`)**: Single column stacking.
- **Assets**:
  1. `https://res.cloudinary.com/dprydfxok/image/upload/v1782786580/w1_f1ngdv.webp`
  2. `https://res.cloudinary.com/dprydfxok/image/upload/v1782786581/w2_ih6nz9.webp`
  3. `https://res.cloudinary.com/dprydfxok/image/upload/v1782786581/w3_gwriiw.webp`
  4. `https://res.cloudinary.com/dprydfxok/image/upload/v1782786581/w4_ezumqb.webp`
  5. `https://res.cloudinary.com/dprydfxok/image/upload/v1782786581/w5_t0vdxr.webp`
- **Interactions**: On hover (`>1024px`), image scales slightly (`1.05`), text overlay fades in, and image goes from grayscale/dimmed to full vibrant color. On touch devices (`<=1024px`), text overlays are permanently visible.

### 3.6 Heritage \u0026 Boutique Section
- **Desktop Layout (`>1024px`)**: Grid `6fr 5fr`, `gap: 6rem`.
- **Mobile Layout (`<=1024px`)**: Flex column `gap: 4rem`.
- **Heritage Image (`https://res.cloudinary.com/dprydfxok/image/upload/v1782788683/img-3_ztdqsd.jpg`)**: Full-width object-fit cover image.
- **Boutique Image (`https://res.cloudinary.com/dprydfxok/image/upload/v1782786901/watch-img_f0wpnt.png`)**: `aspect-ratio: 21 / 9` on desktop, shifting to `16 / 9` on mobile. Deep `filter: brightness(0.75) contrast(1.25)` applied for mood.

### 3.7 Footer
- **CTA Section**: Massive text ("CRAFT YOUR LEGACY") above an outlined button.
- **Footer Bottom**: Standard flex layout, splitting a logo, navigation links, and copyright info. Stacked vertically on mobile.

---

## 4. Animations \u0026 Micro-Interactions
- **GSAP ScrollTrigger**: Used comprehensively for reveal animations. Every text block and image is wrapped in an `.animate-stagger` class. 
  - Config: `y: 50, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out'`.
- **Context Handling**: All GSAP animations inside React `useEffect` hooks MUST be wrapped in `gsap.context()` for proper cleanup on unmounts (React 18 StrictMode safe).

---

## 5. Responsive Behavior \u0026 Accessibility
- **The 1024px Breakpoint**: All layout shifts from desktop (grids, multi-columns) to mobile/tablet (single column, flex-column, hamburger menus) trigger precisely at `max-width: 1024px` to natively support iPads in portrait mode.
- **Scroll Locking**: The canvas hero must use `width: 100%` (NOT `100vw` which causes horizontal scrollbar bugs on mobile).
- **Accessibility**: Use semantic HTML tags (`<section>`, `<nav>`, `<main>`), proper `alt` tags for all watch images, and maintain high contrast (`#FFFFFF` on `#050505`).

---

## 6. Technical Stack \u0026 Architecture
- **Framework**: React.js (Vite).
- **Styling**: Pure CSS (No Tailwind, No CSS-in-JS). Each component maintains a corresponding `.css` file (e.g. `Features.css`, `Collection.css`).
- **Dependencies**: 
  - `gsap` (for timelines and ScrollTrigger)
- **Performance**: 
  - Hardware accelerated canvas drawing.
  - Image assets utilizing highly compressed `.webp` formats.
  - Reduced layout thrashing by avoiding CSS `aspect-ratio` on grid columns during mobile view.

```
