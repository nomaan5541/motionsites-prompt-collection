--

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

## Color Theme Note

This section uses a **cool cyan/blue palette** (`#97d3eb`, `rgba(151, 211, 235, ...)`, `#dff5ff`) rather than the warm gold used elsewhere. This is intentional — it differentiates the console/product UI section from the marketing sections.

---

## Section: `.console-showcase`

`<section class="console-showcase" id="plans" aria-labelledby="console-title">`

**Outer container:**
```css
.console-showcase {
  position: relative;
  min-height: 112svh;
  padding: clamp(72px, 8vw, 120px) clamp(20px, 5vw, 72px);
  overflow: hidden;
  border-top: 1px solid rgba(255, 240, 199, 0.1);
  background:
    radial-gradient(circle at 82% 34%, rgba(151, 211, 235, 0.12), transparent 24rem),
    #070a0b;
}
```

Background is a very dark cool-black (`#070a0b`) with a subtle cyan radial glow at top-right.

**Decorative ruled-lines block (`::after`):**
```css
.console-showcase::after {
  content: "";
  position: absolute;
  top: 19%;
  right: 8%;
  width: min(360px, 24vw);
  height: 210px;
  border-radius: 4px;
  background:
    linear-gradient(180deg, rgba(255, 247, 222, 0.04), rgba(255, 247, 222, 0.02)),
    repeating-linear-gradient(180deg, rgba(255, 247, 222, 0.08) 0 48px, transparent 48px 70px);
  opacity: 0.55;
}
```

This creates a subtle decorative element in the top-right — faint horizontal ruled lines, like a ghost of a document. Purely atmospheric.

---

### Part 1: `.console-showcase-heading` (two-column header)

```html
<div class="console-showcase-heading">
  <h2 id="console-title">The biggest forward leap in business cloud storage operations.</h2>
  <p>
    A single control plane for provisioning storage pools, reviewing policy, watching growth,
    and shipping audit-ready reports without asking teams to change how they work.
  </p>
</div>
```

```css
.console-showcase-heading {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: minmax(0, 720px) minmax(220px, 360px);
  justify-content: space-between;
  gap: clamp(32px, 6vw, 86px);
  width: 100%;
}

.console-showcase-heading h2 {
  max-width: 720px;
  color: #dff5ff;
  font-size: clamp(25px, 4vw, 52px);
  line-height: 1.08;
  letter-spacing: 0.005rem;
  font-weight: 400;
}

.console-showcase-heading p {
  align-self: end;
  justify-self: end;
  max-width: 360px;
  color: rgba(223, 245, 255, 0.72);
  font-size: 19px;
  line-height: 1.55;
}
```

The h2 is in a light cyan-white (`#dff5ff`). The paragraph is a muted cyan, aligned to the bottom-right.

---

### Part 2: `.console-figure-label` (figure caption)

```html
<div class="console-figure-label">
  <span>Fig. 2</span>
  Nimbus Grid web console
</div>
```

```css
.console-figure-label {
  position: relative;
  z-index: 2;
  width: 100%;
  margin: clamp(42px, 6vw, 72px) 0 14px;
  color: rgba(255, 247, 222, 0.42);
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.08rem;
  text-transform: uppercase;
}

.console-figure-label span {
  display: inline-flex;
  padding: 5px 8px;
  margin-right: 10px;
  border: 1px solid rgba(255, 247, 222, 0.18);
  border-radius: 2px;
}
```

A small technical label — "Fig. 2" in a bordered inline badge, then "Nimbus Grid web console" as adjacent text. All uppercase mono, muted color.

---

### Part 3: `.dashboard-shell` (the full dashboard mockup)

This is the centerpiece — a complete faux web-app UI with hover effects.

```html
<div class="dashboard-shell">
  <div class="dashboard-topbar">
    <span></span>
    <span></span>
    <span></span>
    <strong></strong>
  </div>
  <div class="dashboard-body">
    <aside class="dashboard-sidebar">
      <strong>Client Vault</strong>
      <nav aria-label="Console sections">
        <span>Workspaces</span>
        <span class="active">Storage Pools</span>
        <span>Retention</span>
        <span>Access</span>
        <span>Transfers</span>
        <span>Reports</span>
      </nav>
    </aside>

    <div class="dashboard-main">
      <div class="dashboard-title-row">
        <h3>Storage Pools</h3>
        <button type="button">New pool</button>
      </div>

      <div class="dashboard-table" role="table" aria-label="Storage pool status">
        <div class="dashboard-row header" role="row">
          <span>Name</span>
          <span>Region</span>
          <span>Used</span>
          <span>Policy</span>
          <span>State</span>
        </div>
        <div class="dashboard-row" role="row">
          <span>finance-vault</span>
          <span>EU Central</span>
          <span>18.4 TiB</span>
          <span>7 years</span>
          <strong>Healthy</strong>
        </div>
        <div class="dashboard-row" role="row">
          <span>design-assets</span>
          <span>US East</span>
          <span>9.8 TiB</span>
          <span>Versioned</span>
          <strong>Syncing</strong>
        </div>
        <div class="dashboard-row" role="row">
          <span>legal-archive</span>
          <span>EU Central</span>
          <span>42.1 TiB</span>
          <span>Immutable</span>
          <strong>Healthy</strong>
        </div>
        <div class="dashboard-row" role="row">
          <span>migration-lane</span>
          <span>AP South</span>
          <span>6.2 TiB</span>
          <span>Temporary</span>
          <strong>Queued</strong>
        </div>
      </div>
    </div>
  </div>

  <div class="dashboard-toast">
    <strong>Pool created</strong>
    finance-vault ready
  </div>
</div>
```

#### Dashboard shell (outer frame with 3D hover)

```css
.dashboard-shell {
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: 620px;
  border: 1px solid rgba(151, 211, 235, 0.18);
  border-radius: 8px;
  overflow: hidden;
  background: rgba(5, 8, 10, 0.9);
  box-shadow: 0 36px 120px rgba(0, 0, 0, 0.44);
  transform: perspective(1400px) rotateX(0) rotateY(0) translateY(0);
  transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
}
```

**Specular shine overlay (`::before`):**
```css
.dashboard-shell::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: linear-gradient(
    115deg,
    rgba(223, 245, 255, 0) 0%,
    rgba(223, 245, 255, 0.08) 42%,
    rgba(223, 245, 255, 0) 64%
  );
  opacity: 0;
  transform: translateX(-34%);
  transition: opacity 220ms ease, transform 520ms ease;
}
```

**Hover state (3D tilt + shine sweep):**
```css
.dashboard-shell:hover {
  border-color: rgba(151, 211, 235, 0.34);
  box-shadow: 0 44px 140px rgba(0, 0, 0, 0.52), 0 0 80px rgba(151, 211, 235, 0.08);
  transform: perspective(1400px) rotateX(1deg) rotateY(-1.2deg) translateY(-8px);
}

.dashboard-shell:hover::before {
  opacity: 1;
  transform: translateX(34%);
}
```

On hover, the entire dashboard tilts slightly in 3D (1deg X, -1.2deg Y), lifts up 8px, gets a brighter border and an expanded shadow, and a diagonal light-sweep slides across the surface from left to right.

#### Top bar

```css
.dashboard-topbar {
  display: flex;
  align-items: center;
  gap: 9px;
  height: 58px;
  padding: 0 18px;
  border-bottom: 1px solid rgba(151, 211, 235, 0.14);
}

.dashboard-topbar span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 247, 222, 0.14);
}

.dashboard-topbar strong {
  width: 170px;
  height: 13px;
  margin-left: 72px;
  border-radius: 2px;
  background: rgba(255, 247, 222, 0.09);
}
```

3 dot placeholders (window controls) + a rectangular "address bar" placeholder. All ghost/skeleton elements.

#### Body (sidebar + main)

```css
.dashboard-body {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 240px 1fr;
  min-height: 560px;
}
```

#### Sidebar

```css
.dashboard-sidebar {
  padding: 26px 18px;
  border-right: 1px solid rgba(151, 211, 235, 0.12);
  color: rgba(223, 245, 255, 0.44);
}

.dashboard-sidebar strong {
  display: block;
  margin-bottom: 34px;
  color: rgba(223, 245, 255, 0.7);
  font-weight: 400;
}

.dashboard-sidebar nav {
  display: grid;
  gap: 12px;
}

.dashboard-sidebar span {
  padding: 7px 10px;
  border-radius: 3px;
}

.dashboard-sidebar .active {
  color: #97d3eb;
  background: rgba(151, 211, 235, 0.13);
}
```

Sidebar nav items: Workspaces, **Storage Pools** (active, highlighted cyan), Retention, Access, Transfers, Reports. "Client Vault" as the workspace name at top.

#### Main content area

```css
.dashboard-main {
  padding: clamp(34px, 5vw, 60px);
}

.dashboard-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 34px;
}

.dashboard-title-row h3 {
  margin: 0;
  color: #97d3eb;
  font-size: clamp(28px, 2.8vw, 44px);
}

.dashboard-title-row button {
  min-height: 36px;
  padding: 0 14px;
  border: 1px solid rgba(151, 211, 235, 0.3);
  border-radius: 3px;
  color: #97d3eb;
  background: rgba(151, 211, 235, 0.1);
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.06rem;
  text-transform: uppercase;
}
```

#### Data table

```css
.dashboard-table {
  display: grid;
  border: 1px solid rgba(255, 247, 222, 0.12);
  border-radius: 4px;
  overflow: hidden;
}

.dashboard-row {
  display: grid;
  grid-template-columns: 1.3fr 1fr 0.8fr 1fr 0.8fr;
  min-height: 54px;
  align-items: center;
  border-bottom: 1px solid rgba(255, 247, 222, 0.08);
  transition: background 160ms ease;
}

.dashboard-row:not(.header):hover {
  background: rgba(151, 211, 235, 0.06);
}

.dashboard-row:last-child {
  border-bottom: 0;
}

.dashboard-row span,
.dashboard-row strong {
  padding: 0 16px;
  color: rgba(223, 245, 255, 0.64);
  font-weight: 400;
}

.dashboard-row.header span {
  color: rgba(223, 245, 255, 0.42);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.09rem;
  text-transform: uppercase;
}

.dashboard-row strong {
  color: #97d3eb;
  font-family: var(--font-mono);
  font-size: 12px;
  text-transform: uppercase;
}
```

5 columns: Name, Region, Used, Policy, State. Header row has uppercase mono labels. Data rows have muted text for spans and cyan mono for strong (status). Rows highlight on hover.

**Table data (exact):**

| Name | Region | Used | Policy | State |
|---|---|---|---|---|
| finance-vault | EU Central | 18.4 TiB | 7 years | **Healthy** |
| design-assets | US East | 9.8 TiB | Versioned | **Syncing** |
| legal-archive | EU Central | 42.1 TiB | Immutable | **Healthy** |
| migration-lane | AP South | 6.2 TiB | Temporary | **Queued** |

#### Toast notification

```css
.dashboard-toast {
  position: absolute;
  right: clamp(28px, 7vw, 90px);
  bottom: 58px;
  width: min(330px, 34vw);
  padding: 18px 20px;
  border: 1px solid rgba(151, 211, 235, 0.22);
  border-radius: 4px;
  color: #97d3eb;
  background: rgba(8, 34, 42, 0.92);
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.34);
}

.dashboard-toast strong {
  display: block;
  margin-bottom: 6px;
  font-weight: 400;
}
```

A floating notification card positioned bottom-right inside the shell. Dark teal background with cyan border and text. Shows: bold "Pool created" label, then "finance-vault ready" body text.

---

## Responsive Breakpoints

### `@media (max-width: 820px)`

```css
.console-showcase-heading {
  grid-template-columns: 1fr;
}

.console-showcase-heading h2 {
  max-width: 760px;
  font-size: clamp(25px, 6vw, 52px);
}

.console-showcase-heading p {
  justify-self: start;
  max-width: 420px;
}

.dashboard-body {
  grid-template-columns: 1fr;
}

.dashboard-sidebar {
  border-right: 0;
  border-bottom: 1px solid rgba(151, 211, 235, 0.12);
}

.dashboard-sidebar nav {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.dashboard-row {
  grid-template-columns: 1.2fr 0.9fr 0.8fr;
}

.dashboard-row span:nth-child(4),
.dashboard-row span:nth-child(5),
.dashboard-row strong {
  display: none;
}

.dashboard-toast {
  position: static;
  width: auto;
  margin: 24px;
}
```

At 820px: Heading stacks to single column. Dashboard sidebar moves to top with 2-column nav. Table hides columns 4 (Policy) and 5 (State/strong) — only Name, Region, Used visible. Toast becomes static at the bottom of the shell.

### `@media (max-width: 520px)`

```css
.console-showcase {
  padding-inline: 18px;
}

.console-showcase-heading h2 {
  font-size: clamp(25px, 8vw, 44px);
}

.dashboard-shell {
  min-height: 0;
}

.dashboard-main {
  padding: 24px 16px;
}

.dashboard-title-row {
  align-items: flex-start;
  flex-direction: column;
}
```

At 520px: Tighter padding. Dashboard min-height removed. Title row stacks vertically (heading above button).

---

## JavaScript

No JavaScript is required for this section. The only interactive behavior is the CSS hover effect on `.dashboard-shell` (3D tilt + shine sweep), which is entirely CSS-driven via transitions.

---

## Project structure

```
index.html       (section markup + font links)
styles.css       (all styles + media queries)
script.js        (empty — no JS needed)
package.json     (vite ^5.4.2, "type": "module", scripts: dev/build/preview)
vite.config.js   (default export)
```