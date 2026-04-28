# AI Designer Agency

> **Category:** Landing Page  
> **Type:** landing-page  
> **License:** free

---

## 🎬 Video Preview

![Video Preview 0](../assets/videos/AI_Designer_Agency_0.mp4)

![Video Preview 1](../assets/videos/AI_Designer_Agency_6.mp4)
## 📋 Prompt

```text
Prompt to recreate this landing page:

Build a dark-themed, single-page landing page for an AI web design agency called "VIRALMEDIA". The design uses a pure black background (#000) with white text, a signature "liquid glass" glassmorphism effect, and two Google Fonts: Barlow (body/UI) and Instrument Serif (italic accent text). Use React, Tailwind CSS, Framer Motion, and hls.js. All buttons are rounded-full.

DESIGN SYSTEM (index.css)

Color tokens (all HSL, dark-only — no light mode):

--background: 0 0% 0% (pure black)
--foreground: 0 0% 100% (pure white)
--card: 0 0% 9%, --card-foreground: 0 0% 100%
--primary: 0 0% 97%, --primary-foreground: 0 0% 9%
--secondary: 0 0% 15%, --secondary-foreground: 0 0% 100%
--muted: 0 0% 15%, --muted-foreground: 0 0% 75%
--accent: 0 0% 15%, --accent-foreground: 0 0% 100%
--border: 0 0% 20%, --input: 0 0% 20%, --ring: 0 0% 100%
--radius: 2px
--font-body: 'Barlow', sans-serif
--font-accent: 'Instrument Serif', serif

Liquid Glass CSS classes:

.liquid-glass — subtle glassmorphism: background: rgba(255,255,255,0.01), background-blend-mode: luminosity, backdrop-filter: blur(4px), no border, box-shadow: inset 0 1px 1px rgba(255,255,255,0.1). Has a ::before pseudo-element for a gradient border effect using linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%, transparent 40%, transparent 60%, rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%) with mask-composite: exclude and padding: 1.4px.

.liquid-glass-strong — stronger variant: same as above but backdrop-filter: blur(50px), box-shadow: 4px 4px 4px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.15), and slightly higher gradient opacity values (0.5/0.2 instead of 0.45/0.15).

Tailwind config: Set fontFamily: { body: ['Barlow', 'sans-serif'], accent: ['Instrument Serif', 'serif'] } at the theme root level (not in extend).

SECTION 1: NAVBAR (fixed)

Fixed top, full-width, z-50, px-8 py-6, flex row with space-between
Left: Logo text "VIRALMEDIA" — text-xl font-semibold tracking-tight font-body text-foreground
Center (hidden on mobile): Nav links ['Work', 'Services', 'About', 'Blog', 'Contact'] — each px-4 py-2 text-sm font-medium text-foreground rounded-sm hover:bg-white/10
Right: "Get Started" button — liquid-glass-strong rounded-full px-6 py-2.5 text-sm font-medium text-foreground

SECTION 2: HERO (full viewport height)

Container: relative w-full h-screen overflow-hidden
Background video (behind everything): Absolutely positioned, object-cover object-bottom. On mobile: -translate-y-[100px], on md+: no translate. Video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260326_073936_8dd07fdb-4f6b-4220-a3f0-9dedfaab0c88.mp4 (autoPlay, loop, muted, playsInline)
Bottom gradient overlay: absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-background to-transparent
Content (z-10, flex column, justify-end, pb-10 md:pb-20):
Avatar row: 3 overlapping circular avatars (pravatar.cc, w-8 h-8 rounded-full border-2 border-background, -space-x-2) + text "7,000+ brands already transformed" in text-muted-foreground text-sm
Heading: text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-1px] md:tracking-[-2px] — "Build Stunning with " + <span className="font-accent italic font-normal">AI Magic</span>
Subtitle: text-sm md:text-lg text-muted-foreground whitespace-normal md:whitespace-nowrap — "AI-powered websites crafted for beauty, speed, and lasting performance."
Email form: liquid-glass rounded-full p-1.5 md:p-2 max-w-lg w-full with transparent input and a solid white bg-foreground text-background rounded-full SUBSCRIBE button. Button uses motion.button with whileHover={{ scale: 1.03 }} and whileTap={{ scale: 0.98 }}

SECTION 3: ABOUT (scroll-reveal text)

bg-background py-32 px-8, max-w-4xl mx-auto text-center
Uses a ScrollRevealText component: splits text into individual words, each wrapped in a motion.span. Uses useScroll with offset: ["start 0.9", "start 0.3"] and useTransform to animate each word's opacity from 0.15 to 1 as user scrolls through
Text: "We blend artificial intelligence with human creativity to craft digital experiences that captivate, convert, and scale — building ambitious brands that truly thrive and lead in the modern web."
Typography: text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-1px] leading-relaxed font-body

SECTION 4: SELECTED WORK (2×2 project grid)

bg-background py-32 pb-16 px-8, max-w-6xl mx-auto
Header: "Selected " + italic accent "Work" — text-4xl md:text-5xl font-medium tracking-[-2px] text-center mb-4
Subtitle: "A curated collection of projects where bold design meets intelligent technology." — text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16
Grid: grid-cols-1 md:grid-cols-2 gap-6
4 project cards, each with framer-motion fade-up (y: 40→0, staggered by i * 0.1):
Image container: aspect-[4/3] liquid-glass rounded-2xl overflow-hidden
Project title: text-xl font-medium text-foreground font-body
Category: text-sm text-muted-foreground font-body mt-1
Projects data:
"Nova Finance" / "Brand & Web Design" / https://motionsites.ai/assets/hero-grow-ai-preview-BlQ8tAQ-.gif
"Pulse Health" / "AI Web Development" / https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif
"Drift Studios" / "Website Optimization" / https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif
"Arc Commerce" / "Brand & Development" / https://motionsites.ai/assets/hero-neuralyn-preview-Br4FRDQA.gif

SECTION 5: VIDEO SHOWCASE (parallax overlap)

h-[650px] overflow-hidden -mt-[325px] z-0 — overlaps upward into the previous section
Full-bleed autoplay video: https://media.cleanshot.cloud/media/21620/nKosRonaEKSufJVJ4VtouFhOPkqgJ3dPoQ8ZP52S.mp4
Top & bottom gradient fades: h-32 bg-gradient-to-b/t from-background to-transparent z-10

SECTION 6: CTA (full-screen with HLS video background)

w-full h-screen overflow-hidden flex items-center justify-center z-10
HLS video background using hls.js: Stream URL https://stream.mux.com/4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8 (with Safari native HLS fallback)
Top/bottom gradient fades: h-40, plus a bg-black/30 overlay
Content (z-10, centered, max-w-3xl):
Heading: "Ready to " + italic accent "Transform" + " Your Brand?" — text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-2px] mb-6
Subtitle: "Let's build something extraordinary together." — text-lg text-muted-foreground mb-10
Two buttons side by side: "START A PROJECT" (solid bg-foreground text-background rounded-full px-10 py-4) and "BOOK A CALL" (liquid-glass-strong rounded-full px-10 py-4)
All elements animate in with framer-motion y: 30/20→0 staggered

SECTION 7: FOOTER

bg-background border-t border-border px-8 py-16, max-w-6xl mx-auto
4-column grid (md:grid-cols-4):
Logo "VIRALMEDIA" + description "AI-powered web design agency crafting digital experiences that convert."
Services: Brand Design, AI Web Design, AI Web Development, Optimization
Company: About, Work, Blog, Careers
Connect: Twitter, LinkedIn, Instagram, Dribbble
Bottom bar: copyright "© 2026 VIRALMEDIA. All rights reserved." + Privacy/Terms links
All links: text-muted-foreground text-sm hover:text-foreground transition-colors

KEY DEPENDENCIES

framer-motion (animations)
hls.js (HLS video streaming in CTA)
Google Fonts: Barlow (400, 500, 600) and Instrument Serif (400 italic) — load via <link> in index.html
```

---

*Generated by MotionSites Export Tool*
