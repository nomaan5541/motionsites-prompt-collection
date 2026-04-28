# Veloce Finance

**ID:** veloce-finance-landing  
**Category:** Landing Page  
**Type:** landing-page  

---

Build a React + TypeScript + Vite landing page for a fintech app called "veloce" using Tailwind CSS and Framer Motion. The page has 4 sections. Do not use purple/indigo colors — the gradient used is a specific brand gradient defined below.

Dependencies:

framer-motion
lucide-react
@supabase/Bolt Database-js (not used in UI but installed)
Fonts (Tailwind config + CSS):

In tailwind.config.js, extend fontFamily with:


'manrope': ['Manrope', 'sans-serif'],
'helvetica': ['Helvetica', 'Arial', 'sans-serif'],
'helvetica-neue': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
'inter': ['Inter', 'sans-serif'],
'product-sans': ['Product Sans', 'sans-serif'],
'sf-compact': ['SF Compact Display', 'SF Compact Text', 'system-ui', 'sans-serif'],
In tailwind.config.js, extend colors with:


'sintra-dark': '#00041F',
'sintra-accent': '#B56939',
'sintra-light': '#EFF4FF',
'sintra-gray': '#49484F',
In index.css, import from Google Fonts:


@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
Also add globally:


@layer base {
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}
Brand gradient: from-[#B56939] via-[#5C3779] to-[#454BBB] (left to right)

src/components/BlurIn.tsx

A reusable wrapper component using Framer Motion's useInView. When the element enters the viewport (once), animate from filter: blur(20px), opacity: 0 to filter: blur(0px), opacity: 1 over 1.2s. Export as named export BlurIn.

src/App.tsx

The root layout is a min-h-screen div. The first child is a full-screen h-screen flex flex-col relative div that contains:

A background <video> tag (absolute, covers full area, object-cover, on mobile positioned at object-[10%_center], on desktop object-center, z-index 0, autoPlay loop muted playsInline) with this exact src:

https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_154629_a31a2372-bd54-4f7e-ac9b-21246141a664.mp4
<Header /> component
<Hero /> component
Below the hero screen, render <InsightsSection /> then <TextFillSection />.

src/components/Header.tsx

A sticky top header with justify-between items-center px-6 md:px-12 lg:px-15 py-6 z-20:

Left side: Logo text "veloce" in font-manrope font-semibold text-2xl md:text-3xl text-[#00041F], followed on desktop (lg:) by a nav with links: "Home", "About us", "Faq" — font-helvetica text-base text-[#00041F] hover:opacity-70 transition-opacity.

Right side (desktop only, lg:): "Log in" button (font-inter font-medium text-base text-[#00041F] hover:opacity-70), and a "Sign up" button (bg-[#00041F] text-[#EFF4FF] px-6 py-2.5 rounded-[40px] font-inter font-medium text-base hover:opacity-90).

Mobile hamburger: Show a Menu / X icon from lucide-react. Toggle between them with AnimatePresence + motion.div, using rotate + opacity animation (duration: 0.2). When open, show a dropdown (absolute top-24 left-0 right-0 bg-white shadow-lg mx-4 rounded-lg px-6 py-8 z-50) with staggered motion.a nav links (slide in from x: -20, stagger 0.1s) and "Log in" / "Sign up" buttons below a border separator. The mobile menu animates in with opacity: 0, y: -20 → opacity: 1, y: 0 over 0.3s easeOut.

src/components/Hero.tsx

A flex-1 flex flex-col items-center justify-between px-6 md:px-12 pb-12 md:pb-16 relative div.

At the bottom, apply a fade-out overlay: absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none.

Center: Wrap an <h1> in <BlurIn>. The h1 has text-center font-helvetica-neue font-medium leading-tight text-[#010828] max-w-2xl. It has two inline spans:

"Fast payments, your way at " — text-4xl md:text-6xl lg:text-7xl tracking-[-0.03em]
"lightspeed." — same sizes, but colored with the brand gradient via bg-gradient-to-r from-[#B56939] via-[#5C3779] to-[#454BBB] bg-clip-text text-transparent tracking-[-0.03em]
Bottom: A subtitle "Handle finances with ease and power" in text-[#49484F] text-base md:text-lg font-helvetica-neue, then two side-by-side store badge buttons:

Google Play badge: Border button px-3 py-2 rounded-lg border border-[#00041F] hover:bg-gray-50. Contains an <img> (w-6 h-7 object-contain) with src:

https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_154325_6e98dcdb-51ba-446a-8c52-2d2f2675a575.png&w=1280&q=85
Next to it: "GET IT ON" in text-[10px] font-product-sans uppercase text-[#00041F] and "Google Play" in text-sm font-product-sans font-bold text-[#00041F].
App Store badge: Same border style. Image src:

https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_154356_13de5dda-6dfe-4f54-b3e2-251301254578.png&w=1280&q=85
Text: "Download on the" in text-[10px] font-sf-compact text-[#00041F] and "App Store" in text-sm font-sf-compact font-medium text-[#00041F].
src/components/InsightsSection.tsx

A white section px-6 md:px-12 lg:px-[60px] py-20 bg-white flex flex-col gap-[90px].

Top block (max-w-[517px] flex flex-col gap-10):

Heading wrapped in <BlurIn>: "Instant payment clarity counts" — text-[#00041F] text-4xl md:text-5xl lg:text-6xl font-helvetica-neue font-medium leading-[1] lg:leading-[60px] tracking-[-0.03em]
Paragraph: "Real-time data powers smarter spending choices every day" — text-[#49484F] text-base md:text-lg lg:text-xl font-helvetica-neue max-w-[361px]
Cards row (flex flex-col lg:flex-row items-stretch lg:items-end gap-5), animated with Framer Motion whileInView (once, amount: 0.2), stagger children 0.2s, each card animates from opacity: 0, y: 30 to visible over 0.6s easeOut:

Three cards, each flex-1 p-10 rounded-[40px] relative overflow-hidden flex flex-col justify-end:

Card 1 — min-h-[450px]. Video src:


https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_143605_bc7bd6c0-9c68-49ff-a9d3-073a10759fa4.mp4
Overlay: bg-[rgba(206,223,235,0.25)]. Stat: "1.6M", description: "Active members rely on us for effortless payment experiences" (max-w-[377px])

Card 2 — min-h-[350px]. Video src:


https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_145119_f4ec4d9f-3ecd-4116-baa3-26e8cf2df976.mp4
Overlay: bg-[rgba(247,236,233,0.6)]. Stat: "850К", description: "Transfers completed each day, quick and protected" (max-w-[351px])

Card 3 — min-h-[450px]. Video src:


https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_140728_ae719193-f10b-4105-82fc-c989610b3aa6.mp4
Overlay: bg-[rgba(218,218,218,0.2)]. Stat: "120+", description: "Nations enabled for instant checkouts and worldwide remittance" (max-w-[351px])

All three cards: stat number is text-5xl md:text-[60px] font-helvetica-neue font-medium leading-[1] md:leading-[60px] text-[#00041F]. Description is text-lg md:text-[22px] font-helvetica-neue opacity-80 text-[#49484F]. Content wrapper is relative z-10 max-w-[388px] flex flex-col gap-5. Video is absolute inset-0 w-full h-full object-cover. Overlay div is absolute inset-0.

src/components/TextFillSection.tsx

A scroll-driven text color fill animation. White background section: flex justify-center items-center px-6 md:px-16 py-24 md:py-32 bg-white mb-[30vh].

Inner wrapper: max-w-2xl w-full text-center relative.

An <h2> with text-4xl md:text-5xl lg:text-6xl font-helvetica-neue font-medium leading-tight relative tracking-[-0.03em] and two absolutely stacked spans with identical text: "Handle payments fast & sleek! Track expenses, reach targets, unlock insights to make sharper decisions, all in one app".

Bottom span (base layer): block text-[#B8B7BA] (light gray, always visible)
Top span (overlay): absolute inset-0 with the brand gradient (bg-gradient-to-r from-[#B56939] via-[#5C3779] to-[#454BBB] bg-clip-text text-transparent). Use inline style clipPath: inset(0 ${100 - fillPercentage}% 0 0) with transition: clip-path 0.1s linear to reveal from left to right.
Scroll logic (via useEffect + useRef on the section div): On scroll, get the element's getBoundingClientRect().top. Define startFill = windowHeight * 0.8 and endFill = windowHeight * 0.2. When elementTop is between endFill and startFill, compute fillPercentage = ((startFill - elementTop) / (startFill - endFill)) * 100, clamped 0–100. Below startFill → 0%, above endFill → 100%.