**Build a fullscreen hero section with a looping background video, navigation bar, and centered content. Use React, TypeScript, Tailwind CSS, and Lucide React icons. Here are the exact specifications:**

---

## Fonts

Load two fonts in `index.html`:
- **Qanelas-Heavy** from `https://db.onlinewebfonts.com/c/3010f9da43a41a81d5daa32bd6edebc2?family=Qanelas-Heavy`
- **Inter** (weights 400, 500, 600, 700) from Google Fonts

Define custom font utility classes in `index.css`:
- `.font-qanelas` -- font-family: 'Qanelas-Heavy', sans-serif; font-weight: 900;
- `.font-inter` -- font-family: 'Inter', sans-serif;

Register both in `tailwind.config.js` under `theme.extend.fontFamily`.

---

## Layout

The entire section is `w-full h-screen overflow-hidden` with `font-inter` as the base font. Everything is stacked via `relative`/`absolute` positioning.

---

## Background Video

A `<video>` element set to `autoPlay muted loop playsInline` with class `absolute inset-0 w-full h-full object-cover`. The video source URL is:

```
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260613_235144_2f72690f-ad2d-4b1d-9dc1-96fc97d01ca5.mp4
```

---

## Content Layer

A `relative z-10 flex flex-col h-full` container holds everything on top of the video.

---

## Navigation Bar

- Container: `flex items-center justify-between`, padding `px-5 sm:px-6 md:px-12 lg:px-16 py-4 md:py-5`
- Has the `animate-nav` class (fades down from -20px, 0.6s duration, 0.1s delay, ease-out-expo curve)

**Left -- Brand:**
- Text: `text-xl sm:text-2xl font-bold text-gray-900`
- First part: `"Zipwire."` in `font-qanelas italic`
- Second part: `"Dev"` in `font-inter font-normal text-gray-600`

**Center -- Desktop nav links (hidden below md):**
- `flex items-center gap-8`
- Four links: "Overview" (#overview), "Docs" (#docs), "Our Team" (#team), "Upgrade" (#upgrade)
- Each: `text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors`

**Right -- Desktop actions (hidden below md):**
- Language indicator: a small `w-5 h-4 rounded-sm bg-black` box with white "DE" text (10px), next to "EN" in `font-medium`
- Green CTA button: `bg-[#4CAF50] hover:bg-[#43A047] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors` with a `Download` icon (w-4 h-4) and text "Get It Today"

**Right -- Mobile hamburger (md:hidden):**
- A button with a `relative w-6 h-6` container holding both `X` and `Menu` icons absolutely positioned
- Icons crossfade with rotation: `transition-all duration-300`, the active icon is `opacity-100 rotate-0`, the inactive is `opacity-0` with `rotate-90` or `-rotate-90`

---

## Mobile Menu

- Uses two state variables: `menuOpen` (controls open/close intent) and `menuVisible` (controls DOM presence)
- When `menuOpen` becomes true, `menuVisible` is set true via `useEffect`
- On close, `menuOpen` is set false (triggers exit animation), then `animationend` listener sets `menuVisible` false to unmount
- Container: `absolute top-[60px] left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg`
- Gets class `mobile-menu-enter` when opening (slides down from -12px, 0.35s, ease-out-expo) or `mobile-menu-exit` when closing (slides up, 0.25s, ease-in)
- Contains the same 4 nav links (each with `onClick` that calls `handleCloseMenu`) plus the language indicator and green CTA button separated by a `border-t border-gray-200`
- Menu items stagger in via `hero-fade-up` animation with delays: 0.06s, 0.1s, 0.14s, 0.18s, 0.22s (applied via `.mobile-menu-enter > div > *:nth-child(n)` CSS selectors)

---

## Hero Content

- Container: `flex-1 flex flex-col items-center justify-start pt-20 sm:pt-24 md:pt-24 px-4 sm:px-6`

**Heading (animate-hero-1, delay 0.2s):**
- `font-qanelas uppercase text-center tracking-tight text-gray-900`
- Responsive sizing: `text-[2.5rem] leading-[0.95] sm:text-5xl md:text-7xl lg:text-8xl xl:text-[110px]`
- Text: `"Push.Route.Deploy"`

**Subtitle (animate-hero-2, delay 0.45s):**
- `mt-4 sm:mt-5 md:mt-7 text-center text-gray-700 font-medium leading-relaxed max-w-2xl px-2`
- Responsive sizing: `text-sm sm:text-base md:text-lg lg:text-xl`
- Text: `"Get Full Mesh Data Streams, Automatic UDP Hole Punching, Granular Controls, And Many More Cool Tricks!"`

**QR Code Card (animate-hero-3, delay 0.7s):**
- Wrapper: `mt-6 sm:mt-8 md:mt-10 flex flex-col items-center`
- Card: `rounded-xl p-1.5 inline-flex flex-col items-center bg-[#4CAF50]`
- Image: `rounded-lg object-cover` with responsive sizing `w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40`
- Image URL: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260614_015530_9919c38f-0eff-4385-b433-4f14fbf00c73.png&w=1280&q=85`
- Label beneath image: `"Try Now"` in `text-white text-[11px] sm:text-xs font-semibold mt-1.5 sm:mt-2 mb-0.5 tracking-wide`

---

## Scroll Indicator

- Positioned `absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 animate-bounce`
- Contains a `ChevronDown` icon, `w-5 h-5 sm:w-6 sm:h-6 text-gray-600`

---

## Animations (all in index.css)

All entrance animations use `opacity: 0` as the initial state with `animation-fill-mode: forwards`.

| Class | Keyframes | Duration | Delay | Easing |
|---|---|---|---|---|
| `.animate-nav` | `nav-fade-down` (translateY -20px to 0) | 0.6s | 0.1s | cubic-bezier(0.16, 1, 0.3, 1) |
| `.animate-hero-1` | `hero-fade-up` (translateY 30px to 0) | 0.8s | 0.2s | cubic-bezier(0.16, 1, 0.3, 1) |
| `.animate-hero-2` | `hero-fade-up` | 0.8s | 0.45s | cubic-bezier(0.16, 1, 0.3, 1) |
| `.animate-hero-3` | `hero-fade-up` | 0.8s | 0.7s | cubic-bezier(0.16, 1, 0.3, 1) |
| `.mobile-menu-enter` | `menu-slide-down` (translateY -12px to 0) | 0.35s | 0 | cubic-bezier(0.16, 1, 0.3, 1) |
| `.mobile-menu-exit` | `menu-slide-up` (translateY 0 to -12px) | 0.25s | 0 | cubic-bezier(0.7, 0, 0.84, 0) |