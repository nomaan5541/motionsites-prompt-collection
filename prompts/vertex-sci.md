Create a full-screen cinematic hero section with a fixed navbar for a fictional scientific research lab website called "Vertex Sci." using React, Vite, TypeScript, and Tailwind CSS. The design is dark, minimal, and uses monospace typography exclusively. No colors other than black and white at various opacities. Mobile responsive.

---

## SETUP

**Tech stack:** React + Vite + TypeScript + Tailwind CSS (no additional UI libraries or icon packs needed).

**Font:** JetBrains Mono from Google Fonts. Add this to `index.html` `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700;800&display=swap" rel="stylesheet" />
```

**Page title:** `Vertex Sci.`

**Global CSS reset in index.css:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'JetBrains Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

**Tailwind config** - extend fontFamily:
```js
fontFamily: {
  mono: ['JetBrains Mono', 'monospace'],
}
```

---

## NAVBAR (Fixed, overlays hero)

Create a `Navbar` component with these exact specs:

- `position: fixed`, `top: 0`, full width, `z-50`
- Transparent by default. On scroll > 20px, transition to `bg-black/60 backdrop-blur-md` (300ms transition)
- Height: `h-16` on mobile, `h-20` on md+
- Horizontal padding: `px-6 sm:px-10 md:px-16 lg:px-20` (same as hero content)
- Flexbox row: `items-center justify-between`

**Left - Logo:** A custom inline SVG, 32x32, white fill, geometric angular shape. SVG path:
```html
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256" fill="none">
  <path d="M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 96 95 L 63.5 128 L 64 128 L 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 64 L 64 0 L 192 0 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z" fill="white" />
</svg>
```

**Center (desktop only, hidden below lg):** Navigation links in a flex row with `gap-8`:
- "Projects", "Facilities", "Discoveries", "Team"
- Each link: `text-white/70 text-xs uppercase tracking-[0.2em] font-light hover:text-white transition-colors duration-200`

**Right (desktop only, hidden below lg):** Two buttons with `gap-3`:
1. "Inquire" - outline style: `px-5 py-2.5 border border-white/30 text-white text-xs uppercase tracking-[0.15em] font-light hover:border-white/60 transition-all duration-200`
2. "Join Study" - solid style: `px-5 py-2.5 bg-white text-black text-xs uppercase tracking-[0.15em] font-medium hover:bg-white/90 transition-all duration-200`

**Mobile hamburger (visible below lg):**
- Three horizontal lines (`w-6 h-[1.5px] bg-white`) with `gap-1.5`
- On open: top line rotates +45deg and translates down 4.5px, middle line fades/scales to 0, bottom line rotates -45deg and translates up 4.5px. 300ms ease-out transitions.

**Mobile menu overlay (below lg):**
- Full screen fixed overlay, `z-40`
- Solid black background with opacity transition (500ms)
- Content: vertically stacked links with staggered entrance animations (each link delayed by `index * 60 + 150ms`)
- Each link is large (`text-2xl sm:text-3xl font-light tracking-tight`) with a bottom border (`border-white/10`) and a numbered indicator on the right (`01`, `02`, `03`, `04` in `text-white/30 text-xs`)
- Bottom of mobile menu: same two buttons ("Inquire" outline, "Join Study" solid) stacked full-width with `py-4`, delayed 400ms entrance
- Body scroll locked when menu is open

---

## HERO SECTION

A `<section>` that is `relative w-full h-screen overflow-hidden bg-black`.

### Layer 1: Background Video (absolute, z-auto)
```html
<video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
  <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_202655_a7f5aca0-2f80-4bc9-bcb5-96ac95662003.mp4" type="video/mp4" />
</video>
```
- Animation class: starts at `opacity: 0; transform: scale(1.05)`, animates to `opacity: 1; transform: scale(1)` over **1.8s** with `cubic-bezier(0.16, 1, 0.3, 1)` and `forwards` fill.

### Layer 2: Gradient Overlay (z-[5])
- `absolute inset-x-0 bottom-0 h-[60%]`
- `bg-gradient-to-t from-black/80 via-black/30 to-transparent`
- `pointer-events-none`

### Layer 3: Content (z-10)
- `relative z-10 h-full flex flex-col justify-end`
- Padding: `px-6 sm:px-10 md:px-16 lg:px-20 pb-12 md:pb-16 lg:pb-20`

#### A) Label (above the two-column layout)
- Text: `"Deep-Structure Lab. By Vertex Sci."`
- Classes: `text-white/50 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-light mb-8 md:mb-12`
- Animation: simple `fadeIn` (opacity 0 to 1), **1s**, delayed **0.4s**, same cubic-bezier, forwards

#### B) Two-column layout
- Container: `flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-20`

**LEFT COLUMN** (`flex-shrink-0`):

1. **Headline `<h1>`:**
   ```
   Fracture
   Pattern
   Dynamics
   ```
   Three words separated by `<br />` tags.
   - Classes: `text-white font-bold text-[clamp(2.5rem,8vw,5rem)] leading-[0.9] tracking-[-0.06em] uppercase`
   - Animation: `fadeSlideUp` (translateY(30px) + opacity 0 -> translateY(0) + opacity 1), **1s**, delayed **0.6s**, cubic-bezier(0.16, 1, 0.3, 1), forwards

2. **Meta line** (below headline):
   - Container: `mt-6 flex items-center gap-6 text-white/40 text-[10px] sm:text-xs tracking-wider uppercase font-light`
   - Content: `"Batch: KX-071243"` then a divider then `"Phase: Sigma"`
   - Divider: `<span>` with `w-8 h-[1px] bg-white/20 inline-block`, animated with `revealLine` (clip-path: inset(0 100% 0 0) -> inset(0 0% 0 0)), **1s**, delayed **0.9s**
   - Meta container animation: `fadeSlideUp`, **0.8s**, delayed **1.0s**, forwards

**RIGHT COLUMN** (`flex flex-col gap-8 lg:max-w-md`):

1. **Description paragraph:**
   ```
   Advancing sub-atomic fracture mapping across the crystalline stress interface. Photon array diagnostics revealing the most intricate deformation cycles in deep material forensics.
   ```
   - Classes: `text-white/60 text-xs sm:text-sm leading-relaxed font-light`
   - Animation: `fadeSlideUp`, **0.8s**, delayed **1.1s**, forwards

2. **Stats row:**
   - Container: `flex items-end gap-8 sm:gap-12`
   - Each stat is a vertical stack: `flex flex-col gap-1`
   - Stat values: `text-white text-2xl sm:text-3xl font-bold tracking-tight`
   - Stat labels: `text-white/40 text-[10px] sm:text-xs uppercase tracking-wider font-light`

   Three stats with staggered animations (all `fadeSlideUp`, **0.7s**, forwards):
   | Value | Label | Delay |
   |-------|-------|-------|
   | 7.91 | Ref. Index | 1.3s |
   | ULTRA | Clarity | 1.45s |
   | x500 degrees (use `&deg;` entity) | Resolution | 1.6s |

---

## ALL CSS KEYFRAMES (add to index.css)

```css
@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes revealLine {
  from { clip-path: inset(0 100% 0 0); }
  to { clip-path: inset(0 0% 0 0); }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(1.05);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

**Animation classes** (add to index.css - each element starts hidden and animates in):
```css
.animate-hero-video {
  animation: scaleIn 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
}
.animate-hero-label {
  animation: fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
  opacity: 0;
}
.animate-hero-title {
  animation: fadeSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
  opacity: 0;
}
.animate-hero-meta {
  animation: fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1s forwards;
  opacity: 0;
}
.animate-hero-description {
  animation: fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.1s forwards;
  opacity: 0;
}
.animate-hero-stat-1 {
  animation: fadeSlideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 1.3s forwards;
  opacity: 0;
}
.animate-hero-stat-2 {
  animation: fadeSlideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 1.45s forwards;
  opacity: 0;
}
.animate-hero-stat-3 {
  animation: fadeSlideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 1.6s forwards;
  opacity: 0;
}
.animate-hero-divider {
  animation: revealLine 1s cubic-bezier(0.16, 1, 0.3, 1) 0.9s forwards;
  clip-path: inset(0 100% 0 0);
}
```

---

## DESIGN RULES

- **ONLY black and white** - no color accents whatsoever
- White is used at opacities: /40, /50, /60, /70, /90 for hierarchy
- All text is uppercase except the description paragraph
- Tight negative letter-spacing on headline (`-0.06em`), wide tracking on labels (`0.2em` - `0.3em`)
- The animation cascade creates a cinematic reveal sequence from 0.4s to 1.6s
- All animations use the same smooth easing: `cubic-bezier(0.16, 1, 0.3, 1)`
- Fully responsive: stacks vertically on mobile, two-column on lg+
- Font sizes use clamp for fluid scaling on the headline