**Prompt:**

Build a full-viewport hero section in React + TypeScript with Tailwind CSS. Use `lucide-react` for the `Instagram` and `Send` icons. The section must match these specs exactly.

**Fonts (load in index.css):**
```css
@import url('https://db.onlinewebfonts.com/c/38c9851a552c219fba7878035cef1a1c?family=Britanica-Black');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Inter', sans-serif; overflow-x: hidden; }
```
Also use `Geist, sans-serif` for the giant headline (fallback to sans-serif if Geist isn't loaded).

**Background video asset (verbatim URL):**
```
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_213626_db1bde2b-521c-4b22-91f3-35c072eb8771.mp4
```

**Two inline SVG logo components (verbatim path data):**

`LogoWhite` — width 30, height 22, viewBox `0 0 30 22`, fill none:
- `<path d="M2 4C2 4 8 1 15 6C22 11 28 8 28 8" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>`
- `<path d="M2 16C2 16 8 13 15 18C22 23 28 20 28 20" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>`

`LogoRed` — width 26, height 20, viewBox `0 0 30 22`, fill none, same two paths but `stroke="#e02b10"`.

**Structure — one root `<div>`** with classes `relative w-full min-h-screen overflow-hidden` and inline style `backgroundColor: '#e02b10'`. It contains, in order:

1. **Background `<video>`** — classes `absolute inset-0 w-full h-full object-cover`, attributes `autoPlay muted loop playsInline`, `src` equal to the URL above.

2. **Navbar** `<nav>` — classes `absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 md:py-5 gap-2`.
   - Left cluster: `flex items-center gap-3 sm:gap-6` containing `<LogoWhite />` and a hidden-on-mobile group `hidden sm:flex items-center gap-2` with:
     - `HOME` button: `bg-white text-black text-xs px-5 py-2 rounded-full`, inline style `fontFamily: 'Inter, sans-serif', fontWeight: 700`.
     - `RITUALS` and `RATES` buttons mapped from array: `text-white text-xs px-5 py-2 rounded-full border border-white/60 hover:border-white transition-all`, inline style `fontFamily: 'Inter, sans-serif', fontWeight: 400`.
   - Right cluster: `flex items-center gap-3 sm:gap-4`:
     - Instagram icon button: `text-white hover:opacity-70 transition-opacity`, icon `<Instagram size={18} strokeWidth={1.5} />`.
     - Send icon button: same classes plus `hidden sm:block`, icon `<Send size={16} strokeWidth={1.5} />`.
     - `Reservations` button: `border border-white text-white text-xs px-3 sm:px-5 py-2 rounded-full hover:bg-white hover:text-red-600 transition-all whitespace-nowrap`, inline style `fontFamily: 'Inter, sans-serif'`.

3. **Content wrapper** `<div>` with `relative z-20 min-h-screen flex flex-col px-4 sm:px-6 md:px-10`, containing three rows:

   **Row 1 (navbar spacer):** `<div className="h-[72px] shrink-0" />`

   **Row 2 (middle):** `<div>` with `flex-1 flex flex-col md:flex-row md:items-center md:justify-between mx-auto gap-10 md:gap-32 py-8 md:py-0`, inline style `maxWidth: '1100px', width: '100%'`.
   - **Left block** `max-w-[260px]`:
     - `<p>` classes `text-white text-[13px] tracking-[0.22em] uppercase leading-snug mb-2`, style `fontFamily: 'Inter, sans-serif', fontWeight: 700`, text `MARKETING<br />COLLECTIVE`.
     - `<p>` classes `text-white text-[13px] leading-relaxed`, style `fontFamily: 'Inter, sans-serif', opacity: 0.8`, text `Creative growth blueprints<br />for bold brands in Web3 era`.
   - **Right block** `max-w-[260px] text-left`:
     - Row `flex justify-start mb-2` containing `<LogoRed />`.
     - `<p>` classes `text-white text-[14px] leading-relaxed mb-3`, style `fontFamily: 'Inter, sans-serif'`, text: `MetricX is the essential growth dashboard for bold agencies. Monitor reach, refine spend, steer campaigns, surface insights, delight your clients every day.`
     - `<p>` classes `text-white text-[13px] leading-loose`, style `fontFamily: 'Inter, sans-serif', opacity: 0.7`, text `Audiences Dashboards Spend<br />Performance Channels Growth`.

   **Row 3 (bottom):** `<div>` with `pb-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-6 shrink-0`.
   - **Column 1** `flex-1 min-w-0`:
     - `<h1>` classes `text-white select-none mb-6 md:mb-10`, inline style `fontFamily: 'Geist, sans-serif', fontWeight: 600, fontSize: 'clamp(56px, 13vw, 155px)', letterSpacing: '-0.04em', lineHeight: 0.78, width: 'fit-content'`, text `creative<br />studio`.
     - Sub-row `flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6`:
       - `<p>` classes `text-white text-[14px] leading-relaxed`, style `fontFamily: 'Inter, sans-serif', minWidth: '160px'`, text `Sharp ideas only. We craft<br />brands that own Web3.`
       - `<button>` classes `bg-white text-black rounded-full hover:bg-gray-100 active:scale-95 transition-all shadow-lg w-full sm:w-auto`, inline style `fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '15px', whiteSpace: 'nowrap', padding: '24px 60px'`, text `begin now`.
   - **Column 2 (stat cards)** `flex gap-4 sm:gap-6`, mapping `[['80%', 'Reach uplift'], ['92%', 'Client loyalty']]`:
     - Card `<div>` classes `rounded-2xl px-5 sm:px-6 py-5 flex flex-col items-start justify-between text-left flex-1 lg:flex-initial`, inline style `minWidth: '150px', minHeight: '150px', background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(10px)'`.
       - Big number `<p>` classes `leading-none`, style `fontFamily: 'Britanica-Black, sans-serif', fontSize: 'clamp(2rem, 6vw, 2.6rem)', color: '#111'`.
       - Label `<p>` classes `text-[12px] mt-auto`, style `fontFamily: 'Inter, sans-serif', color: '#888'`.

**Animations / interactions:**
- Background video auto-loops muted.
- Nav link borders animate via `transition-all` on hover from `border-white/60` to `border-white`.
- Icon buttons fade to `opacity-70` on hover via `transition-opacity`.
- Reservations button swaps to white bg / red-600 text on hover via `transition-all`.
- `begin now` button has `hover:bg-gray-100` and `active:scale-95` via `transition-all`.
- Stat cards use `backdrop-filter: blur(10px)` over the red/video backdrop.

No other animations, keyframes, or JS state. No Supabase needed for this visual-only section.