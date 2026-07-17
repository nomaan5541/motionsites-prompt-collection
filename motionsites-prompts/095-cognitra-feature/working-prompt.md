---

**Prompt:**

Create a full-viewport section (100vh) that sits over a fixed background video. The section has no background color of its own -- it is fully transparent so the fixed video behind it shows through.

**Background video (fixed, behind everything):**
A `<video>` element fixed to the viewport (`position: fixed; top: 0; left: 0; width: 100%; height: 100vh; object-fit: cover; z-index: 0`), using this source:
```
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260514_135830_bb6491d1-9b66-4aec-9722-13b4dfe3fb46.mp4
```
It should `autoPlay`, be `muted`, `loop`, and `playsInline`.

**Section layout:**
- `position: relative; z-index: 1`
- `display: flex; flex-direction: column; justify-content: center` (centers content vertically)
- `height: 100vh`
- Padding: `70px 32px 32px 32px`

**Content block** (inside the section):
- A wrapper `div` with `display: flex; flex-direction: column; align-items: flex-start; max-width: 720px`
- **Heading (`<h2>`):**
  - Text: `"WE BUILD END-TO-END AI AUTOMATION SYSTEMS."`
  - Each word is wrapped in an individual `<span>` element, displayed using `display: flex; flex-wrap: wrap; gap: 0.25em`
  - Each word animates in with a staggered fade-up animation: starts at `opacity: 0, y: 32px`, animates to `opacity: 1, y: 0` using Framer Motion `whileInView` with `viewport: { once: true, amount: 0.2 }`
  - Stagger: first word at `delay: 0.15`, each subsequent word adds `0.08s` (so word 2 = 0.23, word 3 = 0.31, etc.)
  - Animation easing: `[0.22, 1, 0.36, 1]`, duration: `0.7s`
  - Typography: `font-size: clamp(26px, 3vw, 42px); font-weight: 700; line-height: 1.08; letter-spacing: -0.01em; text-transform: uppercase; color: #fff; margin: 0`

- **Subtext (`<p>`):**
  - Text: `"We provide all-in-one AI automation services in one place."`
  - `margin-top: 24px; font-size: 14px; line-height: 1.65; color: rgba(255,255,255,0.85); max-width: 260px`
  - Same fade-up animation as the words but with `delay: 0.9` and default `y: 24px`

**Font:**
```css
@import url('https://db.onlinewebfonts.com/c/e66905e07608167a84e6ad52f638c3c6?family=Helvetica+Now+Var');
* { font-family: 'Helvetica Now Var', 'Helvetica Neue', Helvetica, Arial, sans-serif; }
```

**FadeUp component (reusable, Framer Motion):**
```tsx
import { motion } from 'framer-motion';
import { CSSProperties, ReactNode } from 'react';

type FadeUpProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
  as?: 'div' | 'section' | 'span' | 'h1' | 'h2' | 'h3' | 'p' | 'nav';
  once?: boolean;
};

export function FadeUp({
  children, delay = 0, duration = 0.7, y = 24,
  className, style, as = 'div', once = true,
}: FadeUpProps) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
```

**Mobile responsive (max-width: 900px):**
- Section padding changes to `90px 18px 32px 18px`

**Tech stack:** React 18, TypeScript, Vite, Tailwind CSS 3, Framer Motion 12.

---