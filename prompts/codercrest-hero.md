# CoderCrest

**ID:** codercrest-hero  
**Category:** SaaS  
**Type:** hero  

---

Build a React + TypeScript + Tailwind CSS hero section component named HeroSection saved at src/components/HeroSection.tsx. Match this specification exactly.

Layout & container:

A full-viewport <section> with height: 100vh, solid black background #000, position: relative, overflow: hidden, flex column, centered both axes.
Inside, a centered content <div> with classes relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto.
Typography:

Heading uses font family 'YDYoonche L', 'YDYoonche M', sans-serif, weight 300, letter-spacing -0.01em, line-height 1.1, color #fff.
Heading font-size: clamp(2.2rem, 7vw, 6.5rem) (responsive).
Heading content (an <h1> with three lines):

Line 1: text The vision — wrapped in a <span> with a linear-gradient text fill: linear-gradient(90deg, #333333 0%, #878787 50%, #333333 100%) using -webkit-background-clip: text and -webkit-text-fill-color: transparent. display: block, line-height: 1.1, margin-bottom: -0.22em.
Line 2: text of engineering — same gradient styling as Line 1.
Line 3: a flex span (flex items-center justify-center gap-3 flex-wrap) color #fff containing in order:
<span style="color:#555">is</span>
A circular video icon (human) — size 110px desktop.
<span>human</span>
<span> with color:#555, position:relative, top:0.15em, marginLeft:0.25em containing +.
A circular video icon (AI) — size 110px desktop.
<span>AI</span>
VideoIcon component:
Create a VideoIcon({ src, size = 72 }) component:

Outer <span>: inline-block align-middle rounded-full overflow-hidden, with inline style width: clamp(48px, 10vw, ${size}px), height: clamp(48px, 10vw, ${size}px), flexShrink: 0.
Inner <video> with autoPlay, loop, muted, playsInline, src={src}, style width:100%; height:100%; objectFit:cover; display:block.
Use useRef + useEffect to call videoRef.current.play().catch(() => {}) on mount to ensure autoplay works.
Video URLs (use exactly):


const VIDEO_HUMAN = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260424_090051_64ea5059-da6b-492b-a171-aa7ecc767dc3.mp4';
const VIDEO_AI = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260424_093237_ff0ddc63-c068-4e29-96da-fdd0e40af133.mp4';
Subheading paragraph:

Classes: mt-4 max-w-xl text-center px-2.
Inline style: fontSize: clamp(0.95rem, 2.2vw, 1.2rem), color: #888, lineHeight: 1.4, fontWeight: 400.
Text: We help you map the talent you need, track the talent you have, and close your gaps to thrive in a GenAI world.
CTA button:

Classes: mt-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0px_6px_32px_8px_rgba(39,243,169,0.22)] active:scale-[0.98].
Inline style: padding: 12px 28px, background: #000, boxShadow: 0px 6px 24px 6px rgba(39, 243, 169, 0.15), borderRadius: 8, outline: 1px solid #30463C, outlineOffset: -1, border: none, cursor: pointer, display: inline-flex, alignItems: center, justifyContent: center, gap: 10.
Inner <span> with color: #fff, fontSize: 14, fontWeight: 400, text Join The Movement!.
Animations / micro-interactions:

Button: 300ms transition; on hover scales to 1.03 and gains a stronger green glow 0px 6px 32px 8px rgba(39,243,169,0.22); on active scales to 0.98.
Video icons: silently autoplay, loop, muted; play() called in useEffect to defeat autoplay restrictions.
Imports:


import { useRef, useEffect } from 'react';
Export the component as default. No external dependencies beyond React and Tailwind. Do not use purple/indigo. The accent green throughout is #27F3A9 (used in the button glow).