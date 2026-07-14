Build a high-performance DeFi dashboard landing page using React, Vite, Tailwind CSS v4, Framer Motion (import { motion } from 'motion/react'), and Lucide React icons. The application must match the following specification component by component, using exact styling, animations, colors, and CloudFront video URLs.
1. Global Setup (index.css & App.tsx)
CSS Setup:
Import Tailwind via @import "tailwindcss";.
Import a custom @font-face for "Helvetica Regular" using this base URL for various formats (eot, woff2, woff, ttf, svg): https://db.onlinewebfonts.com/t/a64ff11d2c24584c767f6257e880dc65
Create a theme variable --font-helvetica using ui-sans-serif, system-ui, sans-serif fallbacks.
Set :root { font-family: var(--font-helvetica); } and body { margin: 0; overflow-x: hidden; background-color: #f0f0f0; }.
App Setup:
Wrap your page components (Hero, Metrics, Features, CTA, Footer) in <main className="min-h-screen bg-[#f0f0f0]">.
2. Hero Section (Hero.tsx)
Create a full-screen wrapper: w-full h-screen flex items-center justify-center p-3 md:p-5 bg-[#f0f0f0].
Inside, a <section> container: relative w-full max-w-[1536px] h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden flex flex-col items-center group.
Background Video: Place an absolute <video> filling the section, autoPlay muted loop playsInline. Use this URL:
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260428_193507_4286c423-2fd9-4efd-92bd-91a939453fc1.mp4
Main content block: Over the video (relative, z-10), stack the Navbar, a HeroBadge, an h1 ("Fluid Asset Streams" - text color #5E6470), and a paragraph ("Access Smart Vaults, stake RIVR..."). Use subtle staggered fade-in + scale animations via Framer Motion.
3. Navbar & Floating Elements
Navbar: Hidden on desktop, mobile shows text logo "RIVR". Desktop shows centered links: "Ecosystem", "Economics" (w/ ChevronRight), "Developers", "Governance". Add a right-aligned "Book Demo" hoverable button (dark blue background, white text, inner white/20 pill with ArrowUpRight).
HeroBadge: A pill with bg-white/60 backdrop-blur-md border border-white/20, a Lucide Sparkles icon, and text "Fluid Staking".
BottomLeftCard: Absolute positioned at the bottom left. Glassmorphism card (bg-white/30 backdrop-blur-xl), containing "5.2K Active Yielders" and a "Join Discord" white pill button.
BottomRightCorner: Absolute positioned at bottom right, simulating an architectural "cut-out" merged with the container.
Background #f0f0f0, padding p-6 pt-8 pl-14, rounded top-left rounded-tl-[3.5rem].
Content: a faint circle with ArrowUpRight, and "Documentation / Library" text.
Crucial Inverted Corner SVG Trick: Include two absolutely positioned SVGs (one top, one left) measuring exactly 3.5rem to fill the gaps and make the inner curve flush: <path d="M56 56V0C56 30.9279 30.9279 56 0 56H56Z" fill="#f0f0f0"/>.
4. Metrics Section (Metrics.tsx)
Container: w-full max-w-[1536px] mx-auto px-3 md:px-5 py-6 md:py-12.
Inner box: bg-[rgba(30,50,90,0.02)] border border-[rgba(30,50,90,0.05)] rounded-[1.5rem] md:rounded-[3rem] p-8 md:p-16.
Data: A 2x4 grid separated by borders (divide-[rgba(30,50,90,0.1)]).
Items: "$2.4B" (Total Value Locked), "8.5%" (Average Realized Yield), "140K+" (Active Participants), "< 2s" (Finality Engine).
Animations: Staggered upward fade-ins using whileInView.
5. Features Section - No Background Videos Layout (Features.tsx)
Header: "Architected for high-performance DeFi", floating "Start Staking" outline button, pure white cards on #f0f0f0 background.
Grid Setup: grid grid-cols-1 md:grid-cols-3 md:grid-rows-2. All cards are white, rounded [1.5rem] md:rounded-[2rem], with hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] and overflow-hidden.
Card 1 (Tall Left): md:row-span-2 min-h-[28rem]. Title: "Unlock the liquidity of your staked assets". Bottom description. Features a massive, 2% opacity (opacity-[0.02]) background watermark of a Lucide Layers icon that scales up (group-hover:scale-110) on hover.
Card 2 (Wide Top Right): md:col-span-2. Title "Real-time Yields". Includes a scaled-up watermark of a Lucide Activity icon (opacity-[0.02]) anchored to the bottom right.
Card 3 (Bottom Right 1): Title "Bank-grade". Shows "Smart contracts audited...". Has a "View Audits" rounded outline button at the bottom.
Card 4 (Bottom Right 2): Title "Cross-Chain". Centers a gray circular button with an ArrowUpRight that triggers a scale transition on hover.
6. CTA Section (CTA.tsx)
Container layout identical to Hero (centered max-w rounded box), but uses a different background video.
Background Video: absolute inset-0 w-full h-full object-cover. URL:
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260427_104731_bfd355f7-1f84-4f81-ad88-52c2bca70bad.mp4
Content (layered above video, white text):
Headline: "Melt rigid assets into fluid yield."
Two flex-row buttons: "Launch App" (Solid white + inner icon) and "Read Docs" (bg-white/10 backdrop-blur-md).
7. Footer Section (Footer.tsx)
Simple border-top section.
Left column: The "RIVR" logo text, short description text.
Right grid: 3 columns of small, muted links ("Protocol", "Developers", "Community") transitioning to dark text on hover.
