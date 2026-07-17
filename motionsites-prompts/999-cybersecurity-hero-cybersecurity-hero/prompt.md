# Cybersecurity Hero

## Metadata

- Source: https://motionsites.ai/
- Prompt ID: `cybersecurity-hero`
- Title: Cybersecurity Hero
- Category: Hero
- Type: hero
- Types: 
- Page type: hero
- Sort order: 999
- Free in site metadata: yes
- Fetch status: fetched

## Preview Assets

- Video: https://stream.mux.com/02UEPE3F00WgHUukugHlZDQfLYL7D691esS00MqeG02GYGQ.m3u8

## Full Prompt

````
Build a **single-page React + TypeScript (Vite)** landing hero for a product called **"Xero"** that recreates the following section exactly. Use the **Inter** Google Font (weights 300, 400, 500, 600, 700, 800). Do not use Tailwind utility classes for the hero — write plain CSS in a global stylesheet. No purple/indigo branding outside the specified pink-magenta gradient arc.

## Layout & Structure

Render three top-level blocks centered on a black page (`#0a0a0f`), each constrained to `max-width: 1600px`, in this vertical order:

1. **`<nav>`** — sticky-style top bar (not actually sticky, just at top)
2. **`<section class="hero-card">`** — the rounded dark hero card with the animated icon pipeline
3. **`<div class="brands">`** — a row of 5 monochrome brand logos

The body uses `display: flex; flex-direction: column; align-items: center; padding: 14px;` and `font-family: 'Inter', sans-serif;`.

### CSS Variables (on `:root`)
```
--bg: #0a0a0f;
--surface: #111118;
--text: #f0f0f5;
--text-muted: #8888a8;
--accent: #c8a0e0;
--accent-pink: #b04090;
--border: rgba(255, 255, 255, 0.08);
```

## NAVBAR

- Grid layout: `grid-template-columns: 1fr auto 1fr; padding: 12px 24px; margin-bottom: 14px;`
- **Left**: `<span class="nav-logo">Xero</span>` — `font-size: 1.05rem; font-weight: 700; letter-spacing: -0.01em;`
- **Center**: `<ul class="nav-links">` with three `<a>` items: **Method**, **Pricing**, **Docs**. Color `--text-muted`, `font-size: 0.85rem`, gap 32px, hover transitions to `--text` over 0.2s.
- **Right**: `<div class="nav-actions">` containing two pill buttons:
  - `.btn-login` — `rgba(255,255,255,0.06)` bg, 1px border `--border`, white text, padding `7px 18px`, `border-radius: 999px`, `font-size: 0.82rem`, `font-weight: 500`. Hover: bg `rgba(255,255,255,0.12)`.
  - `.btn-signup` — solid white bg, black `#0a0a0f` text, same dimensions, `font-weight: 600`. Hover: `opacity: 0.88`.
- The `.nav-menu` wrapper uses `display: contents` on desktop so the `ul` and actions become direct grid children.

### Mobile (≤ 768px)
- Nav becomes flex with space-between.
- A `.menu-toggle` hamburger appears: 24×14 button with two 2px-tall white spans. When `.active`, span 1 rotates `translateY(6px) rotate(45deg)` and span 2 rotates `translateY(-6px) rotate(-45deg)` to form an X.
- `.nav-menu.active` slides in from `right: -100%` to `right: 0` over 0.4s `cubic-bezier(0.4, 0, 0.2, 1)` as a full-screen `var(--bg)` overlay with column-stacked links and full-width buttons.
- Toggling sets `document.body.style.overflow = 'hidden'`.

## HERO CARD

Outer `.hero-card` styles:
- `width: 100%; max-width: 1600px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.07); overflow: hidden; position: relative; background: #0d0b12; padding: 80px 40px 70px; min-height: 640px;`
- `display: flex; flex-direction: column; align-items: center; text-align: center;`

### `::before` Gradient Arc (the signature visual)
A radial gradient positioned at `50% -70%` with **many manually-tuned stops** producing a smooth dark→pink→white arc near the top:
```
background:
  radial-gradient(circle at 50% -70%,
    transparent 60%,
    rgba(176,48,136,0.03) 63%,
    rgba(176,48,136,0.08) 65%,
    rgba(176,48,136,0.16) 67%,
    rgba(176,48,136,0.28) 69%,
    rgba(176,48,136,0.40) 71%,
    rgba(176,48,136,0.52) 73%,
    rgba(176,48,136,0.64) 75%,
    rgba(176,48,136,0.74) 77%,
    rgba(176,48,136,0.82) 79%,
    rgba(210,70,175,0.92) 85%,
    rgba(240,110,210,0.88) 87%,
    rgba(255,205,250,0.92) 91%,
    rgba(255,240,255,0.98) 93%,
    #ffffff 95%),
  radial-gradient(circle at 50% 35%, rgba(120,40,180,0.08) 0%, transparent 50%);
z-index: 0; pointer-events: none;
```

### `.hero-grid` Overlay
A separate absolutely-positioned div with crosshatch grid:
```
background-image:
  linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px);
background-size: 40px 40px;
mask-image: radial-gradient(circle at 50% -70%, transparent 60%, black 78%);
```
This makes the grid only visible inside the arc area.

## ICON PIPELINE (the animated centerpiece)

Container `.icon-pipeline`: `position: relative; display: flex; align-items: center; justify-content: center; max-width: 700px; margin-bottom: 52px; z-index: 1;`

Children in this exact order:

1. **`<svg class="beam-svg">`** — absolutely-positioned over the whole pipeline (`overflow: visible`), containing:
   - A `<filter id="glow">` with `feGaussianBlur stdDeviation="2"` then `feComposite ... operator="over"`.
   - A `<linearGradient id="beam-gradient" gradientUnits="userSpaceOnUse">` with stops:
     - `0%` `#b04090` opacity 0
     - `20%` `#b04090` opacity 0.8
     - `50%` `#fff` opacity 1
     - `80%` `#c8a0e0` opacity 0.8
     - `100%` `#c8a0e0` opacity 0
   - Two `<path>` elements both stroked with `url(#beam-gradient)`:
     - Glow path: `stroke-width="2"`, `filter="url(#glow)"`, `opacity: 0.6`.
     - Core path: `stroke-width="0.8"`.

2. **Left node** `.icon-node.node-light-right` (id `node-stack`) — Lucide-style **layers** SVG (3 stacked diamonds): `<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>`.

3. **`.pipeline-line`** — `width: 160px; height: 1px;` linear gradient `90deg, rgba(255,255,255,0.15), rgba(255,255,255,0.07)`.

4. **Center wrapper** with `position: relative;` containing:
   - **`.splash`** — 100×100 absolutely centered, `border-radius: 50%`, `background: radial-gradient(circle, rgba(255,77,200,0.6) 0%, transparent 70%)`, initial `opacity: 0; transform: scale(0.4); z-index: 2;`
   - **`.icon-node-center`** (id `node-x`) — 64×64 round, `background: #1e1e2c`, neumorphic shadow (see below), containing the **Xero "X" logoipsum** SVG (`viewBox="0 0 40 40"`) — the multi-cut path provided in the source.

5. **`.pipeline-line.right`** — same 160×1 line, gradient reversed.

6. **Right node** `.icon-node.node-light-left` (id `node-shield`) — Lucide-style **shield-check** SVG: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>`.

### Side Node Styling
`.icon-node`: 46×46 round, `background: #1a1a24`, `cursor: pointer`, `z-index: 3`, with **neumorphic** shadow stack:
```
box-shadow:
  6px 6px 12px rgba(0,0,0,0.4),
  -4px -4px 10px rgba(255,255,255,0.03),
  inset 1px 1px 1px rgba(255,255,255,0.05),
  inset 4px 4px 8px rgba(0,0,0,0.4);
```
Plus an `::after` dotted outer ring at `inset: -7px` (`border: 1px dotted #1a1a24`).
Hover: `translateY(-1px)` and stronger shadows. Active: inset-only shadows.
Inner SVG: 20×20, stroke `rgba(255,255,255,0.7)`, `stroke-width: 1.5`, fill none, round caps.

### Center Node Styling
`.icon-node-center`: 64×64, `background: #1e1e2c`, similar but stronger neumorphic shadow:
```
8px 8px 16px rgba(0,0,0,0.5),
-6px -6px 14px rgba(255,255,255,0.04),
inset 1px 1px 2px rgba(255,255,255,0.06),
inset 6px 6px 12px rgba(0,0,0,0.5);
```
Inner Xero SVG: 28×28, `fill: white`.

### Side-Light Glows
- `.node-light-right::before` — half-circle radial glow on the right side: `radial-gradient(circle at right, rgba(200,200,200,0.45) 0%, transparent 70%)`, `opacity: 0` default, `opacity: 1` when `.active` (300ms transition).
- `.node-light-left::before` — same but on left, color `rgba(200,100,255,0.5)`.

### Splash Keyframe
```
@keyframes splash-anim {
  0%   { transform: scale(0.4); opacity: 0.8; }
  40%  { opacity: 0.6; }
  100% { transform: scale(1.4); opacity: 0; }
}
```
Triggered by adding `.animate` (0.8s ease-out forwards).

## BEAM ANIMATION (JavaScript / requestAnimationFrame)

Implement a state machine with four phases. On mount and on every window `resize`, recompute the SVG path:

```
const pRect = pipeline.getBoundingClientRect();
const sRect = nodeStack.getBoundingClientRect();
const xRect = nodeX.getBoundingClientRect();
const shRect = nodeShield.getBoundingClientRect();
const startX = sRect.left + sRect.width/2 - pRect.left;
const startY = sRect.top  + sRect.height/2 - pRect.top;
// midX/midY from nodeX, endX/endY from nodeShield
const d = `M ${startX},${startY} L ${midX},${midY} L ${endX},${endY}`;
```
Set this `d` on **both** beam paths.

The gradient is animated by mutating `x1` / `x2` of `#beam-gradient` (in `userSpaceOnUse`) so the bright window slides along. Use `halfWidth = 5` (percentage units), `center = percentage * 100`:
```
gradient.x1 = (center - 5) + '%'
gradient.x2 = (center + 5) + '%'
y1 = y2 = '0%'
```

State machine in a `requestAnimationFrame` loop, tracking `lastStateChange` timestamp:

| State | Duration | Behavior |
|---|---|---|
| **`p1`** | 800 ms | `percentage` interpolates `0 → 0.5`. While `p < 0.4`, add `.active` to `node-stack`; remove after. At end: switch to `splash`, hide both beam paths (`opacity: 0`), add `.animate` to splash. |
| **`splash`** | 800 ms | Wait. After elapsed: switch to `p2`, remove `.animate`, restore `opacity: 1` on both beam paths. |
| **`p2`** | 800 ms | `percentage` interpolates `0.5 → 1.0`. While `p > 0.6`, add `.active` to `node-shield`. At end: remove `.active`, switch to `idle`. |
| **`idle`** | 1000 ms | Wait, then loop back to `p1`. |

Total cycle ≈ 3.4 seconds, infinite.

## HERO TEXT

`.hero-content` `max-width: 620px; z-index: 1;`

```html
<h1 class="hero-heading">
  The simple way
  <strong>encryption your data</strong>
</h1>
<p class="hero-sub">
  Fully managed data encrypting service and annotation<br>
  platform for teams of all industries.
</p>
<a href="#" class="btn-cta">Get Started</a>
```

- `.hero-heading`: `font-size: clamp(2.4rem, 5.5vw, 4rem); font-weight: 300; line-height: 1.1; letter-spacing: -0.02em;`
- `.hero-heading strong`: `display: block; font-weight: 400; margin-top: 4px;` with `background: linear-gradient(to right, #ffffff, #a98597); -webkit-background-clip: text; -webkit-text-fill-color: transparent;`
- `.hero-sub`: 0.9rem, `rgba(255,255,255,0.4)`, `max-width: 440px`, `margin: 0 auto 36px`.
- `.btn-cta`: white pill, black text, `padding: 12px 32px; border-radius: 999px; font-weight: 600;`. Hover: `opacity: 0.9; translateY(-1px)`.

## BRANDS ROW

`.brands`: flex row, `gap: 64px; padding: 32px 24px 10px; flex-wrap: wrap; justify-content: center;`

Five `.brand-item` blocks (each: flex, gap 10, color `rgba(255,255,255,0.35)`, font-size 1.1rem, font-weight 500, white-space nowrap, with a 22×22 SVG):

1. **Expedia** — `<circle cx=12 cy=12 r=10 fill=current /><path fill="var(--bg)" d="M8 9h8v2H8zm0 4h6v2H8z"/>` then text `Expedia`.
2. **asana** — three filled circles: `(12,7,r=4)`, `(5,16,r=3.5)`, `(19,16,r=3.5)`, text `asana`.
3. **zenefits** — three stroked horizontal polylines (lengths 16/8/16) at y=8/12/16, text `zenefits`.
4. **HubSpot** — small filled circle `(15.5,8.5,r=2.5)`, stroked circle `(8.5,8.5,r=2)`, paths connecting them; text `HubSp<span class="hubspot-dot"></span>t` where `.hubspot-dot` is a 6×6 round superscript dot.
5. **loom** — circle `(12,12,r=9)` plus vertical/horizontal/diagonal stroke lines forming a globe-with-X, text `loom`.

## Responsive Breakpoints

- `≤ 860px`: pipeline `gap: 0; margin-bottom: 40px;` `.pipeline-line { width: 80px }`.
- `≤ 768px`: enable mobile hamburger menu, `.icon-node` shrinks to 38×38, `.icon-node-center` to 52×52, `.hero-card { padding: 60px 20px 60px; min-height: auto }`, `.brands { gap: 32px }`.
- `≤ 480px`: `.hero-card { border-radius: 16px }`, `.brands { gap: 24px }`.

## Z-Index Stack (critical for splash/beam layering)

- `0` — gradient arc + grid overlay
- `1` — pipeline container, hero text
- `2` — beam SVG, splash
- `3` — all icon nodes
- `4` — node side-light glows
- `1000-1001` — mobile nav overlay and toggle

Implement all of the above exactly. Use `useRef` for the pipeline, the three nodes, both beam paths, the gradient, and the splash. Use one `useEffect` to set up the resize listener and the `requestAnimationFrame` loop, and clean both up on unmount.
````
