# NOVA Space Systems

> **Category:** Landing Page  
> **Type:** landing-page  
> **License:** free

---

## 🎬 Video Preview

![Video Preview 0](../assets/videos/NOVA_Space_Systems_1.mp4)

![Video Preview 1](../assets/videos/NOVA_Space_Systems_2.mp4)
## 📋 Prompt

```text
Build a NOVA Space Launch Systems landing page — a dark, minimal aerospace website using React + Vite + Tailwind CSS + TypeScript + shadcn/ui. The aesthetic is brutally minimal with a pure black/white monochrome palette, no border-radius anywhere (--radius: 0rem), and a single font: Space Grotesk (loaded from Google Fonts, weights 400–700) used for both display and body text.

🎨 Design System (index.css + tailwind.config.ts)
Color Palette (all HSL, light mode only — dark mode is unused):

--background: 0 0% 0% (pure black)
--foreground: 0 0% 100% (pure white)
--muted-foreground: 0 0% 65% (gray for body text)
--nav-border: 0 0% 35% (subtle gray divider lines)
--border: 0 0% 25%
--radius: 0rem (no rounded corners anywhere)
All other tokens (card, popover, primary, secondary, accent, destructive, sidebar) follow the same black/white monochrome scheme.
Tailwind config:

fontFamily.display and fontFamily.body both map to "Space Grotesk", sans-serif
Custom color nav-border: hsl(var(--nav-border)) for decorative divider lines
tailwindcss-animate plugin installed

📐 Page Layout (Index.tsx)
The page is a single vertical scroll with 3 sections:

Hero fills exactly 100vh including navbar

🧭 Section 1: Navbar
A custom-built navigation bar (no shadcn component). Desktop (md+): 3-column layout using flex items-stretch h-16:

Left: Links "Programs", "Systems", "Discover" — text-sm font-body tracking-wide, separated by vertical 1px bg-nav-border divider lines (with mt-3 mb-3 ml-3 insets). Below the links, a horizontal h-px bg-nav-border line with px-4 mt-1.
Center: Logo "NOVA" — text-2xl font-display font-bold tracking-widest, centered with flex-1. Below it, two side-by-side horizontal divider lines (flex gap-4, each flex-1 h-px bg-nav-border).
Right: "Search" text + Search icon + Menu icon from lucide-react. Same vertical divider treatment as left side (mt-3 mb-3 mr-3).
Mobile: Simplified — logo left, menu icon right, full-width bottom border.

🚀 Section 2: HeroSection
Full viewport height (h-[calc(100vh-theme(spacing.16))]).

Background Video: Autoplaying, muted, looping video. URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_031824_0c85e1e9-fe2b-4d52-8cde-25b0c2b5e8a2.mp4
object-cover fills the container; focal point shifts right on smaller screens (85% mobile, 75% tablet, center on desktop)
No overlay/gradient — video is fully visible

Content overlay (relative z-10 px-8 pt-12 pb-24):
H1: "ROCKETS" — text-[4.5rem] md:text-[10rem] lg:text-[12rem] font-display font-black leading-[0.85] tracking-tighter text-foreground
Right-aligned description block (flex justify-end mt-4, inner flex flex-col items-end max-w-3xl):
Paragraph: "From precise orbital insertions to deep space trajectories, NOVA's launch systems deliver unmatched performance and dependability, backed by over five decades of proven spaceflight excellence." — text-base md:text-lg font-body text-foreground/90 leading-relaxed text-right
CTA Button: "View Our Fleet" — rectangular, no border-radius, bg-foreground text-background pl-5 pr-1.5 py-1.5 font-body text-sm tracking-wide. Contains text + a square icon container (w-10 h-10 bg-background) with ArrowUpRight icon from lucide-react. hover:opacity-90 transition-opacity.

🔬 Section 3: RocketScienceSection
Title block (px-8 pt-32 pb-16 flex justify-center):
"ROCKET" on line 1, "SCIENCE" on line 2 indented with ml-[1.5em] md:ml-[3.5em]
text-[2.5rem] md:text-[6rem] lg:text-[7rem] font-display font-extralight leading-[0.9] tracking-tighter uppercase

Grid area (px-8):
Top border: 4 equal h-px bg-nav-border lines in a flex gap-4
Decorative vertical dividers on left, center, and right edges (1px lines with gap-4 between segments, inset with ml-3/mr-3 py-3)
Desktop (lg+): A CSS Grid grid-cols-[auto_1fr_auto_1fr_auto] grid-rows-3 creating a staggered 2×3 layout:

Top-left: Text card — heading "How do we get to space?" (text-2xl md:text-3xl font-display font-normal) + body paragraph (font-body text-muted-foreground leading-relaxed text-lg). Padding p-12.
Top-right spanning 2 rows: Video (p-6, w-full h-full object-cover): https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_032431_5e054107-51c0-4162-9f0f-3a40054761ef.mp4
Bottom-left spanning 2 rows: Video (p-6): https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_032535_4ccc152e-0cc8-4ee5-a698-e1a98cea8a1e.mp4
Bottom-right: Text card — heading "Launch vehicles" + body paragraph. Same styling. p-12.
Horizontal dividers between rows (2 segments per divider, flex gap-4)

Mobile/Tablet: Stack cards vertically with horizontal dividers between each.

Tech Stack: React 18, TypeScript, Tailwind CSS v3, Vite with @vitejs/plugin-react-swc, shadcn/ui (installed but only used for design tokens, not for these sections).

Font Loading (index.html):
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

*Generated by MotionSites Export Tool*
