# Urban Jungle

**ID:** urban-jungle-hero  
**Category:** Landing Page  
**Type:** hero  

---

Build a scroll-driven hero section landing page using React 19, Vite, Tailwind CSS v4 (using @tailwindcss/vite plugin), GSAP (with ScrollTrigger + ScrollToPlugin), hls.js, and react-router-dom (BrowserRouter). The page body is black with white text. The root container is 500vh tall.

SETUP
Dependencies (package.json):

react, react-dom, react-router-dom, gsap, hls.js, lucide-react, motion, tailwindcss v4, @tailwindcss/vite, @vitejs/plugin-react, vite
Vite config: Use @tailwindcss/vite and @vitejs/plugin-react plugins.

Entry point (main.tsx): Wrap <App /> in <StrictMode> and <BrowserRouter>.

Custom headline font: Download the font file from https://dirtylinestudio.com/wp-content/uploads/2022/05/Dirtyline-36daysoftype-2022.woff2 and save it to the public/ directory as Dirtyline-36daysoftype-2022.woff2. Then register it via @font-face in CSS.

Google Fonts (loaded via CSS @import): Manrope:wght@400;500;600;700 and Instrument+Serif:ital@0;1

Tailwind v4 theme (index.css):

@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Manrope", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-serif: "Instrument Serif", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-dirtyline: "Dirtyline36Daysoftype2022", sans-serif;
  --animate-marquee: marquee 20s linear infinite;
  @keyframes marquee {
    100% { transform: translateX(-50%); }
  }
}

@font-face {
  font-family: 'Dirtyline36Daysoftype2022';
  src: url('/Dirtyline-36daysoftype-2022.woff2') format('woff2');
  font-style: normal;
  font-weight: normal;
  text-rendering: optimizeLegibility;
  font-display: swap;
}

body {
  background-color: black;
  color: white;
}

LAYER 1: BACKGROUND -- ScrollVideo Component
A full-screen fixed video background that scrubs its playback position based on scroll progress (scroll at top = frame 0, scroll at bottom = last frame).

Video source (Mux HLS stream):
https://stream.mux.com/43NlHXsaMrmyzWamMk87m01fNyxSTekAD669BBAPBNm00.m3u8

Props: src (string), className (string)

Implementation:

Use hls.js. On MANIFEST_PARSED, force the highest quality level: hls.currentLevel = maxLevel; hls.startLevel = maxLevel. Config: maxBufferLength: 120, maxMaxBufferLength: 600, maxBufferSize: 200 * 1024 * 1024, startPosition: 0, capLevelToPlayerSize: false, startLevel: -1, autoStartLoad: true.
For Safari (native HLS), set video.src = src directly.
Track buffer progress via FRAG_BUFFERED event, calculating (bufferedEnd / duration) * 100.
The <video> element is rendered directly (no canvas). Classes: w-full h-full object-cover scale-[1.35]. Attributes: muted, playsInline, crossOrigin="anonymous".
Scroll-to-seek: Use GSAP ScrollTrigger.create with trigger: document.documentElement, start: 'top top', end: 'bottom bottom', scrub: true. On onUpdate, calculate targetTime = self.progress * duration. Throttle seeking: track a currentTarget variable. If video.seeking is true, set seekPending = true. On the seeked event, if seekPending, call doSeek() again with the latest currentTarget. This prevents hammering the decoder.
Mouse parallax on video wrapper: On mousemove, GSAP tweens the wrapper's x/y by moveX * -30 and moveY * -30, where moveX/moveY are normalized mouse offset from center (-1 to 1). Duration: 1.5, ease: power2.out.
Loading overlay: Show a fixed, z-50, centered black overlay with "Loading... {progress}%" in white, text-2xl font-sans. Hide once canplay fires.
Wrapper div classes: fixed top-0 left-0 w-full h-full z-0 scale-[1.05] origin-center

LAYER 2: HERO TEXT -- ScrollFloat Component
A fixed overlay at z-10, positioned at the bottom of the viewport: fixed inset-0 flex flex-col justify-end p-4 md:p-8 pointer-events-none.

Text content: "Unleash The\nFull Power" (literal newline between the two lines).

ScrollFloat component implementation:

Splits the text string by \n into lines, then by spaces into words, then into individual characters.
Each line is wrapped in <span style="display: block">.
Each word is wrapped in <span style="display: inline-block; white-space: nowrap">.
Each character is wrapped in <span class="char">.
Word separators: &nbsp; between words.
Animation: Uses gsap.fromTo on all .char elements. FROM: {opacity: 1, yPercent: 0, scaleY: 1, scaleX: 1, transformOrigin: '50% 0%'}. TO: {opacity: 0, yPercent: 250, scaleY: 1.2, scaleX: 0.9}. So the text starts fully visible and animates away as you scroll down.
ScrollTrigger config: trigger: document.body, start: 'top top', end: '+=1000', scrub: 1.5.
Stagger: 0.05, ease: power2.inOut, duration: 1.
Typography: Font family: font-dirtyline (the Dirtyline custom font). Font size: clamp(4rem, 15vw, 317px). Line height: 0.85. Letter spacing: 0%. Color: white.

ScrollFloat.css:
.scroll-float-text { display: inline-block; }
.char { display: inline-block; }

LAYER 3: GLASS PANEL -- GlassPanel Component (About Us section)
Positioned absolutely at the bottom of the 500vh container: absolute bottom-0 left-0 w-full h-screen. It slides up from below as you scroll to the bottom.

Slide-up animation: gsap.fromTo on the panel wrapper: from {y: '100%'} to {y: '0%'}, ease: none. ScrollTrigger: trigger is the container div, start: 'top bottom', end: 'bottom bottom', scrub: 1.5.

Panel wrapper: w-full max-w-[1250px] h-[900px] max-h-[85vh] pointer-events-auto with perspective: 1000px inline style.

Panel itself: w-full h-full flex flex-col justify-between rounded-3xl relative overflow-hidden with inline styles:
backgroundColor: 'rgba(0, 0, 0, 0.16)'
backdropFilter: 'blur(160px)'
WebkitBackdropFilter: 'blur(160px)'
border: '1px solid rgba(255, 255, 255, 0.1)'
transformStyle: 'preserve-3d'
willChange: 'transform'

3D mouse parallax on panel: On mousemove, GSAP tweens: x: moveX * 20, y: moveY * 20, rotationY: moveX * 4, rotationX: -moveY * 4. Ease: power3.out, duration: 1.

Content (all centered text):
Subtitle: <p> with font-serif italic text-white/70 text-base md:text-lg mb-4 md:mb-6 -- text: "About Us"
Main heading: <h2> with font-serif text-white text-4xl md:text-6xl lg:text-[96px] leading-[1.1] lg:leading-[92.6px] tracking-tight w-full max-w-[1000px] mx-auto -- text: "We transform sterile concrete into thriving urban jungles. Our innovative designs bring wild nature back to modern cities. Experience the bloom" where the italic words (urban, nature, bloom) are wrapped in <span className="italic">.
All text is centered: the content area uses flex flex-col items-center justify-center px-6 md:px-12 text-center.

Bottom marquee (text-based logos, not images):
Instead of image logos, use text brand names as the marquee items. Use names like "VOICEFLOW", "ZENDESK", "PENDO", "GLIDE", "CANVA". Each name is rendered as white text, opacity-40 hover:opacity-100 transition-opacity duration-300, uppercase, font-sans font-semibold text-sm tracking-widest. The marquee row is duplicated 4x for seamless infinite scroll, using the CSS animate-marquee keyframe (translateX(-50%) over 20s linear infinite). The marquee sits at the bottom of the glass panel, separated by a border-t border-white/10 py-6.

LAYER 4: PILL NAVIGATION -- PillNav Component
Fixed at top center of viewport (position: fixed; top: 24px; left: 50%; transform: translateX(-50%); z-index: 100). Font: Manrope, 600 weight, 14px, uppercase, 0.05em letter-spacing.

Structure:
A circular black logo button (48x48px, border-radius: 50%) containing a 4-petal SVG icon (white fill, 24x24). The SVG paths:
m50,50c0,18.2,14.77,32.98,32.97,32.98,0-18.2-14.77-32.98-32.97-32.98Z
m17.02,82.98c18.2,0,32.98-14.77,32.98-32.98-18.2,0-32.98,14.77-32.98,32.98Z
m82.98,17.02c-18.2,0-32.97,14.77-32.97,32.97,18.2,0,32.97-14.77,32.97-32.97Z
m17.02,17.02c0,18.2,14.77,32.97,32.98,32.97,0-18.2-14.77-32.97-32.98-32.97Z
viewBox: 0 0 100 100. On hover, the SVG container rotates 360deg via GSAP (duration: 0.2).

Nav items container: black background, border-radius: 50px, padding: 4px, border: 2px solid #000. Contains a <ul> with flex layout, gap: 4px.

Each nav pill: padding: 8px 24px, border-radius: 50px, background-color: #f0f0f0, color: #000, font-weight: 600, font-size: 14px, letter-spacing: 0.05em, text-transform: uppercase, overflow: hidden, position: relative.

Pill hover effect (GSAP-powered liquid fill):
Each pill contains a hidden .hover-circle element (absolute, black, border-radius: 50%, scale: 0).
The circle's size is calculated dynamically: R = (w*w/4 + h*h) / (2*h), D = 2*R + 2, positioned at bottom: -delta where delta = R - sqrt(R*R - w*w/4) + 1. Transform origin: 50% ${D - delta}px.
A .label-stack contains two labels: .pill-label (dark text, visible) and .pill-label-hover (white text, hidden below).
On hover enter: a GSAP timeline plays forward -- circle scales to 3, pill-label slides up out of view, pill-label-hover slides up into view (white text over black circle). Timeline tweened to end in 0.3s.
On hover leave: timeline tweened back to 0 in 0.2s.

Nav items: HOME, ABOUT, SERVICES, CONTACT.
HOME onClick: gsap.to(window, { duration: 3, scrollTo: 0, ease: 'power3.inOut' })
ABOUT onClick: gsap.to(window, { duration: 3, scrollTo: document.body.scrollHeight, ease: 'power3.inOut' })

Initial load animation: Logo scales from 0 to 1 (duration 0.6). Nav items container width animates from 0 to auto (duration 0.6).

Responsive: At 768px breakpoint, desktop nav items are hidden and replaced with a hamburger button (two 24x2px lines, gap 4px). On toggle, lines animate to X shape (rotation +/-45deg, y +/-3px). A popover menu appears below with fade+slide animation.

PillNav.css (full):
.pill-nav-container { position: fixed; top: 24px; left: 50%; transform: translateX(-50%); z-index: 100; font-family: 'Manrope', sans-serif; }
.pill-nav { display: flex; align-items: center; background-color: transparent; padding: 0; gap: 0; }
.pill-logo { display: flex; align-items: center; justify-content: center; border-radius: 50%; background-color: #000; width: 48px; height: 48px; flex-shrink: 0; }
.logo-svg-container { display: flex; align-items: center; justify-content: center; }
.pill-nav-items { background-color: #000; border-radius: 50px; padding: 4px; border: 2px solid #000; }
.pill-list { display: flex; align-items: center; gap: 4px; list-style: none; margin: 0; padding: 0; }
.pill { position: relative; display: block; padding: 8px 24px; border-radius: 50px; text-decoration: none; color: #000; font-weight: 600; font-size: 14px; letter-spacing: 0.05em; text-transform: uppercase; overflow: hidden; background-color: #f0f0f0; transition: background-color 0.3s ease; }
.pill.is-active { background-color: #e0e0e0; }
.hover-circle { position: absolute; background-color: #000; border-radius: 50%; pointer-events: none; z-index: 0; transform: scale(0); }
.label-stack { position: relative; display: block; z-index: 1; overflow: hidden; height: 1.2em; }
.pill-label, .pill-label-hover { display: block; line-height: 1.2em; text-align: center; }
.pill-label-hover { position: absolute; top: 0; left: 0; width: 100%; color: #fff; }
.mobile-menu-button { background: none; border: none; cursor: pointer; display: flex; flex-direction: column; gap: 4px; padding: 8px; }
.hamburger-line { width: 24px; height: 2px; background-color: var(--pill-text); display: block; }
.mobile-menu-popover { position: absolute; top: 100%; left: 0; right: 0; margin-top: 8px; background-color: var(--pill-bg); border-radius: 16px; padding: 16px; visibility: hidden; }
.mobile-menu-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px; }
.mobile-menu-link { color: var(--pill-text); text-decoration: none; font-size: 1.1rem; display: block; text-align: center; }
@media (min-width: 769px) { .mobile-only { display: none !important; } }
@media (max-width: 768px) { .desktop-only { display: none !important; } }

APP COMPONENT ASSEMBLY
<ScrollVideo src="https://stream.mux.com/43NlHXsaMrmyzWamMk87m01fNyxSTekAD669BBAPBNm00.m3u8" />
<PillNav />
<div style={{ position: "relative", height: "500vh" }}>
  <ScrollFloat>{`Unleash The\nFull Power`}</ScrollFloat>
  <GlassPanel />
</div>