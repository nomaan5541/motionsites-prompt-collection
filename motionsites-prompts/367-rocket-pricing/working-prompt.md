Build a `PricingSection` React component that matches the spec below exactly.

## Stack & global setup

- React 18 + Vite + TypeScript, TailwindCSS, `framer-motion`, `clsx` + `tailwind-merge` exposed as `cn()` from `@/lib/utils`.
- Dark theme. Page background `#000000`. Font: Inter (`font-inter`). Icons: Google **Material Symbols Outlined** (loaded globally).
- Tailwind config must include semantic HSL tokens plus:
  ```ts
  theme.extend.colors.landing = {
    surface: "rgba(255,255,255,0.10)",
    "surface-hover": "rgba(255,255,255,0.16)",
    border: "rgba(255,255,255,0.10)",
  }
  ```
- `--background` / `--foreground` HSL tokens drive `bg-background` (dark) and `text-foreground` (near-white).

## Helper components (reuse exact behavior)

### `MIcon`
Material Symbols span. Props: `name`, `size=20`, `weight=400`, `fill=0`, `grade=0`, `opticalSize=24`, `className`.
```tsx
<span
  className={cn("material-symbols-outlined select-none leading-none", className)}
  style={{
    fontSize: size,
    fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opticalSize}`,
  }}
>{name}</span>
```

### `FadeUp`
`framer-motion` wrapper: `initial={{opacity:0, y:24}}`, `whileInView={{opacity:1, y:0}}`, `viewport={{once:true, amount:0.3}}`, `transition={{duration:0.6, delay, ease:[0.22,1,0.36,1]}}`. Props: `children`, `delay=0`, `className`.

### `SpotlightBorder`
1px gradient border that follows the cursor via CSS masks.
- Props: `children`, `className`, `radius="2xl"`, `size=520`, `intensity=0.5`.
- Wrapper sets CSS vars `--spot-x`, `--spot-y` (default `-9999px`) updated on `pointermove` relative to element.
- Two stacked layers using `-webkit-mask` + `mask` `linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)` with `mask-composite: exclude` to produce a 1px ring; the ring is painted with `radial-gradient(circle var(--size) at var(--spot-x) var(--spot-y), rgba(255,255,255, var(--intensity)), transparent 60%)`.
- Outer ring: `rounded-2xl border border-white/10`. Inner highlight ring: thinner, brighter on hover. Pointer events on inner content only.

### `PrimaryButton` / `SecondaryButton`
- Both: `inline-flex items-center justify-center rounded-full`, Inter, leading-none, hover text-up-from-below animation (`AnimatedText`).
- PrimaryButton: `bg-white/80 hover:bg-white text-black`. Size `sm` = `h-8 px-4 text-sm`.
- SecondaryButton: `bg-landing-surface hover:bg-landing-surface-hover border border-landing-border text-foreground backdrop-blur-[2.5px] font-medium`. Size `sm` = `h-8 px-4 text-sm`.

## Section structure — `PricingSection`

```tsx
<section id="pricing" className="relative w-full bg-background py-12 sm:py-16">
  <div className="mx-auto max-w-[1080px] px-4 sm:px-6">
    {/* HEADER */}
    <div className="mb-14 flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-2xl">
        <FadeUp>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-landing-surface border border-white/10 px-3 py-1 text-xs text-foreground/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
            Pricing
          </span>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-normal tracking-[-0.02em] leading-[1.05] text-foreground">
            Clear pricing plans
            <br className="hidden sm:block" /> that scale with you.
          </h2>
        </FadeUp>
      </div>
      <FadeUp delay={0.2}>
        <p className="max-w-sm text-sm sm:text-base text-foreground/60">
          One-time payment. Lifetime access. Pick the plan that fits how far
          you want to go.
        </p>
      </FadeUp>
    </div>

    {/* CARDS */}
    <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
      {plans.map(p => <PricingCard key={p.name} plan={p} />)}
    </div>
  </div>
</section>
```

## Plans data (exact)

```ts
type Feature = { text: string; included: boolean };
type Plan = {
  name: string; price: string; originalPrice?: string; description: string;
  features: Feature[]; featured?: boolean; badge?: string; bg: string;
};

const plans: Plan[] = [
  {
    name: "Course",
    price: "159", originalPrice: "497",
    description: "Once. Lifetime. 68% off.",
    bg: "#161616",
    features: [
      { text: "All courses and videos", included: true },
      { text: "All modules. Lifetime access.", included: true },
      { text: "AI Builder", included: true },
      { text: "Unlimited Templates", included: false },
      { text: "Unlimited Motion Videos", included: false },
    ],
  },
  {
    name: "Course + Lovable Templates",
    price: "239", originalPrice: "697",
    description: "Once. Lifetime. Best deal.",
    bg: "#252525",
    features: [
      { text: "All courses and videos", included: true },
      { text: "All modules. Lifetime access.", included: true },
      { text: "AI Builder", included: true },
      { text: "Unlimited Templates", included: true },
      { text: "Unlimited Motion Videos", included: true },
    ],
    featured: true,
    badge: "Best Value",
  },
];
```

## `PricingCard`

```tsx
<SpotlightBorder radius="2xl" size={460} intensity={0.5}
  className="relative h-full p-2 sm:p-3">
  <div
    className="relative flex h-full flex-col rounded-2xl border border-white/10 p-7 sm:p-8"
    style={{ backgroundColor: plan.bg }}
  >
    {plan.badge && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-white px-3 py-1 text-xs font-medium text-black">
        {plan.badge}
      </div>
    )}

    <FadeUp delay={0}>
      <div className="text-[11px] uppercase tracking-[0.2em] text-foreground/60">
        {plan.name}
      </div>
    </FadeUp>
    <div className="mt-3 border-t border-white/10" />

    <FadeUp delay={0.1}>
      <div className="mt-10 flex items-baseline gap-2">
        <span className="text-[2.75rem] leading-none font-normal tracking-tight text-foreground">${plan.price}</span>
        {plan.originalPrice && (
          <span className="text-lg text-foreground/40 line-through">${plan.originalPrice}</span>
        )}
      </div>
    </FadeUp>

    <FadeUp delay={0.2}>
      <p className="mt-4 text-sm leading-relaxed text-foreground/60">{plan.description}</p>
    </FadeUp>

    <FadeUp delay={0.3}>
      <div className="mt-7">
        {plan.featured
          ? <PrimaryButton href="/auth?mode=signup" size="sm">Get Started</PrimaryButton>
          : <SecondaryButton href="/auth?mode=signup" size="sm">Get Started</SecondaryButton>}
      </div>
    </FadeUp>

    <FadeUp delay={0.4}>
      <ul className="mt-7 flex flex-1 flex-col gap-2">
        {plan.features.map((f, i) => (
          <li key={f.text}
            className={cn(
              "flex items-center gap-3 py-4 text-sm",
              i !== 0 && "border-t border-white/10",
              f.included ? "text-foreground/85" : "text-foreground/40"
            )}>
            <span className={cn(
              "flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border",
              f.included ? "border-white/20 bg-white/[0.06]" : "border-white/10 bg-transparent"
            )}>
              {f.included
                ? <MIcon name="check" size={12} className="text-foreground" />
                : <MIcon name="close" size={12} className="text-foreground/50" />}
            </span>
            {f.text}
          </li>
        ))}
      </ul>
    </FadeUp>
  </div>
</SpotlightBorder>
```

## Acceptance checklist

- Section id `pricing`, `bg-background`, vertical padding `py-12 sm:py-16`, max width `1080px`.
- Header: pill ("Pricing" with dot), heading "Clear pricing plans / that scale with you." (line break ≥sm), right-aligned paragraph (max-w-sm) on `lg+`. All three with staggered `FadeUp` delays 0, 0.1, 0.2.
- Cards grid: `max-w-3xl mx-auto`, `gap-6`, 1 col → 2 cols at `md`.
- Card 1 bg `#161616`, card 2 bg `#252525` with "Best Value" pill (`-top-3`, white bg, black text), featured uses `PrimaryButton`, other uses `SecondaryButton`.
- `SpotlightBorder` 1px cursor-following ring on each card (size 460, intensity 0.5).
- Card content order: eyebrow (uppercase, `text-[11px] tracking-[0.2em]`), divider, price row (`$2.75rem` + line-through original `text-foreground/40`), description, button, feature list.
- Feature rows: `py-4`, divided by `border-t border-white/10` except first. Included = 20px circle `border-white/20 bg-white/[0.06]` with check; excluded = transparent circle with close, text `text-foreground/40`.
- Inner card `FadeUp` stagger: 0, 0.1, 0.2, 0.3, 0.4.
- Buttons link to `/auth?mode=signup`.
- All colors via HSL tokens / declared landing surface tokens; never hardcode hex outside the two card backgrounds and `#000000`.