# Impressive Hero

**ID:** impressive-hero  
**Category:** Hero Section  
**Type:** hero  

---

Create a full-screen hero section in React + TypeScript + Tailwind CSS (Vite) with a fullscreen background video, a floating "liquid glass" navigation bar, an animated character-by-character heading, and a bottom liquid-glass tagline pill.

Stack / Setup:

React 18 + TypeScript + Vite
Tailwind CSS (default config, no theme extensions)
No extra libraries (no framer-motion, no icon libs needed for this section)
Font: 'Helvetica Neue', Helvetica, Arial, sans-serif, weight 400, antialiased
Global CSS (src/index.css):


@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.liquid-glass {
  background: rgba(0, 0, 0, 0.4);
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
    rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.1) 80%, rgba(255,255,255,0.3) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
Components:

AnimatedHeading — splits text into characters, each <span> is inline-block with transition-all duration-500. Starts at opacity: 0, translateX(-18px) and animates to opacity: 1, translateX(0) with a per-character transitionDelay of lineIndex * line.length * charDelay + charIndex * charDelay ms. Supports multi-line via \n split, each line wrapped in <div className="flex flex-wrap justify-center">. Starts after delay ms via setTimeout. Preserves spaces using \u00A0.

FadeIn — wraps children in a div with transition-opacity, toggles opacity 0 -> 1 after delay ms, transitionDuration configurable (default 800ms).

Hero layout (App.tsx):

Root: min-h-screen bg-black text-white relative

Background <video autoPlay loop muted playsInline> absolutely positioned, inset-0 w-full h-full object-cover, with source:
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_084718_72a17915-4964-4059-afcd-22d59399b72e.mp4 (type video/mp4)

Content wrapper: relative z-10 min-h-screen

Navbar (absolutely positioned top, padding px-6 md:px-12 lg:px-16 pt-6): a .liquid-glass rounded-xl bar, flex items-center justify-between px-4 py-2:

Left: <div className="text-2xl font-semibold tracking-tight">VEX</div>
Center (hidden on mobile, md:flex gap-8 text-sm): links "Story", "Investing", "Building", "Advisory" with hover:text-gray-300 transition-colors
Right: white pill button "Start a Chat" — bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100
Center block (min-h-screen px-6 md:px-12 lg:px-16 flex flex-col items-center justify-center text-center, inner w-full max-w-4xl flex flex-col items-center):

AnimatedHeading with text "Shaping tomorrow\nwith vision and action.", classes text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4, inline style letterSpacing: '-0.04em', delay={200}, charDelay={30}
FadeIn delay={800} duration={1000}: <p className="text-base md:text-lg text-gray-300 mb-5">We back visionaries and craft ventures that define what comes next.</p>
FadeIn delay={1200} duration={1000}: two buttons in flex flex-wrap gap-4 justify-center:
Primary: "Start a Chat" — bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors
Secondary: "Explore Now" — liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors
Bottom tagline (absolutely positioned, bottom-0 left-0 right-0 px-6 md:px-12 lg:px-16 pb-12 lg:pb-16 flex justify-center): FadeIn delay={1400} duration={1000} wrapping a .liquid-glass border border-white/20 px-6 py-3 rounded-xl containing <p className="text-lg md:text-xl lg:text-2xl font-light">Investing. Building. Advisory.</p>

Animation timeline:

200ms: heading characters start animating left-to-right, 30ms per character, 500ms each
800ms: subheading fades in over 1000ms
1200ms: CTA buttons fade in over 1000ms
1400ms: bottom tagline fades in over 1000ms
Responsive breakpoints: mobile-first, nav links hidden below md, heading scales from text-4xl up to xl:text-7xl.