**Build a single-page HTML showcase displaying two iOS device frames (370x790px each) side by side on a neutral `#F4F4F4` stage. The stage auto-scales to fit the viewport using JS. Both phones have a Dynamic Island, status bar (time "11:11", signal/wifi/battery icons in white SVG), and a home indicator bar. Animations are gated behind video `loadeddata` events + font loading, with a 5s safety timeout.**

---

### Fonts

1. **ITC Garamond Std Narrow** (self-hosted from Cloudinary):
   - Light (300): `https://res.cloudinary.com/dgupuutfn/raw/upload/v1783596334/ITCGaramondStd-LtNarrow_i2zcip.woff2` / `.woff` variant `ITCGaramondStd-LtNarrow_soc5vc.woff`
   - Book (400): `https://res.cloudinary.com/dgupuutfn/raw/upload/v1783596334/ITCGaramondStd-BkNarrow_xjfoc0.woff2` / `.woff` variant `ITCGaramondStd-BkNarrow_wfoxm1.woff`
   - Book Italic (400 italic): `https://res.cloudinary.com/dgupuutfn/raw/upload/v1783596334/ITCGaramondStd-BkNarrowIta_hiy9ld.woff2` / `.woff` variant `ITCGaramondStd-BkNarrowIta_rlarxo.woff`

2. **Google Fonts**: `Playfair Display` (400, 500, 600 + italic) and `Inter` (400, 500, 600, 700)

---

### Screen 1 -- "The place for all your places" (Light device frame)

**Background**: Dark (#02040c). Uses a native 470x1008 design scaled down to 370x790 via `transform: scale(0.787234)` with `transform-origin: top left`.

**Video background (hero)**:
```
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260710_114906_ad7cee37-9e56-434f-99bc-92d5bdc4f9fe.mp4
```
- `autoplay loop muted playsinline`, `object-fit: cover`, `object-position: center 48%`, covers entire frame, z-index 0.

**Hero fade overlay**: Bottom 46% of the frame, gradient from `rgba(2,4,12,0)` to `rgba(2,4,12,.35)` at 46% to `rgba(2,4,12,.72)` at 100%. z-index 1.

**Logo** (centered, top 74px):
```
https://polo-pecan-73837341.figma.site/_assets/v11/b1ddc82509144261f1999a0c4d92be5ce6689c0f.png
```
- Width 118px, `filter: drop-shadow(0 0 7px rgba(190,215,255,.28))`. z-index 4.

**Title** (top 618px, centered, z-index 4):
- Font: ITC Garamond Std Narrow, weight 300, 66px, line-height 68px, letter-spacing 0.2px
- Text: `The place for all` then line break, then `your places` in italic (weight 400)
- Text shadow: `0 0 34px rgba(255,255,255,.22), 0 1px 2px rgba(0,0,0,.35)`
- The italic "your places" has an extra glow: `0 0 10px rgba(255,255,255,.6), 0 0 20px rgba(255,235,190,.5), 0 0 40px rgba(255,210,140,.32)`

**Subtitle** (top 787px, centered, z-index 4):
- Font: Inter, 16.5px, weight 400, line-height 26px, color `rgba(255,255,255,.52)`
- Text: "Save, Organize and Share\nyour favorite places"

**Button** (top 874px, left 32px, 406x55px, z-index 4):
- White background, border-radius 28px, box-shadow `0 6px 26px rgba(0,0,0,.28)`
- Apple logo SVG (18x21, fill #1a1a1a) + text "Continue with Apple"
- Font: Helvetica Neue, 18px, weight 500, -webkit-text-stroke 0.6px #1a1a1a

**Terms** (top 950px, centered, z-index 4):
- Font: 12px, weight 400, color `rgba(255,255,255,.42)`
- Text: "By continuing, you agree to **Terms of Use**" (bold text is `rgba(255,255,255,.82)`, weight 400)

---

### Screen 2 -- "Unlock Pro" (Dark device frame)

**Background**: Dark (#14151d).

**Video background**:
```
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260710_115050_a1ba47d0-aedf-413c-9dea-14509599d3dd.mp4
```
- `autoplay loop muted playsinline`, positioned `left: 0; top: -30%`, 370x790px, `object-fit: cover`, z-index 0.

**Background fade** (full overlay, z-index 1):
```css
linear-gradient(to bottom,
  rgba(20,21,29,0) 0%, rgba(20,21,29,0) 40%,
  rgba(20,21,29,0.55) 55%, rgba(20,21,29,0.92) 66%,
  #14151d 74%, #14151d 100%);
```

**Heading** (left 28px, top 386px):
- Font: ITC Garamond Std Narrow, weight 500, 26px, line-height 1, color white
- Letter-spacing 0.2px, text-shadow `0 0 18px rgba(120,180,220,0.35)`
- Text: "Unlock Pro:"

**Divider** (left 28px, top 418px, 265x1px):
- `linear-gradient(to right, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.30) 70%, rgba(255,255,255,0) 100%)`

**Feature list** (left 28px, top 429px, width 314px):
Each row is 24px tall with a 22px-wide icon area + text (13.5px, weight 400, white, 4px left margin).

Icons are all SVG, 19x19 (or 20x20 for infinity), stroke #fff, stroke-width 1.7, no fill:

1. **Layers icon** (paths: `M12 2 2 7l10 5 10-5-10-5Z` / `M2 12l10 5 10-5` / `M2 17l10 5 10-5`) -- "Create private Guides"
2. **Phone icon** (rect 6,2.5 12x19 rx2.5 + line 10.5,18.5 to 13.5,18.5) -- "Import from social media"
3. **Infinity icon** (path: `M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.988-8-13.083-8-5.096 0-5.096 8 0 8 5.095 0 7.988-8 13.083-8z`) -- "Unlimited Guides"
4. **Sparkle icon** (path: `M12 3c.4 3.6 1.4 4.6 5 5-3.6.4-4.6 1.4-5 5-.4-3.6-1.4-4.6-5-5 3.6-.4 4.6-1.4 5-5Z`) -- "AI search"
5. **People icon** (circle cx8.5 cy8 r3 + path for body + second person outline) -- "Collaborate with friends"

**Pricing cards** (left 28px, top 561px, 314x123px):

- **Monthly card** (left 0, 144x123px, border-radius 14px):
  - Background image: `https://polo-pecan-73837341.figma.site/_assets/v11/ef4533e6536f2495088e56e0f98036b5ff15446d.png` (cover, centered)
  - Border: 1px solid `rgba(255,255,255,0.11)`
  - Inner padding: 14px 14px 15px 15px
  - "Monthly" label (13px, weight 400), "$20" price (19px, weight 500, margin-top 6px, letter-spacing 0.3px), "Billed Monthly" at bottom-left (12px)
  - All text white with `text-shadow: 0 1px 6px rgba(0,0,0,0.35)`

- **Yearly card** (left 154px, 160x123px, border-radius 14px):
  - Background: #1e212a, border: 1px solid `rgba(255,255,255,0.11)`
  - "Yearly" label + "Billed Yearly" in `rgba(255,255,255,0.50)`
  - "$200" price in `rgba(255,255,255,0.62)`
  - **Save badge** (left 15px, top 66px): inline-flex pill, padding 5px 8px, border-radius 11px, background #4d5057, text "Save $40.00" (10.5px, weight 600, color `rgba(255,255,255,0.65)`, letter-spacing 0.2px)

**Subscribe button** (left 28px, top 709px, 314x50px):
- White background, border-radius 26px
- "Subscribe" text: Helvetica Neue, 16px, weight 500, color #0c0c0e, -webkit-text-stroke 0.4px
- Right chevron SVG: 9x15, stroke #0c0c0e, stroke-width 2, path `M1.5 1.5 7 7.5 1.5 13.5`

---

### iOS Device Frame (reusable for both)

- Width: 370px, Height: 790px, Border-radius: 48px
- Light frame: background `#F2F2F7`; Dark frame: background `#000`
- Box-shadow: `0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)`
- Dynamic Island: 126x37px, border-radius 24px, black, centered at top 11px
- Status bar time: SF Pro weight 590, 17px, white
- Status bar icons: signal bars (4 rects), WiFi (3 arcs + dot), battery (rect + fill + nub) -- all white SVG
- Home indicator: 139x5px bar, border-radius 100px, `rgba(0,0,0,0.25)` on light / `rgba(255,255,255,0.7)` on dark

---

### Stage Layout

- Gap between phones: 70px
- Viewport padding: 40px
- Background: `#F4F4F4`
- Auto-scale JS: measures stage vs viewport, applies `transform: scale(min(1, fitRatio) * 0.95)` centered

---

### Entrance Animations

All paused until `.ze-ready` class is added to viewport (triggered when both videos fire `loadeddata` + fonts ready, or 5s timeout).

**Keyframes used:**
- `zeBgSettle`: scale 1.12 + opacity 0 to scale 1 + opacity 1 (1.7s, for backgrounds)
- `zeReveal`: translateY(26px) + scale(0.985) + blur(7px) + opacity 0 to normal (0.9s)
- `zeDrop`: translateY(-16px) + scale(0.90) + opacity 0 to normal (0.9s)
- `zeLine`: scaleX(0) to scaleX(1), transform-origin left (0.9s)
- `zePop`: translateY(8px) + scale(0.78) to bounce scale(1.07) to scale(1) (0.7s, spring easing)

**Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out). Save badge uses `cubic-bezier(0.34, 1.56, 0.64, 1)` (spring).

**Stagger (Screen 1):**
- Hero bg: 0s delay
- Logo (zeDrop): 0.45s
- Title (zeReveal): 0.62s
- Subtitle: 0.78s
- Button: 0.94s
- Terms: 1.06s

**Stagger (Screen 2):**
- Video bg (zeBgSettle): 0.12s delay
- Heading (zeReveal): 0.58s
- Divider (zeLine): 0.72s
- Row 1-5 (zeReveal): 0.80s, 0.88s, 0.96s, 1.04s, 1.12s
- Monthly card: 1.22s
- Yearly card: 1.30s
- Subscribe button: 1.42s
- Save badge (zePop): 1.55s

**Reduced motion:** All animations disabled via `@media (prefers-reduced-motion: reduce)`.

-