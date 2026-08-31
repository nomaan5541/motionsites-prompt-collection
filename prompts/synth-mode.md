Build a pure-white, minimal, futuristic fashion landing page titled **"LGPSM — Future Forward Fashion"**. Stack: React 19 + Vite + TypeScript + Tailwind CSS v4 + lucide-react. Page title: `LGPSM — Future Forward Fashion`. Description vibe: pure white minimal futuristic fashion website interface. Full-viewport single composition, black text on white, no purple, no cream, no cards-as-decoration, no glow effects.

---

## FONTS (exact Google Fonts)

Load via Google Fonts:

```
https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;600;700&family=Michroma&family=Orbitron:wght@600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap
```

Usage:
- **Orbitron** (600/700/800/900): logo `LGPSM`, main headline `FUTURE FORWARD FASHION`, drawer titles, collection titles
- **Plus Jakarta Sans** (400/500/600/700): body UI, nav links, taglines, buttons, drawer content (default page font)
- Michroma and Chakra Petch may be loaded but are unused on the main UI

CSS utilities:
- `.font-orbitron { font-family: 'Orbitron', sans-serif; }`
- `.font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }`

Body: `bg-white text-black antialiased`, selection: `selection:bg-black selection:text-white`.

---

## FLUID SIZE SYSTEM (exact CSS variables)

All sizes scale with viewport via `clamp()` — no hard fixed px breakpoints for type/spacing:

```css
:root {
  --pad-x: clamp(1.25rem, 4.5vw, 5rem);
  --pad-y: clamp(1rem, 3vh, 4rem);
  --header-pt: clamp(1.25rem, 2.5vh, 2.5rem);
  --gap-nav: clamp(1rem, 2.2vw, 2.25rem);
  --logo: clamp(1.35rem, 1.2vw + 0.9rem, 2.1rem);
  --logo-deg: clamp(0.65rem, 0.4vw + 0.45rem, 0.9rem);
  --nav: clamp(0.65rem, 0.35vw + 0.5rem, 0.875rem);
  --headline: clamp(2.15rem, 4.5vw + 0.75rem, 5.25rem);
  --body: clamp(0.7rem, 0.35vw + 0.55rem, 0.9rem);
  --micro: clamp(0.55rem, 0.25vw + 0.45rem, 0.7rem);
  --btn-px: clamp(1.15rem, 1.4vw, 1.75rem);
  --btn-py: clamp(0.6rem, 0.9vh, 0.85rem);
  --btn-gap: clamp(0.75rem, 1vw, 1.1rem);
  --feature-pad: clamp(1rem, 1.5vw, 1.75rem);
  --feature-min: clamp(13rem, 18vw, 20rem);
  --globe: clamp(2.25rem, 2.5vw + 1rem, 3.25rem);
  --checker-w: clamp(2.75rem, 4.5vw, 6.5rem);
  --checker-h: clamp(1.35rem, 2.2vw, 3rem);
  --corner: clamp(0.65rem, 0.4vw + 0.4rem, 0.95rem);
  --icon: clamp(1rem, 0.6vw + 0.7rem, 1.35rem);
  --drawer-pad: clamp(1.25rem, 2.5vw, 2.25rem);
  --drawer-max: clamp(18rem, 28vw, 28rem);
  --section-gap: clamp(0.75rem, 1.5vh, 1.5rem);
  --main-py: clamp(1.25rem, 4vh, 4rem);
}
```

---

## EXACT BACKGROUND IMAGE URLS

**Base image (BG_IMAGE_1)** — always visible full-bleed desktop background; also used as the mobile static image:

```
https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260802_074534_f0d9d476-3f86-4c67-9b12-dfc63d99da41.png&w=1920&q=85
```

**Reveal image (BG_IMAGE_2)** — second image revealed only inside the mouse spotlight mask:

```
https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260802_075145_1b557479-775b-43af-8270-f45d79d97d5a.png&w=1920&q=85
```

Both layers: `absolute inset-0`, `background-size: cover`, `background-position: center`, `background-repeat: no-repeat`.

---

## DESKTOP INTERACTIVE IMAGE REVEAL EFFECT (exact behavior)

Component: `ImageRevealBackground`. Desktop only: `hidden lg:block fixed inset-0 pointer-events-none z-0 overflow-hidden`.

### Layers (bottom → top)
1. Base layer: BG_IMAGE_1 full bleed
2. Reveal layer: BG_IMAGE_2 full bleed, clipped by a CSS/WebKit mask generated from an offscreen canvas
3. Subtle SVG grid overlay at `opacity: 0.10`, stroke `#64748b`, strokeWidth `0.6`

### Spotlight / mask algorithm (exact)
- Track raw mouse (`mousemove` on `window`) into `mouseRef`
- Every animation frame, ease `smoothRef` toward mouse with factor **0.1**:
  - `smooth.x += (mouse.x - smooth.x) * 0.1`
  - `smooth.y += (mouse.y - smooth.y) * 0.1`
- Spotlight radius (fluid): `Math.round(Math.min(420, Math.max(160, window.innerWidth * 0.16)))`
- Draw soft radial gradient circle on offscreen canvas at smoothed cursor:
  - `createRadialGradient(cx, cy, 0, cx, cy, radius)`
  - stops exactly:
    - 0 → `rgba(255,255,255,1)`
    - 0.4 → `rgba(255,255,255,1)`
    - 0.6 → `rgba(255,255,255,0.75)`
    - 0.75 → `rgba(255,255,255,0.4)`
    - 0.88 → `rgba(255,255,255,0.12)`
    - 1 → `rgba(255,255,255,0)`
- Export canvas each frame as `toDataURL()` and apply to BG_IMAGE_2 as:
  - `mask-image: url(dataUrl)` / `-webkit-mask-image: url(dataUrl)`
  - `mask-size: 100% 100%`
- Result: moving the cursor smoothly reveals BG_IMAGE_2 inside a soft circular spotlight while BG_IMAGE_1 remains everywhere else

### Parallax grid
- Grid cell size (fluid): `Math.round(Math.min(64, Math.max(36, window.innerWidth * 0.028)))`, update on resize
- SVG `<pattern>` with path `M {cell} 0 L 0 0 0 {cell}`
- Offset grid with eased parallax: normalize smoothed cursor to container (`cx`, `cy` from −0.5 to 0.5), ease offset toward `cx*16` / `cy*16` with factor **0.06**
- Pattern `x`/`y` = that eased offset

On viewports below `lg`, hide this interactive background and instead show a static bordered image of BG_IMAGE_1 in a section below the hero (`aspect-[4/5]` mobile, `sm:aspect-[16/9]`, border `border-gray-200`).

---

## PAGE STRUCTURE & EXACT COPY

Root: `min-h-screen bg-white text-black font-jakarta flex flex-col justify-between relative overflow-hidden`.

### 1. Header (z-20)
Padding: `paddingInline: var(--pad-x)`, `paddingTop: var(--header-pt)`, `paddingBottom: var(--section-gap)`. Flex space-between.

**Logo (left):** Orbitron black/900, letter-spacing `0.15em`, size `var(--logo)`. Text: `LGPSM` + small degree symbol `˚` (size `var(--logo-deg)`, slightly raised `-mt-0.5 ml-0.5`). Clicking closes any open drawer. Hover opacity 80%.

**Nav (right):** Plus Jakarta Sans, medium, uppercase, tracking `0.2em`, size `var(--nav)`, gap `var(--gap-nav)`.
Links (buttons): `SHOP` | `COLLECTIONS` | `JOURNAL` then gray `|` divider then lucide `ShoppingBag` icon (stroke 1.5, size `var(--icon)`).
Hover: opacity 50%. Cart shows black circular badge with item count when cart has items.

### 2. Main hero (flex-1)
Padding: `paddingInline: var(--pad-x)`, `paddingBlock: var(--main-py)`. Layout: column on mobile, `lg:flex-row` space-between.

**Left block** (vertically centered):
1. Small top-left L-corner bracket SVG (stroke 1.5, size `var(--corner)`)
2. Headline — Orbitron extrabold, uppercase, tracking `0.08em`, leading `1.05`, size `var(--headline)`, three lines:
   - `FUTURE`
   - `FORWARD`
   - `FASHION` + inline **checkerboard grid SVG** (viewBox `0 0 36 18`, 4 rows of 3.8×3.8 black squares; even rows shifted by 2.25; size `var(--checker-w)` × `var(--checker-h)`, slightly translated down 2px)
3. Bottom-left L-corner bracket
4. CTA button: border `border-gray-400`, rounded-md, uppercase `SHOP NOW` + lucide `ArrowUpRight`. Tracking `0.18em`, size `var(--body)`, padding `var(--btn-px)` / `var(--btn-py)`. Hover: fill black, text white, border black; icon nudges up-right.

**Right lower feature block** (`self-end`, bottom-aligned on desktop):
Framed box with four corner bracket SVGs (TL/TR/BL/BR) at absolute corners — no filled card background. Inside:
- Wireframe globe SVG (viewBox `0 0 64 64`, stroke 1.2: outer circle r=28, equator line, 2 horizontal ellipses, meridian line, 2 vertical ellipses), size `var(--globe)`
- Tagline in Plus Jakarta Sans semibold uppercase tracking `0.18em`, size `var(--body)`:
  - `BEYOND TRENDS.`
  - `BUILT FOR TOMORROW.`
min-width `var(--feature-min)`, padding `var(--feature-pad)`.

### 3. Side drawers (exact)
Clicking SHOP / COLLECTIONS / JOURNAL / cart opens a right-side white drawer over dimmed backdrop (`bg-black/20 backdrop-blur-xs`). Max width `var(--drawer-max)`, padding `var(--drawer-pad)`, border-left gray. Header: Orbitron bold uppercase title + lucide `X` close. Click backdrop to close.

**SHOP → title `Catalog`**
Subtitle: `Featured Garments`
Items (exact):
1. CYBER-TEX OVERCOAT — $850 — tag LIMITED EDITION
2. GEO-MESH TECH HOODIE — $320 — tag NEW DROP
3. ORBITAL TAPERED TROUSERS — $290 — tag IN STOCK
4. MODULAR ALL-WEATHER VEST — $410 — tag PRE-ORDER  
Each row: tag (micro gray), title, price, `ADD` button. ADD adds to cart and shows toast: `Added "{title}" to your shopping bag.` (3s, black toast top-right with lucide Check emerald).

**COLLECTIONS → title `Archive 2026`**
Subtitle: `Season Lineup`
1. SERIES 01 — SYNTHETIC HORIZONS — Ultra-durable weather-sealed fabrics with minimalist silhouette architecture.
2. SERIES 02 — KINETIC FORM — Ergonomic streetwear designed for maximum mobility and temperature equilibrium.
3. SERIES 03 — MONOCHROME ZERO — Pure black and white structural tailoring crafted from 100% recycled polymers.

**JOURNAL → title `Editorial`**
Subtitle: `Latest Dispatches`
1. AUG 2026 — THE ARCHITECTURE OF NEXT-GEN TEXTILES — 4 MIN READ
2. JUL 2026 — CIRCULAR DESIGN IN HIGH-END APPAREL — 6 MIN READ
3. JUN 2026 — MINIMALISM AS A FUNCTIONAL STATEMENT — 3 MIN READ

**CART → title `Shopping Bag`**
Empty: ShoppingBag icon + `Your shopping bag is empty.`
With items: list title/price + Remove. Footer: full-width black `CHECKOUT NOW` + ChevronRight → toast `Order submitted successfully!`, clear cart, close drawer.
Non-cart footer: `LGPSM © 2026 — FUTURE FORWARD FASHION` (micro, gray, centered uppercase).

---

## ICONS

lucide-react only: `ShoppingBag`, `ArrowUpRight`, `X`, `ChevronRight`, `Check`. Custom SVGs for: checkerboard, wireframe globe, four L-shaped corner brackets (paths: TL `M0 11.5V0.5H11.5`, TR `M0.5 0.5H11.5V11.5`, BL `M0 0.5V11.5H11.5`, BR `M0.5 11.5H11.5V0.5`, viewBox `0 0 12 12`).

---

## VISUAL RULES

- White page, black ink, gray accents only (`gray-200` / `gray-300` / `gray-400` / `gray-500` / `gray-600` / slate grid `#64748b`)
- No purple, no cream, no glow, no floating badges over hero media, no inset hero cards
- Brand `LGPSM` and headline `FUTURE FORWARD FASHION` dominate first viewport
- First viewport content only: logo/nav, headline + checker, SHOP NOW, globe tagline, and full-bleed dual-image reveal background
- UI text sits above background at z-10/z-20; background is z-0 and non-interactive (`pointer-events-none`)

Recreate this page pixel-faithfully with the exact URLs, exact reveal math (ease 0.1, radius `clamp(160, 16vw, 420)`, gradient stops listed), exact copy, fonts, fluid clamps, and drawer contents above.

---