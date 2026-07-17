# Nickel Payments

**ID:** nickel-hero  
**Category:** SaaS  
**Type:** hero  

---

Create a landing page hero section with a floating navbar. Use React, Tailwind CSS, and shadcn/ui.

Design System (index.css):

Background: 249 18% 95% (warm off-white)

Foreground: 240 10% 10% (near-black)

Primary: 24 90% 55% (warm orange)

Primary foreground: 0 0% 100% (white)

Secondary: 0 0% 100% (white)

Secondary foreground: 240 10% 10%

Muted foreground: 240 5% 46%

Border: 240 10% 88%

Nav background: 0 0% 100% (white)

Font family: Inter, system-ui, sans-serif

Navbar:

Full-width outer wrapper with px-6 lg:px-8 pt-4

Inner <nav> is max-w-7xl mx-auto, white background (bg-nav), rounded-xl, shadow-sm

Inner padding: px-8 py-5, flex row, items centered, space-between

Logo (left): Link with text-2xl font-bold tracking-tight. Icon is a w-7 h-7 black circle (bg-foreground rounded-full) containing a w-3 h-3 white rounded square (bg-white rounded-sm). Text: "nickel"

Center links (hidden on mobile, md:flex gap-6): "Products" and "Company" are buttons with a ChevronDown icon (h-3.5 w-3.5). "Pricing" and "For Accountants" are plain links. All use text-base font-medium text-foreground/80 hover:text-foreground transition-colors

Right side: "Log in" link (same style as nav links, hidden on sm down). "Get started" button using a hero variant with default size

Hero Button Variants (in button.tsx):

hero: bg-gradient-to-b from-[hsl(24,100%,72%)] to-[hsl(18,98%,53%)] text-primary-foreground hover:opacity-90 rounded-lg text-lg font-medium

hero-outline: bg-secondary text-secondary-foreground hover:bg-muted rounded-lg text-lg font-medium

Size xl: h-14 px-10 py-4

Hero Section:

<section> with bg-background min-h-[calc(100vh-4rem)] relative overflow-hidden

Content container: max-w-7xl mx-auto px-6 lg:px-8 min-h-[calc(100vh-4rem)] flex items-center w-full relative z-10

Text block: max-w-xl

H1: text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-[1.05] — "Unlock growth with every payment"

Paragraph: mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed — "Run payments, extend net terms and automate collections compliance."

Buttons row: mt-10 flex flex-wrap gap-4 — "Get started" (variant="hero" size="xl") and "Talk to a human" (variant="hero-outline" size="xl")

Video (right side): Absolutely positioned absolute top-0 right-0 w-[55%] h-full hidden lg:block. Video element: w-full h-full object-cover rounded-bl-2xl, autoPlay, loop, muted, playsInline. Source URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_192508_4eecde4c-f835-4f4b-b255-eafd1156da99.mp4

Page layout: min-h-screen bg-background, renders <Navbar /> then <HeroSection />