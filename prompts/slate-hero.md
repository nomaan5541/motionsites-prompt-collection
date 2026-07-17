# Slate

**ID:** slate-hero  
**Category:** SaaS  
**Type:** hero  

---

Build a full-screen hero landing page for a productivity SaaS called "Slate" with the exact specs below.

Tech Stack
Vite + React + TypeScript
Tailwind CSS
lucide-react for icons
gsap + @gsap/react for the heading text animation (via a SplitText component)
Background
Use a fullscreen autoplay/muted/loop/playsInline <video> absolutely positioned to cover the viewport (absolute inset-0 w-full h-full object-cover). Source:


https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260425_081506_cfddbdab-90d5-49b8-aa1a-8f52de33d335.mp4
A relative z-10 container holds all foreground content with flex flex-col min-h-screen lg:h-screen lg:overflow-hidden.

Typography (global)
In index.css, apply globally:


* {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 200;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1, h2, h3, h4, h5, h6 { font-weight: inherit; }
Liquid Glass Effect
Two reusable CSS classes:


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
Navbar
Padding: px-4 sm:px-6 lg:px-10 py-4 lg:py-5, flex with justify-between.
Left: a 22x22 white inline SVG logo (four-square chevron mark) and the wordmark "Slate" (text-white font-light text-lg tracking-tight).
Logo path: M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z in viewBox 0 0 256 256.
Center (hidden on <lg): nav links Our Approach, Products, Story, Resources, Billing (text-white/70 hover:text-white text-sm, gap-8).
Right: a liquid-glass pill button "Start today", rounded-xl px-4 sm:px-5 py-2 text-white/90 text-xs sm:text-sm font-light, with inline background: rgba(255,255,255,0.22).
Hero Block
Centered column: flex flex-col items-center text-center px-4 sm:px-6 pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-10 lg:pb-12.

Badge (top)
A liquid-glass rounded-full px-3 sm:px-4 py-1.5 mb-4 pill. Three children separated by spacing/divider:

Welcome to Slate 2.4! (text-white/80 text-xs sm:text-sm)
| divider (text-white/50)
Read Guide + <ArrowRight size={13} /> from lucide-react (text-white/70 hover:text-white)
Heading (animated)
A flex-column wrapper:


style={{
  fontSize: 'clamp(36px, 8vw, 76px)',
  letterSpacing: '-1.5px',
  lineHeight: 1.1,
  fontWeight: 200,
  textShadow: '0 2px 20px rgba(0,0,0,0.3)',
}}
Two stacked SplitText components (the second wrapped in <div style={{ marginTop: '-0.15em' }}>):

Line 1: "Grow Your Team"
Line 2: "Thriving"
SplitText props for both:


tag="h1"
delay={60}
duration={0.8}
ease="power3.out"
splitType="chars"
from={{ opacity: 0, y: 40 }}
to={{ opacity: 1, y: 0 }}
threshold={0.1}
rootMargin="0px"
textAlign="center"
Implementation: a GSAP-based component that splits text into characters, animates them on scroll-trigger entrance with a per-char stagger, and respects all those props.

Subtext (staggered fade-in)

<p
  className="text-white/65 max-w-md mb-6 leading-relaxed px-2 hero-fade-up"
  style={{ fontSize: 'clamp(13px, 1.5vw, 17px)', lineHeight: 1.6, animationDelay: '0.6s' }}
>
  Build a thriving hub where your smartest ideas grow<br className="hidden sm:block" />
  smoothly, and your dreams arrive sooner than ever.
</p>
CTA Buttons (staggered fade-in)
Container: flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none.

Primary (animationDelay: '0.85s', inline background: rgba(255,255,255,0.22)):

liquid-glass rounded-xl px-6 sm:px-7 py-2.5 text-white font-light flex items-center justify-center gap-2.5 transition-all duration-200 group hero-fade-up
Label "Start today" (fontSize: 15)
<ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
Secondary (animationDelay: '1.0s'):

Same classes minus the inline background, plus hover:bg-white/8
Label "Watch demo" (fontSize: 15), no icon
Fade-up animation CSS

@keyframes heroFadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.hero-fade-up {
  opacity: 0;
  animation: heroFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  will-change: transform, opacity;
}
Constraints
No purple/indigo hues. White text on the video, glass surfaces use rgba(255,255,255,*) only.
Fully responsive across mobile, tablet, desktop.
No drop shadows on glass surfaces other than the inner highlight already specified.
All icons from lucide-react only.