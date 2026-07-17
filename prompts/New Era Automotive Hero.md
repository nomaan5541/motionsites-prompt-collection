# New Era Automotive Hero

**ID:** 8  
**Category:** Automotive  
**Type:** hero  

---

Build a full-screen automotive hero section for a car dealership/marketplace website. Use Google Fonts: Inter (400, 500, 600) and Bebas Neue.

Background:

Full-viewport-height section (min 600px, max 965px) with a dark (#010101) fallback background.

Looping, muted, autoplaying background video covering the entire section using object-cover. Use this video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260213_051817_c7d8ccc6-bfaa-417c-8474-e5cefeea26b4.mp4

Add a subtle top gradient overlay (260px tall, from black/30 to transparent) and a matching bottom gradient overlay (260px tall, from black/30 to transparent) for text readability.

Large decorative text:

Centered horizontally, positioned about 15% from the top. Display the words "NEW ERA" as very large, bold, all-caps decorative typography spanning about 75% of the width (max 1073px).

Fill the text with a vertical linear gradient: white at 83% opacity at the top, fading to white at 12% opacity at the bottom. This text should be behind the content but above the video.

Top navbar (pinned to top, full width, horizontal padding 80px on desktop):

Left: A small abstract pinwheel/spinner logo icon (28x28, white) next to the brand name "Logoipsum" in white, Inter font, ~24px. Hide the brand name on small screens.

Center: Navigation links — "Home", "Shop", "Blog", "About Us", "Contact Us" — in Inter, light gray (#EEEFF2), with -0.32px letter-spacing. Hidden on screens below lg breakpoint.

Right: A "Sign In" text link in white (#FBFBFD), and a white rounded (8px) "Cart" button (48px tall) with a small shopping cart icon (18x18, dark #272835) and "Cart" label in Inter medium, dark text (#272835). The button has a subtle box-shadow. Hide "Sign In" on small screens.

Bottom CTA area (pinned to bottom of the section, same horizontal padding):

Left side: A paragraph in Inter, white, ~20px/30px line-height, max-width 414px: "Choose from thousands of certified cars you can trust, transparently priced, because buying a car should feel exciting." Next to it, a white rounded (8px) "Shop Now" button (48px tall) with an arrow-right icon (18x18, dark), Inter medium text, dark text (#272835), with a light border (#EEEFF2) and subtle shadow. On small screens, stack the paragraph and button vertically.

Right side: A large tagline in Bebas Neue, white, 64px on desktop (48px–60px on smaller screens), line-height 1, max-width 466px: "Find the perfect car that fits our journey".

On large screens, the left and right sides sit in a single row aligned to the bottom. On smaller screens they stack vertically.

Make the entire section fully responsive. Use Tailwind CSS and React.