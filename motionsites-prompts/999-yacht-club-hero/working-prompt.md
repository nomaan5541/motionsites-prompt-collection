# Yacht Club

**ID:** yacht-club-hero  
**Category:** Landing Page  
**Type:** hero  

---

Core Instruction
Act as an elite, award-winning creative frontend developer. Your task is to perfectly recreate a luxury Yacht Club landing page experience with highly advanced WebGL-like DOM animations, a custom GSAP staggered menu, a Framer Motion video fleet overlay, and an interactive liquid distortion cursor trail.
Tech Stack
Framework: React 19, Vite, TypeScript
Styling: Tailwind CSS v4
Animation: motion/react (Framer Motion) and gsap
Fonts: @fontsource-variable/geist and Google Fonts (Instrument Serif)
1. Global CSS & Theming (src/index.css)
Configure the global CSS exactly as follows using Tailwind v4 syntax:
Import Instrument Serif from Google Fonts and tw-animate-css.
Define the base theme with OKLCH colors for a dark luxury aesthetic.
Set --background: oklch(0.145 0 0); and --foreground: oklch(0.985 0 0);.
Use --font-sans: "Instrument Serif", ui-serif, serif; and map --font-heading to it to force the serif font on headers. Force @layer base to have body { @apply bg-background text-foreground; }.
Ensure all text throughout the app default to font-serif uppercase unless specified otherwise.
2. Global State & App Structure (src/App.tsx)
Create a single-page app utilizing AnimatePresence. Manage two main states:
isMenuOpen: Boolean linked to the custom GSAP menu.
isFleetOpen: Boolean triggered by clicking "Our Fleet" in the menu.
Background Video:
Implement an absolute, z-0 background wrapper using <motion.div>.
Frame the following Vimeo iframe exactly:
<iframe src="https://player.vimeo.com/video/1184061018?background=1&autoplay=1&loop=1&byline=0&title=0" className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2" />
Use motion.div to apply a dynamic CSS blur. When isFleetOpen is true, animate the filter to blur(100px) (duration 1.56s). When false, animate to blur(0px) (duration 1.3s).
3. The Interactive Liquid Cursor Trail
Build an interactive liquid ripple system inside App.tsx utilizing a hidden SVG filter and a DOM pool of 80 div elements.
The SVG Filter:
Place this SVG at the top of the app container:
<svg className="hidden"><filter id="liquid-trail"><feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="noise" /><feDisplacementMap in="SourceGraphic" in2="noise" scale="30" xChannelSelector="R" yChannelSelector="G" /></filter></svg>
The Ripple Logic:
Create an array of 80 objects with { x: 0, y: 0, age: 0, active: false } managed via useRef.
On window mousemove, calculate the distance since the last mouse position. If distance > 25px, spawn a new ripple by setting active = true, writing the X/Y coords, and incrementing a rotating current index (idx + 1) % 80.
Use requestAnimationFrame to step the rings. For each active ring, increment age += 0.012.
Ring Math: size = 20 + (age * 280). opacity = 1 - Math.pow(age, 1.2).
If age >= 1, set opacity to 0 and scale to 0.
The React DOM nodes for the ripples should be absolute empty divs with inline styles: backdropFilter: 'url(#liquid-trail) blur(1px)', WebkitBackdropFilter: 'url(#liquid-trail) blur(1px)', boxShadow: 'inset 0 0 30px rgba(255,255,255,0.1), 0 0 15px rgba(147,197,253,0.15)', willChange: 'transform, opacity, width, height, left, top'
4. Hero Content (!isFleetOpen state)
Wrap this inside <AnimatePresence> to mount/unmount seamlessly when the fleet viewer opens.
Main Heading: Positioned absolute top-[96px] left-[20px] md:left-[96px].
Use motion.div with staggered children variants mapping to: hidden: { opacity: 0, y: 40, transition: { duration: 0.48 } } and visible: { opacity: 1, y: 0, transition: { duration: 0.96 } }.
The text is: "MASTER THE" > "ELEMENTS." (italicized) > "EMBRACE THE" > "OCEAN" (italicized).
Styling: text-[64px] md:text-[140px] font-normal leading-none drop-shadow-2xl.
Subtext:
Text: "JOIN AN EXCLUSIVE COMMUNITY OF SAILORS. WHETHER YOU CRAVE THE THRILL OF THE OPEN SEA OR THE SERENITY OF A SUNSET CRUISE, YOUR NEXT GREAT ADVENTURE STARTS HERE."
Position: Pushed over slightly on desktop md:translate-x-[100px], text-[10px] md:text-xs, strictly w-[260px], tracking-widest.
Floating CTA Button: Positioned bottom-8 right-8 z-50.
Button text: "JOIN THE [italicized: CLUB]"
On desktop, if the menu is open, translate the button to the left using transform: translateX(calc(-1 * clamp(260px, 38vw, 420px))).
5. Fleet Video Overlay Modal (isFleetOpen state)
When opened, display a fixed flex container taking up the full screen (flex-col md:flex-row).
The Data: Use this exact JSON array:
code
JSON
[
  {
    "src": "https://app-uploads.krea.ai/wan-videos/08006647-1c55-4823-b35d-e40d57c66bf8.mp4",
    "title": "OCEAN\nECLIPSE",
    "specs": [
      { "label": "LENGTH", "value": "28 M (92 FT)" },
      { "label": "CRUISING SPEED", "value": "22 KNOTS" },
      { "label": "GUESTS", "value": "UP TO 12 GUESTS" },
      { "label": "CABINS", "value": "4 EN-SUITE CABINS" },
      { "label": "SPECIAL FEATURE", "value": "ADVANCED GYRO STABILIZATION" }
    ]
  },
  {
    "src": "https://app-uploads.krea.ai/wan-videos/91fd9932-6194-4d58-ada0-955692853019.mp4",
    "title": "BLACK\nSOVEREIGN",
    "specs": [
      { "label": "LENGTH", "value": "24 M (78 FT)" },
      { "label": "TOP SPEED", "value": "45 KNOTS" },
      { "label": "HULL", "value": "CARBON FIBER & KEVLAR" },
      { "label": "ENGINES", "value": "TWIN V12 2000 HP" },
      { "label": "SPECIAL FEATURE", "value": "BESPOKE DESIGN WITH GOLD DETAILING" }
    ]
  },
  {
    "src": "https://app-uploads.krea.ai/wan-videos/95fb3282-d7cf-448e-9202-ef0662541c83.mp4",
    "title": "AZURE\nHORIZON",
    "specs": [
      { "label": "LENGTH", "value": "32 M (105 FT)" },
      { "label": "RANGE", "value": "1,500 NAUTICAL MILES" },
      { "label": "GUESTS", "value": "14 GUESTS + 5 CREW" },
      { "label": "DECK", "value": "SPACIOUS SUN DECK WITH JACUZZI" },
      { "label": "SPECIAL FEATURE", "value": "FULL WATER TOYS GARAGE" }
    ]
  }
]
FleetVideo Component:
Each column maps out a <video> taking up w-full h-[85vh] md:h-full md:flex-1. Include borders (border-r-2 border-white).
Animate columns coming in from the right (x: '100vw' to x: 0) using Framer Motion with delays staggering by i * 0.1 and a duration of 1.56.
Add onMouseEnter / onMouseLeave state to trigger video .play() and .pause() wrapped safely in a promise resolver to avoid interruptions.
On hover, scale the video up to 105% with duration-700.
Show a black overlay (bg-black/20).
Hover Content: Inside <AnimatePresence>, render the title (e.g., text-5xl md:text-7xl mb-12), the mapped specs (uppercase tracking-widest text-white/70), and a "VIEW" button (bg-white/5 backdrop-blur-[120px]). Apply the specific y stagger text variants so they gracefully shift up from a clipped mask.
6. The GSAP Custom Staggered Menu (StaggeredMenu.jsx)
Create an off-canvas navigation sidebar triggered from the right using GSAP.
The Wrapper & Icon: The hamburger icon consists of a div wrapper containing two spans forming a "Plus" shape. When open, GSAP controls it: rotate the wrapper by 225deg to form an X.
Slot Machine Text Link: Next to the hamburger, display the text "MENU". When clicked, use a slot-machine-style vertical transition, cycling the words "MENU" and "CLOSE" three times before settling on the correct target word. Shift the interior wrapper yPercent: -finalShift rapidly over 0.5s easing power4 out.
Menu Colors: Set the GSAP configuration to use colors ['#1a1a1a', '#93c5fd']. On open, the menu button's color changes automatically from #ffffff to #000000.
The Panel Animation:
Utilize "prelayers", an array of div masking layers that slide in from 100vw. GSAP should .fromTo their xPercent to 0 using power4.out staggered by 0.07s.
The main panel follows right after taking 0.65 seconds.
Menu Items: The menu items MUST contain: Home, Our Fleet (triggers setIsFleetOpen(true) and closes the menu), Membership, Regattas & Events, Academy, Contact. Animate their entrance using yPercent and a 10deg rotation rotating back to flat using .stagger: { each: 0.1 } mapped directly against the items NodeList.
Wrap the StaggeredMenu over the app context, providing the right position, colors, and social handles (Instagram, Facebook, Twitter).
Ensure all component names, class names, file structures, and specific math equations are strictly ported to perfectly mimic the reference logic.