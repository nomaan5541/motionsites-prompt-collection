# Space Voyage

> **Category:** Landing Page  
> **Type:** hero  
> **License:** free

---

## 🎬 Video Preview

![Video Preview 0](../assets/videos/Space_Voyage_0.mp4)

![Video Preview 1](../assets/videos/Space_Voyage_1.mp4)
## 📋 Prompt

```text
Build a full-screen cinematic hero section for a space travel website using React, Vite, TypeScript, Tailwind CSS, and the motion/react (Framer Motion) library. Recreate every detail exactly as described below.

1. Fonts
Import Instrument Serif (italic) and Barlow (weights 300, 400, 500, 600) from Google Fonts:
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Barlow:wght@300;400;500;600&display=swap');
Register them in tailwind.config.ts:
fontFamily: {
  heading: ["'Instrument Serif'", "serif"],
  body: ["'Barlow'", "sans-serif"],
}
Set --radius: 9999px for fully rounded elements. Use an HSL-based color system where --background: 213 45% 67% (muted sky blue) and --foreground: 0 0% 100% (white).

2. Background Video
Use a full-screen <video> element positioned absolute inset-0 with object-cover, z-0, and these attributes: autoPlay loop muted playsInline preload="auto".
Video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_115329_5e00c9c5-4d69-49b7-94c3-9c31c60bb644.mp4
Poster image: /images/hero_bg.jpeg
Overlay: A div with absolute inset-0 bg-black/5 z-0 on top of the video.
In index.html, add preload hints in <head>:
<link rel="preload" as="image" href="/images/hero_bg.jpeg" type="image/jpeg" />
<link rel="preload" as="video" href="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_115329_5e00c9c5-4d69-49b7-94c3-9c31c60bb644.mp4" type="video/mp4" />

3. Liquid Glass CSS
Define two utility classes in index.css under @layer components:
.liquid-glass (light):
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
.liquid-glass-strong (heavy, for CTA buttons):
.liquid-glass-strong {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  border: none;
  box-shadow: 4px 4px 4px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.15);
  position: relative;
  overflow: hidden;
}
Same ::before pseudo-element as .liquid-glass but with 0.5 and 0.2 alpha values instead of 0.45 and 0.15.

4. Navbar
Fixed position: fixed top-4 left-0 right-0 z-50, with px-8 lg:px-16. Contains:
Left: A logo image (h-12 w-12).
Center (desktop only): A liquid-glass rounded-full pill containing nav links: "Home", "Voyages", "Worlds", "Innovation", "Plan Launch" — each styled px-3 py-2 text-sm font-medium text-foreground/90 font-body.
Inside pill, last item: A solid white button bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-medium font-body with text "Claim a Spot" and an ArrowUpRight icon (lucide-react, h-4 w-4).

5. Hero Content (centered)
Wrapper: flex-1 flex flex-col items-center justify-center text-center px-4 pt-24.
a) Badge:
A liquid-glass rounded-full px-1 py-1 container with:
A solid white pill: bg-white text-black rounded-full px-3 py-1 text-xs font-semibold font-body with text "New".
Adjacent text: text-sm text-foreground/90 pr-3 font-body — "Maiden Crewed Voyage to Mars Arrives 2026".
mb-2 bottom margin.
b) Heading:
Use a custom BlurText component (word-by-word blur-in animation from bottom). Props:
text="Venture Past Our Sky Across the Universe"
className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-foreground leading-[0.8] max-w-2xl justify-center tracking-[-4px]"
delay={100}
animateBy="words"
direction="bottom"
The BlurText component splits text by words, uses IntersectionObserver to trigger, and animates each word with motion.span from {filter: 'blur(10px)', opacity: 0, y: 50} through {filter: 'blur(5px)', opacity: 0.5, y: -5} to {filter: 'blur(0px)', opacity: 1, y: 0} with stepDuration: 0.35 and staggered delay of 100ms per word.
c) Subheading:
A motion.p with classes mt-1 text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight. Text: "Discover the universe in ways once unimaginable. Our pioneering vessels and breakthrough engineering bring deep-space exploration within reach—secure and extraordinary."
Animation: initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }} → animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}, duration: 0.6, delay: 0.8.
d) CTA Buttons:
A motion.div with flex items-center gap-6 mt-4, same blur-in animation with delay: 1.1.
Primary: liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-foreground font-body — "Start Your Voyage" + ArrowUpRight icon (h-5 w-5).
Secondary: Plain text button — "View Liftoff" + Play icon (h-4 w-4 fill-current).

6. Partners Bar (bottom)
Positioned at bottom: flex flex-col items-center gap-4 pb-8.
A liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body label: "Collaborating with top aerospace pioneers globally".
A row of 5 partner names: "Aeon", "Vela", "Apex", "Orbit", "Zeno" — each styled text-2xl md:text-3xl font-heading italic text-white tracking-tight, spaced gap-12 md:gap-16.

7. Z-Index Layering
Video + overlay: z-0
All content (navbar, hero, partners): wrapped in a relative z-10 container.
Navbar: z-50.
```

---

*Generated by MotionSites Export Tool*
