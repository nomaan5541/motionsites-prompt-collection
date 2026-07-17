# HR SaaS Hero

**ID:** 16  
**Category:** SaaS  
**Type:** hero  

---

Create a minimalist, high-end React hero section using Tailwind CSS v4 and the Motion library.

Layout & Spacing:

The section should have a min-h-screen height and be centered.

Apply a heavy top padding of exactly 290px to the main content container to create an editorial, spacious feel.

The content container should have a max-w-[1200px] and a vertical gap of 32px between elements.

Background:

Use this background video: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085640_276ea93b-d7da-4418-a09b-2aa5b490e838.mp4.

Critical: The video must be vertically flipped using scaleY(-1) and set to object-cover.

Apply a white gradient overlay on top of the video: from-[26.416%] from-[rgba(255,255,255,0)] to-[66.943%] to-white to seamlessly blend the video into the background.

Typography (Geist & Instrument Serif):

Main Heading: Use the 'Geist' font, medium weight, tracking -0.04em.

Text Content: 'Simple [management] for your remote team'.

Sizes: The main heading should be 80px (desktop), while the word 'management' should be in 'Instrument Serif' italic at 100px.

Description: Geist font, 18px, 80% opacity, slate color (#373a46), max-width 554px.

Interactive Components:

Email Navbar: Create a rounded (40px) input container with bg-[#fcfcfc], a thin border, and a soft shadow (0px 10px 40px 5px rgba(194,194,194,0.25)).

CTA Button: A dark, multi-layered gradient button ('Create Free Account') with a complex inner shadow for a high-gloss tactile effect: shadow-[inset_-4px_-6px_25px_0px_rgba(201,201,201,0.08),inset_4px_4px_10px_0px_rgba(29,29,29,0.24)].

Social Proof: Below the input, add a '1,020+ Reviews' badge with a row of star/brand icons.

Animations:

Use Motion to staggered 'fade and slide up' the heading, description, and the email input block for a smooth entrance.

Key Technical Specs for Implementation:

Video Class: className="w-full h-full object-cover [transform:scaleY(-1)]"

Gradient Class: className="absolute inset-0 bg-gradient-to-b from-[26.416%] from-[rgba(255,255,255,0)] to-[66.943%] to-white"

Button Shadow: shadow-[inset_-4px_-6px_25px_0px_rgba(201,201,201,0.08),inset_4px_4px_10px_0px_rgba(29,29,29,0.24)]