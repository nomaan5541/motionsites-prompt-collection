**Create a luxury real estate landing page called "Galaxy Home" (brand name "Aether Lane") using React, TypeScript, Vite, Tailwind CSS, and Framer Motion. Use the Google Font "Inter Tight" (weights 400, 500, 600, 700). The page has a dark/cosmic aesthetic with parallax scrolling effects and layered imagery.**

---

### Tech Stack & Dependencies
- React 18, TypeScript, Vite
- Tailwind CSS 3.4
- Framer Motion 12
- Lucide React for icons

### Tailwind Config
Custom brand colors:
- `brand-blue`: `#8F9EFF`
- `brand-navy`: `#271C40`
- `brand-dark`: `#020319`

Custom animations:
- `marquee`: translateX 0% to -50%, 30s linear infinite
- `marquee-reverse`: translateX -50% to 0%, 30s linear infinite

Font: `'Inter Tight', system-ui, sans-serif`

### Global CSS
```css
body { font-family: 'Inter Tight', system-ui, sans-serif; overflow-x: hidden; }
* { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
html { scroll-behavior: smooth; }
```

---

### Section 1: Navbar (fixed, centered, floating pill)
- Fixed at top center with `z-[60]`, padding `px-4 pt-4 md:pt-6`
- Pill shape: `rounded-full bg-[#312D7C]/40 backdrop-blur-[15px]`, gaps `gap-4 md:gap-8 lg:gap-20`, padding `px-4 py-3`
- Logo: custom SVG (4-petal/clover shape) at `h-6 w-6 md:h-7 md:w-7`, fill white, viewBox `0 0 256 256`, path: `M 228 0 C 172.772 0 128 44.772 128 100 L 128 0 L 0 0 L 0 28 C 0 83.228 44.772 128 100 128 L 0 128 L 0 256 L 28 256 C 83.228 256 128 211.228 128 156 L 128 256 L 256 256 L 256 228 C 256 172.772 211.228 128 156 128 L 256 128 L 256 0 Z`
- Brand name: "Aether Lane", `text-base md:text-xl font-medium text-white`, gap-2 from logo
- Nav links: `['Home', 'About', 'Estates', 'Projects', 'Inquire']`, hidden on mobile, `gap-6`, `text-sm`, first link white, rest `text-[#B6B8C3] hover:text-white`
- CTA button: "Get in touch", `rounded-full border border-white/80 px-6 py-2 text-[15px] font-medium`, background: `linear-gradient(180deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.10) 76%), radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.7) 0%, transparent 100%), #BEC7FF`, text color `text-brand-navy/80 drop-shadow-sm`, hover scale 1.05
- Mobile: Animated hamburger (3 bars that animate to X using Framer Motion), opens fullscreen overlay (`bg-brand-dark/95 backdrop-blur-xl`) with staggered link animations (fade up + blur)

---

### Section 2: Hero (full viewport height, parallax layers)
- Full `h-screen w-full overflow-hidden`, `z-10`
- Uses `useScroll` targeting the section with offset `['start start', 'end start']`
- Parallax `bgY`: transforms scrollYProgress [0,1] to ['0%', '8%']

**Layer 1 (z-0) - Sky background:**
- Image URL: `https://soft-zoom-63098134.figma.site/_assets/v11/7af55796a90a26e2d57c9fa2a48815874023cff0.png`
- `h-[120%] w-full object-cover`, animated with `y: bgY`

**Layer 2 (z-10) - Title text:**
- Positioned with `pt-[22vh] md:pt-32 lg:pt-36`, centered
- Text: "Galaxy  Home" (with `&nbsp;&nbsp;` double space between words)
- Font: `text-[clamp(3rem,14vw,14rem)] font-semibold leading-none whitespace-nowrap`
- Gradient text: `bg-clip-text text-transparent`, `backgroundImage: 'linear-gradient(to bottom, #A8B4FF, #FFFFFF)'`
- `mix-blend-lighten` to blend with layers

**Layer 3 (z-20) - Subtexts:**
- Left: "Elegance Above the Skyline" at `left-6 top-[200px] md:left-12 md:top-[320px] lg:left-24`, `text-lg md:text-[22px] md:leading-6 font-medium text-white/70 mix-blend-overlay`, hidden on mobile
- Right: "Your Dream Residence Starts Here" at `right-6 top-[200px] md:right-12 md:top-[320px] lg:right-24`, same styling but `text-white`, hidden on mobile

**Layer 4 (z-30) - Building image (overlaps text):**
- Image URL: `https://soft-zoom-63098134.figma.site/_assets/v11/644aba5492aa8bd5756bc5c6d65255d577b1aaf3.png`
- `h-[120%] w-full object-cover`, same parallax `y: bgY`

---

### Section 3: Mountain Background + Content (overlaps hero by -25vh)
- Wrapper: `relative z-40 -mt-[25vh]`
- Mountain image in background with separate parallax: `useScroll` on entire wrapper (offset `['start start', 'end end']`), transforms to ['0%', '-20%']
- Mountain image URL: `https://soft-zoom-63098134.figma.site/_assets/v11/3d8fdaf726b804c1299840860af873a910ce1571.png`
- `h-[120%] w-full object-cover object-top`, positioned `absolute -top-[10vh] left-0 right-0 bottom-0`

---

### Section 4: Content Section (inside mountain wrapper)
- Padding: `pt-24 sm:pt-32 md:pt-40`

**Description block:**
- Centered column, `px-5 sm:px-6 py-16 md:py-32`
- Text: "Explore distinguished estates, iconic design, and meticulously curated homes across the globe's most sought-after destinations."
- `max-w-[600px] text-sm sm:text-base md:text-lg font-medium text-white/90 leading-relaxed text-center`
- Text shadow: `2px 4px 26px rgba(0, 0, 0, 0.56)`
- CTA button: same style as navbar "Get in touch", `mt-6 sm:mt-7 px-8 sm:px-10 py-2.5 sm:py-3 text-base sm:text-lg`

---

### Section 5: Text Fill Section (scroll-driven character reveal)
- Container: `max-w-[820px]` centered, `px-5 sm:px-6 pb-16 sm:pb-24 pt-8 sm:pt-12 md:px-12`
- Text: "We present refined estates that merge remarkable design, prime surroundings, and relentless craftsmanship. Each residence is chosen for the experience it delivers not merely the footprint it provides."
- Font: `text-xl sm:text-2xl md:text-[40px] md:leading-[48px] text-center leading-snug tracking-tight font-medium text-white`
- Animation: Each character uses `useTransform` on scroll progress. Characters start at `opacity: 0.25` and animate to `opacity: 1` as the user scrolls. Uses `useScroll` with offset `['start 0.8', 'end 0.2']`. Each character calculates its own start/end threshold based on its index relative to total character count (range +/- 0.01 around its position).

---

### Section 6: Logo Marquee (infinite scroll)
- Container: `max-w-[820px]` centered, `py-4 sm:py-6`, overflow hidden
- Row 1 (left to right): Sparkles/"Prism", Waves/"Cascade", Star/"Pinnacle" (repeated), uses `animate-marquee`
- Row 2 (right to left): Zap/"Impulse", Orbit/"Nexus", Gem/"Radiant" (repeated), uses `animate-marquee-reverse`
- Each logo item: Lucide icon (`h-4 w-4 sm:h-5 sm:w-5 text-white/80`) + name (`text-sm sm:text-base font-medium text-white/90 whitespace-nowrap`)
- Double-duplicated arrays for seamless loop, `gap-8 sm:gap-12`

---

### Section 7: Stats Section
- `px-5 sm:px-6 py-16 md:py-32`
- White gradient overlay on top: `absolute -top-[400px] left-0 right-0 bottom-0`, `bg-gradient-to-b from-transparent via-white/60 to-white`
- Heading: "Only the proven results here", `text-2xl md:text-[40px] md:leading-[44px] font-medium text-brand-navy text-center mb-10 sm:mb-16`
- Stats grid: `grid-cols-2 md:flex`, `max-w-5xl` centered
- Stats data:
  - "500" / "Estates Delivered"
  - "25" / "Exclusive Markets"
  - "12" / "Years in the Field"
  - "99%" / "Owner Satisfaction"
- Values: `text-4xl sm:text-5xl md:text-[64px] md:leading-[76px] font-semibold text-brand-navy`
- Labels: `text-sm sm:text-base md:text-xl font-medium text-brand-navy/70 text-center`
- Dividers between stats (desktop only): `h-[80px] w-px bg-brand-navy/20 mx-8 lg:mx-12`
- Animate in view with Framer Motion `useInView` (once, margin -100px): fade up (`opacity: 0, y: 30` to `opacity: 1, y: 0`), staggered by 0.15s per stat, duration 0.6s

---

### Image URLs (exact)
1. Sky/hero background: `https://soft-zoom-63098134.figma.site/_assets/v11/7af55796a90a26e2d57c9fa2a48815874023cff0.png`
2. Building (transparent foreground): `https://soft-zoom-63098134.figma.site/_assets/v11/644aba5492aa8bd5756bc5c6d65255d577b1aaf3.png`
3. Mountain/landscape: `https://soft-zoom-63098134.figma.site/_assets/v11/3d8fdaf726b804c1299840860af873a910ce1571.png`