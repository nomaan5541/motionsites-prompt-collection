Build a Launchex Awards landing page using React + Vite + Tailwind CSS + TypeScript + lucide-react. The page has 3 sections plus persistent overlay navigation elements. Use the fonts "Inter" (body) and "TT Firs Neue" (display headings). The entire page lives inside a white container with 20px padding (p-3 on mobile, p-5 on desktop) creating an inset card effect with large rounded corners (28px mobile, 36px desktop). The scrollable content lives in an absolutely-positioned div inside this container with hidden scrollbars.

---

## FONTS

Load via `<link>` in index.html:
- Google Fonts Inter: weights 300, 400, 500, 600, 700
- TT Firs Neue from: `https://db.onlinewebfonts.com/c/69f2576e7ca287875bf8d089130e292c?family=TT+Firs+Neue`

In CSS define:
```css
html, body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  background: #ffffff;
}
.font-firs {
  font-family: 'TT Firs Neue', 'Inter', system-ui, sans-serif;
}
.no-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
```

---

## COLOR PALETTE

- Primary dark: `#154359`
- Teal accent: `#066377`
- Light background: `#F0F0F0` (nominations section)
- Lighter background: `#F0F5F7` (about section)
- Gradient text: `linear-gradient(294deg, #185B7B 20%, #4BBDF0)`
- Nomination stroke: `rgba(6, 99, 119, 0.25)`

---

## OUTER SHELL STRUCTURE

```
div.h-screen.bg-white.p-3.sm:p-5
  div.relative.w-full.h-full.overflow-hidden.rounded-[28px].sm:rounded-[36px].bg-white
    div.absolute.inset-0.overflow-y-auto.overflow-x-hidden.no-scrollbar
      [SECTIONS GO HERE]
    [NAV BAR - absolute positioned]
    [BOTTOM OVERLAYS - absolute positioned]
```

---

## SECTION 1: HERO

- Full viewport height: `min-height: calc(100vh - 40px)`
- Background: autoplaying, looping, muted video filling the section with `object-cover`
  - Video URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_151648_2bdfbd1c-6bde-4f5d-a967-f57cbced97f6.mp4`
- Overlay gradient on the video: `bg-gradient-to-b from-black/10 via-transparent to-black/20`

**Top bar (z-20):** flex row, justify-between, px-4 sm:px-10, pt-5 sm:pt-8
- Left: Logo using lucide-react `Sparkles` icon (w-5 h-5 sm:w-6 sm:h-6, strokeWidth 1.5) + text "launchex" (14px sm:15px, font-semibold, tracking-tight) and "awards" below (10px sm:11px, font-light, opacity-90, -mt-0.5). All white.
- Right: CTA button "Send in your entry form" (hidden on mobile, shows "Enter" on mobile). Teal background `#066377`, white text, 10px sm:11px, uppercase, tracking-[0.14em], font-medium. Has a chamfered/clipped shape using `clipPath: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)`. Includes `ArrowUpRight` icon (w-3.5 h-3.5) that moves on hover (translate-x-0.5, -translate-y-0.5). Button has `hover:brightness-125` transition.

**Center content (z-10):** flex-col, items-center, text-center, color `#154359`, pt-32 sm:pt-40, pb-24
- Eyebrow: "Prize for ventures" - 11px sm:12px, uppercase, tracking-[0.3em], font-medium, mb-6, opacity-90
- Heading: "launchex prizes" (two lines with `<br/>`), using `.font-firs`, font-normal, tracking-[-0.04em], leading-[0.9], sizes: 48px / 76px / 100px / 120px (responsive breakpoints)
- Subtext: "Bridging visions with reality, helping ventures soar up to the stars" - 12px sm:14px, uppercase, tracking-[0.22em], font-medium, max-w-md, leading-[1.8], opacity-90, mt-8

---

## SECTION 2: SUBMISSIONS (NOMINATIONS)

- Background: `#F0F0F0`
- Padding: py-20 sm:py-28, px-6 sm:px-10
- Overflow hidden, relative positioning

**Layout:** 3-column on large (left nominations | center video | right nominations), stacked on mobile (center first, then left, then right). max-w-5xl, mx-auto, gap-10 lg:gap-12.

**Center column:**
- Header text: "[submissions]" (12px, tracking-[0.24em], uppercase) and "submissions" below (font-firs, 44px sm:54px, font-semibold, tracking-tight, uppercase). Color `#154359`.
- Video below (mt-6 sm:mt-8): 220px/380px/460px square (responsive), object-cover
  - URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260514_154120_b89bfedd-530d-4ebb-9eb7-42eeafe08667.mp4`
  - autoPlay, loop, muted, playsInline

**Left nominations (3 cards), pushed down with lg:mt-36:**
1. "Lead" / "AI venture for commerce"
2. "Emerging innovations" / "in food commerce"
3. "The finest innovations" / "for learners and young students"

**Right nominations (3 cards), pushed down with lg:mt-36:**
1. "Innovations for advanced" / "career training"
2. "The finest innovations" / "in finance"
3. "Categories" / "coming soon"

**NominationCard component:**
- `<a>` tag, max-w-[20em], h-[5em], hover:-translate-y-0.5 transition
- Contains an SVG with a chamfered rectangle (polygon points="14,0 100,0 100,86 86,100 0,100 0,14") as border - stroke `rgba(6, 99, 119, 0.25)`, strokeWidth 1, vectorEffect non-scaling-stroke, fill none, preserveAspectRatio="none", viewBox="0 0 100 100"
- Text centered inside: title in 13px font-semibold, subtitle in 12px font-normal opacity-80. Color `#154359`.

**Bottom fade gradient (pointer-events-none, absolute, bottom-0, full width, h-40 sm:h-56, z-10):**
- `linear-gradient(to bottom, rgba(240, 245, 247, 0) 0%, rgba(240, 245, 247, 0.7) 60%, #F0F5F7 100%)`

---

## SECTION 3: ABOUT THE FOUNDERS

- Background: `#F0F5F7`
- Padding: py-20 sm:py-28, px-6 sm:px-10
- max-w-7xl mx-auto

**Top row:** flex-col on mobile, flex-row on lg. Color `#154359`.
- Left: Heading "About the founders" (two lines) - font-firs, 36px/48px/54px, font-semibold, uppercase, tracking-tight, leading-[0.95]
- Right: max-w-xl column
  - Two paragraphs (17px sm:18px, leading-[1.5]):
    - "Launchex.Hub is a platform that is part of a portfolio of companies Launchex, for sourcing and showcasing groundbreaking innovations."
    - "Launchex.Hub's mission is to offer every local-language innovator the chance to reshape our world with their pioneering creation."
  - Link "Launchex.Hub website" with arrow icon (mt-6, 14px, font-medium). Arrow in a chamfered 32x32 box with border in `#154359`, clipPath `polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)`. Hover: -translate-y-0.5. Links to `https://base.launchex.vc/`

**Stats grid (mt-14):** 1 col / 2 col md / 3 col lg, gap-5. Three cards:

Card 1: "7+ years" / "Launchex has served the market, guiding ventures and their journeys"
- Image: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260514_154203_6c6f94dc-a07e-4ba5-8688-106f01ccd2c8.png&w=1280&q=85`
- No vertical offset
- clipPath: `polygon(64px 0, calc(100% - 14px) 0, calc(100% - 4px) 4px, 100% 14px, 100% calc(100% - 14px), calc(100% - 4px) calc(100% - 4px), calc(100% - 14px) 100%, 14px 100%, 4px calc(100% - 4px), 0 calc(100% - 14px), 0 64px)`
- Text position: left-6 right-6 bottom-6

Card 2: "15000+" / "innovation ventures moved through the Launchex pipeline"
- Image: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260514_154151_45c62c60-3bcc-4f21-8f9d-03722ebb5df8.png&w=1280&q=85`
- Offset: lg:mt-24 (pushed down on desktop)
- clipPath: `polygon(0 14px, 4px 4px, 14px 0, calc(100% - 64px) 0, 100% 64px, 100% calc(100% - 14px), calc(100% - 4px) calc(100% - 4px), calc(100% - 14px) 100%, 64px 100%, 0 calc(100% - 64px))`
- Text position: left-6 bottom-20

Card 3: "120+" / "accelerator sessions delivered by Launchex across Eastern Europe"
- Image: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260514_152238_24ec8db4-d728-4739-bb30-e985533e9637.png&w=1280&q=85`
- No vertical offset
- clipPath: `polygon(0 14px, 4px 4px, 14px 0, calc(100% - 64px) 0, 100% 64px, 100% calc(100% - 64px), calc(100% - 64px) 100%, 14px 100%, 4px calc(100% - 4px), 0 calc(100% - 14px))`
- Text position: left-6 right-28 bottom-6

**Each stat card structure:**
- Outer div: w-full, h-[280px] sm:h-[340px], backgroundColor `rgba(255, 255, 255, 0.8)`, padding `1.5px` (acts as border), clipPath applied
- Inner div: w-full h-full, overflow-hidden, background-image set to the image URL, bg-cover bg-center, same clipPath applied, `mixBlendMode: 'plus-darker'`
- Text overlay (absolute positioned): value in font-firs, font-semibold, uppercase, 36px sm:52px, gradient text (`linear-gradient(294deg, #185B7B 20%, #4BBDF0)` with background-clip text, color transparent). Description in 14px, leading-[1.4], color `#154359`, mt-3. Max-width 66%.

**Bottom fade gradient (same as section 2):**
- `linear-gradient(to bottom, rgba(240, 245, 247, 0) 0%, rgba(240, 245, 247, 0.7) 60%, #F0F5F7 100%)`

---

## PERSISTENT OVERLAY ELEMENTS (inside the outer rounded container, outside the scrollable area)

**Top navigation bar:**
- Hidden on mobile (`hidden md:flex`), absolute, top-0, centered horizontally (left-1/2 -translate-x-1/2), z-40
- White background, border-bottom-left-radius and border-bottom-right-radius: 28px
- Padding: px-6 lg:px-10, py-4, gap-6 lg:gap-10
- Links: "About", "Submissions", "Venue", "Judges", "Connect" - 11px, uppercase, tracking-[0.14em], font-medium, text-neutral-800, hover:text-neutral-500
- Two decorative `<span>` elements on left (-left-6) and right (-right-6) that create inverted rounded corners using radial-gradient masks:
  - Left: `radial-gradient(circle at 0 100%, transparent 24px, black 25px)`
  - Right: `radial-gradient(circle at 100% 100%, transparent 24px, black 25px)`

**Bottom-right page indicator:**
- pointer-events-none, absolute, bottom-4 sm:bottom-6, right-4 sm:right-8, z-40
- "01" [line] "05" - flex, gap-3, text-white/80, 10px, font-medium, uppercase, tracking-[0.18em], mix-blend-difference
- Line is a span: w-8 h-px bg-white/40

**Bottom-left scroll indicator:**
- pointer-events-none, absolute, bottom-4 sm:bottom-6, left-4 sm:left-8, z-40
- "Scroll to discover" - text-white/80, 10px, font-medium, uppercase, tracking-[0.18em], mix-blend-difference

---

## KEY IMPLEMENTATION DETAILS

- All clip-paths use the `polygon()` function with pixel-based chamfers creating angular/geometric cut corners
- The page is fully responsive with sm/md/lg breakpoints
- Videos use autoPlay, loop, muted, playsInline attributes
- Use lucide-react for Sparkles and ArrowUpRight icons only
- The stat card images use `mix-blend-mode: plus-darker` for a deeper tonal effect
- No scrollbar is visible (custom CSS utility)
- All transitions are subtle: translate, color changes, brightness
- The outer container clips all content with its rounded corners - the scroll happens inside