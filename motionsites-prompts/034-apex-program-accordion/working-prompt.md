# Recreate the "Course Curriculum" Section — Exact Prompt

Build a React + TypeScript + TailwindCSS section called `CurriculumSection` that exactly matches the spec below.

## Stack & Global Setup

- React 18 + Vite + TypeScript
- TailwindCSS with HSL semantic tokens
- `framer-motion` for animations
- `clsx` + `tailwind-merge` exposed as `cn()` helper in `@/lib/utils`
- Dark theme background: `#000000` (or whatever the page bg is; section uses `bg-background`)
- Body font: **Inter** (loaded globally)
- Icon font: **Material Symbols Outlined** (loaded globally via Google Fonts link, with variable axes FILL, wght, GRAD, opsz)
- Tailwind token: `colors.landing.surface = "rgba(255,255,255,0.10)"`
- Foreground text token resolves to white/near-white via HSL

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
```

## Helper Components (exact code)

### `cn` helper — `@/lib/utils.ts`
```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
```

### `MIcon` — Material Symbols icon (`@/components/landing/icons/MIcon.tsx`)
```tsx
import { CSSProperties } from "react";
interface MIconProps { name: string; size?: number; className?: string; filled?: boolean; weight?: number; style?: CSSProperties; }
export const MIcon = ({ name, size = 16, className = "", filled = false, weight = 400, style }: MIconProps) => (
  <span aria-hidden="true"
    className={`material-symbols-outlined select-none leading-none inline-flex items-center justify-center ${className}`}
    style={{
      fontSize: size, width: size, height: size,
      fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' ${weight}, 'GRAD' 0, 'opsz' ${Math.min(48, Math.max(20, size))}`,
      ...style,
    }}>{name}</span>
);
```

### `FadeUp` — scroll reveal (`@/components/landing/primitives/FadeUp.tsx`)
- Uses `framer-motion` `motion.div` with `initial={{opacity:0, y:24}}`, `whileInView={{opacity:1, y:0}}`, `viewport={{ once:true, amount:0.3 }}`, transition `{ duration:0.6, delay, ease:[0.22,1,0.36,1] }`
- Honors `prefers-reduced-motion` (skip the y translate)
- Props: `delay`, `duration=0.6`, `y=24`, `once=true`, `amount=0.3`, `className`, children

### `SpotlightBorder` — mouse-tracked 1px gradient border (`@/components/landing/effects/SpotlightBorder.tsx`)
- A wrapper with `padding: 1px` whose background is a radial gradient following the cursor.
- Uses CSS masks (`linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)` with `mask-composite: exclude` / `-webkit-mask-composite: xor`) so only the 1px border ring is visible.
- A global `window` `mousemove` listener writes `--spot-x` / `--spot-y` CSS variables on the element via `getBoundingClientRect()`.
- Background style:
```
radial-gradient(${size}px circle at var(--spot-x,-200px) var(--spot-y,-200px), rgba(255,255,255,${intensity}), rgba(255,255,255,0) 60%)
```
- Props: `radius` ('xl'|'2xl'|'3xl'|'full', default '3xl'), `size` (default 300), `intensity` (default 0.35), `as` ('div'|'button'|'section'), `className`, children.
- Renders the parent `Tag` with `relative` + `rounded-*`, and an absolutely-positioned `<span aria-hidden>` filling `inset-0` with the mask style above.

## Section: `CurriculumSection`

File: `src/components/landing/curriculum/CurriculumSection.tsx`

### Data (verbatim)
```ts
const modules = [
  { title: "Module 1", subtitle: "Foundations of AI Design",
    lessons: [
      "Intro to The Future of Design and Building, how it started and where it's going.",
      "AI Design Philosophy / Why and what makes good AI design",
      "What is Claude and 10+ other best AI tools for design",
      "Setting up Claude",
    ]},
  { title: "Module 2", subtitle: "Building with AI",
    lessons: [
      "Creating the Branding/Logo with AI",
      "Pitch Deck Build",
      "Landing Page wireframes",
      "Design a Landing Page with AI",
      "Building High-end web app",
      "GitHub & Vercel Deploy",
      "Creating social media design with AI",
    ]},
  { title: "Module 3", subtitle: "Launch & Growth",
    lessons: [
      "Getting Seen, Launch Videos",
      "Building a portfolio",
      "X (Twitter) Strategy for Designers",
      "Making money selling digital products as a designer",
    ]},
  { title: "Module 4", subtitle: "Making Money as an AI Designer",
    lessons: [
      "Finding Clients + Making Money",
      "How to Make Clients Find You",
      "Selling AI Powered templates",
    ]},
];
```

### Layout & Structure

- `<section>` root: `relative w-full bg-background py-12 sm:py-16`
- Inner container: `mx-auto max-w-[1080px] px-4 sm:px-6`

**Header (centered, mb-12):**
- Pill badge wrapped in `<FadeUp delay={0}>`:
  - `inline-flex items-center gap-2 rounded-full bg-landing-surface border border-white/10 px-3 py-1 text-xs text-foreground/80 backdrop-blur`
  - Inside: `<span class="h-1.5 w-1.5 rounded-full bg-foreground/70" />` then text `"Course Curriculum"`
  - `mb-6`
- Heading in `<FadeUp delay={0.1}>`:
  - `<h2 class="text-3xl sm:text-4xl font-normal tracking-[-0.02em] leading-[1.05] text-foreground">A fully modern curriculum.</h2>`

**Accordion container:**
- `<SpotlightBorder radius="2xl" size={520} intensity={0.5} className="mx-auto w-full p-2 sm:p-3">`
- Inside: a div `rounded-2xl border border-white/10 px-6 sm:px-8` with inline style `backgroundColor: "#161616"`
- Map `modules`, each wrapped in `<FadeUp delay={0.15 * i} className="border-b border-white/10 last:border-b-0">` containing the `ModuleAccordion`.

### `ModuleAccordion` component (inside same file)

State: `openIndex` (number|null) controlled by parent; initial value `0` (Module 1 open on mount). Click toggles: open if closed, close if same index.

**Header button** (`<button>` full width):
- Class: `flex w-full items-center justify-between gap-4 py-6 text-left`
- Left content (div):
  - Eyebrow: `<div class="text-[11px] uppercase tracking-[0.2em] text-foreground/50">{title}</div>`
  - Subtitle: `<div class="mt-2 text-lg sm:text-xl font-normal text-foreground">{subtitle}</div>`
- Right icon container:
  - `flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] transition-transform duration-300`
  - When open: add `rotate-180`
  - Icon: `<MIcon name="expand_more" size={16} className="text-foreground/80" />`

**Collapse body:**
- Wrap in `<AnimatePresence initial={false}>`
- When open, render `motion.div` with:
  - `initial={{ height: 0, opacity: 0 }}`
  - `animate={{ height: "auto", opacity: 1 }}`
  - `exit={{ height: 0, opacity: 0 }}`
  - `transition={{ duration: 0.3, ease: "easeInOut" }}`
  - `className="overflow-hidden"`
- Inside: `<ul class="pb-6">` mapping each lesson:
  - `<li class="flex items-center gap-3 border-t border-white/10 py-4 text-sm text-foreground/85">`
  - Check bullet: `<span class="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.06]"><MIcon name="check" size={12} className="text-foreground" /></span>`
  - Lesson text follows the bullet.

### Behavior Specs
- Module 1 starts open on first render.
- Only one module open at a time. Clicking the open module closes it (openIndex set to null).
- The chevron rotates 180° smoothly (300ms) when its module opens.
- Collapse animates height + opacity over 300ms easeInOut.
- The whole accordion card has a 1px border that picks up a soft white glow following the cursor anywhere on the page (SpotlightBorder, size=520, intensity=0.5).
- Pill, heading, and each module row fade up on scroll (intersection ≥30%, fires once). Modules stagger by 0.15s per index.

### Tailwind config additions
```ts
// tailwind.config.ts theme.extend.colors
landing: { surface: "rgba(255, 255, 255, 0.10)" }
```
Background tokens (`bg-background`, `text-foreground`) come from your HSL CSS variables in `index.css`.

## Full Component Source (drop-in)

```tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { MIcon } from "@/components/landing/icons/MIcon";
import { SpotlightBorder } from "@/components/landing/effects/SpotlightBorder";
import { FadeUp } from "@/components/landing/primitives/FadeUp";

type Module = { title: string; subtitle: string; lessons: string[] };

const modules: Module[] = [ /* ...data above verbatim... */ ];

const ModuleAccordion = ({ module, isOpen, onToggle }:{
  module: Module; isOpen: boolean; onToggle: () => void;
}) => (
  <div>
    <button onClick={onToggle} className="flex w-full items-center justify-between gap-4 py-6 text-left">
      <div>
        <div className="text-[11px] uppercase tracking-[0.2em] text-foreground/50">{module.title}</div>
        <div className="mt-2 text-lg sm:text-xl font-normal text-foreground">{module.subtitle}</div>
      </div>
      <div className={cn("flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] transition-transform duration-300", isOpen && "rotate-180")}>
        <MIcon name="expand_more" size={16} className="text-foreground/80" />
      </div>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
          <ul className="pb-6">
            {module.lessons.map((lesson, i) => (
              <li key={i} className="flex items-center gap-3 border-t border-white/10 py-4 text-sm text-foreground/85">
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.06]">
                  <MIcon name="check" size={12} className="text-foreground" />
                </span>
                {lesson}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const CurriculumSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="relative w-full bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-[1080px] px-4 sm:px-6">
        <div className="mb-12 flex flex-col items-center text-center">
          <FadeUp delay={0}>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-landing-surface border border-white/10 px-3 py-1 text-xs text-foreground/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
              Course Curriculum
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-normal tracking-[-0.02em] leading-[1.05] text-foreground">
              A fully modern curriculum.
            </h2>
          </FadeUp>
        </div>
        <SpotlightBorder radius="2xl" size={520} intensity={0.5} className="mx-auto w-full p-2 sm:p-3">
          <div className="rounded-2xl border border-white/10 px-6 sm:px-8" style={{ backgroundColor: "#161616" }}>
            {modules.map((m, i) => (
              <FadeUp key={m.title} delay={0.15 * i} className="border-b border-white/10 last:border-b-0">
                <ModuleAccordion module={m} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
              </FadeUp>
            ))}
          </div>
        </SpotlightBorder>
      </div>
    </section>
  );
};
```

## Acceptance Checklist
- [ ] Centered pill "● Course Curriculum" + heading "A fully modern curriculum." (Inter, normal weight, tight tracking)
- [ ] Card bg `#161616`, 1px white/10 border, rounded-2xl, mouse-tracked spotlight glow on border (size 520, intensity 0.5)
- [ ] 4 module rows separated by `border-white/10`, last row no border
- [ ] Each row: tiny uppercase eyebrow "Module N" (tracking 0.2em, foreground/50) + subtitle (text-lg sm:text-xl)
- [ ] Right-side 36px circular chevron button, rotates 180° on open (300ms)
- [ ] Module 1 open by default; only one open at a time; click open module to close
- [ ] Lessons list inside collapse: each lesson row separated by top border, 20px circular check bullet, text-sm foreground/85
- [ ] Collapse animates height + opacity 300ms easeInOut
- [ ] Pill, heading, and each module fade up on scroll (once, amount 0.3), modules stagger 0.15s
- [ ] Respects `prefers-reduced-motion`