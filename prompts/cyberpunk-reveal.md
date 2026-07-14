Recreate a cyberpunk-style hero section (React + Vite + TypeScript + Tailwind CSS, lucide-react icons)**

Build a single-page app with a full-screen hero section in `src/App.tsx`. Stack: React 18, Tailwind CSS, lucide-react (icons only, `Menu` and `X`). No other packages.

## Assets

```
BG_IMAGE_1 (base, red-tinted portrait):
https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_125121_afb71ce9-9c64-4c54-90b5-c89c0764c052.png&w=1920&q=85

BG_IMAGE_2 (alternate reveal image):
https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_135737_0da59642-725b-451a-997b-b0283d95a42a.png&w=1280&q=85
```

## Fonts (index.css)

- Google Fonts import: `JetBrains Mono` weights 300–800 plus italic 400/500.
- Apply globally: `* { font-family: 'JetBrains Mono', monospace; }` and a `.font-helvetica-neue` class that also resolves to JetBrains Mono.
- Also declare a `@font-face` for 'Helvetica Neue Roman' from `/fonts/HelveticaNeue-Roman.woff2` / `.woff` (weight 400, `font-display: swap`) — declared but the mono font is what renders.
- Root wrapper div: `min-h-screen bg-white tracking-[-0.02em]` with inline `fontFamily: "'JetBrains Mono', monospace"`.

## Navbar (fixed, z-50)

`<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between md:justify-center p-4 sm:p-5">`

- **Desktop (md+): ONE centered pill** — `bg-black/60 backdrop-blur-md rounded-full pl-3 pr-2 py-2 flex items-center gap-1` containing, in order: a 22x22 white SVG logo (geometric angular mark, viewBox 0 0 256 256, path: `M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 96 95 L 63.5 128 L 64 128 L 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 64 L 64 0 L 192 0 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z`); text link buttons "Module" (white, active), "Case Records", "Biotech", "Tiers", "Live Demo" (gray-300, `text-sm font-medium px-3 py-1.5 rounded-full hover:bg-white/10 hover:text-white`); and a white CTA "Connect" (`bg-white text-gray-900 text-sm font-semibold px-5 py-1.5 rounded-full hover:bg-gray-100 ml-1`).
- **Mobile (<md):** logo in its own black/60 blurred pill (left) and a hamburger toggle pill (right) using lucide `Menu`/`X` size 22. Toggling opens a full-width white dropdown (`fixed top-0 z-40 pt-16 pb-6 px-5 shadow-lg`) listing the 5 links (gray-800, `py-3 border-b border-gray-100`) plus a dark "Connect" pill button; tapping a link closes it.

## Hero section (100dvh, `relative overflow-hidden`)

Layers bottom to top:

1. **Grid background (z-0):** full-size SVG at `opacity: 0.1`, a 48px square `<pattern>` of grid lines (`stroke #64748b`, width 0.6). The pattern's x/y offset follows the mouse with parallax: target = (normalized cursor position − 0.5) × 16px, eased at 0.06 lerp per frame.
2. **Base image (z-10):** `bg-center bg-cover` div with BG_IMAGE_1, with a Ken Burns intro: `@keyframes kenBurns { from { transform: scale(1.12) } to { scale(1) } }`, 2.4s `cubic-bezier(0.22,1,0.36,1)` forwards.
3. **Cursor spotlight reveal layer (z-30):** a second `bg-cover` div with BG_IMAGE_2, masked by a canvas-generated radial gradient that follows the smoothed cursor. Implementation: a hidden full-window canvas; every frame, clear it and fill a circle (radius 260px) at the cursor with a radial gradient (stops: 0→1 opacity, 0.4→1, 0.6→0.75, 0.75→0.4, 0.88→0.12, 1→0), export via `toDataURL()` and set as `mask-image`/`-webkit-mask-image` (`mask-size: 100% 100%`) on the image div. Cursor smoothing: rAF loop with lerp factor 0.1 toward real mouse position, starting offscreen at (−999,−999).
4. **Stats on a fading circular arc (z-50, hidden below sm):** container `absolute inset-y-0 right-0 pointer-events-none`, SVG `viewBox="0 0 380 700"` `preserveAspectRatio="xMaxYMid meet"` `class="h-full w-auto"`. Concentric arcs centered at `(-110, 300)` (off-canvas left, so arcs sweep in from the subject). Data:
   - r=330, arc from −92° to 16°, dot at −46°, stat "10+" / "YEARS REAL"
   - r=395, arc −56° to 60°, dot at 2°, stat "40+" / "USE FORMS"
   - r=460, arc −14° to 72°, dot at 44°, stat "95%" / "REPEAT MEMBERS"

   Each arc is a path (`A r r 0 0 1`) stroked at 1.1 with a per-arc `userSpaceOnUse` linearGradient from arc start point to end point, white with stop-opacities 0 → 0.5 (22%) → 0.5 (55%) → 0.1 (85%) → 0 (100%) so both ends fade out. At each dot position (polar from center): a filled white circle r=3.4, a white ring r=7 at 35% stroke opacity, the number at dot+(16,4) in white 32px (suffix as `<tspan>` 19px raised `dy="-10"`, letter-spacing −1px), and the uppercase label at dot+(18,22), 8.5px, weight 600, letter-spacing 2px, 80% opacity.
5. **Hero text block (z-50):** `absolute bottom-12 sm:bottom-16 md:bottom-24 left-5 sm:left-8 md:left-12 max-w-[300px] sm:max-w-md`:
   - Eyebrow: `Gateway to your *augmented self*` (italic span), `text-[11px] sm:text-xs font-semibold tracking-[0.12em] text-white/90`
   - H1: `A window / of coming / enhancements` (manual `<br/>`), `text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-[-0.08em] text-white`
   - Paragraph: "A future where carbon fiber, titanium, and human instinct align. Not machine. Not human. Something wonderfully poised between." `text-sm sm:text-base text-white/90 leading-relaxed`
   - CTA "Reserve Now": white pill `px-7 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-lg shadow-black/20`, hover `scale-[1.04]`, active `scale-95`, plus a shine sweep: an absolutely-positioned gradient span (`from-transparent via-white/60 to-transparent`) translating from `-translate-x-full` to `translate-x-full` over 700ms on group hover.

## Animations (CSS keyframes in index.css)

- `.hero-rise`: from `opacity:0; translateY(26px); blur(8px)` to clear; 0.95s `cubic-bezier(0.22,1,0.36,1)` forwards; staggered inline delays — eyebrow 0.15s, H1 0.3s, paragraph 0.5s, button 0.7s.
- `.nav-drop`: from `opacity:0; translateY(-18px)`; 0.8s same easing, 0.1s delay; applied to all nav pills.
- `.arc-line`: stroke-draw via `stroke-dasharray/offset` set to the arc length (computed `r × Δangle(rad)`, passed as CSS var `--len`), animating offset to 0 over 1.6s `cubic-bezier(0.65,0,0.35,1)`; delays staggered `0.4s + i × 0.22s`.
- `.arc-dot`: `popIn` overshoot (scale 0.4 → 1.25 → 1) 0.55s back-out easing, delay = lineDelay + 0.9s; needs `transform-box: fill-box; transform-origin: center`.
- `.arc-ring`: infinite `pulseRing` (scale 1→1.45, opacity 0.35→0) 2.8s ease-in-out, delay markDelay + 0.3s.
- `.arc-text`: simple fadeIn 0.7s, number at markDelay + 0.15s, label + 0.3s.
- Wrap all of the above in `@media (prefers-reduced-motion: reduce)` resetting animation/opacity/transform/dashoffset.

## Behavior notes

- All mouse-driven effects run in one `requestAnimationFrame` loop; clean up listener and rAF on unmount.
- Stats arc is decorative: `pointer-events-none`, hidden on mobile (`hidden sm:block`).
- Everything must remain readable: white text over the red imagery.