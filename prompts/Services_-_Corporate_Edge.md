---
title: "Services - Corporate Edge"
category: Sections
subCategory: Features
premium: false
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1783707494811-Services-Corporate.webp
---

# Services - Corporate Edge

```text
Act like an award-winning designer and web developer. Your task is to build an immersive, ultra-premium digital agency portfolio website using React, Tailwind CSS, Framer Motion, and GSAP. The design must be breathtaking, interactive, and flawlessly responsive, utilizing a dark "deep space and clouds" aesthetic.

Below is the complete, exhaustive specification for this project.

---

# 1. Visual Design System

## Exact Color Palette
- **Deep Navy Background (Primary):** `#0a0f24`
- **Pitch Navy Background (Secondary):** `#050814`
- **Gradient Transition Blue:** `#1a2b4c`
- **Neon Cyan Accent:** `#00ffcc`
- **Primary Text:** `#ffffff` (White)
- **Dark Text (for high contrast areas):** `#112024`
- **White Opacities:** heavily utilize `rgba(255,255,255, 0.8)` for body text and `rgba(255,255,255, 0.1)` for borders and subtle icons.

## Typography
- **Primary Headings:** `Cormorant Garamond`
  - Sizes ranging from `text-5xl` up to `text-[12rem]` or `15vw`.
  - Weights: `font-light` (Hero), `font-semibold` (Logos).
  - Tracking: `tracking-tighter` or normal.
  - Line Height: Ultra-tight (`leading-none`, `leading-[0.85]`).
- **Body & Accents:** `Inter`
  - Sizes: `text-xs` to `text-xl`.
  - Styling for overlines/categories: `uppercase`, `tracking-[0.2em]` to `tracking-[0.3em]`, `font-bold` or `font-medium`.

## Layout & Grid
- The site follows a central max-width constraint for content blocks (e.g., `max-w-7xl` or `max-w-[90rem]`), while backgrounds, nav, and hero sections bleed full-width (`w-full`).
- Deep use of `relative`, `absolute`, and `z-index` layering to manage complex parallax elements (stars, clouds, images, text).

---

# 2. Section-by-Section Architecture & Interactions

## A. Navigation (Navbar)
- **Positioning:** Fixed at the top, centered, with `max-w-4xl`.
- **Styling:** Pill-shaped (`rounded-full`), glassmorphism (`bg-[#0a0f24]/95 backdrop-blur-2xl`), very thin white border (`border-white/5`), subtle shadow.
- **Video Background:** Behind the glass, an embedded muted looping video (`https://res.cloudinary.com/dprydfxok/video/upload/v1782477184/bg7_nke0yy.mp4`) at 60% opacity, fading to 100% on container hover.
- **Content:** Logo "SpaceUp" on the left, Links (About, Services, Work) centered, "Start Project" button on the right.
- **Interaction:** Nav stays hidden on initial load and slides/fades down (`translate-y-0 opacity-100`) only after the user scrolls past the Hero section (250vh).
- **Mobile:** Full-screen blurred overlay menu triggered by a hamburger icon.

## B. Hero Section
- **Visuals:** A massive pinned full-screen section (`100vh`) with a background gradient from `#0a0f24` to `#1a2b4c` to `#ffffff`.
- **Assets:** 
  - Astronaut (`https://res.cloudinary.com/dprydfxok/image/upload/v1782880425/austronaut_jabuud.png`)
  - Drifting Clouds (`https://res.cloudinary.com/dprydfxok/image/upload/v1782880424/white-cloud_yhr9j9.avif`)
  - A generative subtle starry background (`<Stars />`).
- **GSAP ScrollTrigger Sequence (Pinned):**
  1. **Initial Load:** Astronaut fades in and glides up from `50vh` below the screen. It also has a continuous Framer Motion floating loop (`y: [0, -15, 0]`).
  2. **Scroll 1:** First huge text ("ELEVATE YOUR BRAND") fades out moving up. Astronaut moves left, rotates, and scales down. Clouds scale up.
  3. **Scroll 2:** Second text ("DOMINATE THE DIGITAL SPACE") fades in. Astronaut glides to the right.
  4. **Scroll 3:** Third text ("UNLEASH YOUR POTENTIAL" in dark text) fades in. Astronaut centers.
  5. **Scroll 4:** Astronaut plunges deep into the clouds (`y: 800`, scales to 0.5, fades out). Clouds engulf the screen, and the background crossfades to pure white (`#ffffff`).
- **Additional Effect:** The clouds use a horizontal CSS mask (`maskImage: linear-gradient(to right, transparent, black 10%, black 90%, transparent)`) to seamlessly blur and fade the left and right edges.
- **Logo Area:** At the bottom, a `text-[#0a0f24]` "SpaceUp" logo and "Scroll to Explore" text fade out when scrolling starts.

## C. Services Section
- **Layout:** A grid with 4 premium cards. Cards span different columns (e.g., 2 cols, 1 col).
- **Card Styling:** Dark backgrounds (`#0a0f24` or `#050814`). `rounded-[2rem]`. 
- **Video Overlay:** Each card has a background video (`https://res.cloudinary.com/dprydfxok/video/upload/v1782477183/bg10_mvrasv.mp4`) that plays on hover (`opacity-0` to `opacity-60`).
- **Solid Bottom:** The bottom 20% of the video mask fades to a 100% solid dark navy blue so the text remains highly legible.
- **Typography/Icons:** Titles in Cormorant, description in white Inter. Icons scale and rotate slightly on hover.
- **Entrance Animation:** GSAP staggered slide-up when the section scrolls into view.

## D. Selected Works (Interactive Master-Detail Gallery)
- **Layout:** 2-column grid (`lg:grid-cols-2`), full screen height `min-h-screen`, dark `#0a0f24` background with stars and clouds at the bottom.
- **Left Column:** 
  - Massive active image container (`aspect-[4/3]`) with a bottom-to-top gradient overlay.
  - A horizontally scrolling row of thumbnail images right beneath it (scrollbar hidden). 
  - Thumbnails scale up and get a neon cyan border (`#00ffcc`) and glow when active.
- **Right Column:** 
  - Dynamic content: Category (cyan tracking text), massive Project Title, 3-line description, and a "Visit Site" button.
  - The button features an arrow inside a circle that translates right (`group-hover:translate-x-2`) on hover.
- **Interactions:** Clicking a thumbnail updates the active index. The main image crossfades/scales via GSAP (`opacity: 0.2, scale: 1.05` to `opacity: 1, scale: 1`). The right-column text slides in from the left (`x: -20` to `x: 0`) with a smooth staggered fade.
- **Assets (Images 3:2 or 4:3 crop):**
  - EcoNexa: `https://res.cloudinary.com/dprydfxok/image/upload/v1782823787/EcoNexa_w4kl4w.webp`
  - Bali Travel: `https://res.cloudinary.com/dprydfxok/image/upload/v1782823794/Bali_travel_oxtsng.webp`
  - Calm: `https://res.cloudinary.com/dprydfxok/image/upload/v1782823790/Calm_Hero_fbj3b9.webp`
  - Northridge: `https://res.cloudinary.com/dprydfxok/image/upload/v1782823785/Northridge_Hero_lltty5.webp`
  - Naturally: `https://res.cloudinary.com/dprydfxok/image/upload/v1782823785/Naturally_Website_h5aq5g.webp`
  - Basilico: `https://res.cloudinary.com/dprydfxok/image/upload/v1782823783/basilico_restaurant_ycdzct.webp`
  - Wander: `https://res.cloudinary.com/dprydfxok/image/upload/v1782823783/Wander_Hero_yvqcsi.webp`
  - Hublot: `https://res.cloudinary.com/dprydfxok/image/upload/v1782823725/hublot-watches_gmf6wu.webp`
  - Crush: `https://res.cloudinary.com/dprydfxok/image/upload/v1782823712/crush_website_1_ls4lc7.webp`

## E. Footer
- **Layout:** Massive typography "LET'S TALK", centered layout, full height (`h-screen`).
- **Visuals:** Background color `#0a0f24`. A subtle gradient to transparent at the top. The clouds asset (`white-cloud.avif`) overlaid at `opacity-10` with `mix-blend-screen`.
- **Bottom Bar:** Copyright and social links in a wide flex row at the bottom, using tiny tracking caps text.

---

# 3. Technical Implementation Details

## Tech Stack
- **Framework:** React 18 (Vite)
- **Styling:** Tailwind CSS (Vanilla setup, no complex plugins).
- **Animation:** GSAP (ScrollTrigger for scroll-bound timelines, core GSAP for UI transitions) and Framer Motion (for continuous looping animations like drifting clouds and the floating astronaut).
- **Icons:** Lucide React.

## Performance & SEO
- **Images/Videos:** All assets must be loaded via Cloudinary (AVIF/WEBP format).
- **Accessibility:** Use semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`). Add appropriate `aria-labels` to buttons and `alt` tags to images. Ensure color contrast for primary reading text.
- **Responsive Design:** Mobile-first approach using Tailwind's `md:` and `lg:` breakpoints. Text scales fluidly using `vw` units in the hero section, while standardized tailwind text sizes (`text-5xl`, etc) are used elsewhere.

## Motion & Micro-interactions 
- **Easing:** Rely heavily on `power2.out`, `power3.out`, and `easeInOut` for frictionless, highly premium motion.
- **Hover States:** Buttons should scale up (`hover:scale-105`), borders should glow, and arrows should translate. 
- **Durations:** Page transitions and image crossfades should be unhurried (e.g. `0.6s` to `1.0s` duration).

Follow these instructions exactly to rebuild this masterpiece.

```
