**PROMPT:**

Build a dark, premium SaaS landing page hero section for a product called "Xero" — a data encryption service. Use React + TypeScript + Vite + Tailwind CSS + the `shaders` package (`shaders/react`) + `lucide-react`. Font: Inter (weights 300, 400, 500, 600, 700, 800) from Google Fonts.

---

**PAGE STRUCTURE:**

The page has a dark background (`#0a0a0f`) with 14px body padding. Everything is centered in a flex column. The structure is: Navbar > Hero Card > Brand Logos row.

---

**NAVBAR:**

- Full-width, max-width 1600px, using CSS Grid with 3 columns: `1fr auto 1fr`
- Left: Logo text "Xero" — font-size 1.05rem, weight 700, letter-spacing -0.01em, white
- Center: 3 navigation links ("Method", "Pricing", "Docs") — font-size 0.85rem, weight 400, color `#8888a8`, hover to white, 32px gap between links
- Right: Two buttons — "Login" (ghost pill: `rgba(255,255,255,0.06)` background, 1px border `rgba(255,255,255,0.08)`, white text, font-size 0.82rem, weight 500, border-radius 999px, padding 7px 18px) and "Sign Up" (solid white pill: white background, dark text `#0a0a0f`, font-size 0.82rem, weight 600, border-radius 999px, padding 7px 18px)
- Mobile (768px): Hamburger menu toggle (2 spans that animate into an X via translateY/rotate). Full-screen overlay menu slides in from right with `transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1)`. Links become 1.2rem centered vertically. Buttons become full-width stacked.

---

**HERO CARD:**

- Container: max-width 1600px, border-radius 20px, 1px border `rgba(255,255,255,0.07)`, `overflow: hidden`, position relative, background `#0d0b12`, padding `80px 40px 70px`, flex column centered, min-height 640px, text-align center.

**Layer 1 — Shader Background (z-index 0):**
Position absolute, inset 0, overflow hidden, border-radius 20px, pointer-events none, 100% width/height. Inner div and canvas forced to 100% width/height, position absolute inset 0.

Shader composition (from `shaders/react`):
```jsx
<Shader>
  <SolidColor color="#08071a" />
  <SineWave amplitude={0.36} blendMode="normal-oklch" color="#0582e8" frequency={0.2} position={{ x: 0.65, y: 0.67 }} softness={0.55} speed={0.3} thickness={0.72} />
  <SineWave amplitude={0.17} blendMode="normal-oklch" color="#f00e94" frequency={0.2} position={{ x: 0.6, y: 0.51 }} softness={0.54} speed={0.5} thickness={0.35} />
  <WaveDistortion angle={299} frequency={0.3} speed={0.2} strength={1} />
  <FilmGrain strength={0.07} />
</Shader>
```

**Layer 2 — Radial Gradient Arc (::before pseudo-element, z-index 0):**
A radial-gradient positioned at `circle at 50% -70%`:
- Transparent from 0-60%
- Gradually builds pink/magenta (`rgba(176, 48, 136, ...)`) from 63% to 79% with increasing opacity (0.03 to 0.82)
- Transitions to lighter pink at 85-87% (`rgba(210,70,175,0.92)`, `rgba(240,110,210,0.88)`)
- Near-white at 91-93% (`rgba(255,205,250,0.92)`, `rgba(255,240,255,0.98)`)
- Pure white at 95%
- Second radial gradient: `circle at 50% 35%`, `rgba(120, 40, 180, 0.08)` center, transparent at 50%

**Layer 3 — Grid Overlay (z-index 0):**
Position absolute inset 0. Background: two linear-gradients creating a 40px grid with `rgba(255,255,255,0.07)` 1px lines. Masked with `radial-gradient(circle at 50% -70%, transparent 60%, black 78%)` so the grid only shows where the arc glows.

---

**ICON PIPELINE (z-index 1, margin-bottom 52px):**

A horizontal row of 3 icon nodes connected by lines, with an animated beam traveling between them.

- **Left node** (46px circle, background `#1a1a24`): SVG layers/stack icon (polygon + 2 polylines). Neumorphic box-shadow. Dotted border ring (7px outset). Class `node-light-right` — has a `::before` pseudo with a radial-gradient highlight on the right side that fades in/out (opacity transition 0.3s) when `.active` class is toggled.

- **Center node** (64px circle, background `#1e1e2c`): Custom Xero "X" SVG logo (a circular pinwheel shape, white fill). Larger neumorphic shadows. Wrapped in a container with a `.splash` element — a 100px radial gradient circle (`rgba(255, 77, 200, 0.6)`) that animates scale 0.4 to 1.4 while fading out over 0.8s.

- **Right node** (46px circle): Shield icon with checkmark. Class `node-light-left` — same as left but highlight on the left side with a purple tint (`rgba(200, 100, 255, 0.5)`).

- **Connecting lines**: 160px wide, 1px height, gradient from `rgba(255,255,255,0.15)` to `rgba(255,255,255,0.07)` (reversed for right line).

- **Beam Animation** (requestAnimationFrame loop):
  - SVG overlay with a linearGradient (`#beam-gradient`): 5-stop gradient from transparent pink to white center to transparent purple.
  - Two `<path>` elements use refs — one for glow (strokeWidth 2, filter blur, opacity 0.6) and one crisp (strokeWidth 0.8).
  - Path coordinates computed dynamically from node positions via `getBoundingClientRect()`.
  - Animation states: `p1` (800ms, beam travels 0-50%, left node pulses active at 0-40%), `splash` (800ms pause, beam hidden, center splash animates), `p2` (800ms, beam travels 50-100%, right node activates at 60-100%), `idle` (1000ms pause). Loop repeats.
  - Beam position is controlled by shifting linearGradient x1/x2 attributes.

---

**HERO CONTENT (z-index 1, max-width 620px):**

- **Heading**: `<h1>` with text "The simple way" (weight 300, white) and `<strong>` block "encryption your data" (weight 400, gradient text: `linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0.6))` with background-clip text). Font-size: `clamp(2.4rem, 5.5vw, 4rem)`, line-height 1.1, letter-spacing -0.02em, margin-bottom 24px.

- **Subtitle**: "Fully managed data encrypting service and annotation platform for teams of all industries." — font-size 0.9rem, weight 400, line-height 1.6, color `rgba(255,255,255,0.4)`, max-width 440px, centered, margin-bottom 36px. Has a `<br>` after "annotation".

- **CTA Button**: "Get Started" — white background, dark text, font-size 0.88rem, weight 600, padding 12px 32px, border-radius 999px. Hover: opacity 0.9, translateY(-1px).

---

**BRAND LOGOS ROW (below hero card):**

- Flex row, centered, gap 64px, padding 32px 24px 10px, flex-wrap.
- 5 brand items: Expedia, asana, zenefits, HubSpot (with a superscript dot replacing the "o"), loom.
- Each: flex row, gap 10px, color `rgba(255,255,255,0.35)`, font-size 1.1rem, weight 500.
- Each has a simple 22px SVG icon in matching muted color (geometric/abstract representations, not actual brand logos).

---

**CSS VARIABLES:**
```
--bg: #0a0a0f
--surface: #111118
--text: #f0f0f5
--text-muted: #8888a8
--accent: #c8a0e0
--accent-pink: #b04090
--border: rgba(255, 255, 255, 0.08)
```

---

**RESPONSIVE BREAKPOINTS:**
- 860px: Pipeline lines shrink to 80px
- 768px: Body padding 10px, hamburger menu activates, hero card padding 60px 20px, pipeline margin-bottom 32px, nodes shrink (38px/52px), `<br>` tags hidden, brands gap 32px
- 480px: Hero card border-radius 16px, brands gap 24px

---

**DEPENDENCIES:**
```json
"shaders": "^2.5.124",
"lucide-react": "^0.344.0",
"react": "^18.3.1",
"react-dom": "^18.3.1",
"@supabase/supabase-js": "^2.57.4"
```

Tailwind CSS 3.4, Vite 5.4, TypeScript 5.5.