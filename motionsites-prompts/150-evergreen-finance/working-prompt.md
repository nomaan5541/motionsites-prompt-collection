Build a "Kova" fintech landing page in React + Vite + Tailwind CSS + Framer Motion + Lucide React. The page has 3 sections: a full-screen Hero with a boomerang video background, a Testimonial section, and a Features section. Use the exact specifications below. Do NOT use purple/indigo colors anywhere.

---

## FONTS

Load these two web fonts in `index.html` via `<link>` tags:
- `https://db.onlinewebfonts.com/c/53077f9a3eee9c479d37d6af20394ded?family=Cooper+BT+W01+Light`
- `https://db.onlinewebfonts.com/c/5ade3423145f3b9f7031574333ca0b73?family=Cooper+BT+W01+Medium`

Define two utility classes in your CSS:
- `.font-cooper` — `font-family: 'Cooper BT W01 Light', 'Georgia', serif;`
- `.font-cooper-medium` — `font-family: 'Cooper BT W01 Medium', 'Cooper BT W01 Light', 'Georgia', serif; font-weight: 500;`

---

## COLOR PALETTE

- Primary dark green: `#08150C`
- Hover dark green: `#1a2e1f`
- Warm cream background: `#FDF5EB`
- Light beige card: `#EBE4DC`
- Inner card beige: `#F4F1EC`
- Donut chart colors: `#C46B2D`, `#7A8C3E`, `#A8B87A`, `#B8AFA4`
- Body/text: stone-600, stone-700, stone-800 (Tailwind)
- Accent greens: emerald-400, emerald-500 (Tailwind)

---

## ANIMATIONS (FadeUp Component)

Create a reusable `<FadeUp>` component using Framer Motion with two modes:
- **`immediate` (prop)**: Animates on mount using `animate="visible"` — used for Hero elements.
- **Default (scroll-triggered)**: Uses `whileInView="visible"` with `viewport={{ once: true, margin: '-60px' }}` — used for Testimonial and Features sections.

Variants:
- `hidden`: `{ opacity: 0, y: 24, filter: 'blur(8px)' }`
- `visible`: `{ opacity: 1, y: 0, filter: 'blur(0px)' }`
- Transition: `{ duration: 0.7, delay: [configurable], ease: [0.25, 0.1, 0.25, 1] }`

Props: `children`, `delay` (default 0), `className`, `immediate` (default false).

---

## SECTION 1: HERO (full viewport height)

### Background — Boomerang Video

Create a `<BoomerangVideoBg>` component that:
1. Loads this video (muted, playsInline, crossOrigin="anonymous"): `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260517_070729_32a7eb4e-d6e2-4571-badc-91b4dab1ecbe.mp4`
2. Captures every frame into offscreen canvas elements (max width 960px) as the video plays through once using `requestVideoFrameCallback` (with a `requestAnimationFrame` fallback).
3. After the video ends, plays back captured frames in a forward/reverse boomerang loop on a visible `<canvas>` at 30fps.
4. Wraps everything in `absolute inset-0 w-full h-full scale-[1.08] origin-center`.
5. Shows the `<video>` while capturing, then swaps to the `<canvas>` once frames are ready.

### Navbar (FadeUp delay=0, immediate)
- Flex row, `justify-between`, padding `px-5 sm:px-10 lg:px-16 py-5`
- Left: Brand name "Kova" in `font-cooper text-xl sm:text-2xl text-[#08150C] tracking-tight`
- Center (hidden on mobile, `hidden md:flex`): Links "Explore", "Pricing" (active with underline bar), "Perks", "Reach" — `text-sm text-stone-700`, hover to `text-[#08150C]`. Active link has `font-medium text-[#08150C]` with `absolute -bottom-1 left-0 right-0 h-0.5 bg-[#08150C] rounded-full` underline span.
- Right desktop: "Get Started" button — `bg-[#08150C] text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-[#1a2e1f]`
- Right mobile: Hamburger (Menu/X icons from Lucide, size 22), toggles a dropdown menu with same links + button, styled `bg-white/95 backdrop-blur-md shadow-lg`

### Hero Content (centered, flex-col items-center text-center)
- `px-5 sm:px-10 pt-8 sm:pt-14 pb-8 sm:pb-14`
- **Heading** (FadeUp delay=0.1, immediate): `font-cooper text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl text-[#08150C] leading-tight max-w-5xl tracking-tight` — Text: "Own your money and build the wealth you deserve"
- **Subtext** (FadeUp delay=0.25, immediate): `mt-4 sm:mt-5 text-sm sm:text-base text-stone-600 max-w-sm sm:max-w-md leading-relaxed` — Text: "Step into a smarter way to bank, right from your pocket. Kova gives you instant control over your money, wherever you are."
- **CTA Buttons** (FadeUp delay=0.4, immediate): Two buttons in `flex-col sm:flex-row gap-3`:
  1. "Watch 30s Demo" — white/80 backdrop-blur, border stone-200, Play icon (size 14, fill-stone-800), rounded-xl
  2. "Get the App" — bg-[#08150C] text-white, Download icon (size 14), rounded-xl

### Dashboard Cards (bottom of hero, FadeUp immediate)
Three cards in a flex row (`items-end justify-center gap-2 sm:gap-4`), outer two hidden on mobile (`hidden sm:block`):

1. **SavingsCard** (delay=0.55, w-44 sm:w-64): White/95 backdrop-blur rounded-2xl, shows "Savings" label, "+25%" badge, "+12%" badge, an SVG line chart (green polyline with gradient fill), month labels Jan-Apr.
2. **OthersCard** (delay=0.65, w-44 sm:w-72): "Others" header with "Monthly" dropdown pill, three percentage stats (78% Groceries, 43% Entertain., 23% Transport), bar chart (12 bars, 5th bar orange `#f97316`, rest gray `#d1d5db`).
3. **BillPayCard** (delay=0.75, w-44 sm:w-64): "Bill Pay" header with "Monthly" dropdown pill, "-8%" red badge, bar chart (12 bars, 7th bar dark `#08150C`, rest light gray `#e5e7eb`), month labels.

---

## SECTION 2: TESTIMONIAL

Background: `bg-[#FDF5EB] py-14 sm:py-20 px-5 sm:px-10 lg:px-20`
Layout: `max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 md:gap-16 items-center`

### Left Column (scroll-animated FadeUp, staggered delays 0 through 0.4):
- **Heading** (delay=0): `font-cooper-medium text-2xl sm:text-3xl text-[#08150C] leading-snug mb-6 sm:mb-8` — "Trusted by ambitious, fast-moving teams"
- **Company badge** (delay=0.1): Dark square icon "A" (`w-7 h-7 rounded-md bg-[#08150C]`) + "Arcvex" text
- **Quote** (delay=0.2): `font-cooper text-stone-700 text-lg sm:text-xl md:text-2xl leading-relaxed mb-5 sm:mb-6` — "With Kova, I have full visibility into our team's spending in real time. It feels like having a sharp financial advisor available at every hour, helping us stay on budget and make wiser calls."
- **Attribution** (delay=0.3): "Maya Reeves" (text-sm font-semibold) + "Director, Arcvex" (text-xs text-stone-500)
- **Button** (delay=0.4): "All Stories" with arrow SVG icon, same dark button style

### Right Column (FadeUp delay=0.15, scroll-triggered):
- A looping muted autoplay video: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260517_074029_c7a854bd-2d6e-4b62-96b3-ae8c16311e44.mp4`
- Styling: `w-full rounded-2xl object-cover aspect-square`, wrapped in `max-w-xs sm:max-w-sm`

---

## SECTION 3: FEATURES

Background: `bg-[#FDF5EB] py-14 sm:py-20 px-5 sm:px-10 lg:px-20`
Layout: `max-w-7xl mx-auto`

### Header Row (scroll-animated):
- **Heading** (FadeUp delay=0): `font-cooper-medium text-2xl sm:text-3xl md:text-4xl text-[#08150C] leading-snug` — "Designed to sharpen every decision"
- **Button** (FadeUp delay=0.1): "Watch Demo" with Play icon (size 13, fill-white), same dark button style

### Cards Grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4`

Each card is `aspect-[3/4] rounded-2xl overflow-hidden`, scroll-animated with staggered delays (0.05, 0.15, 0.25, 0.35):

**Card 1 — Smart Budgeting** (delay=0.05):
- Background image (absolute, object-cover): `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260517_061249_f20dfeda-1033-45ce-a3ee-070965599cbf.png&w=1280&q=85`
- Gradient overlay: `bg-gradient-to-t from-[#08150C]/80 via-[#08150C]/20 to-transparent`
- Top label: Sparkles icon (Lucide, size 16, white) + "Smart Budgeting" in white text-sm font-medium
- Bottom text: "Let AI reshape how you plan your spending. Kova adapts to your..." in `text-white/80 text-sm sm:text-base`

**Card 2 — Bank-Grade Security** (delay=0.15):
- Background image: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260517_061305_db631f5f-185f-4fda-a7a8-1dd7359ef2ea.png&w=1280&q=85`
- Same gradient overlay
- Top label: ShieldCheck icon (Lucide, size 16, white) + "Bank-Grade Security"
- Bottom text: "Keep your money safe with end-to-end encryption, live fraud alerts, and two-factor auth..."

**Card 3 — Spend Insights** (delay=0.25):
- NO background image. Solid background `#EBE4DC`, with `p-5`
- Top label: PieChart icon (Lucide, size 16, text-stone-700) + "Spend Insights" in `text-stone-700 text-sm font-medium`
- Inner container: `rounded-2xl p-4` with background `#F4F1EC`, centered content:
  - "Monthly Spend" title (text-sm sm:text-base font-semibold text-stone-800)
  - "1 Apr – 30 May 2026" subtitle (text-xs sm:text-sm text-stone-500)
  - Donut chart (SVG, viewBox="0 0 36 36", `-rotate-90`): 4 colored arcs using strokeDasharray/strokeDashoffset on circles (r=14, strokeWidth=5). Colors: `#C46B2D` (26.4/61.56), `#7A8C3E` (22/65.96, offset -26.4), `#A8B87A` (17.6/70.36, offset -48.4), `#B8AFA4` (22/65.96, offset -66)
  - Center overlay: "50%" bold + "of budget" small text

**Card 4 — Wealth Building** (delay=0.35):
- Background image: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260517_061316_50e651f8-02d0-4add-9ddb-7d81d15ac02e.png&w=1280&q=85`
- Same gradient overlay
- Top label: TrendingUp icon (Lucide, size 16, white) + "Wealth Building"
- Bottom text: "Grow your net worth with tools that help you set targets, monitor gains, and act..."

---

## DEPENDENCIES

```json
{
  "framer-motion": "^12.38.0",
  "lucide-react": "^0.344.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1"
}
```

Dev: Vite, Tailwind CSS 3, TypeScript, PostCSS, Autoprefixer.

---

## GLOBAL CSS (`index.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; overflow-x: hidden; }
}

.font-cooper {
  font-family: 'Cooper BT W01 Light', 'Georgia', serif;
}

.font-cooper-medium {
  font-family: 'Cooper BT W01 Medium', 'Cooper BT W01 Light', 'Georgia', serif;
  font-weight: 500;
}
```

---

## RESPONSIVE BEHAVIOR

- Mobile-first. Cards stack on small screens (1 col), 2 cols at `sm`, 4 cols at `lg`.
- Hero dashboard cards: outer two hidden below `sm`.
- Nav links/CTA hidden below `md`, replaced by hamburger menu.
- All text sizes step up at `sm` and `md` breakpoints.
- Testimonial grid is single column on mobile, `3fr 2fr` at `md`.

---

## KEY IMPLEMENTATION NOTES

- The entire page background is white for the hero (video fills it) and `#FDF5EB` for the lower two sections.
- All buttons use `rounded-xl` (not full pill).
- The BoomerangVideoBg uses `scale-[1.08]` to prevent edge gaps during playback.
- No page scroll on the hero (`min-h-screen overflow-hidden`).
- The hero content uses `flex-1 flex flex-col justify-between` to push cards to the bottom.