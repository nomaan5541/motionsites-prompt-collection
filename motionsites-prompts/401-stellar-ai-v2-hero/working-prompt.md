# Sync AI

**ID:** stellar-ai-v2-hero  
**Category:** Hero Section  
**Type:** hero  

---

Create a full-viewport hero section for a SaaS landing page called "Stellar.ai" using React, TypeScript, Tailwind CSS, and Lucide React icons. The design uses the Inter font (weights 400, 500, 600, 700) imported from Google Fonts. No other dependencies beyond lucide-react, react, and react-dom.

OVERALL STRUCTURE

The page is a full-screen (h-screen) white background container with overflow-hidden. Everything is contained in a single viewport. There is no scrolling. The layout stacks vertically: navbar at top, hero content in upper-center, and a partner logo bar pinned to the bottom.

BACKGROUND VIDEO

A looping, muted, autoplaying, inline video fills the entire viewport as an absolute-positioned background
Video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260330_153826_e9005cf7-a1c7-4c7d-886f-fea22d644a9c.mp4
CSS: absolute inset-0 w-full h-full object-cover
The video has top padding to push it down below the hero text: pt-[120px] on mobile, md:pt-[200px] on desktop
This creates the effect where the video content appears below the text area

VIDEO FADE-OUT OVERLAYS (White gradient masks)

Three absolute-positioned gradient overlays sit on top of the video (z-10) to fade the video into the white background at the top:

General overlay: top: 120px, height: 200px, gradient from white to transparent
Desktop-only overlay (hidden on mobile, hidden md:block): top: 200px, height: 300px, gradient from white to transparent
Mobile-only overlay (md:hidden): top: 120px, height: 200px, gradient from white to transparent
All overlays use pointer-events-none so they don't block interaction.

NAVBAR (z-20, relative)

Max width max-w-7xl, centered, horizontal padding px-4 sm:px-6, vertical padding py-4
Flex row, items-center justify-between
Animated with animate-fade-in-up at animationDelay: 0.1s, initial opacity: 0

Left side (logo):
Lucide Star icon, w-5 h-5 fill-black
Text "Stellar.ai", text-lg font-semibold

Center nav (hidden on mobile, hidden md:flex, gap-8):
"Solutions" button with ChevronDown icon (w-4 h-4), text-sm text-gray-700 hover:text-black
"For Teams" button with ChevronDown icon, same styling
"About Us" button, text-sm text-gray-700 hover:text-black
"Learn Hub" button, same styling

Right side (hidden on mobile hidden sm:flex, gap-4):
"Login" text button, text-sm text-gray-700 hover:text-black
"Get started free" button: bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors

Mobile hamburger (sm:hidden):
Toggles between Menu and X icons from Lucide (w-6 h-6)

MOBILE MENU (conditionally rendered when open)

Positioned absolute top-[60px] left-0 right-0 z-30
Background: bg-white/95 backdrop-blur-md border-b border-gray-200
Animated with animate-fade-in-overlay
Contains same nav items as desktop, stacked vertically with px-6 py-4 gap-4
Login and "Get started free" buttons separated by a border-t border-gray-200 pt-4
The CTA button is full width in mobile menu

HERO CONTENT (z-20, relative)

Container: px-4 sm:px-6 pt-6 sm:pt-12 pb-16 sm:pb-32 max-w-7xl mx-auto text-center

Rating badge (animationDelay: 0.2s):
inline-flex items-center gap-2 mb-5 sm:mb-8
Small box: w-6 h-6 border border-gray-300 rounded flex items-center justify-center containing a filled Star icon (w-4 h-4 fill-black)
Text: "4.9 rating from 18.3K+ users", text-xs sm:text-sm font-medium text-black

Heading (animationDelay: 0.3s):
Font sizes: text-[38px] sm:text-6xl md:text-7xl lg:text-[80px]
font-normal leading-[1.1] tracking-tight mb-4 sm:mb-5
Mobile layout (sm:hidden): Three lines -- "Work Smarter." / "Move Faster." / "AI Powers You Up."
Desktop layout (hidden sm:inline): Two lines -- "Work Smarter. Move Faster." / "AI Powers You Up."
"AI Powers You Up." uses a gradient text effect: bg-gradient-to-r from-black via-gray-500 to-gray-400 bg-clip-text text-transparent

Subheading (animationDelay: 0.4s):
text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-2
Text: "Intelligent automation syncs with the tools you love to streamline tasks, boost output, and save time."

CTA button (animationDelay: 0.5s):
bg-black text-white px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors
Text: "Begin Free Trial"

BOTTOM PARTNER BAR (z-20, absolute bottom-0)

Container: absolute bottom-0 left-0 right-0 z-20 flex flex-col items-center gap-3 sm:gap-4 pb-4 sm:pb-8 px-4
Animated: animate-fade-in-up at animationDelay: 0.6s, initial opacity: 0

Glass pill badge:
rounded-full px-3 sm:px-3.5 py-1
text-[10px] sm:text-xs font-medium text-white
Frosted glass effect: backdrop-blur-md bg-white/15 border border-white/20
Text: "Collaborating with top aerospace pioneers globally"

Partner logos (text-based, no images):
Flex row: gap-5 sm:gap-12 md:gap-16 flex-wrap justify-center
Five names: "Aeon", "Vela", "Apex", "Orbit", "Zeno"
Each: text-lg sm:text-2xl md:text-3xl italic text-white tracking-tight with inline style fontFamily: 'Georgia, serif'

ANIMATIONS (defined in index.css)

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; }

@keyframes fadeInOverlay {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fade-in-overlay { animation: fadeInOverlay 0.4s ease-out forwards; }

Each element uses staggered delays (0.1s through 0.6s) applied via inline style={{ animationDelay: 'X.Xs', opacity: 0 }}.

FONT
Google Fonts import: @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
Applied globally: body { font-family: 'Inter', sans-serif; }

KEY DESIGN NOTES
The "liquid glass" effect comes from the frosted-glass partner badge using backdrop-blur-md bg-white/15 border border-white/20
The mobile menu also uses glass: bg-white/95 backdrop-blur-md
No purple/indigo colors -- entire palette is black, white, and grays
The heading gradient goes from pure black through gray-500 to gray-400
The video is visible primarily in the lower half, with white gradients dissolving it into the clean white upper section
Color palette: strictly monochrome