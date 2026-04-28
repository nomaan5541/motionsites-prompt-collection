# Grow AI Talent Platform

> **Category:** SaaS  
> **Type:** hero  
> **License:** free

---

## 🎬 Video Preview

![Video Preview 0](../assets/videos/Grow_AI_Talent_Platform_0.mp4)
## 📋 Prompt

```text
Build a dark-themed landing page hero section with a navbar, headline, CTA button, background video with fade-in/out loop, and a logo marquee. Use React + Vite + Tailwind CSS + TypeScript with shadcn/ui. Install @fontsource/geist-sans.

1. Theme & Design Tokens (index.css)
Set up a single dark theme (no light mode toggle). All colors in HSL:
:root {
  --background: 260 87% 3%;
  --foreground: 40 6% 95%;
  --card: 240 6% 9%;
  --card-foreground: 40 6% 95%;
  --popover: 240 6% 9%;
  --popover-foreground: 40 6% 95%;
  --primary: 262 83% 58%;
  --primary-foreground: 0 0% 100%;
  --secondary: 240 4% 16%;
  --secondary-foreground: 40 6% 95%;
  --muted: 240 4% 16%;
  --muted-foreground: 240 5% 65%;
  --accent: 262 83% 58%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 100%;
  --border: 240 4% 20%;
  --input: 240 4% 20%;
  --ring: 262 83% 58%;
  --radius: 0.75rem;
  --hero-heading: 40 10% 96%;
  --hero-sub: 40 6% 82%;
}

Body font: 'Geist Sans', 'Inter', system-ui, sans-serif
Import these font weights:
@import "@fontsource/geist-sans/400.css";
@import "@fontsource/geist-sans/500.css";
@import "@fontsource/geist-sans/600.css";
@import "@fontsource/geist-sans/700.css";

2. Liquid Glass Utility (index.css)
Add a .liquid-glass utility class in @layer utilities:
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

3. Tailwind Config
Add these to tailwind.config.ts:
All the semantic color tokens mapped to hsl(var(--token))
A hero color group: hero.heading and hero.sub
A marquee keyframe: 0% { transform: translateX(0%) } → 100% { transform: translateX(-50%) }
Animation: marquee: "marquee 20s linear infinite"

4. Button Variants
In the shadcn button.tsx, add two custom variants:
hero: "bg-primary text-primary-foreground rounded-full px-6 py-3 text-base font-medium hover:bg-primary/90"
heroSecondary: "liquid-glass text-foreground rounded-full px-6 py-3 text-base font-normal hover:bg-white/5"

5. Navbar Component
Full-width, py-5 px-8, flex row, justify-between
Left: A logo image (32px height). Use a logo.png from src/assets/logo.png
Center: Nav items as plain buttons: "Features" (with ChevronDown icon), "Solutions", "Plans", "Learning" (with ChevronDown icon). Text is text-foreground/90 text-base, gap-1 between items
Right: "Sign Up" button using heroSecondary variant, size="sm", rounded-full px-4 py-2
Below the navbar, add a full-width 1px gradient divider: mt-[3px] w-full h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent

6. Hero Section
Section with bg-background relative overflow-hidden
Contains the Navbar at the top
Below navbar + divider, centered content with pt-20 px-4
Headline "Grow": text-[230px] font-normal leading-[1.02] tracking-[-0.024em], font-family 'General Sans', sans-serif, bg-clip-text text-transparent with background-image: linear-gradient(223deg, #E8E8E9 0%, #3A7BBF 104.15%)
Subtext: text-hero-sub text-center text-lg leading-8 max-w-md mt-4 opacity-80, two lines: "The most powerful AI ever deployed" / "in talent acquisition" (split with <br/>)
CTA Button: heroSecondary variant, text "Schedule a Consult", px-[29px] py-[24px], wrapped in a div with mt-8 mb-[66px]

7. Social Proof / Video Section
Immediately below the hero, a separate <section> with relative w-full overflow-hidden.
Background Video: <video> element: autoPlay muted playsInline, absolute inset-0 w-full h-full object-cover, initial style={{ opacity: 0 }}
Source URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260308_114720_3dabeb9e-2c39-4907-b747-bc3544e2d5b7.mp4
Fade logic (JavaScript): Use requestAnimationFrame to continuously read currentTime and duration. Fade in over 0.5s at the start, fade out over 0.5s at the end. On ended, set opacity to 0, wait 100ms, reset currentTime = 0, and play() again. This creates a seamless manual loop with fade transitions.
Gradient overlays: absolute inset-0 bg-gradient-to-b from-background via-transparent to-background
Content (z-10): flex flex-col items-center pt-16 pb-24 px-4 gap-20
A h-40 spacer div for video visibility

Logo Marquee at max-w-5xl:
Left side: text "Relied on by brands / across the globe" in text-foreground/50 text-sm, with <br/>, whitespace-nowrap shrink-0
Right side: horizontally scrolling marquee using animate-marquee (the 20s infinite animation)
Logos are placeholder brands: Vortex, Nimbus, Prysma, Cirrus, Kynder, Halcyn — duplicated for seamless loop
Each logo: a small liquid-glass w-6 h-6 rounded-lg square with the first letter, plus the brand name in text-base font-semibold text-foreground
Gap between logos: gap-16

8. Page Composition
The Index page simply renders <HeroSection /> then <SocialProofSection /> sequentially with no wrapper styling.
```

---

*Generated by MotionSites Export Tool*
