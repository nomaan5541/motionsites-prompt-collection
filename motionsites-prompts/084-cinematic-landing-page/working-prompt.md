Create a single-page landing website for "Bakery Facilities" — a premium B2B bakery solutions company. The site uses React 18, Vite, TypeScript, Tailwind CSS, GSAP (with ScrollTrigger and SplitText plugins), and Lottie animations. No Framer Motion is used — all animations are GSAP-powered.

---

### Tech Stack & Dependencies

```json
{
  "dependencies": {
    "@gsap/react": "^2.1.2",
    "@tanstack/react-query": "^5.83.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "gsap": "^3.14.2",
    "lottie-react": "^2.4.1",
    "lucide-react": "^0.462.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.30.1",
    "sonner": "^1.7.4",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@vitejs/plugin-react-swc": "^3.11.0",
    "autoprefixer": "^10.4.21",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.8.3",
    "vite": "^5.4.19"
  }
}
```

---

### Fonts (Google Fonts)

Import URL: `https://fonts.googleapis.com/css2?family=Luxurious+Script&family=Manrope:wght@500&family=Open+Sans:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap`

Font families:
- `font-body`: 'Open Sans', sans-serif (body text, nav, buttons)
- `font-accent`: 'Instrument Serif', serif (hero h1, section titles)
- `font-manrope`: 'Manrope', sans-serif (labels, card text)
- `font-luxurious`: 'Luxurious Script', cursive ("for Professionals" subtitle)

---

### Color System (CSS Variables)

```css
:root {
  --background: 0 0% 9%;
  --foreground: 0 0% 100%;
  --primary: 0 0% 100%;
  --primary-foreground: 0 0% 9%;
  --secondary: 0 0% 97%;
  --muted: 0 0% 20%;
  --muted-foreground: 0 0% 75%;
  --accent: 0 0% 15%;
  --border: 0 0% 20%;
  --radius: 2px;
  --hero-cta-bg: 0 0% 97.3%;
  --hero-cta-text: 0 0% 9%;
}
```

Gold accent color: `#CB9D06` (used on hover states for nav, buttons, links)

---

### Tailwind Config Specifics

- Border radius: 2px base
- Container padding: 5%
- Custom keyframes: `marquee` (translateX(0) to translateX(-50%), 60s linear infinite)
- `tailwindcss-animate` plugin

---

### SECTION 1: Hero (Full-Screen Scroll-Driven Video Slider)

**Structure:**
- Outer wrapper: `height: calc(100vh + 300vh)` (3 slides x 150vh per slide transition)
- Inner sticky section: `sticky top-0 w-full h-screen overflow-visible`
- Slides transition via scroll-driven `clip-path: ellipse()` animation

**Video URLs (CloudFront):**
1. `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260515_113235_88e0d62e-8103-40c1-948e-f0a4f886ffd1.mp4`
2. `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260515_114315_ee3663e6-bd79-41b4-9e5b-0fae62827eb9.mp4`
3. `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260515_114559_dca18b14-90f5-47c4-8a84-3cbae9bd8a0c.mp4`

**Video element:** `<video className="w-full h-full object-cover" autoPlay loop muted playsInline />`

**Clip-path transition logic:**
- `SCROLL_PER_SLIDE_VH = 150`
- Easing: cubic ease-in-out `localProgress < 0.5 ? 4*p*p*p : 1 - Math.pow(-2*p + 2, 3) / 2`
- Clip function: `ellipse(${5 + progress * 150}% ${8 + progress * 150}% at 50% 50%)`

**H1 Text:** "THE SMART BAKERY SOLUTION"
- Desktop: `font-accent text-[9.7vw] leading-[1] whitespace-nowrap tracking-[-0.04em]`, positioned `bottom-[-26px]`
- Mobile: `text-[40px] leading-[1.1] whitespace-normal text-center`, positioned `bottom-[48px]` with `px-4`
- Animation: GSAP SplitText per-char, `from: {opacity:0, y:40}`, `to: {opacity:1, y:0}`, duration: 0.8s, delay between chars: 30ms, ease: "power3.out", autoStart: true

**Subtitle:** "for Professionals" (appears after h1 animation completes)
- Font: Luxurious Script cursive
- Desktop: `text-[3vw]`
- Mobile: `text-[12vw]`
- Position: `absolute inset-x-0 top-0`, paddingTop: `calc(80px + 60px)`
- Same GSAP SplitText animation params as h1

---

### SECTION 1 NAVBAR (Fixed, transparent -> black on scroll)

**Scroll behavior:** `scrollY > 50` triggers `bg-black/90 backdrop-blur-[80px] shadow-md py-2`, else `bg-transparent py-4`

**Layout:** `fixed top-0 left-0 right-0 z-20 flex items-center px-4 md:px-10`

**Left:** Region dropdown (Globe icon + "Hong Kong / Macau" text), regions: ["Mainland China", "Hong Kong / Macau", "Taiwan"]

**Center:** Logo (SVG) flanked by nav dropdowns

**Logo SVG (4 leaf-clover shape):**
```svg
<svg viewBox="0 0 305 304" fill="none">
  <path d="M157.135 303.572C157.135 222.53 223.131 156.832 304.174 156.832V303.572H157.135Z" fill="white"/>
  <path d="M147.039 303.572C147.039 222.53 81.0425 156.832 0 156.832V303.572H147.039Z" fill="white"/>
  <path d="M157.135 0C157.135 81.0426 223.131 146.74 304.174 146.74C304.174 65.698 238.178 0 157.135 0Z" fill="white"/>
  <path d="M147.039 0C147.039 81.0426 81.0425 146.74 0 146.74C0 65.698 65.9962 0 147.039 0Z" fill="white"/>
</svg>
```
Logo size: `h-[32px] md:h-[48px]` normal, `h-[24px] md:h-[32px]` scrolled

**Left menu items:** "About Us" (submenu: Our History, Food Service Experts, Creating unforgettable culinary experiences), "Partnering With Us" (submenu: Sourcing from trusted suppliers..., Empowering Customer Operations, Our Experts)

**Right menu items:** "Our Products" (submenu: Viennese Pastry, Bread, Dessert, Savory, Speciality Pastry, Culinary Aid, Ingredient), "Let's Connect!" (submenu: Contact, LinkedIn, WhatsApp, Newsletter, Brochure, Join Us)

**Right:** Language switcher EN/繁, active gets `bg-[#CB9D06] text-white`

**Dropdown styling:** `bg-white shadow-lg py-2`, items `px-4 py-2.5 text-[13px]`, hover: `bg-[#CB9D06] text-white`

**Mobile:** Hamburger icon opens full-screen overlay `bg-black/95 backdrop-blur-md`, accordion-style menu

---

### FLOATING NAV (Right side, desktop only)

Position: `fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4`

3 circular buttons (48px height, rounded-full, bg-black, expand on hover to show labels):
1. Download icon + "Download Brochure"
2. LinkedIn SVG icon + "LinkedIn"
3. MessageCircle icon + "Chat With Us"

LinkedIn SVG paths:
```svg
<svg viewBox="0 0 32 32">
  <path d="M12.6186 9.69215C12.6186 10.6267 11.8085 11.3843 10.8093 11.3843C9.81004 11.3843 9 10.6267 9 9.69215C9 8.7576 9.81004 8 10.8093 8C11.8085 8 12.6186 8.7576 12.6186 9.69215Z" fill="currentColor"/>
  <path d="M9.24742 12.6281H12.3402V22H9.24742V12.6281Z" fill="currentColor"/>
  <path d="M17.3196 12.6281H14.2268V22H17.3196C17.3196 22 17.3196 19.0496 17.3196 17.2049C17.3196 16.0976 17.6977 14.9855 19.2062 14.9855C20.911 14.9855 20.9008 16.4345 20.8928 17.5571C20.8824 19.0244 20.9072 20.5219 20.9072 22H24V17.0537C23.9738 13.8954 23.1508 12.4401 20.4433 12.4401C18.8354 12.4401 17.8387 13.1701 17.3196 13.8305V12.6281Z" fill="currentColor"/>
</svg>
```

Hover: `bg-[#CB9D06]`, label slides in with max-width transition 300ms

---

### SECTION 2: Product Gallery (Masonry Grid)

Container: `bg-white py-8 md:py-16 flex justify-center`, inner: `w-[90%] md:w-[65%]`

**Grid layout:**
- Desktop (>=1000px): 4 columns. Row 1: 4 equal cards. Row 2: 3 cards where middle spans 2 columns
- Mobile: 2 columns
- Aspect ratio: 3:4 (columnWidth * 4/3)
- Row gap: 40px
- Item padding: 4px

**7 items** with labels: Viennese Pastry, Bread, Dessert, Savory, Sweet Treats, Culinary Aid, Ingredient

**Animations:**
- Entry: GSAP ScrollTrigger, start "top 85%", once: true
- Initial: `opacity:0, y: item.y+120, filter: blur(10px)`
- Animate to: `opacity:1, correct position, filter: blur(0px)`, duration: 0.8s, ease: "power3.out", stagger: 0.05s per item
- Hover: CSS `transform: scale(1.2)` on the background image with `transition: transform 6s cubic-bezier(0.22, 0.61, 0.36, 1)`

**Labels:** `text-left text-black text-sm mt-2 font-manrope font-medium`

---

### SECTION 3: About Us (Scroll Reveal Text)

Container: `bg-white py-16 md:py-32 flex flex-col items-center justify-center px-6 md:px-[18%]`

**Title:** "About us" — `font-luxurious text-[32px] text-center text-black mb-[20px]`

**Body text:** "In 1976, Mr Louis Le Duff Opened The First French Casual Food Restaurant..." (full text in code above)
- `font-accent uppercase text-[24px] leading-[36px] md:text-[40px] md:leading-[56px] text-center text-black`

**Scroll Reveal Animation (GSAP ScrollTrigger scrub):**
- Container rotation: from `baseRotation: 3` to `0`, scrub, start "top bottom", end "bottom bottom"
- Word opacity: from `0.1` to `1`, stagger 0.05, scrub, start "top bottom-=20%", end "bottom bottom"
- Word blur: from `blur(4px)` to `blur(0px)`, same trigger

**Button:** "Read more" — `px-8 py-3 bg-black text-white font-manrope text-sm tracking-wide hover:bg-[#CB9D06] transition-colors duration-300`

**Partners Logo Loop (below button, mt-16 md:mt-[140px]):**
- Infinite horizontal scroll marquee, speed: 80px/s, direction: left, gap: 48px, pauseOnHover, fadeOut with white gradient edges (80px wide)
- 12 partner names rendered as: `font-body text-[14px] tracking-[0.2em] uppercase text-black/40 whitespace-nowrap`
- Partners: Bridor de France, Traiteur de Paris, Panidor, Boncolac, Mademoiselle Desserts, Mountry, Pfalzgraf, Dolceria Alba, St Michel, Poppies Bakeries, Alysse Food, Les Delices du Chef

---

### SECTION 4: Partnering With Us

Full-width background image with overlay content.

**Title:** "Partnering With Us" — `font-accent uppercase text-[28px] md:text-[40px] leading-[1.4] text-primary`
- GSAP SplitText chars animation same params as hero

**4 cards** in a grid (`grid-cols-2 md:grid-cols-4 gap-2 md:gap-[8px]`, container `w-[90%] md:w-[64%]`):
- Each card: `bg-black px-4 md:px-6 py-6 md:py-8 flex flex-col items-center text-center gap-3 md:gap-4`
- Lottie animation icon (w-10 h-10 md:w-12 md:h-12, loop)
- Label: `text-primary font-body text-[12px] md:text-[14px] tracking-wide capitalize`
- Cards: "Trusted Sourcing", "Food Safety Standards", "Operational Efficiency", "Expert Support"
- Entry animation: GSAP fromTo `y:80 -> y:0`, duration: 0.7, ease: "power3.out", stagger delay: i*0.15, ScrollTrigger start "top 90%", once

---

### SECTION 5: Footer

`bg-white` full width.

**Top section** (`px-6 md:px-10 lg:px-16 pt-12 md:pt-20 pb-10 md:pb-16`):
- Left: Phone `+852 2407 8840` (text-[13px] text-black/40 uppercase tracking-wider) + email `orders@bakeryfacilities.com` (text-[14px] font-bold, hover gold)
- Right: "Navigate" column (About Us, Partnering With Us, Our Products, Let's Connect!) + "Social" column (WhatsApp, LinkedIn, Newsletter)
- Link styling: `text-[15px] text-black font-medium hover:text-[#CB9D06]`

**Office addresses** (4 offices in a row on desktop, stacked on mobile):
- Head Office (Hong Kong), Mainland China (Shanghai), Taiwan (New Taipei City), Macau
- Each: region title (12px uppercase tracking-wider text-black/40), company name (13px font-semibold), address (12px text-black/60), phone + email with icons

**Bottom bar:** `bg-black px-6 md:px-10 lg:px-16 py-4`
- Left: copyright `text-[12px] text-white/40`
- Right: Privacy Policy + Terms of Service links `text-[12px] text-white/40 hover:text-white`

---

### Key Animation Details (All GSAP, no Framer Motion)

| Element | from | to | duration | ease | trigger |
|---------|------|-----|----------|------|---------|
| Hero H1 chars | `{opacity:0, y:40}` | `{opacity:1, y:0}` | 0.8s | power3.out | autoStart |
| Hero subtitle chars | `{opacity:0, y:40}` | `{opacity:1, y:0}` | 0.8s | power3.out | autoStart (after h1 done) |
| Gallery items | `{opacity:0, y:+120, blur:10px}` | `{opacity:1, y:pos, blur:0}` | 0.8s | power3.out | ScrollTrigger "top 85%" once |
| Section 4 cards | `{opacity:1, y:80}` | `{opacity:1, y:0}` | 0.7s | power3.out | ScrollTrigger "top 90%" once |
| Scroll reveal words | `{opacity:0.1, blur:4px, rotate:3}` | `{opacity:1, blur:0, rotate:0}` | scrub | none | scrub scroll |

**SplitText config:** `type: splitType, smartWrap: true, charsClass: "split-char font-accent"`, char stagger: 30ms (delay/1000)

---

### CSS for split-char (global):
```css
.split-char {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  line-height: 1 !important;
}
```

---

### Responsive Breakpoints

- Mobile-first
- `md:` = 768px (Tailwind default)
- `lg:` = 1024px
- Gallery columns: 1 (<400px), 2 (400-600px), 2 (600-1000px), 4 (>=1000px)