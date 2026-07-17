---
title: "Future Carousel"
category: Sections
subCategory: Carousel
premium: true
imageUrl: https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781679053418-Future_Carousel.webp
---

# Future Carousel

```text
Act as an award-winning UI/UX designer and elite frontend web developer. Your objective is to build a high-end, premium, and futuristic $50k agency-level hero section exactly as described in this comprehensive specification.

# Project Overview
Create a cinematic, highly interactive, and full-screen 3D-inspired hero section featuring an infinite horizontally rotating carousel of floating glassmorphism product cards.

## 1. Technical Implementation Details
**Tech Stack:**
- **Framework:** React 18+ (using Vite) with TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion (for UI, micro-interactions, and carousel physics)
- **3D/Effects:** Three.js, React Three Fiber, React Drei (for background environmental effects/particles)
- **Icons:** `lucide-react`

**Architecture:**
- `src/App.tsx`: Main entry point mounting the hero section.
- `src/components/Hero.tsx`: The main hero layout (Header, Titles, background wrappers, carousel mount).
- `src/components/CardCarousel.tsx`: The core infinite 3D rotating carousel logic and card rendering.
- `src/components/FloatingObjects.tsx` / `Scene3D.tsx`: Background ambient particle effects.

---

## 2. Visual Design System

### Color Palette (Hex)
- **Background Base:** `#050505` (Deep space black)
- **Brand Cyan (Primary Accent):** `#00f0ff`
- **Brand Purple (Secondary Accent):** `#8a2be2`
- **Text Primary:** `#ffffff` (Pure White)
- **Text Secondary:** `rgba(255, 255, 255, 0.7)` (White at 70% opacity)
- **Text Tertiary:** `rgba(255, 255, 255, 0.5)` (White at 50% opacity)

### Typography
- **Font Families:**
  - **Headings (`font-heading`):** "Outfit", system-ui, sans-serif
  - **Body (`font-sans`):** "Inter", system-ui, sans-serif
- **Sizes & Weights:**
  - **Hero Main Title:** 6xl to 8xl (`text-8xl`), Light (`font-light`), `-0.05em` letter spacing.
  - **Hero Title Accent:** Semi-bold (`font-semibold`), Italicized, using Brand Cyan.
  - **Card Title:** 3xl (`text-3xl`), Medium (`font-medium`), leading tight.
  - **Card Eyebrow/Subtitle:** Small (`text-sm`), Monospace (`font-mono`), tracking widest (`tracking-widest`), Uppercase.
  - **Nav Links/Buttons:** Small (`text-sm`), Medium (`font-medium`).

---

## 3. Layout Structure & Grid System
- **App Layout:** 100vw, 100vh (`w-full h-screen`), `overflow-hidden`, deep black background (`bg-brand-dark`).
- **Hero Wrapper:** Flex column, `relative z-10`, padding top to account for nav.
- **Top Navigation:** Absolute top (`absolute top-0 w-full`), padding `px-8 py-6`, flex justified between. Left logo: `FUTURE<span class="text-brand-cyan">.</span>`. Right links: Showcase, Technology, About, Contact.
- **Carousel Section:** Absolute center (`absolute inset-0 flex items-center justify-center pointer-events-none`). The carousel container allows pointer events (`pointer-events-auto`).

---

## 4. UI Components & Styling Details

### The Infinite 3D Card Carousel
The centerpiece is a stack of 5 cards. Only the active (centered) card is fully in focus, while the others are scaled down, pushed to the sides, and pushed backward in 3D space (`z-index`, `translateZ`, `rotateY`).

**Card Base Styling:**
- **Dimensions:** Width `340px`, Height `420px`.
- **Border Radius:** `rounded-3xl`
- **Material/Texture:** Glassmorphism using `backdrop-blur-xl`.
- **Borders:** Subtle colored borders (`border-[color]/30`).
- **Inner Glow/Reflection:** Absolute inset layer with `bg-gradient-to-b from-white/20 to-transparent mix-blend-overlay`.
- **Content Layout:** Flex column, `p-8`, `justify-between`.

### Card Thematic Configurations (Content & Video Assets)

**1. Spatial Computing**
- **Subtitle:** Next Gen UI
- **Glow Color:** `from-[#00f0ff]/20 to-[#8a2be2]/20` (Cyan to Purple)
- **Top Overlay Gradient:** `from-[#001a2c]` (Deep Cyan)
- **Video Asset:** `https://res.cloudinary.com/dprydfxok/video/upload/q_auto/f_auto/v1781493431/motion_video_3_pv2n96.mp4`

**2. Neuro Interface**
- **Subtitle:** Direct Link
- **Glow Color:** `from-[#8a2be2]/20 to-[#ff00a0]/20` (Purple to Magenta)
- **Top Overlay Gradient:** `from-[#1a0b2e]` (Deep Purple)
- **Video Asset:** `https://res.cloudinary.com/dprydfxok/video/upload/q_auto/f_auto/v1781493430/motion_video_4_hs3woo.mp4`

**3. Quantum Core**
- **Subtitle:** Processing
- **Glow Color:** `from-[#ff00a0]/20 to-[#ffaa00]/20` (Magenta to Orange)
- **Top Overlay Gradient:** `from-[#2e051f]` (Deep Magenta)
- **Video Asset:** `https://res.cloudinary.com/dprydfxok/video/upload/q_auto/f_auto/v1781493839/motion_video_5_etomqo.mp4`

**4. Holo Projector**
- **Subtitle:** Immersive
- **Glow Color:** `from-[#ffaa00]/20 to-[#00f0ff]/20` (Orange to Cyan)
- **Top Overlay Gradient:** `from-[#2e1d05]` (Deep Gold)
- **Video Asset:** `https://res.cloudinary.com/dprydfxok/video/upload/q_auto/f_auto/v1781493431/motion_video_2_q3cw0n.mp4`

**5. Synthetic Bio**
- **Subtitle:** Organic Tech
- **Glow Color:** `from-[#ffffff]/20 to-[#00f0ff]/20` (White to Cyan)
- **Top Overlay Gradient:** `from-[#052e2e]` (Deep Teal)
- **Video Asset:** `https://res.cloudinary.com/dprydfxok/video/upload/q_auto/f_auto/v1781493431/motion_video_1_egkayb.mp4`

### Video Background Implementation
- The video must act as the **absolute background** of the card (`absolute inset-0 w-full h-full object-cover z-0 rounded-3xl`).
- **Optimization:** Create a sub-component (`CardVideo`) that accepts an `isActive` boolean. Use a `useRef` to trigger `.play()` ONLY when `isActive` is true, and `.pause()` when false.
- **Gradient Overlay over Video:** To make text readable, overlay the video with a thematic gradient that is 100% solid at the top, transparent in the middle, and 50% solid at the bottom: 
  `bg-gradient-to-b [theme-color] from-30% via-transparent via-70% to-[theme-color]/60 mix-blend-multiply`

---

## 5. Animations & Micro-interactions

**Carousel Spring Physics (Framer Motion):**
- **Type:** `spring`
- **Stiffness:** `100`
- **Damping:** `20`
- **Mass:** `1`

**Card Positioning States (X, Z, RotateY, Scale, Opacity):**
- **Active (Center):** `x: 0, z: 100, scale: 1, rotateY: 0, opacity: 1, zIndex: 30`
- **Previous (Left):** `x: -320, z: 0, scale: 0.85, rotateY: 15, opacity: 0.6, zIndex: 20`
- **Next (Right):** `x: 320, z: 0, scale: 0.85, rotateY: -15, opacity: 0.6, zIndex: 20`
- **Hidden/Background:** `x: ±500, z: -100, scale: 0.7, rotateY: ±25, opacity: 0, zIndex: 10`

**Active Card Enhancements:**
- Active card gets a bright cyan drop shadow: `box-shadow: 0 25px 50px -12px rgba(0, 240, 255, 0.25)`
- Active video zooms slightly: `animate={{ scale: isActive ? 1.05 : 1 }} transition={{ duration: 0.5, ease: 'easeInOut' }}`

**Drag Interactions:**
- Users can drag cards horizontally (`drag="x"`).
- `dragConstraints={{ left: 0, right: 0 }}`, `dragElastic={0.2}`.
- Trigger index change on `onDragEnd` if `info.offset.x` exceeds `±50px`.
- Pause autoplay when `isDragging === true`.

**Autoplay:**
- Carousel auto-rotates every `4000ms` using `setInterval`.

**Bottom Button Hover:**
- The "Explore model" circular icon button scales to `1.1` and changes `backgroundColor` to `rgba(255,255,255,0.2)` on hover. Scales to `0.95` on tap.

---

## 6. Performance & Technical Optimizations
- **Video Playback Control:** Unfocused videos must explicitly call `.pause()` via a `useRef` hook. Only the centered card triggers `.play()`. This heavily optimizes GPU and CPU usage.
- **Render Opt:** `pointer-events-none` heavily utilized on overlapping overlays/glows so users can seamlessly click/drag the actual card.
- **Responsiveness:** Ensure scaling mechanisms work on tablet and mobile. On mobile, the `x` offset (e.g., `±320`) should be reduced to fit within the viewport width using a window size hook or responsive framer motion variants.
- **Accessibility:** Use proper semantic HTML, add aria-labels to the interactive drag carousel, and ensure contrast ratios are preserved via the dark gradient overlays on the videos.
- **SEO:** Use `<h1>` for the main title ("Digital Future"), and ensure meta tags describe an interactive 3D product showcase.

---
End of Specification. Ensure 100% adherence to all metrics, layout instructions, and visual tokens.

```
