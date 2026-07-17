Create a two-section dark landing page for a digital studio called "KineticForge" using **React + TypeScript + Vite + Tailwind CSS**. Use **lucide-react** for the logo icon (`Atom`). No other UI libraries.

---

### FONT SETUP

In `index.html`, load "Helvetica Now Var" via this stylesheet link in `<head>`:
```
https://db.onlinewebfonts.com/c/e66905e07608167a84e6ad52f638c3c6?family=Helvetica+Now+Var
```

In `tailwind.config.js`, extend `fontFamily.sans` to:
```js
sans: ['"Helvetica Now Var"', 'sans-serif']
```

Page title: "Kinetic Forge"

---

### GLOBAL CSS (`index.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  overflow-x: hidden;
}
```

---

### ARCHITECTURE: FIXED STACKED BACKGROUND VIDEOS WITH SCROLL-TRIGGERED CROSSFADE

The page has two fullscreen videos positioned `fixed inset-0 z-0`, absolutely stacked on top of each other. All page content scrolls over them in a wrapper with `relative z-10`.

**Video 1 (Hero background):**
- URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260703_152235_56f10620-8704-4c63-8ddd-f146a7085404.mp4`
- Attributes: `muted`, `playsInline`, `autoPlay`, `loop`, `preload="auto"`
- Classes: `absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out`
- Starts at opacity 1

**Video 2 (Section 2 background):**
- URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260703_075205_41edc37d-b74b-4c8c-a1e2-2b7879cb4386.mp4`
- Attributes: `muted`, `playsInline`, `loop`, `preload="auto"`
- Classes: same as video 1
- Starts at opacity 0

**Crossfade Logic (IntersectionObserver):**
- Observe section 2 with `threshold: 0.15`
- When section 2 enters viewport: set video 1 opacity to 0, video 2 opacity to 1, reset video 2 `currentTime = 0` and call `.play()`
- When section 2 exits viewport: set video 1 opacity to 1, video 2 opacity to 0, call video 1 `.play()`
- Use React state `activeVideo` (1 or 2) to control inline `style={{ opacity: activeVideo === N ? 1 : 0 }}`

---

### NAVBAR (fixed, z-50)

Position: `fixed top-0 left-0 right-0 z-50`
Layout: `flex items-center justify-between px-6 py-5 md:px-10 lg:px-14`

**Left side:**
- Lucide `Atom` icon: `w-6 h-6 text-white strokeWidth={1.5}`
- Text "KineticForge": `text-white text-base font-medium tracking-tight`
- Container: `flex items-center gap-2`

**Right side (desktop, hidden on mobile):**
- `hidden md:flex items-center gap-8 text-white/80 text-sm font-light`
- Items: "our studio", "expertise", "projects", "get in touch"
- Each: `hover:text-white transition-colors cursor-pointer`

**Right side (mobile hamburger, hidden on desktop):**
- Button: `md:hidden text-white relative w-6 h-6 flex items-center justify-center z-50`
- Two `<span>` elements representing lines:
  - Each: `absolute w-5 h-[1.5px] bg-white transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]`
  - Closed state: first line `-translate-y-[5px]`, second line `translate-y-[5px]`
  - Open state: first line `rotate-45 translate-y-0`, second line `-rotate-45 translate-y-0`

---

### MOBILE MENU OVERLAY

Container: `fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden`
Transition: `transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]`
- Open: `opacity-100 pointer-events-auto`
- Closed: `opacity-0 pointer-events-none`

**Menu items** (same 4 nav labels):
- `text-white text-2xl font-light tracking-wide cursor-pointer hover:text-white/70`
- Stagger animation: `transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]`
  - Open: `opacity-100 translate-y-0` with `transitionDelay: ${100 + i * 75}ms`
  - Closed: `opacity-0 translate-y-4` with `transitionDelay: '0ms'`
- Each item closes the menu on click

**Body scroll lock:** When menu is open, set `document.body.style.overflow = 'hidden'`; restore on close/unmount.

---

### SECTION 1: HERO

Container: `h-screen w-full flex flex-col items-center justify-center px-6 text-center`

**Heading:**
```
Transforming the
online interaction
since 2001
```
- Line breaks using `<br />`
- Classes: `text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal leading-[1.1] tracking-[-0.06em] max-w-5xl`

**Subheading:**
```
A Vancouver digital studio Specializing
in Web Products and Interface Design
```
- Line break between the two lines using `<br className="hidden sm:block" />` (hidden on mobile, visible on sm+)
- Classes: `mt-6 sm:mt-8 text-white/70 text-sm sm:text-lg font-light max-w-lg leading-relaxed`

---

### SECTION 2: ABOUT + CLIENTS

Container: `min-h-screen w-full` (this element gets the IntersectionObserver ref)
Inner layout: `flex flex-col lg:flex-row min-h-screen`

#### Left Column
Container: `flex-1 flex flex-col justify-between px-6 pt-24 pb-12 md:px-10 lg:px-14 lg:pt-28 lg:pb-20`

**Heading:**
```
We craft award
winning platforms
and tools
```
- Line breaks using `<br />`
- Classes: `text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.1] tracking-[-0.06em] max-w-lg`

**Body text block** (below heading, `mt-10 lg:mt-0`):
- Wrapper: `max-w-sm space-y-5`
- Paragraph 1: "With studios in Vancouver, Montreal and Berlin, we design and develop full-scale digital products that generate real outcomes, cut costs, boost engagement and grow revenue."
- Paragraph 2: "For over 23 years, Kinetic Forge has partnered with organizations large and small with a roster that features some of the most recognized names worldwide. We're always eager to arrange a meeting to explore your next venture so don't hesitate to reach out for a free consultation or quote!"
- Both paragraphs: `text-white/60 text-xs sm:text-sm leading-relaxed font-light`

**Button:**
- Text: "Learn more here"
- Classes: `mt-6 sm:mt-8 border border-white/30 text-white text-xs sm:text-sm font-light px-5 sm:px-6 py-2.5 sm:py-3 rounded-sm hover:bg-white/10 transition-colors`

#### Right Column
Container: `flex-1 flex flex-col justify-end px-6 pb-12 md:px-10 lg:px-14 lg:pb-20`

**Label:** "Partners we're proud to work with"
- Classes: `text-white/60 text-xs sm:text-sm font-light mb-6 sm:mb-8`

**Client Grid:**
- Container: `grid grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-8 sm:gap-y-10 max-w-md`

**6 grid items:**

1. **NASA** -- `<span>` with classes: `text-white text-xl sm:text-3xl font-bold tracking-widest`
2. **Google** -- `<span>` with classes: `text-white text-xl sm:text-3xl font-medium tracking-tight`
3. **Canadian Digital Service** -- SVG infinity-loop icon (w-6 h-6 sm:w-8 sm:h-8, fill="currentColor", white) + text "Canadian\nDigital Service" (text-[10px] sm:text-xs font-light, line break via `<br />`)
   - SVG path: `M18.6,6.62C17.16,6.62 15.8,7.18 14.83,8.15L7.8,14.39C7.16,15.03 6.31,15.38 5.4,15.38C3.53,15.38 2,13.87 2,12C2,10.13 3.53,8.62 5.4,8.62C6.31,8.62 7.16,8.97 7.84,9.65L8.97,10.65L10.5,9.31L9.22,8.2C8.2,7.18 6.84,6.62 5.4,6.62C2.42,6.62 0,9.04 0,12C0,14.96 2.42,17.38 5.4,17.38C6.84,17.38 8.2,16.82 9.17,15.85L16.2,9.61C16.84,8.97 17.69,8.62 18.6,8.62C20.47,8.62 22,10.13 22,12C22,13.87 20.47,15.38 18.6,15.38C17.69,15.38 16.84,15.03 16.16,14.35L15.03,13.34L13.5,14.68L14.78,15.8C15.8,16.82 17.16,17.38 18.6,17.38C21.58,17.38 24,14.96 24,12C24,9.04 21.58,6.62 18.6,6.62Z`
4. **United Nations** -- SVG globe icon (w-8 h-8 sm:w-10 sm:h-10, stroke="currentColor", strokeWidth="0.8", fill="none") with: circle cx=12 cy=12 r=10, ellipse cx=12 cy=12 rx=4 ry=10, three horizontal lines at y=7, y=12, y=17 (x1=4/2/4 x2=20/22/20) + text "United Nations" (text-[10px] sm:text-xs font-light)
5. **Canada** -- SVG star icon (w-5 h-5 sm:w-7 sm:h-7, fill="currentColor", white) path: `M12 2L9.5 8.5H2L8 12.5L5.5 19L12 15L18.5 19L16 12.5L22 8.5H14.5L12 2Z` + text "Canada" (text-xs sm:text-sm font-light)
6. **Department of Administration** -- `<span>` "mn" (text-base sm:text-lg font-bold) + text "Department of\nAdministration" (text-[10px] sm:text-xs font-light, line break via `<br />`)

All grid items use `flex items-center gap-2 sm:gap-3` (except NASA and Google which use `flex items-center justify-start`).