Build a Stats section for an aerospace company called "EngineTech." This is a dark-background section with a two-column header, a 4-tab switcher, and an animated horizontal bar chart with range indicators, spark traces, and staggered entrance animations. The tab switching re-renders the chart with new data and replays all animations.

---

SECTION CONTAINER (`.stats`)

- Position relative, z-index 80, min-height 100vh.
- Padding: `clamp(44px, 5vw, 86px) clamp(16px, 3.8vw, 72px) clamp(54px, 5vw, 90px)`.
- Color: `#f7f8f8`.
- Background (layered):
  - `radial-gradient(circle at 78% 18%, rgb(113 145 208 / 0.18), transparent 34%)`
  - `radial-gradient(circle at 18% 88%, rgb(170 184 213 / 0.11), transparent 28%)`
  - `linear-gradient(180deg, #111414 0%, #171a1a 100%)`

---

HEADER (`.stats__header`)

- CSS grid: `grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.72fr)`.
- Gap: `clamp(32px, 6vw, 120px)`. Max-width 1820px, centered. Margin-bottom: `clamp(34px, 4.5vw, 72px)`.

Left column (`.stats__title-wrap`):

- H2: "Unmatched propulsion data across every flight-critical layer."
  - Max-width 920px, margin 0, color `#f7f8f8`, `font-size: clamp(29px, 3.2vw, 54px)`, weight 300, letter-spacing 0, line-height 1.08.

Right column (`.stats__summary`):

- `align-self: start`, margin 0, color `rgb(247 248 248 / 0.8)`, `font-size: clamp(18px, 1.65vw, 28px)`, weight 360, line-height 1.34.
- Entrance animation: Starts at `opacity: 0; transform: translateY(14px)`. When class `.is-visible` is added: `opacity: 1; transform: none`. Transition: 420ms ease on both properties.
- Default text (for "Cities" tab): "Distributed aerospace infrastructure needs engines that can test, relight, and recover across dense launch corridors and remote operating bases."

---

TAB BAR (`.stats__tabs`)

- CSS grid: `repeat(4, minmax(0, 1fr))`. Gap 0. Max-width 1820px, centered.
- Bottom border: `1px solid rgb(255 255 255 / 0.14)`.

Each tab is a `` (`.statstab`):

- Min-height 58px, padding `0 20px 18px 0`, no border, transparent background.
- Color: `rgb(247 248 248 / 0.5)`. Font: inherit, `font-size: clamp(14px, 1.22vw, 22px)`, weight 430. Text-align left. Cursor pointer.
- Transition: `color 220ms ease`.
- Active state (`.is-active`): color `#ffffff`.

**Active underline (`::after` pseudo-element):**

- Absolute, `right: 16px; bottom: -1px; left: 0`. Height 4px.
- Background: `linear-gradient(90deg, #7191d0, #aab8d5)` (the primary blue to soft blue).
- Default: `transform: scaleX(0); transform-origin: left`.
- Active: `transform: scaleX(1)`. Transition: `360ms cubic-bezier(0.22, 1, 0.36, 1)`.

**The 4 tabs (with `data-stats-tab` attribute):**

| data-stats-tab | Label |
|---|---|
| cities | Cities & Infrastructure |
| materials | Materials & Manufacturing |
| fuels | Fuels & Upstream |
| hydrogen | H2 Hydrogen |

First tab ("cities") starts with `.is-active` and `aria-selected="true"`.

---

## CHART CONTAINER (`.statschart`)

- Position relative, max-width 1820px, `min-height: clamp(520px, 58vh, 680px)`.
- Margin: `clamp(28px, 3vw, 48px) auto 0`. Padding: `0 0 22px`. Overflow hidden.
- Border: `1px solid rgb(255 255 255 / 0.08)`. Border-radius 20px.
- Background-color: `rgb(255 255 255 / 0.025)`.
- **Vertical grid lines** via background-image: `repeating-linear-gradient(to right, transparent 0, transparent calc(10% - 1px), rgb(255 255 255 / 0.07) calc(10% - 1px), rgb(255 255 255 / 0.07) 10%)`.
- Box-shadow: `inset 0 1px 0 rgb(255 255 255 / 0.08), 0 24px 70px rgb(0 0 0 / 0.18)`.
- Has `aria-live="polite"` and `data-stats-chart` attribute.

### Chart head (`.statschart-head`)

- Flex row, `align-items: center`, `justify-content: space-between`, gap 24px.
- Padding: `clamp(18px, 2vw, 28px)`.
- Border-bottom: `1px solid rgb(255 255 255 / 0.08)`. Background: `rgb(255 255 255 / 0.025)`.
- Left ``: dataset title (e.g., "Cities & Infrastructure"), color `#ffffff`, `font-size: clamp(12px, 0.86vw, 14px)`, weight 760, `letter-spacing: 0.16em`, uppercase.
- Right ``: "Operating envelope", color `rgb(247 248 248 / 0.48)`, same font-size, weight 620, `letter-spacing: 0.12em`, uppercase.

### Bars area (`.statsbars`)

- Grid layout, gap `clamp(16px, 2vh, 26px)`, padding `clamp(26px, 3vw, 48px) clamp(24px, 2.4vw, 42px) 0`.

Each bar row (`.stats__bar-row`) is an `

`:

- Grid: `grid-template-columns: minmax(180px, 0.27fr) minmax(0, 1fr)`. Align-items center. Gap: `clamp(18px, 2vw, 34px)`.
- **Entrance:** Starts `opacity: 0; transform: translateY(18px)`.
- When `.statschart.is-ready` is present: plays `stats-row-in` animation -- `520ms cubic-bezier(0.22, 1, 0.36, 1) forwards`, delay `var(--bar-delay)` (set per row: 0ms, 90ms, 180ms, 270ms).
- CSS custom properties set per row: `--bar-value`, `--range-start`, `--range-width`, `--bar-delay`.

**Bar label (`.statsbar-label`):**

- ``: color `#ffffff`, `font-size: clamp(15px, 1.1vw, 19px)`, weight 680, line-height 1.2.
- ``: margin-top 5px, color `rgb(247 248 248 / 0.48)`, `font-size: clamp(12px, 0.86vw, 14px)`, line-height 1.35.

**Track (`.statstrack`):**

- Position relative, `height: clamp(48px, 5.4vh, 64px)`, overflow hidden, border-radius 0.
- Background: `rgb(255 255 255 / 0.055)`.
- Box-shadow: `inset 0 0 0 1px rgb(255 255 255 / 0.075), 0 12px 32px rgb(0 0 0 / 0.16)`.

**Inside the track, 4 layers:**

1. **Range indicator (`.statsrange`):** Absolute, `top: 9px; bottom: 9px; left: var(--range-start); width: var(--range-width)`. Border: `1px solid rgb(170 184 213 / 0.22)`. Background: `linear-gradient(90deg, rgb(113 145 208 / 0.05), rgb(170 184 213 / 0.14), rgb(113 145 208 / 0.05))`. Starts `opacity: 0; transform: scaleX(0.6); transform-origin: left`. Animates with `stats-range-in`: `620ms cubic-bezier(0.22, 1, 0.36, 1) forwards`, delay `var(--bar-delay) + 60ms`.

2. **Fill bar (`.statsbar`):** Position relative, z-index 1, `width: var(--bar-value)`, height 100%. Background: `linear-gradient(90deg, rgb(113 145 208 / 0.62) 0%, #8fb0ef 62%, #d6e3ff 100%)`. Box-shadow: `0 0 34px rgb(113 145 208 / 0.24)`. Starts `transform: scaleX(0); transform-origin: left`. Animates with `stats-fill`: `900ms cubic-bezier(0.22, 1, 0.36, 1) forwards`, delay `var(--bar-delay) + 110ms`.

3. **Value label (`.statsvalue`):** Absolute, z-index 3, `top: 50%; right: 18px; transform: translateY(-50%)`. Color `#ffffff`, `font-size: clamp(14px, 1vw, 18px)`, weight 740. Displays value + unit (e.g., "82%").

4. **Spark trace (`.statstrace`):** Absolute inset 0, z-index 2, pointer-events none. Contains 6 `` elements per row, each positioned at `--point-x` (percentage along the bar) and `--point-y` (alternating 34% and 62% vertically). Each spark:
   - 18px square (variants: 14px for `--1`, 11px for `--2`), border-radius 50%.
   - Background: `radial-gradient(circle, rgb(255 255 255 / 0.95) 0 8%, rgb(214 227 255 / 0.42) 9% 22%, transparent 58%)`.
   - `filter: blur(0.1px)`. Starts `opacity: 0; transform: translate(-50%, -50%) scale(0.2)`.
   - `::before`: Horizontal cross-hair line -- 24px x 1px, centered, `background: linear-gradient(90deg, transparent, rgb(255 255 255 / 0.72), transparent)`. Rotated by `var(--spark-rotate)`.
   - `::after`: Vertical cross-hair -- 1px x 18px, centered, `background: linear-gradient(180deg, transparent, rgb(170 184 213 / 0.62), transparent)`. Same rotation.
   - Spark variant rotations: `--1` = 22deg, `--2` = -18deg, default = 0deg.
   - Animates with `stats-point-in`: `420ms cubic-bezier(0.22, 1, 0.36, 1) forwards` to `opacity: 0.86; transform: translate(-50%, -50%) scale(1)`. Delay: `var(--bar-delay) + 260ms + var(--point-delay)` (point-delay increments 70ms per point).

### Axis (`.statsaxis`)

- Below the bars. Grid: `grid-template-columns: minmax(180px, 0.27fr) minmax(0, 1fr)`. Gap `clamp(18px, 2vw, 34px)`. Padding `14px clamp(24px, 2.4vw, 42px) 0`. Color `rgb(247 248 248 / 0.42)`, `font-size: clamp(11px, 0.84vw, 14px)`.
- Left cell: empty ``.
- Right cell: a div with `grid-template-columns: repeat(11, minmax(0, 1fr))` containing 11 `` elements: "0", "10", "20"... "100". First aligned left, last aligned right.

---

## KEYFRAME ANIMATIONS

```
@keyframes stats-row-in {
  to { opacity: 1; transform: none; }
}

@keyframes stats-fill {
  to { transform: scaleX(1); }
}

@keyframes stats-range-in {
  to { opacity: 1; transform: scaleX(1); }
}

@keyframes stats-point-in {
  to { opacity: 0.86; transform: translate(-50%, -50%) scale(1); }
}
```

---

## JS BEHAVIOR (Tab switching + animation replay)

**Data structure:** 4 datasets keyed as `cities`, `materials`, `fuels`, `hydrogen`. Each has `title`, `summary`, and `bars` array (4 items). Each bar: `{ label, value, target, rangeStart, rangeEnd, unit, note, trace }` where `trace` is an array of 6 numbers (x-positions for spark points).

**Full dataset:**

```
cities: {
  title: "Cities & Infrastructure",
  summary: "Distributed aerospace infrastructure needs engines that can test, relight, and recover across dense launch corridors and remote operating bases.",
  bars: [
    { label: "Mobile integration bays", value: 82, target: 88, rangeStart: 58, rangeEnd: 91, unit: "%", note: "deployment coverage", trace: [28, 42, 57, 63, 74, 82] },
    { label: "Airport-adjacent service cells", value: 68, target: 74, rangeStart: 44, rangeEnd: 79, unit: "%", note: "qualified workflows", trace: [18, 36, 41, 55, 61, 68] },
    { label: "Remote launch support", value: 54, target: 63, rangeStart: 30, rangeEnd: 70, unit: "%", note: "field readiness", trace: [14, 24, 39, 43, 48, 54] },
    { label: "Thermal recovery loops", value: 76, target: 81, rangeStart: 50, rangeEnd: 84, unit: "%", note: "heat reuse potential", trace: [26, 38, 49, 66, 72, 76] },
  ],
}

materials: {
  title: "Materials & Manufacturing",
  summary: "EngineTech combines high-temperature alloys, additive tooling, and inspection data to compress the path from design lock to certified hardware.",
  bars: [
    { label: "Nickel superalloy margin", value: 91, target: 94, rangeStart: 68, rangeEnd: 96, unit: "%", note: "thermal headroom", trace: [44, 61, 70, 79, 86, 91] },
    { label: "Additive chamber tooling", value: 72, target: 80, rangeStart: 48, rangeEnd: 86, unit: "%", note: "lead-time reduction", trace: [19, 34, 48, 53, 67, 72] },
    { label: "Sub-micron inspection yield", value: 96, target: 97, rangeStart: 82, rangeEnd: 99, unit: "%", note: "accepted components", trace: [71, 77, 84, 89, 94, 96] },
    { label: "Reusable test article cycles", value: 84, target: 88, rangeStart: 62, rangeEnd: 91, unit: "%", note: "qualification depth", trace: [36, 52, 64, 71, 79, 84] },
  ],
}

fuels: {
  title: "Fuels & Upstream",
  summary: "Fuel-path analysis links propellant availability, storage constraints, and injector behavior before a program commits to flight architecture.",
  bars: [
    { label: "Methane supply compatibility", value: 78, target: 83, rangeStart: 52, rangeEnd: 88, unit: "%", note: "regional availability", trace: [22, 31, 46, 58, 69, 78] },
    { label: "Kerosene retrofit readiness", value: 64, target: 70, rangeStart: 40, rangeEnd: 74, unit: "%", note: "legacy platforms", trace: [28, 35, 39, 52, 57, 64] },
    { label: "Cryogenic storage stability", value: 88, target: 92, rangeStart: 66, rangeEnd: 95, unit: "%", note: "validated envelopes", trace: [45, 56, 68, 74, 83, 88] },
    { label: "Injector response confidence", value: 92, target: 94, rangeStart: 70, rangeEnd: 97, unit: "%", note: "hot-fire data", trace: [48, 62, 73, 85, 89, 92] },
  ],
}

hydrogen: {
  title: "H2 Hydrogen",
  summary: "Hydrogen programs require tight coordination between tankage, feed systems, ignition stability, and ultra-low-temperature operations.",
  bars: [
    { label: "Hydrogen-ready turbopumps", value: 86, target: 90, rangeStart: 62, rangeEnd: 93, unit: "%", note: "design maturity", trace: [30, 46, 60, 71, 79, 86] },
    { label: "LH2 feedline conditioning", value: 74, target: 82, rangeStart: 47, rangeEnd: 86, unit: "%", note: "ground systems", trace: [18, 29, 44, 58, 66, 74] },
    { label: "Ignition stability range", value: 93, target: 95, rangeStart: 72, rangeEnd: 98, unit: "%", note: "transient control", trace: [54, 68, 75, 84, 90, 93] },
    { label: "Zero-carbon flight pathway", value: 81, target: 87, rangeStart: 56, rangeEnd: 90, unit: "%", note: "program fit", trace: [24, 39, 55, 68, 76, 81] },
  ],
}
```

**Tab click behavior:**

1. On click, update `.is-active` class and `aria-selected` on all tab buttons.
2. Remove `.is-visible` from summary and `.is-ready` from chart.
3. After a 140ms delay:
   - Update summary text content.
   - Replace chart innerHTML with new chart-head, bars, and axis markup (using the dataset for the active tab).
   - On the next `requestAnimationFrame`, add `.is-visible` to summary and `.is-ready` to chart, triggering all staggered CSS animations.

---

## RESPONSIVE BREAKPOINTS

**At 980px:**
- Header becomes single column (`grid-template-columns: 1fr`).
- Tabs become flex row with `overflow-x: auto`. Each tab: `flex: 0 0 min(260px, 76vw)`.
- Bar rows become single column (`grid-template-columns: 1fr`, gap 10px).
- Axis becomes single column. Left label `<span>` hidden (`display: none`).

**At 620px:**
- H2 font: `clamp(26px, 8vw, 42px)`.
- Chart: min-height auto, padding-bottom 46px.
- Axis inner grid: `repeat(6, 1fr)` with every even `<span>` hidden (showing 0, 20, 40, 60, 80, 100).

---

## GLOBAL STYLES

**CSS custom property used:** `--hero-max-width: 1820px`, `--hero-blue: #7191d0`, `--hero-blue-soft: #aab8d5`.

**Font stack:** `"Geist", "Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` with `-webkit-font-smoothing: antialiased` and `text-rendering: geometricPrecision`.

**Color palette:** No purple or violet. Dark backgrounds `#111414` / `#171a1a`. Blue accents `#7191d0`, `#aab8d5`, `#8fb0ef`, `#d6e3ff`. Text `#f7f8f8` at various opacities.