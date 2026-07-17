---
title: Oynta
category: Templates
subCategory: Agency
premium: false
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781667226626-Oynta_Website.webp
---

# Oynta

```text
# Premium Web Experience Specification Prompt

**Instruction to AI Developer:**
Act as an award-winning creative developer and elite web designer. Your objective is to build a highly premium, modern, and interactive portfolio/agency website with maximum precision. You must adhere strictly to the following comprehensive specifications, replicating every detail, interaction, layout, and visual treatment perfectly.

---

## 1. Technical Architecture \u0026 Tech Stack
- **Framework**: React (Vite) with TypeScript.
- **Styling**: Tailwind CSS (v4) leveraging utility-first classes and custom theme variables.
- **Animation Engine**: Framer Motion (for all layout transitions, micro-interactions, and scroll-based transforms).
- **3D Graphics**: Three.js combined with React Three Fiber (R3F) for the WebGL hero background.
- **Scroll Engine**: Lenis (`lenis` \u0026 `@studio-freight/react-lenis`) wrapped around the root app for buttery-smooth scroll interpolation (lerp: 0.1, duration: 1.5).
- **Icons**: Lucide React.

---

## 2. Visual Design System

### 2.1 Color Palette
**Base Theme:**
- **Dark Background**: `#0d0d0d`
- **Dark Surface**: `#1a1a1a`
- **Light Text**: `#ffffff`
- **Gray Text**: `#a1a1aa` (Tailwind `gray-400`)
- **Light Background**: `#ffffff`
- **Light Surface**: `#f9fafb` (Tailwind `gray-50`)
- **Accent/Brand Blue**: `#1e3a8a` (Tailwind `blue-900`) and `#3b82f6` (Tailwind `blue-500`)

**WebGL Shader Colors:**
- Base Dark 1: `rgb(10, 10, 15)` / `vec3(0.04, 0.04, 0.06)`
- Base Dark 2: `rgb(30, 38, 56)` / `vec3(0.12, 0.15, 0.22)`
- Highlight Streaks: `rgb(89, 89, 102)` / `vec3(0.35, 0.35, 0.4)`

### 2.2 Typography
Configure Tailwind to use the following Google Fonts:
- **Primary Sans-Serif (Body \u0026 UI)**: `Inter`, system-ui, sans-serif. Used for small UI text, tags, descriptions. Weights: 300, 400, 500, 600.
- **Display/Heading Font**: `Outfit`, system-ui, sans-serif. Used for massive hero text, section titles. Weights: 500, 600, 700.

**Size Hierarchy:**
- Hero Display: `text-5xl md:text-[100px]` leading `[1.1]` tracking `tight`.
- Section Titles: `text-4xl md:text-6xl`.
- Body Text: `text-sm md:text-lg`.
- Meta/Tags: `text-xs uppercase tracking-wider`.

---

## 3. Layout Structure \u0026 Grid System
- **Container Max-Widths**: Content constrained to `max-w-[1200px]` or `max-w-[1400px]` with auto margins (`mx-auto`).
- **Section Paddings**: Standard vertical spacing is `py-24 md:py-32`. Standard horizontal spacing is `px-6 md:px-12` up to `md:px-24`.
- **Responsive Flex/Grid**: Mobile-first approach. Most sections use `flex-col` on mobile, breaking to `flex-row` or `grid-cols-2`/`grid-cols-3` at the `md:` (768px) or `lg:` (1024px) breakpoint.

---

## 4. Section-by-Section Specifications

### 4.1 Hero Section (100vh)
- **Background**: A full-screen `<Canvas>` rendering a custom WebGL Fragment Shader. The shader must use 2D noise and domain warping to create an abstract, morphing, liquid-like streak effect moving diagonally.
- **Navbar**: Absolute positioned at top. `mix-blend-difference` with white text. Logo (Oynta) with abstract SVG mark on left. Desktop links on right. Mobile uses a hamburger icon that toggles a full-screen black overlay (`AnimatePresence`) with large links.
- **Hero Content**: Centered vertically. Text: "We create smart \u0026 effective digital solution". 
  - *Micro-interaction*: The "n" in "solution" has a white line extending from it to the right (`w-[100px] md:w-[450px]`, `h-2.5`, `rounded-r-full`) that animates `scaleX: 0` to `1` over 1.5s.
  - *Parallax*: Tied to `useScroll()`. Uses `useTransform` to move `y` from `0` to `400px` over `1000px` of scroll, moving up slower than the page.
- **Circular Badge**: Bottom right, absolutely positioned. Rotating SVG text ("START A PROJECT •") wrapped around a central star icon. Rotates infinitely `360deg` over 10s linearly.

### 4.2 Services Section
- **Background**: White. Text: Black.
- **Layout**: 4-column grid (or 1 col on mobile, 2 on tablet). 
- **Content**: Lucide icons (ArrowUpRight, Maximize2, Zap, Layout), Title, Description. Fades up into view (`whileInView`).

### 4.3 Latest Projects (Interactive Stacked Cards)
- **Background**: White (`bg-white`).
- **Architecture**: A static interactive carousel with overlapping absolute-positioned cards (height `[600px]`).
- **Controls**: `ChevronLeft` and `ChevronRight` buttons at the top right of the section header to cycle through.
- **Card Design**:
  - Left Half: "01" badge in circle, blue meta tags ("2026 • Tech • Web Platform"), Seriff/Heading title, paragraph, pill-shaped "View case study" button.
  - Right Half: Large rounded image. Inside the image, absolute positioned abstract glassmorphism shapes (square, circle, circle) with `backdrop-blur-sm bg-white/90 mix-blend-overlay`.
  - Card Colors: Off-white variations (`#f8f9fa`, `#f1f5f9`, `#f4f4f5`).
- **Motion Interaction**:
  - The front card is `scale: 1`, `y: 0`, `z-index: 30`, and is draggable along the x-axis (`drag="x"`). Releasing triggers swipe to next/prev.
  - Background cards stack upwards (`y: -30px` per index) and scale down (`scale: 1 - index * 0.05`), with lower z-indexes.
  - Clicking a background card smoothly animates it to the front. 
  - Transition easing: `[0.16, 1, 0.3, 1]`, duration: `0.6s`.

### 4.4 About Section (Masonry Parallax)
- **Layout**: Split screen. Left is sticky text ("We believe in the power of design..."). Right/bottom is a masonry grid of 3 images.
- **Parallax Logic**: Wrap the image grid in a `ref`. Use `useScroll` with `offset: ["start end", "end start"]`.
  - Image 1 (Large left): `useTransform` y from `0%` to `15%`.
  - Image 2 (Top right): `useTransform` y from `0%` to `-10%`.
  - Image 3 (Bottom right): `useTransform` y from `0%` to `20%`.
- **Styling**: Images must have high quality `object-cover` and rounded corners.

### 4.5 Team Banner \u0026 Section
- **Marquee**: Full width scrolling text banner saying "MEET THE TEAM - ". Use Framer motion `animate={{ x: ["0%", "-50%"] }}` looping linearly. Apply a text stroke effect (transparent text, black border).
- **Grid**: 3-column grid of team members.
  - *Hover effect*: Images start grayscale (`grayscale`) and transition to color (`grayscale-0`) on hover. Overlay text slides up smoothly.

### 4.6 FAQ \u0026 Pricing
- **FAQ**: Accordion list. Active state expands height using Framer Motion `height: 'auto'`.
- **Pricing**: 3 tier cards. The center "Pro" tier is highlighted with a black background, white text, and scaled up slightly.

### 4.7 Footer (Parallax Reveal)
- **Effect**: The footer sits at the very bottom with a relative z-index trick. Use `useScroll` on the footer container with `offset: ["start end", "end end"]`. Transform the inner content's `y` from `-30%` to `0%`. This makes the footer content slide up from underneath the main content as the user reaches the bottom of the page.
- **Content**: Massive CTA "Let's shape something new", "Contact us" pill button, top-right "ArrowUp" scroll-to-top button, bottom copyright and social links.

---

## 5. Motion Design \u0026 Animation Rules
- **Entrance Animations**: Elements fading in should use `initial={{ opacity: 0, y: 30 }}` to `animate={{ opacity: 1, y: 0 }}`.
- **Easing**: Default to `"easeOut"` for entrance. Complex transitions use `[0.16, 1, 0.3, 1]` for an elegant, snappy feel.
- **Durations**: Standard transitions are `0.8s`. Delays should be staggered by `0.2s` for sibling elements.

---

## 6. Asset References
Always use high-quality Unsplash imagery. Examples:
- Projects: 
  - `https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80\u0026w=2070\u0026auto=format\u0026fit=crop`
  - `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80\u0026w=2564\u0026auto=format\u0026fit=crop`
  - `https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80\u0026w=2072\u0026auto=format\u0026fit=crop`
- About Masonry:
  - `https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80\u0026w=2070`
  - `https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80\u0026w=2070`

---

## 7. Performance \u0026 Best Practices
- **WebGL Optimization**: Do not render the shader when the hero section is out of view. Set `<Canvas dpr={[1, 2]}>` to avoid massive performance drops on retina screens.
- **Accessibility**: Use semantic HTML (`<nav>`, `<main>`, `<footer>`, `<section>`). Include `aria-labels` on icon buttons.
- **Responsive Navigation**: The mobile menu must explicitly disable body scrolling or lock focus to prevent scrolling the background while the menu overlay is active.

```
