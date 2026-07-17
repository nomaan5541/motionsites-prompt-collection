# Planet Orbit

**ID:** planet-orbit-hero  
**Category:** SaaS  
**Type:** hero  

---

Create a dark SaaS landing page hero section with the following exact specifications:

Font: Geist Sans (400, 500, 600, 700 weights) via @fontsource/geist-sans

Color System (HSL):

Background: 260 87% 3% (near-black with slight purple)
Foreground: 40 6% 95% (warm off-white)
Primary/Accent: 121 95% 76% (#87FB89 green)
Primary foreground: 0 0% 5% (dark text on green buttons)
Hero heading: 40 10% 96%
Hero sub: 40 6% 82%
Secondary/Muted: 240 4% 16%
Border: 240 4% 20%

Background Video: Full-screen background video covering the entire section (navbar through social proof). URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260309_042944_4a2205b7-b061-490a-852b-92d9e9955ce9.mp4 Set to autoPlay, loop, muted, playsInline with object-cover and absolute inset-0.

Liquid Glass Effect (reusable utility class .liquid-glass):

background: rgba(255, 255, 255, 0.01);
background-blend-mode: luminosity;
backdrop-filter: blur(4px);
border: none;
box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
overflow: hidden;
Plus a ::before pseudo-element with a vertical gradient border using mask-composite:

padding: 1.4px;
background: linear-gradient(180deg,
  rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
  rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
  rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
-webkit-mask-composite: xor;
mask-composite: exclude;

Layout (top to bottom, all centered over the video):

Navbar — Centered liquid-glass pill (rounded-3xl, max-w-[850px]) containing:

Logo: Small rounded-lg gradient square with a crosshair SVG icon + "APEX" text (xl, semibold)
Nav items: "Features" (with chevron-down), "Solutions", "Plans", "Learning" (with chevron-down) — text-base, foreground/90 opacity
CTA button: "Sign Up" — green primary, rounded-xl, small size

Announcement Badge — liquid-glass rounded-full pill: "Nova+ Launched!" text + "Explore" chip with ChevronRight icon, nested pill with bg-white/5

Heading — text-4xl sm:text-6xl lg:text-7xl, font-semibold, tracking-tight, leading-[1.05], max-w-5xl:

Accelerate Your
Revenue Growth Now

Subheading — text-lg, max-w-md, opacity-80, hero-sub color: "Drive your funnel forward with clever workflows, analytics, and seamless lead management."

Two CTA Buttons side by side:

"Start Free Right Now" — green primary, rounded-full, px-6 py-3
"Schedule a Consult" — liquid-glass, rounded-full, px-6 py-3, hover:bg-white/5

Social Proof Marquee at the bottom — "Relied on by brands across the globe" label (foreground/50, text-sm) on the left, then a horizontally scrolling marquee of brand names: Vortex, Nimbus, Prysma, Cirrus, Kynder, Halcyn. Each has a small liquid-glass rounded-lg icon square with the first letter + the brand name (text-base, font-semibold). Duplicated array for seamless loop. Animation: translateX(0%) → translateX(-50%) over 20s linear infinite.

Button Variants (class-variance-authority):

hero: bg-primary text-primary-foreground rounded-full px-6 py-3 text-base font-medium hover:bg-primary/90
heroSecondary: liquid-glass text-foreground rounded-full px-6 py-3 text-base font-normal hover:bg-white/5