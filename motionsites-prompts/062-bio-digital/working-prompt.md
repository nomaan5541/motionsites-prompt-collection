Build a full-screen hero landing page for a fictional brand called "NeuralKinetics" using React, Vite, Tailwind CSS v4, and Framer Motion (the `motion` package). The page is a single-screen immersive experience with a fixed navbar, a fullscreen looping background video, a centered two-line headline, and a bottom information footer. White background, black text, no purple/violet colors anywhere. The aesthetic is ultra-minimal, luxury tech -- inspired by high-end agency sites.

---

## Tech Stack & Dependencies

- React 19, Vite 6, TypeScript
- Tailwind CSS v4 (using `@tailwindcss/vite` plugin, `@import "tailwindcss"` syntax, and `@theme` block -- NOT the old tailwind.config.js approach)
- `motion` package (Framer Motion v12+, imported as `motion/react`)
- `lucide-react` for the Plus icon
- Google Fonts: **Inter** (weights 400, 500, 600) for body text, **Outfit** (weights 300, 400, 500, 600, 700) as the display/heading font

---

## Fonts & CSS Setup (index.css)

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@300;400;500;600;700&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Outfit", ui-sans-serif, system-ui, sans-serif;
  
  --color-brand-black: #000000;
  --color-brand-gray: #F5F5F7;
  --color-brand-text-muted: #6E6E73;
}

@layer base {
  body {
    @apply bg-white text-brand-black font-sans antialiased selection:bg-black selection:text-white;
  }
}
```

This gives us `font-sans` (Inter) and `font-display` (Outfit) as Tailwind utility classes.

---

## Page Structure (App.tsx)

The page is a single `div` with `relative min-h-screen w-full flex flex-col justify-between bg-white text-black font-sans antialiased selection:bg-black selection:text-white overflow-hidden`. It contains these layers in z-order:

### Layer 1: Fullscreen Background Video (z-0)

An absolutely positioned fullscreen container (`absolute inset-0 z-0 pointer-events-none select-none`) containing a `motion.div` that fades in and slightly scales down on load:
- `initial={{ opacity: 0, scale: 1.05 }}`
- `animate={{ opacity: 1, scale: 1 }}`
- `transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}`

Inside is a `<video>` element:
- **src**: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260530_061107_6567e617-ee84-4c3e-ac81-f2d9dda9121a.mp4`
- Attributes: `autoPlay`, `loop`, `muted`, `playsInline`
- Classes: `absolute inset-0 w-full h-full object-cover pointer-events-none`

### Layer 2: Hero Headline (z-10)

A `<main>` element (`flex-1 flex flex-col items-center justify-center px-6 md:px-12 relative z-10`) containing a centered text block:

- Outer wrapper: `text-center w-full max-w-7xl px-4 mt-24 md:mt-0 translate-y-10 md:translate-y-14`
- Inner `motion.div` with entrance animation:
  - `initial={{ opacity: 0, y: 15 }}`
  - `animate={{ opacity: 1, y: 0 }}`
  - `transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}`
  - Classes: `flex flex-col items-center justify-center select-none`

**Line 1 (h1):** "NeuralKinetics"
- Classes: `font-display text-[7.5vw] md:text-[5.8vw] lg:text-[4.6vw] font-medium tracking-tight text-black leading-[0.9]`

**Line 2 (h2):** "cybernetics made organic"
- Same responsive font sizes as h1, same `leading-[0.9]`, with `mt-1 md:mt-1.5`
- "cybernetics" is a `<span>` with `text-black/25 font-light tracking-tight mr-1.5 md:mr-2` (very faded, light weight)
- "made organic" is a `<span>` with `text-black font-medium tracking-tight` (full black, medium weight)

### Layer 3: Fixed Navbar (z-50)

A `motion.nav` fixed at top, full width, with entrance animation:
- `initial={{ y: -16, opacity: 0 }}`
- `animate={{ y: 0, opacity: 1 }}`
- `transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}`
- Classes: `fixed top-0 left-0 w-full p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 z-50 pointer-events-none`

**Left side** (`flex flex-wrap items-center gap-3 pointer-events-auto`):

1. **Logo + Brand Name**: A div with `flex items-center gap-1`, containing:
   - A custom SVG logo icon (40x40 viewBox, two black rounded rectangles rotated -35 degrees to form a slanted dual-capsule shape):
     ```
     <rect x="7" y="19" width="15" height="5.5" rx="2.75" transform="rotate(-35 7 19)" />
     <rect x="17.5" y="24" width="15" height="5.5" rx="2.75" transform="rotate(-35 17.5 24)" />
     ```
     Classes: `w-10 h-10 text-black translate-y-[1px]`
   - Text "NeuralKinetics" with `font-display font-medium tracking-tight text-[18px] text-black`

2. **Menu Pill Button**: A black pill button with a white circle containing a Plus icon:
   - Outer button: `flex items-center bg-black hover:bg-zinc-800 text-white p-1 pr-5 gap-2.5 rounded-full transition-all duration-200 cursor-pointer text-[12px] font-medium border border-black/[0.03]`
   - Inner white circle: `w-9 h-9 rounded-full bg-white text-black flex items-center justify-center` containing `<Plus size={13} strokeWidth={3} />` from lucide-react
   - Text "Menu" with `text-[11.5px] pr-1`

3. **Metadata Info Pill** (hidden on mobile, `hidden md:flex`):
   - `items-center bg-[#F4F4F6] border border-black/[0.03] rounded-full px-6 h-11 select-none text-[11.5px] font-normal text-black/60 gap-5`
   - Contains two spans: "Advanced Bionics" and "Cognitive AI"

**Right side** (`pointer-events-auto flex items-center`):

4. **Adaptive Systems Pill**: A light gray compound pill:
   - Outer: `flex items-center bg-[#F4F4F6] hover:bg-[#EAEAEF] transition-colors rounded-full p-1 pr-6 gap-3.5 border border-black/[0.03]`
   - Contains a black circle button (`w-9 h-9 rounded-full bg-black text-white`) with a custom 4-node clover SVG icon (24x24 viewBox, 4 filled circles at cardinal points connected by crosshair lines at 0.6 opacity, center unfilled circle)
   - Text "Adaptive Systems" with `text-[11px] font-medium text-black/70 select-none`

### Layer 4: Footer (z-30)

A footer with `w-full relative z-30 px-8 py-10 md:px-16 md:py-14 bg-gradient-to-t from-white via-white/80 to-transparent` creating a fade-up from white at the bottom.

Inner `motion.div`:
- `initial={{ y: 20, opacity: 0 }}`
- `animate={{ y: 0, opacity: 1 }}`
- `transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}`
- Classes: `max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8`

Contains three elements in a row (on desktop):

1. **Left text block** (`max-w-[300px] md:max-w-[340px]`):
   - Label: "Autonomous Dynamics" at `text-[11.5px] font-medium text-black/50`
   - Body: "Unifying biological grace with machine intelligence to design the next era of fusion" at `text-[19px] md:text-[21px] font-normal text-black leading-[1.15] tracking-tight`

2. **Vertical divider** (desktop only): `hidden lg:block w-px h-16 bg-black/[0.08]`

3. **Tag buttons** (`flex flex-wrap gap-2.5`):
   - Three buttons: "Neuromorphic", "AGI", "Cybernetics"
   - Each: `px-6 py-3.5 border border-black/15 hover:border-black text-black text-[11.5px] font-normal rounded-full bg-white hover:bg-black hover:text-white transition-all duration-300 cursor-pointer active:scale-95`

---

## Key Design Details

- **Easing curve used everywhere**: `[0.16, 1, 0.3, 1]` -- a smooth, slightly springy deceleration
- **Color palette**: Pure black (#000), white (#FFF), light gray (#F4F4F6, #EAEAEF), muted text at various black opacities (25%, 50%, 60%, 70%)
- **No purple/indigo/violet anywhere**
- **Typography scale**: Responsive vw-based sizes for the hero (7.5vw mobile, 5.8vw tablet, 4.6vw desktop), pixel-based for UI elements (11px-21px range)
- **All pill-shaped UI elements** use `rounded-full`
- **Selection highlight**: black background, white text (`selection:bg-black selection:text-white`)
- **The background video** plays behind everything, fills the viewport with `object-cover`, and has a subtle scale-down entrance animation
- **Footer gradient** fades from transparent at top to solid white at bottom, ensuring text readability over the video