Build a single-page hero landing page for a holistic wellness brand called "Vibrant Wellness." Use React, TypeScript, Tailwind CSS, and Lucide React icons. Load Google Fonts "Inter" (weights 300, 400, 500, 600, 700) via link tags in the HTML head. The entire page is a full-screen (100vh) section with a looping background video and liquid glass UI elements overlaid on top.

**BACKGROUND VIDEO**

Full-viewport autoplaying, looping, muted, playsInline video with `object-cover`, positioned absolute inset-0. Use this exact URL:
`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260715_082433_69699cf8-444b-4484-93cc-053e57896dfd.mp4`

**LIQUID GLASS EFFECT**

Create a `.liquid-glass` CSS class applied to the nav pill, avatar circles, badge, and CTA button:
- `background: rgba(255,255,255,0.01)` with `background-blend-mode: luminosity`
- `backdrop-filter: blur(4px)` (with -webkit prefix)
- No border
- `box-shadow: inset 0 1px 1px rgba(255,255,255,0.1)`
- `position: relative; overflow: hidden`
- `::before` pseudo-element creating a gradient border: absolute inset-0, border-radius inherit, padding 1.4px, background is a vertical linear-gradient from rgba(255,255,255,0.45) at 0%, to 0.15 at 20%, transparent at 40-60%, back to 0.15 at 80% and 0.45 at 100%. Use the mask-composite exclude trick (`-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude`) so the gradient only shows as a border. Set `pointer-events: none`.

**NAVIGATION (z-20, top)**

Flex row, justify-between, padding px-5 pt-6 / sm:px-8 sm:pt-8 / md:px-16 lg:px-20.
- Left: custom SVG logo (32x32, md:36x36), white fill, viewBox 0 0 256 256, path: `M 128 128 C 198.692 128 256 185.308 256 256 L 151.883 256 C 149.812 220.307 120.213 192 84 192 C 47.787 192 18.188 220.307 16.117 256 L 0 256 C 0 185.308 57.308 128 128 128 Z M 104.117 0 C 106.188 35.694 135.787 64 172 64 C 208.213 64 237.812 35.694 239.883 0 L 256 0 C 256 70.692 198.692 128 128 128 C 57.308 128 0 70.692 0 0 Z`
- Center (desktop only, hidden on mobile): liquid-glass rounded-full pill (px-8 py-3) with three links — "Home" (text-white), "Our Approach" and "Healing Methods" (text-white/70, hover:opacity-100). All text-sm font-medium.
- Right (desktop only): liquid-glass circle (h-10 w-10 rounded-full) containing Lucide `CircleUserRound` (h-5 w-5, text-white/80, strokeWidth 1.5).
- Right (mobile only, md:hidden): liquid-glass circle button (h-10 w-10 rounded-full, z-50). Animated icon swap between Lucide `Menu` and `X` using absolute positioning with rotate-90 scale-0 opacity-0 transitions (duration-300) toggled by a `menuOpen` state.

**MOBILE MENU OVERLAY (z-10, fixed inset-0, md:hidden)**

Toggle visibility with 500ms ease-out opacity transition. Background: black/80 with backdrop-blur-xl. Centered flex column (gap-8) with the same three nav links at text-2xl font-medium. Below links: liquid-glass avatar circle + "Account" text (text-sm font-light text-white/60). Links close the menu on click. Content slides from -translate-y-8 to 0.

**MAIN CONTENT (z-10)**

Flex column, justify-between, fills remaining viewport height. On mobile, fades to opacity-0 and pointer-events-none when menu is open.

Top block (mt-14 sm:mt-20 md:mt-28, max-w-2xl):
1. Badge — liquid-glass pill (rounded-full, inline-flex, gap-2.5 sm:gap-3, px-3 py-1.5 sm:px-4 sm:py-2, mb-5 sm:mb-6). Contains 4 overlapping avatars (flex -space-x-2, each h-5 w-5 sm:h-6 sm:w-6, rounded-full, border-2 border-white/20, object-cover) using these Pexels URLs:
   - `https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100`
   - `https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100`
   - `https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100`
   - `https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100`
   Followed by text "our path to natural wellness" (text-xs sm:text-sm, font-light, text-white/80).
2. Heading — `<h1>` "Heal Your Body" + `<br/>` + "Naturally". Style: text-4xl sm:text-5xl md:text-6xl lg:text-7xl, font-normal, leading-[1.05], text-white, inline letterSpacing -0.05em.
3. Subtitle — `<p>` "Holistic wellness. Transformative results." mt-4 sm:mt-5, text-sm sm:text-base md:text-lg, font-light, text-white/70.
4. CTA button — liquid-glass, rounded-full, px-6 py-3 sm:px-7 sm:py-3.5, mt-6 sm:mt-8, text-sm font-medium text-white, transition duration-300, hover:bg-white/10. Text: "Begin Your Journey".

**BOTTOM STATS (flex, items-end, gap-6 sm:gap-10 md:gap-16)**

Two stat columns:
1. First: a small triangular dot-pattern icon built from 9 absolutely-positioned 2.5px white/60 squares inside a 20x20 box; value "48 Hours" (text-xl sm:text-2xl md:text-3xl, font-normal, text-white); label "Initial Consultation" (text-xs sm:text-sm, font-light, text-white/60).
2. Second: a 3x3 grid icon (grid-cols-3, gap-[2px]) of 4px rounded cells alternating bg-white/60 and bg-white/0 in a checkerboard; value "Initial Consultation" (same sizing); label "Healing Sessions" (text-xs sm:text-sm, font-light, text-white/60).