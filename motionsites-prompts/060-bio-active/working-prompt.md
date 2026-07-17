Build a premium single-page landing site for "LumiDerm" — a luxury skincare/biotech brand. Use React + TypeScript + Vite + Tailwind CSS. Use lucide-react for icons. Use the font "Helvetica Now Text" loaded from this CDN:
https://db.onlinewebfonts.com/c/08e020de1811ec4489f82d1247a42c09?family=Helvetica+Now+Text

Set the page title to "LumiDerm | Advanced Skin Science".

The site has 3 components: SplashScreen, Navbar, and HeroSection. The entire page is fixed/fullscreen with overflow hidden, no scrollbar. Black background base.

---

### SECTION 1: Splash Screen (SplashScreen.tsx)

A loading intro that plays on first load:
- Full-screen overlay at z-[9999], bg-[#010101].
- Shows a progress bar at the bottom (px-12, bottom-12). Left label says "Loading" in white/40, uppercase, tracking-[0.2em], xs text. Right shows the percentage in white, sm, tabular-nums font-medium.
- The progress bar is 1px tall, bg-white/10 track, with a white fill that animates from 0% to 100% over 2400ms (20ms interval steps).
- Once 100% is reached, wait 300ms, then trigger a "curtain reveal" animation:
  - Two panels (left half and right half) slide apart: left translates -100% X, right translates +100% X.
  - Duration: 1200ms, easing: cubic-bezier(0.76, 0, 0.24, 1).
  - The loader content fades to opacity-0 with duration-300 during reveal.
- After 1200ms of the curtain animation, call onComplete to signal the main content can appear.

---

### SECTION 2: Navbar (Navbar.tsx)

A floating pill-shaped navbar, fixed at the top center:
- Position: fixed top-4 (sm:top-6), centered, z-50, px-4 on the wrapper.
- Nav pill: bg-white/10, backdrop-blur-md, border border-white/15, rounded-full, px-2 py-2.
- On mobile: full-width with justify-between. On sm+: auto width.
- Appears with a transition: opacity and translateY(-4 to 0) over 700ms with 300ms delay, triggered by `isActive` prop.

Contents:
- Logo: text-base font-medium tracking-tight. "Lumi" in font-bold, "Derm" in font-light. Both white.
- Desktop nav links (hidden md:flex): "Science", "Treatments", "Results", "Testimonials", "Connect". Each: text-white/80, text-sm, hover:text-white, hover:bg-white/10, px-4 py-1.5, rounded-full.
- CTA button (hidden sm:flex): "Book Now" with ArrowRight icon. bg-[#5794E2], text-white text-sm, px-5 py-2, rounded-full, hover:bg-[#4a84d0].
- Mobile hamburger (md:hidden): w-9 h-9 rounded-full bg-white/10, toggles between Menu and X icons.
- Mobile overlay: fixed inset-0 z-40, bg-black/90 backdrop-blur-lg. Shows the same 5 links as text-2xl font-light centered vertically with gap-6, plus the "Book Now" button. Transitions opacity over 300ms.

---

### SECTION 3: Hero Section (HeroSection.tsx)

A fullscreen video background hero with scroll-driven crossfade between two states.

**Video backgrounds:** (not looping, plays once then pause)
- Video 1 URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_222559_363e35af-d0bc-4650-b3cb-58bf833daa51.mp4`
- Video 2 URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_232048_98292efb-9b9c-4089-a587-72f33437c8f8.mp4`
- Both: absolute inset-0, w-full h-full, object-cover, muted, playsInline, preload="auto".
- Video 1 opacity = 1 - progress. Video 2 opacity = progress.


**Scroll-driven progress (0 to 1):**
- Listen to wheel events (passive: false, preventDefault).
- Delta = e.deltaY / 800. Clamp progress between 0 and 1.
- When progress crosses 0.5 threshold, pause one video and play the other from the start.
- Video 1 plays when progress < 0.5. Video 2 plays when progress >= 0.5.

**Hero State 1 (progress near 0) — Bottom Left content:**
- Opacity: max(0, 1 - progress * 2.5). TranslateY: progress * 30px.
- Position: absolute bottom-12 left-6 right-6, sm:bottom-8 sm:left-8 sm:right-auto, md:bottom-16 md:left-12. max-w-2xl.
- H1: "The Future of\nSkin Regeneration". text-3xl sm:text-4xl md:text-6xl lg:text-7xl, font-light, leading-[1.05], tracking-tight, mb-4 md:mb-6.
- P: "Heal with science, not guesswork. LumiDerm merges cellular research and bioactive formulations to unlock your skin's true radiant potential." text-xs sm:text-sm md:text-base, text-white/70, max-w-md, mb-6 md:mb-8.
- Button: "Explore Now". bg-[#5794E2], rounded-full, text-xs sm:text-sm, px-6 sm:px-8, py-3 sm:py-3.5.

**Hero State 1 — White Card (bottom right, hidden on mobile):**
- hidden sm:flex. Position: absolute bottom-8 right-8 md:bottom-16 md:right-12.
- bg-white rounded-2xl p-4 md:p-5, items-center gap-4 md:gap-5, shadow-2xl, max-w-[380px] md:max-w-[460px].
- Same opacity/transform as Hero 1 content.
- Left: thumbnail image (w-20 h-20 md:w-24 md:h-24, rounded-xl, object-cover). URL: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260619_220258_2f77857f-c799-4cce-9818-442542b98f2a.png&w=1280&q=85`
- Right: "LumiDerm" and "BioActive" (text-sm font-medium, text-[#010101]), with a blue circle button (w-9 h-9, bg-[#3b82f6]) containing ArrowRight icon. Below: "CellBoost(TM) 3.0" in text-[#666] text-xs.

**Hero State 2 (progress near 1) — Bottom Center content:**
- Opacity: max(0, (progress - 0.4) * 2.5). TranslateY: max(0, (1 - progress) * 30)px.
- Position: absolute bottom-12 sm:bottom-12 md:bottom-20, left-0 right-0, centered, px-6.
- H2: "Clinically Advanced\nSkin Science". text-2xl sm:text-3xl md:text-5xl lg:text-6xl, font-light, leading-[1.1], tracking-tight, mb-4 md:mb-5.
- P: "Our patented peptide complex penetrates at the cellular level, stimulating natural collagen and restoring youthful elasticity." text-xs sm:text-sm md:text-base, text-white/70, max-w-lg.

**Hero State 2 — Stats (mobile: horizontal below text, desktop: right side vertical):**

Mobile (flex sm:hidden, mt-6, gap-6, horizontal):
- "8M+" / "Skin Transformed"
- "96.4%" / "Visible Renewal"  
- "37" / "Patents Granted"
- Numbers: text-xl font-light. Labels: text-[10px] text-white/50. Dividers: w-[1px] h-8 bg-[#5794E2]/40.

Desktop (hidden sm:flex, absolute right-8 md:right-12, top-1/2, vertical, gap-8):
- Same 3 stats. Numbers: text-3xl md:text-4xl font-light. Labels: text-xs md:text-sm, text-white/50.
- Blue separator lines: w-12 h-[1px] bg-[#5794E2]/60, mt-4 after first two.
- Transform: translateY(calc(-50% + hero2TranslateY px)).

---

### App.tsx

- State: splashComplete (boolean, starts false).
- Renders SplashScreen (only when not complete), Navbar, and HeroSection.
- Both Navbar and HeroSection receive `isActive={splashComplete}`.

### Global CSS (index.css)

- Tailwind directives (@tailwind base/components/utilities).
- Global reset: * { margin:0; padding:0; box-sizing:border-box }
- html, body, #root: width/height 100%, overflow hidden, font-family: 'Helvetica Now Text', Helvetica, Arial, sans-serif.

### Tailwind Config

- Extend fontFamily with: helvetica: ['"Helvetica Now Text"', 'Helvetica', 'Arial', 'sans-serif']

Make everything fully mobile responsive. The site should feel like an Apple-level luxury product page with smooth animations and premium typography.
```