**Create a full-viewport, dark cinematic hero section for a brand called "COSMIQ." using React, Tailwind CSS, and lucide-react. No other packages. Use Vite + TypeScript.**

---

### Fonts (loaded in `index.html`)

Load these three fonts via `<link>` tags in the `<head>`:

1. **Anton** (Google Fonts) -- used for the logo "COSMIQ." and mobile menu link labels
2. **Inter** weights 300/400/500/600 (Google Fonts) -- used for nav links, share button, and tagline
3. **Black Mustang** (OnlineWebFonts) -- used for the main headline

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
<link href="https://db.onlinewebfonts.com/c/70c5608e6eeb5d6f6fe1b2e5be774ec6?family=Black+Mustang" rel="stylesheet" />
```

Page title: `COSMIQ - What's Beyond`

---

### Layout

- Full viewport: `w-full h-[100dvh] overflow-hidden bg-[#0a0a0a]` with `position: relative`.
- All elements are absolutely/fixed positioned within this container using z-index layering.

---

### Z-Index Layers (bottom to top)

| Z-Index | Element |
|---------|---------|
| 0 | Stars background |
| 1 | Video |
| 5 | Headline text ("WHAT'S BEYOND") |
| 6 | Animated circles |
| 8 | Rock image overlay |
| 10 | Navigation bar |
| 100 | Mobile menu (fixed, full-screen) |

---

### 1. Stars Background (z-0)

- 40 tiny white dots (`div` elements) absolutely positioned across the viewport.
- Sizes alternate: every 3rd dot is 2x2px, others are 1x1px.
- Positions are deterministic: `left: (i * 37 + 13) % 100 %`, `top: (i * 53 + 7) % 100 %`.
- Each star has a `starTwinkle` animation: fades between `opacity: 0.2` and `opacity: 0.8`, duration `2 + (i % 4)` seconds, delay `(i * 0.3) % 3` seconds, infinite, ease-in-out.

---

### 2. Background Video (z-1)

- `<video>` element, absolute, covering full viewport with `object-cover`.
- **Source URL:** `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260613_233050_b3f1adc5-8b5f-41bb-b52a-0a79bd796ba8.mp4`
- Attributes: `muted`, `autoPlay`, `playsInline`. Does NOT loop.
- On `loadedMetadata`, set `playbackRate = 1.56`.
- On `ended`, set a `videoEnded` state to `true` (triggers headline animation and rock reveal).

---

### 3. Animated Circles (z-6)

Two concentric circles centered on the viewport (`left-1/2 top-1/2`, translated `-50%, -50%`). Both are `rounded-full border border-white pointer-events-none`.

**Inner circle:**
- Size: `min(95vw, 95vh)`, maxWidth/maxHeight: 1200px.
- Appears after 800ms delay (state-controlled).
- Entrance animation `circleShrink`: 3s, starts at `scale(4) opacity:0`, ends at `scale(1) opacity:0.3`. Easing: `cubic-bezier(0.16, 1, 0.3, 1)`.
- After entrance, plays `circlePulse` infinitely: 6s ease-in-out, gently oscillates between `scale(1) opacity:0.3` and `scale(1.03) opacity:0.4`.

**Outer circle:**
- Size: `min(160vw, 160vh)`, maxWidth/maxHeight: 2200px.
- Entrance animation `circleShrinkOuter`: 3.5s with 0.2s delay, starts at `scale(5) opacity:0`, ends at `scale(1) opacity:0.2`.
- After entrance, plays `circlePulseOuter` infinitely: 8s ease-in-out, oscillates between `scale(1) opacity:0.2` and `scale(1.02) opacity:0.28`.

---

### 4. Headline Text -- "WHAT'S BEYOND" (z-5)

- Positioned with: `bottom-[21vh] sm:bottom-[24vh] md:bottom-[10vh]`, full width, centered horizontally using flex.
- Horizontal padding: `px-2 sm:px-4 md:px-8`.
- `overflow-hidden` wrapper for the reveal effect.
- Font: `"Black Mustang", Anton, sans-serif`.
- Font size: `clamp(2.8rem, 17vw, 23rem)`.
- Letter spacing: `-0.04em`. Line height: `0.85`. White space: `nowrap`. Color: white.
- **Letter-by-letter reveal animation:** Each character is a separate `<span>` with `display: inline-block`. When `videoEnded` is false, each span is at `translateY(120%) opacity:0`. When true, it transitions to `translateY(0) opacity:1`.
  - Transform transition: `0.8s cubic-bezier(0.16, 1, 0.3, 1)` with stagger delay of `i * 60ms`.
  - Opacity transition: `0.5s ease-out` with same stagger delay.
- Spaces are rendered as `\u00A0` with width `0.25em`.

---

### 5. Rock Image Overlay (z-8)

- Absolute, covers full viewport (`inset-0`), `pointer-events-none`.
- Contains an `<img>` with `w-full h-full object-cover block`.
- **Image URL:** `https://res.cloudinary.com/dy5er7kv5/image/upload/q_auto/f_auto/v1781394960/rock_vca457.png`
- Fades in when `videoEnded` is true: `opacity 0 -> 1`, transition `0.6s ease-out`.
- This image sits ON TOP of the headline text (z-8 vs z-5), creating a parallax/depth effect where the rock partially covers the bottom of the text.

---

### 6. Navigation Bar (z-10)

- Absolute, top of viewport: `top-0 left-0 right-0`, flex, `items-center justify-between`.
- Padding: `px-5 sm:px-8 md:px-12 py-4 sm:py-6`.
- Fades in: `fadeIn 1s ease-out 0.5s both`.

**Logo (left):**
- Text "COSMIQ." in white, `text-lg`, uppercase, `tracking-widest`.
- Font: `Anton, sans-serif`, letter-spacing: `0.15em`.

**Desktop Nav Links (center, hidden on mobile, visible md+):**
- Three links: "Discover", "Story", "Connect".
- `text-white/70 hover:text-white`, `text-xs`, `tracking-[0.25em]`, uppercase.
- Font: `Inter, sans-serif`. Transition: `colors 300ms`.
- Gap: `gap-10`.

**Right side:**
- Desktop (md+): "Share" text button + `Share2` icon from lucide-react. Same styling as nav links. Icon is `w-4 h-4`.
- Mobile: Hamburger `Menu` icon from lucide-react, `w-5 h-5`, white.

---

### 7. Full-Screen Mobile Menu (z-100, fixed)

Triggered by tapping the hamburger. Uses two states: `menuOpen` (controls mount/unmount) and `menuAnimating` (controls CSS transitions for enter/exit).

**Open:** Set `menuOpen = true`, then on next `requestAnimationFrame` set `menuAnimating = true`.
**Close:** Set `menuAnimating = false`, then after 600ms set `menuOpen = false`.

**Layers:**
1. **Backdrop:** `absolute inset-0 bg-[#0a0a0a]`, opacity transitions over 500ms.
2. **Circle reveal:** A `div` positioned at `top-4 right-5`, `rounded-full bg-white/[0.03]`. Grows from `0` to `300vmax` width/height with `transform: translate(50%, -50%)`. Easing: `cubic-bezier(0.16, 1, 0.3, 1)`, duration 800ms.
3. **Top bar:** Logo "COSMIQ." on left, `X` close icon on right. Fades in with 200ms delay.
4. **Nav links:** Three links ("Discover", "Story", "Connect") in a vertical column. Each is a row with the label on the left and an `ArrowUpRight` icon on the right. Separated by `border-b border-white/[0.08]`.
   - Label font: `Anton, sans-serif`, `text-4xl`, `tracking-tight`. On hover: `tracking-wider`.
   - Icon: `ArrowUpRight` from lucide-react, `w-5 h-5 text-white/30`. On hover: white, translates `+1px right, -1px up`.
   - Staggered entrance: each link has `300 + i * 100 ms` delay, slides up from `translateY(30px)`.
5. **Bottom section:** "Share" button with `Share2` icon, plus a decorative `12px-wide 1px-tall` white/20 line and tagline "Explore the unknown" in `text-[10px] tracking-[0.3em] text-white/30 uppercase`. Appears with 650ms delay.

---

### 8. CSS Keyframes (in `index.css`)

```css
@keyframes circleShrink {
  0% { transform: translate(-50%, -50%) scale(4); opacity: 0; }
  20% { opacity: 0.3; }
  100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
}

@keyframes circleShrinkOuter {
  0% { transform: translate(-50%, -50%) scale(5); opacity: 0; }
  25% { opacity: 0.2; }
  100% { transform: translate(-50%, -50%) scale(1); opacity: 0.2; }
}

@keyframes textReveal {
  0% { transform: translateY(100%); opacity: 0; }
  60% { opacity: 1; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes rockFadeIn {
  0% { opacity: 0; transform: translateX(-50%) scale(0.95); }
  100% { opacity: 1; transform: translateX(-50%) scale(1); }
}

@keyframes starTwinkle {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.8; }
}

@keyframes circlePulse {
  0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.4; transform: translate(-50%, -50%) scale(1.03); }
}

@keyframes circlePulseOuter {
  0%, 100% { opacity: 0.2; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.28; transform: translate(-50%, -50%) scale(1.02); }
}
```

Also in `index.css`, a global reset:
```css
* { margin: 0; padding: 0; box-sizing: border-box; }
html, body { overflow-x: hidden; background: #0a0a0a; }
```

---

### Animation Sequence (Timeline)

1. **0ms** -- Page loads. Stars visible and twinkling. Video begins playing at 1.56x speed.
2. **500ms** -- Nav bar fades in (1s duration).
3. **800ms** -- Circles begin their shrink-in animation (inner 3s, outer 3.5s).
4. **Video ends** -- Headline "WHAT'S BEYOND" reveals letter-by-letter from bottom. Rock image fades in over 0.6s, overlaying the bottom portion of the text for depth.
5. **~3.8s** -- Circles finish entrance, begin gentle infinite pulse.

---

### Dependencies

- `react` ^18.3.1
- `react-dom` ^18.3.1
- `lucide-react` ^0.344.0 (for `Share2`, `Menu`, `X`, `ArrowUpRight` icons)
- `tailwindcss` ^3.4.1
- `vite` ^5.4.2 with `@vitejs/plugin-react`