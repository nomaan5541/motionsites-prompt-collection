Build a single-page hero landing page for a product called "Axon" — a platform that deploys digital workers for mundane workflows. The page is a full-viewport hero section with a looping background video and overlaid content.

**Fonts:**
- Load Google Fonts: `Instrument Serif` (regular + italic) and `Inter` (weights 400, 500, 600).
- Body font: `Inter`, color `#1B133C`.
- Heading font: `Instrument Serif`.

**Page structure (single full-screen section, 100vh):**

1. **Navigation bar** — centered at the top with `pt-4 md:pt-6` padding. A horizontal nav pill with `bg-white/70 backdrop-blur-md rounded-xl px-4 md:px-6 py-3 shadow-sm`. Contains:
   - A custom SVG logo (two geometric arrow/chevron shapes in `#1B133C`, 24x24px). The SVG paths are: `M 256 256 L 128 256 L 0 128 L 128 128 Z` and `M 256 128 L 128 128 L 0 0 L 128 0 Z` inside a 256x256 viewBox.
   - Navigation links (hidden on mobile, shown `sm:` and up): "Features", "Plans", "Security", "About" — styled as `text-sm font-medium text-[#1B133C]/80` with hover transition to full opacity.

2. **Hero content** — centered below nav with `mt-8 md:mt-16`, stacked vertically:
   - **Badge**: `mb-6`, inline-flex pill with `rounded-xl border border-[#1B133C]/10 bg-white/70 backdrop-blur-sm px-4 py-2 text-sm font-medium`. Contains an orange square icon (`bg-orange-500 rounded w-5 h-5`) with a bold white "Y" letter, followed by text "Funded by Y Combinator".
   - **Heading**: `font-['Instrument_Serif'] text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-[#1B133C] max-w-4xl`. Two lines:
     - "Deploy digital workers"
     - "for mundane workflows"
   - **Subtitle**: `mt-5 sm:mt-6 max-w-3xl text-xs sm:text-sm md:text-base leading-relaxed text-[#1B133C]/70`. Text: "Eliminate your tedious browser work and 10x your team's capacity. Put intelligent agents on every routine process so you grow faster and deliver more for clients — effortlessly."
   - **CTA button**: `mt-7 sm:mt-8`, styled as `rounded-xl bg-[#FEFEFE] px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-semibold text-[#1B133C] shadow-[0px_4px_12px_rgba(0,0,0,0.15)]` with hover shadow `shadow-[0px_6px_16px_rgba(0,0,0,0.2)]` and `transition-all duration-300`. Text: "Get Early Access".

3. **Background video** — absolutely positioned (`absolute inset-0 z-0`) behind all content. The video element uses:
   - URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260714_113715_c7e0daa0-8bdd-4486-a2da-040901f8f0ea.mp4`
   - Attributes: `autoPlay muted loop playsInline`
   - Styling: `w-full h-[130%] object-cover object-top` — full width, 130% height so it overflows vertically, with the focal point anchored to the top.

**CSS reset in index.css:**
```
body { font-family: 'Inter', sans-serif; color: #1B133C; }
```

**Key details:**
- The hero section uses `relative h-screen w-full overflow-hidden flex flex-col`.
- All content elements are `relative z-10` to sit above the video (`z-0`).
- No other sections or pages — just this single hero.
- Color palette: deep navy `#1B133C` for text, white/translucent for glass elements, orange-500 for the Y Combinator badge accent.
- Page title: "Axon — Digital Workers for Mundane Workflows"