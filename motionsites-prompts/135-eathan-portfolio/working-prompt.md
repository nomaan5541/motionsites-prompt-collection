---
title: Eathan Portfolio
category: Templates
subCategory: Portfolio
premium: false
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781598113945-Eathan_Portfolio.webp
---

# Eathan Portfolio

```text
# AI Code Generation Blueprint: High-Contrast Creative Director Portfolio

Act as an award-winning UI/UX designer and elite frontend web developer. Create a highly detailed and comprehensive web application mimicking the digital portfolio of "Eathan".

Follow this precise blueprint to construct a fully responsive, pixel-perfect, interactive portfolio web application in React (Vite + TypeScript + Tailwind CSS + Framer Motion + Three.js).

================================================================================
1. DESIGN SYSTEM \u0026 AESTHETICS
================================================================================

### Color Palette (Hex/RGB)
*   **Primary Background (Deep Space Blue)**: `#030014`
*   **Secondary Drawer Background**: `#333333`
*   **Highlight / Accent (Electric Acid Lime Green)**: `#CCFF00`
*   **Primary Text**: `#FFFFFF`
*   **Secondary Text / Meta**: `rgba(255, 255, 255, 0.5)` or `white/50`
*   **Line / Energy Elements**: `#88AAFF` (opacity 0.2)

### Typography
Define the following CSS custom properties via Tailwind `@theme`:
*   **Display Font (`font-display`)**: `"Anton", "Impact", "Arial Black", sans-serif`
*   **Sans Font (`font-sans`)**: `"Space Grotesk", "Inter", system-ui, sans-serif`
*   **Mono Font (`font-mono`)**: `"IBM Plex Mono", "SFMono-Regular", Consolas, monospace`

**Selection Style**: 
Background: `#CCFF00`, Text: `#000000`.

================================================================================
2. LAYOUT \u0026 HIERARCHY
================================================================================

The application relies on a single-view React `App.tsx` utilizing a layered z-index strategy. The root wrapper uses `min-h-screen`, `overflow-hidden`, `flex-col`, and `bg-[#030014]`.

### Z-Index Layers:
*   `z-0`: `ParticleBackground` (Three.js WebGL canvas).
*   `z-10`: `HeroImage` (Large, absolute-positioned cut-out character at the bottom).
*   `z-20`: `HeroContent` (Typography and bio text, centered and responsive).
*   `z-30`: `Header` and `FooterMarquee` (Sticky overlays).
*   `z-50`: `InfoDrawer` (Sliding side panel).

================================================================================
3. COMPONENT SPECIFICATIONS
================================================================================

### 3.1. ParticleBackground (Three.js WebGL)
*   **Setup**: Full-screen fixed canvas (`z-0`), `pointer-events-none`.
*   **Particles**: `15,000` points using `PointsMaterial`. Additive blending, base color `0x001f3f`, size `0.5`, opacity `0.2`.
*   **Lines**: `530` energy lines moving forward in Z-space, using `LineMaterial`, color `0x88aaff`, linewidth `0.005`, opacity `0.20`, dashed `true`.
*   **Post-processing**: `EffectComposer` with `RenderPass` and `UnrealBloomPass` (threshold 1.0, strength 0.8, radius 0.1).
*   **Interaction**: On mouse move, calculate 3D pointer intersection. 
    *   **Effect**: Particles within a distance of `20` are repulsed (force multiplier `0.04`) and their color interpolates towards `#CCFF00` (max mix multiplier `0.4`).
    *   Spring force returns them to original positions.

### 3.2. Header
*   **Logo**: Left-aligned, "EATHAN" (`font-display`, uppercase, tracking-widest). Next to it is a circle (`bg-[#CCFF00]`, text black, `w-10 h-10`) containing "✦" that rotates 180 degrees on group hover.
*   **Links**: "ARCHIVE", "PROCESS", "LABS" (hidden on mobile, font-mono, text-xs).
*   **Action Button**: "COMMISSION" button triggering the drawer.

### 3.3. Hero Content (Typography \u0026 Bio)
*   **Position**: Flex-1 container, centered, relative `z-20`.
*   **Mammoth Headline**: 
    *   Top line: "DESIGN WITH" - Transparent text with a white stroke (`-webkit-text-stroke: 1px white`, thicker on larger breakpoints). Sizes range from `17px` to `70px`.
    *   Bottom line: Rotates between "PURPOSE", "IMPACT", "INTENT" every 4 seconds. Solid `#CCFF00` text, extremely large sizes (`50px` to `180px`). Uses a custom React `ScrambleText` effect cycling random uppercase characters before settling on the target word.
*   **Typewriter Bio**: 
    *   Text: `"I'm Eathan — a freelance UI/UX designer crafting bold, high-contrast digital experiences that are intuitive, impactful, and built to stand out."`
    *   Animation: Framer Motion staggering effect (`delay: index * 0.02`, `duration: 0.05` per character). The entire bio remounts and re-animates on a loop every 7 seconds via a shifting React `key`.

### 3.4. Hero Image (Subject Cut-out)
*   **Asset**: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_main_1.png.png`
*   **Position**: Absolute bottom, centered horizontally (`left-1/2 -translate-x-1/2`). `z-10`.
*   **Sizing**: Responsive height taking up maximum available vertical space (`85%` mobile to `110%` desktop), ensuring prominent presence.
*   **Filters**: `brightness-95`, `grayscale`, `contrast-125`, and a large drop shadow (`drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]`).
*   **Animation**: Subtle scale up (`scale-[1.04]`) with a 700ms ease-out transition on hover.

### 3.5. Footer Marquee
*   **Content**: "EATHAN ROY // CREATIVE DIRECTOR // EATHAN ROY // CREATIVE DIRECTOR //"
*   **Style**: Ultra-large transparent text with a thin white stroke (`-webkit-text-stroke: 1px rgba(255,255,255,0.15)`). Positioned absolutely at the bottom edge. Infinite CSS translate keyframe animation.

### 3.6. InfoDrawer (Side Menu)
*   **Animation**: Slides in from the right using Framer Motion (`x: '100%'` to `0`, spring physics).
*   **Design**: Width `sm:max-w-xl md:max-w-2xl`. Background `bg-[#333333]`. Border left `border-white/5`.
*   **Structure**: 
    *   Sticky header (`bg-[#333333]/90` backdrop blur) with a close button and dynamic back/menu button.
    *   Main menu lists: 'PROJECTS', 'BLOG', 'ABOUT', 'RESUME', "LET'S WORK".
    *   **Contact Form ("LET'S WORK")**:
        *   Input fields and textareas have transparent backgrounds, bottom white borders, and focus states that change border to `#CCFF00`.
        *   Custom Select element with options having `bg-[#333333]`.
        *   Solid `#CCFF00` submit button.

================================================================================
4. TECHNICAL \u0026 ARCHITECTURE REQUIREMENTS
================================================================================

*   **Dependencies**: `react`, `framer-motion`, `lucide-react`, `three`, `tailwindcss`.
*   **Responsiveness**: 100% fluid scaling across mobile, tablet, and desktop breakpoints. Rely on Tailwind's arbitrary values and percentage heights for absolute scaling without scrollbars.
*   **Performance**: Avoid memory leaks in Three.js by properly disposing of geometry, materials, and renderer in the component cleanup function (`useEffect` return).
*   **Accessibility**: Ensure button elements have proper roles, images contain descriptive `alt` tags (`alt="Eathan"`), and the color contrast on text meets WCAG standards (using high-opacity whites against the `#030014` backdrop).
*   **SEO**: Maintain semantic HTML (proper `<main>`, `<h1>`, `<h2>` tag hierarchies).
```
