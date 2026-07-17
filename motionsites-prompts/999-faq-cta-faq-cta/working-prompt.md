# Working Prompt: FAQ CTA

This is the original full prompt returned by the MotionSites `get-prompt` endpoint in the current session.

## Metadata

- Prompt ID: `faq-cta`
- Category: CTA
- Page type: hero
- Source status: fetched
- Preview video: https://stream.mux.com/F01M5JCF004R9SYNgG02wRlscqRn5tacvrc500Mgb2cKzBc.m3u8
- Preview image: 

## Prompt

```
**PROMPT:**

Build a React + TypeScript + Vite + Tailwind CSS page with a "CTA + FAQ + Footer" section using the **Inter** font. Use `lucide-react` for icons (`ChevronDown`, `ChevronUp`). No other UI libraries.

### Layout

A centered container `max-w-[1100px] w-full mx-auto px-5`, white body (`bg-white text-neutral-900`), applied font: `style={{ fontFamily: "'Inter', sans-serif" }}`. Main section has `py-20 max-[900px]:py-[60px]`.

Inside `<main>`, a two-column grid:
- `grid grid-cols-[1.6fr_1fr] gap-[30px] items-stretch max-[900px]:grid-cols-1 max-[900px]:gap-[60px]`

### Left column — Animated Gradient CTA card

A div with class `c5-animated-gradient rounded-[24px] py-20 px-10 text-white flex flex-col justify-center items-center text-center` and inline `boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'`.

Contents:
- `<h2>` — "Ready to Transfer<br/>Without Borders?" with classes `font-normal leading-[1.1] mb-[15px]` and inline `fontSize: '3.5rem', letterSpacing: '-0.03em'`.
- `<p>` — "Send Money Worldwide at the Best Rates" with `text-[0.9rem] mb-[30px] font-normal opacity-85`.
- `<button>` — "Get Started Today", classes `bg-neutral-900 text-white font-semibold cursor-pointer border-none text-[0.95rem] transition-all duration-200 hover:-translate-y-0.5`, inline `padding: '14px 32px', borderRadius: '12px', boxShadow: '0 10px 20px rgba(0,0,0,0.3)'`. On hover, bump shadow to `0 14px 30px rgba(0,0,0,0.4)` via `onMouseEnter`/`onMouseLeave`.

### Animated Gradient CSS (put in `src/index.css` after the Tailwind directives)

Use CSS `@property` declarations so custom properties interpolate smoothly, five radial-gradient blobs that each drift across wide paths AND pulse in size. Fast, looping, respects `prefers-reduced-motion`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@property --c5-x1 { syntax: '<percentage>'; inherits: false; initial-value: 10%; }
@property --c5-y1 { syntax: '<percentage>'; inherits: false; initial-value: 10%; }
@property --c5-x2 { syntax: '<percentage>'; inherits: false; initial-value: 90%; }
@property --c5-y2 { syntax: '<percentage>'; inherits: false; initial-value: 10%; }
@property --c5-x3 { syntax: '<percentage>'; inherits: false; initial-value: 10%; }
@property --c5-y3 { syntax: '<percentage>'; inherits: false; initial-value: 90%; }
@property --c5-x4 { syntax: '<percentage>'; inherits: false; initial-value: 90%; }
@property --c5-y4 { syntax: '<percentage>'; inherits: false; initial-value: 90%; }
@property --c5-x5 { syntax: '<percentage>'; inherits: false; initial-value: 50%; }
@property --c5-y5 { syntax: '<percentage>'; inherits: false; initial-value: 50%; }
@property --c5-s1 { syntax: '<percentage>'; inherits: false; initial-value: 55%; }
@property --c5-s2 { syntax: '<percentage>'; inherits: false; initial-value: 55%; }
@property --c5-s3 { syntax: '<percentage>'; inherits: false; initial-value: 55%; }
@property --c5-s4 { syntax: '<percentage>'; inherits: false; initial-value: 55%; }
@property --c5-s5 { syntax: '<percentage>'; inherits: false; initial-value: 65%; }

.c5-animated-gradient {
  background-color: #ff8e53;
  background-image:
    radial-gradient(circle at var(--c5-x1) var(--c5-y1), #fff1aa 0px, transparent var(--c5-s1)),
    radial-gradient(circle at var(--c5-x2) var(--c5-y2), #ff4b2b 0px, transparent var(--c5-s2)),
    radial-gradient(circle at var(--c5-x3) var(--c5-y3), #8aff8a 0px, transparent var(--c5-s3)),
    radial-gradient(circle at var(--c5-x4) var(--c5-y4), #ffd000 0px, transparent var(--c5-s4)),
    radial-gradient(circle at var(--c5-x5) var(--c5-y5), #ff1493 0px, transparent var(--c5-s5));
  animation:
    c5-blob1 5s ease-in-out infinite,
    c5-blob2 6s ease-in-out infinite,
    c5-blob3 5.5s ease-in-out infinite,
    c5-blob4 6.5s ease-in-out infinite,
    c5-blob5 4s ease-in-out infinite,
    c5-size1 3.5s ease-in-out infinite,
    c5-size2 4.2s ease-in-out infinite,
    c5-size3 3.8s ease-in-out infinite,
    c5-size4 4.6s ease-in-out infinite,
    c5-size5 3s ease-in-out infinite;
}

@keyframes c5-blob1 {
  0%,100% { --c5-x1: 5%;  --c5-y1: 5%;  }
  25%     { --c5-x1: 45%; --c5-y1: 20%; }
  50%     { --c5-x1: 30%; --c5-y1: 55%; }
  75%     { --c5-x1: 0%;  --c5-y1: 30%; }
}
@keyframes c5-blob2 {
  0%,100% { --c5-x2: 95%; --c5-y2: 5%;  }
  33%     { --c5-x2: 55%; --c5-y2: 35%; }
  66%     { --c5-x2: 80%; --c5-y2: 65%; }
}
@keyframes c5-blob3 {
  0%,100% { --c5-x3: 5%;  --c5-y3: 95%; }
  40%     { --c5-x3: 45%; --c5-y3: 65%; }
  70%     { --c5-x3: 25%; --c5-y3: 100%; }
}
@keyframes c5-blob4 {
  0%,100% { --c5-x4: 95%; --c5-y4: 95%; }
  30%     { --c5-x4: 60%; --c5-y4: 70%; }
  60%     { --c5-x4: 100%; --c5-y4: 50%; }
}
@keyframes c5-blob5 {
  0%,100% { --c5-x5: 50%; --c5-y5: 50%; }
  25%     { --c5-x5: 70%; --c5-y5: 30%; }
  50%     { --c5-x5: 40%; --c5-y5: 70%; }
  75%     { --c5-x5: 30%; --c5-y5: 40%; }
}

@keyframes c5-size1 { 0%,100% { --c5-s1: 45%; } 50% { --c5-s1: 80%; } }
@keyframes c5-size2 { 0%,100% { --c5-s2: 45%; } 50% { --c5-s2: 85%; } }
@keyframes c5-size3 { 0%,100% { --c5-s3: 45%; } 50% { --c5-s3: 78%; } }
@keyframes c5-size4 { 0%,100% { --c5-s4: 45%; } 50% { --c5-s4: 82%; } }
@keyframes c5-size5 { 0%,100% { --c5-s5: 50%; } 50% { --c5-s5: 85%; } }

@media (prefers-reduced-motion: reduce) {
  .c5-animated-gradient { animation: none; }
}
```

### Right column — FAQ accordion

State: `const [activeIndex, setActiveIndex] = useState<number | null>(0);` with toggle function.

FAQ data array (in order):
1. Q: "What is the maximum amount I can send?" — A: "Transfer limits depend on your verification level and country. You can check your limits inside your account settings."
2. Q: "Does my recipient need an account?" — A: "No, your recipient doesn't need an account. Funds can be sent directly to their bank account or mobile wallet."
3. Q: "Is there a mobile app available?" — A: "Yes, our mobile app is available on both iOS and Android for easy transfers on the go."
4. Q: "Can I cancel a transfer?" — A: "Transfers can be cancelled if they have not yet been processed by the receiving bank. Check your transfer status for options."
5. Q: "What currencies are supported?" — A: "We support over 50 currencies worldwide. You can view the full list of supported currencies in our app or website."

Container: `flex flex-col justify-center gap-3`.

Each item: clickable div, `bg-white border rounded-[10px] py-[18px] px-5 cursor-pointer transition-all duration-200`, border color `#eaeaea` when active else `#f0f0f0` (+ `hover:border-[#eaeaea]`). Box shadow `0 4px 12px rgba(0,0,0,0.04)` when active, else `0 2px 8px rgba(0,0,0,0.02)`.

Row: `flex justify-between items-center font-normal text-[0.9rem] text-neutral-900`, question on left, `ChevronUp` (size 20) if active else `ChevronDown`.

When active, answer block below: `mt-3 text-[0.9rem] text-[#666] leading-[1.6]`.

### Footer

`<footer className="bg-[#fafafa] pt-20 pb-5 max-[900px]:pt-[60px]">`, container `max-w-[1100px] w-full mx-auto px-5`.

Grid: `grid grid-cols-[2fr_1fr_1fr_2fr] gap-10 mb-[50px] max-[900px]:grid-cols-2 max-[480px]:grid-cols-1`.

1. **Logo column**: `<img src="https://pub-f170a2592d2c4a1485466404c36807be.r2.dev/Tests/logoipsum-415.svg" className="h-6 mb-[15px]" style={{ filter: 'brightness(0)' }}/>` then `<p className="text-[0.85rem] text-[#888] leading-[1.6] max-w-[220px]">Reliable transfers that always reach their destination on time.</p>`.
2. **Navigation**: `<h4 className="font-semibold mb-5 text-[0.95rem] text-neutral-900">Navigation</h4>` + `<ul>` of `Features, Benefits, Testimonials, Pricing` — each `<li className="mb-3">` with `<a href="#" className="text-[#888] no-underline text-[0.85rem] transition-colors duration-200 hover:text-neutral-900">`.
3. **Pages**: same styling, items `Home, Contact, 404`.
4. **Newsletter**: heading "Newsletter", p: "Join our newsletter and get notified." (`text-[0.85rem] text-[#888] mb-[15px]`), then `flex gap-[10px]`:
   - Input: `type="email"`, placeholder "Enter your email...", classes `flex-grow border border-[#f0f0f0] bg-white outline-none transition-colors duration-200 focus:border-[#ccc] text-[0.9rem]`, inline `padding: '12px 16px', borderRadius: '10px', boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.02)'`.
   - Button "Subscribe": `bg-neutral-900 text-white border-none font-semibold cursor-pointer transition-all duration-200 hover:-translate-y-0.5 text-[0.9rem]`, inline `padding: '12px 28px', borderRadius: '10px', boxShadow: '0 12px 24px rgba(0,0,0,0.4)'`.

Bottom bar: `border-t border-[#f0f0f0] pt-[25px] pb-[10px] flex justify-between text-[0.85rem] text-[#888] max-[480px]:flex-col max-[480px]:gap-[15px] max-[480px]:items-center` containing "All rights reserved. © 2025" and "Designed by Peter Design".

### Font loading

Add to `index.html` `<head>`: Google Fonts Inter preconnect + stylesheet link:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Notes

- Gradient uses five colors: base `#ff8e53`, blobs `#fff1aa`, `#ff4b2b`, `#8aff8a`, `#ffd000`, `#ff1493`.
- Animation uses CSS `@property` for GPU-friendly custom-property interpolation — this is the modern standard for animated CSS gradients (no JS, no canvas).
- Blobs travel wide paths and pulse in radius; durations 3–6.5s, each offset for organic motion.
```
