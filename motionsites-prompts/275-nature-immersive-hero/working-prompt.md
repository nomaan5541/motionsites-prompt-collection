---
title: "Nature Immersive Hero"
category: Sections
subCategory: Hero
premium: true
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1780915056003-Nature-hero.webp
---

# Nature Immersive Hero

```text
Build a premium, modern, immersive landing page inspired by Apple-level design aesthetics and luxury motion websites. This prompt contains the exact specifications to completely recreate this production-ready hero section.

---

## 1. Technical Architecture & Tech Stack

*   **Framework**: React 19
*   **Language**: TypeScript
*   **Bundler**: Vite (Ensure compatibility with Node v20+ by using Vite v6 if needed)
*   **Styling**: Tailwind CSS v4
*   **Animation**: 
    *   Framer Motion (for entrance animations and continuous loops)
    *   GSAP (using `quickTo` for high-performance, buttery-smooth mouse parallax)
*   **Smooth Scrolling**: Lenis (`@studio-freight/lenis` or `lenis`)
*   **Icons**: React Icons (`react-icons/rx` specifically for `RxHamburgerMenu` and `RxArrowRight`)

### Project Structure Requirements
*   `src/index.css`: Global styles, Tailwind imports, Lenis structural resets, and Inter font import.
*   `src/App.tsx`: Instantiates Lenis smooth scroll and mounts the Hero component.
*   `src/components/Navigation.tsx`: Absolute positioned, responsive top navigation bar.
*   `src/components/Atmosphere.tsx`: The cinematic fog and noise overlays.
*   `src/components/Hero.tsx`: The main container managing the GSAP mouse events and layered Framer Motion elements.

---

## 2. Visual Design System

### 2.1 Color Palette
*   **Navigation Text & Icons**: `#1b2f23` (Dark Green)
*   **Navigation Button Border**: `rgba(27, 47, 35, 0.2)`
*   **Active Link Underline**: `#9cb8a3` (Soft Sage Green)
*   **Big Hero Text**: `#ffffff` (White)
*   **Hero Container Background**: `#000000` (Black base, covered by image)
*   **Overlay Gradient (Bottom to Top)**: `#062011` (Deep Forest Green) at `opacity-90` fading `via-transparent` to `transparent`.
*   **Atmosphere Fog Overlay**: `linear-gradient(to bottom, rgba(255,255,255,0.75), rgba(255,255,255,0.1))`

### 2.2 Typography
*   **Global Font Family**: 'Inter', system-ui, sans-serif
*   **Brand Logo ("Nature.")**: `text-2xl`, `font-black` (Weight 900), `tracking-tight`.
*   **Navigation Links**: `text-sm`, `font-medium`.
*   **Button Text**: `text-sm`, `font-semibold`.
*   **Hero Heading ("NATURE")**: 
    *   `font-black` (Weight 900)
    *   `uppercase`
    *   `leading-none`, `tracking-tighter`
    *   Responsive Size: `clamp(8rem, 18vw, 18rem)`
    *   *Crucial Detail*: Apply a CSS text stroke to artificially increase boldness beyond 900 weight: `WebkitTextStroke: "2px white"`.

---

## 3. Layout & Structure

The hero section must be **Full-Bleed / Edge-to-Edge** (`w-full h-screen relative overflow-hidden bg-black`). 
*Do not use a floating box model or max-width constraints on the main container.*

### Component Layering Hierarchy (Z-Index)
1.  **Atmosphere Layers**: `z-20` (Fog) and `z-[60]` (Noise texture)
2.  **Navigation**: `z-50`
3.  **Layer 1 (Background)**: `z-10`
4.  **Dark Green Overlay**: `z-10` (placed *after* Layer 1 in the DOM to render on top of it)
5.  **Layer 2 Image (Midground)**: `z-20`
6.  **Layer 2 Text ("NATURE")**: `z-30`
7.  **Layer 3 (Foreground Branch)**: `z-40`

---

## 4. UI Components & Detailed Specifications

### 4.1 Responsive Navigation
*   **Positioning**: `absolute top-0 left-0 w-full px-6 py-8 md:px-12 z-50 flex justify-between items-center`.
*   **Left**: The logo "Nature." (text, not an image).
*   **Center (Desktop Only, `hidden lg:flex`)**: Links: Home, About, Explore, Journal, Contact. Gap of 8. Hover effect: `opacity-80` to `opacity-100`. The "Home" link must have a 1px absolute bottom underline (`-bottom-1.5 left-0 w-full h-[1px] bg-[#9cb8a3]`).
*   **Right**:
    *   "Get Started" Button: `hidden md:flex`, rounded-full, border, gap-2, padding `px-5 py-2`. Hover state: `bg-[#1b2f23] text-white`. Includes `RxArrowRight` icon.
    *   Hamburger Icon: `RxHamburgerMenu` (`text-2xl`), visible on all breakpoints.

### 4.2 Atmosphere 
*   **Fog**: A `div` taking `absolute inset-0 z-20 pointer-events-none` with the top-to-bottom white gradient.
*   **Noise**: A `div` taking `absolute inset-0 z-[60] pointer-events-none` using an inline SVG fractal noise background. Set `opacity: 0.04` and `mixBlendMode: 'overlay'`.

### 4.3 The Layers & Assets

**Asset 1: Background Forest**
`https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_forest_img_1.png`
*   Class: `absolute inset-0 w-full h-full object-cover`
*   Base Scale: `1.05` (creates a 5% buffer to prevent cutoffs during mouse parallax).

**Asset 2: Midground Forest**
`https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_forest_img_2.png`
*   Class: `absolute inset-0 w-full h-full object-cover opacity-90 blur-[2px]` (Applies a slight depth-of-field blur).
*   Base Scale: `1.15`.

**Text Layer: "NATURE"**
*   Positioning: `absolute inset-0 flex items-end justify-center pb-[10%] lg:pb-[12%] z-30`. 
*   It should sit horizontally centered and slightly raised from the bottom.

**Asset 3: Foreground Branch**
`https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_forest_img_3.png`
*   Class: `absolute -bottom-[54%] left-0 w-full object-cover`
*   Base Scale: `1.3`, with `transformOrigin: 'bottom'`. (Positioned deeply negative to reveal the text behind it).

---

## 5. Animation & Motion Design

### 5.1 Crucial Architectural Rule: Conflict Prevention
To prevent jitter/jerks when Framer Motion and GSAP fight over the CSS `transform` property, **you must wrap every parallax element in a standard `div`**. 
*   GSAP animates the outer `div` wrapper for `x` axis mouse parallax.
*   Framer Motion animates the inner `motion.img` or `motion.div` for entrance scaling and `y` axis movements.

### 5.2 Entrance Animations (Framer Motion)
*   **Navigation**: `initial={{ opacity: 0, y: -20 }}`, `animate={{ opacity: 1, y: 0 }}`, duration 1.5s, easeOut.
*   **Background (Layer 1)**: `initial={{ scale: 1.25 }}`, `animate={{ scale: 1.05 }}` (duration 2s, easeOut). Continuous bobbing: `animate={{ y: [0, -10, 0] }}` (duration 20s, repeat Infinity, easeInOut).
*   **Midground (Layer 2 Img)**: Fade in `opacity: 0` to `1` over 1.5s, easeOut.
*   **Big Text ("NATURE")**: Slide up `y: 50` to `0`, `opacity: 0` to `1`. Duration 1.2s, delay 0.4s, easeOut.
*   **Foreground Branch (Layer 3)**: Slide up `y: 100` to `0`, `opacity: 0` to `1`. Duration 1.4s, delay 0.2s, easeOut.

### 5.3 Mouse Parallax Effect (GSAP)
*   Track mouse movement relative to the center of the screen `(e.clientX - centerX) / centerX`.
*   Use `gsap.quickTo()` for buttery-smooth performance, `duration: 0.8`, `ease: "power3"`.
*   Calculate a `maxMove` variable: `20px` on mobile (`innerWidth < 768`), `60px` on desktop.
*   Apply the translation:
    *   **Layer 3 (Foreground)**: Moves 100% of maxMove (e.g., `-60px` to `60px`).
    *   **Layer 2 (Midground Image & Text)**: Moves 50% of maxMove.
    *   **Layer 1 (Background)**: Moves 20% of maxMove.

---

## 6. Performance & Accessibility
*   **Performance**: 
    *   Use `will-change-transform` on all moving layers to enable GPU acceleration.
    *   Use GSAP `quickTo` instead of standard `to` for high-frequency mouse events.
    *   Apply `pointer-events-none` to overlays, text, and decorative images so they don't block mouse interactions.
*   **Accessibility**: 
    *   Ensure the main heading `<h1>` is semantic.
    *   Navigation should use `<nav>` and buttons should have appropriate `aria-labels` if icons are used exclusively.
*   **SEO**: Ensure the text "NATURE" is rendered as actual HTML text (`<h1>`), NOT embedded in an image.

---
*Follow these specifications precisely. The final result should feel like an Awwwards-winning Apple-tier product launch experience.*

```
