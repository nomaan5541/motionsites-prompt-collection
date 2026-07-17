Build a luxury real estate landing page called **"Horizon Estates"** using **React + TypeScript + Vite + Tailwind CSS**. Use `lucide-react` for icons. Do NOT reset or remove any padding, margin, or spacing from elements. Every spacing value listed below is intentional and must be preserved exactly.

---

### FONTS (load in index.html `<head>`)

```html
<link href="https://db.onlinewebfonts.com/c/60323b40d418d578b0b2d55837f67ef2?family=Magical+Source+Demo" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&display=swap" rel="stylesheet">
```

Tailwind config extends fontFamily:
```js
heading: ['"Magical Source Demo"', 'serif'],
geist: ['Geist', 'sans-serif'],
```

---

### GLOBAL CSS (index.css) - COPY EXACTLY

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
  font-family: 'Geist', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

.font-heading {
  font-family: 'Magical Source Demo', serif;
}

.font-geist {
  font-family: 'Geist', sans-serif;
}
```

**IMPORTANT**: The `* { margin: 0; padding: 0 }` reset applies globally. All component spacing is then set explicitly via Tailwind classes. Do NOT add additional resets or remove the padding/margin classes on components - they counteract the global reset.

---

### APP ROOT

```tsx
<div className="bg-black">
  <Navbar />
  <Hero />
</div>
```

Nothing else. Background is pure black.

---

### NAVBAR COMPONENT

The navbar is `position: fixed` and overlays the hero. It has real padding that must not be zero.

**Container `<nav>`:**
```
className="fixed top-0 left-0 right-0 z-50 px-5 md:px-12 py-4 md:py-5 flex items-center justify-between"
```
- Horizontal padding: `px-5` (20px) on mobile, `md:px-12` (48px) on desktop
- Vertical padding: `py-4` (16px) on mobile, `md:py-5` (20px) on desktop
- These paddings are CRITICAL - they space the logo, links, and button away from screen edges

**Left - Logo SVG:**
```tsx
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" className={className}>
  <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" fill="currentColor" />
</svg>
```
Classes on the logo in the navbar: `w-7 h-7 md:w-10 md:h-10 text-white relative z-50`

**Center - Nav Links (hidden mobile, visible md+):**
```
className="hidden md:flex items-center gap-8 text-white/90 text-sm font-geist font-light tracking-wide"
```
- `gap-8` (32px) between each link - this is the spacing between nav items
- Links: "Story", "Estates", "Lifestyle", "Views", "Inquire"
- Each link: `hover:text-white transition-colors`

**Right - CTA Button (hidden mobile, visible md+):**
```
className="hidden md:flex group items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full pl-5 pr-1.5 py-1.5 hover:bg-white transition-all shadow-lg"
```
- `pl-5` (20px) left padding for text breathing room
- `pr-1.5` (6px) right padding - tight because the arrow circle sits there
- `py-1.5` (6px) vertical padding
- `gap-2` (8px) between text and arrow circle
- `rounded-full` makes it pill-shaped

Button text span:
```
className="text-gray-800 text-xs md:text-sm font-geist font-medium tracking-wider uppercase"
```

Arrow circle span:
```
className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-rose-200/60 group-hover:bg-rose-300/70 transition-colors"
```
Contains `<ArrowRight className="w-3.5 h-3.5 text-gray-700" />` from lucide-react.

**Mobile Hamburger (visible below md):**
```
className="relative z-50 md:hidden flex flex-col items-center justify-center w-10 h-10"
```
- The button has a tap target of `w-10 h-10` (40px square)
- Two `<span>` lines inside:
```
className="block w-5 h-[1.5px] bg-white rounded-full transition-all duration-300 ease-[cubic-bezier(0.77,0,0.18,1)]"
```
- Closed state: first span `-translate-y-[3px]`, second span `translate-y-[3px]` (6px gap between lines)
- Open state: first span `rotate-45 translate-y-[3px]`, second span `-rotate-45 -translate-y-[0px]`

**Mobile Menu Overlay:**
- Outer: `fixed inset-0 z-40 md:hidden transition-all duration-500 ease-[cubic-bezier(0.77,0,0.18,1)]`
- Background: `absolute inset-0 bg-black/95 backdrop-blur-xl transition-opacity duration-500`
- Content container: `relative h-full flex flex-col items-center justify-center px-8`
  - `px-8` (32px) side padding on the centered content
- Links list: `flex flex-col items-center gap-6`
  - `gap-6` (24px) between each mobile nav link
- Each link: `text-white text-2xl font-heading tracking-wider uppercase hover:text-white/70 transition-colors`
- Staggered animation: each item delays by 60ms starting at 100ms (`100 + i * 60`ms)
- Animation: `opacity-0 translate-y-6` to `opacity-100 translate-y-0`, duration 500ms
- Mobile CTA appears below links with `mt-10` (40px top margin), delayed 420ms
- Mobile CTA button: same styles as desktop but with `w-7 h-7` arrow circle (no md size-up)
- When menu opens: `document.body.style.overflow = 'hidden'` (prevents background scroll)

---

### HERO COMPONENT

**Outer wrapper** - creates scrollable space:
```
className="relative h-[200dvh]"
```
This makes the total height 200% of viewport - the extra 100vh below is empty scroll space.

**Sticky inner section** - stays pinned while you scroll through the outer wrapper:
```
className="sticky top-0 w-full h-[100dvh] overflow-hidden"
```

**VIDEO 1 URL**: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260625_174131_395bc785-bb21-4e65-abf6-27c56f0764b6.mp4`

**VIDEO 2 URL**: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260624_055914_ee2b3b56-9a58-4885-989e-5b72a68b630d.mp4`

**Video 2 (BEHIND, rendered first in DOM):**
```html
<video ref={video2Ref} muted playsInline preload="auto" src={VIDEO_2}
  className="absolute inset-0 w-full h-full object-cover" />
```
- No autoPlay, no loop
- Always in the DOM, always visible (it just sits behind Video 1)

**Video 1 (ON TOP, rendered second in DOM so it stacks above):**
```html
<video autoPlay muted loop playsInline
  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
    scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
  }`}>
  <source src={VIDEO_1} type="video/mp4" />
</video>
```
- Loops forever, auto-plays on load
- Fades to invisible (700ms) when user scrolls, revealing Video 2 behind it

**Scroll logic (JavaScript):**
```ts
const [scrolled, setScrolled] = useState(false);
const video2Ref = useRef<HTMLVideoElement>(null);
const wasScrolled = useRef(false);

useEffect(() => {
  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    setScrolled(isScrolled);
    const v = video2Ref.current;
    if (!v) return;
    if (isScrolled && !wasScrolled.current) {
      v.currentTime = 0;
      v.play().catch(() => {});
    } else if (!isScrolled && wasScrolled.current) {
      v.pause();
    }
    wasScrolled.current = isScrolled;
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

**Center Logo with Concentric Circles:**

Positioning container:
```
className="absolute inset-0 flex items-center justify-center pb-[25vh] sm:pb-[30vh]"
```
- `pb-[25vh]` / `sm:pb-[30vh]` pushes the logo upward from center (toward upper-third of screen)

Circle container:
```
className="relative flex items-center justify-center w-[45vw] h-[45vw] max-w-[320px] max-h-[320px] md:w-[30vw] md:h-[30vw] md:max-w-[400px] md:max-h-[400px]"
```

Three elements animate in on mount (a `visible` state flips true after 200ms setTimeout):

1. Outer circle ring:
```
className="absolute inset-0 rounded-full border border-white/35 transition-all duration-[1200ms] ease-out"
// visible: opacity-100 scale-100 | hidden: opacity-0 scale-75
// transitionDelay: 0ms
```

2. Inner circle ring:
```
className="absolute inset-[12%] rounded-full border border-white/25 transition-all duration-[1200ms] ease-out"
// visible: opacity-100 scale-100 | hidden: opacity-0 scale-75
// transitionDelay: 150ms
```

3. Logo SVG (same Logo component from Navbar):
```
className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 text-white"
// wrapper: transition-all duration-[1000ms] ease-out
// visible: opacity-100 scale-100 | hidden: opacity-0 scale-90
// transitionDelay: 350ms
```

**Bottom Text Block:**
```
className="absolute bottom-0 left-0 right-0 pb-10 sm:pb-12 md:pb-16 px-5 sm:px-6 md:px-12 text-center"
```
- Bottom padding: `pb-10` (40px) mobile, `pb-12` (48px) sm, `pb-16` (64px) md
- Side padding: `px-5` (20px) mobile, `px-6` (24px) sm, `px-12` (48px) md

H1:
```
className="font-heading text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-wide uppercase"
// Animation: opacity-0 translate-y-8 -> opacity-100 translate-y-0
// duration-[1000ms] ease-out, delay 600ms
```
Text: `"Where the horizon meets"` then `<br />` then `"timeless elegance"`

P:
```
className="mt-3 sm:mt-4 md:mt-6 text-white/80 font-geist font-light text-xs sm:text-sm md:text-base max-w-xs sm:max-w-md mx-auto leading-relaxed"
// Animation: opacity-0 translate-y-6 -> opacity-100 translate-y-0
// duration-[1000ms] ease-out, delay 850ms
```
- `mt-3` (12px) / `mt-4` (16px) / `mt-6` (24px) gap between heading and paragraph
- `max-w-xs` (320px) / `sm:max-w-md` (448px) constrains paragraph width
- `mx-auto` centers it

Text: `"Indulge in unparalleled seaside living where sophistication meets the endless shore."`

---

### CRITICAL NOTES TO PREVENT SPACING ISSUES

1. Do NOT use `@layer base` resets that strip button/link padding beyond what is already in the global `*` reset
2. The button `pl-5 pr-1.5 py-1.5` creates asymmetric padding intentionally - the left side has more room for text, the right side is tight against the arrow circle
3. The navbar `px-5 md:px-12` keeps content away from screen edges - never set this to 0
4. `gap-8` on the nav links creates 32px between each item - this is what prevents them from being crammed together
5. The `pb-[25vh]` on the center logo container is what pushes it toward the upper third - without it the logo would be dead center
6. All `transition-all duration-[Xms]` values use Tailwind's arbitrary value syntax with square brackets
7. The `sticky top-0` + `h-[200dvh]` outer div pattern is what makes scroll detection work - without the extra height, `window.scrollY` stays at 0