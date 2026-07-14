Create a React + TypeScript + Vite project with Tailwind CSS. Build a full-viewport hero section called `about.tsx` with the following exact specifications.

### Fonts (load in `index.html` `<head>`)

```html
<link href="https://db.onlinewebfonts.com/c/076f8c5b3b67616658dd1e4e9bac62ec?family=Zimula+Trial+Med" rel="stylesheet">
<link href="https://db.onlinewebfonts.com/c/08d8ca53f66ab5b48659912fa0136b78?family=Zimula+Trial+Bd" rel="stylesheet">
```

And in `index.css`:
```css
@import url('https://db.onlinewebfonts.com/c/46024824a3dd3309c3a7f46f4f1283ba?family=Zimula+Trial+Reg');
```

### Global CSS (`index.css`)

- Reset: `*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }`
- `html { scroll-behavior: smooth; }`
- `body { font-family: 'Zimula Trial Med', sans-serif; background: #0e0c0a; overflow-x: hidden; }`
- Custom scrollbar: 6px wide, track `#0e0c0a`, thumb `rgba(255,255,255,0.15)` with 3px radius.

### Section Container

A `<section>` with: `position: relative; width: 100%; min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow: hidden; fontFamily: "'Zimula Trial Med', sans-serif"`.

### Layer 1 — Background Video (z-index 0)

A `<video>` element with `autoPlay muted loop playsInline`, absolutely positioned to fill the section (`inset: 0; width: 100%; height: 100%; objectFit: cover`).

**Exact video URL (Cloudinary, not CloudFront):**
```
https://res.cloudinary.com/dy5er7kv5/video/upload/q_auto/f_auto/v1779835701/bg-2-video_sgbpqt.mp4
```

### Layer 2 — Warm Overlay (z-index 1)

Absolutely positioned div, `inset: 0`, `background: rgba(242, 238, 230, 0.38)`, `pointerEvents: none`. This warm off-white tint sits over the video for text legibility.

### Layer 3 — Centered Headline (z-index 2)

Absolutely positioned flex container (`inset: 0`), centered both axes, `pointerEvents: none`, `textAlign: center`, `padding: 0 24px`.

Inside, a `<p>` with:
- `fontSize: clamp(32px, 5.5vw, 80px)`
- `lineHeight: 1.18`
- `color: #2a2420` (warm dark brown)
- `maxWidth: 780px`
- `letterSpacing: -0.025em`
- `fontWeight: 400`
- `margin: 0`

Text content with explicit `<br />` line breaks:
```
What stands the
test of time is all
that guides the
work.
```

### Layer 4 — Bottom Element (z-index 2)

Absolutely positioned at `bottom: clamp(24px, 4vh, 48px)`, `left: 0`, `right: 0`. Flex column, items centered, `textAlign: center`, `padding: 0 24px`.

Children, in order:

**1. Vertical divider line:**
- `width: 1px; height: 56px; background: rgba(42,36,32,0.25)`

**2. Wrapper** with `marginTop: 22px`, flex column centered, `gap: 14px`, containing:

**a) Inline SVG map-pin icon** (24×28, viewBox `0 0 26 30`, fill none):
```jsx
<path
  d="M13 1C6.373 1 1 6.373 1 13c0 5.52 3.55 10.23 8.52 11.94l3.26 3.76a.75.75 0 001.14 0l3.26-3.76C22.45 23.23 25 18.52 25 13 25 6.373 19.627 1 13 1z"
  stroke="#2a2420"
  strokeWidth="1.4"
  fill="none"
/>
```

**b) Subtext `<p>`:**
- `fontSize: clamp(11px, 1.4vw, 13px)`
- `color: #2a2420`
- `letterSpacing: 0.04em`
- `lineHeight: 1.6`
- `maxWidth: 340px`
- `opacity: 0.75`
- Content: `Civic bodies and private clients trust us to shape resilient communities and purposeful places.`

### Notes

- **No animations, no scroll listeners, no parallax.** Section 2 is intentionally static. The only motion is the looping background video.
- All styling is inline (no CSS classes, no Tailwind utility classes inside the component) to keep the file self-contained.
---