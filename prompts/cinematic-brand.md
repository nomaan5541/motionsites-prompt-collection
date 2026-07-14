Build a full-screen cinematic hero landing page for a brand called "VERTX". Use React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide React icons.

## Font

Use the custom font **"Quire Sans Pro"** loaded from this CDN in `index.html`:
```
https://db.onlinewebfonts.com/c/5a981c7d02abe9aec215dbe4606407e2?family=Quire+Sans+Pro
```
Set it as the default `sans` font family in `tailwind.config.js`:
```js
fontFamily: {
  sans: ['"Quire Sans Pro"', 'sans-serif'],
},
```

## Page Title
`Nexora — Beyond the Interface`

## Background Video

Use this CloudFront video URL as a full-screen looping background:
```
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_170109_f96e01a5-b0db-4274-b24d-8d97e99ec928.mp4
```
The `<video>` element should be `absolute inset-0`, `object-cover`, with attributes: `autoPlay`, `muted`, `loop`, `playsInline`, `preload="auto"`. Also use a `useRef` + `useEffect` to call `.play()` on mount as a fallback for autoplay.

## Navbar (fixed, top, z-50)

- Animates in from top using Framer Motion: `initial={{ y: -24, opacity: 0 }}`, `animate={{ y: 0, opacity: 1 }}`, `transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}`.
- Outer: `fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4`.
- Inner container: `mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6`.
- **Logo (left):** Lucide `Hexagon` icon (strokeWidth 1.5, 24x24, white) + text "VERTX" (`text-[15px] font-semibold tracking-tight text-white sm:text-base`). The Hexagon rotates 30deg on hover via a `group` + `group-hover:rotate-[30deg]` with `transition-transform duration-300`.
- **Right side:** Two buttons:
  1. "Contact" -- ghost style: `rounded-full border border-white/15 bg-white/5 px-5 py-2 text-[13px] font-medium text-white/80 backdrop-blur-sm transition-all hover:border-white/30 hover:text-white hover:scale-105 active:scale-100`.
  2. "Sign Up" -- primary style with `btn-glow` class: `rounded-full bg-slate-950 px-5 py-2 text-[13px] font-medium text-white transition-transform hover:scale-105 active:scale-100`.

## Hero Content (centered, shifted up 50px)

The content wrapper: `relative z-10 flex min-h-screen flex-col items-center justify-center px-5 pt-20 text-center sm:px-6 sm:pt-24` with inline style `marginTop: '-50px'`.

### 1. Eyebrow text
Wrapped in a `FadeUp` component (delay=0, mb-4 sm:mb-6):
- A `<p>` with: `flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.25em] text-white/60 sm:gap-3 sm:text-xs md:text-sm md:tracking-[0.3em]`.
- Starts with a small horizontal line: `<span className="inline-block h-px w-4 bg-white/40 sm:w-6" />`.
- Text: **"The future is unfolding"**.

### 2. Main Heading (h1)
`max-w-4xl text-[1.75rem] font-medium leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl`.
- Uses a `TypingEffect` component that splits the text into individual characters, each animated with Framer Motion (`initial={{ opacity: 0 }}`, `animate={{ opacity: 1 }}`, staggered with `delay: i * 0.045`, `duration: 0.15`). Words are kept as `inline-block` spans so they wrap naturally, with `&nbsp;` between words.
- Text: **"Innovation that reshapes the fabric of experience"**.

### 3. Subheading
Wrapped in `FadeUp` (delay=2.4, mt-4 sm:mt-6):
- `max-w-xs text-xs font-light leading-relaxed text-white/50 sm:max-w-xl sm:text-sm md:text-base lg:text-lg`.
- Text: **"We craft platforms where insight, power, and design converge -- giving rise to something the world hasn't seen."** (use an em dash).

### 4. Buttons row
Container: `mt-8 flex w-full max-w-sm flex-col items-center gap-3 sm:mt-10 sm:w-auto sm:max-w-none sm:flex-row sm:gap-5`. Stacks vertically on mobile, horizontal on sm+.

- **"Begin Now" button** (FadeUp delay=2.8): `btn-glow flex w-full items-center justify-center gap-2.5 rounded-full bg-slate-950 py-2.5 pl-6 pr-3 text-sm font-medium text-white transition-transform hover:scale-105 active:scale-100 sm:w-auto sm:gap-3 sm:py-3.5 sm:pl-10 sm:pr-5 sm:text-lg`. Contains a circular play icon on the right: a `<span>` styled as `flex h-7 w-7 items-center justify-center rounded-full border border-white/30 sm:h-9 sm:w-9` with a Lucide `Play` icon (`h-3 w-3 fill-current sm:h-4 sm:w-4`).

- **"Watch the story" button** (FadeUp delay=3.0): `w-full rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-medium text-white/80 backdrop-blur-sm transition-all hover:border-white/30 hover:text-white hover:scale-105 active:scale-100 sm:w-auto sm:px-10 sm:py-3.5 sm:text-lg`.

## FadeUp Component

A reusable animation wrapper using Framer Motion:
- Props: `children`, `className`, `delay` (default 0), `duration` (default 0.6), `y` (default 24).
- Uses `useInView` with `{ once: true }` to trigger only when scrolled into view.
- `initial={{ opacity: 0, y }}`, animates to `{ opacity: 1, y: 0 }` when in view.
- Easing: `[0.25, 0.46, 0.45, 0.94]`.

## TypingEffect Component

A character-by-character reveal animation:
- Props: `text`, `className`, `charDelay` (default 0.045).
- Uses `useInView` with `{ once: true }`.
- Splits text by spaces into words, then each word into characters. Each character is a `<motion.span>` with `initial={{ opacity: 0 }}`, `animate={{ opacity: 1 }}` (when in view), `transition={{ duration: 0.15, delay: globalCharIndex * charDelay }}`. Characters and words are `inline-block`. Words are separated by `&nbsp;`.

## Custom CSS (index.css)

The `btn-glow` class creates an inner white glow effect on primary buttons:
```css
.btn-glow {
  outline: 1.5px solid rgba(255, 255, 255, 0.6);
  outline-offset: -1.5px;
  box-shadow: inset 0 0 14px 0 rgba(255, 255, 255, 0.7);
}

@media (min-width: 640px) {
  .btn-glow {
    outline-width: 2px;
    outline-offset: -2px;
  }
}
```

## Outer Section
The root `<section>` wrapping everything: `relative min-h-screen w-full overflow-hidden bg-black`.

## Dependencies
- `react`, `react-dom` (v18)
- `framer-motion`
- `lucide-react`
- `tailwindcss`, `autoprefixer`, `postcss`
- Vite + TypeScript