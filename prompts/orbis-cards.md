---
### Prerequisites

**Fonts** (loaded via Google Fonts in `index.html`):
- `Anton` (mapped to `font-grotesk` in Tailwind)
- `Condiment` (mapped to `font-condiment` in Tailwind)

**Tailwind custom colors** (in `tailwind.config.js`):
- `cream`: `#EFF4FF`
- `neon`: `#6FFF00`

**Global background color**: `#010828` (dark navy/space blue)

**Custom CSS class `liquid-glass`** (defined in `index.css`):
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

---

### Section Structure (line-by-line)

**Outer wrapper**: `<section>` with classes `relative py-16 sm:py-24 md:py-32` and inline style `backgroundColor: '#010828'`.

**Inner container**: `<div>` with `max-w-[1831px] mx-auto px-4 sm:px-6 md:px-8`.

---

### Header Row

A `flex flex-col lg:flex-row items-start lg:justify-between gap-6 lg:gap-0 mb-8 sm:mb-12` div containing:

**1. Title (left side)**:
- `<h2>` with `font-grotesk text-[32px] sm:text-[48px] md:text-[60px] font-normal uppercase leading-[1.05] sm:leading-[1] md:leading-[1]`
- Line 1: `Collection of` followed by `<br />`
- Line 2: Wrapped in `<span className="ml-12 sm:ml-24 md:ml-32 inline-block">` containing:
  - `<span className="font-condiment text-neon text-[36px] sm:text-[52px] md:text-[68px] font-normal normal-case">Space</span>` (the word "Space" in neon green cursive Condiment font)
  - followed by the text ` objects` (in Anton/grotesk uppercase)

**2. "SEE ALL CREATORS" button (right side)**:
- `<button className="group relative flex flex-col items-start">`
- Inner div: `font-grotesk font-normal uppercase leading-[1.1] flex items-start gap-3`
  - `<span className="text-[32px] sm:text-[48px] md:text-[60px] text-white">SEE</span>`
  - A `flex flex-col items-start leading-[0.9]` div with:
    - `<span className="text-[20px] sm:text-[28px] md:text-[36px] text-white">ALL</span>`
    - `<span className="text-[20px] sm:text-[28px] md:text-[36px] text-white">CREATORS</span>`
- Below text: `<div className="w-full h-[6px] sm:h-[8px] md:h-[10px] bg-neon mt-3 sm:mt-4" />` (neon green underline bar)

---

### Card Grid

`<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">`

Mapped over an array of 3 items, each with a `video` URL and `score` string:

**Card data**:
```js
[
  {
    video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4',
    score: '8.7/10'
  },
  {
    video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4',
    score: '9/10'
  },
  {
    video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4',
    score: '8.2/10'
  }
]
```

**Each card** (`flex flex-col gap-4 group`):

**Video container**:
- Outer: `liquid-glass rounded-[32px] p-[18px] hover:bg-white/10 transition-all duration-300`
- Inner: `relative rounded-[24px] overflow-hidden pb-[75%]` (4:3 aspect ratio via padding-bottom trick)
- `<video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">`
  - `<source src={item.video} type="video/mp4" />`

**Info bar below video**:
- `liquid-glass rounded-[20px] px-5 py-4 flex items-center justify-between`
- Left side (`flex flex-col`):
  - Label: `<span className="font-grotesk text-[14px] uppercase text-cream/70 mb-1">RARITY SCORE:</span>`
  - Value: `<span className="font-grotesk text-[20px] font-normal text-cream">{item.score}</span>`
- Right side: circular arrow button
  - `<button className="w-[48px] h-[48px] liquid-glass rounded-full flex items-center justify-center hover:scale-110 hover:bg-white/10 transition-all flex-shrink-0">`
  - SVG chevron right: `<svg className="w-[18px] h-[18px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>`

---

### Summary of Visual Design

- Dark space-navy background (`#010828`)
- Glassmorphism cards using the `liquid-glass` class (subtle white gradient border, blur backdrop, inner glow)
- Typography: Anton font (bold geometric sans-serif) for all headings, uppercase
- The word "Space" breaks style by using Condiment (cursive/script) in neon green (`#6FFF00`)
- Cream white text (`#EFF4FF`) throughout
- 3-column responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
- Each card has an autoplay looping muted video with 4:3 aspect ratio inside a glass container with 32px rounding and 18px padding, plus a glass info bar below showing rarity score and a circular chevron button
- Responsive font scaling from 32px to 60px for headings across breakpoints
- Max content width: 1831px, centered with horizontal padding of 16px/24px/32px at sm/md breakpoints