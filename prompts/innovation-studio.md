Build a full-screen hero section for a brand called "Nexformo" using React, TypeScript, Tailwind CSS, and Lucide React icons. Use Vite as the bundler.

## Font

Use Google Fonts "Geist" with weights 300, 400, 500. Load it via:
```
https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap
```
Set the body font-family to `'Geist', -apple-system, BlinkMacSystemFont, sans-serif`. Add `-webkit-font-smoothing: antialiased` and `-moz-osx-font-smoothing: grayscale` on the body. Register `font-geist` in Tailwind config.

## Tailwind Config

Extend the theme with:
- `fontFamily.geist`: `['Geist', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']`
- `animation['spin-slow']`: `'spin 20s linear infinite'`

## Layout

The entire page is a single full-screen `<section>` with classes: `relative h-screen w-full overflow-hidden bg-black font-geist`.

## Background Video

A `<video>` element with `autoPlay muted loop playsInline` positioned `absolute inset-0 w-full h-full object-cover` (no opacity reduction, no overlay/gradient on top). The video source URL is:

```
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_135039_b04d00db-6ee2-4e2a-a7f5-b2dfd3d24fd2.mp4
```

No gradient overlay or darkening layer on the video.

## Content Layer

A `div` with `relative z-10 flex flex-col h-full px-5 sm:px-8 md:px-12 lg:px-16` sits on top of the video containing all UI.

## Navigation (Top)

A `<nav>` with `flex items-center justify-between pt-6 sm:pt-8`:

- **Logo (left):** Text "Nexform" in `text-white text-lg sm:text-xl font-medium tracking-tight`, with a superscript "o" using `<span className="text-[10px] align-super ml-0.5">o</span>`.
- **Links (center, desktop only):** Hidden on mobile (`hidden md:flex items-center gap-12`). Two links: "Studios--" and "Labs" in `text-white text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-300`. The first link has an em-dash appended.
- **Menu button (right):** A circular button `w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-white/60 transition-colors duration-300` containing a Lucide `Menu` icon at size 15.

## Main Content Area (Carousel)

Wrapper: `flex-1 flex items-center`. Inner: `w-full flex items-start justify-center md:justify-end md:mr-16 lg:mr-24 px-1 sm:px-0`.

### Rotating Circle Badge (desktop only)

Hidden on mobile (`hidden md:flex items-start mr-6 lg:mr-10 -mt-8 shrink-0`). A circle container `relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28` containing:
- A frosted circle background: `absolute inset-0 rounded-full bg-white/10 backdrop-blur-md`
- An SVG with `animate-spin-slow` (20s linear infinite), viewBox `0 0 200 200`, containing a circular text path (radius 70) with the text: `DESIGN * MODULES * DEVELOP * DEPLOY * ITERATE *` (using bullet character U+2022). Text style: `fill-white/80`, fontSize 10, fontWeight 300, letterSpacing 3.

### Text Content (Slide Carousel)

Container: `max-w-2xl relative`. Three slides that auto-rotate every 5 seconds with a crossfade transition.

Active slide: `opacity-100 translate-y-0 relative`
Inactive slide: `opacity-0 translate-y-4 absolute inset-0 pointer-events-none`
Transition: `transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]`

**Slide 1:**
- Heading: "Exploration of *neural networks* for designing and rendering digital interfaces -- Algorithmic frameworks for composing and refining aesthetics."
- CTA: "Browse Projects--"

**Slide 2:**
- Heading: "Development of *spatial engines* for constructing and animating immersive experiences -- Procedural systems for generating and evolving visual forms."
- CTA: "View Case Study--"

**Slide 3:**
- Heading: "Architecture of *generative tools* for prototyping and deploying reactive layouts -- Modular pipelines for scaling and iterating design output."
- CTA: "Explore Process--"

The italicized words above (between asterisks) should have `underline underline-offset-4 decoration-white/60`. Dashes are em-dashes (`&mdash;`).

Heading classes: `text-white text-xl sm:text-2xl md:text-3xl lg:text-[2.1rem] font-light leading-[1.45] tracking-tight`
CTA classes: `inline-block mt-6 sm:mt-8 text-white text-xs sm:text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-300`

### Pagination Dots

Below the text carousel: `flex items-center gap-2 mt-8 sm:mt-10`. Three dots:
- Active: `w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white scale-100 transition-all duration-500`
- Inactive: `w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/40 scale-90 hover:bg-white/60 transition-all duration-500`

Clicking a dot jumps to that slide and resets the 5-second timer.

## Bottom Section

Container: `pb-5 sm:pb-8`.

### Column Markers

`flex items-center justify-between mb-3 sm:mb-4` with three spans: "2", "H", "W" in `text-white/50 text-[10px] sm:text-xs font-light`.

### Footer Info

`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-0 border-t border-white/10 pt-4`

- **Left paragraph:** "Computational methods for streamlining industrial workflows and minimizing resource usage through *algorithmic refinement* as an emerging approach in interface architecture. Applications across digital infrastructure." The underlined phrase uses `underline underline-offset-2 decoration-white/30`. Text classes: `text-white/40 text-[9px] sm:text-[10px] md:text-xs font-light leading-relaxed max-w-md`. Line break between the two sentences on desktop (`<br className="hidden sm:block" />`), space on mobile.

- **Right text (sm:text-right):** Two lines: "Design Engineer" and "Dynamic Interface Engine" in `text-white/40 text-[9px] sm:text-[10px] md:text-xs font-light uppercase tracking-wider`.

## Mobile Menu Overlay

A full-screen overlay (`fixed inset-0 z-50`) toggled by the menu button. Uses `transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]` for open/close.

- **Backdrop:** `absolute inset-0 bg-black/90 backdrop-blur-xl`, clicking it closes the menu.
- **Content container:** `relative z-10 flex flex-col h-full px-8 pt-8`, slides in from `-translate-y-8` when opening.
- **Header:** Same logo + a close button (Lucide `X` icon, size 16) in a `w-10 h-10 rounded-full border border-white/30` circle.
- **Links:** Four items: "Studios", "Labs", "Process", "Connect" in `text-white text-4xl sm:text-5xl font-light tracking-tight py-3 hover:opacity-60`. Each staggers in with `transitionDelay: 150 + i * 75ms`.
- **Footer:** Below a `border-t border-white/10`, showing email "hello@nexform.studio" and phone "+1 (424) 800-7700" in `text-white/40 text-xs font-light`. Appears with delay 450ms.

When menu is open, `document.body.style.overflow = 'hidden'`.

## CSS Reset (index.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```