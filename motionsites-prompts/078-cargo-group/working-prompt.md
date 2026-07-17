Create a full-viewport hero section for "CARGOX GROUP" logistics company using React, Tailwind CSS, Framer Motion (`motion` package from npm - import from `motion/react`), and `lucide-react` for the hamburger icon.

## Tech Stack
- React 18 + TypeScript + Vite
- Tailwind CSS 3
- `motion` package (v12+) - import `{ motion, AnimatePresence }` from `motion/react`
- `lucide-react` for Menu/X icons
- Google Font: `Barlow Condensed` weight 800 (imported in CSS via `@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@800&display=swap')`)

## Global CSS
```css
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@800&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

* { margin: 0; padding: 0; box-sizing: border-box; }
html, body, #root { height: 100%; overflow: hidden; }
body { font-family: Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
```

## Layout Structure
Single full-viewport (`min-height: 100vh`) flex column with `overflow: hidden` and dark fallback `backgroundColor: '#1a1a2e'`. All content is layered above a fullscreen video background.

## Video Background
- Absolute positioned, `inset-0`, `object-cover`, `z-0`
- Attributes: `autoPlay`, `muted`, `loop`, `playsInline`
- URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260620_185230_f7f71ef4-6655-469f-b9c6-efbdc1f7684a.mp4`
- On `onCanPlay`, set a `videoReady` state to `true`
- All content below is wrapped in `<AnimatePresence>` and only renders when `videoReady === true`, fading in with `opacity: 0 -> 1` over 0.3s. The wrapper div uses `className="flex flex-col flex-1 w-full"`.

## Easing
Use a shared constant: `const EXPO_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];`

## Header (z-50, relative)
- Padding: `clamp(16px, 4vh, 40px) clamp(16px, 3vw, 48px) 0`
- **Logo** (left): Two lines stacked - "CARGOX" in white, "GROUP" in `#ffda00`. Font: `"Barlow Condensed"`, weight 800, size `clamp(22px, min(3.15vh, 2.32vw), 32px)`, line-height 0.9, uppercase, letter-spacing -0.01em. Animates from `opacity:0, y:-20` to visible with EXPO_OUT, duration 0.6.
- **Desktop Nav** (hidden on mobile, flex on md+): Items "Services", "Industries", "Company" each with a chevron-down SVG. Gap: `clamp(20px, 3.8vw, 52px)`. White text, size `clamp(15px, min(1.97vh, 1.45vw), 20px)`, letter-spacing -0.02em. Each item fades in staggered. On hover: color shifts to `#ffda00` with `x: 2`.
- **Mobile Hamburger** (md:hidden): lucide-react `Menu`/`X` icon, white, size 28, toggles a mobile menu overlay.

## Mobile Menu Overlay
- Absolute `inset-0`, z-40, centered flex column, bg `#6682c2`
- Same nav items as buttons, font-size 24px, white, staggered fade-in

## Main Content (z-10, relative)
- `flex-1`, grid: 1 col on mobile, `grid-cols-[2.17fr_1fr]` on lg+
- Padding: `clamp(24px, 8vh, 120px) clamp(16px, 3vw, 48px) 0`
- Gap: `clamp(20px, 4vh, 48px)`

### Left Column - Giant Headline
- Container: `overflow: clip`
- Font: `"Barlow Condensed"`, weight 800, size `clamp(86px, min(14vh, 11vw), 220px)`, line-height 0.78, uppercase, letter-spacing -0.01em
- Three lines with slide-in animations:
  1. "BEYOND" - white, slides from `x: -900` with duration 0.85, delay 0
  2. "BORDERS" - color `#002a35`, `marginLeft: 0.524em`, slides from `x: 900` with duration 0.85, delay 0.13
  3. "AND LIMITS" - white, slides from `x: -900` with duration 0.85, delay 0.26
- All use EXPO_OUT easing

### Right Column
- Flex column, gap: `clamp(16px, 2.66vh, 32px)`

#### Tagline Text
- Font: Helvetica, size `clamp(24px, min(4vh, 3vw), 52px)`, line-height 0.9, letter-spacing -0.02em, color `#002a35`
- Three lines with word-by-word reveal animation (each word slides up from `y:'100%'` with rotateX 45deg):
  1. "Logistics" - marginLeft 0, delay 0.3
  2. "shaped by scale" - marginLeft 1.5em, delay 0.5
  3. "powered by precision" - marginLeft 0, delay 0.7
- Each word has 0.08s stagger, duration 0.6, easing `[0.16, 1, 0.3, 1]`

#### Map Section
- Container: relative, `aspectRatio: '435 / 263'`
- **Map image**: absolute, inset-0, object-contain
  - URL: `https://polo-pecan-73837341.figma.site/_assets/v11/b6d561167283e799453232309bd13dd78b2d1afa.png`

- **Route Lines SVG Overlay**: absolute, pointer-events-none, positioned at `left: 13.8%`, `top: 24.3%`, `width: 68.7%`, aspectRatio `299/143`
  - SVG viewBox: `0 0 299.037 142.509`, overflow visible
  - 4 animated bezier curve paths in `#FFDA00`, strokeWidth 2.5:
    ```
    M128.161 74.6764C79.9989 130.001 71.9994 46.0005 20.9815 111.737
    M216.999 9.99985C260.499 12.4998 222.499 71.9998 291.999 58.9998
    M130.102 70.9998C144.499 -32.0002 183.852 70.2739 219.999 3.99985
    M14.4999 16.9998C111 20.9998 -53.0003 73.4998 21.4999 107
    ```
  - Each path animates `pathLength: 0->1` with duration 1.1, staggered delay starting at 0.55 + i*0.12
  - Animated arrow polygons (triangles `0,-4 8,0 0,4`) move along each path using `<animateMotion>` with `rotate="auto"`, duration `2.5 + i*0.3`s, infinite repeat
  - 5 stop dots at coordinates: `[9.519, 15.519]`, `[289.519, 59.518]`, `[220.519, 9.519]`, `[125.518, 78.519]`, `[19.519, 104.519]`. Each is a yellow circle (r=9.519, fill `#FFDA00`) with a smaller dark center circle (r=3.389, fill `#002A35`). Spring animation with stiffness 420, damping 14.

- **Transport Icons**: 3 circular white icons absolutely positioned on the map:
  - Ship: `left: 26.0%, top: 28.9%`, delay 2.1, URL: `https://image-bottom-92901062.figma.site/_components/v2/142c6a6f3074dd8aee013fa440ff4ff369649d48/08d6a37375d428e07c59e24a8529de89bfee157e.08d6a373.png`
  - Car: `left: 70.8%, top: 15.6%`, delay 2.2, rotate `9.73deg`, URL: `https://image-bottom-92901062.figma.site/_components/v2/142c6a6f3074dd8aee013fa440ff4ff369649d48/7d6f50a87e1427d9b4d1a9c9f1c064ff04b2b3f9.7d6f50a8.png`
  - Plane: `left: 55.2%, top: 52.1%`, delay 2.3, rotate `180deg scaleY(-1)`, URL: `https://image-bottom-92901062.figma.site/_components/v2/142c6a6f3074dd8aee013fa440ff4ff369649d48/0e0282ab1c70db03d437b0d01875ce45557d49f6.0e0282ab.png`
  - Each icon: `width: 14.9%`, aspect-ratio 1, rounded-full, bg-white, box-shadow `0 4px 12px rgba(0,0,0,0.15)`. On hover: scale 1.12, translateY -4px, enhanced shadow. Spring animation: stiffness 220, damping 16.

- **Map description text**: absolute, hidden on mobile (`hidden sm:block`), positioned `left: 55.6%, top: 89%, width: 44%`. Text: "We ensure full transparency at every stage to build trust and drive results." Size `clamp(12px, min(1.6vh, 1.2vw), 20px)`, color `#002a35`, fades in at delay 2.4.

## Footer (z-10, relative)
- Flex row (column on mobile), space-between, padding: `clamp(12px, 3vh, 32px) clamp(16px, 3vw, 48px) clamp(16px, 5vh, 66px)`

### Left - Stat Block
- Animates from `opacity:0, y:24` with delay 0.45, duration 0.65, EXPO_OUT
- "3M+" in `"Barlow Condensed"` weight 800, size `clamp(52px, min(8vh, 6vw), 98px)`, color `#ffda00`, uppercase
- Description: "tons of cargo / successfully delivered / without delays" - size `clamp(16px, min(1.6vh, 1.2vw), 20px)`, white, line-height 1.25
- Small cargo icon in white circle: `clamp(40px, min(5.5vh, 4vw), 67px)` diameter, URL: `https://image-bottom-92901062.figma.site/_components/v2/142c6a6f3074dd8aee013fa440ff4ff369649d48/b343ed71e721488b90c407df666fd6dc3f5f70b1.b343ed71.png`

### Right - CTA Button
- Custom SVG pill shape with a circle cutout on the right. Fill `#ffda00`. The full SVG path:
  ```
  M316 0C329.08 0 340.435 7.38674 346.121 18.2162C348.618 22.9736 353.086 26.8535 358.459 26.8535H359.252C364.667 26.8535 369.155 22.9169 371.63 18.1007C377.159 7.34039 388.205 0.00015843 400.931 0C419.195 0 434.001 15.1191 434.001 33.7695L433.99 34.6416C433.537 52.8891 418.909 67.5391 400.931 67.5391C387.96 67.5389 376.734 59.9132 371.317 48.8128C368.923 43.9077 364.427 39.873 358.969 39.873C353.492 39.873 348.986 43.9356 346.589 48.8605C341.074 60.1913 329.449 68 316 68H34.001C15.2233 68 0 52.7777 0 34C0 15.2223 15.2233 0 34.001 0H316ZM400.931 2.44141C384.063 2.44163 370.303 16.419 370.303 33.7695C370.303 51.1201 384.063 65.0974 400.931 65.0977C417.798 65.0977 431.56 51.1202 431.56 33.7695C431.56 16.4189 417.798 2.44141 400.931 2.44141Z
  ```
- ViewBox: `0 0 434.001 68`, preserveAspectRatio `none`
- Size: full-width on mobile (h-56px), on sm+: `h-[clamp(48px,min(6vh,4.5vw),68px)]` with `aspect-[434/68]`
- **Arrow** in the circle cutout: SVG arrow (`viewBox="0 0 16.89 20.37"`, white stroke, strokeWidth 2.2) that rotates from `-135deg` to `-90deg` on hover with 0.35s transition
- **Label**: "Get in touch", centered in the pill area (excluding circle), color `#002a35`, size `clamp(14px, min(1.6vh, 1.2vw), 20px)`
- Animates in from `opacity:0, x:60` with delay 0.5. whileHover: scale 1.08, y:-2. whileTap: scale 0.97.

## Color Palette
- Primary dark: `#002a35`
- White: `#ffffff`
- Accent yellow: `#ffda00`
- Fallback bg: `#1a1a2e`
- Mobile menu bg: `#6682c2`

## Key Behaviors
1. All animations are gated behind `videoReady` state - nothing animates until the video fires `onCanPlay`
2. The entire content fades in once the video is ready
3. All content (header, main, footer) uses `relative z-10` or `z-50` to layer above the video (z-0)
4. Fully responsive: single column on mobile, 2-column grid on lg+
5. Mobile hamburger menu with overlay on md breakpoint