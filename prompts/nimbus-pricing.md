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

**Shared eyebrow style:**
```css
.eyebrow {
  margin: 0 0 16px;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.18;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
}
```

**Shared h2 base:**
```css
h2 {
  max-width: 920px;
  margin-bottom: 0;
  font-size: clamp(25px, 4vw, 52px);
  line-height: 1.08;
  letter-spacing: 0.005rem;
  font-weight: 400;
}
```

---

## Section: `.pricing-section`

`<section class="pricing-section" id="pricing" aria-labelledby="pricing-title">`

**Outer container:**
```css
.pricing-section {
  position: relative;
  min-height: auto;
  padding: clamp(72px, 9vw, 118px) clamp(20px, 5vw, 72px) 0;
  overflow: hidden;
  border-top: 1px solid rgba(255, 240, 199, 0.1);
  background:
    linear-gradient(180deg, rgba(255, 240, 199, 0.05), transparent 44%),
    #11120f;
}
```

**Cyan radial blur (decorative `::before`):**
```css
.pricing-section::before {
  content: "";
  position: absolute;
  top: -27vw;
  left: -21vw;
  z-index: 1;
  width: 69vw;
  height: 69vw;
  pointer-events: none;
  background: radial-gradient(
    circle,
    rgba(151, 211, 235, 0.14) 0%,
    rgba(151, 211, 235, 0.07) 34%,
    rgba(151, 211, 235, 0) 68%
  );
  filter: blur(22px);
}
```

---

### Part 1: `.pricing-top` (two-column grid: copy + table)

```html
<div class="pricing-top">
  <div class="pricing-copy">...</div>
  <div class="pricing-table" aria-label="Nimbus Grid pricing examples">...</div>
</div>
```

```css
.pricing-top {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: minmax(280px, 0.38fr) minmax(360px, 0.62fr);
  gap: clamp(42px, 8vw, 118px);
  max-width: 1320px;
  margin-inline: auto;
}
```

#### Left: `.pricing-copy`

```html
<div class="pricing-copy">
  <p class="eyebrow">Pricing</p>
  <h2 id="pricing-title">Only pay for cloud storage your teams actually use.</h2>
  <p>
    Scale capacity up for active projects and cool it down when workspaces go quiet.
    Nimbus Grid keeps storage, transfer, and policy costs visible before they become invoices.
  </p>
</div>
```

```css
.pricing-copy h2 {
  max-width: 560px;
  margin-bottom: 54px;
  font-size: clamp(34px, 4vw, 68px);
  line-height: 1;
}

.pricing-copy p:not(.eyebrow) {
  max-width: 470px;
  color: var(--muted);
  font-size: clamp(15px, 1.2vw, 19px);
  line-height: 1.55;
}
```

#### Right: `.pricing-table`

```html
<div class="pricing-table" aria-label="Nimbus Grid pricing examples">
  <div class="pricing-table-header">
    <h3>Storage costs</h3>
    <div class="billing-toggle" aria-label="Billing mode">
      <span>Per month</span>
      <strong>Per GiB</strong>
    </div>
  </div>
  <div class="pricing-row">
    <span>Encrypted active storage</span>
    <strong>$0.021 / GiB / month</strong>
  </div>
  <div class="pricing-row">
    <span>Warm collaboration tier</span>
    <strong>$0.012 / GiB / month</strong>
  </div>
  <div class="pricing-row">
    <span>Cold retained archive</span>
    <strong>$0.004 / GiB / month</strong>
  </div>
  <div class="pricing-row">
    <span>Regional accelerated transfer</span>
    <strong>$0.018 / GiB moved</strong>
  </div>
  <div class="pricing-row">
    <span>Customer-managed key vault</span>
    <strong>included</strong>
  </div>
</div>
```

```css
.pricing-table {
  display: grid;
  align-content: start;
  color: var(--muted);
}

.pricing-table-header,
.pricing-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 24px;
  border-bottom: 1px solid rgba(255, 247, 222, 0.2);
  padding: 18px 0;
}

.pricing-table-header {
  padding-top: 0;
}

.pricing-table h3 {
  margin-bottom: 0;
  color: var(--ink);
  font-size: clamp(20px, 1.7vw, 28px);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.0125rem;
}

.billing-toggle {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 999px;
  background: rgba(255, 247, 222, 0.1);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.02rem;
}

.billing-toggle span {
  padding-inline: 10px;
  color: rgba(255, 247, 222, 0.55);
}

.billing-toggle strong {
  padding: 7px 12px;
  border-radius: 999px;
  background: var(--accent);
  color: #241d0f;
  font-weight: 500;
}

.pricing-row span,
.pricing-row strong {
  font-size: clamp(14px, 1.2vw, 18px);
  font-weight: 400;
}

.pricing-row strong {
  color: var(--ink);
  font-family: var(--font-mono);
}
```

---

### Part 2: `.pricing-plan-row` (3 plan cards)

```html
<div class="pricing-plan-row">
  <div class="pricing-plan starter">
    <h3>Starter</h3>
    <p>For small teams consolidating shared project files.</p>
    <a href="#pricing">Start small</a>
  </div>
  <div class="pricing-plan team">
    <h3>Team</h3>
    <p>For departments scaling collaboration and regional transfer.</p>
    <a href="#pricing">Build team plan</a>
  </div>
  <div class="pricing-plan enterprise">
    <h3>Enterprise</h3>
    <p>For organizations prioritizing governance, residency, and support.</p>
    <a href="#plans">Talk to sales</a>
  </div>
</div>
```

```css
.pricing-plan-row {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(42px, 8vw, 120px);
  max-width: 1320px;
  margin: clamp(136px, 16vw, 224px) auto 0;
  padding-bottom: 6px;
}

.pricing-plan {
  width: min(300px, 100%);
  color: var(--ink);
}

.pricing-plan h3 {
  margin-bottom: 22px;
  font-size: clamp(20px, 1.8vw, 30px);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.0125rem;
}

.pricing-plan p {
  margin-bottom: 24px;
  color: var(--muted);
  line-height: 1.55;
}

.pricing-plan a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 0 18px;
  border: 1px solid rgba(255, 247, 222, 0.24);
  border-radius: 999px;
  color: var(--ink);
  background: rgba(255, 247, 222, 0.08);
  font-family: var(--font-mono);
  font-size: 12px;
  line-height: 1rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  transition: border-color 160ms ease, background 160ms ease;
}

.pricing-plan a:hover {
  border-color: rgba(255, 247, 222, 0.48);
  background: rgba(255, 247, 222, 0.14);
}
```

---

### Part 3: `.pricing-bars` (the golden bars at the bottom)

12 full-bleed vertical bars aligned to the bottom edge, with scroll-driven height animation.

```html
<div class="pricing-bars" aria-hidden="true">
  <div class="pricing-bar" style="--bar-height: 66%;"></div>
  <div class="pricing-bar muted" style="--bar-height: 58%;"></div>
  <div class="pricing-bar" style="--bar-height: 50%;"></div>
  <div class="pricing-bar muted" style="--bar-height: 62%;"></div>
  <div class="pricing-bar" style="--bar-height: 45%;"></div>
  <div class="pricing-bar muted" style="--bar-height: 54%;"></div>
  <div class="pricing-bar" style="--bar-height: 48%;"></div>
  <div class="pricing-bar muted" style="--bar-height: 64%;"></div>
  <div class="pricing-bar" style="--bar-height: 72%;"></div>
  <div class="pricing-bar muted" style="--bar-height: 70%;"></div>
  <div class="pricing-bar" style="--bar-height: 78%;"></div>
  <div class="pricing-bar muted" style="--bar-height: 82%;"></div>
</div>
```

Note the alternating pattern: regular, `.muted`, regular, `.muted`, etc. The 12 base heights are: `66%, 58%, 50%, 62%, 45%, 54%, 48%, 64%, 72%, 70%, 78%, 82%`.

```css
.pricing-bars {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  align-items: end;
  width: 100vw;
  height: 480px;
  margin-top: 36px;
  margin-left: calc(50% - 50vw);
}
```

**Fade overlay (dark gradient from top, fading bars into section background):**
```css
.pricing-bars::before {
  content: "";
  position: absolute;
  inset: -28% 0 0;
  z-index: -1;
  background: linear-gradient(
    180deg,
    rgba(17, 18, 15, 0),
    rgba(17, 18, 15, 0.78) 36%,
    #11120f 100%
  );
  pointer-events: none;
}
```

This `::before` covers the top ~28% above and the top portion of the bars container, creating the effect where the bars fade from the dark section background into visibility as they descend.

**Individual bar:**
```css
.pricing-bar {
  height: calc(var(--bar-height) + var(--bar-morph, 0px));
  min-height: 120px;
  background:
    radial-gradient(circle at 30% 18%, rgba(255, 247, 222, 0.32), transparent 26%),
    linear-gradient(180deg, rgba(234, 208, 154, 0.82), rgba(87, 76, 43, 0.42));
  box-shadow: inset 0 1px 0 rgba(255, 247, 222, 0.25);
  transition: height 80ms linear;
}

.pricing-bar.muted {
  background:
    radial-gradient(circle at 26% 20%, rgba(255, 247, 222, 0.24), transparent 28%),
    linear-gradient(180deg, rgba(201, 180, 124, 0.7), rgba(78, 69, 42, 0.38));
}
```

**Bar visual details:**
- Each bar has a gold gradient from top to bottom.
- A radial-gradient highlight near the top-left gives a specular/glow spot.
- `box-shadow: inset 0 1px 0` creates a subtle bright top edge.
- `.muted` bars use a slightly dimmer, cooler gold palette — giving the alternating light/dark bar pattern visible in the screenshot.
- Bars have no gap between them (the grid columns are flush).
- `min-height: 120px` ensures bars always have substance even at small percentages.

---

## JavaScript: Scroll-driven bar animation

```js
const pricingSection = document.querySelector(".pricing-section");
const pricingBars = Array.from(document.querySelectorAll(".pricing-bar"));

function updatePricingBars() {
  if (!pricingSection || !pricingBars.length) return;

  const rect = pricingSection.getBoundingClientRect();
  const viewport = window.innerHeight || 1;
  const progress = Math.min(1, Math.max(0,
    (viewport - rect.top) / (viewport + rect.height)
  ));

  pricingBars.forEach((bar, index) => {
    const wave = Math.sin(progress * Math.PI * 2 + index * 0.72);
    const secondaryWave = Math.cos(progress * Math.PI + index * 0.34);
    const morph = Math.round(wave * 34 + secondaryWave * 14);
    bar.style.setProperty("--bar-morph", `${morph}px`);
  });
}

window.addEventListener("scroll", updatePricingBars, { passive: true });
window.addEventListener("resize", updatePricingBars);
updatePricingBars();
```

**How the bar animation works:**
- `progress` is 0 when the section enters the bottom of the viewport, and approaches 1 as you scroll past.
- For each bar, two sinusoidal waves are computed, offset by the bar index (`index * 0.72` and `index * 0.34`).
- `wave * 34 + secondaryWave * 14` produces a morph offset in the range of roughly -48px to +48px.
- This value is written to `--bar-morph`, which is added to the base `--bar-height` via `calc()`.
- The `transition: height 80ms linear` smooths the per-frame jitter into a fluid wave.
- The result: bars gently undulate as you scroll, each offset from its neighbor, creating a rolling-wave effect across the 12 columns.

---

## Responsive Breakpoints

### `@media (max-width: 820px)`

```css
.pricing-section {
  padding-top: 64px;
}

.pricing-top {
  grid-template-columns: 1fr;
  gap: 38px;
}

.pricing-copy h2 {
  margin-bottom: 28px;
}

.pricing-table-header,
.pricing-row {
  grid-template-columns: 1fr;
  gap: 8px;
}

.pricing-bars {
  height: 480px;
}

.pricing-plan-row {
  grid-template-columns: 1fr;
  gap: 28px;
  margin-top: 48px;
}
```

At 820px: Pricing top stacks to single column (copy above table). Table rows become single column (label above value). Plan cards stack vertically. Bars stay at 480px.

### `@media (max-width: 520px)`

```css
.pricing-bars {
  height: 480px;
}

.pricing-plan {
  width: min(280px, 100%);
}

.eyebrow {
  font-size: 12px;
}
```

At 520px: Plan card max-width narrows. Eyebrow shrinks. Bars remain 480px.

---

## Project structure

```
index.html       (section markup + font links)
styles.css       (all styles + media queries)
script.js        (scroll-driven bar morph)
package.json     (vite ^5.4.2, "type": "module", scripts: dev/build/preview)
vite.config.js   (default export)
```