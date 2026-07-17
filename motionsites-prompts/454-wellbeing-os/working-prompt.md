Create a fullscreen hero section for a SaaS product called "flowpath" using React, Tailwind CSS, and Lucide React icons. The section should be a single `<section>` filling the viewport (`h-screen w-full overflow-hidden`).

**Background:**
- A looping, muted, autoplaying `<video>` element covering the full section with `object-cover`. Video URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260703_053131_1ec3dd1c-d627-44fb-ab20-6e1fce41b0d5.mp4`
- A subtle dark overlay on top of the video: `bg-black/10`

**Font:**
- Use "Helvetica Now Text" as the primary font, loaded from: `https://db.onlinewebfonts.com/c/08e020de1811ec4489f82d1247a42c09?family=Helvetica+Now+Text`
- Fallback stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- Applied globally via `* { font-family: ... }` in CSS

**Navigation (top, not fixed/sticky):**
- Full-width with responsive horizontal padding (`px-5 sm:px-6 md:px-12 lg:px-16`) and vertical padding (`py-4 sm:py-5`)
- Logo: An inline SVG diamond shape (28x28) with two overlapping diamond paths at 0.9 and 0.5 opacity, followed by the text "flowpath" in white, `text-lg sm:text-xl font-medium tracking-tight`
- Desktop nav (hidden on mobile): horizontal flex with items "Product" (dropdown: Connections, Workflows, Insights), "Solutions" (dropdown: Guides, Use cases, API reference), "About" (dropdown: Our story, Open roles, Reach us), "Plans" (no dropdown)
- Nav buttons: `text-white/90 hover:text-white text-sm font-medium`, with a `ChevronDown` icon (3.5x3.5) that rotates 180 degrees when dropdown is open
- Dropdowns open on hover (onMouseEnter/onMouseLeave), positioned `absolute top-full left-0`, using a custom `.liquid-glass` class, `rounded-xl py-3 px-2 min-w-[160px] shadow-xl`. Dropdown items: `text-white/80 hover:text-white text-sm rounded-lg hover:bg-white/5`
- Desktop CTA: "Log in" link (`text-white/90 hover:text-white text-sm font-medium`) and "Try it free" button using `.liquid-glass rounded-full px-5 py-2 text-white text-sm font-medium`
- Mobile menu button: animated toggle between `Menu` and `X` icons with rotation/scale/opacity transitions (duration-300)
- Mobile menu: absolutely positioned below nav, slides in with `cubic-bezier(0.16,1,0.3,1)` easing over 400ms. Background: `bg-[#2C221C]/95 backdrop-blur-xl rounded-2xl p-6`. Shows all nav items with sub-items indented, plus a bordered footer with Log in and Try it free

**Hero Content (below nav, top-aligned, not vertically centered):**
- Container: `flex-1 flex items-start justify-center` with `pt-16 sm:pt-20 md:pt-24` for spacing from the nav
- Text wrapper: `text-center max-w-3xl`
- Heading `<h1>`: `text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-[-0.02em]`
  - Content (with line breaks):
    ```
    Bridge the
    gaps. <span class="text-white/60">Ditch the</span>
    <span class="text-white/60">grindwork.</span>
    ```
- Subheading `<p>`: `text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto mt-6 sm:mt-8`
  - Text: "Flowpath unifies your complete wellness tools, so your crew spends less energy plugging gaps and more on real progress."
- Two CTA buttons side by side (`flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8`):
  1. "Begin your journey" - solid white button: `px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-gray-900 text-sm font-semibold rounded-full hover:bg-white/90`
  2. "See it live" - glass button: `px-5 sm:px-6 py-2.5 sm:py-3 liquid-glass rounded-full text-white text-sm font-semibold hover:bg-white/10`

**Custom CSS (`.liquid-glass` class):**
```css
.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
```

**Additional CSS utilities:**
```css
@keyframes dropdown-in {
  from { opacity: 0; transform: translateY(-4px) scale(0.96); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
.animate-dropdown { animation: dropdown-in 0.2s ease-out; }
.duration-400 { transition-duration: 400ms; }
```

**Important notes:**
- Dropdown elements need `!absolute` (Tailwind important modifier) to override the `position: relative` from `.liquid-glass`
- The entire section is fully responsive with breakpoints at sm, md, lg, xl
- No external UI libraries beyond Lucide React for icons
- Tailwind config is default with no extensions