626f6c742d63632d6167656e74# Complete Prompt: Wild Daisy Fragrances Landing Page

Build a single-page React + TypeScript + Vite landing page using Tailwind CSS. Only `lucide-react` is allowed for icons (none used). Match every detail exactly. Three sections in order: Hero, ScentFinder, WildScent. Page background `#fff`.

## Global Constants

```ts
const TEXT_COLOR = '#000000';
const HERO_TEXT = '#332023';
const BG_BLUE = '#4BB3ED';
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

## Asset URLs (exact, verbatim)

- Hero background video:  
  `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_142713_322c5ac5-8a5d-413b-be68-4a0e82014264.mp4`
- ScentFinder section video (right side / mobile below):  
  `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_151802_1bbf9a81-a7cb-4be1-b858-f1cd92b62b96.mp4`
- WildScent section video (left side / mobile below):  
  `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_151818_65bb22c5-33ae-4e23-85ea-0a3dd89957c2.mp4`
- Hero card product image (Eau So Fresh):  
  `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260511_143221_81001e13-b71c-4a90-b2d7-abf4e2ec08ff.png&w=1280&q=85`
- ScentFinder product image (Eau So Sweet):  
  `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260511_151640_5b4a7bf8-4eb2-4a49-aa63-17a9bb642b88.png&w=1280&q=85`
- WildScent product image (Eau So Extra):  
  `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260511_151621_4fba6892-ed21-4c2e-8cb3-0bd2ec2abefa.png&w=1280&q=85`

## Product data

```ts
const PRODUCT = { name: 'Eau So Fresh', size: '100 ml / 3.4 oz', image: <hero card image URL above> };

const SCENT_PRODUCT = {
  name: 'Eau So Sweet',
  size: '100 ml / 3.3 oz',
  image: <ScentFinder image URL above>,
  notes: [
    { label: 'Fruity top', ingredient: 'WHITE RASPBERRIES' },
    { label: 'Floral heart', ingredient: 'DAISY TREE PETALS' },
    { label: 'Feminine base', ingredient: 'SUGAR MUSKS' },
  ],
};

const WILD_PRODUCT = {
  name: 'Eau So Extra',
  size: '100 ml / 3.3 oz',
  image: <WildScent image URL above>,
  notes: [
    { label: 'Top', ingredient: 'BANANA BLOSSOM ACCORD' },
    { label: 'Heart', ingredient: 'CHOCOLATE DAISY ACCORD' },
    { label: 'Base', ingredient: 'VETIVER OIL' },
  ],
};
```

## Top-level App

`<div class="min-h-screen" style="backgroundColor:#fff">` containing the three sections in order.

In `App`, create `heroRef` and `v` state. `useEffect` runs `setTimeout(() => setV(true), 200)`.

---

## SECTION 1 — Hero

`<section ref={heroRef} class="relative w-full min-h-screen flex flex-col justify-end overflow-hidden">`

### 1a. Background video
`<video autoPlay muted loop playsInline class="absolute inset-0 w-full h-full object-cover" style="zIndex:0" ref={el => { if (el) el.playbackRate = 1 }}>` with `<source>` `type="video/mp4"` src = hero video URL.

### 1b. Header nav
`<header class="absolute top-0 left-0 w-full flex items-center justify-between px-5 sm:px-8 py-5 sm:py-6" style="zIndex:40, ...anim(v,100,{y:-10,duration:1400}).style">`
- Left: `<div class="font-black text-xs sm:text-sm tracking-widest leading-tight uppercase" style="color:HERO_TEXT">` with two `<div>`s: `Wild Daisy`, `Fragrances`.
- Right: `<nav class="flex gap-5 sm:gap-8">` with two anchors `Shop Now`, `Cart`. Each `<a class="text-xs font-bold tracking-widest uppercase relative group" style="color:HERO_TEXT">` containing inner `<span>` with text and underline `<span class="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" style="backgroundColor:HERO_TEXT" />`.

### 1c. Scroll indicator (desktop only)
`<div class="hidden sm:block absolute right-8 md:right-10" style="top:50%; transform:translateY(-50%); zIndex:20; ...anim(v,1000,{x:16,duration:1600}).style">` containing `<span class="text-xl tracking-widest" style="fontFamily:'Georgia, serif'; fontStyle:italic; color:HERO_TEXT">Scroll</span>`.

### 1d. Floating product card (desktop only, bottom-right)
`<div class="hidden sm:flex absolute bottom-10 right-10 rounded-2xl items-center gap-2 px-5 py-4" style="zIndex:30; minWidth:260px; backgroundColor:#ffffff; boxShadow:'0 4px 24px rgba(51,32,35,0.08), 0 1px 4px rgba(51,32,35,0.06)'; ...anim(v,1300,{y:20,duration:1400}).style">`
- Image wrapper `<div class="flex-shrink-0 overflow-hidden" style="width:60px; height:76px; borderRadius:8px">` with `<img src=PRODUCT.image alt=PRODUCT.name style="width:130%; height:130%; objectFit:contain; display:block; marginLeft:-15%; marginTop:-15%">`.
- Info column `<div class="flex flex-col">`:
  - `<span class="text-sm font-semibold tracking-wide leading-tight" style="color:HERO_TEXT">Eau So Fresh</span>`
  - `<span class="tracking-wide" style="fontSize:11px; fontWeight:500; marginTop:3px; color:HERO_TEXT">100 ml / 3.4 oz</span>`
  - Button `<button class="text-xs font-bold tracking-widest uppercase self-start leading-tight relative overflow-hidden group" style="marginTop:14px; color:HERO_TEXT">`:
    - `<span class="relative z-10">Add to Cart</span>`
    - `<span class="absolute bottom-0 left-0 h-px w-full origin-left transition-transform duration-300 ease-out scale-x-100 group-hover:scale-x-0" style="backgroundColor:HERO_TEXT" />`
    - `<span class="absolute bottom-0 left-0 h-px w-full origin-right transition-transform duration-300 ease-out delay-150 scale-x-0 group-hover:scale-x-100" style="backgroundColor:HERO_TEXT; opacity:0.4" />`

### 1e. Slide index "01" (desktop only)
`<div class="hidden sm:block absolute left-6 md:left-8" style="top:50%; transform: v ? 'translateY(-50%) translateX(0)' : 'translateY(-50%) translateX(-24px)'; fontFamily:'\"Playfair Display\", \"Didot\", \"Bodoni MT\", \"Times New Roman\", serif'; fontStyle:italic; fontWeight:400; fontSize:'clamp(2.5rem,6.5vw,6rem)'; lineHeight:1; letterSpacing:-0.02em; zIndex:10; color:HERO_TEXT; opacity: v?1:0; transition: 'opacity 1600ms <EASE> 500ms, transform 1600ms <EASE> 500ms'">01</div>`

### 1f. Hero title + mobile card wrapper
`<div class="relative pb-0 sm:pb-12 pl-5 sm:pl-8 pr-0 sm:pr-8" style="zIndex:10">`

`<h1 class="font-medium uppercase leading-tight sm:leading-none" style="fontSize:'clamp(2.2rem,8vw,4rem)'; letterSpacing:-0.01em">` containing six `<span>`:

Mobile lines (each `block sm:hidden`):
1. `Sweet Daisy` — `color:#ffffff; textShadow:'0 2px 16px rgba(0,0,0,0.4)'`, anim(v,600,{y:24,duration:1600}).
2. `Personal Scent` — `color:rgba(255,255,255,0.8); textShadow:'0 2px 12px rgba(0,0,0,0.35)'`, anim(v,800,...).
3. `Finder` — same color/shadow as #2, anim(v,1000,...).

Desktop lines (each `hidden sm:block`):
4. `Sweet Daisy` — `color:HERO_TEXT`, anim(v,600,...).
5. `Personal Scent` — `color:#B0A2A1`, anim(v,800,...).
6. `Finder` — `color:#B0A2A1`, anim(v,1000,...).

### 1g. Mobile inline product card (below title)
`<div class="sm:hidden flex items-center gap-3 mt-4 mr-5 mb-8 px-4 py-4 rounded-2xl" style="backgroundColor:#ffffff; boxShadow:'0 4px 24px rgba(51,32,35,0.08), 0 1px 4px rgba(51,32,35,0.06)'; ...anim(v,1300,{y:20,duration:1400}).style">`
- Image wrapper `<div class="flex-shrink-0 overflow-hidden" style="width:56px; height:70px; borderRadius:6px">` with same image styling pattern as the desktop card (130%, -15% offset).
- Info column `<div class="flex flex-col flex-1">` with name, size (same styles as desktop card), and button identical to the desktop card except `marginTop:12px` and only the FIRST underline span (no second/right-origin underline).

NOTE: card has `mr-5` only (no left margin) so it aligns flush with the title's `pl-5` left edge.

---

## SECTION 2 — ScentFinder

A reusable `ProductPanel({ bg, product, notes, visible, noteStyle = 'normal' })` component:

```
<div class="relative flex flex-col px-6 md:px-8 pt-6 md:pt-8 pb-8 md:pb-10" style="backgroundColor:bg; minHeight:100%">
```

Inside, top labels row:
`<div class="flex items-start justify-between mb-auto" {...anim(visible,0,{y:12,duration:1400})}>`
- Left `<span class="text-xs font-normal" style="color:TEXT_COLOR">{noteStyle==='bold' ? 'Daisy wild' : 'Daisy love'}</span>`
- Right `<span class="text-xs font-normal" style="color:TEXT_COLOR">{noteStyle==='bold' ? 'Playful' : 'Sweet'}</span>`

Product image block `<div class="flex flex-col items-center py-8" style="flex:1; justifyContent:center; ...anim(visible,300,{y:40,duration:1800}).style">`:
- Image wrapper: `<div class="overflow-hidden" style="width:'clamp(140px,40%,220px)'; aspectRatio:'220/340'; backgroundColor:#D9D9D9; borderRadius:2px; flexShrink:0">` with `<img src=product.image alt=product.name style="width:100%; height:100%; objectFit:cover; display:block">`.
- Caption `<div class="text-center mt-4" {...anim(visible,600,{y:10,duration:1400})}>`: name `<p class="text-sm font-normal" style="color:TEXT_COLOR">` and size `<p class="text-xs font-normal mt-1" style="color:TEXT_COLOR">`.

Bottom row `<div class="flex items-end justify-between gap-4 flex-wrap">`:
- Notes column `<div class="flex flex-col gap-0.5" {...anim(visible,900,{y:16,duration:1400})}>`. For each note:
  - Label `<p class="text-xs leading-snug" style="color:TEXT_COLOR; fontWeight: noteStyle==='bold' ? 700 : 400">`
  - Ingredient `<p class="text-xs font-bold tracking-widest uppercase leading-snug" style="color:TEXT_COLOR">`
- Button `<button class="text-xs font-bold tracking-widest uppercase border px-6 py-3 relative group shrink-0" style="color:TEXT_COLOR; borderColor:TEXT_COLOR; backgroundColor:transparent; ...anim(visible,1150,{y:16,duration:1400}).style">`:
  - `<span class="relative z-10 group-hover:text-black transition-colors duration-500">SHOP NOW</span>`
  - `<span class="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" style="backgroundColor:#ffffff" />`

### ScentFinderSection

`useRef` + `useState(visible)`, with `IntersectionObserver` threshold `0.15` setting `visible=true` once.

```
<section ref={ref} class="relative w-full">
  <div class="flex flex-col md:grid md:min-h-screen" style="gridTemplateColumns:'1fr 1fr'">
    <ProductPanel bg=BG_BLUE product=SCENT_PRODUCT notes=SCENT_PRODUCT.notes visible=visible />
    <div class="hidden md:block relative overflow-hidden" style="backgroundColor:#111; minHeight:100%">
      <video autoPlay muted loop playsInline class="absolute inset-0 w-full h-full object-cover">
        <source src=<scent video URL> type="video/mp4" />
      </video>
    </div>
    <div class="md:hidden relative overflow-hidden" style="height:75vw; backgroundColor:#111">
      <video autoPlay muted loop playsInline class="absolute inset-0 w-full h-full object-cover">
        <source src=<scent video URL> type="video/mp4" />
      </video>
    </div>
  </div>
</section>
```

---

## SECTION 3 — WildScent

Same observer pattern as Section 2.

```
<section ref={ref} class="relative w-full">
  <div class="flex flex-col-reverse md:grid md:min-h-screen" style="gridTemplateColumns:'1fr 1fr'">
    <div class="hidden md:block relative overflow-hidden" style="backgroundColor:#111; minHeight:100%">
      <video autoPlay muted loop playsInline class="absolute inset-0 w-full h-full object-cover">
        <source src=<wild video URL> type="video/mp4" />
      </video>
    </div>
    <div class="md:hidden relative overflow-hidden" style="height:75vw; backgroundColor:#111">
      <video autoPlay muted loop playsInline class="absolute inset-0 w-full h-full object-cover">
        <source src=<wild video URL> type="video/mp4" />
      </video>
    </div>
    <ProductPanel bg=BG_LIME product=WILD_PRODUCT notes=WILD_PRODUCT.notes visible=visible noteStyle="bold" />
  </div>
</section>
```

Note: `flex-col-reverse` on mobile makes the product panel render above the video (DOM order: video, panel; visual order on mobile: panel, video). On desktop the grid lays them left-to-right (video left, panel right).

---

## Fonts

- No Google Fonts. Tailwind default sans-serif (system stack) for body/UI.
- Inline `Georgia, serif` italic only for the "Scroll" indicator.
- Inline `"Playfair Display", "Didot", "Bodoni MT", "Times New Roman", serif` italic only for the "01" slide index.

## Tailwind / Vite

Stock Tailwind 3 config, default breakpoints (`sm:640px`, `md:768px`). Vite + React + TypeScript starter. No extra packages beyond `react`, `react-dom`, `@supabase/supabase-js`, `lucide-react`.

## Animations Summary

- Hero: triggered 200ms after mount via `setTimeout`. Stagger delays 100, 500, 600, 800, 1000, 1300 ms; durations 1400–1600 ms; easing `cubic-bezier(0.22, 1, 0.36, 1)`. Most spans translateY 20–24px, header translates Y -10, scroll indicator translates X 16, "01" translates X -24 → 0.
- ScentFinder & WildScent: each has `IntersectionObserver` (threshold 0.15) setting `visible=true` once. Stagger inside `ProductPanel`: 0 (top labels, y12), 300 (image block, y40 / 1800ms), 600 (caption, y10 / 1400ms), 900 (notes, y16), 1150 (button, y16).

## SVGs

None. There are no inline SVG paths anywhere in this page.

## Behavioral notes

- Videos autoplay muted in loop, `playsInline` for iOS.
- Mobile breakpoint (<640px): hides desktop floating card, scroll indicator, and "01" index; shows white-with-shadow title and inline product card; videos in sections 2 & 3 become fixed-aspect strips at `height:75vw`.
- Mobile inline card uses `mr-5` (no left margin) so it lines up flush with the title's `pl-5`.
- Section 3 uses `flex-col-reverse` so on mobile the product panel sits above its video.
