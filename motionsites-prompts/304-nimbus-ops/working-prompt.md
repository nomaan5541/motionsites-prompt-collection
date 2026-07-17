---

# Prompt to Recreate the Nimbus Grid Operations Section (Standalone)

Build a standalone single-section page: the "Operations" section from Nimbus Grid — the one with the eyebrow "Operations", heading "A control layer for every storage move your business makes.", and the interactive 3D exploding cube. Use plain HTML, CSS, and vanilla JS (Vite project, no frameworks). Match every detail below exactly.

---

## Global Setup

**Fonts (Google Fonts, preconnect both `fonts.googleapis.com` and `fonts.gstatic.com`):**
- `IBM Plex Sans` weights 400, 500
- `IBM Plex Mono` weights 400, 500

**CSS variables on `:root`:**
```css
:root {
  color-scheme: dark;
  --bg: #17130d;
  --ink: #fff4d5;
  --muted: #dacaa1;
  --line: rgba(255, 240, 199, 0.28);
  --glass: rgba(255, 239, 199, 0.16);
  --glass-strong: rgba(255, 239, 199, 0.24);
  --accent: #ead09a;
  --accent-2: #ffd879;
  --deep: #4d3f24;
  --radius: 8px;
  --font-sans: "IBM Plex Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-mono: "IBM Plex Mono", "SF Mono", ui-monospace, monospace;
}
```

**Resets:** Universal `box-sizing: border-box`. `html { scroll-behavior: smooth; }`. Body: `margin: 0`, background `var(--bg)`, color `var(--ink)`, `font-family: var(--font-sans)`, `font-size: 1rem`, `font-weight: 400`, `line-height: 1.375`, `letter-spacing: 0.0175rem`, antialiased. Anchors: `color: inherit; text-decoration: none;`. All headings/paragraphs: `margin-top: 0`.

---

## Color Theme Note

This section uses a **dual-palette**: the left copy column uses the warm gold theme (`var(--accent)`, `var(--ink)`), while the right visual area blends gold and cyan (`rgba(151, 211, 235, ...)`, `rgba(234, 208, 154, ...)`). The background itself mixes both palettes.

---

## Section: `.operations-cubes`

`<section class="operations-cubes" id="operations" aria-labelledby="operations-title">`

**Outer container:**
```css
.operations-cubes {
  position: relative;
  min-height: 96svh;
  padding: clamp(84px, 9vw, 132px) clamp(20px, 5vw, 72px);
  overflow: hidden;
  border-top: 1px solid rgba(255, 240, 199, 0.1);
  background:
    radial-gradient(circle at 74% 42%, rgba(151, 211, 235, 0.16), transparent 25rem),
    radial-gradient(circle at 22% 78%, rgba(255, 216, 121, 0.13), transparent 24rem),
    #0c0d0a;
}
```

Background is a dark olive-black (`#0c0d0a`) with a cyan radial glow at upper-right and a warm gold glow at lower-left.

**Overlay gradient (`::before`) — fogs the left side to make copy readable over the visual:**
```css
.operations-cubes::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(90deg, rgba(12, 13, 10, 0.94) 0%, rgba(12, 13, 10, 0.68) 42%, rgba(12, 13, 10, 0.08) 100%),
    linear-gradient(180deg, rgba(255, 247, 222, 0.05), transparent 34%);
}
```

This is a left-to-right fog: nearly opaque on the left (where the copy sits), fading to nearly transparent on the right (where the cube visual lives). Plus a very subtle top-to-bottom warm glow.

---

### Layout: `.operations-inner`

```html
<div class="operations-inner">
  <div class="operations-copy">...</div>
  <div class="operations-visual">...</div>
</div>
```

```css
.operations-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(280px, 0.44fr) minmax(420px, 0.56fr);
  gap: clamp(44px, 7vw, 108px);
  align-items: center;
  width: min(100%, 1320px);
  min-height: calc(96svh - clamp(168px, 18vw, 264px));
  margin-inline: auto;
}
```

Two-column grid: 44% copy on the left, 56% visual on the right. Vertically centered.

---

### Left: `.operations-copy`

```html
<div class="operations-copy">
  <p class="eyebrow">Operations</p>
  <h2 id="operations-title">A control layer for every storage move your business makes.</h2>
  <p>
    Route migrations, active workspaces, archives, and compliance exports through one operational grid.
    Nimbus Grid keeps capacity, policy, and transfer status visible before teams hit a limit.
  </p>
  <a class="operations-cta" href="#plans">Plan operations</a>
</div>
```

```css
.operations-copy h2 {
  max-width: 740px;
  margin-bottom: 26px;
  font-size: clamp(34px, 4.4vw, 72px);
  line-height: 0.98;
}

.operations-copy p:not(.eyebrow) {
  max-width: 560px;
  margin-bottom: 34px;
  color: rgba(255, 244, 213, 0.76);
  font-size: clamp(16px, 1.25vw, 20px);
  line-height: 1.58;
}
```

**CTA button (`.operations-cta`) — gold filled button, dark text:**
```css
.operations-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 20px;
  border: 1px solid rgba(255, 247, 222, 0.32);
  border-radius: var(--radius);
  color: #1b160d;
  background: var(--accent);
  font-family: var(--font-mono);
  font-size: 12px;
  line-height: 1rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  transition: background 160ms ease, transform 160ms ease;
}

.operations-cta:hover {
  background: var(--accent-2);
  transform: translateY(-2px);
}
```

This is the only filled/solid CTA on the page — gold background with dark text. On hover it brightens to `--accent-2` and lifts 2px.

---

### Right: `.operations-visual` (the 3D exploding cube)

This is the most complex visual element: a CSS 3D cube with 6 faces, surrounded by particle fragments that explode outward on click.

```html
<div class="operations-visual">
  <button class="modal-cube-shell" type="button" aria-label="Explode storage operations cube">
    <!-- 10 rectangular particles -->
    <span class="cube-particle" style="--tx: -210px; --ty: -132px; --tz: 80px; --s: 0.42; --r: -18deg; --d: 0ms;"></span>
    <span class="cube-particle" style="--tx: -122px; --ty: -188px; --tz: 140px; --s: 0.34; --r: 12deg; --d: 28ms;"></span>
    <span class="cube-particle" style="--tx: 156px; --ty: -170px; --tz: 120px; --s: 0.38; --r: -8deg; --d: 46ms;"></span>
    <span class="cube-particle" style="--tx: 252px; --ty: -88px; --tz: 50px; --s: 0.52; --r: 18deg; --d: 72ms;"></span>
    <span class="cube-particle" style="--tx: -262px; --ty: 4px; --tz: 100px; --s: 0.5; --r: 22deg; --d: 98ms;"></span>
    <span class="cube-particle" style="--tx: -174px; --ty: 104px; --tz: 40px; --s: 0.36; --r: -32deg; --d: 118ms;"></span>
    <span class="cube-particle" style="--tx: 188px; --ty: 86px; --tz: 150px; --s: 0.44; --r: 28deg; --d: 140ms;"></span>
    <span class="cube-particle" style="--tx: 280px; --ty: 162px; --tz: 78px; --s: 0.58; --r: -16deg; --d: 168ms;"></span>
    <span class="cube-particle" style="--tx: -42px; --ty: -228px; --tz: 210px; --s: 0.26; --r: 34deg; --d: 188ms;"></span>
    <span class="cube-particle" style="--tx: 62px; --ty: 224px; --tz: 175px; --s: 0.32; --r: -24deg; --d: 210ms;"></span>

    <!-- 4 dot (circular) particles -->
    <span class="cube-particle dot" style="--tx: -308px; --ty: -92px; --tz: 40px; --s: 0.12; --d: 24ms;"></span>
    <span class="cube-particle dot" style="--tx: 326px; --ty: -8px; --tz: 90px; --s: 0.1; --d: 84ms;"></span>
    <span class="cube-particle dot" style="--tx: -238px; --ty: 198px; --tz: 30px; --s: 0.11; --d: 126ms;"></span>
    <span class="cube-particle dot" style="--tx: 142px; --ty: -246px; --tz: 70px; --s: 0.09; --d: 164ms;"></span>

    <!-- The main cube -->
    <span class="operations-core-cube">
      <span class="cube-face cube-face-front"></span>
      <span class="cube-face cube-face-back"></span>
      <span class="cube-face cube-face-right"></span>
      <span class="cube-face cube-face-left"></span>
      <span class="cube-face cube-face-top"></span>
      <span class="cube-face cube-face-bottom"></span>
    </span>
  </button>
</div>
```

**Custom properties per particle (set via inline style):**
- `--tx`, `--ty`, `--tz`: 3D translation offset when exploded
- `--s`: scale factor when exploded
- `--r`: rotation angle when exploded (rectangular particles only)
- `--d`: stagger delay for the explosion transition

#### Visual container

```css
.operations-visual {
  position: relative;
  min-height: min(58vw, 620px);
}

.operations-visual::before {
  content: "";
  position: absolute;
  inset: 8% -14% 0;
  background: radial-gradient(ellipse at center, rgba(234, 208, 154, 0.18), rgba(151, 211, 235, 0.08) 34%, transparent 68%);
  filter: blur(24px);
}
```

A diffuse glow behind the cube — gold at center, fading to cyan, then transparent. Blurred for a soft halo.

#### Button shell

```css
.modal-cube-shell {
  position: absolute;
  inset: 0;
  width: 100%;
  min-height: inherit;
  border: 0;
  padding: 0;
  color: inherit;
  background: transparent;
  cursor: pointer;
  perspective: 1000px;
  transform-style: preserve-3d;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}

.modal-cube-shell:focus-visible {
  outline: 1px solid rgba(255, 247, 222, 0.72);
  outline-offset: 10px;
}
```

The entire visual area is a `<button>` so the cube is clickable. `perspective: 1000px` enables 3D rendering for children.

#### Core cube (6-face CSS cube)

```css
.operations-core-cube,
.cube-particle {
  --cube-size: clamp(142px, 18vw, 250px);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--cube-size);
  height: var(--cube-size);
  transform-style: preserve-3d;
}

.operations-core-cube {
  transform: translate(-50%, -48%) rotateX(-16deg) rotateY(34deg) rotateZ(0deg);
  animation: core-cube-float 6s ease-in-out infinite;
  transition: transform 620ms cubic-bezier(0.2, 0.8, 0.2, 1), filter 620ms ease;
  filter: drop-shadow(0 34px 62px rgba(0, 0, 0, 0.48));
}
```

The cube is centered in the visual area and rotated to show 3 faces (front, right, top) via `rotateX(-16deg) rotateY(34deg)`. It gently floats via the `core-cube-float` animation.

**Float animation:**
```css
@keyframes core-cube-float {
  0%, 100% {
    transform: translate(-50%, -48%) rotateX(-16deg) rotateY(34deg) translateY(0);
  }
  50% {
    transform: translate(-50%, -52%) rotateX(-14deg) rotateY(38deg) translateY(-10px);
  }
}
```

Subtle breathing: the cube drifts 10px upward and rotates slightly at midpoint, then returns. 6-second cycle.

**Exploded state (when `.is-exploded` class is on the shell):**
```css
.modal-cube-shell.is-exploded .operations-core-cube {
  transform: translate(-50%, -46%) rotateX(-14deg) rotateY(42deg) rotateZ(0deg) scale(0.72);
  filter: drop-shadow(0 18px 44px rgba(0, 0, 0, 0.38));
  animation: none;
}
```

On click, the core cube shrinks to 72%, rotates slightly further, and stops floating.

#### Cube faces

```css
.cube-face {
  position: absolute;
  inset: 0;
  border: 1px solid rgba(255, 247, 222, 0.18);
  border-radius: 18px;
  background:
    radial-gradient(circle at 48% 44%, rgba(255, 216, 121, 0.98) 0 11%, rgba(255, 216, 121, 0.32) 22%, transparent 48%),
    radial-gradient(circle at 18% 15%, rgba(255, 247, 222, 0.92), transparent 30%),
    linear-gradient(135deg, rgba(151, 211, 235, 0.46), rgba(234, 208, 154, 0.78) 38%, rgba(43, 35, 19, 0.92) 100%);
  box-shadow:
    inset 0 2px 6px rgba(255, 247, 222, 0.38),
    inset -22px -28px 36px rgba(0, 0, 0, 0.34),
    inset 18px 12px 28px rgba(151, 211, 235, 0.18);
  opacity: 0.98;
  backface-visibility: hidden;
}
```

Each face has rounded corners (18px), a complex layered background (gold hotspot center, bright highlight top-left, cyan-to-gold-to-dark diagonal gradient), and multiple inset shadows for depth. `backface-visibility: hidden` prevents rendering the back side.

**Face transforms (standard CSS cube):**
```css
.cube-face-front  { transform: translateZ(calc(var(--cube-size) / 2)); }
.cube-face-back   { transform: rotateY(180deg) translateZ(calc(var(--cube-size) / 2)); }
.cube-face-right  { transform: rotateY(90deg) translateZ(calc(var(--cube-size) / 2)); }
.cube-face-left   { transform: rotateY(-90deg) translateZ(calc(var(--cube-size) / 2)); }
.cube-face-top    { transform: rotateX(90deg) translateZ(calc(var(--cube-size) / 2)); }
.cube-face-bottom { transform: rotateX(-90deg) translateZ(calc(var(--cube-size) / 2)); }
```

#### Particles (scattered fragments)

There are 14 particles total: 10 rectangular (`cube-particle`) and 4 circular (`cube-particle dot`).

**Default state (collapsed — hidden inside/behind the cube):**
```css
.cube-particle {
  --cube-size: clamp(72px, 8vw, 116px);
  opacity: 0;
  transform: translate(-50%, -48%) rotateX(-16deg) rotateY(34deg) scale(0.12);
  transition:
    opacity 420ms ease var(--d),
    transform 760ms cubic-bezier(0.17, 0.78, 0.18, 1) var(--d),
    filter 760ms ease var(--d);
  filter: blur(4px) brightness(0.7);
}
```

Particles start invisible, tiny (scale 0.12), blurred, and dimmed. Each transition is staggered by `--d` (0ms to 210ms).

**Particle appearance (two pseudo-elements create a layered shard):**
```css
.cube-particle::before,
.cube-particle::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 9px;
}

.cube-particle::before {
  background:
    radial-gradient(circle at 48% 44%, rgba(255, 216, 121, 0.9), transparent 36%),
    linear-gradient(135deg, rgba(255, 247, 222, 0.42), rgba(234, 208, 154, 0.76) 42%, rgba(26, 28, 20, 0.88));
  box-shadow: inset 0 1px 4px rgba(255, 247, 222, 0.4), 0 20px 44px rgba(0, 0, 0, 0.36);
}

.cube-particle::after {
  inset: 10%;
  border: 1px solid rgba(255, 247, 222, 0.14);
  background:
    linear-gradient(90deg, rgba(151, 211, 235, 0.28), transparent 42%),
    linear-gradient(180deg, rgba(255, 247, 222, 0.26), transparent 48%);
}
```

`::before` is the main body (gold-highlighted shard). `::after` is a smaller inset overlay (10% padding) with a cyan-to-transparent gradient and a faint border — adding a glass-like inner surface.

**Dot particles (circular):**
```css
.cube-particle.dot {
  --cube-size: clamp(48px, 5vw, 74px);
}

.cube-particle.dot::before,
.cube-particle.dot::after {
  border-radius: 50%;
}
```

Same as rectangular particles but smaller and fully round.

**Exploded state:**
```css
.modal-cube-shell.is-exploded .cube-particle {
  opacity: 1;
  transform:
    translate(-50%, -48%)
    translate3d(calc(var(--tx) * var(--spread, 1)), calc(var(--ty) * var(--spread, 1)), calc(var(--tz) * var(--spread, 1)))
    rotateX(-16deg)
    rotateY(34deg)
    rotateZ(var(--r, 0deg))
    scale(var(--s));
  filter: blur(0) brightness(1);
}
```

On explosion: each particle flies to its `--tx/--ty/--tz` position (multiplied by `--spread` for responsive scaling), rotates by `--r`, scales to `--s`, becomes fully visible, and unblurs. The staggered `--d` delay creates a cascading burst effect.

---

## JavaScript: Toggle explode on click

```js
const operationsCube = document.querySelector(".modal-cube-shell");

if (operationsCube) {
  const toggleCube = () => operationsCube.classList.toggle("is-exploded");

  operationsCube.addEventListener("click", toggleCube);
  operationsCube.addEventListener("keydown", (event) => {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      toggleCube();
    }
  });
}
```

Click or press Enter/Space toggles the `.is-exploded` class. All animation is CSS transition-driven — JS just toggles the class. First click explodes, second click implodes (particles fly back to center).

---

## Responsive Breakpoints

### `@media (max-width: 820px)`

```css
.operations-cubes {
  min-height: auto;
  padding-block: 76px;
}

.operations-inner {
  grid-template-columns: 1fr;
  gap: 42px;
  min-height: 0;
}

.operations-cubes::before {
  background:
    linear-gradient(180deg, rgba(12, 13, 10, 0.9) 0%, rgba(12, 13, 10, 0.62) 54%, rgba(12, 13, 10, 0.18) 100%),
    linear-gradient(180deg, rgba(255, 247, 222, 0.05), transparent 34%);
}

.operations-visual {
  min-height: 460px;
}

.modal-cube-shell {
  --spread: 0.72;
}
```

At 820px: Stacks to single column (copy above visual). The overlay gradient changes from left-to-right to top-to-bottom. Particles spread at 72% of their desktop distance. Visual min-height reduces.

### `@media (max-width: 520px)`

```css
.operations-cubes {
  padding: 64px 18px;
}

.operations-copy h2 {
  font-size: clamp(32px, 9vw, 48px);
}

.operations-copy p:not(.eyebrow) {
  font-size: 15px;
}

.operations-visual {
  min-height: 360px;
}

.modal-cube-shell {
  --spread: 0.48;
}
```

At 520px: Even tighter padding. Heading scales down. Particles spread at 48% distance. Visual shrinks to 360px.

---

## Project structure

```
index.html       (section markup + font links)
styles.css       (all styles + media queries + keyframes)
script.js        (click-to-explode toggle)
package.json     (vite ^5.4.2, "type": "module", scripts: dev/build/preview)
vite.config.js   (default export)
```

No images, no frameworks, no 3D libraries. The entire cube is pure CSS `transform-style: preserve-3d` with 6 positioned faces. Particles are CSS pseudo-elements with staggered transitions. The only JS is a single class toggle.