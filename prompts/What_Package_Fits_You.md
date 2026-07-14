Build a single standalone HTML file (component2.html) for a pricing-packages section. Use one <style> block and one inline <script>. No frameworks. CSS class names must be prefixed with c2- to avoid collisions.

Fonts
Import via Google Fonts in <style>:

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;600&family=Cormorant+Garamond:wght@400;500;600&display=swap');
Body default: 'Inter', sans-serif
Title: 'Playfair Display', serif, 400 weight
Prices: 'Cormorant Garamond', serif, 400 weight, letter-spacing -0.02em
Page setup
* { box-sizing: border-box; margin: 0; padding: 0; }
body: background #F0EFED, padding 48px 20px, flex centered, min-height 100vh, antialiased font smoothing.
.c2-container: max-width: 800px; width: 100%.
Header
Eyebrow <p class="c2-eyebrow">PRICING</p>: centered, 0.75rem, letter-spacing 0.18em, uppercase, color #888, margin-bottom 14px. Animates in via c2-fadeUp 0.7s cubic-bezier (.16, 1, .3, 1).
Title <h2 class="c2-title">What package fits <em>you?</em></h2>:
2.8rem, centered, color #2a2a2a, font-weight 400, letter-spacing -0.01em, margin-bottom 36px.
The <em> is italic with color #5a5a5a.
Animates in via c2-fadeUp 0.8s 0.1s cubic-bezier (.16, 1, .3, 1).
Grid wrapper
.c2-grid-wrapper: background #E8E7E5, border-radius 20px, padding 16px, margin-bottom 20px. Animates in c2-fadeUp 0.9s 0.2s.
.c2-grid: CSS grid, two equal columns, gap 20px.
Cards (two of them inside the grid)
.c2-card: white background, border-radius 16px, padding 24px, position relative, overflow hidden, box-shadow 0 2px 10px rgba(0,0,0,0.03), flex column. Transition transform 0.35s, box-shadow 0.35s (same easing). On :hover lifts translateY(-4px) and shadow becomes 0 12px 32px rgba(0,0,0,0.08).

Four 6×6 corner dots, color #d0d0d0, border-radius 50%, pointer-events none, 12px from each corner:

Top-left and top-right via ::before and ::after.
Bottom-left and bottom-right as inline <div class="c2-dot-bl"></div> and <div class="c2-dot-br"></div> placed inside the card.
Card title (.c2-card-title): 1.3rem, font-weight 500, margin-bottom 8px, color #2a2a2a, letter-spacing -0.01em.

Price block (.c2-price): Cormorant Garamond, 3.2rem, baseline-aligned flex with gap 8px, padding-bottom 12px, border-bottom 1px solid #e5e5e5, min-height 76px. The <span> for the unit text inside is Inter, 0.85rem, color #999, weight 300. The amount span (.c2-price-amount) has a transition opacity 0.25s, transform 0.25s; class c2-flip sets opacity: 0; transform: translateY(-6px) for the price-change animation.

List (.c2-list): no list-style, font-size 0.85rem, color #555, margin-bottom 16px, padding-bottom 16px. Variants .bordered adds border-bottom: 1px solid #e5e5e5; .bordered-top adds border-top: 1px solid #e5e5e5; padding-top: 20px. Each <li>: margin-bottom 12px, flex centered, gap 8px. li::before content '❖', color #c0c0c0, font-size 0.9rem.

Description (.c2-desc): 0.85rem, color #666, line-height 1.6, max-width 210px, margin-bottom: auto.

Button (.c2-btn): black bg, white text, padding 11px 26px, border-radius 30px, font-size 0.85rem, weight 500, font-family inherit, margin-top 32px, width fit-content, z-index 2, position relative. Transition transform 0.2s, background 0.2s, box-shadow 0.2s. Hover: translateY(-1px), background #1a1a1a, shadow 0 6px 18px rgba(0,0,0,0.18). Active: translateY(0). :focus-visible: outline 2px solid #2a2a2a, outline-offset 3px.

Tree image (.c2-tree): position absolute, bottom 0, right 20px, width 120px, z-index 1, pointer-events none. Transition transform 0.5s (cubic-bezier (.16, 1, .3, 1)). On .c2-card:hover .c2-tree: translateY(-3px) rotate(-1.5deg).

Card 1 — Product Design
Title: Product Design
Price: $75 + unit Hourly
List with bordered bottom, items: Experienced Designer, Fast Delivery, Conversion Focused, Tailored Design Strategy
Description: Perfect if you're looking to build a dashboard, app, etc... and get it "done-right" the first time.
Button: Contact Us with data-package="Product Design"
Tree image: https://pub-f170a2592d2c4a1485466404c36807be.r2.dev/viktor/gold%20tree.webp, alt empty, loading="lazy"
Card 2 — Web Design
data-card="web" on the card div
Title: Web Design
Price: <span class="c2-price-amount" data-price>$1,500</span> + <span data-price-note>One-time</span>
Toggle (.c2-toggle, role="tablist", aria-label="Page count"):
Inline-flex, background #f0f0f0, border-radius 20px, padding 4px, margin-bottom 15px, font-size 0.75rem, user-select none.
Two <span> children with role="tab", tabindex="0", data-pages="single"|"multi", aria-selected. Padding 5px 14px, border-radius 16px, color #666, cursor pointer, transition background/color/box-shadow 0.25s.
.active: background white, color #1a1a1a, shadow 0 2px 5px rgba(0,0,0,0.05). Default Single-page is active and aria-selected="true"; Multi-page is aria-selected="false".
Switch row (.c2-framer, role="switch", tabindex="0", aria-checked="false", aria-label="Add Framer development"): flex centered, gap 10px, font-size 0.8rem, color #555, margin-bottom 30px, cursor pointer, user-select none, width fit-content.
Label: Framer Development
.c2-switch: 34×20px, background #e5e5e5, border-radius 10px, position relative, transition background 0.25s.
.c2-switch::after: 16×16px white circle, left 2px, top 2px, border-radius 50%, shadow 0 1px 3px rgba(0,0,0,0.15), transition left 0.25s (same easing).
.c2-framer.on .c2-switch: background #2a2a2a. .c2-framer.on .c2-switch::after: left 16px.
List with bordered bordered-top, items: Experienced Designer, Fast Delivery, Conversion Focused, 50/50 Secure Payments
Two <br> tags before the button
Button: Contact Us with data-package="Web Design"
Tree image: https://pub-f170a2592d2c4a1485466404c36807be.r2.dev/viktor/purple%20tree.webp, alt empty, loading="lazy"
Bottom card (outside the grid wrapper)
.c2-bottom-card: background #E8E7E5, border-radius 16px, padding 32px 32px 4px 32px, flex column, position relative, overflow hidden, min-height 220px. Animates in c2-fadeUp 1s 0.35s cubic-bezier (.16, 1, .3, 1). Hide .c2-dot-bl, .c2-dot-br inside this variant. The .c2-btn inside has margin-top 60px.

Contents:

<h3 class="c2-card-title">Unique Request</h3> with weight 500
<p class="c2-bottom-desc">Are you looking for something custom?<br>Don't hesitate to contact us, and we'll help brainstorming your product to success.</p> — 0.85rem, color #666, line-height 1.6, max-width 600px, margin-bottom -20px, z-index 2, position relative.
Button: Contact Us with data-package="Custom"
Landscape image (.c2-landscape): https://pub-f170a2592d2c4a1485466404c36807be.r2.dev/viktor/landscape.webp, position absolute, bottom 0, right 0, width 360px, z-index 1, pointer-events none, alt empty, loading="lazy".
Keyframes
@keyframes c2-fadeUp {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
The eyebrow uses translateY(10px) initial, the title translateY(14px), grid wrapper and bottom card translateY(20px).

Media queries
@media (max-width: 768px):

body padding 32px 16px
.c2-title: 2.1rem, margin-bottom 28px
.c2-grid: grid-template-columns: 1fr
.c2-tree: width 96px, right 12px, opacity 0.85
.c2-desc, .c2-bottom-desc: max-width none
.c2-landscape: width 240px, opacity 0.85
.c2-bottom-card: padding 28px 24px 4px 24px; its .c2-btn margin-top 40px
@media (max-width: 480px):

.c2-title: 1.8rem
.c2-price: 2.6rem
.c2-landscape: width 180px
@media (prefers-reduced-motion: reduce): set animation-duration, animation-iteration-count, transition-duration to 0.01ms !important on *, *::before, *::after.

JavaScript (IIFE at end of <body>)
State for the Web Design card only:

const BASE = { single: 1500, multi: 2500 };
const FRAMER_ADDON = 800;
const state = { pages: 'single', framer: false };
render():

Compute total = BASE[state.pages] + (state.framer ? FRAMER_ADDON : 0).
Format as '$' + total.toLocaleString('en-US').
If unchanged, return early.
Add c2-flip to [data-price], then after 160ms set textContent and remove the class.
Set [data-price-note] to 'One-time + Framer' if framer is on, else 'One-time'.
selectPages(value):

No-op if same. Update state. Toggle active class and aria-selected on each tab. Call render.
Bind to each toggle option:

click → selectPages(opt.dataset.pages)
keydown: Enter/Space selects; ArrowLeft selects single, ArrowRight selects multi, then focus the just-selected element.
toggleFramer():

Flip state.framer. Toggle .on class on .c2-framer. Update aria-checked. Call render.
Bound to click and keydown (Enter/Space).
Each .c2-btn: click logs [c2] contact requested: followed by the package label; for Web Design, append the current page mode and + Framer if on.

Verification expectations
After loading at desktop width:

Default Web Design price reads $1,500 with note One-time.
Clicking Multi-page updates price to $2,500 with brief flip animation.
Toggling Framer adds $800 and changes note to One-time + Framer (so multi + framer = $3,300).
Mobile (375px): grid stacks, trees scale to 96px, landscape to 240px, no horizontal overflow.
No console errors.