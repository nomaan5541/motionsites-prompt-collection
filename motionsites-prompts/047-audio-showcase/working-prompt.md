Build a full-screen hero section for a fictional vinyl record label called **"quietpress"** using React, TypeScript, Tailwind CSS, and Vite. The page is a single viewport-height hero with no scrolling. Use **lucide-react** for icons. No other UI libraries.

---

### Font

Load **Helvetica Regular** via this stylesheet in `index.html`:
```
https://db.onlinewebfonts.com/c/a64ff11d2c24584c767f6257e880dc65?family=Helvetica+Regular
```
Set the base font in CSS:
```css
html { font-family: 'Helvetica Regular', Helvetica, Arial, sans-serif; }
```

---

### Background: Boomerang Video Loop

Use this CloudFront video as the background:
```
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260611_183632_c311af08-e4b7-458f-81e7-79847a49b3d3.mp4
```

Create a `BoomerangVideoBg` component that:
1. Plays the video once (muted, playsInline, crossOrigin="anonymous"), capturing every frame into off-screen canvases (max width 960px, scaled proportionally).
2. Uses `requestVideoFrameCallback` when available, falling back to `requestAnimationFrame`.
3. When the video ends, hides the `<video>` element and renders a `<canvas>` that plays the captured frames in a ping-pong (boomerang) loop at 30fps -- forward then backward, endlessly.
4. The container is `absolute inset-0 z-0` with `scale-[1.08] origin-center overflow-hidden` to slightly zoom the video and hide edges.

---

### Liquid Glass CSS Effect

Create a reusable `.liquid-glass` CSS class:
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
.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
```

---

### Fade-Up Entrance Animation

```css
@keyframes fade-up {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: none; }
}
.animate-fade-up {
  animation: fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) backwards;
}
.delay-1 { animation-delay: 0.1s; }
.delay-2 { animation-delay: 0.25s; }
.delay-3 { animation-delay: 0.4s; }
.delay-4 { animation-delay: 0.55s; }
.delay-5 { animation-delay: 0.75s; }
@media (prefers-reduced-motion: reduce) {
  .animate-fade-up { animation: none; }
}
```

**CRITICAL:** Use `animation-fill-mode: backwards` (not `both` or `forwards`). Using `both` or `forwards` leaves a `transform` on the element after the animation ends, which breaks `backdrop-filter` on any child using `.liquid-glass`. `backwards` applies the "from" state before the animation starts but fully releases all properties when it finishes, so the glass blur works correctly.

---

### Header (absolute, top, z-20)

- **Logo (left):** A custom SVG icon (a quarter-circle shape with a centered dot, white fill, 20x20px) next to the text "quietpress" in `text-base tracking-tight text-white`.
  - SVG path: `M 256 256 L 128 256 C 198.692 256 256 198.692 256 128 C 256 57.308 198.692 0 128 0 C 57.308 0 0 57.308 0 128 C 0 198.692 57.308 256 128 256 L 0 256 L 0 0 L 256 0 Z M 128 104 C 141.255 104 152 114.745 152 128 C 152 141.255 141.255 152 128 152 C 114.745 152 104 141.255 104 128 C 104 114.745 114.745 104 128 104 Z` (viewBox `0 0 256 256`)

- **Nav links (center, hidden on mobile):** "Anthology", "Talents", "Sound diary", "Playback salon" -- `text-sm text-white/90 hover:text-white`, gap-8.

- **Right side:**
  - **Cart button:** White pill shape (`rounded-xl bg-white p-1 pr-3 sm:pr-4`). Contains a blue-700 icon square (`h-7 w-7 rounded-lg bg-blue-700`) with a `ShoppingCart` icon (size 14, strokeWidth 2), then text "Cart (0)" (hidden on mobile, showing just "(0)" on small screens). Has `hover:scale-105 active:scale-95`.
  - **Mobile menu toggle:** `liquid-glass` square button (`h-9 w-9 rounded-xl`), shows `Menu` or `X` icon (size 18). Hidden on `md:` and above.

- **Mobile nav dropdown** (shown when menu is open): `liquid-glass mx-4 rounded-2xl p-2`, each link is `rounded-xl px-4 py-3 text-sm text-white/90 hover:bg-white/10`.

---

### Hero Content (centered, z-10)

Padding: `pt-28 sm:pt-36 md:pt-44`, `px-4 sm:px-6`.

1. **Tag badge** (animate-fade-up delay-1): `liquid-glass rounded-lg px-4 py-1.5 text-xs sm:text-sm text-white` with inline style `background: rgba(255, 255, 255, 0.16)`. Text: "Press 04 . Vernal woods". Bottom margin `mb-5 sm:mb-6`.

2. **Headline** (animate-fade-up delay-2): `max-w-3xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white`. Two lines:
   ```
   records cut for the
   calm listener.
   ```

3. **Subtext** (animate-fade-up delay-3): `mt-5 sm:mt-6 max-w-md text-sm sm:text-base md:text-lg leading-relaxed text-white/90`. Text: "Drone, roots, and nature-captured sound on wax LPs. Every disc cut just once, snag it or miss."

4. **Two buttons** (animate-fade-up delay-4, `mt-8`, stack vertically on mobile, row on `sm:`):
   - **Primary:** `rounded-xl bg-white px-7 py-2.5 text-sm text-gray-900 hover:scale-105 active:scale-95`. Label: "Browse the shelves"
   - **Secondary:** `liquid-glass rounded-xl px-7 py-2.5 text-sm text-white hover:scale-105 active:scale-95`. Label: "Newest arrivals"

---

### Now Playing Widget (bottom-right, z-20)

Positioned `absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-10`. Max width `270px` on mobile, `w-72` on sm+. Has `animate-fade-up delay-5`.

- **Track card:** `rounded-2xl bg-white p-2.5 pr-4 shadow-lg`. Contains:
  - Blue icon square (`h-11 w-11 rounded-xl bg-blue-700`) with `BarChart3` icon (size 20, strokeWidth 2.5).
  - Track info: "Helia Marsh -- Fern Light" (truncated, `text-sm text-gray-900`).
  - Progress bar: `h-1 rounded-full bg-gray-200` with `w-[30%] bg-blue-700` fill.
  - Times: "0:33" and "-1:21" in `text-[10px] text-gray-500`.

- **Controls row** (gap-2):
  - "Prev" and "Next" buttons: `flex-1 rounded-2xl bg-white py-2 text-sm text-gray-900 shadow-lg hover:scale-105 active:scale-95`.
  - Heart button (center): `h-10 w-10 rounded-full bg-white shadow-lg hover:scale-110 active:scale-95`. Uses `Heart` icon (size 16) in `text-blue-700`, filled when liked (`fill-blue-700`). Toggles on click.

---

### Key Technical Notes
- The outer wrapper is `relative h-screen w-full overflow-hidden`.
- All interactive elements use `transition-transform duration-200`.
- The accent color throughout is Tailwind's `blue-700`.
- No Supabase or backend needed -- this is purely a static hero.