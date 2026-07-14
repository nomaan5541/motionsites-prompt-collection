---

# Prompt: Recreate the "Stay in the Collection" Newsletter Section

Build a single React component named `StaySection` using React + Vite + Tailwind CSS + Framer Motion. This is a full-viewport newsletter section with a background video and blur-up scroll-in animations.

## Dependencies

- `react` + `react-dom`
- `framer-motion`
- `tailwindcss`

## Fonts

Load via Google Fonts in `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@300;400;500;600&display=swap" rel="stylesheet" />
```

Tailwind `fontFamily` config:

```js
fontFamily: {
  serif: ['"Instrument Serif"', 'serif'],
  sans: ['Manrope', 'sans-serif'],
}
```

## Animation Variant (shared)

A reusable `blurUp` object that fades, lifts, and unblurs as it enters the viewport — fired once, when 30% of the element is visible:

```ts
const blurUp = {
  initial: { opacity: 0, y: 40, filter: 'blur(20px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 1, ease: 'easeOut' },
};
```

## Section Structure

A `<section>` with:
- `position: relative`
- `min-height: 100vh`
- `background-color: #ffffff` (Tailwind `bg-white`)
- `overflow: hidden`

### Layer 1 — Background Video (no overlay on top)

A `<video>` element absolutely positioned and pinned to the bottom of the section:

- Classes: `absolute inset-x-0 bottom-0 w-full object-cover object-bottom pointer-events-none`
- Attributes: `autoPlay`, `loop`, `muted`, `playsInline`
- Source (use exactly this CloudFront URL):
  ```
  https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260603_202301_db51e299-b2f4-4cea-80de-8a6465b7532a.mp4
  ```
- `type="video/mp4"`
- No overlay, no tint, no gradient over the video.

### Layer 2 — Content Container

A `<div>` sibling to the video, with:

- `position: relative` (so it sits above the video without a z-index)
- `max-width: 1480px`, `margin: 0 auto`
- Horizontal padding: `px-8 md:px-16`
- Vertical padding: `pt-20 md:pt-24 pb-20 md:pb-24`
- `min-height: 100vh`
- Flex column with `gap: 32px`

### Block A — Heading (Framer Motion `motion.div` using `blurUp`)

Two stacked lines:

1. Line 1 — `<div>`:
   - Class: `font-serif leading-[0.95]`
   - Inline style: `fontSize: 'clamp(60px, 11vw, 160px)'`
   - Content: `Stay <span class="italic">in</span>`

2. Line 2 — `<div>`:
   - Class: `font-sans font-normal leading-[0.95]`
   - Inline style: `fontSize: 64, letterSpacing: '-0.02em'`
   - Content: `the collection`

### Block B — Newsletter (Framer Motion `motion.div` using `blurUp` with `delay: 0.2`)

- Class: `max-w-md`
- Override transition to `{ duration: 1, ease: 'easeOut', delay: 0.2 }`

Contains:

1. Paragraph:
   - Class: `font-sans mb-6`
   - Inline style: `fontSize: 15, lineHeight: 1.55, color: 'rgba(0,0,0,0.78)'`
   - Text: `Editions and invitations from the Bentley fragrance studio, sent twice a season.`

2. Form:
   - Class: `flex items-center border-b border-black/40 pb-2 gap-3`
   - `onSubmit` calls `e.preventDefault()`
   - Input:
     - `type="email"`
     - `placeholder="your@email.com"`
     - Class: `bg-transparent font-sans text-[15px] flex-1 outline-none placeholder:text-black/40`
   - Button:
     - `type="submit"`
     - Class: `font-sans text-[11px] font-medium uppercase text-black whitespace-nowrap cursor-pointer`
     - Inline style: `letterSpacing: '0.25em'`
     - Text: `Subscribe →` (the arrow is the literal Unicode `→`)

## Full Component Code

```tsx
import { motion } from 'framer-motion';

const blurUp = {
  initial: { opacity: 0, y: 40, filter: 'blur(20px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 1, ease: 'easeOut' },
};

export default function StaySection() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      <video
        className="absolute inset-x-0 bottom-0 w-full object-cover object-bottom pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260603_202301_db51e299-b2f4-4cea-80de-8a6465b7532a.mp4"
          type="video/mp4"
        />
      </video>

      <div className="relative max-w-[1480px] mx-auto px-8 md:px-16 pt-20 md:pt-24 pb-20 md:pb-24 min-h-screen flex flex-col gap-[32px]">
        <motion.div {...blurUp}>
          <div className="font-serif leading-[0.95]" style={{ fontSize: 'clamp(60px, 11vw, 160px)' }}>
            Stay <span className="italic">in</span>
          </div>
          <div
            className="font-sans font-normal leading-[0.95]"
            style={{ fontSize: 64, letterSpacing: '-0.02em' }}
          >
            the collection
          </div>
        </motion.div>

        <motion.div
          {...blurUp}
          transition={{ ...blurUp.transition, delay: 0.2 }}
          className="max-w-md"
        >
          <p
            className="font-sans mb-6"
            style={{ fontSize: 15, lineHeight: 1.55, color: 'rgba(0,0,0,0.78)' }}
          >
            Editions and invitations from the Bentley fragrance studio, sent twice a season.
          </p>
          <form
            className="flex items-center border-b border-black/40 pb-2 gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-transparent font-sans text-[15px] flex-1 outline-none placeholder:text-black/40"
            />
            <button
              type="submit"
              className="font-sans text-[11px] font-medium uppercase text-black whitespace-nowrap cursor-pointer"
              style={{ letterSpacing: '0.25em' }}
            >
              Subscribe →
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
```

## Color Reference

- Section background: `#ffffff`
- Primary text: `#000000`
- Body paragraph: `rgba(0,0,0,0.78)`
- Form divider: `border-black/40`
- Placeholder: `text-black/40`

## Behavioral Notes

- The video sits behind the content with no overlay, tint, or gradient.
- Heading and newsletter both fade + rise + unblur in sequence (200 ms apart), and only animate the first time the section scrolls into view.
- The form's submit handler is a no-op preventDefault (no persistence) — wire it up to your own backend if needed.