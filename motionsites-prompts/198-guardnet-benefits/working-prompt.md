Build a single React + TypeScript section using Tailwind CSS. No extra libraries. Fully mobile-responsive. Black background, white text.

## Global Prerequisites

- Font: `@import url(https://db.onlinewebfonts.com/c/e55e9079ee863276569c8a68d776ef04?family=Futura+Md+BT+Medium);`
- Body: `font-family: 'Futura Md BT Medium', system-ui, -apple-system, sans-serif; background-color: #000; color: #fff; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;`
- Section sits inside a `w-full max-w-[1400px]` wrapper on a black page.

---

## BenefitsSection

Container: `relative w-full bg-black px-4 sm:px-6 md:px-10 py-12 sm:py-20`

### Section Heading

`text-white text-3xl sm:text-4xl md:text-5xl font-light text-center mb-12 sm:mb-24` with inline style `letterSpacing: '-0.04em'`

Text: **"Key Benefits"**

### Three-Column Card Grid

`grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4`

All three cards share: `relative h-[380px] sm:h-[460px] rounded-2xl bg-neutral-950 overflow-hidden`

---

#### Card 1: Text Card (Left)

Additional classes: `p-6 sm:p-8`

**Blue Blob:** `absolute top-1/2 -translate-y-1/2 -left-[420px] h-[460px] w-[460px] rounded-full bg-[#1e3a8a] blur-3xl opacity-40`

**Content wrapper:** `relative z-10 flex flex-col h-full`

**Heading:** `text-white text-xl sm:text-2xl font-light leading-tight`
Text (two lines with `<br />`):
```
Preemptive Risks
Scouting and Reactions
```

**Body paragraph:** `mt-12 sm:mt-20 text-[13px] sm:text-[14px] leading-relaxed text-white/70 font-light max-w-[280px]`
Text: **"Defense platforms constantly observe bandwidth streams, record files, and machine behaviors to uncover unusual patterns or outliers that could signal a defensive failure."**

---

#### Card 2: Video Card (Center)

Additional classes: `flex flex-col` (no padding on card itself)

**Top video region:** `relative w-full overflow-hidden` with inline style `height: '75%'`

- `<video>` element: `w-full h-full object-cover block`, attributes: `autoPlay loop muted playsInline`
- **Exact URL:** `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260421_072701_f6a01abb-eb30-4559-9d6e-774362defbc3.mp4`
- **Bottom fade overlay inside video wrapper:** `pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-neutral-950`

**Bottom text region:** `flex-1 flex items-center justify-start p-6 sm:p-8`

**Heading:** `text-white text-xl sm:text-2xl font-light leading-tight text-left`
Text (two lines with `<br />`):
```
Know-how and Sectoral
Awareness
```

---

#### Card 3: Text Card (Right)

Additional classes: `p-6 sm:p-8`

**Blue Blob:** `absolute -top-28 -right-28 h-56 w-56 rounded-full bg-[#1e3a8a] blur-3xl opacity-40`

**Content wrapper:** `relative z-10 flex flex-col h-full`

**Heading:** `text-white text-xl sm:text-2xl font-light leading-tight`
Text (two lines with `<br />`):
```
Preemptive Risks
Scouting and Reactions
```

**Body paragraph:** `mt-auto text-[13px] sm:text-[14px] leading-relaxed text-white/70 font-light max-w-[320px]`
Text: **"Defense platforms constantly observe bandwidth streams, record files, and machine behaviors to uncover unusual patterns or outliers that could signal a defensive failure."**

Key difference from Card 1: the paragraph uses `mt-auto` to pin it to the **bottom** of the card, versus Card 1 which uses `mt-12 sm:mt-20` to place it in the **middle**.

---

## Color Palette Reference

| Token | Hex |
|---|---|
| Background | `#000000` (black) |
| Card surface | `neutral-950` (Tailwind) |
| Blob blue | `#1e3a8a` |
| Video fade target | `neutral-950` (matches card bg) |
| Body text | `white/70` |
| Heading text | `white` |

## Responsive Breakpoints

- Default (mobile): `< 640px` -- cards stack in a single column
- `sm:` at `640px` -- cards grow taller (460px), text/padding increases
- `md:` at `768px` -- switches to 3-column grid layout

## Interactions

- No hover states or JavaScript animations
- All motion comes from the looping background video in Card 2
- The bottom fade on the video blends seamlessly into the `neutral-950` card surface