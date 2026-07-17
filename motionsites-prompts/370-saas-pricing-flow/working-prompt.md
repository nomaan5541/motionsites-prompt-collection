**Prompt:**

Build a React + TypeScript + Vite pricing page section with a full-screen background video and three pricing cards. Use the Inter font (no import needed, system fallback to sans-serif).

**Background video:**
- URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4`
- Fixed, full viewport (100vw x 100vh), `object-fit: cover`, `z-index: -1`, no overlays, `autoPlay`, `muted`, `playsInline`, no `loop` attribute.
- Implement **boomerang playback via throttled seek**:
  - State: `direction` (1 fwd / -1 rev), `currentTarget` (sec), `seekPending` flag, `lastTs`, `rafId`.
  - On `ended`: set `direction = -1`, `currentTarget = video.duration`, `seekPending = false`, start `requestAnimationFrame(step)`.
  - `step(ts)`: compute `dt` from `lastTs`, decrement `currentTarget` by `dt`. If `<= 0`, set `direction = 1`, `video.currentTime = 0`, call `video.play()`, return. Else call `doSeek()` and request next frame.
  - `doSeek()`: if `video.seeking`, set `seekPending = true` and return (never stack seeks). Else clear `seekPending` and set `video.currentTime = currentTarget`.
  - On `seeked`: if `direction === -1 && seekPending`, call `doSeek()` again.

**Header (`.c3-header`)** — centered, max-width 1100px, margin-bottom 40px:
- Logo (absolute left): `https://pub-f170a2592d2c4a1485466404c36807be.r2.dev/Tests/logoipsum-415.svg`, 32px wide, `filter: brightness(0) invert(1)`.
- Nav pill (`.c3-nav`) centered: `background: rgba(30,35,45,0.75)`, `backdrop-filter: blur(10px)`, border-radius 100px, 1px border `rgba(255,255,255,0.15)`, inset shadow. Links: Home, Pricing (active = white/500), FAQ, Contact, and a white pill "Download" button (`.c3-nav-btn`) with black text. Font size 0.82rem, gap 20px. Close button (`.c3-nav-close`) is a 32px circle shown in mobile drawer.
- Hamburger (mobile only, absolute right): 32px circle with 3-line span.

**Watermark (`.c3-watermark-container`)** — absolute, top 150px, centered:
- `.c3-watermark-top`: "Forma AI", 2.8rem, weight 600, color `rgba(164,244,253,1)`, positioned with `top: -20px` and `margin-bottom: -90px` so it overlaps.
- `.c3-watermark-main`: "Pricing", 16rem, weight 800, line-height 0.9, letter-spacing -0.05em. Text uses gradient `linear-gradient(to right, #091020 0%, #0B2551 25%, #A4F4FD 65%, #00d2ff 100%)` clipped to text. Apply `filter: url(#c3-noise)`.
- Include inline SVG filter `#c3-noise` with `feTurbulence` (`fractalNoise`, baseFrequency 0.5, 2 octaves), `feComponentTransfer` slope 0.075 alpha, `feComposite` in, `feBlend` overlay.

**Grid (`.c3-grid`)** — 3 columns, gap 24px, max-width 1100px, margin-top 175px, `transform: translateX(20px)`.

**Cards (`.c3-card`)**:
- Background `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4))`, `backdrop-filter: blur(14px) brightness(0.91)`, 1px white border, `border-radius: 44px`, padding `50px 24px`, min-height 580px, `transition: all 0.6s cubic-bezier(0.22,1,0.36,1)`.
- `::before` overlay: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%)`.
- Hover: background `rgba(15,15,15,0.6)`, border `rgba(34,211,238,0.7)`, `transform: translateY(-12px) scale(1.01)`.
- `.c3-card-pro` variant has slightly darker gradient.
- Each card has tier label (`.c3-tier-small`, 1.1rem, weight 400, `rgba(255,255,255,0.6)`), price (`.c3-tier-large`, 2.8rem, weight 500, letter-spacing -0.02em), description (`.c3-desc`, 0.88rem, `rgba(255,255,255,0.45)`, min-height 3.2em, margin-bottom 40px), 5-item checklist, and "Choose Plan" button.

**Checklist items (`.c3-list li`)**: gap 14px, 0.92rem, `rgba(255,255,255,0.8)`, margin-bottom 18px. Check icon is a 28px circle `rgba(255,255,255,0.15)` containing a 14px white stroke SVG check (path `M20 6L9 17l-5-5`, stroke-width 4, round caps).

**Card content:**
1. **Free / Free** — "For creators taking their first steps with Forma." — Up to 3 projects in the cloud; Image export up to 1080p; Basic editing tools; Free templates and icons; Access via web and mobile app.
2. **Standard / $9,99/m (or $99,99/y)** — "For freelancers and small teams who need more freedom and flexibility." — Up to 50 projects in the cloud; Export up to 4K; Advanced editing toolkit; Team collaboration (up to 5 members); Access to premium template library.
3. **Pro / $19,99/m (or $199,99/y)** (use `.c3-card-pro`) — "For studios, agencies, and professional creators working with brands." — Unlimited projects; Export up to 8K + animations; AI-powered content generation tools; Unlimited team members; Brand customization.

**Button (`.c3-btn`)**: white bg, black text, 10px/32px padding, border-radius 100px, weight 600, 0.88rem, margin-top auto, centered. Hover: `#f5f5f5`, scale 1.02, shadow.

**Yearly toggle (`.c3-toggle-wrap`)** below grid, max-width 1100px:
- `.c3-toggle`: 52x28 white pill with black 20px knob at left+4/top+4. Active state: bg `rgba(255,255,255,0.2)`, knob translates 24px right and turns white. Transition `cubic-bezier(0.4,0,0.2,1)`.
- Label "Yearly" — 1rem, weight 500, white.
- Clicking toggles `yearly` state, swapping prices between monthly ($9,99/m, $19,99/m) and yearly ($99,99/y, $199,99/y).

**Body:** `background-color: #000`, padding `40px 20px`, flex column centered, `overflow-x: hidden`.

**Responsive (`max-width: 1024px`):**
- Watermark becomes relative/centered; "Forma AI" 2rem; "Pricing" 6rem, solid `#00d2ff` (no gradient/filter).
- Grid becomes horizontal scroll-snap row (`overflow-x: auto`, `scroll-snap-type: x mandatory`, cards `flex: 0 0 320px`, `scroll-snap-align: center`), hidden scrollbar, full viewport width.
- Nav hidden by default, becomes full-screen overlay (`rgba(15,20,25,0.6)` + blur) when `.active`, links 1.5rem, close button top-right.
- Hamburger visible.

Use class prefix `c3-` throughout. All state in a single `App.tsx` component using `useState` for `menuOpen` and `yearly`, and `useRef` + `useEffect` for the video boomerang logic.