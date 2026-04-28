# Investor Deck

**ID:** deck-investor  
**Category:** Investor Presentations  
**Type:** landing-page  

---

Build a presentation-style slide deck web app with 5 slides using React, Tailwind CSS, hls.js for Mux HLS video playback, and motion (from motion/react) for animations. The font is Aeonik, sans-serif. The entire deck has a black background (bg-black) so transitions fade through black, never white.

Global Architecture

App container: Full-width/full-height, overflow-hidden, font-['Aeonik',sans-serif], bg-black.

All 5 slides are always mounted simultaneously (not conditionally rendered) so HLS videos preload in the background. Only opacity changes via Motion's animate={{ opacity: isActive ? 1 : 0 }} with duration: 0.35, ease: "easeInOut". The active slide gets zIndex: 10, inactive slides get zIndex: 0 and pointerEvents: "none".

Keyboard navigation: ArrowRight/ArrowDown/Spacebar = next slide, ArrowLeft/ArrowUp = previous slide.

Navigation dots: Centered at bottom (bottom-5, left-1/2, -translate-x-1/2, z-20), a row of clickable dots with gap-2. Active dot: bg-white w-6 h-2 rounded-full. Inactive dot: bg-white/40 w-2 h-2 rounded-full. All dots have transition-all duration-300.

Each slide receives an isActive prop. Internally tracks activationCount state that increments each time isActive becomes true. The content wrapper uses key={activationCount} to re-mount and re-trigger all animations fresh each time the slide becomes active, while the video stays persistently mounted outside this keyed wrapper.

Shared Components

Logo: A white SVG logo, 116px wide × 36px tall, rendered from imported SVG path data. Appears in the top-left of every slide.

AnimatedText components (reusable across all slides):

SlideUpLine: Clip-reveal slide-up for headings. Wraps children in overflow-hidden inline-block span. Inner motion.span animates from y: "100%" to y: "0%". Default duration 0.7s. Easing: [0.25, 0.1, 0.25, 1].

WordByWordReveal: Splits text by spaces. Each word is in an overflow-hidden inline-block span with mr-[0.27em]. Inner motion.span animates from y: "100%" to y: "0%" with stagger. Default stagger: 0.035s, duration: 0.55s. Same easing curve.

BlurReveal: motion.div animates from opacity: 0, filter: "blur(8px)" to opacity: 1, filter: "blur(0px)". Default duration: 0.9s. Same easing curve. Used for metadata, labels, and description paragraphs.

Common Slide Layout Pattern

Every slide follows this structure:

Full-size container (w-full h-full flex flex-col relative overflow-hidden)

Background video (absolutely positioned, persistently mounted outside the keyed wrapper)

relative z-10 content wrapper (keyed by activationCount)

Top bar: Logo (left) + slide number or metadata (right), wrapped in BlurReveal, with px-[5%] pt-[3.5%]

Divider: mt-6 px-[5%] container with a bg-white/15 h-px w-full line

Content area below

HLS Video Setup Pattern

Each background video uses hls.js:

Create a <video> element with autoPlay muted loop playsInline

In useEffect: if Hls.isSupported(), create new Hls({ autoStartLoad: true }), load source, attach media, play on MANIFEST_PARSED. Cleanup destroys HLS instance. Fallback for Safari: set video.src directly and play on loadedmetadata.

Slide 1 — Title Slide "Innovation and Growth"

Background: bg-black

Video URL: https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8

Video styling: absolute inset-0 w-full h-full object-cover (full opacity, no transform)

Top bar (in BlurReveal delay={0.1}):

Left: Logo

Right: 4 metadata items in a flex gap-8 row. Each item is a flex-col with gap-[2px]: label in text-[#80838e] text-[13px], value in text-white text-[13px]. Items: Type→"Investor Deck", Investor→"BlackRock", Date→"February 2026", Industry→"Artificial Intelligence"

Divider: px-[5%] mt-6, bg-white/15 h-px w-full

Title text: Positioned at bottom-left using flex-1 flex items-end px-[5%] pb-[8%]. <h1> with text-white leading-[0.9] tracking-tight, fontSize: clamp(48px, 10vw, 140px). Two lines using SlideUpLine:

Line 1: "Innovation" with delay={0.3} duration={0.7}

<br />

Line 2: "and Growth" with delay={0.4} duration={0.7}

Slide 2 — Problem Statement with Stat Cards

Background: bg-black

Video URL: https://stream.mux.com/s8pMcOvMQXc4GD6AX4e1o01xFogFxipmuKltNfSYza0200.m3u8

Video styling: absolute inset-0 w-full h-full object-cover (full opacity, no transform)

Top bar (in BlurReveal delay={0.05}):

Left: Logo

Right: text-[#80838e] text-[20px] leading-[1.4] showing "02"

Content area: flex flex-col flex-1 justify-between pt-[4%] pb-[5%] inside px-[5%] wrapper

Upper section (max-w-[85%]):

Subtitle: BlurReveal delay={0.15}, text-[#80838e], fontSize: clamp(12px, 1.2vw, 18px), text "Problem Statement"

Heading: WordByWordReveal with text-white leading-[1.04], fontSize: clamp(22px, 3.5vw, 56px), text "In the realm of AI, businesses face challenges in data analysis, decision-making bottlenecks, and seamless integration of AI solutions", baseDelay={0.25} stagger={0.035} duration={0.55}

Stat cards (bottom, flex gap-4 w-full): 3 StatCard components, each flex flex-1 flex-col gap-3 min-w-0. Each card is a motion.div animating from y: 30, opacity: 0 to y: 0, opacity: 1 with duration: 0.6, delay: 0.6 + index * 0.1, ease: [0.25, 0.1, 0.25, 1].

Card 1: value "80%" / label "Face data complexity"

Card 2: value "63%" / label "Struggle with AI integration"

Card 3: value "47%" / label "Delay decisions due to bottlenecks"

Value styling: text-white leading-[0.96] tracking-tight, fontSize: clamp(32px, 6vw, 96px)

Label styling: text-white leading-[1.4], fontSize: clamp(13px, 1.2vw, 20px)

Slide 3 — Market Opportunity with Growth Chart

Background: bg-black

Video URL: https://stream.mux.com/Gs3wZfrtz6ZfqZqQ02c02Z7lugV00FGZvRpcqFTel66r3g.m3u8

Video styling: absolute inset-0 w-full h-full object-cover with transform: scale(-1, -1) (flipped both vertically and horizontally) and opacity: 0.5

Top bar (in BlurReveal delay={0.05}):

Left: Logo

Right: "03" in text-[#80838e] text-[20px] leading-[1.4]

Text content (max-w-[55%] px-[5%] pt-[3%]):

Subtitle: BlurReveal delay={0.15}, text "Market Opportunity", text-[#80838e], fontSize: clamp(12px, 1.2vw, 18px)

Heading: WordByWordReveal, text "At Viktory, we target a growing market for AI innovation, especially in cybersecurity and web3", text-white leading-[1.04], fontSize: clamp(20px, 3.2vw, 52px), baseDelay={0.25} stagger={0.035} duration={0.55}

Description: BlurReveal delay={0.8}, text "We strategically focus on AI innovation at the intersection of cybersecurity and web3, meeting the growing demand for advanced solutions. Positioned at the forefront, we drive transformative technology in the evolving digital landscape.", text-[#80838e] max-w-[90%], fontSize: clamp(12px, 1.1vw, 18px)

Chart: motion.div positioned absolute bottom-[3%] left-0 right-0 top-[40%], animates from opacity: 0, y: 30 to opacity: 1, y: 0 with duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1]. Contains:

ChartArea (absolute bottom-0 right-0 w-[55%] h-[70%]): A purple-to-pink gradient growth curve composed of:

Gradient area fill image (imported PNG)

Opacity line: SVG path with strokeWidth: 24, gradient stroke from white/0.15 to white/0

Main gradient line: SVG path with strokeWidth: 4, linear gradient from #8238DC to #F75CB7

SectorMarker (absolute bottom-[22%] left-[44%]): Shows "32%" value, a 2px white vertical line (40px), and a 100x100px sector circle with white/0.08 fill and a centered gradient dot (#7FBAFF to #536EFB with white stroke)

TopValue (absolute top-[2%] right-[5%]): Shows "127%" in fontSize: clamp(32px, 4vw, 64px), a 2px white vertical line (50px), and a small gradient dot

MidDot (absolute top-[40%] right-[35%]): Small gradient dot only

XAxis (absolute bottom-0 left-0 right-0): Horizontal line in bg-[#1a2035], 8 tick marks, and year labels 2017-2024 in text-[#80838e], fontSize: clamp(11px, 1vw, 18px)

No teal arrow callout

Slide 4 — Sales and Distribution Channels

Background: bg-black

Video URL: https://stream.mux.com/PkFsoKeakRLgL01gjf02CRcSbsJ600Z00NvLr9eRZ92pLbA.m3u8

Video styling: absolute top-0 bottom-0 right-0 h-full object-cover with left: 400px (400px left padding offset)

Top bar: Absolutely positioned (absolute top-0 left-0 right-0 pt-[3.5%]), BlurReveal delay={0.05}:

Left: Logo

Right: "04" in text-[#80838e] text-[20px] leading-[1.4]

Divider: Absolutely positioned at top-[calc(3.5%+52px)], bg-white/15 h-px w-full

Content wrapper: flex flex-col w-full h-full justify-center (vertically centered)

Text content (max-w-[65%] px-[5%]):

Subtitle: BlurReveal delay={0.15}, text "Sales and Distribution Channels", text-[#80838e], fontSize: clamp(12px, 1.2vw, 26px)

Heading: WordByWordReveal, text "Our direct sales team engages with enterprises, while online platforms and strategic partnerships expand our outreach", text-white leading-[1.04], fontSize: clamp(20px, 4vw, 80px), baseDelay={0.25} stagger={0.035} duration={0.55}

Description: BlurReveal delay={1.2}, text "Our direct engagement with enterprises ensures tailored solutions through consultations. Meanwhile, the strategic utilization of online platforms and partnerships significantly broadens our reach, ensuring impactful and diverse distribution.", text-[#80838e] max-w-[784px], fontSize: clamp(12px, 1.1vw, 26px)

Slide 5 — Global Expansion

Background: bg-[#131318]

Video URL: https://stream.mux.com/BuGGTsiXq1T00WUb8qfURrHkTCbhrkfFLSv4uAOZzdhw.m3u8

Video styling: absolute object-cover with inline styles: width: "200%", height: "200%", bottom: 0, left: 0. This makes the video 200% of the slide size with its focal point anchored to the bottom-left corner.

Top bar (in BlurReveal delay={0.05}):

Left: Logo

Right: "05" in text-[#80838e] text-[20px] leading-[1.4]

Divider: mt-6 px-[5%], bg-white/15 h-px w-full

Spacer: flex-1 div pushes text content to the bottom

Text content (at bottom, max-w-[55%] px-[5%] pb-[5%]):

Subtitle: BlurReveal delay={0.15}, text "Global Expansion", text-[#80838e], fontSize: clamp(12px, 1.2vw, 26px)

Heading: WordByWordReveal, text "Opportunities across continents", text-white leading-[1.04], fontSize: clamp(20px, 4vw, 80px), baseDelay={0.25} stagger={0.035} duration={0.55}

Description: BlurReveal delay={0.6}, text "Our global break-even journey aligns revenue with expenses worldwide. Through strategic cost management and international growth initiatives, we target break-even within 18 months, fortifying a strong global financial foundation for success.", text-[#80838e] max-w-[680px], fontSize: clamp(12px, 1.1vw, 26px)

Dependencies

hls.js — HLS video streaming

motion — animations (import from motion/react)

Tailwind CSS v4

Color Palette

Backgrounds: black (slides 1-4), #131318 (slide 5)

Primary text: white

Secondary/muted text: #80838e

Dividers: white/15 (15% opacity white)

Chart gradient: #8238DC → #F75CB7 (purple to pink)

Chart dots gradient: #7FBAFF → #536EFB

X-axis elements: #1a2035