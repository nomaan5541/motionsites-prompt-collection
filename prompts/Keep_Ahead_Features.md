Build a single-file HTML page with embedded CSS that recreates a premium dark-mode features section with three glassmorphic gradient cards. Match every specification below exactly.
Page Setup
DOCTYPE & meta: Standard HTML5 with <meta charset="UTF-8"> and <meta name="viewport" content="width=device-width, initial-scale=1.0">. Title: Community Page — Test 3.
Font: Load DM Sans from Google Fonts with this exact URL:
https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap
Base tag: Include <base target="_blank"> in the head so all links open in new tabs.
Global Styles
Apply universal box-sizing reset (*, *::before, *::after) with box-sizing: border-box; margin: 0; padding: 0.
Body:

Font: 'DM Sans', sans-serif
Background color: #050505 (near black)
Background image: dual linear-gradients creating a 60×60px grid of faint white lines:

linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px)
linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px)


background-size: 60px 60px, background-position: top center
Text color: #2d3148, min-height: 100vh, padding 48px 24px

Section Structure
<section class="features-section">
  <div class="features-wrapper">
    <div class="features-header">...</div>
    <div class="features-cards">[3 cards]</div>
    <div class="features-tags">[3 tags]</div>
  </div>
</section>
.features-section: padding 0 0 48px.
.features-wrapper: max-width: 1100px, centered with margin: 0 auto, padding 60px 48px 40px, position: relative, overflow: hidden.
Header
.features-header: margin-bottom: 40px, position: relative, z-index: 1.

<h2> with text How We Keep You Ahead® (use &#174; for the registered symbol). Font size 34px, weight 700, color #ffffff, margin-bottom: 12px, line-height: 1.2, letter-spacing: -0.01em.
<p> with text: From quick daily updates to deep expert insights, we give you every advantage in the AI revolution. Font size 15px, color rgba(255, 255, 255, 0.55), line-height: 1.6, max-width: 380px, margin-bottom: 16px.
<span class="features-subline"> with text: Here's how we deliver on that promise every day. (use &#8217; for the curly apostrophe). Font size 14px, color rgba(255, 255, 255, 0.35), weight 500.

Cards Grid
.features-cards: CSS Grid with grid-template-columns: repeat(3, 1fr), gap: 20px, margin-bottom: 40px, position: relative, z-index: 1.
Card Structure (3-layer system, but only 2 are rendered)
Each card uses this nested structure:
<div class="feat-card [orange|blue|green]">
  <div class="feat-card-main">
    <div class="feat-icon">[svg]</div>
    <div class="feat-body">
      <div class="feat-title">...</div>
      <div class="feat-desc">...</div>
      <a class="feat-link">...</a>
    </div>
  </div>
</div>
.feat-card: position: relative, min-height: 320px, flex column, transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1). On hover: transform: translateY(-4px) (lifts up 4px).
.feat-card-main: This is the visible card body. position: relative, z-index: 1, flex: 1, border-radius: 24px, padding 28px, flex column with gap: 16px, min-height: 290px, overflow: hidden. Hide its ::before and ::after pseudo-elements with display: none.
Card Color Variants
All three variants share an inset bottom glow: box-shadow: inset 0 -4px 15px -2px rgba(255, 255, 255, 0.9) and border: none. The backgrounds layer a top-left radial glow over a vertical 5-stop gradient that fades from near-black at top to white at the very bottom.
Orange (.feat-card.orange .feat-card-main):
cssbackground:
  radial-gradient(circle at 10% 10%, #d9511b50 0%, transparent 40%),
  linear-gradient(180deg, #180D0B 0%, #180D0B 40%, #CF451E 80%, #e9d551 96%, #FFFFFF 100%);
Blue (.feat-card.blue .feat-card-main):
cssbackground:
  radial-gradient(circle at 10% 10%, rgba(80, 150, 255, 0.30) 0%, transparent 40%),
  linear-gradient(180deg, #0B0F17 0%, #0B0F17 40%, #4663BF 80%, #a1ccf7 96%, #FFFFFF 100%);
Green (.feat-card.green .feat-card-main):
cssbackground:
  radial-gradient(circle at 10% 10%, rgba(50, 200, 110, 0.30) 0%, transparent 40%),
  linear-gradient(180deg, #0B0B12 0%, #0B0B12 40%, #38D26B 80%, #aaf8cd 96%, #FFFFFF 100%);
Icon Mini-Card
.feat-icon: 44px × 44px, border-radius: 12px, flex-centered, flex-shrink: 0, margin-bottom: 6px, position: relative, z-index: 2, overflow: hidden.
.feat-icon::before: Decorative top-left glow blob. position: absolute, top: -10px, left: -10px, 32px × 32px, border-radius: 50%, pointer-events: none, z-index: 0, opacity: 0.65.
Per-color icon styling:
Orange icon:

Background: linear-gradient(145deg, rgba(40, 28, 18, 0.9) 0%, rgba(14, 12, 10, 0.98) 100%)
Border: 1px solid rgba(232, 120, 40, 0.22)
Box-shadow: 0 0 12px rgba(232, 76, 10, 0.12), inset 0 1px 0 rgba(255, 200, 150, 0.08)
::before background: radial-gradient(circle, rgba(255, 100, 20, 0.55) 0%, transparent 70%)

Blue icon:

Background: linear-gradient(145deg, rgba(20, 25, 45, 0.9) 0%, rgba(10, 12, 16, 0.98) 100%)
Border: 1px solid rgba(80, 130, 255, 0.22)
Box-shadow: 0 0 12px rgba(42, 106, 238, 0.12), inset 0 1px 0 rgba(180, 210, 255, 0.08)
::before background: radial-gradient(circle, rgba(60, 120, 255, 0.55) 0%, transparent 70%)

Green icon:

Background: linear-gradient(145deg, rgba(18, 35, 25, 0.9) 0%, rgba(10, 14, 12, 0.98) 100%)
Border: 1px solid rgba(50, 200, 110, 0.22)
Box-shadow: 0 0 12px rgba(18, 192, 104, 0.12), inset 0 1px 0 rgba(180, 255, 220, 0.08)
::before background: radial-gradient(circle, rgba(40, 220, 120, 0.55) 0%, transparent 70%)

SVG inside icon: 20px × 20px, fill: none, stroke: rgba(255, 255, 255, 0.88), stroke-width: 2, stroke-linecap: round, stroke-linejoin: round, position: relative, z-index: 1.
Card Body Text
.feat-body: flex: 1, flex column with gap: 10px, position: relative, z-index: 2.

.feat-title: DM Sans, 22px, weight 700, white, line-height: 1.3.
.feat-desc: 14px, color rgba(255, 255, 255, 0.50), line-height: 1.65.
.feat-link: 13.5px, weight 700, white, no underline, inline-flex with gap: 6px, margin-top: 4px. Transition: gap 0.25s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s. On hover: gap: 10px (arrow slides right) and opacity: 0.85.

Three Cards — Exact Content
Card 1 (orange): Document/lines icon — SVG with viewBox="0 0 24 24" containing <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />, <path d="M6 8h4" />, <path d="M6 12h12" />, <path d="M6 16h12" />.

Title: Daily Newsletter
Desc: Your shortcut to staying ahead—delivered every morning. (em dash via &#8212;)
Link: Get Daily Briefs → (arrow via &#8594;)

Card 2 (blue): Link/chain icon — SVG viewBox="0 0 24 24" with path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z".

Title: Curated Tools
Desc: The most powerful AI apps and platforms—tested and reviewed for you.
Link: Find My Tools →

Card 3 (green): Cube/package icon — SVG viewBox="0 0 24 24" with path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z", plus <polyline points="3.27 6.96 12 12.01 20.73 6.96" /> and <line x1="12" y1="22.08" x2="12" y2="12" />.

Title: Expert Insights
Desc: Actionable analysis from researchers and founders shaping the future of AI.
Link: Unlock Insights →

Bottom Tag Row
.features-tags: flex row, gap: 32px, items center, justify-content: flex-start, padding-top: 10px, position: relative, z-index: 1.
.feat-tag: flex with gap: 8px, items center, font-size: 13px, color rgba(255, 255, 255, 0.45), weight 600.
.feat-tag svg: 16px × 16px, fill: rgba(255, 255, 255, 0.6), stroke: none.
Three tags in order:

Lightning bolt (Always Current) — SVG viewBox="0 0 24 24", path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.16-.28L11.66 2h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z".
Settings/gear-circle (Focused for You) — SVG viewBox="0 0 24 24", path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z".
Checkmark in circle (Actionable Steps) — SVG viewBox="0 0 24 24", path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z".

Animations / Transitions
Only two transitions exist — no keyframes, no scroll triggers, no entrance animations:

Card lift on hover: transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1) on .feat-card, lifting translateY(-4px).
Link arrow slide on hover: transition: gap 0.25s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s on .feat-link, expanding gap from 6px to 10px and dropping opacity to 0.85.

Responsive Breakpoints
@media (max-width: 900px):

.features-cards collapses to single column (grid-template-columns: 1fr)
.features-wrapper padding becomes 48px 28px 32px

@media (max-width: 560px):

.features-header h2 shrinks to 28px
.features-tags allows wrapping (flex-wrap: wrap) with gap: 16px