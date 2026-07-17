# Social Media Posts

**ID:** social-media-posts-hero  
**Category:** Hero Section  
**Type:** hero  

---

Create a 3x2 grid of 6 social media post cards (384px x 384px each, 16px gap) centered on the page. Every card has 12px rounded corners and overflow-hidden.

Background image: Download this image and save it as public/bg.jpeg, then set it as the full-page background with background-size: cover, background-position: center, background-repeat: no-repeat on the outermost container. The container should be min-h-screen, flexbox centered, and allow overflow scrolling.

Image URL: https://media.cleanshot.cloud/media/21620/LCl5ZplnQ16cj11YhT3EoWIj6Tfpndn3OEd9I1e4.jpeg?Expires=1775649006&Signature=n3nir~OV2wZrAh~Yw8rkuVkFKm0gABTt8LqemBwvbCWoeMbn4-fcW~FEbzlhutQ7k9i9EZWqNRW4~XSoX6QnyzBv6MzFCfc0gEuKGOI6Bb7bD-ExdwZKuGDGIqRuwG7fRSHfVrl4HimKHJt9zj~NeY6-evt6HjBdEmb4sA5mWOefxDqMfWZZrUZseo0PxYnnggxHvzcdfclviUMo~A-mH8qa9MgqcRWWAp-sk6t8qM8UP0MvWkOCKFzD1-yAm4UUmy2RHtp9UiD2LFk47SjZV~4OQN~4Ogm30DBe74mkFR0-~RkPLb-M3z3UVlUNhScSI1LmMCfiK5JptwlCmFflRA__&Key-Pair-Id=K269JMAT9ZF4GZ

GOOGLE FONTS (load all in index.html via single link):

Anton (used as font-grotesk in Tailwind)
Condiment (used as font-condiment)
Barlow weights 300-700 (used as font-barlow)
Instrument Serif regular + italic (used as font-instrument)
Inter weights 400-700 (used as font-inter)
Poppins weights 300-700 (used as font-poppins)
Source Serif 4 regular + italic weights 400-600 (used as font-source-serif)
Tailwind config -- extend fontFamily with these mappings:

grotesk -> "Anton", sans-serif
condiment -> "Condiment", cursive
barlow -> "Barlow", sans-serif
instrument -> "Instrument Serif", serif
inter -> "Inter", sans-serif
poppins -> "Poppins", sans-serif
source-serif -> "Source Serif 4", serif
GLOBAL CSS (index.css) -- custom animations and classes:

@keyframes fadeInUp -- from opacity:0, translateY(30px) to opacity:1, translateY(0). Class .animate-fade-in-up uses it at 0.6s ease-out forwards.

@keyframes fadeInOverlay -- from opacity:0 to opacity:1. Class .animate-fade-in-overlay uses it at 0.4s ease-out forwards.

@keyframes fade-rise -- from opacity:0, translateY(24px) to opacity:1, translateY(0). Three classes:

.animate-fade-rise -- 0.8s ease-out both (no delay)
.animate-fade-rise-delay -- 0.8s ease-out 0.2s both
.animate-fade-rise-delay-2 -- 0.8s ease-out 0.4s both
.liquid-glass -- background: rgba(255,255,255,0.01), background-blend-mode: luminosity, backdrop-filter: blur(4px), no border, box-shadow: inset 0 1px 1px rgba(255,255,255,0.1), position relative, overflow hidden. Has a ::before pseudo-element that creates a thin gradient border effect using mask-composite: exclude with a padding: 1.4px gradient border going from rgba(255,255,255,0.45) at top/bottom to transparent in the middle.

.liquid-glass-strong -- Same concept but with backdrop-filter: blur(50px), box-shadow: 4px 4px 4px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.15). Its ::before uses slightly stronger white values (0.5 at edges, 0.2 at 20%/80%).

CARD 1 (top-left) -- "Simplify Your Work With AI"

Black background, 384x384, 12px rounded corners, p-7, flex column justify-between
Video: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260407_080531_1fe9b14c-9396-4b78-9372-42f4ddbd74c7.mp4
Positioned absolute top-0 right-0, height 75%, object-cover, horizontally flipped via transform: scaleX(-1), pointer-events-none, autoPlay loop muted playsInline
Gradient overlay: absolute inset-0, bg-gradient-to-t from-black via-black/40 to-transparent
Top content (z-10):
Row: Lucide Sparkles icon (w-4 h-4, amber-400) + text "The Future Is Now" in font-condiment, amber-400, text-sm, tracking-wide, with mb-3 and gap-1.5
Heading: font-grotesk (Anton), white, 32px, leading 1.05, uppercase, tracking-tight. Three lines: "Simplify" / "Your Work" / "With AI" (last line in amber-400)
Bottom content (z-10):
Paragraph: font-mono, white/60, 10px, leading-relaxed, mb-4. Text: "Automate repetitive tasks, generate content in seconds, and let intelligent tools handle the heavy lifting -- so you can focus on what truly matters."
Row with justify-between:
Left: circle (w-7 h-7, rounded-full, bg-amber-400/20) containing Lucide Zap (w-3.5 h-3.5, amber-400) + label "AI Powered" in font-mono, white/40, 8px, uppercase, tracking-widest
Right: pill button (bg-white/10, rounded-full, px-3.5 py-1.5, backdrop-blur-sm) with text "Learn More" in font-grotesk white 10px uppercase tracking-wide + Lucide ArrowRight (w-3.5 h-3.5 white)
CARD 2 (top-center) -- "Your Insights. One Clear Overview."

Black background, 384x384, 12px rounded corners
Video: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4
Absolute inset-0, full width/height, object-cover, z-0, autoPlay loop muted playsInline
Gradient overlay z-[1]: bg-gradient-to-t from-black via-black/60 to-black/80
Content (z-10, flex column, h-full, justify-between, p-7):
Top section:
Pill badge using .liquid-glass class, rounded-lg, px-3 py-1.5, inline-flex, gap-2, mb-5, with .animate-fade-rise:
Inner white label: bg-white text-black rounded-md 7px font-medium px-1.5 py-0.5, text "New"
Text: "Say Hello to Corewave v3.2" in 7px font-medium white/60 font-inter
Heading: font-inter font-medium, white, 36px, leading 1.05, tracking -1.5px, .animate-fade-rise-delay. Text: "Your Insights." / "One Clear " then "Overview." in font-instrument italic font-normal text-white/80
Paragraph: font-inter, color #d4d8e8, 8.5px, leading-relaxed, max-w 240px, mt-3, opacity-90, .animate-fade-rise-delay-2. Text: "Neuralyn helps teams track metrics, goals, and progress with precision."
Bottom section (.animate-fade-rise-delay-2):
Row: "Neuralyn" in font-inter white/30 9px font-semibold tracking-tight, then a 1px gradient divider line (from-white/15 to-transparent, flex-1), then "Analytics" in font-inter white/20 7px tracking-widest uppercase
CARD 3 (top-right) -- "Work Smarter. Move Faster. AI Powers You Up."

White background, 384x384, 12px rounded corners, font-inter
Video: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260330_153826_e9005cf7-a1c7-4c7d-886f-fea22d644a9c.mp4
Absolute inset-0, full width/height, object-cover, pointer-events-none, pt-[140px] (pushes video down), autoPlay loop muted playsInline
White fade overlay: absolute, left-0 right-0, top: 140px, height: 120px, linear-gradient(to bottom, white 0%, transparent 100%), z-10
Content (z-20, flex column, h-full):
Top area (flex-1, flex column, items-center, justify-start, pt-10, text-center, px-5):
Logo row (.animate-fade-in-up, animationDelay 0.1s, initial opacity 0): Lucide Star (w-3 h-3, fill-black) + "Stellar.ai" in 8px font-medium black
Heading (.animate-fade-in-up, delay 0.2s, initial opacity 0): 30px font-normal, leading 1.08, tracking-tight, mb-2.5. Text: "Work Smarter." / "Move Faster." / "AI Powers You Up." where last line has bg-gradient-to-r from-black via-gray-500 to-gray-400 bg-clip-text text-transparent
Paragraph (.animate-fade-in-up, delay 0.3s, initial opacity 0): 9px, text-gray-500, leading-relaxed, max-w 240px. Text: "Intelligent automation syncs with the tools you love to streamline tasks, boost output, and save time."
Bottom section (flex column, items-center, gap-2, pb-4, .animate-fade-in-up, delay 0.4s, initial opacity 0):
Small pill: rounded-full, px-2.5 py-0.5, 7px font-medium, text-white, backdrop-blur-md bg-white/15 border border-white/20. Text: "Collaborating with top aerospace pioneers globally"
Row of 5 brand names: ['Aeon', 'Vela', 'Apex', 'Orbit', 'Zeno'] each in text-base italic text-white tracking-tight with fontFamily: 'Georgia, serif', spaced with gap-5
CARD 4 (bottom-left) -- "Focus in a Distracted World"

Black background, 384x384, 12px rounded corners
Video: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4
Absolute inset-0, full width/height, object-cover, z-0, autoPlay loop muted playsInline
Gradient overlay z-[1]: bg-gradient-to-t from-black/70 via-transparent to-transparent
Content (z-10, flex column, h-full, justify-end, px-6, pb-7):
Heading: font-instrument, white, 32px, leading 0.95, tracking-tight, .animate-fade-rise. Text: "Focus in a" / "Distracted World"
Paragraph: font-inter, white/70, 8px, leading-relaxed, max-w 220px, mt-3, .animate-fade-rise-delay. Text: "Designing tools for deep thinkers, bold creators, and quiet rebels. Digital spaces for sharp focus and inspired work."
Brand: font-instrument, white/25, 10px, tracking-tight, mt-4, .animate-fade-rise-delay-2. Text: "Velorah" with a <sup> registered trademark symbol at 5px
CARD 5 (bottom-center) -- "Beyond silence, we build the eternal."

White background, 384x384, 12px rounded corners
Video: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4
Positioned in a container: absolute left-0 right-0 bottom-0, top: 140px. Video fills that container, object-cover. NOT looping -- uses a custom fade effect via React useRef/useEffect:
FADE_DURATION = 0.5 seconds
A requestAnimationFrame loop checks currentTime: if within first 0.5s, fade opacity up from 0; if within last 0.5s, fade opacity down to 0; else opacity 1
On ended event: set opacity to 0, wait 100ms, reset to beginning and play again
Video starts with style={{ opacity: 0 }}, autoPlay muted playsInline (no loop)
Complex white overlay (z-[1], absolute inset-0, pointer-events-none): linear-gradient(to bottom, white 0%, white 20%, transparent 45%, transparent 65%, white 90%, white 100%)
Content (z-10, flex column, items-center, justify-center, h-full, text-center, px-5):
Heading: font-instrument, 34px, leading 0.95, tracking-tight (-0.8px letterSpacing), black, .animate-fade-rise. Text: "Beyond " then <em> "silence," in #6F6F6F / "we build " then <em> "the eternal." in #6F6F6F
Paragraph: font-inter, #6F6F6F, 8px, leading-relaxed, max-w 230px, mt-3, .animate-fade-rise-delay. Text: "Platforms for deep thinkers and fearless makers. Digital havens for focused work and pure creative flow."
Brand: font-instrument, 10px, black/30, mt-5, tracking-tight, .animate-fade-rise-delay-2. Text: "Aethera" with <sup> registered trademark at 5px
CARD 6 (bottom-right) -- "Innovating the spirit of bloom"

Black background, 384x384, 12px rounded corners
Video: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4
Absolute inset-0, full width/height, object-cover, z-0, autoPlay loop muted playsInline
Gradient overlay z-[1]: bg-gradient-to-t from-black/80 via-black/20 to-black/40
Content (z-10, flex column, h-full, justify-between, p-6):
Top: Row with Lucide Sparkles (w-3.5 h-3.5, white/50) + text "AI-Powered Floral Design" in font-poppins, white/50, 9px, font-medium, uppercase, tracking [0.2em]
Bottom section:
Heading: font-poppins font-medium, white, 38px, leading 0.95, tracking -0.05em, .animate-fade-rise. Text: "Innovating the" / then <em> "spirit of" in font-source-serif italic font-medium white/80, followed by " bloom"
Paragraph: font-poppins, white/50, 8px, leading-relaxed, max-w 200px, mt-3, .animate-fade-rise-delay. Text: "Where artificial intelligence meets nature's artistry. Sculpting living compositions beyond imagination."
Two pills (mt-4, gap-2, .animate-fade-rise-delay-2): each uses .liquid-glass class, rounded-full, px-3 py-1, 7px, white/80, font-poppins. Labels: "AI Generation" and "3D Structures"
LAYOUT (App.tsx):
The outer div has the background image and centering. The inner div uses display: grid, gridTemplateColumns: repeat(3, 384px), gap: 16px, shrink-0. Cards are placed in order: CardOne, CardTwo, CardThree, CardFour, CardFive, CardSix.