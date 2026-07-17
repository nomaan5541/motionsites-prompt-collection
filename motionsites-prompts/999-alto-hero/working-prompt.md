---
title: "Alto Hero"
category: Sections
subCategory: Hero
premium: false
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1782978903647-alto_hero.webp
---

# Alto Hero

```text
# MASTER PROMPT: LUXONN LUXURY REAL ESTATE WEBSITE

Create a world-class premium luxury real estate website with cinematic visuals, ultra-modern UI, immersive animations, and high-end interactions. The design must feel like a fusion of luxury architecture, Apple-level minimalism, modern editorial layouts, and award-winning Awwwards websites.

---

## 1. TECH STACK & ARCHITECTURE

- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP (core and ScrollTrigger plugin)
- **Scrolling**: `lenis` for buttery smooth scrolling (ReactLenis wrapper in layout)
- **Icons**: `lucide-react`
- **Images/Media**: `next/image` for optimization. Native `<video>` tag for background videos.

---

## 2. DESIGN SYSTEM & AESTHETICS

### Color Palette (Tailwind V4 @theme inline)
- Primary Background: Pure black `#050505`
- Secondary Backgrounds: Charcoal `#111111`, Deep Gray `#1A1A1A`
- Accent Colors: Luxury Gold `#D4A95F`, Soft Champagne `#E7C98B`
- Text Colors: Pure White `#FFFFFF`, Soft Gray `#A0A0A0`

### Typography
- Headings: `Bebas Neue` from `next/font/google` (Uppercase, tight line-height, tracking-widest)
- Body: `Inter` from `next/font/google` (Clean luxury spacing)

### Global Styles
- **Glassmorphism utility (`.glass`)**: `background: #00000047; backdrop-filter: blur(16px); border: 1px solid #ffffff4d;`
- Global text selection: `bg-gold text-black`

---

## 3. COMPONENT BREAKDOWN

All components must be client components (`"use client"`) where GSAP is used.

### 1. `SmoothScroll.tsx` (Global Wrapper)
- Wrap `{children}` in `layout.tsx` using `ReactLenis` with `lerp: 0.05`.

### 2. `Navbar.tsx`
- **Layout**: Full-width banner, fixed top, z-50.
- **Style**: Initially transparent. On scroll, transitions to a liquid glass style (`bg-black/70`, heavy blur, bottom border, shadow).
- **Content**: 
  - Left: "LUXONN" text logo + "L" icon inside a gold circle.
  - Center: Nav links.
  - Right: Search/Menu icons, "Book Viewing" button with magnetic hover effect.
- **Interactions**: Nav links use Lenis programmatic smooth scroll (clicking "Home" smoothly scrolls to the Hero section `#home`).
- **Animations**: GSAP initial fade down. React state (`isScrolled`) controls the scroll background transition when `scrollY > 50`.

### 3. `Hero.tsx`
- **Layout**: Full-screen (`100vh`), identified by `id="home"`.
- **Background**: Use a `<video>` tag with `autoPlay muted playsInline` pointing to `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_bg_video_real_estate.mp4` and a `poster` fallback pointing to `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/luxonn_hero_bg%20_img.png`. The video pauses for 5 seconds after finishing before restarting. Overlays use subtle gradients on the left and bottom, keeping the center/right fully transparent to reveal the natural video brightness.
- **Content**: Oversized "LUXURY REDEFINED" typography, elegant subtext. CTA buttons feature glowing gold drop-shadows and subtle white borders that intensify on hover.
- **Floating Cards**: Desktop-only glass cards on the right side showing Location, Price, and Sq Ft.
- **Animations**: GSAP Timeline on load (Split text reveal, buttons fading up, cards sliding in).

### 4. `FeaturedProperties.tsx`
- **Layout**: 3-column grid (Dubai, New York, Miami properties).
- **Cards**: Large images covering the card, dark gradient overlay. Info box slides up on hover.
- **Interactions**: Image scales up on hover, border glows gold.
- **Animations**: GSAP ScrollTrigger to stagger reveal the cards as they enter the viewport.

### 5. `About.tsx`
- **Layout**: Split layout. Image on left, text/stats on right.
- **Image**: Large architectural image. Use GSAP ScrollTrigger with `scrub: true` to move the `img` tag slightly along the Y-axis for a parallax effect (Ensure null check on target before animating).
- **Content**: "ARCHITECTURAL MASTERPIECES" heading, luxury editorial paragraphs, 3 stat counters (25+ Years, 4B+ Sold, 12 Locations).

### 6. `PropertyShowcase.tsx`
- **Layout**: Horizontal scrolling section.
- **Animations**: Pin the section container using GSAP ScrollTrigger, and translate the inner flex container along the X-axis based on scroll distance.
- **Content**: Large landscape images of prestigious properties.

### 7. `Services.tsx`
- **Layout**: 4-column grid for services (Property Buying, Selling, Investment, Design).
- **Cards**: Glass background, lucide icons (Search, Home, TrendingUp, Paintbrush).
- **Interactions**: On hover, icons scale/translate, card gets a top gold border, and a radial gold blur appears behind the card.

### 8. `Testimonials.tsx`
- **Layout**: 2-column grid.
- **Style**: Dark editorial layout with large gold quotation marks in the background.
- **Content**: 5 gold stars, review text, client avatar (`next/image`), name, and role.
- **Animations**: GSAP stagger reveal on scroll.

### 9. `VideoSection.tsx`
- **Layout**: Full width, `90vh` height.
- **Background**: Large property image with a dark backdrop-blur overlay.
- **Interactions**: A massive play button in the center. GSAP pulse animation (yoyo) on the button continuously. Image wrapper slightly scales down and rounds its corners using GSAP `scrub` on scroll.

### 10. `Contact.tsx`
- **Layout**: Split layout. Info/Map left, Form right.
- **Left Side**: Address, Phone, Email. Below it, a dark grayscale map placeholder that gains color and scales on hover.
- **Right Side**: Glassmorphism inquiry form. Floating labels that shrink and turn gold when inputs are focused.

### 11. `Footer.tsx`
- **Layout**: 4 columns (Brand, Properties, Company, Contact).
- **Content**: "LUXONN" branding, copyright text, minimal thin borders.

---

## 4. CRITICAL RULES & CONFIGURATIONS

1. **Next.js Config**: You MUST configure `next.config.ts` to allow `images.unsplash.com` in `remotePatterns` to prevent image loading errors.
2. **GSAP Targets**: Always check if DOM elements/refs exist before passing them to GSAP to avoid TypeScript and runtime errors.
3. **No Placeholders**: Use real `images.unsplash.com` URLs for luxury mansions and properties.
4. **Spacing & Polish**: Adhere strictly to the luxury aesthetic. Generous padding, pixel-perfect alignment, and subtle transitions are mandatory. Avoid generic bootstrap styles or cheap gradients.
```
