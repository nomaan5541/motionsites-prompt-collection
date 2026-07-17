---
title: Ninjas
category: Templates
subCategory: Agency
premium: true
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781612917716-Ninjas_Website.webp
---

# Ninjas

```text
Act like an award-winning designer and elite frontend web developer. I need you to build a highly polished, production-ready, ultra-premium single-page application (SPA) for an elite digital marketing agency known as "MARKETING NINJAS". The application must be technically flawless, 100% responsive, and utilize advanced motion design to create a breathtaking user experience.

## 1. Core Technology Stack
- **Framework:** React 18+ (with Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4)
- **Animation:** Framer Motion (`motion/react`)
- **Icons:** `lucide-react`

## 2. Complete Visual Design System

### 2.1 Exact Color Palette
- **Global Backgrounds:** Deep midnight purple tones `#14072e` and `#070f34`.
- **Vignettes \u0026 Deep Shadows:** Cosmic black `#04010a`.
- **Accents (Gradients \u0026 Highlights):**
  - **Teal:** `#5eead4` (Teal 300), `#2dd4bf` (Teal 400), `#14b8a6` (Teal 500)
  - **Emerald:** `#34d399` (Emerald 400), `#10b981` (Emerald 500), `#059669` (Emerald 600)
  - **Alerts/Critical:** `#ef4444` (Red 500), `#f87171` (Red 400)
- **Text:** White (`#ffffff`), Slate 400 (`#94a3b8`), Slate 500 (`#64748b`).

### 2.2 Typography
- **Primary Font (Headings \u0026 Body):** `Inter` (Weights: 300, 400, 600, 800, 900)
- **Secondary Font (Labels, Metadata, Terminal):** `JetBrains Mono` (Weights: 400, 600)
- **Styling Specs:**
  - **Hero Headings:** Font weight `900` (Black), tight tracking (`tracking-tight`), tight line-height (`leading-[1.1]`).
  - **Labels:** Uppercase, wide tracking (`tracking-widest`), mono font.

## 3. Section-by-Section Implementation Details

### 3.1 Global Header
- **Layout:** Fixed at top, blurred glassmorphism pill (`backdrop-blur-md`, `bg-[#0a0518]/60`).
- **Brand:** "NINJAS" gradient text (`from-white via-slate-100 to-teal-400`). Clicking it triggers a custom `resetHero` event to reset animations.
- **Navigation:** Links with a sliding pill background effect using Framer Motion's `layoutId`.

### 3.2 Immersive Hero Section (Parallax \u0026 Fake Scroll)
- **Scroll Hijacking:** The section traps the scroll for a duration of `1350` "fake scroll" units (approx. 9 scroll wheel strokes).
- **Background Atmosphere:** `#070f34` base color.
- **Parallax Image Layers (Cloudinary URLs):**
  1. **Layer 1 (Deepest):** `https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781600236/layer-1_i1fcvs.png`
  2. **Layer 2 (Mid-ground):** `https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781600250/layer-2_1_kkzgdz.png`. Must have a CSS mask applied (`radial-gradient(ellipse 100% 100% at 50% 50%, black 60%, transparent 100%)`) to beautifully blur and feather its edges.
  3. **Layer 3 (Foreground):** `https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781600241/layer-3_js1ywg.png`
- **Mouse \u0026 Scroll Reactivity:**
  - Layers pan horizontally slightly opposite to mouse movement (using `springX`).
  - Layers scale up and translate Y downwards as the user scrolls through the 1350 threshold.
- **Vignette Overlays:** Gradients fading from `#14072e]/70` to transparent to frame the edges softly.
- **Two-Phase Content Animation:**
  - **Phase 1 (Scroll 0 - 600):** Shows Content 1 ("We Strike Faster Than Competition."). Scales down to 0.95 and fades to 0 opacity.
  - **Phase 2 (Scroll 600 - 1200):** Fades in Content 2 ("Dominate with Unseen Precision.") and a CTA button.
  - Both texts use `font-black`.

### 3.3 Strategy Cards (`#tactics`)
- **Layout:** Split-grid layout. Left side contains a list of clickable tactics, right side contains a floating visual.
- **Interaction:** Clicking a tactic updates the right side. Active items have a teal left-border highlight and slightly lighter background.
- **Assets for tactics:**
  - SEO: `https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781600232/img_1_qxnqpl.png`
  - PPC: `https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781600244/img_2_qxnqpl.png`
  - CRO: `https://res.cloudinary.com/dprydfxok/image/upload/q_auto/f_auto/v1781600230/img_3_qxnqpl.png`
- **Animation:** The right-side visual continuously floats (`y: [20, -10, 20]`, `rotate: [-5, 0, -5]`).

### 3.4 Campaign Auditor (`#audit`)
- **Layout:** Dark atmosphere container (`bg-slate-950/40`) with an abstract background image (`v1781600230/img_3_qxnqpl.png` set to low opacity `0.1`).
- **Interactive Terminal UI:**
  - Form fields for Target URL, Objective, and Budget.
  - "Run Simulation" button initiates a progress bar (0% to 100% over a few seconds).
  - A stream of technical terminal logs (e.g., "Analyzing DOM structure", "Executing heuristic scoring") appear sequentially.
- **Result State:** When simulation hits 100%, reveal a highly visible "Critical Vulnerabilities Found" red-accented alert box with an `AlertCircle` icon.

### 3.5 Case Study Slider (`#wins`)
- **Layout:** Horizontal overflow container with `flex-nowrap` layout or grid for cards.
- **Cards:** Each card features immense metric numbers (e.g., "+340%"), an objective label, and a specific ROAS multiplier in a small pill.
- **Controls:** Arrow buttons (Left/Right) that trigger `scrollBy` on the hidden-scrollbar container.

### 3.6 Contact Portal (`#contact`)
- **Layout:** 2-column grid.
- **Left Column:** High-impact "Ready to Deploy the Ninjas?" copy.
- **Right Column:** Glassmorphic form card (`backdrop-blur-xl`, `bg-[#0a0518]/60`) featuring inputs with floating labels or sleek minimal borders. A teal/emerald gradient submit button.

### 3.7 Global Footer
- **Styling:** Minimalist bottom bar. `border-white/5 bg-[#14072e]`. Centered mono text for copyright.

## 4. Performance \u0026 Technical Optimization
- **Asset Loading:** Use Cloudinary URLs with `q_auto` and `f_auto` to ensure WebP/AVIF delivery.
- **100% Responsiveness:** Must fluidly adapt from 320px mobile up to ultrawide 4K. Use `md:` and `lg:` tailwind breakpoints effectively. Hide complex animations or reduce parallax depth on mobile devices if necessary.
- **SEO/A11y:** Ensure high-contrast ratios. Include aria-labels for slider controls and inputs. Use proper heading hierarchy (`h1` through `h3`).

Follow these specifications precisely. Write the cleanest, most scalable code possible utilizing standard modern React paradigms and advanced Framer Motion declarative animation structures.

```
