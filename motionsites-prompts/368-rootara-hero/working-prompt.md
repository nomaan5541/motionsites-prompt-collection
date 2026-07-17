---
title: "Rootara Hero"
category: Sections
subCategory: Hero
premium: true
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1783042628872-rootara_hero.webp
---

# Rootara Hero

```text
# MASTER IMPLEMENTATION PROMPT — BASILICO LUXURY RESTAURANT WEBSITE

You are an expert Frontend Developer and UI/UX Designer. Your task is to build a premium, cinematic fine-dining restaurant website named "Basilico". The website must feel luxurious, warm, sophisticated, and highly immersive, taking inspiration from award-winning Awwwards experiences.

## 1. TECH STACK
- Next.js (App Router)
- Tailwind CSS v4
- GSAP (for scroll triggers and staggered reveals)
- Framer Motion (for custom cursor)
- Lenis (for smooth scrolling)
- TypeScript
- `next/image` for image optimization

## 2. DESIGN SYSTEM & AESTHETICS
- **Theme**: Dark Mode strictly. The main background color must be pure black (`#070707`).
- **Color Palette**: 
  - Primary text: White
  - Accents: Luxury Gold (`#D9A35F`) and Burnt Orange (`#C97A2B`)
  - Secondary text: Warm Gray (`#BDBDBD`)
- **Typography**: 
  - Headings: `font-serif` (Playfair Display)
  - Body: `font-sans` (Inter), extremely clean and highly legible, using light font weights (`font-light`).
- **Container**: The root `<main>` container must be constrained to `max-w-[1280px] mx-auto` to create a beautifully boxed, cinematic frame on large monitors.
- **Glassmorphism**: Use translucent backgrounds (`bg-white/5` or `bg-[#070707]/50`) paired with `backdrop-blur-md`, subtle white/10 borders, and glowing box shadows (`shadow-[0_0_30px_rgba(217,163,95,0.1)]`) for UI cards and modals.

## 3. SECTIONS & LAYOUT

### 3.1 Custom Global Elements
- **Smooth Scroll**: Implement Lenis for buttery smooth scrolling.
- **Custom Cursor**: Implement a custom dot cursor using Framer Motion that follows the mouse and expands slightly when hovering over clickable elements.
- **Navbar**: Sticky glassmorphism header, "Basilico" brand logo on the left, centered navigation links, and a gold-bordered "Reserve Table" button on the right.

### 3.2 Hero Section
- **Background**: Use `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/restaurant_bg.png`. 
  - Set it as absolute, `opacity-90` over a `#070707` base.
  - Apply a subtle edge vignette using a radial gradient to darken the corners, and a linear gradient on the left side (`from-[#070707]/60 to-transparent`) to ensure text readability. Do not wash out the image with heavy black overlays.
- **Typography Layout**: On the left, display a massive staggered reveal headline: "Crafting Exceptional Culinary Experiences" (with "Exceptional" highlighted in a gold gradient). Font size must be carefully scaled (e.g. `text-[50px]` on desktop).
- **Video Card**: On the center-right, display a floating, looping, muted `<video>` card (`https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_food_video.mp4`). Constrain its width to `max-w-[450px]` with an `aspect-[4/5]`. Include a glass overlay text tag that says "Chef's Special: Truffle Wagyu Ribeye".
- **Animations**: Use GSAP to animate the text in from the bottom (`y: 100`), stagger them, and make the video card float continuously up and down (`yoyo: true`).

### 3.3 Featured Dishes (Menu preview)
- Display a grid of 4 luxury dishes.
- Each dish card should have an aspect-[3/4] image that scales up slightly on hover, a glassmorphism base, and text below it (Name, Price, short description).
- Includes a "View Full Menu" button in the section header.
- **Menu Modal**: Clicking "View Full Menu" must open a stunning, full-screen glassmorphism modal overlay. 
  - Must lock background scrolling (`document.body.style.overflow = "hidden"`).
  - Must display categorized lists (Starters, Mains, Desserts) with elegant dashed lines connecting item names to prices.

### 3.4 About Section
- Split layout: Text on the left, an overlapping circular or uniquely shaped image on the right (`aspect-square rounded-full`).
- Text should detail Chef Alexander Thorne's vision.
- Include an elegant, italicized serif signature (`font-serif italic text-4xl text-[#BDBDBD] opacity-80`) that says "Alexander Thorne" at the bottom of the text.

### 3.5 Special Tasting Menu
- 3-column layout highlighting a 7-course tasting menu.
- Use staggered GSAP scroll-triggers to fade these columns in sequentially when scrolling into view.

### 3.6 Immersive Experience
- A cinematic parallax section with a fixed background image or a very large image card detailing the restaurant's atmosphere, private dining, and wine cellar.

### 3.7 Testimonials
- A clean, interactive carousel of food critic quotes.
- Background of the section must seamlessly inherit the main `#070707` background (do not apply different background colors to outer section tags).

### 3.8 Reservations
- A beautifully styled form allowing users to select Date, Time (dropdowns must retain standard background colors for visibility like `bg-[#121212]`), Guests, and Special Requests.
- The form should sit over a subtle gold glowing radial background.

### 3.9 Gallery (Visual Story)
- A dense, editorial-style masonry or asymmetric grid layout showcasing restaurant ambiance, plating, and ingredients. 
- Ensure high-quality image selection.

### 3.10 Footer
- Elegant minimalist footer containing the Basilico logo, brief description, contact info, newsletter signup, and copyright text.

## 4. IMAGE & ASSET REQUIREMENTS
- **CRITICAL**: Use the exact working images below to prevent 404 errors. Do not use random unsplash IDs as they often break or require premium access.
- **Hero Background**: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/restaurant_bg.png`
- **Hero Video**: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_food_video.mp4`
- **Featured Dishes**:
  - `https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800&auto=format&fit=crop`
  - `https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop`
  - `https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop`
  - `https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop`
- Ensure `images.unsplash.com` is configured in `next.config.ts` under `remotePatterns`.

## 5. ANIMATION & INTERACTION RULES
- Animations must feel expensive: use slow durations (`1s` to `2s`), custom easing (`power3.out`, `power4.out`), and slight scale or y-axis reveals.
- Do not make animations too fast or bouncy; luxury is slow and deliberate.
- Every major section should fade in smoothly via GSAP ScrollTrigger as it enters the viewport.

**Execute this build prioritizing flawless responsive design, high-contrast legibility, and premium cinematic immersion.**

```
