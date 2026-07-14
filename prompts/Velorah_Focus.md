Social meida post #1 (on the left)
Create a React application that displays a stylized, 3:4 aspect ratio social media post/landing page. The app must exactly match the following specifications, layout, animations, and CSS effects:
1. Layout & Structure:
Main Container: Full screen, black background (min-h-screen bg-black), centering its child content.
Social Frame: A centered container measuring exactly 600px wide by 800px high (w-[600px] h-[800px]). It should have a subtle white border (border-white/10), rounded corners (rounded-2xl), hidden overflow, and a heavy drop shadow.
Video Background: An absolute-positioned, full-cover HTML <video> element playing continuously in the background (autoplay, loop, muted, playsInline).
Exact Video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_110052_2e127257-5236-40b1-ba48-4690260f1185.mp4
2. Visual Effects & Overlays (Critical Custom CSS):
Add the following visual layers exactly as described using custom CSS in index.css:
VHS Noise: An absolute full-cover div using an inline SVG fractal noise filter as its background image, with mix-blend-mode: overlay, opacity: 0.15, and a 0.2s step-keyframe animation to simulate static.
VHS Scanlines: A repeating linear gradient over the entire frame (50% transparent, 50% slight black transparent) with a background size of 100% 4px.
VHS Glitch Bar: A 40px tall horizontal bar that moves from top to bottom continuously over 4 seconds (top: -10% to top: 110%). It should have a backdrop blur of 2px, a 5deg hue rotation, and subtle white top/bottom borders.
RGB Text Glitch: A custom CSS animation (rgb-text-glitch) that applies a flickering text-shadow consisting of offset red (rgba(255, 0, 0, 0.5)) and cyan (rgba(0, 255, 255, 0.5)).
3. Typography:
Import two Google Fonts: Instrument Serif (for headings and logo) and Inter (for body text and buttons). Map these to Tailwind's font-serif and font-sans.
4. Content Elements (Centered over the video, shifted slightly up by -mt-[180px]):
Headline: "Focus in a<br/>Distracted World". Uses Instrument Serif, text size 64px, tight leading, tight tracking (tracking-[-2.46px]), animated to fade and rise upwards, and applying the rgb-text-glitch effect.
Subtext: "We're designing tools for deep thinkers, bold creators, and quiet rebels. Amid the chaos, we build digital spaces for sharp focus and inspired work." Uses Inter, text size 17px, max-width 480px, delayed fade-rise animation, and applies the rgb-text-glitch effect.
Button: Text reads "Begin Journey". Uses Inter, 15px. Add a custom .liquid-glass CSS class. The liquid glass effect uses background: rgba(255, 255, 255, 0.01), a luminosity mix-blend-mode, 4px backdrop blur, and an advanced mask-composite border gradient trick to simulate a sleek glass edge. Add a slight hover scale effect.
Footer Logo: Positioned absolutely at the bottom center. Reads "Velorah" in Instrument Serif, size 3xl, with a small superscript trademark symbol ®. Applies the rgb-text-glitch effect.
5. Animations:
Implement a @keyframes fade-rise going from opacity: 0, translateY(24px) to opacity: 1, translateY(0).
Apply staggered animation classes to the headline (0s delay), paragraph (0.2s delay), and button (0.4s delay) so they slide in smoothly upon load.
Please write the complete React component (src/App.tsx) and the accompanying CSS stylesheet (src/index.css) utilizing standard React and Tailwind classes alongside the specific custom CSS for the VHS, glitch, and glassmorphism effects.

Social media post #2 (on the right)

Please build a React application with Tailwind CSS that recreates a cinematic 600x800px social media post component with VHS and RGB glitch effects. 

Please use the exact code below for the two main files to recreate my layout perfectly.

File 1: src/index.css
```css
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap');
@import "tailwindcss";

@theme {
  --font-serif: "Instrument Serif", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
}

.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

@keyframes fade-rise {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-rise { animation: fade-rise 0.8s ease-out both; }
.animate-fade-rise-delay { animation: fade-rise 0.8s ease-out 0.2s both; }
.animate-fade-rise-delay-2 { animation: fade-rise 0.8s ease-out 0.4s both; }

/* VHS Effects */
.vhs-noise {
  position: absolute;
  inset: -100%;
  width: 300%;
  height: 300%;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.15;
  mix-blend-mode: overlay;
  animation: vhs-noise-anim 0.2s steps(2) infinite;
  z-index: 50;
}

@keyframes vhs-noise-anim {
  0% { transform: translate(0, 0); }
  20% { transform: translate(-5%, 5%); }
  40% { transform: translate(-10%, -5%); }
  60% { transform: translate(5%, 10%); }
  80% { transform: translate(10%, -10%); }
  100% { transform: translate(0, 5%); }
}

.vhs-scanlines {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    rgba(255,255,255,0),
    rgba(255,255,255,0) 50%,
    rgba(0,0,0,0.15) 50%,
    rgba(0,0,0,0.15)
  );
  background-size: 100% 4px;
  z-index: 51;
}

.vhs-glitch-bar {
  position: absolute;
  left: 0;
  width: 100%;
  height: 40px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(2px) hue-rotate(5deg);
  -webkit-backdrop-filter: blur(2px) hue-rotate(5deg);
  z-index: 52;
  pointer-events: none;
  animation: glitch-bar-anim 4s linear infinite;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255,255,255,0.05);
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

@keyframes glitch-bar-anim {
  0% { top: -10%; opacity: 0; }
  10% { opacity: 1; }
  90% { top: 110%; opacity: 1; }
  100% { top: 110%; opacity: 0; }
}

.rgb-text-glitch {
  text-shadow: 
    1px 0 0 rgba(255, 0, 0, 0.5),
    -1px 0 0 rgba(0, 255, 255, 0.5);
  animation: rgb-flicker 3s infinite;
}

@keyframes rgb-flicker {
  0%, 95% { text-shadow: 1px 0 0 rgba(255, 0, 0, 0.5), -1px 0 0 rgba(0, 255, 255, 0.5); }
  96% { text-shadow: 3px 0 0 rgba(255, 0, 0, 0.8), -3px 0 0 rgba(0, 255, 255, 0.8); }
  97% { text-shadow: -2px 0 0 rgba(255, 0, 0, 0.8), 2px 0 0 rgba(0, 255, 255, 0.8); }
  100% { text-shadow: 1px 0 0 rgba(255, 0, 0, 0.5), -1px 0 0 rgba(0, 255, 255, 0.5); }
}
File 2: src/App.tsx
code
Tsx
export default function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* 3:4 Aspect Ratio Frame (600x800) */}
      <div className="w-[600px] h-[800px] shrink-0 border border-white/10 rounded-2xl overflow-hidden relative shadow-2xl flex flex-col bg-black">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-100"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_105838_084968f2-4415-42a4-971a-3bec54539549.mp4"
        />
        
        {/* VHS Overlay Elements (On top of everything) */}
        <div className="vhs-scanlines"></div>
        <div className="vhs-noise"></div>
        <div className="vhs-glitch-bar"></div>
        
        {/* Content Area - Middle of the frame */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 -mt-[358px]">
          
          <h1 className="font-serif text-[64px] leading-[0.95] tracking-[-2.46px] max-w-xl text-white animate-fade-rise rgb-text-glitch">
            Focus in a<br/>Distracted World
          </h1>
          
          <p className="font-sans text-[17px] text-white/95 mt-8 leading-relaxed max-w-[480px] animate-fade-rise-delay rgb-text-glitch">
            We're designing tools for deep thinkers, bold creators, and quiet rebels. Amid the chaos, we build digital spaces for sharp focus and inspired work.
          </p>

          <button className="liquid-glass rounded-full px-14 py-4 text-white text-[15px] font-sans mt-12 hover:scale-[1.03] transition-transform animate-fade-rise-delay-2 tracking-wide">
            Begin Journey
          </button>
        </div>

        {/* Footer Navbar */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="text-3xl tracking-tight text-white font-serif rgb-text-glitch">
            Velorah<sup className="text-[10px] ml-0.5 relative -top-3">®</sup>
          </div>
        </div>

      </div>
    </div>
  );
}
code
Code
***

### Option 2: The Highly Detailed Descriptive Prompt
*Use this if you want an AI to construct it from scratch based entirely on instructions rather than writing the pre-built code block.*

```text
Please build a React + Tailwind CSS web application that recreates a specific 3:4 aspect ratio social media post perfectly. Follow these exact formatting rules:

1. **Global Configuration (CSS)**:
   - Import 'Instrument Serif' and 'Inter' from Google Fonts. Map Instrument Serif to `--font-serif` and Inter to `--font-sans` in the CSS theme block.

2. **Core Layout (`App.tsx`)**:
   - The outer container should strictly be `min-h-screen bg-black flex items-center justify-center p-4`.
   - The central post frame needs to be exactly `w-[600px] h-[800px]` with `border border-white/10 rounded-2xl overflow-hidden relative shadow-2xl bg-black`.

3. **Background Media**:
   - Add an absolutely positioned, full-cover `<video>` tag behind all content (z-0 index, opacity-100).
   - Use `autoPlay loop muted playsInline`. 
   - The source URL must be exactly: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_105838_084968f2-4415-42a4-971a-3bec54539549.mp4`

4. **VHS & RGB Glitch Layers (CSS required)**:
   - Create a `.vhs-scanlines` class using a transparent-to-black linear gradient (background-size: 100% 4px).
   - Create a `.vhs-noise` class using a base64 SVG `<feTurbulence>` fractal noise filter layered with blend-mode overlay.
   - Create a `.vhs-glitch-bar` horizontally scanning top-to-bottom across the screen over 4 seconds continuously.
   - Create an `.rgb-text-glitch` class using animated text-shadows that split cyan (`rgba(0, 255, 255, 0.5)`) and red (`rgba(255, 0, 0, 0.5)`) rhythmically. Apply this text glitch class to ALL text elements.

5. **Main Content Overlay**:
   - Shift the main central content heavily up the page using Tailwind's exact specific margin: `-mt-[358px]`.
   - Heading (H1): "Focus in a<br/>Distracted World". Styling: 64px font-serif, leading-[0.95], tight tracking (-2.46px), white text fading up.
   - Subtitle (P): "We're designing tools for deep thinkers, bold creators, and quiet rebels. Amid the chaos, we build digital spaces for sharp focus and inspired work." Styling: 17px font-sans, leading-relaxed, fading up with a 0.2s delay.
   - Button: "Begin Journey". Include a custom `.liquid-glass` CSS class giving it a luminosity background blend, 4px backdrop blur, and a sub-pixel linear-gradient border using `-webkit-mask`. Add hover scaling (`hover:scale-[1.03]`).

6. **Footer / Branding**:
   - Add a bottom footer absolutely positioned to `bottom-8 left-1/2 -translate-x-1/2`.
   - The text should say "Velorah" with a registered trademark symbol `®` raised slightly (`sup` tag with `-top-3 text-[10px]`). Apply the text glitch and serif styling.