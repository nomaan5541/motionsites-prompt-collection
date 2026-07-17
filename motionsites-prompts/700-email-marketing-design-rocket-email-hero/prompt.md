# Email Marketing

## Metadata

- Source: https://motionsites.ai/
- Prompt ID: `design-rocket-email-hero`
- Title: Email Marketing
- Category: Email Marketing
- Type: hero
- Types: 
- Page type: hero
- Sort order: 700
- Free in site metadata: yes
- Fetch status: fetched

## Full Prompt

```
Prompt: Recreate "Design Rocket Certificates" Email-Style Landing Page
Build a single-page React + TypeScript + Vite + Tailwind CSS project that renders an email-style marketing page for a "Design Rocket Certificates" AI leadership course, built in collaboration with Microsoft. Use lucide-react for icons. No other UI libraries.

Global setup
index.html

Title: Newsletter Design Build Out
Preconnect to fonts.googleapis.com and fonts.gstatic.com
Load Google Fonts: Instrument Serif (ital 0,1) and Inter (weights 400, 500, 600, 700)
src/index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-display: 'Instrument Serif', serif;
  --font-body: 'Inter', sans-serif;
}

body {
  font-family: var(--font-body);
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}
Headings use inline style={{ fontFamily: "'Instrument Serif', serif" }}. Body copy uses Inter (default).

Page shell
Outer page: min-h-screen bg-[#050505] py-10 px-4 font-sans
Email container: max-w-[640px] mx-auto shadow-2xl overflow-hidden ring-1 ring-white/5
Content card: bg-[#111111] text-[#F2F2F2]
Shared components
Step — numbered row

Wrapper: flex items-start gap-5 mb-6 last:mb-0
Number badge: flex-shrink-0 w-7 h-7 rounded-md bg-[#DCFF00] flex items-center justify-center text-[#0A0A0A] font-bold text-xs mt-1 showing {number}.
Text: text-[17px] leading-[1.55] text-[#E8E8E8]
Divider

py-8 flex justify-center containing h-px w-24 bg-white/20
PrimaryButton (lime CTA, with arrow)

inline-flex items-center gap-3 bg-[#DCFF00] text-[#0A0A0A] font-bold rounded-lg px-6 py-3 hover:bg-[#c9ea00] hover:-translate-y-0.5 transition-all duration-200
Contains the label and a lucide-react ArrowRight icon w-5 h-5 strokeWidth={2.5}
SolidButton (white pill)

inline-block bg-white text-[#0A0A0A] font-bold rounded-lg px-8 py-3 hover:bg-[#E8E8E8] hover:-translate-y-0.5 transition-all duration-200
Section 1 — Hero (video background)
Wrapper: relative w-full overflow-hidden with inline style={{ aspectRatio: '640 / 820' }}
Background video (absolutely filling container, object-cover, autoplay muted loop playsInline): https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260419_064822_f120e48a-d545-45dd-a02d-facb07829888.mp4
Overlay gradient (absolute inset-0): linear-gradient(to bottom, rgba(17,17,17,0) 45%, rgba(17,17,17,0.45) 68%, rgba(17,17,17,0.9) 88%, rgba(17,17,17,1) 100%)
Foreground stack: relative z-10 h-full flex flex-col items-center text-center px-6 pt-12 pb-10
Top brand block (white):
"Design Rocket" — Instrument Serif, text-[28px] leading-[0.95] tracking-tight
"CERTIFICATES" — text-[13px] tracking-[0.22em] font-medium mt-1
Spacer mt-40, then "NOW AVAILABLE" — text-white text-[13px] tracking-[0.28em] font-semibold
flex-1 spacer pushing headline to bottom
Headline (Instrument Serif): text-white text-[58px] leading-[1.02] tracking-tight max-w-[560px]
Text: Learn to lead AI
and unlock new value
CTA pill (note: uses #D8F90A not the card lime):
mt-10 inline-flex items-center gap-3 bg-[#D8F90A] text-[#1E1E1E] font-semibold rounded-full px-8 py-4 hover:bg-[#c9ea00] hover:-translate-y-0.5 transition-all duration-200
Label "Enroll Now" + ArrowRight w-5 h-5 strokeWidth={2.5}
Section 2 — Intro copy + CTA
Container px-[78px] pb-8 pt-4, centered paragraph text-[18px] leading-[1.55]:
Built in collaboration with Microsoft, this certificate course gives you the toolkit to lead AI transformation across your organization. Learn to spot opportunities, launch AI pilots, and scale adoption grounded in responsible practices and proven frameworks.

flex justify-center pb-14 with <PrimaryButton label="Get Started" />
<Divider />
Section 3 — "Transform how you lead with AI"
Heading container px-9 pb-8, Instrument Serif text-center text-[46px] leading-[1.05] tracking-tight: Transform how you lead with AI
Video card px-[42px] pb-10:
Anchor: block overflow-hidden rounded-[14px] group
Video: autoplay/muted/loop/playsInline, w-full h-[370px] object-cover rounded-[14px] transition-transform duration-700 group-hover:scale-[1.03]
Src: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260419_065931_e3ca7b53-d32e-4ad5-81de-dc9d6fcfda6d.mp4
Steps list container px-[76px] pb-10, inner max-w-[489px] mx-auto, rendering four <Step>s:
Learn how to spot AI opportunities that boost productivity across roles and deliver visible results.
Build structures that support your team so AI efficiencies multiply across the organization.
Gain the skills to drive culture change like securing buy-in and reducing resistance.
Get frameworks to deliver AI pilots that prove impact fast and build credibility with measurable results.
flex justify-center pb-14 with <SolidButton label="Enroll Now" />
<Divider />
Section 4 — "Build your AI transformation roadmap"
Heading container pb-7 px-9, Instrument Serif text-center text-[46px] leading-[1.05] tracking-tight:
Build your AI
transformation roadmap
Video card px-[42px] pb-10 (same classes as Section 3) with src:
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260417_110451_9f82b157-dc92-4a9f-a341-c25594ec20e1.mp4
Paragraph container px-[78px] pb-8, centered text-[18px] leading-[1.55]:
You'll finish this hands-on course with a personal AI Transformation Plan: your playbook for pilot proposals, data strategy and governance. Use it to help secure buy-in, guide rollout, and scale adoption responsibly.

flex justify-center pb-14 with <SolidButton label="Learn More" />
Section 5 — Lime CTA card
Outer px-14 pb-12
Card: bg-[#D8F90A] rounded-[10px] px-8 py-12 text-center
Heading (Instrument Serif): text-[#1E1E1E] text-[52px] leading-[1.02] tracking-tight mb-3
Ready to lead AI
at work?
Subtext: text-[#1E1E1E] text-[18px] leading-[1.5] mb-8 px-4 — Enroll now and be the leader your team has been waiting for.
Centered <PrimaryButton label="Enroll Now" />
Footer
bg-[#080808] text-white pt-12 px-10 text-center border-t border-white/5
Wordmark link text-[30px] font-bold tracking-tight text-white hover:text-[#DCFF00] transition-colors → "Design Rocket" (wrapped in pb-8 flex justify-center)
Disclaimer paragraph text-[12px] text-[#83837D] leading-[1.5] pb-8:
Microsoft is a collaborator on this specific course. Microsoft does not endorse
Design Rocket generally or other Design Rocket products.

Divider: flex justify-center pb-8 with inner h-px w-24 bg-white/20
Social icon row flex justify-center gap-5 pb-5 — six circular buttons mapping [Facebook, Twitter, Instagram, Youtube, Linkedin, Music2] from lucide-react. Each:
w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#1E1E1E] hover:border-white transition-colors, icon w-[18px] h-[18px]
Unsubscribe note text-[10px] text-[#83837D] pb-4 leading-[1.6]:
If you no longer want to receive updates on Design Rocket Certificates,
you can unsubscribe at any time by clicking "unsubscribe" below.

Link row text-[12px] pb-3 space-x-2: Support | Privacy | Terms | Unsubscribe (pipes text-[#8F8E88], links hover:underline)
Copyright anchor text-[12px] text-white/80 hover:text-white inline-block:
©2026 Design Rocket, 660 4th Street #443, San Francisco, CA 94107 USA
Trailing pb-10 spacer
Animation / interaction summary
All buttons: hover:-translate-y-0.5 transition-all duration-200 plus background-color change on hover.
Video cards: wrapper overflow-hidden rounded-[14px] group; video scales on hover via transition-transform duration-700 group-hover:scale-[1.03].
Footer wordmark and social icons: smooth color transitions via transition-colors.
Videos auto-play muted, loop, and playsInline for mobile autoplay.
Color palette
Page bg #050505, card bg #111111, footer bg #080808
Text #F2F2F2, secondary #E8E8E8, muted #83837D, divider #8F8E88
Lime primary #DCFF00, lime variant #D8F90A, lime hover #c9ea00
Dark text on lime #0A0A0A / #1E1E1E
Fonts
Display: Instrument Serif (all large headings, wordmark in hero)
Body / UI: Inter
```
