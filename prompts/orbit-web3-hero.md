# Orbit Web3

**ID:** orbit-web3-hero  
**Category:** Web3  
**Type:** hero  

---

Create a dark, cinematic hero landing page with these exact specifications:

Font: Google Font Instrument Serif (serif), loaded via <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap">. Used as the base font for the entire page (font-family: 'Instrument Serif', serif).

Color palette (HSL, CSS variables):
--background: 150 20% 5% (deep dark green-black)
--foreground: 45 30% 90% (warm off-white)
--accent: 45 70% 75% (warm amber/gold for button)
--accent-foreground: 150 20% 5% (dark text on accent)

Background video: Full-screen, absolutely positioned behind all content. Muted, autoplay, loop, playsInline.
URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_094440_a3592600-bd1e-49e5-9bce-a73662061d83.mp4
object-cover, fills entire viewport.

Navbar: Horizontal, top-left. Contains an SVG "W" logo (stroke-based zigzag path: M8 10L14 30L20 16L26 30L32 10, strokeWidth 3, rounded caps/joins, 40x40). Nav links: "Vault", "Send", "Receive", "Trade" — text-base tracking-wide, foreground color, hover to 80% opacity. Padding: px-8 py-6 md:px-16, gap-8 between logo and links, gap-6 between links.

Hero heading: Vertically centered in viewport (flex-1 flex flex-col justify-between, content wrapper with my-auto). Max-width max-w-3xl. Font sizes: text-6xl md:text-8xl lg:text-[7rem], leading-[0.95] tracking-tight, white text (text-foreground). Copy:
Own the future of
your assets.

The word "assets." has a neon glow effect: two absolutely-positioned duplicate <span>s layered on top, both white (hsl(0 0% 100%)), with gradient masks (linear-gradient(to bottom left, white 20%/25%, transparent 50%/55%)) creating a directional top-right glow. First span: blur-sm, second: blur-md opacity-60. The parent span has overflow-visible to allow glow to bleed out. The outer heading container and page root also use overflow-visible. Bottom margin on heading: mb-12.

CTA Button (GlowButton): px-10 py-4 rounded-[43px], background accent, text accent-foreground, text-xl. Box shadow: 0px 4px 95px 4px hsl(45 70% 50% / 0.6) (large amber glow). Contains an internal blurred blob: a w-48 h-10 rounded-full span, blur-xl, color hsl(45 60% 95%), positioned at top: -12px, centered horizontally, clipped by overflow-hidden on the button. Hover: scale-105 transition. Text: "Launch your orbit".

Logo marquee: Pinned to bottom of hero (mt-auto). Width: full on mobile, md:w-1/2 lg:w-1/2. Label: "Trusted by top builders" — text-foreground/50 text-base mb-5 text-left. Five logos using Lucide icons (Sun, Box, Star, Feather, Sparkles) with names: Nebulon, Prismify, Nova Labs, Zephyr, Ignite. Each: flex items-center gap-3 mx-6, icon w-6 h-6 text-foreground/60, name text-foreground/60 text-2xl tracking-wide whitespace-nowrap. Infinite horizontal scroll via CSS @keyframes marquee { 0% { translateX(0) } 100% { translateX(-50%) } }, animation: marquee 20s linear infinite. Logos rendered twice for seamless loop.

Layout structure: Root div min-h-screen bg-background flex flex-col relative overflow-visible. Video is z-0. Content wrapper is relative z-10 flex flex-col min-h-screen. Main area: flex-1 flex flex-col justify-between px-8 md:px-16 pb-10.