Create a React + Tailwind CSS v4 + Motion ("motion/react") contact form section with inline validation. Use Vite as the bundler. Fully mobile responsive.

### Fonts

Import from Google Fonts in your global CSS:
```
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Instrument+Serif:ital@0;1&display=swap');
```

Define two Tailwind v4 theme fonts:
- `--font-sans: "Barlow", ui-sans-serif, system-ui, sans-serif;` (primary UI font via `font-sans`)
- `--font-dm-serif: "Instrument Serif", serif;` (accent italic font via `font-dm-serif`)

The page wrapper uses `bg-black font-sans text-white`. This section overrides to `bg-white text-black`.

### Dependencies

- `react` v19 (uses `useState`)
- `motion` (npm package "motion", import `motion` from `motion/react`)
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

### State Management

Two pieces of state:

**formData** (object, all strings, default empty):
```js
{ name: '', email: '', phone: '', farm: '', message: '' }
```

**touched** (object, all booleans, default false):
```js
{ name: false, email: false, phone: false, farm: false, message: false }
```

**handleChange**: Updates `formData[e.target.name]` on input change.

**handleBlur**: Sets `touched[e.target.name]` to `true` on blur.

---

### Validation Rules

```js
const validations = {
  name: formData.name.trim().length > 0,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
  phone: /^\+[\d\s\-\(\)]{7,20}$/.test(formData.phone),
  farm: formData.farm.trim().length > 0,
  message: formData.message.trim().length > 0,
};
```

---

### Validation Icons (renderIcon function)

A helper function `renderIcon(fieldName, isRequired)` that:
- Returns `null` if the field has not been touched yet
- If valid (and either required OR has content): shows a **green check circle** icon
- If invalid and required: shows a **red X circle** icon
- Both icons use CSS mask-image technique (colored `div` with SVG mask), positioned `absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5`

**Green valid icon:**
- `bg-[#27BD09]`
- SVG mask URL: `https://raw.githubusercontent.com/dsMagnatov/Acreage-landing-assets/refs/heads/main/tick-circle.svg`
- Applied via both `WebkitMaskImage` and `maskImage` inline styles, with `maskSize: 'contain'`, `maskRepeat: 'no-repeat'`, `maskPosition: 'center'`

**Red invalid icon:**
- `bg-[#FF1F1F]`
- SVG mask URL: `https://raw.githubusercontent.com/dsMagnatov/Acreage-landing-assets/refs/heads/main/close-circle.svg`
- Same mask CSS properties as the green icon

---

### Form Field Animation Variants

```js
const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
```

---

### Section Container

`<section>` with:
- `id="contact"`
- Classes: `w-full bg-white text-black py-24 px-6 md:px-12 lg:px-[120px] flex flex-col items-center justify-center`

### Staggered Reveal Wrapper

Outer `motion.div`:
- `initial="hidden"`, `whileInView="visible"`, `viewport={{ once: true, margin: "-100px" }}`
- Variants: hidden = `{ opacity: 0 }`, visible = `{ opacity: 1, transition: { staggerChildren: 0.1 } }`
- Classes: `w-full max-w-3xl mx-auto flex flex-col items-center`

---

### Element 1: Header Area

A `div` with classes `text-center mb-16 w-full`.

**Heading (h2):**
- Classes: `text-[clamp(1.5rem,4vw,3.5rem)] font-medium tracking-tight mb-6 leading-[1.1]`
- Content (3 Typewriter segments across 2 lines):
  - `<span className="text-black font-dm-serif font-normal italic">` wrapping `<Typewriter text="Let's grow!" delay={0} speed={0.012} />`
  - Then a space, then `<Typewriter text="Fill in the form" delay={0.2} speed={0.012} />`
  - Then `<br />`
  - Then `<Typewriter text="and we'll be in touch" delay={0.4} speed={0.012} />`
- "Let's grow!" is rendered in Instrument Serif italic; the rest is in Barlow medium.

**Subtitle (p):**
- Classes: `text-lg md:text-xl text-gray-800`
- Content: `<Typewriter text="Ask us about our precision harvesting services" delay={0.6} speed={0.012} />`

---

### Element 2: Form

`<form>` with:
- Classes: `max-w-2xl w-full mx-auto flex flex-col gap-8`
- `onSubmit={(e) => e.preventDefault()}`

**5 form fields**, each wrapped in `motion.div` using `formVariants`. Each field follows this exact pattern:

- Wrapper `motion.div`: classes `flex flex-col gap-2 border-b border-[#D9D9D9] pb-2 transition-colors duration-300 hover:border-black focus-within:border-black`
- `<label>`: classes `text-sm font-medium`
- Inner `div`: classes `relative w-full`
- `<input>`: classes `w-full bg-transparent outline-none placeholder:text-[#D9D9D9] focus:placeholder:text-gray-500 transition-colors duration-300 text-base pr-8`
  - All inputs have `value`, `onChange={handleChange}`, `onBlur={handleBlur}`, and `name` attribute matching the field key
- After the input: `{renderIcon('fieldName', isRequired)}`

The 5 fields in order:

| # | Label | Name | Type | Placeholder | Required |
|---|-------|------|------|-------------|----------|
| 1 | Your Name* | name | text | Who's reaching out? | true |
| 2 | Email* | email | email | Where can we reach you? | true |
| 3 | Phone Number* | phone | tel | Best number to call you on? | true |
| 4 | Farm / Company | farm | text | Your farm or organization? | false |
| 5 | Tell Us More | message | text | What crops or acreage would you like to discuss? | false |

Fields 1-3 have the HTML `required` attribute and pass `true` to `renderIcon`. Fields 4-5 do not have `required` and pass `false` to `renderIcon`.

---

### Element 3: Submit Button

Wrapped in `motion.div` with `formVariants`, classes `mt-8 flex justify-center`.

**Button:**
- `type="submit"`
- Classes: `bg-black text-white px-6 py-2.5 rounded-full hover:bg-[#27BD09] transition-colors duration-300 text-sm tracking-wide`
- Text: "Send Message"
- Hover changes background from black to green (`#27BD09`).

---

### Mobile Responsiveness Summary

- Section padding: `py-24 px-6` on all sizes, `md:px-12`, `lg:px-[120px]`
- Form constrained to `max-w-2xl` (672px), centered with `mx-auto`
- Outer wrapper constrained to `max-w-3xl` (768px)
- Heading uses fluid typography: `clamp(1.5rem, 4vw, 3.5rem)`
- Subtitle: `text-lg` on mobile, `md:text-xl` on desktop
- Form fields stack vertically with `gap-8` at all breakpoints
- All interactive elements (inputs, button) are full-width and touch-friendly
- Validation icons are absolutely positioned at `right-0` inside each field, always visible regardless of viewport

---