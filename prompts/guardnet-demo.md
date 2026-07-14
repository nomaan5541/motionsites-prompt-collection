Build two React + TypeScript sections using Tailwind CSS. No extra libraries besides React and Tailwind. Everything is fully mobile-responsive. The entire page has a black background with white text.

## Global Prerequisites

- Font: `@import url(https://db.onlinewebfonts.com/c/e55e9079ee863276569c8a68d776ef04?family=Futura+Md+BT+Medium);`
- Body: `font-family: 'Futura Md BT Medium', system-ui, -apple-system, sans-serif; background-color: #000; color: #fff; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;`
- All text is lowercase unless otherwise stated.
- The two sections sit inside a `w-full max-w-[1400px]` wrapper, stacked vertically.

---

## Section 1: SecuritySection

Container: `relative min-h-[600px] h-screen w-full overflow-hidden bg-black`.

### Background Video (absolute fill)

- Classes: `absolute inset-0 w-full h-full object-cover`
- Attributes: `autoPlay loop muted playsInline`
- **Exact URL:** `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260421_072418_508a7d2e-396d-4f6f-9d42-ec920fcf7755.mp4`

### Top Fade Overlay

`pointer-events-none absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black to-transparent z-10`

### Inner Wrapper

`relative h-full w-full max-w-[1100px] mx-auto`

### Floating Pill Navigation (centered at top)

Positioned: `absolute top-6 sm:top-10 left-1/2 -translate-x-1/2 z-20 w-max max-w-[95vw]`

Pill container: `flex items-center gap-1.5 sm:gap-2 bg-neutral-900/80 backdrop-blur rounded-full p-2 sm:p-3`

Two buttons inside:

1. **Ghost button:** `text-white/90 text-xs sm:text-sm px-4 sm:px-7 py-2 sm:py-3 rounded-full hover:text-white transition-colors whitespace-nowrap` -- label: **"confirm real person"**

2. **Gradient button:** `text-black text-xs sm:text-sm font-normal px-4 sm:px-7 py-2 sm:py-3 rounded-full whitespace-nowrap` with inline style `background: linear-gradient(90deg, #FA8453 0%, #F8C9B2 100%)` -- label: **"run demo"**

### Left Paragraph

`absolute left-4 sm:left-6 md:left-16 top-[62%] sm:top-[56%] max-w-[280px] sm:max-w-[440px] text-[13px] sm:text-[18px] leading-relaxed text-white/80 font-light`

Text: **"shielding users info with premier tech, granting them with safety in all place"**

### Right Paragraph

`absolute right-4 sm:right-6 md:right-16 top-[26%] sm:top-[34%] max-w-[280px] sm:max-w-[500px] text-[13px] sm:text-[18px] leading-relaxed text-white/90 font-light`

Text: **"By teaming up with a defender service, a business can dramatically improve the safeguard of its important info. This covers applying strong obfuscation protocols, gateway barriers, and observation engines to shield against unauthorized entries, info escapes, and malicious cyberhacks."**

---

## Section 2: CompaniesSection

Container: `relative w-full bg-black px-4 sm:px-6 md:px-10 py-12 sm:py-20`

### Company Cards Grid

`grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4`

Each card: `relative h-24 sm:h-32 md:h-36 rounded-2xl bg-neutral-950 overflow-hidden flex items-center justify-center`

Each card has:
- One or more **blurred color blobs** (absolutely positioned, `rounded-full blur-3xl`, various opacities)
- A **centered logo** (`relative z-10`) consisting of an inline SVG icon (`h-6 w-6 sm:h-8 sm:w-8`, fill white) and a text wordmark

#### Card 1: Apex

- **Blob:** `absolute -top-24 -left-24 h-40 w-40 rounded-full bg-[#1e3a8a] blur-3xl opacity-40`
- **SVG path:** `M12 2l2.39 4.84L20 8l-4 3.9L17.28 18 12 15.27 6.72 18 8 11.9 4 8l5.61-1.16L12 2z` (viewBox `0 0 24 24`)
- **Wordmark:** `text-white text-xl sm:text-3xl font-semibold tracking-tight` -- "Apex"

#### Card 2: forge

- **Blob 1:** `absolute -top-24 -left-24 h-40 w-40 rounded-full bg-[#FA8453] blur-3xl opacity-30`
- **Blob 2:** `absolute -bottom-24 -right-24 h-40 w-40 rounded-full bg-[#F5D547] blur-3xl opacity-25`
- **SVG path:** `M20.63 8.46l-4.73-2.73-.53.31 5.1 2.94v5.88l-5.1 2.94.53.3 4.73-2.72V8.46zM8.1 6.04l.53.3L3.53 9.28v5.88L8.63 18.1l-.53.3-4.73-2.72V8.46L8.1 6.04zM16.05 14.3v-4.6L12 7.4 7.95 9.7v4.6L12 16.6l4.05-2.3zm-.53-.3L12 16.02l-3.52-2.02v-4.02L12 7.96l3.52 2.02v4.02z` (viewBox `0 0 24 24`)
- **Wordmark:** `text-white text-xl sm:text-3xl font-semibold tracking-tight` -- "forge"

#### Card 3: Eastern Delta

- **Blob:** `absolute -bottom-24 -left-24 h-40 w-40 rounded-full bg-[#F5D547] blur-3xl opacity-30`
- **SVG path:** `M2 4l3 16h3l2-10 2 10h3l3-16h-3l-1.5 10L12 4h-2L8.5 14 7 4H2z` (viewBox `0 0 24 24`)
- **Wordmark:** `text-white text-lg sm:text-2xl font-semibold leading-tight tracking-tight` -- two lines: "Eastern" then `<br />` then "Delta"

#### Card 4: Skybank

- **Blob:** `absolute top-1/2 -translate-y-1/2 -right-28 h-48 w-48 rounded-full bg-[#1e3a8a] blur-3xl opacity-40`
- **SVG path:** `M6 2l6 3.75L6 9.5 0 5.75 6 2zm12 0l6 3.75L18 9.5l-6-3.75L18 2zM0 13.25L6 9.5l6 3.75L6 17l-6-3.75zm18-3.75l6 3.75L18 17l-6-3.75 6-3.75zM6 18.25L12 14.5l6 3.75L12 22l-6-3.75z` (viewBox `0 0 24 24`)
- **Wordmark:** `text-white text-xl sm:text-3xl font-semibold tracking-tight` -- "Skybank"

### Bottom Row (below grid)

Container: `mt-16 sm:mt-28 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 md:w-[70%] md:ml-auto`

#### Left Paragraph

`max-w-md text-[13px] sm:text-[18px] leading-relaxed text-white/70 font-light`

Text: **"shielding users info with premier tech, granting them with safety in all place"**

#### Gradient-Border "Run Demo" Button

Outer wrapper: `relative rounded-full p-[1.5px] self-start md:self-auto` with inline style `background: linear-gradient(90deg, #FA8453 0%, #F8C9B2 100%)`

Inner span: `block rounded-full bg-black px-8 sm:px-10 py-2.5 sm:py-3 text-white text-sm` -- label: **"Run Demo"**

---

## Color Palette Reference

| Token | Hex |
|---|---|
| Background | `#000000` (black) |
| Card surface | `neutral-950` (Tailwind) |
| Blob blue | `#1e3a8a` |
| Blob orange | `#FA8453` |
| Blob yellow | `#F5D547` |
| Gradient start | `#FA8453` |
| Gradient end | `#F8C9B2` |
| Body text | `white/70` to `white/90` |

## Responsive Breakpoints

- Default (mobile-first): `< 640px`
- `sm:` at `640px`
- `md:` at `768px`

All text sizes, padding, gaps, and heights scale across these three tiers as specified in the class lists above.

## Interactions

- Ghost button hover: `text-white/90` to `text-white` via `transition-colors`
- No JavaScript animations; all motion comes from the looping background video
- Gradient-border button has no hover state beyond default cursor