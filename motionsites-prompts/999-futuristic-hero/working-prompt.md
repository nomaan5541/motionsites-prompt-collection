---
title: "Futuristic Hero"
category: Sections
subCategory: Hero
premium: true
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781667701353-Futuristic_Hero.webp
---

# Futuristic Hero

```text
Act as an award-winning elite designer and expert frontend web developer. Your objective is to build a premium, highly interactive, and visually stunning hero section for a website using React and Tailwind CSS. The design must be a pixel-perfect execution of the following specifications, prioritizing modern aesthetics, rich micro-interactions, and pristine responsive behavior.

## 1. Visual Design System

### 1.1 Color Palette
- **Background**: Deep space dark blue/black (`#040714`)
- **Primary Text**: Pure white (`#FFFFFF`)
- **Secondary Text (Subheadings/Descriptions)**: Slate gray (`#9CA3AF`, Tailwind `gray-400`)
- **Muted Elements/Borders**: Dark slate (`#374151`, Tailwind `gray-700` with varying opacity)
- **Gradient Accents (For 'what's next.' text)**:
  - Start: Vibrant Orange (`#FF5C35`)
  - Middle: Hot Pink (`#E93B81`)
  - End: Deep Purple (`#8C3A9F`)
- **Action/Highlight Color**: Vibrant Orange (`#FF5C35`) for notification dots and selections.

### 1.2 Typography
- **Primary Font Family**: 'Inter', sans-serif (or system-ui fallback).
- **Hero Heading (H1)**:
  - Font Size: Desktop `4.5rem` (72px), Tablet `3.75rem` (60px), Mobile `3rem` (48px).
  - Font Weight: Medium (500).
  - Line Height: Tight (`1.1`).
  - Letter Spacing: Tight (`-0.02em`).
- **Subheading (Paragraph)**:
  - Font Size: `1.125rem` (18px).
  - Font Weight: Regular (400).
  - Line Height: Relaxed (`1.625`).
- **UI Elements (Nav Links, Buttons, Badges)**:
  - Font Size: `0.875rem` (14px).
  - Font Weight: Medium (500).
- **Stats Metrics**:
  - Font Size: `2.25rem` (36px) to `2.5rem` (40px).
  - Font Weight: Semi-bold (600).

## 2. Layout Structure & Grid System
- **Container**: Max-width of `80rem` (`1280px` / `max-w-7xl`) centered on the page using `mx-auto`.
- **Global Padding**: `1.5rem` (`px-6`) on the x-axis.
- **Hero Height**: Minimum height of `calc(100vh - 88px)` to account for the navbar and ensure a full-screen feel.
- **Section Alignment**: The layout is split asymmetrically. The left side (approx 50-60% width) contains the content block, while the right side is dominated by the background video.

## 3. Section-by-Section Content & Hierarchy

### 3.1 Navigation Bar (Navbar)
- **Logo**: Abstract geometric icon (rotate-45 square with contrasting inner dot) paired with uppercase, widely-spaced text (`tracking-widest` text "FUTURASITC").
- **Links (Desktop only)**: Product, Solutions, Pricing, Resources, Company.
- **CTA**: "Get Started" button with an `ArrowUpRight` icon.
- **Spacing**: `py-6` (24px vertical padding), `flex items-center justify-between`.

### 3.2 Hero Content
- **Badge**: "Next-Gen AI Platform" with a pulsing orange indicator dot.
- **Headline**: "Intelligent technology<br />for <span className="gradient-text">what's next.</span>"
- **Description**: "Design, automate, and scale your business operations with the power of AI."
- **CTAs**:
  - Primary: "Get Started" with `ArrowRight`.
  - Secondary: "Learn More" with `ArrowRight` and subtle underline.
- **Stats Block**: Three metrics ("500K+ Active Users", "99.99% Uptime", "120+ Countries") separated by vertical 1px divider lines.

## 4. UI Components & Styling Details

### 4.1 Buttons
- **Primary Button (Get Started)**:
  - Background: Semi-transparent dark slate (`bg-[#0A0D1A]/50`) with backdrop blur (`backdrop-blur-sm`).
  - Border: 1px solid `border-gray-700`, hover state changes to `border-gray-500`.
  - Padding: `px-6 py-3`, fully rounded (`rounded-full`).
- **Secondary Button (Learn More)**:
  - Background: Transparent.
  - Text: `text-gray-300` changing to `text-white` on hover.
  - Hover effect: A subtle expanding horizontal line beneath the text.

### 4.2 Badge
- Glassmorphism effect: `bg-gray-900/30`, `backdrop-blur-md`, `border border-gray-700/50`, `rounded-full`, `px-4 py-2`.

## 5. Visual Treatments, Effects & Video Assets

### 5.1 Background Video Integration
- **Source**: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/futurasitic.mp4`
- **Positioning**: Absolute positioned to the top right (`absolute right-0 top-0`), covering approximately 65% of the width on desktop (`lg:w-[65%]`).
- **Properties**: `autoPlay`, `loop`, `muted`, `playsInline`, `object-cover`.
- **Dissolve / Edge Blending (CRITICAL)**:
  - The video must seamlessly blend into the dark background to avoid hard edges.
  - **Left Edge**: A linear gradient overlay from `#040714` to transparent (`bg-gradient-to-r`).
  - **Top Edge**: A linear gradient from `#040714` to transparent (`bg-gradient-to-b`, height 40px/10rem).
  - **Bottom Edge**: A linear gradient from `#040714` to transparent (`bg-gradient-to-t`, height 40px/10rem).

### 5.2 Text Gradient
- Apply `text-transparent bg-clip-text` with a linear gradient spanning from `#FF5C35` to `#E93B81` to `#8C3A9F` for the specific phrase "what's next."

## 6. Animations & Micro-Interactions
- **Indicator Dot**: `animate-pulse` on the orange dot inside the badge.
- **Button Hover states**:
  - The `ArrowRight` icon inside both buttons should translate slightly to the right (`group-hover:translate-x-1`) over `150ms` to `300ms` with ease-out.
  - Link hover colors smoothly transition over `150ms`.
- **Scroll Transitions**: Elements should gently fade and slide up sequentially on initial load (optional enhancement).

## 7. Responsive Behavior
- **Mobile (< 768px)**:
  - Navbar links hide, replaced by a hamburger menu icon.
  - Video background covers the full width (`w-full`) but is heavily faded (using overlays) to ensure text readability.
  - Headline sizes scale down significantly (`text-5xl`).
  - Stats block vertical dividers are hidden; items wrap gracefully.
- **Tablet (768px - 1024px)**:
  - Navbar links become visible.
  - Hero content takes up a larger proportion of the screen width.
- **Desktop (> 1024px)**:
  - Split layout is distinct: Left side content, right side video.
  - Vertical dividers in stats block are visible.

## 8. Accessibility Considerations
- High contrast text against the dark background.
- Meaningful `alt` attributes or `aria-labels` for icons.
- Ensure the video is explicitly `muted` and contains no sudden flashes.
- Focus states should be clearly visible for keyboard navigation.

## 9. Technical Implementation Details

### 9.1 Architecture & Stack
- **Framework**: React 18+ (Functional Components & Hooks).
- **Styling**: Tailwind CSS v3 (using `tailwind.config.js` for custom colors).
- **Icons**: `lucide-react` (specifically `ArrowRight`, `ArrowUpRight`).
- **Build Tool**: Vite.

### 9.2 File Structure
\`\`\`
src/
├── App.tsx             // Main layout wrapper
├── index.css           // Tailwind directives & base styles
├── components/
│   ├── Navbar.tsx      // Navigation component
│   └── Hero.tsx        // Hero section containing video and content
tailwind.config.js      // Custom theme definitions
\`\`\`

### 9.3 Performance & SEO Optimization
- Include `preload` for the critical font (Inter).
- The video tag must include `playsInline` and `muted` to ensure autoplay works on iOS/Android.
- Provide semantic HTML elements (`<nav>`, `<main>`, `<h1>`).

Deliver the complete, production-ready code that matches these specifications flawlessly.

```
