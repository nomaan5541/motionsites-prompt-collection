Build a "Features Chess" section for a React + Vite + Tailwind CSS project. This is a single section component with an alternating two-row layout (text left / image right, then image left / text right) on a solid black background with white text and liquid glassmorphism effects.

---

### FONTS (import in index.css or HTML head)

```
https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Barlow:wght@300;400;500;600&display=swap
```

- Headings: `Instrument Serif` italic -- Tailwind class `font-heading`
- Body: `Barlow` -- Tailwind class `font-body`

Add to `tailwind.config.ts` under `theme.extend.fontFamily`:
```js
heading: ["'Instrument Serif'", "serif"],
body: ["'Barlow'", "sans-serif"],
```

Base styles in `index.css`:
```css
body {
  font-family: 'Barlow', sans-serif;
  background: #000;
  color: #fff;
}
h1, h2, h3 {
  font-family: 'Instrument Serif', serif;
}
```

---

### LIQUID GLASS CSS (add to index.css inside `@layer components`)

```css
@layer components {
  .liquid-glass {
    background: rgba(255, 255, 255, 0.01);
    background-blend-mode: luminosity;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: none;
    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
  }

  .liquid-glass::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1.4px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.45) 0%,
      rgba(255, 255, 255, 0.15) 20%,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0) 60%,
      rgba(255, 255, 255, 0.15) 80%,
      rgba(255, 255, 255, 0.45) 100%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  .liquid-glass-strong {
    background: rgba(255, 255, 255, 0.01);
    background-blend-mode: luminosity;
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    border: none;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.05),
      inset 0 1px 1px rgba(255, 255, 255, 0.15);
    position: relative;
    overflow: hidden;
  }

  .liquid-glass-strong::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1.4px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0) 60%,
      rgba(255, 255, 255, 0.2) 80%,
      rgba(255, 255, 255, 0.5) 100%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
}
```

---

### ICON DEPENDENCY

Uses `ArrowUpRight` from `lucide-react`:
```
npm install lucide-react
```

---

### IMAGE ASSETS (External GIF URLs)

Two animated GIFs are used. These are external URLs -- do NOT import them, use them directly as `src` strings:

- **Row 1 (right side)**: `https://motionsites.ai/assets/hero-grow-ai-preview-BlQ8tAQ-.gif`
  Shows an AI-designed website preview with growth/analytics theme
- **Row 2 (left side)**: `https://motionsites.ai/assets/hero-glassmorphism-agency-preview-CGqeRoqP.gif`
  Shows a glassmorphism agency website preview

---

### EXACT COMPONENT CODE

```tsx
import { ArrowUpRight } from "lucide-react";

const FEATURE_1_GIF = "https://motionsites.ai/assets/hero-grow-ai-preview-BlQ8tAQ-.gif";
const FEATURE_2_GIF = "https://motionsites.ai/assets/hero-glassmorphism-agency-preview-CGqeRoqP.gif";

const FeaturesChess = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24">
      {/* Section header */}
      <div className="text-center mb-20">
        <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
          Capabilities
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          Pro features. Zero complexity.
        </h2>
      </div>

      {/* Row 1: Content left, Image right */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24">
        <div className="flex-1 space-y-6">
          <h3 className="text-3xl md:text-4xl font-heading italic text-white leading-[0.9] tracking-tight">
            Designed to convert. Built to perform.
          </h3>
          <p className="text-white/70 font-body font-light leading-relaxed text-sm md:text-base max-w-lg">
            Every pixel is intentional. Our AI studies what works across thousands of top sites—then builds yours to outperform them all.
          </p>
          <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white flex items-center gap-2 hover:bg-white/10 transition-all font-body">
            Learn more
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
        <div className="flex-1">
          <div className="liquid-glass rounded-2xl overflow-hidden">
            <img src={FEATURE_1_GIF} alt="AI-designed website preview" className="w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Row 2: Image left, Content right */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
        <div className="flex-1 space-y-6">
          <h3 className="text-3xl md:text-4xl font-heading italic text-white leading-[0.9] tracking-tight">
            It gets smarter. Automatically.
          </h3>
          <p className="text-white/70 font-body font-light leading-relaxed text-sm md:text-base max-w-lg">
            Your site evolves on its own. AI monitors every click, scroll, and conversion—then optimizes in real time. No manual updates. Ever.
          </p>
          <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white flex items-center gap-2 hover:bg-white/10 transition-all font-body">
            See how it works
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
        <div className="flex-1">
          <div className="liquid-glass rounded-2xl overflow-hidden">
            <img src={FEATURE_2_GIF} alt="Adaptive AI system" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesChess;
```

---

### LAYOUT & RESPONSIVE BEHAVIOR

- **Section padding**: `py-24 px-6 md:px-16 lg:px-24`
- **Header bottom margin**: `mb-20`
- **Row gap**: `gap-12 lg:gap-20`
- **Row 1 spacing from Row 2**: `mb-24`
- **Mobile**: Both rows stack vertically (`flex-col`), content always appears above image
- **Desktop (lg+)**: Row 1 = text left / image right (`lg:flex-row`). Row 2 = text right / image left (`lg:flex-row-reverse`). Each side is `flex-1` (50/50 split).

---

### BADGE PATTERN ("Capabilities" pill)

`liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4`

Floating pill with barely-visible glass background and thin gradient border from `::before`.

---

### BUTTON PATTERN (CTA buttons)

`liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white flex items-center gap-2 hover:bg-white/10 transition-all font-body`

Strong glass variant (50px backdrop blur). `ArrowUpRight` icon at `h-4 w-4`. Hover adds subtle white overlay.

---

### IMAGE CONTAINER PATTERN

`liquid-glass rounded-2xl overflow-hidden` wrapping an `<img>` with `w-full h-auto`. The liquid-glass gives the gradient border treatment; `rounded-2xl overflow-hidden` clips corners.

---

### TYPOGRAPHY DETAILS

| Element | Classes |
|---|---|
| Section badge | `text-xs font-medium text-white font-body` |
| Section heading | `text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]` |
| Row heading | `text-3xl md:text-4xl font-heading italic text-white leading-[0.9] tracking-tight` |
| Body text | `text-white/70 font-body font-light leading-relaxed text-sm md:text-base max-w-lg` |
| Button text | `text-sm font-medium text-white font-body` |

---

### EXACT TEXT CONTENT

**Section badge**: "Capabilities"
**Section heading**: "Pro features. Zero complexity."

**Row 1 heading**: "Designed to convert. Built to perform."
**Row 1 body**: "Every pixel is intentional. Our AI studies what works across thousands of top sites--then builds yours to outperform them all."
**Row 1 button**: "Learn more"

**Row 2 heading**: "It gets smarter. Automatically."
**Row 2 body**: "Your site evolves on its own. AI monitors every click, scroll, and conversion--then optimizes in real time. No manual updates. Ever."
**Row 2 button**: "See how it works"

---

### PARENT CONTEXT

This section sits on a `bg-black` parent container. No video backgrounds. No animations beyond button hover transitions. The em dash in "top sites--then" is a real `—` (U+2014) character, not two hyphens. The black background is essential for the liquid glass effect to render correctly.