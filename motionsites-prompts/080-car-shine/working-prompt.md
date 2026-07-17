---
title: Car Shine
category: Templates
subCategory: Auto
premium: false
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1780888756615-car-shine.webp
---

# Car Shine

```text
# Comprehensive Website Generation Prompt

<!-- A premium, highly interactive, glassmorphism-styled landing page for a mobile auto detailing service, featuring 3D particle effects, custom cursor trails, and fluid scroll animations. -->

*Use this highly detailed prompt to recreate the "Car Shine" mobile auto detailing website using an AI developer or a design-to-code system.*

---

## 1. Project Overview \u0026 Architecture
**Goal:** Build a highly premium, modern, glassmorphic, and dynamic single-page web application for a Mobile Auto Detailing company named "Car Shine".
**Core Stack:** React (Vite), TypeScript, Tailwind CSS, Framer Motion (for all animations), `@react-three/fiber` \u0026 `@react-three/drei` (for 3D particles), and `lucide-react` (for iconography).
**Architecture:**
- `App.tsx`: Main layout orchestrator containing the background elements, Navbar, all sections, Footer, and the Booking Modal state. 
- Use a global `<SectionWrapper>` in `App.tsx` utilizing Framer Motion to apply a unified scroll-reveal animation to all main content sections (except Hero).
- Implement global smooth scrolling by adding `<html lang="en" class="scroll-smooth scroll-pt-32">` to `index.html`.

## 2. Global Design System \u0026 Aesthetics
**Color Palette:**
- **Background:** Deep dark navy/black (e.g., `#030b18` or `bg-slate-950`).
- **Brand Primary:** Vibrant Sky Blue (`#0EA5E9` / `bg-sky-500`), mapped as `brand` in Tailwind.
- **Brand Dark/Light Variants:** Used for button hovers (`hover:bg-brand-light` or `hover:bg-brand-dark`).
- **Text:** Headings use `text-white`, secondary body text uses `text-gray-200` to `text-gray-400`. All buttons must have `text-white`.

**Typography:**
- **Headings (font-display):** A bold, modern sans-serif (e.g., Outfit, Clash Display, or Poppins). Use `font-black` or `font-bold` heavily. Tracking is typically `tracking-tight`.
- **Body (font-sans):** Clean sans-serif (e.g., Inter). Use `text-lg` or `text-base` for standard readability.

**Glassmorphism \u0026 Shadows:**
- Elements make heavy use of semi-transparent black/white backgrounds with backdrop filters.
- **Standard Glass Panel:** `bg-black/30 backdrop-blur-xl border border-white/10 rounded-[3rem] shadow-[0_8px_32px_rgba(0,0,0,0.3)]`
- **Light Glass Panel:** `bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:bg-white/10 transition-colors`
- **Drop Shadows:** Use glowing drop shadows for brand buttons `shadow-[0_0_20px_rgba(14,165,233,0.4)]`.

## 3. Global Interactions \u0026 Motion Design
- **Buttons:** Every button must use Framer Motion: `whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}` with a color transition.
- **Scroll Reveal (SectionWrapper):** `initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut" }}`.
- **Image Hovers:** All decorative images inside cards should slowly scale up on hover: `hover:scale-110 transition-transform duration-500`.

## 4. Section-by-Section Implementation

### 4.1. Navbar (`<Navbar />`)
- **Layout:** Fixed top, `z-50`, `w-full`. Left logo, center links, right "Book Now" CTA and mobile hamburger menu.
- **Scroll Behavior:** At the top of the page, it has `bg-transparent`. On scroll (e.g., > 50px), a completely independent absolute background layer fades in: `bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl rounded-[2.5rem]`. Transition this layer via `opacity-0` to `opacity-100` for a buttery smooth glass effect.
- **Mobile Menu:** A hamburger icon that toggles a Framer Motion `AnimatePresence` dropdown menu. Dropdown uses glassmorphic styling and lists all links.

### 4.2. Hero Section (`<Hero />`)
- **Background Effects:** 
  - `<HeroParticles />`: Three.js canvas utilizing `Points` to render sparkling stars. The bounding box must be concentrated on the right side of the screen so it sits perfectly behind the car image.
  - `<MagicCursor />`: A custom Framer Motion component that tracks mouse movement exclusively within the Hero section, emitting a trail of fading, tumbling star icons.
- **Content:** Left-aligned text (`lg:w-1/2`). `text-7xl font-black`. "Salt Lake City's Premier Mobile Auto Detailing". The "Book Now" button must use `w-fit` so it does not stretch within the flex container. The hero container specifically uses `min-h-[450px] lg:min-h-[500px]` with reduced bottom padding `lg:pb-12` to tightly frame the content without dead space.
- **Asset Integration:** Absolute positioned on the right side.
  - **Image:** `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/car-red.png`
  - **Styling:** Must use classes: `w-[115%] md:w-full h-auto drop-shadow-2xl translate-x-[10%] md:translate-x-0 scale-[1.25] md:scale-[1.6] lg:scale-[1.8] origin-right`.
  - **Animation:** Continuous slow floating effect `animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity }}`.
  - **The Spark:** Overlaid precisely on the car is an animated SVG starburst. It pulses in scale (`scale: [0.3, 1.2, 0.8, 1.5, 0.3]`), rotates continuously, and fades in/out.

### 4.3. Why Us (`<WhyChooseUs />`)
- **Layout:** 4-column grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`).
- **Zig-Zag Design:** Use `lg:mt-16` on the 2nd and 4th cards to create a masonry stagger effect.
- **Card Design:** Full bleed background image (`h-[400px] md:h-[450px]`) with a dark bottom gradient (`bg-gradient-to-t from-black/90`).
- **Interaction:** On hover, the image scales up. The title (initially resting at the bottom) glides upwards smoothly (`group-hover:translate-y-0`), revealing a descriptive paragraph that fades in (`opacity-0 group-hover:opacity-100`).

### 4.4. Our Services (`<OurServices />`)
- **Layout:** 3-column grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
- **Card Design:** Glass panel (`bg-white/5 backdrop-blur-md border border-white/10`).
- **Hierarchy:** Title at the top (`text-xl font-bold`), description in the middle (`flex-grow`), and a rounded image wrapper (`h-48 rounded-2xl`) at the very bottom.
- **Images:** High-quality Unsplash URLs for Auto Detailing (e.g., Interior Detailing, Ceramic Coating).

### 4.5. Pricing Packages (`<Services />`)
- **Layout:** 2-column grid (`max-w-4xl mx-auto`).
- **Card Design:** Glassmorphic pricing cards. Top half is a full-width image cover (`h-48 rounded-2xl`). Includes an absolute "POPULAR" ribbon in the top right corner. Button at the bottom must have `text-white`.

### 4.6. How It Works (`<HowItWorks />`)
- **Layout:** Vertical list of steps (01, 02, 03).
- **Design:** Each step is a row. Left side features a Lucide React icon (`CalendarCheck`, `Car`, `CreditCard`) with a large absolute numbering overlay. Right side contains title and description.
- **Wrapper:** Section has `bg-black/30 backdrop-blur-xl border-y border-white/10`.

### 4.7. Gift Cards (`<GiftCards />`)
- **Layout:** A large centered glass panel (`flex-col items-center justify-center text-center`).
- **Card Arrangement:** In the center, map through an array of 5 gift card image wrappers. Use absolute/relative positioning with fixed rotations (`-12`, `-6`, `0`, `6`, `12` degrees).
- **Interaction:** When the user hovers over any card in the array, it must:
  - Scale up significantly (`scale: 1.3`).
  - Straighten out (`rotate: 0`).
  - Move to the front (`zIndex: 50`).
  - Reveal a dark overlay (`bg-black/70 backdrop-blur-sm`) displaying the price (e.g., "$50") and service ("Basic Wash").

### 4.8. Service Areas (`<ServiceArea />`)
- **Integration:** Embed a Google Maps iframe pointing to Salt Lake City.
- **Aesthetics:** Map must match the dark theme. Apply CSS filters: `grayscale opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:grayscale-0 transition-all duration-500`. Cover it with a `pointer-events-none bg-brand/10` overlay.

### 4.9. Footer (`<Footer />`)
- **Design:** Standard 4-column footer over a glassmorphic background. Includes a newsletter subscription input and a `text-white` subscribe button.

### 4.10. Booking Modal (`<BookingModal />`)
- **Trigger:** Opened by clicking "Book Now" buttons in the Navbar or Hero.
- **Design:** `fixed inset-0 z-[100]`. Uses `AnimatePresence` for entrance/exit. Features a dark backdrop (`bg-black/60 backdrop-blur-sm`) and a centered glass panel form.
- **Fields:** Full Name, Phone Number, Service Type (Select dropdown), Preferred Date.
- **Interaction:** On submit, show a success animation with a checkmark, wait 2 seconds, and close the modal.

## 5. Responsive Requirements
- The site must be built completely mobile-first using Tailwind's `md:` and `lg:` prefixes.
- Fonts must scale dynamically (`text-4xl md:text-5xl lg:text-7xl`).
- Grid columns must collapse to `grid-cols-1` on mobile.
- Decorative elements that clutter mobile screens (like the outermost rotated gift cards) should use `hidden md:block`.
- Padding must shrink on mobile to maximize screen real estate (`p-4 sm:px-6`).
- **Section Spacing:** All major sections utilize a tightened vertical layout (`py-10` or `my-10` instead of `py-20`), ensuring a compact, fast-paced scroll experience that brings content closer together.

## 6. Asset URLs to Include
- **Hero Car:** `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/car-red.png`
- **Services/Pricing Placeholders:**
  - `https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=500\u0026q=80`
  - `https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=500\u0026q=80`
  - `https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500\u0026q=80`
  - `https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=500\u0026q=80`
  - `https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=500\u0026q=80`
  - `https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500\u0026q=80`

```
