---
title: Skyway
category: Templates
subCategory: Travel
premium: true
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781661103945-Skyway_Website.webp
---

# Skyway

```text
Act as an award-winning UI/UX designer and a master frontend developer. Your task is to recreate a stunning, high-performance, and immersive aviation and flight booking website named "Skyway". You will build this using React, GSAP for complex animations, Lenis for smooth scrolling, and Lucide React for iconography.

This specification provides the exact design system, assets, layout structure, and animation logic required to build the website with pixel-perfect accuracy.

---

## 1. Design System

### Color Palette
- **Primary Background**: `#001B48` (Deep Navy Blue)
- **Surface/Card Background**: `#02457A` (Lighter Navy Blue for contrast)
- **Primary Text**: `#f5f5f7` (Off-white)
- **Muted Text**: `#9bb1c4` (Cool Grey/Blue)
- **Primary Accent / Interactive**: `#FFDE17` (Vibrant Yellow)
- **Accent Hover**: `#e5c50c` (Deep Yellow)
- **Flight Search Accent**: `#FFB300` (Warm Amber/Yellow)
- **Glassmorphism Base**: `rgba(255, 255, 255, 0.03)` with `blur(12px)`
- **Glassmorphism Borders**: `rgba(255, 255, 255, 0.1)`

### Typography
- **Primary Sans-Serif**: `Inter` (Weights: 300, 400, 600, 800)
- **Secondary Editorial Serif**: `Playfair Display` (Weight: 700) - Used specifically for elegant magazine-style overlay titles.
- **Heading 1 (Hero)**: 5rem, `800` weight, `-0.03em` letter spacing, line-height `1.1`.
- **Heading 2 (Section)**: 3.5rem, `800` weight, text-fill transparent with linear gradient from `#fff` to `#9bb1c4`.
- **Editorial Overlay Title**: 3.5rem, `Playfair Display`, `700` weight, `-0.02em` letter spacing, line-height `1.1`.

---

## 2. Technical Stack \u0026 Architecture
- **Framework**: React (Vite or Next.js)
- **Styling**: Vanilla CSS (`index.css` - no Tailwind, all bespoke CSS for maximum control)
- **Animation Engine**: GSAP (`gsap`, `@gsap/react`, `gsap/ScrollTrigger`)
- **Smooth Scrolling**: Lenis (`lenis`)
- **Icons**: `lucide-react` (specifically `Plane`, `ChevronDown`, `ArrowLeft`, `ArrowRight`)
- **Responsiveness**: Fully responsive. Media queries at `1024px` (Tablet) and `768px` (Mobile).

---

## 3. Global Interactions \u0026 Motion Design

### Smooth Scrolling (Lenis)
Initialize Lenis globally in `App.tsx` inside a `useEffect` hook. Use a duration of `1.2` and an easing curve of `(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))`. Bind the navbar links to native `scrollIntoView({ behavior: 'smooth' })` to smoothly glide to section IDs.

---

## 4. Section-by-Section Implementation Blueprint

### 1. Navbar
- **Layout**: Fixed at top (`position: fixed`), `z-index: 50`.
- **Style**: Glassmorphism `backdrop-filter: blur(10px)`. Padding `1.5rem 3rem`.
- **Logo**: Text "Skyway" aligned with a `Plane` icon (size 28) from Lucide. Font weight 800, size `1.5rem`.
- **Links**: Experience (`#experience`), Fleet (`#fleet`), Destinations (`#destinations`), Crew (`#crew`), Book (`#book`).

### 2. ZoomHero (`<ZoomHero />`)
This is the most technically complex section. It relies on GSAP ScrollTrigger to create an immersive zoom-through effect.
- **Structure**: A fixed wrapper holding a background video, text content, and a foreground window image.
- **Assets**:
  - Background Video: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/mountain_bg_video_2.mp4` (AutoPlay, loop, muted).
  - Window Image: `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/in-flight-image-1.png`
- **Content**: 
  - Title: "Navigating the Skies"
  - Subtitle: "Experience the ultimate comfort and luxury on your next journey around the globe."
  - Overlay Text (Right aligned): "The Journey Begins" (Playfair Display) + paragraph.
- **GSAP Logic**:
  - The foreground Window Image naturally bobs up and down continuously (`y: -15`, duration 3, `yoyo: true`, `repeat: -1`, `ease: "sine.inOut"`). 
  - To prevent background bleed during bobbing, pre-scale the image: `gsap.set(imgRef.current, { scale: 1.05 })`.
  - On scroll, trigger a timeline pinned to the wrapper. 
  - Scale the window image to `2` to create the illusion of flying through the window.
  - Fade out the "The Journey Begins" text immediately as scrolling starts.

### 3. Flight Search Widget (`<FlightSearchWidget id="book" />`)
- **Layout**: A white horizontal card (`#fff`) overlapping the bottom of the hero by `-80px` (`margin-top: -80px`). `z-index: 20`.
- **Styling**: `border-radius: 8px`, `box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15)`. Text is dark (`#001B48`).
- **Content**: 
  - Top row: Options (Round trip, Direct flight).
  - Bottom row: Input fields (From, To, Departure, Return, Passengers/Class).
  - A small rotational "Swap" button between From and To.
  - Right-side CTA button: "Find Flights" colored `#FFB300`.

### 4. Flight Offers Carousel (`<FlightOffers id="destinations" />`)
- **Layout**: Horizontal scrolling carousel with hidden scrollbars.
- **Header**: "Flight offers from Dubai" with a `ChevronDown` icon.
- **Navigation**: Left and Right absolute positioned arrows (white circular buttons) to loop through the carousel. Implement native scrolling looping logic.
- **Data (Images from Unsplash)**:
  - Toronto ($870)
  - Zurich ($624)
  - Frankfurt ($720)
  - Munich ($680)
  - Barcelona ($550)
  - Paris ($610)
  - Dubai ($450)
  - Tokyo ($1050)
  - Kyoto ($1100)
  - Sydney ($1250)

### 5. Experience Section (`<ExperienceSection id="experience" />`)
- **Layout**: CSS Grid (`auto-fit, minmax(320px, 1fr)`).
- **Header**: "The Skyward Experience"
- **Cards**: Glassmorphism borders, `padding: 3rem 2.5rem`.
- **Hover States**: Cards float up (`translateY(-10px)`) and reveal a subtle radial gradient glow from the top right corner (`rgba(255, 222, 23, 0.15)`). The icon scales by `1.1` and rotates `5deg`.

### 6. Fleet Section (`<FleetSection id="fleet" />`)
- **Layout**: Flexbox split (50/50). Text on the left, Image on the right.
- **Header**: "Our Modern Fleet"
- **GSAP Logic**: The image wrapper uses `overflow: hidden`. The actual image is `120%` height. As you scroll, GSAP translates the `y` property of the image to create a subtle parallax scroll effect.

### 7. Impact Stats (`<ImpactStats />`)
- **Layout**: 4-column Grid.
- **Content**: Large numbers in Accent Yellow (`4.9/5`, `250+`, `15M+`, `99.9%`).
- **Styling**: Surrounded by top and bottom subtle white borders (`border-top/bottom: 1px solid rgba(255,255,255,0.05)`).

### 8. Crew Section (`<CrewSection id="crew" />`)
- **Layout**: Grid of 6 vertical cards (`aspect-ratio: 3/4`).
- **Header**: "Meet Our Crew"
- **Cards**: Images fill the card with `object-fit: cover`. 
- **Hover State**: Image scales to `1.05`. A dark gradient overlay slides up from the bottom revealing the crew member's name (White) and Role (Yellow/Accent). Use varied Unsplash portraits for the 6 cards.

### 9. Testimonials (`<TestimonialsSection />`)
- **Layout**: CSS Grid for reviews.
- **Style**: Solid surface color background (`#02457A`). Include user avatar images, names, roles, and italicized testimonial text.

### 10. Contact CTA (`<ContactCTA />`)
- **Header**: "Ready for Takeoff?" (3.5rem, `800` weight).
- **Button**: A massive circular yellow button (180x180px).
- **GSAP Interaction**: Implement a "Magnetic Button". Bind mouse movement over a larger wrapper `div`. Calculate the mouse distance from the center, and use GSAP to tween the `x` and `y` coordinates of the button to lightly follow the mouse.
- **Click Behavior**: The button calls an `onClick` handler that smoothly scrolls the page back up to the `#book` Flight Search Widget.

---

## 5. Responsive Design Requirements
Your CSS must include the following `@media` queries to ensure 100% responsiveness on mobile and tablet:

**Tablet (max-width: 1024px)**:
- Hero Title size reduces to `4rem`.
- Editorial overlay title reduces to `2.5rem`.
- Flight Search inputs wrap to multiple lines.

**Mobile (max-width: 768px)**:
- Navbar: Stacks vertically. Links wrap and reduce size to `0.8rem`.
- Hero Title size reduces to `2.5rem`.
- Buttons switch to `width: 100%`.
- Flight Search Widget: Negative margin reduces to `-40px`. All inputs stack vertically (`flex-direction: column`).
- Overlay text aligns center.
- Padding on major sections drops from `6rem 2rem` to `4rem 1rem`.
- Parallax Image wrap drops height to `300px`.
- Magnetic CTA button reduces to `140x140px`.

---
Follow this prompt strictly to recreate "Skyway". Ensure all GSAP timelines clean up properly in React `useEffect` or `useGSAP` hooks to maintain maximum performance.

```
