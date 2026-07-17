# Terra Geo Map

**ID:** terra-hero  
**Category:** SaaS  
**Type:** hero  

---

Create a hero section for a geo-mapping SaaS landing page called "Terra" with these exact specifications:

Font: Inter (weights: 400, 500, 700)

Primary blue color: #2E7DF3 (HSL: 217 90% 57%)

Navigation bar:
- Logo: 32px circle with gradient from-primary to-blue-400, containing 🌍 emoji, followed by "Terra" in bold
- Desktop nav (visible at lg: breakpoint and up): "Product", "Solutions", "Resources" with dropdown chevron SVG arrows, "Examples", "Pricing" — all in muted-foreground, hover to foreground
- Right side: "Login" button (rounded-full, border, ghost style) and "Sign Up" button (rounded-full, primary bg)
- Mobile/tablet (< lg): Hamburger menu using lucide-react Menu/X icons, toggling a dropdown with all nav items and buttons

Hero content (centered, flex column):

1. Product Hunt badge — mt-10 top spacing, rounded-lg border with border-red-200 bg-red-50/50, contains 🏆 emoji, "PRODUCT HUNT" label (10px, uppercase, tracking-wider, red-400) and "#1 Product of the Day" (14px, semibold, red-500)

2. Heading — font-medium, letter-spacing: -0.2em (inline style), sizes text-5xl md:text-7xl:
   - Line 1: "The ultimate geo" in primary color
   - Line 2: "map " in primary color, followed by "builder" with:
     - Gradient text: background-image: linear-gradient(135deg, #767676 0%, #D3D3D3 100%) with bg-clip-text text-transparent
     - Dotted selection box SVG absolutely positioned around the word (-inset-3 md:-inset-4), rotated -0.5deg, containing:
       - An irregular quadrilateral path: M5 5 L195 5 L195 88 L5 72 Z (bottom-right corner drops lower than bottom-left) — stroke #B0B0B0, strokeWidth 1.2, strokeDasharray 6 4
       - 4 corner dots: circles at (5,5), (195,5), (5,72), (195,88) — radius 3.5, fill #B0B0B0
       - 4 midpoint dots: circles at (100,5), (100,80), (5,38.5), (195,46.5) — radius 3, fill #B0B0B0
       - SVG viewBox: 0 0 200 95, preserveAspectRatio="none"

3. Subtext — mt-8, muted-foreground, text-base md:text-lg, max-w-lg, centered:
   Terra is how teams build maps and
   run spatial intelligence together.
   Design, collaborate, share — all in one place.

4. CTA button — mt-8, px-10 py-4, primary bg, primary-foreground text, font-semibold, rounded-full, shadow-lg shadow-primary/20

5. Video — mt-12, max-w-5xl, rounded-xl overflow-hidden, no drop shadow:
   src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_092310_5c71bab5-63cd-4a95-9390-cc6a1189d553.mp4"
   muted autoPlay loop playsInline

Layout: min-h-screen flex flex-col bg-background, hero content area is flex-1 flex flex-col items-center justify-center px-4 pt-8