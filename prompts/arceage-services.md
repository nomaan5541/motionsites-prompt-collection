Create a React + Tailwind CSS v4 + Motion ("motion/react") image/services section component. Use Vite as the bundler. Fully mobile responsive.

### Fonts

Import from Google Fonts in your global CSS:
```
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Instrument+Serif:ital@0;1&display=swap');
```

Define two Tailwind v4 theme fonts:
- `--font-sans: "Barlow", ui-sans-serif, system-ui, sans-serif;` (primary UI font via `font-sans`)
- `--font-dm-serif: "Instrument Serif", serif;` (accent/poetic italic font via `font-dm-serif`)

The page wrapper uses `bg-black font-sans text-white`.

### Dependencies

- `react` v19
- `motion` (npm package "motion", import from `motion/react` -- provides `motion`)
- `@lottiefiles/react-lottie-player` (provides `Player` component, import from `@lottiefiles/react-lottie-player`)
- `tailwindcss` v4 with `@tailwindcss/vite` plugin
- Vite v6+

### Also requires a Typewriter component

A reusable character-by-character reveal animation triggered on scroll:
- Props: `text: string`, `delay?: number` (default 0), `speed?: number` (default 0.015), `className?: string` (default "")
- Uses `useRef`, `useInView(ref, { once: true, margin: "-10px" })` from `motion/react`
- Renders a `motion.span` with `initial="hidden"` and `animate={inView ? "visible" : "hidden"}`
- Parent variants: hidden = `{ opacity: 1 }`, visible = `{ opacity: 1, transition: { staggerChildren: speed, delayChildren: delay } }`
- Splits text into individual characters, each wrapped in `motion.span` with variants: hidden = `{ opacity: 0 }`, visible = `{ opacity: 1 }`

---

### Section Structure

The section is a `<section>` with:
- `id="services"`
- Classes: `w-full relative overflow-hidden flex flex-col justify-center`

---

### Layer 1: Full-bleed Background Image

An absolutely-positioned div covering the entire section:
- Wrapper: `absolute inset-0 z-0`
- Image: `<img>` with:
  - `src="https://github.com/dsMagnatov/Acreage-landing-assets/blob/main/1.jpg?raw=true"`
  - `alt="Agriculture Field"`
  - Classes: `w-full h-full object-cover`
  - `referrerPolicy="no-referrer"`

---

### Layer 2: Content Container

A `div` positioned above the background:
- Classes: `relative z-10 w-full mx-auto px-6 md:px-12 lg:px-[120px] py-8 md:py-24 flex flex-col h-full justify-between gap-4 md:gap-24`

---

### Top Content: Headline, Subheadline & Button (3-column grid)

Grid wrapper: `grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 w-full items-end`

**Left 2 columns (headline area):**
- Wrapped in `motion.div` with:
  - `initial={{ opacity: 0, y: 20 }}`
  - `whileInView={{ opacity: 1, y: 0 }}`
  - `viewport={{ once: true, margin: "-100px" }}`
  - `transition={{ duration: 0.6, ease: "easeOut" }}`
  - Classes: `md:col-span-2`

- **Heading (h2):**
  - Classes: `text-[clamp(1.5rem,4vw,3.5rem)] font-medium tracking-tight text-white mb-6 leading-[1.1] max-w-[800px]`
  - Content:
    - `<Typewriter text="A Highly Efficient, Precision-Driven Harvesting Process Built For " delay={0} speed={0.012} />`
    - Then a `<span className="font-dm-serif italic font-normal">` wrapping `<Typewriter text="Maximum Yield" delay={0.8} speed={0.012} />`
  - "Maximum Yield" renders in Instrument Serif italic as the accent font.

- **Subheadline (p):**
  - Classes: `text-lg md:text-[24px] text-white/80 font-light tracking-wide`
  - Content: `<Typewriter text="Precision in every pass." delay={0.1} speed={0.012} />`

**Right column (desktop-only button):**
- Wrapped in `motion.div` with:
  - `initial={{ opacity: 0, y: 20 }}`
  - `whileInView={{ opacity: 1, y: 0 }}`
  - `viewport={{ once: true, margin: "-100px" }}`
  - `transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}`
  - Classes: `hidden md:flex justify-end w-full max-w-[421px] pb-1`
- **Button:**
  - `onClick` scrolls smoothly to `#contact` section
  - Classes: `px-6 py-2.5 rounded-full bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 text-sm tracking-wide font-medium`
  - Text: "Schedule Service"

---

### Bottom Content: 3 Feature Columns ("How it works")

Grid wrapper: `grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 w-full md:mt-[200px]`

Each of the 3 columns follows the same pattern, each wrapped in `motion.div`:
- `initial={{ opacity: 0, y: 20 }}`
- `whileInView={{ opacity: 1, y: 0 }}`
- `viewport={{ once: true, margin: "-100px" }}`
- `transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}`

Each column structure (`flex flex-col`):

1. **Lottie Icon** -- `div` with classes `w-12 h-12 mb-6 flex items-center justify-center overflow-hidden`, containing a `<Player>` component:
   - `loop`, `autoplay`
   - `style={{ width: '48px', height: '48px', filter: 'brightness(0) invert(1)' }}` (makes the icon white)

2. **Divider line** -- `div` with classes `w-full h-px bg-white/20 mb-6`

3. **Title (h3)** -- classes `text-2xl font-medium text-white mb-3`, content is a `<Typewriter>`

4. **Description (p)** -- classes `text-sm text-white/70 leading-relaxed max-w-[340px]`, content is a `<Typewriter>`

The 3 columns with their specific content:

**Column 1** (`max-w-[420px]`):
- Lottie src: `https://raw.githubusercontent.com/dsMagnatov/Acreage-landing-assets/refs/heads/main/curry.json`
- Title: "Sustainable Crop Care"
- Description: "Nurturing your fields with eco-friendly practices to ensure healthy growth and robust yields."

**Column 2** (`max-w-[420px]`):
- Lottie src: `https://raw.githubusercontent.com/dsMagnatov/Acreage-landing-assets/refs/heads/main/tractor.json`
- Title: "Advanced Machinery"
- Description: "Deploying state-of-the-art tractors and harvesters for maximum efficiency and speed."

**Column 3** (`max-w-[421px]`):
- Lottie src: `https://raw.githubusercontent.com/dsMagnatov/Acreage-landing-assets/refs/heads/main/beetle.json`
- Title: "Smart Pest Management"
- Description: "Protecting your harvest by monitoring and managing field ecosystems with precision."

---

### Mobile-Only Button (below the 3 columns)

- Wrapped in `motion.div` with:
  - `initial={{ opacity: 0, y: 20 }}`
  - `whileInView={{ opacity: 1, y: 0 }}`
  - `viewport={{ once: true, margin: "-100px" }}`
  - `transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}`
  - Classes: `flex md:hidden justify-start w-full`
- Same button as desktop version:
  - Classes: `px-6 py-2.5 rounded-full bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 text-sm tracking-wide font-medium`
  - Text: "Schedule Service"
  - Scrolls to `#contact`

---

### Mobile Responsiveness Summary

- Section padding: `px-6 py-8` on mobile, `md:px-12 md:py-24`, `lg:px-[120px]`
- Grid stacks to single column on mobile (`grid-cols-1`), 3 columns at `md:` breakpoint
- Heading uses fluid type: `clamp(1.5rem, 4vw, 3.5rem)`
- Subheadline: `text-lg` mobile, `md:text-[24px]` desktop
- Desktop button hidden on mobile (`hidden md:flex`), replaced by mobile button at bottom (`flex md:hidden`)
- The `md:mt-[200px]` on the bottom grid creates vertical spacing between top content and feature columns on desktop only; on mobile, `gap-4` between sections keeps it compact
- Feature column max-widths (`max-w-[420px]` / `max-w-[421px]`) constrain reading width on all sizes

---