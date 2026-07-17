# Working Prompt: Build With Us

This is the original full prompt returned by the MotionSites `get-prompt` endpoint in the current session.

## Metadata

- Prompt ID: `build-with-us`
- Category: Contact us
- Page type: hero
- Source status: fetched
- Preview video: https://stream.mux.com/aXWzAQSt5LYGkvn02f01XVj6ItN001ZUXtecVKocRFl9UQ.m3u8
- Preview image: 

## Prompt

```
Build a single-page React + TypeScript + Vite + Tailwind site that is a full-screen video-background landing page with a contact form. Use `lucide-react` for icons.

**Layout & Sizing**
- Root: `min-h-screen` white background with padding `p-3 sm:p-4 md:p-6`.
- Inside the root, one large rounded card with `rounded-2xl sm:rounded-3xl`, `overflow-hidden`. Heights: `min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)] lg:h-[calc(100vh-48px)]`. On desktop it locks to viewport; on tablet/mobile it expands to content.
- Background video fills the card (`absolute inset-0 w-full h-full object-cover`). The video element has `autoPlay muted loop playsInline`. Use this exact URL:
  ```
  https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260602_150901_c45b90ec-18d7-42ff-90e2-b95d7109e330.mp4
  ```
- Content layer: `relative z-10 flex flex-col` with the same min-height ladder as the card and `lg:h-full`, padding `p-4 sm:p-6 md:p-8`, `gap-6`.

**Fonts**
- Import from Google Fonts in `index.css`: `Inter` (weights 300–700) and `Instrument Serif` (italic + regular).
- Set `* { font-family: 'Inter', sans-serif; }` globally.
- Use `Instrument Serif` italic for one accent word inline (see headline below).

**Navbar (top)**
- Pill bar with `bg-white/60 backdrop-blur-md rounded-2xl shadow-sm`, padding `pl-3 sm:pl-4 pr-2 py-2`, `w-full sm:w-auto`, `flex items-center gap-3 sm:gap-6`.
- Logo: 32x32 inline SVG (`viewBox="0 0 256 256"`) with two black filled paths forming a stylized "M":
  `M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z`.
- Links (hidden on mobile, shown `sm:flex`): `Our story`, `Expertise`, `Our work`, `Journal` — class `text-gray-800 text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap`.
- CTA button on the right: black pill `bg-black text-white text-sm font-medium px-4 sm:px-5 py-2 rounded-xl hover:bg-gray-800` with label `Start a project`. On mobile it floats right with `ml-auto`.

**Spacer**
- A `<div className="flex-1 min-h-[2rem]" />` between nav and the bottom row.

**Bottom row (headline + form)**
- Container: `flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6`.

**Headline (left)**
- `<p>` with white text, `text-3xl sm:text-4xl xl:text-5xl font-medium leading-tight drop-shadow-lg lg:max-w-lg xl:max-w-2xl shrink-0`.
- Content (with `<br />`):
  `We craft bold ideas` / `and ship them as *products*`
- The word `products` is wrapped in a `<span>` with inline style: `fontFamily: "'Instrument Serif', serif"`, `fontStyle: 'italic'`, `fontWeight: 400`.

**Contact form card (right)**
- Outer: `w-full lg:w-[min(480px,45%)] shrink-0`.
- Card: `bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden`, inner padding `p-4 sm:p-6`, `flex flex-col gap-4`.

1. **Heading:** `Say hello! 👋` — `text-xl sm:text-2xl font-semibold text-black tracking-tight`.

2. **Email + socials row** (always horizontal): `flex flex-row items-center justify-between gap-3 bg-gray-50 rounded-2xl px-4 py-2.5`.
   - Left: small grey label `Drop us a line`, then mailto link `hello@forma.co` in `text-blue-600 font-semibold hover:underline truncate`.
   - Right: four 32x32 rounded-xl buttons (`w-8 h-8 rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity`) using lucide icons size 13:
     - Twitter — `bg-gray-100 text-gray-800`
     - Circle — `bg-pink-100 text-pink-500`
     - Instagram — `bg-orange-100 text-orange-400`
     - Linkedin — `bg-blue-100 text-blue-600`
   - Extract this into a small `SocialBtn` helper component.

3. **OR divider:** horizontal lines on either side of the word `OR` (`text-gray-400 font-medium text-sm`, lines `flex-1 h-px bg-gray-200`).

4. **Form** (`flex flex-col gap-4`):
   - Label `Tell us about your vision` (`text-sm font-medium text-black`).
   - Name + Email inputs side by side on `sm:` (`flex flex-col sm:flex-row gap-2`), placeholders `Full name` and `Email`. Input style: `flex-1 min-w-0 text-sm px-3 py-2.5 rounded-xl border border-gray-200 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition`.
   - Textarea, 4 rows, placeholder `What are you looking to build or improve...`, same input style plus `resize-none`.
   - Service tags section: label `I need help with...`. Tags wrap (`flex flex-wrap gap-1.5`). Each tag is a button `text-xs font-medium px-3 py-2 rounded-lg border transition-all`. Inactive: `bg-white text-gray-700 border-gray-200 hover:border-gray-400`. Active (selected): `bg-gray-100 text-black border-black`. Multi-select toggle via state.
     - Services list (exact order): `Website`, `Mobile App`, `Web App`, `E-Commerce`, `Visual Identity`, `3D & Motion`, `Digital Marketing`, `Growth & Consulting`, `Other`.
   - Submit button: `w-full bg-black text-white text-sm font-semibold py-3 rounded-2xl hover:bg-gray-800 transition-colors disabled:opacity-60`. Label: `Send my message` (or `Sending...` while submitting).

5. **Submit behavior:** On submit, set `sending=true`, await a 1-second fake delay (`new Promise(r => setTimeout(r, 1000))`), then show a success state in place of the form: centered column with `py-6 gap-3`, a 48x48 green check pill (`w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-xl` containing `✓`), heading `You're all set!` (`text-base font-semibold text-gray-900`), and subtext `Expect a reply within 24 hours.` (`text-sm text-gray-500`).

**State (useState)**
- `selected: string[]` (toggled service chips)
- `name`, `email`, `message`: strings
- `sending`, `sent`: booleans

**Transitions/animations**
- All interactive elements use Tailwind `transition-*` utilities (opacity, colors, all).
- No external animation library; rely on Tailwind hover/focus transitions and `backdrop-blur-md` on the navbar.

**Constants at the top of the file**
- `VIDEO_URL` (the CloudFront URL above) and `SERVICES` array.

**Files**
- `src/App.tsx` — entire component plus `SocialBtn` helper.
- `src/index.css` — Google Fonts import + Tailwind directives + global `* { font-family: 'Inter', sans-serif; }`.
- Standard Vite + Tailwind config (`tailwind.config.js` scanning `./index.html` and `./src/**/*.{ts,tsx}`).
```
