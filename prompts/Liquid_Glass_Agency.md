# Liquid Glass Agency

> **Category:** Landing Page  
> **Type:** landing-page  
> **License:** free

---

## 🎬 Video Preview

![Video Preview 0](../assets/videos/Liquid_Glass_Agency_0.mp4)

![Video Preview 1](../assets/videos/Liquid_Glass_Agency_1.mp4)

![Video Preview 2](../assets/videos/Liquid_Glass_Agency_2.mp4)

![Video Preview 3](../assets/videos/Liquid_Glass_Agency_3.mp4)
## 📋 Prompt

```text
Build a single-page landing page for an AI-powered web design agency using React + Vite + TypeScript + Tailwind CSS + shadcn/ui. The aesthetic is dark, premium, Apple-inspired with a custom "liquid glass" morphism effect. Pure black background throughout.

FONTS & DESIGN SYSTEM
Google Fonts import:

Instrument Serif (italic) — headings
Barlow (300, 400, 500, 600) — body text
Tailwind config — extend fontFamily:

heading: ["'Instrument Serif'", "serif"]
body: ["'Barlow'", "sans-serif"]
CSS Variables (:root in index.css):

--background: 213 45% 67%;
--foreground: 0 0% 100%;
--primary: 0 0% 100%;
--primary-foreground: 213 45% 67%;
--border: 0 0% 100% / 0.2;
--radius: 9999px;
--font-heading: 'Instrument Serif', serif;
--font-body: 'Barlow', sans-serif;

All headings use: font-heading italic text-white tracking-tight leading-[0.9]
All body text uses: font-body font-light text-white/60 text-sm
All buttons use: font-body with rounded-full

LIQUID GLASS CSS (in @layer components)
Two variants — .liquid-glass (subtle) and .liquid-glass-strong (more visible):

.liquid-glass:
background: rgba(255, 255, 255, 0.01);
background-blend-mode: luminosity;
backdrop-filter: blur(4px);
border: none;
box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
position: relative;
overflow: hidden;

::before pseudo-element — a gradient border mask:
content: '';
position: absolute; inset: 0;
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

.liquid-glass-strong: Same but backdrop-filter: blur(50px), stronger box-shadow: 4px 4px 4px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.15), and slightly higher gradient opacity (0.5 / 0.2).

SECTION 1 — NAVBAR (fixed)
Fixed at top-4, full-width, z-50. Left: logo image (48×48). Center: a liquid-glass rounded-full pill containing nav links ("Home", "Services", "Work", "Process", "Pricing") as text-sm font-medium text-foreground/90 + a solid white bg-white text-black rounded-full "Get Started" button with ArrowUpRight icon.

SECTION 2 — HERO (1000px height)
Container: relative overflow-visible, height 1000px, black background.

Background video:
src: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4
Position: absolute, top: 20%, w-full h-auto object-contain z-0
Autoplay, loop, muted, playsInline
Poster fallback image at /images/hero_bg.jpeg

Overlays:
absolute inset-0 bg-black/5 z-0 (light darkening)
Bottom gradient: absolute bottom-0 left-0 right-0 z-[1], height 300px, linear-gradient(to bottom, transparent, black)

Content (z-10, centered, paddingTop 150px):
Badge pill: liquid-glass rounded-full containing a white bg-white text-black rounded-full "New" tag + "Introducing AI-powered web design." text
Heading: Use a BlurText animation component — text: "The Website Your Brand Deserves" — text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-foreground leading-[0.8] tracking-[-4px] — animates word-by-word from bottom with blur-to-clear effect (delay 100ms per word)
Subtext (motion.p): "Stunning design. Blazing performance. Built by AI, refined by experts. This is web design, wildly reimagined." — fades in with blur at 0.8s delay
CTA buttons (motion.div, 1.1s delay): liquid-glass-strong rounded-full "Get Started" + ArrowUpRight icon, and a text-only "Watch the Film" + Play icon
Partners bar at bottom (mt-auto pb-8 pt-16)

BlurText component: Uses motion/react (framer-motion). Splits text by words, each word animates via IntersectionObserver with filter: blur(10px) → blur(5px) → blur(0px), opacity: 0 → 0.5 → 1, y: 50 → -5 → 0. Step duration 0.35s.

SECTION 3 — PARTNERS BAR
Centered column. Top: liquid-glass rounded-full badge "Trusted by the teams behind". Below: horizontal row of partner names ("Stripe", "Vercel", "Linear", "Notion", "Figma") rendered as text-2xl md:text-3xl font-heading italic text-white, gap-12.

SECTION 4 — START SECTION ("How It Works")
Full-width section, min-height: 700px, py-32 px-6 md:px-16 lg:px-24.

Background HLS video:
src: https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8
Use hls.js library. Absolute, full cover, z-0. Top + bottom fade gradients (200px each, black ↔ transparent).

Content (z-10, centered, min-height 500px):
Badge: liquid-glass rounded-full — "How It Works"
Heading: "You dream it. We ship it." — text-4xl md:text-5xl lg:text-6xl font-heading italic
Subtext: "Share your vision. Our AI handles the rest—wireframes, design, code, launch. All in days, not quarters."
Button: liquid-glass-strong rounded-full "Get Started" + ArrowUpRight

SECTION 5 — FEATURES CHESS (alternating rows)
py-24 px-6 md:px-16 lg:px-24. Header: badge "Capabilities", heading "Pro features. Zero complexity."

Row 1 (text left, image right):
H3: "Designed to convert. Built to perform."
P: "Every pixel is intentional. Our AI studies what works across thousands of top sites—then builds yours to outperform them all."
Button: liquid-glass-strong rounded-full "Learn more"
Image: GIF in liquid-glass rounded-2xl overflow-hidden container

Row 2 (image left, text right — using lg:flex-row-reverse):
H3: "It gets smarter. Automatically."
P: "Your site evolves on its own. AI monitors every click, scroll, and conversion—then optimizes in real time. No manual updates. Ever."
Button: "See how it works"

SECTION 6 — FEATURES GRID (4 columns)
Badge "Why Us", heading "The difference is everything."

4 cards in grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6. Each card: liquid-glass rounded-2xl p-6. Contains:
Icon in liquid-glass-strong rounded-full w-10 h-10 circle
Title: text-lg font-heading italic text-white
Description: text-white/60 font-body font-light text-sm

Cards:
⚡ Zap — "Days, Not Months" — "Concept to launch at a pace that redefines fast."
🎨 Palette — "Obsessively Crafted" — "Every detail considered. Every element refined."
📊 BarChart3 — "Built to Convert" — "Layouts informed by data. Decisions backed by performance."
🛡️ Shield — "Secure by Default" — "Enterprise-grade protection comes standard."

SECTION 7 — STATS
Background HLS video:
src: https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8
Desaturated: style={{ filter: 'saturate(0)' }}. Top + bottom black fades (200px).

Content (z-10): liquid-glass rounded-3xl p-12 md:p-16, grid grid-cols-2 lg:grid-cols-4 gap-8 text-center:
"200+" — "Sites launched"
"98%" — "Client satisfaction"
"3.2x" — "More conversions"
"5 days" — "Average delivery"
Values: text-4xl md:text-5xl lg:text-6xl font-heading italic text-white
Labels: text-white/60 font-body font-light text-sm

SECTION 8 — TESTIMONIALS
Badge "What They Say", heading "Don't take our word for it."

3-column grid. Each: liquid-glass rounded-2xl p-8. Quote in text-white/80 font-body font-light text-sm italic. Name: text-white font-body font-medium text-sm. Role: text-white/50 font-body font-light text-xs.

Testimonials:
Sarah Chen, CEO Luminary — "A complete rebuild in five days..."
Marcus Webb, Head of Growth Arcline — "Conversions up 4x..."
Elena Voss, Brand Director Helix — "They didn't just design our site..."

SECTION 9 — CTA FOOTER
Background HLS video:
src: https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8
Top + bottom black fades (200px).

Content (z-10, centered):
Heading: "Your next website starts here." — text-5xl md:text-6xl lg:text-7xl
Subtext: "Book a free strategy call. See what AI-powered design can do."
Two buttons: liquid-glass-strong "Book a Call" + solid bg-white text-black "View Pricing"
Footer: mt-32 pt-8 border-t border-white/10, copyright "© 2026 Studio" + links (Privacy, Terms, Contact) in text-white/40 text-xs

DEPENDENCIES
hls.js, motion (framer-motion), lucide-react, tailwindcss-animate

KEY PATTERNS
All section badges use: liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4
All section headings use: text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]
All video sections use HLS via hls.js with Safari fallback (canPlayType)
All video fades: 200px height, linear-gradient(to bottom/top, black, transparent)
Outer page wrapper: bg-black overflow-visible
```

---

*Generated by MotionSites Export Tool*
