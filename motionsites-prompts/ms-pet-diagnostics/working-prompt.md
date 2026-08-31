Build a **single self-contained `index.html`** file. No build step, no framework, no external
JS, no local image files. All CSS in one `<style>` block in `<head>`; one small `<script>`
before `</body>`. Match every number below exactly — the layout is measurement-driven, not
eyeballed.

---

## 1. Assets (remote only — use these exact URLs)

**Hero video (desktop, autoplaying background) — 1928×1076, 8.04 s, H.264 MP4, silent:**
```
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260814_034538_de4032ce-5035-473d-a5b1-0e2224635a6a.mp4
```

**Hero still (desktop) — doubles as the video's poster and the reduced-motion frame:**
```
https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/193afe38-41fa-4454-9d48-ed154b66d17c.png
```

**Hero still (mobile, 9:16 portrait crop):**
```
https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/44c2e930-23df-4ffb-98bc-02b0f7014028.png
```

**Open Graph share image:**
```
https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/0308ea65-1b37-4171-80f8-7d2eaacf1280.png
```

All four depict the same scene: a golden retriever lying on a low dark-walnut dog bed on the
left third of frame, head turned toward camera; a person seen from behind on the right in a
ribbed olive-green knit sweater, seated on polished concrete; floor-to-ceiling black-framed
window behind them onto blurred golden hills; a palm houseplant at the far-left edge. Warm
late-afternoon grade.

---

## 2. Fonts

Google Fonts, loaded with `preconnect` to `fonts.googleapis.com` and `fonts.gstatic.com`
(the latter with `crossorigin`):

```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

- **Instrument Serif 400** — the headline only.
- **Inter 400 / 500 / 600** — everything else.
- Body font stack: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`
- Headline stack: `"Instrument Serif", Georgia, "Times New Roman", serif`
- Enable `-webkit-font-smoothing: antialiased` and `-moz-osx-font-smoothing: grayscale` on `body`.

---

## 3. Head

```
<title>Lume — 120+ health markers, read by top-tier vets.</title>
meta description: 120+ health markers read. Guidance from top-tier vets. Just $349 in total. Created alongside leading veterinary research specialists.
og:title:       Lume — 120+ health markers read
og:description: Guidance from top-tier vets. Just $349 in total.
og:image:       <OG url above>
viewport:       width=device-width, initial-scale=1
```

---

## 4. Design tokens & global reset

```css
:root{ --cream:#eef0d0; --ink:#101010; }
*,*::before,*::after{ box-sizing:border-box; }
body{
  background:#0d0d0d;
  overflow-x:hidden;
  color:var(--ink);
}
```

`#eef0d0` is the pale cream used for the highlighted brand column and the primary pill.
`#0d0d0d` is the near-black page ground visible below the hero band.

---

## 5. Section geometry — full-bleed, fluid measure

The page is **one full-bleed hero band**. There is no gray page frame, no max-width page
shell, no rounded corners, no drop shadow on the section.

```css
.hero{
  position:relative;
  width:100%;
  height:min(92vh, 62vw);
  min-height:600px;
  overflow:hidden;
  isolation:isolate;
}
```

Inside it, a **measure container** holds the headline and table. It is what every `cqw`
value below resolves against, and it grows with the monitor so type scales up on large
displays and down on small ones:

```css
.hero__inner{
  position:absolute;
  inset:0;
  z-index:2;
  width:100%;
  max-width:min(100%, clamp(1080px, 82vw, 1700px));
  margin-inline:auto;
  container-type:inline-size;
}
```

**The nav is deliberately NOT inside `.hero__inner`** — it is a direct child of `.hero` so it
sits at the true page edges like a normal site header. Everything else lives inside the measure.

Resulting type scale (verify against these):

| Viewport | Measure | Headline | Pills | Table text |
|---|---|---|---|---|
| 1024 | 1024 | 20.8px | 10px | 9.4px |
| 1280 | 1080 | 21.9px | 10px | 9.9px |
| 1440 | 1181 | 24.0px | 10px | 10.9px |
| 1920 | 1574 | 32.0px | 12.4px | 14.5px |
| 2560+ | 1700 | 34.5px | 13.4px | 15.6px |

---

## 6. Media layer

Three stacked elements, all `.hero__media`, all absolutely positioned and covering:

```css
.hero__media{
  position:absolute; inset:0;
  width:100%; height:100%;
  object-fit:cover;
  object-position:50% 50%;
  z-index:0;
  filter:saturate(1.06) contrast(1.04) brightness(.97);
}
.hero__media--mobile{ display:none; }
```

Order in the DOM: desktop `<img>`, mobile `<img>`, then the `<video>` on top.

```html
<img class="hero__media hero__media--desktop" src="…193afe38….png"
     alt="A person sitting beside their golden retriever in a sunlit living room"
     fetchpriority="high" decoding="async">
<img class="hero__media hero__media--mobile" src="…44c2e930….png"
     alt="" aria-hidden="true" decoding="async">
<video class="hero__media hero__media--desktop hero__video" src="…de4032ce….mp4"
       autoplay muted loop playsinline preload="auto" aria-hidden="true" tabindex="-1"></video>
```

The video starts transparent and cross-fades in only once it can actually play, so a slow
connection shows the still rather than a black frame:

```css
.hero__video{ opacity:0; transition:opacity .9s ease; }
.hero__video.is-ready{ opacity:1; }
@media (prefers-reduced-motion:reduce){ .hero__video{ display:none; } }
```

---

## 7. Overlay gradients

A single `::after` on `.hero` at `z-index:1`, `pointer-events:none`, three layers stacked in
this order — two for text legibility, one warm tint to unify the grade:

```css
background:
  linear-gradient(to bottom, rgba(0,0,0,.30) 0%, rgba(0,0,0,.09) 20%, rgba(0,0,0,0) 38%),
  linear-gradient(to top,    rgba(0,0,0,.18) 0%, rgba(0,0,0,0) 26%),
  linear-gradient(120deg,    rgba(120,64,18,.14), rgba(150,96,32,.10));
```

---

## 8. Nav

```css
.nav{
  position:absolute; top:0; left:0; right:0;
  z-index:4;
  display:flex; align-items:center; justify-content:space-between;
  padding:clamp(16px,2vw,34px) clamp(18px,3.2vw,56px);
}
.brand{
  display:flex; align-items:center; gap:.42em;
  color:#fff;
  font-size:clamp(15px,1.15vw,23px);
  font-weight:500;
  letter-spacing:-.014em;
  text-decoration:none;
}
.brand__mark{ width:1.02em; height:1.02em; flex:none; display:block; }
```

**Brandmark — a crescent moon** (fits the name "Lume"), 16×16 viewBox, `fill="currentColor"`
so it inherits white in the nav and near-black in the table header:

```html
<svg class="brand__mark" viewBox="0 0 16 16" fill="none" aria-hidden="true">
  <path d="M11.35 1.55a7 7 0 1 0 0 12.9 7.65 7.65 0 0 1 0-12.9Z" fill="currentColor"/>
</svg>
```

Wordmark: `Lume`. Right side: one dark pill reading `Start today`.

---

## 9. Buttons

```css
.btn{
  display:inline-flex; align-items:center; justify-content:center;
  border:0; cursor:pointer; text-decoration:none; white-space:nowrap;
  font-family:inherit; font-weight:500;
  letter-spacing:-.006em;
  border-radius:999px;
  transition:background-color .18s ease, transform .18s ease;
}
.btn:active{ transform:translateY(1px); }

.btn--dark{                      /* nav */
  background:#0b0b0b; color:#fff;
  font-size:clamp(12px,.88vw,18px);
  padding:.86em 1.32em;
}
.btn--dark:hover{ background:#242424; }

.btn--cream{                     /* primary, in hero */
  background:var(--cream); color:#16160f;
  font-size:1em; padding:.9em 1.35em;
}
.btn--cream:hover{ background:#f3f5da; }

.btn--glass{                     /* secondary, in hero */
  background:rgba(255,255,255,.19); color:#fff;
  font-size:1em; padding:.9em 1.35em;
  backdrop-filter:blur(14px) saturate(120%);
  -webkit-backdrop-filter:blur(14px) saturate(120%);
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.15);
}
.btn--glass:hover{ background:rgba(255,255,255,.28); }
```

---

## 10. Headline block

```css
.hero__copy{
  position:absolute; z-index:3;
  left:50%; top:16.75%;
  transform:translateX(-50%);
  width:min(94%, 66cqw);
  text-align:center;
  color:#fff;
}
.hero__title{
  margin:0;
  font-family:"Instrument Serif",Georgia,"Times New Roman",serif;
  font-weight:400;
  font-size:max(17px, 2.03cqw);
  line-height:1.15;
  letter-spacing:.004em;
  text-shadow:0 1px 14px rgba(0,0,0,.30);
}
.hero__actions{
  display:flex; align-items:center; justify-content:center;
  gap:.55cqw;
  margin-top:1.66cqw;
  font-size:max(10px, .79cqw);
}
```

The `max()` floors are load-bearing: without them the table text drops below 8px on narrow
desktops when the fluid measure shrinks. Do not replace them with plain `cqw`.

Two lines, split by an explicit `<br>` (not natural wrapping):

```html
<h1 class="hero__title">
  120+ health markers read. Guidance from top-tier vets. Just $349 in total.<br>
  Created alongside leading veterinary research specialists
</h1>
```

Then the pills: cream `Start today`, glass `Book a call with us`.

---

## 11. Comparison table — the layering trick

This is the fiddly part. The table is **not** a `<table>`. It is a CSS grid of loose `div`s
laid over three independently positioned background panels, so the cream brand column can
float *above* the frosted panels and *overhang* the header row.

```css
.compare{
  --cols:1fr 16.5% 16.2%;
  --pad-x:.85em;
  --panel-top:3.2em;
  --panel-bottom:4.9em;
  --radius:1.4em;
  position:absolute; z-index:3;
  left:50%; transform:translateX(-50%);
  bottom:16%;
  width:54.8cqw;
  color:#fff;
  font-size:max(8.5px, .92cqw);
}
```

Column proportions are measured from the reference: feature column ≈67.3 %, brand 16.5 %,
comparison 16.2 %. The whole table is 54.8 % of the measure and horizontally centred.

**Layer 1 — frosted panels** (`z-index:0`, `pointer-events:none`), inset from the container
top/bottom by the two custom properties so they hug only the rows:

```css
.compare__panels{
  position:absolute; left:0; right:0;
  top:var(--panel-top); bottom:var(--panel-bottom);
  display:grid; grid-template-columns:var(--cols);
  z-index:0; pointer-events:none;
}
.panel{ border-radius:var(--radius); }
.panel--features{                       /* spans columns 1–2 */
  grid-column:1 / span 2;
  background:linear-gradient(102deg, rgba(255,255,255,.19), rgba(255,255,255,.08));
  backdrop-filter:blur(18px) saturate(115%);
  -webkit-backdrop-filter:blur(18px) saturate(115%);
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.12);
}
.panel--vet{                            /* column 3 only */
  grid-column:3;
  background:rgba(255,255,255,.12);
  backdrop-filter:blur(18px) saturate(115%);
  -webkit-backdrop-filter:blur(18px) saturate(115%);
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.11);
}
```

Note the features panel spans **two** columns so it passes *behind* the cream column — the
frosted glass is continuous underneath it.

**Layer 2 — the cream brand column** (`z-index:2`), which overhangs the header by `1.5em`
above and sits `0.2em` below the panels:

```css
.hugo-col{
  position:absolute; z-index:2;
  top:-1.5em;
  bottom:calc(var(--panel-bottom) - .2em);
  left:calc(100% - 32.7%);
  width:16.5%;
  background:var(--cream);
  border-radius:var(--radius);
  box-shadow:0 12px 34px -14px rgba(0,0,0,.45);
  pointer-events:none;
}
```

**Layer 3 — the content grid** (`z-index:1`, cells bumped to `3` where they sit on cream):

```css
.compare__grid{ display:grid; grid-template-columns:var(--cols); align-items:stretch; }
.compare__head{ display:contents; }     /* header spans become grid items directly */
.compare__head span{
  font-size:1.02em; font-weight:500;
  letter-spacing:-.012em;
  height:calc(var(--panel-top) / 1.02);
  display:flex; align-items:flex-start;
  text-shadow:0 1px 8px rgba(0,0,0,.4);
}
.compare__head .h-feature{ padding-left:var(--pad-x); }
.compare__head .h-hugo,
.compare__head .h-vet{ justify-content:center; }
.compare__head .h-hugo{                 /* sits on cream → dark ink, no shadow */
  color:#1a1a12; text-shadow:none;
  position:relative; z-index:3;
  align-items:center; height:auto;
}

.row-label,.row-hugo,.row-vet{
  display:flex; align-items:center;
  height:3.6em;
  position:relative; z-index:1;
}
.row-label{
  padding-left:var(--pad-x); padding-right:1em;
  letter-spacing:-.008em;
  color:rgba(255,255,255,.95);
  text-shadow:0 1px 6px rgba(0,0,0,.3);
}
.row-hugo{ justify-content:center; color:#20200f; z-index:3; }
.row-vet{ justify-content:center; color:rgba(255,255,255,.9); text-shadow:0 1px 6px rgba(0,0,0,.3); }
```

**Hairline dividers**, inset by `--pad-x` on the outer edge only, suppressed on the last row:

```css
.row-label::after{ content:""; position:absolute; left:var(--pad-x); right:0; bottom:0;
                   height:1px; background:rgba(255,255,255,.16); }
.row-vet::after  { content:""; position:absolute; left:0; right:var(--pad-x); bottom:0;
                   height:1px; background:rgba(255,255,255,.14); }
.r-last::after{ display:none !important; }
```

Add class `r-last` to all three cells of the fourth row.

**Checkmark** (one per row, in the cream column), `1.1em` square:

```html
<svg class="check" viewBox="0 0 14 14" fill="none" aria-label="Included" role="img">
  <path d="M2.4 7.4l3 3 6.2-7" stroke="currentColor" stroke-width="1.35"
        stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```
```css
.check{ width:1.1em; height:1.1em; display:block; }
```

---

## 12. Totals & footnote

```css
.totals{
  display:grid; grid-template-columns:var(--cols); align-items:center;
  margin-top:1.9em;
  font-weight:600; font-size:1.02em;
  letter-spacing:-.014em;
  text-shadow:0 1px 8px rgba(0,0,0,.4);
}
.totals span:first-child{ padding-left:var(--pad-x); }
.totals span:nth-child(n+2){ text-align:center; }
.footnote{
  margin:.8em 0 0 var(--pad-x);
  font-size:.88em; font-style:italic; font-weight:400;
  color:rgba(255,255,255,.8);
  letter-spacing:-.004em;
  text-shadow:0 1px 6px rgba(0,0,0,.4);
}
```

---

## 13. Exact copy (character counts are a hard constraint)

| Slot | String | Chars |
|---|---|---|
| Wordmark (nav + table header) | `Lume` | 4 |
| Nav pill | `Start today` | 11 |
| Headline line 1 | `120+ health markers read. Guidance from top-tier vets. Just $349 in total.` | 74 |
| Headline line 2 | `Created alongside leading veterinary research specialists` | 57 |
| Primary pill | `Start today` | 11 |
| Secondary pill | `Book a call with us` | 19 |
| Header col 1 | `Screening & Care` | 16 |
| Header col 3 | `Standard` | 8 |
| Row 1 | `Complete Laboratory Panel (Blood, Urine, Stool, Saliva)` | 55 |
| Row 2 | `Full Physical Exam & Vitals Scan` | 32 |
| Row 3 | `Diet & Daily Behaviour Breakdown` | 32 |
| Row 4 | `Written findings and a tailored care plan` | 41 |
| Prices | `$720` `$280` `$160` `$240` | 4 each |
| Totals | `Total price:` / `$349` / `*$1,400+` | 12 / 4 / 8 |
| Footnote | `*Typical yearly spend if each of these was booked one by one at a walk-in clinic.` | 81 |

Escape the ampersands as `&amp;` in markup. British spelling in `Behaviour` is intentional.

---

## 14. Animations & motion

There are **no scroll, entrance, or decorative animations**. Total motion inventory:

1. **Hero video** — `autoplay muted loop playsinline`, 8.04 s seamless loop, silent.
2. **Video reveal** — `opacity 0 → 1` over `.9s ease`, triggered by the `is-ready` class.
3. **Button hover** — `background-color .18s ease`.
4. **Button press** — `transform:translateY(1px)`, `.18s ease`.

Global reduced-motion guard, plus the video is removed entirely under that preference:

```css
@media (prefers-reduced-motion:reduce){ *{ transition:none !important; } }
```

---

## 15. Responsive — single breakpoint at 820px

```css
@media (max-width:820px){
  .hero{ height:100svh; min-height:620px; }
  .hero__inner{ padding-inline:0; }
  .hero__media--desktop{ display:none; }   /* also hides the video */
  .hero__media--mobile{ display:block; }

  .nav{ padding:18px 18px; }
  .brand{ font-size:16px; }
  .btn--dark{ font-size:12px; }

  .hero__copy{ top:11%; width:88%; }
  .hero__title{ font-size:5.4cqw; line-height:1.24; }
  .hero__actions{ font-size:3.2cqw; gap:2cqw; margin-top:5cqw; flex-wrap:wrap; }

  .compare{ width:88cqw; bottom:6%; font-size:3.1cqw; --cols:1fr 20% 20%; }
  .hugo-col{ left:calc(100% - 40%); width:20%; }
  .row-label,.row-hugo,.row-vet{ height:4.1em; }
}
```

Because the video also carries `hero__media--desktop`, the same rule that swaps to the
portrait still also suppresses the video on phones — no separate mobile-video handling.

---

## 16. Script (the only JS on the page)

```html
<script>
  (function () {
    var v = document.querySelector('.hero__video');
    if (!v) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    function reveal() { v.classList.add('is-ready'); }
    if (v.readyState >= 3) reveal();
    else v.addEventListener('canplay', reveal, { once: true });

    v.addEventListener('loadeddata', function () {
      var p = v.play();
      if (p && p.catch) p.catch(function () {});
    }, { once: true });
  })();
</script>
```

---

## 17. Structure

```
body
└─ div.page                          ← inert wrapper, carries no CSS
   └─ section.hero
      ├─ img.hero__media.hero__media--desktop
      ├─ img.hero__media.hero__media--mobile
      ├─ video.hero__media.hero__media--desktop.hero__video
      ├─ nav.nav                     ← OUTSIDE the measure, pinned to page edges
      │  ├─ a.brand  (svg.brand__mark + span "Lume")
      │  └─ a.btn.btn--dark  "Start today"
      └─ div.hero__inner             ← the cqw measure container
         ├─ div.hero__copy
         │  ├─ h1.hero__title  (two lines, explicit <br>)
         │  └─ div.hero__actions  (a.btn--cream, a.btn--glass)
         └─ div.compare
            ├─ div.compare__panels  (div.panel--features, div.panel--vet)
            ├─ div.hugo-col
            ├─ div.compare__grid
            │  ├─ div.compare__head  (span.h-feature, span.h-hugo, span.h-vet)
            │  └─ 4 × (div.row-label, div.row-hugo, div.row-vet)
            ├─ div.totals  (3 spans)
            └─ p.footnote
```

---

## 18. Acceptance checks

- At 1440×900 the headline renders at **24px** and the table body text at **10.9px**.
- The cream column's top edge sits **above** the `Screening & Care` header baseline, and the
  frosted features panel is visible continuing *behind* it.
- The video reports `readyState 4`, `paused=false`, `videoWidth 1928`, `duration 8.04`.
- No horizontal scrollbar at any width from 320px to 2560px.
- With `prefers-reduced-motion: reduce`, the `<video>` is absent from the render and the
  desktop still is what's visible.
- Below 820px: portrait still, no video, table columns at `1fr 20% 20%`.