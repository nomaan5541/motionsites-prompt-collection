Build a mobile coffee profile screen inside a phone mockup frame. Use vanilla HTML, CSS, and JS with Vite as the bundler. The design is dark/warm-toned, inspired by iOS profile screens with glassmorphic UI elements.

**Phone mockup:**
- 390x844px at zoom 0.78, black background, 44px border-radius, overflow hidden, strong drop shadow
- Internal `.screen` div with dark background (`#180a06`), vertical scroll, hidden scrollbar

**Hero section (top):**
- Full-width, 430px tall
- Contains a looping muted autoplay video: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260707_003042_3d2380a6-1ce6-4407-a2e2-cfec46546407.mp4`
- Video covers the area with `object-fit: cover; object-position: center top`
- Bottom gradient overlay fading from transparent at 52% to the background color at 100%
- Top bar with two glass circle buttons (edit icon on left, X close SVG on right), positioned absolute top 18px

**Identity section (overlaps hero by -112px margin-top):**
- Centered name "Dasha" (28px, weight 500)
- Left and right laurel images flanking the name (local assets `/assets/images/laurel-left.png` and `laurel-right.png`), 73px tall, 0.6 opacity, positioned via `right: calc(50% + 66px)` / `left: calc(50% + 66px)`
- Subtitle "Plum Parfait Latte" below (15px, muted color `rgba(235, 220, 205, 0.55)`)

**Achievements pill (centered, 30px below identity):**
- Glass pill button, 54px tall, 225px wide, 27px border-radius
- Trophy icon (local `/assets/images/icon-trophy.png`, 18px) + text "12 achievements" (18px, weight 500)

**Stats grid (3 columns, 12px gap, 26px top padding, 16px horizontal padding):**
- Each card: semi-transparent background `rgba(255,255,255,0.06)`, 24px border-radius
- Card 1: coffee image `https://polo-pecan-73837341.figma.site/_assets/v11/a8ba62db54d1e331b7beb36d69308e9b92516b99.png` (84x84), number "154", label "drinks consumed"
- Card 2: sandwich image `https://polo-pecan-73837341.figma.site/_assets/v11/953600065119f54f64ab9edb076b3cbb289fcff8.png` (84x84), number "36", label "sandwiches eaten"
- Card 3: cafe image `https://polo-pecan-73837341.figma.site/_assets/v11/aef68e05f729a30ed177f74c2cece578c05bfdba.png` (84x84), number "12", label "cafes visited"
- Numbers: 25px, weight 500. Labels: 13px, color `#BAAA9A8C`

**Favorite card (12px below stats, 16px horizontal margin):**
- Same card background, 24px radius, 110px height, flex row with 16px gap
- Latte image `https://polo-pecan-73837341.figma.site/_assets/v11/976a811111808abc50be33c2483872dbdb6ad5a8.png` (108x108, object-fit contain)
- Text column: "Favorite" (13px, weight 500), "Latte" (19px, weight 500), "Ordered 73 times" (13px, color `#BAAA9A8C`)
- Shuffle button on right (glass circle, local icon `/assets/images/icon-shuffle.png` 19px)

**Partial next card:** Same card style but only 34px tall with flat bottom corners (teaser for scroll)

**Glass button system:**
- Shared `.glass` class: no border, `rgba(255,255,255,0.03)` background, subtle inset box-shadows for edge highlights, `backdrop-filter: blur(2px) saturate(1.3)`, scale-down on `:active`
- `.glass.circle`: 58x44px, 22px radius
- `.glass.pill`: 54px tall, pill-shaped

**Fonts:**
- Primary: "Neue Haas Unica" (loaded from local `/assets/fonts/neue-haas-unica/stylesheet.css`)
- Also load "Helvetica Now Display" from `/assets/fonts/helvetica-now/stylesheet.css`
- Fallbacks: -apple-system, SF Pro Display, Inter, Segoe UI, Roboto

**Page background (behind phone):**
- Multiple warm-toned radial gradients over `#070402`:
  - `radial-gradient(ellipse 65% 55% at 15% 52%, rgba(168, 78, 10, 0.22))`
  - `radial-gradient(ellipse 52% 48% at 83% 26%, rgba(122, 52, 8, 0.17))`
  - `radial-gradient(ellipse 44% 52% at 56% 92%, rgba(98, 36, 5, 0.14))`
  - `radial-gradient(ellipse 30% 30% at 72% 75%, rgba(60, 20, 5, 0.10))`

**Entry animations (respects prefers-reduced-motion):**
- Hero: `heroReveal` - opacity 0 + scale(1.01) to normal, 1.9s, cubic-bezier(0.16, 1, 0.3, 1)
- Top bar buttons: `dropIn` from translateY(-10px), 0.7s, staggered 0.35s/0.42s
- Laurels: `fadeIn` 0.8s, delay 0.5s
- Name: `fadeRise` from translateY(16px), 0.7s, delay 0.5s
- Subtitle: same, delay 0.58s
- Achievements: same, delay 0.66s
- Stat cards: staggered at 0.74s, 0.80s, 0.86s
- Favorite card: delay 0.94s
- Next card: fadeIn delay 1.02s
- All use cubic-bezier(0.16, 1, 0.3, 1) except simple fadeIn which uses ease-out

**JavaScript (liquid glass effect):**
- Generates a displacement map canvas for each `[data-liquid]` element based on its dimensions and border-radius
- Uses SDF (signed distance field) of a rounded rectangle to compute refraction vectors
- Creates SVG `<feDisplacementMap>` filters and applies them as `backdrop-filter: url(#id) blur(0.3px) saturate(1.3)`
- Falls back to standard blur if SVG filter not supported

**CSS variables:**
```
--bg: #180a06
--card: rgba(255, 255, 255, 0.06)
--text: #ede4d8
--muted: rgba(235, 220, 205, 0.55)
--radius-card: 24px
```

**Responsive:** At 440px viewport, phone scales to zoom 0.6. Body flex-wraps at 900px.