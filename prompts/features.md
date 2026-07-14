Build a Capabilities section for an aerospace company called "EngineTech." This is a light-background proof grid with a header, a CTA pill button, and a 3-column bento-grid of mixed card types (video cards, quote card, metric card, tool-marquee card, and contact card).

---

SECTION CONTAINER

- Class: `.capabilities`. Position relative, z-index 70, min-height 100vh.
- Padding: `clamp(34px, 4vw, 72px) clamp(16px, 3.8vw, 72px)`.
- Background: `#f7f8f8`. Color: `#111111`.

---

HEADER (`.capabilities__header`)

- Flex row, `align-items: flex-start`, `justify-content: space-between`, gap 32px.
- Max-width 1820px (`var(--hero-max-width)`), centered, margin-bottom `clamp(24px, 3vw, 42px)`.

Left intro (`.capabilities__intro`):

- Max-width 860px.
- H2: "Propulsion programs need a partner that can move from concept to certified hardware."
  - Max-width 920px, margin 0, color `#111111`, `font-size: clamp(29px, 3.2vw, 54px)`, weight 300, letter-spacing 0, line-height 1.08.
- P: "EngineTech combines precision manufacturing, hot-fire validation, materials engineering, and mission support for aircraft and spacecraft programs that cannot afford uncertainty."
  - Max-width 760px, margin `18px 0 0`, color `#677070`, `font-size: clamp(14px, 1vw, 17px)`, weight 400, line-height 1.62.

Right CTA button (`.capabilities__button`):

- `flex: 0 0 auto`, `align-self: flex-start`, inline-flex, centered, gap 10px.
- Min-height 48px, padding `0 20px`.
- Border: `1px solid rgb(17 17 17 / 0.1)`, border-radius 999px.
- Background: `rgb(255 255 255 / 0.78)`, color `#111111`, font-size 14px, weight 700.
- Box-shadow: `inset 0 1px 0 rgb(255 255 255 / 0.95), 0 18px 44px rgb(31 44 44 / 0.08)`.
- Text: "Start a Program" followed by Phosphor icon `ph-arrow-up-right` at 18px.

---

BENTO GRID (`.capabilities__grid`)

- CSS grid: `grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)`.
- Gap: `clamp(14px, 1.25vw, 22px)`. Max-width 1820px, centered.
- Min-height: `clamp(620px, 72vh, 780px)`.

Each column is a `.capabilities__stack` -- a nested grid with `gap: clamp(14px, 1.25vw, 22px)`.

---

COLUMN 1: Single tall video card

Stack grid-template-rows: `minmax(210px, 0.74fr) minmax(270px, 1fr)` (but this column only has one card spanning the full height).

Card: `.cap-card.cap-card--tall.cap-card--media`

- Position relative, overflow hidden, border `1px solid rgb(18 35 35 / 0.09)`, border-radius 18px.
- Background: `#dce3e3`. Color: `#ffffff`. Min-height implied by grid.
- Box-shadow: `0 22px 60px rgb(21 34 34 / 0.08)`.

Video: `` element, absolute inset 0, 100% w/h, `object-fit: cover`, `transform: scale(1.02)`.
- Source: `https://assets.mixkit.co/videos/45229/45229-720.mp4`. Autoplay, muted, loop, playsinline.

**Dark shade overlay (`.cap-cardshade`):** Absolute inset 0:
- `background: linear-gradient(180deg, rgb(5 12 14 / 0.3), transparent 34%), linear-gradient(0deg, rgb(5 12 14 / 0.78), transparent 48%)`.

**Top label (`.cap-cardlabel`):** Relative z-index 1, flex centered, padding 24px, color `rgb(255 255 255 / 0.78)`, font-size 11px, weight 760, `letter-spacing: 0.18em`, uppercase. Text: "Program Background".

**Timeline overlay (`.cap-cardtimeline`):** Absolute positioned, z-index 1, `right: 20px; bottom: 20px; left: 20px`. Grid with 12px gap. Each row is a 4-column grid: `grid-template-columns: 58px 16px minmax(0, 1fr) auto`, align-items center, gap 10px, color `rgb(255 255 255 / 0.76)`, font-size 12px. Contains:

| Year | Dot | Program | Note |
|------|-----|---------|------|
| 2026 | (5px white circle at 62% opacity) | **Reusable upper-stage demonstrator** (clamp(13px, 0.95vw, 15px), weight 650, white) | *Thermal qualification* (rgb(255 255 255 / 0.58), normal style) |
| 2025 | dot | **Hybrid-electric aircraft platform** | *Combustor redesign* |
| 2024 | dot | **Orbital transfer vehicle** | *Flight article delivery* |

---

### COLUMN 2: Quote card + Metric card

**Stack grid-template-rows:** `minmax(210px, 0.74fr) minmax(270px, 1fr)`.

**Card A: `.cap-card.cap-card--quote`**

- Flex column, `justify-content: space-between`, padding 24px.
- Background: `linear-gradient(135deg, rgb(255 255 255 / 0.72), rgb(238 244 244 / 0.86)), #edf2f2`.
- Border: `1px solid rgb(18 35 35 / 0.09)`, border-radius 18px.

- Top label: left-aligned (`.cap-cardlabel--left`), no padding, color `#758080`, text: "Mission Voice".
- Blockquote: margin `clamp(22px, 2.4vw, 34px) 0 20px`, color `#263030`, `font-size: clamp(15px, 1vw, 18px)`, line-height 1.62. Text: "EngineTech brought the discipline we needed: clear design reviews, repeatable test data, and hardware that arrived ready for integration."
- Attribution: `

` with `` "Dr. Lena Morris" (block, color `#111111`, 15px) then "Propulsion Lead, Orbital Systems Group" (color `#6b7676`, 14px, line-height 1.5).

**Card B: `.cap-card.cap-card--metric.cap-card--video-panel`**

- Display block, min-height 320px. Background `#dce3e3`, color `#ffffff`.

- Video: same absolute pattern. Source: `https://assets.mixkit.co/videos/23211/23211-720.mp4`. Autoplay, muted, loop, playsinline.
- Dark shade overlay (same gradient as column 1 tall card).
- Metric overlay (`.cap-cardmetric`): absolute inset 0, z-index 1, 100% w/h, text-align center, `text-shadow: 0 12px 32px rgb(0 0 0 / 0.3)`.
  - ``: "2K" -- absolute `top: 50%; left: 50%; transform: translate(-50%, -50%)`, `font-size: clamp(82px, 7.4vw, 134px)`, weight 220, line-height 0.9.
  - ``: "Highly Qualified Engineers" -- absolute `right: 24px; bottom: 24px; left: 24px`, color `rgb(255 255 255 / 0.82)`, `font-size: clamp(14px, 1.05vw, 18px)`, line-height 1.4.

---

### COLUMN 3: Tool-marquee card + Contact card

**Stack with modifier `.capabilitiesstack--systems`:**
- `grid-template-rows: minmax(420px, 1.45fr) auto`.

**Card A: `.cap-card.cap-card--tools.cap-card--tools-media.cap-card--video-panel`**

- Flex column, `justify-content: space-between`. Min-height 420px.
- Background: transparent (video fills).

- Video: Source `https://assets.mixkit.co/videos/23843/23843-720.mp4`. Autoplay, muted, loop, playsinline.
- Shade overlay (modified): `linear-gradient(180deg, rgb(5 12 14 / 0.18), transparent 34%), linear-gradient(0deg, rgb(5 12 14 / 0.32), transparent 56%)`.
- Top label: color `rgb(255 255 255 / 0.82)`, text "Core Systems".

**Tool marquee (`.tool-marquee`):** Grid, gap 14px, overflow hidden, padding `26px 0 8px`. Horizontal fade mask: `mask-image: linear-gradient(to right, transparent, #000 9%, #000 91%, transparent)`.

Two rows of pill tags, each row is a flex container (`width: max-content`, gap 12px). Each pill: inline-flex, centered, gap 8px, min-height 54px, padding `0 16px`, border `1px solid rgb(255 255 255 / 0.2)`, border-radius 14px, background `rgb(255 255 255 / 0.18)`, color `#ffffff`, font-size 13px, weight 700, `backdrop-filter: blur(10px)`, box-shadow `inset 0 1px 0 rgb(255 255 255 / 0.24)`. Icon: Phosphor at 20px.

**Row 1 (animates left, 24s linear infinite):** Turbopumps (ph-gear-six), Hot-fire (ph-fire), Telemetry (ph-gauge), Alloys (ph-atom), Assembly (ph-wrench) -- duplicated once for seamless loop.

**Row 2 (animates right, 28s linear infinite, starts at -50% translateX):** Controls (ph-cpu), Vibration (ph-wave-sine), Certification (ph-shield-check), Launch (ph-rocket-launch), Analysis (ph-chart-line-up) -- duplicated once.

Marquee keyframes:
- `marquee-left`: `translateX(0)` to `translateX(-50%)`
- `marquee-right`: `translateX(-50%)` to `translateX(0)`

**Card B: `.cap-card.cap-card--contact`**

- Flex row, `align-items: center`, `justify-content: space-between`, gap 20px.
- Min-height 118px. Padding: `20px 76px 20px 24px`.
- Background: same gradient as quote card.
- Border, border-radius same as other cards.

- Left side:
  - Label: "Reach Engineering" (left-aligned, `#758080`, 11px, weight 760, `letter-spacing: 0.18em`, uppercase).
  - Email link: "programs@enginetech.com" -- `font-size: clamp(18px, 1.45vw, 24px)`, weight 360, color `#111111`, margin `14px 0 6px`.
  - Phone: "+1 415 018 4270" -- color `#6b7676`, 14px, line-height 1.5.
- Right side: Circular icon button (`.cap-card__icon-button`), absolute `top: 50%; right: 16px; transform: translateY(-50%)`, 42px square, border-radius 50%, border `1px solid rgb(17 17 17 / 0.1)`, background `#111111`, color `#ffffff`. Contains Phosphor `ph-arrow-up-right` at 19px.

---

## RESPONSIVE BREAKPOINTS

**At 1080px:**
- Grid becomes 2 columns: `repeat(2, minmax(0, 1fr))`.
- Min-height auto. Tall card gets `min-height: 620px`.
- Third stack (systems) spans full width: `grid-column: 1 / -1`, becomes 2-col sub-grid `grid-template-columns: repeat(2, minmax(0, 1fr))`, `grid-template-rows: minmax(260px, 1fr)`.

**At 760px:**
- Header becomes `flex-direction: column`. Button goes full width.
- Grid, stacks, and systems stack all become single column (`grid-template-columns: 1fr`, rows auto).
- Tall card min-height 560px.
- Timeline grid becomes `grid-template-columns: 52px 14px minmax(0, 1fr)` (date text wraps to third column).

---

## GLOBAL STYLES

**Font stack:** `"Geist", "Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` with `-webkit-font-smoothing: antialiased` and `text-rendering: geometricPrecision`.

**Icon library:** Phosphor Icons from `https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css`.

**Color palette:** No purple or violet. Neutral `#f7f8f8` background, dark `#111111` text, teal-gray accents `#677070`, `#758080`, `#6b7676`. Card backgrounds use white and soft mint gradients.