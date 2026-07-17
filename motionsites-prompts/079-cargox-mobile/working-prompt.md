Create a Vite + React + TypeScript + Tailwind CSS project that displays 3 iPhone mockups side-by-side (stacking vertically on mobile). Each phone contains a different screen of the "CARGOX GROUP" logistics website. Use `motion/react` (Framer Motion v11+) for animations and `lucide-react` for icons.

---

### FONTS

- Google Fonts: `Barlow Condensed` weight 800 only
- System: `Helvetica, Arial, sans-serif` for body text

Import in CSS:
```
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@800&display=swap');
```

---

### COLOR PALETTE

- Background (page): `#0a0a0a`
- Hero screen background: `#06181B`
- Yellow accent: `#ffda00`
- Dark teal/navy: `#002a35`
- Contact screen background: `#0a1f2b`
- Info section gradient: `linear-gradient(180deg, #C8C7B3 0%, #F0B172 50%, #EA7C58 100%)`
- Phone frame: `#1a1a1a` background, `#2a2a2a` 8px border, `inset 0 0 0 2px #3a3a3a`
- Text gray: `#b0b8bc`
- Text dark: `#1a1a1a`
- Footer text: `#6b7a80`

---

### PHONE MOCKUP (CSS, not a library)

Each phone is a div with class `iphone-frame`:
- `aspect-ratio: 393 / 852` (iPhone 15 Pro proportions)
- `height: 95vh; max-height: 900px` on desktop
- `border-radius: 54px`
- `border: 8px solid #2a2a2a`
- `box-shadow: 0 0 0 2px #0a0a0a, 0 40px 80px rgba(0,0,0,0.6), 0 20px 40px rgba(0,0,0,0.4), inset 0 0 0 2px #3a3a3a`
- Contains: Dynamic Island notch (absolute, top 12px, centered, 126x36px, `#000`, border-radius 20px, z-index 200)
- Contains: Screen area (flex:1, overflow hidden, border-radius 46px)
- Contains: Home indicator (absolute, bottom 8px, centered, 134x5px, `rgba(255,255,255,0.3)`, border-radius 3px, z-index 200)
- The screen inner is `position: absolute; inset: 0; overflow-y: auto; overflow-x: hidden` with hidden scrollbar

---

### LAYOUT

`.showcase-wrapper`:
- `display: flex; align-items: center; justify-content: center`
- `width: 100%; min-height: 100%; padding: 40px 24px; gap: 50px`

Phone order (left to right): InfoSection, HeroSection, ContactSection

On mobile (max-width 900px): stack vertically, gap 50px, padding 20px. Frame becomes `width: 393px; height: auto`. The `.phone-mockup` container gets CSS `zoom` via JS: `Math.min(1, (window.innerWidth - 40) / 393)`.

On medium (901-1200px): frame height 90vh, max-height 800px.

Each phone has entry animation: `opacity: 0, y: 60` -> `opacity: 1, y: 0`, duration 0.9s, ease `[0.16, 1, 0.3, 1]`. Center phone delay 0, side phones delay 0.3.

---

### SCREEN 1: HERO SECTION (center phone)

**Full-height dark screen** (`#06181B` background, `height: 100%`)

**Navbar** (absolute, top 0, left/right 0, z-100, padding 24px, transparent bg):
- Left: Logo text "CARGOX" (white) / "GROUP" (yellow `#ffda00`) -- `Barlow Condensed 800`, 32px, line-height 0.9, uppercase, letter-spacing -0.01em. Animates from `x: -24, opacity: 0`.
- Right: Hamburger icon (lucide `Menu`/`X`, 28px, white, 40x40 button). Animates from `x: 24, opacity: 0`.

**Mobile Menu** (AnimatePresence): when open, fixed full-screen overlay `#6682c2`, z-99. Items: "Services", "Industries", "Company" -- white, 24px, Helvetica. Fade in with stagger (0.05s each), slide from y:20.

**Hero Layout** (height 100%, flex column):
- **Video area** (63% height, flex-shrink 0): Autoplaying muted loop video:
  `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260620_185230_f7f71ef4-6655-469f-b9c6-efbdc1f7684a.mp4`
  Object-fit cover. Gradient overlay on bottom: `linear-gradient(to bottom, transparent 0%, #06181B 92%, #06181B 100%)`, height 55%, bottom -2px.

- **Text + CTA** (appears after video `onCanPlay`, AnimatePresence, flex-col, justify-end, padding `0 20px 24px`):
  - Big text: `Barlow Condensed 800`, 72px, line-height 0.82, letter-spacing -0.02em, uppercase, overflow clip:
    - "BEYOND" -- white, slides from `x: -400` (0.85s, delay 0)
    - "BORDERS" -- yellow `#ffda00`, text-align right, slides from `x: 400` (0.85s, delay 0.13)
    - "AND LIMITS" -- white, slides from `x: -400` (0.85s, delay 0.26)
  - Margin-bottom 16px between text block and button.

- **CTA Button** (custom SVG shape, full width, 56px height):
  - Background is an SVG `viewBox="0 0 434.001 68"` with fill `#ffda00` -- a pill shape with a circular cutout on the right side (the full SVG path is in the code).
  - Text "Get in touch" -- 20px, `#002a35`, Helvetica, centered in left portion (right 14.43% excluded).
  - Right circle contains an arrow SVG (chevron/arrow pointing up-left, rotating from -135deg to -90deg on hover). Arrow stroke white, strokeWidth 2.2.
  - Hover: scale 1.08, y -2. Tap: scale 0.97.
  - Animates in: opacity 0, y 20 -> visible (0.7s, delay 0.5).

---

### SCREEN 2: INFO SECTION (left phone)

**Single section with warm gradient background**: `linear-gradient(180deg, #C8C7B3 0%, #F0B172 50%, #EA7C58 100%)`. Padding: 60px 20px 40px. Min-height 100%, flex-1, centered.

**Tagline** (useInView animated, marginBottom 32px):
- "LOGISTICS" -- `Barlow Condensed 800`, 64px, line-height 0.9, letter-spacing -0.02em, uppercase, white. Slides from `x: -50`.
- "shaped by scale" / "powered by precision" -- Helvetica 26px, line-height 1.2, letter-spacing -0.02em, `#1a1a1a`. Slides from `x: -30`, delay 0.12.

**Map section** (aspect-ratio 435/340, marginBottom 40px, extends full width with -20px margins):
- Background image: `https://polo-pecan-73837341.figma.site/_assets/v11/b6d561167283e799453232309bd13dd78b2d1afa.png`
  (object-contain, absolute inset-0)

- **Route lines overlay** (positioned at left 10%, top 18%, width 80%, aspect-ratio 299/143):
  SVG viewBox `0 0 299.037 142.509`, overflow visible. 4 animated paths with stroke `#FFDA00`, strokeWidth 2.5:
  ```
  M128.161 74.6764C79.9989 130.001 71.9994 46.0005 20.9815 111.737
  M216.999 9.99985C260.499 12.4998 222.499 71.9998 291.999 58.9998
  M130.102 70.9998C144.499 -32.0002 183.852 70.2739 219.999 3.99985
  M14.4999 16.9998C111 20.9998 -53.0003 73.4998 21.4999 107
  ```
  Each path animates `pathLength: 0->1`, duration 1s, staggered delay 0.15s.
  Each path has a triangle `polygon points="0,-4 8,0 0,4"` fill `#FFDA00` animating along it via `<animateMotion>`.

- **Stop dots** (5 dots at specific coordinates):
  ```
  [9.519, 15.519], [289.519, 59.518], [220.519, 9.519], [125.518, 78.519], [19.519, 104.519]
  ```
  Each: outer circle r=9.519 fill `#FFDA00`, inner circle r=3.389 fill `#002A35`. Scale in with stagger.

- **Floating transport icons** (3 circular white badges, width 16% of map container, aspect-ratio 1):
  1. Ship at left 26%, top 28.9% -- image: `https://image-bottom-92901062.figma.site/_components/v2/142c6a6f3074dd8aee013fa440ff4ff369649d48/08d6a37375d428e07c59e24a8529de89bfee157e.08d6a373.png`
  2. Car at left 70.8%, top 15.6% -- rotated 9.73deg -- image: `https://image-bottom-92901062.figma.site/_components/v2/142c6a6f3074dd8aee013fa440ff4ff369649d48/7d6f50a87e1427d9b4d1a9c9f1c064ff04b2b3f9.7d6f50a8.png`
  3. Plane at left 55.2%, top 52.1% -- rotated 180deg scaleY(-1) -- image: `https://image-bottom-92901062.figma.site/_components/v2/142c6a6f3074dd8aee013fa440ff4ff369649d48/0e0282ab1c70db03d437b0d01875ce45557d49f6.0e0282ab.png`

  Each: white rounded-full bg, box-shadow `0 4px 20px rgba(0,0,0,0.2)`, images 80% width/height object-cover. Scale in with delays 0.3/0.5/0.7, then float up/down infinitely (y oscillates by -6/-8/-5px, duration ~2.5-3.3s each).

**Stats** (flex column, gap 48px):
1. "3M+" (white, Barlow Condensed 800, 72px) + "tons of cargo / delivered / without delays" (18px, line-height 1.3, `#1a1a1a`). Gap 16px between number and text. Slides from `x: -60`.
2. "13+" same style + "years of trusted / and reliable / operations". Indented `marginLeft: 90px`. Slides from `x: 60`.

Both use `useInView` trigger with `margin: '0px 0px -40px 0px'`.

---

### SCREEN 3: CONTACT SECTION (right phone)

**Full-height dark screen** (`#0a1f2b`, padding 48px 20px 36px, flex-1).

**Heading** (useInView):
- "CONTACT " (white) + "US" (yellow `#FFDA00`) -- `Barlow Condensed 800`, 64px, line-height 0.9, uppercase, marginBottom 20px. Animates y: 30 -> 0.

**Subtitle**:
- "Complete the form and our team will contact you soon." -- Helvetica 18px, line-height 1.4, `#b0b8bc`, marginBottom 72px, maxWidth 400px. Animates y: 20 -> 0, delay 0.1.

**Form** (flex column, gap 16px, marginBottom 44px):
- 3 inputs: "First Name", "Last Name", "E-mail"
  - Style: `padding: 18px 24px; border-radius: 40px; border: none; background: rgba(255,255,255,0.08); color: #fff; font-size: 16px`
  - Each animates in (y: 20 -> 0) with stagger (0.15, 0.25, 0.35)
  - On focus: background `rgba(255,255,255,0.14)`, scale 1.01

- **Submit button** "Send": `width: 100%; padding: 18px; border-radius: 40px; background: #FFDA00; color: #0a1f2b; font-size: 20px; font-weight: 700`. marginTop 4px.
  - Hover: scale 1.03, y -2, background `#ffe84d`.
  - Tap: scale 0.97.

**Contact info** (marginBottom 32px):
- `info@cargox-group.com` -- 18px, `#b0b8bc`, no underline. Hover: white, x +4.
- `+380 44 234-7890` -- same style.

**Footer row** (flex, space-between, marginBottom 32px):
- Left: 3 social icons (Instagram, LinkedIn, Facebook) as inline SVGs, each in a 44x44px white circle. Hover: scale 1.15, y -3.
- Right: Scroll-to-top button (44x44px white circle with up-arrow SVG, stroke `#0a1f2b`, strokeWidth 2.5).

**Copyright**: "(c) 2025. All rights reserved." -- 14px, `#6b7a80`, text-align left.

---

### ANIMATION EASINGS

- `EXPO_OUT: [0.16, 1, 0.3, 1]` -- primary easing for most entrance animations
- `EASE_OUT: [0.25, 0.46, 0.45, 0.94]` -- secondary easing for paths and form fields

---

### KEY IMPLEMENTATION DETAILS

1. All `useInView` hooks use `{ once: true, margin: '0px 0px -40px 0px' }` for triggering slightly before elements enter viewport.
2. The video-ready state gates the hero text appearance (shows only after `onCanPlay` fires).
3. The CTA button arrow rotates from -135deg (default) to -90deg (hovered) with 0.35s transition.
4. Map route arrows use native SVG `<animateMotion>` with `rotate="auto"`.
5. Floating icons use Framer Motion keyframe arrays for infinite Y oscillation.
6. The phone zoom on mobile is calculated in JS and applied as CSS `zoom` property on `.phone-mockup`.