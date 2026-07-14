Create a React + Tailwind CSS beauty/skincare brand landing page called "STRETCH" with 3 sections. Use Vite, React 18, TypeScript, Tailwind CSS, and lucide-react for icons. The system font stack is used (no custom fonts loaded). The page has smooth scroll-triggered fade-in animations using IntersectionObserver, button hover lift animations, and full responsive design with a mobile hamburger menu.

---

## SECTION 1: HERO (Full viewport height, split 50/50 on desktop, stacked on mobile)

**Announcement Bar** (absolute positioned, top of page, z-30):
- Background: `#F9F4F0`, text black
- Centered text: "free shipping for orders over 50€"
- ChevronLeft and ChevronRight icons (size 16) on each side
- Padding: `py-2.5` mobile, `py-3` desktop

**Navigation** (absolute positioned below announcement bar at `top-[38px]` mobile / `top-[42px]` desktop, z-30):
- Left: Logo text "STRETCH" — `text-lg sm:text-xl font-bold tracking-[0.2em] uppercase`
- Center (hidden on mobile, visible md+): 4 links — "shop", "learn", "journal", "theme" — `text-sm`, with an underline animation on hover (a `<span>` inside that goes from `w-0` to `w-full` on group-hover, `h-[1px] bg-white transition-all duration-300`)
- Right: 
  - French flag (3 colored divs: `bg-blue-700`, white, `bg-red-600` in a `w-6 h-4` container) + "eur €" text + ChevronDown — hidden on mobile
  - Vertical divider `w-px h-5 bg-white/30 mx-2` — hidden on mobile
  - User icon (hidden below sm), Search icon, ShoppingBag icon (all size 20)
  - Menu/X hamburger toggle (visible below md)

**Mobile Menu** (fixed fullscreen overlay, z-40):
- `bg-black/95 backdrop-blur-sm`
- Centered vertically: same 4 nav links at `text-3xl font-light`
- Transition: `opacity` + `pointer-events` toggle over `duration-500`

**Hero Left Half** (`w-full lg:w-1/2`, `min-h-[60vh] lg:min-h-0`):
- Background: Full-bleed absolute image:
  ```
  https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_101925_8e509c31-4e75-4ae1-b164-2605265b2d47.png&w=1280&q=85
  ```
- Content (relative z-10, fade-in animation: `translate-y-8` to `translate-y-0`, `opacity-0` to `opacity-100`, `duration-1000`):
  - Heading: "ethical beauty," (line break) "sustainable impact." — `text-4xl sm:text-5xl md:text-6xl lg:text-[clamp(3.5rem,5vw,6rem)] font-light leading-[1.05] mb-6`
  - Under "impact." word: decorative SVG with 3 wavy gold lines (`stroke="#C8A45C"`, strokeWidths 2, 1.5, 1) — absolutely positioned `-bottom-1 left-0 w-full h-4`
  - Paragraph: "Committed to sustainable beauty and minimize our impact on the planet." — `text-sm md:text-base text-white/80 mb-10 max-w-md`
  - Button: "about us" — `px-10 py-4 bg-white text-black rounded-full text-sm` with `.btn-primary` class

**Hero Right Half** (`w-full lg:w-1/2`, `min-h-[40vh] lg:min-h-0`):
- Video slideshow (3 slides, auto-advances every 5000ms):
  - Video 1: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_112022_cddf2487-4ffe-45b6-ba4c-99ab79003cc5.mp4`
  - Video 2: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260518_175400_b46d1cd2-2050-45e2-9d13-b9c0bacb16b3.mp4`
  - Video 3: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260518_182440_671605c8-2ed8-4507-a4cb-a62a8f61316f.mp4`
  - All videos: `autoPlay loop muted playsInline`, `object-cover`, absolute `inset-0`
  - Transition between slides: `transition-opacity duration-700`
- Controls (absolute `bottom-6 right-6` z-20):
  - 3 dot indicators: `w-2 h-2 rounded-full`, active = `bg-white scale-125`, inactive = `bg-white/50`
  - Pause/Play toggle button: `w-8 h-8 rounded-full border border-white/50`, Pause/Play icon size 14

---

## SECTION 2: BEST SELLERS (Background `#F9F4F0`, text black)

- Padding: `py-12 sm:py-16 px-4 sm:px-6 lg:px-10`
- Fade-in animation on scroll (translate-y-6 to 0, opacity 0 to 1)

**Tabs:**
- Two buttons: "best sellers" and "sets"
- Text: `text-2xl sm:text-4xl md:text-5xl font-medium`
- Active tab: `text-[#1a1a1a]` with a filled dot `w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#1a1a1a]` that has a scale-in CSS animation
- Inactive tab: `text-gray-400`, hover → `text-gray-600`

**Product Carousel** (horizontal scroll, `overflow-x-auto scrollbar-hide`):
- Vertical scroll (mouse wheel) is hijacked to scroll horizontally
- Each product card: `w-[260px] sm:w-[280px] md:w-[300px] lg:w-[calc(25%-1px)]`
- Cards have `border border-gray-200` on all 4 sides, with `-ml-[1px] first:ml-0` to collapse shared borders
- Cards fade in staggered: each card has `transitionDelay: ${200 + index * 80}ms`
- On hover: product image scales to 105% (`transition-transform duration-500`)

**7 Products (in order):**
1. Category: "ILLUMINATE" | Name: "Illuminating cleansing gel" | Price: "€36,00" | Image: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260518_193822_8c95f5ed-b142-454f-ab87-59ad1f09e758.png&w=1280&q=85`
2. Category: "UNIFY" | Subcategory: "TIGHTEN PORES" | Name: "Unifying serum spray" | Price: "€34,00" | Image: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260518_194048_278bf3cc-7d1f-43c1-9dc7-73d8fcd9949c.png&w=1280&q=85`
3. Category: "NATURAL GLOW" | Name: "Super glow set" | Price: "€92,00" | Old price: "€99,00" | Image: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260518_194058_d89610de-05f8-45e4-8196-0680296c565a.png&w=1280&q=85`
4. Category: "PROTECT" | Subcategory: "ILLUMINATE" | Name: "Radiance day oil" | Price: "€59,00" | Image: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260518_194112_1763cbb2-3171-4ad3-9f38-1b738b8f1bb6.png&w=1280&q=85`
5. Category: "HYDRATE" | Subcategory: "NOURISH" | Name: "Deep moisture cream" | Price: "€48,00" | Image: same as product 1
6. Category: "RENEW" | Name: "Night repair elixir" | Price: "€72,00" | Old price: "€79,00" | Image: same as product 2
7. Category: "SMOOTH" | Subcategory: "REFINE" | Name: "Gentle exfoliating toner" | Price: "€42,00" | Image: same as product 3

**Card layout:**
- Top: category label (`text-xs font-medium tracking-wider uppercase`) + optional subcategory (`text-xs text-gray-500 uppercase mt-0.5`) in a `px-4 h-12` container
- Middle: image in `mx-4 aspect-[3/4] rounded-lg overflow-hidden bg-[#F9F4F0]`, `object-cover`
- Bottom: product name (`text-sm`, centered) + price row (with optional strikethrough old price in `text-gray-400 line-through`)

**Scroll Progress Bar:**
- `mt-8 sm:mt-10 mx-auto max-w-[280px]`
- Track: `h-[2px] bg-gray-300 rounded-full`
- Thumb: `width: 30%`, `bg-[#1a1a1a]`, position calculated as `translateX(${scrollProgress * (100 / 0.3)}%)`

---

## SECTION 3: CATEGORIES (Background black, text white)

- 3-column grid on desktop (`grid-cols-1 md:grid-cols-3`), no gaps, no dividers between columns
- Fade-in animation on scroll (translate-y-12 to 0, opacity 0 to 1, duration-1000)

**3 Category Cards (each):**
- Min height: `min-h-[400px] sm:min-h-[500px] md:min-h-[750px]`
- Padding: `p-6 sm:p-8 md:p-12`
- Full-bleed background video (absolute, `object-cover`)
- On hover: video scales to 105% (`transition-transform duration-700`)
- Dark overlay: `bg-black/10` → hover `bg-black/20` (`transition-colors duration-500`)
- Vertical text (rotated): `writingMode: 'vertical-lr', transform: 'rotate(180deg)'` — `text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium` — moves up 2px on hover
- Button at bottom: "shop [name]" — `px-8 py-3 bg-white text-black rounded-full text-sm` with `.btn-primary`

**Category data:**
1. Name: "face" | Video: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260518_203023_87a26602-2898-4acc-a396-c7a2b5ad84fd.mp4`
2. Name: "beauty tools" | Video: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260518_203415_b86e3f19-2aec-46cd-9a86-b64c40118e38.mp4`
3. Name: "body" | Video: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260518_203051_85fee398-ea01-4aa0-972b-137a74213be5.mp4`

---

## CSS (index.css):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.btn-primary {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.btn-primary::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent 0%, rgba(0, 0, 0, 0.05) 50%, transparent 100%);
  transform: translateX(-100%);
  transition: transform 0.5s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.btn-primary:hover::before {
  transform: translateX(100%);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@keyframes scale-in {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-scale-in {
  animation: scale-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

## ANIMATIONS SUMMARY:
1. **useInView hook** — custom IntersectionObserver hook (threshold configurable, default 0.15). Once element enters viewport, sets `isVisible = true` permanently (unobserves after).
2. **Hero text** — fades in + slides up 8px over 1000ms
3. **Best sellers tabs** — fades in + slides up 6px over 800ms
4. **Product cards** — staggered fade-in (each 80ms apart, starting at 200ms delay), slides up 8px over 500ms
5. **Categories section** — fades in + slides up 12px over 1000ms
6. **Tab dot** — scale-in keyframe with bounce easing `cubic-bezier(0.34, 1.56, 0.64, 1)` over 300ms
7. **Buttons (.btn-primary)** — lift 2px + shadow on hover, light sweep effect via `::before` pseudo-element
8. **Product images** — scale to 105% on card hover over 500ms
9. **Category videos** — scale to 105% on card hover over 700ms
10. **Nav links** — underline grows from left (`w-0` to `w-full`) over 300ms on hover

---

## TECH STACK:
- Vite + React 18 + TypeScript
- Tailwind CSS 3.4
- lucide-react for icons (ChevronLeft, ChevronRight, User, Search, ShoppingBag, ChevronDown, Pause, Play, Menu, X)
- No other UI libraries