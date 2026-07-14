**Prompt:**

Create a "Projects" section using React, Tailwind CSS, and **framer-motion** (`useScroll`, `useTransform`, `motion`). The site uses **Google Font "Kanit"** (weights 300-900) and a dark background `#0C0C0C`. This section overlaps the previous white section slightly with a negative top margin and rounded top corners.

---

## Section Container

- Background: `#0C0C0C`
- Padding: `px-5 sm:px-8 md:px-10`
- Top border radius: `rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]`
- Negative margin to overlap section above: `-mt-10 sm:-mt-12 md:-mt-14`
- `position: relative`, `z-index: 10`
- Uses framer-motion `useScroll` on the entire section ref with `offset: ['start start', 'end end']` to drive the stacking card animation

## Section Heading

- Wrapped in a `flex flex-col items-center py-20 sm:py-24 md:py-32`
- Text: `"Project"`
- Uses CSS class `hero-heading` which applies:
  ```css
  .hero-heading {
    background: linear-gradient(180deg, #646973 0%, #BBCCD7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  ```
- `font-black uppercase leading-none tracking-tight text-center w-full`
- Font size: `clamp(3rem, 12vw, 160px)`
- Fade-in animation: `delay: 0, y: 40`

---

## 3 Project Cards (sticky stacking card effect)

Each card is a **sticky card** that stacks on top of the previous card as you scroll, with a subtle scale-down effect.

### Project Data:

**Project 01 -- "Nextlevel Studio" (Client)**
- col1 images (left column, 2 images stacked vertically):
  ```
  https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85
  https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85
  ```
- col2 image (right column, single tall image):
  ```
  https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85
  ```

**Project 02 -- "Aura Brand Identity" (Personal)**
- col1 images:
  ```
  https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85
  https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85
  ```
- col2 image:
  ```
  https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85
  ```

**Project 03 -- "Solaris Digital" (Client)**
- col1 images:
  ```
  https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85
  https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85
  ```
- col2 image:
  ```
  https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85
  ```

---

## Sticky Stacking Card Animation (framer-motion)

Each card's outer wrapper:
- `height: 85vh`, `display: flex, align-items: start, justify-content: center`
- `position: sticky`, `top: 24px` (md: `top: 32px`)

The inner `motion.div` card:
- `position: absolute`, `width: 100%`, `max-width: 1760px`
- `transform-origin: top`
- Each card is offset vertically: `top: ${index * 28}px` so they peek behind each other
- **Scale animation**: As the user scrolls through the section, earlier cards scale down slightly while later cards remain at scale 1
  - `rangeStart = index / totalCards`
  - `rangeEnd = 1`
  - `targetScale = 1 - (totalCards - 1 - index) * 0.03`
  - `scale = useTransform(progress, [rangeStart, rangeEnd], [1, targetScale])`
  - Example: Card 0 scales from 1 to 0.94, Card 1 scales from 1 to 0.97, Card 2 stays at 1

---

## Project Card Inner Layout

- Background: `#0C0C0C`
- Border: `2px solid #D7E2EA`
- Border radius: `rounded-[40px] sm:rounded-[50px] md:rounded-[60px]`
- Padding: `p-4 sm:p-6 md:p-8`
- `flex flex-col gap-6 sm:gap-8 md:gap-10`

### Top row (header):
- `flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-4`
- **Left side** (`flex items-center gap-6 sm:gap-8 md:gap-10`):
  - **Number**: `text-[#D7E2EA] font-black uppercase leading-none`, size `clamp(3rem, 10vw, 140px)`
  - **Category + Name** (flex column, `gap-2 sm:gap-4 md:gap-6`):
    - Category: `text-[#D7E2EA] font-medium uppercase`, size `clamp(1rem, 2.2vw, 2.1rem)`
    - Name: `text-[#D7E2EA] font-light tracking-wide`, size `clamp(0.9rem, 2vw, 2rem)`
- **Right side**: "Live Project" button (see below)

### Image grid (bottom):
- `flex flex-col md:flex-row gap-4 md:gap-5 w-full`
- **Left column** (`flex flex-col gap-4 md:gap-5 w-full md:w-[40%]`):
  - Image 1: `w-full object-cover`, border-radius `rounded-[40px] sm:rounded-[50px] md:rounded-[60px]`, height `clamp(130px, 16vw, 230px)`
  - Image 2: `w-full object-cover`, border-radius `rounded-[30px] sm:rounded-[40px] md:rounded-[60px]`, height `clamp(160px, 22vw, 340px)`
- **Right column**: Single image, `w-full md:w-[60%] object-cover`, border-radius `rounded-[30px] sm:rounded-[40px] md:rounded-[60px]`, `self-stretch` (fills the height of both left images)

---

## "Live Project" Button

- Pill-shaped (`rounded-full`)
- Border: `2px solid #D7E2EA`
- No background (transparent)
- Padding: `px-8 py-3 sm:px-10 sm:py-3.5`
- Text: `"Live Project"`, `text-[#D7E2EA] font-medium uppercase tracking-widest`, size `text-sm sm:text-base`
- Hover: `bg-[#D7E2EA]/10`, Active: `bg-[#D7E2EA]/20`, transition 200ms
- If href provided, renders as `<a>` with `target="_blank" rel="noopener noreferrer"`
- All cards link to `#`

---

## FadeIn Component (reusable, framer-motion)

- Props: `delay`, `duration` (default 0.7), `x` (default 0), `y` (default 30), `className`, `style`, `as` (HTML element tag, default `div`)
- Uses `motion.create()` to make any HTML element animatable
- Variants: `hidden` = `{ opacity: 0, x, y }`, `visible` = `{ opacity: 1, x: 0, y: 0 }`
- Easing: `[0.25, 0.1, 0.25, 1]`
- Viewport trigger: `{ once: true, margin: "50px", amount: 0 }`

---

**Font (loaded in HTML head):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
```

CSS base: `font-family: 'Kanit', sans-serif` on html/body.

---