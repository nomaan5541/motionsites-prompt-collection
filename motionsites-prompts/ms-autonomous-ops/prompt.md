Recreate this page as a single self-contained index.html file — pixel-faithful to the Falcon AI Operations Overview triptych. No frameworks, no external CSS/JS/fonts/images. System fonts only. Light color scheme. All sizing on desktop uses CSS container query units (cqw/cqh) against a size container.

════════════════════════════════════════
PAGE META & BOOT
════════════════════════════════════════
- <!doctype html>, lang="en"
- viewport: width=device-width, initial-scale=1, viewport-fit=cover
- color-scheme: light
- title: Falcon AI Operations Overview
- Inline head script BEFORE styles:
  - If prefers-reduced-motion is NOT reduce AND Element.prototype.animate exists:
    - add class "entrance-pending" on <html>
    - set window.__entranceFallback = setTimeout that removes "entrance-pending" and "entrance-active" after 3000ms
  - Otherwise do nothing (page shows fully visible)

════════════════════════════════════════
DESIGN TOKENS (:root)
════════════════════════════════════════
--aspect: 1.5204255          (kept; not required for layout math)
--page: #f0f0f0
--surface: #fff
--panel: #fffaf6
--ink: #282828
--muted: #777
--orange: #ff6900
--orange-soft: #ffdfca
--green: #4d8c35
--weight-regular: 400
--weight-body: 475
--weight-medium: 500
--weight-semibold: 600
--weight-display: 600
--weight-card-title: 600
--weight-bold: 700
--card-title-size: 1.86cqw
--card-title-tracking: -.125cqw
--feature-title-size: 2.17cqw
--feature-title-tracking: -.09cqw
--cards-height: 33.81cqw
--cards-scale: min(1, calc(60cqh / var(--cards-height)))

════════════════════════════════════════
FONTS (exact stacks — no webfonts)
════════════════════════════════════════
Body / most UI:
  "Segoe UI Variable", "Segoe UI", Arial, Helvetica, sans-serif
  weight: --weight-regular; antialiased; text-rendering: geometricPrecision

Card titles (.card-copy):
  "Segoe UI Semibold", "Segoe UI Variable Display", "Segoe UI", Arial, sans-serif

Card body paragraphs:
  "Segoe UI Variable", "Segoe UI", Arial, sans-serif

════════════════════════════════════════
GLOBAL LAYOUT
════════════════════════════════════════
html, body: width/height 100%; margin 0; overflow hidden; background --page
body color --ink
.viewport: position fixed; inset 0; overflow hidden; bg --page
.scene: absolute inset 0; overflow hidden; container-type: size; bg --page

.cards (desktop triptych):
  position absolute; top/left 50%; translate -50% -50%
  width: 81.71cqw; height: var(--cards-height)
  display grid; grid-template-columns: 32.33% 32.33% 31.70%
  justify-content: space-between; align-items: start
  scale: var(--cards-scale)   ← shrinks whole composition if viewport is short

════════════════════════════════════════
CARD SHELL
════════════════════════════════════════
.card:
  relative; width 100%; height 100%; overflow hidden
  display grid; grid-template-rows: 72.2% 27.8%   ← panel / copy split
  border: .075cqw solid rgb(255 233 218 / 96%)
  border-radius: 1.59cqw
  background: --surface
  box-shadow:
    .32cqw 1.18cqh 1.42cqw rgb(44 35 29 / 11%),
    0 .18cqh .42cqw rgb(44 35 29 / 3.5%)

.card:last-child (3rd / Faster Decisions):
  height: 98.5%; margin-top: .76%

.panel (upper visual area):
  relative; margin-inline: 2.55%; overflow hidden
  border-radius: 1.28cqw 1.28cqw 1.08cqw 1.08cqw
  background:
    radial-gradient(circle at 50% 78%, rgb(255 225 207 / 30%), transparent 47%),
    linear-gradient(180deg, rgb(255 255 255 / 96%), rgb(255 248 243 / 94%))

.card:last-child .panel:
  margin-inline: 2%
  background:
    radial-gradient(circle at 74% 46%, rgb(255 225 204 / 70%), transparent 48%),
    linear-gradient(180deg, rgb(255 255 255 / 96%), rgb(255 242 232 / 97%))

.card-copy:
  relative; padding: 7.1% 8.4% 6.5%
  h2: margin 0 0 1.6%; color #292929; font-size --card-title-size; weight --weight-card-title;
       line-height 1.04; letter-spacing --card-title-tracking; white-space nowrap;
       transform: translateY(-.36cqh); transform-origin left top
  .card:last-child h2: font-size --feature-title-size; letter-spacing --feature-title-tracking
  p: margin 0; color --muted; font-size 1.39cqw; weight --weight-medium;
     line-height 1.04; letter-spacing -.06cqw;
     transform: scaleX(.94); transform-origin left top
     (exact line breaks via <br> as in copy below)

.corner-icon:
  absolute; right 8.4%; bottom 22.5%; width 8.2%; aspect-ratio 1
  display grid; place-items center; border-radius 50%
  background --orange-soft; color --orange

Entrance hide: .entrance-pending .card { opacity: 0 }
Reduced motion: .entrance-pending .card { opacity: 1 }
.entrance-active applies will-change on .card, .panel, .card-copy, h2, p, .corner-icon

════════════════════════════════════════
DOM STRUCTURE (exact order & copy)
════════════════════════════════════════
main.viewport[aria-label="Falcon AI operations overview"]
  section.scene
    section.cards[aria-label="Product benefits"]

      /* CARD 1 — Instant Visibility */
      article.card
        .panel[aria-label="Visibility timeline chart"]
          .timeline: span "06 AM" + i + span "12 PM" + i + span "06 PM"
          .bars[aria-hidden="true"]: 24 <i class="bar"> with --h heights:
            20%,33%,48%,56%,51%,47%,39%,31%,53%,55%,60%,56%,
            then .bar.active 100%, then 92%,76%,67%,62%,65%,59%,70%,74%,87%,83%,77%
          .value-chip: "$4.7M"
          .axis: START | ACTIVE | PEAK | COMPLETE
        .card-copy
          h2: Instant Visibility
          p: Real-time data across your<br>operations.
          span.corner-icon > i.spark

      /* CARD 2 — Autonomous Workflows (centre / product anchor) */
      article.card
        .panel
          .assistant-head: span.badge > i.spark  +  span "Falcon AI"
          p.question: How can I help you automate?
          .prompt (div): When a new lead is captured in WebFlow,<br>create a deal in HubSpot and notify the sales<br>team on Slack.
          .automate:
            span.automate-label: Automate
            canvas.magic[data-sparkle-icon][aria-hidden]
          i.cursor[aria-hidden]
        .card-copy
          h2: Autonomous Workflows
          p: Automate processes with<br>Falcon AI.
          span.corner-icon > i.flow-icon

      /* CARD 3 — Faster Decisions */
      article.card
        .panel
          .metric:
            .metric-label: Time saved
            .metric-row: strong "128 Hrs" + span "↑ 18% efficiency"
          canvas.decision-flow[data-flow-chart][aria-label="Decision paths converging into an optimized result"]
          .tag.action: Action: Approve
          .tag.confidence: Decision Confidence: 98%
          .tag.path: Path Optimized: +14.2%
        .card-copy
          h2: Faster Decisions
          p: Turn insights into action<br>instantly.
          span.corner-icon > i.speed

════════════════════════════════════════
CARD 1 — VISIBILITY CHART DETAILS
════════════════════════════════════════
.timeline: absolute top 5.7% left 20.8% width 58.4%; flex; space-between; align center
  color #f27624; font-size .62cqw; weight medium; letter-spacing -.015cqw
  i: width 20%; border-top .05cqw dashed rgb(190 139 96 / 70%)

.bars: absolute left/right 5.9%; bottom 12%; height 62%; flex; align flex-end; space-between
.bar: width 2.4%; height var(--h); border-radius 999px; bg rgb(255 219 196 / 64%)
.bar.active: width 2.6%; bg --orange; box-shadow 0 0 .28cqw rgb(255 105 0 / 24%)

.value-chip: absolute top 15.5% left 46.2% width 14% height 7.6%
  grid place-items center; border .12cqw solid #fff; radius 999px; bg --orange
  shadows: 0 0 0 .055cqw --orange, 0 .28cqh .4cqw rgb(69 38 18 / 24%)
  color #fff; font .67cqw; weight semibold

.axis: absolute left 7.7% right 7.2% bottom 5.2%; flex space-between
  color #888; font .57cqw

.spark (corner + badge base): relative width 52% aspect-ratio 1
  ::before horizontal bar: top 41% left 0 width 100% height 18%; radius 999px; bg currentColor
  ::after vertical bar: top 0 left 41% width 18% height 100%; radius 999px; bg currentColor
  (= plus/spark glyph)

════════════════════════════════════════
CARD 2 — WORKFLOW / ASSISTANT DETAILS
════════════════════════════════════════
.assistant-head: absolute top 8.2% left 6.2%; flex; align center; gap 1.02cqw
  color --orange; font 1.28cqw; weight bold; letter-spacing -.04cqw
  .badge: 2.16cqw square circle; bg --orange-soft; grid center
  .spark INSIDE badge (override): width 48%; bg currentColor; filter blur(.035cqw);
    clip-path polygon 8-point star:
      47% 0, 53% 0, 58% 28%, 65% 35%, 72% 42%, 100% 47%, 100% 53%,
      72% 58%, 65% 65%, 58% 72%, 53% 100%, 47% 100%,
      42% 72%, 35% 65%, 28% 58%, 0 53%, 0 47%, 28% 42%, 35% 35%, 42% 28%
    ::before/::after content: none

.question: absolute top 21.5% left 6.2%; margin 0; color #151515
  font 1.34cqw; weight medium; line-height 1; letter-spacing -.07cqw

.prompt: absolute top 32% left 6.2% width 87.2% height 35.8%
  padding 4.7% 4.2%; border .06cqw solid #beb4ae; radius .86cqw
  bg rgb(255 255 255 / 32%); color --muted
  font 1.03cqw; weight --weight-body (475); line-height 1.31; letter-spacing -.035cqw

.automate (CTA pill): absolute top 78.1% left 6.2% width 34.6% height 11.6%
  flex; align center; justify space-between; padding-inline 1cqw; radius 999px
  background: linear-gradient(100deg, #ff9b5b 0%, #ff8840 38%, #ff6b05 100%)
  box-shadow:
    0 .6cqh 1.35cqw rgb(255 105 0 / 52%),
    0 .2cqh .46cqw rgb(255 105 0 / 31%),
    0 0 .82cqw .08cqw rgb(255 118 30 / 24%)
  color #fff; font .98cqw; weight body; line-height 1
  .automate-label: letter-spacing -.025cqw; transform scaleX(1.03); origin left center
  canvas.magic: flex 0 0 auto; width 1.5cqw; height 1.46cqw; translateX(-.15cqw)

.cursor: absolute top 85.7% left 54% width 4.3% aspect-ratio .72; z-index 3; isolation isolate
  filter: drop-shadow(0 0 .075cqw #fff) ×2 + drop-shadow(.08cqw .16cqw .08cqw rgb(0 0 0 / 48%))
  ::before: inset 0; bg #050505; clip-path polygon(0 0,94% 62%,57% 67%,38% 100%)
  ::after: inset -11%; z-index -1; bg #fff; same clip-path (white outline)

.flow-icon (corner): width 54% height 58%
  bg linear-gradient(--orange,--orange) center / 48% 18% no-repeat (horizontal bar)
  ::before/::after: vertical rounded bars width 34% height 70% bg --orange
    before: left 4% top 24%; after: right 4% top 6%
  (= stylized “flow / branching” glyph)

════════════════════════════════════════
CARD 3 — DECISION / METRICS DETAILS
════════════════════════════════════════
.metric: absolute top 7.8% left 5.2%
  .metric-label: mb .38cqh; color #676767; font .88cqw; weight body
  .metric-row: flex; align center; gap 1.02cqw
  strong: color --orange; font 2.1cqw; weight bold; lh .95; tracking -.04cqw
  span: mt .52cqh; color --green; font .93cqw; weight bold; tracking -.045cqw

.decision-flow canvas: absolute top 39% left 0 width 100% height 53%; display block; pointer-events none

.tag: absolute z-index 2; height 8.3%; grid center; radius 999px
  bg rgb(255 255 255 / 95%); color #282828; font .62cqw; weight semibold; tracking -.012cqw
  .tag.action:      top 34.8%; right 8%; width 28%
  .tag.confidence: top 67%; left 6%; width 40%
  .tag.path:       top 82.2%; right 8%; width 37%

.speed (corner bolt): width 58% aspect-ratio 1
  three horizontal orange bars via multi-background:
    linear-gradient(--orange,--orange) 0 31% / 27% 8% no-repeat,
    linear-gradient(--orange,--orange) 0 49% / 38% 8% no-repeat,
    linear-gradient(--orange,--orange) 0 67% / 22% 8% no-repeat
  ::before: inset 4% 1% 2% 28%; bg --orange;
    clip-path polygon(58% 0,100% 0,69% 40%,94% 40%,28% 100%,44% 58%,7% 58%)
  ::after: content none

════════════════════════════════════════
CANVAS 1 — SPARKLE ICON (Automate button)
════════════════════════════════════════
ResizeObserver redraws [data-sparkle-icon]. DPR-aware canvas sizing.
Data (frozen):
  sparkles: [{x:.01,y:.01,size:.50}, {x:.28,y:.26,size:.72}]
  sparklePoints (unit star):
    [.50,.06],[.59,.41],[.94,.50],[.59,.59],[.50,.94],[.41,.59],[.06,.50],[.41,.41]
Draw each sparkle:
  size = min(w,h) * sparkle.size; offset by x/y of canvas bounds
  map sparklePoints → absolute points
  roundedPolygon(points, roundness .34): for each corner, move to after-point of first,
    then for each subsequent: lineTo(before) + quadraticCurveTo(point, after), close path
  fillStyle rgba(255,220,202,.55); strokeStyle #fff
  lineWidth max(1.1, size*.15); lineCap/Join round
  shadowColor rgba(255,255,255,.78); shadowBlur size*.06; fill+stroke; clear shadow

════════════════════════════════════════
CANVAS 2 — DECISION FLOW CHART
════════════════════════════════════════
ResizeObserver redraws [data-flow-chart]. DPR-aware.

Bands (filled bezier ribbons L→R), source/target as [top,bottom] fractions of height:
  {source:[.08,.26], target:[.29,.32],  color:'rgba(255,189,144,.60)'}
  {source:[.23,.42], target:[.30,.335], color:'rgba(255,149,80,.70)'}
  {source:[.50,.75], target:[.32,.355], color:'rgba(255,136,64,.82)'}
  {source:[.69,.98], target:[.33,.365], color:'rgba(255,181,128,.54)'}
  {source:[.39,.51], target:[.31,.345], color:'rgba(255,105,0,.96)'}  ← brightest core

flowShape: sourceHold .38, targetApproach .74, threadWidth .00135
Band path: move(0, h*sourceTop) → cubic(w*sourceHold,h*sourceTop, w*targetApproach,h*targetTop, w,h*targetTop)
  → line(w,h*targetBottom) → cubic back to (0,h*sourceBottom) → close → fill

Threads (white strokes on top):
  {source:.05, target:.30,  alpha:.68}
  {source:.20, target:.315, alpha:.60}
  {source:.62, target:.342, alpha:.84}
  {source:.82, target:.352, alpha:.74}
  {source:.97, target:.36,  alpha:.64}
lineWidth max(.72, w*threadWidth); strokeStyle rgba(255,255,255,alpha)
same bezier control points as band edges (sourceHold / targetApproach)

Visual: five orange ribbons converge from left fan into a tight right node; white hairlines ride the ribbons.

════════════════════════════════════════
ENTRANCE ANIMATION (Web Animations API — exact choreography)
════════════════════════════════════════
Only if html has entrance-pending and !window.__entranceStarted.
Set __entranceStarted = true.
Double rAF, then:

1) Measure visible cards intersecting viewport.
2) Detect singleRow: all visible cards’ tops within max(4, height*0.04) of the topmost.
3) Order:
   - singleRow (desktop): centre card index===1 first, then others by |distance from viewport centre|
   - else (tablet/phone): sort by top then left
4) compact = viewport.width <= 512
   rise = compact ? 11 : 16
   easings: easePlace = cubic-bezier(.16,1,.3,1); easeWipe = cubic-bezier(.24,.86,.28,1)

Per card delays:
  singleRow: primary (index 1) delay 60; others 245 + (order-1)*85
  stacked: 70 + order*115
  drift (singleRow non-primary only): -sign(centreOffset) * min(width*0.018, 7)
  else drift 0

Four layers per card (fill: both):
  SURFACE .card:
    from {opacity:0, transform: translate3d(drift, rise, 0) scale(.985)} → {opacity:1, transform:none}
    duration compact?780 : (primary?960:900); delay; easePlace
    NOTE: no clip-path on card (would clip shadow)

  PANEL .panel:
    from {opacity:0, transform:scale(.994), clipPath: inset(0 0 {compact?26:34}% 0)}
    → {opacity:1, transform:none, clipPath:inset(0 0 0 0)}
    duration compact?620:720; delay+200; easeWipe

  COPY .card-copy:
    from {opacity:0, transform: translate3d(0, compact?8:11, 0)} → none
    duration compact?540:620; delay+330; easePlace

  HEADING / DESCRIPTION (clip uncover only — do NOT transform them; they keep authored transforms):
    from {opacity:0, clipPath: inset(-30% 0 100% 0)} → {opacity:1, clipPath: inset(-30% 0 -30% 0)}
    heading: delay+350; duration compact?470:540; easeWipe
    description: delay+450; duration compact?430:490; easeWipe

  ACCENT .corner-icon:
    from {opacity:0, transform:scale(.88)} → none
    duration compact?340:400; delay+540; easePlace

On start: add entrance-active, remove entrance-pending.
When all animations settle: cancel() each, then revealImmediately() (clear fallback timeout; remove both classes).
If animate throws: cancel all, reveal immediately.
prefers-reduced-motion / no animate: never enter pending → page visible instantly.

════════════════════════════════════════
RESPONSIVE
════════════════════════════════════════
TABLET — @media (max-width: 56rem) and (max-aspect-ratio: 5/4):
  .cards: width min(88cqw, 70cqh, 45rem); height auto; scale 1
    2-col grid; gap clamp(.75rem,2cqw,1.2rem); rows auto
  .card: height auto; aspect-ratio .781; radius clamp(.9rem,2cqw,1.2rem)
  .card:last-child: grid-column 1/-1; width calc((100% - gap)/2); centered; no margin-top
  Clamp down all internal type/icons (timeline, chip, axis, assistant, question, prompt, automate, magic, metric, tags) per the source clamps
  Panel radii clamp similarly

MOBILE — @media (max-width: 32rem), OR (max-height: 28rem) and (max-width: 64rem) and (pointer: coarse):
  html/body: height auto; min-height 100%; overflow auto
  .viewport: relative; min-height 100svh; overflow visible
  .scene: relative; height auto; min-height 100svh; padding-block with safe-area;
          container-type: inline-size; overflow visible
  .cards: relative; width min(90cqw, 26rem); centered; 1 column; gap clamp(1rem,4cqw,1.5rem);
          no translate/scale
  .card + :last-child: full width; aspect-ratio .781; larger clamp radii
  Larger mobile type clamps for titles, body, chart labels, CTA (automate min-height 2.75rem)

════════════════════════════════════════
COMPOSITION RULES
════════════════════════════════════════
- First viewport = ONE composition: three peer product cards on flat #f0f0f0 — no nav, no hero headline, no footer, no stats strip outside the cards.
- Cards are the interaction/content containers; soft peach borders + warm shadows; no purple theme, no dark mode.
- Centre card (Falcon AI / Autonomous Workflows) is the product brand signal and entrance leader.
- Decision chart and Automate sparkles are canvas-drawn, not images.
- Single file; desktop + tablet + phone.

Build so a wide desktop screenshot shows three equal-ish cards centered as a scaled triptych: left bar chart with $4.7M chip, centre Falcon AI workflow with Automate pill + black cursor, right converging orange flow with 128 Hrs / tags — then entrance plays centre-out on load.