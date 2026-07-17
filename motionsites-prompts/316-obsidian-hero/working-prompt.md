Create a single-page architecture / design studio landing page using React, Vite, TypeScript, and Tailwind CSS. The page is a fullscreen hero with a looping background video, overlaid navigation, headline, and two staggered project cards.

---

**TECH STACK:**
- React 18 + TypeScript + Vite
- Tailwind CSS 3
- lucide-react (icons: Grid3X3, Menu, X)
- No other dependencies

---

**FONT:**
- Load "Lexend" from `https://db.onlinewebfonts.com/c/42dbf00de1681d38477679d3eadad56a?family=Lexend` via a `<link>` in index.html
- In tailwind.config.js, extend fontFamily with: `vilsuve: ['Lexend', 'sans-serif']`

---

**LOGO (inline SVG, white, 24x24):**
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
  <path d="M 156 0 C 211.228 0 256 44.772 256 100 L 256 256 L 100 256 C 44.772 256 0 211.228 0 156 L 0 0 Z M 80 80 C 80 133.019 122.981 176 176 176 C 176 122.981 133.019 80 80 80 Z" />
</svg>
```
Use this as a React component `<Logo className="w-6 h-6 text-white" />` (uses `fill="currentColor"`).

---

**BACKGROUND VIDEO:**
- URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260624_054830_07627566-fd88-4b82-9ee8-b5d78b1c4f36.mp4`
- Attributes: autoPlay, muted, loop, playsInline
- Positioned: absolute inset-0, w-full h-full, object-cover
- Parent container: relative h-screen w-full overflow-hidden bg-black

---

**LAYOUT STRUCTURE (all within the fullscreen container):**

1. **Navigation bar** (z-10, relative):
   - Left: Logo + desktop nav links ("Work" active/white, "Studio" and "Connect" white/70 with hover:white)
   - Right: "Enter" text (desktop only) + hamburger Menu icon
   - Padding: px-5 sm:px-6 md:px-12, py-5 md:py-6
   - Desktop nav links hidden on mobile; hamburger shows on mobile (md:hidden), also visible on desktop

2. **Main content area** (flex-1, relative, same horizontal padding):
   - **Hero text block** (top-left, pt-4 sm:pt-8 md:pt-16, max-w-lg):
     - H1: "Shape your\nbold spaces" - font-vilsuve, text-3xl sm:text-4xl md:text-6xl lg:text-7xl, text-white, leading-[0.95], tracking-tight
     - Paragraph: "Designing bold forms, sculpting purposeful structures, and building a timeless legacy for all." - text-white/60, text-xs sm:text-sm md:text-base, max-w-xs, leading-relaxed
     - Button: "Our Projects" with Grid3X3 icon - border border-white/30, rounded-full, px-5 sm:px-6 py-2.5 sm:py-3, hover:bg-white/10

   - **Two staggered cards** (absolute bottom-right):
     - Container: absolute bottom-6 sm:bottom-8 md:bottom-12 right-5 sm:right-6 md:right-12
     - Grid: grid grid-cols-2 gap-3 sm:gap-4 md:gap-5
     - Card 1: col-start-1 row-start-1, self-end, w-36 sm:w-44 md:w-52 lg:w-60
       - Image: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260624_052633_1cc62234-04fe-4fb5-905e-66254dd3c5db.png&w=1280&q=85`
       - Label: "CRAFT" (uppercase, text-white/60, text-[10px] sm:text-xs)
       - Title: "Spaces shaped with intention." (text-sm sm:text-base md:text-lg, font-semibold)
       - Grid3X3 icon bottom-right (text-white/70)
     - Card 2: col-start-2 row-start-2, w-36 sm:w-44 md:w-52 lg:w-60
       - Image: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260624_052653_54120660-1330-4f38-92ab-a6ba7ac15397.png&w=1280&q=85`
       - Label: "ARCVAULT" (same style)
       - Title: "Form in Stone" (text-base sm:text-xl md:text-2xl, font-semibold)
       - Grid3X3 icon bottom-right
     - Both cards: rounded-xl sm:rounded-2xl, aspect-square, gradient overlay (bg-gradient-to-t from-black/60 via-black/20 to-transparent), content justified to bottom

   - **Floating labels** (lg only, absolute positioned on background):
     - "Concrete Atrium / 282 M" at top-[25%] right-[30%] - small white dot + text-xs
     - "Brutalist Arc / 67%" at top-[45%] right-[15%] - same style

   - **Scroll indicator** (absolute bottom-8 left-1/2, hidden md:flex):
     - Text "Scroll" - text-white/40, text-[10px], uppercase, tracking-[0.3em], vertical writing mode (writingMode: 'vertical-rl'), rotated 180deg

3. **Mobile menu overlay** (fixed inset-0 z-50):
   - Toggled by `menuOpen` state
   - Backdrop: bg-black/90 backdrop-blur-xl, opacity transition 500ms
   - Content slides in from top (-translate-y-8 to translate-y-0), 500ms ease-out
   - Header: Logo left, X close button right
   - Links: "Work", "Studio", "Connect", "Enter" - text-4xl, font-vilsuve, font-light, staggered entrance (each link delayed 75ms apart starting at 150ms), border-b border-white/10
   - Footer: "Crafting bold spaces for an intentional world." - text-white/40 text-xs, delayed 450ms
   - pointer-events-none when closed, pointer-events-auto when open

---

**CSS (index.css):**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

No additional custom CSS needed.

---

**KEY DESIGN DETAILS:**
- Entire page is black with the video covering the background
- All text is white with various opacity levels (white, white/70, white/60, white/50, white/40)
- Fully responsive: mobile-first breakpoints at sm, md, lg
- Cards use a CSS grid stagger pattern (not absolute positioning relative to each other)
- Transitions on hover states and menu animations
- No scrolling on the page (h-screen overflow-hidden)