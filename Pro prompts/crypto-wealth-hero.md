# Crypto Wealth

**ID:** crypto-wealth-hero  
**Category:** Hero Section  
**Type:** hero  

---

Recreation Prompt
Build a React + TypeScript + Vite + Tailwind CSS landing page called "ContentFlow" with two scroll-linked fullscreen sections layered over a fixed video background. Use lucide-react for icons. Use the Inter font from Google Fonts (weights 300-900).

Stack & Setup
Vite + React 18 + TypeScript
Tailwind CSS with default config
lucide-react for icons (Layers, Calendar, Lock, BarChart3, FileText)
Load Inter font via Google Fonts preconnect in index.html; set * { font-family: 'Inter', sans-serif; }
Page title: ContentFlow
Global Layout (App.tsx)
Root wrapper: <div className="min-h-[200vh]"> (creates scroll room)
Renders <VideoBackground zoom={videoZoom} /> then <Navbar /> then a <div className="relative" style={{ zIndex: 10 }}> containing <Hero> and <ShowcaseSection>
Uses a custom useScrollProgress() hook returning 0..1 where progress = min(scrollY / viewportHeight, 1) (updated via rAF on passive scroll listener)
videoZoom = 1 + scrollProgress * 0.3
Video Background (Section 1 — fixed behind everything)
src/components/VideoBackground.tsx:

Single fixed, full-viewport video background, pointer-events-none, zIndex: 0
Video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260417_061226_74f0749c-a22d-42b3-895e-5d6203bc741c.mp4
autoPlay loop muted playsInline, object-cover, absolutely positioned to fill
Outer wrapper fixed inset-0 overflow-hidden pointer-events-none
Inner wrapper applies transform: scale(${zoom}) with transformOrigin: 'center center' and will-change-transform
Accepts zoom?: number prop, default 1
Navbar (fixed, floating pill)
src/components/Navbar.tsx:

<nav> fixed top/left/right, z-50, centered via flex, pt-6 px-6
Inner pill: flex items-center gap-4 md:gap-8 bg-white/70 backdrop-blur-sm border border-gray-200/80 rounded-full pl-4 pr-2.5 md:pl-5 md:pr-2.5 py-2.5 shadow-sm
Left logo: inline SVG 28x28 viewBox 0 0 256 256, four rounded-corner "petal" shapes in black (path d="M 128 192 C 92.654 192 64 220.654 64 256 L 0 256 C 0 185.308 57.308 128 128 128 Z M 256 128 C 256 198.692 198.692 256 128 256 L 128 192 C 163.346 192 192 163.346 192 128 Z M 128 64 C 92.654 64 64 92.654 64 128 L 0 128 C 0 57.308 57.308 0 128 0 Z M 256 0 C 256 70.692 198.692 128 128 128 L 128 64 C 163.346 64 192 35.346 192 0 Z")
Hidden-on-mobile links (hidden md:flex items-center gap-7): Features, Workflows, Resources, Pricing — text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-150
"Get started" button: gradient-border-btn text-sm font-semibold text-gray-900 rounded-full px-5 py-2 hover:bg-gray-50 shadow-sm
.gradient-border-btn CSS: white background with a masked ::before pseudo-element creating a 1.5px gradient border using linear-gradient(135deg, #F59E0B, #3B82F6) via -webkit-mask + mask-composite: exclude trick
Hero Section (Section 1 content)
src/components/Hero.tsx:

Props: { scrollProgress: number }
opacity = max(1 - scrollProgress * 2.5, 0)
translateY = scrollProgress * -60 (pixels)
Root <section>: relative flex flex-col items-center justify-start px-4 sm:px-6 pt-32 sm:pt-36 md:pt-40 text-center min-h-screen will-change-transform, inline style applies opacity, transform: translateY(...), zIndex: 10, pointerEvents: opacity < 0.1 ? 'none' : 'auto'
Heading <h1> with classes text-[2.25rem] sm:text-[3rem] md:text-[3.75rem] leading-none tracking-tighter font-medium text-gray-900 max-w-2xl:
Line 1: A New Way wrapped in <span className="text-zinc-400">
Line 2: to Manage Your
Line 3: Content Flow
Lines separated with <br />
Subcopy <p className="mt-8 text-base text-gray-500 max-w-sm leading-relaxed">: Take full control of your publishing workflow <br /> with our unified content management platform.
Then renders <PopupCard />
PopupCard (animated card stack under hero)
src/components/PopupCard.tsx:

Container: flex flex-col items-center gap-3 mt-10 sm:mt-16 w-full px-4 sm:px-0
Renders 4 cards, each with a staggered animation delay of i * 150ms
Card layout: popup-card-animate flex items-center gap-3 sm:gap-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/60 px-4 sm:px-6 py-3 sm:py-4 w-full max-w-[380px]
Each card has: leading icon, middle text (text-xs sm:text-sm font-medium text-gray-700 flex-1 whitespace-nowrap), trailing 28x28 SVG spin ring (light gray full circle + gradient arc from 12 o'clock to 3 o'clock, strokeWidth=3, round cap; arc uses a per-card linearGradient from gradientFrom to gradientTo with coords x1=14 y1=3 x2=25 y2=14)
The trailing SVG has class spin-ring that rotates 360deg every 1.4s linear infinite
Cards:
Icon: the same black 4-petal logo SVG (24x24); text Your All-in-One Content Studio; gradient #F59E0B → #3B82F6
Icon: <Layers className="w-6 h-6 text-emerald-600 flex-shrink-0" />; text Multi-Channel Publishing Hub; gradient #10B981 → #06B6D4
Icon: <Lock className="w-6 h-6 text-blue-600 flex-shrink-0" />; text Role-Based Access & Approvals; gradient #3B82F6 → #0EA5E9
Icon: <BarChart3 className="w-6 h-6 text-amber-600 flex-shrink-0" />; text Advanced Content Analytics; gradient #F59E0B → #EF4444
Keyframes popup-card-in: 0% opacity:0; transform: translateY(16px) scale(0.96) → 100% opacity:1; transform: translateY(0) scale(1); applied via .popup-card-animate { opacity:0; animation: popup-card-in 0.6s cubic-bezier(0.16,1,0.3,1) forwards; } with per-card animation-delay
Showcase Section (Section 2)
src/components/ShowcaseSection.tsx:

Props: { scrollProgress: number }
Fade-in/scale-up mapping: fadeStart = 0.35, fadeEnd = 0.75; t = clamp((scrollProgress - fadeStart) / (fadeEnd - fadeStart), 0, 1); apply opacity = t and scale = 0.88 + t * 0.12
Root <section>: relative min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24 will-change-transform, inline style opacity, transform: scale(...), transformOrigin: 'center top', zIndex: 20
Inner card: relative w-full max-w-7xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden min-h-[480px] sm:min-h-[560px] md:min-h-[680px]
Background video inside the card (absolute inset-0 w-full h-full object-cover, autoplay/loop/muted/playsInline):
URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260415_154932_f36efd90-557d-4cfb-add6-79336918bd53.mp4
Overlay: absolute inset-0 z-[1] bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none
Foreground grid (relative z-10 flex flex-col md:flex-row items-end md:items-stretch h-full min-h-[480px] sm:min-h-[560px] md:min-h-[680px]):
Left half (flex flex-col justify-end p-4 sm:p-5 md:p-8 md:w-1/2):
<h2 className="text-2xl sm:text-3xl md:text-[2.75rem] font-medium text-gray-900 md:text-white md:leading-[1.15] leading-tight tracking-tighter">Your Content Engine,<br />Faster and Clearer</h2>
<p className="mt-5 text-sm md:text-base text-gray-600 md:text-white/70 leading-relaxed max-w-md">Get live performance data, editorial analytics, and the clarity you need to publish confidently every single time.</p>
Right half (flex items-end justify-end md:w-1/2 mt-auto origin-bottom-right scale-[0.75] sm:scale-[0.85] md:scale-100): renders <Dashboard />
Dashboard Card
src/components/Dashboard.tsx:

Container: dashboard-animate bg-white rounded-tl-2xl shadow-xl border border-gray-100 p-4 sm:p-6 md:p-8 w-full max-w-xl flex flex-col gap-4 sm:gap-6
Animation .dashboard-animate: opacity:0; animation: slide-in-right 0.9s ease-out 1.2s forwards; keyframes go from opacity:0; translateX(40px) to opacity:1; translateX(0)
Top row (flex flex-col sm:flex-row items-start sm:justify-between gap-3 sm:gap-0):

Left: w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gray-100 containing <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />, label Total Reach (text-xs sm:text-sm text-gray-400 font-medium), big value 498,098 (text-xl sm:text-3xl font-bold text-gray-900 tracking-tight) with trailing views in small gray
Right: legend dots Published (black 2x2 dot) and In Draft (gray-300 dot), plus pill badge Monthly (text-xs font-medium text-gray-700 bg-gray-100 rounded-md px-2.5 py-1)
Chart (AnimatedChart):

SVG viewBox 0 0 400 180; weekly data points:
Mon 18000, Tue 22000, Wed 19000, Thu 25000, Fri 21000, Sat 32000, Sun 28000
padTop=10, padBottom=30, maxVal=40000; points distributed horizontally evenly
smooth() builds a path using midpoint cubic Bézier control points to produce a smooth curve
Gradient chartGrad: #1F2937 0.08 → #1F2937 0 vertically; used as area fill under the line
Y-axis labels 0, 10k, 20k, 30k, 40k drawn as text-anchor="end", fill-gray-400, fontSize=9, Inter; horizontal dashed grid lines stroke="#E5E7EB", strokeWidth=0.5, strokeDasharray="4 3"
X-axis day labels at y = height - 8, fontSize=9; highlight index 5 (Sat) is fill-gray-900 font-semibold, others fill-gray-400
Line stroke #1F2937, width 2, round caps
Animations (via refs on mount):
Line path: dasharray/dashoffset trick, transition: stroke-dashoffset 1.8s ease-out to 0
Area: opacity 0 → 1 over 1s, starting at 800ms
Highlight dot at Sat (r=5, white fill, #1F2937 stroke width 2, scale-in from 0 at 1600ms over 0.4s)
Tooltip group (rect x=hx-48, y=hy-32, 96x22, rx=6, fill #1F2937; texts 32,104 white and +6,488 in #34D399, both fontSize=9): fade + translateY(4px→0) starting 1800ms over 0.4s
Dashed vertical drop line from highlight point to baseline (stroke="#1F2937", strokeDasharray="3 2")
Top Channels block:

Heading Top Channels (text-sm font-semibold text-gray-700 mb-4)
Three rows (flex items-center justify-between):
BLG Blog Posts 12,461 +4.20% positive, color #F59E0B
SOC Social Media 8,932 -1.05% negative, color #3B82F6
NWS Newsletters 5,718 +2.87% positive, color #10B981
Each row left: colored circular badge (8×8 sm:10×10, white bold letter = first char of symbol, backgroundColor: ch.color), symbol bold + full name in gray-400 (hidden on small)
Each row right: price, change in text-emerald-500 (positive) or text-red-500 (negative), then a ProgressRing (40x40 svg) hidden on small
ProgressRing: r=16, circ = 2πr, strokeDasharray=circ, strokeDashoffset=circ - (percent/100)*circ, base stroke #E5E7EB, foreground stroke color, strokeWidth=3, round caps, rotated -90° around center. Class progress-ring-fill runs @keyframes progress-fill { 0% { stroke-dashoffset: 88; } } for 1.2s ease-out starting at 2s, both
Use 70% for positive, 30% for negative
CSS Keyframes to include (src/index.css)
spin-ring (0 → 360deg, 1.4s linear infinite)
slide-in-right used by .dashboard-animate (opacity + translateX from 40px, 0.9s ease-out 1.2s forwards)
progress-fill used by .progress-ring-fill (stroke-dashoffset from 88 to 0, 1.2s ease-out 2s both)
popup-card-in used by .popup-card-animate (0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; per-card inline animation-delay)
.gradient-border-btn with ::before masked 1.5px gradient border using linear-gradient(135deg, #F59E0B, #3B82F6) and -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;
Scroll Behavior Summary
Scrolling 0 → 100% of viewport height drives scrollProgress 0 → 1
Hero fades out quickly (opacity = 1 - p*2.5) and drifts up (translateY = -60px * p)
Background video zooms from 1x to 1.3x
Showcase section fades/scales in between p=0.35 and p=0.75 (opacity 0→1, scale 0.88→1.0), transform-origin center top