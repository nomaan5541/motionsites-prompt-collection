Build a full-screen hero landing page for a renewable energy company using React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide React icons. Use the Inter font from Google Fonts (weights 300-900). The page background is `#F7F7F7`.

## Dependencies

```
react, react-dom, framer-motion, lucide-react, clsx, tailwind-merge
```

## Global CSS (`index.css`)

Import Inter from Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap`

Set `font-family: 'Inter', sans-serif` on the body.

Add a `.liquid-glass` utility class:
- `background: rgba(255, 255, 255, 0.01)` with `background-blend-mode: luminosity`
- `backdrop-filter: blur(4px)` and `-webkit-backdrop-filter: blur(4px)`
- No border, `box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1)`, `position: relative`, `overflow: hidden`
- A `::before` pseudo-element with `position: absolute; inset: 0; border-radius: inherit; padding: 1.4px` and a vertical linear gradient of white at varying opacities (`rgba(255,255,255,0.45)` at 0%/100%, `rgba(255,255,255,0.15)` at 20%/80%, `rgba(255,255,255,0)` at 40%/60%`), masked with `-webkit-mask-composite: xor` / `mask-composite: exclude` to create a glass border effect.

Add a `.tracking-tight-custom` utility with `letter-spacing: -0.06em`.

Add a `@keyframes scroll` animation: `0% { transform: translateX(0) }` to `100% { transform: translateX(-50%) }`.

## Utility: `cn()` helper

A small utility combining `clsx` and `tailwind-merge`:

```ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## Component: `<StaggeredFade>`

Props: `text: string`, `className?: string`, `style?: React.CSSProperties`.

Renders a `<motion.h1>` that splits the `text` into individual characters. Each character is a `<motion.span>` with a staggered fade-in animation: each letter delays by `i * 0.03` seconds with `0.3s` duration, transitioning from `opacity: 0` to `opacity: 1`. Uses `useInView` with `once: true` to trigger on scroll into view. The base className merges `'text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]'` with the passed `className` using the `cn()` helper.

## Component: `<FadeDown>`

Props: `children: React.ReactNode`, `delay?: number` (default `0`), `className?: string`.

A `<motion.div>` wrapper that animates from `{ opacity: 0, y: -20 }` to `{ opacity: 1, y: 0 }` over `0.6s` with the specified delay. Triggers once on entering the viewport via `useInView({ once: true })`.

## Component: `<BoomerangVideoBg>`

This is the key background video component that creates a forward/reverse boomerang loop effect.

**Video URL:** `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260527_061033_0f369854-8849-4214-8787-9181479c8121.mp4`

**How it works:**

1. Renders a `<video>` element (autoPlay, muted, playsInline, crossOrigin="anonymous") that plays through once (NOT looped).
2. While the video plays, it captures every frame into offscreen `<canvas>` elements using `requestVideoFrameCallback` (with a `setInterval` at 60fps fallback for unsupported browsers). Each captured frame is scaled to a max width of 960px maintaining aspect ratio.
3. When the video `ended` event fires, it sets a `ready` state to `true`.
4. Once ready, hides the `<video>` and shows a visible `<canvas>`. A `requestAnimationFrame` loop plays back the captured frames at 30fps in a boomerang pattern: forward through all frames, then reverse back to the start, repeating infinitely.
5. The outer wrapper div has classes: `absolute inset-0 w-full h-full`.
6. Both the `<video>` and `<canvas>` have classes: `w-full h-full object-cover`.
7. Visibility is toggled via `style={{ display: ready ? 'none' : 'block' }}` on the video and the inverse on the canvas.

## Main Layout (`App.tsx`)

The root is `<div className="h-screen flex flex-col bg-[#F7F7F7] relative overflow-hidden">`.

### Video Background

The `<BoomerangVideoBg>` is placed inside a container: `<div className="fixed inset-0 z-0" style={{ top: 200 }}>`. This pushes the video 200px down from the top of the viewport so it sits behind the lower portion of the hero.

### Navigation Bar

A `<nav>` with classes `flex items-center justify-between px-4 md:px-8 py-4 md:py-6 relative z-10`.

**Left side:**
- A logo image: `<img src="/image.png" alt="LGPSM" className="h-6 md:h-7" />` (user's own logo PNG)
- A language selector: `<Globe>` icon (lucide-react, `w-4 h-4`) + "En" text, `text-sm text-black`

**Center (hidden on mobile, `hidden lg:flex items-center gap-8`):**
- Nav links: "Renewables", "Strategies", "Photovoltaic", "Wind Systems", "Packages"
- Each link: `text-sm text-gray-700 hover:text-gray-900`

**Right side:**
- "Sign In" link (hidden on mobile `hidden sm:block`): `text-sm text-gray-700 hover:text-gray-900 border border-black/20 px-4 md:px-6 py-2 md:py-2.5 rounded-full transition-colors`
- "Clean Energy" button: `px-4 md:px-6 py-2 md:py-2.5 bg-black text-white text-sm rounded-full hover:bg-gray-900 transition-colors`

### Hero Content

Wrapper: `<div className="flex-1 flex flex-col items-center px-4 md:px-8 relative pt-4 md:pt-8">` with an inner `<div className="relative z-10 flex flex-col items-center">`.

**Badge pill** (top, centered):
- Classes: `mb-3 px-3 md:px-4 py-1.5 md:py-2 border border-black/20 rounded-full flex items-center gap-1.5 md:gap-2 text-xs md:text-sm`
- Content: sun emoji, arrow, globe emoji, text "Delivering power innovate" (hidden on mobile, shortened to "Power innovate" on small screens), arrow, plant emoji

**Main Heading** (using `<StaggeredFade>`):
- Text: `"Renewable Power For Tomorrow, Infinite Clean Solutions"`
- Classes: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-normal text-center max-w-5xl mb-3 md:mb-4 px-4`
- Color: `#31463B` (dark green) via inline style

**Subheading** (wrapped in `<FadeDown delay={0.5}>`):
- `<p>` with classes: `text-center text-gray-600 max-w-3xl mb-4 md:mb-5 text-sm md:text-base lg:text-lg px-4`
- Text: `"Sustainable Energy Platform. Engineering, deploying, and servicing solar arrays for homes, businesses, and large-scale operations worldwide."`

**CTA Buttons** (wrapped in `<FadeDown delay={0.7}>`):
- Wrapper classes: `flex flex-col sm:flex-row items-center gap-3 md:gap-4 px-4`
- **Primary button** ("Explore Options"):
  - Classes: `pl-4 md:pl-6 pr-2 py-2 bg-gradient-to-r from-[#3C684D] to-[#4A7144] text-white rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity text-sm md:text-base`
  - Contains a `<Leaf>` icon (`w-4 h-4`), the text, and a circular icon container (`w-7 h-7 md:w-8 md:h-8 rounded-full`) with inline style `background: linear-gradient(59deg, #567A5E 0%, #78A873 100%)` containing a `<Play>` icon (`w-3 h-3 md:w-4 md:h-4 fill-white text-white`)
- **Secondary button** ("Start Network"):
  - Classes: `pl-4 md:pl-6 pr-2 py-2 bg-white text-gray-700 rounded-full flex items-center gap-2 hover:bg-gray-50 transition-colors text-sm md:text-base`
  - Contains the text and a circular icon container with inline style `background: linear-gradient(59deg, #EEEEEE 0%, #CBCBCB 100%)` containing an `<ArrowRight>` icon (`w-3 h-3 md:w-4 md:h-4 fill-black text-black`)

## Color Palette Summary

| Token | Value |
|---|---|
| Page background | `#F7F7F7` |
| Heading text | `#31463B` |
| Body text | Tailwind `gray-600` |
| Nav text | Tailwind `gray-700` |
| Primary CTA gradient | `#3C684D` to `#4A7144` |
| Primary CTA icon gradient | 59deg, `#567A5E` to `#78A873` |
| Secondary CTA icon gradient | 59deg, `#EEEEEE` to `#CBCBCB` |
| Nav button | `bg-black` / `text-white` |
| Sign-in border | `border-black/20` |

## Responsive Breakpoints

All elements use Tailwind's default breakpoints (`sm:`, `md:`, `lg:`). Nav links are hidden below `lg`. Sign-in button hidden below `sm`. CTA buttons stack vertically below `sm`. Font sizes scale from `text-3xl` to `lg:text-6xl`. Padding scales from `px-4` to `md:px-8`.