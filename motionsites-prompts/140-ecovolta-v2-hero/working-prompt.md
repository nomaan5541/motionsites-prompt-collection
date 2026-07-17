# EcoVolta V2

**ID:** ecovolta-v2-hero  
**Category:** Hero Section  
**Type:** hero  

---

Create a full-screen landing page hero section with the following exact specifications:

Video Background
HLS streaming video from Mux: https://stream.mux.com/02gzwandixH4J534bd00JsCvlFfw6ha101WQ00C9b3sGibM.m3u8
Video must autoplay, loop, be muted, and play inline
Use hls.js library for cross-browser compatibility with the following config:
capLevelToPlayerSize: false (allow quality higher than player size)
maxMaxBufferLength: 30, maxBufferLength: 20, maxBufferSize: 60MB
Switch to highest quality level once manifest loads
Native HLS support detection for Safari/iOS
Video positioned absolutely, covering full viewport with object-cover
Fonts
Import from Google Fonts:

Instrument Serif (Regular 400, Italic 400)
Manrope (Regular 400, Medium 500, SemiBold 600)
Instrument Sans (Regular 400, Medium 500, SemiBold 600)
SF Pro Display Medium for main heading
Layout & Positioning
Full viewport height container with overflow-hidden
Main content centered absolutely: left: 50%, top: calc(50% - 136.5px), transform translate(-50%, -50%)
Max width 984px with 24px horizontal padding
Navigation bar: absolute position at top, 20px from top, max-width 1110px, horizontally centered
Hero Content (Center)
Main Headline:

Text: "An AI that does your outbound while you " (regular) + "close deals." (gradient italic)
Regular portion: Instrument Serif Regular, #212121, 48px mobile / 70px desktop
"close deals" portion: Instrument Serif Italic with radial gradient text effect
Gradient: Radial from blue (#368CFB at 0%, #5CAEFE at 30%, #85BDE0 at 47.5%, #AECDC2 at 65%, #D6DCA3 at 82.5%, #FFEB85 at 100%)
SVG gradient transform: matrix(35.22 -11.4 433.41 134.85 369.8 114)
Leading: 1.1 mobile, 64px desktop
Max width: 722px
Opacity: 0.9
Subheadline:

Text: "AI sales agent that finds leads, personalizes outreach, follows up, and books meetings — automatically."
Font: Manrope Regular, 18px mobile / 20px desktop
Gradient text: from rgba(37,44,50,0.7) to rgba(55,65,74,0.7)
Letter spacing: -0.4px
Opacity: 0.7
Max width: 510px
Gap above: 24px mobile / 32px desktop
CTA Button:

Text: "Get started" (Instrument Sans Medium, 16px, white)
Size: 152px × 52px, rounded 12px
Background: Linear gradient from #444 to #292929
Border: 1px solid black
Shadows:
Outer: 0px 4px 4px rgba(0,0,0,0.25), 0px 1px 2px rgba(0,0,0,0.31)
Inner: inset 0px 2px 1px rgba(255,255,255,0.51), inset 1px 1px 0.25px rgba(255,255,255,0.3)
Hover: opacity 90%, smooth transition
Gap above: 32px mobile / 48px desktop
Navigation Bar (Top)
Logo (Left):

Icon: 23×23px SVG with radial gradient (blue to yellow: #368CFB → #5CAEFE → #FFEB85)
Text: "closer" in Instrument Serif Regular, 26px, #212121
Gap between icon and text: 6px
Nav Links (Center, hidden on mobile):

Links: "Product", "How it works", "Pricing", "Customers", "Docs"
Font: Manrope Medium, 18px
Gradient text: from rgba(37,44,50,0.7) to rgba(55,65,74,0.7)
Gap between links: 16px mobile / 26px large screens
Hidden below md breakpoint
Login Button (Right):

Text: "Login" (Instrument Sans Medium, 18px, #212121)
Size: 108px × 46px, rounded 12px
Background: white with 1px border #dde2e4
Hover: slight gray background, smooth transition
Responsive Behavior
Mobile: Single column, 48px headline, 18px body, tighter gaps (24px/32px)
Desktop: 70px headline, 20px body, wider gaps (32px/48px)
Navigation collapses on mobile (hide center nav)
Percentage-based widths with max-width constraints
Leading adjustments: tighter on mobile (1.1), fixed on desktop (64px for headline)
Technical Requirements
React + TypeScript + Tailwind CSS v4
Install: hls.js package
All elements fully responsive
Smooth hover transitions (opacity, colors)
Proper z-indexing (video behind, nav on top)
Cross-browser video compatibility with error recovery