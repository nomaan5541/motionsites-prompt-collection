---

Build a **Video Stories section** for an aerospace company called "EngineTech." This is a light-background section with a centered header and a horizontally-scrolling rail of video story cards with scroll-snap, edge bleed, and hover/focus opacity transitions.

---

## SECTION CONTAINER (`.video-stories`)

- Position relative, z-index 90, min-height 100vh.
- Padding: `clamp(46px, 5vw, 88px) 0 clamp(44px, 4vw, 74px)`.
- Overflow hidden.
- Background: `#f7f8f8`. Color: `#111111`.

---

## HEADER (`.video-stories__header`)

- Width: `min(100% - 96px, 900px)`. Centered with `margin: 0 auto clamp(38px, 4vw, 74px)`.

**H2:**

- Text: "Program stories from the people building flight-ready power."
- Margin 0, color `#111111`, `font-size: clamp(38px, 4.4vw, 76px)`, weight 300, letter-spacing 0, line-height 1.08.

**P:**

- Text: "Short field notes from integration leads, test engineers, and manufacturing teams moving advanced propulsion systems from requirement reviews to repeatable flight hardware."
- Max-width 720px, margin `22px 0 0`, color `#697272`, `font-size: clamp(16px, 1.25vw, 21px)`, weight 420, line-height 1.55.

---

## RAIL (`.video-stories__rail`)

- CSS grid with horizontal auto-flow: `grid-auto-flow: column`, `grid-auto-columns: minmax(520px, 34vw)`.
- Gap: `clamp(28px, 3vw, 54px)`.
- `overflow-x: auto`. `overscroll-behavior-x: contain`. `scroll-snap-type: x mandatory`.
- Padding: `0 max(48px, calc((100vw - var(--hero-max-width)) / 2 + 48px)) 36px` (so first/last card aligns with content max-width on wide screens, with 48px minimum edge gutter).
- Hide scrollbar: `scrollbar-width: none` and `::-webkit-scrollbar { display: none }`.
- Has `aria-label="EngineTech video previews"`.

---

## STORY CARD (`.story-card`)

- `scroll-snap-align: center`. `min-width: 0`.
- Default state: `opacity: 0.54; transform: translateY(10px)`.
- Hover/focus state: `opacity: 1; transform: none`.
- Transition: `opacity 260ms ease, transform 260ms ease`.

**Media (`.story-card__media`):**

- A `<video>` element with `autoplay muted loop playsinline`.
- Display block, width 100%, height auto, `aspect-ratio: 16 / 9`.
- Border-radius 12px. Background `#dfe5e6`. `object-fit: cover`, `object-position: center`.
- Box-shadow: `0 18px 48px rgb(21 34 34 / 0.1)`.

**Content (`.story-card__content`):**

- Padding `24px 28px 0`.
- `<p>` (category tag): margin `0 0 12px`, color `#111111`, font-size 15px, weight 760, line-height 1.
- `<h3>` (title): max-width 680px, margin 0, color `#252b2b`, `font-size: clamp(18px, 1.22vw, 24px)`, weight 520, letter-spacing 0, line-height 1.38.
- `<span>` (meta): display block, margin-top 14px, color `#858d8d`, font-size 14px, line-height 1.4.

---

## THE 5 CARDS (in order)

**Card 1:**
- Video: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_032431_5e054107-51c0-4162-9f0f-3a40054761ef.mp4`
- Category: "Integration Review"
- Title: "How a reusable upper-stage program moved from thermal risk to stable qualification."
- Meta: "Reusable systems · 04:20"

**Card 2:**
- Video: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_032535_4ccc152e-0cc8-4ee5-a698-e1a98cea8a1e.mp4`
- Category: "Hot-Fire Campaign"
- Title: "Inside the test cell where telemetry, vibration, and injector response converge."
- Meta: "Validation · 03:45"

**Card 3:**
- Video: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_033707_b842a2ea-f223-4804-96d0-737ab67510fc.mp4`
- Category: "Manufacturing Floor"
- Title: "Why sub-micron inspection changes the way aerospace teams plan reliability."
- Meta: "Precision build · 05:10"

**Card 4:**
- Video: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_032431_5e054107-51c0-4162-9f0f-3a40054761ef.mp4` (same as card 1)
- Category: "Hydrogen Pathway"
- Title: "Designing feed systems and ignition envelopes for hydrogen-ready propulsion."
- Meta: "H2 systems · 04:55"

**Card 5:**
- Video: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_032535_4ccc152e-0cc8-4ee5-a698-e1a98cea8a1e.mp4` (same as card 2)
- Category: "Mission Support"
- Title: "The operational cadence behind launch-window support and post-test analysis."
- Meta: "Field readiness · 03:30"

---

## FOOTER PROGRESS INDICATOR (`.video-stories__footer`)

- Display flex, `align-items: center`, gap 8px.
- Width: `min(100% - 96px, 900px)`. Margin: `28px auto 0`.
- Has `aria-hidden="true"`.

Contents (in order):

1. First `<span>`: 56px wide × 4px tall, border-radius 999px, background `#cfd4d4`.
2. Second `<span>`: same as first.
3. Third `<span>`: **320px wide** × 4px tall, border-radius 999px, background `#111111` (active progress).
4. `<strong>`: text "05 / 05", margin-left 18px, color `#7a8282`, font-size 14px, weight 650, `letter-spacing: 0.02em`.

---

## RESPONSIVE BREAKPOINTS

**At 860px:**

- `.video-stories__header` and `.video-stories__footer` width: `min(100% - 48px, 900px)`.
- Rail: `grid-auto-columns: minmax(320px, 82vw)`. Padding: `0 24px 30px`.
- Story cards always at full opacity, no transform offset (`opacity: 1; transform: none`).

**At 560px:**

- Header and footer width: `min(100% - 32px, 900px)`.
- Card content padding becomes `18px 4px 0`.
- Active footer bar (third span) width shrinks to 150px.

---

## GLOBAL STYLES

**CSS custom property used:** `--hero-max-width: 1820px`.

**Font stack:** `"Geist", "Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` with `-webkit-font-smoothing: antialiased` and `text-rendering: geometricPrecision`.

**Color palette:** No purple or violet. Light background `#f7f8f8`. Dark text `#111111`, `#252b2b`. Muted neutrals `#697272`, `#858d8d`, `#7a8282`. Pale divider `#cfd4d4`. Video placeholder bg `#dfe5e6`.