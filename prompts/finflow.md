Build a single-page React + Vite + TypeScript landing page hero section using Tailwind CSS and `lucide-react`. Replace the contents of `src/App.tsx` with a single default-exported component. Do not install any extra packages.

**Layout & background**

- Root container: `relative min-h-screen flex flex-col overflow-hidden`, with inline `fontFamily: "'ITC Avant Garde Gothic W02 Bk', sans-serif"`.
- Behind everything, render an HTML5 `<video>` absolutely positioned `inset-0 w-full h-full object-cover z-0`, with `autoPlay muted loop playsInline` and an inline style `filter: 'saturate(0)'` (fully desaturated/grayscale).
- Use this exact src:
  `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260602_132418_e0e79d08-5d1f-42d9-b8ae-8dd69217aacf.mp4`
- All foreground content lives inside `<div className="relative z-10 flex flex-col min-h-screen">`.

**Navbar**

- `<nav>` with classes `flex items-center justify-between px-4 sm:px-8 py-4 sm:py-5 max-w-7xl mx-auto w-full`.
- Left: text logo "Fenvex" in `text-lg sm:text-xl font-semibold tracking-tight select-none`, color `#111111`.
- Center (desktop only, `hidden md:flex`): pill-shaped link group with `items-center gap-1 px-2 py-1.5 rounded-full`, background `#e5e5e5`. Links: `Platform`, `Tutorials`, `Compare`, `Solutions`. Each link: `text-sm px-4 py-1.5 rounded-full text-[#1a1a1a] hover:bg-white/50 transition-colors duration-200`.
- Right (desktop only): two buttons.
  - "Log in": `text-sm px-5 py-2 rounded-full transition-colors duration-200 hover:bg-white/20`, inline style `border: '1.5px solid #222222', color: '#222222'`.
  - "Sign up": `text-sm text-white px-5 py-2 rounded-full transition-all duration-200 hover:opacity-90`, inline style `background: 'linear-gradient(to bottom, #3a3a3a, #111111)', border: '1.5px solid transparent'`.
- Mobile (`md:hidden`): hamburger button using `lucide-react`'s `Menu`/`X` icons (size 22, color `#111111`), classes `p-2 rounded-full transition-colors duration-200 hover:bg-white/20`. Toggle a `mobileMenuOpen` `useState` boolean.

**Mobile dropdown**

- When `mobileMenuOpen` is true, render below the nav: `relative z-20 mx-4 rounded-2xl px-4 py-4 flex flex-col gap-2 md:hidden`, background `#e5e5e5`.
- Same four nav links as anchor tags: `text-sm px-4 py-2 rounded-xl text-[#1a1a1a] hover:bg-white/50 transition-colors duration-200`.
- Footer row inside: `flex gap-2 pt-2 border-t border-[#c0c0c0]` containing full-width "Log in" (outline) and "Sign up" (black gradient) buttons matching the desktop styling.

**Hero main**

- `<main className="flex-1 flex flex-col items-center justify-center text-center px-4 pb-32 sm:pb-40 -mt-40">`.
- `<h1>` with classes `font-bold leading-tight mb-4 sm:mb-5`, inline style `fontSize: 'clamp(1.75rem, 6vw, 3.75rem)', maxWidth: '800px', lineHeight: 1.1, color: '#111111'`. Text: **"Discover a faster path to financial flow"**.
- `<p>` with classes `text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-xs sm:max-w-md leading-relaxed`, color `#333333`. Text: **"Tap the Fenvex platform to craft payment experiences that are fast, trusted, and effortless."**
- CTA wrapper: `flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none`.
  - Primary CTA "Start building": `w-full sm:w-auto text-center text-white text-sm px-7 py-3 rounded-full transition-all duration-200 hover:opacity-90 shadow-lg`, inline style `background: 'linear-gradient(to bottom, #3a3a3a, #111111)', border: '1.5px solid transparent'`.
  - Secondary CTA "Reach our team": `w-full sm:w-auto text-center text-sm px-7 py-3 rounded-full transition-colors duration-200 backdrop-blur-sm hover:bg-white/20`, inline style `border: '1.5px solid #222222', color: '#222222'`.

**Logos card (bottom)**

- Wrapper: `w-full px-4 pb-6 sm:pb-10 flex justify-center`.
- Card: `w-full max-w-4xl bg-white rounded-2xl px-4 sm:px-8 py-5 sm:py-6 grid grid-cols-3 sm:flex sm:items-center sm:justify-between gap-4 sm:gap-6`, inline style `boxShadow: '0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.1)'`.
- Render six logos as `<img>` tags from simple-icons CDN (native brand colors, no filter):
  - Shopify: `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/shopify.svg`
  - Stripe: `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/stripe.svg`
  - Visa: `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/visa.svg`
  - Apple Pay: `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/applepay.svg`
  - Mastercard: `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mastercard.svg`
  - PayPal: `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/paypal.svg`
- Each logo wrapped in `<div className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-200" title={name}>`.
- Default image size: `h-6 sm:h-7 w-auto`. For Visa, Apple Pay, and Mastercard only, use `h-7 sm:h-8 w-auto` (~15% larger).

**Other notes**

- Do not add any background overlays — the desaturated video is the direct backdrop and the foreground text is dark gray/black on top.
- No additional animations beyond the Tailwind `transition-*` and `hover:*` utilities specified above.
- Do not modify `index.html`, Tailwind config, or `index.css`. Everything lives in `src/App.tsx`.

---