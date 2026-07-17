# Apex SaaS

**ID:** apex-saas-hero  
**Category:** SaaS  
**Type:** hero  

---

Build a dark SaaS landing page with three sections: a floating glassmorphic navbar, a hero section, and a social proof section with a background video. Use React + Tailwind CSS + TypeScript.

Font: Install @fontsource/geist-sans (weights 400, 500, 600, 700). Set body font to 'Geist Sans', 'Inter', system-ui, sans-serif.

Color System (HSL, CSS variables in :root):

--background: 260 87% 3%
--foreground: 40 6% 95%
--primary: 262 83% 58%
--primary-foreground: 0 0% 100%
--secondary: 240 4% 16%
--secondary-foreground: 40 6% 95%
--muted: 240 4% 16%
--muted-foreground: 240 5% 65%
--border: 240 4% 20%
--hero-heading: 40 10% 96%
--hero-sub: 40 6% 82%
--card: 240 6% 9%
--ring: 262 83% 58%
--radius: 0.75rem
Register hero.heading and hero.sub as Tailwind colors mapped to these variables.

Liquid Glass Utility Class (.liquid-glass):

.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}
.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

Section 1 — Navbar: A horizontally centered nav with py-5. Inside, a liquid-glass rounded-3xl p-2 container, max-w-[850px] w-full, using flex items-center justify-between gap-6. Contains:

Logo (left): A w-7 h-7 rounded-lg div with bg-gradient-to-b from-secondary to-muted border border-border, containing an inline SVG (circle + 4 crosshair lines, white strokes). Next to it, the text "APEX" styled text-foreground text-xl font-semibold tracking-tight.
Nav links (center): Four buttons — "Features" (with ChevronDown icon), "Solutions", "Plans", "Learning" (with ChevronDown icon). Each: px-3 py-2 text-foreground/90 text-base hover:text-foreground transition-colors.
CTA (right): A rounded-xl px-4 py-2 button using bg-primary text-primary-foreground, size sm, text "Sign Up".

Section 2 — Hero: A section with bg-background relative overflow-hidden. Contains the Navbar, then a flex flex-col items-center pt-20 px-4 div with:

Badge: A liquid-glass rounded-full pl-3 pr-1 py-1 flex items-center gap-2 mb-8 pill. Left text: "Nova+ Launched!" (text-foreground text-xs). Right: a nested rounded-full bg-white/5 px-3 py-0.5 span with "Explore" + a ChevronRight icon (w-3 h-3).
Heading: h1 with text-hero-heading text-center text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight max-w-5xl. Text: "Accelerate Your" + br + "Revenue Growth Now".
Subheading: p with text-hero-sub text-center text-lg leading-8 max-w-md mt-4 opacity-80. Text: "Drive your funnel forward with clever workflows, analytics, and seamless lead management."
CTA Buttons: flex items-center gap-4 mt-8. Two buttons:
Primary: bg-primary text-primary-foreground rounded-full px-6 py-3 text-base font-medium — "Start Free Right Now"
Secondary: liquid-glass text-foreground rounded-full px-6 py-3 text-base font-normal hover:bg-white/5 — "Schedule a Consult"

Section 3 — Social Proof: A section with relative w-full overflow-hidden. Contains:

Background Video: <video> element: autoPlay muted playsInline, absolute inset-0 w-full h-full object-cover, initial style={{ opacity: 0 }}. Source URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260308_114720_3dabeb9e-2c39-4907-b747-bc3544e2d5b7.mp4
Gradient overlay: absolute inset-0 bg-gradient-to-b from-background via-transparent to-background.
Content: relative z-10 flex flex-col items-center pt-16 pb-24 px-4 gap-20:
Stats row: flex items-center gap-8 flex-wrap justify-center. Three items: Clock/"3-5 week turnround", DollarSign/"Upfront cost clarity", ShieldCheck/"Full refund assurance". Each: flex items-center gap-3 text-foreground/80 text-sm with icon in a liquid-glass w-8 h-8 rounded-lg container, icon w-4 h-4 text-foreground/70, label font-medium.
Spacer: div for video visibility.
Logo Marquee: w-full max-w-5xl. Layout: flex items-center gap-12. Left: text-foreground/50 text-sm paragraph "Relied on by brands / across the globe" (with br), whitespace-nowrap shrink-0. Right: relative overflow-hidden flex-1 div containing a flex animate-marquee gap-16 items-center div. Logos: Vortex, Nimbus, Prysma, Cirrus, Kynder, Halcyn — duplicated for seamless loop. Each logo: shrink-0 flex items-center gap-2 with a liquid-glass w-6 h-6 rounded-lg icon showing the first letter (text-xs font-bold text-foreground/70), and the name (text-base font-semibold whitespace-nowrap text-foreground).

Marquee Animation (Tailwind config):

keyframes: {
  marquee: {
    "0%": { transform: "translateX(0%)" },
    "100%": { transform: "translateX(-50%)" },
  },
},
animation: {
  marquee: "marquee 20s linear infinite",
},

Icons: All from lucide-react — ChevronRight, ChevronDown, Clock, DollarSign, ShieldCheck.