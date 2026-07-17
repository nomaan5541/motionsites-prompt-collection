# Synapse Dark Hero

**ID:** 7  
**Category:** SaaS  
**Type:** hero  

---

Build a high-fidelity, dark-themed Hero Section using React, Tailwind CSS, and Framer Motion. The background should be solid black (#000000).

1. Structure & Layout:

Navbar: Fixed at the top with a blurred glass effect.

Logo: Text "Synapse" (font-medium, tracking-tight, white).

Links: Features (active state with gradient border), Insights, About, Case Studies (strikethrough style), Contact.

CTA: "Get Started for Free" (White/Gray gradient button).

Hero Content: Centered text container (z-10, relative).

Badges: Row of 3 glass-effect badges "Integrated with" + Icon.

Headline: "Where Innovation Meets Execution" (Large ~80px font, tight tracking, fade-in animation).

Subtext: 2-line description about testing and deployment.

Buttons:

"Get Started for Free" (Solid Black background, White border).

"Let's Get Connected" (Transparent glass style).

Logo Marquee: A static row of grayscale, 40% opacity logos (use placeholder SVGs) at the bottom.

2. Background Video (Crucial):

Source: https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8

Implementation: Create a memoized VideoPlayer component using hls.js to handle the .m3u8 stream. Ensure proper cleanup on unmount.

Styling: 100% Opacity (no dark overlays), playing in loop/muted/autoplay.

Positioning: The video container should have a height of 80vh and be positioned absolute bottom-[35vh], sitting effectively "floating" behind the text content but pushed up from the bottom edge.

3. Animations:

Use motion/react to apply staggered fade-in-up animations to the badges, headline, subtitle, and buttons on load.