# AI Automation Hero

**ID:** 10  
**Category:** AI / SaaS  
**Type:** hero  

---

Create a full-screen hero section with the following exact specifications:

Layout & Structure:
- Full viewport height (h-screen), full width, relative positioning with overflow-hidden
- Background color: #070612 (dark purple-black)
- Content aligned to the left side, vertically centered
- Max-width container (max-w-7xl) with horizontal padding (px-6 lg:px-12)

Background Video:
Video Source: HLS stream from https://stream.mux.com/s8pMcOvMQXc4GD6AX4e1o01xFogFxipmuKltNfSYza0200.m3u8
- Autoplaying, looping, muted video positioned absolutely behind content
- Video shifted 200px to the right (margin-left: 200px)
- Video scaled to 1.2x with origin-left, object-cover, full height
- Bottom fade gradient (h-40) from background color to transparent (z-10)

Badge (top element):
- Pill-shaped badge with rounded-full, border border-white/20, backdrop-blur-sm
- Contains a Sparkles icon (lucide-react, w-3 h-3, text-white/80)
- Text: "New AI Automation Ally" in text-sm font-medium text-white/80
- Animated with blur-in effect (0.6s duration, no delay)

Main Heading:
- Three lines of text:
  - Line 1: "Unlock the Power of AI" (block display)
  - Line 2: "for Your" (inline)
  - Line 3: "Business." in serif italic font (inline)
- Font sizes: text-4xl md:text-5xl lg:text-6xl
- Font weight: font-medium
- Line height: leading-tight lg:leading-[1.2]
- Color: white (text-foreground)
- Each word animates in with staggered split-text animation (0.08s delay between words, 0.6s duration, y: 40px -> 0, opacity: 0 -> 1)

Subtitle:
- Text: "Our cutting-edge AI platform automates, analyzes, and accelerates your workflows so you can focus on what really matters."
- Styling: text-white/80, text-lg, font-normal, leading-relaxed, max-w-xl
- Animated with blur-in effect (0.4s delay, 0.6s duration)

CTA Buttons (bottom):
- Two buttons side by side with gap-4, flex-wrap
- Primary button "Book A Free Call":
  - Solid white background (bg-foreground), dark text (text-background)
  - Rounded-full, px-5 py-3
  - Includes right arrow icon (ArrowRight from lucide-react)
  - Links to /book-call
- Secondary button "Learn now":
  - Semi-transparent background (bg-white/20), backdrop-blur-sm
  - Rounded-full, px-8 py-3
  - White text
- Both buttons animated with blur-in effect (0.6s delay, 0.6s duration)

Animations (using framer-motion):
- BlurIn component: opacity 0->1, blur 10px->0, y 20->0
- SplitText component: splits text by words, staggers each word's animation

Z-index layering:
- Video: z-0
- Bottom gradient: z-10
- Content: z-20

Spacing:
- 12-unit gap (gap-12) between badge/heading group and CTA buttons
- 6-unit gap (gap-6) between badge and heading, and between heading and subtitle