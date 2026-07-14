Build a single landing page with only a fixed Navbar and a full-screen Hero section that contains a parallax dashboard mock and a foreground grass image. Use React + Vite + TypeScript + Tailwind + framer-motion + lucide-react. No backend.

1. Global setup

`index.html` — add fonts in `<head>`
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,400,0..1,0" rel="stylesheet" />
```

Body background must be `#08020e`.

`tailwind.config.ts` — extend
```ts
fontFamily: { inter: ['Inter','ui-sans-serif','system-ui','sans-serif'] },
colors: {
  landing: {
    surface: "rgba(255,255,255,0.10)",
    "surface-hover": "rgba(255,255,255,0.16)",
    border: "rgba(255,255,255,0.10)",
    "border-strong": "rgba(255,255,255,0.20)",
    text: "rgba(255,255,255,0.80)",
    "text-muted": "rgba(255,255,255,0.60)",
  },
}
```

`src/index.css` — add
```css
body { background-color: #08020e; margin: 0; min-height: 100vh; color: white; }

.landing-root {
  --background: 0 0% 0%;
  --foreground: 0 0% 98%;
  --radius: 0.75rem;
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
}

/* Liquid glass utility */
.liquid-glass {
  background: rgba(255,255,255,0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
  position: relative;
  overflow: hidden;
}
.liquid-glass::before {
  content: ''; position: absolute; inset: 0;
  border-radius: inherit; padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor; mask-composite: exclude;
  pointer-events: none;
}

.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
.scrollbar-hide::-webkit-scrollbar { display: none; }
```

Wrap the page in `<div className="landing-root font-inter min-h-screen relative overflow-x-hidden">`.

2. Asset URLs (all remote — no local files)

- Hero background video: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260521_014404_fadafdb1-4df6-4699-be9c-77d25f39a3d0.mp4`
- Dashboard live-preview video: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4`
- Foreground grass PNG: `https://miptxtnhvjrkpmnjgdhk.supabase.co/storage/v1/object/public/training-assets/landing%2Fhero-bottom-bg.png`

3. Components

`MIcon` (Google Material Symbols)
```tsx
export const MIcon = ({ name, size = 16, className = "", filled = false, weight = 400, style }: {
  name: string; size?: number; className?: string; filled?: boolean; weight?: number; style?: React.CSSProperties;
}) => (
  <span aria-hidden className={`material-symbols-outlined select-none leading-none inline-flex items-center justify-center ${className}`}
    style={{ fontSize: size, width: size, height: size,
      fontVariationSettings: `'FILL' ${filled?1:0}, 'wght' ${weight}, 'GRAD' 0, 'opsz' ${Math.min(48,Math.max(20,size))}`,
      ...style }}>{name}</span>
);
```

`AnimatedText` — text slides up on hover, replacement slides in from below (40px, 0.2s easeInOut). Uses framer-motion `motion.div` parent (`overflow-hidden`) with two stacked `motion.span` children; rest variant `{y:0}` / `{y:40}`, hover variant `{y:-40}` / `{y:0}`.

`FadeUp` — framer-motion wrapper: `initial={{opacity:0, y:24}}`, `whileInView={{opacity:1, y:0}}`, `viewport={{once:true, amount:0.3}}`, `transition={{ duration:0.6, delay, ease:[0.22,1,0.36,1] }}`. Honors `useReducedMotion`. Accepts `delay`, `duration`, `y` props.

`PrimaryButton` — white pill CTA
- Classes: `inline-flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-black leading-none transition-colors h-12 px-9 text-sm font-medium`
- Wraps children in `<AnimatedText>`.

`SecondaryButton` — glass pill
- Classes: `inline-flex items-center justify-center rounded-full bg-landing-surface hover:bg-landing-surface-hover border border-landing-border text-foreground backdrop-blur-[2.5px] font-medium leading-none h-8 px-4 text-sm` (size=sm)
- Wraps children in `<AnimatedText>`.

`HeroBadge`
```tsx
<div className="inline-flex items-center justify-center rounded-full bg-landing-surface border border-landing-border px-4 h-7 text-sm text-landing-text">
  {children}
</div>
```

4. Navbar (fixed, transparent)

```tsx
const navItems = [
  { name: "About", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "What you get", href: "#what-you-get" },
  { name: "Pricing", href: "#pricing" },
];
```

- `<nav className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent">`
- Inner: `mx-auto flex h-16 max-w-[1080px] items-center justify-between px-6 lg:px-0`
- Left logo: `<a href="/" className="flex items-center gap-2 text-foreground">` with `<MIcon name="rocket_launch" size={20} />` + `<span className="text-base font-semibold tracking-tight">UI Rocket</span>`
- Center (lg only): `flex items-center gap-8`, each link `text-sm text-landing-text hover:text-foreground transition-colors`, wrap label in `<AnimatedText>`. Smooth-scroll on click via `document.getElementById(id)?.scrollIntoView({behavior:"smooth"})`.
- Right actions (lg only): `flex items-center gap-5` → "Login" link (same style as nav links, wrapped in AnimatedText) + `<SecondaryButton href="/auth" size="sm">Get started</SecondaryButton>`
- Mobile: menu button (`MIcon name="menu" size={24}`) opens a right-side sheet (use shadcn Sheet) with the same items stacked.

5. Hero section

```tsx
const HERO_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260521_014404_fadafdb1-4df6-4699-be9c-77d25f39a3d0.mp4";
const GRASS_IMG  = "https://miptxtnhvjrkpmnjgdhk.supabase.co/storage/v1/object/public/training-assets/landing%2Fhero-bottom-bg.png";
```

Inside the Hero component, set up scroll-linked parallax:
```ts
const sectionRef = useRef<HTMLElement>(null);
const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
const dashboardY    = useTransform(scrollYProgress, [0, 1],   ["0%", "-25%"]);
const grassY        = useTransform(scrollYProgress, [0, 1],   ["0%",  "20%"]);
const contentY      = useTransform(scrollYProgress, [0, 1],   ["0%", "-60%"]);
const contentOpacity= useTransform(scrollYProgress, [0, 0.6], [1, 0]);
```

Structure:
```tsx
<section ref={sectionRef} id="hero" className="relative w-full min-h-screen">
  {/* 1) Background video — full bleed, no overlay */}
  <video src={HERO_VIDEO} autoPlay muted loop playsInline
    className="absolute inset-0 w-full h-full object-cover z-0" />

  {/* 2) Centered copy + CTA, with scroll fade/translate */}
  <motion.div style={{ y: contentY, opacity: contentOpacity }}
    className="relative z-20 flex flex-col items-center text-center px-4 sm:px-6 pt-28 sm:pt-36 md:pt-44 max-w-[980px] mx-auto">
    <FadeUp delay={0}>
      <HeroBadge>Founder member sale special</HeroBadge>
    </FadeUp>
    <FadeUp delay={0.1}>
      <h1 className="mt-8 text-foreground text-[38px] sm:text-[52px] md:text-[64px] leading-[1.05] tracking-[-0.03em] max-w-[960px]">
        Are you a designer or builder who wants to stay ahead of AI?
      </h1>
    </FadeUp>
    <FadeUp delay={0.2}>
      <p className="mt-6 text-landing-text text-base sm:text-lg leading-[1.5] max-w-[520px]">
        Learn to turn your ideas into stunning websites with AI
      </p>
    </FadeUp>
    <FadeUp delay={0.3} className="mt-10">
      <PrimaryButton as="button">Get course</PrimaryButton>
    </FadeUp>
  </motion.div>

  {/* 3) Dashboard mock — slower parallax (-25%) */}
  <motion.div style={{ y: dashboardY }}
    className="relative z-10 mt-8 sm:mt-10 md:mt-12 px-4 sm:px-6">
    <DashboardMock />
  </motion.div>

  {/* 4) Foreground grass — in front of dashboard, drifts down 20% */}
  <motion.img src={GRASS_IMG} alt="" aria-hidden style={{ y: grassY }}
    className="pointer-events-none select-none absolute left-0 right-0 bottom-[-40px] sm:bottom-[-100px] lg:bottom-[-220px] w-full z-30 object-cover" />
</section>
```

6. DashboardMock — liquid-glass wrapper with two-column grid

```tsx
<div className="liquid-glass w-full max-w-[1100px] aspect-[3/4] sm:aspect-[16/10] lg:aspect-[16/9] rounded-2xl mx-auto overflow-hidden p-2 sm:p-3">
  <div className="grid h-full grid-cols-1 sm:grid-cols-[minmax(220px,320px)_1fr] gap-2 sm:gap-3">
    <div className="min-h-0 hidden sm:block"><ChatPanel animateMessagesIn /></div>
    <div className="min-h-0"><LivePreviewHero /></div>
  </div>
</div>
```

`ChatPanel` (left column)
- Container: `flex h-full flex-col overflow-hidden rounded-2xl border border-white/10`, inline style `background: rgba(8,8,10,0.6); backdropFilter: blur(24px); WebkitBackdropFilter: blur(24px)`.
- Header: `flex items-center gap-2 px-4 py-3 border-b border-white/5`. Circle `w-7 h-7 rounded-full bg-white/5 flex items-center justify-center` with `<MIcon name="auto_awesome" size={14} className="text-white/80" />`. Text column: `Vibe Design course` (`text-sm font-medium text-white`) + subtitle `Learn how to build website with AI` (`text-[11px] text-white/40`).
- Messages list: `flex-1 overflow-y-auto scrollbar-hide px-4 py-5 space-y-4`. Each row wrapped in `<FadeUp delay={i*0.12} y={16}>`. Layout:
  - Row: `flex justify-end` (user) or `flex justify-start` (assistant).
  - Bubble: `max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed`; user = `bg-white/15 text-white/90`; assistant = `bg-white/5 text-white/70 border border-white/5`.
- Seed messages (exact text):
  1. assistant — "Welcome to the Vibe Design course! I'll guide you through building stunning websites with AI. What would you like to learn first?"
  2. user — "I want to learn how to build a hero section with a cinematic video background using AI."
  3. assistant — "Great choice! In this course, you'll learn how to create full-screen looping videos, liquid glass nav bars, email signups, and manifesto buttons — all with AI assistance. Let's dive in!"
- Input: outer `p-3 border-t border-white/5`. Inner `liquid-glass rounded-2xl flex items-end gap-2 p-2` with a `<textarea rows={1}>` (`flex-1 resize-none bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none max-h-32`, placeholder "Ask about the course...") and a send button `bg-white text-black rounded-xl p-2 hover:bg-white/90` containing `<MIcon name="arrow_upward" size={16} className="text-black" />`. Enter (no shift) sends; appends a user message then a canned assistant reply. After updates, scroll list to bottom smoothly.

`LivePreviewHero` (right column)
Uses `lucide-react` icons `Globe, ArrowRight, Instagram, Twitter`.

- Outer: `relative w-full h-full min-h-[500px] overflow-hidden rounded-2xl bg-black`.
- Background video (with JS fade-in/out loop):
  ```tsx
  <video ref={videoRef} src={DASHBOARD_VIDEO} muted autoPlay playsInline preload="auto"
    className="absolute inset-0 w-full h-full object-cover translate-y-[17%]"
    style={{ opacity: 0 }} />
  ```
  Behavior (in `useEffect`):
  - On `loadeddata`: set opacity 0, `play()`, fade opacity to 1 over 500ms via `requestAnimationFrame` linear tween.
  - On `timeupdate`: when `duration - currentTime < 0.55s` and not already fading out, fade opacity to 0 over 500ms.
  - On `ended`: snap opacity to 0, after 100ms reset `currentTime=0`, `play()`, reset fadingOut flag, fade back to 1.
  - Cleanup all listeners and cancel RAF on unmount.

- Inner content stack (`relative z-10 flex flex-col min-h-full h-full`):

  Mini-nav `relative z-20 px-3 sm:px-4 py-3`, inside a `rounded-full px-2 sm:px-4 py-1.5 flex items-center justify-between max-w-5xl mx-auto`:
  - Left group `flex items-center gap-3 sm:gap-5`: `Globe size={14} text-white` + `<span className="text-white font-semibold text-xs sm:text-sm">Asme</span>`. After it, `hidden md:flex items-center gap-5` of links `Features`, `Pricing`, `About` each `text-white/80 hover:text-white text-[11px] font-medium`.
  - Right group `flex items-center gap-2 sm:gap-3`: "Sign Up" link (`text-white text-[11px] font-medium hidden sm:inline`) + glass pill `<a className="liquid-glass rounded-full px-3 sm:px-4 py-1 text-white text-[11px] font-medium">Login</a>`.

  Hero block `relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-4 text-center -translate-y-[8%] sm:-translate-y-[15%]`:
  - `<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-5 tracking-tight whitespace-nowrap" style={{ fontFamily: "'Instrument Serif', serif" }}>Built for the curious</h1>`
  - Inner column `max-w-sm w-full space-y-3`:
    - Email pill `liquid-glass rounded-full pl-4 pr-1.5 py-1.5 flex items-center gap-2`: `<input type="email" placeholder="Enter your email" className="flex-1 bg-transparent text-white placeholder:text-white/40 text-xs focus:outline-none" />` + circular submit `bg-white rounded-full p-1.5 text-black` with `<ArrowRight size={14} />`.
    - Paragraph `text-white/80 text-[11px] leading-relaxed px-2`: "Stay updated with the latest news and insights. Subscribe to our newsletter today and never miss out on exciting updates."
    - Centered glass pill button: `liquid-glass rounded-full px-5 py-1.5 text-white text-[11px] font-medium hover:bg-white/5 transition-colors` → label "Manifesto".

  Socials row `relative z-10 flex justify-center gap-2 pb-4 sm:pb-6` — three glass round buttons (`liquid-glass rounded-full p-2 text-white/80 hover:text-white hover:bg-white/5 transition-all`) wrapping `Instagram`, `Twitter`, `Globe` icons at `size={14}`.

7. Page assembly

```tsx
export default function Page() {
  return (
    <div className="landing-root font-inter min-h-screen relative overflow-x-hidden">
      <Navbar />
      <Hero />
    </div>
  );
}
```

8. Behavioral notes (must match)

- Hero video is autoplay/muted/loop/playsInline with no dark overlay.
- Z-index stack: video `z-0`, dashboard `z-10`, copy/CTA `z-20`, grass `z-30`, navbar `z-50`.
- Hero copy fades + translates up to `-60%` during scroll through the section, fully fading by 60% scroll progress.
- Dashboard parallaxes up (`-25%`); grass drifts down (`+20%`) — creates depth.
- All button labels animate with the "text slides up, replacement slides in from below" effect via `AnimatedText`.
- Inter is the global UI font; the dashboard hero `<h1>` "Built for the curious" uses Instrument Serif.