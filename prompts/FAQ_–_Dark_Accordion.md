---
title: "FAQ – Dark Accordion"
category: Sections
subCategory: Faq
premium: true
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1783644543120-FAQ – Dark Accordion.webp
---

# FAQ – Dark Accordion

```text
# MASTER IMPLEMENTATION PROMPT — LUXURY BALI ADVENTURE WEBSITE

**ROLE**: You are an elite Frontend Engineer and UX/UI Designer specializing in highly interactive, cinematic, and premium web applications using Next.js 14 (App Router), Tailwind CSS, Framer Motion, and GSAP. 

**GOAL**: Build a futuristic, hyper-premium travel agency website for a "Bali Adventure" service. The design should be cinematic, utilizing dark modes, glowing neon accents, and heavy scroll-based parallax animations.

---

## 1. TECH STACK & DEPENDENCIES
- **Framework**: Next.js 14+ (App Router, TypeScript)
- **Styling**: Tailwind CSS
- **Icons**: `lucide-react`
- **Animations**: `framer-motion` (for layout and modals) and `gsap` (for heavy scroll-linked animations and parallax). Specifically `gsap/ScrollTrigger`.
- **Fonts**: Use local fonts or Google Fonts. 
  - Primary (Sans-serif, bold, cinematic): e.g. "Outfit" or "Inter"
  - Editorial (Serif, elegant, italicized): e.g. "Playfair Display"
  - Hero (Massive, tracking): e.g. "Anton" or custom local font.

---

## 2. DESIGN SYSTEM & TAILWIND CONFIG
Update `tailwind.config.ts` to include these exact custom colors and fonts:

**Colors**:
- `jungle-black`: `#050B0D` (Very dark, deep jungle green/black background)
- `tropical-lime`: `#C4D52A` (Electric, glowing lime green for primary accents and buttons)
- `text-gray`: `#A0AAB2` (Soft, readable gray for paragraphs)
- `text-white`: `#EAEAEA` (Off-white for headings)

**Global CSS (`app/globals.css`)**:
- Set the `body` background to `jungle-black` and text to `text-white`.
- Ensure `html { scroll-behavior: smooth; }`.

---

## 3. COMPONENT ARCHITECTURE (Single Page Layout)
The `app/page.tsx` must render the following sections in order:
1. `<Navbar />`
2. `<Hero />`
3. `<Destinations />`
4. `<Packages />`
5. `<Experiences />`
6. `<Itinerary />`
7. `<WhyChooseUs />`
8. `<Gallery />`
9. `<VideoExperience />`
10. `<Testimonials />`
11. `<Booking />`
12. `<Footer />`

---

## 4. DETAILED SECTION REQUIREMENTS

### A. `<Navbar />` (Responsive & Sticky)
- **Desktop**: Centered pill-shaped floating nav with a glassmorphic background (`bg-[#071014]/80 backdrop-blur-md border-[rgba(196,213,42,0.3)]`). Includes logo (left), links (center), and "Book Now" button (right). 
- **Links**: Home, Destinations, Packages, Experiences, Itinerary, Gallery, Contact. They should have a bottom-border hover effect using `tropical-lime`.
- **Mobile**: Hide desktop links. Add a hamburger menu using `lucide-react`. When clicked, open a full-screen, fixed `framer-motion` overlay with staggered fade-in links and locked body scrolling.

### B. `<Hero />` (GSAP Pinned Parallax)
- **Structure**: A massive cinematic header utilizing a 3-layer parallax.
- **Layers**: 
  - Layer 1 (Back): `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/s7_layer_1.png`
  - Layer 2 (Mid): `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/s7_layer_2.png`
  - Layer 3 (Front): `https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/s7_layer_3.png`
- **GSAP ScrollTrigger**: Pin the entire section. As the user scrolls, push Layer 1 and 2 upwards at different speeds, while pulling Layer 3 down.
- **Typography**: A massive text saying "BALI" placed *behind* Layer 3. As you scroll, this text moves down and fades out.
- **Content Reveal**: Once the "BALI" text disappears, animate in the main hero content: "BALI ADVENTURE" with a description and two buttons ("Explore Packages" and "View Itinerary" wrapped in Next.js `<Link>` tags).

### C. `<Destinations />` (Interactive Grid with Modal)
- **Layout**: A 3-column grid of tall, rounded-2xl cards.
- **Card Hover**: Dark gradient overlay, subtle lime tint, and the image scales up `scale-110`.
- **GSAP Animation**: Use `gsap.fromTo` on a wrapper ref's children to stagger fade-in and slide-up the cards as they enter the viewport.
- **Modal Feature**: Clicking a card opens a `framer-motion` full-screen split modal. Left side is the destination image; right side contains title, description, and a bulleted list of "Highlights". Lock body scroll when open. Use high-quality Unsplash Bali images.

### D. `<Packages />` (Pricing Grid)
- **Layout**: 3 columns. Center package is "Most Popular" (larger, lime border, dark background).
- **Cards**: Include Title, Price, Duration, Locations, and a feature list.
- **Animation Bug Fix**: Use a `wrapperRef` and `gsap.fromTo(wrapperRef.current.children, ...)` to stagger the cards in. Avoid using arrays of refs to prevent React 18 Strict Mode hydration bugs where elements remain invisible.

### E. `<Experiences />` (Split Layout Sections)
- **Layout**: Alternating Image/Text split sections (e.g., Spiritual Wellness, Marine Adventures, Culinary).
- **GSAP**: As each block enters the viewport, the image reveals via a clip-path or scale-up, and the text fades in from the side.

### F. `<Itinerary />` (GSAP Pinned Horizontal Scroll)
- **Layout**: A complex horizontal scroll section.
- **Mechanism**: Pin a container div. Inside, a wide row of "Day" cards. Use `gsap.to` with `scrollTrigger` to translate the row leftwards (`xPercent: -100 * (days.length - 1)`) tied to the scroll position (`scrub: 1`).
- **Cards**: Glassmorphic styling. Include Day number, title, description, and an image for each day.

### G. `<WhyChooseUs />` & `<Gallery />`
- **Why Choose Us**: 4-column grid of statistics and icons (e.g., "50+ Guides", "100% Custom").
- **Gallery**: A masonry or bento-box grid of photos. 
- **Gallery Modal**: Clicking any image opens it in a borderless, full-screen `framer-motion` modal to view the high-res version.

### H. `<VideoExperience />` & `<Testimonials />`
- **Video**: A full-width section with a background video (or placeholder image representing a video) with a central "Play" button.
- **Testimonials**: A 3-column grid of user reviews. Use glassmorphic cards (`bg-white/[0.03]`) and Unsplash avatar images. Use `gsap.fromTo` to stagger them in. Add at least 6 testimonials.

### I. `<Booking />` & `<Footer />`
- **Booking**: A dark, premium form section asking for Destination, Travel Dates, Guests, and Contact info.
- **Footer**: Standard multi-column footer with logo, links, newsletter signup, and social icons (`react-icons` or `lucide-react`).

---

## 5. CRITICAL EXECUTION RULES
1. **Never use generic placeholders**: Use real, descriptive copy for Bali travel.
2. **GSAP Strict Mode Fixes**: ALWAYS use `gsap.fromTo` and target `.children` of a wrapper ref for staggered grid animations. DO NOT use `gsap.from` with arrays of refs, as this breaks heavily in Next.js Strict Mode resulting in invisible components.
3. **Responsive**: Every section must scale down elegantly to mobile (`md:hidden`, `flex-col`, etc.).
4. **Links**: Ensure all "Book Now" buttons link to `#booking` and navbar links map to section IDs.

```
