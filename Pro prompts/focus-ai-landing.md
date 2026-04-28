# Focus AI

**ID:** focus-ai-landing  
**Category:** Landing Page  
**Type:** landing-page  

---


Build a Velorah landing page -- a premium, dark-themed single-page site for an electric RV/camper brand. Use React, TypeScript, Tailwind CSS, and the hls.js library. The page has 6 sections stacked vertically. The entire page background is pure black (hsl(0,0%,0%)). Use the font Instrument Serif (loaded from Google Fonts via <link> in index.html) for all headings and display text, and Inter for body text.

GLOBAL STYLES (index.css):

Import Google Fonts at the top:

@import
 url('https://fonts.googleapis.com/css2?family=Instrumental+Serif&family=Inter:wght@400;500&display=swap');
CSS custom properties (dark-only, no light mode):

--background: 201 100% 13%
--foreground: 0 0% 100% (white)
--card: 0 0% 6%
--card-foreground: 0 0% 100%
--primary: 0 0% 100%
--primary-foreground: 0 0% 4%
--secondary: 0 0% 10%
--secondary-foreground: 0 0% 100%
--muted: 0 0% 10%
--muted-foreground: 240 4% 66%
--accent: 0 0% 10%
--accent-foreground: 0 0% 100%
--destructive: 0 84.2% 60.2%
--destructive-foreground: 0 0% 100%
--border: 0 0% 18%
--input: 0 0% 18%
--ring: 0 0% 100%
--radius: 0.5rem
Body uses font-family: var(--font-body) which maps to Inter.

Liquid Glass CSS class (.liquid-glass):

background: rgba(255, 255, 255, 0.01) with background-blend-mode: luminosity
backdrop-filter: blur(4px) and -webkit-backdrop-filter: blur(4px)
border: none
box-shadow: inset 0 1px 1px rgba(255,255,255,0.1)
position: relative; overflow: hidden
::before pseudo-element creates a gradient border effect:
padding: 1.4px
background: linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%)
Uses -webkit-mask with xor composite and mask-composite: exclude to create the border-only effect
Animations:

@keyframes
 fade-rise: from opacity:0; translateY(24px) to opacity:1; translateY(0)
.animate-fade-rise: animation: fade-rise 0.8s ease-out both
.animate-fade-rise-delay: same with 0.2s delay
.animate-fade-rise-delay-2: same with 0.4s delay
index.html:
Load Instrument Serif from Google Fonts via <link> tags:

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
HLS VIDEO COMPONENT:
Create an HlsVideo component that accepts a src prop. It uses hls.js -- if Hls.isSupported(), create an HLS instance, load the source, and attach to a <video> element. Otherwise fall back to native HLS if the browser supports application/vnd.apple.mpegurl. The video element has classes: absolute inset-0 w-full h-full object-cover z-0 and attributes: autoPlay loop muted playsInline.

VIDEO URLS (use these exact URLs):

Hero background: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4
Feature section right card: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4
Big Statement section (HLS stream): https://stream.mux.com/9njY8qDfS02Uvbll018C8CK39p5EksK7mn02DDC1zYvppI.m3u8
CTA/Join section: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_074215_04640ca7-042c-45d6-bb56-58b1e8a42489.mp4
SECTION 1 -- HERO:

Full-screen section (min-h-screen, relative, overflow-hidden)
Background: <video> tag (not HLS component) using Hero URL, with autoPlay loop muted playsInline, classes absolute inset-0 w-full h-full object-cover z-0
Bottom gradient overlay: absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black via-black/60 to-transparent z-[1]
Navbar (relative z-10, flex items-center justify-between, px-8 py-6, max-w-7xl mx-auto):
Left: Brand name "Velorah" with registered trademark superscript, text-foreground text-3xl tracking-tight, font-family 'Instrument Serif', serif
Center: Nav links (Home, Studio, About, Journal, Reach Us) -- hidden md:flex items-center gap-10 text-sm text-white. All links are text-white with hover:text-white/80 transition-colors
Right: "Begin Journey" button with liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground transition-transform hover:scale-[1.03]
Hero content (relative z-10 flex flex-col items-center justify-center text-center px-6 pt-[28px] pb-40):
Heading: animate-fade-rise text-foreground text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal, font-family 'Instrument Serif', serif. Text: Where dreams rise through the silence. -- the words "dreams" and "through the silence." are wrapped in <em className="not-italic text-white">
Paragraph: animate-fade-rise-delay text-white text-base sm:text-lg max-w-2xl mt-8 leading-relaxed. Text: "We're designing tools for deep thinkers, bold creators, and quiet rebels. Amid the chaos, we build digital spaces for sharp focus and inspired work."
Button: animate-fade-rise-delay-2 liquid-glass rounded-full px-14 py-5 text-base text-foreground mt-12 transition-transform hover:scale-[1.03] cursor-pointer. Text: "Begin Journey"
SECTION 2 -- TAGLINE:

flex items-center justify-center min-h-[70vh] px-6 bg-[hsl(0,0%,0%)]
Heading: text-foreground text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-[-1.5px] text-center max-w-4xl, font-family 'Instrument Serif', serif. Text: "So you can feel at home,
anywhere."
SECTION 3 -- FEATURE SPLIT:

px-6 md:px-12 max-w-7xl mx-auto py-0
Grid: grid md:grid-cols-2 gap-4 rounded-2xl overflow-hidden min-h-[520px]
Left card (bg-card rounded-2xl p-10 md:p-14 flex flex-col justify-between):
Top: Small circle icon (inline-block w-8 h-8 rounded-full border border-border mb-8), heading "100% Electric" (text-foreground text-3xl sm:text-5xl tracking-[-1px] mb-6, Instrument Serif), paragraph "No more fossil fuels, buzzing generators, and propane tanks. Velorah has power for days." (text-muted-foreground text-sm sm:text-base leading-relaxed max-w-sm)
Bottom: Feature tabs array: [{label:"Living Electric",id:"electric"},{label:"Charge Faster",id:"charge"},{label:"Sleep Well",id:"sleep"},{label:"Acoustic Comfort",id:"acoustic"},{label:"5+ Seasons",id:"seasons"}]. Each tab is a <button> with text-xs px-4 py-2 rounded-full border transition-colors. Active state: bg-foreground text-primary-foreground border-foreground. Inactive: border-border text-muted-foreground hover:text-foreground. Use useState("electric") for active tab.
Progress bar: w-full h-0.5 bg-border rounded-full mb-6 with inner div h-full bg-foreground rounded-full at width: 35%
Button: liquid-glass rounded-full px-8 py-3 text-sm text-foreground transition-transform hover:scale-[1.03]. Text: "Explore the Velorah Flow"
Right card (relative rounded-2xl overflow-hidden min-h-[400px]): <video> using Feature section URL, absolute inset-0 w-full h-full object-cover, autoPlay loop muted playsInline
SECTION 4 -- BIG STATEMENT:

relative flex flex-col items-center justify-center min-h-[90vh] px-6 overflow-hidden
Background: <HlsVideo> component using the Mux HLS URL
Content (relative z-10 flex flex-col items-center text-center max-w-5xl):
Label: text-muted-foreground text-xs sm:text-sm tracking-[0.3em] uppercase mb-6. Text: "Intelligent Companion"
Heading: text-foreground text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-[-1.5px], Instrument Serif. Text: "Adventure inspired.
App driven."
Paragraph: text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed. Text: "One app to control climate, lighting, navigation, and energy. Monitor every system in real time, automate your routines, and let Velorah learn how you live on the road."
Stats grid: grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 mt-14. Four items (OTA / "Over-the-air updates", 360 degrees / "System visibility", AI / "Adaptive routines", 24/7 / "Remote monitoring"). Each stat value is text-foreground text-3xl sm:text-4xl font-light in Instrument Serif, label is text-muted-foreground text-xs sm:text-sm
Button: liquid-glass rounded-full px-10 py-4 text-sm text-foreground mt-12 transition-transform hover:scale-[1.03]. Text: "Discover the App"
SECTION 5 -- CTA / JOIN:

relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden
Background: <video> using CTA URL, absolute inset-0 w-full h-full object-cover z-0, autoPlay loop muted playsInline
Content (relative z-10 flex flex-col items-center max-w-4xl):
Price label: text-muted-foreground text-xs sm:text-sm tracking-[0.3em] uppercase mb-4. Text: "Starting at $99,000"
Heading: text-foreground text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2px], Instrument Serif. Text: "Join the ride"
Paragraph: text-muted-foreground text-base sm:text-lg max-w-xl mt-6 leading-relaxed. Text: "Reserve your Velorah today with a fully refundable $500 deposit. Early adopters receive priority delivery and exclusive founding-member benefits."
Two buttons in a flex flex-col sm:flex-row items-center gap-4 mt-10:
"Preorder Now": liquid-glass rounded-full px-10 py-4 text-sm text-foreground transition-transform hover:scale-[1.03]
"Schedule a Tour": rounded-full px-10 py-4 text-sm text-muted-foreground border border-border hover:text-foreground hover:border-foreground/30 transition-colors
SECTION 6 -- FOOTER:

bg-[hsl(0,0%,0%)] border-t border-border px-6 md:px-12 py-16 max-w-7xl mx-auto
Grid: grid grid-cols-1 md:grid-cols-3 gap-12 mb-16
Col 1: Heading "Where home
meets the road." (text-foreground text-2xl sm:text-3xl leading-tight, Instrument Serif)
Col 2: Links list -- product, app, company, community, press, preorder. Each is text-sm text-muted-foreground hover:text-foreground transition-colors capitalize
Col 3: Text "Subscribe for the latest
Velorah updates." (text-sm text-muted-foreground mb-4) and a "Subscribe" button (liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground transition-transform hover:scale-[1.03])
Bottom bar: flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border text-xs text-muted-foreground. Left: "Velorah" with registered trademark (text-foreground text-xl tracking-tight, Instrument Serif, <sup className="text-[8px]">). Right: "Privacy Policy" and "Terms & Conditions" links (hover:text-foreground transition-colors)
TAILWIND CONFIG: Standard shadcn/ui Tailwind config with all the HSL color variables mapped, darkMode: ["class"], tailwindcss-animate plugin, and accordion keyframes/animations.

DEPENDENCIES: React 18, react-router-dom, Tailwind CSS, shadcn/ui primitives, hls.js, lucide-react, @tanstack/react-query, tailwindcss-animate.