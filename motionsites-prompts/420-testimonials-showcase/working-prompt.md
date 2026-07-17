---
title: "Testimonials - Showcase"
category: Sections
subCategory: Testimonials
premium: false
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1783671552101-Testimonials-Showcase.webp
---

# Testimonials - Showcase

```text
# Infine - Premium Creative Agency Website Specification

**System Prompt / Instructions**
Act as an award-winning elite designer and expert frontend web developer. Your objective is to build a highly interactive, premium, luxury-tier creative agency portfolio website named "Infine". The website must be pixel-perfect, completely responsive, and heavily feature sophisticated micro-interactions, scroll-driven animations, and cinematic aesthetics. It must replicate the exact visual design system, structure, and animations specified below.

---

## 1. Complete Visual Design System

### 1.1 Exact Color Palette
- **Primary Background**: `#050505` (Deep luxury black)
- **Primary Foreground / Text**: `#FAFAFA` (Soft white)
- **Secondary Text / Muted**: `#9CA3AF` (Tailwind gray-400) and `#6B7280` (Tailwind gray-500)
- **Accent Color**: `#3B82F6` (Tailwind blue-500) and `#2563EB` (Tailwind blue-600)
- **Glassmorphism / Borders**: `rgba(255, 255, 255, 0.1)` (white/10) to `rgba(255, 255, 255, 0.2)` (white/20)
- **Stroke Color**: `rgba(255, 255, 255, 0.692)`

### 1.2 Typography
- **Primary Sans-Serif**: `Inter` (Google Fonts) - Used for body copy, UI elements, navigation, small caps tags.
- **Primary Serif**: `Playfair Display` (Google Fonts) - Used for massive headings, cinematic hero text, and artistic contrasts.
- **Font Sizes**:
  - Hero Display: `12vw` to `15vw` (Fluid typography)
  - Section Headers: `text-5xl md:text-7xl` (`3rem` to `4.5rem`)
  - Subheaders/Cards: `text-3xl md:text-4xl`
  - Body Text: `text-lg md:text-xl`
  - Mono Tags: `text-sm uppercase tracking-widest`

### 1.3 Layout Structure & Grid System
- **Maximum Width Container**: `max-w-[100rem]` (`1600px`) centered `mx-auto`.
- **Global Padding**: Horizontal `px-6 md:px-12` for edges. Vertical section spacing `py-32 md:py-48` for luxurious white-space (negative space).
- **Grid Layout**: 12-column foundation logic, specifically implemented in the About section (7/5 split) and the Services section (Asymmetrical Bento Box Grid).

---

## 2. Section-by-Section Hierarchy & Content

### 2.1 Navigation (Navbar)
- **Structure**: Fixed at top, transparent on load, applying `bg-black/40` with `backdrop-blur-md` and `border-b border-white/10` when scrolled past 50px.
- **Content**: Logo "INFINE" (serif) with a blue dot. Desktop links (Work, Services, About, Contact). Mobile Hamburger menu.
- **Animation**: Hides on scroll down, reveals on scroll up using Framer Motion `useMotionValueEvent`.

### 2.2 Hero Section
- **Visuals**: Fullscreen edge-to-edge layout (`h-screen`). 
- **Media**: Background video looping (`https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/beyond_imagination_video.mp4`). Dark gradient overlay `bg-black/40`.
- **Content**: Massive centered serif text "CRAFTING DIGITAL VISIONS". The word "VISIONS" is outlined using `-webkit-text-stroke: 1px rgba(255, 255, 255, 0.692)` and `color: transparent`. 
- **Animation**: Scroll-driven transition using GSAP ScrollTrigger. The hero section is pinned, and the video container scales down from `scale(1)` to `scale(0.8)` while gaining a `border-radius: 2rem` as the user scrolls down, revealing the black background underneath.

### 2.3 Showcase (Selected Works)
- **Layout**: "Horizontal Accordion" Flex Layout (`h-[80vh]`). 
- **Mechanics**: 3 vertical panels side-by-side. 
  - **Active Panel**: Takes up `80%` width, revealing the image, a dark gradient overlay, and absolute positioned project details (Title, Category, Description).
  - **Inactive Panels**: Take up `10%` width, displaying the title rotated `-90deg` vertically.
- **Images**: `https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781633036/portfolio_01_jfacyd.jpg`, `https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781633036/portfolio_02_shonag.jpg`, `https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781633036/portfolio_03_jasmg8.jpg`.
- **Transitions**: Smooth width/height animation using `duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]`.
- **Responsive**: Falls back to a vertical accordion (`h-[60%] active` vs `h-[20%] inactive`) on mobile devices.

### 2.4 Services (Bento Grid Capabilities)
- **Layout**: Asymmetrical Bento Box Grid (`grid-cols-1 md:grid-cols-3 auto-rows-[22rem]`).
- **Cards**: 4 cards. Sizes span differently (`col-span-2`, `row-span-2`, etc.).
- **Visuals**: `bg-zinc-900` with `border-white/5`. Background images (`https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781633036/portfolio_01_jfacyd.jpg`, `https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781633036/portfolio_02_shonag.jpg`, `https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781633036/portfolio_03_jasmg8.jpg`, `https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781633036/showcase_project_wq9efl.jpg`) set to `opacity-20` and `mix-blend-luminosity`.
- **Interactions**: On hover, background image scales up (`scale-105`) and increases opacity (`opacity-40`). Glassmorphism arrow icon slides in from the left `translate-x`.

### 2.5 FAQ (Frequently Asked Questions)
- **Layout**: 2-column layout (Left: Header, Right: Vertical List of Accordions).
- **Mechanics**: Framer Motion `AnimatePresence` expanding accordion.
- **Visuals**: `border-b border-white/10`. Plus/Minus Lucide icons.

### 2.6 About (Scroll Reveal Typography)
- **Layout**: Split grid (Left: 7 cols text/stats, Right: 5 cols image).
- **Core Interaction**: A massive paragraph of text where every single word is wrapped in a `motion.span`. Using Framer Motion's `useScroll` and `useTransform`, the opacity of each word transitions from `0.15` to `1` sequentially as the user scrolls through the section.
- **Stats**: "12+ Years Exp", "150+ Awards" fade up smoothly.
- **Image**: `https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781633036/about_us_gcyr2b.jpg` inside a tall cinematic container `aspect-[4/5]` with `border-radius: 2.5rem`.

### 2.7 Contact (Let's Talk)
- **Layout**: Centered, full-screen minimum height (`min-h-screen`).
- **Visuals**: Background image (`https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781633036/showcase_project_wq9efl.jpg`) covered by a perfect vignette radial gradient overlay `bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.4)_0%,rgba(0,0,0,1)_80%)]`.
- **Typography**: Massive `text-[12vw]` serif text.
- **Interactive Button**: A white pill button. On hover, a blue circle background translates up from the bottom (`translate-y-full` to `translate-y-0`) filling the button, and text turns white.

---

## 3. Global Interactions & UI Components

### 3.1 Custom Cursor
- **Visuals**: A small white dot that perfectly tracks the mouse, followed by a slightly larger translucent circle that drags behind using spring physics (`damping: 20`, `stiffness: 300`).
- **Implementation**: Framer Motion `useMotionValue` and `useSpring` tracking global `mousemove` events. Hidden on touch devices.

### 3.2 Smooth Scrolling
- **Implementation**: Lenis (Studio Freight). Wraps the entire application. Provides buttery smooth inertia scrolling.

### 3.3 Micro-Interactions (Hover States)
- All interactive links and buttons must utilize `group` and `group-hover` in Tailwind.
- Images scale up `scale-105` inside `overflow-hidden` containers on hover.
- Timing: Use sophisticated easing curves, specifically `ease-[cubic-bezier(0.76,0,0.24,1)]` and `duration-700` or `duration-1000` for premium weight and inertia.

---

## 4. Technical Implementation Details

### 4.1 Frontend Architecture
- **Framework**: Next.js 15 (App Router).
- **Language**: TypeScript.
- **Styling**: Tailwind CSS v4.
- **Component Structure**:
  - `src/app/page.tsx` (Main compiler)
  - `src/app/globals.css` (Tailwind imports, custom font CSS variables)
  - `src/components/navigation/Navbar.tsx`
  - `src/components/ui/CustomCursor.tsx`
  - `src/components/sections/Hero.tsx`, `Showcase.tsx`, `Services.tsx`, `Faq.tsx`, `About.tsx`, `Contact.tsx`.

### 4.2 Required Dependencies
- `framer-motion` (Declarative animations, Scroll text reveal, Layout animations, Custom Cursor).
- `gsap` (Complex scroll-timeline pinning in the Hero section).
- `lenis` (Smooth scrolling wrapper).
- `lucide-react` (SVG Icons: ArrowUpRight, Plus, Minus, Menu, ArrowRight).
- `clsx` & `tailwind-merge` (Utility class merging).

### 4.3 Responsive Requirements (100% Adaptability)
- **Mobile (`< 768px`)**: Stack grid layouts into single columns. Convert horizontal accordions to vertical stacking accordions. Reduce massive typography to fit screen bounds without horizontal overflow. Adjust padding to `px-6`.
- **Tablet (`768px - 1024px`)**: Utilize 2-column grids. Adjust padding to `px-12`.
- **Desktop (`> 1024px`)**: Full Awwwards-style layout. Enable complex hover states (disabled on coarse pointer devices). Enable custom cursor.

### 4.4 SEO & Performance Optimization
- Native Next.js `<Image />` component used for all assets with `fill`, `object-cover`, and proper aspect ratios.
- Semantic HTML tags (`<section>`, `<main>`, `<footer>`, `<nav>`).
- Will-change transform optimizations applied to heavily animated elements (like the Hero video container `will-change-transform`).
- Lazy loading for components outside the initial viewport.

---

## 5. Media Assets Summary
- **Hero Video**: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/beyond_imagination_video.mp4`
- **Showcase Image 1**: `https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781633036/portfolio_01_jfacyd.jpg`
- **Showcase Image 2**: `https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781633036/portfolio_02_shonag.jpg`
- **Showcase Image 3**: `https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781633036/portfolio_03_jasmg8.jpg`
- **Showcase Image 4 (Services)**: `https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781633036/showcase_project_wq9efl.jpg`
- **About Image**: `https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781633036/about_us_gcyr2b.jpg`
- **Contact Image**: `https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781633036/showcase_project_wq9efl.jpg`

```
