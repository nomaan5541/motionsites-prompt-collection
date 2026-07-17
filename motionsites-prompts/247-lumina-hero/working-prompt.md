---
title: "Lumina Hero"
category: Sections
subCategory: Hero
premium: true
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781668285105-Lumina Hero.webp
---

# Lumina Hero

```text
Act as an award-winning Elite Designer and Expert Frontend Web Developer. Your objective is to build a premium, ultra-modern, and highly dynamic hero section for a cryptocurrency/digital finance platform. You must focus intensely on visual excellence, pixel-perfect layout, micro-interactions, and premium aesthetics. 

The output must be a fully functional, highly polished React component using Tailwind CSS v4 and Framer Motion. Ensure complete 100% responsiveness across all device sizes.

## 1. Technology Stack
*   **Framework**: React (Vite)
*   **Styling**: Tailwind CSS v4 (using `@import "tailwindcss";` and `@theme`)
*   **Animation**: Framer Motion
*   **Icons**: Lucide React
*   **Fonts**: Google Fonts (Inter)

## 2. Visual Design System

### 2.1 Color Palette
*   **Base Background**: Light off-white/grey `#f4f6f8`
*   **Primary Brand Blue**: `#466BF5` (Used for accent text and indicators)
*   **Dark Navy/Button Primary**: `#0A102E`
*   **Text Colors**:
    *   Primary Headings: `slate-900` (`#0f172a`)
    *   Body Text: `slate-600` (`#475569`)
    *   Muted/Tags: `slate-500` (`#64748b`)
*   **UI Surfaces**:
    *   Glass/Translucent: `rgba(255, 255, 255, 0.6)` with backdrop blur.

### 2.2 Typography
*   **Primary Font Family**: 'Inter', sans-serif
*   **Font Weights**: 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold), 800 (Extra-bold)
*   **Heading (H1)**: Font weight 800 (Extrabold), tracking tight (`-0.025em`), line-height 1.1. Sizes scale from 5xl (mobile) to 6xl (tablet) to 7xl (desktop).
*   **Body Text**: Text base to lg, relaxed line height (`1.625`), text-slate-600.
*   **Tags/Small caps**: Text-xs, uppercase, tracking-wider, font-medium.

### 2.3 Layout Structure & Spacing
*   **Container**: Max-width `7xl` (`1280px`), horizontally centered (`mx-auto`).
*   **Padding**: `px-6` on mobile, `sm:px-10`, `lg:px-12`.
*   **Structure**: 
    *   Full viewport height minimum (`min-h-screen`).
    *   Content aligned to the left side (`max-w-2xl`).
    *   Background media aligned to the right side but spanning the screen.

## 3. Background & Visual Effects (Critical)

### 3.1 The Video Background
*   **Asset URL**: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/cryptocurrency_coins_floating.mp4`
*   **Positioning**: `absolute`, `top-0`, `bottom-0`, `-right-[150px]`, `w-[calc(100%)]`, `h-full`, `object-cover`, `z-0`.
*   **Masking**: To seamlessly blend the left edge of the video into the solid `#f4f6f8` background, apply a CSS mask to the video element:
    *   `mask-image: linear-gradient(to right, transparent, black 20%)`
    *   `-webkit-mask-image: linear-gradient(to right, transparent, black 20%)`

### 3.2 The Blending Gradient Overlay
*   **Purpose**: Ensures the text on the left is perfectly readable over the video.
*   **Position**: `absolute inset-0`, `z-0`, `pointer-events-none`.
*   **Gradient**: `bg-gradient-to-r from-[#f4f6f8] from-[15%] via-[#f4f6f8]/80 via-[35%] to-transparent`.

## 4. Section-by-Section Hierarchy & Components

### 4.1 Navigation Header (`z-10`, `py-6`)
*   **Logo**: Abstract SVG icon with "Lumina" text. Text is `text-xl`, `font-bold`, `uppercase`, `tracking-wide`, `text-slate-900`.
*   **Links**: Hidden on mobile (`hidden lg:flex`). Font size `sm`, `font-medium`, `text-slate-600`. Hover state changes text to `slate-900`. Links: Products (with a ChevronDown icon), Solutions, Resources, About, Pricing.
*   **CTA Button**: Hidden on mobile (`hidden sm:flex`). Dark navy background `#0A102E`, white text, rounded fully (`rounded-full`), `px-5 py-2.5`. Hover state: `bg-slate-800`, adding a subtle shadow `shadow-lg shadow-blue-900/20`. Includes an `ArrowRight` icon.

### 4.2 Hero Content (`z-10`, `max-w-2xl`, `mt-16`)
*   **Top Tagline**: 
    *   Pill shape, `rounded-full`, `px-4 py-2`.
    *   Glassy background: `bg-slate-100/80`, `backdrop-blur-sm`, subtle border `border-slate-200/50`.
    *   Content: A small 8x8px blue dot (`bg-blue-600`) followed by uppercase tracking-wider text: "THE FUTURE OF DIGITAL FINANCE".
*   **H1 Headline**: 
    *   Text: "Build. Trade. \
 Grow Beyond Limits."
    *   "Beyond Limits." is highlighted in the primary blue (`text-blue-600`).
*   **Subheadline**: 
    *   Text: "Next-gen platform to buy, trade, and manage crypto assets securely and effortlessly."
    *   Margin bottom `10`.
*   **Primary Action Area (Buttons)**:
    *   Flex container (`flex-col sm:flex-row`, `gap-4`).
    *   **Button 1 ("Start Trading")**: Dark navy `#0a102e`, text white, `px-8 py-4`, `rounded-full`. Shadow: `shadow-xl shadow-blue-900/20`. Hover: scale up 5% (`hover:scale-105`), active scale down 5% (`active:scale-95`). Transition all. Includes `ArrowRight` icon.
    *   **Button 2 ("Watch Video")**: Glassy background `bg-white/60`, backdrop blur, border `border-slate-200/50`, text `slate-800`, `px-8 py-4`, `rounded-full`. Hover: `bg-white/80`, scale 5%. Includes a filled `Play` icon.

## 5. Animations & Micro-interactions
*   **Entrance Animations (Framer Motion)**:
    *   The hero content elements (Tagline, H1, Subheadline, Buttons) should fade in and slide up sequentially on mount.
    *   Initial state: `opacity: 0, y: 20`.
    *   Animate to: `opacity: 1, y: 0`.
    *   Duration: `0.5s` for each.
    *   Staggering/Delays: Tagline (delay 0s), H1 (delay 0.1s), Subheadline (delay 0.2s), Buttons (delay 0.3s).
*   **Hover States**: 
    *   Links: Fast transition to darker color.
    *   Buttons: Bouncy scale transform (`hover:scale-105 active:scale-95`).

## 6. Responsiveness Constraints
*   **Mobile (< 640px)**: Nav links and Nav CTA are hidden. Hero buttons stack vertically full width (`w-full flex-col`). H1 size is `text-5xl`.
*   **Tablet (640px - 1024px)**: Nav CTA visible. Nav links hidden. Hero buttons sit side-by-side. H1 size is `text-6xl`.
*   **Desktop (> 1024px)**: Nav links visible. H1 size is `text-7xl`.

## 7. Accessibility & SEO
*   Ensure the video has `muted` and `playsInline` attributes.
*   Ensure semantic HTML (`<nav>`, `<main>`, `<h1>`, `<p>`, `<button>`).
*   Pointer events on the gradient overlay must be disabled (`pointer-events-none`) so the user can interact with underlying elements if needed, though here it's purely aesthetic.

## 8. Technical Implementation details
1. Initialize the app using Vite and React.
2. Install Tailwind CSS v4 using the `@tailwindcss/vite` plugin.
3. Import the required font weights (400 to 900) from Google Fonts in `index.css` and configure Tailwind v4 `@theme` block.
4. Keep the entire UI structured inside a single page layout (`App.jsx` or equivalent).
5. Ensure `lucide-react` is used for all iconography, retaining clean, consistent stroke widths.

```
