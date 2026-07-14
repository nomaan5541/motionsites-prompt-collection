Build a full-screen hero section using React + Tailwind CSS + Vite. It must be fully mobile-responsive.

**Fonts:**
Load these Google Fonts in `index.html`:
```
Inter (weights: 400, 500, 600) — used as the body/primary font
Instrument Serif (italic) — used for the italic accent word in the heading
```
Google Fonts link: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap`

**CSS (index.css):**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.font-serif-italic {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
}
```

**Layout structure (single full-viewport section):**

1. **Background video** — absolute positioned, covers the entire viewport using `object-cover`. Autoplays, muted, loops, playsInline.
   - Video URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260624_052448_43259007-b7c4-4269-90bd-e3ab14e80075.mp4`

2. **Navbar** — absolute top, z-10, flex row with `justify-between`, padded `px-4 sm:px-6 lg:px-8 py-4`. Contains two pill-shaped groups:

   - **Left pill** (logo + nav links): `bg-black/40 backdrop-blur-xl rounded-full px-5 py-2.5 border border-white/10`. Contains:
     - A custom SVG logo (20x20, white fill) with this path: `M 256 192 C 256 227.346 227.346 256 192 256 L 0 256 L 0 64 C 0 28.654 28.654 0 64 0 L 256 0 Z M 128 192 L 192 192 L 192 128 L 128 128 L 128 64 L 64 64 L 64 128 L 128 128 Z`
     - Nav links (hidden on mobile, `hidden sm:flex`): "Work", "Gallery", "Plans", "Story" — white text-sm font-medium with hover:text-white/80 transition

   - **Right pill** (buttons): `bg-black/40 backdrop-blur-xl rounded-full px-2 py-1.5 border border-white/10`. Contains:
     - Ghost button: "Get Free" — white text, rounded-full, hover:bg-white/10
     - Solid button: "Get a quote" — bg-white text-black, rounded-full, hover:bg-white/90

3. **Bottom gradient overlay** — absolutely positioned at bottom, `h-[60%]`, z-[5], pointer-events-none. Gradient: `bg-gradient-to-t from-black/80 via-black/40 to-transparent`. This provides text contrast.

4. **Bottom content area** — absolute bottom, z-10, padded `px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16`. Flex layout: column on mobile, row on lg+ with items-end and justify-between.

   - **Left column** (max-w-3xl):
     - Badge pill: `bg-black/40 backdrop-blur-xl rounded-full px-3 py-1 mb-4 border border-white/10` containing: "Luminara * Creative Showcase" (the asterisk is a separate span in text-white/60)
     - Heading (h1): `text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.05] tracking-tight text-white`
       - Text: "Make ordinary ideas into captivating "
       - Last word "narratives." is wrapped in a span with class `font-serif-italic font-normal` (renders in Instrument Serif italic)

   - **Right column** (lg:max-w-sm lg:text-right):
     - Paragraph: "Design your ideal online presence, grow your client base while crafting pieces with love and soul." — `text-white/80 text-sm sm:text-base leading-relaxed`

**Key design details:**
- All pill elements use `bg-black/40 backdrop-blur-xl border border-white/10 rounded-full`
- The gradient overlay covers the bottom 60% of the viewport and fades from solid black/80 upward to transparent
- The section is `relative w-full h-screen overflow-hidden`
- No other pages or routing needed — single section only
- Tailwind config is default with no extensions