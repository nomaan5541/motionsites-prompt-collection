# Guardnet

**ID:** guardnet-landing  
**Category:** Landing Page  
**Type:** landing-page  

---

Build a single-page React + TypeScript + Vite + Tailwind CSS landing page for a security/privacy brand called guardnet. Use lucide-react only if needed; do not add other UI libraries. Place everything in src/App.tsx and src/index.css. Use the Bolt Database only if persistence is actually needed (this page needs none).

Global Styling
src/index.css:

Import the font: @import url(https://db.onlinewebfonts.com/c/e55e9079ee863276569c8a68d776ef04?family=Futura+Md+BT+Medium);
Apply Tailwind base/components/utilities.
Set html, body, #root { height: 100% }.
body uses font-family: 'Futura Md BT Medium', system-ui, -apple-system, sans-serif;, background-color: #000, color: #fff, antialiased font smoothing.
Add a .hero-title class with letter-spacing: -0.04em; line-height: 0.95;.
Tailwind config: extend fontFamily.sans to ['"Readex Pro"', 'system-ui', 'sans-serif'].

Root App layout: min-h-screen bg-black text-white flex flex-col items-center overflow-x-hidden w-full. Hero renders full-bleed; the remaining sections wrap in a w-full max-w-[1400px] container.

1. LogoMark Component
Inline SVG (viewBox 0 0 256 256, white fill) with path:
M 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 128 L 64 128 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z M 128 64 L 128 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 Z M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 128 0 L 192 0 Z

2. Navbar (absolute, over hero)
absolute top-0 left-0 right-0 z-20 px-3 sm:px-6 md:px-10 pt-4 sm:pt-6, nav is flex items-center justify-between.

Left pill: bg-neutral-900/90 backdrop-blur rounded-full pl-3 pr-4 sm:pl-4 sm:pr-6 py-2.5 sm:py-3, contains LogoMark (h-4/5) + text "guardnet" (text-white text-xs sm:text-sm).
Center pill (hidden on mobile, hidden md:flex): bg-neutral-900/90 backdrop-blur rounded-full px-3 py-2, links array ['products','offerings','mission','contact'], each text-neutral-300 hover:text-white text-sm px-5 py-2 rounded-full.
Right button: bg-white text-black text-xs sm:text-sm rounded-full px-4 sm:px-6 py-2.5 sm:py-3 hover:bg-neutral-200 with label "start today".
3. Hero Section
section: relative min-h-screen h-screen w-full bg-black overflow-hidden.

Background video (absolute, inset-0 w-full h-full object-cover, autoPlay loop muted playsInline):
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260421_074215_f4339e1c-0b1a-4f60-98b2-90e3d7840cb7.mp4

Inside, inner wrapper relative h-full w-full max-w-[1320px] mx-auto.

Three massive h1.hero-title words (text-white font-medium text-[24vw] md:text-[18vw]), absolutely positioned:

"shelter" — left-3 sm:left-4 md:left-10 top-[20%] sm:top-[18%]
"user" — right-3 sm:right-4 md:right-10 top-[36%] sm:top-[38%]
"info" — left-[10%] sm:left-[18%] md:left-[28%] top-[56%] sm:top-[58%]
Paragraph under/between words: absolute left-4 sm:left-6 md:left-10 top-[48%] sm:top-[46%] max-w-[220px] sm:max-w-[300px] text-[13px] sm:text-[18px] leading-relaxed text-white/90 font-light — copy: "we are holding each file with supreme care, granting user with safety in all place".

Three stat blocks; each has a number text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight, an angled divider hidden md:block h-px w-24 bg-white/40 rotated, and a caption text-[10px] sm:text-xs md:text-sm text-white/70 mt-1 font-light:

Bottom-left: +2.7b / "mb info was concealed" (divider rotated -20deg, on the right).
Top-right: +90k / "ventures run" (divider on left, rotated 20deg).
Bottom-right: +450k / "transfers" (divider on left, rotated -20deg).
Bottom fade: pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black.

4. SecuritySection
section: relative min-h-[600px] h-screen w-full overflow-hidden bg-black.

Background video (same attrs as hero):
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260421_072418_508a7d2e-396d-4f6f-9d42-ec920fcf7755.mp4

Top fade overlay: pointer-events-none absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black to-transparent z-10.

Inner wrapper relative h-full w-full max-w-[1100px] mx-auto.

Floating center pill at top (absolute top-6 sm:top-10 left-1/2 -translate-x-1/2 z-20 w-max max-w-[95vw]): bg-neutral-900/80 backdrop-blur rounded-full p-2 sm:p-3 containing two buttons:

Ghost: text-white/90 text-xs sm:text-sm px-4 sm:px-7 py-2 sm:py-3 rounded-full hover:text-white whitespace-nowrap — "confirm real person".
Gradient: text-black text-xs sm:text-sm px-4 sm:px-7 py-2 sm:py-3 rounded-full with inline style background: linear-gradient(90deg, #FA8453 0%, #F8C9B2 100%) — "run demo".
Two paragraphs (text-[13px] sm:text-[18px] leading-relaxed font-light):

Left: absolute left-4 sm:left-6 md:left-16 top-[62%] sm:top-[56%] max-w-[280px] sm:max-w-[440px] text-white/80 — "shielding users info with premier tech, granting them with safety in all place".
Right: absolute right-4 sm:right-6 md:right-16 top-[26%] sm:top-[34%] max-w-[280px] sm:max-w-[500px] text-white/90 — "By teaming up with a defender service, a business can dramatically improve the safeguard of its important info. This covers applying strong obfuscation protocols, gateway barriers, and observation engines to shield against unauthorized entries, info escapes, and malicious cyberhacks."
5. CompaniesSection
section: relative w-full bg-black px-4 sm:px-6 md:px-10 py-12 sm:py-20.

Grid grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4. Four cards, each relative h-24 sm:h-32 md:h-36 rounded-2xl bg-neutral-950 overflow-hidden flex items-center justify-center. Each card hosts a soft blurred color blob (absolute ... h-40 w-40 rounded-full blur-3xl opacity-30/40) and a centered logo (relative z-10).

Logos (inline SVG h-6 w-6 sm:h-8 sm:w-8 fill white + wordmark text-white text-xl sm:text-3xl font-semibold tracking-tight):

Apex — star path M12 2l2.39 4.84L20 8l-4 3.9L17.28 18 12 15.27 6.72 18 8 11.9 4 8l5.61-1.16L12 2z. Blob: -top-24 -left-24 bg-[#1e3a8a] opacity-40.
forge — path M20.63 8.46l-4.73-2.73-.53.31 5.1 2.94v5.88l-5.1 2.94.53.3 4.73-2.72V8.46zM8.1 6.04l.53.3L3.53 9.28v5.88L8.63 18.1l-.53.3-4.73-2.72V8.46L8.1 6.04zM16.05 14.3v-4.6L12 7.4 7.95 9.7v4.6L12 16.6l4.05-2.3zm-.53-.3L12 16.02l-3.52-2.02v-4.02L12 7.96l3.52 2.02v4.02z. Two blobs: -top-24 -left-24 bg-[#FA8453] opacity-30 and -bottom-24 -right-24 bg-[#F5D547] opacity-25.
Eastern Delta — path M2 4l3 16h3l2-10 2 10h3l3-16h-3l-1.5 10L12 4h-2L8.5 14 7 4H2z, wordmark uses two lines text-lg sm:text-2xl font-semibold leading-tight. Blob: -bottom-24 -left-24 bg-[#F5D547] opacity-30.
Skybank — path M6 2l6 3.75L6 9.5 0 5.75 6 2zm12 0l6 3.75L18 9.5l-6-3.75L18 2zM0 13.25L6 9.5l6 3.75L6 17l-6-3.75zm18-3.75l6 3.75L18 17l-6-3.75 6-3.75zM6 18.25L12 14.5l6 3.75L12 22l-6-3.75z. Blob: top-1/2 -translate-y-1/2 -right-28 h-48 w-48 bg-[#1e3a8a] opacity-40.
Below the grid: mt-16 sm:mt-28 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 md:w-[70%] md:ml-auto:

Paragraph: max-w-md text-[13px] sm:text-[18px] leading-relaxed text-white/70 font-light — "shielding users info with premier tech, granting them with safety in all place".
Gradient-border button: outer relative rounded-full p-[1.5px] with inline style background: linear-gradient(90deg, #FA8453 0%, #F8C9B2 100%); inner block rounded-full bg-black px-8 sm:px-10 py-2.5 sm:py-3 text-white text-sm labeled "Run Demo".
6. BenefitsSection
section: relative w-full bg-black px-4 sm:px-6 md:px-10 py-12 sm:py-20.

Heading: text-white text-3xl sm:text-4xl md:text-5xl font-light text-center mb-12 sm:mb-24 with inline letter-spacing: -0.04em, text "Key Benefits".

Grid grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4. Each card h-[380px] sm:h-[460px] rounded-2xl bg-neutral-950 overflow-hidden.

Card 1 (padded p-6 sm:p-8): blurred blob absolute top-1/2 -translate-y-1/2 -left-[420px] h-[460px] w-[460px] rounded-full bg-[#1e3a8a] blur-3xl opacity-40. Content: h3 text-xl sm:text-2xl font-light leading-tight "Preemptive Risks / Scouting and Reactions" (br between); paragraph mt-12 sm:mt-20 text-[13px] sm:text-[14px] leading-relaxed text-white/70 font-light max-w-[280px]: "Defense platforms constantly observe bandwidth streams, record files, and machine behaviors to uncover unusual patterns or outliers that could signal a defensive failure."

Card 2 (flex flex-col): top video region w-full overflow-hidden with height: 75%:
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260421_072701_f6a01abb-eb30-4559-9d6e-774362defbc3.mp4
(autoPlay loop muted playsInline, w-full h-full object-cover block). Bottom fade inside video: pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-neutral-950. Under video: flex-1 flex items-center justify-start p-6 sm:p-8 with h3 text-xl sm:text-2xl font-light leading-tight "Know-how and Sectoral / Awareness".

Card 3 (padded): blob absolute -top-28 -right-28 h-56 w-56 rounded-full bg-[#1e3a8a] blur-3xl opacity-40. Same heading as Card 1. Paragraph pinned to bottom (mt-auto ... max-w-[320px]) with identical body text to Card 1.

Animations & Interactions
Background videos loop and autoplay muted.
Nav links and CTA button use Tailwind transition-colors hover states.
No other JS animations; motion comes from video loops and hover color transitions.
Compose
App renders, in order: <Hero />, then inside a max-w-[1400px] wrapper: <SecuritySection />, <CompaniesSection />, <BenefitsSection />.