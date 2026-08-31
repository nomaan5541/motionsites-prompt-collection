Build a single-page React + TypeScript + Tailwind CSS + Vite landing page for a luxury real estate brand named "Velar.". Use only `lucide-react` for icons. The app is in `src/App.tsx`. Use the exact specifications below.

Global Setup

- Page background: `#f5f0ea` (warm off-white).
- Body wrapper: `overflow-x: clip`.
- Fonts (loaded via `@import` inside an inline `<style>` block):
- Primary: `Syne` weights 400, 700, 800, 900 from Google Fonts.
- Secondary: `Inter` weights 300, 400, 500, 600 from Google Fonts.
- Constants:
- `GRASS_GREEN = '#213138'` (deep teal — used for preloader background and default logo color).
- `FULL_TEXT = 'Velar.'`
- `HOUSE_IMG = 'https://res.cloudinary.com/dsdhxhhqh/image/upload/v1780471903/building_bzziky.png'`
- `BG_IMG = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260603_073200_7082add5-f1f8-4873-8696-d6f78a44089b.png&w=1920&q=85`
- Gallery videos (5, in order):
1. `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260528_154759_4cdc8175-8261-497c-b688-9477c76545d4.mp4`
2. `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260528_154751_39b1b9bb-2708-4211-b6a2-d39f93309e52.mp4`
3. `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260528_154737_eba7900c-0313-483c-a30a-632c747ccc42.mp4`
4. `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260602_144009_4348fe33-f885-4345-8e92-3fe1c2625d32.mp4`
5. `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260602_145337_e44eaa8c-6bb1-4a6e-a70f-ed0231cbaccb.mp4`

Section 1 — Preloader / Intro Overlay

- Fixed full-viewport overlay (`z-index: 100`) filled with `#213138`, centered flex.
- Renders an animated typewriter of the word `Velar.` in Syne, font-size `2.6rem`, color white, letter-spacing `-0.02em`. Letters use weight 700 except `.` which is weight 900.
- A blinking white cursor (3px × 1.1em rounded bar, animation `blink 0.7s step-end infinite` toggling opacity 0/1) follows the last typed letter.
- Timings (using `setTimeout`):
- `CHAR_INTERVAL = 140ms`, `TYPE_START = 600ms`.
- Reveal letters one at a time at `TYPE_START + i * CHAR_INTERVAL`.
- `LIFT_AT = TYPE_START + 6 * CHAR_INTERVAL + 700ms`.
- Hide cursor at `LIFT_AT − 150ms`.
- Start "lifting" the overlay upward at `LIFT_AT`: `transform: translateY(-100%)` with transition `transform 1.5s cubic-bezier(0.45, 0, 0.15, 1)`.
- At `LIFT_AT + 1300ms`, fade in the hero text (`opacity 0 → 1`, `translateY(-28px) → 0`, transition `0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.1s`).
- At `LIFT_AT + 2100ms`, set `liftDone` true and disable the overlay's transition (so it stays parked off-screen).

Section 2 — Fixed Navigation

- Fixed top nav `z-50`, padding `px-6 md:px-10 lg:px-16`, `py-5 md:py-6`, flex justify-between.
- Left: word `Velar.` in Syne, `text-xl`, weight 700 for letters and 900 for `.`. Color = `navColor` (see scroll behavior).
- Right: hamburger toggle button. Two stacked 28px-wide × 1px lines, top one shrinks to `w-5` on hover. When open, swap to a Lucide `X` icon, size 24.
- Scroll behavior: track whether any "dark section" (refs to Section 4 and Section 5) currently overlaps the viewport top (`rect.top <= 0 && rect.bottom > 0`). If so, `navOnDark = true` and `navColor = '#ffffff'`. Otherwise `navColor = '#213138'`. Color transitions: `color 0.35s ease`.
- Mobile menu: when open, full-screen `#f5f0ea` overlay (`z-40`) centered with 4 vertically stacked links: `Residences`, `Story`, `Listings`, `Inquire`. Each link is Syne, `text-4xl`, `font-light`, `tracking-widest`, uppercase, black with hover `text-gray-500`. Click closes menu.

Section 3 — Hero

- `<section>` `position: relative`, `min-height: 100vh`, `overflow: visible`.
- Background: `BG_IMG` as `background-image`, `background-size: cover`, `background-position: center center`, `background-repeat: no-repeat`.
- Hero text block (`.hero-text-block`) inside, `z-index: 10`, hidden initially, fades+slides in (see preloader timings).
- Top row (`.hero-heading-top`, padded `px-6 md:px-10 lg:px-16`, flex `items-end justify-between`, `margin-bottom: -0.04em`):
- Left: `LIVE IN` — Syne 800, uppercase, black, `letter-spacing: -0.03em`, `line-height: 1`. Size via CSS class `.hero-own-the`.
- Right (desktop only ≥1024px, `.hero-subtitle-desktop`): two-line right-aligned paragraph in Syne 700, `clamp(10px, 0.95vw, 14px)`, max-width 300px, opacity 0.7, line-height 1.6, margin-bottom `0.2em`, letter-spacing `0.02em`:
> Stately homes built with vision,
> scope, and architectural finesse.
- Headline row (wrapped in `overflow: hidden`):
- `IRREPLACEABLE` — Syne 800, uppercase, black, `letter-spacing: -0.03em`, padded `px-6 md:px-10 lg:px-16`. Size via `.hero-extraordinary`.
- Mobile/tablet subtitle (`.hero-subtitle-mobile`, padded `px-6`), Syne 600, `clamp(12px, 3vw, 15px)`, opacity 0.65, margin-top `0.9em`:
> Premium real estate with vision,
> depth, and architectural clarity.

Hero Responsive Type Sizes

```css
@media (max-width: 639px) {
.hero-subtitle-desktop { display: none !important; }
.hero-subtitle-mobile { display: block !important; }
.hero-text-block { padding-top: 90px !important; }
.hero-heading-top { justify-content: flex-start !important; }
.hero-own-the { font-size: 7.5vw !important; }
.hero-extraordinary { font-size: 14.5vw !important; white-space: normal !important; word-break: break-word !important; line-height: 0.9 !important; }
}
@media (min-width: 640px) and (max-width: 1023px) {
.hero-subtitle-desktop { display: none !important; }
.hero-subtitle-mobile { display: block !important; }
.hero-text-block { padding-top: 110px !important; }
.hero-heading-top { justify-content: flex-start !important; }
.hero-own-the { font-size: 5.5vw !important; }
.hero-extraordinary { font-size: 11vw !important; white-space: normal !important; word-break: break-word !important; line-height: 0.9 !important; }
}
@media (min-width: 1024px) {
.hero-subtitle-desktop { display: block !important; }
.hero-subtitle-mobile { display: none !important; }
.hero-text-block { padding-top: calc(28vh - 50px) !important; }
.hero-own-the { font-size: 3vw !important; }
.hero-extraordinary { font-size: clamp(52px, 6.5vw, 9vw) !important; white-space: nowrap !important; line-height: 0.88 !important; }
}
```

Section 4 — Scroll-Driven House Animation (the centerpiece)

- A `position: fixed` wrapper at `z-index: 22`, `pointer-events: none`, `will-change: transform`, default `bottom: 0; left: 50%; transform: translateX(-50%); width: 100%; min-width: 1400px;`.
- Inside, an inner div performs the initial "rise from below" entrance: starts at `translateY(102vh)`, transitions to `translateY(0)` with `transform 1.5s cubic-bezier(0.45, 0, 0.15, 1) 0.4s`, triggered when `lifting` becomes true. Once `liftDone` true the transition is removed so the scroll handler can take over.
- Renders `` at width 100%, aria-hidden.
- After `liftDone`, a scroll/resize listener (`updateHousePosition`) computes:
- `baseW = max(window.innerWidth, 1400)`.
- `triggerPoint = -(heroH 0.30)` — animation starts when 30% of hero has scrolled off.
- `endPoint = heroRect.top - (darkRect.bottom - vh)` — ends when the bottom of Section 5 reaches viewport bottom.
- `progress = clamp((heroRect.top − triggerPoint) / (endPoint − triggerPoint), 0, 1)`.
- `t = smoothstep(smoothstep(progress))` where `smoothstep(t) = tt(3−2t)` (applied twice).
- `startX = (vw − baseW) / 2`, `startY = vh − imgH` (bottom-centered).
- `finalScale = 1.45`, `finalX = (vw − baseW finalScale) / 2` (bottom-centered), `mobileOffset = vw < 1024 ? −250 : 4`, `finalY = darkRect.bottom − imgH * finalScale + 500 + mobileOffset`.
- Interpolates `currentX`, `currentY`, `currentScale` linearly via `t`.
- At `progress <= 0` resets to resting (bottom-centered, scale 1). Otherwise sets `top: 0; left: 0; transform: translate(currentX, currentY) scale(currentScale); transform-origin: top left;`.

## Section 5 — Dark Statement + Stats (sticky)

- Outer wrapper: `position: relative; height: 200vh; z-index: 20`.
- Inner `

` (`s2-section`): `position: sticky; top: 0; height: 100vh; background: #1a1a1a; overflow: hidden`. Above it is a tiny `4vh` `#1a1a1a` scroll spacer.
- Content wrapper `.s2-content`: flex column, padding `px-6 md:px-10 lg:px-16`, `padding-top: clamp(30px, 4vw, 60px)`, `padding-bottom: clamp(60px, 8vw, 120px)`.
- Statement text (`.s2-statement`), Inter 300, color `#e8e4df`, letter-spacing `-0.02em`, `line-height: 1.35`, `white-space: nowrap`, font-size `clamp(22px, 2.6vw, 42px)`. Wrapper has `max-width: 1200px`, centered, `padding-left: 25%`. Lines (with hard `
`s):
> Every estate we present is hand-chosen
> through a frame of permanence, refinement,
> and timeless detail. Standards are not
> a flourish. It is our discipline.
- Stats row (`.s2-stats-row`): same max-width/centered/padding-left 25%, `margin-top: clamp(48px, 6vw, 80px)`. Three columns in a flex row, each `flex:1`, with a left border (`1px solid rgba(255,255,255,0.2)`) between items and `padding-left: clamp(20px, 2.5vw, 40px)` on items 2–3:
1. `120+` — `Portfolio Holdings`
2. `12` — `Global Locations`
3. `98%` — `Patron Loyalty Rate`
- Numbers: Inter 300, white, font-size `clamp(36px, 4.5vw, 72px)`, line-height 1.1. Use a `CountUp` component that, when the element first crosses 30% into the viewport (IntersectionObserver), animates from 0 to `end` over 2000ms with easing `1 - (1 - t)^3`, rendering `Math.round(eased * end) + suffix`.
- Labels: Inter 400, `rgba(255,255,255,0.6)`, font-size `clamp(12px, 1.1vw, 16px)`, `margin-top: clamp(4px, 0.5vw, 8px)`, letter-spacing `0.01em`.
- Tablet/mobile rules:
- `≤767px`: remove the 25% left padding entirely (set to 0).
- `768–1023px`: reduce padding-left to 15%, set `min-height: 70vh` and adjust paddings.

## Section 6 — Hover-Expand Gallery (slides over Section 5)

- `

` (`s3-gallery-section`) `position: relative; z-index: 25; margin-top: -100vh; background: #1a1a1a; height: 100vh; overflow: hidden`. This makes it slide up over Section 5 as the user scrolls.
- Background ticker (`.s3-ticker-wrap`): absolutely positioned `inset:0`, flex center, `overflow: hidden`, `z-index: 0`, `pointer-events: none`. Contains a `.ticker-track` with two copies of a giant repeating string:
> `Velar. Velar. Velar. Velar. Velar. Velar. Velar. Velar. ` (with ` ` separators)
- Each span: Syne 800, `clamp(100px, 14vw, 220px)`, white, `white-space: nowrap`, letter-spacing `-0.02em`, `user-select: none`, `padding-right: 0.3em`. (The ticker can also be animated with a horizontal scroll keyframe — left as a static layered word-mark behind the gallery here.)
- Gallery content (`.s3-gallery-content`): z-index 1, flex center, full height, padding `clamp(24px, 4vw, 60px)`.
- Row (`.gallery-expand-row`): flex with `gap:6px`, height 70%, max-width 1200px. Each item (`.gallery-expand-item`): `flex:1 1 0%`, full height, `border-radius:12px`, `overflow:hidden`, `cursor:pointer`, transition `flex 0.5s cubic-bezier(0.4, 0, 0.2, 1)`. On hover, the hovered item grows to `flex: 4`, others shrink — classic accordion expand.
- Each item contains the corresponding video (autoplay, loop, muted, playsInline) covering the tile (`object-fit: cover`).

### Gallery Mobile/Tablet Rules (≤1023px)

```css
.s3-gallery-section { height: auto; min-height: 100vh; overflow: visible; }
.s3-ticker-wrap { position: sticky; top: 0; height: 100vh; width: 100%; margin-bottom: -100vh; }
.s3-gallery-content { height: auto; align-items: flex-start; padding: 80px 16px 60px; }
.gallery-expand-row { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; height: auto; width: 100%; max-width: 700px; }
.gallery-expand-item { flex: none; height: auto; aspect-ratio: 4/5; border-radius: 10px; transition: transform 0.3s ease; }
.gallery-expand-item:hover { flex: none; transform: scale(1.02); }
.gallery-expand-item:last-child:nth-child(odd) { grid-column: 1 / -1; max-width: calc(50% - 4px); justify-self: center; }
@media (max-width: 479px) {
.s3-gallery-content { padding: 60px 12px 48px; }
.gallery-expand-row { gap: 6px; }
}
```

## Behavior Recap

- Preloader types `Velar.` then slides up out of view, simultaneously revealing the hero text and rising the house image from below the viewport.
- The house image stays bottom-centered behind the hero text on initial load.
- As the user scrolls past 30% of the hero, the house begins drifting upward and scaling up to 1.45×, remaining horizontally centered, while pinning toward the bottom of the dark statement section.
- The nav logo color cross-fades to white whenever a dark section sits at the viewport top.
- Section 5 stays sticky as Section 6 (gallery) slides up over it thanks to negative `margin-top: -100vh` and higher `z-index`.
- Stat numbers count up once on scroll into view.
- Gallery tiles accordion-expand on hover (desktop) or 2-column grid (mobile/tablet).

## Tech Notes

- Use only `react`, `react-dom`, `lucide-react`, Tailwind, and Vite. No additional libraries.
- All animation logic lives inside a single `App.tsx` using `useState`, `useEffect`, `useRef`, `useCallback`, and `IntersectionObserver`.
- Use Supabase if any persistence is later needed; this page itself has no data layer.