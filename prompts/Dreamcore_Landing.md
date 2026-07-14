Build a single-page immersive parallax landing page in React + TypeScript + Tailwind CSS using Vite. The page has two scroll-driven scenes inside a sticky viewport. Everything lives in a single `src/App.tsx` file. Use Google Fonts: **Viaoda Libre** (serif headings) and **Imprima** (sans-serif body). No external UI libraries. Use `lucide-react` only as a dependency (it is not used in this page). Use Tailwind for responsive layout breakpoints only; all other styling is inline React `CSSProperties`.

---

### GLOBAL SETUP

**`tailwind.config.js`** -- Override the `xl` breakpoint to `1100px`:
```js
screens: { xl: '1100px' }
```

**`index.css`** -- Include Tailwind directives, global reset, dark background `#0a0608`, `font-family: 'Imprima', sans-serif`, `scrollbar-gutter: stable`, and a `@keyframes bobUp` animation that translates Y by `-6px` at 50%.

**`index.html`** -- Load Google Fonts via `<link>`:
```
https://fonts.googleapis.com/css2?family=Viaoda+Libre&family=Imprima&display=swap
```
Title: "Step Into Wonder"

---

### IMAGE ASSETS (use these exact URLs)

```
PORTAL_BG    = "https://res.cloudinary.com/dy5er7kv5/image/upload/q_auto/f_auto/v1779707217/image_1_vdzwae.png"
CURTAIN_LEFT = "https://res.cloudinary.com/dy5er7kv5/image/upload/q_auto/f_auto/v1779706559/curtain_left_znkmva.png"
CURTAIN_RIGHT= "https://res.cloudinary.com/dy5er7kv5/image/upload/q_auto/f_auto/v1779706564/curtain_right_paeyym.png"
WORLD_BG     = "https://res.cloudinary.com/dy5er7kv5/image/upload/q_auto/f_auto/v1779706392/image_2_gkcdlx.png"
BOTTOM_CLOUDS= "https://res.cloudinary.com/dy5er7kv5/image/upload/q_auto/f_auto/v1779706555/bottom_clouds_xskut6.png"

CARD_IMAGES[0] = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260525_160507_2ccbb4eb-1469-484f-af25-59168ad9a233.png&w=1280&q=85"
CARD_IMAGES[1] = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260525_160644_072a7f68-a101-4ded-a332-7d37707dbdd1.png&w=1280&q=85"
CARD_IMAGES[2] = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260525_160706_1c153d04-0dfb-4ac9-a4ef-e74f301c329c.png&w=1280&q=85"
```

---

### SCENE 2 CARD DATA (9 cards for the arc slider)

```
{ title: 'Hidden Realms',   desc: 'Luminous sanctuaries unseen by wandering eyes',  color: '#f3cdd6' }
{ title: 'Wild Solitudes',  desc: 'Dissolve into untamed horizons and deep calm',   color: '#dcedc2' }
{ title: 'Silent Havens',   desc: 'Remote escapes far beyond ordinary reach',       color: '#c3e3f4' }
{ title: 'Bespoke Quests',  desc: 'Journeys shaped around your vision and soul',    color: '#f0e4c0' }
{ title: 'Vivid Drifts',    desc: 'Surreal passages through breathtaking terrain',  color: '#dcd2f2' }
{ title: 'Mystic Crests',   desc: 'Timeless ridgelines wrapped in cloud and myth',  color: '#f3cdd6' }
{ title: 'Deep Currents',   desc: 'Glowing depths alive with uncharted wonder',     color: '#c3e3f4' }
{ title: 'Gilded Dusk',     desc: 'Amber horizons that stretch past all reason',    color: '#f0e4c0' }
{ title: 'Glassy Tides',    desc: 'Calm waters holding skies of pure stillness',    color: '#dcedc2' }
```

---

### ARCHITECTURE

The outer container is `height: 480vh; position: relative`. Inside it is a `position: sticky; top: 0; height: 100vh; overflow: hidden; background: #0a0608` viewport. All layers stack via absolute positioning and z-index.

**Scroll progress** = `window.scrollY / (container.scrollHeight - window.innerHeight)`, clamped 0-1.

**Helper functions:**
- `easeInOut(t)`: quadratic ease `t < 0.5 ? 2*t*t : -1 + (4 - 2*t)*t`
- `lerp(a, b, t)`: linear interpolation
- `clamp(val, min, max)`

**`useIsMobile()`** hook: `matchMedia('(max-width: 767px)')` -- returns boolean.

---

### LAYER STACK (bottom to top by z-index)

#### Layer 1: World Background (z-index: auto/0)
- `ref={worldRef}`, absolute inset 0, `transformOrigin: '50% 50%'`
- `WORLD_BG` image, `object-fit: cover`
- Parallax: `scale(lerp(1, 1.18, ep))`, mouse offset `MAG.world = 6`

#### Layer 2: Bottom Clouds (z-index: 10)
- `ref={cloudsRef}`, absolute bottom:0, left:0, right:0, `transformOrigin: '50% 100%'`
- `BOTTOM_CLOUDS` image, `width: 100%, height: auto`
- Parallax: `scale(lerp(1, 1.4, ep))`, mouse offset `MAG.clouds = 9` (Y dampened to `0.4x`)
- Opacity: fades from 0.7 to 1 in the first 5% of scroll

#### Layer 2.5: Arc Card Slider (z-index: 9)
- Absolute, `bottom: 60px (mobile) / 80px (desktop)`, centered horizontally
- Opacity = `scene2Opacity`
- Contains `<ArcCardSlider>` component (details below)

#### Layer 3: Portal Frame (z-index: 15)
- `ref={portalRef}`, absolute inset 0, `transformOrigin: '52% 38%'`
- `PORTAL_BG` image, `object-fit: cover`
- Parallax: `scale(lerp(1, 7.5, ep))`, mouse offset `MAG.portal = 7`
- Opacity: 1 until scroll 0.65, then fades to 0 by scroll 0.85

#### Layer 3.5: Bottom Fade (z-index: 16)
- Absolute bottom, `height: 40%`, `linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 100%)`, `pointer-events: none`

#### Layer 4L: Curtain Left (z-index: 16)
- `ref={curtainLRef}`, absolute inset 0, `transformOrigin: 'left center'`
- `CURTAIN_LEFT` image, `object-fit: cover`, `object-position: right center`
- On mount (after 100ms), shifts left by `translateX(-62%)` with `transition: transform 1.8s cubic-bezier(0.16, 1, 0.3, 1)`
- On scroll: additional `translateX` via `lerp(0, 150, ep)%`, scale `lerp(1, 1.3, ep)`
- Mouse offset: `MAG.curtainL = 14` (Y dampened to `0.3x`)
- After entrance animation (2200ms), transition switches to `none` for responsive parallax

#### Layer 4R: Curtain Right (z-index: 16)
- Mirror of Layer 4L but `transformOrigin: 'right center'`, `object-position: left center`
- Shifts right instead of left, `MAG.curtainR = 14`

#### Top Fade Gradient (z-index: 45)
- Absolute top, `height: 42vh`, `linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 100%)`, `pointer-events: none`

---

### NAVIGATION (z-index: 50)

Absolute top, full width, `display: flex, justify-content: space-between, align-items: center`.

**Nav link style:** `font-family: 'Imprima', sans-serif`, `font-size: 12px`, `letter-spacing: 0.12em`, `text-transform: uppercase`, `color: #fff`, `opacity: 0.9`, no text decoration.

**Mobile** (`padding: 18px 20px`): Three items -- "Explore" (11px) | StarLogo SVG | "Connect" (11px)

**Desktop** (`padding: 22px 48px`): Left group ["Worlds", "Atelier", "Immersions"] with `gap: 36px` | StarLogo SVG center | Right group ["Craft", "Codex", "Connect"] with `gap: 36px`

**StarLogo** -- inline SVG, 28x28, white star path + 3 small circles:
```
<path d="M14 2l2.09 6.42H23l-5.45 3.96 2.09 6.42L14 14.84l-5.64 4.06 2.09-6.42L4.96 8.42h6.95L14 2z" fill="white" opacity="0.9" />
<circle cx="14" cy="24" r="1.5" fill="white" opacity="0.6" />
<circle cx="6" cy="6" r="1" fill="white" opacity="0.4" />
<circle cx="22" cy="6" r="1" fill="white" opacity="0.4" />
```

---

### SCENE 1 UI (z-index: 20)

Opacity = `clamp(1 - scrollProgress / 0.22, 0, 1)`. Fades out in first ~22% of scroll.

Uses **three separate Tailwind-responsive layout blocks** (not JS branching for layout):

#### Mobile layout (`md:hidden`)
- Centered column, `padding: 80px 24px 100px`
- Fade-in: `opacity 0.9s ease, transform 0.9s ease`, delay `0.3s`, triggers on `uiVisible`
- **Heading** (Viaoda Libre): "FALL > INTO" line (`clamp(26px, 7vw, 42px)`, `tracking-widest`, color `#3b1a0a`) then "REVERIE" (`clamp(52px, 16vw, 80px)`, `tracking-tight`, `leading-none`, color `#3b1a0a`). The ">" is a `›` character in color `#6b2e0e` at `0.8em`. "INTO" is italic.
- **Subtext** (Imprima): "Crafting boundless digital worlds where the edge between AI, vision, and living myth dissolves." -- `15px`, `leading-relaxed`, color `#5c2d0e`, `max-width: 280px`
- **Single card**: 140x140px, `border-radius: 22px`, `CARD_IMAGES[0]` as background-cover, `box-shadow: 0 8px 32px rgba(0,0,0,0.5)`. Bottom gradient overlay (60% height). Bottom-left overlay: white circle (26px) with play triangle SVG + "View Reel" text (13px, white).

#### Tablet layout (`hidden md:flex xl:hidden`)
- Centered column, `gap: 28px`, `padding: 80px 32px 96px`
- Same fade-in animation as mobile
- **Heading**: same structure as mobile but dark brown text (`#3b1a0a`), sizes `clamp(28px, 5vw, 44px)` / `clamp(60px, 12vw, 86px)`
- **Subtext**: same text, `16px`, color `#5c2d0e`, `max-width: 400px`
- **Three cards in a row** (`flex gap-3.5`): each 140x140px, `border-radius: 22px`. Each has:
  - Background gradient overlay (60% height, multi-stop)
  - Backdrop blur layer (44% height, masked gradient)
  - Card 1: play button + "View Reel"
  - Card 2: number "32" (Viaoda Libre, 28px, white) + "World Patrons"
  - Card 3: play button + "View Reel"

#### Desktop layout (`hidden xl:block` / `hidden xl:flex`)
- **Heading block**: absolute, `top: 46%`, `left: 60px`, `maxWidth: 440px`, `translateY(-50%)` centered
  - White text with heavy `text-shadow: 0 2px 24px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.9)`
  - "FALL > INTO": `clamp(32px, 4.5vw, 54px)`, `line-height: 1.1`, `letter-spacing: 0.04em`. The `>` is `rgba(255,220,180,0.7)`.
  - "REVERIE": `clamp(50px, 7.5vw, 88px)`, `line-height: 0.9`, `letter-spacing: -0.02em`
  - Subtext: `18px`, `line-height: 1.7`, color `rgba(255,245,235,0.88)`, `max-width: 300px`, `text-shadow: 0 1px 12px rgba(0,0,0,0.8)`
  - Fade-in: opacity+transform, delay `0.3s`

- **Cards block**: absolute, `right: 40px`, `top: 50%`, `translateY(-50%)`, `flex gap: 12px`
  - Three cards, each 158x158px, `border-radius: 28px`, `box-shadow: 0 8px 32px rgba(0,0,0,0.45)`
  - Each has: gradient overlay, backdrop blur layer (same as tablet), bottom content area at 12px inset
  - Play cards: 30px white circle + 18px "View Reel"
  - Number card: "32" at 36px Viaoda Libre + 18px "World Patrons"
  - Fade-in delay: `0.55s`

#### Slider Dots (bottom of Scene 1)
- Absolute, bottom `28px (mobile, centered)` / `40px (desktop, left: 60px)`
- 4 dots: first is `28px wide`, rest `14px`, all `4px tall`, `border-radius: 2px`
- Active dot: `rgba(255,255,255,0.9)`, inactive: `rgba(255,255,255,0.35)`
- Fade-in delay: `0.8s`

#### Scroll Cue (desktop only)
- Absolute `bottom: 36px`, centered
- "DESCEND" text: `10px`, `letter-spacing: 0.22em`, uppercase, `rgba(255,255,255,0.6)`
- Below: `ScrollChevron` -- 34px circle with 1.5px border `rgba(255,255,255,0.5)`, chevron SVG inside, `animation: bobUp 1.8s ease-in-out infinite`
- Fade-in delay: `0.9s`

---

### SCENE 2 UI (z-index: 46)

Opacity = `clamp((scrollProgress - 0.68) / 0.16, 0, 1)`. Fades in between scroll 68%-84%.

- Centered column
- **Heading** (Viaoda Libre): "FORGE BEYOND THE REAL" -- `clamp(28px, 8vw, 44px) mobile / clamp(38px, 6.5vw, 78px) desktop`, white, `letter-spacing: 0.03em`, `line-height: 1.05`, `text-shadow: 0 2px 20px rgba(0,0,0,0.4)`
- **Subtext** (Imprima): "Singular voyages to astonishing destinations, shaped for those who seek beauty beyond the ordinary and the known." -- `14px mobile / 20px desktop`, `line-height: 1.6`, `letter-spacing: -0.01em`, `max-width: 260px mobile / 480px desktop`, color `rgba(255,255,255,0.82)`
- Margin-top: `8vh mobile / 12vh desktop`

---

### ARC CARD SLIDER COMPONENT

Props: `cards[]`, `rotationOffset: number`, `isMobile: boolean`

**Layout math:**
- `cardSpacingDeg`: 12 (mobile) / 9 (desktop) degrees between cards
- `centerIndex`: `Math.floor(totalCards / 2)`
- `arcRadius`: 700 (mobile) / 1100 (desktop) px
- `cardW`: 160 (mobile) / 220 (desktop) px
- `cardH`: 175 (mobile) / 230 (desktop) px
- `sliderH`: 260 (mobile) / 360 (desktop) px

**`rotationOffset`** is driven by scroll: `lerp(0, arcSweepDeg, clamp((scrollProgress - 0.70) / 0.30, 0, 1))` where `arcSweepDeg = (totalCards - 1) * 10`.

**Per card positioning:**
```
baseDeg = (i - centerIndex) * cardSpacingDeg
deg     = baseDeg - rotationOffset + (centerIndex * cardSpacingDeg)
rad     = deg * PI / 180
x       = sin(rad) * arcRadius
y       = arcRadius - cos(rad) * arcRadius
```
Each card is absolutely positioned at `bottom: -y + (140 mobile / 200 desktop)px`, `left: calc(50% + x - halfW)`, `transform: rotate(deg)`, `transformOrigin: halfW arcRadius`.

**Card appearance:**
- Rounded rect (`18px mobile / 26px desktop`), background = `card.color` (pastel)
- `box-shadow: 0 8px 40px rgba(80,40,60,0.18)`
- Top-right: numbered circle (24px, `1.5px border rgba(80,50,60,0.3)`, text `rgba(80,50,60,0.6)`, 10px Imprima) showing zero-padded index
- Bottom: card title in Viaoda Libre (`22px mobile / 30px`, color `#3a2530`) + description in Imprima (`12px mobile / 15px`, color `rgba(58,37,48,0.65)`)

---

### ENTRANCE ANIMATION SEQUENCE

1. **t=100ms**: Curtains open -- `curtainsOpenRef` flips to true, causing 62% horizontal shift on each curtain with `1.8s cubic-bezier(0.16, 1, 0.3, 1)` transition
2. **t=600ms**: `uiVisible` = true -- all Scene 1 UI elements fade/slide in with staggered delays (0.3s heading, 0.55s cards, 0.8s dots, 0.9s scroll cue)
3. **t=2200ms**: `entranceDone` = true -- curtain CSS transition switches to `none` so parallax is instant

---

### MOUSE PARALLAX (desktop)

`requestAnimationFrame` loop smooths raw mouse position at `speed = 0.07` (lerp). Each layer is offset by its `MAG` value in the reverse direction of the mouse. The transforms combine mouse offset with scroll-driven scale/translate.

**MAG values:** world=6, clouds=9, portal=7, curtainL=14, curtainR=14