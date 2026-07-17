---
title: "Agentify Hero"
category: Sections
subCategory: Hero
premium: true
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781671943344-Agentify_Hero.webp
---

# Agentify Hero

```text
Act like an award-winning elite designer and expert web developer. Your objective is to build a premium, highly interactive, and visually stunning web application hero section with absolute maximum accuracy to the specifications below.

You are required to build a fully responsive, animated, production-ready hero component for an AI enterprise company called "Agentify".

## 1. Technology Stack & Architecture
- **Framework**: React 19 + TypeScript.
- **Build Tool**: Vite (configure using `npx create-vite@latest`).
- **Styling**: Tailwind CSS (v3.4+ configured with `postcss.config.js`).
- **Animation**: `motion/react` (Framer Motion).
- **Icons**: `lucide-react`.
- **Global Structure**: A single-page structure combining a `Navbar`, a full-screen `Hero` layout, and an absolute `VideoBackground` component running concurrently behind the text.

## 2. Complete Visual Design System
### Color Palette
- **Background**: `#e7eaef` (Applied to the root wrapper).
- **Primary Brand (Blue)**: `#2563EB` (Used for buttons, icons, and text highlights).
- **Secondary Blue Light**: `#60A5FA` (Used for specific headline emphasis).
- **Dark Text**: `#0A101D` (Deep, rich navy-black for headings and main stats).
- **Subtext**: `#4A5568` (Medium gray for paragraphs and navigation links).
- **Borders/Lines**: `rgba(229, 231, 235, 1)` or standard Tailwind `border-gray-200`.

### Typography
- **Headings Font**: 'Orbitron', Google Fonts (Weights 400..900). Use `font-black` (900) for the primary headline.
- **Body Font**: 'Inter', Google Fonts (sans-serif). Use `font-medium` or `font-semibold`.
- **Text Sizing**:
  - Main Headline: `72px` (Desktop), `60px` (Tablet), `44px` (Mobile). Line-height `1.05`, Letter spacing `-0.02em`.
  - Subheading: `18px`, leading-relaxed.
  - Stat Numbers: `26px`, font-extrabold.
  - Links & Buttons: `15px`, font-medium.

## 3. Component Details & Hierarchy

### A. Global Layout Wrapper (`App.tsx`)
- Container must be `min-h-screen`, `overflow-x-hidden`, `antialiased`.
- Background set to `bg-[#e7eaef]`.
- Implement selection styling: `selection:bg-blue-100 selection:text-blue-900`.
- Wrap the Navbar, VideoBackground, and Hero inside a `max-w-[1600px] mx-auto relative`.

### B. Interactive Video Background (`VideoBackground.tsx`)
- Positioned absolutely behind the main content (`absolute inset-0 z-0`).
- **Video Source**: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/robo_motion.mp4`
- **Video Properties**: `muted`, `playsInline`, `preload="auto"`.
- **Visual Styling**:
  - Shrink the video footprint by 20% using a CSS transform: `scale-80`.
  - Anchor the scaling safely using `origin-center lg:origin-right`.
  - Reduce visual weight with `opacity-80`.
  - **CRITICAL BLEND EFFECT**: Apply `mix-blend-multiply` to the video element. This flawlessly composites the light video background into the `#e7eaef` site background.
- **Gradient Masks**: Apply CSS `mask-image` (and `-webkit-mask-image`) directly on the video container and element to fade the harsh edges into the background:
  - Wrapper container: Horizontal fade (`linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)`).
  - Video element: Vertical fade (`linear-gradient(to bottom, transparent 0%, black 15%, black 100%)`).
- **Interactive Cursor Scrubbing (Custom Hook)**:
  - Create a `useEffect` that listens to the absolute `e.clientX` mouse position.
  - Calculate `percentX = e.clientX / window.innerWidth`.
  - Set `video.currentTime = percentX * video.duration`.
  - Only execute on screens `> 1024px`.
  - Bind a `seeked` event listener to ensure playback tracking is smooth and doesn't crash the browser's render pipeline.
  - On Mobile (`< 1024px`), disable the mouse scrubbing and automatically trigger `video.play()`.

### C. Navbar (`Navbar.tsx`)
- **Container**: `fixed top-0 inset-x-0 z-50`. Use `bg-white/80 backdrop-blur-md` on mobile, but `lg:bg-transparent lg:backdrop-blur-none` on desktop.
- **Logo (Left)**:
  - Icon: Lucide `Hexagon`, color `#2563EB`, filled with 10% opacity blue.
  - Text: `AGENTIFY` in uppercase, font-bold, heavily tracked (`tracking-[0.18em]`), color `#0A101D`.
- **Navigation Links (Center)**:
  - Items: `Products` (with a ChevronDown icon), `Solutions`, `Technology`, `Resources`, `About`.
  - Styling: Hidden on mobile. On hover, transition text color to black.
- **CTA Button (Right)**:
  - Text: `Get Started` with an `ArrowRight` icon.
  - Styling: Solid `#2563EB` background, rounded-full, text-white, hover transition to `blue-700`.
- **Mobile Menu**:
  - Hamburger button utilizing 3 animated spans. When `isMobileMenuOpen` is true, transform into an "X" via CSS rotations (`rotate-45`, `-rotate-45`, etc.).
  - Overlay: Full-screen `fixed inset-0 bg-white/95 backdrop-blur-sm`, fading in based on state. Includes a vertically centered list of large links.

### D. Hero Content (`Hero.tsx`)
- **Container**: Left-aligned, `w-full lg:w-[55%]`, occupying minimum full screen height, vertically centered. Use `bg-white/90` on mobile, `lg:bg-transparent` on desktop.
- **Content Hierarchy**:
  1. **Top Badge**: A small pill border (light gray), containing a solid blue dot (`w-2 h-2`) and the text `AI-POWERED. HUMAN-FOCUSED.` (uppercase, text-xs, gray-500, extreme tracking).
  2. **Headline**: Uses the 'Orbitron' font, `font-black`.
     Text: "INTELLIGENCE THAT BUILDS THE FUTURE."
     "THAT BUILDS" is colored `#60A5FA`. The period "." is colored `#2563EB`. Use `<br />` tags to stack lines correctly on desktop.
  3. **Subheading**: "Agentify blends cutting-edge AI with human ingenuity to deliver solutions that drive progress and impact." (text-lg, color `#4A5568`).
  4. **Action Buttons**:
     - Primary: `Explore Solutions ->` (solid blue, rounded-full, drop shadow).
     - Secondary: `Watch Video` (white background, gray border, contains a circular blue background wrapping a Lucide `Play` icon).
  5. **Statistics Grid**: A 3-column row separated by vertical borders (except on mobile).
     - Col 1: Lucide `Cpu` icon (blue) -> `250+` -> `AI Models Deployed`.
     - Col 2: Lucide `Layers` icon (blue) -> `98%` -> `Client Satisfaction`.
     - Col 3: Lucide `ShieldCheck` icon (blue) -> `Enterprise-Grade` -> `Security & Compliance`.

## 4. Animations and Motion Design
- Import `motion` from `motion/react`.
- Wrap the entire left-hand Hero content block in a `motion.div`.
- **Entry Animation**: Execute a smooth fade-and-slide up on initial load.
  `initial={{ opacity: 0, y: 20 }}`
  `animate={{ opacity: 1, y: 0 }}`
  `transition={{ duration: 0.6 }}`
- Apply smooth CSS transitions (`transition-colors duration-300`) to all interactive buttons, links, and the mobile menu hamburger toggles.

## 5. Responsiveness & Edge Cases
- **Mobile First**: All padding, font sizes, and layout choices must stack logically for small screens.
- **Tablet/Desktop Hand-off**: The grid breaks down from 3-columns to 1-column on mobile. The background video goes from scrubbable absolute-right to autoplaying full-background. The Navigation collapses perfectly into a hamburger overlay.
- Ensure z-indexing avoids overlap issues: Navbar (`z-50`), Mobile Overlay (`z-40`), Hero Content (`z-10`), VideoBackground (`z-0`).

## 6. Implementation Mandates
- Write highly modular, clean code separated into logical component files.
- Produce exactly 100% pixel-perfect adherence to this layout.
- Ensure no runtime typescript errors.
- Do not use placeholder code or standard template filler. Implement the complete, production-ready solution described above.

```
