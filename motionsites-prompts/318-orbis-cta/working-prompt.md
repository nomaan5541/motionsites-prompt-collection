---

> **Prerequisites (fonts, Tailwind config, CSS):**
>
> **Google Fonts** in `<head>`:
> ```html
> <link rel="preconnect" href="https://fonts.googleapis.com" />
> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
> <link href="https://fonts.googleapis.com/css2?family=Anton&family=Condiment&display=swap" rel="stylesheet" />
> ```
>
> **Tailwind custom config:**
> ```js
> fontFamily: {
>   grotesk: ['Anton', 'sans-serif'],
>   condiment: ['Condiment', 'cursive'],
> },
> colors: {
>   cream: '#EFF4FF',
>   neon: '#6FFF00',
> }
> ```
>
> **CSS class `.liquid-glass`** (glassmorphism container):
> ```css
> .liquid-glass {
>   background: rgba(255, 255, 255, 0.01);
>   background-blend-mode: luminosity;
>   backdrop-filter: blur(4px);
>   -webkit-backdrop-filter: blur(4px);
>   border: none;
>   box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
>   position: relative;
>   overflow: hidden;
> }
> .liquid-glass::before {
>   content: '';
>   position: absolute;
>   inset: 0;
>   border-radius: inherit;
>   padding: 1.4px;
>   background: linear-gradient(180deg,
>     rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
>     rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
>     rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
>   -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
>   -webkit-mask-composite: xor;
>   mask-composite: exclude;
>   pointer-events: none;
> }
> ```
>
> **Icons needed:** `Mail`, `Twitter`, `Github` from `lucide-react`.
>
> ---
>
> **Build the following section as a React component using Tailwind CSS:**
>
> A `<section>` with classes `relative overflow-hidden`. Inside it, a single `<div>` with classes `relative w-full`. This wrapper contains two children: the video and the overlay.
>
> ---
>
> **CHILD 1 -- Background video:**
>
> A `<video>` element that is NOT absolutely positioned -- it flows naturally and defines the section's height. Classes: `w-full h-auto block`. Attributes: `autoPlay`, `loop`, `muted`, `playsInline`. Source:
> ```
> https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4
> ```
> `type="video/mp4"`. The video's natural aspect ratio determines the section height -- there is no fixed height.
>
> ---
>
> **CHILD 2 -- Overlay content container:**
>
> A `<div>` absolutely positioned over the video with classes: `absolute inset-0 max-w-[1831px] mx-auto px-4 sm:px-6 md:px-8 flex items-start pt-12 sm:pt-16 md:pt-20 lg:pt-20 -translate-y-[10%] md:-translate-y-[10%] lg:translate-y-0`.
>
> Key details:
> - `absolute inset-0` makes it cover the full video area.
> - `max-w-[1831px] mx-auto` centers the content with the same max-width as the rest of the site.
> - `flex items-start` aligns content to the top.
> - `-translate-y-[10%]` shifts the entire overlay upward by 10% on mobile/tablet to compensate for the video's aspect ratio on smaller screens. On `lg:` it resets to `translate-y-0`.
> - Responsive top padding: `pt-12` (mobile), `sm:pt-16`, `md:pt-20`, `lg:pt-20`.
>
> Inside this overlay is a `<div>` with classes `w-full flex flex-col gap-16 sm:gap-24`. It contains two children: the text block and the social sidebar.
>
> ---
>
> **OVERLAY CHILD A -- Text block:**
>
> A `<div>` with classes `flex justify-end lg:pr-[20%] lg:pl-[15%] relative`. This pushes the text to the right side of the section. On large screens, `lg:pr-[20%]` adds 20% right padding and `lg:pl-[15%]` adds 15% left padding, centering the text block roughly in the right-center area of the video.
>
> Inside it, a `<div>` with classes `text-left max-w-[600px] relative`. This constrains the text width and establishes a positioning context for the accent text. Contains two children:
>
> **The heading `<h2>`:** Classes: `font-grotesk text-[16px] sm:text-[20px] md:text-[30px] lg:text-[60px] font-normal uppercase leading-[1.05] sm:leading-[1] md:leading-[1]`.
>
> The text content is structured as:
> ```jsx
> <span className="inline-block mb-4 sm:mb-6 md:mb-8 lg:mb-12">JOIN US.</span><br />
> REVEAL WHAT'S HIDDEN.<br />
> DEFINE WHAT'S NEXT.<br />
> FOLLOW THE SIGNAL.
> ```
> - "JOIN US." is wrapped in a `<span>` with `inline-block` and responsive bottom margin (`mb-4 sm:mb-6 md:mb-8 lg:mb-12`) to create visual separation from the lines below.
> - The remaining three lines are separated by `<br />` tags.
> - Font sizes scale aggressively: `16px` on mobile up to `60px` on large screens.
>
> **The accent text `<span>`:** Positioned absolutely within the `max-w-[600px]` container. Classes: `font-condiment text-neon text-[17px] sm:text-[24px] md:text-[34px] lg:text-[68px] font-normal normal-case absolute top-[8px] sm:top-[11px] md:top-[18px] lg:top-[37px] left-0 mix-blend-exclusion opacity-90`.
>
> Text content: **"Go beyond"**
>
> Key positioning details:
> - `absolute left-0` -- anchored to the left edge of the text container, aligning with "JOIN US." above.
> - `top-[8px]` on mobile, `sm:top-[11px]`, `md:top-[18px]`, `lg:top-[37px]` -- positions it so it overlaps just below the "JOIN US." line, sitting between "JOIN US." and "REVEAL WHAT'S HIDDEN."
> - `font-condiment` = Condiment cursive font. `normal-case` overrides the parent uppercase.
> - `text-neon` = `#6FFF00`. `mix-blend-exclusion` blends with the video. `opacity-90`.
> - Font sizes match the heading scaling: `17px` mobile, `24px` sm, `34px` md, `68px` lg.
>
> ---
>
> **OVERLAY CHILD B -- Social sidebar (bottom-left):**
>
> A `<div>` with classes `absolute left-[8%] bottom-[12%] sm:bottom-[14%] md:bottom-[16%] lg:bottom-[18%] xl:bottom-[20%]`. This positions the sidebar in the bottom-left area of the video, with the bottom offset increasing at each breakpoint so it stays proportionally placed as the video gets taller.
>
> Inside it, a `<div>` with the `liquid-glass` class and these additional classes: `rounded-[0.5rem] sm:rounded-[1.25rem] p-[0.25rem] sm:p-[0.75rem] md:p-[0.5625rem] lg:p-[0.98rem] w-fit flex flex-col gap-[0.0625rem] sm:gap-[0.125rem] md:gap-[0.09375rem] lg:gap-[0.16rem]`. This creates a vertical glass pill container.
>
> Inside the glass pill are **3 `<button>` elements** stacked vertically. Each button has these classes:
> ```
> w-[14vw] sm:w-[14.375rem] md:w-[10.78125rem] lg:w-[16.77rem]
> h-[1.8vh] sm:h-[3.5rem] md:h-[2.625rem] lg:h-[4.09rem]
> min-w-[3.5rem] sm:min-w-[8rem] md:min-w-[6rem] lg:min-w-[9.33rem]
> min-h-[0.75rem] sm:min-h-[2.5rem] md:min-h-[1.875rem] lg:min-h-[2.92rem]
> flex items-center justify-center hover:bg-white/10 transition-colors
> ```
> - The first two buttons also have `border-b border-white/10` (a subtle white divider line). The third (last) button does NOT have the border.
> - Width uses `14vw` on mobile (viewport-relative) then switches to fixed `rem` values at larger breakpoints.
> - Height uses `1.8vh` on mobile then fixed `rem` values.
> - `min-w` and `min-h` ensure buttons don't collapse too small on tiny screens.
>
> Each button contains one icon from `lucide-react`, in this order top to bottom:
> 1. `<Mail />` 
> 2. `<Twitter />`
> 3. `<Github />`
>
> All icons share the same responsive classes: `w-[0.625rem] h-[0.625rem] sm:w-[1.25rem] sm:h-[1.25rem] md:w-[0.9375rem] md:h-[0.9375rem] lg:w-[1.46rem] lg:h-[1.46rem] text-cream`.
> (Icons are `10px` on mobile, `20px` on sm, `15px` on md, `~23px` on lg.)
>
> ---
>
> **There are no animations or keyframes in this section.** The only motion is the autoplaying video. Buttons have `hover:bg-white/10 transition-colors` for a subtle hover effect.

---