---
title: "EcoNexa"
category: Sections
subCategory: Hero
premium: false
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781629150606-EcoNexa.webp
---

# EcoNexa

```text
# EcoNexa: Comprehensive Website Recreation Prompt

You are an award-winning UI/UX designer and elite frontend web developer. Your task is to recreate the **EcoNexa** website—a premium, highly polished, and sustainable-technology-focused landing page. The website must be recreated with absolute pixel-perfect accuracy, robust frontend architecture, and butter-smooth micro-interactions.

Follow this comprehensive specification to implement the site.

---

## 1. Visual Design System

### Color Palette
The color system relies on earthy, natural greens contrasted with deep slate grays and crisp off-whites to convey a premium, eco-friendly brand.
- **Primary Green (Brand):** `#5C7D52` (Used for buttons, accents, text highlights)
- **Vibrant Green Accent:** `#74b72e` (Used for high-contrast accents, icons, and SVG decorations)
- **Dark Green Hover:** `#4a6541` (Used for button hover states)
- **Background Light:** `#F4F4F4` (Global body background)
- **Section Background Light:** `#FAFAFA` (Used for alternating sections like Services)
- **Card/Element Background:** `#FFFFFF` (Pure white for elevated elements)
- **Typography Dark (Headings):** `#111827` and `#0F172A`
- **Typography Body (Muted):** `#6B7280` (Tailwind `gray-500`) and `#4B5563` (`gray-600`)

### Typography
- **Font Family:** `Inter`, sans-serif (imported via Google Fonts).
- **Weights:** Regular (400), Medium (500), SemiBold (600), Bold (700), ExtraBold (800).
- **Headings:** Tight letter spacing (`tracking-tight`), heavy weights (Bold/ExtraBold), and compact line heights (`leading-[1.1]` to `leading-tight`).
- **Overlines/Labels:** Uppercase, extra-wide tracking (`tracking-widest`), small size (`text-xs` or `text-sm`), bold weight, colored in Primary Green.

---

## 2. Layout Structure & Grid System
- **Container:** The central content wrapper uses a maximum width of `1280px` (Tailwind `max-w-7xl`) with generous horizontal padding (`px-6` to `px-8`).
- **Grid:** Use CSS Grid (Tailwind `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`) for aligning cards and featured content.
- **Spacing:** Use large vertical padding (`py-24` to `py-28`) to give sections room to breathe.

---

## 3. Section-by-Section Implementation

### A. Global Elements
- **Header:** Fixed or sticky top navigation. Transparent or blurred background (`backdrop-blur-md`). Clean logo on the left, navigation links centered, and a primary "Get Started" button on the right.
- **Footer:** Dark or neutral background. Contains standard columns (About, Links, Legal, Socials) with muted text.

### B. Hero Section
- **Layout:** Two-column flex/grid. Left column for text (55% width), right column for visuals. Minimum height `calc(100vh - 100px)`.
- **Content:** 
  - Overline: "Sustainable Solutions"
  - H1: "Building a Greener Future Together" (Size: `text-[3rem] sm:text-[4rem]`).
  - Paragraph: "We empower communities and businesses with sustainable solutions..."
  - CTA Button: Solid primary green, rounded-xl, padding `px-8 py-4`, with a Lucide `ArrowRight` icon. Shadow: `shadow-lg shadow-green-900/20`.
  - "Trusted By" row at the bottom left: Muted grayscale logos/icons (Leaf, Hexagon, Globe, Box from Lucide React) with company names (GreenFuture, EcoBuild, etc.).
- **Visuals (Right Column):** A floating, 3D-like video element overlapping the background.
  - Size: `w-[700px] h-[700px]` on large screens, positioned absolutely on the right.
  - Video Source: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/floating_island_bg_hero.mp4`
  - Blending: Use `mix-blend-multiply` with `object-contain`.

### C. Our Services (Solutions) Section
- **Background:** `#FAFAFA` with a custom CSS radial-gradient dotted pattern (`radial-gradient(#5C7D52 2px, transparent 2px)` at `40px 40px` size, opacity 15%). Include large absolute-positioned decorative circular borders overlapping the corners of the section.
- **Header:** 
  - Centered layout.
  - Custom Label: "OUR SERV 🍃 ICES" (using the Lucide `Leaf` icon embedded inline with horizontal flanking lines).
  - H2: "Pioneering Sustainable Tech" (Extra bold, `text-[2.75rem]`).
- **Cards (4 in a row):**
  - **Structure:** White background, heavily rounded corners (`rounded-[2rem]`), thick primary green bottom border (`border-b-[6px] border-[#5C7D52]`), and a soft floating shadow.
  - **Floating Icon:** Positioned absolutely at `-top-7 left-8`. Size `w-16 h-16`, solid `#5C7D52` background, white icon (Sun, Wind, BatteryCharging, Factory). Must float up slightly on hover.
  - **Image Top Half:** Image height `h-52`, object cover. Use absolute SVG curve to cut the bottom of the image cleanly. The SVG must be filled with `#ffffff` and positioned at `bottom-[0px]` pointing upwards to mask the image seamlessly into the white card body.
  - **Image Sources:** 
    - `/images/solar.png` (Solar Integration)
    - `/images/wind.png` (Wind Energy)
    - `/images/storage.png` (Energy Storage)
    - `/images/manufacturing.png` (Eco-Manufacturing)
  - **Text:** Bold dark title, muted gray description. Padding `px-8 pt-8 pb-10`.

### D. Featured Projects (Case Studies) Section
- **Header:** Left-aligned. Overline "Case Studies", H2 "Featured Projects", with a "View All Projects" link pushed to the right.
- **Cards (Grid of 3):**
  - Aspect ratio `aspect-[4/5]`, `rounded-2xl`, hidden overflow.
  - Image fills the container. On hover, the image scales up (`group-hover:scale-105 duration-700`).
  - **Overlay:** Absolute inset gradient `bg-gradient-to-t from-black/80 via-black/20 to-transparent`.
  - **Content:** Positioned at the bottom left. "Category" in green text, "Project Title" in white. Text translates up seamlessly on hover (`translate-y-4 group-hover:translate-y-0`).
  - **Images:** High-quality Unsplash architectural/renewable energy URLs.

### E. Additional Sections
- **About Us & Impact:** Clean layouts alternating between image blocks and text. Use consistent typography, large border radiuses (`rounded-2xl` or `rounded-[2rem]`), and subtle green accent lines.
- **Contact:** Clean form layout with a minimalist aesthetic. Green focus rings on input fields (`focus:ring-[#5C7D52]`).

---

## 4. Animations & Micro-Interactions
- **Hover States:** 
  - Buttons: Background color shifts gracefully, shadow deepens.
  - Cards: Soft vertical lift (`-translate-y-1` or `-translate-y-2`) and expanded shadow (`hover:shadow-2xl` or `hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]`).
  - Floating Icons: Move up slightly on card hover.
- **Image Scaling:** Images inside cards should zoom slowly (`duration-700`) on parent group hover without breaking the border radius.
- **Transitions:** Use `transition-all duration-300 ease-in-out` universally for color, transform, and shadow changes.
- **Scroll Interactions:** Add smooth scrolling to anchor links (`html { scroll-behavior: smooth; }`).

---

## 5. Technical Implementation & Architecture
- **Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS 3.4+, Lucide React (for iconography).
- **Styling Architecture:** 
  - Rely exclusively on Tailwind utility classes.
  - Use arbitrary values (e.g., `text-[3rem]`, `rounded-[2rem]`) when exact pixel values are needed to match the design.
  - Configure the custom colors and font family within `tailwind.config.js`.
- **Component Structure:**
  - `src/App.tsx` acts as the root composer.
  - Place discrete sections into `src/components/` (e.g., `Hero.tsx`, `Solutions.tsx`, `Projects.tsx`).
- **Responsiveness (100% Mobile Ready):**
  - Use mobile-first Tailwind prefixes (`sm:`, `md:`, `lg:`).
  - Hero text scales from `text-4xl` to `text-[4rem]`.
  - Grids collapse from `grid-cols-4` to `grid-cols-2` on tablet, and `grid-cols-1` on mobile.
  - Padding scales down (e.g., `px-4` on mobile to `px-8` on desktop).
  - Video in Hero should adjust size and blending opacity based on screen size (e.g., `opacity-30 md:opacity-100`).

---

## 6. Asset Specifications & Sources
- **Hero Video:** `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/floating_island_bg_hero.mp4`
- **Project Images:** Unsplash standard resolution (800w+).
  - Wind Farm: `https://images.unsplash.com/photo-1466611653911-95081537e5b7...`
  - Smart Grid: `https://images.unsplash.com/photo-1497366216548-37526070297c...`
  - Agri-Tech: `https://images.unsplash.com/photo-1464226184884-fa280b87c399...`
- **Icons:** imported from `lucide-react` (Sun, Wind, BatteryCharging, Factory, Leaf, ArrowRight, Hexagon, Globe, Box).

---

## 7. Performance & SEO Requirements
- **Performance:** Ensure images are compressed (WebP/optimized) or loaded via performant CDNs. Video should use `autoPlay muted playsInline` to avoid blocking rendering and auto-play cleanly on mobile devices.
- **Accessibility:** 
  - Ensure all `img` tags have descriptive `alt` text.
  - Use semantic HTML (`<main>`, `<section>`, `<nav>`, `<header>`, `<footer>`).
  - Maintain WCAG contrast ratios between text and backgrounds (especially on overlapping image gradients).
- **SEO:** Proper heading hierarchy (single `H1` per page, sequential `H2`, `H3`). Meta tags must be configured in `index.html`.

---
*End of Specification. Execute this prompt to generate the pixel-perfect EcoNexa landing page.*

```
