Build a full-viewport dark hero section as a single React + TypeScript + Tailwind CSS page (Vite). Use the Inter font family. No purple/indigo hues.

**Layout structure (top to bottom, full viewport, no scroll):**

1. **Outer page wrapper** — `w-screen h-screen overflow-hidden flex flex-col`, background `#0E1114` with a subtle dotted pattern: `radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)` at `24px 24px`.

2. **Navbar** (outside the inner card) — `flex items-center justify-between px-7 py-7`, `shrink-0`.
   - Left: wordmark `micro` in white, `font-semibold text-2xl tracking-tight`, letter-spacing `-0.02em`.
   - Right: two buttons in a `gap-3` flex row.
     - "Login": transparent, `text-white/70 text-sm font-medium px-4 py-2 rounded-full`, hover `text-white`.
     - "Join the Waitlist": black bg `#000`, white text, `1px solid #ffffff` border, `text-sm font-semibold px-5 py-2 rounded-full`, hover `opacity-90`, active `scale-95`, 200ms transitions.

3. **Inner card** — fills remaining height, `mx-2 mb-2`, `bg-#030404`, `rounded-[32px]`, `overflow-hidden`, `relative`.

   Inside the card:

   **a) Three-panel video section** (`flex-1 flex gap-2 p-2 lg:p-5 min-h-0`):
   - 3 equal-width cards (`flex-1`), each `relative overflow-hidden rounded-[22px]`. Cards 2 and 3 hidden on small screens (`hidden sm:block`).
   - Each card has a `<canvas>` absolutely covering it (`absolute inset-0 w-full h-full`).
   - A single hidden `<video>` element is the source of truth for all canvases, positioned offscreen (`position:absolute; width:1; height:1; opacity:0; left:-9999; top:-9999`), `muted playsInline preload="auto"`.
   - Video URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_071134_9cc2f2d8-a599-4a73-8c89-6eb4af170352.mp4` — but at build time, download this file and host it locally at `/public/boomerang.mp4` and reference it as `/boomerang.mp4`. Streaming directly from CloudFront and using `currentTime` seek-based boomerang causes lag.

   **Boomerang playback logic (critical — this is the non-obvious part):**
   - Do NOT seek via `video.currentTime` to reverse — it lags badly.
   - On mount, play the video forward once with `video.play()`. Use `requestVideoFrameCallback` (fallback to `requestAnimationFrame`) to capture every unique frame into an offscreen `<canvas>` element (scale down to max width 960 for memory). Push each captured canvas into a `frames[]` array.
   - On the `ended` event, stop capturing and store `frames` in React state.
   - Once frames are ready, run a `requestAnimationFrame` render loop at 30 FPS (1000/30 ms interval) that advances an index through `frames` with a direction variable: when index hits `frames.length - 1` flip to `-1`, when it hits `0` flip to `+1`. That's the boomerang.

   **Canvas slicing logic (one video rendered as three synced slices):**
   - Each frame of animation, for every visible canvas:
     - Resize canvas backing store to its `clientWidth`/`clientHeight` if mismatched.
     - Treat the N visible cards as one continuous `cover`-fitted surface (total width = `cw * n`, height = `ch`).
     - Compute source rect `sx, sy, sw, sh` from the frame that maintains `cover` behavior given that combined display aspect.
     - Slice width = `sw / n`; slice X = `sx + sliceW * i` for card `i`.
     - `ctx.drawImage(frame, sliceX, sy, sliceW, sh, 0, 0, cw, ch)`.

   **b) Bottom fade gradient** — absolutely positioned in the card, `bottom-0 left-0 right-0`, `height: 260px`, `z-10`, `pointer-events-none`, `background: linear-gradient(to top, rgba(3,4,4,0.88) 0%, rgba(3,4,4,0.50) 45%, transparent 100%)`.

   **c) Hero text + CTA row** — absolutely at bottom of card, `p-6 md:p-8 pb-10 md:pb-14`, `flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-0`, `z-20`, `pointer-events-none` (re-enable on interactive children).
   - Left column (`pointer-events-auto`):
     - Paragraph: "An all-in-one tool for email, CRM, project management and more that automatically organizes itself." — `text-white/70 text-sm leading-relaxed max-w-[280px]`.
     - Button "Join the Waitlist" — `self-start px-6 py-2.5 rounded-full text-sm font-semibold`, `bg-#ffffff text-#030404`, hover `opacity-90`, active `scale-95`.
   - Right column (`md:items-end`):
     - `<h1>`: "Organized." — `text-[clamp(52px,10vw,110px)]`, `font-weight: 600`, `line-height: 1.0`, `letter-spacing: -0.03em`, white, right-aligned on md+.
     - Italic subtitle: "So you don't have to be." — `text-white/60 text-base italic tracking-wide`.

   **d) Middle card overlay (card 2 only):**
   - Centered pill-shaped image frame, `width: 130px`, `height: 225px`, `border-radius: 999px`, `overflow: hidden`, `box-shadow: 0 0 0 1.5px rgba(255,255,255,0.10)`.
   - Inside it, an `<img>` filling the frame (`objectFit: cover`, `objectPosition: center`) with src:
     `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260507_181851_f7a6e930-087d-4ce3-978d-f982e804b7df.png&w=1280&q=85`.

   **e) Glowing Orbs** (decorative) — a reusable `<Orb>` component: `absolute pointer-events-none z-10`, `border-radius: 50%`, `background: radial-gradient(circle, {color} 0%, transparent 70%)`, `filter: blur(20px)`, `mix-blend-mode: screen`.
   - Card 1: `top:14% left:16% width:100 height:100`, color `rgba(255,255,255,0.70)`.
   - Card 2: `top:8% left:50% translateX(-50%) width:72 height:72`, color `rgba(200,215,255,0.55)`.
   - Card 3: `top:20% right:10% width:110 height:110`, color `rgba(185,210,235,0.55)`.

**Stack:** React 18, TypeScript, Tailwind, Vite, lucide-react available (not used here). Single `src/App.tsx`. All transitions 200ms. No external UI libs. Match every color, radius, and pixel value above exactly.