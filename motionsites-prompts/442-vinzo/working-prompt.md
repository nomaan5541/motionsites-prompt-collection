---
title: Vinzo
category: Templates
subCategory: E-commerce
premium: true
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1782910410654-vinzo_website.webp
---

# Vinzo

```text
Act as an award-winning UI/UX designer and elite frontend web developer. I want you to build a highly interactive, premium e-commerce landing page for a luxury wine brand called "Vinzon". The website must be visually stunning, perfectly responsive, and feature complex, scroll-driven animations akin to Awwwards-winning sites.

Here is the complete, exhaustive specification for replicating this exact website. 

---

## 1. Visual Design System

### 1.1 Color Palette
- **Background Main**: `#fcfbf9` (Warm Beige)
- **Background Dark**: `#18181b` (Zinc-900, used for Final CTA and primary buttons)
- **Background Accent (Hero Circle)**: `#ffe8e8` (Soft Pink)
- **Collection Backgrounds**: 
  - Green Grape: `#f4f6ec`
  - Blueberry Bliss: `#eef5fa`
  - Lychee Rosé: `#fdf5f5`
  - Cabernet Sauvignon: `#f8f1f1`
- **Text Primary**: `#18181b` (Zinc-900)
- **Text Secondary**: `#52525b` (Zinc-600)
- **Text Accent / Badges**: `#d2a373` (Elegant Gold/Tan)
- **White**: `#ffffff`

### 1.2 Typography
Use Google Fonts via `@import`:
- **Primary (Serif)**: `Playfair Display` (Italics, Weights: 400, 500, 600, 700)
- **Secondary (Sans-Serif)**: `Inter` (Weights: 300, 400, 500, 600)

**Typography Hierarchy**:
- **Hero Title**: Playfair Display, 6xl (Mobile) to 9rem (Desktop), Line height 0.9, Uppercase \u0026 Lowercase Italic mix.
- **Section Headings**: Playfair Display, 4xl (Mobile) to 6xl/7xl (Desktop).
- **Body Text**: Inter, Light (300/400), 16px to 20px, text-zinc-600, leading-relaxed.
- **Eyebrow/Sub-navigation**: Inter, Uppercase, tracking-widest, text-sm, font-medium.

---

## 2. Global Layout \u0026 Architecture

### 2.1 Technical Stack
- **Framework**: React 18+ (Vite)
- **Styling**: Tailwind CSS v4 (using `@tailwindcss/vite` plugin and `@theme` variables)
- **Animations**: GSAP (ScrollTrigger) \u0026 Framer Motion
- **Icons**: Lucide React

### 2.2 Global Elements
- **Navbar**: Absolute positioned at the top (`z-40`). 
  - Left: "Vinzon" Logo in Playfair.
  - Center: Nav links (Collection, Our Story, Craft, Contact) in Inter uppercase.
  - Right: Cart (0) text and a circular dark hamburger menu icon.
- **Sidebar**: Fixed on the left (`z-40`). 
  - Hidden on mobile.
  - Contains a section indicator (e.g., `01` to `06`), a vertical progress bar (1px wide with active white fill), and rotated "Scroll Down" text.
- **The Travelling Bottle (Master GSAP Element)**: 
  - A single, fixed `<div className="fixed top-1/2 left-1/2 ...">` wrapping a bottle image.
  - **Crucial**: This bottle travels across all sections on Desktop via a master GSAP ScrollTrigger timeline linked to the main container. It is hidden on mobile.

---

## 3. Sections \u0026 Content Hierarchy

### 3.1 Hero Section
- **Layout**: Min-height screen, grid with 2 columns.
- **Background Elements**: Large absolute pink circle (`w-[195vh] rounded-full opacity-80`), and inverted grape illustration in top right corner.
- **Content (Left)**: 
  - Text: "POUR *Extraordinary* *Moments*" (Extraordinary and Moments are italicized Playfair).
  - Paragraph: "Wines crafted with passion..."
  - Button: Dark pill shape, text "Explore Collection" with ArrowRight icon.
- **Content (Right)**:
  - Mobile: Static bottle with `animate-float` utility.
  - Desktop: Circular SVG rotating text badge "ROOTED WITH PASSION • FINE WINES •".

### 3.2 Story Section (`#story`)
- **Layout**: 2 columns.
- **Content (Left)**: Playfair Heading "Rooted In Tradition", Inter paragraph about vineyards. Includes a "Discover More" link.
- **Content (Right)**: Reserved for the traveling bottle on desktop, static float bottle on mobile.

### 3.3 Features / Craft (`#craft`)
- **Background**: Grape illustration positioned left side, flipped horizontally.
- **Layout**: 2 columns.
- **Content (Left)**: Reserved space for bottle.
- **Content (Right)**: "The Art of Winemaking". Displays 3 features (Handpicked, Oak Barrels, Organic) stacked vertically with lines separating them.

### 3.4 Collection (`#collection`)
- **Layout**: Pinned horizontal scroll section.
- **Content**: A grid of 4 colored cards. Each card has:
  - Background color specific to the wine.
  - Wine name, description ("Fine Wine"), and price ("$29.00").
  - A "+" button.
- **Interaction**: GSAP pins this section. As user scrolls, the content must accommodate the scroll duration of the traveling bottle.

### 3.5 Journey Section
- **Layout**: 2 columns.
- **Content**: "Taste the Journey", describing sensory notes. Layout mirrors the Story section.

### 3.6 Final CTA (`#contact`)
- **Layout**: Dark background (`bg-zinc-900`), white text.
- **Content**: Center aligned text. "Ready to Taste?" Heading. Large gold "Shop Now" button.
- **Footer**: Simple copyright and social links at bottom.

---

## 4. Animation \u0026 Motion Design Specifications

### 4.1 Initial Load (Framer Motion)
- **Navbar**: Slides down from `y: -20` with `opacity: 0` to `1` over 0.8s, ease `[0.16, 1, 0.3, 1]`.
- **Hero Text**: Staggered slide in from the left (`x: -50` to `0`).
- **Hero Master Bottle (Desktop)**: `App.tsx` GSAP starts the main bottle offscreen right (`x: 100vw`, `opacity: 0`) and animates to `x: 20vw`, `opacity: 1` over 1.5s with `power3.out`.
- **Hero Mobile Bottle**: Slides in from right (`x: 100` to `0`).
- **Hero Backgrounds**: Pink circle scales from 0 to 1; grapes rotate from -15deg and fade in.

### 4.2 Scroll-Based Interaction (The Traveling Bottle)
Implement a unified GSAP Timeline in `App.tsx` tied to the main wrapper with `scrub: 2`. Use `gsap.matchMedia` for `(min-width: 1024px)`.

Timeline keyframes for `mainBottleRef`:
1. **Hero to Story (dur: 1)**: Move to `x: 0vw`, `y: 0vh`, `scale: 1`. Rotate to 15deg then back to 0.
2. **Story to Features (dur: 1)**: Move to `x: 0vw`, `scale: 0.8`. Rotate to -15deg then back to 0.
3. **Features to Collection (dur: 1.5)**: Move to `x: 1vw`, `y: -8vh`, `scale: 0.72`. Rotate 20deg.
4. **Collection Pause (dur: 1.5)**: Moves across the cards (`x: 9vw`, `y: -3vh`, `scale: 0.45`).
5. **Collection to Journey (dur: 1)**: Move back to `x: 0vw`, `y: 10vh`, `scale: 1`. Rotate -15deg.
6. **Journey to FinalCTA (dur: 1.2)**: Move to `x: 0vw`, `y: 5vh`, `scale: 0.85`. Rotate 15deg.

### 4.3 Micro-interactions
- **Float**: Define CSS `@keyframes float` translating Y by 15px over 6s. Apply `.animate-float` to mobile bottles.
- **Buttons**: Hover states use `transition-colors`, background shifts to black. Icons translate X by 2px on hover (`group-hover:translate-x-2`).

---

## 5. Responsiveness \u0026 Accessibility
- **Desktop (>= 1024px)**: Uses the complex GSAP Master Bottle. Content is arranged in 2-column grids. Sidebar is visible.
- **Mobile (< 1024px)**: GSAP Master Bottle is completely hidden (`display: none`). Instead, each section conditionally renders its own static image of the bottle using the `.animate-float` class. Sidebar is hidden. Hero font sizes scale down significantly (9rem to 6xl).
- **Accessibility**: Use semantic HTML (`<nav>`, `<section>`, `<footer>`). Provide `alt` tags for all bottles and illustrations.

---

## 6. Assets List
You must use these exact Cloudinary URLs for all images:

**Grapes Background Illustration**:
- `https://res.cloudinary.com/dprydfxok/image/upload/v1782908892/graphes_suwwwa.png`

**Wine Bottles**:
- Lychee Rosé (Main Bottle): `https://res.cloudinary.com/dprydfxok/image/upload/v1782908887/rose_c8iajk.png`
- Green Grape: `https://res.cloudinary.com/dprydfxok/image/upload/v1782908887/green_dll77h.png`
- Blueberry Bliss: `https://res.cloudinary.com/dprydfxok/image/upload/v1782908886/blue_m0tpe4.png`
- Cabernet Sauvignon (Red): `https://res.cloudinary.com/dprydfxok/image/upload/v1782908890/red_w2pl8a.png`

---

## 7. Execution Output Requirements
Provide the full codebase to recreate this. Ensure:
- `index.css` contains Tailwind v4 setup, fonts, and `@keyframes float`.
- `App.tsx` has the master GSAP scroll trigger timeline.
- Dedicated files for each component (`Hero.tsx`, `Story.tsx`, `Collection.tsx`, etc.).
- Complete, pixel-perfect Tailwind utility classes mapped exactly to the design system described above.
- Zero placeholder images—only use the provided Cloudinary URLs.

```
