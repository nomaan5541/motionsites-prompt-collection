Build a dark-themed FAQ section for a React 18 + Vite + TypeScript app using TailwindCSS, framer-motion, and Radix UI Accordion. Match these specs exactly.

## Stack & Global Setup

- React 18, Vite, TypeScript, TailwindCSS
- Dependencies: `framer-motion`, `@radix-ui/react-accordion`, `clsx`, `tailwind-merge`
- `cn()` helper: `twMerge(clsx(inputs))` exported from `@/lib/utils`
- Dark theme background `#000000`, font `Inter`, Material Symbols Outlined for icons
- Tailwind `theme.extend.colors`:
  - `landing.surface: "rgba(255,255,255,0.10)"`
  - `landing.surface-hover: "rgba(255,255,255,0.16)"`
  - `border: "rgba(255,255,255,0.10)"`
  - `foreground: "hsl(0 0% 100%)"` (semantic; use `text-foreground`, `text-foreground/60`, `text-foreground/70`, `text-foreground/80`)
  - `background: "#000000"` (semantic)

## Helper Components

### MIcon (Material Symbols Outlined)
```tsx
type Props = { name: string; size?: number; className?: string; fill?: 0|1; weight?: number; grade?: number; opsz?: number };
export const MIcon = ({ name, size=20, className, fill=0, weight=400, grade=0, opsz=24 }: Props) => (
  <span
    className={cn("material-symbols-outlined leading-none", className)}
    style={{ fontSize: size, fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opsz}` }}
  >{name}</span>
);
```
Include in `index.html`:
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
```

### FadeUp (framer-motion scroll reveal)
- `motion.div`, `initial={{opacity:0, y:24}}`, `whileInView={{opacity:1, y:0}}`, `viewport={{once:true, amount:0.3}}`, `transition={{duration:0.6, delay, ease:[0.22,1,0.36,1]}}`. Honors `useReducedMotion`.

### SpotlightBorder (cursor-tracked 1px gradient ring)
- Wrapper `relative` with `rounded-{radius}` (xl/2xl/3xl/full).
- Inside, an absolute-inset `<span>` with style:
```ts
{
  background: `radial-gradient(${size}px circle at var(--spot-x,-200px) var(--spot-y,-200px), rgba(255,255,255,${intensity}), rgba(255,255,255,0) 60%)`,
  padding: "1px",
  WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  WebkitMaskComposite: "xor",
  maskComposite: "exclude",
}
```
- Global mousemove listener writes `--spot-x` / `--spot-y` on the element (relative to its bounding rect).
- Polymorphic `as`: div | button | section. Export both the component and `spotlightMaskStyle(size, intensity)` helper for reuse inline.

### Radix Accordion wrapper (shadcn-style)
`Accordion`, `AccordionItem` (`border-b` default), `AccordionTrigger` (flex justify-between, hides built-in chevron when class includes `[&>svg]:hidden`), `AccordionContent` (with `data-[state=open]:animate-accordion-down`, `data-[state=closed]:animate-accordion-up`). Use standard shadcn accordion file.

Tailwind keyframes (in config):
```js
keyframes: {
  "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
  "accordion-up":   { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
},
animation: { "accordion-down": "accordion-down 0.2s ease-out", "accordion-up": "accordion-up 0.2s ease-out" }
```

## Data

```ts
type CategoryKey = "general" | "ai" | "integrations";
const categories = [
  { key: "general", label: "General" },
  { key: "ai", label: "AI & Capabilities" },
  { key: "integrations", label: "Integrations & Security" },
];
const faqs: Record<CategoryKey, {q:string; a:string}[]> = {
  general: [
    { q: "What is UI Rocket?", a: "UI Rocket is a learning platform for designers who want to master AI-powered design workflows and ship production-ready websites faster." },
    { q: "Who is this for?", a: "Designers, founders, and creators who want to level up their AI design skills and build real, shippable products." },
    { q: "Do I need prior design experience?", a: "No. The curriculum starts from fundamentals and progressively builds toward advanced AI-driven workflows." },
    { q: "How long does it take?", a: "Most members make meaningful progress within a few weeks of consistent practice." },
    { q: "Is there a community?", a: "Yes. You get access to a private community of designers and founders building with AI." },
  ],
  ai: [
    { q: "Which AI tools do you cover?", a: "We focus on Lovable, Figma AI, image generation models, and the workflows that tie them together into a real design process." },
    { q: "Will AI replace designers?", a: "No. Designers who use AI fluently will replace those who don't. The course teaches you to be the former." },
    { q: "Do I need API keys?", a: "No. Everything you need is included — no separate API keys, subscriptions, or hidden setup." },
    { q: "Can I use these skills with any tool?", a: "Yes. The principles transfer across tools — you'll learn frameworks, not button-clicks." },
    { q: "How often is the content updated?", a: "Regularly. As AI tools evolve, we update the curriculum so you're always learning what's current." },
  ],
  integrations: [
    { q: "Which tools does UI Rocket integrate with?", a: "UI Rocket works alongside Lovable, Figma, and the most common modern design and dev tools." },
    { q: "Is my data secure?", a: "Yes. Your data is encrypted in transit and at rest, and never shared with third parties." },
    { q: "Is my data used to train AI models?", a: "No. Your work and account data are never used to train AI models." },
    { q: "Who can access our workspace data?", a: "Only members you explicitly invite. Access is fully under your control." },
    { q: "Where is my data stored?", a: "On secure cloud infrastructure with industry-standard compliance and backups." },
  ],
};
```

## Section Layout (`FaqSection.tsx`)

- `<section id="faq" className="relative w-full bg-background py-12 sm:py-16">`
- Inner container: `mx-auto max-w-[1080px] px-4 sm:px-6`

### Header (top, two-column on lg)
- Flex column on mobile, `lg:flex-row lg:items-end lg:justify-between`, `mb-14`, `gap-10`.
- Left block (`max-w-2xl`):
  - Pill (FadeUp delay 1): `inline-flex items-center gap-2 rounded-full bg-landing-surface border border-white/10 px-3 py-1 text-xs text-foreground/80 backdrop-blur`, with leading `1.5×1.5` dot `bg-foreground/70`, label "FAQ".
  - Heading (FadeUp delay 0.1): `text-3xl sm:text-4xl font-normal tracking-[-0.02em] leading-[1.05] text-foreground` — "Answers to the questions" `<br className="hidden sm:block"/>` " that come up most."
- Right paragraph (FadeUp delay 0.2): `max-w-sm text-sm sm:text-base text-foreground/60` — "Learn how UI Rocket works, what it covers, how the workflow flows, and what you can expect day to day."

### Body grid
`grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-stretch`

#### Left column (sticky category list + "Got Questions" card)
- Outer `flex flex-col gap-4 lg:h-full`.
- Top wrapper `lg:flex-1` containing a `SpotlightBorder` (radius `2xl`, size 280) with classes `flex flex-col p-2 sm:p-3 lg:sticky lg:top-24`.
  - Inside, map `categories`. Each item is itself a `SpotlightBorder as="button" radius="full" size={200} intensity={0.4}` with classes:
    - Base: `w-full text-center px-5 py-3 text-sm transition-colors`
    - Active: `bg-landing-surface border border-white/10 text-foreground`
    - Inactive: `border border-transparent text-foreground/60 hover:text-foreground`
  - `onClick` sets `active` state (`useState<CategoryKey>("general")`).
- Bottom "Got Questions?" card: `SpotlightBorder` radius `2xl` size 360 with `mt-8 lg:mt-0 p-2 sm:p-3`, containing nested `SpotlightBorder` radius `2xl` size 260 intensity 0.4 with `border border-white/10 bg-landing-surface p-6`:
  - `<h3 className="text-lg font-semibold text-foreground">Got Questions?</h3>`
  - `<p className="mt-2 text-sm text-foreground/60 leading-relaxed">Need help with something? Our team is here to make things easy. Don't hesitate to reach out.</p>`
  - `<a href="mailto:hello@uirocket.com" className="mt-6 inline-flex items-center gap-1 text-sm text-foreground hover:text-foreground/80">Email us <span aria-hidden>→</span></a>`

#### Right column (accordion)
- Outer `SpotlightBorder radius="2xl" size={360} className="p-2 sm:p-3"`.
- Inside: `<Accordion type="single" collapsible className="flex flex-col gap-3">`.
- Use `itemRefs = useRef<Array<HTMLDivElement|null>>([])` and a `useEffect` that adds a `mousemove` listener writing `--spot-x`/`--spot-y` on each item's bounding rect (so each card has its own spotlight).
- Map `faqs[active]`. Each entry wrapped in `<FadeUp delay={0.15 * idx} key={`${active}-${idx}`}>`.
- `AccordionItem`:
  - `value={`${active}-${idx}`}`, ref into `itemRefs`.
  - Classes: `relative rounded-2xl border border-white/10 bg-landing-surface px-6 [&[data-state=open]]:bg-landing-surface-hover`
  - Inside, an absolute-inset `<span aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl" style={spotlightMaskStyle(260, 0.4)} />` to render the per-card spotlight ring.
- `AccordionTrigger`: `py-7 text-left text-sm sm:text-base font-medium text-foreground hover:no-underline [&>svg]:hidden`
  - Children: `<span className="flex-1 pr-4">{q}</span>` and a 28px circular icon button: `flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-foreground/70 transition-transform duration-200 group-data-[state=open]:rotate-180`, containing `<MIcon name="expand_more" size={16} />`.
- `AccordionContent`: `pb-7 text-sm text-foreground/60 leading-relaxed` — render `{a}`.

## Behavior

- Switching category re-keys the AccordionItem `value` prefix so all items collapse when category changes.
- Only one item open at a time (`type="single" collapsible`).
- Spotlight ring follows mouse on the outer wrapper containers AND on every individual accordion item independently.
- All entrance animations use FadeUp; reduced-motion disables translate but keeps opacity.

## Acceptance Checklist

- Dark `#000000` background, Inter text, max width 1080px.
- Header: small pill with dot + "FAQ", large heading "Answers to the questions / that come up most.", right-side paragraph aligned to bottom on lg.
- Two-column body: left 280px sticky category list with pill buttons (active = filled surface, inactive = transparent), plus "Got Questions?" card with email CTA arrow.
- Right column: cards stacked with `gap-3`, rounded-2xl, surface fill, open state slightly brighter, 28px circular chevron button rotating 180° on open, content fades/animates via Radix accordion keyframes.
- 1px spotlight ring follows cursor on every SpotlightBorder wrapper and every accordion card.
- Scroll-in FadeUp stagger on header items and on each FAQ row (`0.15 * idx`).
- Switching categories collapses any open item and swaps the question list.