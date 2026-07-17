---
title: "Footer - Nexus Parallax"
category: Sections
subCategory: Footer
premium: false
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1783698069093-Footer - Nexus Parallax.webp
---

# Footer - Nexus Parallax

```text
# Website Generation Prompt

Act as an award-winning creative director and elite frontend architect. Your task is to build "KINTARO", a state-of-the-art, ultra-luxury ramen dining experience website. This project requires an unparalleled level of visual polish, buttery-smooth GSAP animations, and pixel-perfect responsive execution across all devices.

You must faithfully recreate this masterpiece using **React, Vite, Tailwind CSS v4, and GSAP**.

Below is the definitive, exhaustive specification for this website. Do not deviate from these details; execute them flawlessly.

---

## 1. Complete Visual Design System

### 1.1 Color Palette
Use Tailwind CSS arbitrary values or custom theme variables mapping to the following precise HEX codes:
- **Brand Dark (Primary Background)**: `#0a0a0a` - True, deep cinematic black.
- **Brand Gray (Secondary Background)**: `#1a1a1a` - Used for section contrast (e.g., Experience section).
- **Brand Gold (Primary Accent)**: `#c8965d` - Used for primary accents, thin dividers, glowing text shadows, and hover states.
- **Brand Copper (Secondary Accent)**: `#b87333`
- **Brand Light (Primary Text)**: `#f5f5f5` - Soft off-white for reduced eye strain on dark backgrounds.
- **Brand Muted (Secondary Text)**: `#888888` - Used for subtle descriptions and footer elements.

### 1.2 Typography
Integrate Google Fonts:
- **Serif (Headings & Logo)**: `Playfair Display` (Italic and Normal, weights 400 to 900).
- **Sans-Serif (Body & Micro-copy)**: `Inter` (weights 100 to 900).

**Typographic Hierarchy:**
- **Logo/Main Hero Text**: 9xl (Desktop) down to 5xl (Mobile), Playfair Display, Bold, extreme tracking (`tracking-widest`).
- **Section Titles**: 6xl (Desktop) to 4xl (Mobile), Playfair Display, leading-tight. Emphasize key words with `italic` and lower opacity (`text-white/80`).
- **Eyebrow Text (Subheadings)**: Inter, 12px (`text-xs`), uppercase, extreme letter-spacing (`tracking-[0.3em]`), Gold color.
- **Body Text**: Inter, 16px (`text-base`), font-light, leading-relaxed, text-white/70.

### 1.3 UI Components & Visual Treatments
- **Buttons**: Transparent background, 1px Gold border, Gold uppercase sans-serif text. On hover, a left-aligned 2px Gold pseudo-element expands to 100% width with 10% opacity, acting as a subtle background fill.
- **Dividers**: 1px high, Gold color, typically 48px (`w-12`) wide, placed below major headings.
- **Glassmorphism**: Used on the Navbar and loading states. Requires `bg-black/70` and `backdrop-blur-2xl`.
- **Text Glow Effects**: Add a custom utility `.text-glow { text-shadow: 0 0 20px rgba(200, 150, 93, 0.3); }` for hero headings.

---

## 2. Technical Architecture & Setup

### 2.1 Dependencies
- `react`, `react-dom` (v18+)
- `vite`, `@vitejs/plugin-react`
- `tailwindcss` (v4), `@tailwindcss/vite`
- `gsap` (Must register `ScrollTrigger` in all components where used).

### 2.2 Global CSS (`index.css`)
- Set root body background to `#0a0a0a`, text to `#f5f5f5`, font to Inter.
- Define custom scrollbar: 8px width, `#0a0a0a` track, `#1a1a1a` thumb (hover `#888888`).
- Hide `overflow-x` globally.

---

## 3. Section-by-Section Implementation & Hierarchy

### 3.1 Responsive Navbar (`Navbar.jsx`)
- **Behavior**: Fixed at the top (`z-50`). Completely responsive.
- **Initial State**: Full width, transparent background, padding-y 20px.
- **Scrolled State (y > 50)**: Transitions via JS state to a floating "pill" format. Width becomes 95% (mobile) or 700px (desktop), background becomes `bg-black/70 backdrop-blur-2xl`, adds a 1px `white/20` border and drop shadow.
- **Logo**: Left side. Features a custom SVG Ramen Bowl/Chopsticks icon (Gold, 24x24px to 32x32px) next to "KINTARO" in Serif.
- **Desktop Links**: "Story", "Menu", "Reserve" (uppercase, tracking-widest, hover:text-white).
- **Mobile Menu**: Hamburger icon. On click, opens a fixed full-screen overlay (`z-40`) with `bg-[#0a0a0a]/95 backdrop-blur-xl`. Links are vertically stacked and large.

### 3.2 Hero Canvas Animation (`HeroCanvas.jsx`)
This is the show-stopper. It utilizes an HTML5 Canvas to scrub through a video frame-by-frame based on scroll position.
- **Asset**: `https://res.cloudinary.com/dprydfxok/video/upload/v1782799498/ramen-animation-video_wqpyxu.webm`
- **Layout**: Container is `300vh` tall. Inside is a `sticky top-0 h-screen` wrapper.
- **Canvas Logic**: Load the video, extract frames via `createImageBitmap` and `requestVideoFrameCallback` (fallback to `seeked` events). Draw frames to canvas matching the scroll percentage. Ensure crisp rendering by multiplying dimensions by `window.devicePixelRatio`.
- **Loading State**: Show a pulsing "LOADING..." text (Gold, spaced) until frames are buffered.
- **Typography Overlays**:
  - Inside the sticky wrapper, use GSAP to pin text.
  - **Text 1 (0% to ~20% scroll)**: `<Ramen SVG Icon> KINTARO` (stacked on mobile, row on desktop). Underneath: "The Pinnacle of Ramen Craftsmanship". Fades UP and OUT as you scroll.
  - **Text 2 (~30% to 100% scroll)**: "A CULINARY JOURNEY". Starts invisible, fades UP and IN as scroll progresses.
  - Include a subtle bouncing "Scroll to Experience" prompt at the bottom.

### 3.3 Heritage Section (`Heritage.jsx`)
- **Layout**: 2-column grid (`max-w-7xl`, gap-16, items-center). Padding `py-32`.
- **Left Column (Text)**: 
  - Eyebrow: "Our Heritage"
  - Heading: "A Century of [italic]Refinement[/italic]"
  - Divider: Gold line.
  - Body: 2 paragraphs detailing 48-hour broth and Kyoto origins.
  - Button: "Discover Our Story".
- **Right Column (Images)**:
  - Main Image (aspect 4/5): `https://res.cloudinary.com/dprydfxok/image/upload/v1782800308/ramen_1_n9zjxg.jpg`. Bottom gradient overlay (`from-[#0a0a0a]/80 to-transparent`).
  - Secondary Image: `https://res.cloudinary.com/dprydfxok/image/upload/v1782800309/ramen_2_zyrxme.jpg`. Absolute positioned at bottom-left, overlapping the main image, thick dark border.
  - Decorative abstract square: 1px Gold border absolute positioned behind top-right.
- **GSAP Animation**: Use ScrollTrigger to fade/slide text up (`y: 50, stagger: 0.2`) and scale down the main image wrapper from `1.1` to `1` over 1.5s.

### 3.4 Chef Section (`Chef.jsx`)
- **Layout**: 2-column grid, reversed visually. Image on Left, Text on Right.
- **Left Column (Image)**: 
  - Image (aspect 4/5): `https://res.cloudinary.com/dprydfxok/image/upload/v1782828481/ramen-chef_s0ey3r.jpg`. Bottom gradient overlay.
  - Decorative border element at bottom-right.
- **Right Column (Text)**:
  - Eyebrow: "The Master"
  - Heading: "Chef Kenji [italic]Matsumoto[/italic]"
  - Divider.
  - Body: Two paragraphs about his 30 years of dedication and a blockquote.
  - Button: "Meet The Chef".
- **GSAP Animation**: Slide image in from left (`x: -50`) and text up from bottom (`y: 30`, stagger) on scroll.

### 3.5 Experience / Menu Section (`Experience.jsx`)
- **Layout**: `bg-[#1a1a1a]` (Brand Gray) for contrast. Centered Header.
- **Header**: Eyebrow ("The Menu"), Title ("An Unparalleled [italic]Experience[/italic]"), center divider.
- **Menu List**: A vertical flex list of 3 items (e.g., "The Obsidian Truffle", "Golden Silk Shio", "Wagyu Bone Tonkotsu").
- **Menu Item Styling**: Flex-row (desktop) / Flex-col (mobile). Bottom border (`border-white/10`). On hover: border turns Gold, Title turns Gold, price text turns pure white. Smooth 300ms-500ms transitions.
- **GSAP Animation**: Stagger fade up (`y: 40`) for each menu item when the list enters the viewport.

### 3.6 Footer (`Footer.jsx`)
- **Layout**: 2 main rows. Top row split into brand info and newsletter. Bottom row for copyright and social links.
- **Newsletter Input**: Minimalist border-bottom only (`border-white/20`). Focus state turns border Gold. Submit button is text-only with a bottom border that turns Gold on hover.
- **Bottom Row**: Gray/Muted text. Social links transition to Gold on hover.

---

## 4. Specific Asset URLs
- **Hero Video (WebM)**: `https://res.cloudinary.com/dprydfxok/video/upload/v1782799498/ramen-animation-video_wqpyxu.webm`
- **Heritage Ramen Main**: `https://res.cloudinary.com/dprydfxok/image/upload/v1782800308/ramen_1_n9zjxg.jpg`
- **Heritage Ramen Sub**: `https://res.cloudinary.com/dprydfxok/image/upload/v1782800309/ramen_2_zyrxme.jpg`
- **Chef Image**: `https://res.cloudinary.com/dprydfxok/image/upload/v1782828481/ramen-chef_s0ey3r.jpg`

---

## 5. Mobile & Responsive Requirements
- **100% Responsiveness Mandatory**: The design must not break on 320px wide devices.
- Typography scales down intelligently using Tailwind breakpoints (`sm:`, `md:`, `lg:`).
- `HeroCanvas.jsx` text alignments must utilize `flex-col` on mobile (stacking icon above text) and `flex-row` on desktop.
- Padding should adjust from `px-6` (mobile) to `px-24` (desktop).
- Multi-column grids must fall back to `grid-cols-1` on mobile, keeping proper visual order.

---

## 6. Performance & SEO Expectations
- **Image Optimization**: Since high-res imagery is used, ensure correct loading strategies.
- **Canvas Scrubbing**: Tie requestAnimationFrame strictly to scroll events with lerping (linear interpolation) for extreme smoothness, preventing judder.
- **SEO Elements**: Include proper semantic HTML (`<nav>`, `<section>`, `<header>`, `<main>`, `<footer>`), an explicit `<h1>`, and concise, keyword-rich meta tags in `index.html`. 

Now, initialize your development environment and build this digital masterpiece.

```
