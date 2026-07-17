# Working Prompt: Daisy Wild

This is the original full prompt returned by the MotionSites `get-prompt` endpoint in the current session.

## Metadata

- Prompt ID: `daisy-wild`
- Category: Product
- Page type: hero
- Source status: fetched
- Preview video: https://stream.mux.com/2Hw6m1j8Uwe01mclRo02ASjEsewZOp6E7eITdToiIyfvs.m3u8
- Preview image: 

## Prompt

```
Build a standalone React + TypeScript + Tailwind CSS section component. This is a fragrance product showcase split into two halves: a looping video on the LEFT and a lime-green product panel on the RIGHT. On mobile it stacks vertically with the product panel ABOVE the video (achieved via `flex-col-reverse`). Every value below is exact.

## Tech Stack
- React 18 + TypeScript
- Tailwind CSS 3 (default config, default breakpoints: `sm:640px`, `md:768px`)
- Vite
- No extra packages. No icon libraries needed.

## Constants

```ts
const TEXT_COLOR = '#000000';
const BG_LIME = '#BDE84F';
const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';
```

## Animation Helper

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

## Product Data

```ts
const WILD_PRODUCT = {
  name: 'Eau So Extra',
  size: '100 ml / 3.3 oz',
  image: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260511_151621_4fba6892-ed21-4c2e-8cb3-0bd2ec2abefa.png&w=1280&q=85',
  notes: [
    { label: 'Top', ingredient: 'BANANA BLOSSOM ACCORD' },
    { label: 'Heart', ingredient: 'CHOCOLATE DAISY ACCORD' },
    { label: 'Base', ingredient: 'VETIVER OIL' },
  ],
};
```

## Video URL (exact, verbatim)

```
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_151818_65bb22c5-33ae-4e23-85ea-0a3dd89957c2.mp4
```

---

## Component: `ProductPanel`

This is a reusable component shared with Section 2. For this section it is called with `noteStyle="bold"`.

### Props

```ts
{
  bg: string;
  product: { name: string; size: string; image: string };
  notes: { label: string; ingredient: string }[];
  visible: boolean;
  noteStyle?: 'normal' | 'bold';   // defaults to 'normal'
}
```

### Outer wrapper
```jsx
<div
  className="relative flex flex-col px-6 md:px-8 pt-6 md:pt-8 pb-8 md:pb-10"
  style={{ backgroundColor: bg, minHeight: '100%' }}
>
```

### 1. Top labels row
```jsx
<div
  className="flex items-start justify-between mb-auto"
  {...anim(visible, 0, { y: 12, duration: 1400 })}
>
  <span className="text-xs font-normal" style={{ color: TEXT_COLOR }}>
    {noteStyle === 'bold' ? 'Daisy wild' : 'Daisy love'}
  </span>
  <span className="text-xs font-normal" style={{ color: TEXT_COLOR }}>
    {noteStyle === 'bold' ? 'Playful' : 'Sweet'}
  </span>
</div>
```

For this section (`noteStyle="bold"`), the labels read **"Daisy wild"** on the left and **"Playful"** on the right.

### 2. Product image block
```jsx
<div
  className="flex flex-col items-center py-8"
  style={{ flex: 1, justifyContent: 'center', ...anim(visible, 300, { y: 40, duration: 1800 }).style }}
>
```

#### Image container
```jsx
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
```jsx
<div className="text-center mt-4" {...anim(visible, 600, { y: 10, duration: 1400 })}>
  <p className="text-sm font-normal" style={{ color: TEXT_COLOR }}>{product.name}</p>
  <p className="text-xs font-normal mt-1" style={{ color: TEXT_COLOR }}>{product.size}</p>
</div>
```

### 3. Bottom row — notes + button

```jsx
<div className="flex items-end justify-between gap-4 flex-wrap">
```

#### Notes column (left side)
```jsx
<div className="flex flex-col gap-0.5" {...anim(visible, 900, { y: 16, duration: 1400 })}>
```
For each note, render `<div key={note.ingredient}>` with two `<p>`:
- Label: `<p className="text-xs leading-snug" style={{ color: TEXT_COLOR, fontWeight: noteStyle === 'bold' ? 700 : 400 }}>{note.label}</p>`
- Ingredient: `<p className="text-xs font-bold tracking-widest uppercase leading-snug" style={{ color: TEXT_COLOR }}>{note.ingredient}</p>`

For this section (`noteStyle="bold"`), the note LABELS ("Top", "Heart", "Base") render at `fontWeight: 700`. The ingredient lines are always `font-bold` regardless.

#### SHOP NOW button (right side)
```jsx
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

Button: `1px` solid border colored `#000000`. On hover, a white fill scales from the left over 500ms. Text stays above (`z-10`).

---

## Component: `WildScentSection`

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

One-shot: once 15% visible, `visible` becomes `true` permanently, triggering all staggered animations.

### Layout structure

```jsx
<section ref={ref} className="relative w-full">
  <div className="flex flex-col-reverse md:grid md:min-h-screen" style={{ gridTemplateColumns: '1fr 1fr' }}>
```

**Critical difference from Section 2:** This uses `flex-col-reverse` (not `flex-col`). The DOM order is: video divs first, then ProductPanel. But on mobile, `flex-col-reverse` visually flips them so the product panel appears ABOVE the video.

### Three children inside (in DOM order):

#### Child 1: Desktop video panel (left half on desktop, hidden below `md`)
```jsx
<div className="hidden md:block relative overflow-hidden" style={{ backgroundColor: '#111', minHeight: '100%' }}>
  <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
    <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_151818_65bb22c5-33ae-4e23-85ea-0a3dd89957c2.mp4" type="video/mp4" />
  </video>
</div>
```

#### Child 2: Mobile video strip (hidden at `md` and above)
```jsx
<div className="md:hidden relative overflow-hidden" style={{ height: '75vw', backgroundColor: '#111' }}>
  <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
    <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_151818_65bb22c5-33ae-4e23-85ea-0a3dd89957c2.mp4" type="video/mp4" />
  </video>
</div>
```

#### Child 3: ProductPanel (right half on desktop, visually on top on mobile)
```jsx
<ProductPanel
  bg={BG_LIME}
  product={WILD_PRODUCT}
  notes={WILD_PRODUCT.notes}
  visible={visible}
  noteStyle="bold"
/>
```

Called with `noteStyle="bold"`, which changes:
- Top labels: `"Daisy wild"` / `"Playful"` (instead of `"Daisy love"` / `"Sweet"`)
- Note labels: `fontWeight: 700` (instead of `400`)

---

## Responsive Behavior

| Viewport | Layout | Visual order (top to bottom / left to right) |
|---|---|---|
| < 768px | `flex flex-col-reverse` | Product panel (lime, full width) then video strip (`height: 75vw`, full width) |
| >= 768px | `grid 1fr 1fr`, `min-h-screen` | Video (left half) then Product panel (right half, lime) |

The `flex-col-reverse` trick: DOM order is [video-desktop, video-mobile, panel]. On mobile, `flex-col-reverse` reverses visual order to [panel, video-mobile, video-desktop(hidden)]. On desktop, `md:grid` overrides flex, and the grid places them left-to-right in DOM order: video left, panel right.

## Animation Stagger Timeline

All triggered when 15% of the section scrolls into view. Easing: `cubic-bezier(0.22, 1, 0.36, 1)`.

| Element | Delay | Duration | Direction | Distance |
|---|---|---|---|---|
| Top labels ("Daisy wild" / "Playful") | 0ms | 1400ms | translateY | 12px |
| Product image block | 300ms | 1800ms | translateY | 40px |
| Caption (name + size) | 600ms | 1400ms | translateY | 10px |
| Notes column | 900ms | 1400ms | translateY | 16px |
| SHOP NOW button | 1150ms | 1400ms | translateY | 16px |

Each element starts at `opacity: 0` + translated down, then transitions to `opacity: 1` + `translate(0,0)`.

## Colors Used

- `#BDE84F` — product panel background (lime green)
- `#000000` — all text, button border
- `#D9D9D9` — image placeholder background
- `#111` — video panel background (while loading)
- `#ffffff` — button hover fill

## Fonts
No custom or Google Fonts. Tailwind default sans-serif system stack for all text.

## SVGs / Icons
None in this section.

## Key Differences from Section 2 (ScentFinder)

| Aspect | Section 2 (ScentFinder) | Section 3 (WildScent) |
|---|---|---|
| Background color | `#4BB3ED` (sky blue) | `#BDE84F` (lime green) |
| Panel position (desktop) | LEFT half | RIGHT half |
| Video position (desktop) | RIGHT half | LEFT half |
| Flex direction (mobile) | `flex-col` (panel on top, video below) | `flex-col-reverse` (panel on top via reversal, video below) |
| Top labels | "Daisy love" / "Sweet" | "Daisy wild" / "Playful" |
| Note label weight | `fontWeight: 400` (normal) | `fontWeight: 700` (bold) |
| `noteStyle` prop | `'normal'` (default) | `'bold'` |
| Product name | Eau So Sweet | Eau So Extra |
| Product size | 100 ml / 3.3 oz | 100 ml / 3.3 oz |
| Video URL | `...151802_1bbf9a81...` | `...151818_65bb22c5...` |
| Notes content | Fruity top / WHITE RASPBERRIES, Floral heart / DAISY TREE PETALS, Feminine base / SUGAR MUSKS | Top / BANANA BLOSSOM ACCORD, Heart / CHOCOLATE DAISY ACCORD, Base / VETIVER OIL |
```
