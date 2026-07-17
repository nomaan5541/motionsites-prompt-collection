Build a single-page landing website for a fictional outdoor technical gear brand called **ALP1NE** (stylized as `ALP1NE™`). It should be a vanilla HTML/CSS/JS page served by Vite (no React, no frameworks). The entire site lives in one `index.html` file with inline `<style>` and `<script>` tags. Use the font **Inter Tight weight 600 only** from Google Fonts.

---

### GLOBAL SETUP

- Title: `ALP1NE™`
- Font: `Inter Tight`, weight 600 only. Load via: `https://fonts.googleapis.com/css2?family=Inter+Tight:wght@600&display=swap`
- Add `<link rel="preconnect">` for: `fonts.googleapis.com`, `fonts.gstatic.com` (crossorigin), `i.ibb.co` (crossorigin), `d8j0ntlcm91z4.cloudfront.net` (crossorigin)
- CSS reset: `* { box-sizing: border-box; margin: 0; padding: 0; }`
- `html`: `overscroll-behavior: none; overflow-x: hidden;`
- `body`: `background-color: transparent; font-family: "Inter Tight", sans-serif; font-weight: 600; min-height: 100vh; overflow-x: hidden;`

---

### SECTION 1: FIXED BACKGROUND VIDEO (Hero)

A full-viewport fixed video that scrubs forward/backward based on scroll position (not autoplaying normally).

- Container (`#background-wrapper`): `position: fixed; top: 0; left: 0; width: 100%; height: 100vh; z-index: 1; overflow: hidden;`
- Video element (`#bg-video`, class `bg-video`): `width: 100%; height: 100%; object-fit: cover; display: block;`
- Video attributes: `playsinline webkit-playsinline autoplay muted preload="auto" referrerpolicy="no-referrer"`
- **Video URL**: `https://d8j0ntlcm91z4.cloudfront.net/user_39ca84eAE1ODL9hbR5VhoEj8tBf/hf_20260706_124521_30407ad9-28f0-481c-9d64-641c619e47e0.mp4`
- The video is "primed" on load for iOS Safari compatibility (muted play then immediate pause to unlock frame-accurate seeking).
- Scroll-to-video mapping: The hero spacer is 250vh tall. As the user scrolls from 0 to that height, `video.currentTime` is lerped from 0 to `video.duration` using `requestAnimationFrame` with smoothing factor 0.12.

---

### SECTION 2: FIXED HEADER (Navigation Bar)

A fixed header at the very top (`z-index: 100`) with three groups: left, center, right.

- Container (`#header-container`): `position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; justify-content: space-between; align-items: center; padding: 12px 14px 0; background: transparent;`

**Cell/Pill base style** (class `.cell`):
- `background-color: #ffffff` (solid white, NOT translucent, for header cells)
- `backdrop-filter: none`
- `color: #000000`
- `font-family: "Inter Tight", sans-serif; font-weight: 600; font-size: 18px; letter-spacing: 0.01em;`
- `padding: 10px 14px; border-radius: 3px; white-space: nowrap; display: inline-flex; align-items: center; justify-content: center;`

**Left group** (`#header-left`): `display: flex; gap: 6px; align-items: center;`
- Cell 1: `ALP1NE™` (id: `cell-brand`)
- Cell 2: Live clock (id: `clock-text`) showing `HH:MM:SS (PST) Weekday Month D YYYY` format, updated every second via `setInterval`. Uses browser local time.

**Center group** (`#header-center`): `display: flex; gap: 6px; align-items: center;`
- Cell: `Collection` (class `center-cell`, `min-width: 140px`)
- Cell: `Journal` (class `center-cell`)
- Cell: `About` (class `center-cell`)

**Right group** (`#header-right`): `display: flex; gap: 6px; align-items: center;`
- Cell: `Instagram`
- Cell: `Press`
- Cell: `Menu` (id: `menu-toggle-btn`, hidden on desktop via `display: none !important`, shown on tablet/mobile)

---

### SECTION 3: MOBILE/TABLET MENU OVERLAY

At `<=1024px` viewport: hide clock, center nav, Instagram, and Press from the header. Show only `ALP1NE™` and `Menu` button. The `Menu` button toggles a fullscreen overlay.

- Overlay (`#mobile-menu-overlay`): `position: fixed; inset: 0; z-index: 99;`
- Inactive state: `opacity: 0; pointer-events: none; background: rgba(0,0,0,0); backdrop-filter: blur(0px);`
- Active state (class `.active`): `opacity: 1; pointer-events: auto; background: rgba(0,0,0,0.08); backdrop-filter: blur(25px);`
- Transition: `opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)` + matching for background-color and backdrop-filter.
- Content (`.mobile-menu-content`): centered column with `gap: 14px`.
- Each `.cell` inside starts at `opacity: 0; transform: translateY(20px) scale(0.96);` and animates to `opacity: 1; transform: translateY(0) scale(1);` with staggered delays (0.04s increments per child).
- Items: Clock (non-interactive), Collection, Journal, About, Instagram, Press.
- Clicking `Menu` toggles `.active` class and changes button text to `Close`. Clicking any menu item also closes.
- At `<=1024px`, brand cell and menu toggle shrink to `font-size: 16px; padding: 10px 14px;`

---

### SECTION 4: BOTTOM TITLE (Fixed Overlay Text)

A fixed text element at the bottom of the viewport that animates on scroll.

- Container (`#bottom-title-container`): `position: fixed; bottom: 12px; left: 14px; right: 14px; z-index: 19; pointer-events: none; display: flex; justify-content: center; align-items: flex-end; mix-blend-mode: difference;`
- Text (h1, class `bottom-title-text`): `font-size: 80px; font-weight: 600; line-height: 1.0; letter-spacing: -0.015em; text-transform: uppercase; color: #ffffff; mix-blend-mode: difference; text-align: center;`
- Content: `We work in weathered nylon, laminated layers, and raw shell.`
- Responsive: 60px at <=1200px, 40px at <=768px, 28px at <=480px.
- **Scroll animation**: As the user scrolls through the hero (0% to 85% of hero spacer height), the title:
  - Translates up by 150px
  - Scales down from 1.0 to 0.8
  - Fades out (opacity 1 to 0, starting at 30% progress)
  - Blurs up to 24px
  - All smoothed with lerp factor 0.12 per frame.

---

### SECTION 5: SCROLLABLE CONTENT — HERO SPACER

- A transparent div (class `hero-spacer`): `height: 250vh; pointer-events: none;`
- This creates the scroll distance that drives the video scrub and title animation. The first viewport of the page shows the fixed video + bottom title; scrolling through this spacer plays the video forward.

---

### SECTION 6: OLIVE/KHAKI TEXT BLOCK WITH PARALLAX GEAR COLLAGE

After the hero spacer, a section with dark olive background, large white text (with `mix-blend-mode: difference`), and scattered product cutout images that parallax on scroll.

**Section container** (class `yellow-text-section`):
- `background-color: #575234; width: 100%; padding: 224px 24px; display: flex; justify-content: center; align-items: center; position: relative; z-index: 20;`
- CSS variable `--pscale: 1` (scales down at breakpoints: 0.72 at <=1200px, 0.5 at <=768px, 0.4 at <=480px)

**Text block** (`.text-block-container`):
- `max-width: 1406px; width: 100%; margin: 0 auto; color: #ffffff; mix-blend-mode: difference; display: flex; flex-direction: column; gap: 32px; position: relative; z-index: 10;`
- Each `<p>`: `font-size: 70px; line-height: 1.05; letter-spacing: -0.03em; text-indent: 140px; text-align: left;`
- Responsive: 54px/100px indent at <=1200px, 34px/60px at <=768px, 24px/40px at <=480px.

**Text content** (5 paragraphs with decorative Unicode symbols inline):
1. `We build gear ⟡ for people who see the outdoors ≠ as more than scenery ∴ they see it as a challenge.`
2. `Every jacket ⊹ every layer ⊹ every detail is engineered ∿ to perform in the harshest conditions ⟶ so you can stay focused on the journey.`
3. `We believe true performance ⟡ isn't measured by appearance ∴ but by how your gear responds to rain ∧ snow ∧ relentless wind ∧ high-altitude environments.`
4. `Whether you're heading into a multi-day expedition ↟ climbing a summit ◇ or hiking before sunrise ⊹ our equipment is built to help you move with confidence.`
5. `Because the moments that matter most begin where comfort ends ✦ adventure begins.`

**Parallax gear images** — Scattered product cutout PNGs in two layers:

BACK LAYER (`.parallax-layer.back`, `z-index: 5` — behind text):
- Jacket: `https://order-twine-70493179.figma.site/_components/v2/5922cc7522062a402e02d607e26cc654a692d2ad/jacket.fca57bc0.png` | class `item-jacket` | position: `top: 2%; left: 7%` | width: `calc(640px * var(--pscale))` | data-speed="0.14" data-drift="-0.22" data-rot="-0.6"
- Gaiters: `https://order-twine-70493179.figma.site/_components/v2/5922cc7522062a402e02d607e26cc654a692d2ad/gaiters.aa2524de.png` | class `item-gaiters` | position: `top: 58%; left: 74%` | width: `calc(346px * var(--pscale))` | data-speed="0.42" data-drift="0.26" data-rot="-1.0"

FRONT LAYER (`.parallax-layer.front`, `z-index: 11` — in front of text):
- Shorts: `https://order-twine-70493179.figma.site/_components/v2/5922cc7522062a402e02d607e26cc654a692d2ad/shorts.1a032e36.png` | class `item-shorts` | position: `top: 9%; left: 66%` | width: `calc(326px * var(--pscale))` | data-speed="0.44" data-drift="0.28" data-rot="0.9"
- Cap: `https://order-twine-70493179.figma.site/_components/v2/5922cc7522062a402e02d607e26cc654a692d2ad/cap.b10e4e2c.png` | class `item-cap` | position: `top: 33%; left: 7%` | width: `calc(310px * var(--pscale))` | data-speed="0.46" data-drift="-0.30" data-rot="1.4"
- Scarf: `https://order-twine-70493179.figma.site/_components/v2/5922cc7522062a402e02d607e26cc654a692d2ad/scarf.427effaf.png` | class `item-scarf` | position: `top: 28%; left: 64%` | width: `calc(467px * var(--pscale))` | data-speed="0.30" data-drift="0.24" data-rot="-1.2"
- Backpack: `https://order-twine-70493179.figma.site/_components/v2/5922cc7522062a402e02d607e26cc654a692d2ad/backpack.0558dccb.png` | class `item-backpack` | position: `top: 50%; left: 37%` | width: `calc(596px * var(--pscale))` | data-speed="0.18" data-drift="0.16" data-rot="0.5"
- Boot: `https://order-twine-70493179.figma.site/_components/v2/5922cc7522062a402e02d607e26cc654a692d2ad/boot.545d53aa.png` | class `item-boot` | position: `top: 72%; left: 13%` | width: `calc(224px * var(--pscale))` | data-speed="0.60" data-drift="-0.30" data-rot="1.8"

**Parallax animation logic**:
- Each item has `data-speed`, `data-drift`, and `data-rot` attributes.
- On each animation frame, calculate how far the viewport center is from the section center, normalize to a -1.2..1.2 range, smooth with lerp 0.12.
- Vertical offset: `-smoothP * speed * 520px`
- Horizontal offset: `smoothP * speed * drift * 520px`
- Rotation: `smoothP * rot * 4deg`
- Applied via `transform: translate3d(x, y, 0) rotate(r)`

---

### SECTION 7: LOOP SCROLL SPACER

- A div (`#loop-scroll-spacer`): `height: 3400px; width: 100%; background-color: #575234; position: relative; z-index: 20;`
- This olive-colored spacer provides scroll distance that drives the product slider reveal animation below.

---

### SECTION 8: PRODUCT SLIDER (Scroll-Driven Clip-Path Reveal)

A fixed overlay that reveals through an expanding clip-path window as the user scrolls through the loop-scroll-spacer, then swipes horizontally between full-screen product cards.

**Overlay** (`#product-slider-overlay`): `position: fixed; inset: 0; z-index: 30; display: flex; clip-path: inset(50% 50% 50% 50%);`

**Reveal animation**:
- Calculated from the bottom of the page: `REVEAL_PX = 700` scroll pixels for the window to open, then `CARD_PX = 900 * (NUM_CARDS - 1)` scroll pixels for card transitions.
- The clip-path animates from `inset(50% 50% 50% 50%)` (invisible) to `inset(0px 0px round 3px)` (full viewport) using `easeInOutCubic` easing, smoothed with lerp 0.15.

**Card track** (`#product-slider-track`): `display: flex; height: 100%; will-change: transform;`

**Product cards** (4 cards, each `100vw x 100vh`, `flex-shrink: 0`):

1. Image: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260707_111701_92784626-1c2b-4db6-afd7-dd456e7a4717.png&w=1920&q=85` | Label: `Shell Jacket ↟` | Price: `$1,200`
2. Image: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260707_111730_62a35ec8-335d-4bea-9337-780589328a03.png&w=1920&q=85` | Label: `Arc Layer ◇` | Price: `$890`
3. Image: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260707_111749_b8ced0e0-177c-4cca-9d14-b3fdd7bedf27.png&w=1920&q=85` | Label: `Field Cap ⊹` | Price: `$180`
4. Image: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260707_111837_c28c966d-4a92-408f-8ac3-0c9bac445704.png&w=1920&q=85` | Label: `Summit Haul 40 ↟` | Price: `$540`

**Card image styling**: `width: 140%; height: 100%; object-fit: cover; margin-left: -20%;` with horizontal parallax (18% shift factor) as cards scroll.

**Card info overlay**: positioned `bottom: 32px; left: 32px;` as a flex row with gap 8px. Each info cell is solid white, `font-size: 18px; padding: 13px; letter-spacing: -0.03em;`

**Center symbol** (`#slider-symbol`): `position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 600px; color: #ffffff; mix-blend-mode: difference; z-index: 51; transition: opacity 0.2s ease;`
- Randomly swaps between these Unicode symbols on each card transition: `◇ ≠ ↟ ✦ ⊹ ∧ ⟡ ∴ ⟶ ∿`
- Swap animation: fade out opacity to 0, wait 150ms, change character, fade back to 1.
- At <=768px: `font-size: 200px`

---

### ANIMATION ARCHITECTURE (requestAnimationFrame loop)

One single `requestAnimationFrame` loop (`animate()`) drives everything:

1. **Video scrub**: Maps scroll position (0 to hero spacer height) to video currentTime (0 to duration). Smoothed with lerp 0.12. Rate-limited to seek no more than every 30ms.
2. **Title animation**: Maps scroll fraction (0-0.85) to translateY (-150px), scale (1.0 to 0.8), opacity (fade starting at 30%), and blur (up to 24px). Also fades with the slider reveal.
3. **Parallax gear items**: Activates when viewport is near the olive section. Normalized distance drives per-item transforms.
4. **Slider reveal**: Last portion of scroll (bottom REVEAL_PX + CARD_PX of total page) drives clip-path expansion with easeInOutCubic.
5. **Card swipe**: After reveal completes, remaining scroll drives horizontal translateX on the track.
6. **Card image parallax**: Each card image shifts horizontally based on its distance from the current position.
7. **Symbol swap**: Fires when the rounded card index changes.

All values use lerp smoothing (factors 0.12-0.15) for buttery 60fps animation without any libraries.

---

### iOS / MOBILE COMPATIBILITY

- Video is primed via `play().then(pause())` pattern on load and on first touch/click events.
- All `-webkit-` prefixes included for clip-path and backdrop-filter.
- `playsinline` and `webkit-playsinline` attributes on video.
- Touch events registered as `{ passive: true }`.