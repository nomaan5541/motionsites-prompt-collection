# Full Recreation Prompt — Aura Hero Section

Build a premium, Apple-inspired dark landing page hero for "Aura" — an AI email app — using **React 18 + TypeScript + Vite + Tailwind CSS + `motion/react` (Framer Motion) + `lucide-react`**.

## 1. Dependencies (package.json)

```json
{
  "dependencies": {
    "@supabase/supabase-js": "^2.57.4",
    "lucide-react": "^0.344.0",
    "motion": "^12.38.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
}
```

## 2. Global CSS (`src/index.css`)

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body {
  font-family: 'Inter', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}

@layer utilities {
  .animate-shiny {
    animation: shiny 6s linear infinite;
  }
}

@keyframes shiny {
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
}
```

## 3. Tailwind config (`tailwind.config.js`)

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#3D81E3',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

## 4. Imports (top of `App.tsx`)

```tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, Search } from 'lucide-react';
```

## 5. SVG Assets — exact inline markup

### Apple Logo component

```tsx
function AppleLogo({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 384 512"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}
```

### Aura LogoMark (four-sparkle/concave-square mark)

```tsx
function LogoMark({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="none" aria-hidden="true">
      <path
        d="M 0 128 C 70.692 128 128 185.308 128 256 L 64 256 C 64 220.654 35.346 192 0 192 Z M 256 192 C 220.654 192 192 220.654 192 256 L 128 256 C 128 185.308 185.308 128 256 128 Z M 128 0 C 128 70.692 70.692 128 0 128 L 0 64 C 35.346 64 64 35.346 64 0 Z M 192 0 C 192 35.346 220.654 64 256 64 L 256 128 C 185.308 128 128 70.692 128 0 Z"
        fill="white"
      />
    </svg>
  );
}
```

## 6. Constants

```tsx
const navLinks = ['Solutions', 'Pricing', 'Blog', 'Documentation', 'Careers'];
const menuItems = ['File', 'Edit', 'View', 'Go', 'Window', 'Help'];

const gradientStyle: React.CSSProperties = {
  backgroundImage:
    'linear-gradient(110deg, #3D81E3, 20%, #AE9AE6, 40%, #F8D8D5, 60%, #FEEFDB, 80%, #3D81E3)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
};
```

## 7. AppleButton component

```tsx
function AppleButton({
  label = 'Download Aura',
  full = false,
}: {
  label?: string;
  full?: boolean;
}) {
  return (
    <button
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-medium text-sm px-5 py-3 transition-all hover:bg-white/90 active:scale-[0.98] ${
        full ? 'w-full' : ''
      }`}
    >
      <AppleLogo className="w-4 h-4" />
      <span>{label}</span>
      <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-[1px]" />
    </button>
  );
}
```

## 8. Root Wrapper

```tsx
<div className="relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white selection:bg-brand/30">
```

## 9. Background Video (no overlay)

```tsx
<div className="fixed inset-0 z-0 pointer-events-none">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover pointer-events-none"
    src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260506_124911_3ed2d5b7-1604-4a4d-acbf-a28fd6c79348.mp4"
  />
</div>
```

## 10. Vertical Guide Lines (desktop only)

```tsx
<div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 -translate-x-[calc(50%+36rem)] w-px bg-white/10 z-[5]" />
<div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 translate-x-[calc(-50%+36rem)] w-px bg-white/10 z-[5]" />
```

## 11. Foreground Wrapper

```tsx
<div className="relative z-10">
  <div className="max-w-6xl mx-auto px-6">
```

## 12. Top Navigation

```tsx
<motion.nav
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
  className="flex items-center justify-between py-5"
>
  <div className="flex items-center gap-2">
    <LogoMark />
    <span className="font-semibold tracking-tight text-white">Aura</span>
  </div>

  <ul className="hidden md:flex items-center gap-8">
    {navLinks.map((link, i) => (
      <motion.li
        key={link}
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 + i * 0.05, ease: 'easeOut' }}
      >
        <a
          href="#"
          className="text-white/70 text-sm font-medium hover:text-white transition-colors"
        >
          {link}
        </a>
      </motion.li>
    ))}
  </ul>

  <div className="hidden md:block">
    <AppleButton />
  </div>

  <button
    onClick={() => setMenuOpen(true)}
    className="md:hidden w-10 h-10 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5"
    aria-label="Open menu"
  >
    <Menu className="w-5 h-5" />
  </button>
</motion.nav>
```

## 13. Hero Section

```tsx
<section className="pt-16 md:pt-28 pb-20 text-center flex flex-col items-center">
  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    className="text-4xl md:text-7xl font-semibold tracking-tight leading-[0.9]"
  >
    <span className="block text-white">Your email.</span>
    <span className="block animate-shiny" style={gradientStyle}>
      Revitalized
    </span>
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className="mt-8 text-white/60 max-w-md text-base leading-[1.5]"
  >
    Aura is the premier inbox platform for the current era. It leverages powerful
    AI to organize, prioritize, and refine your messages into total clarity.
  </motion.p>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className="mt-10 flex flex-col items-center gap-3"
  >
    <AppleButton />
    <p className="text-xs text-white/40">Download for Intel / Apple Silicon</p>
  </motion.div>
</section>
```

## 14. Mac Menu Bar (below hero, full-bleed)

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
  className="h-10 bg-black/40 backdrop-blur-md border-t border-b border-white/10"
>
  <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between text-xs">
    <div className="flex items-center gap-5">
      <AppleLogo className="w-3.5 h-3.5 text-white" />
      <span className="font-bold text-white">Aura</span>
      {menuItems.map((item, i) => (
        <span
          key={item}
          className={`text-white/80 ${i > 2 ? 'hidden sm:inline' : ''} ${
            i > 3 ? 'hidden md:inline' : ''
          }`}
        >
          {item}
        </span>
      ))}
    </div>
    <div className="flex items-center gap-3 text-white/80">
      <Search className="w-3.5 h-3.5" />
      <span>Wed May 6 1:09 PM</span>
    </div>
  </div>
</motion.div>
```

## 15. Mobile Drawer (AnimatePresence)

```tsx
<AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'tween', duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] bg-black flex flex-col"
    >
      <div className="flex items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <LogoMark />
          <span className="font-semibold">Aura</span>
        </div>
        <button
          onClick={() => setMenuOpen(false)}
          className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center px-8 gap-6">
        {navLinks.map((link, i) => (
          <motion.a
            key={link}
            href="#"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
            className="text-3xl font-semibold tracking-tight text-white"
          >
            {link}
          </motion.a>
        ))}
      </div>

      <div className="px-6 pb-10">
        <AppleButton full />
      </div>
    </motion.div>
  )}
</AnimatePresence>
```

## 16. Design rules

- **No overlay** on the video — text sits directly over it.
- **Color palette**: background `#0c0c0c`, brand `#3D81E3`, white text with `/60`, `/70`, `/40` opacity variants. No purple/indigo anywhere except as a transient stop inside the "Revitalized" text gradient.
- **Typography**: Inter only, weights 500/600/700 used. Headline is `font-semibold` (600), `tracking-tight`, `leading-[0.9]`.
- **Motion easing** for hero staggers: `[0.22, 1, 0.36, 1]` (cubic ease-out). Nav uses `'easeOut'`. Stagger delays: nav 0.1 + i*0.05; hero h1 0.3, p 0.5, CTA 0.7, menu bar 0.9 — all `duration: 0.8` except nav (0.6) and nav-link items (0.5).
- **Shiny gradient text**: 110° linear gradient blue → lilac → blush → cream → blue, `background-size: 200% auto`, animated via the `shiny` keyframe panning background-position from `-200%` to `200%` over 6s linear infinite, clipped to text.
- **Guide lines**: 1px white `/10` verticals at `±36rem` from center on md+.
- **Menu bar**: 40px tall, translucent black `/40`, backdrop-blur-md, bordered top and bottom with white `/10`.
- **Responsive**: hamburger on mobile, full drawer; menu items progressively hide past index 2 / 3 at smaller breakpoints.

