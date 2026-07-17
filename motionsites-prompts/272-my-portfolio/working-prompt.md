---
title: "My portfolio"
category: Sections
subCategory: Hero
premium: false
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1782992185168-my_portfolio_hero.webp
---

# My portfolio

```text
# Comprehensive Prompt for Building EvvyDigital - A Premium Digital Agency Website

**Objective:**
Recreate a world-class, fully responsive, and highly interactive premium landing page for a digital agency named "EvvyDigital". The website must be built using Vite, React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React. The final product must be production-ready, highly animated, and feature a stunning scroll-linked parallax hero section.

---

## 1. Technology Stack & Dependencies
- **Framework:** React 18 with Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Vanilla Tailwind + minimal custom CSS)
- **Animations:** Framer Motion (`framer-motion`)
- **Icons:** Lucide React (`lucide-react`)
- **Fonts:** System default sans-serif, optimized with Tailwind's typography stack.

---

## 2. Global Styling, Spacing & Color Palette
- **Primary Blues (Hero Background):** Background gradient `linear-gradient(180deg, #0b4ea8 0%, #1676d1 45%, #5fb9ff 100%)`.
- **Neutrals:** `#000000` (Pure Black), `#ffffff` (Pure White).
- **Grayscales:** `gray-50`, `gray-100`, `gray-200` (Borders/Lines), `gray-400`, `gray-500`, `gray-600`, `gray-900`.
- **Typography Settings:**
  - Headlines: `font-black` (weight 900), `tracking-tight` or `tracking-tighter` (-0.04em).
  - Body text: `font-medium` (weight 500) and `leading-relaxed`.
  - Massive Hero Text: `fontSize: clamp(4rem, 10vw, 10rem)`.
  - Footer Callout: `text-[12vw] md:text-[10vw] font-black leading-none bg-gradient-to-br from-white via-white to-gray-500 bg-clip-text text-transparent`.
- **Standard Layout Spacing:** All major sections use `py-32 px-6 md:px-12 relative z-10`. Inside each section, content is constrained by `<div className="max-w-7xl mx-auto">`.
- **Glassmorphism:** Custom `.liquid-glass` CSS utility.
  ```css
  .liquid-glass {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1));
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
  }
  ```

---

## 3. Section-by-Section Architecture & Content

### A. Global Components
1. **Navbar (`Navbar.tsx`):**
   - **Behavior:** Starts transparent and full width (`top-0 w-full px-6 md:px-12 py-6 bg-transparent`). Once scrolled (`window.scrollY > 50`), it shrinks into a floating pill shape (`top-6 w-[95%] md:w-[85%] max-w-6xl rounded-full liquid-glass py-3 px-6 md:px-8`).
   - **Logo:** `EvvyDigital` (`text-2xl font-bold tracking-tighter`). Transitions to black text on scroll.
   - **Links:** Services, Work, Process, Studio, Insights, Contact.
   - **Icons:** `Menu` and `X` from lucide-react for mobile navigation.

2. **Scroll Indicator (`ScrollIndicator.tsx`):**
   - **Fixed Left Bar:** Social icons (`Globe`, `MessageCircle`, `Share2`) positioned absolute left-0 h-screen.
   - **Progress Bar:** 2px wide vertical line indicating `scrollYProgress`.

### B. Page Sections & Exact Content

1. **Hero Section (`Hero.tsx`):**
   - **Background:** `min-h-[100vh]`, `bg-[#0b4ea8]`, overflow hidden.
   - **Parallax Engine:** Implement a robust scroll and mouse movement parallax system using `useSpring(scrollY, { damping: 25, stiffness: 100, mass: 0.5 })` and `useMotionValue`.
   - **Layers (Back to Front):**
     1. Gradient Sky Background.
     2. Floating clouds (`hero_one_cloud.png`) that infinitely drift via `animate={{ x: ['-2%', '2%', '-2%'], y: ['-2%', '2%', '-2%'] }}` and fade out via `opacity` linked to scroll (0 to 500px).
     3. Main Mountain (`hero_mountain.png`). Moves down on scroll at 0.6 speed. Initial entry: `y: 150, opacity: 0` to `y: 0, opacity: 1`.
     4. **Animated Text:** Staggered letter typing effect cycling through `["INNOVATE", "REIMAGINE", "ELEVATE", "TRANSFORM"]` every 3 seconds. Letters animate upwards (`initial: {opacity: 0, y: 50}`, `animate: {opacity: 1, y: 0}`) and exit upwards (`exit: {opacity: 0, y: -50}`). Uses `AnimatePresence mode="wait"` and `staggerChildren: 0.1`.
     5. Near Rocks (`hero_near_rocks.png`). Moves down at 1.2 speed.
     6. Foreground Clouds (`hero_white_clouds.png`). Moves up at -0.15 speed.

2. **About Section (`AboutSection.tsx`):**
   - **Styles:** `bg-black text-white py-32 px-6 md:px-12`.
   - **Content:** Subtitle "WHO WE ARE". Main text: "EvvyDigital is a premier digital agency specializing in cutting-edge web development, intuitive UX/UI design, and data-driven digital strategy. We don't just build websites; we build platforms that scale." (Animated `opacity: 0` to `1` with 1s duration).

3. **Services Section (`ContentSection.tsx`):**
   - **Styles:** `bg-gray-50 text-black`.
   - **Content Data:**
     1. Digital Strategy (Features: Market Research, Data Analytics, Brand Positioning).
     2. UI/UX Design (Features: Wireframing, Prototyping, User Testing).
     3. Web Development (Features: React & Next.js, Headless CMS, Performance Optimization).
   - **Layout:** Alternating flex rows (`lg:flex-row` and `lg:flex-row-reverse`). Text animates `x: -50` or `50` to `0`. Images zoom slightly on hover (`hover:scale-105`).

4. **Portfolio Section (`PortfolioSection.tsx`):**
   - **Styles:** `bg-black text-white`.
   - **Content Data:**
     1. Fintech Mobile App (UI/UX Design)
     2. Analytics Dashboard (Product Design)
     3. Luxury E-commerce (Web Development) - Spans 2 columns on desktop (`md:col-span-2`).
   - **Animations:** Grid items fade up staggered `delay: idx * 0.2`. Hover effects fade dark overlay and slide text up.

5. **Process Section (`ProcessSection.tsx`):**
   - **Styles:** `bg-gray-50 text-black`.
   - **Content Data:**
     1. 01 - Discovery & Strategy: "We start by immersing ourselves in your brand..."
     2. 02 - Design & Prototyping: "Our design team creates beautiful, intuitive interfaces..."
     3. 03 - Engineering & Build: "Using the latest technology stacks..."
     4. 04 - Testing & Launch: "Rigorous QA ensures everything works perfectly..."
   - **Layout:** 4-column grid (`md:grid-cols-2 lg:grid-cols-4`). Desktop view includes a connecting horizontal gray line `h-[2px] bg-gray-200` behind the steps. Hovering numbers makes border black.

6. **Studio Section (`StudioSection.tsx`):**
   - **Styles:** `bg-black text-white`.
   - **Content:** Title: "The Studio". Text: "We are a collective of thinkers, designers, and engineers operating from a state-of-the-art studio..."
   - **Metrics:** "24+ Creatives", "15 Awards".
   - **Images:** 2 images stacked vertically on right side. Initially `grayscale` -> `hover:grayscale-0`.

7. **Insights Section (`InsightsSection.tsx`):**
   - **Styles:** `bg-white text-black`.
   - **Content Data:**
     1. "The Future of UI: Beyond Glassmorphism" (Design)
     2. "Leveraging AI in Web Development" (Technology)
     3. "Minimalism vs. Maximalism in Branding" (Strategy)
   - **Layout:** 3-column grid (`md:grid-cols-3`). Cards have images with `aspect-[4/3]`. Title turns blue (`hover:text-blue-600`) on hover.

8. **Footer (`Footer.tsx`):**
   - **Styles:** `bg-black text-white min-h-[60vh] flex flex-col justify-between`.
   - **Headline:** "LET'S TALK"
   - **Animation:** Hooks to `useScroll({ target: footerRef, offset: ["start end", "end end"] })`. Scales from `0.8` to `1` and opacity `0` to `1` using `useTransform`.
   - **Links:** Privacy Policy, Terms of Service, Instagram, Twitter.

---

## 4. Animation & Micro-Interactions Details
- **Scroll Reveals:** Every section container uses `initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }}`.
- **Staggered Entries:** Lists use `transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}`.
- **Easing:** Rely heavily on custom easings for a premium feel: `ease: [0.2, 0.65, 0.3, 0.9]` (Spring-like decelerated cubic-bezier).

---

## 5. Assets & Image URLs
The website requires the following image URLs to be implemented identically:

**Hero Assets (Hosted):**
- Mountain: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_mountain.png`
- Near Rocks: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_near_rocks.png`
- White Clouds: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_white_clouds.png`
- Floating Clouds: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_one_cloud.png`

**Local Assets (To be configured in `/public` directory):**
- `service1.png` (Digital Strategy Image)
- `service2.png` (UI/UX Design Image)
- `service3.png` (Web Development Image)
- `portfolio1.png` (Fintech Mobile App Image)
- `portfolio2.png` (Analytics Dashboard Image)
- `portfolio3.png` (Luxury E-commerce Image)
- `studio1.png` (Office interior)
- `studio2.png` (Team working)
- `insight1.png` (Abstract glowing UI)
- `insight2.png` (Abstract AI neural network)
- `insight3.png` (Abstract graphic design)

---

## 6. Responsiveness Specifications
- Use Tailwind's `md:` and `lg:` breakpoints heavily.
- The hero typography must use `clamp(4rem, 10vw, 10rem)` to seamlessly resize between mobile and massive desktop screens.
- Mobile menus must use a full-screen `fixed inset-0 z-[60] bg-black/95` overlay with `framer-motion` spring animations sliding in from the right (`initial={{ x: '100%' }} animate={{ x: 0 }}`).
- Alternating layouts (Services section) must stack cleanly in a `flex-col` layout on mobile before switching to `lg:flex-row` and `lg:flex-row-reverse`.

---

## 7. Performance & SEO Requirements
- **Dependencies:** Ensure `framer-motion` and `lucide-react` are installed. Use Vite for optimized build processes.
- Ensure all heavy images are properly compressed (webp preferred).
- Ensure semantic HTML tags (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`) are used throughout.
- Maintain a single `<h1>` per page (located in the Hero section). Add appropriate `alt` tags to all `<img>` elements based on section content descriptions.

***End of Specification. Use this extremely detailed prompt to generate the entire React/Vite application.***

```
