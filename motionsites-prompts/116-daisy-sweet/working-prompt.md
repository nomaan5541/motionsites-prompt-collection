Build a standalone React + TypeScript + Tailwind CSS section component. This is a fragrance product showcase split into two halves: a sky-blue product panel on the left and a looping video on the right. On mobile it stacks vertically (product panel on top, video strip below). Every value below is exact — do not approximate.

## Tech Stack
- React 18 + TypeScript
- Tailwind CSS 3 (default config, default breakpoints: `sm:640px`, `md:768px`)
- Vite
- No extra packages. No icon libraries needed for this section.

## Constants

```ts
const TEXT_COLOR = '#000000';
const BG_BLUE = '#4BB3ED';
const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';
```

## Animation Helper

Create a reusable function that returns an object with a `style` property for CSS fade+slide entrance animations:

```ts
function anim(visible: boolean, delay: number, opts: { y?: number; x?: number; duration?: number } = {}) {
  const { y = 20, x = 0, duration = 1600 } = opts;
  const translateFrom = y !== 0 ? `translateY(${y}px)` : x !== 0 ? `translateX(${x}px)` : 'none';
  return {
    style: {
      opacity: visible ? 1 : 0,
      transform: visible ? 'translate(0,0)' : translateFrom,
      transition: `opacity ${duration}ms ${EASE} ${delay}ms, transform ${duration}ms ${EASE} ${delay}ms`,
    } as React.CSSProperties,
  };
}
```

This returns `{ style: {...} }` so it can be spread as `{...anim(...)}` directly onto elements (which sets the `style` prop), OR accessed as `anim(...).style` when merging with other inline styles.

## Product Data

```ts
const SCENT_PRODUCT = {
  name: 'Eau So Sweet',
  size: '100 ml / 3.3 oz',
  image: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260511_151640_5b4a7bf8-4eb2-4a49-aa63-17a9bb642b88.png&w=1280&q=85',
  notes: [
    { label: 'Fruity top', ingredient: 'WHITE RASPBERRIES' },
    { label: 'Floral heart', ingredient: 'DAISY TREE PETALS' },
    { label: 'Feminine base', ingredient: 'SUGAR MUSKS' },
  ],
};
```

## Video URL (exact, verbatim)

```
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_151802_1bbf9a81-a7cb-4be1-b858-f1cd92b62b96.mp4
```

---

## Component: `ProductPanel`

Accepts props:

```ts
{
  bg: string;                                         // background color
  product: { name: string; size: string; image: string };
  notes: { label: string; ingredient: string }[];
  visible: boolean;                                   // controls animation trigger
  noteStyle?: 'normal' | 'bold';                      // defaults to 'normal'
}
```

### Outer wrapper
```
<div
  className="relative flex flex-col px-6 md:px-8 pt-6 md:pt-8 pb-8 md:pb-10"
  style={{ backgroundColor: bg, minHeight: '100%' }}
>
```

### 1. Top labels row
```
<div
  className="flex items-start justify-between mb-auto"
  {...anim(visible, 0, { y: 12, duration: 1400 })}
>
```
- Left label: `<span className="text-xs font-normal" style={{ color: TEXT_COLOR }}>` — text is `'Daisy love'` when `noteStyle !== 'bold'`, `'Daisy wild'` when `noteStyle === 'bold'`.
- Right label: same classes/style — text is `'Sweet'` when normal, `'Playful'` when bold.

### 2. Product image block
```
<div
  className="flex flex-col items-center py-8"
  style={{ flex: 1, justifyContent: 'center', ...anim(visible, 300, { y: 40, duration: 1800 }).style }}
>
```

#### Image container
```
<div
  className="overflow-hidden"
  style={{
    width: 'clamp(140px, 40%, 220px)',
    aspectRatio: '220/340',
    backgroundColor: '#D9D9D9',
    borderRadius: '2px',
    flexShrink: 0,
  }}
>
  <img
    src={product.image}
    alt={product.name}
    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
  />
</div>
```

#### Caption (below image)
```
<div className="text-center mt-4" {...anim(visible, 600, { y: 10, duration: 1400 })}>
  <p className="text-sm font-normal" style={{ color: TEXT_COLOR }}>{product.name}</p>
  <p className="text-xs font-normal mt-1" style={{ color: TEXT_COLOR }}>{product.size}</p>
</div>
```

### 3. Bottom row — notes + button

```
<div className="flex items-end justify-between gap-4 flex-wrap">
```

#### Notes column (left side)
```
<div className="flex flex-col gap-0.5" {...anim(visible, 900, { y: 16, duration: 1400 })}>
```
For each note object, render a `<div key={note.ingredient}>` containing two `<p>` tags:
- Label: `<p className="text-xs leading-snug" style={{ color: TEXT_COLOR, fontWeight: noteStyle === 'bold' ? 700 : 400 }}>{note.label}</p>`
- Ingredient: `<p className="text-xs font-bold tracking-widest uppercase leading-snug" style={{ color: TEXT_COLOR }}>{note.ingredient}</p>`

#### SHOP NOW button (right side)
```
<button
  className="text-xs font-bold tracking-widest uppercase border px-6 py-3 relative group shrink-0"
  style={{
    color: TEXT_COLOR,
    borderColor: TEXT_COLOR,
    backgroundColor: 'transparent',
    ...anim(visible, 1150, { y: 16, duration: 1400 }).style,
  }}
>
  <span className="relative z-10 group-hover:text-black transition-colors duration-500">SHOP NOW</span>
  <span
    className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
    style={{ backgroundColor: '#ffffff' }}
  />
</button>
```

The button has a `1px` solid border (via Tailwind `border` class) colored `#000000`. On hover, a white fill (`#ffffff`) scales in from the left edge (`origin-left`, `scale-x-0` -> `scale-x-100`) over 500ms with `ease-out`. Text stays `z-10` above the fill. The `group-hover:text-black` class ensures text remains black over the white fill.

---

## Component: `ScentFinderSection`

### Visibility trigger
```ts
const ref = useRef<HTMLDivElement>(null);
const [visible, setVisible] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) setVisible(true); },
    { threshold: 0.15 }
  );
  if (ref.current) observer.observe(ref.current);
  return () => observer.disconnect();
}, []);
```

Once 15% of the section is visible, `visible` flips to `true` permanently (one-shot, never resets to false). This triggers the staggered animations inside `ProductPanel`.

### Layout structure

```
<section ref={ref} className="relative w-full">
  <div className="flex flex-col md:grid md:min-h-screen" style={{ gridTemplateColumns: '1fr 1fr' }}>
```

Three children inside:

#### Child 1: ProductPanel (always visible)
```
<ProductPanel
  bg={BG_BLUE}
  product={SCENT_PRODUCT}
  notes={SCENT_PRODUCT.notes}
  visible={visible}
/>
```
Called with `noteStyle` defaulting to `'normal'` (not passed explicitly), so top labels read `Daisy love` / `Sweet`, and note labels use `fontWeight: 400`.

#### Child 2: Desktop video panel (hidden below `md`)
```
<div className="hidden md:block relative overflow-hidden" style={{ backgroundColor: '#111', minHeight: '100%' }}>
  <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
    <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_151802_1bbf9a81-a7cb-4be1-b858-f1cd92b62b96.mp4" type="video/mp4" />
  </video>
</div>
```
- Background `#111` shows while video loads.
- `minHeight: '100%'` ensures the video panel fills the grid row height.
- Video is `position:absolute inset-0`, fills and covers the container.

#### Child 3: Mobile video strip (hidden at `md` and above)
```
<div className="md:hidden relative overflow-hidden" style={{ height: '75vw', backgroundColor: '#111' }}>
  <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
    <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_151802_1bbf9a81-a7cb-4be1-b858-f1cd92b62b96.mp4" type="video/mp4" />
  </video>
</div>
```
- Fixed aspect via `height: 75vw` (so on a 390px phone it is ~293px tall).
- Same video URL, same absolute-cover pattern, same `#111` background.

### Responsive behavior summary

| Viewport | Layout | Product panel | Video |
|---|---|---|---|
| < 768px (below `md`) | `flex flex-col` | Full width, natural height | Full width, `height: 75vw`, below the panel |
| >= 768px (`md` and up) | `grid 1fr 1fr`, `min-h-screen` | Left half, fills grid height | Right half, fills grid height |

On mobile, the desktop video div is `hidden` and the mobile strip is shown. On desktop, the mobile strip is `hidden` and the desktop div is shown. Both use the identical video source.

---

## Animation Stagger Timeline (all triggered when section becomes 15% visible)

| Element | Delay | Duration | Direction | Distance |
|---|---|---|---|---|
| Top labels row | 0ms | 1400ms | translateY | 12px |
| Product image block | 300ms | 1800ms | translateY | 40px |
| Caption (name + size) | 600ms | 1400ms | translateY | 10px |
| Notes column | 900ms | 1400ms | translateY | 16px |
| SHOP NOW button | 1150ms | 1400ms | translateY | 16px |

All use easing `cubic-bezier(0.22, 1, 0.36, 1)`. Each element starts `opacity: 0` + translated down by the specified distance, then transitions to `opacity: 1` + `translate(0,0)`.

## Fonts
No custom fonts or Google Fonts. Uses Tailwind's default sans-serif system font stack for all text in this section. No serif fonts appear here.

## SVGs / Icons
None. This section contains zero SVG elements or icon components.

## Colors used
- `#4BB3ED` — product panel background (sky blue)
- `#000000` — all text color, button border color
- `#D9D9D9` — image placeholder background (visible while image loads)
- `#111` — video panel background (visible while video loads)
- `#ffffff` — button hover fill