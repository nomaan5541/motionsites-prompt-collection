---
title: "Unmask Hero"
category: Sections
subCategory: Hero
premium: true
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1780928810916-Unmask_hero.webp
---

# Unmask Hero

```text
# Luxury Futuristic Fashion Hero Section Specification

## AI System Instructions & Objective
**Role:** You are an expert front-end developer and UI/UX engineer specializing in React, Tailwind CSS, and Framer Motion.
**Objective:** Your task is to implement the "ASTERION" luxury futuristic fashion website hero banner and navigation exactly as specified in this document.
**Instructions:** 
1. Read through this entire specification carefully to understand the design system and motion requirements.
2. Build the layout, styling, and complex interactive animations step-by-step according to the provided requirements.
3. Ensure the code is production-ready, fully responsive, and strictly adheres to the technical stack defined below.


## 1. Technical Architecture & Setup

### Stack Requirements
- **Build Tool:** Vite
- **Framework:** React 19+
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (using `@tailwindcss/vite` plugin)
- **Animation Library:** Framer Motion (`framer-motion`)
- **Icons:** Lucide React (`lucide-react`)

### Configuration & Global Styles (`index.css`)
Tailwind v4 requires configuring custom theme tokens directly via the `@theme` directive in the main CSS file.

```css
@import "tailwindcss";
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap');

@theme {
  --font-serif: "Cinzel", serif;
  --font-sans: "Inter", sans-serif;
  
  --color-luxury-black: #050505;
  --color-luxury-white: #fafafa;
  --color-luxury-gray: #a3a3a3;
}

body {
  @apply bg-luxury-black text-luxury-white font-sans antialiased overflow-x-hidden;
  margin: 0;
  padding: 0;
}
```

---

## 2. Visual Design System

### Color Palette
- **Primary Background (Luxury Black):** `#050505` (RGB: 5, 5, 5)
- **Primary Text (Luxury White):** `#fafafa` (RGB: 250, 250, 250)
- **Secondary Text/Accents (Luxury Gray):** `#a3a3a3` (RGB: 163, 163, 163)
- **Overlay Tints:** `rgba(0,0,0,0.4)` (Desktop overlay), `rgba(0,0,0,0.6)` (Mobile overlay), `rgba(0,0,0,0.95)` (Mobile Menu background)

### Typography
- **Primary Display Font:** `Cinzel` (Serif)
  - Used for: Logo, Main Headline ("BEYOND VISION"), Slide Indicators.
  - Weights: Light (300) to Bold (700).
- **Secondary UI Font:** `Inter` (Sans-serif)
  - Used for: Navigation links, Subheadlines, Descriptions, Buttons.
  - Weights: Light (300) to Medium (500).

---

## 3. Layout Structure & Grid System

- **Hero Container:** `100vh` full screen, relative positioning, hidden overflow, flex column layout.
- **Content Wrapper:** Absolute `z-10`, `max-w-7xl` centered with `mx-auto`, padded horizontally (`px-6 lg:px-12`).
- **Main Grid:** A 2-column grid (`grid-cols-1 lg:grid-cols-2`). The left column contains the typography; the right column is conceptually left empty for the image, though the images are positioned absolutely in the background layers.
- **Images Container Alignment:** Images are constrained to the right 50% of the screen on desktop (`lg:w-1/2 lg:ml-auto lg:pr-15`) and scaled using `object-contain object-right` to ensure the "full head" is visible and appropriately padded. On mobile, images take up full width (`w-full`).

---

## 4. Section-by-Section Component Specifications

### A. Navigation Bar (`<nav>`)
- **Placement:** Top of the screen, transparent, padding `py-6 md:py-8`.
- **Logo (Left):** "ASTERION", `Cinzel` font, `text-xl md:text-2xl`, `font-bold`, `tracking-widest`.
- **Desktop Links (Center):** Hidden on mobile (`hidden md:flex`), spaced by `space-x-8 lg:space-x-12`. Links: HOME, SHOP, COLLECTIONS, ABOUT, CONTACT. Text is `luxury-gray`, `text-xs lg:text-sm`, `tracking-widest`.
- **Icons (Right):** Lucide `Search`, `User`, `ShoppingBag` (size 20). `luxury-gray` transitioning to white on hover. Hidden on mobile.
- **Mobile Toggle:** Hamburger `Menu` and `X` toggle (Lucide, size 24), visible only on mobile.

### B. Mobile Navigation Overlay
- **Trigger:** Toggled via the hamburger menu.
- **Layout:** Fixed full screen (`inset-0`), `bg-luxury-black/95`, with `backdrop-blur-md`.
- **Items:** Large, stacked links using `Cinzel`, `text-2xl`, `tracking-widest`.

### C. Left Column: Typography & Content
- **Label:** "NEW COLLECTION" (`text-[10px] md:text-xs`, `uppercase`, `tracking-[0.3em]`, `text-luxury-gray`, `mb-4 md:mb-6`).
- **Main Headline:** "BEYOND VISION" 
  - Size: `text-6xl md:text-7xl lg:text-9xl`. 
  - Font: `Cinzel`, `font-light`.
  - Leading: `leading-[0.9]`.
  - Tracking: `tracking-tight`.
- **Subheadline:** "WEAR THE FUTURE" (`text-lg md:text-xl lg:text-2xl`, `Inter`, `font-light`, `tracking-widest`, `text-luxury-gray`, `mb-6 md:mb-8`).
- **Description:** "Sculpted in silver. Inspired by tomorrow. Futuristic eyewear and accessories for those who lead the future." (`text-xs md:text-sm lg:text-base`, `leading-relaxed`, `text-luxury-gray`, `max-w-sm`).
- **CTA Button:** "EXPLORE COLLECTION" (`text-[10px] md:text-xs`, `uppercase`, `tracking-[0.2em]`, `font-medium`). Contains a right-pointing arrow (`ArrowRight` from Lucide, size 16).

### D. Right Slide Indicators (Desktop Only)
- **Position:** Absolute right center (`top-1/2 -translate-y-1/2`, `right-6 lg:right-12`), flex column.
- **Elements:** "01" (white), an animated vertical white line segment spanning a `h-16 bg-white/20` track, "02" (gray), "03" (gray). Font: `Cinzel text-xs`.

### E. Background & Interactive Images
- **Base Image:** Default foreground fashion shot (`https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/foreground_hover.png`).
  - Overlay: `bg-black/60` on mobile, `bg-black/40` on desktop.
- **Hover Reveal Image:** Hidden futuristic eye shot (`https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/background_eye.png`). Masked by the cursor tracking element.

---

## 5. Motion Design & Micro-Interactions

### Easing Curve
- **Luxury Easing Signature:** `ease: [0.16, 1, 0.3, 1]`. All major layout transitions should use this cinematic cubic bezier.

### Cursor Reveal Mask Effect (CRITICAL)
- **Mechanic:** A cinematic "flashlight/scratch" effect revealing the second image.
- **Tracking:** Use Framer Motion's `useMotionValue` attached to the container's `onMouseMove` event to calculate cursor `clientX/clientY` minus container bounds.
- **Spring Physics:** Apply `useSpring` to the mouse coordinates with `stiffness: 250, damping: 30` to guarantee 60 FPS, silky smooth latency-free trailing.
- **Mask Property:** Bind `WebkitMaskImage` and `maskImage` to a `useMotionTemplate`. The radial gradient should be:
  `radial-gradient(circle 220px at ${springX}px ${springY}px, black 0%, black 60%, transparent 100%)`

### Split-Text Reveal Animation
- **Target:** "BEYOND" and "VISION" headline text.
- **Structure:** Words must be wrapped in `overflow-hidden` containers with `pb-1 md:pb-2`.
- **Animation:** The string is split into an array of individual letters. Each letter animates from `y: "120%", opacity: 0` to `y: "0%", opacity: 1` over `1.2s` using the luxury easing.
- **Stagger:** Letters stagger in sequentially with `staggerChildren: 0.08`.

### Staggered Entrance
- **Target:** The main left-column content blocks (Label -> Headline -> Subhead -> Paragraph -> Button).
- **Animation:** Start `opacity: 0, y: 30`, animate to `opacity: 1, y: 0`.
- **Timing:** Duration `0.8s`, staggered by `0.2s` increments with an initial delay of `0.3s`.

### Ambient Particles
- Generate 20 floating white circles (`opacity-30`, variable sizes 1-3px) scattered randomly via absolute positioning.
- Animate `y: [0, -20, 0]` and `opacity: [0.1, 0.5, 0.1]` on an infinite loop with random durations between `3s` and `5s`.

### Hover States
- **Nav Links:** Color transition from `text-luxury-gray` to `text-white`.
- **CTA Button:** On hover, scale to `1.05`, apply text shadow `0px 0px 8px rgba(255,255,255,0.8)`. The decorative line beneath the text transitions from `bg-white/30` to `bg-white`, and the right arrow translates `4px` to the right.

### Mobile Navigation Animation
- Wrap the overlay in Framer Motion's `<AnimatePresence>`.
- Overlay fades in/out (`opacity: 0` -> `1`).
- Individual mobile links slide up (`y: 20` -> `0`) staggered using `transition={{ delay: 0.1, 0.2, ... }}`.

---

## 6. Performance Optimization Requirements

1. **React State & Render Isolation:** The heavy mouse tracking logic relies purely on Framer Motion's `useMotionValue`, bypassing React state re-renders entirely to ensure a buttery smooth 60fps frame rate without re-rendering the component tree.
2. **GPU Acceleration:** The mask tracking and scale animations use `transform` and CSS mask properties natively optimized by the browser compositor.
3. **Responsive Images:** The image `opacity` and `object-contain` rules dynamically shift based on CSS breakpoints without needing JS recalculations.

---

## 7. Expected Final Result
The final output should be a highly polished, responsive hero banner that feels like an interactive editorial campaign for a brand like Balenciaga or Gentle Monster. The implementation must meticulously copy the split-text timing, the exact cursor flashlight mechanics, and the dark, luxurious typography hierarchies described above.

```
