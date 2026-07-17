---
title: Prism
category: Templates
subCategory: Corporate
premium: true
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1782970892447-prism_website.webp
---

# Prism

```text
# AI Developer Prompt: Recreate "Prism" Award-Winning Corporate Website

Act as an award-winning UI/UX designer and senior web developer. Your task is to precisely recreate a highly premium, modern corporate landing page named "Prism." The design aesthetic is characterized by deep muted plum tones, cherry blossom pink accents, glassmorphism, fluid micro-interactions, and a scroll-bound video hero experience. 

You must strictly adhere to the following comprehensive specifications to ensure 100% accuracy in visual design, responsiveness, animations, and technical implementation.

---

## 1. Technical Architecture \u0026 File Structure

**Frameworks \u0026 Libraries:**
- **React 19** (Functional components, Hooks)
- **Vite** (Build tool and dev server)
- **TypeScript** (Strict mode typing)
- **Tailwind CSS v3.4** (Styling, custom utilities, arbitrary values)
- **Framer Motion** (All complex animations, scroll triggers, layout animations)
- **Lucide React** (Iconography)

**File Structure:**
```text
src/
├── index.css           (Global styles, Tailwind layers, custom keyframes)
├── App.tsx             (Main layout, routing context if any, Navigation)
├── components/
│   ├── FloatingPetals.tsx (Background particle effects)
│   ├── Hero.tsx           (Scroll-bound video player and main headers)
│   ├── Services.tsx       (Sprite-sheet card grid)
│   ├── About.tsx          (Video/Image masking section)
│   ├── Insights.tsx       (Blog/News cards)
│   └── Contact.tsx        (Form and footer info)
```

---

## 2. Complete Visual Design System

### Color Palette (Tailwind Config)
You must implement the exact following colors in the `tailwind.config.js` extension:
- `background`: `#342631` (Deep muted plum)
- `foreground`: `#fdf0f2` (Soft pale pink/off-white for text)
- `primary`: `#d48a96` (Bright cherry blossom pink - used for accents, buttons)
- `secondary`: `#e5b0b9` (Soft petal pink - hover states)
- `accent`: `#f5d8cf` (Pale peach/yellow - used for highlight headers)
- `black`: Use standard `#000` or `#0a0a0a` where explicitly noted.

### Typography
- **Primary Font:** 'Inter', sans-serif (Google Fonts).
- **Weights:** Use `font-sans` globally. Utilize `font-medium`, `font-bold` (700), and `font-black` (900).
- **Hero Headers:** `tracking-tighter` (-0.05em).
- **Section Eyebrows:** `tracking-widest` (0.1em), uppercase, `text-sm`, `font-bold`.
- **Text Shadows:** All main hero headings require a custom drop shadow and stroke: 
  `drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] [-webkit-text-stroke:2px_black]`

---

## 3. Section-by-Section Implementation

### A. Global Elements
- **Background:** `bg-black` globally on the main wrapper `div` in `App.tsx`.
- **Floating Petals Component (`<FloatingPetals />`):** 
  - Fixed full-screen overlay (`fixed inset-0 pointer-events-none z-20`).
  - Generate ~35 SVG petals. Use this exact SVG: `<svg viewBox="0 0 100 100" fill="currentColor" className="w-5 h-5 md:w-8 md:h-8 text-primary drop-shadow-sm opacity-30"><path d="M50 0 C70 30, 90 60, 50 100 C10 60, 30 30, 50 0 Z" /></svg>`
  - **Animation:** Animate using Framer Motion. They should fall from `-10vh` to `110vh`, swaying on the X-axis (`[-8vw, 8vw, -5vw, 10vw, -8vw]`), rotating (`[0, 120, 240, 360, 180]`), and fading opacity (`[0, 0.2, 0.3, 0.2, 0]`). Randomize duration (10-22s), delay (0-15s), and scale (0.3-1.0).

- **Navigation (Sticky/Floating):**
  - Appears only after scrolling past 85% of the Hero component.
  - **Container:** `fixed top-6 left-0 w-full z-50 flex justify-center`.
  - **Nav Box:** `backdrop-blur-xl bg-background/40 border border-primary/20 rounded-[2rem] md:rounded-full shadow-2xl shadow-primary/10`.
  - **Mobile:** Implement a Hamburger menu using Framer Motion `<AnimatePresence>` for opening/closing with smooth height interpolation.

### B. Hero Section (`<Hero />`)
- **Scroll-bound Video Player:**
  - **Source:** `https://res.cloudinary.com/dprydfxok/video/upload/v1782461020/hero-video_dvkhuy.webm`
  - **Mechanic:** Do not use standard video playback. Extract frames to a `<canvas>` element based on scroll position using `requestVideoFrameCallback` (fallback to `seeked`).
  - **Container Size:** The section must have `h-[300vh]` to allow scrolling space. The canvas container is `sticky top-0 h-screen`.
- **Typography Overlays (Framer Motion `useTransform`):**
  - Map scroll `progress` to opacity and Y-transforms for three text layers that appear sequentially as the user scrolls.
  - Text 1: "Transform Business"
  - Text 2: "Empower Visionaries"
  - Text 3: "Lead The Future" (Includes CTA buttons below it).
  - All text must use the heavy text shadow and stroke defined in Typography.

### C. Services Section (`<Services />`)
- **Layout:** CSS Grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`).
- **Cards:**
  - Base: `bg-[#0a0a0a] rounded-2xl p-8 border border-foreground/10 hover:border-primary/30 transition-all hover:-translate-y-1`.
  - **Base Gradient:** Absolute `inset-0 bg-gradient-to-br from-primary/15 via-[#0a0a0a]/80 to-black z-0`.
  - **Sprite Sheet Background Image:**
    - Source: `https://res.cloudinary.com/dprydfxok/image/upload/v1782956930/card-bg_go4nuy.png`
    - Mechanics: Contain the image in the bottom-right corner (`absolute -bottom-4 -right-4 w-56 h-56`).
    - Use inline styles for sprite positioning: `backgroundSize: '300% 200%'`, `backgroundPosition: ${(index % 3) * 50}% ${Math.floor(index / 3) * 100}%`.
    - Apply opacity 40% normally, 60% and `scale-105` on card hover.
  - **Content (z-10 relative):** 
    - Icon container: 48x48px circle, border `primary/30`.
    - Title (`text-xl font-bold text-accent`), description (`text-sm text-foreground/70`).
    - Separator line: 24x2px `bg-primary/60` below title.

### D. About Section (`<About />`)
- **Layout:** Flexbox column on mobile, row on desktop (`lg:flex-row gap-16 lg:gap-24`).
- **Left Side (Visuals):**
  - Aspect ratio square or video. Container has `rounded-[3rem] border border-primary/20 bg-black shadow-2xl`.
  - Feature 1: Abstract glowing background blobs rotating continuously behind the main container using Framer Motion.
  - Feature 2: Crossfade between a static image and auto-playing video.
    - Image: `https://res.cloudinary.com/dprydfxok/image/upload/v1782460104/bg-image_ihs7es.png`
    - Video: `https://res.cloudinary.com/dprydfxok/video/upload/v1782461020/hero-video_dvkhuy.webm`
- **Right Side (Content):**
  - Eyebrow, H2 ("Pioneering the next era of innovation."), paragraph.
  - List of 4 features using `Lucide-React` `CheckCircle2` icon. Animate these list items staggering in from the bottom.

### E. Insights Section (`<Insights />`)
- **Layout:** Grid layout matching Services.
- **Card Styling:**
  - Top half: 16:9 Aspect video thumbnail (`rounded-2xl border border-foreground/10 overflow-hidden`).
  - Use these background videos for thumbnails, cycling through them:
    - `https://res.cloudinary.com/dprydfxok/video/upload/v1782459210/bg4_hzaahu.mp4`
    - `https://res.cloudinary.com/dprydfxok/video/upload/v1782459209/bg3_fqnvi9.mp4`
    - `https://res.cloudinary.com/dprydfxok/video/upload/v1782459210/bg1_jgni8n.mp4`
  - Video treatment: `invert grayscale-[30%] sepia-[30%] hue-rotate-[280deg] opacity-60 mix-blend-lighten`.
  - Hover Effect: Video scales 105%. A `bg-primary/20 mix-blend-overlay` transitions to `opacity-0` on hover.

### F. Contact Section (`<Contact />`)
- **Layout:** 50/50 split layout.
- **Form (Left):** 
  - Standard inputs using `bg-foreground/5 border-foreground/10 rounded-xl`.
  - Focus states must ring with `primary/50`.
- **Contact Info (Right):**
  - Container: `rounded-3xl bg-foreground/5 border border-foreground/10 p-8 backdrop-blur-md`.
  - Add an absolute blurred abstract shape (`w-64 h-64 bg-primary/20 blur-3xl rounded-full`) in the top right corner.
  - List address, email, and phone using Lucide icons in circular `bg-primary/20` wrappers.

---

## 4. Animation Guidelines (Framer Motion)
- **Viewport Triggers:** Use `whileInView` extensively. Set `viewport={{ once: false, margin: '-50px' }}` for re-triggering animations on scroll up and down.
- **Staggering:** Use container/item variants in grids (like Services) to stagger children appearance by `0.1s` delays.
- **Easing:** Default to smooth spring-like easing or `[0.16, 1, 0.3, 1]` for elegant UI reveals.
- **Micro-interactions:** Ensure every interactive element (buttons, cards, links) has a hover state. Use group-hover utilities to translate icons inside buttons (e.g., arrow moves right).

## 5. Responsiveness \u0026 Accessibility
- Ensure exact translation from mobile-first to desktop.
- Padding on sections should typically be `px-6 md:px-12 py-32`.
- Use relative sizing (rem, vw/vh) appropriately to prevent overflow.
- Ensure all images have `alt` tags and semantic HTML (`<section>`, `<h1>`, `<ul>`) is maintained for SEO and screen readers.

## Instructions for Execution
Execute the codebase strictly following this plan. Do not deviate from the layout grid, the sprite calculations, or the precise scroll-bound hero mechanics. Treat the CSS arbitrary values as critical to the final aesthetic.

```
