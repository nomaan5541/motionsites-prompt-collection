Create a React + TypeScript component named HeroSection in src/components/HeroSection.tsx using Tailwind CSS and the hls.js npm package (install it: npm install hls.js).

Layout & Background:

A <section> that is 100vh tall, position: relative, overflow: hidden, flex column centered, with background: #000.
A fullscreen HLS video background using this Mux stream URL: 
https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8

The video is <video autoPlay loop muted playsInline> with classes absolute inset-0 w-full h-full object-cover and zIndex: 0. Play it through hls.js: if Hls.isSupported(), create an Hls({ autoStartLoad: true }) instance, loadSource, attachMedia, and play on MANIFEST_PARSED. Else, fall back to native application/vnd.apple.mpegurl support. Clean up the Hls instance on unmount. No overlay over the video — full opacity.
Content container:

A div with classes relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto and inline style marginTop: 380 (pushes content down 380px).
Headline (<h1>):

Font: 'YDYoonche L', 'YDYoonche M', sans-serif
fontSize: clamp(2.2rem, 7vw, 6.5rem), color: #fff, fontWeight: 300, letterSpacing: -0.01em, lineHeight: 1.1, className="leading-tight".
Three lines:
"The vision" — gradient text using background: linear-gradient(90deg, #666666 0%, #d0d0d0 50%, #666666 100%) with WebkitBackgroundClip: text, WebkitTextFillColor: transparent, backgroundClip: text, display: block, lineHeight: 1.1, marginBottom: -0.22em.
"of engineering" — same gradient styling as line 1.
A flex line flex items-center justify-center gap-3 flex-wrap with white text containing in order:
<span style={{color:'#999'}}>is</span>
A circular video icon (see below) playing the human clip
<span>human</span>
<span style={{color:'#999', position:'relative', top:'0.15em', marginLeft:'0.25em'}}>+</span>
A circular video icon playing the AI clip
<span>AI</span>
VideoIcon component:

Outer <span> with classes inline-block align-middle rounded-full overflow-hidden, sized via inline style width/height: clamp(48px, 10vw, ${size}px) (default size=72, but the hero passes size={110} for both icons), flexShrink: 0.
Inner <video autoPlay loop muted playsInline> with width: 100%, height: 100%, objectFit: cover, display: block. Call videoRef.current.play().catch(() => {}) in a useEffect.
Two CloudFront MP4 sources:
VIDEO_HUMAN: 
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260424_090051_64ea5059-da6b-492b-a171-aa7ecc767dc3.mp4

VIDEO_AI: 
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260424_093237_ff0ddc63-c068-4e29-96da-fdd0e40af133.mp4

Subheading (<p>):

Classes mt-4 max-w-xl text-center px-2.
fontSize: clamp(0.95rem, 2.2vw, 1.2rem), color: #ccc, lineHeight: 1.4, fontWeight: 400.
Text: "We help you map the talent you need, track the talent you have, and close your gaps to thrive in a GenAI world."
CTA Button:

Classes: mt-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0px_6px_32px_8px_rgba(39,243,169,0.22)] active:scale-[0.98]
Inline style: padding: '12px 28px', background: '#000', boxShadow: '0px 6px 24px 6px rgba(39, 243, 169, 0.15)', borderRadius: 8, outline: '1px solid #30463C', outlineOffset: -1, border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10.
Inner <span> with color: '#fff', fontSize: 14, fontWeight: 400, text: "Join The Movement!".
Animations / interactions:

All three videos auto-play, loop, muted, inline.
Button has a 300ms transition: scales to 1.03 and gains a brighter green glow on hover, scales to 0.98 on active.
Fonts:

The headline expects 'YDYoonche L' / 'YDYoonche M' to be loaded globally (e.g., via index.css or an external font provider). It falls back to sans-serif.
