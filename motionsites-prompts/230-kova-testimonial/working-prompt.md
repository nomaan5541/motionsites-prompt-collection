---

Build a Testimonial section for a fintech app called "Kova" using React + Tailwind CSS 3 + Framer Motion. Use TypeScript. Do NOT use purple/indigo colors anywhere.

---

## FONTS (prerequisite)

These two web fonts must be loaded in `index.html`:

```html
<link href="https://db.onlinewebfonts.com/c/53077f9a3eee9c479d37d6af20394ded?family=Cooper+BT+W01+Light" rel="stylesheet">
<link href="https://db.onlinewebfonts.com/c/5ade3423145f3b9f7031574333ca0b73?family=Cooper+BT+W01+Medium" rel="stylesheet">
```

CSS utility classes:

```css
.font-cooper {
  font-family: 'Cooper BT W01 Light', 'Georgia', serif;
}
.font-cooper-medium {
  font-family: 'Cooper BT W01 Medium', 'Cooper BT W01 Light', 'Georgia', serif;
  font-weight: 500;
}
```

---

## FADEUP ANIMATION COMPONENT (prerequisite)

This section uses a `<FadeUp>` component with scroll-triggered animation (NOT immediate). Each element animates independently with staggered delays.

**Props:** `children`, `delay` (number, default 0), `className` (string, optional), `immediate` (boolean, default false)

**Variants:**
- `hidden`: `{ opacity: 0, y: 24, filter: 'blur(8px)' }`
- `visible`: `{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] } }`

**Behavior for this section:** `initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}` (scroll-triggered, fires once when element enters viewport minus 60px margin).

---

## COLOR PALETTE

- Primary dark green: `#08150C`
- Hover dark green: `#1a2e1f`
- Warm cream background: `#FDF5EB`
- Text: Tailwind `stone-500`, `stone-700`, `stone-800`

---

## SECTION STRUCTURE

`<section>` element with class: `bg-[#FDF5EB] py-14 sm:py-20 px-5 sm:px-10 lg:px-20`

Inner container: `max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 md:gap-16 items-center`

This creates a two-column layout on desktop (left column 60%, right column 40%) that stacks to single column on mobile.

---

## LEFT COLUMN — Text Content

Five elements, each wrapped in its own `<FadeUp>` with staggered delays:

### 1. Section Heading (FadeUp delay=0)

`<h2>` with class: `font-cooper-medium text-2xl sm:text-3xl text-[#08150C] leading-snug mb-6 sm:mb-8`

Text: **"Trusted by ambitious, fast-moving teams"**

---

### 2. Company Badge (FadeUp delay=0.1)

Container: `flex items-center gap-2 mb-5 sm:mb-6`

- Square icon: `<div>` with class `w-7 h-7 rounded-md bg-[#08150C] flex items-center justify-center text-white text-xs font-bold` — contains the letter **"A"**
- Company name: `<span>` with class `text-sm font-semibold text-stone-800` — text **"Arcvex"**

---

### 3. Testimonial Quote (FadeUp delay=0.2)

`<blockquote>` with class: `font-cooper text-stone-700 text-lg sm:text-xl md:text-2xl leading-relaxed mb-5 sm:mb-6`

Text (including opening and closing quotation marks): **"With Kova, I have full visibility into our team's spending in real time. It feels like having a sharp financial advisor available at every hour, helping us stay on budget and make wiser calls."**

---

### 4. Attribution (FadeUp delay=0.3)

Container: `<div>` with class `mb-6 sm:mb-8`

- Name: `<p>` with class `text-sm font-semibold text-[#08150C]` — text **"Maya Reeves"**
- Title: `<p>` with class `text-xs text-stone-500` — text **"Director, Arcvex"**

---

### 5. CTA Button (FadeUp delay=0.4)

`<button>` with class: `flex items-center gap-2 bg-[#08150C] text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-[#1a2e1f] transition-colors`

Contents:
- Text: **"All Stories"**
- Custom arrow SVG icon (inline, NOT a Lucide icon):

```html
<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
```

---

## RIGHT COLUMN — Video

Wrapped in `<FadeUp delay={0.15} className="flex justify-center md:justify-end">`.

Inner container: `<div>` with class `w-full max-w-xs sm:max-w-sm`

Contains a `<video>` element:
- **src:** `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260517_074029_c7a854bd-2d6e-4b62-96b3-ae8c16311e44.mp4`
- Attributes: `autoPlay`, `loop`, `muted`, `playsInline`
- Class: `w-full rounded-2xl object-cover aspect-square`

The video plays automatically, loops infinitely, has no audio, and is cropped to a square aspect ratio with rounded corners (16px radius).

---

## RESPONSIVE BEHAVIOR

- **Mobile (default):** Single column stack. Left text content appears first, video appears below. Heading is `text-2xl`. Quote is `text-lg`. Spacing uses smaller values (`py-14`, `mb-5`, `gap-10`).
- **sm (640px+):** Heading scales to `text-3xl`. Quote scales to `text-xl`. Spacing increases (`py-20`, `mb-6`, `mb-8`). Video container expands to `max-w-sm`.
- **md (768px+):** Switches to two-column grid `grid-cols-[3fr_2fr]` with `gap-16`. Quote scales to `text-2xl`. Video aligns to the right (`md:justify-end`).
- **lg (1024px+):** Horizontal padding increases to `px-20`.

---

## KEY IMPLEMENTATION NOTES

- The section background is the same warm cream `#FDF5EB` as the Features section below it, creating a seamless visual flow.
- The grid uses fractional columns `[3fr_2fr]` (not equal halves) to give the text content more horizontal space than the video.
- The video is `aspect-square` — it crops the video to a perfect square regardless of the source video's native aspect ratio.
- The FadeUp animations are scroll-triggered (NOT immediate like the Hero section), so they fire as the user scrolls this section into view.
- The left column elements animate in sequence with 0.1s delay increments (0, 0.1, 0.2, 0.3, 0.4).
- The right column video animates at delay=0.15, which means it starts between the heading (0) and quote (0.2) animations on the left — creating a natural cross-column stagger.
- The button uses `rounded-xl` (12px radius), NOT `rounded-full`.
- The arrow icon is a hand-drawn SVG, not a Lucide icon. It has a horizontal line from x=2 to x=12, and a chevron from (8,3) to (12,7) to (8,11).