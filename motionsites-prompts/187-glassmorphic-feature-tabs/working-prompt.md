# Core Features Section

Build a single React + TypeScript + Tailwind + framer-motion section called `CoreFeaturesSection`. Match every detail below exactly.

## Stack & Global Setup

- React 18, Vite, TypeScript, TailwindCSS, `framer-motion`, `clsx` + `tailwind-merge` (helper `cn`).
- Dark theme. Page background `#000000` (set on `body`).
- Font: **Inter** (Google Fonts, weights 300–700) as default sans.
- Icons: **Material Symbols Rounded** via Google Fonts link:
  `https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200`
- Tailwind tokens (HSL): `--background: 270 80% 3%;` `--foreground: 0 0% 100%;` mapped to `background` / `foreground`.
- Extra Tailwind color: `landing.surface: rgba(255,255,255,0.10)`.

## Helper: `cn`
```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export const cn = (...i: ClassValue[]) => twMerge(clsx(i));
```

## Material Icon component (`MIcon`)
```tsx
export const MIcon = ({ name, size = 16, className = "" }:{name:string;size?:number;className?:string}) => (
  <span
    className={`material-symbols-rounded ${className}`}
    style={{ fontSize: size, fontVariationSettings: `"FILL" 0, "wght" 400, "GRAD" 0, "opsz" ${size}` }}
  >{name}</span>
);
```

## `FadeUp` primitive (scroll reveal)
- `framer-motion` `motion.div`. `initial={{opacity:0,y:24}}`, `whileInView={{opacity:1,y:0}}`, `viewport={{once:true,amount:0.3}}`, `transition={{duration:0.6,delay,ease:[0.22,1,0.36,1]}}`. Respect `useReducedMotion` (no y offset).

## `SpotlightBorder` (mouse-tracked 1px gradient border)
- Wrapper with `position:relative` + chosen radius (`rounded-xl|2xl|3xl|full`).
- Listens to `window` `mousemove`; sets CSS vars `--spot-x`, `--spot-y` from `getBoundingClientRect`.
- Absolutely positioned `<span>` overlay with:
```ts
{
  background: `radial-gradient(${size}px circle at var(--spot-x,-200px) var(--spot-y,-200px), rgba(255,255,255,${intensity}), rgba(255,255,255,0) 60%)`,
  padding: "1px",
  WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  WebkitMaskComposite: "xor",
  maskComposite: "exclude",
}
```
- Props: `radius`, `size` (px), `intensity` (0–1). Used three times in this section with sizes 360/600/360 and intensity 0.5.

## Tab data (exact URLs, order matters)
```ts
const tabs = [
  { label: "Exclusive Tutorial",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260521_222821_06fd2e74-16a5-4e7f-90ed-14e6760e7edb.png&w=1280&q=85",
    caption: "Step-by-step guides to master AI design tools." },
  { label: "Courses",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260521_222901_b133c5f0-191c-4285-a018-a68fd9c9f5ac.png&w=1280&q=85",
    caption: "Structured learning paths to level up your skills." },
  { label: "Templates",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260521_225713_3226e3ad-3364-42b1-99bd-ed82005c0524.png&w=1280&q=85",
    caption: "Production-ready designs you can customize instantly." },
  { label: "Animated Backgrounds",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260521_222832_223716d0-9b6c-4c48-98a6-a5e3c02e2962.png&w=1280&q=85",
    caption: "Motion-ready visuals that bring your projects to life." },
];
```

## Behavior
- `active` state, default `0`. `pausedRef = useRef(false)`.
- `setInterval` every **5000ms**: if not paused, `active = (active+1) % 4`.
- Arrow buttons & tab clicks set `pausedRef.current = true` (auto-rotation stops after first user interaction).

## Section Layout

```tsx
<section className="relative w-full bg-background py-12 sm:py-16">
  <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
```

### Header row (flex, stacks on mobile)
- Left column `max-w-2xl`:
  - Pill (FadeUp d=0): `inline-flex items-center gap-2 rounded-full bg-landing-surface border border-white/10 px-3 py-1 text-xs text-foreground/80 backdrop-blur` with `1.5x1.5` dot `bg-foreground/70` + text "Core Features".
  - Heading (FadeUp d=0.1): `text-3xl sm:text-4xl font-normal tracking-[-0.02em] leading-[1.05] text-foreground`. Content: `One platform to run your<br className="hidden sm:block"/><span className="text-foreground/55"> entire AI design journey.</span>`
- Right (FadeUp d=0.2, `max-w-sm md:pt-2`): paragraph `text-sm sm:text-base leading-relaxed text-foreground/65`: "UI Rocket brings your lessons, templates, tools, and community into one space — so you stop switching between tabs and start shipping real AI-powered work."
- Wrapper: `mb-14 flex flex-col gap-10 md:flex-row md:items-end md:justify-between`.

### Tab pills (desktop only)
`SpotlightBorder radius="full" size={360} intensity={0.5}` `mx-auto mb-6 hidden w-full p-1 sm:block`.
Inside: `grid grid-cols-2 sm:grid-cols-4 gap-1 rounded-full p-1`.
Each button: `rounded-full px-4 py-2.5 text-sm transition-colors duration-300`. Active: `bg-white/[0.06] text-foreground border border-white/15`. Inactive: `text-foreground/55 hover:text-foreground/80 border border-transparent`. Click → `select(i)`.

### Image stage
`SpotlightBorder radius="2xl" size={600} intensity={0.5}` `relative mx-auto w-full p-2 sm:p-3`.
Inner: `relative overflow-hidden rounded-2xl border border-white/10` with inline `style={{ backgroundColor:"#0e0e0e" }}`.
Aspect frame: `relative aspect-[16/10] w-full`.

Render all 4 `<img>` absolutely stacked (`absolute inset-0 h-full w-full object-cover transition-opacity duration-400`). Active one `opacity-100`, others `opacity-0`. Use `loading="eager" decoding="async"`.

Overlay all 4 `TabDashboardMock` panels (absolute, fade). Wrapper per mock:
`absolute inset-1 flex items-center justify-center p-[3%] sm:p-[4%] transition-opacity duration-300` + active `opacity-100` else `opacity-0 pointer-events-none`.

Mock list (label → title, activeNav):
- Courses → "Courses" / "Courses"
- Templates → "Templates" / "Templates"
- Animated Backgrounds → "Animated Backgrounds" / "Backgrounds"
- Exclusive Tutorial → "Exclusive Tutorials" / "Tutorials"

### Arrow / caption bar
`SpotlightBorder radius="full" size={360} intensity={0.5}` `mx-auto mt-6 w-full p-1`.
Inside: `flex items-center justify-between gap-4 rounded-full px-3 py-2`.
- Left/right buttons: `flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-foreground/80 transition-colors hover:bg-white/[0.08] hover:text-foreground`. Icons: `arrow_back` / `arrow_forward` size 16. Click → `go(-1)` / `go(1)`.
- Center caption box: `min-h-[1.5rem] flex-1 overflow-hidden text-center`. Use `AnimatePresence mode="wait"` + `motion.p` keyed by `tabs[active].label`, initial `{opacity:0,y:6}`, animate `{opacity:1,y:0}`, exit `{opacity:0,y:-6}`, `duration 0.25`. Classes `px-2 text-sm text-foreground/75`. Mobile shows label (`sm:hidden font-medium text-foreground`), desktop shows `tabs[active].caption` (`hidden sm:inline`).

## `TabDashboardMock` (auto-scaled dashboard preview)

Fixed design canvas **900 × 562** (16:10). Outer wrapper measures itself with `ResizeObserver` and sets `transform: scale(min(w/900, h/562))`, `transformOrigin: center center`, `flexShrink: 0`.

Wrapper: `relative h-full w-full overflow-hidden flex items-center justify-center`.
Inner card (the 900×562 box): `flex overflow-hidden rounded-2xl bg-white/[0.04] backdrop-blur-xl shadow-2xl`.

### Sidebar (`w-[210px]`, `flex flex-col gap-1 p-3`)
- Brand row: `mb-3 flex items-center justify-between px-2 py-2`.
  - Left: icon box `flex h-6 w-6 items-center justify-center rounded-md` with inline gradient `linear-gradient(135deg, rgb(158,103,250), rgb(254,106,187) 50%, rgb(255,156,101))`, `MIcon "rocket_launch" size={14} className="text-white"`, label `text-[13px] font-semibold text-white` = "UI Rocket".
  - Right: `MIcon "search" size={14} className="text-white/40"`.
- Nav list (`flex flex-col gap-0.5`). Items:
  Dashboard/`grid_view`, Courses/`school`, Templates/`dashboard`, Tutorials/`play_circle`, Backgrounds/`auto_awesome`, Pricing/`sell`.
  Item base: `flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[12px] transition-colors`. Active: `bg-white/[0.08] text-white`. Inactive: `text-white/55 hover:text-white/80`. Icon size 14.

### Main column (`flex min-w-0 flex-1 flex-col p-3`)
Inside: `flex h-full w-full flex-col overflow-hidden rounded-2xl bg-black/20`.
Header: `flex items-center justify-between px-4 py-3`.
- Left group: blue square `flex h-7 w-7 items-center justify-center rounded-md bg-[rgb(59,130,246)] text-white` + `MIcon "add" size={16}`. Title `text-base font-semibold text-white` = `title` prop.
- Right group (`flex items-center gap-2.5`): `MIcon "notifications" size={16} text-white/60`, pill `rounded-full bg-[rgb(59,130,246)] px-2.5 py-1 text-[11px] font-medium text-white` = "Invite", avatar `h-7 w-7 rounded-full bg-cover bg-center ring-1 ring-white/10` with `backgroundImage: url(https://i.pravatar.cc/64?img=12)`.
Body: `flex-1 overflow-hidden px-4 pb-4`. Render `children` here.

## Tab content panels (children passed to mock)

Each panel fills the body with a small grid of cards in the same monochrome white-alpha style (`bg-white/[0.04] border border-white/10 rounded-xl`, headings `text-white text-[13px] font-medium`, body `text-white/60 text-[11px]`). Compose roughly:

- **CoursesTabContent**: 2×3 grid of course cards. Each card: 16:9 thumb using the module covers below; title; meta row "X lessons · Y min" in `text-white/50 text-[10px]`.
- **TemplatesTabContent**: 3×2 grid of template cards with browser-frame thumbnails (3 dots row) using the same module covers as placeholder; small "Premium" pill `bg-white/10 text-[10px] rounded-full px-2 py-0.5`.
- **BackgroundsTabContent**: 3×2 grid of looping `<video autoplay muted loop playsinline>` tiles. Sources: use the CloudFront MP4s in the assets list. Overlay play icon (see asset) bottom-right.
- **ExclusiveTutorialTabContent**: featured large card (left, 60%) + 3 stacked rows (right, 40%). Featured uses tutorial thumbnail with floating play icon, title, "12 min · Pro" meta. Each row: 64x40 thumb + 2-line title + meta.

Assets (use exact URLs):
- Play icon SVG:
  `https://miptxtnhvjrkpmnjgdhk.supabase.co/storage/v1/object/public/training-assets/landing/play_icon.svg`
- Module / template cover thumbnails (cycle through):
  - `https://miptxtnhvjrkpmnjgdhk.supabase.co/storage/v1/object/public/training-assets/landing/module-cover-1.png`
  - `.../module-cover-2.png`
  - `.../module-cover-3.png`
  - `.../module-cover-4.png`
  - `.../module-cover-5.png`
  - `.../module-cover-6.png`
- Tutorial thumbnails: reuse the four `images.higgs.ai` URLs from the tabs array.
- Background videos (CloudFront, use as `<video>` `src`):
  - `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260521_014404_bg1.mp4`
  - `.../hf_20260521_014404_bg2.mp4` … through `bg6.mp4`
  (If a specific URL 404s, fall back to the matching higgs.ai poster image as a static tile.)

## Putting it together
```tsx
<CoreFeaturesSection />
```
Mount inside a page with `bg-background text-foreground font-inter antialiased`. No other dependencies.

## Acceptance checklist
- [ ] 4 tabs auto-rotate every 5s until user interacts, then stop.
- [ ] SpotlightBorder shows a soft white radial highlight that follows the cursor on all three bordered shells.
- [ ] Image cross-fades over 400ms; caption cross-fades with 6px y motion (250ms).
- [ ] TabDashboardMock scales as a single unit to fit its container while preserving 900×562 internal layout.
- [ ] Sidebar active item highlighted matches the visible tab.
- [ ] Header, pill, paragraph use Inter, exact tracking and color tokens specified.
- [ ] All asset URLs above load directly (no local imports).