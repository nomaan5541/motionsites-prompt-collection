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

**Shared h3 base:**
```css
h3 {
  margin-bottom: 14px;
  font-size: 24px;
  line-height: 1.2;
  letter-spacing: 0.0125rem;
  font-weight: 400;
}
```

---

## Section: `.security-section`

`<section class="security-section" id="security" aria-labelledby="security-title">`

**Outer container:**
```css
.security-section {
  padding: clamp(72px, 8vw, 116px) clamp(20px, 5vw, 72px);
  border-top: 1px solid rgba(255, 240, 199, 0.1);
  background:
    radial-gradient(circle at 88% 20%, rgba(234, 208, 154, 0.12), transparent 22rem),
    radial-gradient(circle at 16% 82%, rgba(255, 216, 121, 0.07), transparent 26rem),
    #120f0a;
}
```

The background is a dark warm brown (`#120f0a`) with two subtle radial glows: a warm gold top-right and a dimmer gold bottom-left.

---

### Part 1: `.security-heading` (two-column header)

```html
<div class="security-heading">
  <div>
    <p class="eyebrow">Security</p>
    <h2 id="security-title">Modern encryption and compliance controls without slowing the team down.</h2>
  </div>
  <p>
    Role-based access, customer-managed keys, immutable retention, and regional storage policies give business
    clients a cloud layer that can satisfy procurement, IT, and legal from the first deployment.
  </p>
</div>
```

```css
.security-heading {
  display: grid;
  grid-template-columns: minmax(0, 0.58fr) minmax(280px, 0.42fr);
  gap: clamp(28px, 5vw, 64px);
  align-items: end;
  width: min(100%, 1320px);
  margin: 0 auto clamp(36px, 5vw, 64px);
}

.security-heading h2 {
  max-width: 820px;
}

.security-heading > p {
  margin-bottom: 0;
  color: rgba(255, 244, 213, 0.68);
  font-size: clamp(16px, 1.25vw, 19px);
  line-height: 1.6;
}
```

The left column has the eyebrow + h2 stacked. The right column has the body paragraph, aligned to the bottom of the left column (`align-items: end`).

---

### Part 2: `.security-card-grid` (3 cards in a row)

```html
<div class="security-card-grid">
  <article class="security-card api-card">...</article>
  <article class="security-card compliance-card">...</article>
  <article class="security-card economics-card">...</article>
</div>
```

```css
.security-card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(16px, 2vw, 22px);
  width: min(100%, 1320px);
  margin-inline: auto;
}
```

**Shared card base:**
```css
.security-card {
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 464px;
  overflow: hidden;
  border: 1px solid rgba(255, 247, 222, 0.17);
  border-radius: 0;
  background:
    linear-gradient(180deg, rgba(255, 247, 222, 0.035), rgba(255, 247, 222, 0.012)),
    #0f0c08;
}
```

Cards are tall rectangles with sharp corners (no border-radius). Background is a near-black warm tone with a very subtle top-to-bottom fade. Border is a faint warm white. Each card is a 2-row grid: copy on top, visual below filling the remaining space.

**Card copy area:**
```css
.security-card-copy {
  padding: 20px 22px 0;
}

.security-card h3 {
  margin-bottom: 6px;
  color: rgba(255, 247, 222, 0.9);
  font-size: 16px;
  line-height: 1.25;
}

.security-card p {
  max-width: 330px;
  margin-bottom: 0;
  color: rgba(255, 247, 222, 0.52);
  font-size: 15px;
  line-height: 1.35;
}
```

**Shared visual area min-height:**
```css
.security-api-visual,
.compliance-list,
.economics-visual {
  position: relative;
  min-height: 300px;
}
```

---

### Card 1: "Full policy control" (`.api-card`)

```html
<article class="security-card api-card">
  <div class="security-card-copy">
    <h3>Full policy control</h3>
    <p>First-class API access for storage pools, keys, regions, and retention rules. No vendor lock-in to proprietary workflows.</p>
  </div>
  <div class="security-api-visual" aria-hidden="true">
    <div class="api-window">
      <span></span>
      <span></span>
      <span></span>
      <pre><code>-> nimbus auth login
Enter code
VAULT-9AMP

-> policy attach
workspace/client-vault</code></pre>
    </div>
    <div class="api-spec">
      <pre><code>openapi: 3.0.0
info:
  title: Nimbus API
paths:
  /storage/pools:
  /keys:
  /regions:
  /retention:</code></pre>
    </div>
  </div>
</article>
```

This card has two overlapping panels: a dark terminal window (bottom-left) and a golden spec card (top-right).

**Terminal window (`.api-window`):**
```css
.api-window {
  position: absolute;
  left: 26px;
  bottom: 28px;
  width: min(58%, 230px);
  min-height: 184px;
  border: 1px solid rgba(255, 247, 222, 0.13);
  background: rgba(8, 7, 5, 0.86);
}

.api-window > span {
  display: inline-block;
  width: 9px;
  height: 9px;
  margin: 10px 0 0 7px;
  border-radius: 50%;
  background: rgba(255, 247, 222, 0.28);
}

.api-window pre {
  padding: 62px 16px 16px;
}

.api-window pre,
.api-spec pre {
  margin: 0;
  color: rgba(255, 247, 222, 0.6);
  font-family: var(--font-mono);
  font-size: 11px;
  line-height: 1.42;
  letter-spacing: 0;
  white-space: pre-wrap;
}
```

The 3 `<span>` elements are macOS-style dots positioned at the top-left of the window. The `pre` text sits below them with large top padding (62px) to create space below the dots.

**API spec card (`.api-spec`):**
```css
.api-spec {
  position: absolute;
  top: 56px;
  right: 26px;
  width: min(58%, 238px);
  padding: 16px 18px;
  border: 1px solid rgba(234, 208, 154, 0.38);
  background: rgba(64, 52, 30, 0.86);
  box-shadow: 0 22px 48px rgba(0, 0, 0, 0.3);
}

.api-spec pre {
  color: var(--accent);
}
```

This panel is a warm-brown card with a golden border, overlapping the terminal from the top-right. Text is in accent gold.

---

### Card 2: "Full compliance" (`.compliance-card`)

```html
<article class="security-card compliance-card">
  <div class="security-card-copy">
    <h3>Full compliance</h3>
    <p>SOC 2, ISO 27001, and GDPR-ready controls help teams satisfy audits, procurement reviews, and data residency requirements.</p>
  </div>
  <div class="compliance-list" aria-hidden="true">
    <div class="compliance-row">
      <span></span>
      <small>SOC 2</small>
      <strong>Type II controls</strong>
    </div>
    <div class="compliance-row">
      <span></span>
      <small>ISO 27001</small>
      <strong>Security management</strong>
    </div>
    <div class="compliance-row">
      <span></span>
      <small>GDPR</small>
      <strong>Regional data policy</strong>
    </div>
  </div>
</article>
```

3 stacked compliance badge rows, each with a checkmark circle, a standard label, and a description.

```css
.compliance-list {
  display: grid;
  align-content: center;
  gap: 12px;
  padding: 0 28px 30px;
}

.compliance-row {
  display: grid;
  grid-template-columns: 24px 1fr;
  grid-template-rows: auto auto;
  column-gap: 12px;
  align-items: center;
  min-height: 52px;
  padding: 10px 14px 10px 10px;
  border: 1px solid rgba(234, 208, 154, 0.28);
  background: rgba(48, 39, 23, 0.84);
}
```

Each row is a 2-column grid (icon column + text column) with 2 implicit rows (small label on top, strong description below). The `<span>` spans both rows via `grid-row: 1 / 3`.

**Checkmark circle (pure CSS):**
```css
.compliance-row span {
  grid-row: 1 / 3;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--accent);
}

.compliance-row span::before {
  content: "";
  display: block;
  width: 7px;
  height: 4px;
  margin: 6px 0 0 5px;
  border-bottom: 2px solid #211a0e;
  border-left: 2px solid #211a0e;
  transform: rotate(-45deg);
}
```

A gold circle with a dark checkmark made from two CSS borders rotated -45deg.

**Text labels:**
```css
.compliance-row small {
  color: rgba(234, 208, 154, 0.58);
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
}

.compliance-row strong {
  color: var(--accent);
  font-size: 14px;
  font-weight: 400;
}
```

---

### Card 3: "Ownership and predictable economics" (`.economics-card`)

```html
<article class="security-card economics-card">
  <div class="security-card-copy">
    <h3>Ownership and predictable economics</h3>
    <p>Reserved capacity, clear transfer lanes, and audit-ready billing make storage spend easy to forecast across business units.</p>
  </div>
  <div class="economics-visual" aria-hidden="true">
    <pre class="binary-map">1111111111111111111111111111
1111111111000000111111111111
1111111100011110001111111111
1111111000111111000111111111
1111111000111111000111111111
1111111100000000001111111111
1111110000001100000011111111
1111100000001100000001111111
1111110000000000000011111111
1111111111111111111111111111</pre>
    <div class="asset-table">
      <div><span>Reserved tier</span><strong>24 TiB</strong></div>
      <div><span>Transfer lane</span><strong>EU Central</strong></div>
      <div><span>Revision</span><strong>Q603</strong></div>
    </div>
  </div>
</article>
```

This card has a binary art pattern (a lock icon formed from 0s and 1s) above a 3-row data table.

**Binary map:**
```css
.economics-visual {
  display: grid;
  align-content: end;
  justify-items: center;
  gap: 18px;
  padding: 0 26px 30px;
}

.binary-map {
  margin: 0;
  color: rgba(234, 208, 154, 0.72);
  font-family: var(--font-mono);
  font-size: clamp(10px, 0.9vw, 12px);
  line-height: 1.18;
  letter-spacing: 0;
}
```

The binary text is a 28-character-wide, 10-line block of 1s and 0s that visually forms a padlock shape. The 0s carve out the lock body and shackle. Displayed in gold monospace.

**Asset table:**
```css
.asset-table {
  width: min(100%, 302px);
  border: 1px solid rgba(255, 247, 222, 0.15);
}

.asset-table div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 32px;
  border-bottom: 1px solid rgba(255, 247, 222, 0.09);
}

.asset-table div:last-child {
  border-bottom: 0;
}

.asset-table span,
.asset-table strong {
  align-self: center;
  padding: 0 12px;
  color: rgba(255, 247, 222, 0.56);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.035rem;
  text-transform: uppercase;
}

.asset-table strong {
  color: rgba(255, 247, 222, 0.78);
  text-transform: none;
}
```

A minimal bordered table with label/value columns. Labels are muted uppercase mono, values are brighter mono.

---

## Responsive Breakpoints

### `@media (max-width: 820px)`

```css
.security-heading {
  grid-template-columns: 1fr;
}

.security-card-grid {
  grid-template-columns: 1fr;
}

.security-card {
  min-height: 420px;
}
```

At 820px: Heading becomes single column (h2 above paragraph). Cards stack vertically. Card min-height reduces slightly.

### `@media (max-width: 520px)`

```css
.security-section {
  padding-inline: 18px;
}

.security-card-copy {
  padding: 18px 18px 0;
}

.security-card p {
  max-width: none;
}

.api-window {
  left: 18px;
  width: 62%;
}

.api-spec {
  right: 18px;
  width: 60%;
}

.compliance-list,
.economics-visual {
  padding-inline: 18px;
}
```

At 520px: Tighter padding throughout. API window and spec card widen proportionally. Card descriptions remove max-width constraint.

---

## Project structure

```
index.html       (section markup + font links)
styles.css       (all styles + media queries)
script.js        (empty or minimal — no JS needed for this section)
package.json     (vite ^5.4.2, "type": "module", scripts: dev/build/preview)
vite.config.js   (default export)
```