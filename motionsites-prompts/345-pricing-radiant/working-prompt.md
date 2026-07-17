---
title: "Pricing - Radiant"
category: Sections
subCategory: Pricing
premium: true
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1783742630534-Pricing-Radiant.webp
---

# Pricing - Radiant

```text
You are an award-winning UI/UX designer and elite frontend web developer. Your task is to build a state-of-the-art, hyper-premium, and highly interactive marketing agency website named "Valley". You must faithfully recreate the design, layout, animations, and technical architecture exactly as specified below. The resulting code should be production-ready, performant, and flawless.

## 1. Technical Architecture & Stack
- **Framework:** React 18+ (Functional Components, Hooks)
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (v4 or v3 with JIT) + Custom CSS for complex effects.
- **Animations:** GSAP (GreenSock) + ScrollTrigger for scroll-based animations, Framer Motion for UI micro-interactions (e.g., mobile menu).
- **Smooth Scrolling:** Lenis (Studio Freight).
- **Icons:** Inline SVG or Lucide React.
- **File Structure:**
  - `src/App.tsx` (Main layout and component composition)
  - `src/index.css` (Global styles, variables, keyframes)
  - `src/hooks/useLenis.ts` (Smooth scroll hook)
  - `src/components/Navbar.tsx`
  - `src/components/CinematicIntro.tsx` (Complex canvas video player)
  - `src/components/sections/HeroSection.tsx`
  - `src/components/sections/ServicesSection.tsx`
  - `src/components/sections/WorkSection.tsx`
  - `src/components/sections/ProcessSection.tsx`
  - `src/components/sections/ContactSection.tsx`

## 2. Visual Design System

### Color Palette
- **Primary Background:** `#0a0a0a` (Deep dark, near black)
- **Primary Text:** `#ffffff` (Pure white)
- **Subdued Text:** `rgba(255, 255, 255, 0.4)` to `rgba(255, 255, 255, 0.7)`
- **Glass/Fog Backgrounds:** `rgba(10, 10, 10, 0.45)`, `rgba(255, 255, 255, 0.02)` to `rgba(255, 255, 255, 0.05)`
- **Borders:** `rgba(255, 255, 255, 0.06)` to `rgba(255, 255, 255, 0.2)`
- **Gradients/Vignette:** `radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)`

### Typography
- **Display Font:** "Playfair Display", Georgia, serif. Used for large headings, elegantly styled with `font-light` and `italic` accents.
- **Body Font:** "Inter", system-ui, sans-serif. Used for paragraphs, buttons, tags, and small utility text.
- **Micro-copy / Tags:** `font-body text-[10px] to text-[11px] tracking-[0.2em] to tracking-[0.35em] uppercase`.
- **Headings:** Responsive clamps, e.g., `clamp(2.5rem, 8vw, 7rem)`.

### Global Effects & Styling Details
- **Film Grain:** A static noise overlay applied globally using a CSS pseudo-element mix-blend-mode to give a cinematic texture.
- **Glassmorphism:** Heavy use of `backdrop-filter: blur(24px) saturate(1.5)` combined with semi-transparent backgrounds and subtle white borders to create floating, frosted glass cards.
- **God Rays:** CSS animated gradients rotating slowly to create volumetric light effects from the top of the page.
- **GPU Acceleration:** Heavy animation layers must use `transform: translateZ(0)` and `backface-visibility: hidden`.

## 3. Global Layout & Spacing
- Main content sections are wrapped in `<main>` which has `display: flex; flex-direction: column; gap: 150px;`.
- Max-width containers generally use `w-[92%] md:w-[85%] max-w-4xl mx-auto`.
- Standard padding for glass cards: `p-6 md:p-14`.
- Border-radius: `rounded-[1.5rem] md:rounded-[2rem]` for main containers, `rounded-2xl` for internal grid cards, `rounded-full` for badges and buttons.

## 4. Components & Sections Specification

### 4.1 Navbar (`Navbar.tsx`)
- **State:** Fixed at top, initially hidden (`opacity: 0, visibility: 'hidden'`). Revealed via GSAP at the end of the Cinematic Intro.
- **Style:** Pill-shaped (`rounded-full` on desktop, `rounded-[2rem]` on mobile). `backdrop-blur-24px`. Background shifts from ultra-sheer `rgba(255,255,255,0.05)` to a darker `rgba(10,10,10,0.6)` when scrolled.
- **Content:** Logo (left), links (center, hidden on mobile), CTA + Hamburger Menu (right).
- **Mobile Menu:** Full-screen Framer Motion overlay (`bg-black/80 backdrop-blur-xl`). Links stagger animate in. Body scroll is locked when open.

### 4.2 Cinematic Video Intro (`CinematicIntro.tsx`)
- **Core Concept:** A scroll-scrubbed video experience. The user scrolls to advance video frames before hitting the main website content.
- **Implementation:** 
  - Hidden `<video>` element loading: `https://res.cloudinary.com/dprydfxok/video/upload/v1782932129/hero-video_ponm8n.mp4`
  - A `<canvas>` element draws `ImageBitmap` frames extracted from the video.
  - GSAP ScrollTrigger maps scroll progress to frame index.
  - Sizing: Canvas uses `cover` object-fit equivalent calculation on all devices to ensure no black bars.
- **Overlays:**
  - Radial vignette overlay.
  - Loading spinner overlay while frames extract.
  - Text: "VALLEY" (huge display text), fades and scales out on scroll.
  - Scroll indicator: "Scroll to Explore The Experience". Fades out immediately upon scrolling.
- **Transition:** At the end of the scroll trigger (0.9 progress), the canvas fades to 0 opacity, revealing the static global background, and the `Navbar` fades in.

### 4.3 Background Layer
- Behind everything, fixed to the viewport:
  - `<div className="fixed inset-0 bg-cover bg-center bg-no-repeat pointer-events-none z-[-1]" style={{ backgroundImage: "url('https://res.cloudinary.com/dprydfxok/image/upload/v1782932143/last-frame-bg-website_wiotlm.png')" }} />`

### 4.4 Hero Section (`HeroSection.tsx`)
- **Layout:** Negative top margin (`-mt-[100vh]`) so it sits directly under the fading cinematic intro.
- **Visuals:** Large glassmorphism card floating in the center.
- **Content:** 
  - Award badge pill.
  - Headline: "We craft digital *experiences* that transform brands into *movements.*" (Using `<br className="hidden md:block" />` for responsive wrapping).
  - Paragraph text and "Start a Project" pill button.
  - Stats bar at the bottom: 4 columns on desktop, 2 on mobile (e.g., "280% Avg. ROI").
- **Animation:** GSAP ScrollTrigger `stagger` fades and moves (`y: 50`) elements up as they enter viewport, removing blur.

### 4.5 Services Section (`ServicesSection.tsx`)
- **Grid:** 1 column mobile, 2 columns desktop.
- **Cards:** Dark, sheer glass cards. Hover state applies a subtle `radial-gradient` glow at the top center of the card.
- **Content:** Icon (SVG), large metric (e.g., "4.8x"), title, description, and an animated "Learn more" arrow link that appears and slides right on hover.
- **Animation:** Header fades in, cards stagger in from bottom.

### 4.6 Selected Work (`WorkSection.tsx`)
- **Grid:** Perfect 2x2 grid (`grid-cols-1 md:grid-cols-2`). 
- **Assets:**
  - `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781526573377-Bali_travel.webp`
  - `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781535135765-WorldView_website.webp`
  - `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781598113945-Eathan_Portfolio.webp`
  - `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781612917716-Ninjas_Website.webp`
- **Interactions:** Aspect ratio 4/3. Image scales up slightly on container hover (`group-hover:scale-105`). Bottom gradient darkens on hover. Text overlay translates up slightly on hover.

### 4.7 Process Section (`ProcessSection.tsx`)
- **Grid:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`.
- **Visuals:** A horizontal timeline line (`hidden lg:block`) connects the steps. GSAP animates this line `scaleX: 1` from origin-left on scroll.
- **Steps:** 01 to 04. Large faded numbers behind crisp titles and descriptions.

### 4.8 Contact Section (`ContactSection.tsx`)
- **Layout:** Centralized glass card.
- **Content:** Headline "LET'S BUILD Something Extraordinary", CTA button, email link, and social links footer.
- **Footer line:** A subtle separator at the bottom of the section with copyright info.

## 5. Interactions & Motion Specs
- **GSAP Defaults:** `ease: "power3.out"`, typical duration `0.8` to `1.0` seconds.
- **Reveal Pattern:** Elements start at `opacity: 0, y: 40, filter: blur(8px)` and animate to `opacity: 1, y: 0, filter: blur(0px)`.
- **Hover States:** Buttons expand padding, borders brighten, gaps increase. Icons translate on X-axis. `transition-all duration-500`.

## 6. Responsiveness
- 100% responsive across mobile (`< 768px`), tablet (`768px - 1024px`), and desktop.
- Typography scales via CSS `clamp()` functions.
- Mobile grids collapse to 1 column gracefully.
- Padding on glass cards reduces on mobile (e.g., `p-6` mobile vs `p-14` desktop).
- Video extraction strictly uses `cover` logic to avoid black bars on vertical mobile screens.

## 7. SEO & Accessibility Requirements
- Use semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`).
- Maintain logical heading hierarchy (`<h1>` in intro, `<h2>` for section titles).
- Ensure `aria-label` attributes on icon buttons (like the mobile menu toggle).
- Images must have descriptive `alt` tags.

## 8. Performance Optimization
- Video must use `preload="auto"` and `playsInline`. Extracting frames to canvas saves massive repaints compared to scroll-scrubbing a raw `<video>` element on iOS.
- Downscale canvas rendering logic to a max width (e.g., `1280px`) to cap memory usage on high-DPI displays.
- Use `will-change: transform, opacity` and hardware acceleration on heavily animated elements.
- Lazy load images where appropriate.

```
