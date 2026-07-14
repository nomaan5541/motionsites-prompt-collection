Create a React + Vite + TypeScript + Tailwind CSS landing page for an architecture studio called "Qelora". The page has exactly two sections: a Hero and a Section 2. The entire site uses inline styles (no Tailwind utility classes in JSX -- Tailwind is only used for base reset). Use only `react`, `react-dom`, and `lucide-react` as dependencies (icons are all inline SVGs here, lucide is not actually used in this page).

---

FONTS

Load these three custom fonts in `index.html` `<head>`:

```html
<link href="https://db.onlinewebfonts.com/c/076f8c5b3b67616658dd1e4e9bac62ec?family=Zimula+Trial+Med" rel="stylesheet">
<link href="https://db.onlinewebfonts.com/c/08d8ca53f66ab5b48659912fa0136b78?family=Zimula+Trial+Bd" rel="stylesheet">
```

Also import in `index.css`:
```css
@import url('https://db.onlinewebfonts.com/c/46024824a3dd3309c3a7f46f4f1283ba?family=Zimula+Trial+Reg');
```

Font usage:
- Body / default: `'Zimula Trial Med', sans-serif`
- Bold / logo / hero text: `'Zimula Trial Bd', sans-serif`
- The `Reg` import is available but Med is the primary weight used everywhere

---

GLOBAL CSS (`index.css`)

```css
@import url('https://db.onlinewebfonts.com/c/46024824a3dd3309c3a7f46f4f1283ba?family=Zimula+Trial+Reg');

@tailwind base;
@tailwind components;
@tailwind utilities;

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Zimula Trial Med', sans-serif;
  background: #0e0c0a;
  overflow-x: hidden;
}

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #0e0c0a; }
::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 3px; }
```

---

COLOR PALETTE

- Dark background: `#0e0c0a`
- Primary text: `#241f21`, `#282425`, `#2a2420`
- White: `#fff`
- Dark accent: `#100e0c`
- Warm transparent overlays: `rgba(235, 230, 218, 0.12)`, `rgba(242, 238, 230, 0.38)`
- Frosted glass backgrounds: `rgba(248,245,240,0.72)`, `rgba(248,245,240,0.88)`, `rgba(248,245,240,0.92)`, `rgba(248,245,240,0.96)`

---

ASSET URLs (Cloudinary, not CloudFront)

Videos:
- Background video (Hero): `https://res.cloudinary.com/dy5er7kv5/video/upload/q_auto/f_auto/v1779808200/bg-video_xsmysw.mp4`
- Bird enter animation: `https://res.cloudinary.com/dy5er7kv5/video/upload/q_auto/v1779808206/bird-entrada_e72qt7.webm`
- Bird idle 1: `https://res.cloudinary.com/dy5er7kv5/video/upload/q_auto/v1779808282/bird-idle_fzjami.webm`
- Bird idle 2: `https://res.cloudinary.com/dy5er7kv5/video/upload/q_auto/v1779808284/bird-idle2_rajmgo.webm`
- Bird leave animation: `https://res.cloudinary.com/dy5er7kv5/video/upload/q_auto/v1779808286/bird-saida_ifroz1.webm`
- Background video (Section 2): `https://res.cloudinary.com/dy5er7kv5/video/upload/q_auto/f_auto/v1779835701/bg-2-video_sgbpqt.mp4`

Images:
- Q logo (unused but declared): `https://res.cloudinary.com/dy5er7kv5/image/upload/q_auto/f_auto/v1779808187/q-logo_isvugc.png`
- Center sculpture/slab: `https://res.cloudinary.com/dy5er7kv5/image/upload/q_auto/f_auto/v1779854565/slab_v1_kb4vqk.png`
- CTA card photo (Pexels): `https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400`

---

APP STRUCTURE

```
src/
  main.tsx      -> StrictMode, renders 
  App.tsx       ->  then , no routing
  Hero.tsx      -> Hero section component
  Section2.tsx  -> Second section component
  index.css     -> Global styles
```

---

SECTION 1: HERO (`Hero.tsx`)

Container: `position: relative`, `width: 100%`, `minHeight: 100vh`, `overflow: visible`, `fontFamily: 'Zimula Trial Med', sans-serif`.

Responsive breakpoint: `isMobile = window.innerWidth < 768`, checked on mount and resize.

Layer 1 -- Background Video (z-index: 0)
- `` with `autoPlay muted loop playsInline`
- `position: absolute`, `inset: 0`, `width: 100%`, `height: 100vh`, `objectFit: cover`
- Source: `BG_VIDEO` URL

#### Layer 2 -- Warm Overlay (z-index: 1)
- A div covering the hero with `background: rgba(235, 230, 218, 0.12)`, `height: 100vh`, `pointerEvents: none`

#### Layer 3 -- Bird Animation System (z-index: 8)
- Container: `position: absolute`, `top: 0`, `left: 0`, `width: 100%`, `height: 100vh`, `pointerEvents: none`, `aria-hidden`
- Contains 4 `` elements (enter, idle1, idle2, leave), each toggled visible/hidden via `display` property
- **Desktop:** Each video is `position: absolute`, `inset: 0`, `width: 100%`, `height: 100%`, `objectFit: cover`
- **Mobile:** Each video is `position: absolute`, `top: 50%`, `left: 0`, `transform: translateY(-50%)`, `width: 100%`, `height: auto` (full width, auto height, vertically centered)
- **State machine:** Type `'enter' | 'idle1' | 'idle2' | 'leave' | 'hidden'`
  - On page load: play `enter` video
  - When `enter` ends: transition to `idle1`
  - When `idle1` ends: transition to `idle2`
  - When `idle2` ends: transition back to `idle1` (infinite loop)
  - **On scroll down** (past 10px threshold): pause all idle/enter videos, reset their `currentTime` to 0, play `leave` video
  - **On scroll back to top** (below 10px): pause leave video, reset, play `enter` video again
- Uses both React state and refs (`birdStateRef`) to avoid stale closures in scroll handlers
- All videos are preloaded with `.load()` on mount
- The `playVideo` helper sets `currentTime = 0`, checks `readyState >= 2`, then plays (or waits for `canplay` event)

#### Layer 4 -- Center Brand Text "Qelora" (z-index: 5)
- Absolutely positioned container filling `100vh`, `display: flex`, `alignItems: center`, `justifyContent: center`, `pointerEvents: none`
- Text: `"Qelora"` in `'Zimula Trial Bd', sans-serif`
- Font size: mobile `26vw`, desktop `22vw`
- `letterSpacing: -0.05em`, `color: #241f21`, `lineHeight: 1`
- `marginBottom`: mobile `8vh`, desktop `12vh`

#### Layer 5 -- Sculpture Image (z-index: 5)
- `` with `position: absolute`, `top: 50%`, `left: 50%`
- `transform: translateX(-50%) translateY(${-heroScroll  0.3}px)` -- parallax that moves UP as user scrolls down
- Width: mobile `220vw`, desktop `160vw`; `height: auto`
- `pointerEvents: none`, `willChange: transform`

#### Layer 6 -- Fixed Navbar (z-index: 100)
- `position: fixed`, `top: 0`, full width
- Padding: mobile `16px 20px`, desktop `20px 36px`
- **Left:** Brand name "Qelora" with registered trademark superscript. Font: `'Zimula Trial Bd'`, size: mobile `20px`, desktop `24px`, `letterSpacing: -0.03em`, `color: #241f21`. The `(R)` sup has `fontSize: 0.4em`, `verticalAlign: super`
- **Right (desktop):** `NavPills` component -- a row of pill buttons for `['Projects', 'Studio', 'Responsibility', 'Archive']` plus an `EN` language selector
  - Each pill: `background: rgba(248,245,240,0.92)`, `borderRadius: 12px`, `padding: 13px 22px 8px`, `height: 40px`, `fontSize: 13px`, `textTransform: uppercase`, `letterSpacing: 0.07em`, `color: #241f21`
  - Active pill has `fontWeight: 700` and a 3px round dot at `bottom: 3px`, centered
  - Non-active: `fontWeight: 500`
  - Language pill: separate rounded capsule (`borderRadius: 100px`), `padding: 8px 14px`, `background: rgba(248,245,240,0.88)`, `backdropFilter: blur(12px)`, `boxShadow: 0 2px 20px rgba(0,0,0,0.1)`, contains "EN" text and a chevron-down SVG
- **Right (mobile):** Hamburger button, `42x42px`, `borderRadius: 100px`, same frosted glass style. Shows X icon when open, 3-line hamburger when closed

#### Layer 7 -- Mobile Dropdown Menu (z-index: 99)
- `position: fixed`, `top: 70px`, `left: 16px`, `right: 16px`
- `background: rgba(248,245,240,0.96)`, `backdropFilter: blur(16px)`, `borderRadius: 18px`, `padding: 8px`, `boxShadow: 0 8px 40px rgba(0,0,0,0.14)`
- Each menu item: full-width button, `padding: 14px 20px`, `fontSize: 13px`, uppercase, `letterSpacing: 0.07em`, `borderBottom: 1px solid rgba(40,36,37,0.08)`
- Bottom: EN language selector row

#### Layer 8 -- Bottom Panels (z-index: 20)
- `bottom` is calculated as: `bottomOffset + heroScroll  0.5` where `bottomOffset` is 24px on mobile, 36px on desktop. This creates a parallax push-down effect as user scrolls.

**Desktop layout (side-by-side):**

- **Bottom-left panel:** `position: absolute`, `left: 36px`, `borderRadius: 18px`, `padding: 22px 28px`, `maxWidth: 270px`
  - Headline: `"Designing places\nbeyond\nwhat's expected"` -- `fontSize: clamp(17px, 2vw, 24px)`, `lineHeight: 1.28`, `color: #282425`, `letterSpacing: -0.01em`
  - Below: 1px border-top divider (`rgba(40,36,37,0.2)`), then "EXPLORE OUR APPROACH" link with down-arrow SVG. `fontSize: 11px`, uppercase, `letterSpacing: 0.1em`

- **Bottom-right panel:** `position: absolute`, `right: 36px`, `borderRadius: 18px`, `width: clamp(210px, 21vw, 290px)`, `height: 180px`, `overflow: hidden`
  - Background: Pexels photo covering the entire card
  - Dark gradient overlay: `linear-gradient(to bottom, rgba(16,14,12,0.55) 0%, transparent 60%)`
  - Top text: `"Every lasting space begins\nwith a quiet dialogue."` -- `color: #fff`, `fontSize: 13px`, `lineHeight: 1.35`
  - Bottom: inline flex with a white circle (envelope SVG icon, 36x36px, `borderRadius: 12px`) and a white "START A PROJECT" button (`fontSize: 11px`, uppercase, `letterSpacing: 0.07em`, `fontWeight: 700`, `borderRadius: 12px`, `height: 36px`)

**Mobile layout (stacked):**
- Single flex column container, `left: 20px`, `right: 20px`, `gap: 12px`
- **Top card:** Tagline panel with `background: rgba(248,245,240,0.72)`, `backdropFilter: blur(8px)`, `borderRadius: 16px`, `padding: 18px 20px`. Same text as desktop but single line: "Designing places beyond what's expected", `fontSize: 17px`. Same divider + "Explore our approach" link below.
- **Bottom card:** CTA card, `borderRadius: 16px`, `height: 120px`. Same structure as desktop right panel but adapted for mobile (text `fontSize: 12px`, same button row).

---

### SECTION 2 (`Section2.tsx`)

**Container:** `position: relative`, `width: 100%`, `minHeight: 100vh`, `display: flex`, `flexDirection: column`, `alignItems: center`, `justifyContent: center`, `overflow: hidden`, `fontFamily: 'Zimula Trial Med', sans-serif`

#### Layer 1 -- Background Video (z-index: 0)
- `` with `autoPlay muted loop playsInline`, `position: absolute`, `inset: 0`, `width: 100%`, `height: 100%`, `objectFit: cover`
- Source: `BG_VIDEO_2` URL

#### Layer 2 -- Warm Overlay (z-index: 1)
- `background: rgba(242, 238, 230, 0.38)`, `position: absolute`, `inset: 0`, `pointerEvents: none`

#### Layer 3 -- Center Headline (z-index: 2)
- Absolutely positioned, `inset: 0`, flex centered, `pointerEvents: none`, `textAlign: center`, `padding: 0 24px`
- Text: `"What stands the\ntest of time is all\nthat guides the\nwork."` using `
` tags
- `fontSize: clamp(32px, 5.5vw, 80px)`, `lineHeight: 1.18`, `color: #2a2420`, `maxWidth: 780px`, `letterSpacing: -0.025em`, `fontWeight: 400`

#### Layer 4 -- Bottom Element (z-index: 2)
- `position: absolute`, `bottom: clamp(24px, 4vh, 48px)`, full width, flex column centered, `padding: 0 24px`
- **Vertical line:** `width: 1px`, `height: 56px`, `background: rgba(42,36,32,0.25)`
- **Below (margin-top: 22px):** flex column centered, `gap: 14px`
  - **Map pin SVG:** 24x28px outline pin icon, `stroke: #2a2420`, `strokeWidth: 1.4`
  - **Subtext:** `"Civic bodies and private clients trust us to shape resilient communities and purposeful places."` -- `fontSize: clamp(11px, 1.4vw, 13px)`, `color: #2a2420`, `letterSpacing: 0.04em`, `lineHeight: 1.6`, `maxWidth: 340px`, `opacity: 0.75`

---

### KEY BEHAVIORS SUMMARY

1. **Bird animation state machine:** enter -> idle1 <-> idle2 loop; scroll triggers leave; scroll back triggers re-enter
2. **Parallax effects:** Sculpture image moves up with `translateY(-scrollY  0.3)`. Bottom panels push down with `bottom = offset + scrollY  0.5`
3. Responsive at 768px breakpoint: Nav collapses to hamburger, panels stack vertically, bird videos switch from cover-fill to width-100%/height-auto/vertically-centered, sculpture grows from 160vw to 220vw, brand text grows from 22vw to 26vw
4. All styling is inline -- no CSS classes in JSX, no Tailwind utility classes on elements
5. No third-party animation libraries -- all animations are native video playback + scroll-driven inline style changes via React state