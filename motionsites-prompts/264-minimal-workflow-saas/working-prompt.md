React 19 + TypeScript + Vite 6
Tailwind CSS v4 (via @tailwindcss/vite plugin, NOT PostCSS)
motion v12+ (import from "motion/react", NOT "framer-motion")
lucide-react (for ChevronRight icon)
Font: Google Inter (weights 400, 500, 600, 700)
```

## CloudFront Video URL

```
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260525_064035_ff2947db-c2f5-47e4-818d-0e985c6ea0fc.mp4
```

---

## FILE: index.css

```css
@import "tailwindcss";
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
}

:root {
  font-family: var(--font-sans);
}

body {
  background-color: #f8fafc;
  color: #1e293b;
}
```

---

## FILE: App.tsx -- Root layout with full-bleed background video

The root div is `relative min-h-screen bg-[#f8fafc] selection:bg-slate-200 overflow-x-hidden flex flex-col justify-between`.

Inside it, TWO sibling layers:

**Layer 1 -- Background video (absolute, z-0):**
- Container: `absolute inset-x-0 top-0 bottom-0 z-0 overflow-hidden pointer-events-none`
- `` element with attributes: `autoPlay`, `muted`, `loop`, `playsInline`
  - src = the CloudFront URL above
  - className: `w-full h-full object-cover object-bottom opacity-[0.98]`
- Overlay div on top of video: `absolute inset-0 bg-white/[0.05] backdrop-blur-[2px]` (extremely subtle white wash + micro blur)

**Layer 2 -- Content (relative, z-10):**
- Container: `relative z-10 flex-grow flex flex-col`
- Contains `` directly
- Contains `` wrapping ``

---

## FILE: Navbar.tsx -- Minimal top navigation

Container: `` with `relative z-50 flex items-center justify-between px-6 py-5 max-w-7xl mx-auto w-full select-none`

**Left -- Brand logo:**
- Text "Script" in `font-bold text-[21px] tracking-tight text-[#0f172a]`
- Custom 3-bar icon next to it, rotated -15deg:
  - Wrapper: `flex flex-col gap-[2.5px] rotate-[-15deg] ml-1.5 translate-y-[1px]`
  - Bar 1: `w-3.5 h-[1.5px] bg-[#0f172a] rounded-full`
  - Bar 2: `w-2.5 h-[1.5px] bg-[#0f172a] rounded-full translate-x-[2px]`
  - Bar 3: `w-3 h-[1.5px] bg-[#64748b] rounded-full translate-x-[4px]` (lighter gray, staggered right)

**Center -- Nav links (absolute centered, hidden on mobile):**
- Container: `hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-[13px] font-medium text-slate-600`
- 5 links: "Resources", "Service", "Support", "Developers", "Updates"
- Each: `hover:text-slate-900 transition-colors`

**Right -- CTA button:**
- Text "Join us"
- Classes: `px-4.5 py-1.5 text-xs font-medium border border-slate-200 rounded-full hover:bg-white/85 bg-white/30 backdrop-blur-sm transition-all shadow-[0_1px_2px_rgba(0,0,0,0.02)] text-slate-800`

---

## FILE: Hero.tsx -- Main hero content

Imports: `motion` from `motion/react`, `AnimatedTaskList` component, `ChevronRight` from `lucide-react` (also imports `ArrowRight` but it is unused).

Section container: `relative pt-10 pb-6 flex flex-col justify-center items-center w-full select-none`
Inner container: `relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center`

**Element 1 -- Headline (motion.h1):**
- Classes: `text-4xl md:text-[45px] tracking-tight text-slate-900 mb-5 max-w-4xl mx-auto leading-[1.12]`
- Animation: `initial={{ opacity: 0, y: 20 }}` -> `animate={{ opacity: 1, y: 0 }}`, `transition={{ duration: 0.8, ease: "easeOut" }}`
- Content (3 lines separated by `
`):
  - Line 1: `Guide everyone on teams`
  - Line 2: `tech manuals`
  - Line 3: `— with a total ease of mind` (note: em dash character)

**Element 2 -- Subtext (motion.p):**
- Classes: `text-xs md:text-[13px] text-slate-500 max-w-xl mx-auto mb-6 leading-relaxed font-normal`
- Animation: same fade-up, `delay: 0.2`
- Content: "Script offers the best path to register your workflow steps" + `
` + "and optimize training on your setup systems"

**Element 3 -- CTA Button (motion.div wrapper):**
- Wrapper: `mb-14`, animation same fade-up, `delay: 0.4`
- Button classes: `bg-gradient-to-b from-[#252a38] to-[#1a1e29] hover:from-[#1d212c] hover:to-[#12151e] text-white px-5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1 mx-auto transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_1px_2px_rgba(0,0,0,0.15)] border border-slate-900/80 active:scale-95 duration-150`
- Content: "Register Now!" followed by ``

**Element 4 -- Animated Task List area:**
- Outer div: `relative w-full flex flex-col items-center max-w-sm`
- AnimatedTaskList wrapper: `` with `initial={{ opacity: 0, scale: 0.95 }}`, `animate={{ opacity: 1, scale: 1 }}`, `transition={{ duration: 1, delay: 0.6 }}`, className `relative z-20 w-full`
- Below it, tagline: `` with `initial={{ opacity: 0 }}`, `animate={{ opacity: 1 }}`, `transition={{ delay: 1, duration: 1 }}`, className `mt-14 text-[10px] font-medium tracking-wide text-white/50`, text: "All people aligned."

---

## FILE: AnimatedTaskList.tsx -- Infinite auto-scrolling task queue with glass card

Imports: `React`, `useState`, `useEffect` from react; `motion` from `motion/react`.

**Task data (9 items):**
```
"How to code an app in Python"
"How to build charts with data in Excel"
"How to edit profile of users on GitHub"
"How to set up a custom task rule in Asana"
"How to design a form in Sheets"
"How to build a custom webhook in Slack"
"How to sync a dashboard in Excel"
"How to create a team member in Canva"
"How to link a custom project page in Jira"
```

`N = tasks.length` (9). `duplicatedTasks = [...tasks, ...tasks, ...tasks]` (27 items, tripled for infinite loop).

**State:**
- `index` starts at `N` (9)
- `animate` starts at `true`

**Scroll logic (3 useEffects):**

1. `setInterval` every 4500ms: increments `index` by 1 if `< N  2` (18)
2. When `index === N  2`: after 1000ms timeout, sets `animate = false` and `index = N` (silent teleport back)
3. When `index === N && !animate`: after 50ms timeout, sets `animate = true` (re-enables animation)

**Outer container:** `relative w-full max-w-[340px] md:max-w-[420px] h-[220px] select-none mx-auto text-left font-sans overflow-hidden`

**Glass highlight card (static, z-0):**
- Position: `absolute top-0 left-0 w-full h-[54px]`
- Style: `rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]`
- Layout: `flex items-center px-4 pointer-events-none`
- Contains a white icon square: `w-[30px] h-[30px] bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm border border-white/40`
  - Inside: 3-bar mini logo rotated -15deg:
    - Wrapper: `flex flex-col gap-[1.5px] rotate-[-15deg]`
    - Bar 1: `w-2.5 h-[1.5px] bg-[#0c101d] rounded-full`
    - Bar 2: `w-1.8 h-[1.5px] bg-[#0c101d] rounded-full translate-x-[0.8px]`
    - Bar 3: `w-2.2 h-[1.5px] bg-[#475569] rounded-full translate-x-[1.6px]`

**Task items layer (absolute, z-10):**
- Container: `absolute inset-0 w-full h-full z-10 pointer-events-none`
- Maps over `duplicatedTasks` (27 items). For each item at index `i`, computes `distance = i - index`:

**Position/opacity rules based on distance:**

| distance | y | height | opacity | blur |
|----------|-----|--------|---------|------|
| 0 (active) | 0 | 54px | 1.0 | 0px |
| < 0 (past) | -35 | 30px | 0.0 | 0px |
| 1 | 68px | 22px | 0.55 | 0.2px |
| 2 | 90px | 22px | 0.36 | 0.4px |
| 3 | 112px | 22px | 0.22 | 0.6px |
| 4 | 134px | 22px | 0.11 | 0.8px |
| 5 | 156px | 22px | 0.04 | 1.1px |
| 6+ | formula | 22px | 0.0 | 0px |

Formula for inactive y: `68 + (distance - 1) * 22`

**Each motion.div item:**
- Classes: `absolute left-0 w-full flex items-center select-none justify-start`
- `animate={{ y, opacity }}`, `style={{ height, filter: filterBlur }}`
- Transition: when `animate=true`: `{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }` (custom spring-like bezier). When `animate=false`: `{ duration: 0 }` (instant, no animation for teleport)

**Active item rendering (distance === 0):**
- Container: `pl-[58px] flex flex-col justify-center text-left`
- Label: `text-[7.5px] text-white/50 font-bold uppercase tracking-wider leading-none mb-1`, text: "Learn the step"
- Task text: `text-[12.5px] md:text-[13px] font-medium tracking-tight text-white leading-none`

**Inactive item rendering (distance !== 0):**
- Container: `pl-[58px] flex items-center text-left`
- Task text: `text-[11.5px] md:text-[12px] font-normal tracking-tight text-white/70 leading-none`

---

## FILE: LogoCloud.tsx -- Brand logo strip (NOT displayed in current App.tsx but exists as component)

Container: `w-full bg-white border-t border-slate-100 py-7 select-none relative z-20`
Grid: `grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 items-center justify-center gap-y-8 gap-x-6`

8 brand logos, all built with inline SVGs and styled text:
1. **Mercedes-Benz** -- circle + 3-spoke SVG, `text-[10px] font-medium tracking-wider uppercase text-slate-700`
2. **Certainty** -- circle + checkmark SVG (emerald-600), `text-[13px] font-bold tracking-tight text-slate-800`
3. **STAR MOUNTAIN CAPITAL** -- 3 overlapping mountain peaks SVG, `text-[7px] font-black tracking-[0.16em]` + `text-[5px] font-semibold tracking-[0.25em] scale-90`
4. **Paige** -- dark circle with pie chart SVG, `text-[14px] font-bold tracking-tight text-slate-900`
5. **ALARIS** -- text only, `text-[13px] font-light tracking-[0.3em] uppercase`
6. **raft** -- text only, `text-[15px] font-bold tracking-tighter lowercase`
7. **Foobar** -- split weight: "Foo" `font-black text-slate-900` + "bar" `font-semibold text-slate-400`, `text-[14px]`
8. **Alph4** -- triangle SVG with internal lines, `text-[8px] font-bold tracking-widest text-slate-600 scale-95`

---

## Key Design Specifications

- **Color palette**: Entirely slate, white, charcoal-navy (#0f172a, #252a38, #1a1e29). NO purple/indigo anywhere.
- **Video background**: Covers entire viewport, `object-cover object-bottom`, 98% opacity, with a `bg-white/[0.05] backdrop-blur-[2px]` overlay
- **Glass card effect**: `bg-white/[0.08] backdrop-blur-md border border-white/20` with inset highlight shadow
- **CTA button**: Dark gradient with inset white highlight: `shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_1px_2px_rgba(0,0,0,0.15)]`
- **Animation sequence**: Staggered fade-up (0s, 0.2s, 0.4s for headline/subtext/button), then scale-in at 0.6s for task list, then fade-in at 1s for tagline
- **Task list animation curve**: Custom cubic-bezier `[0.16, 1, 0.3, 1]` (fast start, very smooth deceleration)
- **Task list cycle**: 4.5s interval, 1.0s slide duration, silent instant teleport back when exhausted
- **Text on dark video**: White with varying opacity (1.0, /70, /50) for hierarchy
- **select-none**: Applied to navbar, hero section, and task list to prevent text selection on decorative elements
- **Responsive**: Nav links hidden on mobile (`hidden md:flex`), task list width `max-w-[340px] md:max-w-[420px]`, headline `text-4xl md:text-[45px]`