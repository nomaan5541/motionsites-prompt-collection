---

**Prompt:**

Create a full-viewport services section (100vh) with a solid gray background (`#C5C5C5`), vertically centered content, containing a counter label, a heading/subtext row, and a 3-column card grid with video thumbnails.

**Section layout:**
- `position: relative; z-index: 2; background-color: #C5C5C5`
- `display: flex; flex-direction: column; justify-content: center`
- `height: 100vh`
- Padding: `70px 32px 80px 32px`

**Content (top to bottom):**

**1. Counter label:**
- Text: `"003 / 005"`
- `font-size: 11px; letter-spacing: 0.08em; color: #666; margin-bottom: 20px`
- Fade-up animation with `delay: 0`

**2. Heading + subtext row:**
- A flex row (`display: flex; gap: 48px; align-items: flex-start; margin-bottom: 32px`)
- **Left column** (heading): `flex-shrink: 0; width: 32%`
  - `<h2>` with text: `"EXPLORE WHAT WE OFFER"`
  - Each word is an individual `<span>`, displayed via `display: flex; flex-wrap: wrap; gap: 0.25em`
  - Word-by-word staggered fade-up: first word at `delay: 0.1`, each adds `0.1s`, with `y: 28px`
  - Typography: `font-size: clamp(26px, 3vw, 42px); font-weight: 700; line-height: 1.05; letter-spacing: -0.01em; text-transform: uppercase; color: #1a1a1a; margin: 0; max-width: 320px`
- **Right column** (subtext): `flex: 1; padding-top: 8px`
  - `<p>` text: `"We provide all-in-one AI automation services in one place."`
  - `font-size: 14px; line-height: 1.65; color: #3a3a3a; max-width: 320px; margin: 0`
  - Fade-up with `delay: 0.25`

**3. Cards grid:**
- `display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: 1fr; gap: 20px; align-items: stretch`
- 3 cards, each with staggered fade-up: `delay: 0.4`, `0.55`, `0.70`

**Card data:**

| # | Video URL | Title | Description |
|---|-----------|-------|-------------|
| 1 | `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260513_220333_48163edc-995f-4513-9f44-48dbb07a7329.mp4` | Process Streamlining | We automate your processes by linking together the daily tools you rely upon. Lifting throughput and improving overall output. |
| 2 | `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260513_221040_e6ba7c5a-864e-46e9-871e-341a176a7e3e.mp4` | Strategic advisory | We craft intelligent assistants that are adaptive, grasp context, and are skilled enough to handle highly intricate customer requests. |
| 3 | `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260513_221104_fb538584-5b87-495f-952e-09ddd5a1792a.mp4` | Assistant engineering | Through our knowledge, we explore deep into your business and advise you on how AI powered automations may transform your operations. |

**Card structure (each card):**
- Container: `background: transparent; border: 1px solid rgba(0,0,0,0.18); border-radius: 20px; overflow: hidden; display: flex; flex-direction: column; min-height: 0; padding-top: 16px`
- **Video area:** `width: 100%; aspect-ratio: 4/3; position: relative; overflow: hidden`
  - `<video>` with `autoPlay muted loop playsInline`, styled `position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block`
- **Text area:** `padding: 24px 28px 28px 28px`
  - Title `<h3>`: `font-size: 18px; font-weight: 600; color: #1a1a1a; margin: 0; margin-bottom: 14px`
  - Description `<p>`: `font-size: 13px; line-height: 1.6; color: #3a3a3a; margin: 0`

**Animation (FadeUp component -- same as section 2):**
All animated elements use Framer Motion `whileInView` with `viewport: { once: true, amount: 0.2 }`, easing `[0.22, 1, 0.36, 1]`, duration `0.7s`, default `y: 24px` unless overridden.

**Font:**
```css
@import url('https://db.onlinewebfonts.com/c/e66905e07608167a84e6ad52f638c3c6?family=Helvetica+Now+Var');
* { font-family: 'Helvetica Now Var', 'Helvetica Neue', Helvetica, Arial, sans-serif; }
```

**Mobile responsive (max-width: 900px):**
- Section padding: `90px 18px 60px 18px`
- Section becomes `height: auto; min-height: 100vh` (so cards aren't crushed)
- Heading + subtext row stacks vertically: `flex-direction: column; gap: 16px; margin-bottom: 24px`
- Heading column becomes `width: 100%`
- Cards grid becomes single column: `grid-template-columns: 1fr; gap: 16px`

**Tech stack:** React 18, TypeScript, Vite, Tailwind CSS 3, Framer Motion 12.

---