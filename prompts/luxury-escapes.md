Build a React + Vite showcase displaying two mobile app screens side by side inside realistic iPhone device frames, presented on a cinematic gradient background. No additional npm dependencies beyond React and ReactDOM.

---

## SETUP

- Vite + React (no TypeScript)
- Google Font: Anton (loaded via `<link href="https://fonts.googleapis.com/css2?family=Anton&display=swap">` in index.html)
- Local font: "Linotype Projekt" loaded from `/public/fonts/linotype-projekt-regular.woff2` and `.woff` (not used in these two screens but present in the project)
- No Tailwind, no CSS modules -- all styles are inline JSX with a minimal global `styles.css` for reset and keyframe animations

---

## BACKGROUND / VIEWPORT (App.jsx)

Full-viewport container (`100vw x 100vh`, `overflow: hidden`) with:
- Background: `radial-gradient(120% 90% at 18% 8%, #FBEFDD 0%, #F3D9BE 22%, #E1A98C 42%, #9C6E8F 62%, #4B4470 80%, #23274A 100%)`
- Two decorative radial-gradient orbs (pointer-events: none):
  - Top-left: 900x900px circle, `rgba(255,225,180,0.55)` fading to transparent, positioned `top: -320, left: -220`, `filter: blur(10px)`
  - Bottom-right: 700x700px circle, `rgba(60,90,150,0.45)` fading to transparent, positioned `bottom: -260, right: -180`, `filter: blur(10px)`
- Center-aligned flex container with `gap: 70px` holding both screens
- Auto-scaling logic: on mount and resize, measure the stage's natural dimensions and scale it down (never up) to fit within `(viewport - 40px)` padding using CSS transform with `transform-origin: center center`

---

## IOS DEVICE FRAME (IOSDevice component)

Dimensions: `370px wide x 790px tall`, `border-radius: 48px`
- `box-shadow: 0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)`
- Dynamic Island: absolute positioned black pill, `width: 126px, height: 37px, border-radius: 24px`, centered horizontally at `top: 11px`, `z-index: 50`
- Home indicator bar: absolute bottom, centered, `width: 139px, height: 5px, border-radius: 100px`, z-index 60
  - Light mode: `rgba(0,0,0,0.25)` | Dark mode: `rgba(255,255,255,0.7)`
- Status bar (IOSStatusBar): shows "11:11" time on left (font: `-apple-system, "SF Pro", system-ui`, weight 590, size 17px) and signal/wifi/battery SVG icons on right. Color adapts to `dark` prop (white vs black).
- Props: `dark` (boolean) -- sets background to `#000` when true, `#F2F2F7` when false

---

## SCREEN 1: OFFER TEASER (Light mode device)

**Layout:** Full-height flex column, `background: #f4f4f4`, padding `66px 14px 14px`

**Headline block** (top):
- Font: `'Anton', sans-serif`, size 69px, weight 900, line-height 0.94, letter-spacing 0.5, color `#2c2c2c`, uppercase, centered
- Three lines: "Experience" / "Unparalleled" / "Luxury"
- Each line wrapped in `overflow: hidden` container with inner span animated via `zeRise` keyframe (0.9s, cubic-bezier(0.22,1,0.36,1)) with staggered delays: 0.10s, 0.22s, 0.34s

**Video card** (fills remaining space):
- `flex: 1`, `border-radius: 26px`, `overflow: hidden`, `margin: 0 8px`
- Animated in with `zeCardReveal` (1.1s, delay 0.45s)
- Background video: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260707_004919_5e1b7e08-d723-4ecb-8afe-d613d730984c.mp4`
  - Attributes: autoPlay, loop, muted, playsInline
  - Style: absolute fill, `object-fit: cover`, `filter: saturate(0.84) contrast(1.05)`
- Blurred duplicate video layer (aria-hidden): same video, `filter: blur(16px) saturate(1.15)`, `transform: scale(1.08)`, masked with vertical gradient (`mask-image: linear-gradient(180deg, transparent 0%-48%, 0.35 at 62%, 0.85 at 78%, 1 at 92%)`)
- Warm overlay: `rgba(122,107,82,0.21)` solid
- Green gradient overlay: `linear-gradient(180deg, rgba(40,70,35,0) 0%-42%, rgba(45,80,40,0.18) 60%, rgba(35,65,32,0.4) 78%, rgba(28,52,26,0.55) 100%)`
- 4-pointed star logo (SVG, white, 22x22, viewBox 0 0 1024 1024): positioned absolute top-left (20px, 20px), animated with `zeBloom` (0.9s, delay 1.05s)
  - Path: `M87 116C260 108 408 168 512 300C616 168 764 108 937 116C945 289 885 437 753 541C885 645 945 793 937 966C764 974 616 914 512 782C408 914 260 974 87 966C79 793 139 645 271 541C139 437 79 289 87 116Z`
- Bottom content (absolute, padding `22px 22px 24px`, flex column, gap 10):
  - Title: "Bali Exclusive\nLuxury Getaway" -- Helvetica 34px, weight 500, line-height 1.12, white, letter-spacing -0.2, animated `zeFadeUp` (0.85s, delay 0.80s)
  - Subtitle: "Breathtaking locations, bespoke services, with a focus on exclusivity" -- 13.5px, line-height 1.45, `rgba(255,255,255,0.88)`, max-width 250, animated `zeFadeUp` (delay 0.92s)
  - CTA pill button: animated `zePillPop` (0.75s, delay 1.10s)
    - Gradient background: `linear-gradient(90deg, #FAD5D7 0%-38%, #FFFFFF 50%, #9CE2F9 62%-100%)`
    - `border-radius: 999px`, padding `7px 7px 7px 14px`, `box-shadow: 0 6px 18px rgba(0,0,0,0.25)`
    - Label "VIEW OFFER": Helvetica 10px, weight 750, letter-spacing 0.6, color `#1a1a2e`
    - Eye icon SVG (12.5x12.5): stroke `#1a1a2e`, strokeWidth 2

---

## SCREEN 2: GETAWAY DETAIL (Dark mode device)

**SVG filter** (hidden, 0x0): Custom color grading matrix applied to the video:
```
values="0.6666 -0.0742 0.0785 0 0.1499 -0.0627 0.7320 0.0649 0 0.0943 -0.0701 0.1109 0.7276 0 0.0471 0 0 0 1 0"
```

**Background video:**
- URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260707_004833_4cc93fa3-27f5-4cec-b1b2-0b4fb073c13a.mp4`
- Attributes: autoPlay, loop, muted, playsInline
- Style: absolute fill, `object-fit: cover`, `filter: url(#grade)`, `transform: translate(0%, -4%) scale(1.07)`

**Top gradient vignette:** `linear-gradient(to bottom, rgba(8,12,16,0.30), transparent)`, height 22%

**Progressive radial blur system** (6 layered divs, all pointer-events: none):
Each uses `backdrop-filter: blur(Npx)` with a `radial-gradient(circle at 55% 115%, black Rpx, transparent R+65px)` mask. From outermost to innermost:
1. blur(1px), black 480px / transparent 545px
2. blur(1.5px), black 440px / transparent 505px
3. blur(3px), black 390px / transparent 455px
4. blur(5px), black 320px / transparent 395px
5. blur(7px), black 240px / transparent 325px
6. blur(9px), black 130px / transparent 235px

**Color atmosphere overlay:**
`linear-gradient(to top, rgba(110,160,195,0.30) 0%, rgba(110,160,195,0.19) 7%, rgba(112,160,192,0.07) 16%, transparent 34%), linear-gradient(285deg, rgba(240,225,205,0.18) 0%, rgba(240,225,205,0.09) 24%, transparent 48%), radial-gradient(ellipse 60% 30% at 0% 76%, rgba(5,25,75,0.20), transparent 70%)`

**Content overlay** (absolute, flex column, padding `64px 24px 48px`):

- **Nav bar** (animated `zeFadeDown`, 0.7s, delay 0.25s):
  - Left: back arrow SVG (rotated 90deg, white, strokeWidth 2.2)
  - Right: hamburger menu (two white bars, 18x2px, gap 5px)

- **Title block** (centered, marginTop 46):
  - "BALI EXCLUSIVE" / "LUXURY GETAWAY": Anton, 52px, weight 900, line-height 1.0, letter-spacing 0.5, white, uppercase, text-shadow `0 2px 18px rgba(0,0,0,0.35)`
  - Each line: `zeRise` (0.95s) with delays 0.35s / 0.48s
  - "by ZENITH ESCAPES": "by" in Helvetica 13px bold `rgba(255,255,255,0.85)`, "ZENITH ESCAPES" in Anton 22px weight 900, letter-spacing 1, white. Animated `zeFadeUp` (0.8s, delay 0.70s)

- **Center logo**: Same 4-pointed star SVG (30x30, white), `drop-shadow(0 2px 10px rgba(0,0,0,0.35))`, animated `zeBloom` (1.0s, delay 0.95s), centered with paddingTop 40

- **Bottom stats** (marginTop auto, flex column, gap 20):
  - Grid (2 columns):
    - "Exclusive" label (Helvetica 11px, bold, `rgba(255,255,255,0.75)`) + "8 GUESTS" (Anton 33px, white) -- animated `zeFadeUp` (delay 0.85s)
    - "Availability" label + "12 DAYS" (same style, marginLeft 48) -- animated `zeFadeUp` (delay 0.98s)
  - Description row (flex, align flex-end, gap 16):
    - Text: "Escape to an elite getaway, where every detail is meticulously designed to meet the highest expectations of luxury and serenity." -- Helvetica 12.5px, line-height 1.55, `rgba(255,255,255,0.92)`, max-width 270, animated `zeFadeUp` (delay 1.12s)
    - Down arrow SVG (18x14, white, strokeWidth 2.2, marginLeft 22) -- animated `zeArrowDrop` (0.7s, delay 1.35s)

---

## KEYFRAME ANIMATIONS (styles.css)

```css
@keyframes zeRise {
  from { opacity: 0; transform: translateY(110%); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes zeFadeUp {
  from { opacity: 0; transform: translateY(26px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes zeFadeDown {
  from { opacity: 0; transform: translateY(-14px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes zeCardReveal {
  from { opacity: 0; transform: translateY(34px) scale(0.965); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes zeBloom {
  0% { opacity: 0; transform: scale(0.2) rotate(-90deg); }
  60% { opacity: 1; transform: scale(1.12) rotate(8deg); }
  100% { opacity: 1; transform: scale(1) rotate(0deg); }
}
@keyframes zePillPop {
  0% { opacity: 0; transform: translateY(14px) scale(0.85); }
  65% { opacity: 1; transform: translateY(-2px) scale(1.03); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes zeArrowDrop {
  0% { opacity: 0; transform: translateY(-10px); }
  55% { opacity: 1; transform: translateY(3px); }
  100% { opacity: 1; transform: translateY(0); }
}
```

All animations use `animation-fill-mode: both` and `cubic-bezier(0.22, 1, 0.36, 1)` easing (smooth overshoot).

---

## GLOBAL CSS RESET

```css
html, body { margin: 0; height: 100%; overflow: hidden; }
#root { height: 100%; }
```