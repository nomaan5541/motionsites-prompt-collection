---
title: "DeepDive Hero"
category: Sections
subCategory: Hero
premium: false
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781539059359-DeepDive_Hero.webp
---

# DeepDive Hero

```text
## 1. PROJECT OVERVIEW
Create a stunning premium underwater adventure hero section. The design must feel cinematic, immersive, mysterious, and luxurious, using a full-screen underwater cave video to create a powerful sense of exploration and discovery. The aesthetic should match world-class exploration brands (e.g., National Geographic Explorer, OceanX, Rolex Deep Sea).

---

## 2. TECHNICAL ARCHITECTURE & STACK

**Required Tech Stack:**
* **Build Tool:** Vite v5 (Ensure compatibility with Node v20.x)
* **Framework:** React 18
* **Language:** TypeScript
* **Styling:** Tailwind CSS v3/v4 (Utility-first framework)
* **Animations:** Framer Motion
* **Icons:** React Icons (`react-icons/fi` - Feather Icons)

**Component File Structure:**
```txt
src/
├── App.tsx
├── index.css
├── main.tsx
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── HeroVideo.tsx
    ├── HeroContent.tsx
    ├── CTAButtons.tsx
    └── FeatureRow.tsx
```

---

## 3. DESIGN SYSTEM

### 3.1 Color Palette
* **Primary Background:** `#000000` (Pure Black)
* **Ocean Blue:** `#0099FF`
* **Deep Blue:** `#0058D8`
* **Accent Blue:** `#00BFFF`
* **Text Primary:** `#FFFFFF` (Pure White)
* **Text Secondary:** `#D1D5DB` (Tailwind gray-300)

### 3.2 Typography
* **Primary Font (Headings):** `Montserrat`
  * Weight: 900 (Black)
  * Letter Spacing: `-0.04em`
  * Line Height: `0.9`
* **Secondary Font (Body, Links, Labels):** `Poppins`
  * Weights: 400 (Regular), 500 (Medium), 600 (SemiBold)

---

## 4. UI COMPONENTS & LAYOUT STRUCTURE

### 4.1 Global Layout (`App.tsx` & `Hero.tsx`)
* The application should have a `min-h-screen` wrapped in a `bg-black` container.
* The main Hero section is a `min-h-screen relative flex items-center overflow-hidden pt-24`.
* Content wrapper: `relative z-10 w-full px-6 lg:px-12 max-w-[1440px] mx-auto h-full flex flex-col justify-center`.

### 4.2 Background Video Element (`HeroVideo.tsx`)
* **Video Source:** `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_video_deepdive.mp4`
* **Video Properties:** `autoPlay`, `muted`, `loop`, `playsInline`.
* **Positioning:** The video must be heavily weighted to the right. Apply `absolute right-0 top-0 w-full lg:w-[75%] h-full object-cover object-center`.
* **Interactive Parallax Effect:** 
  * Map cursor movement to structural shift: `-15px` to `15px` on both X and Y axes.
  * Use Framer Motion `useMotionValue` and `useSpring` (stiffness: 50, damping: 20).
  * Wrap video in a `scale: 1.05` container to hide edges during parallax movement.

### 4.3 Video Overlays (Crucial for Atmosphere)
1. **Primary Dark Fade:** `absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent`. This ensures the left side is solid black to hold text, softly fading into the video on the right.
2. **Blue Glow:** `absolute inset-0 mix-blend-screen` with `radial-gradient(circle at center, rgba(0,120,255,0.15), transparent 70%)`.
3. **Vignette:** `absolute inset-0 pointer-events-none` with `box-shadow: inset 0 0 150px rgba(0,0,0,0.65)`.
4. **Light Rays:** Two absolute angled divs (`-rotate-45`, `blur-[80px]` to `100px`, `animate-pulse`) on the top right.
5. **Water Particles:** Generate 20 small white dots (`w-1 h-1`) using Framer Motion to float upward infinitely on a 5-10s linear loop.

### 4.4 Navigation (`Navbar.tsx`)
* **Layout:** `fixed top-0 left-0 w-full z-50 px-6 py-6 lg:px-12 flex items-center justify-between`
* **Left - Logo Area:**
  * No hamburger icon on desktop.
  * Logo Text: "DEEP DIVE" (Montserrat, Bold, Text-xl).
  * Tagline: "EXPLORE BEYOND" (Text-secondary, size `0.65rem`, tracking-widest).
* **Center - Links (Desktop Only):**
  * `hidden lg:flex items-center gap-10`
  * Links: Home, Gear, Destinations, Experiences, About Us.
  * Typography: Uppercase, tracking-wider, Poppins Medium, text-sm.
  * Active State: "Home" has `text-accent-blue border-b-2 border-accent-blue pb-1`.
  * Hover State: `hover:text-accent-blue transition-colors`.
* **Right - Icons:**
  * Icons: Search, User (hidden on mobile), Shopping Cart (with absolute position `0` badge in `bg-ocean-blue`).
  * Mobile Toggle: Hamburger menu `FiMenu` visible only on mobile (`lg:hidden`).
* **Mobile Menu Drawer:**
  * `AnimatePresence` controlled full-screen overlay (`fixed inset-0 z-[60] bg-black/95 backdrop-blur-md`).
  * Slide in from right (`x: '100%'` to `x: 0`).
  * Close button (`FiX`) at top right.
  * Links stacked vertically, text sizes increased to `text-2xl`.

### 4.5 Hero Content Area (`HeroContent.tsx`)
* **Container:** `w-full max-w-4xl pt-32 lg:pt-0`
* **Top Label:**
  * Icon: `FiCompass` next to text.
  * Text: "DIVE INTO ADVENTURE"
  * Style: `text-accent-blue text-[0.65rem] md:text-xs font-semibold tracking-[0.2em] uppercase`
* **Main Heading:**
  * Text: "EXPLORE.\
DISCOVER.\
BEYOND LIMITS."
  * Size: `text-[40px] md:text-[56px] lg:text-[72px]`
  * Gradient Highlight: The word "BEYOND" must use `bg-gradient-to-r from-blue-400 to-cyan-300` clipped to the text.
* **Description:**
  * Text: "Premium gear for those who live to explore the deep."
  * Style: `text-text-secondary text-base md:text-lg max-w-[500px] leading-relaxed`

### 4.6 Call To Action (`CTAButtons.tsx`)
* **Primary Button:** "SHOP DIVING GEAR"
  * `bg-gradient-to-r from-ocean-blue to-deep-blue`
  * Rounded corners: `rounded-xl`
  * Hover effect: Custom box shadow glow `hover:shadow-[0_0_20px_rgba(0,153,255,0.4)]`.
  * Internal sweeping light effect: absolute inset div that translates Y on group hover.
  * Icon: `FiArrowRight` that translates X on group hover.
* **Secondary Link:** "EXPLORE COLLECTION"
  * Text-secondary transitioning to white on hover.
  * Bottom border animation: Absolute pseudo-element 2px line that expands `w-0` to `w-full` on hover.

### 4.7 Feature Row (`FeatureRow.tsx`)
* **Grid:** 3 columns (`grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 mt-20`).
* **Items:** 
  1. `FiDroplet`: PREMIUM QUALITY
  2. `FiWind`: BUILT FOR PERFORMANCE
  3. `FiShield`: TRUSTED BY EXPLORERS
* **Styling:** Icons in a bordered box `border-ocean-blue/30 rounded-lg group-hover:border-accent-blue`. White separator line `w-px h-8 bg-white/10` between columns on desktop.

---

## 5. ANIMATION SPECIFICATIONS

Use `framer-motion` for sequence-based entry animations. All entry animations should use an `easeOut` curve with a general duration of `0.8s`.

* **Navbar:** Drop down from `y: -100` to `y: 0`, fade opacity `0` to `1`.
* **Top Label:** Fade in (delay `0.2s`).
* **Main Heading:** Reveal line by line. Wrap each line in an `overflow-hidden` container and animate inner div from `y: '100%'` to `y: 0`. Stagger delay by `0.1s` starting at `0.3s`.
* **Description:** Fade up from `y: 20` to `y: 0` (delay `0.5s`).
* **CTA Buttons:** Fade up from `y: 50` to `y: 0` (delay `0.6s`).
* **Feature Row:** Fade up from `y: 30` to `y: 0` (delay `0.8s`).

---

## 6. RESPONSIVE BEHAVIOR

* **Mobile (default):** Stack content. Center layout where appropriate. Hamburger menu on top right. Video is cropped but still visible in background. Text sizes scaled down heavily.
* **Tablet (md):** Increase typography. Align feature row into a single horizontal row.
* **Desktop (lg):** Video pushed to the right side (`lg:w-[75%]`). Solid black gradient transition area on left side for text contrast. Navigation expands to center links. Padding adjusted to clear fixed headers.

---

## 7. PERFORMANCE & SEO REQUIREMENTS

* Target Lighthouse Score: 90+
* Implement semantic HTML (`<nav>`, `<section>`, `<h1>`, `<ul>`).
* Ensure text contrast is accessible (white text on pure black/dark gradient backgrounds).
* Background video must be compressed and use `playsInline` to prevent full-screen hijacking on iOS.

```
