---
title: "Luxury chocolate"
category: Sections
subCategory: Hero
premium: false
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1780923122638-CHÂTEAU.webp
---

# Luxury chocolate

```text
# Complete Technical & Design Specification: CHÂTEAU Luxury Website

**Description:** A cinematic, premium scroll-based React showcase for luxury artisan chocolate collections.

This is a comprehensive, production-ready prompt designed to recreate the award-winning "CHÂTEAU" luxury scroll-based website experience. This specification contains everything needed for an AI developer to rebuild the site with maximum accuracy.

---

## 1. Project Overview & Tech Stack
- **Framework:** React 18+ via Vite (Single Page Application)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v3 compatible with standard `tailwind.config.js` and `postcss.config.js`)
- **Animation Engine:** Framer Motion
- **Icons:** `lucide-react`
- **Scroll Detection:** `react-intersection-observer`
- **Architecture:** Full-screen scroll-snap experience without 3rd-party scroll hijackers (pure CSS `scroll-snap-type: y mandatory`).
- **Goal:** A cinematic, premium showcase for luxury chocolate collections with fluid transitions.

---

## 2. Visual Design System

### 2.1 Brand Identity
- **Brand Name:** CHÂTEAU
- **Style:** Luxury, editorial, minimal, premium product showcase.

### 2.2 Color Palette (Dynamic Worlds)
The application background transitions instantly (0.2s) between four distinct radial gradients based on the currently active scroll section. 

**Section Gradients:**
1. **White Chocolate:** `radial-gradient(circle at center, #FFF8EC 0%, #F4E8D0 45%, #B89D6A 100%)`
2. **Dark Chocolate:** `radial-gradient(circle at center, #6B4423 0%, #2A1810 50%, #080403 100%)`
3. **Silk (Milk) Chocolate:** `radial-gradient(circle at center, #3B82F6 0%, #172554 45%, #020617 100%)`
4. **Pistachio Chocolate:** `radial-gradient(circle at center, #CDE8B5 0%, #567A36 45%, #13200B 100%)`

**Typography Colors (Theme Context):**
- **Light Themes** (White, Pistachio): Text, buttons, and navbar must switch to Dark Brown (`#2A1810`).
- **Dark Themes** (Dark, Silk): Text, buttons, and navbar remain White (`#FFFFFF`).

### 2.3 Typography
- **Heading/Brand Font (Serif):** `Playfair Display` (Google Fonts, weights 400-900).
- **Body Font (Sans-Serif):** `Inter` (Google Fonts, weights 100-900).
- **Hierarchy:**
  - **Navbar Brand:** `font-serif font-bold text-xl md:text-2xl tracking-[0.2em]`
  - **Section Subtitle (Hero):** `font-serif text-4xl md:text-6xl font-black tracking-tight leading-tight drop-shadow-lg`
  - **Massive Watermark Text (Background):** `font-serif font-black text-[35vw] md:text-[25vw] leading-none tracking-[-0.08em] uppercase`
  - **Body Description:** `font-light text-base md:text-lg leading-relaxed drop-shadow-md`

---

## 3. Layout Structure & Grid System

### 3.1 Global Scroll Mechanics
- Disable 3rd-party smooth scrollers (like Lenis).
- The `html` tag must have `scroll-snap-type: y mandatory; scroll-behavior: smooth;`.
- Hide native scrollbars for a clean look (`::-webkit-scrollbar { display: none; }`).
- Every major `section` must have `h-[100dvh]` and `snap-start`.

### 3.2 Global Background Layer
- Rendered in `App.tsx` as a `fixed inset-0 z-[-1]` container.
- Uses `AnimatePresence` with `mode="wait"` to swap gradient styles instantly on section change (`transition={{ duration: 0.2, ease: 'easeInOut' }}`).

### 3.3 Section Layout (`ChocolateSection.tsx`)
Every collection section follows a rigid, premium split layout:
- **Left Side:** Chocolate Product Image.
- **Right Side:** Typography Content Block.
- **Wrapper:** `flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 max-w-[1400px] w-full h-full mx-auto px-6 md:px-12`.

---

## 4. Section-by-Section Content Hierarchy

The array mapping in `App.tsx` must be rendered in this exact order:

1. **White** (id: 'white', type: 'white')
   - Subtitle: "Velvet Sweetness.\
Pure Indulgence."
   - Description: "Creamy white chocolate crafted with\
Madagascar vanilla and silky cocoa butter.\
\
Smooth, delicate, and irresistibly luxurious."
2. **Dark** (id: 'dark', type: 'dark')
   - Subtitle: "Bold. Intense.\
Unforgettable."
   - Description: "Rich cocoa notes unfold into layers\
of depth and sophistication.\
\
Crafted for true chocolate connoisseurs."
3. **Silk** (id: 'silk', type: 'silk')
   - Subtitle: "Wrapped In Elegance.\
Crafted For Desire."
   - Description: "A luxurious milk chocolate experience\
with velvety texture and unforgettable richness.\
\
The definition of modern indulgence."
4. **Pista** (id: 'pista', type: 'pista')
   - Subtitle: "A Taste Of Luxury Nature."
   - Description: "Premium roasted pistachios meet\
smooth artisan chocolate in perfect harmony.\
\
Nutty, creamy, and remarkably refined."

*(Note: There is no Call to Action button rendered in the sections.)*

---

## 5. UI Components & Micro-Interactions

### 5.1 Navbar
- **Position:** `fixed top-0 left-0 w-full z-50`.
- **Scroll Behavior:** Transparent by default. When scrolled > 50px, it maintains transparency but reduces padding (`py-5` instead of `py-8`). *No backdrop blur or bottom borders.*
- **Dynamic Theming:** Receives the current active section theme as a prop. Adjusts its text color to `#2A1810` for White/Pistachio sections, and `white` for Dark/Silk.

### 5.2 Product Images (Scale & Positioning)
- Images are massively scaled to provide an immersive experience.
- **Size:** `h-[70vh] md:h-[100vh] w-auto max-w-none object-contain drop-shadow-2xl`.
- **Positioning:** The image flex container must use `items-end` to anchor the image exactly to the bottom of the viewport.
- **Push Down:** Use `translate-y-12 md:translate-y-28` to push the image down below the visual bottom bounds of the screen.

### 5.3 Animations & Motion (Framer Motion)
All entrance animations wait for the 0.2s global background gradient snap to finish before triggering.

1. **Layer 1 (Massive Background Text Watermark):**
   - Initial: `scale: 0.9, opacity: 0, y: 50`
   - InView: `scale: 1, opacity: 0.08, y: 0`
   - Transition: `duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1]`
2. **Layer 2 (Chocolate Image):**
   - Entrance: `opacity: 0, x: -100` to `opacity: 1, x: 0`
   - Transition: `duration: 1.5, delay: 0.4`
   - **Floating Effect:** Nested `motion.div` driving an infinite float: `animate={{ y: [0, -12, 0] }}`, `transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}`
   - **3D Mouse Parallax:** Track mouse X/Y coordinates using `useMotionValue` and `useSpring` (stiffness: 150, damping: 25). Map to `rotateX` (15 to -15) and `rotateY` (-15 to 15). Apply `transformStyle: "preserve-3d"` to the image wrapper.
3. **Layer 3 (Text Content Block):**
   - Entrance: `opacity: 0, x: 60` to `opacity: 1, x: 0`
   - Transition: `duration: 1.5, delay: 0.6`

### 5.4 Particle System Component
A custom floating particle system running in the background of each section.
- **Logic:** Generate 25 floating particles randomized in `size` (2px-6px), `x/y` coordinates, `duration` (15s-30s), and `delay`.
- **Colors:** Map colors to match the section themes (e.g., gold/cream for White, deep brown for Dark, blue/silver for Silk, light green for Pista).

---

## 6. Frontend Architecture & Implementation Details

### 6.1 State Management
- Lift `currentTheme` up to `App.tsx` (`useState`).
- Use `react-intersection-observer` (`useInView`, threshold: 0.5) inside `ChocolateSection.tsx` to detect when a section is active and trigger `setCurrentTheme` via a prop.

### 6.2 Styling Configuration
- **Tailwind `index.css`:**
  ```css
  @layer base {
    html {
      scroll-snap-type: y mandatory;
      scroll-behavior: smooth;
    }
    body {
      @apply bg-black text-white antialiased overflow-x-hidden;
    }
  }
  ```

### 6.3 Performance Optimization Requirements
- Ensure images are optimized (WebP).
- Leverage Framer Motion's `whileInView` with `viewport={{ once: false, amount: 0.1 }}` to re-trigger animations cleanly as users scroll up and down.
- Heavy reliance on CSS transforms (translate, rotate, scale) for all animations to ensure hardware acceleration and 60fps performance during rapid scroll snapping.

```
