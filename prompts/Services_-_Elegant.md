---
title: "Services - Elegant"
category: Sections
subCategory: Features
premium: true
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1783679225294-Services-Elegant.webp
---

# Services - Elegant

```text
Act as an award-winning designer and expert frontend web developer. Your task is to build a highly interactive, luxurious, and ultra-responsive landing page for a premium beverage brand called "CRUSH". 

The website must be built using React, Vite, Tailwind CSS, and GSAP (including ScrollTrigger). Maximum accuracy to the provided specifications is required.

## 1. Complete Visual Design System
### Color Palette (Tailwind Configuration)
*   **Charcoal**: `#111111` (Primary dark background and text)
*   **Crush Orange**: `#ff6b00` (Primary accent color)
*   **Crush Gold**: `#ffc107` (Secondary accent)
*   **Off White**: `#f8f8f8` (Light background and text)
*   **Deep Dark**: `#0a0a0a` (Footer background)

### Typography
*   **Sans-serif**: `Outfit`, sans-serif (Used for body text, subtitles, and UI elements)
*   **Serif**: `Playfair Display`, serif (Used for massive display headings and elegant titles)

### CSS Utilities & Base Styles
Ensure smooth scrolling and hide default scrollbars:
```css
@layer base {
  html { scrollbar-width: none; }
  html::-webkit-scrollbar { display: none; }
}
@layer utilities {
  .text-shadow-luxury { text-shadow: 0 4px 20px rgb(255 132 0); }
  .glass-panel { @apply bg-charcoal/40 backdrop-blur-md border border-white/10 shadow-2xl; }
}
```

---

## 2. Global Layout & Responsiveness Architecture
The layout must be **100% responsive**, scaling perfectly from 320px mobile viewports up to 4K displays.
*   **Mobile (< 768px):** Use stacked column layouts (`flex-col`), scaled-down typography (e.g., `text-4xl` instead of `text-7xl`), tightened padding (`py-16`), and center-aligned text where appropriate.
*   **Desktop (>= 768px):** Use side-by-side layouts (`flex-row`), massive display typography, spacious padding (`py-24 px-20`), and dramatic whitespace.

---

## 3. Section-by-Section Implementation

### A. Navigation Bar (`Navbar.jsx`)
*   **Layout:** Fixed at top, `z-50`, `py-6 px-6 md:px-8`, flex between.
*   **Logo:** Text "CRUSH", 2xl, serif, bold, tracking widest.
*   **Desktop Links:** Hidden on mobile (`hidden md:flex`). Links for Home, Collection, Heritage, Contact. Font sans, tracking widest, uppercase, text-xs.
*   **Mobile Hamburger:** Visible only on mobile. SVG-based toggle icon.
*   **Mobile Overlay:** When clicked, opens a full-screen `fixed inset-0 z-40 bg-charcoal/95 backdrop-blur-md` overlay. Links are stacked, 3xl serif. Body scroll must be locked when open.
*   **Animations:** 
    *   Initial entrance: slides down (`y: 0`, `opacity: 1`) when reaching the Heritage section.
    *   Color swapping: Uses GSAP ScrollTrigger to switch text colors between white and charcoal depending on the background section (dark text over light sections).

### B. Hero Canvas & Scrolling Video (`HeroCanvas.jsx`)
This is the most technically complex section. It features a video that scrubs based on scroll position using a Canvas element.
*   **Container:** `relative w-full h-[400vh]`.
*   **Scrolling Video Logic:** 
    *   **Source Video:** `https://res.cloudinary.com/dprydfxok/video/upload/v1782791874/crush_hero_video_w1px5o.webm`
    *   Load the video into a hidden `<video>` element with `crossOrigin="anonymous"`, `playsInline`, `muted`, `preload="auto"`.
    *   Use a React `useEffect` (with strict-mode safeguards) to decode video frames using `createImageBitmap(vid, {resizeWidth: 1280})` via `requestVideoFrameCallback` (or fallback to `seeked` loop).
    *   Paint frames to a sticky `<canvas>` element (`w-full h-full object-cover`). The canvas must be completely full-screen on **all devices** (use a `'cover'` fit calculation, not contain).
    *   Add filters to the canvas: `brightness-110 contrast-[1.15] saturate-120`.
    *   Link the canvas drawing index to the scroll progress over the `400vh` container.
*   **Text Overlays:**
    *   `sticky top-0 w-full h-screen z-10`.
    *   **Main Title:** "CRUSH" (`text-7xl md:text-9xl font-serif text-shadow-luxury`) centered. Fades out in the first 15% of the scroll timeline.
    *   **Subtexts:** Positioned at `bottom-12 right-6 md:bottom-20 md:right-24`. Three separate blocks ("Handpicked Citrus", "Triple Distilled", "Perfectly Carbonated") that sequentially fade in and out as the user scrolls down the `400vh` container using a GSAP timeline with `scrub: 0.5`. Mobile widths should be constrained gracefully (`w-[85vw] max-w-72 md:w-[32rem]`).

### C. Heritage Section (`Heritage.jsx`)
*   **Layout:** `min-h-screen relative bg-offWhite text-charcoal py-16 md:py-24 px-6 md:px-20 z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]`.
*   **Content:** Two columns (`flex-col md:flex-row`), gap 12 to 16.
    *   **Left (Text):** "A Legacy of Pure Citrus" (Citrus in italic `text-crushOrange`). Typography scales from `4xl` to `7xl`. Includes a button: "Discover Our Roots" (bordered, uppercase, tracking-widest).
    *   **Right (Image):** A bottle image inside a blurred glow effect.
*   **Image Asset:** `https://res.cloudinary.com/dprydfxok/image/upload/v1782791887/crush-drink_obyl3q.png`
*   **Animations:** Use GSAP ScrollTrigger (`start: "top 70%"`). Text container children stagger slide up (`y: 50` to `0`, `opacity: 0` to `1`). Image slides up with scale (`y: 100`, `scale: 0.9` to `1`).

### D. Experience Section (`Experience.jsx`)
*   **Layout:** `min-h-screen relative bg-charcoal text-offWhite py-16 md:py-24 px-6 md:px-20 z-10 overflow-hidden`. Reverse columns on mobile (`flex-col-reverse md:flex-row`).
*   **Visual Effects:** Absolute background gradient `bg-gradient-to-l from-crushOrange/10 to-transparent mix-blend-screen`.
*   **Content:** 
    *   **Left (Image):** A glass/drink image surrounded by an absolute blur orb (`bg-crushOrange/20 blur-[100px]`). Max-width capped for elegance.
    *   **Right (Text):** "The Experience" (subtitle), "Elevate Your Senses." (title, `4xl` to `7xl`). Solid `bg-crushOrange` button with glowing box shadow `shadow-[0_0_30px_rgba(255,107,0,0.3)]` that disappears on hover. Text centered on mobile, left on desktop.
*   **Image Asset:** `https://res.cloudinary.com/dprydfxok/image/upload/v1782791888/crush_drink_2_lk6dv2.png`
*   **Animations:** Glass image translates up (`y: 150` to `0`). Text children stagger slide left (`x: 50` to `0`).

### E. Footer (`Footer.jsx`)
*   **Layout:** `bg-[#0a0a0a] text-white/50 py-12 md:py-16 px-6 border-t border-white/5`.
*   **Content:** Flex row on desktop, column on mobile. 
    *   Logo: "CRUSH" (`3xl md:text-4xl serif bold`).
    *   Links: Instagram, Twitter, Contact (flex wrap, centered on mobile).
    *   Copyright: Centered, extremely small (`text-[10px] md:text-xs tracking-widest`).

---

## 4. Technical & Architectural Requirements
*   **Frameworks:** React 18, Vite.
*   **Dependencies:** `gsap` (specifically `ScrollTrigger`), `tailwindcss`. Do NOT use unnecessary heavy UI libraries.
*   **Performance:** The canvas scrolling video implementation must preload frames efficiently into an array of ImageBitmaps to prevent jittering during rapid scrolling. Ensure the React `useEffect` handles Strict Mode double-invocations without duplicating canvas initialization or leaking event listeners.
*   **GSAP Architecture:** Be highly careful with cleanup. `ScrollTrigger.getAll().forEach(t => t.kill())` must NEVER be used on component unmount, as it will destroy triggers for sibling components during Hot Module Replacement (HMR). Only kill localized timelines (`tl.kill()`).
*   **SEO & Accessibility:** Maintain semantic HTML (`<nav>`, `<section>`, `<footer>`, `<h1>`-`<h3>`).

Your output must be structurally flawless, highly polished, and functionally identical to a master-level Awwwards winning site.

```
