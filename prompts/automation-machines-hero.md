# Automation Machines

**ID:** automation-machines-hero  
**Category:** Hero Section  
**Type:** hero  

---

PROMPT TO RECREATE THIS HERO SECTION

Build a full-screen dark hero section for a futuristic "Automation Machines" landing page using React, Vite, Tailwind CSS v4, Motion (framer-motion), Lucide React icons, and Spline 3D. The page should be a single full-viewport section with a black background, white text, and a 3D Spline scene behind all content.

DEPENDENCIES (exact versions)

react ^19.0.0
react-dom ^19.0.0
vite ^6.2.0
@vitejs/plugin-react ^5.0.4
tailwindcss ^4.1.14 (with @tailwindcss/vite ^4.1.14 plugin)
motion ^12.23.24 (import from motion/react)
lucide-react ^0.546.0
@splinetool/react-spline ^4.1.0
@splinetool/runtime ^1.12.72

FONTS (Google Fonts)

Import this exact Google Fonts URL in your CSS:
https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Instrument+Serif:ital@1&display=swap

Font assignments via Tailwind @theme:
--font-sans: "Space Grotesk" (body text default)
--font-display: "Orbitron" (main heading)
--font-mono: "JetBrains Mono" (technical specs values, pill badges)
--font-loader: "Instrument Serif" (defined but not actively used in the hero)

TAILWIND CSS v4 CONFIGURATION (in index.css)

@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Instrument+Serif:ital@1&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Space Grotesk", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Orbitron", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
  --font-loader: "Instrument Serif", serif;
  --color-brand-orange: #F27D26;
  --color-bg: #0a0a0a;
  --color-text: #f5f5f5;
  --color-muted: #888888;
  --color-stroke: #1f1f1f;
}

@layer base {
  body {
    @apply bg-black text-white antialiased;
    font-family: var(--font-sans);
  }
}

@layer utilities {
  .text-glow {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  }
}

VITE CONFIG: Use @tailwindcss/vite plugin alongside @vitejs/plugin-react.

3D SPLINE BACKGROUND

Use @splinetool/react-spline with React lazy loading and Suspense
Scene URL: https://prod.spline.design/PIgTjpRFA03yfLyK/scene.splinecode
The Spline container is position: absolute, inset: 0, z-index: 0
It is shifted 15% to the right using inline style: transform: translateX(15%)
Suspense fallback is a full-size black div

PAGE LAYOUT

The root wrapper is: min-h-screen bg-black text-white overflow-x-hidden relative
Selection styling: selection:bg-white selection:text-black
The content sits above the Spline at z-10 with pointer-events-none (interactive elements get pointer-events-auto):
mx-auto px-4 md:px-6 pt-6 md:pt-10 min-h-screen md:h-screen flex flex-col justify-between pb-6 relative z-10 pointer-events-none

The layout uses a CSS Grid with 12 columns on desktop, 1 column on mobile.

TOP SECTION (upper-left content)

All in a single col-span-12 cell with space-y-6 md:space-y-8:

Main Heading: Font: font-display (Orbitron). Text: "Automation" on line 1, then line break, then "Machines •" (using the HTML bull entity). Size: text-[40px] sm:text-[56px] md:text-[72px]. Line height: leading-[1] md:leading-[0.9]. Weight: font-extralight. Tracking: tracking-tight. Transform: uppercase. Max width: max-w-xl. Gradient text effect: bg-gradient-to-r from-white/20 via-white/70 to-white bg-clip-text text-transparent. Animation: Motion div wrapping it, initial={{ opacity: 0, x: -20 }}, animate={{ opacity: 1, x: 0 }}, transition={{ duration: 0.8, ease: "easeOut" }}

Subtitle paragraph: Text: "Developed with high-end skills and a pixel-perfect frame for those who don't just browse the web—they build it. Code your dreams....". Classes: text-sm text-white max-w-md leading-relaxed font-light. Animation: initial={{ opacity: 0 }}, animate={{ opacity: 1 }}, transition={{ duration: 0.8, delay: 0.2 }}

Three circular icon buttons: Icons from Lucide: Snowflake, Maximize, Zap (in that order). Each in a flex row with gap-4. Each icon container: w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors cursor-pointer pointer-events-auto. Icon: size={16}, className="text-white/80". Animation: initial={{ opacity: 0 }}, animate={{ opacity: 1 }}, transition={{ duration: 0.8, delay: 0.4 }}

BOTTOM SECTION (footer area, pinned to bottom via flex justify-between)

Wrapper: flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-0 mt-16 md:mt-0

Left side -- Technical Specs card: Animation: initial={{ opacity: 0, y: 40 }}, animate={{ opacity: 1, y: 0 }}, transition={{ duration: 0.8, delay: 0.8 }}. Container: p-6 md:p-8 w-full md:max-w-md pointer-events-auto. Header: text "Technical Specs", classes: text-[10px] font-mono tracking-[0.3em] uppercase text-white/60 mb-5. Four spec rows in a space-y-4 div, each row is: flex justify-between items-end border-b border-white/10 pb-3 group cursor-default. Label (left): text-xs text-white/70 group-hover:text-white transition-colors. Value (right): text-xs font-mono tracking-tight text-white. Data: Stack: "React + Node + SQL", Logic: "V8 - Runtime Logic", Uptime: "99.9% High-Avail", Scale: "Responsive Modern Layout"

Right side -- Pill badge bar: Animation: initial={{ opacity: 0 }}, animate={{ opacity: 1 }}, transition={{ duration: 1, delay: 1 }}. Outer wrapper: flex items-center w-full md:w-auto. Pill container: flex flex-wrap gap-2 bg-white/10 backdrop-blur-md rounded-2xl md:rounded-full p-2 border border-white/5 w-full md:w-auto pointer-events-auto. Four pill badges: "TS/JS" -- ACTIVE/highlighted: px-4 py-2 text-[10px] font-mono tracking-widest bg-white text-black rounded-full. "V1" -- outline: px-3 py-2 text-[10px] font-mono tracking-widest border border-white/20 rounded-full. "Full-Stack" -- outline: px-4 py-2 text-[10px] font-mono tracking-widest border border-white/20 rounded-full. "Cloud-Ready" -- outline: px-4 py-2 text-[10px] font-mono tracking-widest border border-white/20 rounded-full

ANIMATION STAGGER SEQUENCE (Motion from motion/react)

All animations use initial + animate (not scroll-triggered):
Heading: delay 0s, slides in from left (x: -20), 0.8s duration, easeOut
Subtitle: delay 0.2s, fades in, 0.8s duration
Icon buttons: delay 0.4s, fade in, 0.8s duration
Technical specs card: delay 0.8s, slides up from y: 40, 0.8s duration
Pill badge bar: delay 1.0s, fades in, 1.0s duration

KEY DESIGN DETAILS

Color palette: Pure black (#000) background, white text with various opacity levels (white/80, white/70, white/60, white/20, white/10, white/5). No navigation bar -- the hero IS the full page. The 3D scene fills the entire viewport behind the content, offset 15% to the right. All text content is left-aligned on the upper-left. The technical specs and pill badges anchor to the bottom of the viewport. On mobile, layout stacks vertically; on desktop (md breakpoint), it stretches edge-to-edge. The gradient on the heading goes from nearly invisible white (20% opacity) on the left to full white on the right, creating a reveal/fade effect. The text selection color is inverted (white background, black text). pointer-events-none on main prevents accidental interaction with the Spline scene; individual interactive elements opt back in with pointer-events-auto