# AKOR Security

**ID:** akor-security-landing  
**Category:** Landing Page  
**Type:** landing-page  

---

Create a dark-themed single-page landing site for "AKOR — Intelligent Security Systems" using React, Tailwind CSS, and the Sora font (Google Fonts: Sora:wght@300;400;500;600;700).

Design system (CSS custom properties, HSL):
--background: 0 0% 10%, --foreground: 0 0% 96%
--primary: 119 99% 46% (vivid green), --primary-foreground: 0 0% 4%
--muted-foreground: 0 0% 60%, --border: 0 0% 20%
--hero-bg: 0 0% 8%, --nav-button: 0 0% 18%
Body: bg-background text-foreground font-sora antialiased
Global animation: animate-fade-up — a keyframe that fades in from opacity:0 translateY(16px) to opacity:1 translateY(0) over ~600ms ease-out, with animation-fill-mode: forwards.

Section 1 — Fixed Navbar:
Fixed top, full-width, z-50, horizontal flex, px-8 lg:px-16 py-5.
Left: A small 32×32 rounded green (bg-primary) icon box with an inline SVG hexagon, plus the text "AKOR" in text-xl font-semibold tracking-tight text-foreground.
Center (hidden on mobile): Nav links — "Services", "About Us", "Projects", "Team", "Contacts" — styled text-sm text-muted-foreground uppercase tracking-widest, hover → text-foreground.
Right (hidden on mobile): "Get Quote" button with bg-nav-button text-foreground hover:bg-nav-button/80 active:scale-[0.97], rounded-lg uppercase text-xs tracking-widest px-6 h-11.

Section 2 — Hero (full viewport):
min-h-screen flex flex-col justify-end bg-hero-bg overflow-hidden.
Background: an autoplaying, looping, muted <video> covering the entire section via absolute inset-0 w-full h-full object-cover. Video URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260322_013248_a74099a8-be2b-4164-a823-eddd5e149fa1.mp4
Content sits at the bottom-left: relative z-10 px-8 lg:px-16 pb-20 lg:pb-28 pt-32.
H1: "Intelligent\nSecurity Systems" (line break after "Intelligent"). Styled text-5xl sm:text-6xl lg:text-[5.5rem] font-light leading-[0.95] tracking-tight text-foreground. Animates in with animate-fade-up delay 0.2s.
Subtext: "Innovative security, automation, and AI solutions for businesses and smart cities". Styled text-muted-foreground text-base lg:text-lg max-w-xl mb-10. Delay 0.45s.
Two CTAs side by side (flex flex-wrap gap-8, delay 0.65s):
"Get Consultation" — green button: bg-primary text-primary-foreground font-semibold hover:bg-primary/90 active:scale-[0.97] rounded-lg px-8 uppercase text-xs tracking-widest h-11.
"Learn More" — plain text link: uppercase text-xs tracking-widest text-foreground border-b border-primary pb-1 hover:text-primary transition-colors active:scale-[0.97].

Section 3 — Services (dark foreground background):
bg-foreground (white/light background inverted — since foreground = 0 0% 96%, this section has a near-white bg with dark text via text-background).
Top: label "Services" in text-muted-foreground/60 text-xs uppercase tracking-[0.25em] mb-8, then a full-width 1px divider bg-muted-foreground/20 mb-16.
Two-column layout: flex flex-col lg:flex-row gap-16 lg:gap-24.
Left column (38%): vertically centered heading "Security, automation, and AI, helping businesses enhance efficiency" in text-3xl sm:text-4xl leading-[1.15] tracking-tight text-background font-normal. Below it, a "Get Consultation" green button (same style as hero).
Right column (62%): 4 service cards in a 2×2 grid (grid-cols-1 sm:grid-cols-2), split into two rows with a horizontal 1px divider between them. Each card has pl-8 border-l border-border/20 and contains:
A 64×64 icon image (object-contain)
A number label in text-muted-foreground/40 text-xs
Title in text-xl font-medium leading-tight text-background whitespace-pre-line
Description in text-muted-foreground/50 text-sm leading-relaxed
Card data:
Card 1: "AI-Driven\nSecurity Solutions" — icon: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260322_015134_c80a3c98-609e-4526-b79e-94dc96cd34e8.png
Card 2: "Smart Building\nAutomation" — icon: https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260322_014934_6e2804d7-d219-461d-98d5-36140fc90c4c.png&w=1280&q=85
Card 3: "AI Consulting\nand Integration" — icon: https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260322_014626_97cccc38-534a-4c9d-a801-68a449da9d0c.png&w=1920&q=85
Card 4: "Training\nand Support" — icon: https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260322_014849_570d4eeb-9613-4b19-a084-46c7a2665243.png&w=1280&q=85

Section 4 — About Us (black background):
bg-black pt-12 lg:pt-16 pb-24 lg:pb-32 px-8 lg:px-16.
Top: "About Us" label + divider (same style as Services).
Two-column layout (flex-col lg:flex-row gap-12 lg:gap-0 items-stretch):
Left (45%): an autoplaying, looping, muted video: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260322_011532_86f9b93a-2ffc-42fd-8735-12a4c55ab536.mp4, styled w-full h-auto rounded-sm.
Vertical 1px divider between columns (hidden on mobile): w-px bg-muted-foreground/20 mx-10 mt-8.
Right (flex-1, min-h-[500px] lg:min-h-[600px], flex flex-col justify-between):
Top: heading "AI-powered security, automation for businesses and smart infrastructures" in text-3xl sm:text-4xl leading-[1.15] tracking-tight text-foreground font-normal.
Bottom (mt-auto): paragraph about mission + "Get Quote" green button (px-10).