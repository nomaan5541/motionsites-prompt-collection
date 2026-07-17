# NexaCore

**ID:** nexacore-hero  
**Category:** Landing Page  
**Type:** hero  

---

Build a React + TypeScript + Vite + Tailwind CSS landing page for "NexaCore" — an enterprise infrastructure operations platform. Use lucide-react for icons, hls.js for HLS video streaming, and @supabase/Bolt Database-js (available but not yet wired). No other UI libraries.

Global Setup
Fonts (src/index.css)
Load "Mazzard H" custom font via @font-face before Tailwind directives:

Weight 400: https://db.onlinewebfonts.com/t/eb5b5ee332420add9a40ee988cb6ac37.woff2 (+ .woff, .ttf fallbacks same hash)
Weight 500: https://db.onlinewebfonts.com/t/875fffdfa62169a0f131e90f37f1faf4.woff2 (+ .woff, .ttf fallbacks)
Apply globally:


@layer base {
  html, body, * { font-family: 'Mazzard H', sans-serif; }
}
App Structure (src/App.tsx)

<main>
  <Navbar />
  <Hero />
  <TrustedSection />
  <FreedomSection />
  <PrecisionSection />
</main>
Brand Colors (use consistently)
Deep navy text: rgb(26, 11, 84)
Muted lavender text: rgb(169, 151, 206) / rgb(189, 174, 231) / rgb(131, 121, 158)
Accent purple: rgb(200, 111, 255) (also #c86fff)
Primary solid blue: rgb(28, 78, 255)
Gradient A (logos/buttons): linear-gradient(90deg, rgb(28,78,255), rgb(172,36,255) 50%, rgb(254,136,27))
Gradient B (headline highlights): linear-gradient(90deg, rgb(43,167,255), rgb(202,69,255) 50%, rgb(254,136,27))
Off-white chip bg: rgb(249, 249, 249)
Dark card bg: rgba(10, 5, 20, 0.88) with backdrop-filter: blur(36px)
Never use purple/indigo outside these exact gradient stops. Heading font-weight is always 500, body 400.

1. Navbar (src/components/Navbar.tsx)
Fixed floating pill-shaped navbar.

Container: fixed top-4 left-0 right-0 z-50 flex justify-center pl-4 pr-1.5
Inner <nav>: white background, rounded-2xl, shadow-lg, width transitions from max-w-6xl → max-w-3xl on scroll > 20px (transition-all duration-500 ease-in-out).
Inner row: flex items-center justify-between gap-6, padding pl-5 pr-2 py-1.5 → pl-4 pr-2 py-1.5 on scroll.
Logo: 28x28 SVG circle stroked with logoGradient linear gradient (stops: rgb(28,78,255) → rgb(172,36,255) → rgb(254,136,27)), strokeWidth 2.5. Text "NexaCore" next to it, size 22, letter-spacing -0.02em, color rgb(26,11,84), font-weight 500.
Nav links (desktop, hidden on mobile): "What We Build", "Our Method", "Who We Are", "Thinking". Links: text-sm, rounded-xl, hover:bg-gray-100, padding shrinks on scroll (px-4 py-2 → px-2 py-1.5), gap from 1 to 0.
Right cluster: Search icon button (lucide Search size 20) in a 40x40 rounded-xl hover:bg-gray-100, plus <ContactButton />.
Mobile: Menu/X toggle (lucide) reveals stacked nav links centered + search icon + ContactButton (with flex-1).
ContactButton (src/components/ContactButton.tsx)
Gradient-border pill button.

Outer <a>: relative inline-flex items-center justify-center rounded-xl p-px, background = Gradient A.
Inner <span>: rounded-[11px] px-7 py-3 text-base text-white, background = solid rgb(28,78,255) by default, switches to Gradient A on hover with transition-colors duration-300. Text: "Contact".
2. Hero (src/components/Hero.tsx)
Full-screen looping background video with centered text.

Section: relative min-h-screen flex items-center justify-center px-4 overflow-hidden
<video> with exact src: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_115655_b4d9cd77-feed-43cd-a198-af78ebdf1f7a.mp4 Attributes: autoPlay muted loop playsInline, absolute inset-0 w-full h-full object-cover.
Bottom fade overlay: absolute bottom-0 left-0 right-0 h-48 z-10 pointer-events-none, background linear-gradient(to bottom, transparent, #000201).
Content (z-10, max-w-2xl, centered, gap 6):
Eyebrow <span> text "Infrastructure Built to Last" — gradient text using Gradient B (background-clip: text; -webkit-text-fill-color: transparent), text-lg font-medium.
H1: "Engineer and scale with clarity." — white, font-medium leading-tight md:whitespace-nowrap, font-size: clamp(32px, 4vw, 56px).
Paragraph, color rgb(169, 151, 206), clamp(15px, 1.2vw, 20px): "NexaCore helps infrastructure owner, operator and supplier teams enforce global build standards for mission-critical systems. Align teams, regions and programs without the heavy lifting."
3. TrustedSection (src/components/TrustedSection.tsx)
Dark background-image section with four ServiceCards.

Background image (exact): https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260418_120332_3b24257a-afe6-48ca-875f-78147370f403.png&w=1280&q=85 background-size: cover; background-position: center.
Section padding: clamp(100px, 12vw, 180px) clamp(16px, 4vw, 40px) clamp(100px, 12vw, 160px), gap: 110.
Header block max-width 1200, gap 20, centered:
H2 white font-medium, clamp(32px, 4vw, 56px), line-height 1.2: "Relied on by enterprise teams" <br/> then a span with Gradient B text: "from groundbreak to go-live."
Paragraph color rgb(189, 174, 231), clamp(14px, 1.25vw, 18px): "Built for operational clarity through constant change. Proven across 530+ MW of critical infrastructure."
Grid: grid-cols-1 sm:grid-cols-2 lg:grid-cols-4, gap 12.
Bottom fade: absolute 180px tall linear-gradient(to bottom, transparent, rgb(255,255,255)).
The 4 cards (label, title, bullets, icon):
All icons are 16x16 SVGs with a base circle path + a progressively larger filled <circle> (radius 2, 3, 4) placed mirrored via transform: matrix(-1 0 0 1 x y), all filled rgb(200,111,255). Card 1 uses only the base circle path.

Planning — "Turn new programs
into structured plans without the noise." Bullets: "Embedded program leads", "Decision-ready roadmaps".
Procurement — "Source and qualify
vendors with far
less friction." Bullets: "Cross-org scope alignment", "End-to-end accountability".
Logistics — "Move the right
materials on time
without surprises." Bullets: "Spec and fit validations", "Change order ownership".
Commissioning — "Activate systems with complete context, not guesswork." Bullets: "Uninterrupted workflows", "Verified clean handoffs".
ServiceCard (src/components/ServiceCard.tsx)
Props: label, icon, title, bullets[]. useState for hover.

Container: relative flex flex-col overflow-hidden rounded-[36px] cursor-pointer, bg rgba(10,5,20,0.88), backdrop-filter: blur(36px), height clamp(320px, 32vw, 500px).
Top image layer: absolute top, height 55%, z-index 1. Image src: https://cdn.prod.website-files.com/6720dd1ab6df0da205830ab1/682c7cb62b8800a7594c5abd_hover_card_img.png, object-fit: cover; object-position: top. Default translateY(-30%) opacity 0.7; on hover translateY(0) opacity 1, transition-all duration-500.
Bottom overlay: absolute bottom, height 55%, linear-gradient(to top, rgba(10,5,20,0.95) 60%, transparent). Default hidden (translateY(100%) opacity 0), slides up on hover.
Content (z-2, padding clamp(16px, 1.94vw, 32px) clamp(18px, 2.36vw, 36px)):
Badge: rgb(41,31,57) bg, rounded-full, padding clamp(6px,0.7vw,12px) clamp(10px,1.25vw,20px), white text + icon (icon sized 1.11vw / min 14px, height 17). Label text inside.
Flex-grow spacer.
Title: white font-medium, clamp(16px, 1.7vw, 24px), leading-snug. Shifts up by -8px on hover.
Bullets <ul> gap 10. Each <li> color rgb(189,174,231), clamp(12px,1vw,15px), padding-left clamp(22px,1.8vw,28px), background-image the bullet SVG at https://cdn.prod.website-files.com/6720dd1ab6df0da205830ab1/683ef70a24657b10be91ef49_bullet-list.svg, size 18px, position 0% 50%.
"Learn more" button: hidden by default (max-height 0, opacity 0, translateY 20px), on hover (max-height 80, opacity 1, translateY 0). Background = Gradient A, white text, rounded-xl, padding clamp(10px,0.9vw,14px) 0, font clamp(13px,1.1vw,16px).
4. FreedomSection (src/components/FreedomSection.tsx)
White section. 3-column grid (negatives | HLS circular video | positives).

Section: bg #ffffff, padding clamp(48px,6vw,80px) clamp(16px,3vw,40px), gap 36.
Header: centered gap-9.
Chip: bg rgb(249,249,249), rounded-full, padding 0.9vw 1.25vw, color rgb(26,11,84), text-lg font-medium. Inline SVG (19x18, viewBox 0 0 17 16) of two-heart/cloud shape filled rgb(200,111,255) (exact path in code). Text: "Control".
H2 font-medium clamp(32px,4vw,56px) color rgb(26,11,84) line-height 1.15: "Stop absorbing the chaos." <br/> gradient span (Gradient B with paddingBottom: 0.3vw; display: inline-block): "Run with confidence."
Grid: flex flex-col lg:grid, grid-template-columns: 26vw 1fr 26vw, column gap 36, row gap 24, align-items start, padding 0 clamp(0px,2.92vw,40px).
Left column — negatives
Font clamp(13px,1.15vw,17px), color rgb(131,121,158), gap 12. Each row: white bg, rounded 18, padding clamp(12px,0.97vw,16px) clamp(14px,1.25vw,20px), box-shadow 0 3px 9.1px #3f4a7e0d, 0 1px 29px #3f4a7e1a. Icon (cross) src: https://cdn.prod.website-files.com/6720dd1ab6df0da205830ab1/686cc0f520a992816d8b15dc_bullet-list-cross.svg width clamp(16px,1.25vw,20px).
Texts (in order):

"Reactive firefighting when foundational issues surface too late"
"Bloated coordination overhead drains bandwidth from core teams"
"Constant re-verification because source data can't be trusted"
"Fragmented vendor relations produce mismatched deliverables"
"Scattered specs and decisions buried across siloed systems"
Center column — circular HLS video
Wrapper: borderRadius: 50%; overflow: hidden; width/height: clamp(200px,22vw,400px).
<HlsVideo /> component: uses hls.js. On mount, create new Hls({ startLevel: -1, capLevelToPlayerSize: false, maxMaxBufferLength: 60, enableWorker: true }), load https://stream.mux.com/bnYL6x5cAX6WiJv2pOKpITehZd3NVdXpj3ylJFpX5Lk.m3u8, attachMedia, on MANIFEST_PARSED set hls.currentLevel = hls.levels.length - 1 and play. Native Safari HLS fallback via canPlayType('application/vnd.apple.mpegurl').
Video style: width:160%; height:160%; object-fit:cover; absolute top:50% left:50%; transform: translate(-50%,-50%). Attrs autoPlay loop muted playsInline.
Right column — positives
Same card styling as negatives, but icon (check) src: https://cdn.prod.website-files.com/6720dd1ab6df0da205830ab1/686cc068490683bbb3377d04_bullet-list.svg. Inner text color rgb(26,11,84).
Texts:

"Layered dependency maps eliminate costly surprises at every phase"
"Streamlined team handoffs deliver production-ready outcomes fast"
"Live validation loops keep requirements locked across all stages"
"Unified vendor management through a single accountable contact"
"Centralized context and clear records accelerate every decision"
Center column has class order-first lg:order-none so it appears first on mobile.

5. PrecisionSection (src/components/PrecisionSection.tsx)
Light background-image section with a 4-pillar "staircase".

Background image (exact):
https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260418_125638_553b96dc-a1fd-4b2b-81a9-ed7daa80006e.png&w=1280&q=85
cover / center / no-repeat. Padding clamp(48px,8vw,120px) clamp(16px,4vw,60px) clamp(48px,5.56vw,80px), gap clamp(32px,4vw,56px), centered column, text-align center.

Header:

Chip: bg rgb(249,249,249), radius 36, padding clamp(8px,0.9vw,14px) clamp(12px,1.25vw,20px), font clamp(14px,1.1vw,18px) weight 500, color rgb(26,11,84). Inline SVG (19x18, viewBox 0 0 17 16): circle stroke #c86fff at (8.5, 8) r=7, plus four tick marks at top/bottom/left/right, all filled rgb(200,111,255). Text: "Structured Delivery".
H2 max-width clamp(700px,60vw,900px), gap 22 from chip.
Block 1 (display:block, sm:whitespace-nowrap): "One integrated, end-to-end system."
Block 2 (display:block, Gradient B text, paddingBottom: 0.3vw): "Compounding operational value."
Style: clamp(28px,4vw,56px), weight 500, rgb(26,11,84), line-height 1.15.
Paragraph: clamp(15px,1.2vw,20px), rgb(169,151,206): "NexaCore teams capture, align, validate and deliver exactly what keeps your programs on track."
Desktop staircase (hidden on sm and below)
Wrapper max-width: 82.292vw. Relative block width: 82.292vw; height: 31.94vw, text color rgb(26,11,84).

Four pillars, each absolutely positioned via left: Xvw; bottom: Yvw:

Label	left	bottom	Items
Scopes	2.8vw	7vw	conditions, capacity, specs, timelines
Integrates	22.4vw	9.08vw	civil, mechanical, electrical, controls
Certifies	41.2vw	11.16vw	redundancy, testing, compliance, sign-offs
Activates	61.1vw	13.24vw	cutover, runbooks, handoff, SLAs
Each pillar = column (align center):

Chip: linear-gradient(135deg, rgb(255,255,255), rgba(255,255,255,0.6)), fontSize 18, weight 500, radius 20, padding 0.972vw 1.736vw, gap 8. Inside: logo image src https://cdn.prod.website-files.com/6720dd1ab6df0da205830ab1/6870f623cf3df417ce45df05_icon%20logo%20eternacloud.png width 1.111vw + label text.
Vertical line: 1px wide, height: 14.24vw, background = linear-gradient(rgb(28,78,255), rgb(254,136,27) 0%, rgb(172,36,255) 25%, rgb(247,159,255) 50%, rgb(255,214,0) 66%, rgb(254,136,27) 84%, rgba(254,136,27,0) 102%).
Items absolutely positioned top: 0.56vw; left: 1.94vw (right of the line), gap 4, fontSize 16. Each item padding 0.69vw 1.04vw.
Mobile layout (sm:hidden)
Same 4 pillars in a vertical column, alternating alignment: index 0,2 left-aligned; 1,3 right-aligned. Chip (smaller: fontSize 15, padding 10px 18px, logo 16px). Below chip a row flex-direction: row (or row-reverse when right): 1px gradient line (min-height 120) adjacent to items. Items fontSize 14, color rgb(100,80,160), padding 8px 0.

Build config
Vite + React 18.3 + TS 5.5. Tailwind 3.4, PostCSS, Autoprefixer.
package.json deps: @supabase/Bolt Database-js, hls.js, lucide-react, react, react-dom.
Scripts: dev, build (vite build), preview, lint, typecheck.
