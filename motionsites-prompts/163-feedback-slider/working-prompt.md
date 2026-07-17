Build a React + TypeScript + Tailwind CSS + Vite project with a single section called "What builders say". Use `lucide-react` for icons. Reproduce it exactly as specified below.

### Fonts (load globally in `src/index.css`, before `@tailwind` directives)

```css
@font-face {
  font-family: 'PP Neue Montreal';
  src: url('https://assets.website-files.com/6009ec8cda7f305645c9d91b/60176f9bb43e36419997ecfe_PPNeueMontreal-Book.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'PP Neue Montreal';
  src: url('https://assets.website-files.com/6009ec8cda7f305645c9d91b/60176f9b39c5673e51a86f5a_PPNeueMontreal-Medium.otf') format('opentype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'PP Mondwest';
  src: url('/PPMondwest-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: 'PP Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

@keyframes fadeInUp {
  0%   { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}
```

Place `PPMondwest-Regular.woff2` in the `public/` folder.

### In-view hook (`src/hooks/useInViewAnimation.ts`)

`IntersectionObserver` with `threshold = 0.1`, returns `{ ref, isInView }`. Once `isInView` becomes true, it stays true.

### Component (`src/components/TestimonialCarousel.tsx`)

**Data** — Array of 5 testimonials with `id`, `quote`, `author`, `role`, `company`, `avatar`. Use Pexels stock photos for avatars (resized w=200, h=200, dpr=2):

1. Marcus Anderson — CEO, Data.storage — "With very little guidance team delivered designs that were consistently spot on. We've received so much positive feedback about the design, our community loves it." — `https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2`
2. alexwu — Founder, Nexgate — "Viktor led the creation of our best fundraising deck to date! Knows how to merge sophisticated UX with simple cryptonative design" — `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2`
3. James Mitchell — VP Product, LaunchPad — "Working with Viktor transformed our product vision into something truly exceptional. The attention to detail and strategic thinking was outstanding." — `https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2`
4. Rachel Foster — Co-founder, Nexus Labs — "The design quality exceeded our expectations. Viktor brought a level of polish and professionalism that elevated our entire brand." — `https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2`
5. David Zhang — Head of Design, Paradigm Labs — "Incredible work from start to finish. The team's ability to understand our vision and execute flawlessly was remarkable." — `https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2`

**State / sizing**
- `offset` (px, starts at 0), `isPaused` (false).
- `isMobile = window.innerWidth < 768`.
- `cardWidth = isMobile ? window.innerWidth - 48 : 427.5`.
- `gap = 24`. `cardWithGap = cardWidth + gap`.
- Render `[...testimonials, ...testimonials, ...testimonials]` (tripled) to give the illusion of an infinite loop.

**Auto-advance**
- `setInterval` every 3000ms: `offset += cardWithGap`. When `offset >= cardWithGap * testimonials.length`, reset to 0.
- Pause on `onMouseEnter`, resume on `onMouseLeave` of the carousel wrapper.

**Prev/Next buttons** decrement/increment `offset` by `cardWithGap` with the same wrap logic.

**Section layout**
- `<section className="w-full py-20 bg-white">` wrapper with `ref` from the in-view hook.
- Inner container: `max-w-7xl mx-auto px-6`, then a `w-full md:pr-6` wrapper.
- Header row: `flex flex-col md:flex-row md:items-start md:justify-between mb-16 md:max-w-4xl md:ml-auto gap-6 md:gap-0`.
  - Left (flex-1): heading `text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight font-normal`. Text: `What ` then a `<span>` with inline style `fontFamily: "'PP Mondwest', serif"` reading `builders`, then ` say`.
  - Right column: `flex flex-col items-start md:items-end gap-2`.
    - Row of 5 `Star` icons from lucide-react, `w-5 h-5 fill-black text-black`.
    - Row: `Clutch` in `text-xl font-semibold text-[#0D212C]` and `5/5` in `text-base text-[#273C46]`.
- Apply fade-in animations: heading delay `0.1s`, Clutch block delay `0.2s`, carousel delay `0.3s`, button row delay `0.4s`. Each element uses `isInView ? 'animate-fade-in-up' : 'opacity-0'` plus `style={{ animationDelay: isInView ? 'Xs' : '0s' }}`.

**Carousel container**
```
relative overflow-hidden md:max-w-4xl md:ml-auto py-6 md:pl-6 -mx-6 md:mx-0
```
Inner track: `flex gap-6 pl-6 md:pl-0` with inline style `transform: translateX(-${offset}px)` and `transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'`.

**Card**
- `bg-white rounded-[32px] md:rounded-[40px] px-6 md:pl-10 md:pr-24 py-8 md:pt-[2.36rem] md:pb-[2.63rem] flex flex-col justify-between flex-shrink-0 shadow-[0_4px_16px_rgba(0,0,0,0.08)]`
- Width set via inline style to `cardWidth` px.
- Per-card exit animation: compute `distanceFromEdge = offset % (cardWithGap * testimonials.length)`, `cardPosition = index * cardWithGap`, `relativePosition = cardPosition - distanceFromEdge`. If `relativePosition < -cardWidth / 2`, compute `exitProgress = min(1, abs(relativePosition) / cardWidth)`, set `opacity = max(0, 1 - exitProgress * 2)` and `scale = max(0.85, 1 - exitProgress * 0.15)`. Apply via inline style with `transition: 'opacity 0.4s ease-out, transform 0.4s ease-out'`.
- Card content top: a quote glyph rendered as inline SVG, `className="w-8 h-8 text-[#0D212C]"`, `fill="currentColor"`, `viewBox="0 0 24 24"`, path `d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"`. Margin `mb-6`.
- Quote `<p>`: `text-base text-[#0D212C] leading-relaxed mb-8`.
- Author row: `flex items-center gap-4`, avatar `<img>` `w-12 h-12 rounded-full object-cover`, then a column with author name `font-semibold text-[#0D212C] text-sm` and a sub-row `text-sm text-[#273C46] flex items-center gap-1` containing a `↳` glyph in `text-xs` and `{role}, {company}`.

**Nav buttons row**
- Container: `flex gap-4 mt-8 md:max-w-4xl md:ml-auto md:pl-6`.
- Each button: `w-12 h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center hover:bg-[#0D212C]/5 transition-colors`. Icons `ChevronLeft` / `ChevronRight` from lucide-react, `w-5 h-5 text-[#0D212C]`. Add `aria-label`.

### Colors used
- Text dark: `#0D212C`
- Text muted: `#273C46`
- Card shadow: `0 4px 16px rgba(0,0,0,0.08)`
- Background: white

### Required dependencies
`react`, `react-dom`, `lucide-react`, plus Vite + Tailwind toolchain.

---