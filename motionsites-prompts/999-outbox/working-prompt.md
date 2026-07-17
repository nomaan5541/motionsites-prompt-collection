---
title: Outbox
category: Templates
subCategory: SaaS
premium: false
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1782827948269-outbox_website.webp
---

# Outbox

```text
# Website Reconstruction Prompt

**Role \u0026 Instructions:**
Act as an award-winning Senior UX/UI Designer and Expert Frontend Web Developer. Your goal is to recreate a highly complex, visually stunning, and dynamic website with maximum accuracy. Follow the detailed specifications below to build the complete, 100% responsive, production-ready website.

---

## 1. Visual Design System

### 1.1 Color Palette
The website relies heavily on a custom, warm, premium color palette combined with dark mode aesthetics.
- **Brand Orange (Primary Accent):** `#f24d29`
- **Brand Dark:** `#c63d25`
- **Brand Darker (Global Background):** `#963222`
- **Brand Darkest (Footer/Overlays):** `#691c10`
- **Neutrals:**
  - Dark Backgrounds: `#111111`, `#000000`, `slate-800`, `slate-700`
  - Text: `#ffffff` (White), `slate-200`, `slate-400`, `white/90`, `white/80`, `white/70`

### 1.2 Typography
- **Primary Font Family:** Inter (sans-serif)
- **Hierarchy \u0026 Styling:**
  - **Super-sized Display (Hero/Footer):** `text-[30vmin]` for Hero letters, `text-[12vw]` for Footer text. Weight: `font-black`, `tracking-tighter`, `leading-none`.
  - **Headings (H1/H2):** `text-6xl md:text-8xl` (H1), `text-4xl md:text-6xl` (H2). Weight: `font-black` or `font-bold`. Line height: `leading-tight`.
  - **Subtitles/Labels:** `text-sm md:text-lg`. Weight: `font-semibold` or `font-bold`. Styling: `uppercase`, `tracking-[0.3em]` or `tracking-widest`.
  - **Body Text:** `text-lg`, `text-slate-200` or `text-slate-400`.

---

## 2. Global Layout \u0026 Architecture
- **Framework:** React + Tailwind CSS + Framer Motion.
- **Responsiveness:** Mobile-first approach using Tailwind's `md:` and `lg:` breakpoints. 100% responsive across all devices.
- **Grid Pattern:** A global fixed background grid pattern overlay (`opacity-10`, `pointer-events-none`) is applied to give a subtle technical texture.
- **Z-Index Strategy:** Layers are strictly controlled to allow sections to overlap, scroll over each other, or stay sticky (`z-10`, `z-40`, `z-50`, `z-[100]`).

---

## 3. Section-by-Section Specifications

### 3.1 Responsive Navigation Bar (Navbar)
- **Container:** Fixed to top (`top-4 md:top-6`), centered, floating pill (`w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] max-w-7xl`), `z-50`.
- **Layout:** Flex row, items centered. The logo (left) has `mr-auto` to push everything else to the right. The navigation links (`mr-8`) sit directly to the left of the hamburger icon.
- **Scroll State Transition:**
  - Unscrolled: Transparent border, drop shadow.
  - Scrolled (>50px): `bg-white/10`, `backdrop-blur-xl`, `border-white/20`.
- **Elements:**
  - Logo: `text-2xl md:text-3xl font-black`. "OUT" (solid white) + "BOX" (`text-white/70`).
  - Desktop Links: Hidden on mobile (`hidden lg:flex`), uppercase, widely tracked, hover color `text-brand-orange`.
  - Mobile Menu Button: Lucide React `<Menu />` icon, no text.
- **Mobile Overlay Menu:** Framer Motion `AnimatePresence`. Full-screen dark container (`bg-brand-darkest`). Menu items slide in vertically (`y: "-100%"` to `y: 0`), text size `text-4xl md:text-6xl`, hover scale effect.

### 3.2 Hero Section (Scroll-Driven Interactive Masterpiece)
- **Container:** Total height `400vh` to allow for extensive scroll-scrubbing animations via Framer Motion's `useScroll` and `useTransform`. The visible content sits in a `sticky top-0 h-screen` wrapper.
- **Global Background Element:** The entire sticky wrapper has `scale`, `y` translation, `borderRadius`, and `opacity` tied to the final 25% of the scroll progress (it shrinks to `scale: 0.7`, gets `border-radius: 60px`, and fades out).
- **Background Video:** Absolute full-coverage looping video (`opacity-20`, `object-cover`). 
  - URL: `https://res.cloudinary.com/dprydfxok/video/upload/v1782459210/bg1_jgni8n.mp4`
- **Concentric Scaling Circles:** 
  - Centered in the screen, four circles scale up as the user scrolls.
  - Circle 1 (Outermost): `bg-brand-orange`, scales from `0.5` to `5`. Contains an embedded, masked background video (`mix-blend-overlay`, `opacity-50`, `overflow-hidden` container).
    - URL: `https://res.cloudinary.com/dprydfxok/video/upload/v1782459210/bg4_hzaahu.mp4`
  - Circles 2, 3, 4: Hex colors `#c93a1c`, `#8c2510`, `#521307` respectively, scaling up consecutively after the first. They fade out (`opacity: 0`) midway through the scroll.
- **"B [O] X" Giant Typography:**
  - The "O" is visually formed by the scaling orange circle. 
  - The "B" is positioned `right-[50%] mr-[14vmin]`.
  - The "X" is positioned `left-[50%] ml-[11vmin]`. (These specific margins account for font side-bearings to ensure perfect touching of the circle).
  - This layer fades out (`opacity: 0`) in the first 5% of scroll.
- **Content Reveal Sequences:**
  - Content 1 ("Think outside the box."): Fades in, slides up from `y: 50` to `0`, then slides to `y: -50` and fades out between scroll progress `0.15` and `0.45`.
  - Content 2 ("Elevating Brands. Defining Futures."): Fades in and slides up starting at `0.45` and remains visible. Contains a "Let's Talk" CTA button with an arrow hover micro-interaction.

### 3.3 Services Section (Stacking Cards)
- **Container:** `h-[300vh]`, `-mt-[100vh]` to overlap the shrinking hero.
- **Layout:** `flex-col md:flex-row`. Left side is a static text column ("Our Core Expertise."). Right side is an absolute positioning wrapper (`h-[60vh]`) for stacking cards.
- **Cards (3 total):**
  - Card 1: Brand Identity (`bg-slate-800`), Video: `https://res.cloudinary.com/dprydfxok/video/upload/v1782459211/bg5_yx7j4k.mp4`
  - Card 2: Digital Marketing (`bg-slate-700`), Video: `https://res.cloudinary.com/dprydfxok/video/upload/v1782459210/bg2_zvj76l.mp4`
  - Card 3: Web Experience (`bg-brand-orange`), Video: `https://res.cloudinary.com/dprydfxok/video/upload/v1782459209/bg3_fqnvi9.mp4`
  - **Effect:** As the user scrolls, cards slide up (`y: 100%` to `0%`). The underlying cards dynamically scale down (e.g., `scale: 0.95`, `0.90`) to create a 3D stacking depth effect. Cards have a top offset (`top: i * 40px`) to remain partially visible when stacked. Videos inside cards have `opacity-20`, `object-cover`.

### 3.4 Portfolio Section / Featured Work (Interactive Accordion)
- **Container:** Standard `min-h-screen`, `bg-[#111]`.
- **Layout:** Flex container (`h-[75vh] md:h-[60vh]`), fully responsive (`flex-col md:flex-row`). Stacks vertically on mobile, horizontally on desktop.
- **Accordion Behavior (Hover state):**
  - By default or when hovered, the active item expands (`flex-[4] md:flex-[5]`, `opacity-100`, `blur-none`).
  - Inactive items shrink (`flex-[1]`), get a dark overlay, and the image becomes blurred and dimmed (`opacity-50`, `blur-sm`).
  - Smooth animation (`transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]`).
- **Images \u0026 Content:**
  - EcoNexa: `https://res.cloudinary.com/dprydfxok/image/upload/v1782823787/EcoNexa_w4kl4w.webp`
  - Bali Travel: `https://res.cloudinary.com/dprydfxok/image/upload/v1782823794/Bali_travel_oxtsng.webp`
  - Calm: `https://res.cloudinary.com/dprydfxok/image/upload/v1782823790/Calm_Hero_fbj3b9.webp`
  - Northridge: `https://res.cloudinary.com/dprydfxok/image/upload/v1782823785/Northridge_Hero_lltty5.webp`
  - Naturally: `https://res.cloudinary.com/dprydfxok/image/upload/v1782823785/Naturally_Website_h5aq5g.webp`
  - Text overlays wrap properly on mobile (`whitespace-normal md:whitespace-nowrap`).

### 3.5 Footer Section (Video Text Mask)
- **Container:** `h-screen bg-brand-darkest`, flex column.
- **Video Mask Effect (Knockout Text):**
  - Wrapper: `mix-blend-screen`.
  - Background Video: `absolute inset-0 object-cover` (URL: `https://res.cloudinary.com/dprydfxok/video/upload/v1782459210/bg1_jgni8n.mp4`).
  - Text Overlay: `bg-black mix-blend-multiply text-white`. The text is "LET'S TALK." (`text-[12vw] font-black`).
  - Result: The video only plays *inside* the text letters. Hovering the text changes its color to `text-brand-orange` with a smooth 500ms transition.
- **Bottom Links:** Fully responsive row (`flex-col md:flex-row`, `gap-4`).

---

## 4. Technical Requirements \u0026 Implementation Details
- **Framer Motion Integration:** All scroll animations must use `useScroll` tied to a specific `target` reference (`containerRef`) and mapping via `useTransform`.
- **CSS Blend Modes:** Accurate usage of `mix-blend-overlay`, `mix-blend-screen`, and `mix-blend-multiply` is critical to the visual identity (specifically in the Hero and Footer).
- **Video Optimization:** All background `<video>` elements must include `autoPlay loop muted playsInline` to function properly on mobile devices.
- **Performance:** Use `will-change-transform` on heavily animated elements (like the scaling circles). Ensure pointer events are disabled (`pointer-events-none`) on overlay textures and videos to prevent blocking interactions.
- **Accessibility \u0026 SEO:** 
  - Ensure contrast ratios are sufficient in text overlays.
  - Implement semantic HTML (`<nav>`, `<section>`, `<footer>`, `<h1>`).
  - Ensure interactive elements are keyboard accessible (though hover effects drive the accordion, fallback clicks should be considered if necessary).

```
