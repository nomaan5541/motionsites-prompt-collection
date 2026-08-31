Build a React functional component using Tailwind CSS that replicates a cinematic, glassmorphic social media post or digital portfolio hero section.
Structure & Layout:
The main wrapper should take up the full screen (min-h-screen) with a solid black background (bg-[#000000]), centering its contents using flexbox.
Inside, create a fixed aspect ratio card that is exactly 600px wide and 800px high using inline styles. It should have a black background, shadow-2xl, be relative, and have overflow-hidden.
Background Media:
Place a full-cover background <video> element filling the card (absolute inset-0 z-0 h-full w-full object-cover opacity-100).
The video source must strictly use this exact URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_212252_7d25a6d2-cf7f-465c-9bd1-a1496112806e.mp4
Make sure the video is configured exactly with autoPlay, loop, muted, and playsInline. Do not put any dark opacity gradient overlays on top of the video directly.
SVG Film Noise Overlay:
Add an absolute layer over the video to create a grainy film effect.
Set the classes to absolute inset-0 z-50 opacity-[0.06] mix-blend-overlay pointer-events-none.
Use this exact inline style for the background image to dynamically generate the CSS noise: backgroundImage: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")
Fonts Configuration (Global CSS):
Import the "Inter" font (weights 100 to 500) from Google Fonts.
Import the "Didot" font from this specific online web font URL: https://db.onlinewebfonts.com/c/251039e6849ad977a8bfc40b564dce89?family=Didot
Configure Tailwind theme variables via @theme: set --font-serif to Didot (with fallbacks), and --font-sans to Inter.
Typography & Content Container:
Create a relative z-20 content container taking h-full w-full with padding px-12 py-10, using a flex column layout.
Top Left Text: "Work fast. Live slow." styled with text-[22px], font-serif, tracking-normal, text-[#f0f0f0], and drop-shadow-md.
Add a flex-1 spacer div to push the remaining content layout to the bottom.
Bottom Content Block:
Wrap in a flex flex-col mb-12 container.
Title: "Create your digital reality." Styled with text-[38px] leading-tight font-serif text-white mb-2 tracking-normal drop-shadow-md whitespace-nowrap ml-[-0.3px].
Subtitle: "From nothing to everything, let's bring your vision to life." Styled with text-[15.5px] font-sans text-[#a3a3a3] mb-8 font-extralight tracking-wide.
The Glassmorphic Button:
Create a "Send a message" button inside a div wrapper.
Give the button the classes: group relative px-6 py-[10px] rounded-full font-sans text-[14px] text-[#e0e0e0] font-light transition-all duration-300 overflow-hidden backdrop-blur-md
Give the button the following complex inline styles:
background: 'rgba(255, 255, 255, 0.03)'
boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 140, 70, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 -1px 2px rgba(0, 0, 0, 0.8)'
Inside the button, include an absolute top highlight effect: absolute inset-x-0 top-0 h-[20px] bg-gradient-to-b from-[#ff8c46]/10 to-transparent pointer-events-none z-0 rounded-t-full
Add an inner hover radial glow layer inside the button (opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0) with the inline style: background: 'radial-gradient(circle at center, rgba(255, 120, 50, 0.1) 0%, transparent 70%)'
The actual text inside the button should be wrapped in a span taking precedence (relative z-10 text-[14px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] tracking-wide).
Footer Layout:
Set up a flex row with justify-between items-end w-full.
Use classes: text-[15px] font-sans text-[#7a7a7a] font-light tracking-wide translate-y-[10px].
Left side: "your.name" with a hover:text-white transition-colors cursor-pointer.
Right side: A flex container with items-center gap-3. Include "web", "product", "brand" (all having hover:text-white transition-colors cursor-default) separated by diamond layout dividers "✦" styled with text-[11px] text-[#555] opacity-80 mt-[-2px].