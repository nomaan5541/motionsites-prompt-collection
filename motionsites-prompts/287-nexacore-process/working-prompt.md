Build two React + TypeScript + Tailwind CSS v3 components: `ServiceCard` and `TrustedSection`. No external icon libraries — all icons are inline SVG. Fully mobile-responsive. Uses `useState` for hover animations on cards.

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

## File 1: `src/components/ServiceCard.tsx`

### Constants (top of file)

```ts
const CARD_GRADIENT = 'linear-gradient(90deg, rgb(28,78,255), rgb(172,36,255) 50%, rgb(254,136,27))';
const BULLET_URL = 'https://cdn.prod.website-files.com/6720dd1ab6df0da205830ab1/683ef70a24657b10be91ef49_bullet-list.svg';
const CARD_IMG = 'https://cdn.prod.website-files.com/6720dd1ab6df0da205830ab1/682c7cb62b8800a7594c5abd_hover_card_img.png';
```

### Props interface

```ts
interface ServiceCardProps {
  label: string;
  icon: React.ReactNode;
  title: React.ReactNode;
  bullets: string[];
}
```

### Component

Uses `useState<boolean>(false)` for `hovered`. `onMouseEnter` sets `true`, `onMouseLeave` sets `false`.

**Card root `<div>`** — Tailwind: `relative flex flex-col overflow-hidden rounded-[36px] cursor-pointer`

Inline styles:
```
background-color: rgba(10, 5, 20, 0.88)
backdrop-filter: blur(36px)
height: clamp(320px, 32vw, 500px)
```

---

#### Layer 1 — Top image (always present, animates on hover)

Tailwind: `absolute inset-x-0 top-0 pointer-events-none select-none transition-all duration-500`

Inline styles:
```
height: 55%
z-index: 1
transform: hovered ? 'translateY(0)' : 'translateY(-30%)'
opacity: hovered ? 1 : 0.7
```

Contains `<img src={CARD_IMG} alt="" aria-hidden>` with Tailwind `w-full h-full` and inline:
```
object-fit: cover
object-position: top
```

---

#### Layer 2 — Bottom dark gradient overlay (slides up on hover)

Tailwind: `absolute inset-x-0 bottom-0 pointer-events-none select-none transition-all duration-500`

Inline styles:
```
height: 55%
z-index: 1
background: linear-gradient(to top, rgba(10,5,20,0.95) 60%, transparent)
transform: hovered ? 'translateY(0)' : 'translateY(100%)'
opacity: hovered ? 1 : 0
```

---

#### Layer 3 — Content (z-index 2)

Tailwind: `relative flex flex-col h-full`

Inline: `z-index: 2`, `padding: clamp(16px, 1.94vw, 32px) clamp(18px, 2.36vw, 36px)`

**Badge** — Tailwind: `flex items-center gap-2 w-fit rounded-full text-white text-sm font-medium flex-shrink-0`

Inline: `background-color: rgb(41, 31, 57)`, `padding: clamp(6px, 0.7vw, 12px) clamp(10px, 1.25vw, 20px)`

Icon wrapper inside badge — Tailwind: `flex items-center justify-center`

Inline: `width: 1.11vw`, `min-width: 14px`, `height: 17px`

Renders `{icon}` prop inside.

After icon wrapper: `{label}` text.

---

**Spacer** — Tailwind: `flex-grow` (pushes content to bottom)

---

**Bottom content block** — Tailwind: `flex flex-col transition-all duration-500`, inline `gap: 16px`

Inside it, an **animated inner block** — Tailwind: `flex flex-col transition-transform duration-500`

Inline:
```
gap: 16px
transform: hovered ? 'translateY(-8px)' : 'translateY(0)'
```

**Title `<div>`** inside animated block — Tailwind: `text-white font-medium leading-snug`

Inline: `font-size: clamp(16px, 1.7vw, 24px)`

Renders `{title}` prop (can contain `<br />` tags).

**Bullets `<ul>`** inside animated block — Tailwind: `flex flex-col`

Inline: `gap: 10px`, `list-style: none`, `padding: 0`, `margin: 0`

Each `<li>` — inline styles only:
```
color: rgb(189, 174, 231)
font-size: clamp(12px, 1vw, 15px)
padding-left: clamp(22px, 1.8vw, 28px)
background-image: url("https://cdn.prod.website-files.com/6720dd1ab6df0da205830ab1/683ef70a24657b10be91ef49_bullet-list.svg")
background-repeat: no-repeat
background-size: 18px
background-position: 0% 50%
```

---

**Button reveal wrapper** — Tailwind: `transition-all duration-500 overflow-hidden`

Inline:
```
max-height: hovered ? 80 : 0
opacity: hovered ? 1 : 0
transform: hovered ? 'translateY(0)' : 'translateY(20px)'
pointer-events: hovered ? 'auto' : 'none'
```

Inside it, `<a href="#">` — Tailwind: `flex items-center justify-center w-full rounded-xl text-white font-medium`

Inline:
```
background: linear-gradient(90deg, rgb(28,78,255), rgb(172,36,255) 50%, rgb(254,136,27))
padding: clamp(10px, 0.9vw, 14px) 0
font-size: clamp(13px, 1.1vw, 16px)
margin-bottom: clamp(6px, 0.5vw, 10px)
```

Text: **"Learn more"**

---

## File 2: `src/components/TrustedSection.tsx`

### Icon components (defined at top, outside the section component)

All icons: `viewBox="0 0 16 16"`, `fill="none"`, `style={{ width: '100%', height: '100%' }}`, `xmlns="http://www.w3.org/2000/svg"`. All use `fill="rgb(200, 111, 255)"`. Define `const ICON_COLOR = 'rgb(200, 111, 255)'`.

**`DesignIcon`** — hollow ring only:
```xml
<path d="M1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8ZM13.6 8C13.6 11.0928 11.0928 13.6 8 13.6C4.90721 13.6 2.4 11.0928 2.4 8C2.4 4.90721 4.90721 2.4 8 2.4C11.0928 2.4 13.6 4.90721 13.6 8Z" fill={ICON_COLOR}/>
```

**`OnboardingIcon`** — ring + small dot (r=2):
```xml
<path d="M0.970459 8C0.970459 11.866 4.10447 15 7.97046 15C11.8365 15 14.9705 11.866 14.9705 8C14.9705 4.13401 11.8365 1 7.97046 1C4.10447 1 0.970459 4.13401 0.970459 8ZM13.5705 8C13.5705 11.0928 11.0633 13.6 7.97046 13.6C4.87766 13.6 2.37046 11.0928 2.37046 8C2.37046 4.90721 4.87766 2.4 7.97046 2.4C11.0633 2.4 13.5705 4.90721 13.5705 8Z" fill={ICON_COLOR}/>
<circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 10 6)" fill={ICON_COLOR}/>
```

**`DeliveryIcon`** — ring + medium dot (r=3):
```xml
<path d="M0.970459 8C0.970459 11.866 4.10447 15 7.97046 15C11.8365 15 14.9705 11.866 14.9705 8C14.9705 4.13401 11.8365 1 7.97046 1C4.10447 1 0.970459 4.13401 0.970459 8ZM13.5705 8C13.5705 11.0928 11.0633 13.6 7.97046 13.6C4.87766 13.6 2.37046 11.0928 2.37046 8C2.37046 4.90721 4.87766 2.4 7.97046 2.4C11.0633 2.4 13.5705 4.90721 13.5705 8Z" fill={ICON_COLOR}/>
<circle cx="3" cy="3" r="3" transform="matrix(-1 0 0 1 11 5)" fill={ICON_COLOR}/>
```

**`DeploymentIcon`** — ring + large dot (r=4):
```xml
<path d="M0.970459 8C0.970459 11.866 4.10447 15 7.97046 15C11.8365 15 14.9705 11.866 14.9705 8C14.9705 4.13401 11.8365 1 7.97046 1C4.10447 1 0.970459 4.13401 0.970459 8ZM13.5705 8C13.5705 11.0928 11.0633 13.6 7.97046 13.6C4.87766 13.6 2.37046 11.0928 2.37046 8C2.37046 4.90721 4.87766 2.4 7.97046 2.4C11.0633 2.4 13.5705 4.90721 13.5705 8Z" fill={ICON_COLOR}/>
<circle cx="4" cy="4" r="4" transform="matrix(-1 0 0 1 12 4)" fill={ICON_COLOR}/>
```

### Cards data array

```ts
const CARDS = [
  {
    label: 'Planning',
    icon: <DesignIcon />,
    title: <>Turn new programs<br />into structured plans without the noise.</>,
    bullets: ['Embedded program leads', 'Decision-ready roadmaps'],
  },
  {
    label: 'Procurement',
    icon: <OnboardingIcon />,
    title: <>Source and qualify<br />vendors with far<br />less friction.</>,
    bullets: ['Cross-org scope alignment', 'End-to-end accountability'],
  },
  {
    label: 'Logistics',
    icon: <DeliveryIcon />,
    title: <>Move the right<br />materials on time<br />without surprises.</>,
    bullets: ['Spec and fit validations', 'Change order ownership'],
  },
  {
    label: 'Commissioning',
    icon: <DeploymentIcon />,
    title: <>Activate systems with complete context, not guesswork.</>,
    bullets: ['Uninterrupted workflows', 'Verified clean handoffs'],
  },
];
```

### Section component

**`<section>`** — Tailwind: `relative flex flex-col items-center w-full`

Inline:
```
background-image: url("https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260418_120332_3b24257a-afe6-48ca-875f-78147370f403.png&w=1280&q=85")
background-size: cover
background-position: center
background-repeat: no-repeat
padding: clamp(100px, 12vw, 180px) clamp(16px, 4vw, 40px) clamp(100px, 12vw, 160px)
gap: 110px
```

---

**Header block** — Tailwind: `flex flex-col items-center text-center w-full px-2`

Inline: `max-width: 1200px`, `gap: 20px`

`<h2>` — Tailwind: `text-white font-medium`

Inline: `font-size: clamp(32px, 4vw, 56px)`, `line-height: 1.2`, `margin: 0`

Structure:
```
Relied on by enterprise teams<br />
<span gradient>from groundbreak to go-live.</span>
```

Gradient `<span>` inline styles:
```
background-image: linear-gradient(90deg, rgb(43,167,255), rgb(202,69,255) 50%, rgb(254,136,27))
-webkit-background-clip: text
background-clip: text
-webkit-text-fill-color: transparent
color: transparent
display: inline
```

`<p>` below heading — inline: `color: rgb(189, 174, 231)`, `font-size: clamp(14px, 1.25vw, 18px)`, `margin: 0`

Text: **"Built for operational clarity through constant change. Proven across 530+ MW of critical infrastructure."**

---

**Cards grid** — Tailwind: `w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`

Inline: `gap: 12px`, `position: relative`, `z-index: 1`

Maps over `CARDS`, renders `<ServiceCard key={card.label} {...card} />` for each.

---

**Bottom white fade overlay** (`position: absolute`, bottom of the section):

```
position: absolute
bottom: 0
left: 0
right: 0
height: 180px
background: linear-gradient(to bottom, transparent, rgb(255, 255, 255))
pointer-events: none
```

---

**Card hover animation summary:**
- Top image: default `opacity: 0.7`, `translateY(-30%)` — on hover: `opacity: 1`, `translateY(0)`
- Bottom dark gradient: default `opacity: 0`, `translateY(100%)` — on hover: `opacity: 1`, `translateY(0)`
- Inner text block: on hover shifts `translateY(-8px)`
- Button reveal: default `max-height: 0`, `opacity: 0`, `translateY(20px)` — on hover: `max-height: 80px`, `opacity: 1`, `translateY(0)`
- All transitions: `duration-500` (500ms)
