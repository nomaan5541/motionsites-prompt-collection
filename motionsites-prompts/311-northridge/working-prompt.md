---
title: "Northridge"
category: Sections
subCategory: Hero
premium: false
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781629894749-Northridge_Hero.webp
---

# Northridge

```text
You are an award-winning elite designer and expert web developer. Your objective is to build a premium, highly responsive, and visually stunning React + Tailwind CSS landing page from scratch. The output must be production-ready and flawlessly execute the following comprehensive specifications.

## 1. Visual Design System

### Color Palette
- **Background (Deep Space):** `#0B0A1A`
- **Primary Accent (Vibrant Purple):** `#6B4CDE`
- **Primary Hover:** `#7F64E6`
- **Text Main (Pure White):** `#FFFFFF`
- **Text Muted (Cool Gray):** `#A0A0C0`
- **Overlay Masks:** Linear CSS gradients utilizing `#0B0A1A` (from 100% opacity to transparent) for text readability over the video.

### Typography
- **Primary Font (Headings):** `Lora` (Serif)
  - Usage: Main hero title ("Clarity Today. Stronger Tomorrow.")
  - Weights: Medium (500)
  - Line Height: 1.1 (leading-[1.1])
- **Secondary Font (Body & UI):** `Inter` (Sans-serif)
  - Usage: Navigation, subtitles, paragraphs, buttons
  - Weights: Light (300), Regular (400), Medium (500), SemiBold (600)
  - Special Styling: Subtitles and tiny labels utilize uppercase with extreme tracking (`tracking-[0.2em]`, `tracking-widest`).

## 2. Layout Structure & Grid System
- **Maximum Width Constraint:** `max-w-7xl` (1280px) centered horizontally (`mx-auto`).
- **Global Padding:** `px-6` on mobile, `lg:px-8` on desktop.
- **Hero Layout:** Full viewport height (`min-h-screen`) utilizing Flexbox (`flex flex-col justify-end`), forcing the content block towards the lower-middle half.

## 3. Section-by-Section Content & Hierarchy

### A. Navigation Bar (`Navbar.jsx`)
- **Positioning:** Fixed to the top (`fixed top-0 left-0 w-full z-50`).
- **Logo:** Custom SVG consisting of two triangles (one filled purple, one empty forming an upward arrow), alongside the text "NORTHRIDGE" (uppercase, tracking-widest, semibold) and "CONSULTING" (uppercase, tiny, muted text).
- **Desktop Links:** Hidden on mobile (`hidden md:flex`), spaced evenly (`gap-8`), text size `text-sm`.
- **CTA Button ("Let's Talk"):** Rounded pill (`rounded-full`), border (`border-white/20`), transparent background.
- **Mobile Menu:** Hamburger icon (`md:hidden`) that triggers a full-screen, glassmorphic overlay (`backdrop-blur-xl bg-[#0B0A1A]/95`) containing large serif vertical links and a primary button.

### B. Hero Section (`Hero.jsx`)
- **Video Background:** Absolute positioned covering the screen (`absolute inset-0 w-full h-full object-cover -z-10`).
- **Video Source URL:** `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/night_light_hero_bg.mp4`
- **Readability Overlays:** 
  - Left Gradient: `bg-gradient-to-r from-[#0B0A1A] via-[#0B0A1A]/20 to-transparent` covering the entire screen.
- **Typography Hierarchy:**
  - Kicker: "STRATEGY. INSIGHT. IMPACT." (uppercase, `text-primary`, `tracking-[0.2em]`, text-sm).
  - Title: "Clarity Today. Stronger Tomorrow." (`text-4xl md:text-6xl`, serif, white).
  - Paragraph: "We partner with leaders to solve complex challenges..." (`text-lg md:text-xl`, sans-serif, light weight, gray text).
- **Primary CTA ("Explore How We Help"):** Purple background (`bg-primary`), moderate border radius (`rounded-md`), shadow glow (`shadow-lg shadow-primary/20`), flex-aligned with an ArrowRight icon.

## 4. UI Components, Styling, & Micro-Interactions

### Hover, Focus & Active States
- **Nav Links:** Fade to pure white on hover (`text-gray-300 hover:text-white transition-colors`).
- **Buttons:** 
  - Primary CTA background shifts to `#7F64E6` on hover.
  - Secondary CTA (Nav) background changes to `bg-white/10` on hover.
  - Icons inside buttons feature an interactive translation: The right arrow translates right by 4px (`group-hover:translate-x-1 transition-transform`).

### Scroll-Based Interactions
- **Dynamic Navbar:** Begins completely transparent with massive vertical padding (`py-6`). When the user scrolls past 50px, the padding shrinks (`py-4`) and the background adopts a dark glassmorphism effect (`bg-[#0B0A1A]/30 backdrop-blur-md border-b border-white/5`). Transition duration is 300ms.

## 5. Responsive Behavior (100% Accuracy)
- **Mobile (< 768px):** Navbar desktop links vanish, replaced by a responsive Hamburger menu. Heading sizes scale down (`text-4xl` from `text-6xl`), and horizontal padding shrinks to `px-6`.
- **Tablet (768px - 1024px):** Navbar links appear, Hero spacing utilizes medium breakpoints.
- **Desktop (> 1024px):** Max-width constraints apply, padding expands to `lg:px-8`, typography reaches maximum scale. 

## 6. Accessibility & Performance
- **Accessibility:** Ensure all `a` tags and buttons have `aria-label` attributes where text is not explicit. Use semantic HTML5 (`<nav>`, `<main>`, `<section>`). SVG icons must have `aria-hidden="true"`.
- **Performance:** Ensure the video has `autoPlay`, `loop`, `muted`, and `playsInline` attributes to function identically on iOS without pausing execution. Provide a solid fallback background color (`#0B0A1A`) before the video loads.
- **SEO Requirements:** Proper hierarchical heading structure (one `<h1>` for the Hero, `<h2>` for subheadings).

## 7. Technical Implementation Details

### Architecture & Libraries
- **Framework:** React.js (via Vite)
- **Styling:** Tailwind CSS
- **Icons:** `lucide-react` (specifically `ArrowRight`, `Menu`, `X` icons).
- **File Structure:**
  - `src/App.jsx` (Orchestrates layouts)
  - `src/index.css` (Handles `@tailwind` imports, base Google Fonts, and custom utilities)
  - `src/components/Navbar.jsx` (Stateful component for scroll/mobile menu)
  - `src/components/Hero.jsx` (Stateless layout containing video and typography)

Execute these instructions precisely to generate the complete codebase.

```
