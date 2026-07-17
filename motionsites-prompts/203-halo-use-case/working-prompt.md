**Prompt:**

Build a "Use Cases" section for a fintech stablecoin landing page using **React + TypeScript + Tailwind CSS** with **lucide-react** for icons (use `ArrowRight`). Make it fully mobile responsive.

---

### Font Setup

The page uses **"TT Norms Pro"** loaded via a stylesheet link in `index.html`:

```html
<link href="https://db.onlinewebfonts.com/c/49bf5d043a27b890a040cf393277e2b2?family=TT+Norms+Pro+Regular" rel="stylesheet">
```

Add this `<link>` inside the `<head>` of your `index.html`.

Then in `index.css`, apply it globally:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    font-family: 'TT Norms Pro Regular', ui-sans-serif, system-ui, sans-serif;
  }
  body {
    font-family: 'TT Norms Pro Regular', ui-sans-serif, system-ui, sans-serif;
  }
  * {
    font-family: inherit;
  }
}
```

No local font files are needed. The font is served from the external stylesheet URL above.

---

### Section Component: `UseCasesSection`

**Outer wrapper:** `<section>` with classes `bg-[#F5F5F5] px-6 py-24`.

**Inner container:** `<div>` with classes `max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start`.

---

#### LEFT COLUMN (text-only intro)

Wrapper `<div>` with classes `md:pr-12 md:pt-2`.

Contains three elements stacked vertically:

1. **Eyebrow label:**
   - Element: `<p>`
   - Text: **"USD Halo in Practice"**
   - Classes: `text-black/60 text-sm font-normal mb-2`

2. **Section heading:**
   - Element: `<h2>`
   - Text: **"Use modes"**
   - Classes: `text-black text-5xl md:text-6xl font-medium leading-none mb-6`
   - Inline style: `{ letterSpacing: '-0.04em' }`

3. **Description paragraph:**
   - Element: `<p>`
   - Text: **"USD Halo powers a wide range of modes for builders, companies and treasuries wanting safe and rewarding stablecoin integrations plus more"**
   - Classes: `text-black/60 text-base leading-relaxed max-w-sm`

---

#### RIGHT COLUMN (large video background card)

Wrapper `<div>` with classes `relative rounded-3xl overflow-hidden min-h-[720px]`.

**Background video** (fills entire card as ambient background):
- Element: `<video>`
- Classes: `absolute inset-0 w-full h-full object-cover`
- Attributes: `autoPlay`, `muted`, `loop`, `playsInline`
- `src` URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_183428_ab5e672a-f608-4dcb-b319-f3e040f02e2d.mp4`

**Content overlay** (sits above video):
- Wrapper `<div>` with classes `relative z-10 p-10 md:p-12`

Contains three elements:

1. **Card heading:**
   - Element: `<h3>`
   - Text: **"Commerce"**
   - Classes: `text-black text-4xl md:text-5xl font-medium leading-tight mb-5`
   - Inline style: `{ letterSpacing: '-0.03em' }`

2. **Card description:**
   - Element: `<p>`
   - Text: **"Lift customer retention by offering USD Halo, a trusted dollar-backed stablecoin with strong yields, letting your patrons earn with zero effort on your platform."**
   - Classes: `text-black/70 text-base leading-relaxed max-w-md mb-8`

3. **"Know more" button:**
   - Element: `<button>`
   - Classes: `inline-flex items-center gap-3 text-black text-base font-medium group`
   - Contains (in this exact order):
     - **Icon circle first:** `<span>` with classes `w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center group-hover:bg-white transition-colors`, containing `<ArrowRight className="w-4 h-4 text-black" />` from lucide-react.
     - **Text label second:** the plain text **"Know more"** (placed after the span, so icon is on the left).

---

### Key Design Specifications

- **Page background:** `#F5F5F5` (light warm gray).
- **Video card:** Video fills the entire rounded card via `object-cover` and loops silently. There is **no gradient overlay, no dark scrim, no blur layer** -- text sits directly on the video.
- **Card corner radius:** `rounded-3xl` (24px).
- **Card minimum height:** `min-h-[720px]`.
- **Typography system:**
  - All text uses inherited "TT Norms Pro Regular" from the web font link.
  - Headings: `font-medium` with tight negative letter-spacing (`-0.04em` for section title, `-0.03em` for card title).
  - Body text: default weight (400), `text-base` size.
  - Color hierarchy: `text-black` for headings, `text-black/70` for card body text, `text-black/60` for muted/secondary text.
- **"Know more" button:** Frosted-glass circle icon (`bg-white/80 backdrop-blur`) transitions to solid white on hover via Tailwind `group`/`group-hover`. Icon circle comes before text label.
- **Layout:** Two-column grid on `md:` breakpoint. Stacks to single column on mobile. Left column has `md:pr-12` and `md:pt-2` for breathing room.
- **Spacing:** `gap-8` between columns. Section padding `py-24` vertical, `px-6` horizontal.

---

### Complete JSX Reference

```tsx
import { ArrowRight } from 'lucide-react';

function UseCasesSection() {
  return (
    <section className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left column */}
        <div className="md:pr-12 md:pt-2">
          <p className="text-black/60 text-sm font-normal mb-2">USD Halo in Practice</p>
          <h2 className="text-black text-5xl md:text-6xl font-medium leading-none mb-6" style={{ letterSpacing: '-0.04em' }}>
            Use modes
          </h2>
          <p className="text-black/60 text-base leading-relaxed max-w-sm">
            USD Halo powers a wide range of modes for builders, companies and treasuries wanting safe and rewarding stablecoin integrations plus more
          </p>
        </div>

        {/* Right column -- big card with bg video */}
        <div className="relative rounded-3xl overflow-hidden min-h-[720px]">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_183428_ab5e672a-f608-4dcb-b319-f3e040f02e2d.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="relative z-10 p-10 md:p-12">
            <h3 className="text-black text-4xl md:text-5xl font-medium leading-tight mb-5" style={{ letterSpacing: '-0.03em' }}>
              Commerce
            </h3>
            <p className="text-black/70 text-base leading-relaxed max-w-md mb-8">
              Lift customer retention by offering USD Halo, a trusted dollar-backed stablecoin with strong yields, letting your patrons earn with zero effort on your platform.
            </p>
            <button className="inline-flex items-center gap-3 text-black text-base font-medium group">
              <span className="w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center group-hover:bg-white transition-colors">
                <ArrowRight className="w-4 h-4 text-black" />
              </span>
              Know more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---