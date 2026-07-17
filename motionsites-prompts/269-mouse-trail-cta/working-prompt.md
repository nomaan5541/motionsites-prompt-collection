Build a React + TypeScript + Tailwind CSS + Vite section called "Partner with us". It's a large rounded white card with a giant serif heading, a dark pill button containing a portrait avatar, and an interactive mouse-trail effect that drops fading, slightly rotated images wherever the user moves the cursor inside the card.

### Fonts (global, in `src/index.css` before `@tailwind` directives)

```css
@font-face {
  font-family: 'PP Neue Montreal';
  src: url('https://assets.website-files.com/6009ec8cda7f305645c9d91b/60176f9bb43e36419997ecfe_PPNeueMontreal-Book.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'PP Neue Montreal';
  src: url('https://assets.website-files.com/6009ec8cda7f305645c9d91b/60176f9b39c5673e51a86f5a_PPNeueMontreal-Medium.otf') format('opentype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'PP Mondwest';
  src: url('/PPMondwest-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: 'PP Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

@keyframes fadeInUp {
  0%   { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}
```

Place `PPMondwest-Regular.woff2` in `public/`. Also place a square portrait JPG in `public/` (e.g., `viktor.jpg`) to use as the avatar inside the CTA button.

### In-view hook (`src/hooks/useInViewAnimation.ts`)

`IntersectionObserver` with `threshold = 0.1`. Returns `{ ref, isInView }`. Sticky once true.

### Component (`src/components/PartnerSection.tsx`)

**Props**
- `images: string[]` — a list of image URLs used as the trail. Use the same GIF/animation URLs you have on the rest of the page (any 8+ rectangular assets).

**State / refs**
- `trailImages: TrailImage[]` where `TrailImage = { id: number; x: number; y: number; timestamp: number; src: string; rotation: number }`.
- `isHovered: boolean` (default false).
- `sectionRef` — ref on the inner rounded card (for bounding-rect math).
- `lastSpawnTime` — `useRef(0)` for spawn throttling.
- `imageIdCounter` — `useRef(0)` monotonically increasing id.
- `animationRef`, `isInView` from `useInViewAnimation()` placed on the outer `

`.

**Mouse trail behaviour**
- `onMouseEnter` sets `isHovered = true`; `onMouseLeave` sets it false.
- `onMouseMove`:
  - Bail if `!isHovered` or `!sectionRef.current`.
  - Throttle: ignore if `Date.now() - lastSpawnTime.current < 80` ms.
  - Compute `(x, y)` relative to the section's `getBoundingClientRect()` (subtract `rect.left`, `rect.top`).
  - Pick a random image from `images`. Compute `rotation = (Math.random() - 0.5) * 20` degrees.
  - Push a new `TrailImage` with a fresh id, `timestamp = Date.now()`.
- Cleanup loop: `setInterval` every 50 ms removes any trail entry whose age `> 1000` ms.

**Per-image fade math** (applied as inline style on the trail wrapper):
- `age = now - img.timestamp`, `progress = min(age / 1000, 1)`.
- `opacity = 1 - progress`.
- `scale = 1 - progress * 0.15`.
- Position: `left = img.x - 50`, `top = img.y - 50`.
- Transform: `scale(${scale}) rotate(${img.rotation}deg)`.

**Markup**

Outer wrapper:
```html



```
Inner rounded card (this is the trail surface — attach `sectionRef`, `onMouseMove`, `onMouseEnter`, `onMouseLeave` here):
```
w-full max-w-7xl mx-auto py-48 bg-white relative overflow-hidden
shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),0_4px_30px_rgba(0,0,0,0.08)]
rounded-[40px]
```

Inside the card, a centered content block above the trail:
```html



```

Heading:
```
text-[48px] md:text-[64px] lg:text-[80px] leading-[1.1]
text-[#0D212C] tracking-tight font-normal mb-12
```
- Inline style `fontFamily: "'PP Mondwest', serif"`.
- Text: `Partner with us`.
- Animation: when `isInView`, class `animate-fade-in-up`; else `opacity-0`. Inline `animationDelay: isInView ? '0.1s' : '0s'`.

CTA button (centered with `mx-auto`):
```
bg-[#051A24] text-white px-6 py-3.5 rounded-full
flex items-center gap-3
shadow-[0_1px_2px_0_rgba(5,26,36,0.1),0_4px_4px_0_rgba(5,26,36,0.09),0_9px_6px_0_rgba(5,26,36,0.05),0_17px_7px_0_rgba(5,26,36,0.01),0_26px_7px_0_rgba(5,26,36,0),inset_0_2px_8px_0_rgba(255,255,255,0.5)]
hover:bg-[#0D212C] transition-colors duration-200
```
- Animation: `animate-fade-in-up` (or `opacity-0`) with `animationDelay: '0.2s'`.
- Contents:
  1. `` of the portrait: `w-10 h-10 rounded-full object-cover`, `src` = portrait JPG path, `alt="Viktor Oddy"`.
  2. `Start chat with Viktor`.

After the centered content block, render the trail images list (still inside the card, not behind `z-10`):
```jsx
{trailImages.map((img) => (
  


    


))}
```

### Colors used
- Dark text / button bg: `#051A24` (button), `#0D212C` (heading and button hover).
- Card surface: `white`.
- Card shadow: `0 0 0 0.5px rgba(0,0,0,0.05), 0 4px 30px rgba(0,0,0,0.08)`.
- Button shadow (layered + inset highlight): as listed above.

### Behaviour summary
- Section fades in on scroll via `IntersectionObserver` (heading delay 0.1s, button delay 0.2s).
- Hovering the rounded card drops a randomized, rotated thumbnail every ~80 ms at the cursor; each thumbnail fades out and shrinks slightly over 1 second, then is removed.
- Trail thumbnails are 96 px wide (`w-24`), centered on the cursor (offset by 50 px), absolutely positioned, `pointer-events-none`, with `rounded-xl` and a soft `shadow-lg`.

### Required dependencies
`react`, `react-dom`, plus Vite + Tailwind toolchain. No `lucide-react` needed for this section.

---