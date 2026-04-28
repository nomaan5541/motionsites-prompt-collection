# Orbit Engineers

> **Category:** Agency  
> **Type:** landing-page  
> **License:** free

---

## 🎬 Video Preview

![Video Preview 0](../assets/videos/Orbit_Engineers_0.mp4)

![Video Preview 1](../assets/videos/Orbit_Engineers_1.mp4)

![Video Preview 2](../assets/videos/Orbit_Engineers_2.mp4)
## 📋 Prompt

```text
Create a single-page landing page for a fictional space engineering consultancy called "WE ARE ORBIT ENGINEERS". The page has 3 full-screen hero sections that the user navigates between using buttons (not scroll). Use React + Tailwind CSS + framer-motion + lucide-react icons (ChevronDown, ArrowRight).

Font & Color System
Font: Inter (Google Fonts: https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap), set as font-sans in Tailwind config.
Color scheme (HSL in CSS variables):
--background: 210 33% 19% (dark blue-gray)
--foreground: 0 0% 100% (white)
--primary: 199 89% 60% (cyan accent)
--accent: 199 89% 60% (same cyan)
All text is white (text-foreground). Background is irrelevant since videos cover the full viewport.

Background Videos
Three elements are fixed, full-screen, layered behind content at -z-10. Each is autoPlay loop muted playsInline with object-cover. They crossfade using transition-opacity duration-700 — the active section's video is opacity-100, others are opacity-0.

Section 0: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_190803_f5595254-156c-4d10-ad09-51a56eb4bc1e.mp4
Section 1: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_204728_2dbcd1c4-63bc-4779-b06c-b7e2d5788ea7.mp4
Section 2: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_210050_14d4d9cf-782b-4f6f-9764-08d793cf427c.mp4

Navigation Bar (always visible, z-20)
Left: Small logo icon (8x8) + bold text stack: WE ARE / ORBIT / ENGINEERS (text-xl, font-bold, tracking-tight, line-height none, stacked with line breaks)
Center (hidden on mobile, hidden md:flex): Three links — Industries, Projects, Insights — uppercase, tracking-widest, text-sm, font-medium
Right: Geographic coordinates in monospace font: 51.50732 N / -0.12765 W (text-xs, tracking-widest, uppercase, font-mono, text-right, stacked with line breaks)
Horizontal padding: px-10, top padding: pt-8

Section Transitions (framer-motion AnimatePresence mode="wait")
All sections use cinematic framer-motion transitions:

Section 0 enter: opacity: 0 → 1, scale: 1.05 → 1, blur: 10px → 0px (duration 0.8s, ease [0.22, 1, 0.36, 1])
Section 0 exit: opacity → 0, scale → 0.92, blur → 12px, y → -60
Section 1 & 2 enter: opacity: 0 → 1, y: 80 → 0, scale: 1.08 → 1, blur: 14px → 0px (duration 0.9s)
Section 1 & 2 exit: opacity → 0, y → -80, scale → 0.95, blur → 10px

Section 0 — Hero Landing
Layout: Flex column, centered content
Decorative elements: Two vertical line images positioned absolutely on left and right edges (left-10, right-10), spanning nearly full height (h-[calc(100%-3rem)])
Headline: "Unlock Tactical / Excellence through Space / Engineering" — text-2xl sm:text-3xl md:text-4xl lg:text-5xl, font-normal, letter-spacing: -3px, centered, max-w-4xl, line breaks

Bottom bar: Left side has a "Scroll to explore" button with bouncing ChevronDown icon (navigates to section 1). Right side has a small logo icon at 60% opacity.

Section 1 — Mission Statement
Layout: Responsive — stacked vertically on mobile (flex-col items-center gap-10), horizontal row on desktop (md:flex-row md:items-center md:gap-16 md:justify-between)
Left: Large heading "Spatial Vision / at Your Command" — text-4xl sm:text-5xl md:text-5xl lg:text-6xl, font-light, letter-spacing: -2px, leading-[0.95]. Animates in from x: -60 with 0.3s delay.
Center: CTA button — "Begin Your Mission" with ArrowRight icon. White background, dark text (bg-foreground text-background), rounded-full, px-8 py-4, tracking 0.25em, uppercase. Hover scales to 105%. Animates in from y: 30 with 0.4s delay.
Right: A "Why We Are" label (text-xs, tracking 0.3em, uppercase) alongside 4 vertically stacked dots (first filled, rest outline — small 5w images). Animates in from x: 60 with 0.45s delay.
Bottom bar: Three elements — "Back to top" button (left, with rotated ChevronDown), centered tagline "Orbital Solutions is a key strategic / consulting firm in space engineering" (text-xs, tracking 0.25em, uppercase, animates from y: 30), and "Next" button (right, with bouncing ChevronDown).

Section 2 — Service Detail
Layout: Centered content with decorative vertical lines on left/right (same as section 0 but h-[calc(100%-1rem)])
Content stack (centered, gap-6):
Section number "01" — text-sm, tracking 0.3em, uppercase, 60% opacity foreground, font-mono. Animates from y: 20, delay 0.3s.
Heading "Operational Feasibility / Evaluation" — text-3xl sm:text-4xl md:text-5xl lg:text-6xl, font-light, letter-spacing: -2px, leading-[1.05]. Animates from y: 40, delay 0.4s.
Description paragraph — "We analyze engineering proposals against / strategic benchmarks to uncover growth paths / and highlight untapped market potential." — text-sm, tracking 0.15em, 70% opacity foreground, max-w-md, font-mono, leading-relaxed. Animates from y: 30, delay 0.55s.
Bottom bar: "Back" button (left), CTA button "Reach Out" with + symbol (center, same style as section 1 CTA), empty spacer div on right (w-20).

Key Design Patterns
All navigation between sections uses useState(0) with handleNext (min +1, max 2) and handlePrev (max -1, min 0)
The entire page is min-h-screen with overflow-hidden
All interactive elements use cursor-pointer
Navigation text uses tracking-widest uppercase consistently
Headlines use negative letter-spacing for a tight, architectural feel
Technical/data text uses font-mono
Buttons and links use hover:text-foreground/80 or hover:scale-105 transitions
```

---

*Generated by MotionSites Export Tool*
