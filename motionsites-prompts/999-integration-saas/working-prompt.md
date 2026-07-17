Build a full-screen hero section landing page for a data platform called "DataVio" using React, Tailwind CSS, and Vite. Use the Geist font (from Google Fonts: `https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap`). Add the font-family to the Tailwind config under `fontFamily.geist`.

**Background:**
- Full-screen (`h-screen`) background video, auto-playing, muted, looped, with `playsInline`. Use this video URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_151414_1020688d-fcb3-4b2a-9bc2-cd1dae8853dd.mp4`
- The video uses `object-cover` and on mobile the object-position is `70% center`, on `md:` and up it's `center`.

**Gradient Overlay (color: #B69198):**
- On mobile (`md:hidden`): a gradient from bottom to top -- solid `#B69198` from 0% to 30%, then fading to transparent at 55%.
- On desktop (`hidden md:block`): a gradient from left to right -- solid `#B69198` from 0% to 30%, then fading to transparent at 55%.
- Both overlays sit at `z-[1]` between the video and content.

**Navigation:**
- Flexbox row, justify-between. Padding: `px-5 sm:px-6 md:px-12 lg:px-16 py-4 md:py-5`.
- Left side: Brand name "DataVio" in white, `text-lg sm:text-xl md:text-2xl`, `font-semibold`, `tracking-tight`.
- Next to the brand (hidden on mobile, visible `md:flex`): links "Platform", "Pricing", "Solutions", "Connectors" in `text-white/80 hover:text-white text-sm font-medium` with `transition-colors duration-200`, spaced with `gap-6 lg:gap-8`.
- Right side (hidden on mobile): "Sign In" link, same text style as nav links.
- Mobile: A hamburger menu icon (Lucide `Menu`, size 24) that opens a slide-in panel from the right.

**Mobile Menu:**
- Overlay: fixed `inset-0`, `bg-black/60 backdrop-blur-sm z-40`, fades in/out with `transition-opacity duration-300`.
- Panel: fixed `top-0 right-0 h-full w-[280px] sm:w-[320px]`, white background, `z-50`, slides in from right using `translate-x-0` / `translate-x-full` with `duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]`, `shadow-2xl`.
- Inside: close button (Lucide `X`, size 24) top-right, then nav links as stacked list items (`text-gray-800 text-lg font-medium py-3 border-b border-gray-100`), each staggered with `transitionDelay: (i+1)*60ms` on open. A "Sign In" CTA button at the bottom (`bg-gray-900 text-white rounded-lg px-6 py-3`) with `transitionDelay: 320ms`.
- Lock body scroll when menu is open (`document.body.style.overflow = 'hidden'`).

**Hero Content (z-10, flex-col, full height):**
- Layout: `flex-1 flex flex-col justify-between`, padding `px-5 sm:px-6 md:px-12 lg:px-16 py-4 sm:py-6 md:py-10`.
- **Heading** (top): `max-w-3xl`, padding-top `pt-2 sm:pt-4 md:pt-8`. Text: "One Central Hub" / "for Every Source" (line break between). Style: `text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-normal text-white leading-[1.1] tracking-tight`.
- **Bottom content** (`max-w-3xl pb-2 sm:pb-4 md:pb-6`):
  - Paragraph: `text-white/75 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl`. Starts with bold white span: "End fragmented pipelines." then regular text. Another bold white span: "transparency, governance, and scalable systems".
  - CTA Buttons (`mt-5 sm:mt-6 md:mt-8 flex flex-wrap gap-3 sm:gap-4`):
    - Primary: "Start Integration" -- `bg-white text-gray-900 text-sm font-medium rounded-lg px-5 sm:px-6 py-2.5 sm:py-3 hover:bg-white/90`.
    - Secondary: "Schedule Call" -- `text-white/80 text-sm font-medium hover:text-white`.
  - Social proof pill (`mt-6 sm:mt-8 md:mt-10`): `inline-flex items-center gap-3 sm:gap-4 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-4 sm:px-5 py-3 sm:py-3.5`.
    - 3 overlapping avatar images (Pexels URLs: `774909`, `1222271`, `91227` with `?auto=compress&cs=tinysrgb&w=100`), each `w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white/30 object-cover`, stacked with `-space-x-2.5`.
    - Text: `text-white/80 text-xs sm:text-sm leading-snug max-w-[220px] sm:max-w-xs`. Bold white span: "Adopted by 2,000+ companies and dev teams" followed by "who ship quicker, iterate safely, and keep full ownership of their pipelines."

**CSS (index.css):**
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
  font-family: 'Geist', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

**Tailwind Config:**
Extend `fontFamily` with `geist: ['Geist', 'system-ui', 'sans-serif']`.

**Key details:**
- No other sections -- just this single full-screen hero.
- Fully responsive from mobile to desktop.
- Uses only `lucide-react` for icons (Menu, X).
- All content is at `z-10`, overlays at `z-[1]`, video at default layer.