**Prompt:**

Create a "Services" section using React, Tailwind CSS, and **framer-motion**. The site uses **Google Font "Kanit"** (weights 300-900) and a dark page background `#0C0C0C`.

**Section layout:**
- This section sits on top of the dark background below it, using a white card-like appearance with rounded top corners
- `display: flex, flex-direction: column`
- Padding: `px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32`
- Top border radius: `rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]`
- Background color: `#FFFFFF` (white)

**Heading "Services":**
- `font-black uppercase leading-none tracking-tight text-center w-full`
- Font size: `clamp(3rem, 12vw, 160px)`
- Color: `#0C0C0C`
- Margin bottom: `mb-16 sm:mb-20 md:mb-28`
- Fade-in animation: `delay: 0, y: 40`

**Services list (5 items, vertically stacked, centered, max-w-5xl):**

Each service has a number, name, and description. The services are:

```
01 — 3D Modeling
"Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations."

02 — Rendering
"High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life."

03 — Motion Design
"Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences."

04 — Branding
"Crafting cohesive visual identities — from logos to full brand systems — that communicate a clear and memorable presence."

05 — Web Design
"Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience."
```

**Service item layout:**

Each item is wrapped in a FadeIn with staggered delay (`i * 0.1`) and `y: 30`.

- **Divider line** between items (not above the first): `border-top: 1px solid rgba(12, 12, 12, 0.15)`, full width
- **Row layout**: `display: flex, align-items: start, gap-6 sm:gap-8 md:gap-10, py-8 sm:py-10 md:py-12, w-full`
- **Left side -- Number**:
  - `font-black uppercase leading-none flex-shrink-0`
  - Font size: `clamp(3rem, 10vw, 140px)`
  - Color: `#0C0C0C`
  - Displays the zero-padded number (01, 02, etc.)
- **Right side -- Name + Description** (flex column, `gap-2 sm:gap-4 md:gap-5, pt-1`):
  - **Name**: `font-medium uppercase`, size `clamp(1rem, 2.2vw, 2.1rem)`, color `#0C0C0C`
  - **Description**: `font-light leading-relaxed max-w-2xl`, size `clamp(0.85rem, 1.6vw, 1.25rem)`, color `#0C0C0C` with `opacity: 0.6`

**FadeIn component (reusable, framer-motion):**
- Props: `delay`, `duration` (default 0.7), `x` (default 0), `y` (default 30), `className`, `style`, `as` (HTML element tag, default `div`)
- Uses `motion.create()` to make any HTML element animatable
- Variants: `hidden` state sets `opacity: 0` + the x/y offsets; `visible` animates to `opacity: 1, x: 0, y: 0`
- Easing: cubic bezier `[0.25, 0.1, 0.25, 1]`
- Viewport trigger: `{ once: true, margin: "50px", amount: 0 }`

**Font (loaded in HTML head):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
```

CSS base: `font-family: 'Kanit', sans-serif` on html/body.

---