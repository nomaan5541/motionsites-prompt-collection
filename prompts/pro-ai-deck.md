# Pro AI Deck

**ID:** pro-ai-deck  
**Category:** Presentation  
**Type:** hero  

---

PROMPT TO RECREATE STUDIO PITCH DECK SLIDES

Create a full-screen slide deck presentation app using React, TypeScript, Vite, Tailwind CSS, Motion (framer-motion), hls.js, and Lucide React icons. The presentation has 7 slides with horizontal swipe/scroll/keyboard navigation and animated transitions.

GLOBAL SETUP

Dependencies (package.json):

react ^18.3.1, react-dom ^18.3.1
motion ^12.38.0 (import from "motion/react")
hls.js ^1.6.15
lucide-react ^0.344.0
tailwindcss ^3.4.1, autoprefixer, postcss
vite ^5.4.2, @vitejs/plugin-react ^4.3.1
typescript ^5.5.3
Fonts (loaded via Google Fonts in index.html):
Instrument Serif (italic) -- used as font-heading for all headings
Barlow (weights 300, 400, 500, 600) -- used as font-body for all body text
Material Symbols Rounded (opsz 24, wght 400, FILL 1, GRAD 0) -- used for icons on slide 2
Load via these exact <link> tags in <head>:
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Barlow:wght@300;400;500;600&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,1,0" rel="stylesheet" />
Tailwind Config:
fontFamily.heading: ["'Instrument Serif'", 'serif']
fontFamily.body: ["'Barlow'", 'sans-serif']
Custom CSS color variables for background, foreground, card, primary, secondary, muted, accent, destructive, border, input, ring

borderRadius.full: var(--radius) where --radius: 9999px
CSS Variables (index.css :root):
--background: 213 45% 67%;
--foreground: 0 0% 100%;
--card: 213 45% 62%;
--card-foreground: 0 0% 100%;
--primary: 0 0% 100%;
--primary-foreground: 213 45% 67%;
--secondary: 213 45% 72%;
--secondary-foreground: 0 0% 100%;
--muted: 213 35% 60%;
--muted-foreground: 0 0% 100% / 0.7;
--accent: 213 45% 72%;
--accent-foreground: 0 0% 100%;
--destructive: 0 84.2% 60.2%;
--border: 0 0% 100% / 0.2;
--input: 0 0% 100% / 0.2;
--ring: 0 0% 100% / 0.3;
--radius: 9999px;
--glass-bg: rgba(255, 255, 255, 0.12);
--glass-border: rgba(255, 255, 255, 0.25);
--glass-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
--glass-blur: 16px;
Glassmorphism CSS classes (defined in 
@layer
 components in index.css):

.liquid-glass:
background: rgba(255, 255, 255, 0.01)
background-blend-mode: luminosity
backdrop-filter: blur(4px)
No border

box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1)
position: relative, overflow: hidden
::before pseudo-element creates a gradient border effect using mask-composite: exclude. The gradient goes 180deg from rgba(255,255,255,0.45) at 0% -> 0.15 at 20% -> 0 at 40% -> 0 at 60% -> 0.15 at 80% -> 0.45 at 100%, with 1.4px padding
.liquid-glass-strong:
Same as above but backdrop-filter: blur(50px)

box-shadow: 4px 4px 4px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.15)
::before gradient slightly stronger: 0.5 at 0%/100%, 0.2 at 20%/80%
Body styles: font-family: 'Barlow', sans-serif; background: #000; color: #fff; overflow-x: hidden;
SHARED COMPONENTS
HlsVideo component (src/components/HlsVideo.tsx):
Props: src: string, className?: string, style?: React.CSSProperties
Uses a <video> element with autoPlay, loop, muted, playsInline
On mount: if src ends with .m3u8 and Hls.isSupported(), creates an Hls instance, calls loadSource and attachMedia; returns cleanup that calls hls.destroy(). Otherwise sets video.src directly.
BlurText component (src/components/BlurText.tsx):
Props: text: string, className?: string, delay?: number (default 100)
Splits text into words. Uses IntersectionObserver (threshold 0.2) to trigger animation on visibility.
Each word is a motion.span with initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}, animates through keyframes: [{ filter: 'blur(5px)', opacity: 0.5, y: -5 }, { filter: 'blur(0px)', opacity: 1, y: 0 }]
Duration 0.7s per word, staggered by (i * delay) / 1000, easeOut
Each word has class inline-block mr-[0.25em]
SlideControls component (src/components/SlideControls.tsx):
Fixed to bottom of screen: fixed bottom-0 left-0 right-0 z-50 px-8 lg:px-12 pb-6
Left side: slide counter 01 / 07 format (text-white/30, text-xs, tracking-[0.2em], uppercase) | divider (w-px h-4 bg-white/15) | animated slide label (text-white/50, text-xs)
Right side: dot indicators (h-1 rounded-full, active dot is w-24 bg-white, inactive is w-8 bg-white/20 hover:bg-white/40, transition-all duration-500) | divider | prev/next buttons using ChevronLeft/ChevronRight from lucide-react (w-8 h-8 rounded-full, text-white/50 hover:text-white hover:bg-white/10, disabled:opacity-20)
APP COMPONENT (src/App.tsx):
7 slides in order: TitleSlide ("Introduction"), ProblemSlide ("The Process"), CapabilitiesSlide ("Capabilities"), WhyUsSlide ("Differentiators"), StatsSlide ("Traction"), TestimonialsSlide ("Social Proof"), CtaSlide ("Next Steps")
AnimatePresence mode="wait" with custom direction
Slide transition variants:enter: { x: dir > 0 ? '100%' : '-100%', opacity: 0, scale: 0.95 }
center: { x: 0, opacity: 1, scale: 1 }
exit: { x: dir > 0 ? '-30%' : '30%', opacity: 0, scale: 0.95 }
transition: duration 0.65, ease [0.4, 0, 0.2, 1]

Navigation: mouse wheel (threshold 30px delta), keyboard (ArrowRight/ArrowDown/Space = next, ArrowLeft/ArrowUp = prev), touch swipe (threshold 60px)

Animation lock: 800ms cooldown between navigations using useRef
SLIDE 1 -- TitleSlide (src/slides/TitleSlide.tsx):
Background: Full-screen <video> (autoPlay, loop, muted, playsInline, object-cover) with NO overlay. Video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260411_104229_49794008-3d16-4cb6-9a8c-73d7751b0e79.mp4
Layout: relative z-10, full height, flex column, justify-between, px-10 lg:px-20 py-12 pb-20
Top bar (motion.div, fade from y:-10, delay 0.1):Logo: w-8 h-8 rounded-full bg-white with "S" in black font-heading italic text-sm
"Studio" in font-heading italic text-white/80 text-lg
Divider: w-px h-5 bg-white/20 mx-2
"Pitch Deck 2026" in text-white/30 font-body text-[10px] tracking-[0.2em] uppercase

Center content (flex-1, flex column, justify-center, max-w-3xl):Pill badge (motion.div, scale from 0.95, delay 0.2): liquid-glass rounded-full, contains "New" badge (bg-white text-black rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider) and "AI-powered web design" (text-white/70 text-xs font-light)
H1: text-5xl md:text-7xl lg:text-8xl xl:text-[6.5rem] font-heading italic text-white leading-[0.85] tracking-[-3px] mb-8 using BlurText component with text "The Website Your Brand Deserves" delay={80}
Subtitle (motion.p, slide from x:-20, delay 0.9): "Stunning design. Blazing performance. Built by AI, refined by experts." -- text-base md:text-lg text-white/50 font-body font-light leading-relaxed max-w-xl mb-10
CTA button (motion.div, slide from x:-20, delay 1.1): liquid-glass-strong rounded-full px-6 py-3, "Get Started" with ArrowUpRight icon (w-4 h-4)

Bottom trusted-by bar (motion.div, fade delay 1.4): "Trusted by" label + ['Stripe', 'Vercel', 'Linear', 'Notion', 'Figma'] in text-lg md:text-xl font-heading italic text-white/20
SLIDE 2 -- ProblemSlide (src/slides/ProblemSlide.tsx):

Background: HlsVideo component with src https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8 (absolute inset-0, object-cover)
Overlay: <div className="absolute inset-0 bg-black/60 z-[1]" /> -- 60% black overlay
Layout: relative z-10, full height, flex, px-10 lg:px-20 py-12 pb-20. Inner div: flex-col lg:flex-row, items-start, gap-12 lg:gap-20, w-full, my-auto
Left column (flex-1):Section label (motion.span, slide from x:-15, delay 0.1): "The Process" -- text-white/30 font-body text-[10px] tracking-[0.3em] uppercase, mb-6
Headline (motion.h2, slide from x:-20, delay 0.2): "Our AI simplifies data analysis, eliminates decision bottlenecks, and seamlessly integrates" -- text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading italic text-white tracking-tight leading-[0.9] mb-8
Body (motion.p, slide from x:-15, delay 0.4): "Our AI algorithms strategically address industry challenges, enhancing efficiency and facilitating optimal decision-making, providing a definitive solution for businesses in the AI era." -- text-white/40 font-body font-light text-sm md:text-base leading-relaxed max-w-xl

Right column (w-full lg:w-[420px], flex-col gap-4, shrink-0): 3 cards, each staggered (delay 0.3 + i*0.12, slide from x:30):Card container: liquid-glass rounded-2xl p-6 lg:p-7

Icon + title row: flex items-center gap-3 mb-3Icon container: w-10 h-10 rounded-xl bg-gradient-to-br from-white/15 to-white/5
Icon: <span className="material-symbols-rounded text-white/80 text-xl">{iconName}</span>
Title: text-base font-body font-semibold text-white
Description: text-sm font-body font-light text-white/40 leading-relaxed pl-[52px]

Card data:icon: "query_stats", title: "Streamlined Analytics", desc: "Our AI simplifies intricate data analysis, providing businesses with quick and accurate insights."
icon: "psychology", title: "Decision Optimization", desc: "Eliminate decision-making bottlenecks for timely and informed choices, enhancing overall operational efficiency."
icon: "integration_instructions", title: "Effortless Integration", desc: "Our algorithms seamlessly integrate AI with plug-and-play ease, empowering businesses without disruption."

SLIDE 3 -- CapabilitiesSlide (src/slides/CapabilitiesSlide.tsx):

Background: HlsVideo component with src https://stream.mux.com/s8pMcOvMQXc4GD6AX4e1o01xFogFxipmuKltNfSYza0200.m3u8 (absolute inset-0, object-cover, style={{ opacity: 0.5 }})
Base: bg-black behind the video
Layout: relative z-10, full height, flex column, px-10 lg:px-20 py-12 pb-20
Section label (motion.span, slide from x:-15, delay 0.1): "Capabilities" -- text-white/30 font-body text-[10px] tracking-[0.3em] uppercase, mb-4

Headline (motion.h2, slide from x:-20, delay 0.2): "Pro features.\nZero complexity." (line break with <br />) -- text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-heading italic text-white tracking-tight leading-[0.85] mb-8 lg:mb-auto
Cards grid: grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8. Two cards, staggered (delay 0.35 + i*0.15, slide from y:30):Card container: liquid-glass rounded-2xl overflow-hidden flex flex-col

Video area: h-44 lg:h-56, overflow-hidden, relative. Contains either:MP4 video (<video> with autoPlay, loop, muted, playsInline, object-cover)
HLS video (HlsVideo component, object-cover)

Text area: p-6 lg:p-8Title: text-lg md:text-xl font-heading italic text-white mb-2 leading-tight
Body: text-sm font-body font-light text-white/40 leading-relaxed

Card data:title: "Designed to convert. Built to perform.", body: "Every pixel is intentional. Our AI studies what works across thousands of top sites -- then builds yours to outperform them all.", videoSrc: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085844_21a8f4b3-dea5-4ede-be16-d53f6973bb14.mp4 (MP4)
title: "It gets smarter. Automatically.", body: "Your site evolves on its own. AI monitors every click, scroll, and conversion -- then optimizes in real time.", videoSrc: https://stream.mux.com/T6oQJQ02cQ6N01TR6iHwZkKFkbepS34dkkIc9iukgy400g.m3u8 (HLS)

SLIDE 4 -- WhyUsSlide (src/slides/WhyUsSlide.tsx):
Background: Full-screen <video> (autoPlay, loop, muted, playsInline, object-cover) with NO opacity reduction. Video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260411_104032_69319010-2458-492b-b04d-b40a5dfa4482.mp4
Gradient overlay: <div className="absolute bottom-0 left-0 right-0 h-[50%] z-[1] pointer-events-none" style={{ background: 'linear-gradient(to top, black, transparent)' }} /> -- black-to-transparent gradient from bottom to middle
Layout: relative z-10, full height, flex column, px-10 lg:px-20 py-12 pb-20

Top section (flex-col lg:flex-row lg:items-end lg:justify-between, mb-auto):Left: section label "Why Us" (text-white/30, text-[10px], tracking-[0.3em], uppercase, mb-4) + headline "The difference\nis everything." (text-3xl md:text-4xl lg:text-5xl font-heading italic text-white tracking-tight leading-[0.9])
Right: subtitle (motion.p, slide from x:20, delay 0.3): "We do not just build websites. We engineer competitive advantages that compound over time." -- text-white/35 font-body font-light text-sm max-w-sm

Bottom cards (flex-1 flex items-end): grid-cols-2 lg:grid-cols-4, gap-4 lg:gap-6, w-full. 4 cards staggered (delay 0.3 + i*0.1, slide from y:30):Card: liquid-glass rounded-2xl p-6 lg:p-8 flex flex-col
Icon: liquid-glass-strong rounded-full w-10 h-10 containing Lucide icon (w-4 h-4 text-white), mb-6
Title: text-sm md:text-base font-body font-semibold text-white mb-2
Desc: text-xs font-body font-light text-white/40 leading-relaxed

Card data (icons from lucide-react):Zap, "Days, Not Months", "Concept to launch at a pace that redefines fast. Because waiting is not a strategy."
Palette, "Obsessively Crafted", "Every detail considered. Every element refined. Design so precise, it feels inevitable."
BarChart3, "Built to Convert", "Layouts informed by data. Decisions backed by performance. Results you can measure."
Shield, "Secure by Default", "Enterprise-grade protection comes standard. SSL, DDoS mitigation, compliance. All included."

SLIDE 5 -- StatsSlide (src/slides/StatsSlide.tsx):
Background: HlsVideo component with src https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8 (absolute inset-0, object-cover, style={{ filter: 'saturate(0)' }} -- desaturated/grayscale). NO overlay.
Layout: relative z-10, full height, flex column, px-10 lg:px-20 py-12 pb-20
Top section (mb-auto):Section label "Traction" (text-white/30, text-[10px], tracking-[0.3em], uppercase, mb-6)
Headline: "Numbers that speak for themselves" -- text-4xl md:text-5xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.9] max-w-4xl

Stats grid: flex-col gap-6, containing two rows of grid-cols-1 lg:grid-cols-2 gap-4First row: stats[0] and stats[1], staggered delay 0.35 + i*0.1
Second row: stats[2] and stats[3], staggered delay 0.55 + i*0.1

Each stat: flex-col gap-8Top divider: <div className="h-px bg-white/20" />

Content: flex items-start gap-10 lg:gap-14Number: text-7xl md:text-8xl lg:text-[9.5rem] font-heading italic text-white leading-none shrink-0 (WHITE color, not blue)
Description: pt-3 lg:pt-4 pr-8 lg:pr-20 flex-1, text-white text-base md:text-lg lg:text-2xl font-body font-normal leading-relaxed

Stat data:"200+" -- "Sites launched and generating measurable results for brands across industries"
"98%" -- "Client satisfaction rate across all projects delivered in the last two years"
"3.2x" -- "Average conversion uplift compared to previous client sites and industry benchmarks"
"5 days" -- "Average delivery from concept to production-ready launch across all project types"

SLIDE 6 -- TestimonialsSlide (src/slides/TestimonialsSlide.tsx):

Background: Full-screen <video> (autoPlay, loop, muted, playsInline, object-cover) with NO overlay. Video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4
Layout: relative z-10, full height, flex column, px-10 lg:px-20 py-12 pb-20
Section label: "Social Proof" (text-white/30, text-[10px], tracking-[0.3em], uppercase, mb-4)
Headline: "Don't take our\nword for it." -- text-3xl md:text-4xl lg:text-5xl font-heading italic text-white tracking-tight leading-[0.9] mb-auto
Testimonial cards grid: grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6. 3 cards staggered (delay 0.3 + i*0.12, slide from y:25):Card: liquid-glass rounded-2xl p-8 lg:p-10 flex flex-col justify-between
Quote section (mb-8): opening curly quote in text-3xl font-heading italic text-white/15 block mb-4, then quote text in text-white/70 font-body font-light text-sm lg:text-base italic leading-relaxed

Attribution (flex items-center gap-3, pt-4 border-t border-white/10):Avatar: w-8 h-8 rounded-full bg-white/10, initials in text-white/60 font-body text-xs font-medium
Name: text-white font-body font-medium text-sm
Role: text-white/40 font-body font-light text-xs

Testimonial data:"A complete rebuild in five days. The result outperformed everything we had spent months building before." -- Sarah Chen, CEO, Luminary
"Conversions up 4x. That is not a typo. The design just works differently when it is built on real data." -- Marcus Webb, Head of Growth, Arcline
"They did not just design our site. They defined our brand. World-class does not begin to cover it." -- Elena Voss, Brand Director, Helix

SLIDE 7 -- CtaSlide (src/slides/CtaSlide.tsx):
Background: Full-screen <video> (autoPlay, loop, muted, playsInline, object-cover) with NO overlay. Video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_024928_1efd0b0d-6c02-45a8-8847-1030900c4f63.mp4
Layout: relative z-10, full height, flex column, px-10 lg:px-20 py-12 pb-20
Section label: "Next Steps" (text-white/30, text-[10px], tracking-[0.3em], uppercase, mb-4)
Main content (flex-1, flex-col lg:flex-row, items-start lg:items-center, gap-12 lg:gap-20):
Left column (flex-1, max-w-2xl):Headline (motion.h2, slide from x:-25, delay 0.2): "Your next website\nstarts here." -- text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading italic text-white leading-[0.85] tracking-tight mb-6
Body (motion.p, slide from x:-20, delay 0.5): "Book a free strategy call. See what AI-powered design can do. No commitment, no pressure. Just possibilities." -- text-white/40 font-body font-light text-sm md:text-base leading-relaxed max-w-md mb-10

Buttons (motion.div, slide from x:-15, delay 0.7): flex items-center gap-4Primary: bg-white text-black rounded-full px-6 py-3 text-sm font-body font-semibold with "Book a Call" + ArrowUpRight icon
Secondary: liquid-glass-strong rounded-full px-6 py-3 text-sm font-body font-medium text-white with "View Pricing"

Right column (motion.div, slide from x:30, delay 0.6): liquid-glass rounded-2xl p-8 lg:p-10 w-full max-w-xsHeader: Mail icon in liquid-glass-strong rounded-full w-10 h-10 + "Get in touch" label
Contact info: hello@studio.ai, +1 (555) 000-0000
Locations (pt-4 border-t border-white/10): San Francisco, CA and London, UK in text-white/30 text-xs

Footer (motion.div, fade delay 1.0): flex justify-between, border-t border-white/10 pt-4Left: "(c) 2026 Studio. All rights reserved." in text-white/30 text-xs
Right: Privacy, Terms, Contact links in text-white/30 text-xs hover:text-white/60

VIDEO URL REFERENCE:
Slide 1 BG: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260411_104229_49794008-3d16-4cb6-9a8c-73d7751b0e79.mp4
Slide 2 BG: https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8 (HLS)
Slide 3 BG: https://stream.mux.com/s8pMcOvMQXc4GD6AX4e1o01xFogFxipmuKltNfSYza0200.m3u8 (HLS, 50% opacity)
Slide 3 Card 1 video: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085844_21a8f4b3-dea5-4ede-be16-d53f6973bb14.mp4
Slide 3 Card 2 video: https://stream.mux.com/T6oQJQ02cQ6N01TR6iHwZkKFkbepS34dkkIc9iukgy400g.m3u8 (HLS)
Slide 4 BG: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260411_104032_69319010-2458-492b-b04d-b40a5dfa4482.mp4
Slide 5 BG: https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8 (HLS, desaturated)
Slide 6 BG: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4
Slide 7 BG: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_024928_1efd0b0d-6c02-45a8-8847-1030900c4f63.mp4
FILE STRUCTURE:
index.html
package.json
tailwind.config.js
postcss.config.js
vite.config.ts
tsconfig.json / http://tsconfig.app.json / tsconfig.node.json
src/
  main.tsx
  App.tsx
  index.css
  vite-env.d.ts
  components/
    BlurText.tsx
    HlsVideo.tsx
    SlideControls.tsx
  slides/
    TitleSlide.tsx
    ProblemSlide.tsx
    CapabilitiesSlide.tsx
    WhyUsSlide.tsx
    StatsSlide.tsx
    TestimonialsSlide.tsx
    CtaSlide.tsx