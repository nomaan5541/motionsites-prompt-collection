# Dark Portfolio Hero

**ID:** 15  
**Category:** Portfolio  
**Type:** landing-page  

---

Build a Next.js 14 portfolio landing page with a full-screen hero section and an animated loading screen. The entire site uses a dark theme. Here is the exact specification:

Tech Stack
Next.js 14 (App Router) + TypeScript
Tailwind CSS v3 with CSS custom properties for theming
GSAP for hero entrance animations
Framer Motion (AnimatePresence, motion) for the loading screen
Google Fonts: Inter (body, variable --font-body) and Instrument Serif (display/headings, variable --font-display, weight 400, italic)

Dark Theme — CSS Variables
Set on [data-theme="dark"] (force dark mode, no toggle):

--bg: #0a0a0a
--surface: #141414
--text: #f5f5f5
--muted: #888888
--accent: #f5f5f5
--stroke: #1f1f1f

Map these in Tailwind config as bg, surface, text, muted, accent, stroke color tokens. Font families: font-display → var(--font-display), font-body → var(--font-body).

Accent Gradient (used everywhere)
linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)
This blue gradient is used for: the navbar logo ring, button hover borders, the "Say hi" hover ring, and the loading screen progress bar.

Component 1: Loading Screen
A full-screen loader (fixed inset-0 z-[9999]) with solid bg-bg background. It runs for 2.7 seconds, then fades out with Framer Motion exit={{ opacity: 0 }} over 0.6s.

Layout (3 elements):

Top-left: The word "Portfolio" — text-xs md:text-sm, text-muted, uppercase, tracking-[0.3em]. Positioned top-8 left-8 md:top-12 md:left-12. Animates in: y: -20 → 0, opacity: 0 → 1, duration 0.6s, delay 0.1s.
Center: Three words rotate in sequence — "Design" → "Create" → "Inspire" — one every 900ms. Styled text-4xl md:text-6xl lg:text-7xl font-display italic text-text/80. Uses AnimatePresence mode="wait", each word enters from y: 20, exits to y: -20, duration 0.4s, easing [0.4, 0, 0.2, 1].
Bottom-right: A counter that counts from 000 → 100 over 2.7s using requestAnimationFrame. Styled text-6xl md:text-8xl lg:text-9xl font-display text-text tabular-nums. Positioned bottom-8 right-8 md:bottom-12 md:right-12. Animates in from y: 20.
Progress bar: A thin 3px line at the very bottom. Background track is bg-stroke/50. The fill uses the accent gradient (#89AACC → #4E85BF) with a subtle glow (box-shadow: 0 0 8px rgba(137, 170, 204, 0.35)). Scales from scaleX(0) to scaleX(1) using transform-origin: left.

Behavior: After the counter hits 100, wait 400ms, then call onComplete(). The parent AppWrapper toggles isLoading to false, which fades the loader out and fades the page content in (opacity 0 → 1, transition 0.5s ease-out).

Component 2: Navbar (inside Hero, fixed)
A floating pill navbar, fixed top-0 left-0 right-0, centered with flex justify-center, z-50.

Pill container: inline-flex, rounded-full, backdrop-blur-md, border border-white/10, bg-surface, px-2 py-2. On scroll past 100px, adds shadow-md shadow-black/10.

Contents (left to right):

Logo — a 36x36px circle (w-9 h-9) with the accent gradient as a 2px ring (p-[2px]). The inside is bg-bg with the letters "JA" centered in text-[13px] font-display italic tracking-tighter. On hover the gradient rotates (from/to colors swap) and the text scales 110%.
Divider — w-px h-5 bg-stroke mx-1 (hidden on mobile)
Nav links: "Home", "Work", "Resume" — text-xs sm:text-sm, rounded-full, px-3 sm:px-4 py-1.5 sm:py-2. Active state: text-text bg-stroke/50. Hover: text-text bg-stroke/50.
Divider
"Say hi ↗" button — same pill styling, with a gradient border ring on hover.
Divider

Component 3: Hero Section
Full viewport height (min-h-screen), flex column, centered content.

Background video layer (absolute inset-0 z-0):
Video URL: https://stream.mux.com/Gs3wZfrtz6ZfqZqQ02c02Z7lugV00FGZvRpcqFTel66r3g.m3u8
An <video> element: autoPlay muted loop playsInline, with a .avif poster image as fallback.
The video is centered and covers the area: absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover.
A subtle overlay: absolute inset-0 bg-black/20.
A bottom fade gradient: absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg to-transparent.

Content (centered, z-10, text-center):

Eyebrow label: "COLLECTION '26" — text-xs text-muted uppercase tracking-[0.3em] mb-8. Class blur-in.
Name: "Michael Smith" — text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text mb-6. Class name-reveal.
Role line: A [Role] lives in Chicago. — text-lg md:text-xl lg:text-2xl text-muted mb-10. The [Role] cycles through "Creative" → "Fullstack" → "Founder" → "Scholar" every 2 seconds, styled as font-display italic text-text with a CSS animate-fade-in animation.
Bio: "Designing seamless digital interactions by focusing on the unique nuances which bring systems to life." — text-sm md:text-base text-muted leading-relaxed max-w-md mb-12.
CTA buttons (side by side):
"See Works": px-7 py-3.5 bg-text text-bg text-sm rounded-full. On hover: scale-105, gradient border ring appears.
"Reach out...": px-7 py-3.5 bg-bg text-text text-sm rounded-full border-2 border-stroke. Same gradient hover border technique.

Scroll indicator (bottom center, absolute bottom-8):
The word "SCROLL" — text-xs text-muted uppercase tracking-[0.2em].
Below it, a thin vertical line (w-px h-10 bg-stroke) with an animated dot sliding down on a 1.5s infinite loop.

GSAP Entrance Animations (Hero)
On mount, a GSAP timeline (power3.out ease):
.name-reveal: opacity 0→1, y 50→0, duration 1.2s, starting at 0.1s.
.blur-in: opacity 0→1, filter blur(10px)→blur(0px), y 20→0, duration 1s, stagger 0.1s, starting at 0.3s.