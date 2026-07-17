# New Era Bold Hero

**ID:** New Era Bold Hero  
**Category:** Agency  
**Type:** hero  

---

Create a responsive, full-screen Hero section using React and Tailwind CSS with the following specifications:

1. Layout & Positioning:

Set the container to at least screen height (min-h-screen) with a dark blue fallback background (#21346e).
Align the main content to the top of the page (not centered), adding significant top padding (approx pt-32 on mobile, pt-48 on desktop).
Use a standard container with horizontal padding.

2. Background Video:

Implement a full-screen, absolute-positioned background video.
The video must be set to autoPlay, loop, muted, and playsInline.
Use object-cover to ensure it fills the screen without distortion.
Video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260206_044704_dd33cb15-c23f-4cfc-aa09-a0465d4dcb54.mp4

3. Typography (Main Headline):

Font Family: Rubik (sans-serif).
Style: Bold, Uppercase, White text.
Layout: Display the text on three separate lines:
Line 1: "NEW ERA"
Line 2: "OF DESIGN"
Line 3: "STARTS NOW"
Sizing: Large and responsive (text-6xl mobile, text-8xl tablet, text-[100px] desktop).
Spacing: Very tight line height (0.98) and negative letter spacing (-2px to -4px).

4. Custom CTA Button:

Place a button below the headline with a fixed size of 184px wide by 65px high.
Interaction: Add a hover effect that slightly scales up (scale-105) and an active press effect (scale-95).
Background: Instead of a standard CSS background, use an SVG element that fills the button container (absolute inset-0). Use a custom path for the shape filled with white.
Text: Centered label "GET STARTED".
Text Style: Rubik, Bold, Uppercase, 20px size, dark text color (#161a20).