Create a fullscreen hero landing page section for a design agency called "Atelier" using React, Tailwind CSS, and Lucide React icons. The section must be fully mobile responsive with an animated hamburger mobile menu. Here are the exact specifications:

**Fonts (Google Fonts):**
- "Instrument Serif" (regular + italic) for headings and mobile menu links
- "Inter" (weights 300, 400, 500, 600) as the sans-serif body font

Load them in index.html:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
```

**Tailwind Config** - extend fontFamily:
```js
fontFamily: {
  'instrument-serif': ['"Instrument Serif"', 'serif'],
  sans: ['Inter', 'system-ui', 'sans-serif'],
}
```

**Background:**
A fullscreen looping autoplay muted video covering the entire viewport with `object-cover`. Video URL:
```
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204103_f607742e-09da-4cf5-bb06-4e67b0a531de.mp4
```

**Layout:** The entire section is `w-full h-screen overflow-hidden` with the video absolutely positioned behind a `relative z-10` content layer that is `flex flex-col h-full`.

**Navbar:**
- Horizontal flex bar with padding `px-6 md:px-12 lg:px-16 py-5 md:py-6`
- Left side: Logo text "Atelier" (white, font-semibold, text-lg, tracking-tight, font-sans) followed by desktop nav links (hidden on mobile, shown md+): "Projects", "Expertise", "Studio", "Insights" - styled as `text-white/80 hover:text-white text-sm font-light transition-colors duration-200`
- Right side: "Reach Out" text link (hidden mobile) + "Let's Talk" button (white bg, black text, rounded-full, px-5 py-2, hidden mobile) + hamburger button (shown only on mobile, md:hidden)
- Hamburger: 3 lines (2px height, white, rounded-full) with the middle line shorter (w-4 vs w-6). On open, top/bottom lines rotate 45/-45 degrees and translate, middle fades out. Uses `cubic-bezier(0.76,0,0.24,1)` easing with 500ms duration.

**Mobile Menu Overlay (fixed inset-0 z-50, md:hidden):**
- Backdrop: `bg-black/90 backdrop-blur-xl` fading in with 700ms transition
- Content fades in with same 700ms cubic-bezier easing
- Header: matches navbar layout with logo + close button (X formed by rotated lines)
- Nav links: Stacked vertically, centered, `text-4xl sm:text-5xl font-instrument-serif`, white text, each with `border-b border-white/10`, `py-4`. On open they animate in with staggered delays (150ms + index*80ms), translating from `translate-y-8` to `translate-y-0`. Hover shifts text right with `hover:pl-4`
- Items: "Projects", "Expertise", "Studio", "Insights", "Reach Out"
- Footer: Full-width "Let's Talk" button (white bg, black text, rounded-full, py-4) with 550ms delay fade-in

**Hero Content (centered below navbar):**
- Container: `flex-1 flex flex-col items-center justify-start pt-4 sm:pt-6 md:pt-8 lg:pt-10 px-6 text-center`
- Heading (h1): `font-instrument-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] max-w-5xl`
  - Text content (with line breaks):
    ```
    UX <italic>and</italic> APP
    DESIGN <italic>for</italic> BOLD
    VENTURES
    ```
  - The italic words "and" and "for" use `italic font-instrument-serif` spans
- Subtext (p): `mt-4 md:mt-5 text-white/70 text-sm md:text-base font-light max-w-md leading-relaxed`
  - "We shape digital products that define brands" + line break (hidden sm:block) + "and unlock exponential growth."
- Buttons row: `mt-5 md:mt-6 flex flex-col sm:flex-row items-center gap-4`
  - Primary: "See Cases" with ArrowRight icon (lucide-react), white bg, black text, rounded-full, px-7 py-3, text-sm font-medium. On hover the arrow translates 0.5 right.
  - Secondary: "Watch Reel" with Play icon (lucide-react), transparent with `border border-white/40`, white text, rounded-full, px-7 py-3. On hover: `bg-white/10 border-white/60`

**Global CSS (index.css):**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #root {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
```

**Dependencies:** React, lucide-react (for ArrowRight and Play icons), Tailwind CSS. No other UI libraries.