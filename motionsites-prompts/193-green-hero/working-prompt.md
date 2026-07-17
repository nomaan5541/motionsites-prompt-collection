---
title: "Green Hero"
category: Sections
subCategory: Hero
premium: false
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781576722868-Green_Hero.webp
---

# Green Hero

```text
# Green Energy Website - Complete Implementation Specification

> A premium, highly interactive React hero section for a green energy brand, featuring Framer Motion micro-interactions, responsive grid layouts, and a seamlessly blended background video with ambient glowing effects.

Act as an award-winning designer and web developer. Your task is to build a highly detailed, premium, and interactive hero section for a green energy website named "GreenFuture". The implementation must be 100% accurate to the following specification, utilizing React, Tailwind CSS, TypeScript, and Framer Motion.

## 1. Visual Design System

### Color Palette
- **Primary Brand**:
  - `emerald-base`: `#009e52` (Used for text highlights, primary borders, badges)
  - `emerald-dark`: `#1d6b38` (Used for primary CTA button)
  - `emerald-darker`: `#144b27` (Used for primary CTA button hover)
  - `emerald-hover`: `#008947` (Used for secondary buttons)
- **Neutrals / Typography**:
  - `slate-900`: Text primary (Headings, bold elements)
  - `slate-800`: Text secondary
  - `slate-600`: Navigation links, secondary text
  - `slate-500`: Paragraph bodies
  - `slate-400`: Subtle UI text, icons, descriptions
  - `white`: Background base
  - `slate-50` / `slate-100`: Borders, dividers, subtle backgrounds
- **Accents (Background Blurs)**:
  - `emerald-100/20`: Ambient pulsing glows
  - `blue-50/20`: Secondary glowing spheres

### Typography
- **Primary Font (Sans-serif)**: `Inter` (Weights: 400, 500, 600, 700)
- **Display Font**: `Space Grotesk` (Weights: 600, 700)
- **Sizing & Hierarchy**:
  - Nav/Brand: `text-[21px] font-bold tracking-tight` (Space Grotesk)
  - Tagline: `text-[10px] font-bold tracking-wider uppercase` (Space Grotesk)
  - H1 Hero: `text-[30px] sm:text-[42px] md:text-[52px] lg:text-[54px] leading-[1.1] font-bold tracking-tight` (Space Grotesk)
  - Hero Subtitle: `text-base md:text-[17px] leading-relaxed` (Inter)
  - Features Title: `text-[16px] font-bold leading-tight` (Space Grotesk)
  - Features Body: `text-[13px] leading-relaxed` (Inter)

## 2. Layout Structure & Grid System

- **Main Container**: `max-w-7xl mx-auto` with `px-6 md:px-12` for bounds.
- **Header**: Flex container with space-between. Left: Brand. Center: Navigation. Right: CTA.
- **Hero Area**: Grid layout `grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8`.
  - Left Content Box (Typography & CTAs): `lg:col-span-6 xl:col-span-6`
  - Right Content Box (Video): `lg:col-span-6 xl:col-span-6`

## 3. Section-by-Section Content & Hierarchy

### A. Header Navbar
- **Brand**: Icon (Lucide Leaf) in an emerald-50 box. "GreenFuture" title with "Powering a Better Tomorrow" subtitle.
- **Navigation Items**:
  - *Solutions* (Dropdown with Aerodynamic Wind Grid, Gravitational Hydro, Unified Solar-Thermal)
  - *Technology* (Dropdown with Bio-Floating Foundations, Synchronized AI Dispatch, Atmospheric Condensers)
  - *Impact* (Clickable button)
  - *About Us* (Dropdown with Our Visionaries, Environmental Counsel, Support & FAQs)
  - *Resources* (Standard link)
- **Nav CTA**: "Get in Touch" button with an arrow leading right.

### B. Hero Main Content (Left Column)
- **Headline**: "Powering today. \
 Protecting tomorrow." (The word "tomorrow." must clearly be branded green `#009e52`).
- **Body Text**: "We deliver innovative green energy solutions that drive progress, protect our planet, and create a sustainable future for generations to come."
- **CTAs Area**:
  - "Explore Solutions" button (`bg-[#1d6b38]`) with Lucide ArrowRight.
  - "Our Impact" button (transparent with border `#009e52/45`) with Lucide Leaf.
- **Bottom Feature Grid** (`grid grid-cols-1 sm:grid-cols-3 gap-8`):
  1. *Clean Energy*: Icon Zap, "Reliable. Renewable. Responsible."
  2. *Sustainable Future*: Icon Leaf, "Building a cleaner planet for everyone."
  3. *Global Impact*: Icon Globe, "Solutions that create change worldwide."
  - Note: Desktop sizes require vertical separator lines (`w-px bg-slate-100`) between features.

### C. Hero Visual Content (Right Column)
- **Container Sizing**: `relative w-full h-[380px] sm:h-[480px] md:h-[540px] lg:h-[600px]`.
- **Media Asset**: MP4 Video Loop (No sound, autoplay, inline play).
  - **Source URL**: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_green_energy.mp4`
  - **Treatment**: Framer Motion wrapper for entrance, border-radius applied natively or via container.
  - **Style adjustments**: `w-full h-full mix-blend-multiply contrast-[1.06] brightness-[1.03]`
- **Ambient Blurs**: Positioned radically using `-z-10` and `-z-20` underlying the video.

## 4. Animations & Micro-Interactions

- **Initial Load Sequences** (Framer Motion):
  - Heading: `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}`
  - Paragraph: Delay `0.2`
  - Buttons: Delay `0.3`
  - Feature Grid: Delay `0.4`
- **Hover States**:
  - Nav links: `text-slate-600` to `hover:text-emerald-700`.
  - Dropdown Menus: Animate Presence on hover using `opacity: 0, y: 10` to `opacity: 1, y: 0`.
  - Primary CTA (Header): Arrow shifts right on hover (`group-hover:translate-x-1`).
  - Feature Icons: `group-hover:scale-110` and background color transition.
- **Continuous Animations**:
  - Background Ambient Light: `animate-pulse` on the absolute emerald blur node.
  - Leaf Icon inside Brand logo: slight scale / pulse.

## 5. Responsive Behavior

- **Mobile (< 768px)**:
  - Header center navigation hidden. Right CTA remains or shifts.
  - Hero layout stacks vertically `grid-cols-1`.
  - Heading size reduces to `text-[30px]`.
  - Feature Grid stacks vertically without border dividers.
  - Right video container height shrinks to `380px`.
- **Tablet (768px - 1024px)**:
  - Header navigation visible but tighter spacing.
  - Hero layout stacks but retains desktop sizes for fonts. Grid feature lays out in 3 columns.
- **Desktop (> 1024px)**:
  - Split 50/50 Layout. Maximum width 7xl bounded. Vertical separators between feature items.

## 6. Technical Implementation Details

- **Framework**: `React 18+`
- **Styling Engine**: `Tailwind CSS v4` (`@import "tailwindcss";`) configured accurately.
- **Icons**: `lucide-react`
- **Animations Framework**: `motion` (`framer-motion` v12 equivalent via `motion/react`)
- **Architecture & File Structure**:
  - `/src/App.tsx`: Main Composition (No Modals, clean layout)
  - `/src/components/Header.tsx`: Navigation composition
  - `/src/components/HeroLeft.tsx`: Left side typography and interactions
  - `/src/components/HeroRight.tsx`: Right side video player and ambient FX
  - `/src/index.css`: Tailwind injection and specific `@theme` variables (fonts).
- **Accessibility**:
  - Video must contain `muted playsInline autoPlay loop` safely.
  - Buttons must be actionable. Semantic HTML structure required (`header`, `nav`, `main`).
- **Performance**:
  - Ensure video uses `mix-blend-multiply` against a pure backdrop for crisp integration.
  - Lazy initialize video or prioritize load styling to prevent Cumulative Layout Shift (CLS).
- **SEO Requirements**:
  - Correct `h1`, `h4` hierarchy used throughout components. No skipping headers.
  - Valid text contrast ratios across white + slate typography.

## Actionable Developer Request:
Generate the entire, modular codebase spanning `index.css`, `App.tsx`, `Header.tsx`, `HeroLeft.tsx`, and `HeroRight.tsx` adhering 100% to this visual spec, leaving no placeholder text, maintaining exact padding values and micro-interactions.

```
