---

**PROMPT:**

---

Build a "Features" section for a fintech landing page called "Kova" using React 18, TypeScript, Tailwind CSS 3, Framer Motion, and Lucide React. No purple/indigo colors.

---

## PREREQUISITE: FONTS

Load these two web fonts in `index.html` inside `<head>`:

```html
<link href="https://db.onlinewebfonts.com/c/53077f9a3eee9c479d37d6af20394ded?family=Cooper+BT+W01+Light" rel="stylesheet">
<link href="https://db.onlinewebfonts.com/c/5ade3423145f3b9f7031574333ca0b73?family=Cooper+BT+W01+Medium" rel="stylesheet">
```

Add these CSS utility classes in `index.css` (outside Tailwind layers, after the `@tailwind` directives):

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

## PREREQUISITE: FADEUP ANIMATION COMPONENT

Create a reusable `FadeUp` component (`src/FadeUp.tsx`) using Framer Motion's `motion.div`.

**TypeScript interface:**
```ts
interface FadeUpProps {
  children: ReactNode;
  delay?: number;       // default 0
  className?: string;
  immediate?: boolean;  // default false
}
```

**Variants object:**
```ts
const variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};
```

**Shared transition:** `{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }`

**Two modes:**
- `immediate={true}`: uses `animate="visible"` (plays on mount)
- `immediate={false}` (default, used in THIS section): uses `whileInView="visible"` with `viewport={{ once: true, margin: '-60px' }}`

Both modes use `initial="hidden"`.

---

## COLOR PALETTE

| Token | Hex | Usage |
|---|---|---|
| Primary dark green | `#08150C` | Heading text, dark card backgrounds, button bg |
| Hover dark green | `#1a2e1f` | Button hover state |
| Warm cream | `#FDF5EB` | Section background |
| Light beige | `#EBE4DC` | Card 3 outer background |
| Inner card bg | `#F4F1EC` | Card 3 inner content area + donut base circle |
| Burnt orange | `#C46B2D` | Donut segment 1 |
| Olive green | `#7A8C3E` | Donut segment 2 |
| Sage green | `#A8B87A` | Donut segment 3 |
| Warm gray | `#B8AFA4` | Donut segment 4 |

Text colors: `text-white`, `text-white/80`, `text-stone-500`, `text-stone-700`, `text-stone-800`

---

## SECTION WRAPPER

```html
<section class="bg-[#FDF5EB] py-14 sm:py-20 px-5 sm:px-10 lg:px-20">
  <div class="max-w-7xl mx-auto">
    <!-- header row -->
    <!-- cards grid -->
  </div>
</section>
```

---

## HEADER ROW

Container: `flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 sm:mb-10`

### Heading (FadeUp delay=0)

```html
<h2 class="font-cooper-medium text-2xl sm:text-3xl md:text-4xl text-[#08150C] leading-snug">
  Designed to sharpen every decision
</h2>
```

Font sizes: `text-2xl` (24px) on mobile, `sm:text-3xl` (30px) at 640px+, `md:text-4xl` (36px) at 768px+. Uses the Cooper BT Medium font via the `.font-cooper-medium` utility class.

### Button (FadeUp delay=0.1)

```html
<button class="self-start sm:self-auto flex-shrink-0 flex items-center gap-2 bg-[#08150C] text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-[#1a2e1f] transition-colors">
  Watch Demo
  <Play size={13} className="fill-white" />
</button>
```

- `text-sm` = 14px
- `font-medium` = font-weight 500
- `rounded-xl` = 12px border radius (NOT rounded-full)
- `self-start` on mobile (left-aligned), `sm:self-auto` on desktop (right-aligned by the `justify-between` parent)
- Lucide `Play` icon at 13px, filled white, placed AFTER the text

---

## CARDS GRID

Container: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4`

- Mobile: 1 column
- sm (640px+): 2 columns
- lg (1024px+): 4 columns
- Gap: `gap-4` = 16px

All four cards share `rounded-2xl overflow-hidden aspect-[3/4]` (16px border radius, 3:4 portrait aspect ratio).

---

### CARD 1 — Smart Budgeting (FadeUp delay=0.05)

```html
<div class="relative rounded-2xl overflow-hidden bg-[#08150C] aspect-[3/4] flex flex-col justify-between">
  <img
    src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260517_061249_f20dfeda-1033-45ce-a3ee-070965599cbf.png&w=1280&q=85"
    alt="Smart Budgeting"
    class="absolute inset-0 w-full h-full object-cover"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-[#08150C]/80 via-[#08150C]/20 to-transparent"></div>
  <div class="relative z-10 p-4">
    <div class="inline-flex items-center gap-1.5 text-white text-sm font-medium px-2.5 py-1 rounded-full">
      <Sparkles size={16} class="text-white" />
      Smart Budgeting
    </div>
  </div>
  <div class="relative z-10 p-4">
    <p class="text-white/80 text-sm sm:text-base leading-relaxed">
      Let AI reshape how you plan your spending. Kova adapts to your...
    </p>
  </div>
</div>
```

- Fallback bg `bg-[#08150C]` shows while image loads
- Background image is absolutely positioned, covering the full card
- Gradient overlay: 3-stop, bottom-to-top: 80% opacity dark green at bottom, 20% in middle, transparent at top
- Top-left label: icon + text in a pill shape, white text at `text-sm` (14px)
- Bottom-left description: `text-white/80` (white at 80% opacity), `text-sm` (14px) on mobile, `sm:text-base` (16px) at 640px+

---

### CARD 2 — Bank-Grade Security (FadeUp delay=0.15)

Identical structure to Card 1, with these differences:

- Fallback bg: `bg-stone-700` (instead of `bg-[#08150C]`)
- Image src: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260517_061305_db631f5f-185f-4fda-a7a8-1dd7359ef2ea.png&w=1280&q=85`
- Image alt: `"Bank-Grade Security"`
- Icon: `<ShieldCheck size={16} className="text-white" />`
- Label text: **"Bank-Grade Security"**
- Description: **"Keep your money safe with end-to-end encryption, live fraud alerts, and two-factor auth..."**

---

### CARD 3 — Spend Insights (FadeUp delay=0.25)

This card is structurally DIFFERENT from the other three. It has NO background image, NO gradient overlay. It is a light-colored card with a donut chart visualization.

```html
<div class="relative rounded-2xl overflow-hidden aspect-[3/4] flex flex-col p-5" style="background-color: #EBE4DC">
```

**Top label:**
```html
<div class="inline-flex items-center gap-1.5 text-stone-700 text-sm font-medium px-2.5 py-1 rounded-full self-start mb-4">
  <PieChart size={16} />
  Spend Insights
</div>
```
- Text and icon are `text-stone-700` (NOT white like the other cards)
- `self-start` aligns the pill to the left
- `mb-4` = 16px bottom margin

**Inner content container:**
```html
<div class="flex flex-col items-center justify-center flex-1 gap-3 rounded-2xl p-4" style="background-color: #F4F1EC">
```
- Takes up remaining vertical space via `flex-1`
- Inner rounded container with lighter background `#F4F1EC`
- `gap-3` = 12px between children

**Title block** (inside inner container):
```html
<div class="text-center mb-1">
  <p class="text-sm sm:text-base font-semibold text-stone-800">Monthly Spend</p>
  <p class="text-xs sm:text-sm text-stone-500">1 Apr – 30 May 2026</p>
</div>
```
- "Monthly Spend": `text-sm` (14px) mobile, `sm:text-base` (16px), `font-semibold` (600), `text-stone-800`
- Date range: `text-xs` (12px) mobile, `sm:text-sm` (14px), `text-stone-500`

**Donut chart wrapper:**
```html
<div class="relative w-28 h-28 sm:w-36 sm:h-36">
```
- 112x112px on mobile, 144x144px at sm (640px+)

**SVG donut chart:**
```html
<svg viewBox="0 0 36 36" class="w-full h-full -rotate-90">
```
- `-rotate-90` rotates the entire SVG so arcs start from 12 o'clock instead of 3 o'clock
- All circles use `cx="18" cy="18" r="14" fill="none" strokeWidth="5"`
- Total circumference = 2 * pi * 14 = ~87.96

**Base circle (background ring):**
```html
<circle cx="18" cy="18" r="14" fill="none" stroke="#F4F1EC" strokeWidth="5" />
```

**Four colored segments (in drawing order, back to front):**

| # | Color | Hex | strokeDasharray | strokeDashoffset | Arc % |
|---|---|---|---|---|---|
| 1 | Burnt orange | `#C46B2D` | `26.4 61.56` | `0` | 30% |
| 2 | Olive green | `#7A8C3E` | `22 65.96` | `-26.4` | 25% |
| 3 | Sage green | `#A8B87A` | `17.6 70.36` | `-48.4` | 20% |
| 4 | Warm gray | `#B8AFA4` | `22 65.96` | `-66` | 25% |

Math explanation: each segment's `strokeDasharray` is `[arcLength] [circumference - arcLength]`. Each segment's `strokeDashoffset` is the negative sum of all previous arc lengths, shifting the start position clockwise.

**Center text overlay:**
```html
<div class="absolute inset-0 flex flex-col items-center justify-center">
  <span class="text-lg sm:text-xl font-bold text-[#08150C]">50%</span>
  <span class="text-xs sm:text-sm text-stone-500">of budget</span>
</div>
```
- "50%": `text-lg` (18px) mobile, `sm:text-xl` (20px), `font-bold` (700), dark green `#08150C`
- "of budget": `text-xs` (12px) mobile, `sm:text-sm` (14px), `text-stone-500`

---

### CARD 4 — Wealth Building (FadeUp delay=0.35)

Identical structure to Card 2 (and Card 1), with these differences:

- Fallback bg: `bg-stone-700`
- Image src: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260517_061316_50e651f8-02d0-4add-9ddb-7d81d15ac02e.png&w=1280&q=85`
- Image alt: `"Wealth Building"`
- Icon: `<TrendingUp size={16} className="text-white" />`
- Label text: **"Wealth Building"**
- Description: **"Grow your net worth with tools that help you set targets, monitor gains, and act..."**

---

## LUCIDE REACT ICONS USED

Import from `lucide-react`:
- `Play` (header button, size 13, fill-white)
- `Sparkles` (Card 1, size 16)
- `ShieldCheck` (Card 2, size 16)
- `PieChart` (Card 3, size 16)
- `TrendingUp` (Card 4, size 16)

---

## COMPLETE ANIMATION DELAY MAP

| Element | FadeUp delay | Mode |
|---|---|---|
| Section heading | `0` | scroll-triggered |
| Watch Demo button | `0.1` | scroll-triggered |
| Card 1 (Smart Budgeting) | `0.05` | scroll-triggered |
| Card 2 (Bank-Grade Security) | `0.15` | scroll-triggered |
| Card 3 (Spend Insights) | `0.25` | scroll-triggered |
| Card 4 (Wealth Building) | `0.35` | scroll-triggered |

All use `whileInView="visible"` with `viewport={{ once: true, margin: '-60px' }}`. Animation plays once when element scrolls into view (with a -60px inset margin trigger point).

---

## RESPONSIVE BREAKPOINT SUMMARY

| Breakpoint | Grid | Heading | Body text | Donut size | Padding |
|---|---|---|---|---|---|
| Default (mobile) | `grid-cols-1` | `text-2xl` (24px) | `text-sm` (14px) | 112x112px | `py-14 px-5` |
| sm (640px+) | `sm:grid-cols-2` | `sm:text-3xl` (30px) | `sm:text-base` (16px) | 144x144px | `sm:py-20 sm:px-10` |
| md (768px+) | (still 2-col) | `md:text-4xl` (36px) | (same) | (same) | (same) |
| lg (1024px+) | `lg:grid-cols-4` | (same) | (same) | (same) | `lg:px-20` |

---

## CRITICAL IMPLEMENTATION DETAILS

1. The section background `#FDF5EB` must match any adjacent sections for a seamless look -- no visible divider.
2. Cards 1, 2, and 4 share identical markup structure (image + gradient overlay + top label + bottom text). Only the image src, icon, label text, and description differ.
3. Card 3 is the only light-themed card -- it uses inline `style={{ backgroundColor: '#EBE4DC' }}` for the outer div and `style={{ backgroundColor: '#F4F1EC' }}` for the inner container (these are NOT Tailwind classes because they are custom hex values).
4. The `aspect-[3/4]` class on every card enforces a consistent 3-wide-by-4-tall portrait ratio across the grid.
5. All buttons use `rounded-xl` (12px), NOT `rounded-full`.
6. The gradient overlay on image cards is `bg-gradient-to-t from-[#08150C]/80 via-[#08150C]/20 to-transparent` -- this is a Tailwind gradient going from bottom (80% opaque dark green) through middle (20%) to top (fully transparent), ensuring bottom text remains readable over any image.
7. The donut SVG has `-rotate-90` on the `<svg>` element itself to rotate the coordinate system so segments begin at the top (12 o'clock) rather than the right (3 o'clock).