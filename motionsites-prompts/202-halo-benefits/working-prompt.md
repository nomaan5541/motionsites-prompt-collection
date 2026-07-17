Build an "Info" section for a fintech stablecoin landing page using **React + TypeScript + Tailwind CSS** with **lucide-react** for icons (use `ArrowRight`). Fully mobile responsive.

### Font Setup

Load **"TT Norms Pro"** via a stylesheet link in `index.html`:

```html
<link href="https://db.onlinewebfonts.com/c/49bf5d043a27b890a040cf393277e2b2?family=TT+Norms+Pro+Regular" rel="stylesheet">
```

Apply globally in `index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    font-family: 'TT Norms Pro Regular', ui-sans-serif, system-ui, sans-serif;
  }
  body {
    font-family: 'TT Norms Pro Regular', ui-sans-serif, system-ui, sans-serif;
  }
  * {
    font-family: inherit;
  }
}
```

---

### Section Component: `InfoSection`

**Outer wrapper:** `<section>` with classes `bg-[#F5F5F5] px-6 py-24`.

**Inner container:** `<div>` with classes `max-w-[88rem] mx-auto`.

The section has **two rows** stacked vertically.

---

#### ROW 1: Heading + Description (two-column grid)

Wrapper `<div>` with classes `grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start`.

**Left column** (`<div>`, no extra classes):

1. **Heading:**
   - Element: `<h2>`
   - Text: **"Meet USD Halo."**
   - Classes: `text-black text-4xl md:text-5xl font-medium leading-tight mb-8`
   - Inline style: `{ letterSpacing: '-0.03em' }`

2. **CTA pill button** (black capsule, text-left icon-right pattern):
   - Element: `<button>`
   - Classes: `inline-flex items-center gap-3 bg-black text-white text-base font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200`
   - Contains:
     - Plain text: **"Discover it"**
     - Then a `<span>` with classes `bg-white rounded-full p-2 flex items-center justify-center`, containing `<ArrowRight className="w-5 h-5 text-black" />`

**Right column** (`<div>` with classes `flex items-center`):

1. **Description paragraph:**
   - Element: `<p>`
   - Text: **"USD Halo is a reward-earning dollar coin that lets your savings grow while remaining tied to the U.S. dollar."**
   - Classes: `text-black/70 text-2xl md:text-3xl font-normal leading-relaxed`

---

#### ROW 2: Four-column card grid

Wrapper `<div>` with classes `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4`.

Contains 3 cards (the first spans 2 columns):

**Card 1 -- Image background card (spans 2 columns):**
- Wrapper `<div>` with classes `lg:col-span-2 rounded-2xl overflow-hidden relative min-h-80`
- Inline style with background image:
  ```tsx
  style={{
    backgroundImage: `url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260423_164207_f243351d-ed59-48ec-83a0-a5e996bdbe3c.png&w=1280&q=85')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
  ```
- Inner content `<div>` with classes `relative z-10 flex flex-col justify-between h-full p-7 min-h-80`
  - **Title:** `<p>` with text **"Savings that bloom"**, classes `text-black text-2xl font-medium leading-snug`, inline style `{ letterSpacing: '-0.02em' }`
  - **Description:** `<p>` with text **"Gain steady returns as your dollar tokens are routed into top-performing DeFi strategies."**, classes `text-black/70 text-base font-normal leading-relaxed max-w-xs`

**Card 2 -- Dark solid card:**
- Wrapper `<div>` with classes `rounded-2xl p-7 flex flex-col justify-between min-h-80`
- Inline style: `{ backgroundColor: '#2B2644' }`
- **Title:** `<p>` with text **"Always fluid,\<br /\>always pegged."**, classes `text-white text-2xl font-medium leading-snug`, inline style `{ letterSpacing: '-0.02em' }`
- **Description:** `<p>` with text **"Keep fully dollar-anchored with on-demand access to funds -- no lockups or waits."**, classes `text-white/60 text-base font-normal leading-relaxed`

**Card 3 -- Dark solid card:**
- Wrapper `<div>` with classes `rounded-2xl p-7 flex flex-col justify-between min-h-80`
- Inline style: `{ backgroundColor: '#2B2644' }`
- **Title:** `<p>` with text **"Fully\<br /\>automated"**, classes `text-white text-2xl font-medium leading-snug`, inline style `{ letterSpacing: '-0.02em' }`
- **Description:** `<p>` with text **"Skip the task of tuning positions yourself. USD Halo runs in the background for you."**, classes `text-white/60 text-base font-normal leading-relaxed`

---

### Key Design Specifications -- InfoSection

- **Background:** `#F5F5F5` seamless with rest of page.
- **Row 1 layout:** Two equal columns, `gap-12`, with `mb-16` separating it from the card grid below. Left column has heading + button stacked. Right column vertically centers a large descriptive paragraph.
- **Pill button:** Black capsule with white text on left, white circle with black arrow icon on right. Asymmetric padding (`pl-8 pr-2 py-2`) creates the capsule-with-embedded-circle look.
- **Card grid:** 4-column on `lg`, 2-column on `sm`, single column on mobile. `gap-4` between cards.
- **Card 1** spans 2 columns on `lg`. Uses a full-bleed background image with no overlay/scrim -- text sits directly on the image. Content is distributed top-to-bottom using `justify-between`.
- **Cards 2 & 3** use a dark navy/purple background (`#2B2644`) with white text. Titles use `<br />` for line breaks. Content distributed top-to-bottom via `justify-between`.
- **All cards:** `rounded-2xl` (16px), `min-h-80` (320px), `p-7` internal padding.
- **Typography:** Card titles are `text-2xl font-medium` with `-0.02em` letter-spacing. Card descriptions are `text-base font-normal`.

---

### Complete JSX -- InfoSection

```tsx
import { ArrowRight } from 'lucide-react';

function InfoSection() {
  return (
    <section className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
          <div>
            <h2 className="text-black text-4xl md:text-5xl font-medium leading-tight mb-8" style={{ letterSpacing: '-0.03em' }}>
              Meet USD Halo.
            </h2>
            <button className="inline-flex items-center gap-3 bg-black text-white text-base font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200">
              Discover it
              <span className="bg-white rounded-full p-2 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-black" />
              </span>
            </button>
          </div>
          <div className="flex items-center">
            <p className="text-black/70 text-2xl md:text-3xl font-normal leading-relaxed">
              USD Halo is a reward-earning dollar coin that lets your savings grow while remaining tied to the U.S. dollar.
            </p>
          </div>
        </div>

        {/* Row 2 -- 4-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 -- spans 2 cols, image bg */}
          <div
            className="lg:col-span-2 rounded-2xl overflow-hidden relative min-h-80"
            style={{
              backgroundImage: `url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260423_164207_f243351d-ed59-48ec-83a0-a5e996bdbe3c.png&w=1280&q=85')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="relative z-10 flex flex-col justify-between h-full p-7 min-h-80">
              <p className="text-black text-2xl font-medium leading-snug" style={{ letterSpacing: '-0.02em' }}>
                Savings that bloom
              </p>
              <p className="text-black/70 text-base font-normal leading-relaxed max-w-xs">
                Gain steady returns as your dollar tokens are routed into top-performing DeFi strategies.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="rounded-2xl p-7 flex flex-col justify-between min-h-80"
            style={{ backgroundColor: '#2B2644' }}
          >
            <p className="text-white text-2xl font-medium leading-snug" style={{ letterSpacing: '-0.02em' }}>
              Always fluid,<br />always pegged.
            </p>
            <p className="text-white/60 text-base font-normal leading-relaxed">
              Keep fully dollar-anchored with on-demand access to funds -- no lockups or waits.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="rounded-2xl p-7 flex flex-col justify-between min-h-80"
            style={{ backgroundColor: '#2B2644' }}
          >
            <p className="text-white text-2xl font-medium leading-snug" style={{ letterSpacing: '-0.02em' }}>
              Fully<br />automated
            </p>
            <p className="text-white/60 text-base font-normal leading-relaxed">
              Skip the task of tuning positions yourself. USD Halo runs in the background for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

---

## Prompt 2: BackedBySection (Marquee)

Build a "Backed By" marquee section for a fintech stablecoin landing page using **React + TypeScript + Tailwind CSS**. No icon library needed for this section.

### Font Setup

Same as above -- load **"TT Norms Pro"** via the stylesheet link in `index.html`:

```html
<link href="https://db.onlinewebfonts.com/c/49bf5d043a27b890a040cf393277e2b2?family=TT+Norms+Pro+Regular" rel="stylesheet">
```

---

### Section Component: `BackedBySection`

**Outer wrapper:** `<section>` with classes `bg-[#F5F5F5] px-6` (no vertical padding -- this section sits flush between InfoSection and UseCasesSection).

**Inner container:** `<div>` with classes `max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center`.

---

#### LEFT COLUMN (1 of 4 columns)

Wrapper `<div>` with classes `md:col-span-1`.

Contains:
- `<p>` with text **"Funded by premier partners\<br /\>and forward-thinking leaders."**
- Classes: `text-black/70 text-base leading-relaxed`

---

#### RIGHT COLUMN -- Marquee (3 of 4 columns)

Wrapper `<div>` with classes `md:col-span-3 overflow-hidden`.

**CSS animation** (injected via inline `<style>` tag inside the component):

```css
@keyframes backers-marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.backers-track {
  display: flex;
  width: max-content;
  animation: backers-marquee 30s linear infinite;
}
```

**Marquee track:** `<div>` with class `backers-track`.

Contains the `BACKER_BRANDS` array duplicated (spread twice: `[...BACKER_BRANDS, ...BACKER_BRANDS]`) and mapped to `<span>` elements.

Each `<span>`:
- Classes: `mx-10 shrink-0 text-black/50 whitespace-nowrap`
- Inline `style` from the brand object (unique font, weight, spacing per brand)
- Key: array index `i`

---

### Brand Data Array

Each brand has a unique font family, weight, letter-spacing, and font-size to simulate distinct brand wordmarks using only text styling (no logos/images):

```tsx
const BACKER_BRANDS: { name: string; style: React.CSSProperties }[] = [
  { name: "Fundamental Labs", style: { fontFamily: "'Times New Roman', serif", fontWeight: 400, letterSpacing: "0.02em", fontSize: "14px" } },
  { name: "KUCOIN", style: { fontFamily: "'Arial Black', sans-serif", fontWeight: 900, letterSpacing: "0.08em", fontSize: "16px" } },
  { name: "NGC", style: { fontFamily: "'Impact', sans-serif", fontWeight: 700, letterSpacing: "0.05em", fontSize: "18px" } },
  { name: "NxGen", style: { fontFamily: "'Georgia', serif", fontWeight: 600, letterSpacing: "-0.02em", fontSize: "17px" } },
  { name: "Matter Labs", style: { fontFamily: "'Helvetica', sans-serif", fontWeight: 700, letterSpacing: "-0.01em", fontSize: "15px" } },
  { name: "DEXTools", style: { fontFamily: "'Verdana', sans-serif", fontWeight: 700, letterSpacing: "0.06em", fontSize: "14px", textTransform: "uppercase" as const } },
  { name: "NGRAVE", style: { fontFamily: "'Courier New', monospace", fontWeight: 700, letterSpacing: "0.18em", fontSize: "14px" } },
  { name: "Polychain", style: { fontFamily: "'Palatino', serif", fontWeight: 500, letterSpacing: "0.03em", fontSize: "15px" } },
];
```

---

### Key Design Specifications -- BackedBySection

- **No vertical padding** on the section (`px-6` only) -- it sits between two `py-24` sections, acting as a visual divider/strip.
- **Layout:** 4-column grid on `md`. Left column takes 1/4 width, marquee takes 3/4. Stacks on mobile.
- **Marquee technique:** CSS-only infinite scroll. The array is duplicated so the second copy seamlessly replaces the first as it scrolls left. `width: max-content` ensures the track is as wide as its content. `-50%` translation moves exactly one copy's width.
- **Animation speed:** `30s` -- slow, ambient scrolling.
- **Brand styling:** Each brand name uses a different system font, weight, and letter-spacing to create visual variety mimicking actual brand wordmarks without needing logo images. Colors are all `text-black/50` (50% opacity black).
- **Spacing between brands:** `mx-10` (80px total gap between adjacent names).

---

### Complete JSX -- BackedBySection

```tsx
const BACKER_BRANDS: { name: string; style: React.CSSProperties }[] = [
  { name: "Fundamental Labs", style: { fontFamily: "'Times New Roman', serif", fontWeight: 400, letterSpacing: "0.02em", fontSize: "14px" } },
  { name: "KUCOIN", style: { fontFamily: "'Arial Black', sans-serif", fontWeight: 900, letterSpacing: "0.08em", fontSize: "16px" } },
  { name: "NGC", style: { fontFamily: "'Impact', sans-serif", fontWeight: 700, letterSpacing: "0.05em", fontSize: "18px" } },
  { name: "NxGen", style: { fontFamily: "'Georgia', serif", fontWeight: 600, letterSpacing: "-0.02em", fontSize: "17px" } },
  { name: "Matter Labs", style: { fontFamily: "'Helvetica', sans-serif", fontWeight: 700, letterSpacing: "-0.01em", fontSize: "15px" } },
  { name: "DEXTools", style: { fontFamily: "'Verdana', sans-serif", fontWeight: 700, letterSpacing: "0.06em", fontSize: "14px", textTransform: "uppercase" as const } },
  { name: "NGRAVE", style: { fontFamily: "'Courier New', monospace", fontWeight: 700, letterSpacing: "0.18em", fontSize: "14px" } },
  { name: "Polychain", style: { fontFamily: "'Palatino', serif", fontWeight: 500, letterSpacing: "0.03em", fontSize: "15px" } },
];

function BackedBySection() {
  return (
    <section className="bg-[#F5F5F5] px-6">
      <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
        <div className="md:col-span-1">
          <p className="text-black/70 text-base leading-relaxed">
            Funded by premier partners<br />and forward-thinking leaders.
          </p>
        </div>
        <div className="md:col-span-3 overflow-hidden">
          <style>{`
            @keyframes backers-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .backers-track {
              display: flex;
              width: max-content;
              animation: backers-marquee 30s linear infinite;
            }
          `}</style>
          <div className="backers-track">
            {[...BACKER_BRANDS, ...BACKER_BRANDS].map((brand, i) => (
              <span
                key={i}
                className="mx-10 shrink-0 text-black/50 whitespace-nowrap"
                style={brand.style}
              >
                {brand.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```
