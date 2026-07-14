Build a single React + TypeScript + Tailwind CSS v3 component called `PrecisionSection`. No external icon libraries — all icons are inline SVG or `<img>` tags. No `useState`, no animations, no hover states. Two separate layouts: a desktop staircase (absolutely-positioned pillars) and a mobile alternating-flow layout. The `sm:` breakpoint controls visibility between them.

---

## Global font

Register **"Mazzard H"** in `index.css` and apply it globally:

```css
@font-face {
  font-family: 'Mazzard H';
  font-weight: 400;
  font-style: normal;
  src: url('https://db.onlinewebfonts.com/t/eb5b5ee332420add9a40ee988cb6ac37.woff2') format('woff2'),
       url('https://db.onlinewebfonts.com/t/eb5b5ee332420add9a40ee988cb6ac37.woff') format('woff'),
       url('https://db.onlinewebfonts.com/t/eb5b5ee332420add9a40ee988cb6ac37.ttf') format('truetype');
}
@font-face {
  font-family: 'Mazzard H';
  font-weight: 500;
  font-style: normal;
  src: url('https://db.onlinewebfonts.com/t/875fffdfa62169a0f131e90f37f1faf4.woff2') format('woff2'),
       url('https://db.onlinewebfonts.com/t/875fffdfa62169a0f131e90f37f1faf4.woff') format('woff'),
       url('https://db.onlinewebfonts.com/t/875fffdfa62169a0f131e90f37f1faf4.ttf') format('truetype');
}

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html, body, * { font-family: 'Mazzard H', sans-serif; }
}
```

---

## File: `src/components/PrecisionSection.tsx`

### Constants (top of file, before the component)

```ts
const LOGO_ICON =
  'https://cdn.prod.website-files.com/6720dd1ab6df0da205830ab1/6870f623cf3df417ce45df05_icon%20logo%20eternacloud.png';

const LINE_GRADIENT =
  'linear-gradient(rgb(28, 78, 255), rgb(254, 136, 27) 0%, rgb(172, 36, 255) 25%, rgb(247, 159, 255) 50%, rgb(255, 214, 0) 66%, rgb(254, 136, 27) 84%, rgba(254, 136, 27, 0) 102%)';

const PILLARS = [
  { label: 'Scopes',     items: ['conditions', 'capacity', 'specs', 'timelines'],     leftVw: 2.8,  bottomVw: 7     },
  { label: 'Integrates', items: ['civil', 'mechanical', 'electrical', 'controls'],     leftVw: 22.4, bottomVw: 9.08  },
  { label: 'Certifies',  items: ['redundancy', 'testing', 'compliance', 'sign-offs'], leftVw: 41.2, bottomVw: 11.16 },
  { label: 'Activates',  items: ['cutover', 'runbooks', 'handoff', 'SLAs'],           leftVw: 61.1, bottomVw: 13.24 },
];
```

---

### Section element

Inline styles only (no Tailwind on the `<section>` itself):

```
background-image: url("https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260418_125638_553b96dc-a1fd-4b2b-81a9-ed7daa80006e.png&w=1280&q=85")
background-size: cover
background-position: center
background-repeat: no-repeat
width: 100%
display: flex
flex-direction: column
align-items: center
text-align: center
padding: clamp(48px, 8vw, 120px) clamp(16px, 4vw, 60px) clamp(48px, 5.56vw, 80px)
gap: clamp(32px, 4vw, 56px)
```

---

### Block 1 — Header

Wrapper `<div>` — inline: `display: flex`, `flex-direction: column`, `align-items: center`, `gap: 36px`

#### Badge pill `<div>`

Inline:
```
background-color: rgb(249, 249, 249)
display: flex
align-items: center
gap: 8px
font-size: clamp(14px, 1.1vw, 18px)
font-weight: 500
border-radius: 36px
padding: clamp(8px, 0.9vw, 14px) clamp(12px, 1.25vw, 20px)
color: rgb(26, 11, 84)
white-space: nowrap
```

Contains this inline SVG (`width: 19`, `height: 18`, `flex-shrink: 0`, `viewBox="0 0 17 16"`, `fill="none"`):

```xml
<g clipPath="url(#prec-clip)">
  <circle cx="8.5" cy="8" r="7" stroke="#c86fff" fill="none" />
  <path d="M9.5 11.5V10.5H7.5V11.5H9.5ZM7.5 14.5C7.5 15.0523 7.94772 15.5 8.5 15.5C9.05228 15.5 9.5 15.0523 9.5 14.5H7.5ZM8.5 11.5H7.5V14.5H8.5H9.5V11.5H8.5Z" fill="rgb(200, 111, 255)" />
  <path d="M12 7H11V9H12V7ZM15 9C15.5523 9 16 8.55228 16 8C16 7.44772 15.5523 7 15 7V9ZM12 8V9H15V8V7L12 7V8Z" fill="rgb(200, 111, 255)" />
  <path d="M5 9H6V7H5V9ZM2 7C1.44772 7 1 7.44772 1 8C1 8.55228 1.44772 9 2 9V7ZM5 8V7H2V8V9H5V8Z" fill="rgb(200, 111, 255)" />
  <path d="M7.5 4.5V5.5H9.5V4.5H7.5ZM9.5 1.5C9.5 0.947715 9.05228 0.5 8.5 0.5C7.94772 0.5 7.5 0.947715 7.5 1.5H9.5ZM8.5 4.5H9.5V1.5H8.5H7.5V4.5H8.5Z" fill="rgb(200, 111, 255)" />
</g>
<defs>
  <clipPath id="prec-clip">
    <rect width="16" height="16" fill="white" transform="translate(0.5)" />
  </clipPath>
</defs>
```

After the SVG: plain text **"Structured Delivery"**

#### Heading + subtext `<div>`

Inline: `display: flex`, `flex-direction: column`, `align-items: center`, `max-width: clamp(700px, 60vw, 900px)`, `gap: 22px`

`<h2>` — inline: `font-size: clamp(28px, 4vw, 56px)`, `font-weight: 500`, `color: rgb(26, 11, 84)`, `line-height: 1.15`, `margin: 0`

Inside the `<h2>`, two `<span>` elements:

**Span 1** — Tailwind class `sm:whitespace-nowrap`, inline `display: block`:
> **One integrated, end-to-end system.**

**Span 2** — inline only:
```
background-image: linear-gradient(90deg, rgb(43, 167, 255), rgb(202, 69, 255) 50%, rgb(254, 136, 27))
-webkit-background-clip: text
background-clip: text
-webkit-text-fill-color: transparent
color: transparent
padding-bottom: 0.3vw
display: block
```
> **Compounding operational value.**

`<p>` below heading — inline: `font-size: clamp(15px, 1.2vw, 20px)`, `color: rgb(169, 151, 206)`, `margin: 0`
> **"NexaCore teams capture, align, validate and deliver exactly what keeps your programs on track."**

---

### Block 2 — Pillars container `<div>`

Inline: `width: 100%`, `max-width: 82.292vw`, `margin: 0 auto`

Contains two children:

---

#### Desktop pillars — `hidden sm:block` (Tailwind)

Inline:
```
position: relative
width: 82.292vw
height: 31.94vw
color: rgb(26, 11, 84)
```

Map over `PILLARS`. Each pillar wrapper `<div>`:
```
position: absolute
bottom: `${pillar.bottomVw}vw`
left: `${pillar.leftVw}vw`
display: flex
flex-direction: column
align-items: center
justify-content: flex-start
```

**Chip `<div>`:**
```
display: flex
align-items: center
justify-content: center
background-image: linear-gradient(135deg, rgb(255, 255, 255), rgba(255, 255, 255, 0.6))
font-size: 18px
font-weight: 500
border-radius: 20px
padding-top: 0.972vw
padding-bottom: 0.972vw
padding-left: 1.736vw
padding-right: 1.736vw
white-space: nowrap
gap: 8px
```

Chip contents:
1. `<img src={LOGO_ICON} alt="" style={{ width: '1.111vw', height: 'auto', display: 'inline-block' }} />`
2. `{pillar.label}`

**Line + items wrapper `<div>`** (directly below chip):
```
position: relative
display: flex
flex-direction: column
align-items: center
justify-content: flex-end
```

**Items container** (absolutely positioned, overlays the line):
```
position: absolute
top: 0.56vw
left: 1.94vw
display: flex
flex-direction: column
gap: 4px
font-size: 16px
align-items: flex-start
justify-content: space-between
```

Each item `<div>`:
```
padding-top: 0.69vw
padding-bottom: 0.69vw
padding-left: 1.04vw
padding-right: 1.04vw
display: flex
align-items: flex-start
```
Text: the item string.

**Vertical gradient line `<div>`** (sibling of items container, rendered after it):
```
background-image: LINE_GRADIENT  (see constant above)
width: 1px
height: 14.24vw
```

---

#### Mobile pillars — Tailwind: `flex flex-col sm:hidden w-full`

Inline: `color: rgb(26, 11, 84)`, `gap: 0`

Map over `PILLARS` with index. `isRight = index % 2 !== 0` (index 1 and 3 are right-aligned).

**Pillar wrapper `<div>`:**
```
display: flex
flex-direction: column
align-items: isRight ? 'flex-end' : 'flex-start'
width: 100%
padding-bottom: 8px
```

**Chip `<div>`:**
```
display: inline-flex
align-items: center
background-image: linear-gradient(135deg, rgb(255, 255, 255), rgba(255, 255, 255, 0.6))
font-size: 15px
font-weight: 500
border-radius: 20px
padding: 10px 18px
white-space: nowrap
gap: 7px
```

Chip contents:
1. `<img src={LOGO_ICON} alt="" style={{ width: 16, height: 'auto' }} />`
2. `{pillar.label}`

**Line + items row `<div>`:**
```
display: flex
flex-direction: isRight ? 'row-reverse' : 'row'
align-items: stretch
width: 100%
```

**Vertical line `<div>`:**
```
width: 1px
flex-shrink: 0
background-image: LINE_GRADIENT
margin-left: isRight ? 0 : 22px
margin-right: isRight ? 22px : 0
min-height: 120px
```

**Items `<div>`:**
```
display: flex
flex-direction: column
gap: 0
padding-left: isRight ? 0 : 20px
padding-right: isRight ? 20px : 0
padding-top: 8px
padding-bottom: 8px
align-items: isRight ? 'flex-end' : 'flex-start'
```

Each item `<div>`:
```
font-size: 14px
color: rgb(100, 80, 160)
padding: 8px 0
```
Text: the item string.

---

## Pillar data reference

| Label | Items | Desktop left | Desktop bottom |
|---|---|---|---|
| Scopes | conditions, capacity, specs, timelines | 2.8vw | 7vw |
| Integrates | civil, mechanical, electrical, controls | 22.4vw | 9.08vw |
| Certifies | redundancy, testing, compliance, sign-offs | 41.2vw | 11.16vw |
| Activates | cutover, runbooks, handoff, SLAs | 61.1vw | 13.24vw |

---

**No animations. No hover states. No scroll effects. No JavaScript logic. Static render only. Desktop: 4 pillars arranged in a rising staircase via `position: absolute` with `bottom` and `left` in `vw` units. Mobile: single column, even-indexed pillars align left, odd-indexed align right, each with a vertical gradient line beside its items list.**