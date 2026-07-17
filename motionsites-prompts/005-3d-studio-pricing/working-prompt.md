Create a full-screen hero section with a looping video background and a pricing card overlay. Use React with Tailwind CSS and Lucide React icons. The font is "Geist" loaded from Google Fonts.

**Video Background:**
- Full-screen `<video>` element, autoplaying, looped, muted, playsInline
- Covers the entire viewport with `object-cover`, positioned `object-right` on mobile, `object-center` on md+
- Video URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_102608_5fa1187d-9ac6-44fb-82ab-54376200abc0.mp4`

**Layout:**
- Section is `relative min-h-screen w-full overflow-hidden`, uses `font-geist` (custom Tailwind font family mapped to 'Geist')
- Content sits at `z-10`, arranged as a flex column filling min-h-screen
- Top area has generous padding (`pt-10 sm:pt-16 md:pt-24 px-5 sm:px-8 md:px-16 lg:px-24`)
- A flex-1 spacer pushes the bottom card down
- Bottom area has padding `px-4 sm:px-8 md:px-16 lg:px-24 pb-8 sm:pb-12 md:pb-20`

**Heading (top-left):**
- Text: "Studio" on line 1, "rate" on line 2
- Size: `text-[clamp(2.5rem,12vw,10rem)]`
- Weight: `font-light`, line-height: `leading-[0.9]`, tracking: `tracking-[-0.03em]`, color: white

**Pricing Card (bottom):**
- Outer container: full-width, `border border-white/10 rounded-2xl bg-black/70 backdrop-blur-md`, padding `p-3 sm:p-4 md:p-5`, fixed height `h-[280px] sm:h-[310px] md:h-[340px]`, flex column
- Inside: a 3-column grid (`grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-stretch flex-1 min-h-0`)

**Column 1 - Toggle card:**
- `bg-[#11120F]/60 backdrop-blur-xl border border-white/10 rounded-xl p-5 sm:p-6`, flex column justify-between
- Heading: "Want cinematic fidelity?" - white, `text-base sm:text-lg font-medium mb-2`, left-aligned
- Description: "Activate photorealistic global illumination with sub-surface scattering and volumetric atmosphere depth." - `text-white/60 text-sm leading-relaxed`, left-aligned
- Bottom row: price "+$520" (`text-white text-lg font-light`) on left, custom toggle on right
- Toggle: `w-14 h-7 rounded-full`, active color `bg-[#B2D770]`, inactive `bg-white/20`, with a `w-5 h-5` black circle thumb that translates left/right. Uses React state.

**Column 2 - Price display:**
- `flex flex-col justify-between py-3 sm:py-4 md:py-5`
- Main price: "$3,180" at `text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-light text-white tracking-tight`
- Suffix: "/deliver" in `text-white/50 text-sm sm:text-base ml-1`
- Bottom row: "Rush-mode" (`text-white/50 text-sm`) left, "12-36 hours" (`text-white/80 text-sm font-medium`) right

**Column 3 - Features + CTA:**
- `flex flex-col justify-between py-3 sm:py-4 md:py-5`
- 4 feature items with `CheckCircle2` icon (from lucide-react) in `text-[#B2D770] w-4 h-4 sm:w-5 sm:h-5` and label in `text-white/70 text-sm`:
  1. "Boundless iterations"
  2. "Cinema 8K mastergrade"
  3. "Bespoke 3D materials"
  4. "Dedicated render engineer 24/7"
- CTA button: split into two segments with `gap-[3px]`, both `bg-[#B2D770] text-black rounded-lg py-2.5`
  - Left: "Start a brief" with `text-sm font-medium px-4 sm:px-5`
  - Right: `ArrowUpRight` icon (lucide-react), `w-10` square-ish

**Accent Color:** `#B2D770` (lime green) used for toggle active state, checkmark icons, and CTA button.

**Global CSS (index.css):**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  font-family: 'Geist', sans-serif;
  background: #000;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

**Tailwind Config:**
- Extends `fontFamily` with `geist: ['Geist', 'sans-serif']`

**Google Font (in index.html head):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
```