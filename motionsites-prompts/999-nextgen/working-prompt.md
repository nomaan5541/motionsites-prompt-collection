---
title: "Nextgen"
category: Sections
subCategory: Hero
premium: true
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1782837239492-nextgen_hero.webp
---

# Nextgen

```text
You are an award-winning designer and expert web developer tasked with creating a highly immersive, production-ready landing page. Recreate this website with 100% pixel-perfect accuracy, adhering to the following comprehensive specifications.

## 1. Visual Design System

### 1.1 Color Palette
- **Primary Background:** `#020617` (Deep slate/black)
- **Primary Text:** `#ffffff` (White)
- **Secondary Text (Subtitles/Nav):** `gray-300` (approx `#d1d5db`), `gray-400` (approx `#9ca3af`)
- **Brand Accent / Primary Interactive:** `#0a6cff` (Electric Blue)
- **Accent Hover:** Tailwind's `blue-600` (approx `#2563eb`)
- **Logo/Icon Accents:** `text-blue-500` and `fill-blue-500/20`
- **Mask Color:** `#ffffff` (Pure White) with `mix-blend-difference`
- **Overlay Gradients:**
  - `from-[#000414] via-transparent to-[#000414]/80`
  - `bg-black/30` solid overlay

### 1.2 Typography
- **Primary Font Family:** System Sans-Serif (`font-sans`, ideally 'Inter', 'Roboto', or 'San Francisco')
- **Logo Text:**
  - Text: "NextGen"
  - Size: `18px` on mobile (`text-lg`), `20px` on desktop (`text-xl`)
  - Weight: Bold (`font-bold`)
  - Tracking: `0.2em`
- **Navigation Links:**
  - Weight: Bold (`font-bold`)
  - Size: `12px` (`text-xs`) on desktop, `16px/18px` (`text-base sm:text-lg`) on mobile
  - Tracking: Widest (`tracking-widest`)
- **Hero Headline (h1):**
  - Text: "Think Design" (uppercase)
  - Size: Fluid responsive (`text-5xl sm:text-6xl md:text-8xl`)
  - Weight: Black (`font-black`)
  - Line Height: Tight (`leading-[1.1]`)
  - Tracking: Tight (`tracking-tight`)
- **Hero Subtitle (p):**
  - Size: Fluid responsive (`text-sm sm:text-base md:text-xl`)
  - Text Color: `text-gray-300`
  - Line Height: Relaxed (`leading-relaxed`)
- **Primary Button ("EXPLORE SOLUTIONS"):**
  - Size: `14px` (`text-sm`)
  - Weight: Bold (`font-bold`)
  - Tracking: Widest (`tracking-widest`)

## 2. Layout Structure & Grid System
- **Global:** 100vh minimum height, relative positioning, overflow-hidden at the root level to prevent scrolling issues from absolute backgrounds.
- **Background Video Container:** Absolute positioning (`absolute inset-0`), z-index 0. Contains a full-cover video and dual overlay layers.
- **Main Content Wrapper:** Relative positioning (`z-10`), flex column, taking up minimum screen height (`min-h-screen`).
- **Navbar:** 
  - Width: `w-full` with a `max-w-[1400px]` constraint.
  - Centered horizontally (`mx-auto`).
  - Padding: `px-4 sm:px-6 py-4 sm:py-6` fluid padding.
  - Flexbox: `flex justify-between items-center`.
  - Layer: Elevated (`z-50`).
- **Hero Section:**
  - Flexbox column, centered horizontally and vertically (`items-center justify-center`).
  - Offset slightly upward (`mt-[-80px]`) to optically center the content against the navbar height.
  - Max width constraint on paragraph text (`max-w-[650px]`).

## 3. UI Components & Styling Details

### 3.1 Header / Navbar
- **Logo Area:** Flex container (`gap-2 sm:gap-3`). Hexagon icon (`lucide-react`) using `text-blue-500 fill-blue-500/20` (sizes `w-6 h-6 sm:w-8 sm:h-8`). A tiny accent square (`w-1.5 h-1.5 sm:w-2 sm:h-2`) rotated 45 degrees sits absolutely centered on the hexagon.
- **Desktop Links:** Hidden on mobile (`hidden lg:flex`), gap of 8 (`gap-8`). Active link ("HOME") has a `2px` absolute blue underline at the bottom.
- **Header Button ("GET STARTED"):**
  - Padding: `px-6 py-2.5`
  - Border: `border border-blue-600`
  - Shape: Fully rounded pill (`rounded-full`)
  - Background: Semi-transparent dark slate (`bg-[#0a1128]/50`)
  - Hover: `hover:bg-blue-600/20`
  - Icon: ChevronRight (`w-4 h-4 text-blue-500`)
- **Mobile Menu Toggle:** standard Hamburger Menu icon visible below `lg` breakpoint.
- **Mobile Menu Overlay:**
  - Dark background (`bg-[#020617]`)
  - Border on left side (`border-l border-white/10`)
  - Slides in from the right.
  - Links close the overlay on click.

### 3.2 Hero Section
- **Headline Wrapper:** `relative inline-flex items-center justify-center mb-4 sm:mb-6 w-full px-2 sm:px-8`.
- **Primary Button ("EXPLORE SOLUTIONS"):**
  - Shape: Pill (`rounded-full`)
  - Padding: `px-8 py-4`
  - Background: `#0a6cff` with a glowing shadow (`shadow-[0_0_20px_rgba(10,108,255,0.4)]`).
  - Hover: Background turns `bg-blue-600`, shadow increases (`hover:shadow-[0_0_30px_rgba(10,108,255,0.6)]`).
  - Alignment: Full width on mobile, auto width on tablet/desktop (`w-full sm:w-auto`).

## 4. Animations, Micro-interactions & Motion Design

### 4.1 Negative Mask Effect (Hero Headline)
- **Concept:** A pure white circle moves smoothly across the Hero Headline using `mix-blend-mode: difference`. This perfectly inverts the text (making it black) and the dark background (making it bright) within the bounds of the circle.
- **Circle Dimensions:** Fluid sizing based on viewport. `w-20 h-20` on mobile, `sm:w-24 sm:h-24` on tablet, `md:w-[140px] md:h-[140px]` on desktop.
- **Circle Positioning:** `absolute`, `top-50%`, `y: -50%`, `x: -50%`.
- **Keyframe Animation (Framer Motion):** 
  - Animate property: `left: ['20%', '80%', '20%']`.
  - Transition: `duration: 10`, `repeat: Infinity`, `ease: "easeInOut"`.

### 4.2 Entry Animations
- **Hero Content Load:** Uses Framer Motion.
  - Initial state: `opacity: 0, y: 30`.
  - Animate to: `opacity: 1, y: 0`.
  - Transition: `duration: 0.8, ease: "easeOut"`.
- **Mobile Menu Overlay:**
  - Initial state: `opacity: 0, x: '100%'`.
  - Animate to: `opacity: 1, x: 0`.
  - Exit state: `opacity: 0, x: '100%'`.

## 5. Responsive Behavior (100% Fluidity)
- **Mobile (<640px):** Typography scales down (`text-5xl` for h1). Hero button becomes full width. Mobile hamburger menu replaces desktop links. The mask effect scales to `80px` (`w-20`). Explicit line break inserted in the headline using `<br className="block sm:hidden" />` to prevent word clipping.
- **Tablet (640px - 1023px):** Typography bumps up (`text-6xl`). Buttons revert to `auto` width. Logo sizes up.
- **Desktop (>=1024px):** Navbar reveals desktop links. Hero headline expands to `text-8xl`. Mask circle reaches maximum size of `140px`. 

## 6. Asset Specifications
- **Background Video:** 
  - Source: `https://strvid.nyc3.digitaloceanspaces.com/motionitems/source/1781983008187-motion_51.mp4`
  - Attributes: `autoPlay`, `loop`, `muted`, `playsInline`
  - Styling: `object-cover opacity-80 w-full h-full`
- **Icons:** Requires `lucide-react` (specifically: `Menu, X, ChevronRight, Hexagon`).

## 7. Technical Implementation Architecture
- **Framework:** React 18+ (Vite)
- **Styling:** Tailwind CSS (utility-first classes, arbitrary values for strict hex code enforcement like `#0a6cff`).
- **Animation Library:** Framer Motion (`framer-motion`) for entry states, infinite looping mask, and mobile menu presence.
- **File Structure:** Entirely contained within `App.tsx` utilizing functional components (`App`, `Navbar`, `HeroSection`).
- **Performance Optimization Requirements:** Ensure video has `playsInline` and `muted` for immediate auto-playback policies. CSS hardware acceleration should be utilized via Framer Motion for the mask `left` / `x` properties to prevent jank.
- **Accessibility Considerations:** Buttons must have clear hover and focus states. High contrast ratios are maintained using dark backgrounds and white text. The mobile navigation toggle must be fully accessible.
- **SEO Requirements:** Ensure the main headline utilizes a proper `<h1>` tag structure and paragraph tags are used contextually. Semantic tags like `<nav>`, `<main>`, and `<header>` should be incorporated.

Please strictly generate the codebase directly adhering to these exact design and architectural specifications.

```
