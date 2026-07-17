# Nexus IT Solutions

**ID:** nexus-hero  
**Category:** Hero Section  
**Type:** hero  

---

Create a full-viewport (100vh) hero landing page using React, Tailwind CSS, and TypeScript. Load Google Fonts: Akshar (400–700) and Inter (400–700) via <link> in index.html.

Structure: The page is a single div with min-h-screen bg-background containing a h-screen flex flex-col relative overflow-hidden wrapper. Inside: Background video absolutely positioned behind everything, Content wrapper (relative z-10 flex flex-col flex-1) containing Navbar, Hero content (flex-1, vertically centered), Trusted By section.

Background Video: <video className="absolute inset-0 w-full h-full object-fill" src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_065810_0098b193-498c-4d26-9abd-5db8bf4fb479.mp4" autoPlay muted loop playsInline /> object-fill stretches to fill the full viewport — no cropping, no overlay.

Navbar: Container flex items-center justify-between px-8 py-5 max-w-7xl mx-auto w-full gap-12. Logo: <NEXUS> styled font-akshar text-xl font-medium tracking-wider text-foreground. Nav links: HOME, SOLUTIONS, OUR TEAM, NEWS — text-lg tracking-[0.05em] text-muted-foreground hover:text-foreground font-akshar gap-8. CTA: "GET IN TOUCH" border border-foreground/10 text-muted-foreground hover:bg-muted-foreground hover:text-background uppercase tracking-[0.05em] text-xl rounded-none font-akshar.

Hero Content: H1 "We drive companies beyond their biggest obstacles" text-4xl md:text-5xl lg:text-6xl font-normal leading-tight max-w-3xl letterSpacing -0.06em heading-gradient. Subheading: "Accelerating Growth through IT Strategy, Digital Innovation, and Custom-Built Technology Platforms" mt-6 text-muted-foreground text-lg md:text-xl max-w-xl font-akshar. CTA: NotchedButton "START YOUR JOURNEY" with corner decorations (8 spans, 10px long x 1px, inset 4px from edges).

Trusted By: "Trusted by leading innovators worldwide" uppercase tracking-[0.12em]. Brand names: FedEx, amazon, McKESSON, pitney bowes — text-lg md:text-2xl font-bold tracking-wide opacity-40.

CSS tokens: --background: 0 0% 100%; --foreground: 220 20% 20%; --primary: 212 72% 18%; --muted-foreground: 220 10% 50%; --heading-gradient-from: 212 72% 10%; --heading-gradient-to: 205 65% 48%. heading-gradient class uses linear-gradient with background-clip text.