Build a fullscreen hero section for a site called "Orbis.Nft" using React, TypeScript, Tailwind CSS, and Vite. Recreate every detail below precisely.

---

### Video Background with Mouse-Scrub Effect

Use this video as the fullscreen background:
```
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260525_095441_eb28d7e5-72cf-4336-a4cd-543f46f4ff20.mp4
```

The video does NOT autoplay. Instead, implement a **mouse-scrub interaction**: as the user moves their mouse left/right across the viewport, the video scrubs forward/backward through its timeline. Implementation details:

- The video is paused on load at `currentTime = 0`.
- Track the mouse's horizontal position as a normalized value (0 to 1) across `window.innerWidth`.
- On each `mousemove`, compute the delta from the previous X position. Multiply that delta by a `SENSITIVITY` constant of `0.8` and by the video's `duration` to get a time offset.
- Maintain a `targetTime` that accumulates these offsets, clamped between 0 and `duration`.
- Use the video's `seeked` event to chain seeks: when a seek completes, if `targetTime` has diverged from `currentTime` by more than 0.01s, seek again. This prevents dropped seeks since the browser can only process one seek at a time.
- Use a `useRef` to store mutable state (`targetTime`, `isSeeking` flag, `prevX`) to avoid re-renders.
- The `<video>` element has attributes: `muted`, `playsInline`, `preload="auto"`, and is styled `absolute inset-0 h-full w-full object-cover`.

---

### Google Fonts

Load two Google Fonts in `index.html` via `<link>`:
```
https://fonts.googleapis.com/css2?family=Anton&family=Condiment&display=swap
```
- **Anton** -- used for the hero heading (mapped to Tailwind as `font-grotesk`).
- **Condiment** -- a cursive script used for the accent text (mapped as `font-condiment`).

Include `<link rel="preconnect">` tags for `fonts.googleapis.com` and `fonts.gstatic.com` (with `crossorigin`).

---

### Tailwind Config

Extend the default Tailwind theme with:
- **Colors:**
  - `background`: `#010828` (deep navy)
  - `cream`: `#EFF4FF` (off-white for heading text)
  - `neon`: `#6FFF00` (bright green for the cursive accent)
- **Font families:**
  - `grotesk`: `['Anton', 'sans-serif']`
  - `condiment`: `['Condiment', 'cursive']`

---

### Global CSS (`index.css`)

```css
body {
  background-color: #010828;
  color: #EFF4FF;
  margin: 0;
  overflow-x: hidden;
}
```

Also include a `.liquid-glass` utility class (not used in the hero itself, but part of the design system):
- `background: rgba(255, 255, 255, 0.01)` with `background-blend-mode: luminosity`
- `backdrop-filter: blur(4px)` (with `-webkit-` prefix)
- `border: none`
- `box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1)`
- A `::before` pseudo-element creating a gradient border effect using a `mask-composite: exclude` technique. The gradient goes from `rgba(255,255,255,0.45)` at top/bottom to transparent in the middle, with `padding: 1.4px`.

---

### Navbar

A `<nav>` fixed to the top (`fixed top-0 left-0 right-0 z-50`), using `flex items-center justify-between`, with padding `px-5 sm:px-8 py-4 sm:py-5`.

**Left: Logo (inline SVG)**
A custom geometric SVG logo, 28x28, viewBox `0 0 256 256`, filled `#111111`:
```
M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 96 95 L 63.5 128 L 64 128 L 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 64 L 64 0 L 192 0 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z
```

**Center: Desktop pill navigation (hidden on mobile, `hidden md:flex`)**
Absolutely centered with `absolute left-1/2 -translate-x-1/2`. Dark pill container: `bg-gray-900 rounded-full px-2 py-1.5`. Contains 5 nav items: `['Device', 'Real Stories', 'Science', 'Plans', 'Reach Us']`. The first item is the active state: `bg-white text-gray-900 text-sm font-medium px-4 py-1.5 rounded-full`. All others: `text-gray-300 text-sm font-medium px-4 py-1.5 rounded-full hover:text-white transition-colors`.

**Right: Desktop CTA button (hidden on mobile, `hidden md:flex`)**
`bg-gray-900 text-white text-sm font-medium px-5 py-2 rounded-full` with `hover:bg-gray-700 transition-colors`. Contains a small green dot (`w-2 h-2 rounded-full bg-green-400`) followed by text "Reserve Yours".

**Mobile: Hamburger toggle (`md:hidden`)**
Uses `Menu` and `X` icons from `lucide-react` at `size={22}`, colored `text-gray-900`. Toggles a dropdown.

**Mobile dropdown menu**
When open: `fixed top-0 left-0 right-0 z-40 bg-white pt-16 pb-6 px-5 shadow-lg flex flex-col gap-1 md:hidden`. Each nav item is a full-width button: `text-gray-800 text-base font-medium py-3 border-b border-gray-100 text-left hover:text-gray-500 transition-colors`. Includes the same "Reserve Yours" CTA at the bottom with `mt-4`, centered, `rounded-full`.

---

### Hero Text (Bottom-Left)

Positioned inside a `relative z-10 flex flex-col h-full` container. The text block is anchored to the bottom: `flex-1 flex items-end pb-16 sm:pb-20 lg:pb-24 px-6 lg:px-12`. Inner wrapper: `relative lg:ml-12 max-w-[780px]`.

**Main heading `<h1>`:**
- Font: `font-grotesk` (Anton)
- Size: `text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px]`
- `uppercase`, color `text-cream` (#EFF4FF)
- Line height: `leading-[1.05] sm:leading-[1] md:leading-[1] lg:leading-[1]`
- Text content (with line breaks):
  ```
  Beyond earth
  and ( its ) familiar
  boundaries
  ```
  The parentheses around "its" have spaces inside them: `{'( '}its{' )'}`.

**Cursive accent `<span>`:**
- Absolutely positioned relative to the heading wrapper: `absolute -right-4 sm:right-0 md:right-4 top-0 sm:top-2 md:top-4`
- Font: `font-condiment` (Condiment cursive)
- Size: `text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px]`
- Color: `text-neon` (#6FFF00)
- Slight rotation: `-rotate-1`
- `opacity-90`
- Inline style: `mixBlendMode: 'exclusion'`
- Text: "Nft collection"

---

### Overall Layout

The root `<section>` is `relative h-screen w-full overflow-hidden bg-background`. The video sits at `absolute inset-0` behind everything. The content layer sits at `relative z-10`. The nav is `fixed z-50`.

The page title in `index.html` is "Orbis.Nft".

---

### Dependencies

- `react`, `react-dom` (v18)
- `lucide-react` (for Menu and X icons)
- Tailwind CSS 3, PostCSS, Autoprefixer
- Vite with `@vitejs/plugin-react`
- TypeScript

No other UI libraries needed.