---
title: Lobstreet
category: Templates
subCategory: Restaurant
premium: true
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1782908328641-lobstreet_website.webp
---

# Lobstreet

```text
Act as an award-winning designer and web developer. Your task is to build a premium, highly interactive, and visually stunning restaurant website called "Lobstreet". You must build this exactly according to the comprehensive specifications below, maintaining maximum accuracy in visual design, layout, spacing, animations, and technical implementation.

## 1. Visual Design System

### Exact Color Palette
- **Marble White (Background/Base)**: `#FAFAF8`
- **Warm Gray (Secondary Base/Sections)**: `#EAE7E2`
- **Premium Orange (Accents/Buttons)**: `#F7931E` (also use deep orange `#cd5a12` for primary buttons and `#a8470e` for button hover)
- **Forest Green (Secondary Accents)**: `#567D46`
- **Charcoal (Primary Text/Headings)**: `#222222`
- **Cream (Glassmorphism/Cards)**: `#FDFBF8`

### Typography
Include Google Fonts: `Cormorant Garamond` (Weights: 300, 400, 500, 600, 700, Italic) and `Inter` (Weights: 300, 400, 500).
- **Headings (h1, h2, h3, h4, h5, h6)**: `Cormorant Garamond`, serif, font-weight 400 (or 500 for massive headers), letter-spacing: -0.02em.
- **Body/Paragraphs**: `Inter`, sans-serif, font-weight 300 or 400, line-height 1.6.
- **Subtitles/Labels**: `Inter`, font-weight 600, uppercase, letter-spacing 0.1em to 0.2em.

### Global Styles \u0026 Layout
- Background of the entire `body` should have a fixed marble texture (`https://res.cloudinary.com/dprydfxok/image/upload/v1782907867/marble-bg_xhb9ns.png`) set to `background-size: cover; background-position: center;`.
- Include a fixed pseudo-element on the body serving as an ambient light sweep. It should be a large radial gradient `rgba(255,255,255,0.4)` animating slowly (`scale` and `translate` over 30s infinite alternate ease-in-out).
- Use Lenis for smooth scrolling (`duration: 1.2`, easing curve `(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))`).
- Hardware accelerate animated elements: `will-change: transform, opacity; transform: translateZ(0);`.

---

## 2. Section-by-Section Content and Hierarchy

### Navbar
- Clean, transparent glassmorphism header (`backdrop-filter: blur(12px)`, `rgba(253, 251, 248, 0.6)`).
- Left: Logo "Lobstreet" (Serif) with a small Premium Orange dot at the end.
- Right: Navigation links (Menu, Chef, Tasting, Reserve).

### Hero Section (`#hero`)
- **Layout**: 100vw, min-height 100vh. Flex split layout (Left Content, Right Image).
- **Left Content** (flex: 1, padding-left 8%, padding-right 5%, z-index 20):
  - Subtitle: "GOOD FOOD \u0026bull; GOOD HEALTH" (Premium Orange, sans-serif, uppercase, small).
  - Main Title: "Tasty food.<br/>Come enjoy<span class="dot">...</span>" (Serif, clamp(3.5rem, 6vw, 6rem), Charcoal).
  - Decorative Divider: A thin horizontal line `#d1cbc0` split by a tiny circular orange ornament.
  - Description: "Small Bites. Big Flavor." (Serif italic). Followed by paragraph text (Sans-serif, 300 weight, #666 color).
  - Button: "Explore Now" + an arrow inside a white circle. Button background `#cd5a12`, border-radius 50px.
- **Right Image** (flex: 1.2, relative):
  - Container (`width: 85%; max-width: 720px; aspect-ratio: 1; top: 50%; right: -5%; transform: translateY(-50%)`).
  - Contains `https://res.cloudinary.com/dprydfxok/image/upload/v1782907868/plate-salmon_tdheo8.png` and a nested absolute overlay containing `https://res.cloudinary.com/dprydfxok/image/upload/v1782907862/wooden-chopsticks_vmdyq2.png` rotated at -20deg.
- **Animations**:
  - Initial 1.5s delay.
  - Left content staggers in from left (`x: -30`, `opacity: 0`).
  - Right plate scales up from 0.5 and rotates 360deg into place. 
  - Utensils drop in from top (`y: -20vh`, rotation).
  - Continuous floating: Plate animates `y` and `rotation`; chopsticks animate `y`.
  - Mouse move interaction: Both plate and chopsticks translate slightly opposite to cursor position.
  - Scroll scrub out: When scrolling past the hero, elements translate Y/X and fade out.

### Global Floating Ingredients
- A fixed container (`z-index: 50`, `pointer-events: none`, `width: 100vw`, `height: 100vh`).
- Contains images: `https://res.cloudinary.com/dprydfxok/image/upload/v1782907865/lobster_n0r91b.png` (bottom left), `https://res.cloudinary.com/dprydfxok/image/upload/v1782907870/spice-bowl_tgoaiv.png` (top left, near plate), `https://res.cloudinary.com/dprydfxok/image/upload/v1782907869/sauce-bowl_kbxipb.png` (right), `https://res.cloudinary.com/dprydfxok/image/upload/v1782907862/basil_ui5u8j.png` (bottom right).
- **Interactions**:
  - Slow, infinite GSAP floating (`yoyo: true`, `repeat: -1`).
  - Mouse proximity magnetic effect: If cursor is within 250px, images gently shift towards the cursor (max 5px).
  - Fade out on scroll: Linked to scrollTrigger so it fades and translates up as user scrolls down 500px.
- **Responsiveness**: Resize dimensions and positions in media queries (Max-width 1550px, 1024px, 768px).

### Ingredient Story (`#menu`)
- **Header**: "What's on our Plate" (Serif) + description + Tabs (Appetizers, Main Dish (active), Dessert).
- **Grid Layout**: 3-column flex layout holding plates.
- **Content**: 
  - Column 1: `https://res.cloudinary.com/dprydfxok/image/upload/v1782907868/plate-vegetable_rtc0jb.png` + "Roasted Vegetables" text.
  - Column 2: `https://res.cloudinary.com/dprydfxok/image/upload/v1782907868/plate-salmon_tdheo8.png` with chopsticks + "Wild Salmon" text.
  - Column 3: `https://res.cloudinary.com/dprydfxok/image/upload/v1782907872/plate-pork_az3zkq.png` + "Sweet Pork Chops" text.
- **Animations**: ScrollTrigger timeline. Plates scale from 0.5 and rotate from -180deg with `ease: 'back.out(1.2)'`. Text below fades and translates Y.

### Chef Experience (`#chef`)
- **Layout**: Dark section (`background: var(--charcoal)`), 100vw, 120vh, overflow hidden.
- **Background**: Massive photo (`https://res.cloudinary.com/dprydfxok/image/upload/v1782907865/lobster_n0r91b.png`, `opacity: 0.4`, `height: 130%`, `object-fit: cover`).
  - **Parallax**: GSAP `fromTo` `yPercent: -20` to `yPercent: 0` tied to ScrollTrigger scrub, ensuring no top gaps are exposed.
- **Content**: A centered Quote "Cooking is an art of patience, a dance of fire and ice, a symphony of natural flavors." (Serif, italic, massive size).
- **Parallax Elements**: Small floating ingredients (basil, black-pepper, garlic) that scrub rotate and translate Y inversely to scroll.

### Menu Showcase / Tasting Menu (`#tasting`)
- **Layout**: Horizontal Scrolling Gallery. 
- **Header**: Centered at the top "Tasting Menu".
- **Gallery**: A wide `display: flex` container (`gap: 4rem`, `padding: 0 30vw 0 10vw`).
- **Cards**: Fixed width (400px), min-height 550px, white background, 24px border-radius, soft box-shadow. Contains image and text.
- **Animations**:
  - The section is pinned via GSAP ScrollTrigger (`pin: true`, `scrub: 1`).
  - The gallery flex container translates `x` by exactly `-(scrollWidth - window.innerWidth)` as the user scrolls.
  - Hovering a card lifts it (`translateY(-10px)`), scales the image (`scale(1.08)`), and adds a `5deg` rotation.

### Reservation CTA (`#reserve`)
- **Layout**: Final section, tall padding-bottom.
- **Animations**: Background color transitions from `--warm-gray` to `--marble-white` via ScrollTrigger.
- **Content**: "Reserve a Table" heading, subtitle.
- **Button**: A premium "liquid fill" button. Dark rounded border. On hover, a solid color pseudo-element scales up from the bottom to fill the button.
- A massive `https://res.cloudinary.com/dprydfxok/image/upload/v1782907868/plate-salmon_tdheo8.png` peeks in from the bottom of the section (`bottom: -58%`, `width: 413px`), partially cut off by the end of the page.

---

## 3. Spacing, Margins, and Padding
- Use CSS clamp for fluid typography and spacing.
- Provide immense breathing room between sections (e.g., `padding: 120px 0;`).
- Maintain a clean, minimalist approach. Use margins generously (e.g., `margin-bottom: 4rem` between headers and content).

---

## 4. Technical Implementation Details
- **Framework**: React (Vite).
- **Styling**: Vanilla CSS. Rely heavily on CSS variables for thematic consistency. Use Flexbox and precise absolute positioning. DO NOT use TailwindCSS.
- **Animations**: GSAP (GreenSock) + ScrollTrigger. All animations must be synchronized and performant. Use `gsap.context()` for cleanup in React. Wrap elements properly to avoid conflicting GSAP tweens on the same object (e.g., scrolling vs floating vs mousemove).
- **Smooth Scrolling**: Lenis.
- **Performance**: Use `will-change: transform` and `hardware-accelerated` classes for all images/items animated by GSAP. Make sure image assets are optimized. 
- **Responsiveness**: 
  - Standard desktop: > 1550px (massive layout, elements well spaced).
  - Laptop: 1024px - 1550px (scale down absolute positions, adjust grid columns, shrink plates).
  - Mobile: < 768px (stack elements, reduce font sizes dramatically, remove complex hover states and horizontal scrolling).
- **SEO \u0026 Accessibility**: Use semantic HTML (`<section>`, `<main>`, `<blockquote>`, `<h1>` to `<h3>`). Provide `alt` text for all images. Maintain high contrast.

## 5. Assets Checklist
You will need the following image assets to execute this build:
- `https://res.cloudinary.com/dprydfxok/image/upload/v1782907867/marble-bg_xhb9ns.png`
- `https://res.cloudinary.com/dprydfxok/image/upload/v1782907868/plate-salmon_tdheo8.png`
- `https://res.cloudinary.com/dprydfxok/image/upload/v1782907862/wooden-chopsticks_vmdyq2.png`
- `https://res.cloudinary.com/dprydfxok/image/upload/v1782907865/lobster_n0r91b.png`
- `https://res.cloudinary.com/dprydfxok/image/upload/v1782907870/spice-bowl_tgoaiv.png`
- `https://res.cloudinary.com/dprydfxok/image/upload/v1782907869/sauce-bowl_kbxipb.png`
- `https://res.cloudinary.com/dprydfxok/image/upload/v1782907862/basil_ui5u8j.png`
- `https://res.cloudinary.com/dprydfxok/image/upload/v1782907868/plate-vegetable_rtc0jb.png`
- `https://res.cloudinary.com/dprydfxok/image/upload/v1782907872/plate-pork_az3zkq.png`
- `https://res.cloudinary.com/dprydfxok/image/upload/v1782907862/black-pepper_eh11tj.png`
- `https://res.cloudinary.com/dprydfxok/image/upload/v1782907863/garlic_lnyfb9.png`

Build this with a relentless focus on aesthetics, ensuring the final product feels expensive, dynamic, and breathtaking.

```
