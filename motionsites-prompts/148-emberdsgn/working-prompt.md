Recreation Prompt
Build a fullscreen split-panel hero section for "EMBER.dsgn" — a digital design studio. Single-page React app, no routing.

Stack & dependencies
React 19 + TypeScript + Vite 6
Tailwind CSS 4 via @tailwindcss/vite
motion (framer-motion v12 successor — import from motion/react)
lucide-react for icons (ArrowUpRight, Menu, X)
hls.js for HLS video playback
Vite dev script: vite --port=3000 --host=0.0.0.0
Global styles (src/index.css)
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
}

body {
  @apply antialiased overflow-hidden;
}
Root container


 with: relative h-screen w-full font-sans text-white selection:bg-white/20 overflow-hidden bg-black. Three stacked layers inside (z-index order: video bg → split panels → nav → mobile menu overlay).

1. Background video (z-0)
Absolute, inset-0, full-cover
HLS stream URL: https://stream.mux.com/Q3hYHAcLU82ceOUgwDeO4HiwOc3WZn9JD02PugwzxHOI.m3u8
 attrs: muted loop playsInline autoPlay, classes absolute inset-0 w-full h-full object-cover scale-x-[-1] (horizontally mirrored)
In useEffect: if Hls.isSupported(), create new Hls(), loadSource, attachMedia, on MANIFEST_PARSED set playbackRate = 0.7 and call .play(). Cleanup with hls.destroy(). Safari fallback: set video.src directly and use loadedmetadata listener with same playback rate.
2. Split panels (z-10)
Outer wrapper: absolute inset-0 flex flex-col lg:flex-row z-10 pointer-events-none overflow-y-auto lg:overflow-hidden scrollbar-hide

Left panel — "EMBER" cutout effect
relative w-full lg:w-1/2 min-h-screen lg:h-full flex flex-col pointer-events-auto overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5
Blur layer: absolute inset-0, backgroundColor: rgba(131, 131, 131, 0.3), backdropFilter: blur(20px) (+ webkit prefix), with maskImage: url(#emberMask) so the EMBER letters cut a clear hole through the blur revealing the video.
SVG mask def:  with . White rect 100%×100%, then black-fill EMBER text in two responsive variants:
Mobile: 
Desktop: 
Text element: x=0 y=115 textLength="100%" lengthAdjust="spacingAndGlyphs", classes font-[900] tracking-tighter, inline fontSize: 130px, fill="black"
Content stack (z-20, pt-[12vh] lg:pt-[8vh] px-6 md:px-12):
Spacer matching the EMBER SVG: h-[20vh] lg:h-[25vh]
Vertical line: flex-grow flex flex-col pt-4 min-h-[100px] containing w-[1px] h-full bg-white/20
Footer block (pb-12 flex flex-col gap-6 pt-4):
"ABOUT" eyebrow: text-[10px] font-bold tracking-[0.3em] uppercase text-white/40
Heading: text-xl md:text-2xl font-normal leading-[1.3] text-white/90 — copy: "We shape striking digital identities through bold contrasts and meaningful motion." 
 "Our design process transforms the primal into the powerful."
Bottom row: flex flex-col sm:flex-row justify-between items-start sm:items-end border-t border-white/10 pt-8 w-full gap-8 — three cells:
"Double Click and" caption + Explore Our Work link with 
Social links (Instagram, Telegram) — each with a w-1 h-1 bg-white rounded-full opacity-50 bullet
Address (hidden on mobile): 23 Industrial Lane, Unit 5 / London, UK, E2 8AA
All small-text uses text-[10px] font-bold uppercase tracking-widest; eyebrows use text-[9px]
Right panel — "STUDIO" word
relative w-full lg:w-1/2 min-h-[50vh] lg:h-full flex flex-col justify-end pb-8 lg:pb-2 pointer-events-auto overflow-hidden
Two concentric circles (decorative, centered, z-0): wrapper absolute inset-0 z-0 pointer-events-none flex justify-center → inner relative h-full aspect-square flex flex-col items-center containing two divs:
Circle 1: absolute top-[-10vh] lg:top-[-25vh] w-[40vh] lg:w-[60vh] h-[40vh] lg:h-[60vh] border border-white/20 lg:border-white/35 rounded-full
Circle 2: same size, top-[30vh] lg:top-[18vh]
STUDIO wordmark (z-10, relative w-full mb-1 px-6 md:px-[5%]):  with STUDIO
3. Navigation (z-50, fixed)
fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-6 lg:py-8 pointer-events-none — two pointer-events-auto groups.

Left group:

Logo: 2×2 grid of w-2 md:w-2.5 h-2 md:h-2.5 bg-[#FF5C35] squares (gap-0.5) + EMBER.dsgn text (text-lg md:text-xl font-black tracking-tighter)
Desktop nav links (hidden lg:flex items-center gap-6 text-[10.5px] uppercase font-medium tracking-[0.2em] text-white/70): WORKS, SERVICES, ABOUT, TEAM — each with a w-1 h-1 bg-white rounded-full opacity-50 bullet, hover:text-white transition-colors
Right group:

Language pill (hidden sm:flex border border-white/20 rounded-full px-4 py-1.5 text-[10.5px] font-medium tracking-widest uppercase items-center gap-3 bg-white/5 backdrop-blur-sm): EN | RU with separator at text-white/20
Mobile burger button (lg:hidden p-2) with , opens menu
Contacts pill (hidden sm:block border border-white/20 rounded-full px-6 py-2 text-[10.5px] font-medium tracking-widest uppercase hover:bg-white hover:text-black transition-all bg-white/5 backdrop-blur-sm) with bullet + CONTACTS
4. Mobile menu overlay
State: isMenuOpen (useState boolean). Wrap in ; render  with:

initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }}
transition={{ type: "spring", damping: 25, stiffness: 200 }}
Classes: fixed inset-0 z-[100] bg-black pointer-events-auto lg:hidden flex flex-col
Layout:

Header row: same logo + close button ()
Center links (flex-grow flex flex-col justify-center px-12 gap-8): map ['WORKS', 'SERVICES', 'ABOUT', 'TEAM', 'CONTACTS'] to  with initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.05 }}, classes text-4xl font-bold tracking-tighter hover:text-[#FF5C35] transition-colors
Footer (p-12 border-t border-white/10 flex justify-between items-center): EN | RU toggle + UKRAINE / LONDON label
Color tokens
Brand orange: #FF5C35
All whites use opacity variants: white/5 white/10 white/20 white/35 white/40 white/70 white/90
Page background: pure black
Behavior summary
Video plays muted, looped, mirrored, at 0.7× speed
EMBER letters appear as a clear-glass cutout in a 20px backdrop-blur layer
STUDIO is solid white wordmark
Both wordmarks scale to fill their column via SVG textLength="100%" lengthAdjust="spacingAndGlyphs" with Inter weight 900
Mobile (