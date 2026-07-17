Build a mobile movie app UI showcase called "Cineva Mobile UI" using React + TypeScript + Vite + Tailwind CSS + Lucide React icons. The page displays a single centered iPhone mockup (375x780px) on a white background. No routing, no database -- purely a visual UI with interactive card swiping.

---

## TECH STACK

- React 18, TypeScript, Vite, Tailwind CSS 3.4, Lucide React for icons
- Font: Google Fonts "Inter" weights 300-900 applied globally via `* { font-family: 'Inter', sans-serif; }`
- No additional UI libraries

---

## LAYOUT STRUCTURE

**Outer wrapper:** Full viewport (`h-screen w-screen`), `bg-white`, flex centered.

**Phone frame:** Fixed 375x780px, border-radius 52px, overflow hidden. Uses a custom `.phone-frame` class with layered box-shadows to simulate a real device bezel:
```css
.phone-frame {
  border-radius: 52px;
  box-shadow:
    inset 0 0 0 2px rgba(255, 255, 255, 0.08),
    0 0 0 1px rgba(0, 0, 0, 0.6),
    0 0 0 10px #1a1a1e,
    0 0 0 11px rgba(255, 255, 255, 0.06),
    0 0 60px rgba(0, 0, 0, 0.5);
}
```

**Dynamic Island:** Absolute positioned pill at top center, 126x34px, bg-black, rounded-full, z-100.

---

## BACKGROUND

Behind all content inside the phone: the current front card image rendered at full size with `scale-110 blur-[40px] brightness-50`, overlaid with `bg-black/30`.

---

## FOLDER-TAB NAVIGATION (top)

A two-level tab system with staggered fade-up animation (class `animate-stagger-1`, 0.1s delay):

- **Left tab** (outside the black area): "Premieres" - text-[11px], font-medium, px-5 py-2.5, white/40 when inactive, white when active.
- **Main black tab area** with `rounded-tl-[28px] rounded-tr-[28px]`, bg-black, py-4 px-1, containing:
  - A CSS radial-gradient connector div positioned at `-left-7 bottom-0` (28x28px): `radial-gradient(circle at 0% 0%, transparent 28px, #000 28px)` -- creates the smooth curve joining the tab to the content below.
  - "In Theaters" button (left, text-[12px], font-medium)
  - "Upcoming" button (right, ml-auto, with ChevronRight icon size 12)

---

## CONTENT AREA

Below the tabs: `bg-black rounded-tl-[28px]` (pure black, only top-left corner rounded). Contains:

### Date display (animate-stagger-2, 0.2s delay):
- Centered, `text-[58px] font-extrabold leading-none tracking-tight` in white
- Format: "05" in full white, "JUL" in `text-white/80 font-bold`

### Card Stack (animate-stagger-3, 0.35s delay with scale animation):
- Container uses `perspective: 1200px`
- Shows 4 cards stacked, each absolute positioned filling the container with `border-radius: 20px`
- Stack offsets: each card behind gets `translateY(-24px * position)`, `scale(1 - 0.05 * position)`
- Opacity: front=1, second=0.85, third=0.6, fourth=0.4
- Front card has draggable pointer events (swipe down to dismiss)
- SWIPE_THRESHOLD = 80px. Dragging adds `translateY(dragY) rotate(dragY * 0.015deg)` and fades opacity
- On release past threshold: plays `cardDropOut` animation (0.48s) then rotates card order

**Card drop animation:**
```css
@keyframes cardDropOut {
  0% { transform: translateY(var(--drop-start-y)) scale(1) rotate(var(--drop-start-rot)); opacity: var(--drop-start-opacity); }
  60% { opacity: 0.3; }
  100% { transform: translateY(130%) scale(0.8) rotate(8deg); opacity: 0; }
}
```

**Front card overlays:**
- Gradient overlay: `bg-gradient-to-t from-black/40 via-transparent to-transparent`
- Top-left badges (flex column gap-2):
  - Clock icon (12px) + "2h 15m" -- bg-black rounded-full px-3 py-1.5, text-white/90 text-xs
  - Popcorn icon (12px) + "Sci-Fi" -- same styling

---

## BOTTOM NAVIGATION (animate-stagger-4, 0.5s delay with navSlideUp):

Absolute bottom-6, centered. Uses `.liquid-glass` class:
```css
.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}
```
With a `::before` pseudo-element creating a gradient border effect using mask-composite.

4 nav items: Explore (LayoutGrid), Flicks (Film), Queue (Bookmark), Account (User) -- all size 20. Active item (default: index 1 "Flicks") shows white + label text. Inactive shows white/40. Rounded-full buttons with transition-all duration-300.

---

## STAGGERED ENTRANCE ANIMATIONS

All use `cubic-bezier(0.16, 1, 0.3, 1)` easing with `both` fill-mode:

| Class | Keyframes | Duration | Delay |
|---|---|---|---|
| `.animate-stagger-1` | staggerFadeUp (translateY 20px to 0) | 0.6s | 0.1s |
| `.animate-stagger-2` | staggerFadeUp | 0.6s | 0.2s |
| `.animate-stagger-3` | staggerFadeIn (scale 0.95 to 1) | 0.7s | 0.35s |
| `.animate-stagger-4` | navSlideUp (translate -50%, 20px to -50%, 0) | 0.5s | 0.5s |

---

## IMAGE URLS (6 movie poster cards)

```
https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260705_105630_4428f039-9cd3-44a3-bb7f-15c28b0703f2.png&w=1280&q=85

https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260705_105503_6f51b402-7feb-4a64-a154-bce55a4bff52.png&w=1280&q=85

https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260705_105544_9e41e1d6-2da4-458f-99a5-8568241ab76b.png&w=1280&q=85

https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260705_105558_d8ebccec-11f9-4445-8bae-f44e1117ca00.png&w=1280&q=85

https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260705_105613_e3910ee6-0196-48a4-b1e3-2a2c16c721d0.png&w=1280&q=85

https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260705_105621_a97dd98e-cf52-4084-9977-2556ac4fc1fa.png&w=1280&q=85
```

---

## KEY IMPLEMENTATION DETAILS

- Card order managed via `useState<number[]>` initialized as `[0,1,2,3,4,5]`
- On swipe dismiss: shift first element to end of array after animation completes (480ms timeout)
- Pointer capture used on front card for reliable drag tracking
- Only downward drag allowed (`Math.max(0, diff)`)
- CSS custom properties (`--drop-start-y`, `--drop-start-rot`, `--drop-start-opacity`) pass dynamic values into the keyframe animation
- `.stack-card` base transition: `transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)` -- disabled during active drag on front card
- All cards have `touch-action: none; user-select: none; will-change: transform, opacity`
- Background image changes instantly when card order changes (shows current front card blurred)