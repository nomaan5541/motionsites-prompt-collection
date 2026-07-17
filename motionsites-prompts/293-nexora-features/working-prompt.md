Build a full-width "Features" section on a pure black (#000) background using TanStack Start (route file src/routes/index.tsx) and Tailwind CSS v4 (tokens in src/styles.css). Match the following spec exactly.

Global setup (src/styles.css)

Set body background to #000, text color #fff, and font-family to "Helvetica Neue", Helvetica, Arial, sans-serif.
Add a .liquid-glass button class with this exact CSS:

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
Add card classes (both same color, plain #252B4C, rounded 1.25rem, position: relative; overflow: hidden;):

.feature-card,
.feature-card-dark {
  background: #252B4C;
  border-radius: 1.25rem;
  position: relative;
  overflow: hidden;
}
Components

LiquidButton: a <button> with classes liquid-glass rounded-xl px-5 py-2.5 text-sm text-white/90 transition-transform hover:scale-[1.02]. Hover animation = subtle scale-up to 1.02.
CardVideo({ src }): an absolutely positioned <video> filling the card: className="absolute inset-0 h-full w-full object-cover", attributes autoPlay muted loop playsInline, 100% opacity, no overlay.
Layout

<main> with min-h-screen bg-black px-6 py-16 md:px-12 lg:px-20.

Header (mb-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between):
Left: stacked headline with two lines, sizes text-2xl md:text-4xl lg:text-[2.75rem], font-normal tracking-tight. Text wraps naturally (no whitespace-nowrap).
Line 1 (white): Curiosity-led tools for truth-seeking minds.
Line 2 (text-white/40, mt-2): Ask with confidence. Powered by AI.
Right (md:pt-3 shrink-0): <LiquidButton>Start Using Nexora</LiquidButton>.
Grid: grid grid-cols-1 gap-5 md:grid-cols-3 md:grid-rows-2.

All cards use p-7 flex flex-col, contain a <CardVideo> as the first child, and all text wrappers use relative so they sit above the video.

Card 01 — feature-card md:row-span-2 min-h-[28rem] (tall left column)
Video: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260427_104605_2700410c-4303-4d44-a368-e1b8c84eca8c.mp4
Top row (flex justify-between text-sm text-white/60): 01/ left, Found in Curiosity right.
Spacer (flex-1).
Bottom block:
<h2 class="text-xl md:text-2xl font-medium text-white">Great Questions Unearth<br/>Hidden Gems</h2>
Divider: mt-4 h-px w-full bg-white/20.
Paragraph (mt-4 text-xs text-white/70): The best answers come from asking the right questions.<br/>Start your search with purpose today.
Card 02 — feature-card-dark md:col-span-2 (wide top right)
Video: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260427_104731_bfd355f7-1f84-4f81-ad88-52c2bca70bad.mp4
Top row (flex justify-between): heading left <h2 class="text-xl md:text-2xl font-medium text-white">Where Knowledge Begins</h2>, 02/ right (text-sm text-white/60).
Spacer: flex-1 min-h-48.
Card 03 — feature-card
Video: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260427_104758_e7d78f06-3700-4862-8c9b-595ed447e81a.mp4
Top row (text-sm text-white/60): In Real Time left, 03/ right.
Paragraph (mt-10 text-xs text-white/80): From complex topics to quick facts, trust what<br/>you learn from every search you perform.
Spacer (flex-1).
Bottom (mt-6): <LiquidButton>Start Using Nexora</LiquidButton>.
Card 04 — feature-card
Video: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260427_105007_f90de0f3-0f93-44d4-9b71-7446f78c4bd2.mp4
Top row (text-sm text-white/60): Just Ask left, 04/ right.
Spacer (flex-1).
Bottom paragraph (text-center text-xs text-white/80): Users Trust Our Search Models.
Animations / fonts

Only animation: liquid-glass button hover scale to 1.02 via Tailwind transition-transform hover:scale-[1.02].
Videos auto-play looping at 100% opacity, no overlay/tint.
Font: Helvetica Neue globally, weights font-normal for headline, font-medium for card titles.