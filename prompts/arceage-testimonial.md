Create a React + Tailwind CSS v4 + Motion ("motion/react") customer feedback / testimonial carousel section. Use Vite as the bundler. Fully mobile responsive.

### Fonts

Import from Google Fonts in your global CSS:
```
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Instrument+Serif:ital@0;1&display=swap');
```

Define two Tailwind v4 theme fonts:
- `--font-sans: "Barlow", ui-sans-serif, system-ui, sans-serif;` (primary UI font via `font-sans`)
- `--font-dm-serif: "Instrument Serif", serif;` (accent font -- not used in this section but defined globally)

The page wrapper uses `bg-black font-sans text-white`. This section overrides to `bg-white text-black`.

### Dependencies

- `react` v19 (uses `useState`)
- `motion` (npm package "motion", import `motion`, `AnimatePresence` from `motion/react`)
- `lucide-react` (import `ArrowLeft`, `ArrowRight`)
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

### Data: Feedback Array

A static array of 3 feedback objects, each with `quote`, `author`, `title`, `avatar`:

```js
const feedbacks = [
  {
    quote: "\u00abWorking with the Acreage Ag team gave us a competitive edge in bringing our crops to market. Their technical expertise, machinery, and customer service are outstanding. We consider them a key partner for all our harvesting needs\u00bb",
    author: "Maranda Walsh",
    title: "Operations Manager, GreenAcres Farms",
    avatar: "https://picsum.photos/seed/maranda/100/100"
  },
  {
    quote: "\u00abThe team's dedication and innovative approach transformed our farm operations. They delivered a high-quality harvest on time and within budget. We highly recommend their services.\u00bb",
    author: "John Doe",
    title: "Owner, Valley Wheat Producers",
    avatar: "https://picsum.photos/seed/john/100/100"
  },
  {
    quote: "\u00abExceptional service and outstanding yields. The operators were highly skilled and integrated seamlessly with our in-house farm hands. A truly remarkable partnership.\u00bb",
    author: "Sarah Smith",
    title: "Chief Agronomist, HarvestYield Co.",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  }
];
```

Note: Quotes use guillemet characters (the `<<` and `>>` style quotation marks).

---

### State Management

Two pieces of React state:
- `currentIndex` (number, default 0) -- tracks which feedback is visible
- `direction` (number, default 1) -- tracks slide direction for animation (+1 = forward, -1 = backward)

Two handler functions:
- `nextSlide`: sets direction to `1`, increments `currentIndex` wrapping with modulo
- `prevSlide`: sets direction to `-1`, decrements `currentIndex` wrapping with modulo

---

### Slide Animation Variants

Custom directional variants for the `AnimatePresence` carousel:

```js
const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 100 : -100,
    opacity: 0
  })
};
```

Transition for the slide: `{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }`

---

### Section Container

`<section>` with:
- `id="feedback"`
- Classes: `w-full bg-white text-black py-8 md:py-24 px-6 md:px-12 lg:px-[120px] flex flex-col justify-center overflow-hidden`

### Staggered Reveal Wrapper

The entire section content is wrapped in a `motion.div`:
- `initial="hidden"`, `whileInView="visible"`, `viewport={{ once: true, margin: "-100px" }}`
- Variants: hidden = `{ opacity: 0 }`, visible = `{ opacity: 1, transition: { staggerChildren: 0.05 } }`
- Classes: `w-full`

---

### Element 1: Section Title (h2)

- Wrapped in `motion.h2` with variants: hidden = `{ opacity: 0, y: 20 }`, visible = `{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }`
- Classes: `text-sm md:text-base mb-6 font-medium tracking-wide`
- Content: `<Typewriter text="Customer Feedback" delay={0} speed={0.012} />`

### Element 2: Top Divider Line

- `motion.div` with variants: hidden = `{ scaleX: 0 }`, visible = `{ scaleX: 1, transition: { duration: 0.8, ease: "easeOut" } }`
- Classes: `w-full h-[1px] bg-[#D9D9D9] mb-12 md:mb-20 origin-left`
- Animates by scaling from left to right.

### Element 3: Quote Carousel Area

- Wrapper `motion.div`:
  - Variants: hidden = `{ opacity: 0, y: 20 }`, visible = `{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }`
  - Classes: `relative overflow-hidden min-h-[300px] md:min-h-[250px] flex items-center`
- Inside: `<AnimatePresence initial={false} custom={direction} mode="wait">`
  - `motion.div` keyed by `currentIndex`, using the directional slide variants described above
  - Classes: `w-full`
  - Contains the quote `<p>`:
    - Classes: `text-2xl md:text-4xl lg:text-[44px] font-light leading-snug md:leading-tight text-right tracking-tight`
    - Content: `<Typewriter text={feedbacks[currentIndex].quote} delay={0.2} speed={0.012} />`

### Element 4: Bottom Divider Line

- Same animation as top divider: `motion.div` with scaleX variants
- Classes: `w-full h-[1px] bg-[#D9D9D9] mt-12 md:mt-20 mb-8 origin-left`

### Element 5: Author Info + Navigation Arrows

- Wrapper `motion.div`:
  - Variants: hidden = `{ opacity: 0, y: 20 }`, visible = `{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }`
  - Classes: `flex flex-col sm:flex-row justify-between items-center gap-6`

**Left side: Author info (animated on slide change)**
- `<AnimatePresence mode="wait">` wrapping a `motion.div` keyed by `currentIndex`:
  - `initial={{ opacity: 0, y: 10 }}`, `animate={{ opacity: 1, y: 0 }}`, `exit={{ opacity: 0, y: -10 }}`
  - `transition={{ duration: 0.2 }}`
  - Classes: `flex items-center gap-4 w-full sm:w-auto`
- Avatar `<img>`:
  - `src={feedbacks[currentIndex].avatar}`
  - Classes: `w-14 h-14 rounded-full object-cover`
  - `referrerPolicy="no-referrer"`
- Author name `<h3>`: classes `font-medium text-lg`, content `<Typewriter text={author} delay={0.4} speed={0.012} />`
- Author title `<p>`: classes `text-gray-500 text-sm`, content `<Typewriter text={title} delay={0.5} speed={0.012} />`

**Right side: Navigation arrows**
- Wrapper: `flex gap-2 w-full sm:w-auto justify-end`
- Two circular buttons, each:
  - Classes: `w-14 h-14 bg-[#D9D9D9] hover:bg-[#c9c9c9] transition-colors flex items-center justify-center rounded-full`
  - Left button: `onClick={prevSlide}`, contains `<ArrowLeft className="w-6 h-6 text-black" strokeWidth={1.5} />`, `aria-label="Previous feedback"`
  - Right button: `onClick={nextSlide}`, contains `<ArrowRight className="w-6 h-6 text-black" strokeWidth={1.5} />`, `aria-label="Next feedback"`

---

### Mobile Responsiveness Summary

- Section padding: `py-8 px-6` on mobile, `md:py-24 md:px-12`, `lg:px-[120px]`
- Title: `text-sm` on mobile, `md:text-base`
- Divider margins: `mb-12` / `mt-12` on mobile, `md:mb-20` / `md:mt-20` on desktop
- Quote text: `text-2xl` on mobile, `md:text-4xl`, `lg:text-[44px]`
- Quote container min-height: `min-h-[300px]` on mobile, `md:min-h-[250px]` on desktop
- Author + arrows row: stacks vertically on mobile (`flex-col`), horizontal at `sm:` (`sm:flex-row`)
- Arrow buttons and author section go full width on mobile (`w-full`), auto-width at `sm:` (`sm:w-auto`)
- Arrows align right on mobile via `justify-end`

---