# Working Prompt: Stark Minimal Footer

This is the original full prompt returned by the MotionSites `get-prompt` endpoint in the current session.

## Metadata

- Prompt ID: `stark-minimal-footer`
- Category: Footer
- Page type: hero
- Source status: fetched
- Preview video: https://stream.mux.com/LQEyNrngPU47bPax9kHJIUjlwjXVatHuEImFQvnWTc00.m3u8
- Preview image: 

## Prompt

```
---

Build a **Site Footer** for an aerospace company called "EngineTech." This is a black-background footer with an animated dotted top border, a four-column nav grid with a large heading, an oversized wordmark brand row, and a legal line.

---

## ROOT CONTAINER (`.site-footer`)

- Position relative, z-index 100, overflow hidden.
- Background: `#000000`. Color: `#ffffff`.

---

## ANIMATED DOTS STRIP (`.footer-dots`)

A decorative band at the very top of the footer with horizontally drifting dots.

- Position relative, height 120px, overflow hidden, background `#000000`.
- Has `aria-hidden="true"`.

**Inside (`.footer-dots__line`):**

- Position absolute, `left: 0; top: 50%`. Width **200%**, height 70px.
- Opacity 0.75. `transform: translateY(-50%)`.
- Background-image (three layered radial-gradient dot patterns):
  - `radial-gradient(circle, rgb(255 255 255 / 0.55) 1.5px, transparent 2px)`
  - `radial-gradient(circle, rgb(255 255 255 / 0.35) 1px, transparent 1.5px)`
  - `radial-gradient(circle, rgb(255 255 255 / 0.45) 1.2px, transparent 1.8px)`
- Background-position: `0 8px, 24px 22px, 48px 14px`.
- Background-size: `72px 38px, 110px 44px, 160px 52px`.
- Animation: `footerDotsMove 18s linear infinite`.

**Keyframes:**

```
@keyframes footerDotsMove {
  from { transform: translate3d(0, -50%, 0); }
  to   { transform: translate3d(-50%, -50%, 0); }
}
```

---

## FOOTER INNER (`.site-footer__inner`)

- Width: `min(100% - 96px, var(--hero-max-width))` where `--hero-max-width: 1820px`. Margin `0 auto`.
- Padding: `clamp(34px, 4vw, 66px) 0 clamp(18px, 2vw, 34px)`.

---

## TOP GRID (`.site-footer__top`)

- Display grid. Columns: `minmax(320px, 1.25fr) repeat(3, minmax(150px, 0.42fr))`.
- Gap: `clamp(28px, 4vw, 76px)`. Min-height: `clamp(220px, 24vw, 330px)`.

### H2 (first cell)

- Text: "Proven Advanced Propulsion Technology".
- Max-width 680px, margin 0, color `#ffffff`, `font-size: clamp(34px, 3.5vw, 62px)`, weight 220, letter-spacing 0, line-height 1.06.

### Nav columns (three `.site-footer__nav` elements)

Each nav is `display: flex; flex-direction: column; align-items: flex-start; gap: clamp(14px, 1.35vw, 22px)`.

Each link `<a>`:
- Color `rgb(255 255 255 / 0.88)`, font-size 16px, weight 650, line-height 1.1.
- Transition: `color 180ms ease, transform 180ms ease`.
- Hover: color `#ffffff`, `transform: translateX(3px)`.

**Nav 1 (`aria-label="Footer navigation"`):**
- Company → `#company`
- Technology → `#technology`
- Solutions → `#solutions`
- Our Edge → `#our-edge`
- Investors → `#investors`

**Nav 2 (`aria-label="Company links"`):**
- Our Team → `#our-team`
- News → `#news`
- Careers → `#careers`
- Contact Us → `#contact`

**Nav 3 (`aria-label="Social links"`):**
- LinkedIn → `https://www.linkedin.com` (`target="_blank" rel="noreferrer"`)
- Follow Us on X → `https://x.com` (`target="_blank" rel="noreferrer"`)

---

## BRAND ROW (`.site-footer__brand-row`)

- Width 100%. Margin-top: `clamp(18px, 3vw, 46px)`.

**Brand link (`.site-footer__brand`):**

- Anchor `href="/"`, `aria-label="EngineTech home"`.
- Display flex, align-items center, width 100%, color `#ffffff`.

**Brand mark (`.site-footer__mark`):**

- Position relative, `flex: 0 0 clamp(58px, 6.1vw, 118px)`, `aspect-ratio: 1`.
- Margin-right `clamp(14px, 1.6vw, 28px)`. Overflow hidden, border-radius 50%.
- Background `#ffffff`.
- `::before` pseudo: absolute `inset: -18%`, background `#000000`, with `clip-path: polygon(0 20%, 100% 8%, 100% 19%, 0 31%, 0 43%, 100% 31%, 100% 42%, 0 54%, 0 66%, 100% 54%, 100% 65%, 0 77%)`. This creates a zig-zag wave pattern inside the white circle.
- Has `aria-hidden="true"`.

**Brand wordmark (second `<span>`):**

- Text: "EngineTech".
- Display block, `flex: 1 1 auto`, min-width 0.
- `font-size: clamp(58px, 11.1vw, 214px)`. Weight 760. `letter-spacing: -0.055em`. Line-height 0.78.
- `white-space: nowrap`.

---

## LEGAL LINE (`.site-footer__legal`)

- Flex row, wrap allowed, justify-content flex-start, gap `8px 18px`.
- Margin-top: `clamp(14px, 1.4vw, 24px)`.
- Color `rgb(255 255 255 / 0.52)`, font-size 9px, line-height 1.35.

Contents:
- `<p>`: "© 2026 EngineTech. All rights reserved." (margin 0)
- `<a href="#privacy">`: "Privacy Policy" (color inherit, hover `#ffffff`)
- `<a href="#terms">`: "Terms of Use" (same styling)

---

## RESPONSIVE BREAKPOINTS

**At 980px:**

- `.site-footer__inner` width: `min(100% - 48px, var(--hero-max-width))`.
- Top grid: `grid-template-columns: 1fr 1fr` (two columns).
- H2 spans full width: `grid-column: 1 / -1`.

**At 560px:**

- `.site-footer__inner` width: `min(100% - 32px, var(--hero-max-width))`.
- Top grid: single column (`grid-template-columns: 1fr`). Min-height auto.
- Nav links font-size 15px.
- Brand mark flex-basis: `clamp(38px, 12vw, 58px)`.
- Brand wordmark font-size: `clamp(45px, 18vw, 84px)`.

---

## GLOBAL STYLES

**CSS custom property used:** `--hero-max-width: 1820px`.

**Font stack:** `"Geist", "Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` with `-webkit-font-smoothing: antialiased` and `text-rendering: geometricPrecision`.

**Anchor reset:** `a { color: inherit; text-decoration: none; }`.

**Color palette:** No purple or violet. Pure black `#000000` background, pure white `#ffffff` text, with `rgb(255 255 255 / 0.88)` for nav links, `rgb(255 255 255 / 0.55)` / `0.45` / `0.35` for the dot pattern, and `rgb(255 255 255 / 0.52)` for legal text.
```
