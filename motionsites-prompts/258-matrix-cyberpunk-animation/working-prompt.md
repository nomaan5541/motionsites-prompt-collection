---
title: "Matrix Cyberpunk Animation"
category: Sections
subCategory: Hero
premium: false
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1780905700490-matrix.webp
---

# Matrix Cyberpunk Animation

```text
# Matrix Cyberpunk Website: Complete Technical & Design Specification

This document provides a highly detailed prompt to recreate the `NEXUS_` website from scratch with maximum accuracy. The design follows a modern, premium "Matrix/Cyberpunk" aesthetic with glowing neon green accents, dark deep backgrounds, glassmorphism UI elements, and a dynamic 2D digital rain effect.

---

## 1. Visual Design System

### 1.1 Color Palette
- **Main Background**: `#050505` (Deepest Charcoal/Black)
- **Primary Accent (Matrix Neon Green)**: `#00ff41`
- **Secondary Accent (Dark Matrix Green)**: `#008f11`
- **Hover Accent (Bright Green)**: `#4dff79`
- **Muted Text (Light Green/Gray)**: `#a0d2ab`
- **White (Primary Text)**: `#ffffff`
- **Glass Panel Background**: `rgba(255, 255, 255, 0.05)`
- **Glass Panel Border**: `rgba(255, 255, 255, 0.1)` or `rgba(0, 255, 65, 0.3)`

### 1.2 Typography
- **Primary Font (Body)**: `Inter`, system-ui, sans-serif
- **Heading Font**: `Outfit`, `Inter`, system-ui, sans-serif
- **Code/Hacker Font (Accents & Matrix Rain)**: `monospace` (e.g., Courier New, Fira Code)
- **Styling Details**:
  - Main Heading (H1): 5rem (md: 4.5rem, lg: 80px), font-weight: 600, tracking: tight, leading: 1.1, text-white with a neon green glow (`text-shadow: 0 0 20px rgba(0, 255, 65, 0.4)`).
  - Subtext (P): 1rem (md: 1.5rem), font-family: monospace, color: `#a0d2ab`, leading: relaxed, max-width: 42rem.
  - Buttons: font-family: monospace, tracking: wide.

---

## 2. Layout Structure & Grid System

The application uses a full-viewport layout using Tailwind utilities:
- **Main Container**: `min-h-screen`, `bg-[#050505]`, `overflow-hidden`, `flex flex-col items-center`.
- **Global Background Effects**:
  - `absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-[#051505] to-transparent z-0 opacity-80`.
  - Two large blurred, low-opacity glowing orbs placed behind the content:
    - Top-left Orb: `w-[50%] h-[50%] bg-[#00ff41] opacity-[0.04] blur-[120px] rounded-full top-[-20%] left-[-10%]`.
    - Top-right Orb: `w-[40%] h-[40%] bg-[#008f11] opacity-[0.04] blur-[100px] rounded-full top-[10%] right-[-10%]`.

---

## 3. Section-by-Section Content & Hierarchy

### 3.1 Background Layer (MatrixRain Canvas)
- **Component**: `<MatrixRain />`
- **Description**: An HTML5 Canvas rendering classic Matrix digital rain.
- **Styling**: `fixed top-0 left-0 w-full h-full z-0 opacity-80 pointer-events-none`.
- **Fade Out Effect**: Use a CSS mask to fade out the rain towards the bottom of the screen:
  ```css
  mask-image: linear-gradient(to bottom, black 0%, black 60%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 0%, black 60%, transparent 100%);
  ```
- **Dark Overlay**: A div placed directly on top of the rain to deepen it: `fixed inset-0 bg-black/40 z-0 pointer-events-none`.

### 3.2 Top Navigation (Navbar)
- **Container**: `absolute top-0 left-0 w-full flex items-center justify-between py-8 px-8 md:px-16 z-50`.
- **Logo Area**:
  - Contains a `div` wrapper and a `Lucide-react` `<Terminal />` icon.
  - Wrapper styling: `text-[#00ff41] bg-[#00ff41]/10 p-3 rounded-md border border-[#00ff41]/30`. Hover state triggers `bg-[#00ff41]/20`.
  - Icon: size `32`, stroke width `2.5`, stroke color `#00ff41`.
  - Text: `text-3xl md:text-4xl font-mono font-bold text-white tracking-widest`.
  - Text Content: "NEXUS" followed by a blinking underscore `<span className="text-[#00ff41] animate-pulse">_</span>`.
- **Links Container (Desktop Only)**:
  - Hidden on mobile, visible on `lg`.
  - Styling: `flex items-center gap-10 px-10 py-4 rounded-full glass-pill`.
  - Links: "About", "Services", "Solutions", "AI Products", "FAQ". Class `.nav-link` applies `text-base md:text-lg text-gray-300 hover:text-white transition-colors duration-200`.
- **CTA Button**:
  - Text: "Book Demo"
  - Styling: `glass-pill px-8 py-3.5 rounded-full text-base font-medium text-[#00ff41] hover:text-[#4dff79] hover:bg-white/10 transition-all border-[#00ff41]/30`.

### 3.3 Hero Section
- **Container**: `relative z-10 flex flex-col items-center justify-center pt-40 md:pt-52 pb-20 px-6 text-center w-full max-w-5xl mx-auto`.
- **Headline (H1)**: "Awaken to the <br/> Real World". Styled as described in typography.
- **Subheadline (P)**: "Jack into the network. From automation to smart insights, our deep learning solutions."
- **CTA Button**:
  - Text: "> Initialize System"
  - Styling: `glass-pill px-10 py-4 md:text-2xl rounded-full text-[#00ff41] font-mono tracking-wide hover:bg-[#00ff41]/10 transition-all border-[#00ff41]/40 shadow-[0_0_30px_rgba(0,255,65,0.2)]`.

### 3.4 Partners Section
- **Container**: `relative z-10 w-full max-w-4xl mx-auto mt-12 md:mt-20 px-6`.
- **Content Row**: A flex-wrap row centered with `gap-10 md:gap-16`. Defaults to `opacity-60`, hovering over the row transitions to `opacity-100`.
- **Logos/Text**:
  - Custom SVG/Text representations for Visa, Square, Vercel, Google, Uber.
  - Colors are muted grays (`#D1D5DB` or `text-gray-300`).

---

## 4. UI Components & Styling Details

### 4.1 Glassmorphism Utility (`.glass-pill`)
Every interactive "container" element (nav links wrapper, buttons) uses a global CSS class `.glass-pill`:
```css
.glass-pill {
  @apply bg-white/5 border border-white/10 backdrop-blur-md;
}
```

### 4.2 Animations & Micro-interactions
- **Entry Animations (Framer Motion)**:
  - Navbar: Slide down from `y: -20`, fade in `opacity: 0` to `1`. Duration `0.8s`, ease "easeOut".
  - Hero Elements: Staggered slide up from `y: 30`, fade in. Duration `1s`. Delays: H1 (`0.2s`), P (`0.4s`).
  - Hero Button: Scale up from `scale: 0.9`, fade in. Delay (`0.6s`), duration `0.8s`.
  - Partners: Fade in `opacity: 0` to `1`. Delay `0.8s`.
- **Hover States**:
  - Navbar Logo: Background opacity increases.
  - Navbar Links: Color changes from gray-300 to white smoothly over `200ms`.
  - CTA Buttons: Background becomes slightly opaque (e.g., `hover:bg-[#00ff41]/10`).
- **Active/Misc**:
  - The underscore in the logo blinks using Tailwind's `animate-pulse`.

---

## 5. Matrix Digital Rain Canvas Technical Implementation

The `<MatrixRain />` component uses a raw HTML5 `<canvas>` inside a React `useEffect` hook.
- **Characters**: Katakana, Latin, and Numerals (`アァカサ...ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`).
- **Rendering Loop**:
  - Uses `requestAnimationFrame`. Throttle execution to roughly `30 FPS` for that classic choppy terminal look.
  - On every frame, fill the canvas with `rgba(5, 5, 5, 0.05)` to create the trailing fade effect.
  - Font size is `16px monospace`.
  - Text color is `#00ff41`.
- **Logic**:
  - Calculate the number of columns (`canvas.width / fontSize`).
  - Maintain an array `drops[]` storing the Y-coordinate for each column.
  - Pick a random character, render it at `(i * fontSize, drops[i] * fontSize)`.
  - If a drop exceeds the canvas height AND `Math.random() > 0.975`, reset its Y to 0. Otherwise, increment by 1.
- **Responsiveness**: Re-calculate canvas dimensions and append extra elements to `drops[]` on window resize.

---

## 6. Frontend Architecture & Tech Stack

- **Framework**: React 19 + Vite.
- **Styling**: Tailwind CSS v4 (using `@tailwindcss/vite`).
- **Animation Library**: `framer-motion` (v12+).
- **Icons**: `lucide-react`.
- **Typography Source**: Google Fonts (`Inter` and `Outfit`).
- **File Structure**:
  ```text
  /src
    App.tsx
    main.tsx
    index.css
    /components
      Hero.tsx
      MatrixRain.tsx
      Navbar.tsx
      Partners.tsx
  ```

---

## 7. Responsiveness & Accessibility
- **Desktop/Tablet/Mobile**: 
  - Utilize Tailwind breakpoints (`md:`, `lg:`).
  - The Navbar hides the central links on screens smaller than `lg`.
  - Hero text sizes scale up dynamically (`text-5xl` on mobile, `md:text-7xl`, `lg:text-[80px]`).
- **Accessibility**:
  - The Matrix background has `pointer-events-none` and a dark overlay ensuring contrast ratios are preserved for the neon text against the background.
  - Use semantic HTML tags (`<nav>`, `<main>`, `<h1>`).

## 8. Performance & SEO Optimizations
- Avoid unnecessary React re-renders by executing the Matrix Rain purely in a vanilla JS `requestAnimationFrame` loop attached to a mutable `ref`.
- Use a single global `glass-pill` CSS class to reduce generated HTML sizes and repetitive utility classes.
- SEO: Use appropriate Meta titles, ensure the H1 tag captures the core value prop ("Awaken to the Real World"), and use highly semantic layouts.

```
