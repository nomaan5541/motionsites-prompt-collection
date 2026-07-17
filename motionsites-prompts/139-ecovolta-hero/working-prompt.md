# EcoVolta

**ID:** ecovolta-hero  
**Category:** Hero Section  
**Type:** hero  

---

PROMPT:

Build a single-page hero section for a renewable energy company called "EcoVolta" using React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide React icons. The page should be a full-viewport height (h-screen) layout with no scrolling (overflow-hidden).

TECH STACK:

React 18 + TypeScript
Vite
Tailwind CSS 3
Framer Motion (for animations)
Lucide React (for icons)
clsx + tailwind-merge (for className utility)
Font: Google Fonts Inter (weights 300-900)
BACKGROUND:

The entire page background color is #F5F3EE (warm off-white/cream)
A full-page background video plays on loop, autoplaying, muted, with playsInline. It is fixed, inset-0, w-full h-full object-cover at z-0
Video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_161801_19c1f902-b569-4d42-87b0-4de571a14399.mp4
NAVBAR (z-10, relative):

Flex row, space-between, padding px-4 md:px-8 py-4 md:py-6
Left side: Text logo "EcoVolta" (text-lg md:text-xl font-semibold), followed by a language selector showing a Globe icon (lucide Globe, 16x16) and "En" text
Center (hidden on smaller than lg): Navigation links -- "Renewables", "Strategies", "Photovoltaic", "Wind Systems", "Packages" -- each text-sm text-gray-700 hover:text-gray-900, spaced gap-8
Right side: "Sign In" link (hidden below sm) with a rounded-full border (border border-black/20) and padding px-4 md:px-6 py-2 md:py-2.5; "Clean Energy" button with bg-black text-white rounded-full same padding
HERO CONTENT (z-10, centered, flex-col items-center):

Container: flex-1 flex flex-col items-center px-4 md:px-8 pt-4 md:pt-8
Badge/Pill: Rounded-full pill with border border-black/20, containing emojis and text: sun -> planet earth -> "Delivering power innovate" -> seedling (exact: <span>sun emoji</span> <span>arrow</span> <span>earth globe emoji</span> <span>Delivering power innovate</span> <span>arrow</span> <span>seedling emoji</span>). On mobile, shorter text "Power innovate". Font size text-xs md:text-sm.

Main Heading: Uses a custom StaggeredFade animation component. Text: "Renewable Power For Tomorrow, Infinite Clean Solutions". Styling: text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-normal text-center max-w-5xl mb-3 md:mb-4. Color: #31463B (dark forest green). The animation reveals each letter individually with a staggered 0.03s delay per letter, 0.3s duration fade-in, triggered once when in view.

Subheading: Wrapped in FadeDown component (delay 0.5s). Text: "Sustainable Energy Platform. Engineering, deploying, and servicing solar arrays for homes, businesses, and large-scale operations worldwide." Styling: text-center text-gray-600 max-w-3xl mb-4 md:mb-5 text-sm md:text-base lg:text-lg.

CTA Buttons (FadeDown delay 0.7s): Two buttons side by side (column on mobile, row on sm+):

Primary "Explore Options": bg-gradient-to-r from-[#3C684D] to-[#4A7144] (green gradient), white text, rounded-full, contains a Leaf icon (16x16) on left, text, and a circular icon button on right (w-7 h-7 md:w-8 md:h-8) with gradient background linear-gradient(59deg, #567A5E 0%, #78A873 100%) containing a filled Play icon
Secondary "Start Network": White bg, text-gray-700, rounded-full, text on left, circular icon on right with gradient linear-gradient(59deg, #EEEEEE 0%, #CBCBCB 100%) containing a black ArrowRight icon
BOTTOM-LEFT ELEMENT (hidden below md, absolute bottom-24 left-8, z-10):

White rounded-lg box (40x40) with a MapPin icon in text-[#4A7C5A]
Below it: "4521 Sunvalley," (font-medium text-gray-900) and "Rd7, USA" (text-gray-600)
BOTTOM-CENTER ELEMENT (absolute bottom-20 md:bottom-24, z-10):

A "liquid glass" play button: 36x36 md:40x40 circle with glassmorphism effect (see CSS below), containing a filled white Play icon
Next to it: "Clean Power System" text in text-xs md:text-sm font-medium text-white
BOTTOM-RIGHT ELEMENT (hidden below lg, absolute bottom-48 right-8, z-10):

Three overlapping avatar circles (profile images):
Left: 40x40 circle, z-0, positioned left-0
Center: 64x64 circle with 4px white border, z-10, centered via left-1/2 -translate-x-1/2
Right: 40x40 circle, z-0, positioned right-0
Container: h-16 w-28 relative
Avatar image URLs:
Left: https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260404_181959_c031059f-0b95-4099-89ca-105c74073dd7.png&w=1280&q=85
Center: https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260404_181856_0904710c-03e6-460d-86ac-9acc0958001f.png&w=1280&q=85
Right: https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260404_182114_826e4e5d-c7c6-425f-a72b-0410be243f72.png&w=1280&q=85
Text: "+ 37k Deployments" (text-sm font-medium)
Row of 5 icons below: RefreshCw, Square, PlusCircle, Grid2X2, Sparkles (all 20x20, text-black)
LOGO MARQUEE (bottom of page, z-10):

Padding pb-6 md:pb-8, overflow hidden
Infinitely scrolling list of company names: Retool, remote, ARC, Raycast, runway, ramp, HEX, Vercel, descript (duplicated for seamless loop)
Each name: text-gray-400 text-base md:text-xl font-medium whitespace-nowrap, gap gap-8 md:gap-16
CSS keyframe animation scroll translating from 0 to -50% on X axis, duration 15s on mobile / 30s on desktop, linear infinite
Left and right gradient fade overlays: w-16 md:w-32, gradient from #F5F3EE to transparent
LIQUID GLASS CSS (custom utility class .liquid-glass):


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
SCROLL KEYFRAME:


@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
ANIMATION COMPONENTS:

StaggeredFade: Renders an <h1> using Framer Motion. Splits the text into individual letters. Each letter fades in (opacity: 0 -> 1) with a staggered delay of i * 0.03s and duration 0.3s. Triggered once when the element enters the viewport (useInView with once: true).

FadeDown: A Framer Motion wrapper div that animates from opacity: 0, y: -20 to opacity: 1, y: 0 with duration: 0.6s and a configurable delay. Triggered once when in view.

RESPONSIVE BREAKPOINTS:

Mobile-first design
sm (640px): CTA buttons go horizontal, "Sign In" visible, badge shows full text
md (768px): Larger text sizes, bottom-left address visible, spacing increases
lg (1024px): Desktop nav links visible, bottom-right avatars/deployments visible, heading reaches text-6xl