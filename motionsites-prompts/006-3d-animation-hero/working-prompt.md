---
title: "3d Animation Hero"
category: Sections
subCategory: Hero
premium: true
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1780924736414-exon_hero.webp
---

# 3d Animation Hero

```text
**System Role & Instructions:**
You are an elite frontend developer and UI/UX engineering expert. Your objective is to build a premium, highly interactive, and pixel-perfect landing page hero section strictly following the specification provided below.

When generating the code, you must:
1. **Adhere to the Tech Stack:** Use React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Three.js exactly as outlined.
2. **Follow the Design System:** Strictly apply the specified color palette, typography scales, spacing, and visual effects (e.g., glassmorphism, gradients).
3. **Implement Animations & 3D Effects:** Carefully integrate the described staggered entrance animations and 3D background module to ensure a dynamic, high-end feel.
4. **Deliver Complete, Runnable Code:** Output the full, production-ready code for all necessary components without using placeholders or skipping details.

Read through the following `Exon AI - Hero Template Specification` carefully before beginning your implementation.

***

# Exon AI - Hero Template Specification

This document provides a highly detailed, comprehensive specification required to recreate the "Exon AI" landing page hero section with 100% accuracy.

## 1. Technical Architecture & Stack
- **Framework**: React 18, Vite
- **Language**: TypeScript (`.tsx` files)
- **Styling**: Tailwind CSS (PostCSS)
- **Animation**: Framer Motion (`framer-motion`)
- **3D Graphics**: Three.js (`three`)
- **3D Background Module**: `threejs-components` (Vanilla JS Module from CDN)
- **Icons**: `lucide-react`
- **Utility Libraries**: `clsx`, `tailwind-merge`

## 2. Visual Design System

### Color Palette
- **Background**: `#000000` (Pure Black)
- **Theme Primary**: 
  - `primary-500`: `#3b82f6` (Tailwind Blue-500)
  - `primary-400`: `#60a5fa` (Tailwind Blue-400)
- **Theme Secondary / Accents**:
  - `cyan-500`: `#06b6d4`
  - `cyan-400`: `#22d3ee`
- **Text Primary**: `#ffffff` (White)
- **Text Secondary**: `rgba(255,255,255,0.7)` (White/70)
- **Text Tertiary**: `rgba(255,255,255,0.4)` (White/40)

### Typography
- **Primary Font Family**: 'Inter', sans-serif (Weights: 300, 400, 500, 600, 700, 800)
- **Headline (h1)**: `text-5xl` to `text-7xl` (`3rem` to `4.5rem`), `font-extrabold` (800), `tracking-tight`, `leading-tight`.
- **Subtitle**: `text-lg` to `text-xl` (`1.125rem` to `1.25rem`), `font-light` (300), `max-w-xl`.
- **Badges/Small text**: `text-sm` (`0.875rem`), `font-medium` (500).

## 3. Layout Structure & Grid System
The hero section utilizes a full-screen, centered layout overlaying a fixed 3D canvas.
- **Root Element**: `min-h-screen`, `bg-[#000000]`, `overflow-hidden`, `relative`.
- **3D Layer (`Hero3D`)**: `fixed inset-0 w-full h-full z-0`.
- **Content Container (`main`)**: `relative min-h-screen w-full flex flex-col items-center justify-center pt-20 pb-10 z-10`.
- **Inner Wrapper**: `w-full max-w-5xl mx-auto flex flex-col items-center text-center px-4 md:px-8`.

## 4. Section-by-Section Content & Hierarchy

### Navbar (`Navbar.tsx`)
- **Layout**: Fixed at top, `w-full`, `px-6 py-4`, `flex justify-between items-center`, `z-50`.
- **Logo Area**: "Exon AI" text (`font-semibold text-lg`) alongside a gradient circle logo (blue-to-cyan gradient).
- **Navigation Links**: Hidden on mobile. Displayed on `md` screens as a horizontal list (`gap-8 text-sm text-white/70`). Links: Products, Solutions, Developers, Enterprise, Pricing, Resources. Hover state: `text-white transition-colors`.
- **Action Area**: "Login" link (hidden on mobile) and a "Start Free" gradient pill button.

### Hero Content (`HeroContent.tsx`)
1. **Announcement Badge**: 
   - A glassmorphic pill (`px-4 py-2 rounded-full border border-white/10 bg-white/5`).
   - Contains a spark icon and text: "GPT-Next AI Platform Released".
2. **Main Headline**: 
   - Multi-line text. "Build, Automate & Scale" followed by "with".
   - Final line is "Artificial Intelligence" styled with a text-gradient: `bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent`.
3. **Subtitle**: 
   - "The intelligent platform to automate workflows and deploy AI solutions at scale."
4. **Call-To-Action (CTA) Buttons**:
   - Primary: "Start Building Free" (Solid Gradient Blue background).
   - Secondary: "Book a Demo" (Glassmorphic border).

## 5. UI Components & Micro-Interactions

### Magnetic Button Component (`MagneticButton.tsx`)
- **Behavior**: On mouse hover, the button subtly translates on the X and Y axes toward the cursor's position, bounded by a distance multiplier (e.g., `x = clientX / boundedWidth * 20`).
- **Variants**:
  - `primary`: `bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-full`. Hover adds brightness/glow.
  - `glass`: `bg-white/5 backdrop-blur-md border border-white/10 rounded-full`. Hover state adds `bg-white/10`.
- **Animation**: Uses Framer Motion's `spring` physics (`stiffness: 150`, `damping: 15`, `mass: 0.1`) to snap back to origin when mouse leaves.

## 6. Animations (Framer Motion Specifications)
- **Load Animation**: The `HeroContent` container uses a staggering variant (`staggerChildren: 0.2`).
- **Child Elements (FadeUp)**: Each text block and button fades up from `y: 20` and `opacity: 0` to `y: 0` and `opacity: 1` over `duration: 0.8` using an `easeOut` easing curve.
- **Navbar Load**: Drops in from `y: -20` to `y: 0`.

## 7. The 3D Centerpiece (`Hero3D.tsx`)
This is the most critical visual element of the site. It uses a third-party script loaded dynamically via standard DOM imports.
- **Source**: `https://cdn.jsdelivr.net/npm/threejs-components@0.0.16/build/backgrounds/grid1.cdn.min.js`
- **Dependencies**: Native ESM import of Three.js (`https://cdn.jsdelivr.net/npm/three@0.170.0/+esm`)
- **Configuration Details**:
  - `type`: `'circle'`
  - `colors`: `[0x222222, 0x222222]` (Dark grey to ensure the tiles act as a base for physical lighting).
  - `light1Color`: `0xffffff` (White)
  - `light1Intensity`: `10000`
  - `light1PositionZ`: `50` (Pushed far back to globally illuminate the grid).
  - `light2Color`: `0x0066ff` (Electric Blue hover effect).
  - `light2Intensity`: `15000`
  - `light2PositionZ`: `-20` (Placed deep behind the grid).
  - `depthScale`: `3` (Determines how deep the tiles sink when hovered).
  - `materialParams`: 
    - `metalness`: `0.5`
    - `roughness`: `0.5` (Matte/glossy plastic appearance to diffuse light perfectly).
    - `clearcoat`: `1.0`
    - `clearcoatRoughness`: `0.2`
- **Scene Adjustments**:
  - `bgInstance.three.scene.background = new THREE.Color('#0a0a0a')`
- **Mounting Strategy**: To prevent React Strict Mode / Hot Module Reloads from breaking the 3D script's internal cache, the `<canvas>` DOM element must be dynamically created via `document.createElement('canvas')` and destroyed within the `useEffect` hook.

## 8. Interaction Details (Mouse Move Effect)
- As the user moves the mouse across the screen, the `threejs-components` script computes raycasting from the camera to the Z=0 plane.
- The instances (circles) within a defined radius of the cursor are pushed on the Z-axis by a value scaled by `depthScale: 3`.
- Because the tiles recede into the scene (`z < 0`), they capture the light of `light2` (The massive 15,000 intensity `0x0066ff` blue light located at `Z=-20`). 
- This physically creates the visual of an electric blue crater/depth following the cursor, scattering beautifully across the rough material sides of the tiles.

## 9. Responsive Behavior
- **Mobile (`< 768px`)**:
  - Navbar links and "Login" text are hidden. Only Logo and "Start Free" button are visible.
  - Headline font size drops to `text-5xl`.
  - Subtitle font size drops to `text-lg`.
  - Content container padding decreases (`px-4`).
- **Tablet/Desktop (`>= 768px`)**:
  - Flexbox layouts center properly.
  - Headline uses `text-7xl`.

## 10. Performance Optimization Requirements
- The Three.js dependency and the `threejs-components` script are loaded asynchronously inside a React `useEffect` callback via standard JavaScript `import(...)` to avoid blocking the main bundle parsing.
- Vite build must be configured to ignore the dynamic HTTP import using `/* @vite-ignore */` comments.
- Framer motion uses lightweight hardware-accelerated transforms (`y` and `opacity`).
- Background canvas disables pointer events (`pointer-events-none`) natively on the DOM wrapper to reduce main thread hit testing, while the JS script attaches correctly to the `document.body`.

## 11. SEO & Accessibility
- **Metadata**: Title tag `<title>Exon AI - Build, Automate & Scale</title>`.
- **Semantics**: Use of `<nav>`, `<main>`, `<h1>`, and appropriate button elements.
- **Contrast**: Ensuring high contrast between white text and `#000000` background.
- **Aria Labels**: All interactive elements (especially icon-only or custom buttons) should have screen-reader accessible names.

```
