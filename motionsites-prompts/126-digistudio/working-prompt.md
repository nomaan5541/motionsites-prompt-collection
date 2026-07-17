---
title: Digistudio
category: Templates
subCategory: Agency
premium: false
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1782890465994-Digistudio_website.webp
---

# Digistudio

```text
Act as an award-winning UI/UX designer and elite frontend web developer. Your task is to recreate a premium, highly interactive, and visually stunning digital agency website from scratch. You must adhere strictly to the following comprehensive specifications to ensure maximum accuracy in visual design, technical implementation, and user experience.

## 1. Visual Design System

### 1.1 Exact Color Palette
- **Primary Background**: `#0c1128` (Deep Midnight Blue)
- **Primary Text**: `#ffffff` (Pure White)
- **Secondary Text**: `#9ca3af` (Gray 400), `#d1d5db` (Gray 300)
- **Muted Text**: `#4b5563` (Gray 600)
- **Accent Custom Variables**: 
  - Neon Blue: `#00f0ff`
  - Neon Purple: `#b026ff`
- **Tailwind Gradients \u0026 Accents**: 
  - `from-blue-400 to-purple-500`
  - `from-blue-200 to-purple-200`
- **Overlays \u0026 Borders**:
  - Light/Glass borders: `white/5`, `white/10`, `white/20`, `white/30`
  - Dark/Shadow overlays: `black/40`, `black/60`, `black/90`

### 1.2 Typography
- **Global Font Family**: `Outfit`, sans-serif (imported via Google Fonts: `wght@300;400;500;600;700;800;900`)
- **Headings (H1, H2)**: `font-black` (weight 900), extremely tight tracking (`tracking-tighter`), and tight line-height (`leading-[1.1]` or `leading-tight`).
- **Body Text**: `font-light` (weight 300) or `font-medium` (weight 500) for standard reading, relaxed line heights (`leading-relaxed`).
- **Small Accents/Badges**: `text-xs`, `font-bold`, uppercase, and extremely spaced tracking (`tracking-widest`).

## 2. Layout Structure \u0026 Grid System
- **Global App Container**: Min-height `min-h-screen`, `w-full`, background `#0c1128`, text white, custom selection color (`selection:bg-blue-500/30`). `overflow-x-hidden` on the body.
- **Section Wrappers**: Standard vertical padding of `py-32` (128px) or `py-24` (96px).
- **Max Widths**: 
  - General Sections (Services, About, Footer): `max-w-6xl` or `max-w-7xl`
  - Expanding Gallery (Work): `max-w-[1400px]`
  - Navbar Container: `max-w-5xl`
- **Responsive Approach**: Mobile-first Tailwind (`flex-col` default, switching to `md:flex-row` on tablet/desktop). Standard `px-4 sm:px-6 lg:px-8` horizontal paddings.

## 3. Section-by-Section Content \u0026 Hierarchy

### 3.1 Navbar
- **Positioning**: Fixed, `top-6`, `z-50`, horizontally centered.
- **Style**: Pill-shaped (`rounded-full`), transitioning to `rounded-3xl` on mobile menu open. Glassmorphism effect with dynamic border `border-white/10`.
- **Navigation Items**: "Services", "Work", "Agency", "Contact".
- **CTA**: "Start Project" button (white background, black text, shadow hover effects).

### 3.2 Hero Section (Scroll-Based Masking)
- **Layout**: `h-[300vh]` section to allow extensive scroll duration, with a `sticky top-0 h-screen` inner container.
- **Content Layers**: 
  - *Base Layer*: Sketch outline of a city (`https://res.cloudinary.com/dprydfxok/image/upload/v1782890197/hero_city_outline_fzg37d.jpg`) + "Imagine the Future".
  - *Top Layer*: Realistic city skyline (`https://res.cloudinary.com/dprydfxok/image/upload/v1782890197/hero_city_iglhwn.jpg`) + "Build the Reality".
- **Scroll Indicator**: Bouncing Chevron arrow at the bottom center.

### 3.3 Clients (Infinite Ticker)
- **Header**: "Trusted by 300+ businesses" with a small "Interested" pill badge.
- **Logos**: Use Lucide-React icons (Camera, ShoppingBag, Hexagon, Tv, Globe2, CreditCard) mapped to text (Instagram, Shopify, HubSpot, CNBC, BUSINESS INSIDER, stripe).
- **Fade Edges**: Absolute gradient overlays on the left and right (`from-[#0c1128] to-transparent`) to mask the ticker entering and exiting.

### 3.4 Services (2x2 Grid)
- **Header**: "Services Built Specifically for your Business".
- **Cards**: 4 cards (UI/UX, Visual Graphic, Strategy, Business Growth).
- **Style**: Glassmorphism (`bg-white/5`, `backdrop-blur-md`), rounded-3xl.
- **Icons**: Placed inside quarter-circle backgrounds situated in the corners of the cards.

### 3.5 Work (Expanding Flex Gallery)
- **Header**: "Our Works" + "View All Projects" link.
- **Gallery**: 5 projects arranged in a flex container (`h-[400px]`). Horizontal on desktop, vertical on mobile.
- **Behavior**: Hovering over a project expands its `flex` value to take up more space while sibling items shrink. Active project shows detailed text and CTA button.

### 3.6 About (Split Content)
- **Layout**: 2-column grid (`lg:grid-cols-2`).
- **Left**: Bold headline ("Design is not just what it looks like. It's how it feels.")
- **Right**: Paragraph descriptions + statistics (10+ Years Experience, 150+ Global Clients).
- **Background Detail**: Center-positioned absolute blurred purple circle (`bg-purple-500/5 blur-[120px]`).

### 3.7 Footer
- **Layout**: Massive bold CTA headline ("Let's create something epic.") + "Start a Project" button.
- **Links Area**: 4-column grid (Brand info, Navigation links, Socials icons).
- **Bottom Bar**: Copyright, Privacy Policy, Terms of Service.

## 4. UI Components \u0026 Styling Details
- **Buttons**: Fully rounded (`rounded-full`), scale up on hover (`hover:scale-105`), active click scale down (`active:scale-95`). Glow shadows `shadow-[0_0_20px_rgba(255,255,255,0.2)]`.
- **Links**: Navigation links feature a `span` bottom-border that expands on hover (`w-0` to `w-full`).
- **Glassmorphism**: Widespread use of `bg-white/5`, `backdrop-blur-md` or `blur(24px)`, and `border-white/10`.

## 5. Animations \u0026 Motion Design Specifications (Framer Motion)
- **Navbar Scroll Blur**: As the user scrolls `[0, 50]` pixels, background opacity transitions from `0.02` to `0.08` and backdrop-filter blur increases from `8px` to `24px`.
- **Hero Scroll Reveal**: Uses `useScroll` and `useTransform`.
  - A `clipPath` circle expands from `0%` to `150%` as the user scrolls down the `300vh` section.
  - Background scale zooms subtly from `1` to `1.15`.
- **Infinite Ticker**: Animates `x: ["0%", "-50%"]` continuously. Duration: `40s`, ease: `"linear"`, `repeat: Infinity`.
- **Scroll Entrance (whileInView)**: Almost all sections fade in. Standard parameters: `initial={{ opacity: 0, y: 20 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true, margin: "-100px" }}`, `duration: 0.8`.
- **Work Gallery Accordion**: Transition ease `[0.25, 1, 0.5, 1]`, duration `0.6s`. Active flex value `4`, inactive flex value `0.8`.
- **Micro-Interactions**: Hovering gallery items slowly scales the background image (`duration-1000 group-hover:scale-105`).

## 6. Images \u0026 Asset Specifications
You must use these exact URLs for the assets to ensure accurate reproduction:

**Hero Section (Cloud URLs):**
- Outline Image: `https://res.cloudinary.com/dprydfxok/image/upload/v1782890197/hero_city_outline_fzg37d.jpg`
- Realistic Reveal Image: `https://res.cloudinary.com/dprydfxok/image/upload/v1782890197/hero_city_iglhwn.jpg`

**Work Section Projects:**
1. Pixzen: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781522720269-Pixzen.webp`
2. Wander: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781631791578-Wander_Hero.webp`
3. Agentify: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781671943344-Agentify_Hero.webp`
4. Future: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781679053418-Future_Carousel.webp`
5. Genova: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781670271708-Genova_Hero.webp`

## 7. Technical Implementation Details
- **Frontend Architecture**: React + TypeScript. Create individual component files (`Navbar.tsx`, `Hero.tsx`, `Clients.tsx`, `Services.tsx`, `Work.tsx`, `About.tsx`, `Footer.tsx`) inside a `src/components` directory. Main assembly in `App.tsx`.
- **Required Libraries**: 
  - `react`, `react-dom`
  - `framer-motion` (for all scroll, layout, and entrance animations)
  - `lucide-react` (for icons)
  - `tailwindcss` (for utility-first styling)
- **Performance Optimization**: Use `webp` format for gallery images (already provided). Implement `loading="lazy"` on images below the fold. Ensure Framer Motion's `viewport={{ once: true }}` is used to prevent re-triggering heavy animations.
- **SEO Requirements**: Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`). Include appropriate `alt` attributes on all images. Only one `<h1>` tag per page (in the Hero). Use readable `aria-labels` on icon-only buttons (like the mobile menu toggle).
- **Accessibility**: Ensure sufficient color contrast. Focus rings should remain intact or be styled elegantly for keyboard navigation.

Execute this specification meticulously. Every padding value, animation easing, and font weight matters to recreate the exact premium feel of the original design.

```
