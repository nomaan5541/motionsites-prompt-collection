---
title: Pixzen
category: Templates
subCategory: SaaS
premium: false
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781522720269-Pixzen.webp
---

# Pixzen

```text
You are an expert Frontend Engineer tasked with building "PIXZEN", an elite, world-class futuristic AI agency website. The design must feature an ultra-clean monochrome editorial aesthetic, massive premium typography, fluid interactions (GSAP \u0026 Framer Motion), and cinematic storytelling.

## CORE TECH STACK
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 (using CSS variables in `globals.css`)
- **Animations**: GSAP (ScrollTrigger), Framer Motion, CSS Keyframes
- **Scrolling**: Lenis Smooth Scrolling (`lenis`)
- **Icons**: Lucide React
- **Language**: TypeScript

## GLOBAL DESIGN SYSTEM
- **Typography**: "Satoshi" (via Fontshare CDN in layout.tsx). Use tight line-heights and massive letter spacing (`tracking-widest`) for labels.
- **Color Palette**:
  - Background (Light): `#F5F3EF` (Warm white)
  - Secondary Background: `#EAE7E1` (Soft gray)
  - Text Foreground: `#0A0A0A` (Pure black)
  - Muted Text: `#8E8E8E`
- **Global Texture**: Implement a persistent SVG fractal noise/grain overlay fixed across the entire site (opacity `0.03`, `mix-blend-multiply`).

## CORE FEATURES \u0026 SECTIONS (BUILD WITH 100% ACCURACY)

### 1. Global Setup \u0026 Smooth Scrolling
- Wrap the entire application in a Lenis smooth scrolling component (`lerp: 0.05`).
- Ensure all sections use a border-top separator (`border-border`).

### 2. Floating Navbar (`Navbar.tsx`)
- Fixed at the top, transparent on load, applying a backdrop blur (`backdrop-blur-md bg-background/80`) after 50px of scroll.
- **Left**: "PIXZEN" logo (tracking `0.2em`).
- **Center**: Hidden on mobile. Desktop links have a sleek scale-x hover underline animation.
- **Right**: "LET'S TALK" pill button.
- **Mobile Menu**: Include a hamburger menu that toggles a full-screen, fading background overlay containing large navigation links.

### 3. Hero Section (`Hero.tsx`)
- **Layout**: Center-aligned, minimalist typography covering the full screen (`min-h-screen`).
- **Background Texture**: Absolute `<video>` element (`hero_bg_animation_hand.mp4`) washed out with `opacity-[0.85]` and `mix-blend-luminosity`, covered by a custom CSS `radial-gradient` Halftone Dot pattern overlay to create a premium printed-ink aesthetic.
- **Typography**: A single-line massive `h1` (`90px+` on desktop). 
- **Interaction**: Implement a dynamic typing effect that seamlessly cycles through 3 phrases ("Building Tomorrow", "Shaping Futures", "Driving Growth") with a blinking cursor. Include a bouncing "Scroll Down" chevron at the bottom.

### 4. Trusted Brands (`TrustedBrands.tsx`)
- **Layout**: An Infinite Scrolling CSS Marquee spanning the full width.
- **Interaction**: The row of `lucide-react` icons and brand names continuously scrolls left. Default to `opacity-40 grayscale`, transitioning to full opacity and pausing the animation on hover. Include gradient edge fades.

### 5. Our Expertise (`Services.tsx`)
- **Layout**: Interactive List \u0026 Sticky Media Reveal. Shifted to a 12-column grid layout with a 5/7 split for desktop.
- **Interaction**: The left column contains a list of services. As the user hovers over a service title, the right column (a sticky `framer-motion` container) smoothly crossfades to reveal a corresponding high-res image and description text.

### 6. Selected Work (`FeaturedWork.tsx`)
- **Layout**: Premium Sticky Stacking Cards. A centered deck of massive, full-bleed project cards.
- **Scroll Interaction**: As the user scrolls down, each card pins to the top of the screen (`position: sticky`). Using `framer-motion`'s `useScroll`, cards subtly scale down in the background as subsequent cards layer over them, enhancing depth.
- **Click Interaction**: Include a Case Study Modal. Clicking "View Case" slides up a beautifully animated `framer-motion` overlay containing project details, locking the background scroll.

### 7. About Vision \u0026 Marquee (`About.tsx`)
- **Scroll Reveal Text**: A massive manifesto text block. Use `SplitType` and GSAP `ScrollTrigger` with `scrub: 1` to highlight the words one by one as the user scrolls down the section.
- **Marquee**: A pure CSS infinite scrolling marquee below the text spanning the full width with massive uppercase brand values ("ARTIFICIAL INTELLIGENCE — BRAND STRATEGY...").

### 8. Insights (`Insights.tsx`)
- Clean, editorial table-like rows featuring category, title, date, and an arrow icon.
- **Interaction (CRITICAL)**: Implement a custom "Cursor Image Reveal". Create an absolute `next/image` thumbnail that is completely hidden by default. When the user hovers over a specific article row, the thumbnail must smoothly scale up and use `gsap.to` to physically follow their mouse cursor coordinates across the screen.

### 9. Contact / Sticky Footer (`Contact.tsx`)
- **Design**: Massive centered typography: "Let's Build The Future." with `mix-blend-difference` if overlaid on gradients. Add animated background gradients (`animate-pulse`, `blur-3xl`).
- **Interaction**: A pill button ("Start a Project") wrapped in a custom Magnetic Button effect. Use mouse coordinates and `gsap.to` to pull the button slightly towards the user's cursor when they hover nearby, snapping back via `elastic.out` when they leave.

### 10. Footer (`Footer.tsx`)
- Ultra minimal, multi-column directory footer. Clean borders, small muted typography, referencing "PIXZEN" and "hello@pixzen.ai".

## STRICT DEVELOPMENT RULES
- Do not use generic startup templates. This must feel like a premium, Awwwards-winning luxury digital agency.
- All animations must use `power4.out` or similar easing for premium buttery smoothness.
- Absolutely NO `any` types in TypeScript.
- Build fully responsive (stack to single columns on mobile).
- Ensure `globals.css` properly wires Tailwind v4 themes without needing a separate `tailwind.config.ts`.

```
