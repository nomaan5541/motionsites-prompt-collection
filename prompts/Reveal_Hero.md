Build a single-page React + TypeScript + Vite + Tailwind CSS project that recreates the following hero section exactly. Use `lucide-react` for icons. Do not install any other UI or animation libraries.

### Project setup

- React 18, TypeScript, Vite, Tailwind CSS.
- Dependencies: `react`, `react-dom`, `lucide-react`, `@supabase/supabase-js`.
- File `src/index.css` must be:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  font-family: 'Inter', sans-serif;
}
```

### Assets (use these URLs verbatim, do NOT download)

- `BG_IMAGE_1` = `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260512_012043_9764f2d0-5c6e-4faa-94a6-a8253df08c5e.png&w=1280&q=85`
- `BG_IMAGE_2` = `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260512_012949_6b24738e-6e5f-4b6f-93d7-5772f4d32285.png&w=1280&q=85`

### Constants

- `SPOTLIGHT_R = 260`
- `GRID_CELL = 48`

### Behavior / animations

1. **Grid background** — inline SVG, opacity 0.1, full-cover, absolutely positioned behind content. A `<pattern id="grid">` with `width=48`, `height=48`, `patternUnits="userSpaceOnUse"`, whose `x` and `y` are bound to a ref-driven `gridOffset`. Pattern contains a single `<path d="M 48 0 L 0 0 0 48" fill="none" stroke="#64748b" strokeWidth="0.6" />`. A `<rect width="100%" height="100%" fill="url(#grid)" />` fills it.
2. **Mouse tracking** — on `mousemove` store raw `{x, y}` in a ref. A `requestAnimationFrame` loop eases a `smooth` ref toward `mouse` with factor `0.1`. Using `smooth`, compute normalized offset `cx = (smooth.x - rect.left) / rect.width - 0.5` (same for y), then ease `gridOffset` toward `cx * 16` / `cy * 16` with factor `0.06`. Update a `cursorPos` state with the smoothed coords each frame.
3. **Reveal layer (spotlight)** — a hidden `<canvas>` sized to `window.innerWidth` × `window.innerHeight`. Each frame (in a `useEffect` that runs on every render of `RevealLayer`):
   - Clear canvas.
   - Create `createRadialGradient(cursorX, cursorY, 0, cursorX, cursorY, 260)` with stops:
     - `0` → `rgba(255,255,255,1)`
     - `0.4` → `rgba(255,255,255,1)`
     - `0.6` → `rgba(255,255,255,0.75)`
     - `0.75` → `rgba(255,255,255,0.4)`
     - `0.88` → `rgba(255,255,255,0.12)`
     - `1` → `rgba(255,255,255,0)`
   - Draw a full circle `arc(cursorX, cursorY, 260, 0, 2π)` filled with that gradient.
   - Convert canvas to `toDataURL()` and apply as `maskImage` / `webkitMaskImage` on a `<div>` sized `100% 100%` whose background is `BG_IMAGE_2` (`bg-center bg-cover bg-no-repeat`). Mask size `100% 100%`.
4. Resize listener resets canvas width/height to `window.innerWidth` / `window.innerHeight`.

### Layout / JSX structure

Top-level `App`:

- Root `<div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>`.
- Fixed nav: `<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5">`.

**Logo** (inline SVG, first child of nav, inside `<div className="flex items-center">`):

```html
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256" fill="none">
  <path d="M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 96 95 L 63.5 128 L 64 128 L 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 64 L 64 0 L 192 0 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z" fill="#111111" />
</svg>
```

**Desktop pill nav** (hidden on mobile): `<div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-gray-900 rounded-full px-2 py-1.5 items-center gap-1">` containing buttons in order:
- `Device` — active: `bg-white text-gray-900 text-sm font-medium px-4 py-1.5 rounded-full`
- `Real Stories`, `Science`, `Plans`, `Reach Us` — each: `text-gray-300 text-sm font-medium px-4 py-1.5 rounded-full hover:text-white transition-colors`

**Desktop CTA** (right): `<button className="hidden md:flex bg-gray-900 text-white text-sm font-medium px-5 py-2 rounded-full items-center gap-2 hover:bg-gray-700 transition-colors">` with green dot `<span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>` + text `Reserve Yours`.

**Mobile hamburger** (shown `md:hidden`): toggles `menuOpen` state; icon is lucide `Menu` (size 22) or `X` (size 22) when open; button classes `md:hidden text-gray-900 p-1`.

**Mobile dropdown** (when `menuOpen`): `fixed top-0 left-0 right-0 z-40 bg-white pt-16 pb-6 px-5 shadow-lg flex flex-col gap-1 md:hidden`, maps items `['Device','Real Stories','Science','Plans','Reach Us']` to `<button className="text-gray-800 text-base font-medium py-3 border-b border-gray-100 text-left hover:text-gray-500 transition-colors">`, then a `Reserve Yours` button: `mt-4 bg-gray-900 text-white text-sm font-medium px-5 py-3 rounded-full flex items-center gap-2 justify-center hover:bg-gray-700 transition-colors` with the green dot span.

**Hero section** (`<section>`): `relative w-full overflow-hidden` with inline `style={{ height: '100vh' }}`. Children in order:

1. The grid SVG described above (`opacity: 0.1`, `z-0`, pointer-events none, `absolute inset-0 w-full h-full`).
2. Base image div: `absolute inset-0 bg-center bg-cover bg-no-repeat z-10` with `backgroundImage: url('<BG_IMAGE_1>')`.
3. `<RevealLayer>` (hidden canvas + masked div with `BG_IMAGE_2`, `z-30`, pointer-events none).
4. Hero text block: `<div className="absolute bottom-12 sm:bottom-12 md:bottom-56 left-5 sm:left-8 md:left-12 max-w-[260px] sm:max-w-xs z-50">` containing:
   - `<p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] text-gray-600 uppercase mb-2 sm:mb-3">PureFlow One</p>`
   - `<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">Clean Air, Clear<br />Mind. Anywhere.</h1>`
   - A `<div className="flex items-center gap-3 sm:gap-4">` with:
     - `<button className="bg-gray-900 text-white text-xs sm:text-sm font-medium px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-gray-700 transition-colors">Discover</button>`
     - `<button className="flex items-center gap-2 text-gray-700 text-xs sm:text-sm font-medium hover:text-gray-900 transition-colors">` containing lucide `<Play size={12} className="fill-gray-700" />` and text `View Specs`.

### Notes

- All icons from `lucide-react`: `Play`, `Menu`, `X`.
- Font: Inter (Google Fonts) weights 300–700.
- No purple/indigo colors; neutrals + `bg-green-400` status dot only.
- Responsive: tablet (`sm`) keeps hero text at the same bottom as mobile (`bottom-12`); only desktop (`md`+) raises it (`bottom-56`).
- Use `useRef` + `requestAnimationFrame` (no external animation libs). Canvas-based radial mask reveal must update each frame.