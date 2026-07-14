Build a landing page for "Highframe" -- a SaaS product for building internal workflows, smart forms, and automations without code. The page has two responsive versions: **desktop** (served as a standalone HTML file) and **mobile** (served as a standalone HTML file). A React app switches between them via iframe based on viewport width (breakpoint: 768px).

---

### BRAND IDENTITY

- **Product name:** Highframe
- **Logo:** SVG circle icon -- outer circle (r=12, stroke #fff 1.6px), inner arc path (`M13 5a8 8 0 1 1-5.66 2.34`, stroke #fff 1.6px, round linecap), center dot (r=2.4, fill #fff), all within a 26x26 viewBox
- **Tagline:** "Build the tools your team *actually* needs"
- **Sub-headline:** "Turn any process into an intelligent form that routes data and triggers actions instantly."

### FONTS

Load from Google Fonts:
- **Hanken Grotesk** (weights: 400, 500, 600, 700) -- used for body, nav, buttons, UI
- **EB Garamond** (weights: 400, 500, 600 + italic variants) -- used for h1 headings and footer headings

### COLOR SYSTEM (CSS custom properties)

```
--ink: #0c0d0d
--paper: #f4f3f0
--lime: #c7ef6b
--lime-deep: #b6e34f (desktop only)
--green: #16331f (desktop only)
--muted: rgba(255,255,255,.72) (desktop) / rgba(255,255,255,.65) (mobile)
--line: rgba(255,255,255,.16) (desktop) / rgba(255,255,255,.13) (mobile)
--card: rgba(255,255,255,.055) (mobile only)
```

Body background: `#000` (desktop), `#060707` (mobile). All text white.

### HERO BACKGROUND VIDEO

- **URL:** `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260604_125109_19424216-4e2a-4560-b9f2-f1b5f6eb2c2e.mp4`
- Attributes: autoplay, muted, loop (desktop) / no loop (mobile), playsinline
- Position: absolute, inset 0, 100% width/height, object-fit: cover
- **Horizontally flipped** using `transform: scaleX(-1)`
- Desktop also has `scale(1.12)` and a Ken Burns animation (`scale(1.12)` to `scale(1.2)`, 26s ease-in-out infinite alternate)
- Mobile has `object-position: center top`; desktop has `object-position: center`
- **No overlay/scrim** on the video
- Mobile loops the video back to 0 at 2 seconds using a `timeupdate` listener
- z-index: -2

---

### DESKTOP HERO SECTION

**Layout:** `.hero` section, min-height 880px, `isolation: isolate`, overflow visible.

**Nav bar** (88px height, flexbox space-between, z-index 5):
- Left: brand logo (26x26 SVG) + "Highframe" text (20px, weight 600, letter-spacing -.01em)
- Right nav links: "Product" (with chevron dropdown SVG), "Resources" (with chevron), "Pricing", "Customers", "Book a demo" (pill button with border `rgba(255,255,255,.4)`, border-radius 999px, padding 10px 20px, frosted background `rgba(255,255,255,.04)`)
- Nav links: 15.5px, weight 500, color `rgba(255,255,255,.88)`, gap 34px

**Hero content** (grid layout, single column):
- `.hero-copy` container: padding 78px top 110px bottom, max-width 620px, z-index 4
- **h1:** EB Garamond, 62px, line-height 1.06, weight 400, letter-spacing -.005em, text-wrap balance. Contains `<em>` for "actually" (italic)
- **Subtitle (`.sub`):** EB Garamond, 22px, line-height 1.5, color `var(--muted)`, max-width 430px
- **CTA buttons** (flex row, gap 14px, margin-top 38px):
  - Primary: "Get started for free" -- `#f4f3f0` bg, `#121312` text, 999px radius, 54px height, 16px weight 600, box-shadow `0 8px 30px rgba(0,0,0,.35)`. Hover: translateY(-2px) + stronger shadow
  - Ghost: "Watch demo" with Material Icons Round play_circle icon -- `rgba(12,13,13,.72)` bg, white text, border `rgba(255,255,255,.32)`, backdrop-filter blur(14px), gap 10px

**Dashboard iframe** (`.dash`):
- Positioned absolutely via CSS custom properties: `--dash-w: 670px`, `--dash-x: 59%`, `--dash-y: 55px`
- border-radius 16px, box-shadow `0 40px 90px -22px rgba(0,0,0,.7), 0 0 0 1px rgba(255,255,255,.06)`
- Contains iframe to `assets/dashboard-orchestrator.html`, aspect-ratio 1456/1138

**Reveal animations** (triggered by JS on load):
- `.reveal` elements start with `opacity:0; transform:translateY(22px)` and transition with `.8s cubic-bezier(.2,.7,.2,1)`
- Dashboard reveal starts with `translateX(46px) scale(.985)`
- Staggered delays: nav 0s, h1 .12s, subtitle .26s, CTA .4s, dashboard .5s
- Handles visibility state: if page loads hidden, snaps content instantly then animates on visibility change

**Responsive (max-width 860px):**
- Hide nav links, h1 to 42px, hero min-height auto, hero-copy padding reduced
- Dashboard becomes relative positioned, full width, border-radius 14px

**Responsive (max-width 1100px):**
- h1 to 54px

---

### DESKTOP FOOTER

- Transparent background with frosted glass `::after` pseudo-element: `backdrop-filter: blur(12px) saturate(120%)`, gradient from `rgba(10,12,11,.38)` to `rgba(10,12,11,.80)`, `box-shadow: inset 0 1px 0 rgba(255,255,255,.18)`, border-radius 22px 22px 0 0
- `margin-top: -120px` to overlap hero, `border-top: 1px solid rgba(255,255,255,.14)`, border-radius 22px 22px 0 0

**Top grid** (4 columns: `1.1fr 1fr 1fr 1.5fr`, gap 30px, padding 72px top 64px bottom):

Columns 1-3 are link lists:
- **Product:** Workflow builder, AI automations, Smart forms, Data connections, Internal apps
- **Resources:** Mobile, Manifesto, Press, Docs, Pricing
- **Company:** About, Blog, Careers, Customers
- Column headers: 13px, uppercase, letter-spacing .08em, color `rgba(255,255,255,.45)`, weight 600
- Links: 16px, color `rgba(255,255,255,.82)`, gap 14px. Hover: color #fff, translateX(2px)

Column 4 (`.fbrand`):
- Brand logo (28x28) + "Highframe" (23px)
- Description: "Skip the dev queue. Build internal workflows, smart forms, and automations without code." -- 17px, line-height 1.5, color `rgba(255,255,255,.7)`, max-width 330px
- **Waitlist form** (pill shape): flex row, `rgba(255,255,255,.08)` bg, border `rgba(255,255,255,.16)`, border-radius 999px, padding 6px 6px 6px 20px, max-width 440px, backdrop-filter blur(8px), inset box-shadow
  - Mail icon SVG (17x17) + email input (15.5px)
  - Submit button: white bg, `#0c0d0d` text, 999px radius, padding 12px 20px, 15px weight 600

**Bottom bar** (border-top `rgba(255,255,255,.12)`, flex space-between, padding 26px top 38px bottom):
- Left: "(c) 2026  Highframe. All rights reserved." -- 14.5px, color `rgba(255,255,255,.55)`
- Center: Social icons (X/Twitter, LinkedIn, GitHub) -- SVG 18x18, color `rgba(255,255,255,.6)`, gap 22px. Hover: color #fff, translateY(-2px)
- Right: "Privacy Policy", "Terms of Use", "Cookie Policy" -- 14.5px, color `rgba(255,255,255,.6)`, gap 28px

**Responsive (max-width 860px):**
- Grid becomes 2 columns, brand spans full width, bottom stacks vertically

---

### MOBILE HERO SECTION

Wrapped in `.phone` container (max-width 430px, centered, min-height 100dvh, bg #000).

**Layout:** `.hero` section, min-height 100dvh, flexbox column, padding-bottom 28px, isolation isolate.

**Lime glow:** `::after` pseudo-element -- radial gradient of `rgba(199,239,107,.18)`, 280px circle, centered bottom 12%, blur 22px.

**Nav** (flex space-between, padding 26px 22px 0, z-index 10):
- Left: brand logo (24x24) + "Highframe" (18px, weight 600)
- Right: hamburger button (42x42, rounded 11px, border `rgba(255,255,255,.22)`, bg `rgba(0,0,0,.28)`, backdrop-filter blur(12px), three 18px wide / 1.4px tall white bars, gap 5px)

**Hero body** (flex column, center aligned, text-align center, padding 32px 22px 38px, z-index 5):
- **Badge** (hidden by default via `display:none`): pill with green dot (7px, `var(--lime)` with glow), "AI-Powered Workflow", frosted glass style
- **h1:** EB Garamond, `clamp(44px, 12vw, 58px)`, line-height 1, letter-spacing -.025em, max-width 9ch, text-shadow `0 10px 30px rgba(0,0,0,.35)`. `<em>` styled with `color: var(--lime)` and italic
- **Subtitle:** 16px, line-height 1.62, color `rgba(255,255,255,.76)`, max-width 31ch
- **CTA stack** (flex column, gap 11px, max-width 340px):
  - Primary: "Start Free Trial" -- `var(--paper)` bg, `var(--ink)` text, 58px height, 18px radius, 15.5px weight 600. Active: scale(.975) opacity .9
  - Ghost: "Watch Demo" with play circle SVG icon -- `rgba(12,13,13,.78)` bg, border `rgba(255,255,255,.30)`, backdrop-filter blur(14px)

**Dashboard preview** (`.hero-preview`):
- Perspective 3D card: `perspective(1400px) rotateX(17deg) rotateY(-8deg) rotateZ(1deg) translateY(10px)`
- Width `min(88vw, 368px)`, border-radius 32px, padding 10px
- Multi-layered gradient background simulating glass edge lighting
- Complex box-shadows for depth
- `::before` adds highlight gradients, `::after` adds colored glow beneath
- Contains `.preview-shell` with iframe to `dashboard-orchestrator.html` (aspect-ratio 1456/1138)
- **Float animation:** 6.5s ease-in-out infinite, subtle rotation/translate changes at 50% keyframe
- Shell has frosted glass styling with gradient borders via mask technique

**Responsive (max-height 760px):** hero-body justify-content flex-end, h1 clamped smaller

**Reveal animations:** `.r` class, `opacity 0 -> 1`, `translateY(20px) -> none`, .75s `cubic-bezier(.16,1,.3,1)`. Hero items animate immediately, footer items use IntersectionObserver (threshold 0.08). Staggered delays from 0s to .46s.

---

### MOBILE FOOTER

Class `.foot`, bg #000, border-top `rgba(255,255,255,.13)`, border-radius 26px 26px 0 0, padding 54px 22px 44px.

Shimmer `::after`: 1px height, horizontal gradient of white at center fading to transparent at edges.

Box-shadow: `0 1px 0 rgba(255,255,255,.10) inset, 0 -1px 0 rgba(0,0,0,.28) inset`

**Elements in order:**

1. **Mail icon circle** (58px, centered, frosted glass pill `rgba(255,255,255,.13)` bg, border `rgba(255,255,255,.30)`, glow box-shadow)

2. **Heading:** "Skip the dev queue" -- EB Garamond, 38px, weight 400, centered, line-height 1.08, letter-spacing -.015em

3. **Subtitle:** "Build internal workflows, smart forms, and automations without code." -- 15px, line-height 1.55, color `rgba(210,195,210,.72)`, centered

4. **Email form:**
   - Input: 52px height, `rgba(255,255,255,.06)` bg, border `rgba(255,255,255,.20)`, 14px radius, 15px font, backdrop-filter blur(10px). Focus: brighter border + glow ring
   - Button: "Sign up for waitlist" + arrow SVG -- 52px height, `var(--paper)` bg, `var(--ink)` text, 14px radius, 15.5px weight 600, box-shadow `0 10px 36px -14px rgba(255,255,255,.38)`

5. **Accordion** (4 sections: Product, Resources, Company, Legal):
   - Trigger: 16px, weight 500, color `rgba(235,220,230,.86)`, flex with chevron SVG
   - Chevron rotates 180deg on open, .26s cubic-bezier(.4,0,.2,1)
   - Body: max-height 0 -> 300px transition, links 15px color `rgba(255,255,255,.6)`
   - Same link lists as desktop (Product: 5 items, Resources: 5 items, Company: 4 items, Legal: Privacy Policy, Terms of Use, Cookie Policy)
   - Only one accordion open at a time (JS closes others on toggle)

6. **Social buttons** (centered row, gap 10px):
   - X/Twitter, LinkedIn, GitHub -- 46px circles, border `rgba(255,255,255,.18)`, bg `rgba(255,255,255,.04)`, color `rgba(215,190,210,.72)`, backdrop-filter blur(8px)
   - Hover: brighter bg/border/color + glow shadow

7. **Brand lockup card:** frosted glass card (18px radius, `rgba(255,255,255,.07)` bg, border `rgba(255,255,255,.16)`, backdrop-filter blur(14px)), logo (22x22) + "Highframe" (20px) + "(c) 2026 Highframe. All rights reserved." (13px, color `rgba(255,255,255,.38)`)

Reveal stagger delays: mail icon 0s, heading .07s, subtitle .13s, form .19s, accordion .25s, socials .37s, brand .43s.

---

### REACT APP (App.jsx)

Simple responsive switcher:
- Uses `window.matchMedia` to detect mobile (<768px)
- Renders a full-viewport iframe pointing to either `/desktop/index.html` or `/mobile/index.html`
- Switches iframe key on breakpoint change

### KEY IMPLEMENTATION NOTES

- All CSS is inline in `<style>` tags within each HTML file (no external stylesheets beyond Google Fonts)
- Material Icons Round loaded via Google Fonts CDN (desktop only)
- The `dashboard-orchestrator.html` iframe content is a separate file (not described here)
- Desktop uses a tweaks panel system (React + Babel standalone) for adjusting dashboard position via sliders -- this is a dev tool overlay
- `-webkit-font-smoothing: antialiased` and `text-rendering: optimizeLegibility` on body
- `-webkit-tap-highlight-color: transparent` on all interactive elements (mobile)
- `scroll-behavior: smooth` on html