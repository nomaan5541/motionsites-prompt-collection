Build a full-viewport hero section with a dark, cinematic aesthetic. Here are the exact specifications:

**Video Background:**
- Full-screen looping background video, muted, autoplaying, with `playsInline`
- Video URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260525_052706_d2e390fd-1846-4fe7-a4d8-8d2f1c875358.mp4`
- Positioned `absolute inset-0`, `object-cover`, `z-0`

**Font:**
- Google Fonts: `Inter` (weights 400, 500, 600, 700) imported via `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap')`
- Applied globally with `-webkit-font-smoothing: antialiased` and `-moz-osx-font-smoothing: grayscale`

**Container:**
- `relative w-full h-screen overflow-hidden bg-black` with `font-family: 'Inter, sans-serif'`

**Navbar (absolute, z-50, top):**
- Positioned `absolute top-0 left-0 right-0 z-50`, flex row, `items-center justify-between`, padding `px-5 py-4 lg:px-10 lg:py-6`
- **Logo:** Text "axentra" in white, `text-xl font-semibold tracking-tight`, font Inter
- **Desktop nav links** (hidden on mobile, `hidden lg:flex`): Items are "Platform", "How it works", "AI Defense", "Connections", "Insights" inside a pill-shaped container with a custom `liquid-glass` effect (glassmorphism). Each link: `text-white/80 hover:text-white text-sm px-4 py-1.5 rounded-full hover:bg-white/10`
- **CTA button** (desktop only, `hidden lg:block`): "Join the wait", white background (`#ffffff`), black text, `text-sm font-medium px-5 py-2 rounded-full`, hover opacity 0.8
- **Hamburger** (mobile only, `lg:hidden`): Animated toggle between `Menu` and `X` icons from lucide-react (size 20, strokeWidth 1.5, white). Uses cubic-bezier(0.23,1,0.32,1) easing with rotation and scale animations for the icon swap. Background changes to `#1a1a1a` when open.

**Liquid Glass CSS effect** (for the desktop nav pill):
```css
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
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
```

**Mobile Menu (slide-down panel):**
- Backdrop: fixed `inset-0 z-30`, blur(12px), `rgba(0,0,0,0.6)` when open, click-to-close
- Panel: fixed `top-0 left-0 right-0 z-40`, max-height animates from 0 to 420px with `cubic-bezier(0.23, 1, 0.32, 1)` over 0.5s
- Panel background: `rgba(8,8,8,0.97)`, bottom border `1px solid rgba(255,255,255,0.08)`, padding `pt-20 pb-6 px-5`
- Each nav item: `text-white/70 hover:text-white text-base py-3 px-3 rounded-xl hover:bg-white/5`, staggered fade-in animation (each item delayed by `i * 50 + 80`ms), translateY(-8px) to 0 on open
- Each item has an `ArrowRight` icon (size 14) that appears on hover (opacity 0 to 0.4, translateX animation)
- Bottom section: separated by `1px solid rgba(255,255,255,0.07)` border, contains full-width "Join the wait" button (white bg, black text, rounded-full)
- Escape key closes the menu

**Hero Content (bottom-left aligned, z-20):**
- Container: `relative z-20 flex flex-col items-start justify-end text-left h-full px-5 sm:px-8 lg:px-10 pb-16 md:pb-20`
- **Heading:** "When strategy meets its spark / and thought reshapes what lies ahead"
  - White, `font-normal`, `leading-[1.12]`, `tracking-tight`, `max-w-3xl`
  - Font size: `clamp(1.75rem, 5vw, 2.6rem)`
  - Line break (`<br className="hidden sm:block" />`) between "spark" and "and thought..."
- **Subtext:** "a fluid channel - where deep resolve / and neural insight dissolve as one"
  - Font: `'Courier New', Courier, monospace` (monospace font)
  - Color: `rgba(255, 255, 255, 0.6)`
  - `text-sm md:text-base leading-relaxed`, `letter-spacing: 0.01em`
  - `max-w-xs sm:max-w-sm md:max-w-md`
  - Margin: `mt-5 md:mt-6`
  - Line break between "resolve" and "and neural..."
- **CTA Button:** "See it in motion" with ArrowRight icon
  - White bg (`#ffffff`), black text, `text-sm font-medium`
  - `px-5 py-2.5 rounded-full`
  - `mt-7 md:mt-8`
  - ArrowRight icon (size 15) translates right 0.5 on hover (`group-hover:translate-x-0.5`)
  - `hover:opacity-80` with 300ms transition

**Dependencies:**
- React 18, TypeScript, Tailwind CSS 3, Vite
- `lucide-react` for icons (ArrowRight, Menu, X)
- Google Fonts Inter