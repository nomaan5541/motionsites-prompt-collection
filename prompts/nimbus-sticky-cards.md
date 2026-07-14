---

# Prompt to Recreate the Nimbus Grid Platform Accordion Section (Standalone)

Build a standalone single-section page: the "Platform Accordion" from Nimbus Grid. Use plain HTML, CSS, and vanilla JS (Vite project, no frameworks). Match every detail below exactly.

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

**Resets:** Universal `box-sizing: border-box`. `html { scroll-behavior: smooth; }`. Body: `margin: 0`, background `var(--bg)`, color `var(--ink)`, `font-family: var(--font-sans)`, `font-size: 1rem`, `font-weight: 400`, `line-height: 1.375`, `letter-spacing: 0.0175rem`, antialiased (`-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale`). Anchors: `color: inherit; text-decoration: none;`. All headings/paragraphs: `margin-top: 0`.

**Screen-reader utility:**
```css
.sr-only {
  position: absolute; width: 1px; height: 1px;
  overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap;
}
```

---

## Section: `.platform-accordion`

`<section class="platform-accordion" id="platform">` with a screen-reader-only `<h2 class="sr-only">` inside.

**Outer container styles:**
```css
.platform-accordion {
  position: relative;
  min-height: 420svh;
  border-top: 1px solid rgba(255, 240, 199, 0.1);
  background:
    radial-gradient(circle at 86% 30%, rgba(234, 208, 154, 0.13), transparent 24rem),
    #050604;
}
```

### `.accordion-inner` (sticky viewport frame)

```css
.accordion-inner {
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: minmax(160px, 0.22fr) minmax(0, 0.78fr);
  gap: clamp(28px, 5vw, 72px);
  height: 100svh;
  padding: clamp(48px, 7vw, 86px) clamp(20px, 5vw, 72px);
  overflow: hidden;
}
```

---

### Left column: `.accordion-nav`

`<div class="accordion-nav" role="tablist">` containing 4 `<button class="accordion-tab">` elements. First button gets class `.active`.

**Tab labels (in order):**
1. `Programmable infra`
2. `Data residency`
3. `Elastic scaling`
4. `Unified visibility`

Each button has `data-accordion-tab="infra|residency|scaling|visibility"` respectively, `role="tab"`, `aria-selected="true|false"`.

```css
.accordion-nav {
  align-self: start;
  display: grid;
  gap: 16px;
  padding-top: 14px;
}

.accordion-tab {
  position: relative;
  border: 0;
  background: transparent;
  color: rgba(255, 247, 222, 0.38);
  font-family: var(--font-mono);
  font-size: 11px;
  line-height: 1rem;
  letter-spacing: 0.08rem;
  text-align: left;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 160ms ease, transform 160ms ease;
}

.accordion-tab::before {
  content: "";
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-right: 12px;
  border-radius: 1px;
  background: currentColor;
  vertical-align: 1px;
}

.accordion-tab.active {
  color: var(--accent);
  transform: translateX(2px);
}
```

---

### Right column: `.accordion-stack`

`<div class="accordion-stack" aria-live="polite">` containing 4 `<article class="accordion-card">` elements. First card gets class `.active`.

Each card has `data-accordion-card="infra|residency|scaling|visibility"`.

```css
.accordion-stack {
  position: relative;
  height: min(80svh, 820px);
  align-self: center;
  overflow: hidden;
}

.accordion-card {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: minmax(220px, 0.35fr) minmax(340px, 0.65fr);
  border-top: 1px solid rgba(255, 247, 222, 0.2);
  background: #050604;
  transform: translateY(var(--card-y, 100%));
  clip-path: inset(0 0 var(--card-clip-bottom, 0px) 0);
  will-change: transform, clip-path;
}
```

---

### Card inner structure (each card)

**Left: `.accordion-copy`**
```html
<div class="accordion-copy">
  <h3>[Card title]</h3>
  <p>[Card description]</p>
</div>
```

```css
.accordion-copy {
  padding: 26px 30px 0 0;
}

.accordion-card h3 {
  margin-bottom: 28px;
  color: var(--ink);
  font-size: clamp(24px, 2.2vw, 40px);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.0125rem;
}

.accordion-card p {
  max-width: 340px;
  margin-bottom: 0;
  color: var(--muted);
  font-size: clamp(15px, 1.4vw, 22px);
  line-height: 1.55;
}
```

**Right: `.accordion-visual`**

Gold gradient panel containing a dark code window.

```css
.accordion-visual {
  min-height: 100%;
  padding: clamp(34px, 5vw, 64px);
  background:
    linear-gradient(135deg, rgba(234, 208, 154, 0.92), rgba(106, 91, 52, 0.68)),
    radial-gradient(circle at 15% 20%, rgba(255, 247, 222, 0.65), transparent 20rem);
  overflow: hidden;
}
```

**Code window (`.code-window`):**
```css
.code-window {
  width: min(420px, 100%);
  margin-inline: auto;
  padding: 18px 20px 24px;
  border-radius: 8px;
  background: rgba(8, 10, 10, 0.88);
  box-shadow: 0 28px 70px rgba(0, 0, 0, 0.34);
}

.metric-window {
  margin-top: clamp(18px, 5vw, 70px);
}

[data-accordion-card="infra"] .code-window {
  margin-top: 40px;
}

[data-accordion-card="visibility"] .metric-window {
  margin-top: clamp(12px, 3.75vw, 52px);
}

.code-window > span {
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-right: 5px;
  border-radius: 50%;
  background: rgba(255, 247, 222, 0.56);
}

.code-window pre {
  margin: 22px 0 0;
  color: rgba(255, 247, 222, 0.82);
  font-family: var(--font-mono);
  font-size: clamp(11px, 1vw, 14px);
  line-height: 1.55;
  letter-spacing: 0;
  white-space: pre-wrap;
}
```

Each code window has 3 `<span></span>` dot elements (the 3 macOS-style dots), then a `<pre><code>` block.

---

### Card content (exact text)

**Card 1 — `infra`:**
- Title: `Programmable infra`
- Description: `Define storage pools, quotas, regions, and access policy in code so every workspace ships with the same controls.`
- Code window (no `.metric-window` class):
```
01  storage_pool = {
02    name      = "client-vault"
03    region    = "eu-central"
04    quota     = "24 TiB"
05    policy    = encrypted_fast
06  }
```

**Card 2 — `residency`:**
- Title: `Data residency`
- Description: `Pin departments and client workspaces to approved regions with retention and encryption rules attached from day one.`
- Code window (class: `.code-window .metric-window`):
```
Region policy

EU Central     locked
US East        allowed
AP Southeast   review
Retention      7 years
```

**Card 3 — `scaling`:**
- Title: `Elastic scaling`
- Description: `Expand capacity before teams hit limits, route large transfers through faster lanes, and keep procurement predictable.`
- Code window (class: `.code-window .metric-window`):
```
Capacity forecast

Used       18.4 TiB
Reserved   24 TiB
Burst      ready
Next tier  approved
```

**Card 4 — `visibility`:**
- Title: `Unified visibility`
- Description: `Track growth, usage pressure, inactive files, and compliance drift from a single operational surface.`
- Code window (class: `.code-window .metric-window`):
```
Operations view

Sync health       stable
Cold data         14%
Policy drift       0
Audit export      live
```

---

## JavaScript: Scroll-driven accordion

```js
const accordionSection = document.querySelector(".platform-accordion");
const accordionTabs = Array.from(document.querySelectorAll("[data-accordion-tab]"));
const accordionCards = Array.from(document.querySelectorAll("[data-accordion-card]"));

function activateAccordionPanel(panelName) {
  accordionTabs.forEach((tab) => {
    const isActive = tab.dataset.accordionTab === panelName;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
  accordionCards.forEach((card) => {
    card.classList.toggle("active", card.dataset.accordionCard === panelName);
  });
}

function updateScrollAccordion() {
  if (!accordionSection || !accordionCards.length) return;

  const rect = accordionSection.getBoundingClientRect();
  const scrollable = Math.max(1, rect.height - window.innerHeight);
  const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
  const maxIndex = accordionCards.length - 1;
  const rawIndex = progress * maxIndex;
  const activeIndex = Math.min(maxIndex, Math.max(0, Math.round(rawIndex)));
  const stack = document.querySelector(".accordion-stack");
  const stackHeight = stack ? stack.clientHeight : window.innerHeight * 0.74;
  const collapsedHeight = window.innerWidth <= 820 ? 96 : 84;

  const cardPositions = accordionCards.map((_, index) => {
    let y = 0;
    if (index > 0) {
      const segmentProgress = Math.min(1, Math.max(0, rawIndex - (index - 1)));
      const startY = stackHeight + collapsedHeight;
      const endY = index * collapsedHeight;
      y = startY + (endY - startY) * segmentProgress;
    }
    return Math.round(y);
  });

  accordionCards.forEach((card, index) => {
    const y = cardPositions[index];
    const nextY = cardPositions[index + 1];
    const visibleHeight = typeof nextY === "number"
      ? Math.max(collapsedHeight, Math.min(stackHeight, nextY + 2))
      : stackHeight;
    const clipBottom = Math.max(0, stackHeight - visibleHeight);

    card.style.setProperty("--card-y", `${Math.round(y)}px`);
    card.style.setProperty("--card-clip-bottom", `${Math.round(clipBottom)}px`);
    card.style.zIndex = String(index + 1);
  });

  const activeCard = accordionCards[activeIndex];
  if (activeCard) activateAccordionPanel(activeCard.dataset.accordionCard);
}

// Tab click scrolls to the correct segment
accordionTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    if (!accordionSection || !accordionCards.length) return;
    const index = accordionCards.findIndex(
      (card) => card.dataset.accordionCard === tab.dataset.accordionTab
    );
    const maxIndex = accordionCards.length - 1;
    const scrollable = accordionSection.offsetHeight - window.innerHeight;
    const target = accordionSection.offsetTop + (index / maxIndex) * scrollable;
    window.scrollTo({ top: target, behavior: "smooth" });
  });
});

window.addEventListener("scroll", updateScrollAccordion, { passive: true });
window.addEventListener("resize", updateScrollAccordion);
updateScrollAccordion();
```

**How the scroll math works:**
- The section is `420svh` tall. As the user scrolls through it, `progress` goes from 0 to 1.
- `rawIndex` maps progress to a float 0..3 (for 4 cards).
- Each card starts off-screen at `stackHeight + collapsedHeight` px below, then slides up to `index * collapsedHeight` (84px desktop, 96px mobile) — stacking as visible header strips.
- `clip-path: inset(0 0 VAR 0)` clips the bottom of each card so only the header strip shows when another card sits on top.
- The active card (nearest integer index) is fully revealed (no clip).

---

## Responsive Breakpoints

### `@media (max-width: 820px)`

```css
.platform-accordion {
  min-height: 420svh;
}

.accordion-inner {
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 22px;
  padding: 34px 20px;
}

.accordion-nav {
  align-self: start;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  padding-top: 0;
}

.accordion-stack {
  height: 78svh;
  align-self: stretch;
}

.accordion-card {
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
}

.accordion-copy {
  padding: 22px 0 24px;
}

.accordion-visual {
  min-height: 0;
  padding: 28px;
}
```

At 820px: Nav becomes a 2-column grid above the stack. Cards become single-column (copy stacked above visual). Collapsed height changes to 96px (handled in JS via `window.innerWidth <= 820 ? 96 : 84`).

### `@media (max-width: 520px)`

```css
.accordion-nav {
  grid-template-columns: 1fr;
}

.accordion-inner {
  padding-inline: 18px;
}

.accordion-card h3 {
  font-size: 26px;
}

.accordion-card p {
  font-size: 14px;
}

.accordion-visual {
  padding: 18px;
}
```

At 520px: Nav becomes single-column. Tighter padding. Smaller text.

---

## Project structure

```
index.html       (section markup + font links)
styles.css       (all styles + media queries)
script.js        (scroll-driven accordion + tab click)
package.json     (vite ^5.4.2, "type": "module", scripts: dev/build/preview)
vite.config.js   (default export)
```