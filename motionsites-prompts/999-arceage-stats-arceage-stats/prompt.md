# Arceage Stats

## Metadata

- Source: https://motionsites.ai/
- Prompt ID: `arceage-stats`
- Title: Arceage Stats
- Category: Stats
- Type: stats
- Types: 
- Page type: hero
- Sort order: 999
- Free in site metadata: yes
- Fetch status: fetched

## Preview Assets

- Video: https://stream.mux.com/zMC9jK00WHTuGRBcvnqTjT4Ic5y021bOtZybNW4ORX00MY.m3u8

## Full Prompt

````
Create a React + Tailwind CSS v4 + Motion (framer-motion successor) stats section component. Use Vite as the bundler. The section should be fully mobile responsive.

### Fonts

Import from Google Fonts in your global CSS:
```
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Instrument+Serif:ital@0;1&display=swap');
```

Define two Tailwind v4 theme fonts:
- `--font-sans: "Barlow", ui-sans-serif, system-ui, sans-serif;` (used as the primary UI font via `font-sans`)
- `--font-dm-serif: "Instrument Serif", serif;` (used as the accent/poetic font via `font-dm-serif`)

The page wrapper uses `bg-black font-sans text-white`.

### Dependencies

- `react` v19
- `motion` (npm package "motion", imported as `motion/react` -- provides `motion`, `useInView`, `animate`)
- `tailwindcss` v4 with `@tailwindcss/vite` plugin
- Vite v6+

### Section Layout

The section is a `<section>` with:
- `id="stats"`
- Classes: `bg-black text-white py-8 md:py-24 px-6 md:px-12 lg:px-[120px] w-full border-t border-white/10 overflow-hidden`
- Inner wrapper: `w-full max-w-[1440px] mx-auto`
- Content is a two-column flexbox: `flex flex-col lg:flex-row gap-16 lg:gap-[160px] items-stretch`

### Left Column (flex-1, flex flex-col justify-start)

The entire left column is wrapped in a `motion.div` with staggered reveal animation:
- `initial="hidden"`, `whileInView="visible"`, `viewport={{ once: true, margin: "-100px" }}`
- Variants: hidden = `{ opacity: 0 }`, visible = `{ opacity: 1, transition: { staggerChildren: 0.06 } }`

**Heading (h2):**
- Classes: `text-[clamp(1.5rem,4vw,3.5rem)] font-medium tracking-tight mb-6 leading-[1.1] w-[590px] max-w-full`
- Content uses a custom `<Typewriter>` component (described below):
  - `<Typewriter text="Powering Harvests" delay={0} speed={0.012} />` followed by `<br />`
  - `<Typewriter text="that " delay={0.25} speed={0.012} />` then a `<span className="font-dm-serif italic font-normal">` wrapping `<Typewriter text="Maximize Your Yield" delay={0.35} speed={0.012} />`
- The phrase "Maximize Your Yield" renders in Instrument Serif italic as the accent font.

**Subtitle (p):**
- Classes: `text-base md:text-lg text-white/40 leading-relaxed font-light max-w-lg whitespace-normal mb-16`
- Content: `<Typewriter text="For over a decade, the region's most demanding agricultural operations have relied on our modern machinery and skilled crews to secure their crops efficiently and reduce loss." delay={0.1} speed={0.012} />`

**Stats Grid:**
- Wrapped in `motion.div` with stagger variants: hidden = `{ opacity: 0 }`, visible = `{ opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } }`
- Classes: `grid grid-cols-2 md:grid-cols-[max-content_max-content] gap-8 md:gap-x-16 lg:gap-x-24`
- 5 stat items, each wrapped in `motion.div` with variants: hidden = `{ opacity: 0, y: 20 }`, visible = `{ opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }`
- Each stat item (`flex flex-col`):
  - **Number:** `text-4xl md:text-5xl lg:text-[56px] font-dm-serif tracking-tight mb-3` (uses Instrument Serif)
  - **Label:** `text-[10px] md:text-xs font-semibold text-white/40 uppercase tracking-wider`

The 5 stats with their AnimatedCounter props:
1. `value={500} suffix="K+"` / Label: "Acres Harvested Annually"
2. `value={99.8} decimals={1} suffix="%"` / Label: "Crop Recovery Rate"
3. `value={50} suffix="+"` / Label: "Modern Combines Deployed"
4. `value={15} suffix="+"` / Label: "Crop Varieties Supported"
5. `value={24} suffix="/7"` / Label: "Uptime During Season"

### AnimatedCounter Component

A helper component that animates from 0 to a target value on scroll into view:
- Props: `value: number`, `suffix?: string` (default ""), `prefix?: string` (default ""), `decimals?: number` (default 0)
- Uses `useRef<HTMLSpanElement>`, `useInView(ref, { once: true, margin: "-50px" })` from `motion/react`
- On `inView`, calls `animate(0, value, { duration: 1.5, ease: "easeOut", onUpdate(val) { ref.current.textContent = prefix + val.toFixed(decimals) + suffix } })`
- Returns `<span ref={ref}>{prefix}0{suffix}</span>` as initial render

### Typewriter Component

A reusable character-by-character reveal animation triggered on scroll:
- Props: `text: string`, `delay?: number` (default 0), `speed?: number` (default 0.015), `className?: string` (default "")
- Uses `useRef`, `useInView(ref, { once: true, margin: "-10px" })` from `motion/react`
- Renders a `motion.span` with `initial="hidden"` and `animate={inView ? "visible" : "hidden"}`
- Parent variants: hidden = `{ opacity: 1 }`, visible = `{ opacity: 1, transition: { staggerChildren: speed, delayChildren: delay } }`
- Splits text into individual characters, each wrapped in `motion.span` with variants: hidden = `{ opacity: 0 }`, visible = `{ opacity: 1 }`

### Right Column: Logo-Masked Video

- Wrapper: `flex justify-center lg:justify-end items-center shrink-0 lg:w-1/2`
- Inner `motion.div`:
  - `initial={{ opacity: 0, scale: 0.9 }}`
  - `whileInView={{ opacity: 1, scale: 1.2 }}`
  - `viewport={{ once: true, margin: "-100px" }}`
  - `transition={{ duration: 0.8, delay: 0, ease: "easeOut" }}`
  - Classes: `w-full max-w-[500px] lg:max-w-none lg:w-[120%] aspect-square origin-center`
  - Uses CSS `mask-image` (both `-webkit-mask-image` and `mask-image`) with an inline SVG data URI of a triangular/mountain-like logo shape. The exact SVG path data:
    ```
    m53.54,45.42c2.19-3.79,7.67-3.79,9.86,0l4.54,7.87c1.17,2.02,1.17,4.51,0,6.54l-8.15,13.81c-1.68,2.91.42,6.55,3.78,6.55h17.81c3.45,0,5.61-3.74,3.89-6.73l-28.76-49.81c-2.95-5.12-10.34-5.12-13.29,0l-28.46,49.3c-1.86,3.22.46,7.24,4.18,7.24h10.23c2.55,0,4.91-1.36,6.19-3.57l18.18-31.19Z
    ```
  - SVG viewBox: `0 0 100 100`
  - Mask properties: `maskSize: 'contain'`, `maskRepeat: 'no-repeat'`, `maskPosition: 'center'`
  - Full inline style object:
    ```js
    {
      WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='m53.54,45.42c2.19-3.79,7.67-3.79,9.86,0l4.54,7.87c1.17,2.02,1.17,4.51,0,6.54l-8.15,13.81c-1.68,2.91.42,6.55,3.78,6.55h17.81c3.45,0,5.61-3.74,3.89-6.73l-28.76-49.81c-2.95-5.12-10.34-5.12-13.29,0l-28.46,49.3c-1.86,3.22.46,7.24,4.18,7.24h10.23c2.55,0,4.91-1.36,6.19-3.57l18.18-31.19Z'/%3E%3C/svg%3E")`,
      WebkitMaskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='m53.54,45.42c2.19-3.79,7.67-3.79,9.86,0l4.54,7.87c1.17,2.02,1.17,4.51,0,6.54l-8.15,13.81c-1.68,2.91.42,6.55,3.78,6.55h17.81c3.45,0,5.61-3.74,3.89-6.73l-28.76-49.81c-2.95-5.12-10.34-5.12-13.29,0l-28.46,49.3c-1.86,3.22.46,7.24,4.18,7.24h10.23c2.55,0,4.91-1.36,6.19-3.57l18.18-31.19Z'/%3E%3C/svg%3E")`,
      maskSize: 'contain',
      maskRepeat: 'no-repeat',
      maskPosition: 'center',
    }
    ```

- Inside the masked div, a `<video>` element:
  - Attributes: `autoPlay`, `loop`, `muted`, `playsInline`
  - Classes: `w-full h-full object-cover`
  - Source: `https://app-uploads.krea.ai/wan-videos/7f348c17-c3aa-40c9-9d5b-a2bed9a72c2e.mp4` (type `video/mp4`)

### Mobile Responsiveness Summary

- Section padding: `py-8 px-6` on mobile, `md:py-24 md:px-12`, `lg:px-[120px]`
- Layout stacks vertically on mobile (`flex-col`), goes side-by-side at `lg:` (`flex-row`)
- Heading uses fluid typography: `clamp(1.5rem, 4vw, 3.5rem)`
- Stats grid: 2 columns on mobile (`grid-cols-2`), auto-sized on `md:` (`grid-cols-[max-content_max-content]`)
- Stat numbers: `text-4xl` on mobile, `md:text-5xl`, `lg:text-[56px]`
- Video mask: `max-w-[500px]` on mobile, full width at `lg:` with `lg:w-[120%]`

---
````
