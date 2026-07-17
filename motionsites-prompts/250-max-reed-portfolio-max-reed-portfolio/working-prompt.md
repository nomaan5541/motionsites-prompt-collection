# Working Prompt: Max Reed Portfolio

This is the original full prompt returned by the MotionSites `get-prompt` endpoint in the current session.

## Metadata

- Prompt ID: `max-reed-portfolio`
- Category: Features
- Page type: hero
- Source status: fetched
- Preview video: https://stream.mux.com/hKCFPaFLC9Wgvyr01ztcjJBERpeuiJQDxZMmWaRDMUk8.m3u8
- Preview image: 

## Prompt

```
Build a full-viewport dark personal portfolio Features section using React + TypeScript + Tailwind CSS + lucide-react.

**Layout & Structure:**
- Full screen dark background `#0a0a0a`, white text, Inter font with antialiased smoothing
- Top header row: left side has a heading "Hi, I'm Max Reed!" (size `text-[28px] sm:text-3xl md:text-4xl lg:text-[44px]`, leading `1.15`, font-normal, tracking-tight) followed by a paragraph "A London-based independent creator shaping sharp visual systems, web-ready products, and story-first campaigns. With a decade of craft behind me, I help ideas move with focus and intention." (text-sm md:text-[15px], leading-[1.6], text-white/60, max-w-3xl). Header container has `max-w-3xl`.
- Right side of header: a liquid-glass rounded-full button "Let's Team Up Today" (px-5 sm:px-6, py-2.5 sm:py-3)
- Overall section padding: `px-4 sm:px-6 md:px-10 lg:px-14 py-6 sm:py-8 md:py-10`, full screen `lg:h-screen`

**Grid (3 columns on lg, 2 on md, 1 on mobile, gap-4 md:gap-5):**

**Column 1 - Background card (rounded-2xl, bg-black):**
- Background video: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_150203_44a5bd32-516a-47ce-a077-8acbf9aa8991.mp4` (autoPlay loop muted playsInline, absolute inset-0 object-cover)
- Top: centered "BACKGROUND" section label (uppercase, tracking-[0.22em], text-[11px], text-white/70) with Sparkle icons on each side (h-3 w-3, strokeWidth 1.5)
- Bottom: career timeline as a 4-col grid `[auto_auto_1fr_auto]`:
  - 2023-Now · Freelance Creative · Solo Studio
  - 2020-2023 · Head of Brand Design · Rove Studio
  - 2017-2020 · Visual Stylist · Ember Works
  - Separator between year and role is a Sparkle icon (h-3 w-3, text-white/60)

**Column 2 (stacked rows, md:grid-rows-[auto_1fr]):**

Top - Client Voice card (rounded-2xl, bg-[#324444], p-5 md:p-6, with noise-overlay):
- Left-aligned "CLIENT VOICE" label with Sparkle icons (justify-start)
- Quote: "Max reshaped our image with a degree of finesse and vision that surpassed what we'd hoped for. The process felt graceful, and the outcomes speak for themselves." (text-[13px] sm:text-[13.5px], leading-[1.6], text-white/85)
- Attribution: **Elena Brooks**, Creative Director — Halcyon

Bottom - 10M+ card (rounded-2xl, bg-black):
- Background video: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_154543_d5b83fc1-9cea-44f3-b5e8-8f325935211a.mp4`
- Centered huge text "10M+" (text-5xl sm:text-6xl md:text-7xl lg:text-[88px], font-light, tracking-tight, drop-shadow)
- Bottom caption "Raised for startups" (centered, text-white/85)

**Column 3 (stacked):**

Top - Daily Software card (rounded-2xl, bg-black):
- Background video: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_153148_d7a3e1dd-e5d0-4ce6-8306-00d7522ecc44.mp4`
- Top: "DAILY SOFTWARE" section label
- Bottom: two scrolling marquee rows of liquid-glass icon tiles (h-14 w-14 md:h-16 md:w-16, rounded-xl). Row 1 scrolls left with icons [Figma, Framer, Palette, PenTool, Layers, Type, Aperture, Chrome]. Row 2 scrolls right with icons [Camera, Brush, Box, Wand2, Figma, Framer, Type, Layers]. Each row duplicated for seamless loop. Mask fade on both edges with `[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]`.

Bottom - Reach Me card (rounded-2xl, bg-[#324444], p-5 md:p-6, noise-overlay):
- "REACH ME" section label
- Email: hi@maxreed.com
- Phone: +44 207 81 63
- Top-right ArrowUpRight icon button (h-9 w-9 rounded-full)

**Custom CSS in index.css:**

```css
.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
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
  background: linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

@keyframes marquee-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@keyframes marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
.animate-marquee-left { animation: marquee-left 22s linear infinite; }
.animate-marquee-right { animation: marquee-right 26s linear infinite; }

.noise-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.55;
  mix-blend-mode: soft-light;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
  background-size: 240px 240px;
}
```

Font: Inter (system fallback). Icons from lucide-react: ArrowUpRight, Sparkle, Figma, Framer, Palette, PenTool, Layers, Type, Aperture, Chrome, Camera, Brush, Box, Wand2. All icons use strokeWidth 1.5.
```
