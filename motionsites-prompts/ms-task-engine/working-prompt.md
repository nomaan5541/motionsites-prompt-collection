## ROLE
Recreate a single-file HTML product landing mosaic **pixel-faithful** to the reference below. Output one self-contained `index.html` with inline CSS + JS. **No external images.** All icons are inline SVG. The only external resource is Google Fonts.

---

## PAGE META
- `lang="en"`
- Title: `Automate your work — Focus on what matters`
- Viewport: `width=device-width, initial-scale=1, viewport-fit=cover`
- Body page background: `#f0f0f0`
- Text color: `#141414`
- Font smoothing: antialiased; `text-rendering: optimizeLegibility`
- `body`: flex center, `min-height: 100vh` / `100dvh`, `overflow: hidden`

---

## FONT (exact URL)
```
https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap
```
Preconnect: `https://fonts.googleapis.com` and `https://fonts.gstatic.com` (crossorigin).

Family stack:
`'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`

Weights used: **400, 500, 600, 700, 800**. No other display/serif fonts.

---

## MEASUREMENT SYSTEM (critical)
Author the entire composition in **design units** where:
- Reference stage = **1374 × 666** units
- `1rem` = 1 reference unit
- Root scale knob:
```css
html { font-size: min(calc(95vw / 1374), calc(94vh / 666)); }
```
Nothing hard-coded in device pixels for the desktop composition. All sizes below are in these rem-units.

---

## DESKTOP STAGE GRID
`.stage` = `1374rem × 666rem`, CSS grid:
- Columns: `339rem | 627rem | 388rem`
- Rows: `149rem | 343rem | 156rem`
- `column-gap: 10rem`, `row-gap: 9rem`
- `role="main"`, `aria-label="Product feature overview"`

### Card placement
| Class | Grid |
|---|---|
| `.notif` | col 1, row 1 |
| `.connect` | col 1, row 2 / span 2 |
| `.automate` | col 2, row 1 / span 2 |
| `.insights` | col 3, row 1 / span 2 |
| `.search` | col 2 / span 2, row 3 |

### Shared `.card` chrome
- `border-radius: 22rem`
- `border: 1.6rem solid rgba(255,255,255,.92)`
- `overflow: hidden`
- `box-shadow: 0 2rem 16rem rgba(24,30,45,.045)`
- `position: relative`

---

## CARD 1 — NOTIFICATION (`.notif`)
**Background:**
```
radial-gradient(120% 140% at 92% 100%, rgba(255,236,246,.95) 0%, rgba(255,236,246,0) 62%),
linear-gradient(135deg, #f9d9e9 0%, #fbdfec 55%, #fce6f1 100%)
```
Padding: `37rem 12rem 0 11rem`. Aria: `"Automation notification"`.

### Toast stack
- `.toast-wrap`: relative, height `70rem`
- `.toast-ledge` (behind toast): absolute `left:24 right:20 top:55 height:23`, radius `14rem`,  
  background `linear-gradient(100deg, #e6e6e6 0%, #e6e3e2 42%, #e5d6d6 74%, #e4cdcf 100%)`,  
  shadow `0 3rem 9rem rgba(120,80,100,.09)`
- `.toast`: absolute inset 0, height 70, radius 16,  
  bg `linear-gradient(105deg, #ffffff 34%, #fdeee5 78%, #fce8dd 100%)`,  
  shadow `0 3rem 10rem rgba(122,86,106,.10)`, flex center, pad `0 12 0 13`, gap `11`

**Contents:**
1. **Sparkle icon** SVG 27×27, viewBox 0 0 24 24:
   - Black circle `r=12` with mask that punches a 4-point star hole
   - Overlay filled black 4-point sparkle path centered
2. Title: `Automation completed!` — 11.2rem / weight 800 / ls -0.012em / line 1.1 / `#0d0d0d`
3. Sub: `Weekly client report sent automatically` — 10rem / 400 / line 1.28 / ls -0.005em / `#2b2b2b` / max-width 118rem / margin-top 3.6rem
4. Time: `2:34 PM` — 7.4rem / 500 / `#8b8489` / align self start / margin-top 12rem / ls 0.005em

---

## CARD 2 — CONNECT YOUR TOOLS (`.connect`)
**Background:** `linear-gradient(180deg, #fcfdfd 0%, #f4f7f9 30%, #e2ebef 66%, #cedce4 100%)`  
Padding: `32rem 0 0 20rem`. Aria: `"Integrations"`.

- H2: `Connect your<br>Tools Now.` — 28rem / 800 / line 1.1 / ls -0.028em / `#0c0c0c`
- Sub: `120+ integrations available` — margin-top 14, 17rem / 400 / line 1.3 / ls -0.013em / `#1c1c1c`

### Integration chips
Chips container absolute: `left:11 right:16 bottom:13`, column flex, gap 8, z-index 2.  
Rows: flex gap 14; `.r2` has `padding-left: 10rem`.

**Chip style:**
- Height 42, inline-flex, gap 10, pad `0 17`, radius 999
- Bg: `linear-gradient(180deg, rgba(247,253,255,.97) 0%, rgba(240,250,254,.93) 100%)`
- Shadow ring: `0 0 0 3rem rgba(0,0,0,.047)` (NOT a CSS border)
- Backdrop blur 7rem
- Text: 18rem / 500 / ls -0.018em / `#131313` / nowrap
- SVG icons: 21×21

**Chip order / content (text then brand SVG):**
1. Row r1: `Microsoft Teams` (Teams purple avatar SVG)
2. Row r2: `Notion` (white rounded square + N stroke) + `GitHub` (Octocat path fill `#0d0d0d`)
3. Row r3: `Google Drive` (official 6-color triangle SVG viewBox `0 0 87.3 78`) + `Figma` (official 5-color logo viewBox `0 0 38 57`)

**Floating Slack chip** (`.chip-slack`): absolute `right:6 bottom:124`, `rotate(-20deg)`, z-index 3, slightly stronger ring `0 0 0 3.2rem rgba(0,0,0,.052)`. Text `Slack` + official 4-color Slack SVG (viewBox `0 0 122.8 122.8`, fills `#E01E5A`, `#36C5F0`, `#2EB67D`, `#ECB22E`).

Use exact brand SVG path data from the reference (Microsoft Teams multi-layer purple, Notion rect+stroke N, GitHub octocat, Drive 6 paths, Figma 5 circles/rects, Slack 4 pods).

---

## CARD 3 — AUTOMATE YOUR WORK (`.automate`) — hero center
**Background:**
```
radial-gradient(90% 70% at 6% 0%, rgba(226,236,200,.9) 0%, rgba(226,236,200,0) 70%),
linear-gradient(168deg, #e2ebc9 0%, #e9f0c4 48%, #f0f4b8 78%, #f3f5b0 100%)
```
Aria: `"Automate your work"`.

**Copy pad** (z-index 3): padding `37rem 0 0 45rem`
- H2: `<span class="g">Automate</span> your work.<br>Focus on what matters.`  
  — 35rem / 800 / line 1.43 / ls -0.03em / `#15201a`  
  — `.g` color `#5f8b3e`
- Sub: `AI-powered workflows that save teams hours every week.`  
  — margin-top 13, 17rem / 400 / line 1.3 / ls -0.014em / `#1e2a1b`

### Illustration layer `.illo` (absolute inset 0, 627×501, z-index 2)

**Window chrome shared:**
- Radius 11, border `3rem solid #fff`, overflow hidden, shadow `0 12rem 28rem rgba(64,74,44,.16)`
- Title bar height **13.4rem**, bg `#242424`, flex start, gap 4.6, pad-left 4.9
- Three traffic dots: 6×6 circle, `linear-gradient(150deg, #fff 0%, #f6f6f6 50%, #dcdcdc 100%)`

**Back window** `.win-back`:
- `left:121.2 top:245.2 width:324 height:250` · `rotate(-7.02deg)`
- Body bg `#eaefcd`; left strip width 23.7% bg `#bfd0ac`

**Front window** `.win-front`:
- `left:180.4 top:283.3 width:322 height:250` · `rotate(+4.23deg)` (positive — opposite lean from back; splay ≈11.25°)
- `border-bottom:0`, bottom radii 0 (bleeds off card)
- Stronger shadow `0 14rem 32rem rgba(64,74,44,.18)`
- Body bg `#f9edfb`; left strip width 16% bg `#e8d6fb`

**“Workflow Automated” pill** `.pill-wf`:
- `left:395 top:349 height:30`, flex, gap 7, pad `0 14 0 6`, radius 999, bg `#fff`
- Ring `0 0 0 2.8rem rgba(0,0,0,.045)`, `rotate(-1.2deg)`
- Text 11.5rem / 600 / ls -0.014em / `#151515`
- Tick disc 20×20: radial white highlight + `linear-gradient(145deg, #e6f3df 0%, #cfe0bd 47%, #b9cfa5 100%)` + checkmark SVG stroke `#161616` width 1.9

**AI sparkle card** `.pill-ai`:
- `left:68 top:404 width:144 height:52`, radius 10, white, same ring, flex, gap 9, pad `0 16`, `rotate(-1deg)`
- Two grey skeleton lines: height 6.5, radius 99, bg `#d8d8d7`, gap 8
- Dual 4-point sparkle SVG 23×23: fill `#eff4e6`, stroke `#4f7433`, stroke-widths 2.2 and 2.25 on two diamond-star paths (small tip then large tip)

**Cursor** `.cursor`:
- `left:490 top:454` size 30×35, viewBox 0 0 24 28
- Classic pointer path: fill `#fff`, stroke `#2b2b2b` width 1.3

---

## CARD 4 — PRODUCTIVITY INSIGHTS (`.insights`)
**Background:**
```
radial-gradient(115% 70% at 22% 0%, #fdf2e5 0%, rgba(253,242,229,0) 68%),
linear-gradient(180deg, #f9f1e8 0%, #f7efe6 100%)
```
Padding: `29 25 23 21`. Flex column. Aria: `"Productivity insights"`.

- Tag pill: height 31, pad `0 17`, radius 999, margin-left 4,  
  bg `linear-gradient(100deg, #ffffff 18%, #fdeadb 100%)`, border `1.2rem solid rgba(255,255,255,.9)`,  
  shadow `0 3rem 9rem rgba(160,120,80,.09)`, text `Productivity Insights` — 12rem / 700 / ls -0.01em / `#111`
- H2: `48 hours` — margin-top 22, 37rem / 800 / ls -0.035em / line 1 / `#0b0b0b`
- Sub: `saved this week!` — margin-top 12, 14.5rem / 400 / ls -0.012em / `#1d1d1d`

### Bar chart (margin-top auto, height 294, flex end, gap 13)
Seven columns MON→SUN. Quiet bars bg `#e9e3da`, radius 7, pad-top 9, label color `#a1978a` 13rem/500. Day labels: 10.4rem / 500 / ls 0.05em / `#a79c8e`, margin-top 10.

| Day | Label | Bar height |
|---|---|---|
| MON | 2h | 43.2 |
| TUE | 6h | 80.9 |
| WED | 12h | 131.7 |
| THU | 20h | 165.5 |
| FRI | 31h | 203.2 |
| SAT | 40h | 235.2 |
| SUN | 48h | **265** — special gradient `linear-gradient(180deg, #f2b705 0%, #e7b208 26%, #a8a422 52%, #6a8f33 76%, #3d7a3e 100%)`, white text weight 600, shadow `0 4rem 12rem rgba(150,120,20,.20)` |

Aria on chart: `"Hours saved per day: Monday 2, Tuesday 6, Wednesday 12, Thursday 20, Friday 31, Saturday 40, Sunday 48"`

---

## CARD 5 — SEARCH (`.search`)
**Background:** `linear-gradient(103deg, #eae9f5 0%, #e2e0f1 34%, #cfcdea 72%, #c2c0e6 100%)`  
Flex align center, pad-left 46, pad-right 25. Aria: `"Search"`.

- H2: `Find anything<br>instantly` — 23rem / 800 / line 1.39 / ls -0.028em / `#0d0d10`
- Search bar: `margin-left:auto`, **612×64**, radius 999, white, shadow `0 4rem 14rem rgba(70,66,120,.10)`, flex, pad `0 22 0 10`, gap 16
  - Mag circle 44×44 bg `#f1f1f5` with search SVG (circle r=7.1 stroke `#121212` w=2.2 + diagonal handle)
  - Placeholder: `Search tasks, docs, workflows...` — 16.5rem / 400 / ls -0.015em / `#8c8c99`
  - Mic SVG 16×20: dark capsule + U arc + stem + base, fill/stroke `#141414`

---

## RESPONSIVE

### Tablet: `(min-width:701px) and (max-width:1040px) and (max-aspect-ratio:3/2)`
- Scale: `min(95vw/1025, 94vh/918)`
- Stage 1025×918; cols `627 | 388`; rows `505 | 194 | 201`
- Remap: automate(1,1) height 501; notif(1,2); search(1,3); insights(2,1); connect(2, 2/span2)
- Notif: center toast (wrap width 380, max-width calc(100%-24))
- Search: stack column; bar full width, margin-top 22
- Bump toast/tag/qbar/day font sizes for legibility floor

### Mobile: `(max-width:700px)`
- `html { font-size: calc((min(100vw,560px) - 30px) / 375) }`
- Body: block, scroll Y, pad 15px 0
- Single column stage width 375, auto height, row-gap 13
- Fixed card heights: notif 149, connect 508, insights 500, automate 298
- Automate illo: `scale(.5981)` origin 0 0; smaller headline/sub
- Search stacked, bar height 58

---

## ENTRANCE ANIMATION SYSTEM (exact)

### Boot script (in `<head>`)
If NOT `prefers-reduced-motion: reduce`:
- Add class `motion-pending` on `<html>`
- Fail-safe timeout 2400ms removes `motion-pending`

### End script (before `</body>`)
1. If reduced motion OR `__entrancePlayed` already: clear fail-safe, remove motion classes, return
2. Set `__entrancePlayed = true`
3. Race `document.fonts.ready` vs 700ms deadline
4. Replace `motion-pending` → `entrance-run`
5. After **1850ms**, remove `entrance-run` (returns to pure static authored styles)

### While `.motion-pending`
Desktop: all `.card` `opacity:0; visibility:hidden`  
Mobile ≤700: only `.notif`, `.connect`, `.automate` hidden; insights/search stay visible and never animate

### While `.entrance-run` — panel order (product mosaic: automate leads)
Use `will-change: opacity, translate, scale, clip-path` on cards. All animations `backwards` fill.

**Keyframes (exact):**
| Name | From → To |
|---|---|
| `panel-settle` | opacity 0, translate Y 12, scale .988, clip-path inset(3% round 22) → settled (opacity 1 at 62%) |
| `type-unmask` | opacity 0, translate Y 16, clip-path inset(0 0 96% 0) → full |
| `content-rise` | opacity 0, translate Y 9 → none |
| `interface-settle` | opacity 0, translate Y 16, scale .975 → none |
| `detail-settle` | opacity 0, translate Y 8, scale .97 → none |
| `toast-arrive` | opacity 0, translate Y 10, scale .982 → none |
| `chip-row-arrive` | opacity 0, translate Y 11 → none |
| `chart-unmask` | opacity 0, translate Y 10, clip-path inset(100% 0 0 0) → none |
| `search-resolve` | opacity 0, translate X 12, scale(.975, 1) → none; transform-origin right center |

**Easings:** panels/details mostly `cubic-bezier(.16,1,.3,1)`; type-unmask `cubic-bezier(.22,1,.36,1)`.

**Timing table:**
| Target | Animation | Duration | Delay |
|---|---|---|---|
| `.automate` card | panel-settle | .82s | .04s |
| `.notif` card | panel-settle | .66s | .10s |
| `.insights` card | panel-settle | .74s | .14s |
| `.connect` card | panel-settle | .74s | .20s |
| `.search` card | panel-settle | .68s | .28s |
| automate h2 | type-unmask | .78s | .20s |
| automate .sub | content-rise | .54s | .48s |
| win-back | interface-settle | .84s | .42s |
| win-front | interface-settle | .94s | .50s |
| pill-ai | detail-settle | .60s | .72s |
| pill-wf | detail-settle | .58s | .78s |
| cursor | detail-settle | .54s | .96s |
| toast-wrap | toast-arrive | .62s | .38s |
| connect h2 | type-unmask | .64s | .54s |
| connect .sub | content-rise | .48s | .73s |
| chip-row.r1 | chip-row-arrive | .62s | .86s |
| chip-row.r2 | chip-row-arrive | .62s | .91s |
| chip-row.r3 | chip-row-arrive | .62s | .96s |
| chip-slack | detail-settle | .58s | 1.02s |
| insights .tag | content-rise | .46s | .44s |
| insights h2 | type-unmask | .62s | .56s |
| insights .sub | content-rise | .44s | .75s |
| .chart | chart-unmask | .86s | .72s |
| search h2 | type-unmask | .56s | .72s |
| .bar-search | search-resolve | .70s | .88s |

`prefers-reduced-motion: reduce` → no animations, all visible immediately.

---

## ASSET URLS
There are **no raster/CDN image assets**. Recreate with:
1. Google Fonts URL above  
2. Inline SVGs only (Slack, Teams, Notion, GitHub, Drive, Figma, toast sparkle, AI dual-sparkle, checkmark, cursor, search, mic)

Do not invent Unsplash/CDN photos, Lottie files, or icon libraries.

---

## DESIGN INTENT SUMMARY
Centered product **feature mosaic** on light grey `#f0f0f0`: five rounded cards — pink notification toast, cool-grey integrations with pill chips + tilted Slack, chartreuse automation hero with two splayed faux OS windows + AI/workflow badges + cursor, warm peach insights with ascending bars (Sunday gold→green), lavender search with pill search field. One-shot entrance: automate panel leads, interface layers resolve, surrounding utilities complete the frame; then animations detach leaving the static design.

---

## DELIVERABLE
Single `index.html` matching the above measurements, colors, copy, SVG geometry, responsive rules, and entrance choreography exactly. No frameworks. No cards-within-cards beyond the five specified panels.

---