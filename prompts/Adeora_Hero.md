---
title: "Adeora Hero"
category: Sections
subCategory: Hero
premium: false
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1780938721997-Adeora_Hero.webp
---

# Adeora Hero

```text
You are an expert Frontend Developer and UI/UX Designer acting as a highly proficient design-to-code engine. Your task is to recreate the **Adeora Design Studio Hero Banner** with pixel-perfect accuracy. 

Please read this entire specification carefully and treat it as the absolute source of truth for your implementation.

**Core Execution Directives:**
1. **Strict Adherence:** Follow the provided color hex codes, typography sizing, exact padding/margins, and structural layout precisely. Do not introduce arbitrary design deviations.
2. **Technical Stack:** Utilize modern React, Tailwind CSS for all styling, and Framer Motion for the specified animations, unless directed otherwise.
3. **Animation Precision:** Implement the described micro-interactions and enter animations meticulously, respecting the exact duration, easing, and delay values.
4. **Responsive Integrity:** Ensure the layout adapts flawlessly across mobile, tablet, and desktop breakpoints as detailed in the spec.
5. **Clean Code:** Deliver modular, highly optimized, and maintainable code components. 

---

## 1. Visual Design System

### 1.1 Exact Color Palette
- **Primary Background Base (Navy):** `#050B14`
- **Gradient Base (Darker Navy):** `#02122C`
- **Primary Text:** `#FFFFFF` (White)
- **Secondary Text (Muted):** `rgba(255, 255, 255, 0.8)` (80% opacity)
- **Tertiary Text (Dim):** `rgba(255, 255, 255, 0.7)` (70% opacity)
- **Border/Divider Elements:** `rgba(255, 255, 255, 0.2)` to `rgba(255, 255, 255, 0.3)`

### 1.2 Typography
- **Primary Font Family:** `Inter`, sans-serif (imported via Google Fonts).
- **Logo (ADEORA):**
  - Size: `1.25rem` (mobile) to `1.5rem` (desktop)
  - Weight: Semi-bold (`600`)
  - Letter Spacing: Wide (`tracking-wide`)
- **Logo Subtext (Design Studio):**
  - Size: `0.6rem` (mobile) to `0.75rem` (desktop)
  - Transformation: Uppercase
  - Letter Spacing: Widest (`tracking-widest`)
- **Main Headline (H1):**
  - Size: `3rem` (mobile), `4.5rem` (tablet), `5.5rem` (desktop)
  - Weight: Bold (`700`)
  - Line Height: `1.1`
  - Letter Spacing: Tight (`tracking-tight`)
- **Subtitle (WE DESIGN EXPERIENCES):**
  - Size: `0.75rem` (mobile) to `0.875rem` (desktop)
  - Weight: Medium (`500`)
  - Transformation: Uppercase
  - Letter Spacing: Widest (`tracking-widest`)
- **Paragraph Description:**
  - Size: `1rem` (mobile) to `1.125rem` (desktop)
  - Line Height: Relaxed (`1.625`)
  - Weight: Regular (`400`)

---

## 2. Layout Structure and Grid System

- **Container:** Full viewport height (`min-h-screen`) and full width (`w-full`) with `overflow-hidden`.
- **Content Wrapper:** Relative positioning (`z-10`) layered above the video background.
- **Navigation Layout:** Flexbox `justify-between` and `items-center` spanning `w-full`. Padding varies from `px-6` (mobile) to `px-24` (desktop).
- **Hero Content Alignment:** Absolute vertical and horizontal centering within the remaining viewport space.
  - Implementation: A flex column container with `flex-grow`, `items-center`, `justify-center`, and `text-center`.
  - Offset: A subtle positive top margin (`mt-12` on mobile, `mt-20` on desktop) is applied to perfectly balance the layout vertically beneath the navbar.

---

## 3. UI Components and Styling Details

### 3.1 Navigation (Navbar)
- **Logo Block:** Flex column arrangement.
- **Desktop Links:** Hidden on mobile. Displayed on desktop (`lg:flex`) with `space-x-10`.
- **CTA Button ("Let's Create"):**
  - Flex container with `items-center` and `space-x-3`.
  - Circular icon wrapper (`w-8 h-8`), fully rounded, with a `border-white/30` border.
  - Plus icon size: `16px`.
- **Mobile Menu Toggle:** Hamburger/Close icon toggling a full-width dropdown menu overlay just beneath the navbar.

### 3.2 Hero Content
- **Max Width Container:** Constrained to `max-w-4xl` for optimal reading length.
- **"View Our Work" Button:**
  - Shape: Pill-shaped (`rounded-full`).
  - Padding: Asymmetric (`pl-6`, `pr-2`, `py-2`).
  - Border: `border-white/20`.
  - Background: Transparent, utilizing a `backdrop-blur-sm` filter.
  - Circular icon wrapper containing a right-facing arrow (`16px`).

---

## 4. Visual Treatments, Layers & Assets

### 4.1 Asset Specifications
- **Background Video:** Looping, muted, autoplaying MP4 covering the full viewport (`object-cover`). 
  - URL: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_cloud_animation_video.mp4`
- **Foreground Image:** Transparent PNG overlapping the bottom of the screen.
  - URL: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_foreground_bg.png`

### 4.2 Layering Architecture (Z-Index)
1. **Background Video:** `absolute inset-0` (Base layer).
2. **Video Dimming Overlay:** `absolute inset-0 bg-black/20`.
3. **Foreground Image:** `absolute bottom-0` spanning `80vh` height. Uses `bg-cover` and `bg-bottom`.
4. **Bottom Vignette:** `absolute bottom-0` spanning `60vh` height.
   - Gradient: `bg-gradient-to-t from-[#02122c] via-[#02122c]/80 to-transparent`.
5. **Top Vignette:** `absolute inset-0`.
   - Custom CSS Linear Gradient: `linear-gradient(to bottom, #02122cff 0%, #02122cfa 10%, #02122c80 25%, transparent 50%)`.
6. **UI Content:** `relative z-10`.

---

## 5. Animations and Micro-interactions

### 5.1 Entrance Animations (Framer Motion)
- **Subtitle:** Y-axis offset `20px` to `0px`, opacity `0` to `1`. Duration: `0.6s`, Easing: `easeOut`.
- **Headline (H1):** Y-axis offset `30px` to `0px`, opacity `0` to `1`. Duration: `0.8s`, Easing: `easeOut`, Delay: `0.1s`.
- **Description:** Y-axis offset `20px` to `0px`, opacity `0` to `1`. Duration: `0.8s`, Easing: `easeOut`, Delay: `0.2s`.
- **CTA Button:** Y-axis offset `20px` to `0px`, opacity `0` to `1`. Duration: `0.8s`, Easing: `easeOut`, Delay: `0.3s`.

### 5.2 Hover & Active States
- **Navbar Links:** Text color fades to `white/70` on hover. Duration: `300ms`.
- **Buttons (Let's Create / View Our Work):** 
  - Entire button background transitions to `bg-white/5` (for View Our Work).
  - The inner circular icon wrapper fills with solid white (`bg-white`), and the SVG icon color inverts to the dark navy background color (`text-nexora-bg`).
  - Triggered using Tailwind's `group-hover` paradigm over `300ms`.

---

## 6. Responsive Behavior
- **Mobile (Default):** 
  - Navigation links are hidden behind a Hamburger menu.
  - Fonts scale down significantly to prevent line-wrapping issues on small devices.
  - Horizontal padding is `px-6`.
- **Tablet (`md:`):** 
  - Horizontal padding increases to `px-12`.
  - Typography scales up to intermediate sizes.
  - `<br className="hidden md:block" />` forces a strategic line break in the H1 headline.
- **Desktop (`lg:`):** 
  - Horizontal padding maximizes at `px-24`.
  - Hamburger menu disappears; standard horizontal navigation links appear.
  - Typography scales to maximum size (`text-[5.5rem]`).

---

## 7. Technical Implementation Details

### 7.1 Frontend Architecture & Dependencies
- **Build Tool:** Vite (v5)
- **Framework:** React (v19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v3.4.17) + PostCSS
- **Animation Engine:** Framer Motion
- **Icon Library:** Lucide React

### 7.2 File Structure
- `src/App.tsx`: Main entry component, rendering the `Hero` wrapper.
- `src/components/Hero.tsx`: The primary container managing z-indexes, videos, gradient overlays, and foreground images.
- `src/components/Navbar.tsx`: Stateful component (manages mobile menu toggle) for navigation.
- `src/components/HeroContent.tsx`: Stateless component handling typography and Framer Motion entrance animations.
- `tailwind.config.js`: Contains custom colors (e.g., `nexora-bg: '#050B14'`) and font extensions (`Inter`).
- `postcss.config.js`: Required for Tailwind CSS processing.
- `index.css`: Base Tailwind directives and custom font imports.

### 7.3 Performance Optimization
- **Video:** Must use `autoPlay loop muted playsInline` to ensure playback across mobile devices without user interaction, minimizing paint block.
- **Images:** Foreground image applied via `backgroundImage` on a `div` to ensure it resizes smoothly with `bg-cover bg-bottom` without layout shift.
- **Render blocking:** The `pointer-events-none` utility is strategically applied to all overlay layers (gradients, images) to ensure users can still click the UI elements below them if needed, avoiding trapped click events.

### 7.4 SEO & Accessibility
- **HTML Semantics:** Use a `<nav>` tag for the navigation wrapper, and an `<h1>` tag exclusively for the primary headline.
- **Contrasts:** Dark gradient overlays ensure text maintains a high WCAG contrast ratio against the brightly lit background video clouds.

---
*End of Prompt Specification*

```
